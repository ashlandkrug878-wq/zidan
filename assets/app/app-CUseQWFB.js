(() => {
	// src/modules/health/model.js
	var HEALTH_MODULES = [
		"weight",
		"size",
		"period",
		"water"
	];
	var HEALTH_LABELS = {
		weight: "体重",
		size: "围度",
		period: "经期",
		water: "饮水"
	};
	var HEALTH_DIMS = {
		waist: "腰围",
		chest: "胸围",
		hip: "臀围",
		thigh: "大腿围",
		calf: "小腿围",
		back: "背宽"
	};
	function healthDefaults() {
		return {
			version: 1,
			profile: {
				height: null,
				age: null,
				sex: "",
				general: false
			},
			order: HEALTH_MODULES.slice(),
			hidden: [],
			cycleLength: null,
			waterGoal: {
				mode: "suggested",
				ml: null
			},
			records: {
				weight: [],
				size: [],
				period: [],
				water: []
			}
		};
	}
	function healthValidDate(s) {
		if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
		const d = /* @__PURE__ */ new Date(s + "T00:00:00Z");
		return Number.isFinite(+d) && d.toISOString().slice(0, 10) === s;
	}
	function healthDays(a, b) {
		return Math.round((Date.parse(b + "T00:00:00Z") - Date.parse(a + "T00:00:00Z")) / 864e5);
	}
	function healthAddDays(s, n) {
		return new Date(Date.parse(s + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
	}
	function healthNumber(n, min, max) {
		return typeof n === "number" && Number.isFinite(n) && n >= min && n <= max;
	}
	function healthRecordValid(k, r) {
		if (!r || typeof r.id !== "string" || !r.id || !healthValidDate(r.date)) return false;
		if (k === "weight") return healthNumber(r.value, 1, 500);
		if (k === "size") return r.values && Object.keys(HEALTH_DIMS).some((d) => healthNumber(r.values[d], .1, 300)) && Object.keys(r.values).every((d) => HEALTH_DIMS[d] && healthNumber(r.values[d], .1, 300));
		if (k === "water") return healthNumber(r.ml, 1, 1e4) && Number.isInteger(r.ml) && /^([01]\d|2[0-3]):[0-5]\d$/.test(r.time || "");
		return !r.end || healthValidDate(r.end) && r.end >= r.date;
	}
	function healthNormalize(raw) {
		const d = healthDefaults();
		if (raw == null) return d;
		if (typeof raw !== "object" || Array.isArray(raw) || raw.version && raw.version !== 1) throw new Error("健康备份格式不支持");
		const p = raw.profile || {};
		d.profile = {
			height: healthNumber(p.height, 50, 250) ? p.height : null,
			age: healthNumber(p.age, 1, 120) && Number.isInteger(p.age) ? p.age : null,
			sex: ["m", "f"].includes(p.sex) ? p.sex : "",
			general: p.general === true
		};
		const order = Array.isArray(raw.order) ? raw.order : [];
		d.order = [...new Set(order.filter((k) => HEALTH_MODULES.includes(k)))];
		d.order.push(...HEALTH_MODULES.filter((k) => !d.order.includes(k)));
		d.hidden = [...new Set((Array.isArray(raw.hidden) ? raw.hidden : []).filter((k) => HEALTH_MODULES.includes(k)))];
		d.cycleLength = healthNumber(raw.cycleLength, 1, 120) && Number.isInteger(raw.cycleLength) ? raw.cycleLength : null;
		if (raw.waterGoal && raw.waterGoal.mode === "manual") d.waterGoal = {
			mode: "manual",
			ml: healthNumber(raw.waterGoal.ml, 1, 1e4) && Number.isInteger(raw.waterGoal.ml) ? raw.waterGoal.ml : null
		};
		for (const k of HEALTH_MODULES) {
			const rows = raw.records && raw.records[k];
			if (rows !== void 0 && (!Array.isArray(rows) || rows.some((r) => !healthRecordValid(k, r)))) throw new Error("健康记录格式无效");
			const ids = /* @__PURE__ */ new Set();
			d.records[k] = (rows || []).map((r) => {
				if (ids.has(r.id)) throw new Error("健康记录编号重复");
				ids.add(r.id);
				const o = {
					id: r.id,
					date: r.date,
					note: typeof r.note === "string" ? r.note.slice(0, 1e3) : "",
					createdAt: Number.isFinite(r.createdAt) ? r.createdAt : 0
				};
				if (Number.isSafeInteger(r.updatedAt) && r.updatedAt > 0) o.updatedAt = r.updatedAt;
				if (k === "weight") o.value = r.value;
				if (k === "size") o.values = Object.assign({}, r.values);
				if (k === "water") {
					o.ml = r.ml;
					o.time = r.time;
				}
				if (k === "period") o.end = r.end || null;
				return o;
			});
		}
		return d;
	}
	function healthAdult(p) {
		return p.general === true && healthNumber(p.age, 18, 64);
	}
	function healthMetrics(p, weight) {
		const b = healthAdult(p) && healthNumber(p.height, 50, 250) && healthNumber(weight, 1, 500) ? weight / (p.height / 100) ** 2 : null;
		const energy = b !== null && ["m", "f"].includes(p.sex) ? 10 * weight + 6.25 * p.height - 5 * p.age + (p.sex === "m" ? 5 : -161) : null;
		return {
			bmi: b,
			ree: energy !== null && energy > 0 ? Math.round(energy / 10) * 10 : null
		};
	}
	function healthWaterTarget(h) {
		if (h.waterGoal.mode === "manual") return h.waterGoal.ml;
		return healthAdult(h.profile) ? h.profile.sex === "m" ? 1700 : h.profile.sex === "f" ? 1500 : null : null;
	}
	function healthSorted(rows) {
		return rows.slice().sort((a, b) => a.date.localeCompare(b.date) || (a.time || "").localeCompare(b.time || "") || (a.createdAt || 0) - (b.createdAt || 0));
	}
	function healthLatest(rows) {
		const a = healthSorted(rows);
		return a[a.length - 1] || null;
	}
	function healthDaily(rows, value) {
		const m = /* @__PURE__ */ new Map();
		healthSorted(rows).forEach((r) => {
			const v = value(r);
			if (v != null) m.set(r.date, v);
		});
		return [...m].map(([date, value]) => ({
			date,
			value
		}));
	}
	function healthWaterDays(h, today) {
		return Array.from({ length: 7 }, (_, i) => {
			const date = healthAddDays(today, i - 6), rows = h.records.water.filter((r) => r.date === date);
			return {
				date,
				value: rows.length ? rows.reduce((n, r) => n + r.ml, 0) : null
			};
		});
	}
	function healthForecast(h, today) {
		const last = healthLatest(h.records.period);
		if (!last) return null;
		const next = h.cycleLength ? healthAddDays(last.date, h.cycleLength) : null;
		return {
			last,
			next,
			remaining: next ? healthDays(today, next) : null,
			day: healthDays(last.date, today) + 1
		};
	}
	function healthPeriodError(rows, record, today) {
		if (!healthValidDate(record.date) || record.date > today) return "开始日期不能晚于今天";
		if (record.end && (!healthValidDate(record.end) || record.end < record.date || record.end > today)) return "结束日期应在开始日期与今天之间";
		return rows.some((r) => r.id !== record.id && r.date <= (record.end || today) && record.date <= (r.end || today)) ? "这段时间与已有经期重叠，请修改原记录" : "";
	}
	// src/modules/ledger/income-model.js
	function postMonthlyIncome(book, today) {
		if (!book) return false;
		const month = today.slice(0, 7);
		const [year, monthNumber] = month.split("-").map(Number);
		const lastDay = new Date(year, monthNumber, 0).getDate();
		let changed = false;
		for (const rule of book.rules) {
			if (!rule.active || month < rule.start) continue;
			if (book.posted.some((row) => row.rule === rule.id && row.month === month)) continue;
			const day = Math.min(rule.day, lastDay);
			const date = month + "-" + String(day).padStart(2, "0");
			if (date > today) continue;
			book.posted.push({
				rule: rule.id,
				month,
				date,
				name: rule.name,
				amount: rule.amount
			});
			changed = true;
		}
		return changed;
	}
	function validateIncome(book) {
		if (book === void 0) return;
		if (!book || !Array.isArray(book.rules) || !Array.isArray(book.posted)) throw Error("定期收入格式不正确");
		const ids = /* @__PURE__ */ new Set(), posted = /* @__PURE__ */ new Set();
		const monthFormat = /^\d{4}-(0[1-9]|1[012])$/;
		const validAmount = (value) => Number.isFinite(value) && value > 0 && value <= 999999999;
		for (const rule of book.rules) {
			if (!rule || typeof rule.id !== "string" || !rule.id || ids.has(rule.id) || typeof rule.name !== "string" || !validAmount(rule.amount) || !Number.isInteger(rule.day) || rule.day < 1 || rule.day > 31 || !monthFormat.test(rule.start) || typeof rule.active !== "boolean") throw Error("无效的收入规则");
			ids.add(rule.id);
		}
		for (const row of book.posted) {
			if (!row || !ids.has(row.rule) || !healthValidDate(row.date) || row.date.slice(0, 7) !== row.month || typeof row.name !== "string" || !validAmount(row.amount)) throw Error("无效的历史收入");
			const key = row.rule + "|" + row.month;
			if (posted.has(key)) throw Error("同一收入规则在本月重复入账");
			posted.add(key);
		}
	}
	// src/core/date.js
	function dkey(d) {
		return d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();
	}
	function parseKey(k) {
		const a = k.split(".").map(Number);
		return new Date(a[0], a[1] - 1, a[2]);
	}
	function effNow() {
		const n = /* @__PURE__ */ new Date();
		if (n.getHours() < 4) n.setDate(n.getDate() - 1);
		return n;
	}
	var TODAY = dkey(effNow());
	function addDaysK(k, n) {
		const d = parseKey(k);
		d.setDate(d.getDate() + n);
		return dkey(d);
	}
	var TOMORROW = addDaysK(TODAY, 1);
	function fmtKey(k) {
		const a = k.split(".");
		return a[1] + "月" + a[2] + "日";
	}
	function fmtShort(k) {
		const a = k.split(".");
		return a[1] + "." + a[2];
	}
	function weekCN(k) {
		return "周" + "日一二三四五六"[parseKey(k).getDay()];
	}
	function dayGroupTitle(k) {
		return fmtKey(k) + " · " + weekCN(k);
	}
	function key2iso(k) {
		const a = k.split(".").map(Number);
		return a[0] + "-" + String(a[1]).padStart(2, "0") + "-" + String(a[2]).padStart(2, "0");
	}
	function iso2key(s) {
		const a = s.split("-").map(Number);
		return a[0] + "." + a[1] + "." + a[2];
	}
	function nextMondayKey() {
		const d = parseKey(TODAY);
		d.setDate(d.getDate() + ((8 - d.getDay()) % 7 || 7));
		return dkey(d);
	}
	var WKMAP = {
		"一": 1,
		"二": 2,
		"三": 3,
		"四": 4,
		"五": 5,
		"六": 6,
		"日": 0,
		"天": 0
	};
	function upcomingWeekday(w) {
		const d = parseKey(TODAY);
		let diff = (w - d.getDay() + 7) % 7;
		if (!diff) diff = 7;
		d.setDate(d.getDate() + diff);
		return dkey(d);
	}
	function nextWeekWeekday(w) {
		const d = parseKey(TODAY);
		const mon = new Date(d);
		mon.setDate(d.getDate() - (d.getDay() + 6) % 7 + 7);
		mon.setDate(mon.getDate() + (w + 6) % 7);
		return dkey(mon);
	}
	function journalRange(text) {
		const line = String(text || "").trim().replace(/^今天\s*/, "");
		const start = line.match(/^((?:[01]?\d|2[0-3])[:：][0-5]\d)(?![\d:：])\s*/);
		if (!start) return null;
		const rest = line.slice(start[0].length);
		const adjacent = rest.match(/^[-–—~～至到]\s*((?:[01]?\d|2[0-3])[:：][0-5]\d)(?![\d:：])\s*[，,]?\s*(.+)$/);
		const spoken = adjacent ? null : rest.match(/^(?:开始)?(.+?)(?:一直到|打到|直到|持续到|至|到)\s*((?:[01]?\d|2[0-3])[:：][0-5]\d)[。！!]?\s*$/);
		if (!adjacent && !spoken) return null;
		const body = (adjacent ? adjacent[2] : spoken[1]).trim();
		if (!body || /《[^》]*$/.test(body)) return null;
		const clock = (t) => t.replace("：", ":").padStart(5, "0");
		return {
			startTime: clock(start[1]),
			endTime: clock(adjacent ? adjacent[1] : spoken[2]),
			body
		};
	}
	// src/modules/island/model.js
	function islandDefaults() {
		return {
			version: 4,
			enabled: true,
			seed: 0,
			daily: null,
			inbox: [],
			album: [],
			messages: []
		};
	}
	function islandNormalize(raw) {
		if (raw == null) return islandDefaults();
		if (!raw || typeof raw !== "object" || ![
			1,
			2,
			3,
			4
		].includes(raw.version)) throw Error("Unsupported island backup");
		const s = islandDefaults(), validDay = (n) => Number.isInteger(n) && n >= 0 && n < 2e5;
		if (typeof raw.enabled !== "boolean" || !Number.isInteger(raw.seed) || raw.seed < 0 || raw.seed > 4294967295 || !Array.isArray(raw.inbox) || !Array.isArray(raw.album)) throw Error("Invalid island backup");
		if (raw.inbox.length > 2e3 || raw.album.length > 2e3) throw Error("Invalid island size");
		s.enabled = raw.enabled;
		s.seed = raw.seed;
		const validId = (x) => typeof x === "string" && /^[a-z]+-[a-z0-9]+$/.test(x), seen = /* @__PURE__ */ new Set();
		for (const kind of ["album", "inbox"]) s[kind] = raw[kind].map((r) => {
			if (!r || !validId(r.id) || !validDay(r.day) || seen.has(r.id)) throw Error("Invalid postcard");
			if (kind === "album" && !validDay(r.collectedDay)) throw Error("Invalid collected date");
			seen.add(r.id);
			return kind === "album" ? {
				id: r.id,
				day: r.day,
				collectedDay: r.collectedDay
			} : {
				id: r.id,
				day: r.day
			};
		});
		if (raw.version >= 2 && raw.daily != null) {
			if (!validId(raw.daily.id) || !validDay(raw.daily.day) || !seen.has(raw.daily.id)) throw Error("Invalid daily postcard");
			s.daily = {
				day: raw.daily.day,
				id: raw.daily.id
			};
		}
		if (raw.version >= 3) {
			if (!Array.isArray(raw.messages) || raw.messages.length > 6e3) throw Error("Invalid messages");
			const ids = /* @__PURE__ */ new Set();
			s.messages = raw.messages.map((m) => {
				if (!m || typeof m.id !== "string" || m.id.length > 100 || ids.has(m.id) || !validDay(m.day) || typeof m.read !== "boolean") throw Error("Invalid message");
				if (m.deleted !== void 0 && (typeof m.deleted !== "boolean" || m.deleted && !m.read)) throw Error("Invalid deleted message");
				const deletion = m.deleted === void 0 ? {} : { deleted: m.deleted };
				ids.add(m.id);
				if (m.kind === "card") {
					if (!validId(m.cardId) || m.id !== "card:" + m.cardId || !seen.has(m.cardId)) throw Error("Invalid card message");
					return {
						id: m.id,
						kind: "card",
						cardId: m.cardId,
						day: m.day,
						read: m.read,
						...deletion
					};
				}
				if (m.kind !== "system" || !/^system:[a-z0-9-]+$/.test(m.id) || typeof m.title !== "string" || !m.title.trim() || m.title.length > 150 || typeof m.body !== "string" || !m.body.trim() || m.body.length > 6e3) throw Error("Invalid system message");
				return {
					id: m.id,
					kind: "system",
					day: m.day,
					read: m.read,
					title: m.title,
					body: m.body,
					...deletion
				};
			});
		}
		islandSyncMessages(s);
		return s;
	}
	function islandSyncMessages(s) {
		let changed = false;
		for (const [rows, read] of [[s.inbox, false], [s.album, true]]) for (const r of rows) if (!s.messages.some((m) => m.id === "card:" + r.id)) {
			s.messages.push({
				id: "card:" + r.id,
				kind: "card",
				cardId: r.id,
				day: r.day,
				read
			});
			changed = true;
		}
		return changed;
	}
	function islandSystemMessage(s, id, day, title, body) {
		if (s.messages.some((m) => m.id === id)) return false;
		s.messages.push({
			id,
			kind: "system",
			day,
			read: false,
			title,
			body
		});
		return true;
	}
	function islandReadMessage(s, id) {
		const m = s.messages.find((m) => m.id === id);
		if (!m || m.read) return false;
		m.read = true;
		return true;
	}
	function islandUnread(s) {
		return s.messages.filter((m) => !m.deleted && !m.read).length;
	}
	function islandVisibleMessages(s, kind = "all") {
		return s.messages.map((m, i) => ({
			...m,
			order: i
		})).filter((m) => !m.deleted && (kind === "all" || m.kind === kind)).sort((a, b) => Number(a.read) - Number(b.read) || b.day - a.day || b.order - a.order);
	}
	function islandDeleteRead(s) {
		let n = 0;
		for (const m of s.messages) if (m.read && !m.deleted) {
			m.deleted = true;
			n++;
		}
		return n;
	}
	function islandCollectAll(s, day) {
		const ids = s.inbox.slice().sort((a, b) => a.day - b.day).map((r) => r.id);
		let n = 0;
		for (const id of ids) if (islandCollect(s, id, day)) n++;
		return n;
	}
	function islandHash(str) {
		let h = 2166136261;
		for (let i = 0; i < str.length; i++) {
			h ^= str.charCodeAt(i);
			h = Math.imul(h, 16777619);
		}
		return h >>> 0;
	}
	function islandGrantDaily(s, day, roster, catalog, seed) {
		if (!Number.isInteger(day) || day < 0 || day >= 2e5) return false;
		if (s.daily && day <= s.daily.day) return false;
		if (!s.enabled) return false;
		const pool = catalog.filter((c) => c.id !== "abu-welcome" && c.requires.every((k) => roster.includes(k)));
		if (!pool.length) return false;
		if (!s.seed) s.seed = seed >>> 0 || 1;
		const known = new Set([...s.album, ...s.inbox].map((r) => r.id));
		const fresh = pool.filter((c) => !known.has(c.id));
		const choices = fresh.length ? fresh : pool;
		const card = choices[islandHash(s.seed + "|morning|" + day) % choices.length];
		if (!known.has(card.id)) {
			s.inbox.push({
				id: card.id,
				day
			});
			islandSyncMessages(s);
		}
		s.daily = {
			day,
			id: card.id
		};
		return true;
	}
	function islandCollect(s, id, day) {
		const i = s.inbox.findIndex((r) => r.id === id);
		if (i < 0) return false;
		islandSyncMessages(s);
		islandReadMessage(s, "card:" + id);
		if (!s.album.some((r) => r.id === id)) s.album.push({
			...s.inbox[i],
			collectedDay: Math.max(day, s.inbox[i].day)
		});
		s.inbox.splice(i, 1);
		return true;
	}
	// src/core/state.js
	var appState = {
		uid: 0,
		PAGES: {},
		SEEN: {},
		GCOLOR: {},
		NOTES: [],
		extraGroups: [
			"工作",
			"健康",
			"恋爱"
		],
		HEALTH: healthDefaults(),
		ISLAND: islandDefaults()
	};
	var SET = {
		recog: true,
		accent: 0
	};
	var P = () => appState.PAGES[TODAY];
	// src/core/events.js
	var listeners = /* @__PURE__ */ new Map();
	function emitLocalEvent(type, record) {
		const group = listeners.get(type);
		if (!group?.size) return;
		const event = Object.freeze({
			type,
			id: record.id,
			updatedAt: record.updatedAt
		});
		for (const listener of [...group]) try {
			listener(event);
		} catch (error) {
			console.error("Local event listener failed", error);
		}
	}
	// src/core/money.js
	var MC_NUM = "[¥￥]?\\s*\\d+(?:\\.\\d{1,2})?(?:\\s*[元块](?![以之]))?";
	var MC_RE = new RegExp(MC_NUM + "(?:\\s*[+＋]\\s*" + MC_NUM + ")+(?:\\s*[=＝]\\s*" + MC_NUM + ")?", "g");
	function moneyChains(t) {
		let chain = null;
		return {
			t: String(t || "").replace(MC_RE, (m, off, all) => {
				const pre = all.slice(Math.max(0, off - 8), off), post = all.slice(off + m.length);
				if (!(/[¥￥元块]/.test(m) || /(?:花了?|花费|付了?|付款|消费|支出|一共|总共|合计|共计|总计)\s*$/.test(pre)) || /^\s*[%个次天号点分秒岁年月周人小遍趟页张本件条斤公千万百kKwWhH]/.test(post)) return m;
				const parts = m.split(/[=＝]/), nums = (s) => (s.match(/\d+(?:\.\d{1,2})?/g) || []).map(Number);
				const sum = Math.round(nums(parts[0]).reduce((a, b) => a + b, 0) * 100) / 100;
				const said = parts.length > 1 && nums(parts[1]).length ? nums(parts[1])[0] : null;
				if (!chain) chain = {
					expr: nums(parts[0]).join("+"),
					sum,
					said
				};
				return "¥" + (said != null ? said : sum) + " ";
			}),
			chain
		};
	}
	function moneyOf(t, r) {
		const tp = moneyChains(t);
		if (tp.chain) r.chain = tp.chain;
		const prices = [], at = /* @__PURE__ */ new Set(), byVal = /* @__PURE__ */ new Map();
		let m;
		const take = (v, i, k) => {
			v = Math.round(parseFloat(v) * 100) / 100;
			if (at.has(i)) return;
			at.add(i);
			if (byVal.has(v) && byVal.get(v) !== k) return;
			byVal.set(v, k);
			prices.push(v);
		};
		const p1 = /[¥￥]\s*(\d+(?:\.\d{1,2})?)/g, p2 = /(\d+(?:\.\d{1,2})?)\s*[元块](?![以之])/g;
		while (m = p1.exec(tp.t)) take(m[1], m.index + m[0].length - m[1].length, "y");
		while (m = p2.exec(tp.t)) take(m[1], m.index, "u");
		const p3 = /(?:花了|花费|付了|一共花了?|总共花了?)\s*(\d+(?:\.\d{1,2})?)(?![\d.]|\s*[%个次天号点分秒岁年月周人小遍趟页张本件条斤公千万百kKwWhH])/g;
		while (m = p3.exec(tp.t)) take(m[1], m.index + m[0].length - m[1].length, "h");
		if (prices.length) r.prices = prices.slice(0, 8);
	}
	function amtSum(a) {
		return Math.round((a || []).reduce((s, v) => s + v, 0) * 100) / 100;
	}
	// src/core/record-metadata.js
	function expenseAmount(row) {
		if (!row.text || row.exp === "skip" || !row.exp && /到账|工资|收入|报销|退款|回款|收了|收到/.test(row.text)) return null;
		const parsed = {};
		moneyOf(row.text, parsed);
		return parsed.prices ? amtSum(parsed.prices) : null;
	}
	function visitRecords(state, visit) {
		for (const [day, page] of Object.entries(state.PAGES)) {
			function rows(list, path, parent) {
				(list || []).forEach((row, index) => {
					const position = path + "." + index;
					visit(row, "entry", day, position, parent);
					if (row.children) rows(row.children, position, row.id);
				});
			}
			rows(page.plan, "plan", "plan");
			rows(page.flow, "flow", "flow");
		}
		for (const [kind, rows] of Object.entries(state.HEALTH?.records || {})) rows.forEach((row, index) => visit(row, "health." + kind, row.date, String(index), kind));
	}
	function createRecordTracker() {
		let committed = /* @__PURE__ */ new Map(), pending = /* @__PURE__ */ new Map(), highWater = 0;
		function prepare(state, { restore = false, photoKey = (v) => v } = {}) {
			const next = /* @__PURE__ */ new Map(), stamp = Math.max(Date.now(), highWater + 1);
			visitRecords(state, (row, kind, day, path, parent) => {
				let id = row.id;
				if (id == null || id === "" || next.has(kind + ":" + id)) {
					const legacy = kind + ":" + day + ":" + (row._id ?? path);
					id = restore ? legacy : crypto.randomUUID?.() ?? "entry-" + Array.from(crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(4)), (n) => n.toString(16).padStart(8, "0")).join("");
					if (next.has(kind + ":" + id)) id += ":" + path;
					row.id = id;
				}
				const key = kind + ":" + id, old = restore ? void 0 : committed.get(key);
				const signature = JSON.stringify([
					day,
					parent,
					row
				], (k, v) => {
					if ([
						"_id",
						"id",
						"updatedAt",
						"_pc",
						"_imgPending",
						"imgt",
						"children"
					].includes(k)) return void 0;
					if (k === "images" && Array.isArray(v)) return v.map(photoKey);
					return v;
				});
				if (old && old.signature === signature) row.updatedAt = old.updatedAt;
				else if (!restore && pending.get(key)?.signature === signature) row.updatedAt = pending.get(key).updatedAt;
				else if (!restore) row.updatedAt = Math.max(stamp, Number(row.updatedAt) || 0);
				else if (!Number.isSafeInteger(row.updatedAt) || row.updatedAt <= 0) {
					const [y, m, d] = day.split(/[.-]/).map(Number);
					row.updatedAt = row.createdAt || Date.UTC(y, m - 1, d) || 1;
				}
				const amount = kind === "entry" && (!old || old.signature !== signature) ? expenseAmount(row) : old?.amount;
				next.set(key, {
					id,
					updatedAt: row.updatedAt,
					signature,
					kind,
					done: row.sym === "task" && row.state === "done",
					amount
				});
			});
			pending = next;
			return next;
		}
		function accept(next, notify = true) {
			const previous = committed;
			committed = next;
			for (const [key, row] of next) {
				highWater = Math.max(highWater, row.updatedAt);
				const old = previous.get(key);
				if (!notify || old?.signature === row.signature) continue;
				emitLocalEvent(row.kind === "entry" ? "entry.saved" : "health.logged", row);
				if (row.done && !old?.done) emitLocalEvent("todo.completed", row);
				if (row.amount != null && old?.amount == null) emitLocalEvent("ledger.added", row);
			}
		}
		return {
			prepare,
			accept
		};
	}
	// src/ui/illustrations.js
	var JJ = {
		nest: "assets/ui/b46d166960867a68.webp",
		check: "assets/ui/c115b4c108022fc5.webp",
		nap: "assets/ui/0425f92bd80dd461.webp",
		ask: "assets/ui/9878e4dd4bae6863.webp",
		night: "assets/ui/ce1ecaa64d1fdeab.webp",
		happy: "assets/ui/c84b6c8eec8cc2c3.webp",
		lock: "assets/ui/e4c23f6d26406601.webp",
		sort: "assets/ui/fe1b8c8e416d7a82.webp",
		oops: "assets/ui/6ff446542b79fe71.webp",
		h_food: "assets/ui/823f54907366aa0a.webp",
		h_movie: "assets/ui/99590152542fce53.webp",
		h_book: "assets/ui/150c0eebe6e0b241.webp",
		h_people: "assets/ui/7bccf5d2c59c01a7.webp",
		h_money: "assets/ui/dd5736b2a404b880.webp",
		h_someday: "assets/ui/1a181f25c4b10892.webp",
		h_cycles: "assets/ui/73a0083c06f82be5.webp",
		h_notes: "assets/ui/04769fe59f93d7bb.webp",
		h_vault: "assets/ui/d740b8852e6b662d.webp",
		h_work: "assets/ui/2c1ec19aaa79dc24.webp",
		h_study: "assets/ui/cfb1177ce29e894b.webp",
		h_fun: "assets/ui/a133d5aa4bc8d6bd.webp",
		h_post: "assets/ui/00251dccfb23bb52.webp",
		bg34: "assets/ui/5712bbac87c0d89c.webp",
		bg11: "assets/ui/189c43e5d375d05b.webp",
		bg916: "assets/ui/24fa3b2cc1474ac8.webp"
	};
	var OBIMG = {
		av_jj: "assets/ui/c005501caba9af8d.webp",
		av_qiao: "assets/ui/1d285b14555c4e6b.webp",
		av_cow: "assets/ui/5820ac153c4ba8ac.webp",
		av_capy: "assets/ui/a7591053d3b7508c.webp",
		av_jay: "assets/ui/b47740fd8216e757.webp",
		av_boar: "assets/ui/c8ab3863737bdc6f.webp",
		av_owl: "assets/ui/84a7bd08b64348f1.webp",
		av_badger: "assets/ui/dd5d65b644b378fd.webp",
		av_crab: "assets/ui/8ecc5b2a527f0256.webp",
		av_fox: "assets/ui/60584773cbbc6d4d.webp",
		av_mole: "assets/ui/17ad7d47e4f8c80d.webp",
		av_pelican: "assets/ui/15dedafe35bff811.webp",
		av_woodp: "assets/ui/88d9c6059246ff1a.webp",
		pt_pelican: "assets/ui/b24b410a16afbd31.webp",
		pt_woodp: "assets/ui/705b753d797a587c.webp",
		jj_stand: "assets/ui/f211c389431ef5d7.webp",
		ob_isle: "assets/ui/0d052e003b79b3f2.webp",
		jj_stamp: "assets/ui/de4e03307183a558.webp",
		jj_env: "assets/ui/a3fac65c054fcb3d.webp",
		sign: "assets/ui/bde1a39c28fcda7a.webp",
		ob_family: "assets/ui/ff4f36227c71d074.webp"
	};
	var WM = {
		d1: "M57.300000000000004 39.5 65.5 34.89999999999999 69.5 42.0 69.3 21.89999999999999 78.7 21.69999999999999 79.0 46.199999999999996 83.80000000000001 33.599999999999994 92.7 37.0 85.80000000000001 55.099999999999994 79.0 52.599999999999994 79.2 64.0 78.80000000000001 65.9 74.2 77.1 76.4 75.4 92.5 96.1 85.0 101.9 71.3 84.3 62.400000000000006 106.2 53.7 102.6 69.7 63.199999999999996 69.60000000000001 52.0 65.5 54.199999999999996ZM27.700000000000003 30.39999999999999 55.300000000000004 22.69999999999999 57.800000000000004 31.700000000000003 48.2 34.39999999999999H48.800000000000004V46.3L58.0 45.5L58.900000000000006 54.9L48.800000000000004 55.699999999999996V61.4L49.5 60.699999999999996L59.2 70.5L52.400000000000006 77.0L48.800000000000004 73.4V103.9H39.400000000000006V74.8L27.5 105.1L18.8 101.7L36.4 56.699999999999996L29.5 57.199999999999996L28.8 47.9L39.400000000000006 47.099999999999994V36.9L30.3 39.5ZM4.0 81.5 -0.6000000000000001 45.0 3.4000000000000004 39.699999999999996 20.8 37.199999999999996 26.200000000000003 42.0 26.0 80.5 21.5 85.1 8.9 85.6ZM12.9 76.0 16.7 75.9V47.4L9.4 48.4Z M153.3 39.5 161.5 34.89999999999999 165.5 42.0 165.3 21.89999999999999 174.7 21.69999999999999 175.0 46.199999999999996 179.8 33.599999999999994 188.7 37.0 181.8 55.099999999999994 175.0 52.599999999999994 175.2 64.0 174.8 65.9 170.2 77.1 172.4 75.4 188.5 96.1 181.0 101.9 167.3 84.3 158.4 106.2 149.7 102.6 165.7 63.199999999999996 165.60000000000002 52.0 161.5 54.199999999999996ZM123.7 30.39999999999999 151.3 22.69999999999999 153.8 31.700000000000003 144.2 34.39999999999999H144.8V46.3L154.0 45.5L154.9 54.9L144.8 55.699999999999996V61.4L145.5 60.699999999999996L155.2 70.5L148.4 77.0L144.8 73.4V103.9H135.4V74.8L123.5 105.1L114.8 101.7L132.4 56.699999999999996L125.5 57.199999999999996L124.8 47.9L135.4 47.099999999999994V36.9L126.3 39.5ZM100.0 81.5 95.4 45.0 99.4 39.699999999999996 116.8 37.199999999999996 122.2 42.0 122.0 80.5 117.5 85.1 104.9 85.6ZM108.9 76.0 112.7 75.9V47.4L105.4 48.4Z M230.9 30.299999999999997 268.8 29.39999999999999 273.7 34.0V50.5L269.4 55.3L251.8 56.9L250.9 47.5L264.2 46.3V38.9L224.2 40.0H224.1L209.9 40.3L209.2 59.099999999999994H270.5L275.3 63.4L278.7 95.4L275.9 100.1L258.9 107.6L255.2 99.0L268.9 92.9L266.3 68.5H204.2L199.5 63.6L200.8 35.39999999999999L205.3 30.89999999999999L219.2 30.599999999999994L226.3 20.5L233.9 25.89999999999999ZM234.9 57.5 226.4 46.599999999999994 233.8 40.8 242.4 51.8ZM233.7 89.8 247.9 89.1 246.9 77.0 256.3 76.3 257.7 93.3 253.2 98.3 202.4 100.5 197.4 95.5 198.9 75.0 208.4 75.6 207.3 90.9 224.1 90.2 226.0 73.3 235.4 74.4Z",
		d2: "M320.632 101.054Q318.338 101.054 316.35400000000004 100.40299999999999Q314.37 99.752 312.913 98.884Q311.456 98.016 310.588 97.241Q309.72 96.466 309.472 96.218Q308.666 95.412 308.077 94.637Q307.488 93.862 307.488 92.87Q307.488 92.064 307.953 91.16499999999999Q308.418 90.266 309.286 89.336Q310.216 88.406 311.053 87.941Q311.89 87.476 312.696 87.476Q313.812 87.476 314.649 88.158Q315.486 88.84 316.416 89.77Q316.788 90.018 317.408 90.452Q318.028 90.886 318.896 91.227Q319.764 91.568 320.942 91.568Q322.306 91.568 323.36 91.10300000000001Q324.414 90.638 325.12699999999995 89.739Q325.84 88.84 326.212 87.631Q326.584 86.422 326.584 84.996V62.428Q326.584 61.126 326.832 59.917Q327.08 58.708 328.10299999999995 57.964Q329.126 57.22 331.42 57.22Q333.652 57.22 334.582 57.902Q335.512 58.584 335.76 59.7Q336.008 60.816 336.008 61.994V85.43Q336.008 88.716 334.892 91.568Q333.776 94.42 331.699 96.52799999999999Q329.622 98.636 326.80100000000004 99.845Q323.98 101.054 320.632 101.054Z M357.654 101.054Q354.73999999999995 101.054 351.85699999999997 99.90700000000001Q348.974 98.76 346.61799999999994 96.652Q344.26199999999994 94.544 342.89799999999997 91.59899999999999Q341.534 88.654 341.534 85.05799999999999Q341.534 81.71000000000001 342.774 78.827Q344.01399999999995 75.944 346.246 73.712Q348.47799999999995 71.48 351.361 70.209Q354.24399999999997 68.938 357.53 68.938Q361.99399999999997 68.938 365.621 71.077Q369.248 73.21600000000001 371.418 76.874Q373.58799999999997 80.532 373.58799999999997 84.996Q373.58799999999997 88.778 372.193 91.72300000000001Q370.79799999999994 94.668 368.47299999999996 96.77600000000001Q366.14799999999997 98.884 363.327 99.969Q360.506 101.054 357.654 101.054ZM357.53 91.69200000000001Q359.018 91.69200000000001 360.568 90.94800000000001Q362.118 90.20400000000001 363.172 88.71600000000001Q364.226 87.228 364.226 84.934Q364.226 82.95 363.35799999999995 81.462Q362.48999999999995 79.974 360.971 79.137Q359.452 78.3 357.46799999999996 78.3Q355.60799999999995 78.3 354.15099999999995 79.168Q352.69399999999996 80.036 351.79499999999996 81.555Q350.89599999999996 83.074 350.89599999999996 84.996Q350.89599999999996 87.228 351.919 88.747Q352.94199999999995 90.266 354.49199999999996 90.97900000000001Q356.042 91.69200000000001 357.53 91.69200000000001Z M394.366 100.558Q391.204 100.558 388.94100000000003 99.876Q386.678 99.194 385.19 97.768Q383.702 96.342 382.98900000000003 94.14099999999999Q382.276 91.94 382.276 88.902V78.982H380.106Q378.308 78.92 377.595 77.89699999999999Q376.882 76.874 376.882 74.456Q376.882 72.224 377.75 71.13900000000001Q378.618 70.054 380.354 70.054H382.276V63.73Q382.276 62.49 382.493 61.498000000000005Q382.71 60.506 383.702 59.855000000000004Q384.69399999999996 59.204 386.926 59.204Q389.158 59.204 390.15 59.885999999999996Q391.142 60.568 391.359 61.622Q391.57599999999996 62.676 391.57599999999996 63.916V69.93L395.72999999999996 69.806Q396.908 69.806 397.962 70.023Q399.01599999999996 70.24000000000001 399.698 71.232Q400.38 72.224 400.38 74.518Q400.38 76.626 399.729 77.618Q399.078 78.61 398.024 78.88900000000001Q396.96999999999997 79.168 395.72999999999996 79.168L391.57599999999996 79.044V88.53Q391.57599999999996 89.522 391.731 90.173Q391.88599999999997 90.824 392.19599999999997 91.134Q392.506 91.444 393.06399999999996 91.56800000000001Q393.62199999999996 91.69200000000001 394.428 91.69200000000001Q395.792 91.69200000000001 396.846 91.94Q397.9 92.188 398.489 93.05600000000001Q399.078 93.924 399.078 95.97Q399.078 98.202 398.39599999999996 99.194Q397.714 100.186 396.629 100.37200000000001Q395.544 100.558 394.366 100.558Z M421.53 100.496Q418.49199999999996 100.496 416.198 99.194Q414.89599999999996 98.574 413.90399999999994 97.582V97.768Q413.59399999999994 99.194 412.602 99.876Q411.60999999999996 100.558 409.43999999999994 100.558Q407.20799999999997 100.558 406.21599999999995 99.876Q405.22399999999993 99.194 405.00699999999995 98.10900000000001Q404.78999999999996 97.024 404.78999999999996 95.846V60.196Q404.78999999999996 58.894 405.03799999999995 57.84Q405.28599999999994 56.786 406.24699999999996 56.135000000000005Q407.20799999999997 55.484 409.50199999999995 55.484Q411.734 55.484 412.664 56.166Q413.59399999999994 56.848 413.78 57.933Q413.96599999999995 59.018 413.90399999999994 60.196V72.47200000000001Q414.95799999999997 71.542 416.25999999999993 70.798Q418.49199999999996 69.62 421.53 69.62Q424.258 69.62 426.83099999999996 70.86Q429.40399999999994 72.1 431.3879999999999 74.239Q433.37199999999996 76.378 434.51899999999995 79.137Q435.66599999999994 81.896 435.66599999999994 84.934Q435.66599999999994 88.096 434.51899999999995 90.917Q433.37199999999996 93.738 431.3879999999999 95.908Q429.40399999999994 98.078 426.86199999999997 99.287Q424.31999999999994 100.496 421.53 100.496ZM420.22799999999995 91.32Q421.96399999999994 91.32 423.328 90.483Q424.69199999999995 89.646 425.529 88.22Q426.366 86.794 426.366 85.05799999999999Q426.366 83.26 425.55999999999995 81.86500000000001Q424.75399999999996 80.47 423.39 79.664Q422.02599999999995 78.858 420.28999999999996 78.858Q418.616 78.858 417.221 79.664Q415.82599999999996 80.47 415.05099999999993 81.86500000000001Q414.27599999999995 83.26 414.27599999999995 85.05799999999999Q414.27599999999995 86.794 415.082 88.22Q415.888 89.646 417.25199999999995 90.483Q418.616 91.32 420.22799999999995 91.32Z M445.78 100.558Q443.486 100.558 442.525 99.90700000000001Q441.56399999999996 99.256 441.347 98.17099999999999Q441.12999999999994 97.086 441.12999999999994 95.908V74.27Q441.12999999999994 73.03 441.347 71.976Q441.56399999999996 70.922 442.5559999999999 70.271Q443.54799999999994 69.62 445.842 69.62Q448.07399999999996 69.62 449.03499999999997 70.302Q449.996 70.98400000000001 450.21299999999997 72.03800000000001Q450.42999999999995 73.092 450.42999999999995 74.394V95.97Q450.42999999999995 97.148 450.21299999999997 98.233Q449.996 99.318 449.03499999999997 99.938Q448.07399999999996 100.558 445.78 100.558ZM445.78 65.094Q443.424 65.094 442.43199999999996 64.41199999999999Q441.43999999999994 63.73 441.22299999999996 62.614Q441.006 61.498 441.006 60.258Q441.006 58.956 441.25399999999996 57.871Q441.50199999999995 56.786 442.49399999999997 56.135000000000005Q443.486 55.484 445.842 55.484Q448.13599999999997 55.484 449.12799999999993 56.166Q450.11999999999995 56.848 450.337 57.964Q450.554 59.08 450.554 60.32Q450.554 61.56 450.337 62.676Q450.11999999999995 63.792 449.12799999999993 64.443Q448.13599999999997 65.094 445.78 65.094Z M461.474 100.558Q459.18 100.558 458.219 99.90700000000001Q457.258 99.256 457.04099999999994 98.14Q456.82399999999996 97.024 456.82399999999996 95.846V74.208Q456.82399999999996 72.968 457.072 71.914Q457.32 70.86 458.28099999999995 70.209Q459.24199999999996 69.55799999999999 461.536 69.55799999999999Q463.70599999999996 69.55799999999999 464.667 70.14699999999999Q465.628 70.736 465.876 71.48Q466.0 71.914 466.06199999999995 72.286Q466.62 71.666 467.488 70.922Q468.418 70.24000000000001 469.751 69.744Q471.084 69.248 472.82 69.248Q473.50199999999995 69.248 474.33899999999994 69.34100000000001Q475.176 69.434 476.075 69.713Q476.974 69.992 477.71799999999996 70.457Q478.462 70.922 478.927 71.604Q479.392 72.286 479.392 73.27799999999999Q479.392 75.82 478.214 77.58699999999999Q477.036 79.354 475.238 79.354Q474.18399999999997 79.354 473.75 79.168Q473.316 78.982 473.037 78.79599999999999Q472.758 78.61 472.38599999999997 78.455Q472.014 78.3 471.022 78.3Q470.092 78.3 469.255 78.548Q468.418 78.79599999999999 467.705 79.323Q466.99199999999996 79.85 466.58899999999994 80.625Q466.186 81.4 466.186 82.33V95.97Q466.186 97.148 465.969 98.233Q465.752 99.318 464.76 99.938Q463.768 100.558 461.474 100.558Z M497.318 100.496Q494.52799999999996 100.496 491.955 99.287Q489.382 98.078 487.398 95.908Q485.414 93.738 484.267 90.917Q483.12 88.096 483.12 84.934Q483.12 81.896 484.267 79.137Q485.414 76.378 487.429 74.239Q489.44399999999996 72.1 491.986 70.86Q494.52799999999996 69.62 497.318 69.62Q500.294 69.62 502.58799999999997 70.798Q503.828 71.48 504.882 72.47200000000001V60.196Q504.882 59.018 505.03700000000003 57.933Q505.192 56.848 506.12199999999996 56.166Q507.05199999999996 55.484 509.346 55.484Q511.64 55.484 512.601 56.135000000000005Q513.562 56.786 513.779 57.84Q513.996 58.894 513.996 60.134V95.846Q513.996 97.024 513.779 98.10900000000001Q513.562 99.194 512.601 99.876Q511.64 100.558 509.40799999999996 100.558Q507.29999999999995 100.558 506.246 99.876Q505.192 99.194 504.882 97.768V97.644Q503.89 98.574 502.712 99.194Q500.418 100.496 497.318 100.496ZM498.558 91.32Q500.23199999999997 91.32 501.56499999999994 90.483Q502.89799999999997 89.646 503.735 88.22Q504.572 86.794 504.572 85.05799999999999Q504.572 83.26 503.76599999999996 81.86500000000001Q502.96 80.47 501.596 79.664Q500.23199999999997 78.858 498.496 78.858Q496.822 78.858 495.427 79.664Q494.032 80.47 493.25699999999995 81.86500000000001Q492.48199999999997 83.26 492.48199999999997 85.05799999999999Q492.48199999999997 86.794 493.288 88.22Q494.094 89.646 495.52 90.483Q496.94599999999997 91.32 498.558 91.32Z",
		vb: "-12.6 8.5 538.6 111.1",
		ratio: 4.8479
	};
	var HEAD_ART = {
		"post": "assets/ui/01c3ac6e05a90796.webp",
		"food": "assets/ui/198948363f1616ca.webp",
		"movie": "assets/ui/1b8382647d988759.webp",
		"book": "assets/ui/aca781211c4643ac.webp",
		"people": "assets/ui/df389b0952f31a4d.webp",
		"money": "assets/ui/15f5381e0c173d4d.webp",
		"cycles": "assets/ui/42bda3d0cf8a9a22.webp",
		"notes": "assets/ui/e9e6f83fce751373.webp",
		"vault": "assets/ui/2835141d30874e1c.webp",
		"work": "assets/ui/df98b9eb5e0e5a46.webp",
		"someday": "assets/ui/4e1f94c22758e577.webp",
		"fun": "assets/ui/f935a812eb5ce5dc.webp",
		"study": "assets/ui/b595bb4029d0f8ba.webp",
		"health": "assets/ui/699792c2d5f4bc3d.webp"
	};
	JJ.h_health = HEAD_ART.health;
	HEAD_ART.abu = "assets/ui/abu-house.webp";
	JJ.h_abu = HEAD_ART.abu;
	var HOUSE_INFO = {
		post: {
			name: "信风邮局",
			who: "啾啾",
			line: "想翻哪天的记录，点日历看看。"
		},
		food: {
			name: "海边饭馆",
			who: "阿饱",
			line: "好吃的、想吃的店，都可以记在这里。"
		},
		movie: {
			name: "小岛影院",
			who: "阿影",
			line: "看完记个片名，顺手打个分。"
		},
		book: {
			name: "小岛书屋",
			who: "酥酥",
			line: "读到想留的一句，就摘下来。"
		},
		people: {
			name: "小岛茶屋",
			who: "团团",
			line: "收录一个人，再翻翻和对方有关的事。"
		},
		money: {
			name: "铜板账房",
			who: "小铜板",
			line: "记花销时带上金额，这里能一起算。"
		},
		cycles: {
			name: "滴答钟楼",
			who: "笃笃",
			line: "生日、还款日和固定安排，都可以在这里设提醒。"
		},
		notes: {
			name: "记事小亭",
			who: "阿鼠",
			line: "零碎念头先放架子上，想写长文时再挑出来。"
		},
		vault: {
			name: "秘屋树洞",
			who: "松松",
			line: "Wi-Fi、会员账号这些，用主口令锁好。"
		},
		work: {
			name: "大力工坊",
			who: "大力",
			line: "记下项目进度，写周报时点「报告」整理。"
		},
		study: {
			name: "海风学堂",
			who: "翘翘",
			line: "课堂重点、错题和考试日子，放这里一起找。"
		},
		someday: {
			name: "心愿灯塔",
			who: "阿兜",
			line: "暂时顾不上的先放我这儿，想做时点「今天做」。"
		},
		fun: {
			name: "温泉汤屋",
			who: "小卡",
			line: "看展、唱歌、出去玩，回来记两句。"
		},
		health: {
			name: "晨露小站",
			who: "呦呦",
			line: "体重、围度、经期、喝水，想记哪项就记哪项。"
		}
	};
	HOUSE_INFO.abu = {
		name: "岛主小筑",
		who: "阿卜",
		line: "你的那本手记，就放在靠窗的抽屉里。"
	};
	// src/ui/icons.js
	function houseMark(key) {
		const image = JJ["h_" + key];
		return image ? "<img class=\"house-mark\" data-mark=\"" + key + "\" src=\"" + image + "\" alt=\"\">" : "";
	}
	var strokes = {
		more: "M4 12h1 M11.5 12h1 M19 12h1",
		camera: "M3 7h4l2-3h6l2 3h4v13H3z M16 13a4 4 0 1 0-8 0 4 4 0 0 0 8 0",
		trash: "M3 6h18 M9 6V3h6v3 M6 6l1 15h10l1-15 M10 10v7 M14 10v7",
		undo: "M9 4L3 10l6 6 M4 10h10a6 6 0 0 1 6 6v3",
		group: "M9 3L6 21 M17 3l-3 18 M3 9h18 M2 15h18",
		nest: "M3 5v9h17 M15 9l5 5-5 5",
		unnest: "M21 5v9H4 M9 9l-5 5 5 5",
		time: "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0 M12 5v7l4 2",
		calendar: "M3 5h18v16H3z M3 10h18 M7 3v5 M17 3v5"
	};
	function lineIcon(key) {
		return "<svg class=\"line-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"" + strokes[key] + "\"/></svg>";
	}
	// src/core/records.js
	function walkPage(date, cb) {
		const rec = (list) => list.forEach((e) => {
			cb(e);
			if (e.children) rec(e.children);
		});
		rec(appState.PAGES[date].plan);
		rec(appState.PAGES[date].flow);
	}
	var WALK_SIG = "";
	var WALK_KEYS = [];
	function pagesDesc() {
		const ks = Object.keys(appState.PAGES), sig = ks.join("|");
		if (sig !== WALK_SIG) {
			WALK_SIG = sig;
			WALK_KEYS = ks.map((k) => {
				const a = k.split(".");
				return [k, +a[0] * 1e4 + +a[1] * 100 + +a[2]];
			}).sort((x, y) => y[1] - x[1]).map((x) => x[0]);
		}
		return WALK_KEYS;
	}
	function walk(cb) {
		pagesDesc().forEach((d) => walkPage(d, (e) => cb(d, e)));
	}
	function walkWithParent(cb) {
		pagesDesc().forEach((k) => {
			const rec = (list, parent) => list.forEach((e) => {
				cb(k, e, parent);
				if (e.children) rec(e.children, e);
			});
			rec(appState.PAGES[k].plan, null);
			rec(appState.PAGES[k].flow, null);
		});
	}
	// src/ui/dom.js
	var $ = (s) => document.querySelector(s);
	var escAttr = (s) => String(s || "").replace(/"/g, "&quot;");
	var view = $("#view");
	var topTitle = $("#topTitle");
	var reviewBtn = $("#reviewBtn");
	var toolbar = $("#toolbar");
	function vEsc(x) {
		return String(x || "").replace(/[<>&"]/g, (c) => ({
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			"\"": "&quot;"
		})[c]);
	}
	var releaseGuard;
	function guardHoldRelease(pointerId) {
		releaseGuard?.abort();
		const guard = new AbortController();
		releaseGuard = guard;
		const capture = {
			capture: true,
			signal: guard.signal
		};
		const finish = () => {
			guard.abort();
			if (releaseGuard === guard) releaseGuard = null;
		};
		for (const event of [
			"pointerdown",
			"touchstart",
			"keydown",
			"pagehide"
		]) window.addEventListener(event, finish, capture);
		window.addEventListener("touchend", (ev) => {
			if (ev.cancelable) ev.preventDefault();
		}, {
			...capture,
			passive: false
		});
		window.addEventListener("pointerup", (ev) => {
			if (ev.pointerId === pointerId) ev.stopPropagation();
		}, capture);
		window.addEventListener("contextmenu", (ev) => ev.preventDefault(), capture);
		window.addEventListener("click", (ev) => {
			if (ev.detail === 0 && !ev.pointerType && !ev.clientX && !ev.clientY) {
				finish();
				return;
			}
			ev.preventDefault();
			ev.stopImmediatePropagation();
			finish();
		}, capture);
	}
	function bindRecordHold(row, open, delay = 550) {
		let timer, startX, startY;
		const cancel = () => clearTimeout(timer);
		row.addEventListener("pointerdown", (ev) => {
			cancel();
			const taskSymbol = ev.target.closest(".entry.task > .sym");
			if (!ev.isPrimary || ev.button !== 0 || taskSymbol && taskSymbol !== row) return;
			if (ev.target.matches(".line-input") && document.activeElement === ev.target) return;
			startX = ev.clientX;
			startY = ev.clientY;
			timer = setTimeout(() => {
				guardHoldRelease(ev.pointerId);
				if (ev.target.matches(".line-input")) ev.target.blur();
				open();
			}, delay);
		});
		row.addEventListener("pointermove", (ev) => {
			if (Math.abs(ev.clientX - startX) + Math.abs(ev.clientY - startY) > 12) cancel();
		});
		for (const event of [
			"pointercancel",
			"pointerup",
			"pointerleave"
		]) row.addEventListener(event, cancel);
	}
	// src/core/platform.js
	var platform = {
		get storage() {
			return window.localStorage;
		},
		get images() {
			return window.indexedDB;
		},
		get clipboard() {
			return navigator.clipboard;
		},
		canShare(files) {
			return navigator.canShare?.({ files }) || false;
		},
		share(files) {
			return navigator.share({ files });
		},
		get geolocation() {
			return navigator.geolocation;
		},
		requestPersistentStorage() {
			return navigator.storage?.persist?.();
		},
		createFileReader() {
			return new FileReader();
		},
		download(blob, filename) {
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);
			link.download = filename;
			link.click();
			setTimeout(() => URL.revokeObjectURL(link.href), 4e3);
		},
		onVisibilityChange(handler) {
			document.addEventListener("visibilitychange", handler);
		},
		onPageHide(handler) {
			window.addEventListener("pagehide", handler);
		},
		registerWorker() {
			if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./sw.js").catch(() => {});
		}
	};
	// src/core/lunar.js
	var LUNAR_INFO = [
		19416,
		19168,
		42352,
		21717,
		53856,
		55632,
		91476,
		22176,
		39632,
		21970,
		19168,
		42422,
		42192,
		53840,
		119381,
		46400,
		54944,
		44450,
		38320,
		84343,
		18800,
		42160,
		46261,
		27216,
		27968,
		109396,
		11104,
		38256,
		21234,
		18800,
		25958,
		54432,
		59984,
		92821,
		23248,
		11104,
		100067,
		37600,
		116951,
		51536,
		54432,
		120998,
		46416,
		22176,
		107956,
		9680,
		37584,
		53938,
		43344,
		46423,
		27808,
		46416,
		86869,
		19872,
		42416,
		83315,
		21168,
		43432,
		59728,
		27296,
		44710,
		43856,
		19296,
		43748,
		42352,
		21088,
		62051,
		55632,
		23383,
		22176,
		38608,
		19925,
		19152,
		42192,
		54484,
		53840,
		54616,
		46400,
		46752,
		103846,
		38320,
		18864,
		43380,
		42160,
		45690,
		27216,
		27968,
		44870,
		43872,
		38256,
		19189,
		18800,
		25776,
		29859,
		59984,
		27480,
		23232,
		43872,
		38613,
		37600,
		51552,
		55636,
		54432,
		55888,
		30034,
		22176,
		43959,
		9680,
		37584,
		51893,
		43344,
		46240,
		47780,
		44368,
		21977,
		19360,
		42416,
		86390,
		21168,
		43312,
		31060,
		27296,
		44368,
		23378,
		19296,
		42726,
		42208,
		53856,
		60005,
		54576,
		23200,
		30371,
		38608,
		19195,
		19152,
		42192,
		118966,
		53840,
		54560,
		56645,
		46496,
		22224,
		21938,
		18864,
		42359,
		42160,
		43600,
		111189,
		27936,
		44448,
		84835,
		37744,
		18936,
		18800,
		25776,
		92326,
		59984,
		27296,
		108228,
		43744,
		37600,
		53987,
		51552,
		54615,
		54432,
		55888,
		23893,
		22176,
		42704,
		21972,
		21200,
		43448,
		43344,
		46240,
		46758,
		44368,
		21920,
		43940,
		42416,
		21168,
		45683,
		26928,
		29495,
		27296,
		44368,
		84821,
		19296,
		42352,
		21732,
		53600,
		59752,
		54560,
		55968,
		92838,
		22224,
		19168,
		43476,
		41680,
		53584,
		62034,
		54560
	];
	function lLeapMonth(y) {
		return LUNAR_INFO[y - 1900] & 15;
	}
	function lLeapDays(y) {
		return lLeapMonth(y) ? LUNAR_INFO[y - 1900] & 65536 ? 30 : 29 : 0;
	}
	function lMonthDays(y, m) {
		return LUNAR_INFO[y - 1900] & 65536 >> m ? 30 : 29;
	}
	function lYearDays(y) {
		let s2 = 348;
		for (let i = 32768; i > 8; i >>= 1) if (LUNAR_INFO[y - 1900] & i) s2++;
		return s2 + lLeapDays(y);
	}
	function lunarToSolar(ly, lm, ld) {
		if (ly < 1900 || ly > 2099 || lm < 1 || lm > 12 || ld < 1 || ld > 30) return null;
		let off = 0;
		for (let y = 1900; y < ly; y++) off += lYearDays(y);
		const leap = lLeapMonth(ly);
		for (let m = 1; m < lm; m++) {
			off += lMonthDays(ly, m);
			if (m === leap) off += lLeapDays(ly);
		}
		off += Math.min(ld, lMonthDays(ly, lm)) - 1;
		const t = new Date(1900, 0, 31);
		t.setDate(t.getDate() + off);
		return t;
	}
	function solarToLunar(d) {
		const base = new Date(1900, 0, 31);
		let off = Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - base) / 864e5);
		if (off < 0) return null;
		let ly = 1900;
		for (; ly <= 2100; ly++) {
			const yd = lYearDays(ly);
			if (off < yd) break;
			off -= yd;
		}
		if (ly > 2100) return null;
		const leap = lLeapMonth(ly);
		let lm = 1, isLeap = false;
		for (;;) {
			const dm = isLeap ? lLeapDays(ly) : lMonthDays(ly, lm);
			if (off < dm) break;
			off -= dm;
			if (!isLeap && lm === leap) isLeap = true;
			else {
				isLeap = false;
				if (++lm > 12) break;
			}
		}
		return {
			ly,
			lm,
			ld: off + 1,
			leap: isLeap
		};
	}
	var LM_NM = [
		"正",
		"二",
		"三",
		"四",
		"五",
		"六",
		"七",
		"八",
		"九",
		"十",
		"冬",
		"腊"
	];
	function lDayNm(d) {
		if (d === 10) return "初十";
		if (d === 20) return "二十";
		if (d === 30) return "三十";
		const dig = "一二三四五六七八九"[d % 10 - 1];
		return (d < 10 ? "初" : d < 20 ? "十" : "廿") + dig;
	}
	function lunarLabel(lm, ld) {
		return "农历" + LM_NM[lm - 1] + "月" + lDayNm(ld);
	}
	function lunarNextK(lm, ld, fromK) {
		const fy = +fromK.split(".")[0], from = parseKey(fromK);
		let best = null;
		for (let ly = fy - 1; ly <= fy + 1; ly++) {
			const t = lunarToSolar(ly, lm, ld);
			if (t && t >= from && (!best || t < best)) best = t;
		}
		return best ? dkey(best) : null;
	}
	// src/modules/journal/stamps.js
	function modOn(k) {
		return SET.mods[k] !== false;
	}
	var STAMP_PRESETS = [
		"充实高效",
		"平淡安稳",
		"小有波折但收尾顺利",
		"彻底放空",
		"小有收获"
	];
	function stampSheet(k) {
		const S = $("#gsheet");
		const all = STAMP_PRESETS.concat((SET.stamps || []).filter((x) => !STAMP_PRESETS.includes(x)));
		const cur0 = appState.PAGES[k] && appState.PAGES[k].stamp || null;
		S.innerHTML = "<div class=\"gs-title\">给 " + fmtKey(k) + " 盖个章</div><div class=\"gs-chips\">" + all.map((x) => "<button class=\"gs-chip" + (cur0 === x ? " on" : "") + "\" data-s=\"" + escAttr(x) + "\">" + vEsc(x) + "</button>").join("") + "</div><input class=\"vt-in\" id=\"stNew\" placeholder=\"或自己刻一个（会存进你的章库）\"><div style=\"display:flex;gap:10px\"><button class=\"rv-confirm\" id=\"stSave\" style=\"flex:1\">盖章</button>" + (cur0 ? "<button class=\"rv-confirm\" id=\"stClear\" style=\"flex:.6;background:var(--bg-deep);color:var(--ink)\">取消章</button>" : "") + "</div>";
		let sel = cur0;
		S.querySelectorAll("[data-s]").forEach((b) => b.onclick = () => {
			sel = b.dataset.s;
			S.querySelectorAll("[data-s]").forEach((x) => x.classList.toggle("on", x === b));
		});
		$("#stSave").onclick = () => {
			const nv = $("#stNew").value.trim();
			const v2 = nv || sel;
			if (!v2) {
				toast("挑一个，或自己刻一个");
				return;
			}
			if (nv && !STAMP_PRESETS.includes(nv) && !SET.stamps.includes(nv)) SET.stamps.push(nv);
			if (!appState.PAGES[k]) appState.PAGES[k] = {
				plan: [],
				flow: []
			};
			appState.PAGES[k].stamp = v2;
			scheduleSave();
			closeSheet();
			render();
			toast("已盖章 · " + v2);
		};
		const sc0 = S.querySelector("#stClear");
		if (sc0) sc0.onclick = () => {
			delete appState.PAGES[k].stamp;
			scheduleSave();
			closeSheet();
			render();
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function initializeJournal() {
		SET.mods = SET.mods || {};
		if (SET.mods.meals === void 0) SET.mods.meals = false;
		if (SET.mods.smartbar === void 0) SET.mods.smartbar = false;
		if (SET.mods.meals !== true && !SET.mealsUserOff && foodGroupName()) SET.mods.meals = true;
		if (SET.mods.ledger === void 0) SET.mods.ledger = false;
		SET.stamps = SET.stamps || [];
	}
	// src/modules/food/meals.js
	var MEAL_ORDER = [
		"bre",
		"lun",
		"tea",
		"sup",
		"din"
	];
	var MEAL_RES = {
		bre: /早饭|早餐|早上吃/,
		lun: /午饭|午餐|中午吃|中午点/,
		tea: /下午茶/,
		sup: /夜宵|宵夜/,
		din: /晚饭|晚餐|晚上吃|晚上点/
	};
	var MEAL_NM = {
		bre: "早",
		lun: "午",
		tea: "下午茶",
		din: "晚",
		sup: "宵夜",
		unk: "?"
	};
	var MEAL_WORD = {
		bre: "早饭",
		lun: "午饭",
		tea: "下午茶",
		din: "晚饭",
		sup: "夜宵"
	};
	function mealGlyphSlot(e) {
		if (e.meal) return e.meal;
		const t = e.text || "";
		if (!t) return null;
		for (const k of MEAL_ORDER) if (MEAL_RES[k].test(t)) return k;
		return null;
	}
	function mealFullText(e) {
		return (e.meal && MEAL_WORD[e.meal] ? MEAL_WORD[e.meal] + " " : "") + (e.text || "");
	}
	function mealSlotOf(e) {
		if (e.meal) return e.meal;
		const t = e.text || "";
		if (!t) return null;
		for (const k of MEAL_ORDER) if (MEAL_RES[k].test(t)) return k;
		if ((e.groups || []).some((g) => tplOf(g) === "food")) {
			if (e.time) {
				const h = +String(e.time).split(":")[0];
				if (h >= 5 && h < 10) return "bre";
				if (h >= 10 && h < 14) return "lun";
				if (h >= 14 && h < 17) return "tea";
				if (h >= 17 && h < 21) return "din";
				return "sup";
			}
			return "unk";
		}
		return null;
	}
	function mealStrip(t) {
		return String(t || "").replace(/早饭|早餐|午饭|午餐|晚饭|晚餐|下午茶|夜宵|宵夜|早上吃|中午吃|晚上吃/g, "").replace(/^[了的，。:：、\s]+/, "").trim();
	}
	function foodGroupName() {
		let fg = null;
		(appState.extraGroups || []).forEach((g) => {
			if (!fg && tplOf(g) === "food") fg = g;
		});
		if (!fg) walk((d, e) => {
			(e.groups || []).forEach((g) => {
				if (!fg && tplOf(g) === "food") fg = g;
			});
		});
		return fg;
	}
	function mealAutoTagAll() {
		if (!modOn("meals")) return;
		const fg = foodGroupName();
		if (!fg) return;
		let tagged = false;
		walk((d, e) => {
			if (!e.text) return;
			if (!mealGlyphSlot(e)) return;
			if ((e.groups || []).some((g) => tplOf(g) === "food")) return;
			const p = parseEntry(e);
			if (!(p.store || p.delivery)) return;
			(e.groups = e.groups || []).push(fg);
			tagged = true;
		});
		if (tagged) {
			parserState.KNOWN_STORE = null;
			parserState.KNOWN_PPL = null;
		}
	}
	function mealComposeText(slot, o) {
		if (o.form === "没吃") return "没吃";
		let t2 = "";
		if (o.form === "外卖") t2 += "点了外卖";
		if (o.store) t2 += (o.form === "外卖" ? "" : "在") + "「" + o.store + "」";
		if (o.form === "自己做的") t2 += (t2 ? " " : "") + "自己做的";
		if (o.withs && o.withs.length) t2 += (t2 ? " " : "") + "和" + o.withs.join("、");
		t2 += o.what ? o.withs && o.withs.length ? "吃了" + o.what : (t2 ? " " : "") + "吃了" + o.what : o.withs && o.withs.length || o.store ? "吃的" : "";
		if (o.amt) t2 += " " + o.amt + "元";
		return t2;
	}
	function mealComposerHTML() {
		return "<input class=\"vt-in\" id=\"mcWhat\" placeholder=\"吃了什么（如：麻辣烤鱼 / 公司食堂）\" style=\"margin-top:0\"><div class=\"gs-chips\" style=\"margin-top:8px\"><button class=\"gs-chip\" data-mc=\"外卖\">外卖</button><button class=\"gs-chip\" data-mc=\"自己做的\">自己做</button><button class=\"gs-chip\" data-mc=\"没吃\">这顿没吃</button></div><div style=\"display:flex;gap:8px\"><input class=\"vt-in\" id=\"mcStore\" placeholder=\"店名（可不填）\" style=\"flex:1.1\"><input class=\"vt-in\" id=\"mcWith\" placeholder=\"和谁（可不填）\" style=\"flex:1\"><input class=\"vt-in\" id=\"mcAmt\" type=\"number\" min=\"0\" step=\"0.01\" inputmode=\"decimal\" placeholder=\"¥ 花销（选填）\" style=\"flex:.9\"></div><button class=\"rv-confirm\" id=\"mcSave\">记下这顿</button>";
	}
	function bindMealComposer(root, key, slot, done) {
		let form = null;
		root.querySelectorAll("[data-mc]").forEach((b) => b.onclick = () => {
			const on = b.classList.contains("on");
			root.querySelectorAll("[data-mc]").forEach((x) => x.classList.remove("on"));
			if (!on) {
				b.classList.add("on");
				form = b.dataset.mc;
			} else form = null;
		});
		root.querySelector("#mcSave").onclick = () => {
			const what = root.querySelector("#mcWhat").value.trim();
			const store = root.querySelector("#mcStore").value.trim();
			const withs = root.querySelector("#mcWith").value.trim().split(/[、，,\s和]+/).map((x) => x.trim()).filter(Boolean);
			const amtV = root.querySelector("#mcAmt").value.trim();
			const amt = form !== "没吃" && amtV && +amtV > 0 ? +amtV : null;
			if (form !== "没吃" && !what && !store) {
				toast("写点什么，或选「这顿没吃」");
				return;
			}
			const e = {
				sym: "note",
				state: "open",
				meal: slot,
				text: mealComposeText(slot, {
					form,
					what,
					store,
					withs,
					amt
				}),
				_id: ++appState.uid
			};
			if (!appState.PAGES[key]) appState.PAGES[key] = {
				plan: [],
				flow: []
			};
			appState.PAGES[key].flow.push(e);
			try {
				mealAutoTagAll();
			} catch (_) {}
			scheduleSave();
			toast("已记下 · " + MEAL_WORD[slot] + " " + e.text.slice(0, 12));
			if (done) done();
		};
	}
	function mealQuickSheet(key, slot) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">" + fmtKey(key) + " · " + MEAL_WORD[slot] + "</div>" + mealComposerHTML();
		bindMealComposer(S, key, slot, () => {
			closeSheet();
			render();
		});
		S.classList.add("on");
		$("#mask").classList.add("on");
		setTimeout(() => {
			const w = $("#mcWhat");
			if (w) w.focus();
		}, 60);
	}
	function renderMeals() {
		if (!modOn("meals")) {
			const d0 = document.createElement("div");
			d0.className = "empty-hint";
			d0.textContent = "三餐打卡关着 · 到 设置 → 岛上的房子 打开";
			view.appendChild(d0);
			return;
		}
		const rowsAll = [];
		walk((d, e) => {
			const k2 = mealSlotOf(e);
			if (k2) rowsAll.push({
				d,
				k: k2,
				e
			});
		});
		const ta = TODAY.split(".").map(Number);
		const mon = rowsAll.filter((r) => {
			const a2 = r.d.split(".").map(Number);
			return a2[0] === ta[0] && a2[1] === ta[1];
		});
		let wm = 0, spend = 0;
		const comp = {};
		mon.forEach((r) => {
			const p = parseEntry(r.e);
			if (p.delivery) wm++;
			(p.prices || []).forEach((v2) => spend += v2);
			(p.withs || []).forEach((w2) => {
				if (w2 !== "独自") comp[w2] = (comp[w2] || 0) + 1;
			});
		});
		const topC = Object.entries(comp).sort((a2, b2) => b2[1] - a2[1])[0];
		const byDay = {}, byDayE = {};
		rowsAll.forEach((r) => {
			(byDay[r.d] = byDay[r.d] || /* @__PURE__ */ new Set()).add(r.k);
			byDayE[r.d] = byDayE[r.d] || {};
			if (!byDayE[r.d][r.k]) byDayE[r.d][r.k] = r;
		});
		const firstSeen = {};
		walk((d5, e5) => {
			const st5 = parseEntry(e5).store;
			if (st5) {
				const t5 = parseKey(d5);
				if (!firstSeen[st5] || t5 < firstSeen[st5]) firstSeen[st5] = t5;
			}
		});
		const newStores = Object.values(firstSeen).filter((t5) => t5.getFullYear() === ta[0] && t5.getMonth() + 1 === ta[1]).length;
		const pan = document.createElement("div");
		pan.className = "tp-pan";
		pan.style.marginTop = "16px";
		const tiles = [
			[
				newStores,
				"家",
				"本月吃到新店"
			],
			[
				mon.length,
				"顿",
				"本月记了"
			],
			[
				wm,
				"次",
				"本月外卖"
			],
			[
				"¥" + Math.round(spend),
				"",
				"本月吃饭花销"
			]
		];
		pan.innerHTML = "<div class=\"tt\">吃饭这件小事 · " + ta[1] + "月</div><div class=\"tp-nums\">" + tiles.map((t) => "<div class=\"n\"><b>" + t[0] + (t[1] ? "<i>" + t[1] + "</i>" : "") + "</b><span>" + t[2] + "</span></div>").join("") + "</div>" + (topC ? "<div class=\"vt-note\" style=\"margin-top:8px\">这个月最常一起吃饭：" + vEsc(topC[0]) + " × " + topC[1] + " 次</div>" : "");
		view.appendChild(pan);
		const grid = document.createElement("div");
		grid.className = "tp-pan";
		let gh = "<div class=\"tt\">最近两周 · 早 / 午 / 晚</div><div class=\"vt-note\" style=\"margin:0 0 6px\">小点＝没记，想补再点 · ✕＝这顿没吃 · 灰点＝日常吃 · 彩点＝进了美食集子 · 点日期看那天</div>";
		const d4 = parseKey(TODAY);
		for (let i = 0; i < 14; i++) {
			const k4 = dkey(d4);
			const sE = byDayE[k4] || {};
			const c4 = (k5) => {
				const r = sE[k5];
				const skip = r && /没吃|没有吃/.test(r.e.text || "");
				return "<i class=\"ml-cell " + (!r ? "ml-off" : skip ? "ml-skip" : (r.e.groups || []).some((g) => tplOf(g) === "food") ? "ml-on" : "ml-onn") + "\" data-k5=\"" + k5 + "\" data-d=\"" + k4 + "\">" + (skip ? "✕" : "") + "</i>";
			};
			const s4 = byDay[k4] || /* @__PURE__ */ new Set();
			const extra = (s4.has("tea") ? " 茶" : "") + (s4.has("sup") ? " 宵" : "") + (s4.has("unk") ? " ?" : "");
			gh += "<div class=\"ml-row\"><span class=\"c ml-day\" data-d=\"" + k4 + "\">" + fmtShort(k4) + (k4 === TODAY ? " 今天" : "") + "</span>" + c4("bre") + c4("lun") + c4("din") + "<span class=\"v\">" + extra + "</span></div>";
			d4.setDate(d4.getDate() - 1);
		}
		grid.innerHTML = gh;
		grid.querySelectorAll(".ml-day").forEach((el) => {
			el.onclick = () => gotoDay(el.dataset.d);
		});
		grid.querySelectorAll(".ml-cell").forEach((el) => {
			el.onclick = () => {
				const k4 = el.dataset.d, k5 = el.dataset.k5;
				const r = (byDayE[k4] || {})[k5];
				if (r) jumpToEntry(r.d, r.e._id || (r.e._id = ++appState.uid));
				else mealQuickSheet(k4, k5);
			};
		});
		view.appendChild(grid);
		const tip = document.createElement("div");
		tip.className = "vt-tip";
		tip.textContent = "平时写「早饭/午饭/晚饭 + 吃了什么」自动归格；没记的就空着，不用补；想补哪顿点墙上的小点——吃了什么、店名、和谁、花了多少，一张小表填完。带「店名」或外卖的会同时收进美食集子（彩点）。";
		view.appendChild(tip);
	}
	// src/core/planning.js
	function planNumber(s) {
		if (/^\d+$/.test(s)) return +s;
		const ns = {
			零: 0,
			一: 1,
			二: 2,
			两: 2,
			三: 3,
			四: 4,
			五: 5,
			六: 6,
			七: 7,
			八: 8,
			九: 9
		};
		if (s === "半") return .5;
		if (s.includes("十")) {
			const [a, b] = s.split("十");
			return (a ? ns[a] : 1) * 10 + (b ? ns[b] : 0);
		}
		return ns[s];
	}
	function planDate(k, n, unit) {
		const d = parseKey(k), day = d.getDate();
		if (unit === "月" || unit === "年") {
			d.setDate(1);
			d.setMonth(d.getMonth() + n * (unit === "年" ? 12 : 1));
			d.setDate(Math.min(day, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()));
		} else d.setDate(day + n * (unit === "周" ? 7 : 1));
		return dkey(d);
	}
	function planFull(k) {
		const a = k.split(".");
		return a[0] + "年" + a[1] + "月" + a[2] + "日";
	}
	function planParse(t, base) {
		if (/生日|农历|阴历|每(?:隔|个)?[一二三四五六七八九十两\d]*(?:年|月|周|天)/.test(t)) return null;
		const ms = [...t.matchAll(/([一二三四五六七八九十两半\d]+)\s*(?:个)?(年|月|周|天)(?:以)?后(?:的今天)?/g)];
		if (ms.length !== 1) return null;
		const m = ms[0], n = planNumber(m[1]);
		if (!Number.isFinite(n) || n <= 0 || n > 100 || n % 1 && m[2] !== "年") return null;
		const eventDay = planDate(base, n, m[2]);
		const ahead = t.match(/提前\s*([一二三四五六七八九十两\d]+)\s*(天|周|个?月)/);
		const an = ahead ? planNumber(ahead[1]) : 0;
		if (!Number.isFinite(an)) return null;
		const day = ahead ? planDate(eventDay, -an, ahead[2].replace("个", "")) : eventDay;
		let title = t.replace(m[0], "").replace(/(?:也?记得|记住|请)?\s*提前\s*[一二三四五六七八九十两\d]+\s*(?:天|周|个?月)(?:到期)?(?:记得)?(?:提醒|通知)我?/g, "").replace(/(?:记得|记住|请)?(?:提醒|通知)我/g, "").replace(/^[，,。\s]+|[，,。\s]+$/g, "").trim();
		title = title.replace(/[,，]\s*$/, "");
		return {
			eventDay,
			day,
			ahead: an,
			source: t,
			title,
			needsTitle: !title || /^(到期|今天到期|记得)$/.test(title)
		};
	}
	function planItems(t, base) {
		const q = planParse(t, base);
		if (!q) return null;
		let past = null;
		const parts = q.title.match(/^(.+?了[^，,]*)[，,](.+)$/);
		if (parts) {
			past = parts[1];
			q.title = parts[2];
		}
		const items = [];
		if (past) items.push({
			text: past,
			src: past,
			kind: {
				kind: "event",
				day: base
			}
		});
		items.push({
			text: q.title || "待填写事项",
			src: t,
			kind: {
				kind: "task",
				day: q.day
			},
			plan: q
		});
		return items;
	}
	// src/modules/journal/commit.js
	function inPlanTree(e) {
		let hit = false;
		const go = (list) => list.forEach((x) => {
			if (x === e) hit = true;
			else if (x.children && x.children.length) go(x.children);
		});
		go(EP().plan);
		return hit;
	}
	function commit(e) {
		let t = (e.text || "").trim();
		let changed = false;
		const gm = t.match(/#([^\s#，。,]{1,12})/g);
		if (gm) {
			e.groups = e.groups || [];
			gm.forEach((x) => {
				const g = x.slice(1);
				if (!e.groups.includes(g)) {
					e.groups.push(g);
					toast("已归入 #" + g);
				}
			});
			t = t.replace(/#[^\s#，。,]{1,12}\s?/g, "").trim();
			e.text = t;
			changed = true;
		}
		const range = e.sym === "event" && journalRange(t);
		if (range) {
			e.startTime = e.time = range.startTime;
			e.endTime = range.endTime;
			delete e.journalTime;
			e.text = t = range.body;
			changed = true;
		}
		const hm = !range && detectTimeHM(t);
		if (hm && !e.noTime) {
			if (e.time !== hm) {
				e.time = hm;
				if (e.sym === "event") e.startTime = hm;
				changed = true;
			}
		} else if (!e.time && !e.noTime) {
			const cv = detectTimeCN(t);
			if (cv) {
				e.time = cv;
				changed = true;
				toast("已识别时间 " + cv);
			}
		}
		const dd2 = detectDue(t);
		if (dd2 && dd2.hard && !e.noDue) {
			if (e.due !== dd2.key) {
				e.due = dd2.key;
				changed = true;
				toast("已同步到 " + fmtKey(dd2.key));
			}
		} else if (dd2 && !dd2.hard && !e.due && !e.noDue) {
			e.due = dd2.key;
			changed = true;
			toast("已同步到 " + fmtKey(dd2.key) + "（" + weekCN(dd2.key) + "）");
		}
		if (SET.recog && !e.userSet && t) {
			let g = null;
			if (/^(见了|去了|开完|参加了|聊了|吃了|逛了|看了|开了)/.test(t)) g = "event";
			else if (t.length <= 10 && /(焦虑|开心|难过|平静|烦|累|期待|紧张|兴奋|低落|郁闷|委屈|爽)/.test(t)) g = "mood";
			else if (/[？?]$/.test(t) && !inPlanTree(e)) g = "ask";
			if (g) {
				delete e.defSym;
				if (e.sym !== g) {
					e.sym = g;
					e.state = void 0;
					changed = true;
					toast("识别为" + {
						event: "日常",
						mood: "随想 · 心情",
						ask: "随想 · 疑问"
					}[g] + " · 点行首图标能改");
				}
			}
		}
		if (e.defSym && e.sym === "event" && e.due) {
			e.sym = "task";
			e.state = "open";
			delete e.defSym;
			changed = true;
		}
		return changed;
	}
	// src/modules/ledger/index.js
	var EXP_NM = {
		eat: "吃喝",
		go: "出行",
		buy: "购物",
		home: "居住",
		fun: "娱乐",
		med: "医疗",
		ren: "人情",
		etc: "其他"
	};
	var EXP_COL = {
		eat: "var(--accent)",
		go: "#5B7FA6",
		buy: "#B07D2E",
		home: "#5F8F66",
		fun: "#7A5C8F",
		med: "#C0604E",
		ren: "#B25A76",
		etc: "#CFC7B4"
	};
	var EXP_ORDER = [
		"eat",
		"go",
		"buy",
		"home",
		"fun",
		"med",
		"ren",
		"etc"
	];
	function expLabel(k) {
		return SET.expNames && SET.expNames[k] || EXP_NM[k] || k;
	}
	function expColor(k) {
		return EXP_COL[k] || "#CFC7B4";
	}
	function expKindOf(e, p) {
		if (e.exp === "skip") return null;
		if (e.exp) return e.exp;
		const t = e.text || "";
		if (/(到账|工资|收入|报销|退款|回款|收了|收到)/.test(t)) return null;
		if (e.meal || mealGlyphSlot(e) || (e.groups || []).some((g) => tplOf(g) === "food") || p && (p.store || p.delivery)) return "eat";
		if (/咖啡|奶茶|喝了|甜品|零食|水果|买菜/.test(t)) return "eat";
		if ((e.groups || []).some((g) => tplOf(g) === "movie") || /《[^》]+》|电影票|门票|演出|演唱会|游戏|皮肤|会员/.test(t)) return "fun";
		if (/打车|滴滴|地铁|公交|高铁|火车票|机票|加油|停车|骑行|租车/.test(t)) return "go";
		if (/房租|水电|物业|燃气|宽带|电费|水费|取暖/.test(t)) return "home";
		if (/挂号|买药|药店|医院|体检|看病|疫苗/.test(t)) return "med";
		if (/红包|份子|随礼|礼金|请客/.test(t)) return "ren";
		if (/买|下单|快递|淘宝|京东|拼多多|超市|采购|囤/.test(t)) return "buy";
		return "etc";
	}
	function expRows() {
		const out = [];
		walk((d, e) => {
			if (!e.text) return;
			const p = parseEntry(e);
			if (!(p.prices && p.prices.length)) return;
			const k = expKindOf(e, p);
			if (!k) return;
			out.push({
				d,
				e,
				p,
				k,
				sum: amtSum(p.prices)
			});
		});
		out.sort((a, b) => parseKey(b.d) - parseKey(a.d));
		return out;
	}
	function expSheet(e) {
		const S = $("#gsheet");
		const curK = expKindOf(e, parseEntry(e));
		const customs = (SET.expCats || []).filter((x) => !EXP_NM[x]);
		S.innerHTML = "<div class=\"gs-title\">这笔算什么 · " + vEsc((e.text || "").slice(0, 14)) + "</div><div class=\"gs-chips\" id=\"exChips\"></div><div class=\"gs-new\"><input id=\"exNew\" maxlength=\"24\" placeholder=\"自定义类别…\" autocomplete=\"off\"><button id=\"exAdd\">添加</button></div><div class=\"hw-tip\" style=\"padding:8px 2px 0\"><span class=\"hw-link\" id=\"exMng\">✎ 类别管理 · 改名 / 删除</span></div>";
		const box = $("#exChips");
		const mk = (k, nm) => {
			const b = document.createElement("button");
			b.className = "gs-chip" + (curK === k ? " on" : "");
			b.textContent = nm;
			b.onclick = () => {
				snapshot("改花销类别");
				e.exp = k;
				scheduleSave();
				closeSheet();
				toast("这笔记为「" + expLabel(k) + "」");
				render();
			};
			box.appendChild(b);
		};
		EXP_ORDER.forEach((k) => mk(k, expLabel(k)));
		customs.forEach((k) => mk(k, k));
		const sk = document.createElement("button");
		sk.className = "gs-chip" + (e.exp === "skip" ? " on" : "");
		sk.textContent = "不算花销";
		sk.onclick = () => {
			snapshot("不算花销");
			e.exp = "skip";
			scheduleSave();
			closeSheet();
			toast("这笔不计入记账");
			render();
		};
		box.appendChild(sk);
		$("#exAdd").onclick = () => {
			const v = $("#exNew").value.trim();
			if (!v) return;
			SET.expCats = SET.expCats || [];
			if (!SET.expCats.includes(v)) {
				if (!categoryNameAvailable(v)) {
					toast("这个类别名已被使用");
					return;
				}
				SET.expCats.push(v);
			}
			snapshot("改花销类别");
			e.exp = v;
			scheduleSave();
			closeSheet();
			toast("这笔记为「" + v + "」");
			render();
		};
		const mng = $("#exMng");
		if (mng) mng.onclick = () => expCatManage();
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function categoryNameAvailable(name, except) {
		return name && name !== "skip" && !(name in Object.prototype) && !EXP_ORDER.some((k) => k !== except && [
			k,
			EXP_NM[k],
			expLabel(k)
		].includes(name)) && !(SET.expCats || []).some((k) => k !== except && k === name);
	}
	function expCatManage(draft, pendingCatDel = null) {
		const S = $("#gsheet");
		const customs = (SET.expCats || []).filter((x) => !EXP_NM[x]);
		let h = "<div class=\"gs-title\">类别管理 · 预置的可改叫法，自定义的可改可删</div>";
		h += EXP_ORDER.map((k) => "<div class=\"set-row\"><span>" + vEsc(expLabel(k)) + (SET.expNames && SET.expNames[k] ? "<i style=\"font-style:normal;color:var(--ink-faint);font-size:11px\">　原「" + EXP_NM[k] + "」</i>" : "") + "</span><button class=\"gm-btn\" data-rn=\"" + k + "\" style=\"margin-left:auto\">改名</button></div>").join("");
		h += customs.map((c) => "<div class=\"set-row\"><span>" + vEsc(c) + "</span><button class=\"gm-btn\" data-rn=\"@" + escAttr(c) + "\" style=\"margin-left:auto\">改名</button><button class=\"gm-btn danger\" data-del=\"" + escAttr(c) + "\">" + (pendingCatDel === c ? "确认删除" : "删") + "</button></div>").join("");
		h += "<div class=\"gs-new\"><input id=\"ecNew\" placeholder=\"新分类名称\" maxlength=\"24\"><button id=\"ecAdd\">新增</button></div>";
		if (draft) h += "<button id=\"ecBack\" class=\"gs-done\">返回记一笔</button>";
		S.innerHTML = h;
		if (draft) $("#ecBack").onclick = () => ledgerSheet(draft);
		$("#ecAdd").onclick = () => {
			const name = $("#ecNew").value.trim();
			if (!categoryNameAvailable(name)) {
				toast(name ? "这个类别名已被使用" : "写个名字");
				return;
			}
			(SET.expCats ||= []).push(name);
			scheduleSave();
			expCatManage(draft);
			render();
		};
		S.querySelectorAll("[data-rn]").forEach((b) => b.onclick = () => expCatRename(b.dataset.rn, draft));
		S.querySelectorAll("[data-del]").forEach((b) => b.onclick = () => {
			const c = b.dataset.del;
			if (pendingCatDel !== c) {
				toast("再点一次确认 · 历史花销将归入「" + expLabel("etc") + "」");
				expCatManage(draft, c);
				return;
			}
			SET.expCats = (SET.expCats || []).filter((x) => x !== c);
			walk((d, e2) => {
				if (e2.exp === c) e2.exp = "etc";
			});
			if (draft?.sel === c) draft.sel = "etc";
			if (navigationState.cur.exFilter === c) navigationState.cur.exFilter = "etc";
			scheduleSave();
			toast("已删除「" + c + "」");
			expCatManage(draft);
			render();
		});
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function expCatRename(tag, draft) {
		const isCustom = tag.indexOf("@") === 0;
		const key = isCustom ? tag.slice(1) : tag;
		const old = isCustom ? key : expLabel(key);
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">给「" + vEsc(old) + "」改个叫法</div><input class=\"vt-in\" id=\"ecName\" value=\"" + escAttr(old) + "\" maxlength=\"24\" style=\"margin-top:4px\"><button class=\"rv-confirm\" id=\"ecGo\" style=\"margin-top:12px\">保存</button>" + (isCustom ? "<div class=\"hw-tip\" style=\"padding:6px 2px 0\">改名后，用过它的记录会一起换新叫法</div>" : "<div class=\"hw-tip\" style=\"padding:6px 2px 0\">预置类别改的只是叫法，自动识别规则照旧</div>");
		$("#ecGo").onclick = () => {
			const v = $("#ecName").value.trim();
			if (!v) {
				toast("写个名字");
				return;
			}
			if (v !== old && !categoryNameAvailable(v, key)) {
				toast("这个类别名已被使用");
				return;
			}
			if (isCustom) {
				if (v !== key) {
					if (draft?.sel === key) draft.sel = v;
					if (navigationState.cur.exFilter === key) navigationState.cur.exFilter = v;
					SET.expCats = (SET.expCats || []).map((x) => x === key ? v : x);
					walk((d, e2) => {
						if (e2.exp === key) e2.exp = v;
					});
				}
			} else {
				SET.expNames = SET.expNames || {};
				if (v === EXP_NM[key]) delete SET.expNames[key];
				else SET.expNames[key] = v;
			}
			scheduleSave();
			toast("已改叫「" + v + "」");
			expCatManage(draft);
			render();
		};
		setTimeout(() => {
			const i = $("#ecName");
			if (i) i.focus();
		}, 60);
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function openAmtSheet(e) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">给「" + vEsc((e.text || "").slice(0, 14)) + "」补一笔花销</div><input class=\"vt-in\" id=\"amIn\" type=\"number\" min=\"0\" step=\"0.01\" inputmode=\"decimal\" placeholder=\"花了多少（元）\" style=\"margin-top:4px\"><button class=\"rv-confirm\" id=\"amGo\" style=\"margin-top:12px\">补上</button>";
		$("#amGo").onclick = () => {
			const v = +$("#amIn").value;
			if (!(v > 0)) {
				toast("填个数字");
				return;
			}
			snapshot("补金额");
			e.text = (e.text || "").trim() + " " + v + "元";
			scheduleSave();
			closeSheet();
			render();
			toast("已补上 ¥" + v);
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		setTimeout(() => {
			const i = $("#amIn");
			if (i) i.focus();
		}, 60);
	}
	function expMonthOf(rows, y, m) {
		return rows.filter((r) => {
			const a = r.d.split(".").map(Number);
			return a[0] === y && a[1] === m;
		});
	}
	function expSum(a) {
		return Math.round(a.reduce((s2, r) => s2 + r.sum, 0));
	}
	function recordSheet(g, tpl) {
		const S = $("#gsheet"), I = ISLE[tpl] || {};
		const PH = {
			movie: "和谁看了《片名》几分，说两句",
			book: "读完了《书名》几分，说两句",
			food: "在「店名」吃了什么，好吃吗、多少钱",
			fun: "去哪玩了、和谁、花了多少"
		};
		const TIP = {
			movie: "写「《片名》+ 几分 + 和谁」，" + I.who + "会自动认出来",
			book: "写「《书名》+ 几分」，" + I.who + "会自动认出来",
			food: "店名加「」，" + I.who + "会记进熟店簿；写「宝藏」「避雷」能上榜",
			fun: "写上和谁、花了多少，" + I.who + "帮你记着"
		};
		const iso = (k2) => {
			const a = k2.split(".").map(Number);
			return a[0] + "-" + String(a[1]).padStart(2, "0") + "-" + String(a[2]).padStart(2, "0");
		};
		const yd = (() => {
			const d = parseKey(TODAY);
			d.setDate(d.getDate() - 1);
			return dkey(d);
		})();
		S.innerHTML = "<div class=\"gs-title\">记一条 · " + (I.h || "#" + vEsc(g)) + "</div><div style=\"display:flex;gap:8px;align-items:center\"><input class=\"vt-in\" id=\"rcDate\" type=\"date\" style=\"flex:1;margin-top:0\"><button class=\"gs-chip on\" id=\"rcT\">今天</button><button class=\"gs-chip\" id=\"rcY\">昨天</button></div><textarea class=\"vt-in\" id=\"rcText\" rows=\"3\" placeholder=\"" + (PH[tpl] || "写一句") + "\" style=\"resize:none;line-height:1.6\"></textarea><div class=\"hw-tip\" style=\"padding:6px 2px 0\">" + (TIP[tpl] || "") + "</div><button class=\"rv-confirm\" id=\"rcSave\">记下这条</button><div class=\"hw-tip\" style=\"padding:6px 2px 0\">哪天的事选哪天 · 这条住在" + (I.h || "这里") + "，那天的手帐只在「岛上」那一行多个数字</div>";
		const di = $("#rcDate");
		di.value = iso(TODAY);
		di.max = iso(TODAY);
		const mark = () => {
			$("#rcT").classList.toggle("on", di.value === iso(TODAY));
			$("#rcY").classList.toggle("on", di.value === iso(yd));
		};
		$("#rcT").onclick = () => {
			di.value = iso(TODAY);
			mark();
		};
		$("#rcY").onclick = () => {
			di.value = iso(yd);
			mark();
		};
		di.onchange = mark;
		$("#rcSave").onclick = () => {
			const t = $("#rcText").value.trim();
			if (!t) {
				toast("先写一句");
				return;
			}
			if (!di.value) {
				toast("选一下哪天");
				return;
			}
			const key = di.value.split("-").map(Number).join(".");
			if (!appState.PAGES[key]) appState.PAGES[key] = {
				plan: [],
				flow: []
			};
			const e = {
				sym: "event",
				text: t,
				groups: [g],
				_id: ++appState.uid
			};
			appState.PAGES[key].flow.push(e);
			commit(e);
			scheduleSave();
			closeSheet();
			toast("记到" + (key === TODAY ? "今天" : " " + fmtKey(key)) + " · " + t.slice(0, 12));
			render();
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function ledgerSheet(draft = {}) {
		const S = $("#gsheet");
		const ta = TODAY.split(".").map(Number);
		const customs = (SET.expCats || []).filter((x) => !EXP_NM[x]);
		S.innerHTML = "<div class=\"gs-title\">记一笔 · 并进那天的手帐</div><div style=\"display:flex;gap:8px\"><input class=\"vt-in\" id=\"lgAmt\" type=\"number\" min=\"0\" step=\"0.01\" inputmode=\"decimal\" placeholder=\"¥ 花了多少\" style=\"flex:1.1;margin-top:0\"><input class=\"vt-in\" id=\"lgDate\" type=\"date\" style=\"flex:1;margin-top:0\"></div><div class=\"gs-chips\" id=\"lgCats\" style=\"margin-top:10px\"></div><input class=\"vt-in\" id=\"lgNote\" placeholder=\"一句备注（如：打车去机场 · 不填就用类别名）\"><button class=\"rv-confirm\" id=\"lgSave\">记下这笔</button><div class=\"hw-tip\" style=\"padding:6px 2px 0\">哪天花的选哪天——这笔会以账房小图标出现在那天的手帐里，随时可改可删</div>";
		$("#lgDate").value = ta[0] + "-" + String(ta[1]).padStart(2, "0") + "-" + String(ta[2]).padStart(2, "0");
		if (draft.date) $("#lgDate").value = draft.date;
		$("#lgAmt").value = draft.amount || "";
		$("#lgNote").value = draft.note || "";
		let sel = EXP_ORDER.concat(customs).includes(draft.sel) ? draft.sel : null;
		const box = $("#lgCats");
		EXP_ORDER.concat(customs).forEach((k) => {
			const b = document.createElement("button");
			b.className = "gs-chip";
			b.textContent = expLabel(k);
			b.dataset.lc = k;
			b.classList.toggle("on", sel === k);
			b.onclick = () => {
				const on = b.classList.contains("on");
				box.querySelectorAll(".gs-chip").forEach((x) => x.classList.remove("on"));
				sel = on ? null : k;
				if (!on) b.classList.add("on");
			};
			box.appendChild(b);
		});
		const manage = document.createElement("button");
		manage.className = "gs-chip category-manage";
		manage.textContent = "+ 管理";
		manage.onclick = () => {
			expCatManage({
				amount: $("#lgAmt").value,
				date: $("#lgDate").value,
				note: $("#lgNote").value,
				sel
			});
		};
		box.appendChild(manage);
		$("#lgSave").onclick = () => {
			const v = +$("#lgAmt").value;
			if (!(v > 0)) {
				toast("先填花了多少");
				return;
			}
			const dv = $("#lgDate").value;
			if (!dv) {
				toast("选一下哪天花的");
				return;
			}
			const a2 = dv.split("-").map(Number);
			const key = a2[0] + "." + a2[1] + "." + a2[2];
			const e = {
				sym: "note",
				ledger: 1,
				text: ($("#lgNote").value.trim() || (sel ? expLabel(sel) : "花销")) + " " + v + "元",
				_id: ++appState.uid
			};
			if (sel) e.exp = sel;
			if (!appState.PAGES[key]) appState.PAGES[key] = {
				plan: [],
				flow: []
			};
			appState.PAGES[key].flow.push(e);
			scheduleSave();
			closeSheet();
			toast("已记到 " + fmtKey(key) + " · " + e.text.slice(0, 12));
			render();
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		setTimeout(() => {
			const i = $("#lgAmt");
			if (i) i.focus();
		}, 60);
	}
	function renderLedgerFlow() {
		const xf = navigationState.cur.exFilter || null;
		const bar0 = document.createElement("div");
		bar0.className = "rp-tabs";
		bar0.style.marginTop = "14px";
		bar0.style.marginBottom = "0";
		const addC = document.createElement("button");
		addC.className = "chip primary-action";
		addC.textContent = "＋ 记一笔";
		addC.onclick = ledgerSheet;
		bar0.appendChild(addC);
		const manage = document.createElement("button");
		manage.className = "chip";
		manage.textContent = "管理分类";
		manage.onclick = () => expCatManage();
		bar0.appendChild(manage);
		if (xf) {
			const fc = document.createElement("button");
			fc.className = "chip";
			fc.textContent = "只看 · " + expLabel(xf) + " ✕";
			fc.onclick = () => {
				delete navigationState.cur.exFilter;
				navigationState.navFromBack = true;
				render();
			};
			bar0.appendChild(fc);
		}
		view.appendChild(bar0);
		const rows = xf ? expRows().filter((r) => r.k === xf) : expRows();
		const ta = TODAY.split(".").map(Number);
		const mon = expMonthOf(rows, ta[0], ta[1]);
		const pm = ta[1] === 1 ? [ta[0] - 1, 12] : [ta[0], ta[1] - 1];
		const pSum = expSum(expMonthOf(rows, pm[0], pm[1]));
		const mSum = expSum(mon);
		const diff = pSum ? mSum <= pSum ? "比上月少 ¥" + (pSum - mSum) : "比上月多 ¥" + (mSum - pSum) : "";
		const hero = document.createElement("div");
		hero.className = "tp-pan";
		hero.style.textAlign = "center";
		hero.innerHTML = "<div class=\"tt\" style=\"display:flex;justify-content:center\">" + (xf ? ta[1] + " 月 · " + vEsc(expLabel(xf)) : ta[1] + " 月 支 出") + "</div><div style=\"font-size:33px;font-weight:800;letter-spacing:.5px;margin:2px 0\">¥" + mSum.toLocaleString() + "</div><div class=\"vt-note\" style=\"margin:0\">" + mon.length + " 笔 · 日均 ¥" + Math.round(mSum / Math.max(1, ta[2])) + (diff ? " · " + diff : "") + "</div>" + (xf ? "<div class=\"vt-note\" style=\"margin:4px 0 0\">正在只看「" + vEsc(expLabel(xf)) + "」· 点上面的 ✕ 回到全部</div>" : "<div class=\"vt-note\" style=\"margin:4px 0 0\">「工资到账」这类收入句不算 · 长按流水可改类别或不计入 · 点类别只看那一类</div>");
		view.appendChild(hero);
		if (!xf) view.appendChild(incomePanel(mon.reduce((c, r) => c + Math.round(100 * r.sum), 0) / 100));
		if (!xf) {
			const byK = {};
			mon.forEach((r) => byK[r.k] = (byK[r.k] || 0) + r.sum);
			const ks = Object.keys(byK).sort((a, b) => byK[b] - byK[a]);
			if (mSum > 0) {
				const wrap = document.createElement("div");
				wrap.innerHTML = "<div class=\"exbar\">" + ks.map((k) => "<i style=\"width:" + Math.max(2, byK[k] / mSum * 100) + "%;background:" + expColor(k) + "\"></i>").join("") + "</div><div class=\"exlegend\">" + ks.map((k) => "<span data-xk=\"" + escAttr(k) + "\" style=\"cursor:pointer\"><i style=\"background:" + expColor(k) + "\"></i>" + vEsc(expLabel(k)) + " <b>¥" + Math.round(byK[k]) + "</b></span>").join("") + "</div>";
				wrap.querySelectorAll("[data-xk]").forEach((el) => el.onclick = () => {
					navigationState.cur.exFilter = el.dataset.xk;
					navigationState.navFromBack = true;
					render();
				});
				view.appendChild(wrap);
			}
		}
		if (!navigationState.cur.listN) navigationState.cur.listN = 30;
		const shown = rows.slice(0, navigationState.cur.listN);
		let lastD = null;
		shown.forEach((r) => {
			if (r.d !== lastD) {
				lastD = r.d;
				const daySum = Math.round(rows.filter((x) => x.d === r.d).reduce((s2, x) => s2 + x.sum, 0));
				const h = document.createElement("div");
				h.className = "date-group";
				h.dataset.day = r.d;
				h.style.display = "flex";
				h.innerHTML = "<span>" + dayGroupTitle(r.d) + "</span><span style=\"margin-left:auto\">¥" + daySum + "</span>";
				view.appendChild(h);
			}
			const record = jumpRow(r.d, r.e, true);
			const amount = document.createElement("span");
			amount.className = "record-amount";
			amount.textContent = "¥" + r.sum;
			record.querySelector(".entry").appendChild(amount);
			view.appendChild(record);
		});
		if (!rows.length) {
			const d = document.createElement("div");
			d.className = "empty-hint";
			d.textContent = xf ? "「" + expLabel(xf) + "」还没有记录" : "小铜板：还没记过账。试着发一句「打车 45元」或「咖啡 ¥18」。";
			view.appendChild(d);
		}
		if (rows.length > navigationState.cur.listN) {
			const more = document.createElement("div");
			more.className = "tapzone";
			more.style.textAlign = "center";
			more.textContent = "▾ 加载更早（还有 " + (rows.length - navigationState.cur.listN) + " 笔）";
			more.onclick = () => {
				navigationState.cur.listN += 50;
				render();
			};
			view.appendChild(more);
		}
	}
	function renderLedgerPan() {
		if (!navigationState.cur.exRng) navigationState.cur.exRng = "month";
		const rows = expRows();
		const ta = TODAY.split(".").map(Number);
		const pm = ta[1] === 1 ? [ta[0] - 1, 12] : [ta[0], ta[1] - 1];
		const inMon = (r) => {
			const a = r.d.split(".").map(Number);
			return a[0] === ta[0] && a[1] === ta[1];
		};
		const inPrev = (r) => {
			const a = r.d.split(".").map(Number);
			return a[0] === pm[0] && a[1] === pm[1];
		};
		const rr = rows.filter(navigationState.cur.exRng === "month" ? inMon : navigationState.cur.exRng === "lastmonth" ? inPrev : ((r) => +r.d.split(".")[0] === ta[0]));
		const XL = {
			month: "本月",
			lastmonth: "上月",
			year: "今年"
		};
		const XC = [
			"month",
			"lastmonth",
			"year"
		];
		const tabs = document.createElement("div");
		tabs.className = "rp-tabs";
		tabs.style.marginTop = "14px";
		const rc = document.createElement("button");
		rc.className = "chip on";
		rc.textContent = "盘点 · " + XL[navigationState.cur.exRng] + " ▾";
		rc.onclick = () => {
			navigationState.cur.exRng = XC[(XC.indexOf(navigationState.cur.exRng) + 1) % XC.length];
			render();
		};
		tabs.appendChild(rc);
		const shc = document.createElement("button");
		shc.className = "chip";
		shc.textContent = "▣ 分享";
		shc.onclick = () => openShare(statsPayload("记账", "money", tplStats("money", rr), navigationState.cur.exRng === "year" ? "year" : "month"));
		tabs.appendChild(shc);
		const mgc = document.createElement("button");
		mgc.className = "chip";
		mgc.textContent = "✎ 类别";
		mgc.onclick = () => expCatManage();
		tabs.appendChild(mgc);
		view.appendChild(tabs);
		const mSum = expSum(rows.filter(inMon)), pSum = expSum(rows.filter(inPrev));
		let mx = null;
		rr.forEach((r) => {
			if (!mx || r.sum > mx.sum) mx = r;
		});
		const dNum = navigationState.cur.exRng === "month" ? ta[2] : navigationState.cur.exRng === "lastmonth" ? new Date(pm[0], pm[1], 0).getDate() : Math.max(1, Math.round((parseKey(TODAY) - new Date(ta[0], 0, 1)) / 864e5) + 1);
		const pan = document.createElement("div");
		pan.className = "tp-pan";
		pan.innerHTML = "<div class=\"tt\">花 在 哪 了 · " + XL[navigationState.cur.exRng] + "</div><div class=\"tp-nums\">" + [
			["¥" + mSum.toLocaleString(), "本月"],
			["¥" + pSum.toLocaleString(), "上月"],
			["¥" + (mx ? Math.round(mx.sum) : 0), "最大一笔"],
			["¥" + Math.round(expSum(rr) / dNum), "日均"]
		].map((t) => "<div class=\"n\"><b>" + t[0] + "</b><span>" + t[1] + "</span></div>").join("") + "</div>";
		const byK = {};
		rr.forEach((r) => byK[r.k] = (byK[r.k] || 0) + r.sum);
		const ks = Object.keys(byK).sort((a, b) => byK[b] - byK[a]);
		const top = ks.length ? byK[ks[0]] : 0;
		pan.innerHTML += ks.map((k) => "<div class=\"exrank\" data-xk=\"" + escAttr(k) + "\" style=\"cursor:pointer\"><span class=\"nm\">" + vEsc(expLabel(k)) + "</span><span class=\"bar\"><i style=\"width:" + Math.max(4, byK[k] / (top || 1) * 100) + "%;background:" + expColor(k) + "\"></i></span><span class=\"v\">¥" + Math.round(byK[k]) + "</span><span style=\"color:var(--ink-faint);font-size:11px\">›</span></div>").join("");
		view.appendChild(pan);
		pan.querySelectorAll("[data-xk]").forEach((el) => el.onclick = () => {
			navigationState.cur.tab = "liu";
			navigationState.cur.exFilter = el.dataset.xk;
			navigationState.navFromBack = true;
			render();
		});
		const notes = [];
		if (mx) notes.push("最大一笔：" + (mx.e.text || "").replace(/\s*[¥￥]?\d+(?:\.\d+)?[元块]?\s*$/, "").slice(0, 14) + "（¥" + Math.round(mx.sum) + " · " + fmtShort(mx.d) + "）");
		const wm = rr.filter((r) => r.p.delivery);
		if (wm.length) notes.push("外卖 " + wm.length + " 次，共 ¥" + expSum(wm));
		const comp = {};
		rr.forEach((r) => {
			if (r.k === "eat") (r.p.withs || []).forEach((w) => {
				if (w !== "独自") comp[w] = (comp[w] || 0) + r.sum;
			});
		});
		const tc = Object.entries(comp).sort((a, b) => b[1] - a[1])[0];
		if (tc) notes.push("和 " + tc[0] + " 吃饭花了 ¥" + Math.round(tc[1]));
		if (notes.length) {
			const nk = document.createElement("div");
			nk.className = "tp-pan";
			nk.innerHTML = "<div class=\"tt\">值 得 一 提</div>" + notes.map((x) => "<div class=\"exrank\" style=\"font-size:12.5px\">" + vEsc(x) + "</div>").join("");
			view.appendChild(nk);
		}
		if (!rr.length) {
			const d = document.createElement("div");
			d.className = "empty-hint";
			d.textContent = "这个范围还没有带金额的记录";
			view.appendChild(d);
		}
	}
	// src/modules/journal/dates.js
	var CN_D = {
		一: 1,
		二: 2,
		两: 2,
		三: 3,
		四: 4,
		五: 5,
		六: 6,
		七: 7,
		八: 8,
		九: 9
	};
	function cnNum(s) {
		s = String(s || "");
		if (/^\d+$/.test(s)) return +s;
		if (s === "十") return 10;
		let m;
		if (m = s.match(/^十([一二三四五六七八九])$/)) return 10 + CN_D[m[1]];
		if (m = s.match(/^([一二两三四五六七八九])十$/)) return CN_D[m[1]] * 10;
		if (m = s.match(/^([一二两三四五六七八九])十([一二三四五六七八九])$/)) return CN_D[m[1]] * 10 + CN_D[m[2]];
		return CN_D[s] || null;
	}
	var WK_N = {
		一: 1,
		二: 2,
		三: 3,
		四: 4,
		五: 5,
		六: 6,
		日: 0,
		天: 0
	};
	function wkMonday(k) {
		const d = parseKey(k), w = d.getDay();
		d.setDate(d.getDate() - (w === 0 ? 6 : w - 1));
		return dkey(d);
	}
	function wkDay(mon, wd) {
		return addDaysK(mon, wd === 0 ? 6 : wd - 1);
	}
	var NUM_DAY = "(\\d{1,2}|[一二两三四五六七八九十]{1,3})";
	var NOT_DAY_AFTER = /^[线楼床门口位房车站馆厅店院机窗桌柜铺单件条张杯份层排号桶瓶包袋盒箱码]/;
	function chatPastDay(t) {
		t = String(t || "");
		const tk = parseKey(TODAY), ty = tk.getFullYear(), tm = tk.getMonth() + 1, td = tk.getDate();
		const back = (n) => addDaysK(TODAY, -n);
		const hit = (m, key, strong, rep) => key && parseKey(key) < tk ? {
			key,
			cut: m[0],
			rep: rep || "",
			at: m.index,
			strong
		} : null;
		let m;
		if (m = t.match(/大前天(?:晚上|夜里)?/)) return hit(m, back(3), true, /晚上|夜里/.test(m[0]) ? "晚上" : "");
		if (m = t.match(/前天(?:晚上|夜里)?|前晚/)) return hit(m, back(2), true, /晚/.test(m[0]) || /夜里/.test(m[0]) ? "晚上" : "");
		if (m = t.match(/昨天|昨日|昨儿个?|昨晚|昨夜|昨早/)) return hit(m, back(1), true, /晚|夜/.test(m[0]) ? "晚上" : m[0] === "昨早" ? "早上" : "");
		if (m = t.match(new RegExp(NUM_DAY + "天(?:以)?前"))) {
			const n = cnNum(m[1]);
			if (n && n <= 60) return hit(m, back(n), true);
		}
		if (m = t.match(/上上个?(?:周|星期|礼拜)([一二三四五六日天])/)) return hit(m, wkDay(addDaysK(wkMonday(TODAY), -14), WK_N[m[1]]), true);
		if (m = t.match(/上个?(?:周|星期|礼拜)([一二三四五六日天])/)) return hit(m, wkDay(addDaysK(wkMonday(TODAY), -7), WK_N[m[1]]), true);
		if (m = t.match(new RegExp("上个?月" + NUM_DAY + "[号日]"))) {
			const n = cnNum(m[1]);
			const d = new Date(ty, tm - 2, 1);
			const mx = new Date(ty, tm - 1, 0).getDate();
			if (n && n <= mx) {
				d.setDate(n);
				return hit(m, dkey(d), true);
			}
		}
		if (m = t.match(/(去年)?(\d{1,2})月(\d{1,2})[号日]?/)) {
			const mo = +m[2], dy = +m[3];
			if (mo >= 1 && mo <= 12 && dy >= 1 && dy <= 31 && !/^[\d万千百元块]/.test(t.slice(m.index + m[0].length))) {
				const k = (m[1] ? ty - 1 : ty) + "." + mo + "." + dy;
				if (parseKey(k) < tk) return hit(m, k, true);
				return null;
			}
		}
		if (m = t.match(/(\d{1,2})\.(\d{1,2})号?/)) {
			const mo = +m[1], dy = +m[2], pre = t[m.index - 1] || "", post = t.slice(m.index + m[0].length, m.index + m[0].length + 1);
			if (mo >= 1 && mo <= 12 && dy >= 1 && dy <= 31 && !/[\d.]/.test(pre) && !/[\d元块钱％%折]/.test(post)) {
				const k = ty + "." + mo + "." + dy;
				return parseKey(k) < tk ? hit(m, k, true) : null;
			}
		}
		if (m = t.match(/(?:这|本)(?:周|星期|礼拜)([一二三四五六日天])/)) return hit(m, wkDay(wkMonday(TODAY), WK_N[m[1]]), false);
		if (m = t.match(/(^|[^上下这本])(?:周|星期|礼拜)([一二三四五六日天])/)) {
			const wd = WK_N[m[2]], now = tk.getDay();
			if (wd === now) return null;
			const ago = (now - wd + 7) % 7;
			return hit({
				0: m[0].slice(m[1].length),
				index: m.index + m[1].length
			}, back(ago), false);
		}
		if (m = t.match(new RegExp("(^|[^\\d月.上下个])" + NUM_DAY + "号"))) {
			const n = cnNum(m[2]), after = t.slice(m.index + m[0].length);
			if (n && n <= 31 && !NOT_DAY_AFTER.test(after)) {
				const mm = {
					0: m[0].slice(m[1].length),
					index: m.index + m[1].length
				};
				if (n < td) return hit(mm, ty + "." + tm + "." + n, false);
				if (n > td) {
					if (n <= new Date(ty, tm - 1, 0).getDate()) return hit(mm, dkey(new Date(ty, tm - 2, n)), false);
				}
			}
		}
		return null;
	}
	function chatBareDay(t) {
		const m = String(t || "").match(new RegExp("(^|[^\\d月.上下个])" + NUM_DAY + "号"));
		if (!m) return null;
		const n = cnNum(m[2]), after = t.slice(m.index + m[0].length);
		if (!n || n > 31 || NOT_DAY_AFTER.test(after)) return null;
		const tk = parseKey(TODAY), ty = tk.getFullYear(), tm = tk.getMonth() + 1, td = tk.getDate();
		if (n === td) return null;
		let d = n > td ? new Date(ty, tm - 1, n) : new Date(ty, tm, n);
		if (d.getDate() !== n) return null;
		return {
			key: dkey(d),
			cut: m[0].slice(m[1].length),
			at: m.index + m[1].length
		};
	}
	function chatCutDay(t, d) {
		if (!d || !d.cut) return t;
		const i = t.indexOf(d.cut, Math.max(0, (d.at || 0) - 2));
		if (i < 0) return t;
		const r = (t.slice(0, i) + (d.rep || "") + t.slice(i + d.cut.length)).replace(/^[，,、的\s]+/, "").replace(/([，,])\s*[，,]/g, "$1").replace(/\s{2,}/g, " ").trim();
		return r.length >= 2 ? r : t;
	}
	function chatAmt(e) {
		if (!isleOn("money")) return 0;
		const p = parseEntry(e);
		if (!(p.prices && p.prices.length) || !expKindOf(e, p)) return 0;
		return amtSum(p.prices);
	}
	function amtWords(e, onlyCalc) {
		const amt = chatAmt(e);
		if (!amt) return "";
		const p = parseEntry(e), c = p.chain, n = (p.prices || []).length;
		if (c && n === 1 && c.said != null && Math.abs(c.said - c.sum) > .001) return "按你写的 " + c.said + " 元（" + c.expr + " 加起来是 " + c.sum + "），";
		if (c && n === 1) return c.expr + " 一共 " + amt + " 元，";
		if (n > 1) return "一共 " + amt + " 元，";
		return onlyCalc ? "" : amt + " 元";
	}
	// src/modules/tower/stages.js
	var STAGE_TYPES = {
		sleep: [
			"早点睡",
			"23 天早睡",
			"◐"
		],
		weight: [
			"体重管理",
			"体重管理",
			"◌"
		],
		water: [
			"多喝水",
			"14 天喝水",
			"◒"
		],
		exercise: [
			"坚持运动",
			"坚持运动",
			"↗"
		],
		book: [
			"读点书",
			"读点书",
			"▤"
		],
		custom: [
			"自定义计划",
			"",
			"＋"
		]
	};
	function stagePlans() {
		return SET.stagePlans || (SET.stagePlans = []);
	}
	function stageToday() {
		return key2iso(TODAY);
	}
	function stageEnd(p) {
		return p.mode === "days" ? healthAddDays(p.start, p.limit - 1) : "";
	}
	function stageInRange(p, date) {
		const end = stageEnd(p);
		return date >= p.start && (!end || date <= end);
	}
	function stageScheduled(p, date) {
		return stageInRange(p, date) && p.week.includes((/* @__PURE__ */ new Date(date + "T12:00:00")).getDay());
	}
	function stageWeights(p, date) {
		const rows = appState.HEALTH.records.weight;
		const baseline = rows.find((r) => r.id === p.baseId)?.value ?? p.baseKg;
		const latest = healthLatest(rows.filter((r) => r.date <= date && stageInRange(p, r.date)));
		return {
			baseline,
			latest,
			loss: latest ? Math.round((baseline - latest.value) * 20) / 10 : 0
		};
	}
	function stageWater(p, until) {
		const days = /* @__PURE__ */ new Map();
		for (const r of appState.HEALTH.records.water) if (r.date <= until && stageScheduled(p, r.date)) days.set(r.date, (days.get(r.date) || 0) + r.ml);
		const goal = healthWaterTarget(appState.HEALTH);
		return [...days].filter(([, ml]) => goal && ml >= goal).map(([date]) => date);
	}
	function stageBooks(p, until) {
		const titles = /* @__PURE__ */ new Set();
		for (const [day, page] of Object.entries(appState.PAGES)) {
			const date = key2iso(day);
			if (date > until || !stageInRange(p, date)) continue;
			for (const e of page.flow) {
				if (!(e.groups || []).some((g) => tplOf(g) === "book")) continue;
				if (/(?:没|未|还没|想|准备|计划)读完|没看完/.test(e.text) || !/读完|看完/.test(e.text)) continue;
				const title = parseEntry(e).title || e.text.match(/《([^》]+)》/)?.[1];
				if (title) titles.add(title);
			}
		}
		return [...titles];
	}
	function stageCount(p, date) {
		if (p.type === "water") return stageWater(p, date).length;
		if (p.type === "book" && p.byBook) return stageBooks(p, date).length;
		return Object.keys(p.log).filter((d) => d <= date && stageInRange(p, d) && p.log[d].met !== false).length;
	}
	function stageFinished(p, date) {
		if (stageEnd(p) && date > stageEnd(p)) return true;
		if (p.mode === "count") return stageCount(p, date) >= p.limit;
		return p.type === "weight" && p.goal && stageWeights(p, date).loss >= p.goal;
	}
	function stageProgress(p) {
		const date = stageToday(), count = stageCount(p, date), elapsed = Math.max(0, healthDays(p.start, date) + 1);
		let label = p.mode === "days" ? "第 " + Math.min(elapsed, p.limit) + " / " + p.limit + " 天" : "累计 " + count + " / " + p.limit + (p.byBook ? " 本" : " 次");
		let fraction = (p.mode === "days" ? elapsed : count) / p.limit;
		let result = p.type === "sleep" ? "已早睡 " + count + " 晚" : "已完成 " + count + " 次";
		if (date < p.start) label = p.start + " 开始";
		if (p.type === "water") result = "饮水达标 " + count + " 天";
		if (p.byBook) result = "已读完 " + count + " 本" + (p.bookGoal ? " / 目标 " + p.bookGoal + " 本" : "");
		if (p.type === "weight") {
			const w = stageWeights(p, date);
			label = p.mode === "open" ? "从 " + p.start + " 开始" : label;
			result = w.latest ? (w.loss < 0 ? "较起点增加 " + -w.loss : "已减 " + w.loss) + " 斤" : "等待体重记录";
			if (p.goal) {
				result += " / 目标 " + p.goal + " 斤";
				fraction = w.loss / p.goal;
			} else if (p.mode === "open") fraction = 0;
		}
		return {
			label,
			result,
			percent: Math.round(Math.max(0, Math.min(1, fraction)) * 100)
		};
	}
	function stageAction(p) {
		if (p.type === "sleep") return p.clock ? p.clock + " 前上床" : "早点睡";
		if (p.type === "water") return "记录饮水";
		if (p.type === "book") return p.byBook ? "读完一本书" : "读书 " + p.minutes + " 分钟";
		return p.action || p.name;
	}
	function stageScheduleLabel(p) {
		if (p.type === "weight" && !p.action) return "查看晨露小站的体重变化";
		if (p.byBook) return "关联小岛书屋的读完记录";
		return (p.week.length === 7 ? "每天" : "周" + [
			1,
			2,
			3,
			4,
			5,
			6,
			0
		].filter((d) => p.week.includes(d)).map((d) => "日一二三四五六"[d]).join("、")) + " · " + stageAction(p);
	}
	function towerGo(tab, id, key) {
		navigationState.cur = {
			name: "cycles",
			tab,
			id,
			key
		};
		render();
	}
	function towerList(tab) {
		while (navigationState.navStack.length && navigationState.navStack.at(-1).name === "cycles") navigationState.navStack.pop();
		navigationState.navFromBack = true;
		towerGo(tab);
	}
	function towerEl(tag, cls, text) {
		const el = document.createElement(tag);
		el.className = cls;
		if (text != null) el.textContent = text;
		return el;
	}
	function towerHeading(parent, title, action, fn) {
		const row = towerEl("div", "tw-heading");
		row.append(towerEl("h3", "", title));
		if (action) row.append(journalButton(action, "chip tw-primary", fn));
		parent.append(row);
	}
	function stageShowCard(parent, p) {
		const b = towerEl("button", "tw-card tw-plan");
		b.type = "button";
		const progress = stageProgress(p);
		const title = towerEl("strong", "", p.name + "  ›");
		b.append(title, towerEl("span", "tw-muted", stageScheduleLabel(p)));
		const stats = towerEl("div", "tw-stats");
		stats.append(towerEl("span", "", progress.label), towerEl("span", "", progress.result));
		b.append(stats);
		const bar = towerEl("progress", "");
		bar.max = 100;
		bar.value = progress.percent;
		b.append(bar);
		b.onclick = () => towerGo("detail", p.id);
		parent.append(b);
	}
	function stageOverview() {
		towerHeading(view, "我的计划", "＋ 新建计划", () => towerGo("templates"));
		const plans = stagePlans(), today = stageToday();
		const active = plans.filter((p) => !stageFinished(p, today)), past = plans.filter((p) => stageFinished(p, today));
		if (!active.length) view.append(towerEl("p", "tw-empty", "还没有进行中的计划"));
		for (const p of active) stageShowCard(view, p);
		if (past.length) {
			const archive = towerEl("details", "tw-archive");
			archive.append(towerEl("summary", "", "已结束的计划（" + past.length + "）"));
			for (const p of past) stageShowCard(archive, p);
			view.append(archive);
		}
	}
	function stageTemplates() {
		towerHeading(view, "选一个模板");
		for (const [k, [label, , icon]] of Object.entries(STAGE_TYPES)) view.append(journalButton(icon + "　" + label + "　›", "tw-choice", () => towerGo("form", void 0, k)));
	}
	function stageHasTask(p, date) {
		if (!stageScheduled(p, date) || p.byBook || p.type === "weight" && !p.action) return false;
		return !stageFinished(p, healthAddDays(date, -1));
	}
	function stageOpenHealth(type, date) {
		if (!isleOn("health") || appState.HEALTH.hidden.includes(type)) {
			toast("请先在晨露小站开启这一项");
			return;
		}
		navigationState.cur = {
			name: "health",
			tab: type
		};
		render();
		if (date) {
			healthRecordSheet(type);
			const input = $("#hlForm input[name=date]");
			if (input) input.value = date;
		}
	}
	function stageMark(p, date, time, met = true) {
		p.log[date] = {
			sym: "task",
			state: "done",
			text: stageAction(p),
			finishedTime: time || "",
			met
		};
		scheduleSave();
		render();
	}
	function stageHomeRow(box, p, date) {
		const row = towerEl("div", "tw-home"), log = p.log[date];
		const done = stageTaskDone(p, date);
		const toggle = journalButton(done ? "✓" : "●", "tw-check", () => {
			if (p.type === "water") {
				stageOpenHealth("water", date);
				return;
			}
			if (p.type === "weight" && p.action === "称重") {
				stageOpenHealth("weight", date);
				return;
			}
			if (log) {
				delete p.log[date];
				scheduleSave();
				render();
				return;
			}
			stageMark(p, date, "");
		});
		toggle.setAttribute("aria-label", stageAction(p) + "，" + (done ? "已记录" : "待记录"));
		row.append(toggle, journalButton(stageAction(p), "tw-home-title", () => towerGo("detail", p.id)));
		box.append(row);
	}
	function stageLogForm(p, selected) {
		const s = healthSheet("补记 · " + p.name, "<form id=\"stageLog\" class=\"tw-form\"><label>哪一天<input type=\"date\" name=\"date\" required></label><label>实际时间 · 选填<input type=\"time\" name=\"clock\"></label><div class=\"tw-error\" role=\"status\"></div><button class=\"rv-confirm\">保存记录</button><button type=\"button\" class=\"gm-btn\" id=\"stageRemove\">移除这天的记录</button></form>");
		const f = s.querySelector("form"), date = f.elements.date;
		date.min = p.start;
		date.max = stageEnd(p) && stageEnd(p) < stageToday() ? stageEnd(p) : stageToday();
		date.value = selected || date.max;
		const fill = () => {
			f.elements.clock.value = p.log[date.value]?.finishedTime || "";
			s.querySelector("#stageRemove").hidden = !p.log[date.value];
		};
		date.onchange = fill;
		fill();
		s.querySelector("#stageRemove").onclick = () => {
			delete p.log[date.value];
			scheduleSave();
			closeSheet();
			render();
		};
		f.onsubmit = (e) => {
			e.preventDefault();
			if (!stageScheduled(p, date.value)) {
				f.querySelector(".tw-error").textContent = "请选择计划安排的日期";
				return;
			}
			const time = f.elements.clock.value;
			closeSheet();
			stageMark(p, date.value, time, stageMet(p, time));
		};
	}
	function stageMet(p, time) {
		if (p.type !== "sleep" || !p.clock || !time) return true;
		const night = (t) => (journalRank(t) + 1200) % 1440;
		return night(time) <= night(p.clock);
	}
	function stageDetail(p) {
		towerHeading(view, p.name, "调整设置", () => towerGo("form", p.id, p.type));
		const info = towerEl("div", "tw-card"), stats = stageProgress(p);
		info.append(towerEl("strong", "", stats.label), towerEl("p", "", stats.result), towerEl("p", "tw-muted", stageScheduleLabel(p)), towerEl("p", "tw-muted", "开始 " + p.start + (stageEnd(p) ? "　结束 " + stageEnd(p) : "")));
		view.append(info);
		if (["water", "weight"].includes(p.type)) {
			const label = p.type === "weight" ? "体重" : "饮水";
			view.append(journalButton("去晨露小站记" + label + " ›", "tw-choice", () => stageOpenHealth(p.type, stageToday())));
			if (p.type === "weight") {
				const w = stageWeights(p, stageToday());
				view.append(towerEl("p", "tw-muted", "起始 " + w.baseline + " kg" + (w.latest ? "　最近 " + w.latest.value + " kg" : "")));
			}
		}
		if (p.byBook) {
			towerHeading(view, "已读完");
			for (const t of stageBooks(p, stageToday())) view.append(towerEl("p", "tw-record", t));
		} else if (p.type === "water") {
			towerHeading(view, "达标记录");
			const days = stageWater(p, stageToday());
			view.append(towerEl("p", "tw-record", days.reverse().join(" · ") || "还没有达标记录"));
		} else if (p.type !== "weight" || p.action && p.action !== "称重") {
			towerHeading(view, "最近记录", p.start <= stageToday() ? "补记" : "", () => stageLogForm(p));
			const dates = new Set(Object.keys(p.log));
			const last = stageEnd(p) && stageEnd(p) < stageToday() ? stageEnd(p) : stageToday();
			for (let i = 0; i < 7; i++) {
				const date = healthAddDays(last, -i);
				if (stageHasTask(p, date)) dates.add(date);
			}
			if (!dates.size) view.append(towerEl("p", "tw-empty", "还没有完成记录"));
			for (const date of [...dates].sort().reverse()) {
				const item = p.log[date];
				const state = !item ? "未记录" : item.met === false ? "晚于目标" : "已完成";
				view.append(journalButton(date + "　" + (item?.finishedTime ? item.finishedTime + "　" : "") + state, "tw-choice", () => stageLogForm(p, date)));
			}
		}
	}
	function stageTaskDone(p, date) {
		if (p.type === "water") return stageWater(p, date).includes(date);
		if (p.type === "weight" && p.action === "称重") return appState.HEALTH.records.weight.some((r) => r.date === date);
		return !!p.log[date];
	}
	// src/modules/journal/planning.js
	function planSay(o, text) {
		const q = o.e.schedule;
		if (!q) return false;
		composerState.CHAT = {
			mode: "one",
			base: o.base,
			outs: [o],
			text
		};
		chatShow("check", "记好了：" + vEsc(o.e.text) + "。<br>事情日期：" + planFull(q.eventDay) + "<br>已放到 " + planFull(o.day) + " 的待办。", [
			["go", "去看看"],
			["edit", "改一下"],
			["undo", "撤回"]
		], (a) => {
			if (a === "undo") chatUndo([o], text);
			else if (a === "go") {
				chatReplyHide();
				jumpToEntry(o.day, o.e._id);
			} else planEdit(o.e);
		});
		return true;
	}
	function planLocate(e) {
		let hit = null;
		Object.values(appState.PAGES).forEach((pg) => {
			const scan = (list) => {
				if (list.includes(e)) hit = { list };
				list.forEach((x) => {
					if (x.children) scan(x.children);
				});
			};
			scan(pg.plan);
			scan(pg.flow);
		});
		return hit;
	}
	function planEdit(e) {
		const q = e.schedule, loc = planLocate(e);
		if (!q || !loc) return;
		rowPopCloseAll();
		const s = healthSheet("修改安排", "<label>事项<input id=\"planTitle\" class=\"vt-in\" value=\"" + escAttr(e.text) + "\"></label><label>事情日期<input id=\"planEvent\" class=\"vt-in\" type=\"date\" value=\"" + key2iso(q.eventDay) + "\"></label><label>放进待办的日期<input id=\"planDay\" class=\"vt-in\" type=\"date\" value=\"" + key2iso(e.due || dayOfEntry(e)) + "\"></label><button class=\"rv-confirm\" id=\"planSave\">保存</button>");
		s.querySelector("#planSave").onclick = () => {
			const title = s.querySelector("#planTitle").value.trim(), ev = s.querySelector("#planEvent").value, dt = s.querySelector("#planDay").value;
			if (!title || !ev || !dt) {
				toast("把事项和两个日期填好");
				return;
			}
			const day = dt.split("-").map(Number).join(".");
			snapshot("修改安排");
			if (dayOfEntry(e) !== day) {
				const f = planLocate(e);
				f.list.splice(f.list.indexOf(e), 1);
				if (!appState.PAGES[day]) appState.PAGES[day] = {
					plan: [],
					flow: []
				};
				appState.PAGES[day].plan.push(e);
				Object.values(appState.PAGES).forEach((p) => (p.voOut || []).forEach((x) => {
					if (x.id === e._id) x.d = day;
				}));
			}
			e.text = title;
			e.due = day;
			e.noDue = 1;
			e.schedule = {
				...q,
				eventDay: ev.split("-").map(Number).join("."),
				day
			};
			delete e.arrived;
			scheduleSave();
			closeSheet();
			chatReplyHide();
			gotoDay(day);
		};
	}
	// src/modules/journal/actions.js
	var actionsState = {};
	var dueTarget = null;
	function makeICS(e) {
		const da = (e.due && parseKey(e.due) >= parseKey(TODAY) ? e.due : TODAY).split(".").map(Number);
		const tm = (e.time || "09:00").split(":").map(Number);
		const pad = (n) => String(n).padStart(2, "0");
		const dt = da[0] + pad(da[1]) + pad(da[2]) + "T" + pad(tm[0]) + pad(tm[1]) + "00";
		const ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//bujo//CN\r\nBEGIN:VEVENT\r\nUID:" + (e._id || 0) + "-" + dt + "@bujo\r\nDTSTART:" + dt + "\r\nSUMMARY:" + String(e.text || "提醒").replace(/[\r\n,;]/g, " ") + "\r\nBEGIN:VALARM\r\nACTION:DISPLAY\r\nTRIGGER:-PT0M\r\nDESCRIPTION:啾啾岛\r\nEND:VALARM\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n";
		platform.download(new Blob([ics], { type: "text/calendar" }), (String(e.text || "提醒").slice(0, 12) || "提醒") + ".ics");
		toast("已生成日历文件 · 打开并「添加」到系统日历，它会真的响");
	}
	function openDueSheet(e) {
		if (e.schedule) {
			planEdit(e);
			return;
		}
		dismissKB();
		dueTarget = e;
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">修改日期 · " + ((e.text || "").slice(0, 12) || "未命名") + "</div><div class=\"mig-quick\" id=\"dQuick\"></div><input type=\"date\" class=\"qdate\" id=\"dDate\"><div class=\"gs-new\" style=\"margin-top:4px\"><button class=\"gm-btn\" id=\"dClear\" style=\"flex:1;padding:10px\">清除日期</button><button class=\"gm-btn\" id=\"dOk\" style=\"flex:1;padding:10px;background:var(--accent);color:#fff;border-color:var(--accent)\">确定</button></div>";
		setupDatePick("dQuick", "dDate");
		if (e.due) try {
			$("#dDate").value = key2iso(e.due);
		} catch (_) {}
		$("#dClear").onclick = () => {
			snapshot("修改日期");
			delete dueTarget.due;
			scheduleSave();
			toast("已清除日期");
			closeSheet();
		};
		$("#dOk").onclick = () => {
			const v = $("#dDate").value;
			if (!v) {
				closeSheet();
				return;
			}
			snapshot("修改日期");
			const k = iso2key(v);
			dueTarget.due = k;
			if (dueTarget.badge && dueTarget.badge.indexOf("→") === 0) dueTarget.badge = dueTarget.badge.replace(/→[\d.]+/, "→" + fmtShort(k));
			scheduleSave();
			toast("已改到 " + fmtKey(k) + "（" + weekCN(k) + "）");
			closeSheet();
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		placeToolbar();
	}
	function openTimeSheet(e) {
		dismissKB();
		dueTarget = e;
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">修改提醒时间 · " + ((e.text || "").slice(0, 12) || "未命名") + "</div><input type=\"time\" class=\"qdate\" id=\"tTime\" value=\"" + (e.time || "09:00") + "\"><div class=\"gs-new\" style=\"margin-top:4px\"><button class=\"gm-btn\" id=\"tClear\" style=\"flex:1;padding:10px\">清除时间</button><button class=\"gm-btn\" id=\"tOk\" style=\"flex:1;padding:10px;background:var(--accent);color:#fff;border-color:var(--accent)\">确定</button></div><button class=\"gs-done\" id=\"tCal\" style=\"margin-top:12px\">加入系统日历（会真的响）</button><div class=\"rp-note\" style=\"margin-top:8px\">页面里的 ⏰ 只是标记不会响；加入系统日历才有推送提醒</div>";
		$("#tClear").onclick = () => {
			snapshot("修改时间");
			delete dueTarget.time;
			dueTarget.noTime = 1;
			if (dueTarget.sym !== "task") {
				dueTarget.journalTime = "";
				delete dueTarget.startTime;
				delete dueTarget.endTime;
			}
			scheduleSave();
			toast("已清除时间");
			closeSheet();
		};
		$("#tOk").onclick = () => {
			const v = $("#tTime").value;
			if (v) {
				snapshot("修改时间");
				dueTarget.time = v;
				dueTarget.noTime = 1;
				if (dueTarget.sym !== "task") {
					dueTarget.startTime = v;
					delete dueTarget.journalTime;
				}
				scheduleSave();
				toast("已改为 " + v);
			}
			closeSheet();
		};
		$("#tCal").onclick = () => {
			const v = $("#tTime").value;
			if (v && v !== dueTarget.time) {
				dueTarget.time = v;
				if (dueTarget.sym !== "task") dueTarget.startTime = v;
				scheduleSave();
			}
			makeICS(dueTarget);
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		placeToolbar();
	}
	function setupDatePick(quickId, dateId) {
		const di = $("#" + dateId);
		di.min = key2iso(TOMORROW);
		di.value = key2iso(TOMORROW);
		const box = $("#" + quickId);
		box.innerHTML = "";
		[
			["明天", TOMORROW],
			["后天", addDaysK(TODAY, 2)],
			["下周一", nextMondayKey()]
		].forEach(([n, k]) => {
			const c = document.createElement("button");
			c.className = "chip";
			c.textContent = n + " " + fmtShort(k);
			c.onclick = (ev) => {
				ev.preventDefault();
				di.value = key2iso(k);
			};
			box.appendChild(c);
		});
	}
	function pickDate(dateId) {
		const v = $("#" + dateId).value;
		if (!v) return TOMORROW;
		const k = iso2key(v);
		return parseKey(k) > parseKey(TODAY) ? k : TOMORROW;
	}
	actionsState.qsTarget = null;
	function dismissKB() {
		const ae = document.activeElement;
		if (ae && ae.blur) ae.blur();
		navigationState.focusRef = null;
	}
	function openQSheet() {
		dismissKB();
		buildQSheet();
		$("#qsheet").classList.add("on");
		$("#mask").classList.add("on");
		placeToolbar();
	}
	function askMemo(t) {
		dismissKB();
		const S = $("#qsheet");
		S.innerHTML = "<div class=\"gs-title\">✓ 已完成 · 补一句备注？（会进日报周报）</div><input id=\"qMemo\" class=\"qdate\" placeholder=\"比如：对方已确认 / 结果如何…\" value=\"" + escAttr(t.note) + "\"><div class=\"gs-new\" style=\"margin-top:4px\"><button class=\"gm-btn\" id=\"qSkip\" style=\"flex:1;padding:10px\">跳过</button><button class=\"gm-btn\" id=\"qSave\" style=\"flex:1;padding:10px;background:var(--accent);color:#fff;border-color:var(--accent)\">保存备注</button></div>";
		$("#qSkip").onclick = () => closeQSheet();
		$("#qSave").onclick = () => {
			const m = $("#qMemo").value.trim();
			if (m && m !== t.note) {
				t.note = m;
				scheduleSave();
			}
			closeQSheet();
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		placeToolbar();
	}
	function closeQSheet() {
		$("#qsheet").classList.remove("on");
		$("#qsheet").replaceChildren();
		if (!$("#drawer").classList.contains("on")) $("#mask").classList.remove("on");
		render();
	}
	function bindSheetFooter(sheet, e) {
		const footer = document.createElement("div");
		footer.className = "record-footer";
		const add = (id, label, fn) => {
			const button = document.createElement("button");
			button.id = id;
			button.textContent = label;
			button.onclick = fn;
			footer.appendChild(button);
		};
		add("qShare", "分享", () => {
			closeQSheet();
			openShare(shEntryPayload(e));
		});
		add("qRemove", "删除", () => {
			const day = dayOfEntry(e), loc = findEntry(e, day);
			if (!loc) return;
			if (e.badge?.startsWith(">×") && navigationState.pendingDel !== e) {
				navigationState.pendingDel = e;
				toast("该任务带迁移历史 · 再点一次确认");
				return;
			}
			snapshot("删除整行", day);
			loc.list.splice(loc.idx, 1);
			navigationState.focusRef = null;
			scheduleSave();
			closeQSheet();
		});
		add("qUndo", "撤回", () => {
			const last = undoLastChange();
			navigationState.focusRef = null;
			scheduleSave();
			closeQSheet();
			toast("已撤回 · " + last.label);
		});
		footer.lastChild.disabled = !navigationState.undoStack.length;
		sheet.appendChild(footer);
	}
	function buildQSheet() {
		const t = actionsState.qsTarget, S = $("#qsheet");
		const isSd = t.state === "someday";
		S.dataset.eid = t._id;
		S.setAttribute("role", "dialog");
		S.setAttribute("aria-label", "条目操作");
		const rows = rowInfoRows(t, t.sym === "task");
		const title = "<div class=\"gs-title\">" + vEsc((t.text || "未命名").slice(0, 40)) + "</div>";
		if (t.sym !== "task") {
			S.innerHTML = title + "<div id=\"rowPop\">" + rowRowsHTML(t, rows) + "</div>";
			S.querySelector("#rowPop").dataset.eid = t._id;
			bindRowActs(S, t, rows);
			bindSheetFooter(S, t);
			return;
		}
		S.innerHTML = title + "<div class=\"qs-info\" id=\"qsInfo\">" + rowRowsHTML(t, rows) + "</div><div class=\"rv-grid\"><button class=\"rv-btn b-drop\" id=\"qDrop\"><span class=\"g\">×</span>不做了</button><button class=\"rv-btn b-mig\"  id=\"qMig\"><span class=\"g\">›</span>推迟</button>" + (isSd ? "<button class=\"rv-btn\" id=\"qBack\"><span class=\"g\">⤴</span>今天做</button>" : "<button class=\"rv-btn\" id=\"qSd\"><span class=\"g\" style=\"color:var(--ink-faint)\">☾</span>放进待办池</button>") + "<button class=\"rv-btn b-del\" id=\"qDel\"><span class=\"g\">→</span>转交</button></div><div class=\"rv-mig-panel\" id=\"qMigPanel\"><div class=\"mig-quick\" id=\"qQuick\"></div><input type=\"date\" class=\"qdate\" id=\"qDate\"><input id=\"qNote\" placeholder=\"一句话进度（可不填）\"><button class=\"rv-confirm\" id=\"qGo\">确认推迟</button></div><div class=\"rv-mig-panel\" id=\"qDelPanel\"><input id=\"qDelTo\" class=\"qdate\" placeholder=\"转交给谁\" style=\"margin-bottom:10px\"><div class=\"mig-quick\" id=\"qDelQuick\"></div><input type=\"date\" class=\"qdate\" id=\"qDelDate\"><button class=\"rv-confirm\" id=\"qDelGo\">确认转交 · 到期提醒我跟进</button></div>";
		const fin = (msg) => {
			scheduleSave();
			toast(msg);
			closeQSheet();
		};
		bindRowActs($("#qsInfo"), t, rows);
		if ($("#qSd")) $("#qSd").onclick = () => {
			snapshot("处理任务", dayOfEntry(t));
			t.state = "someday";
			delete t.due;
			t.badge = "☾ 想做";
			fin("☾ 收进「待办池」· 不催你，想做时去侧栏捞");
		};
		if ($("#qBack")) $("#qBack").onclick = () => {
			somedayPull(t, dayOfEntry(t));
			fin("⤴ 已捞回今天");
		};
		$("#qDrop").onclick = () => {
			snapshot("处理任务", dayOfEntry(t));
			t.state = "dropped";
			t.badge = "不做了";
			fin("✕ 已放弃 · 保留划痕");
		};
		$("#qDel").onclick = () => {
			$("#qMigPanel").classList.remove("on");
			$("#qDelPanel").classList.toggle("on");
		};
		$("#qMig").onclick = () => {
			$("#qDelPanel").classList.remove("on");
			$("#qMigPanel").classList.toggle("on");
		};
		setupDatePick("qQuick", "qDate");
		setupDatePick("qDelQuick", "qDelDate");
		$("#qDelGo").onclick = () => {
			const to = $("#qDelTo").value.trim();
			if (!to) {
				toast("先填转交给谁");
				return;
			}
			snapshot("处理任务", dayOfEntry(t));
			const f = pickDate("qDelDate");
			t.state = "delegated";
			t.delegate = {
				to,
				follow: f
			};
			delete t.followArrived;
			t.badge = "→ " + to + " · " + fmtShort(f) + " 跟进";
			fin("→ 已转交给 " + to + "，" + fmtKey(f) + " 提醒跟进");
		};
		bindSheetFooter(S, t);
		$("#qGo").onclick = () => {
			snapshot("处理任务", dayOfEntry(t));
			const sel = pickDate("qDate");
			const note = $("#qNote").value.trim();
			t.state = "migrated";
			t.due = sel;
			t.mig = (t.mig || 0) + 1;
			if (note) t.note = note;
			t.badge = "→" + fmtShort(sel) + (note ? " · " + note : "");
			fin("› 已推迟到 " + fmtKey(sel));
		};
	}
	// src/modules/journal/timeline.js
	var dayPeriods = /* @__PURE__ */ new Map([
		["凌晨", 0],
		["早上", 360],
		["上午", 540],
		["中午", 720],
		["下午", 780],
		["傍晚", 1020],
		["晚上", 1080]
	]);
	function journalNow() {
		const d = /* @__PURE__ */ new Date();
		return [d.getHours(), d.getMinutes()].map((n) => String(n).padStart(2, "0")).join(":");
	}
	function journalClock(e) {
		if (e.sym === "task" && e.state === "done") return e.finishedTime || "";
		if (e.journalTime !== void 0) return e.journalTime;
		if (e.startTime || e.time) return e.startTime || e.time;
		if (e.sym === "task") return "";
		const period = (e.text || "").match(/^(?:今天|昨天|前天)?(凌晨|早上|上午|中午|下午|傍晚|晚上)/);
		return period ? period[1] : "";
	}
	function journalBody(e) {
		const start = e.startTime || e.time;
		if (!start || !e.text) return e.text || "";
		const parsed = journalTimedLine(e.text);
		if (parsed && journalRank(parsed.time) === journalRank(start)) return parsed.body;
		const matches = e.text.matchAll(/(?:凌晨|早上|上午|中午|下午|傍晚|晚上)?(?:[01]?\d|2[0-3])[:：][0-5]\d/g);
		for (const clock of matches) {
			const left = e.text.slice(0, clock.index), right = e.text.slice(clock.index + clock[0].length);
			if (/《[^》]*$|[\d至到~～—-]$/.test(left) || /^[\d~～—-]|^[至到]\s*\d/.test(right)) continue;
			const time = journalTimedLine(clock[0] + " 活动");
			if (time && journalRank(time.time) === journalRank(start)) return (left + right).trim() || e.text;
		}
		return e.text;
	}
	function journalRank(value) {
		if (dayPeriods.has(value)) return dayPeriods.get(value);
		if (/^\d{1,2}:\d{2}$/.test(value)) {
			const [h, m] = value.split(":").map(Number);
			return h * 60 + m;
		}
		return Infinity;
	}
	function journalButton(label, cls, action) {
		const b = document.createElement("button");
		b.type = "button";
		b.className = cls;
		b.textContent = label;
		b.onclick = (ev) => {
			ev.stopPropagation();
			action();
		};
		return b;
	}
	function journalTimeSheet(e) {
		const completed = e.sym === "task" && e.state === "done";
		const value = journalClock(e);
		const s = healthSheet(completed ? "实际完成时间" : "发生时间", "<label>" + (completed ? "完成时间" : "开始时间") + "<input id=\"jtClock\" class=\"vt-in\" type=\"time\"></label>" + (completed ? "" : "<label>结束时间（选填）<span class=\"journal-end-field\"><input id=\"jtEnd\" class=\"vt-in\" type=\"time\"><button id=\"jtEndClear\" type=\"button\" aria-label=\"清空结束时间\">×</button></span></label>") + "<div class=\"gs-chips\" id=\"jtPeriods\"></div><div class=\"journal-time-actions\"><button id=\"jtClear\">时间未定</button><button class=\"rv-confirm\" id=\"jtSave\">保存时间</button></div>");
		function save(value) {
			snapshot("修改记录时间", dayOfEntry(e) || editKey());
			if (completed) {
				e.finishedTime = value;
				const p = stagePlans().find((p) => Object.values(p.log).includes(e));
				if (p) e.met = stageMet(p, value);
			} else if (e.sym !== "task") {
				e.text = journalBody(e);
				e.noTime = 1;
				delete e.endTime;
				delete e.startTime;
				if (value.includes(":")) {
					e.startTime = e.time = value;
					if (end.value) e.endTime = end.value;
					delete e.journalTime;
				} else {
					e.journalTime = value;
					delete e.time;
				}
			}
			scheduleSave();
			closeSheet();
			render();
		}
		const input = s.querySelector("#jtClock");
		const end = s.querySelector("#jtEnd");
		if (end) {
			end.value = e.endTime || "";
			s.querySelector("#jtEndClear").onclick = () => {
				end.value = "";
				end.focus();
			};
		}
		if (value.includes(":")) input.value = value.padStart(5, "0");
		const chips = s.querySelector("#jtPeriods");
		chips.appendChild(journalButton("刚刚", "gs-chip", () => save(journalNow())));
		for (const period of dayPeriods.keys()) chips.appendChild(journalButton(period, "gs-chip" + (value === period ? " on" : ""), () => save(period)));
		s.querySelector("#jtClear").onclick = () => save("");
		s.querySelector("#jtSave").onclick = () => {
			if (input.value) save(input.value);
			else input.focus();
		};
	}
	function journalTimeButton(e, continued = false) {
		const value = journalClock(e);
		const b = journalButton(value || (continued ? "··:··" : "时间未定"), "journal-time" + (value ? "" : continued ? " no-time continued" : " no-time"), () => journalTimeSheet(e));
		if (value && e.endTime && e.sym !== "task") {
			b.classList.add("has-end");
			const end = document.createElement("small");
			end.className = "journal-end";
			end.textContent = "~" + e.endTime;
			b.appendChild(end);
		}
		b.setAttribute("aria-label", "修改" + (e.sym === "task" && e.state === "done" ? "完成时间" : "发生时间") + "，" + b.textContent);
		return b;
	}
	function journalCompleted(e) {
		if (!["today", "history"].includes(navigationState.cur.name)) {
			askMemo(e);
			return;
		}
		if ($("#qsheet").classList.contains("on")) closeQSheet();
		scheduleSave();
		if (e.doneDay && e.doneDay !== TODAY) {
			const notice = $("#toast");
			notice.textContent = "已在原日完成 ";
			const change = journalButton("改为今天完成", "history-completion", () => {
				if (e.state === "done" && dayOfEntry(e)) {
					e.doneDay = TODAY;
					scheduleSave();
					render();
				}
				notice.classList.remove("on");
				change.remove();
			});
			notice.appendChild(change);
			notice.classList.add("on");
			clearTimeout(notice._tm);
			notice._tm = setTimeout(() => {
				notice.classList.remove("on");
				change.remove();
			}, 3e3);
			return;
		}
		composerState.CHAT = {
			mode: "tip",
			base: editKey()
		};
		chatShow("check", "已完成。", [
			["time", "补时间"],
			["memo", "写备注"],
			["undo", "撤回"]
		], (a) => {
			chatReplyHide();
			if (e.state !== "done") return;
			if (a === "time") journalTimeSheet(e);
			else if (a === "memo") askMemo(e);
			else {
				e.state = e.doneFromPool ? "someday" : "open";
				delete e.doneFromPool;
				delete e.doneDay;
				delete e.finishedTime;
				scheduleSave();
				render();
			}
		});
	}
	function journalRender(box, date, editable, majors, sides, minors) {
		const items = majors.map((e) => ({
			e,
			source: date
		}));
		for (const p of stagePlans()) {
			const e = p.log[key2iso(date)];
			if (e) items.push({
				e,
				source: date,
				done: true,
				stage: p
			});
		}
		for (const source of Object.keys(appState.PAGES)) {
			const pg = appState.PAGES[source];
			for (const e of [...pg.plan, ...pg.flow]) if (e.sym === "task" && e.state === "done" && (e.doneDay || source) === date) items.push({
				e,
				source,
				done: true
			});
		}
		for (const e of sides) items.push({
			e,
			source: date,
			house: sideHome(e)
		});
		for (const e of minors.filter((e) => e.meal && e.sym !== "task")) items.push({
			e,
			source: date,
			meal: true
		});
		const water = isleOn("health") && !(appState.HEALTH.hidden || []).includes("water") ? appState.HEALTH.records.water.filter((r) => r.date === key2iso(date)) : [];
		const head = secHead("日常", items.length + (water.length ? 1 : 0), !items.length && !water.length, null);
		const sub = document.createElement("small");
		sub.className = "journal-sub";
		sub.textContent = "按时间线记录";
		head.appendChild(sub);
		box.appendChild(head);
		items.sort((a, b) => journalRank(journalClock(a.e)) - journalRank(journalClock(b.e)) || (a.e._id || 0) - (b.e._id || 0));
		const list = document.createElement("div");
		list.className = "journal-list";
		box.appendChild(list);
		let lastUntimed = false;
		for (const { e, source, done, house, meal, stage } of items) {
			const item = document.createElement("div");
			item.className = "journal-group";
			item.appendChild(journalTimeButton(e, lastUntimed));
			lastUntimed = !journalClock(e);
			if (done || house || meal) {
				const ref = document.createElement("div");
				ref.className = "journal-ref";
				const origin = journalButton(done ? "✓ " + journalBody(e) : journalBody(e), "journal-origin", () => stage ? towerGo("detail", stage.id) : jumpToEntry(source, e._id));
				if (!stage) bindEntryHold(origin, e);
				if (house || meal) origin.insertAdjacentHTML("afterbegin", houseMark(house || "food"));
				ref.appendChild(origin);
				if (house) ref.appendChild(journalButton(ISLE[house].h + " ›", "journal-home", () => isleGo(house)));
				if (done && (e.note || (e.children || []).length)) {
					const details = document.createElement("details"), summary = document.createElement("summary");
					summary.textContent = "查看详情";
					details.appendChild(summary);
					if (e.note) {
						const note = document.createElement("p");
						note.textContent = e.note;
						details.appendChild(note);
					}
					for (const child of e.children || []) {
						const line = document.createElement("div");
						if (journalClock(child)) line.append(journalTimeButton(child));
						line.append(document.createTextNode(" " + child.text));
						details.appendChild(line);
					}
					ref.appendChild(details);
				}
				item.appendChild(ref);
			} else {
				const content = document.createElement("div");
				content.className = "journal-content";
				content.appendChild(entryNode(e, editable, false, false, false, true));
				if (editable && e.isleAsk) {
					const ask = isleAskNode(e);
					if (ask) content.appendChild(ask);
				}
				item.appendChild(content);
			}
			list.appendChild(item);
		}
		if (water.length) {
			const total = water.reduce((sum, r) => sum + r.ml, 0);
			list.appendChild(journalButton("饮水 · " + water.length + " 次 · " + total + " ml ›", "journal-water", () => {
				navigationState.cur = {
					name: "health",
					tab: "water"
				};
				render();
			}));
		}
		if (editable) box.appendChild(secPh(items.length ? "接着记" : date === TODAY ? "刚刚做了什么？" : "补一件这天的事", () => secWrite(date, "event")));
	}
	function journalTimedLine(text) {
		const line = text.trim().replace(/^今天\s*/, "");
		const range = journalRange(line);
		if (range) return {
			...range,
			time: range.startTime
		};
		const match = line.match(/^(凌晨|早上|上午|中午|下午|傍晚|晚上)?(?:([01]?\d|2[0-3])[:：]([0-5]\d)|([零一二两三四五六七八九十\d]{1,3})点(半|一刻|三刻|[零一二两三四五六七八九十\d]{1,3}分?)?)(?![\d:：])/);
		if (!match) return null;
		const body = line.slice(match[0].length).replace(/^[\s，,、]+/, "");
		if (!body || !match[1] && match[4] === "一" && !match[5] && /^[也都儿点]/.test(body) || /^[至到]?\s*\d{1,2}[:：]|^[-—~～]/.test(body)) return null;
		let hour = match[2] === void 0 ? cnNum(match[4].replace(/^零$/, "0")) : Number(match[2]);
		const minuteText = match[5] || "";
		const minute = match[3] !== void 0 ? Number(match[3]) : {
			"": 0,
			"半": 30,
			"一刻": 15,
			"三刻": 45
		}[minuteText] ?? cnNum(minuteText.replace(/分$/, "").replace(/^零/, "") || "0");
		if (hour === null || hour > 23 || minute === null || minute > 59) return null;
		if (/^(下午|傍晚|晚上)$/.test(match[1]) && hour < 12) hour += 12;
		if (match[1] === "中午" && hour <= 2) hour += 12;
		if ((match[1] === "凌晨" || match[1] === "晚上") && hour === 12) hour = 0;
		return {
			time: [hour, minute].map((n) => String(n).padStart(2, "0")).join(":"),
			body
		};
	}
	function journalElapsedLine(text, relativeDates) {
		const line = journalTimedLine(text);
		if (!line || /提醒|通知|记得|别忘|待办|待会|稍后|打算|计划|需要|还要|还没|必须|截止|明天|后天|下周|下个?月/.test(line.body)) return false;
		if (/^(?:交(?:周报|作业|报告)|提交|预约|预定|续费|还款|要)/.test(line.body)) return false;
		const day = relativeDates ? TODAY : chatBase();
		if (!day) return false;
		if (day !== TODAY) return parseKey(day) < parseKey(TODAY);
		const now = /* @__PURE__ */ new Date();
		const minuteOfDay = journalRank(line.time);
		const current = now.getHours() * 60 + now.getMinutes();
		return (minuteOfDay + 1200) % 1440 <= (current + 1200) % 1440;
	}
	// src/modules/journal/voice.js
	var VO_TASK_RE = /(要|得去|记得|别忘了|准备|打算|计划|约了|需要|该去|待会|回头)/;
	function voSplit(text) {
		return splitIntents(String(text || ""));
	}
	function voRoute(t) {
		if (/^(昨天|昨晚|昨儿)/.test(t)) return {
			dest: "past",
			day: addDaysK(TODAY, -1)
		};
		if (/^前天/.test(t)) return {
			dest: "past",
			day: addDaysK(TODAY, -2)
		};
		const dd = detectDue(t);
		if (dd && parseKey(dd.key) > parseKey(TODAY)) return {
			dest: "day",
			day: dd.key
		};
		if (VO_TASK_RE.test(t) && !/了(?:[，,。！!？?]|$)/.test(t)) return { dest: "plan" };
		return { dest: "flow" };
	}
	function voRelDay(k) {
		return k === TOMORROW ? "明天" : k === addDaysK(TODAY, 2) ? "后天" : k === addDaysK(TODAY, 3) ? "大后天" : k === addDaysK(TODAY, -1) ? "昨天" : k === addDaysK(TODAY, -2) ? "前天" : "";
	}
	function voGroupLabel(it) {
		if (it.dest === "pool") return "待办池";
		if (it.house) return (it.day ? fmtKey(it.day) + " · " : "") + ISLE[it.house].h;
		if (it.dest === "flow") return it.th ? "今天的随想" : "今天的日常";
		if (it.dest === "plan") return "今天的待办";
		const r = voRelDay(it.day);
		return (r ? r + " " : "") + fmtKey(it.day) + (it.dest === "past" ? it.th ? " · 随想" : " · 日常" : " · 待办");
	}
	var VO_DAY_PATS = [
		/\d{1,2}\.\d{1,2}号?/,
		/大后天/,
		/后天/,
		/明天/,
		/下+周[一二三四五六日天]/,
		/(?:这周|本周|周)[一二三四五六日天]/,
		/下个?月\d{1,2}[号日]/,
		/\d{1,2}月\d{1,2}[号日]/,
		/下个?月/
	];
	function voStripDay(t, it) {
		const tidy = (s) => s.replace(/^[，,、\s]+/, "").replace(/([，,])\s*[，,]/g, "$1").replace(/\s{2,}/g, " ").trim();
		if (it.day) {
			const d = it.dest === "past" ? chatPastDay(t) : chatBareDay(t);
			if (d && d.key === it.day) {
				const r = chatCutDay(t, d);
				if (r !== t) return {
					text: r,
					cut: d.cut
				};
			}
		}
		if (it.dest === "past") {
			const m = t.match(/^(昨天|昨儿|前天)(?:的)?/);
			if (m && addDaysK(TODAY, m[1] === "前天" ? -2 : -1) === it.day) {
				const r = tidy(t.slice(m[0].length));
				if (r.length >= 2) return {
					text: r,
					cut: m[1]
				};
			}
			if (/^昨晚/.test(t) && it.day === addDaysK(TODAY, -1)) return {
				text: "晚上" + t.slice(2),
				cut: "昨晚"
			};
		}
		if (it.dest === "day") for (const re of VO_DAY_PATS) {
			const m = t.match(re);
			if (!m) continue;
			const dd = detectDue(m[0]);
			if (!dd || dd.key !== it.day) continue;
			const r = tidy(t.slice(0, m.index) + t.slice(m.index + m[0].length));
			if (r.length >= 2) return {
				text: r,
				cut: m[0]
			};
		}
		return {
			text: t,
			cut: null
		};
	}
	function voBuild(draft, prev) {
		return chatItems(draft, true).map((ci) => (prev || []).find((x) => x.src === ci.src) || chatToVo(ci));
	}
	function voSetDest(it, dest, day, asTh) {
		delete it.house;
		it.manual = true;
		if (asTh && (dest === "flow" || dest === "past")) it.th = it.th || thGuess(it.fixed || it.text) || "dash";
		else delete it.th;
		it.dest = dest;
		if (day) it.day = day;
		else delete it.day;
		if (!it.edited) {
			const sd = voStripDay(it.fixed, it);
			it.text = sd.text;
			it.cut = sd.cut;
		}
	}
	function voMeta(it) {
		const t = it.text || "", p = parseLine(t), chips = [], notes = [];
		(it.fixes || []).forEach((f, fi) => {
			if (t.includes(f.to)) chips.push({
				t: "听写的「" + f.from + "」→ " + f.to + " ↺",
				cls: "fix",
				fi
			});
		});
		if (p.store) {
			const o = storeIndex()[p.store];
			const visit = it.dest === "flow" || it.dest === "past", dk = it.dest === "past" ? it.day : TODAY;
			let lab;
			if (visit) {
				const n = o ? o.cnt + (o.days.has(dk) ? 0 : 1) : 1;
				lab = n === 1 ? "第一次" : "第 " + n + " 次";
			} else lab = o ? "去过 " + o.cnt + " 次" : "还没去过";
			chips.push({
				house: "food",
				t: p.store + " · " + lab,
				cls: "food"
			});
			if (!t.includes(p.store)) {
				const d = DD();
				const said = ([...storeCores()].find(([c, st]) => st === p.store && t.includes(c)) || [])[0] || (Object.entries(d.same).concat(Object.entries(d.fix)).find(([v, c]) => t.includes(v) && canonStore(c) === p.store) || [])[0];
				if (said) notes.push("「" + said + "」认成你" + (o ? " " + fmtKey(o.last) + " " : "") + "记过的「" + p.store + "」");
			}
		}
		if (p.verdict) chips.push({ t: (p.vNeg ? "避雷 · " : "") + p.verdict });
		const ws = (p.withs || []).filter((w) => w !== "独自");
		if (ws.length) chips.push({ t: "和 " + ws.slice(0, 4).join("、") });
		parseCompanionsRaw(t).forEach((r) => {
			const c = canonPerson(r);
			if (c !== r && !(it.fixes || []).some((f) => f.from === r)) notes.push("「" + r + "」就是你写的「" + c + "」");
		});
		if ((p.prices || []).length) {
			const k = expKindOf({
				sym: "event",
				text: t
			}, p), sum = amtSum(p.prices);
			chips.push({
				house: "money",
				t: (k ? expLabel(k) + " " : "") + "¥" + sum
			});
		}
		if (p.title) chips.push({
			house: /读|书/.test(t) ? "book" : "movie",
			t: "《" + p.title + "》" + (p.score != null ? " " + p.score + "分" : "")
		});
		const tm = detectTime(t);
		if (tm) chips.push({
			clock: true,
			t: tm
		});
		if (it.cut && !it.edited) notes.push("原话「" + it.fixed + "」· 放到那天时去掉「" + it.cut + "」");
		return {
			chips,
			notes
		};
	}
	function voMetaHTML(it, i) {
		const m = voMeta(it);
		return (m.chips.length ? "<div class=\"vo-meta\">" + m.chips.map((c) => "<span class=\"badge" + (c.cls === "fix" ? " acc vo-fx" : c.cls === "food" ? " vo-food" : "") + "\"" + (c.fi != null ? " data-fi=\"" + c.fi + "\" data-i=\"" + i + "\"" : "") + ">" + (c.clock ? lineIcon("time") : houseMark(c.house)) + vEsc(c.t) + "</span>").join("") + "</div>" : "") + (m.notes.length ? "<div class=\"vo-note\">" + m.notes.map(vEsc).join(" · ") + "</div>" : "");
	}
	function voPickerHTML(it, i) {
		const opts = [
			[
				"flow",
				"",
				"今天的日常"
			],
			[
				"flow",
				"",
				"今天的随想",
				1
			],
			[
				"plan",
				"",
				"今天的待办"
			],
			[
				"day",
				TOMORROW,
				"明天的待办"
			],
			[
				"day",
				addDaysK(TODAY, 2),
				"后天的待办"
			],
			[
				"past",
				addDaysK(TODAY, -1),
				"昨天的日常"
			]
		];
		if (it.day && !opts.some((o) => o[1] === it.day)) opts.push([
			it.dest,
			it.day,
			fmtKey(it.day) + (it.dest === "past" ? it.th ? " 随想" : " 日常" : " 待办"),
			it.th ? 1 : 0
		]);
		opts.push([
			"pool",
			"",
			"待办池"
		]);
		const homes = [
			"money",
			"book",
			"food",
			"movie",
			"fun"
		].filter(isleOn);
		if (isleOn("health") && directHouse(it.text) === "health") homes.push("health");
		const houseChoices = homes.map((key) => "<button class=\"gs-chip" + (it.house === key ? " on" : "") + "\" data-house=\"" + key + "\">" + ISLE[key].h + "</button>").join("");
		const on = (o) => !it.house && it.dest === o[0] && (it.day || "") === o[1] && !!o[3] === !!it.th;
		return "<div class=\"vo-pick\">" + opts.map((o) => "<button class=\"gs-chip" + (on(o) ? " on" : "") + "\" data-d=\"" + o[0] + "\" data-k=\"" + o[1] + "\"" + (o[3] ? " data-th=\"1\"" : "") + ">" + o[2] + "</button>").join("") + houseChoices + "<label class=\"gs-chip vo-date\">选日子<input type=\"date\" data-i=\"" + i + "\"></label></div>";
	}
	function voItemHTML(it, i) {
		return "<div class=\"vo-it" + (it.off ? " off" : "") + "\" data-i=\"" + i + "\"><div class=\"vo-r1\"><textarea class=\"vo-t\" rows=\"1\" data-i=\"" + i + "\">" + vEsc(it.text) + "</textarea><button class=\"vo-op vo-mv\" data-i=\"" + i + "\" aria-label=\"换地方\">⇄</button><button class=\"vo-op vo-x\" data-i=\"" + i + "\" aria-label=\"不要\">" + (it.off ? "↺" : "✕") + "</button></div>" + voMetaHTML(it, i) + (VO.open === i ? voPickerHTML(it, i) : "") + "</div>";
	}
	var VO = null;
	function openVoice(opts) {
		VO = {
			items: null,
			prev: null,
			open: null,
			onDone: (opts || {}).onDone || null
		};
		$("#voice").classList.add("on");
		voPaint();
		const ta = $("#voTxt");
		if (ta) try {
			ta.focus();
			const n = ta.value.length;
			ta.setSelectionRange(n, n);
		} catch (_) {}
	}
	function closeVoice() {
		const V = $("#voice");
		V.classList.remove("on");
		V.innerHTML = "";
		VO = null;
	}
	function voRepaint() {
		const L = $("#voList"), st = L ? L.scrollTop : 0;
		voPaint();
		const L2 = $("#voList");
		if (L2) L2.scrollTop = st;
	}
	function voBindFix(root) {
		root.querySelectorAll(".vo-fx").forEach((b) => b.onclick = () => {
			const it = VO.items[+b.dataset.i], f = (it.fixes || [])[+b.dataset.fi];
			if (!f) return;
			const back = (s) => {
				const k = s.indexOf(f.to);
				return k >= 0 ? s.slice(0, k) + f.from + s.slice(k + f.to.length) : s;
			};
			it.text = back(it.text);
			it.fixed = back(it.fixed);
			it.fixes = it.fixes.filter((x) => x !== f);
			const d = DD();
			d.no[f.from + ">" + f.to] = 1;
			if (d.fix[f.from] === f.to) delete d.fix[f.from];
			dictChanged();
			voRepaint();
			toast("改回「" + f.from + "」· 以后不这样改");
		});
	}
	function voPaint() {
		const V = $("#voice");
		if (!VO) return;
		if (!VO.items) {
			const dr = SET.voDraft || "";
			V.innerHTML = "<div class=\"vo-hd\"><button class=\"vo-hl\" id=\"voCancel\">取消</button><div class=\"vo-ht\">一口气说完</div><button class=\"vo-hr\" id=\"voGo\">分拣 ›</button></div><div class=\"vo-body\"><textarea class=\"vo-in\" id=\"voTxt\" placeholder=\"比如：中午和不二去吃了陈先进，双皮奶还是好吃。打车花了45。后天去宜家看沙发。记得给妈打电话。\"></textarea><div class=\"vo-tip\">按键盘右下角的 麦克风 说，说完点右上角「分拣」。打字也行。<br>想到哪说到哪，不用分条，也不用管放哪。" + (dr ? " <button class=\"vo-clr\" id=\"voClr\">清空重说</button>" : "") + "</div></div>";
			const ta = $("#voTxt");
			ta.value = dr;
			const fit = () => {
				ta.style.height = "auto";
				ta.style.height = Math.max(200, ta.scrollHeight) + "px";
			};
			fit();
			ta.oninput = () => {
				SET.voDraft = ta.value;
				fit();
				scheduleSave();
			};
			if ($("#voClr")) $("#voClr").onclick = () => {
				ta.value = "";
				SET.voDraft = "";
				VO.prev = null;
				scheduleSave();
				fit();
				$("#voClr").remove();
				try {
					ta.focus();
				} catch (_) {}
			};
			$("#voCancel").onclick = () => {
				SET.voDraft = ta.value;
				scheduleSave();
				closeVoice();
			};
			$("#voGo").onclick = () => {
				if (!voSplit(ta.value).length) {
					toast("还没说话呢 · 按键盘右下角的麦克风");
					return;
				}
				SET.voDraft = ta.value;
				scheduleSave();
				try {
					ta.blur();
				} catch (_) {}
				VO.items = voBuild(ta.value, VO.prev);
				VO.open = null;
				voPaint();
			};
			return;
		}
		const items = VO.items, groups = [], gmap = {};
		items.forEach((it, i) => {
			const key = it.dest + ":" + (it.house || "") + ":" + (it.day || "") + (it.th ? ":th" : "");
			if (!gmap[key]) {
				gmap[key] = {
					it0: it,
					list: []
				};
				groups.push(gmap[key]);
			}
			gmap[key].list.push(i);
		});
		const ord = (g) => {
			const it = g.it0;
			return it.dest === "pool" ? 1.5 : it.dest === "flow" ? it.th ? .5 : 0 : it.dest === "plan" ? 1 : it.dest === "day" ? 2 + parseKey(it.day) / 0x5af3107a4000 : 5 - parseKey(it.day) / 0x5af3107a4000 + (it.th ? 1e-6 : 0);
		};
		groups.sort((a, b) => ord(a) - ord(b));
		const live = items.filter((x) => !x.off && x.text.trim()).length;
		V.innerHTML = "<div class=\"vo-hd\"><button class=\"vo-hl\" id=\"voCancel\">取消</button><div class=\"vo-ht\"><img class=\"vo-jj\" src=\"" + JJ.sort + "\" alt=\"\">我这样理的，你看看<div class=\"vo-hs\">点字能改 · ⇄ 换地方 · ✕ 不要</div></div><div class=\"vo-hr\"></div></div><div class=\"vo-body vo-list\" id=\"voList\">" + groups.map((g) => "<div class=\"vo-gh\"><span class=\"vo-dest d-" + (g.it0.th ? "th" : g.it0.dest) + "\">" + vEsc(voGroupLabel(g.it0)) + "</span><span class=\"vo-gn\">" + g.list.length + " 条</span></div>" + g.list.map((i) => voItemHTML(items[i], i)).join("")).join("") + "</div><div class=\"vo-bot\"><button class=\"vo-b1\" id=\"voBack\">‹ 接着说</button><button class=\"vo-b2\" id=\"voSave\">确认，放进去（" + live + " 条）</button></div>";
		V.querySelectorAll(".vo-t").forEach((ta) => {
			const i = +ta.dataset.i, it = items[i];
			const fit = () => {
				ta.style.height = "auto";
				ta.style.height = ta.scrollHeight + "px";
			};
			fit();
			ta.onfocus = () => {
				ta._t0 = it.text;
			};
			ta.oninput = () => {
				it.text = ta.value;
				it.edited = true;
				if (!it.manual && it.dest === "flow" && !it.th) {
					const k = directHouse(it.text);
					it.house = k && isleOn(k) ? k : null;
				}
				fit();
			};
			ta.onblur = () => {
				if (ta._t0 == null || ta._t0 === it.text) return;
				const L = dictLearnEdit(ta._t0, it.text);
				ta._t0 = it.text;
				if (L && L.from) toast("记住了：「" + L.from + "」就是「" + L.to + "」，以后自动改");
				else if (L && L.no) toast("好，以后不把「" + L.no + "」改成「" + L.to + "」");
				const card = ta.closest(".vo-it");
				if (card) {
					card.querySelectorAll(".vo-meta,.vo-note").forEach((x) => x.remove());
					card.querySelector(".vo-r1").insertAdjacentHTML("afterend", voMetaHTML(it, i));
					voBindFix(card);
				}
			};
		});
		V.querySelectorAll(".vo-mv").forEach((b) => b.onclick = () => {
			const i = +b.dataset.i;
			VO.open = VO.open === i ? null : i;
			voRepaint();
		});
		V.querySelectorAll(".vo-x").forEach((b) => b.onclick = () => {
			const it = items[+b.dataset.i];
			it.off = !it.off;
			voRepaint();
		});
		V.querySelectorAll(".vo-pick [data-d]").forEach((b) => b.onclick = () => {
			voSetDest(items[VO.open], b.dataset.d, b.dataset.k || null, b.dataset.th === "1");
			VO.open = null;
			voRepaint();
		});
		V.querySelectorAll(".vo-pick [data-house]").forEach((b) => b.onclick = () => {
			const it = items[VO.open];
			voSetDest(it, it.dest === "past" ? "past" : "flow", it.dest === "past" ? it.day : null, false);
			it.house = b.dataset.house;
			VO.open = null;
			voRepaint();
		});
		V.querySelectorAll(".vo-pick input[type=date]").forEach((inp) => inp.onchange = () => {
			if (!inp.value) return;
			const a = inp.value.split("-").map(Number), k = a[0] + "." + a[1] + "." + a[2], it = items[+inp.dataset.i];
			if (k === TODAY) voSetDest(it, it.dest === "past" || it.dest === "flow" ? "flow" : "plan", null, !!it.th);
			else voSetDest(it, parseKey(k) < parseKey(TODAY) || it.th ? "past" : "day", k, !!it.th);
			VO.open = null;
			voRepaint();
		});
		voBindFix(V);
		$("#voCancel").onclick = () => closeVoice();
		$("#voBack").onclick = () => {
			VO.prev = VO.items;
			VO.items = null;
			VO.open = null;
			voPaint();
			const ta = $("#voTxt");
			if (ta) try {
				ta.focus();
			} catch (_) {}
		};
		$("#voSave").onclick = () => {
			if (!items.some((x) => !x.off && x.text.trim())) {
				toast("一条都没留 · 点 ↺ 恢复，或者接着说");
				return;
			}
			const sum = voPlace(items);
			SET.voDraft = "";
			scheduleSave();
			const cb = VO.onDone;
			closeVoice();
			if (cb) cb(sum);
			else render();
			toast("放好了 · " + sum);
		};
	}
	function movieGroupName() {
		let mg = (appState.extraGroups || []).find((g) => tplOf(g) === "movie") || null;
		if (!mg) walk((d, e) => {
			(e.groups || []).forEach((g) => {
				if (!mg && tplOf(g) === "movie") mg = g;
			});
		});
		return mg;
	}
	function voPlace(items) {
		const outs = chatPlace(items.map(voToChat), TODAY, "说一段");
		const cnt = {}, order = [];
		outs.forEach((o) => {
			const lab = o.day === TODAY ? "今天" : voRelDay(o.day) || fmtKey(o.day);
			if (!cnt[lab]) {
				cnt[lab] = 0;
				order.push(lab);
			}
			cnt[lab]++;
		});
		return order.map((l) => l + " " + cnt[l]).join(" · ");
	}
	function voOutNode(list) {
		const rows = [];
		(list || []).forEach((o) => {
			let hit = null;
			walkPage(o.d, (e) => {
				if (e._id === o.id) hit = e;
			});
			if (hit && hit.text) rows.push({
				o,
				e: hit
			});
		});
		if (!rows.length) return null;
		const box = document.createElement("div");
		box.className = "vo-out";
		box.innerHTML = "<div class=\"vo-oh\">↗ 放到别的日子的</div>";
		rows.forEach(({ o, e }) => {
			const r = document.createElement("div");
			r.className = "vo-oi";
			r.innerHTML = "<b>" + fmtKey(o.d) + "</b> · " + vEsc(e.text) + " ›";
			r.onclick = () => jumpToEntry(o.d, o.id);
			box.appendChild(r);
		});
		return box;
	}
	function entryFixes(e, includeHistory = false) {
		if (!e.fix || !e.fix.length || !e.fixAt || !e.text) return [];
		if (!includeHistory && (parseKey(TODAY) - parseKey(e.fixAt)) / 864e5 > 1) return [];
		return e.fix.filter((f) => e.text.includes(f.to));
	}
	function voUndoFix(e, f) {
		const i = (e.text || "").indexOf(f.to);
		if (i < 0) return;
		try {
			snapshot("撤回纠错");
		} catch (_) {}
		e.text = e.text.slice(0, i) + f.from + e.text.slice(i + f.to.length);
		e.fix = (e.fix || []).filter((x) => !(x.from === f.from && x.to === f.to));
		if (!e.fix.length) {
			delete e.fix;
			delete e.fixAt;
		}
		const d = DD();
		d.no[f.from + ">" + f.to] = 1;
		if (d.fix[f.from] === f.to) delete d.fix[f.from];
		dictChanged();
		render();
		toast("已改回「" + f.from + "」· 以后不这样改");
	}
	// src/modules/notes/thoughts.js
	var TH_TAB = null;
	var TH_FILTER = "";
	var TH_PICK = null;
	var TH_LIM = 60;
	function thAll() {
		const out = [];
		walk((k, e) => {
			if (isThought(e) && String(e.text || "").trim()) out.push({
				k,
				e
			});
		});
		return out;
	}
	function thShelf() {
		const all = thAll();
		if (!TH_TAB) TH_TAB = all.length ? "th" : "nb";
		view.appendChild(letterHouseHead("notes"));
		const tabs = document.createElement("div");
		tabs.className = "rp-tabs th-tabs";
		tabs.innerHTML = "<button class=\"chip" + (TH_TAB === "th" ? " on" : "") + "\" data-t=\"th\">随想 · " + all.length + "</button><button class=\"chip" + (TH_TAB === "nb" ? " on" : "") + "\" data-t=\"nb\">本子 · " + appState.NOTES.length + "</button>";
		tabs.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => {
			TH_TAB = b.dataset.t;
			TH_PICK = null;
			render();
		});
		view.appendChild(tabs);
		if (TH_TAB !== "th") return false;
		const cnt = {};
		all.forEach((x) => {
			const k = thIconKey(x.e);
			cnt[k] = (cnt[k] || 0) + 1;
		});
		const fl = document.createElement("div");
		fl.className = "th-fl";
		fl.innerHTML = "<button class=\"" + (!TH_FILTER ? "on" : "") + "\" data-f=\"\">全部</button>" + TH_ICONS.filter(([k]) => cnt[k]).map(([k, i, n]) => "<button class=\"" + (TH_FILTER === k ? "on" : "") + "\" data-f=\"" + k + "\">" + i + " " + n + " " + cnt[k] + "</button>").join("");
		fl.querySelectorAll("[data-f]").forEach((b) => b.onclick = () => {
			TH_FILTER = b.dataset.f;
			TH_LIM = 60;
			render();
		});
		view.appendChild(fl);
		const hint = document.createElement("div");
		hint.className = "th-hint";
		hint.innerHTML = "<span>" + (TH_PICK ? "挑好了点下面「写成一篇」" : "每天的随想都收在这里，家还在那一天") + "</span><button id=\"thPickT\">" + (TH_PICK ? "取消" : "挑几条") + "</button>";
		hint.querySelector("#thPickT").onclick = () => {
			TH_PICK = TH_PICK ? null : /* @__PURE__ */ new Set();
			render();
		};
		view.appendChild(hint);
		const list = all.filter((x) => !TH_FILTER || thIconKey(x.e) === TH_FILTER);
		if (!list.length) {
			const d2 = document.createElement("div");
			d2.className = "empty-hint";
			d2.style.textAlign = "center";
			d2.style.padding = "24px 2px 8px";
			d2.innerHTML = jjImg("ask", 72) + "<div style=\"margin-top:8px\">还没有随想 · 在今天的页面底下发给啾啾<br>像「原来……」「要不要……」「有点累」这样的话，会放进随想</div>";
			view.appendChild(d2);
		}
		let lastK = null;
		list.slice(0, TH_LIM).forEach(({ k, e }) => {
			if (k !== lastK) {
				lastK = k;
				view.appendChild(secHead(fmtKey(k) + " · " + weekCN(k), list.filter((x) => x.k === k).length, false, null));
			}
			const r = document.createElement("div");
			r.className = "th-row" + (TH_PICK && TH_PICK.has(e._id) ? " sel" : "");
			r.dataset.id = e._id;
			r.innerHTML = "<span class=\"evi\">" + (thIcon(e).i || "—") + "</span><span class=\"tx\">" + vEsc(e.text) + "</span>" + (TH_PICK ? "<span class=\"pk\">" + (TH_PICK.has(e._id) ? "✓" : "") + "</span>" : "");
			if (!TH_PICK) bindEntryHold(r, e);
			r.onclick = () => {
				if (TH_PICK) {
					if (TH_PICK.has(e._id)) TH_PICK.delete(e._id);
					else TH_PICK.add(e._id);
					render();
				} else jumpToEntry(k, e._id);
			};
			view.appendChild(r);
		});
		if (list.length > TH_LIM) {
			const more = document.createElement("div");
			more.className = "tapzone";
			more.style.textAlign = "center";
			more.textContent = "再看 " + Math.min(60, list.length - TH_LIM) + " 条 ›";
			more.onclick = () => {
				TH_LIM += 60;
				render();
			};
			view.appendChild(more);
		}
		if (TH_PICK) {
			const bar = document.createElement("div");
			bar.className = "th-pickbar";
			bar.innerHTML = "<span>已挑 " + TH_PICK.size + " 条</span><button id=\"thWrite\"" + (TH_PICK.size ? "" : " disabled") + ">写成一篇</button>";
			bar.querySelector("#thWrite").onclick = () => {
				const sel = all.filter((x) => TH_PICK.has(x.e._id));
				if (!sel.length) {
					toast("先挑几条");
					return;
				}
				thWrite(sel);
			};
			view.appendChild(bar);
		}
		return true;
	}
	function thWrite(arr) {
		if (!modOn("notes")) {
			toast(ISLE.notes.h + "关着 · 到 设置 → 岛上的房子 打开");
			return;
		}
		arr = arr.slice().sort((a, b) => parseKey(a.k) - parseKey(b.k));
		const n = {
			id: ++appState.uid,
			title: clipT(String(arr[0].e.text || "").trim(), 12),
			body: "",
			created: TODAY,
			updated: TODAY,
			days: {}
		};
		n.days[TODAY] = 1;
		n.body = arr.map((x) => "「" + String(x.e.text || "").trim() + "」—— " + fmtKey(x.k) + "的随想").join("\n") + "\n\n";
		appState.NOTES.push(n);
		arr.forEach((x) => {
			x.e.wrote = n.id;
		});
		ensureNoteBorn(n);
		TH_PICK = null;
		scheduleSave();
		navigationState.cur = {
			name: "note",
			id: n.id
		};
		render();
		toast("写成一篇了 · 原来那几条还在当天");
	}
	function bindVoice() {
		(() => {
			const vf = document.getElementById("voFab");
			if (vf) vf.onclick = () => openVoice({});
			const ph = document.getElementById("phone");
			const isTx = (el) => el && (el.tagName === "TEXTAREA" || el.tagName === "INPUT" && !/^(button|checkbox|radio|file)$/i.test(el.type));
			document.addEventListener("focusin", (ev) => {
				if (ph && isTx(ev.target)) ph.classList.add("typing");
			});
			document.addEventListener("focusout", () => {
				setTimeout(() => {
					if (ph && !isTx(document.activeElement)) ph.classList.remove("typing");
				}, 60);
			});
		})();
	}
	// src/modules/notes/index.js
	var pendingNDel = null;
	function noteById(id) {
		return (appState.NOTES || []).find((n) => n.id === id);
	}
	function noteMeta(n) {
		const nd = Object.keys(n.days || {}).length;
		return "始于 " + fmtShort(n.created) + " · 写过 " + nd + " 天" + (n.updated ? " · 最近 " + (n.updated === TODAY ? "今天" : fmtShort(n.updated)) : "");
	}
	function ensureNoteBorn(n) {
		if (n.born || !(n.title || "").trim()) return;
		n.born = 1;
		const k = appState.PAGES[n.created] ? n.created : TODAY;
		appState.PAGES[k].flow.push({
			sym: "event",
			text: "开了新本子《" + n.title.trim() + "》",
			nbId: n.id,
			_id: ++appState.uid
		});
		scheduleSave();
	}
	function noteCreate() {
		const n = {
			id: ++appState.uid,
			title: "",
			body: "",
			created: TODAY,
			updated: TODAY,
			days: {}
		};
		n.days[TODAY] = 1;
		appState.NOTES.push(n);
		scheduleSave();
		navigationState.cur = {
			name: "note",
			id: n.id
		};
		render();
		setTimeout(() => {
			const t = $("#nbTitle");
			if (t) t.focus();
		}, 80);
	}
	function renderNotes() {
		if (!modOn("notes")) {
			const d0 = document.createElement("div");
			d0.className = "empty-hint";
			d0.textContent = "笔记（记事小亭）关着 · 到 设置 → 岛上的房子 打开";
			view.appendChild(d0);
			return;
		}
		appState.NOTES = appState.NOTES.filter((n) => (n.title || "").trim() || (n.body || "").trim() || n.born);
		appState.NOTES.forEach(ensureNoteBorn);
		if (thShelf()) return;
		const bar = document.createElement("div");
		bar.className = "rp-tabs";
		bar.style.marginTop = "4px";
		const addB = document.createElement("button");
		addB.className = "chip primary-action";
		addB.textContent = "＋ 新建本子";
		addB.onclick = noteCreate;
		bar.appendChild(addB);
		view.appendChild(bar);
		if (!appState.NOTES.length) {
			const d2 = document.createElement("div");
			d2.className = "empty-hint";
			d2.style.textAlign = "center";
			d2.style.padding = "24px 2px 8px";
			d2.innerHTML = jjImg("check", 76) + "<div style=\"margin-top:8px\">开第一个本子，写点长的：装修计划、读书摘抄、写到一半的小说…<br>开本和每天动笔，都会在当天流水里留下足迹</div>";
			view.appendChild(d2);
		}
		appState.NOTES.slice().sort((a2, b2) => parseKey(b2.updated || b2.created) - parseKey(a2.updated || a2.created)).forEach((n) => {
			const card = document.createElement("div");
			card.className = "vt-card";
			card.style.cursor = "pointer";
			card.innerHTML = "<div class=\"vt-site\">" + houseMark("notes") + " " + vEsc(n.title || "未命名") + "<button class=\"gm-btn danger\" data-a=\"del\" style=\"margin-left:auto\">" + (pendingNDel === n.id ? "确认删除" : "删") + "</button></div><div class=\"vt-note\">" + vEsc(((n.body || "").split("\n")[0] || "").slice(0, 42) || "还空着 · 点开写点什么") + "</div><div class=\"vt-note\" style=\"color:var(--ink-faint)\">" + noteMeta(n) + "</div>";
			card.onclick = () => {
				navigationState.cur = {
					name: "note",
					id: n.id
				};
				render();
			};
			card.querySelector("[data-a=\"del\"]").onclick = (ev) => {
				ev.stopPropagation();
				if (pendingNDel !== n.id) {
					pendingNDel = n.id;
					toast("再点一次确认删除（流水里的足迹会保留）");
					render();
					return;
				}
				appState.NOTES = appState.NOTES.filter((x) => x.id !== n.id);
				pendingNDel = null;
				scheduleSave();
				render();
				toast("本子已删 · 足迹保留");
			};
			view.appendChild(card);
		});
		const tip = document.createElement("div");
		tip.className = "vt-tip";
		tip.textContent = "本子是主题页，日常是流水：开本、每天第一次动笔，当天流水都会自动留一笔（点「翻开」直达）。本子里以「- 」或「□ 」开头的行，会自动变成今天的任务。本子长文不进识别和报告。";
		view.appendChild(tip);
	}
	function renderNote(n) {
		const head = document.createElement("div");
		head.className = "tp-more";
		head.style.padding = "12px 2px 0";
		head.textContent = noteMeta(n) + " ›";
		head.onclick = () => {
			const ds = Object.keys(n.days || {}).sort((a2, b2) => parseKey(b2) - parseKey(a2));
			openTileSheet("《" + (n.title || "未命名") + "》的足迹", ds.map((d) => ({
				nm: fmtKey(d) + " · " + weekCN(d),
				sub: "",
				sc: "",
				d,
				id: null
			})));
		};
		view.appendChild(head);
		const ti = document.createElement("input");
		ti.className = "nb-title";
		ti.id = "nbTitle";
		ti.placeholder = "给本子起个名";
		ti.value = n.title || "";
		view.appendChild(ti);
		const ta = document.createElement("textarea");
		ta.className = "nb-body";
		ta.id = "nbBody";
		ta.placeholder = "想写多长写多长 · 啾啾边写边存";
		ta.value = n.body || "";
		view.appendChild(ta);
		const cnt = document.createElement("div");
		cnt.className = "vt-tip";
		cnt.id = "nbCnt";
		cnt.textContent = (n.body || "").length + " 字 · 自动保存";
		view.appendChild(cnt);
		const touch = () => {
			n.updated = TODAY;
			n.days = n.days || {};
			if (!n.days[TODAY]) {
				n.days[TODAY] = 1;
				P().flow.push({
					sym: "note",
					text: "写了《" + ((n.title || "").trim() || "未命名") + "》",
					nbId: n.id,
					_id: ++appState.uid
				});
			}
		};
		const syncLines = () => {
			const t2 = (n.title || "").trim() || "未命名";
			(P().flow || []).forEach((x) => {
				if (x.nbId !== n.id || !x.text) return;
				if (x.text.startsWith("写了《")) x.text = "写了《" + t2 + "》";
				if (x.text.startsWith("开了新本子《")) x.text = "开了新本子《" + t2 + "》";
			});
		};
		const growNB = () => {
			if (ta.scrollHeight > ta.clientHeight) {
				const sy = window.scrollY;
				ta.style.height = ta.scrollHeight + "px";
				window.scrollTo(0, sy);
			}
		};
		const taskScan = (fin) => {
			const lines = ta.value.split("\n");
			const upto = fin ? lines.length : lines.length - 1;
			n.taskKeys = n.taskKeys || {};
			for (let i2 = 0; i2 < upto; i2++) {
				const m2 = lines[i2].match(/^\s*[-－□]\s*(.+)$/);
				if (!m2) continue;
				const txt = m2[1].trim();
				if (!txt || txt.length < 2 || n.taskKeys[txt]) continue;
				n.taskKeys[txt] = 1;
				P().plan.push({
					sym: "task",
					state: "open",
					text: txt,
					nbId: n.id,
					src: "《" + ((n.title || "").trim() || "未命名") + "》",
					_id: ++appState.uid
				});
				toast("已加进今天的任务 · " + txt.slice(0, 12));
			}
		};
		ti.oninput = () => {
			n.title = ti.value;
			touch();
			syncLines();
			scheduleSave();
		};
		ti.onblur = () => {
			ensureNoteBorn(n);
			syncLines();
			scheduleSave();
		};
		ta.oninput = () => {
			n.body = ta.value;
			touch();
			taskScan(false);
			scheduleSave();
			growNB();
			cnt.textContent = n.body.length + " 字 · 自动保存";
		};
		ta.onblur = () => {
			taskScan(true);
			const sy = window.scrollY;
			growTA(ta);
			window.scrollTo(0, sy);
			scheduleSave();
		};
		setTimeout(() => growTA(ta), 30);
	}
	// src/modules/onboard/index.js
	var OB_RES = {
		jj: ["av_jj", "啾啾"],
		qiao: ["av_qiao", "翘翘"],
		cow: ["av_cow", "大力"],
		capy: ["av_capy", "小卡"],
		jay: ["av_jay", "松松"],
		boar: ["av_boar", "阿饱"],
		owl: ["av_owl", "阿影"],
		badger: ["av_badger", "酥酥"],
		crab: ["av_crab", "团团"],
		fox: ["av_fox", "小铜板"],
		mole: ["av_mole", "阿鼠"],
		pelican: ["av_pelican", "阿兜"],
		woodp: ["av_woodp", "笃笃"]
	};
	var OB_ROLES = [
		{
			k: "worker",
			n: "打工人",
			who: "cow",
			say: "我是大力。项目进度、开会要点，都可以放到工坊里。"
		},
		{
			k: "student",
			n: "学生党",
			who: "qiao",
			say: "我是翘翘。作业、考试和刚弄懂的知识点，放学堂里一起找。"
		},
		{
			k: "free",
			n: "自由人",
			who: "capy",
			say: "我是小卡。看展、旅行、出去玩，回来跟我说说。"
		},
		{
			k: "secret",
			n: "先保密",
			who: "jay",
			say: "行，这一项先空着。"
		}
	];
	var OB_HOUSES = {
		study: {
			img: "h_study",
			n: "海风学堂",
			f: "学习",
			who: "qiao",
			say: "作业、考试和课堂笔记，放在一块儿好找。"
		},
		work: {
			img: "h_work",
			n: "大力工坊",
			f: "工作",
			who: "cow",
			say: "项目进度放这里。要写周报时，点「报告」整理。"
		},
		food: {
			img: "h_food",
			n: "海边饭馆",
			f: "美食",
			who: "boar",
			say: "好吃的店记下来，下次不知道吃啥就来翻牌子。"
		},
		movie: {
			img: "h_movie",
			n: "小岛影院",
			f: "电影",
			who: "owl",
			say: "看过的片子打个分，下次推荐给朋友时好找。"
		},
		book: {
			img: "h_book",
			n: "小岛书屋",
			f: "阅读",
			who: "badger",
			say: "读完的书、想留的摘抄，都放书屋里。"
		},
		fun: {
			img: "h_fun",
			n: "温泉汤屋",
			f: "娱乐",
			who: "capy",
			say: "唱歌、旅行、泡汤，玩了什么就记什么。"
		},
		money: {
			img: "h_money",
			n: "铜板账房",
			f: "记账",
			who: "fox",
			say: "记花销时带上金额，月底来看看钱花在哪儿。"
		},
		people: {
			img: "h_people",
			n: "小岛茶屋",
			f: "亲友",
			who: "crab",
			say: "收录一个人，就能翻到和对方有关的记录。"
		},
		notes: {
			img: "h_notes",
			n: "记事小亭",
			f: "笔记",
			who: "mole",
			say: "零碎念头先放架子上，想写长文时再挑出来。"
		},
		vault: {
			img: "h_vault",
			n: "秘屋树洞",
			f: "密码",
			who: "jay",
			say: "Wi-Fi、会员账号这些放树洞，用主口令上锁。"
		}
	};
	var OB_EIGHT = [
		"food",
		"movie",
		"book",
		"fun",
		"money",
		"people",
		"notes",
		"vault"
	];
	var OB_TAGS = {
		student: {
			study: 1,
			book: 1
		},
		worker: {
			work: 1,
			money: 1
		}
	};
	var OB_LETTERS = [
		{
			t: "随手发一句就行",
			s: "不用先选分类",
			pic: ["jj"],
			b: "底下就是输入框。要办的事、刚吃的一顿饭、顺手记的一笔账，都可以发给我。一口气说一大段也行，拆开后你看一眼，再确认保存。"
		},
		{
			t: "定了日子的，放进当天",
			s: "笃笃看日历，阿兜管待办池",
			pic: ["woodp", "pelican"],
			b: "带了日期的事，到那天打开手帐就能看见。想让手机到点响，可以点时间添加到系统日历。还没定日子、今天也做不完的，可以先放进待办池。"
		},
		{
			t: "没做完可以推迟，记过的随时翻",
			s: "饭馆、电影、花销，各有地方放",
			pic: [
				"boar",
				"owl",
				"fox"
			],
			b: "今天没做完的事，可以推到明天，也可以放进待办池。长按还能看它是从哪天挪来的。认出的饭馆、电影和花销会收进对应的房子，分错了随时能改。"
		}
	];
	var OB_PLOT = {
		movie: [
			330,
			270,
			190
		],
		book: [
			555,
			250,
			200
		],
		study: [
			778,
			285,
			195
		],
		work: [
			207,
			432,
			205
		],
		cycles: [
			430,
			425,
			195
		],
		someday: [
			840,
			437,
			205
		],
		food: [
			200,
			625,
			205
		],
		fun: [
			870,
			625,
			215
		],
		people: [
			230,
			805,
			230
		],
		money: [
			637,
			818,
			225
		],
		notes: [
			885,
			813,
			225
		],
		vault: [
			285,
			985,
			225
		],
		e1: [
			543,
			998,
			220
		],
		e2: [
			790,
			985,
			230
		]
	};
	var OB_PLAZA = [
		533,
		625,
		400
	];
	var OB_ISLE_W = 1086;
	var OB_ISLE_H = 1448;
	var OB = null;
	function obAv(k, cls) {
		const r = OB_RES[k];
		return "<img class=\"" + (cls || "ob-av") + "\" src=\"" + OBIMG[r[0]] + "\" alt=\"" + r[1] + "\">";
	}
	function obFeet(n) {
		const f = (i, on) => "<svg viewBox=\"0 0 20 20\" class=\"" + (i % 2 ? "b" : "a") + (on ? " on" : "") + "\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.3\" stroke-linecap=\"round\"><path d=\"M10 12 L4.5 4\"/><path d=\"M10 12 L10 2.5\"/><path d=\"M10 12 L15.5 4\"/><path d=\"M10 12 L10 18\"/></g></svg>";
		let s = "";
		for (let i = 0; i < 5; i++) s += f(i, i < n);
		return "<div class=\"ob-feet\" aria-label=\"第 " + n + " 步，共 5 步\">" + s + "</div>";
	}
	function obRole() {
		return OB_ROLES.find((r) => r.k === OB.role) || null;
	}
	function obGrid() {
		const r = OB.role;
		return (r === "student" ? ["study"] : r === "worker" ? ["work"] : []).concat(OB_EIGHT);
	}
	function obLandOn() {
		if (!SET.obLand) return false;
		if (SET.obLand.day !== TODAY) {
			delete SET.obLand;
			scheduleSave();
			return false;
		}
		return true;
	}
	function obOpen(again) {
		OB = {
			step: 1,
			again: !!again,
			opened: /* @__PURE__ */ new Set(),
			name: "",
			city: null,
			cityQ: "",
			bm: 0,
			bd: 0,
			bdOpen: false,
			role: null,
			lit: /* @__PURE__ */ new Set(),
			said: null,
			duty: false,
			hello: true
		};
		if (again) {
			const me = SET.me || {};
			OB.name = me.name || "";
			if (me.bday) {
				const a = String(me.bday).split(".").map(Number);
				OB.bm = a[0] || 0;
				OB.bd = a[1] || 0;
			}
			OB.role = me.role || null;
			const c = wxCity();
			if (c) OB.city = {
				n: c.n,
				la: c.la,
				lo: c.lo
			};
			OB_EIGHT.forEach((k) => {
				if (isleOn(k)) OB.lit.add(k);
			});
			if (isleOn("study")) OB.lit.add("study");
			if (isleOn("work")) OB.lit.add("work");
			OB.duty = !!SET.duty;
			OB.hello = modOn("hello");
		}
		try {
			dismissKB();
		} catch (_) {}
		$("#ob").classList.add("on");
		obPaint();
	}
	function obClose() {
		const R = $("#ob");
		if (!R) return;
		R.classList.remove("on");
		R.innerHTML = "";
		OB = null;
	}
	function obDismiss() {
		appState.SEEN.onboard = true;
		scheduleSave();
		obClose();
	}
	function obGo(n) {
		OB.step = n;
		obPaint();
		const b = $("#ob .ob-body");
		if (b) b.scrollTop = 0;
	}
	function obSkip() {
		const s = OB.step;
		if (s === 2) {
			OB.name = "";
			OB.city = null;
			OB.cityQ = "";
			OB.bm = OB.bd = 0;
			OB.role = null;
		} else if (s === 3) {
			OB.lit = new Set([
				...OB_EIGHT,
				"work",
				"study"
			].filter(isleOn));
			OB.said = null;
		} else if (s === 4) {
			OB.duty = false;
			OB.hello = true;
		}
		obGo(s + 1);
	}
	function obShell(n, body, foot, opts) {
		opts = opts || {};
		return "<div class=\"ob-scr s" + n + "\"><div class=\"ob-top\">" + (n > 1 ? "<button class=\"ob-back\" id=\"obBack\" aria-label=\"上一步\">‹</button>" : "<span class=\"ob-back\"></span>") + obFeet(n) + (opts.skip ? "<button class=\"ob-skip\" id=\"obSkip\">跳过</button>" : "<span class=\"ob-skip\"></span>") + "</div><div class=\"ob-body\">" + body + "</div><div class=\"ob-foot\">" + foot + "</div></div>";
	}
	function obPaint() {
		const R = $("#ob");
		if (!R || !OB) return;
		const s = OB.step;
		R.innerHTML = s === 1 ? obS1() : s === 2 ? obS2() : s === 3 ? obS3() : s === 4 ? obS4() : obS5();
		const bk = $("#obBack");
		if (bk) bk.onclick = () => obGo(s - 1);
		const sk = $("#obSkip");
		if (sk) sk.onclick = obSkip;
		[
			obB1,
			obB2,
			obB3,
			obB4,
			obB5
		][s - 1]();
	}
	function obS1() {
		const lt = OB_LETTERS.map((L, i) => OB.opened.has(i) ? "<button class=\"ob-lt open\" data-l=\"" + i + "\"><span class=\"avs\">" + L.pic.map((k) => obAv(k, "ob-lt-av")).join("") + "</span><b>" + L.t + "</b><span>" + L.s + "</span><i class=\"air\"></i></button>" : "<button class=\"ob-lt r" + i + "\" data-l=\"" + i + "\"><svg class=\"flap\" viewBox=\"0 0 112 70\" preserveAspectRatio=\"none\"><path d=\"M1 1 L56 62 L111 1\" fill=\"#F6ECDA\" stroke=\"#E3D2B6\" stroke-width=\"1.2\"/></svg><span class=\"seal\">啾</span><span class=\"tip\">拆开看看</span><i class=\"air\"></i></button>").join("");
		return obShell(1, "<div class=\"ob-hero\"><img src=\"" + OBIMG.ob_family + "\" alt=\"岛上的大家\"></div><div class=\"ob-t1 c\">欢迎上岛，我是啾啾</div><div class=\"ob-t2 c\">这是一个住着 15 位动物岛民的手帐岛。<br>想到什么，像发消息一样发给我，大家各管一摊事。</div><div class=\"ob-lcap\"><img src=\"" + OBIMG.jj_env + "\" alt=\"\"><b>先拆开这三封信看看</b></div><div class=\"ob-letters\">" + lt + "</div><div class=\"ob-priv\"><svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\"><rect x=\"1.5\" y=\"6\" width=\"10\" height=\"7.5\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M4 6 V4.2 A2.5 2.5 0 0 1 9 4.2 V6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/></svg>不用注册，你的记录只住在这台手机里</div><div class=\"ob-paper-wrap\" id=\"obPaper\"></div>", "<button class=\"ob-btn\" id=\"obNext\">上岛 →</button><button class=\"ob-link\" id=\"obOld\">我是老岛民，从备份回来</button>");
	}
	function obB1() {
		$("#ob").querySelectorAll(".ob-lt").forEach((b) => b.onclick = () => obLetter(+b.dataset.l));
		$("#obNext").onclick = () => obGo(2);
		$("#obOld").onclick = () => {
			obDismiss();
			navigationState.navStack = [];
			navigationState.cur = { name: "data" };
			render();
			toast("点「恢复备份」或「云备份」，把记录拿回来");
		};
	}
	function obLetter(i) {
		const L = OB_LETTERS[i], W = $("#obPaper");
		if (!W) return;
		W.innerHTML = "<div class=\"ob-paper\"><div class=\"ob-paper-pic\">" + L.pic.map((k) => obAv(k, "ob-paper-av")).join("") + "</div><b>" + L.t + "</b><small>" + L.s + "</small><p>" + L.b + "</p><button class=\"ob-btn sm\" id=\"obPaperOk\">收好</button></div>";
		W.classList.add("on");
		const done = () => {
			W.classList.remove("on");
			W.innerHTML = "";
			OB.opened.add(i);
			obPaint();
		};
		$("#obPaperOk").onclick = done;
		W.onclick = (ev) => {
			if (ev.target === W) done();
		};
	}
	function obIdDone() {
		return !!(OB.name.trim() && OB.city && OB.bm && OB.bd && OB.role);
	}
	function obS2() {
		const r = obRole(), ta = TODAY.split(".");
		const bdCtl = OB.bm || OB.bd || OB.bdOpen ? "<select class=\"ob-sel\" id=\"obBm\"><option value=\"\">几月</option>" + Array.from({ length: 12 }, (_, i) => "<option value=\"" + (i + 1) + "\"" + (OB.bm === i + 1 ? " selected" : "") + ">" + (i + 1) + " 月</option>").join("") + "</select><select class=\"ob-sel\" id=\"obBd\"><option value=\"\">几号</option>" + Array.from({ length: 31 }, (_, i) => "<option value=\"" + (i + 1) + "\"" + (OB.bd === i + 1 ? " selected" : "") + ">" + (i + 1) + " 日</option>").join("") + "</select>" : "<button class=\"ob-q\" id=\"obBdQ\">生日是哪天？</button>";
		return obShell(2, "<div class=\"ob-head\"><img class=\"ob-stamper\" src=\"" + OBIMG.jj_stamp + "\" alt=\"\" style=\"height:66px;width:auto\"><div><div class=\"ob-t1\">办一张岛民证</div><div class=\"ob-t3\">都能空着，想填哪项填哪项</div></div></div><div class=\"ob-id\"><i class=\"air\"></i><div class=\"ob-idtop\"><b>啾啾岛 · 岛民证</b><span>" + ta[0] + "." + ta[1] + "." + ta[2] + " 上岛</span></div><div class=\"ob-idbody\"><div class=\"ob-stampimg\"><div class=\"in\"><img src=\"" + JJ.h_post + "\" alt=\"\"></div></div><div class=\"ob-fields\"><div class=\"ob-f\"><label>称呼</label><input class=\"ob-in\" id=\"obName\" maxlength=\"12\" placeholder=\"怎么称呼你？\" value=\"" + escAttr(OB.name) + "\" autocomplete=\"off\"></div><div class=\"ob-f\"><label>城市</label><input class=\"ob-in\" id=\"obCity\" placeholder=\"你在哪座城市？\" value=\"" + escAttr(OB.city ? OB.city.n : OB.cityQ) + "\" autocomplete=\"off\"><i>用来显示当地天气</i><div class=\"ob-cities\" id=\"obCities\"></div></div><div class=\"ob-f\"><label>生日</label><span class=\"ob-bd\">" + bdCtl + "</span><i>生日那天，早安卡会留句祝福</i></div><div class=\"ob-f last\"><label>在忙</label><b class=\"ob-role" + (r ? "" : " none") + "\">" + (r ? r.n : "—") + "</b></div></div></div><div class=\"ob-rstamp" + (obIdDone() ? " on" : "") + "\" id=\"obStamp\"><b>岛民证<br>办好了</b><small>啾啾岛 · 第 1 天</small></div></div><div class=\"ob-q2\">你现在每天主要在忙……</div><div class=\"ob-who4\">" + OB_ROLES.map((x) => "<button class=\"ob-w" + (OB.role === x.k ? " on" : "") + "\" data-r=\"" + x.k + "\">" + obAv(x.who, "ob-wav") + x.n + "</button>").join("") + "</div>" + (r ? "<div class=\"ob-bubble\">" + obAv(r.who, "ob-bav") + "<p><b>" + OB_RES[r.who][1] + "</b>" + r.say + "</p></div>" : ""), "<button class=\"ob-btn\" id=\"obNext\">下一步</button>", { skip: true });
	}
	function obStampSync() {
		const s = $("#obStamp");
		if (s) s.classList.toggle("on", obIdDone());
	}
	function obCityPick(c) {
		OB.city = {
			n: c[0],
			la: c[1],
			lo: c[2]
		};
		OB.cityQ = "";
		const i = $("#obCity");
		if (i) {
			i.value = c[0];
			i.blur();
		}
		const box = $("#obCities");
		if (box) {
			box.innerHTML = "";
			box.classList.remove("on");
		}
		obStampSync();
	}
	function obCityList() {
		const box = $("#obCities");
		if (!box) return;
		const q = OB.cityQ.trim();
		const hits = q ? WX_CITIES.filter((c) => c[0].indexOf(q) >= 0 || q.indexOf(c[0]) >= 0).slice(0, 8) : WX_TOP.map((n) => WX_CITIES.find((c) => c[0] === n)).filter(Boolean);
		box.innerHTML = "<button class=\"gs-chip\" data-geo=\"1\">定位</button>" + hits.map((c) => "<button class=\"gs-chip\" data-c=\"" + escAttr(c[0]) + "\">" + vEsc(c[0]) + "</button>").join("") + (q && !hits.length ? "<span class=\"ob-none\">没找到这座城市 · 先选个近的</span>" : "");
		box.classList.add("on");
		box.querySelectorAll("[data-c]").forEach((b) => b.onpointerdown = (ev) => {
			ev.preventDefault();
			obCityPick(WX_CITIES.find((c) => c[0] === b.dataset.c));
		});
		const g = box.querySelector("[data-geo]");
		if (g) g.onpointerdown = (ev) => {
			ev.preventDefault();
			obLocate();
		};
	}
	function obLocate() {
		if (!platform.geolocation) {
			toast("这台设备拿不到定位 · 直接选城市吧");
			return;
		}
		toast("正在定位…");
		platform.geolocation.getCurrentPosition((pos) => {
			const la = pos.coords.latitude, lo = pos.coords.longitude;
			let best = null, bd = Infinity;
			WX_CITIES.forEach((c) => {
				const dx = (c[2] - lo) * Math.cos(la * Math.PI / 180), dy = c[1] - la, d2 = dx * dx + dy * dy;
				if (d2 < bd) {
					bd = d2;
					best = c;
				}
			});
			if (best && Math.sqrt(bd) * 111 < 60) obCityPick(best);
			else {
				OB.city = {
					n: "我这儿",
					la,
					lo
				};
				const i = $("#obCity");
				if (i) {
					i.value = "我这儿";
					i.blur();
				}
				const box = $("#obCities");
				if (box) {
					box.innerHTML = "";
					box.classList.remove("on");
				}
				obStampSync();
			}
		}, () => toast("没拿到定位 · 直接选城市吧"), {
			timeout: 8e3,
			maximumAge: 6e5
		});
	}
	function obB2() {
		const nm = $("#obName");
		nm.oninput = () => {
			OB.name = nm.value;
			obStampSync();
		};
		nm.onkeydown = (ev) => {
			if (ev.key === "Enter") {
				ev.preventDefault();
				nm.blur();
			}
		};
		const ci = $("#obCity");
		ci.onfocus = () => {
			OB.cityQ = OB.city ? "" : ci.value;
			if (OB.city) ci.select();
			obCityList();
		};
		ci.oninput = () => {
			OB.cityQ = ci.value;
			OB.city = null;
			const ex = WX_CITIES.find((c) => c[0] === ci.value.trim());
			if (ex) OB.city = {
				n: ex[0],
				la: ex[1],
				lo: ex[2]
			};
			obCityList();
			obStampSync();
		};
		ci.onblur = () => setTimeout(() => {
			const box = $("#obCities");
			if (box && document.activeElement !== ci) box.classList.remove("on");
			if (!OB) return;
			if (!OB.city && ci.value.trim()) ci.value = "";
			OB.cityQ = "";
		}, 150);
		ci.onkeydown = (ev) => {
			if (ev.key === "Enter") {
				ev.preventDefault();
				const q = ci.value.trim();
				const hit = WX_CITIES.find((c) => c[0].indexOf(q) >= 0);
				if (q && hit) obCityPick(hit);
				else ci.blur();
			}
		};
		const q = $("#obBdQ");
		if (q) q.onclick = () => {
			OB.bdOpen = true;
			obPaint();
			const s = $("#obBm");
			if (s) try {
				s.focus();
			} catch (_) {}
		};
		const bm = $("#obBm"), bd = $("#obBd");
		if (bm) bm.onchange = () => {
			OB.bm = +bm.value || 0;
			obStampSync();
		};
		if (bd) bd.onchange = () => {
			OB.bd = +bd.value || 0;
			obStampSync();
		};
		$("#ob").querySelectorAll(".ob-w[data-r]").forEach((b) => b.onclick = () => {
			OB.role = b.dataset.r;
			obPaint();
			const bb = $("#ob .ob-body");
			if (bb) bb.scrollTop = bb.scrollHeight;
		});
		$("#obNext").onclick = () => obGo(3);
	}
	function obS3() {
		const tags = OB_TAGS[OB.role] || {}, tagTx = OB.role === "student" ? "学生党常盖" : "打工人常盖";
		const cells = obGrid().map((k) => {
			const H = OB_HOUSES[k], lit = OB.lit.has(k);
			return "<button class=\"ob-hc " + (lit ? "lit" : "off") + "\" data-h=\"" + k + "\">" + (tags[k] ? "<span class=\"tag\">" + tagTx + "</span>" : "") + (lit ? "<span class=\"ok\">✓</span>" : "") + "<span class=\"pic\"><img src=\"" + JJ[H.img] + "\" alt=\"\"></span><b>" + H.n + "</b><span class=\"fn\">" + H.f + "</span></button>";
		}).join("");
		const sd = OB.said && OB_HOUSES[OB.said];
		const n = OB.lit.size;
		return obShell(3, "<div class=\"ob-head\">" + jjImg("happy", 56) + "<div><div class=\"ob-t1\">先盖几栋房子？</div><div class=\"ob-t3\">每栋房子住着一位岛民，各管一摊事。点一下盖起来，再点一下收起。</div></div></div><div class=\"ob-grid9\">" + cells + "</div>" + (sd ? "<div class=\"ob-bubble\">" + obAv(sd.who, "ob-bav") + "<p><b>" + OB_RES[sd.who][1] + "</b>" + sd.say + "</p></div>" : "") + "<div class=\"ob-fine\">信风邮局一直开着，管每天的记录和待办。<br>其他房子先挑常用的，以后随时能添能收。</div>", "<button class=\"ob-btn\" id=\"obNext\">" + (n ? "盖好 " + n + " 栋，下一步" : "先不盖，下一步") + "</button>", { skip: true });
	}
	function obB3() {
		$("#ob").querySelectorAll(".ob-hc[data-h]").forEach((b) => b.onclick = () => {
			const k = b.dataset.h;
			if (OB.lit.has(k)) {
				OB.lit.delete(k);
				if (OB.said === k) OB.said = null;
			} else {
				OB.lit.add(k);
				OB.said = k;
			}
			const st = $("#ob .ob-body").scrollTop;
			obPaint();
			$("#ob .ob-body").scrollTop = st;
		});
		$("#obNext").onclick = () => obGo(4);
	}
	function obS4() {
		const card = (duty, img, nm, house, say, mode, rec) => "<button class=\"ob-pc" + (OB.duty === duty ? " on" : "") + "\" data-duty=\"" + (duty ? 1 : 0) + "\"><span class=\"pic\"><img src=\"" + OBIMG[img] + "\" alt=\"\"></span>" + (rec ? "<span class=\"rec\">推荐</span>" : "") + (OB.duty === duty ? "<span class=\"ok\">✓</span>" : "") + "<span class=\"tx\"><span class=\"nm\"><b>" + nm + "</b><small>" + house + "</small></span><span class=\"say\">" + say + "</span><span class=\"mode\">" + mode + "</span></span></button>";
		return obShell(4, "<div class=\"ob-t1 c\" style=\"margin-top:6px\">没做完的事，想让谁陪你？</div><div class=\"ob-t3 c\">选一位就好，以后在设置里能换</div><div class=\"ob-pair\">" + card(false, "pt_pelican", "阿兜", "心愿灯塔", "「没定日子、今天也没做完的，先放我兜里。」", "<b>温和</b> · 没做完的不堆在眼前，收进心愿灯塔，不催你", true) + card(true, "pt_woodp", "笃笃", "滴答钟楼", "「早上看看还要做什么，晚上再过一遍。」", "<b>规律</b> · 早上一件件过，晚上复盘再过一遍", false) + "</div><div class=\"ob-hello\"><div class=\"mini\"><div class=\"d\">" + fmtKey(TODAY) + " · " + weekCN(TODAY) + "</div><div class=\"w2\">" + vEsc(OB.city ? OB.city.n : "") + " 天气</div>" + jjImg("nest", 50) + "</div><div class=\"hq\"><b>早上打开时，要看早安卡吗？</b><div class=\"ob-t3\">当地天气和今天的待办</div><div class=\"ob-pills\"><button data-hl=\"1\" class=\"" + (OB.hello ? "on" : "") + "\">要</button><button data-hl=\"0\" class=\"" + (OB.hello ? "" : "on") + "\">先不用</button></div></div></div>", "<button class=\"ob-btn\" id=\"obNext\">下一步</button>", { skip: true });
	}
	function obB4() {
		$("#ob").querySelectorAll(".ob-pc[data-duty]").forEach((b) => b.onclick = () => {
			OB.duty = b.dataset.duty === "1";
			obPaint();
		});
		$("#ob").querySelectorAll("[data-hl]").forEach((b) => b.onclick = () => {
			OB.hello = b.dataset.hl === "1";
			obPaint();
		});
		$("#obNext").onclick = () => obGo(5);
	}
	function obIsleHTML() {
		const pc = (x, y) => "left:" + (x / OB_ISLE_W * 100).toFixed(2) + "%;top:" + (y / OB_ISLE_H * 100).toFixed(2) + "%";
		const items = [];
		Object.keys(OB_PLOT).forEach((k) => {
			const [x, y, w] = OB_PLOT[k];
			const always = k === "cycles" || k === "someday";
			const built = always || OB.lit.has(k);
			const img = k === "cycles" ? "h_cycles" : k === "someday" ? "h_someday" : (OB_HOUSES[k] || {}).img;
			if (built && img) items.push({
				y,
				h: "<span class=\"ob-ih" + (always ? "" : " new") + "\" style=\"" + pc(x, y + w * .16) + ";width:" + (w * .9 / OB_ISLE_W * 100).toFixed(2) + "%\"><img src=\"" + JJ[img] + "\" alt=\"\"></span>"
			});
			else items.push({
				y,
				h: "<span class=\"ob-sign\" style=\"" + pc(x, y + w * .12) + "\"><img src=\"" + OBIMG.sign + "\" alt=\"\"></span>"
			});
		});
		items.push({
			y: OB_PLAZA[1],
			h: "<span class=\"ob-ih post\" style=\"" + pc(OB_PLAZA[0], OB_PLAZA[1] + 40) + ";width:" + (OB_PLAZA[2] * .6 / OB_ISLE_W * 100).toFixed(2) + "%\"><img src=\"" + JJ.h_post + "\" alt=\"信风邮局\"></span>"
		});
		items.sort((a, b) => a.y - b.y);
		return "<div class=\"ob-isle\"><img class=\"base\" src=\"" + OBIMG.ob_isle + "\" alt=\"小岛\">" + items.map((x) => x.h).join("") + "<img class=\"jj\" src=\"" + OBIMG.jj_stand + "\" alt=\"\"></div>";
	}
	function obS5() {
		const chips = (OB.name.trim() ? "<span>岛民 · " + vEsc(OB.name.trim()) + "</span>" : "") + "<span>搭档 · " + (OB.duty ? "笃笃" : "阿兜") + "</span><span>早安卡 · " + (OB.hello ? "每天" : "先不用") + "</span>";
		return obShell(5, "<div class=\"ob-t1 c big\">你的岛盖好了</div>" + obIsleHTML() + "<div class=\"ob-recap\">" + chips + "</div><div class=\"ob-t2 c sm\">空地还留着，想盖随时去<br><b>设置 → 岛上的房子</b></div>", "<button class=\"ob-btn\" id=\"obNext\">" + (OB.again ? "好了" : "写下第一条") + "</button>");
	}
	function obB5() {
		$("#obNext").onclick = obFinish;
	}
	function obHouseSet(k, on) {
		if (ISLE_MOD[k]) {
			SET.mods[ISLE_MOD[k]] = on;
			if (k === "food") {
				if (on) {
					delete SET.mealsUserOff;
					houseGroup("food", true);
				} else SET.mealsUserOff = 1;
			}
		} else {
			SET.isle = SET.isle || {};
			SET.isle.on = SET.isle.on || {};
			SET.isle.on[k] = on;
			if (on) houseGroup(k, true);
		}
	}
	function obApply() {
		const o = OB;
		SET.me = SET.me || { marks: [] };
		const nm = o.name.trim();
		if (nm) SET.me.name = nm;
		else delete SET.me.name;
		if (o.bm && o.bd) SET.me.bday = o.bm + "." + o.bd;
		else delete SET.me.bday;
		if (o.role) SET.me.role = o.role;
		else delete SET.me.role;
		if (o.city) wxAddCity(o.city);
		for (const key of ["work", "study"]) if (!o.again || obGrid().includes(key)) obHouseSet(key, o.lit.has(key));
		OB_EIGHT.forEach((k) => obHouseSet(k, o.lit.has(k)));
		SET.gtpl = SET.gtpl || {};
		if (!o.again && !o.lit.has("work")) {
			let used = false;
			walk((d, e) => {
				if ((e.groups || []).includes("工作")) used = true;
			});
			if (!used) appState.extraGroups = appState.extraGroups.filter((g) => g !== "工作");
		}
		housesState.ISLE_DEF = null;
		SET.isle = SET.isle || {};
		SET.isle.pin = islePins().filter((k) => isleOn(k));
		SET.duty = !!o.duty;
		SET.mods.hello = !!o.hello;
		appState.SEEN.onboard = true;
		if (!o.again) {
			P().hello = 1;
			SET.obLand = {
				day: TODAY,
				role: o.role || ""
			};
		}
		scheduleSave();
	}
	function obFinish() {
		const again = OB.again;
		obApply();
		obClose();
		navigationState.navStack = [];
		navigationState.cur = { name: "today" };
		render();
		if (again) toast("岛上改好了");
		else if (modOn("hello")) openHello(false);
	}
	function obExample() {
		const r = (SET.obLand || {}).role;
		return r === "student" ? "周五下午三点 交实验报告" : r === "worker" ? "明天下午三点 交周报" : "明天上午十点 去取快递";
	}
	function obSlipNode() {
		const ex = obExample();
		const d = document.createElement("div");
		d.className = "ob-slip";
		d.id = "obSlip";
		d.innerHTML = "<img src=\"" + OBIMG.jj_env + "\" alt=\"\"><div><div class=\"k\">啾啾送来一张纸条</div><b>点这句，填进输入框试试：" + vEsc(ex) + "</b><div class=\"s\">点发送后，我会告诉你记在了哪里。</div></div>";
		d.onclick = () => {
			const i = $("#chatIn");
			if (!i) return;
			i.value = ex;
			chatGrow();
			chatFocus();
		};
		return d;
	}
	// src/modules/hello/morning.js
	function ensureToday() {
		if (!appState.PAGES[TODAY]) appState.PAGES[TODAY] = {
			plan: [],
			flow: []
		};
		walk((k, e) => {
			if (e.badge === "☾ someday") e.badge = "☾ 想做";
			if (e.due) {
				const pp = String(e.due).split(".").map(Number);
				if (!(pp.length === 3 && pp[1] >= 1 && pp[1] <= 12 && pp[2] >= 1 && pp[2] <= 31)) delete e.due;
			}
			if (e.badge && e.badge.includes("已完成0%")) e.badge = e.badge.replace(/ · 已完成0%/g, "").replace(/已完成0% · ?/g, "").trim();
			if (e.children && e.children.length) e.children = e.children.filter((ch) => ch.text && ch.text.trim() || ch.images && ch.images.length || ch.children && ch.children.length);
		});
		Object.keys(appState.PAGES).forEach((k) => {
			if (k === TODAY) return;
			const pg2 = appState.PAGES[k];
			if (!pg2.plan.length && !pg2.flow.length && !pg2.summary) delete appState.PAGES[k];
		});
		walk((k, e) => {
			if (e._id && e._id > appState.uid) appState.uid = e._id;
		});
		(SET.people || []).forEach((p) => {
			if (p.id && p.id > appState.uid) appState.uid = p.id;
		});
		(SET.cycles || []).forEach((c) => {
			if (c.id && c.id > appState.uid) appState.uid = c.id;
		});
		(typeof appState.NOTES !== "undefined" ? appState.NOTES : []).forEach((nn) => {
			if (nn.id && nn.id > appState.uid) appState.uid = nn.id;
		});
		const fixDup = (arr) => {
			const seen2 = /* @__PURE__ */ new Set();
			(arr || []).forEach((o) => {
				if (o.id && seen2.has(o.id)) o.id = ++appState.uid;
				if (o.id) seen2.add(o.id);
			});
		};
		fixDup(SET.people);
		fixDup(SET.cycles);
		fixDup(typeof appState.NOTES !== "undefined" ? appState.NOTES : []);
		const tk0 = parseKey(TODAY), lateOf = (k2) => Math.round((tk0 - parseKey(k2)) / 864e5);
		const arrBadge = (e, from) => {
			const bits = [];
			if (SET.duty) bits.push(">×" + e.mig);
			if (from) bits.push("原定 " + fmtShort(from));
			if (e.progress) bits.push("已完成" + e.progress + "%");
			return bits.length ? bits.join(" · ") : void 0;
		};
		let pooledN = 0;
		walkWithParent((k, e, parent) => {
			if (k === TODAY) return;
			if (e.sym === "task" && e.due && !e.arrived && (e.state === "open" || e.state === "migrated")) {
				const late = lateOf(e.due);
				if (late >= 0 && (late <= 2 || e.schedule)) {
					const from = late ? e.due : null;
					e.arrived = true;
					e.mig = (e.mig || 0) + 1;
					if (e.state === "open") e.state = "migrated";
					P().plan.push({
						sym: "task",
						state: "open",
						text: e.text,
						time: e.time || void 0,
						pick: e.pick || void 0,
						nbId: e.nbId || void 0,
						schedule: e.schedule ? { ...e.schedule } : void 0,
						noDue: e.schedule ? 1 : void 0,
						groups: e.groups ? [...e.groups] : void 0,
						progress: e.progress,
						mig: e.mig,
						src: e.src || parent && parent.text || void 0,
						srcDay: k,
						srcId: e._id || (e._id = ++appState.uid),
						lateFrom: from || void 0,
						badge: arrBadge(e, from),
						_id: ++appState.uid
					});
				} else if (late > 2) {
					const was = e.due;
					delete e.due;
					if (SET.duty) e.state = "open";
					else {
						e.state = "someday";
						e.badge = "☾ 想做 · 原定 " + fmtShort(was);
						e.pooled = TODAY;
						pooledN++;
					}
				}
			}
			if (e.state === "delegated" && e.delegate && e.delegate.follow && !e.followArrived) {
				const late2 = lateOf(e.delegate.follow);
				if (late2 >= 0 && late2 <= 2) {
					e.followArrived = true;
					P().plan.push({
						sym: "task",
						state: "open",
						text: "问问 " + e.delegate.to + "：" + (e.text || "").slice(0, 16),
						src: e.text,
						srcDay: k,
						srcId: e._id || (e._id = ++appState.uid),
						lateFrom: late2 ? e.delegate.follow : void 0,
						_id: ++appState.uid
					});
				} else if (late2 > 2) e.followArrived = true;
			}
		});
		if (!SET.duty) walk((k, e) => {
			if (k === TODAY || parseKey(k) > tk0) return;
			if (e.sym !== "task" || e.state !== "open" || e.due) return;
			if (e.cyc) {
				e.state = "migrated";
				e.lapsed = 1;
				return;
			}
			if (!(e.text || "").trim()) return;
			e.state = "someday";
			e.badge = "☾ 想做";
			e.pooled = TODAY;
			pooledN++;
		});
		if (pooledN) P().pooled = (P().pooled || 0) + pooledN;
	}
	function cycMaterialize() {
		let ins = false;
		(SET.cycles || []).forEach((c) => {
			if (c.enabled === false) return;
			if (c.lastIns !== TODAY && cycHits(c, TODAY)) {
				c.lastIns = TODAY;
				const ag = cycAgeStr(c, TODAY);
				P().plan.push({
					sym: "task",
					state: "open",
					text: cycIcon(c) + " " + c.name + (ag ? "（" + ag + "）" : "") + (c.kind === "lunar" ? "（" + lunarLabel(c.lm, c.ld) + "）" : "") + (c.kind === "ndays" ? "（按周期预计是今天）" : ""),
					time: c.time || void 0,
					cyc: c.id,
					_id: ++appState.uid
				});
				ins = true;
			}
			if (c.ahead > 0 && c.lastPre !== TODAY) {
				const nk = addDaysK(TODAY, +c.ahead);
				if (cycHits(c, nk)) {
					const diff = Math.round((parseKey(nk) - parseKey(TODAY)) / 864e5);
					if (diff === +c.ahead) {
						c.lastPre = TODAY;
						const ag2 = cycAgeStr(c, nk);
						P().plan.push({
							sym: "note",
							text: cycIcon(c) + " " + diff + " 天后 · " + c.name + (ag2 ? " " + ag2 : "") + "（" + (c.kind === "lunar" ? lunarLabel(c.lm, c.ld) + " · " : "") + fmtShort(nk) + " 日）",
							cyc: c.id,
							_id: ++appState.uid
						});
						ins = true;
					}
				}
			}
		});
		if (ins) scheduleSave();
	}
	function morningCheck() {
		const page = P();
		if (page.morningAsked) return;
		const left = [];
		walkWithParent((k, e, parent) => {
			if (k !== TODAY && parseKey(k) < parseKey(TODAY) && e.sym === "task" && e.state === "open" && !e.due) left.push({
				e,
				parent,
				k
			});
		});
		page.morningAsked = true;
		if (!left.length) {
			scheduleSave();
			return;
		}
		const S = $("#gsheet");
		const esc = (x) => String(x || "").replace(/[<>&]/g, (c) => ({
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;"
		})[c]);
		S.innerHTML = "<div class=\"gs-title\" style=\"display:flex;align-items:center;gap:8px\">有 " + left.length + " 件事还等着你表态<button class=\"gm-btn\" id=\"mSel\" style=\"margin-left:auto\">全选</button></div><div id=\"mgList\" style=\"max-height:44vh;overflow-y:auto;margin:0 0 4px\">" + left.map((x, i) => "<div class=\"mg-item\" data-i=\"" + i + "\"><span class=\"mg-ck\">○</span><span class=\"mg-tx\">" + esc(x.e.text) + ((x.e.mig || 0) >= 2 ? " <i style=\"font-style:normal;font-size:11px;color:var(--accent)\">已跟 " + x.e.mig + " 天</i>" : "") + "</span><span class=\"mg-d\">" + fmtShort(x.k) + "</span></div>").join("") + "</div><button class=\"gs-done\" id=\"mAll\">带来选中的</button><div style=\"display:flex;gap:8px;margin-top:10px\"><button class=\"gm-btn\" id=\"mSd\" style=\"flex:1;padding:10px\">☾ 没勾的收进待办池</button><button class=\"gm-btn\" id=\"mSkip\" style=\"flex:1;padding:10px\">都不带 · 任务里有底</button></div>";
		const sel = /* @__PURE__ */ new Set();
		const refresh = () => {
			S.querySelectorAll(".mg-item").forEach((el) => {
				const on = sel.has(+el.dataset.i);
				el.classList.toggle("on", on);
				el.querySelector(".mg-ck").textContent = on ? "●" : "○";
			});
			$("#mAll").textContent = sel.size ? "带来选中的（" + sel.size + "）" : "带来选中的";
			$("#mSel").textContent = sel.size === left.length ? "全不选" : "全选";
		};
		S.querySelectorAll(".mg-item").forEach((el) => {
			el.onclick = () => {
				const i = +el.dataset.i;
				if (sel.has(i)) sel.delete(i);
				else sel.add(i);
				refresh();
			};
		});
		$("#mSel").onclick = () => {
			if (sel.size === left.length) sel.clear();
			else left.forEach((_, i) => sel.add(i));
			refresh();
		};
		$("#mAll").onclick = () => {
			if (!sel.size) {
				toast("先勾选要带的 · 不带就点下面");
				return;
			}
			[...sel].map((i) => left[i]).forEach((x) => {
				const e = x.e;
				e.state = "migrated";
				e.mig = (e.mig || 0) + 1;
				e.badge = "→" + fmtShort(TODAY) + (e.progress ? " · 已完成" + e.progress + "%" : "");
				P().plan.push({
					sym: "task",
					state: "open",
					text: e.text,
					time: e.time || void 0,
					pick: e.pick || void 0,
					nbId: e.nbId || void 0,
					groups: e.groups ? [...e.groups] : void 0,
					progress: e.progress,
					mig: e.mig,
					src: e.src || x.parent && x.parent.text || void 0,
					srcDay: x.k || void 0,
					srcId: e._id || (e._id = ++appState.uid),
					badge: ">×" + e.mig + (e.progress ? " · 已完成" + e.progress + "%" : ""),
					_id: ++appState.uid
				});
			});
			toast("已带来 " + sel.size + " 件 · 其余在任务汇总里");
			closeSheet();
			scheduleSave();
		};
		$("#mSd").onclick = () => {
			const rest = left.filter((_, i) => !sel.has(i));
			if (!rest.length) {
				toast("都勾上了，没有要放的");
				return;
			}
			rest.forEach((x) => {
				x.e.state = "someday";
				delete x.e.due;
				x.e.badge = "☾ 想做";
			});
			if (sel.size) [...sel].map((i) => left[i]).forEach((x) => {
				const e = x.e;
				e.state = "migrated";
				e.mig = (e.mig || 0) + 1;
				e.badge = "→" + fmtShort(TODAY);
				P().plan.push({
					sym: "task",
					state: "open",
					text: e.text,
					time: e.time || void 0,
					pick: e.pick || void 0,
					nbId: e.nbId || void 0,
					groups: e.groups ? [...e.groups] : void 0,
					mig: e.mig,
					src: e.src || x.parent && x.parent.text || void 0,
					srcDay: x.k || void 0,
					srcId: e._id || (e._id = ++appState.uid),
					badge: ">×" + e.mig,
					_id: ++appState.uid
				});
			});
			toast("☾ " + rest.length + " 件收进待办池" + (sel.size ? " · 带来 " + sel.size + " 件" : "") + " · 想做时去侧栏捞");
			closeSheet();
			scheduleSave();
			render();
		};
		$("#mSkip").onclick = () => {
			toast("都留在原页 · 任务汇总随时能翻");
			closeSheet();
		};
		refresh();
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function showOnboard() {
		if (appState.SEEN.onboard) return;
		obOpen(false);
	}
	// src/modules/tower/forms.js
	function towerField(f, name, label, type, value, options) {
		const row = towerEl("label", "tw-field"), text = towerEl("span", "", label);
		const el = document.createElement(type === "select" ? "select" : "input");
		el.name = name;
		el.className = "vt-in";
		if (type === "select") for (const [key, title] of options) el.add(new Option(title, key));
		else el.type = type;
		if (type === "checkbox") el.checked = !!value;
		else el.value = value ?? "";
		row.append(text, el);
		f.append(row);
		return el;
	}
	function towerNumber(f, name, label, value, min, max, step = 1) {
		const el = towerField(f, name, label, "number", value);
		Object.assign(el, {
			min,
			max,
			step
		});
		return el;
	}
	function towerVisible(field, show) {
		field.closest("label").hidden = !show;
		field.disabled = !show;
	}
	function towerForm(title) {
		topTitle.textContent = title.endsWith("提醒") ? "提醒" : "计划";
		const f = towerEl("form", "tw-form tw-card");
		f.append(towerEl("h3", "", title));
		view.append(f);
		return f;
	}
	function towerSubmit(f, title, save) {
		const error = towerEl("p", "tw-error"), button = towerEl("button", "rv-confirm", title);
		error.setAttribute("role", "status");
		button.type = "submit";
		f.append(error, button);
		f.onsubmit = (e) => {
			e.preventDefault();
			error.textContent = save() || "";
		};
	}
	function stageForm(old, type) {
		const f = towerForm(old ? "调整计划" : "新建计划"), today = stageToday();
		const defaults = {
			sleep: 23,
			water: 14,
			weight: 100,
			exercise: 28,
			book: 30,
			custom: 30
		};
		const name = towerField(f, "name", "计划名称", "text", old?.name ?? navigationState.cur.q ?? STAGE_TYPES[type][1]);
		name.required = true;
		name.maxLength = 80;
		const start = towerField(f, "start", "开始日期", "date", old?.start ?? today);
		start.required = true;
		const modes = type === "weight" ? [["open", "暂不设期限"], ["days", "持续天数"]] : [["days", "持续天数"], ["count", "累计次数"]];
		const mode = towerField(f, "mode", "结束方式", "select", old?.mode ?? (type === "weight" && !navigationState.cur.date ? "open" : "days"), modes);
		const limit = towerNumber(f, "limit", "持续天数", old?.limit ?? navigationState.cur.date ?? defaults[type], 1, 3650);
		limit.required = true;
		const end = towerEl("small", "tw-muted");
		f.append(end);
		let goal, base, clock, action, byBook, minutes, bookGoal, source;
		if (type === "weight") {
			const startingRecord = () => healthLatest(appState.HEALTH.records.weight.filter((r) => r.date <= start.value));
			source = old ? appState.HEALTH.records.weight.find((r) => r.id === old.baseId) : startingRecord();
			goal = towerNumber(f, "goal", "目标减重 · 斤（选填）", old?.goal ?? (navigationState.cur.q?.match(/减\s*(\d+(?:\.\d+)?)\s*斤/) || [])[1], .1, 999, .1);
			base = towerNumber(f, "base", "确认起始体重 · kg", old ? stageWeights(old, today).baseline : source?.value, 1, 500, .1);
			base.required = true;
			let manual = !!old && !source;
			base.oninput = () => {
				manual = true;
			};
			start.oninput = () => {
				source = startingRecord();
				if (!manual) base.value = source?.value ?? "";
			};
			action = towerField(f, "action", "想坚持的行动 · 选填", "text", old?.action);
			action.placeholder = "只看体重可留空，也可填「称重」或「晚饭后散步」";
		}
		if (type === "sleep") clock = towerField(f, "clock", "上床目标 · 选填", "time", old ? old.clock : "23:30");
		if (type === "book") {
			byBook = towerField(f, "reading", "怎么记录", "select", old?.byBook ? "books" : "minutes", [["minutes", "按次读书"], ["books", "按读完的本数"]]);
			minutes = towerNumber(f, "minutes", "每次读几分钟", old?.minutes ?? 15, 1, 1440);
			minutes.required = true;
			bookGoal = towerNumber(f, "bookGoal", "想读完几本 · 选填", old?.bookGoal || "", 1, 3650);
		}
		if (type === "exercise" || type === "custom") {
			action = towerField(f, "action", "每次做什么", "text", old?.action ?? (type === "exercise" ? "晚饭后散步" : ""));
			action.placeholder = "留空则使用计划名称";
		}
		if (type === "water") f.append(towerEl("p", "tw-muted", healthWaterTarget(appState.HEALTH) ? "每天达到晨露小站的饮水目标后自动记一次。" : "请在晨露小站设置饮水目标，达到目标的日期会计入计划。"));
		const week = towerEl("fieldset", "tw-week");
		week.append(towerEl("legend", "", "安排在哪几天"));
		const chosen = old?.week ?? (type === "exercise" ? [
			1,
			3,
			5
		] : [
			1,
			2,
			3,
			4,
			5,
			6,
			0
		]);
		for (const day of [
			1,
			2,
			3,
			4,
			5,
			6,
			0
		]) {
			const item = towerEl("label", ""), check = document.createElement("input");
			check.type = "checkbox";
			check.value = day;
			check.checked = chosen.includes(day);
			item.append(check, towerEl("span", "", "日一二三四五六"[day]));
			week.append(item);
		}
		f.append(week);
		function sync() {
			const books = byBook?.value === "books";
			towerVisible(limit, mode.value !== "open");
			limit.previousElementSibling.textContent = mode.value === "count" ? books ? "目标本数" : "累计次数" : "持续天数";
			if (minutes) towerVisible(minutes, !books);
			if (bookGoal) towerVisible(bookGoal, books && mode.value === "days");
			week.hidden = books || type === "weight" && !action.value.trim();
			end.textContent = mode.value === "days" && healthValidDate(start.value) && limit.validity.valid ? "结束日期　" + healthAddDays(start.value, +limit.value - 1) : "";
		}
		f.addEventListener("input", sync);
		sync();
		towerSubmit(f, "保存计划", () => {
			if (!name.value.trim()) return "请填写计划名称";
			const days = [...week.querySelectorAll(":checked")].map((el) => +el.value);
			if (!week.hidden && !days.length) return "请选择至少一天";
			const saved = {
				id: old?.id ?? healthId(),
				type,
				name: name.value.trim(),
				mode: mode.value,
				start: start.value,
				limit: mode.value === "open" ? defaults[type] : +limit.value,
				week: days,
				log: old?.log ?? {},
				action: action?.value.trim() || "",
				clock: clock?.value || "",
				goal: +goal?.value || 0,
				baseKg: +base?.value || 0,
				byBook: byBook?.value === "books",
				minutes: +minutes?.value || 0
			};
			if (bookGoal) saved.bookGoal = bookGoal.disabled ? 0 : +bookGoal.value;
			if (base && source && source.value === saved.baseKg && source.date <= saved.start) saved.baseId = source.id;
			if (old) Object.assign(old, { baseId: null }, saved);
			else stagePlans().push(saved);
			scheduleSave();
			towerList("plans");
			toast("计划已保存");
		});
	}
	function towerReminderForm(old, preset) {
		const draft = old || preset || {}, f = towerForm(old ? "编辑提醒" : "新建提醒");
		const name = towerField(f, "name", "提醒内容", "text", draft.name);
		name.id = "cyName";
		name.placeholder = "写下要提醒的事";
		name.required = true;
		const day = towerField(f, "date", "日期", "date", draft.start || stageToday());
		day.required = true;
		const time = towerField(f, "time", "时间 · 选填", "time", draft.time);
		const ahead = towerNumber(f, "ahead", "提前几天提示", draft.ahead ?? 0, 0, 365);
		ahead.id = "cyAhead";
		const repeat = towerField(f, "repeat", "重复", "checkbox", !!draft.kind && draft.kind !== "once");
		const kind = towerField(f, "kind", "重复周期", "select", draft.kind === "once" ? "daily" : draft.kind || "daily", [
			["daily", "每天"],
			["weekly", "每周"],
			["month", "每月"],
			["year", "每年 · 阳历"],
			["lunar", "每年 · 农历"],
			["ndays", "每 N 天"]
		]);
		const category = towerField(f, "tag", "提醒类别", "select", draft.tag || "custom", [
			["custom", "自定义"],
			["birthday", "生日"],
			["anniv", "纪念日"],
			["bill", "还款日"],
			["period", "生理期"]
		]);
		const now = parseKey(TODAY);
		const month = towerNumber(f, "month", "月份", draft.lm ?? draft.m ?? now.getMonth() + 1, 1, 12);
		month.id = "cyM";
		const dom = towerNumber(f, "dom", "几号", draft.ld ?? draft.d ?? draft.day ?? now.getDate(), 1, 31);
		dom.id = "cyD";
		const year = towerNumber(f, "y0", "出生或起始年份 · 选填", draft.y0, 1900, 2100);
		const interval = towerNumber(f, "interval", "间隔天数", draft.n ?? 7, 1, 365);
		if (old?.kind === "ndays" && old.anchor) day.value = key2iso(old.anchor);
		if (draft.personId) kind.querySelectorAll("option").forEach((o) => {
			if (!["year", "lunar"].includes(o.value)) o.remove();
		});
		function sync() {
			const k = repeat.checked ? kind.value : "once";
			towerVisible(kind, repeat.checked);
			towerVisible(category, repeat.checked && !draft.personId);
			towerVisible(day, [
				"once",
				"daily",
				"weekly",
				"ndays"
			].includes(k));
			day.previousElementSibling.textContent = k === "ndays" ? "上一次日期" : k === "once" ? "日期" : "首次日期";
			towerVisible(month, ["year", "lunar"].includes(k));
			towerVisible(dom, [
				"month",
				"year",
				"lunar"
			].includes(k));
			month.previousElementSibling.textContent = k === "lunar" ? "农历月份" : "月份";
			dom.previousElementSibling.textContent = k === "lunar" ? "农历日" : "几号";
			dom.max = k === "lunar" ? 30 : 31;
			towerVisible(year, ["year", "lunar"].includes(k));
			towerVisible(interval, k === "ndays");
		}
		f.onchange = sync;
		sync();
		towerSubmit(f, old ? "保存修改" : "保存提醒", () => {
			const k = repeat.checked ? kind.value : "once";
			if (!name.value.trim()) return "请填写提醒内容";
			if (k === "year" && +dom.value > new Date(2e3, +month.value, 0).getDate()) return "请检查月份和日期";
			if (!month.disabled && !month.value || !dom.disabled && !dom.value || !interval.disabled && !interval.value) return "请填完整重复周期";
			const c = {
				id: old?.id ?? ++appState.uid,
				name: name.value.trim(),
				kind: k,
				time: time.value,
				ahead: +ahead.value,
				enabled: old?.enabled !== false,
				tag: category.value
			};
			if (!day.disabled) c.start = day.value;
			if (k === "year") {
				c.m = +month.value;
				c.d = +dom.value;
			}
			if (k === "month") c.day = +dom.value;
			if (k === "lunar") {
				c.lm = +month.value;
				c.ld = +dom.value;
			}
			if (k === "ndays") {
				c.n = +interval.value;
				c.anchor = towerKey(day.value);
			}
			if (!year.disabled && year.value) c.y0 = +year.value;
			if (draft.personId && ["year", "lunar"].includes(k)) c.personId = draft.personId;
			if (old) SET.cycles[SET.cycles.indexOf(old)] = c;
			else SET.cycles.push(c);
			towerRefreshReminder(c);
			scheduleSave();
			towerList("reminders");
			toast("提醒已保存");
		});
		f.querySelector("button[type=submit]").id = "cySave";
	}
	// src/modules/tower/index.js
	function towerKey(iso) {
		return iso.split("-").map(Number).join(".");
	}
	function towerRefreshReminder(c) {
		P().plan = P().plan.filter((e) => !(e.cyc === c.id && (e.state === "open" || e.sym === "note")));
		c.lastIns = P().plan.some((e) => e.cyc === c.id && e.sym === "task") ? TODAY : null;
		c.lastPre = null;
		cycMaterialize();
	}
	function towerReminderNext(c, from) {
		if (c.enabled === false) return null;
		if (c.kind === "once") return c.start >= key2iso(from) ? towerKey(c.start) : null;
		if (["daily", "weekly"].includes(c.kind)) {
			const first = towerKey(c.start);
			if (c.start >= key2iso(from)) return first;
			return c.kind === "daily" ? from : addDaysK(from, (7 - healthDays(c.start, key2iso(from)) % 7) % 7);
		}
	}
	function towerRender() {
		const tab = navigationState.cur.tab || "plans", p = stagePlans().find((x) => x.id === navigationState.cur.id);
		topTitle.textContent = "提醒";
		reviewBtn.textContent = "回今日";
		if (tab === "reminderForm") {
			towerReminderForm(SET.cycles.find((c) => c.id === navigationState.cur.id), navigationState.cur.key === "preset" ? remindersState.cycDraft : null);
			return;
		}
		if (tab === "templates") {
			topTitle.textContent = "新建";
			stageTemplates();
			return;
		}
		if (tab === "form") {
			stageForm(p, p?.type || navigationState.cur.key || "custom");
			return;
		}
		if (tab === "detail" && p) {
			topTitle.textContent = "计划";
			stageDetail(p);
			return;
		}
		const head = letterHouseHead("cycles");
		head.querySelector(".letter-kicker").textContent = "岛上的日常 · 笃笃";
		head.querySelector("p").textContent = tab === "reminders" ? "到哪天，该提醒哪件事？" : "今天有哪些计划？";
		view.append(head);
		const tabs = towerEl("div", "tw-tabs");
		for (const [key, label] of [["plans", "阶段计划"], ["reminders", "定时提醒"]]) {
			const selected = tab === "reminders" === (key === "reminders");
			const b = journalButton(label, "chip" + (selected ? " on" : ""), () => {
				navigationState.navFromBack = true;
				towerGo(key);
			});
			b.setAttribute("aria-pressed", selected);
			tabs.append(b);
		}
		view.append(tabs);
		if (tab === "reminders") {
			towerHeading(view, "我的提醒", "＋ 新建提醒", () => towerGo("reminderForm"));
			renderCycles();
		} else stageOverview();
	}
	function towerHealthLinks(page) {
		if (!["weight", "water"].includes(navigationState.cur.tab)) return;
		const linked = stagePlans().filter((p) => p.type === navigationState.cur.tab && !stageFinished(p, healthAddDays(stageToday(), -1)));
		for (const p of linked) {
			const b = journalButton("关联计划：" + p.name + " ›", "hl-link tw-link", () => towerGo("detail", p.id));
			page.querySelector(".health-pan")?.append(b);
		}
	}
	function towerChat(input, text, base) {
		if (base !== TODAY) return false;
		const match = text.match(/^(?:我想|我要|我打算|我准备|创建|新建|开始)?(?:一个)?(\d{1,3})\s*天(?:的)?(早睡|减肥|喝水|运动|读书)(?:计划|挑战)?$/) || text.match(/^(?:我想|我要|开始)?(早睡|减肥|喝水|运动|读书)\s*(\d{1,3})\s*天(?:计划|挑战)?$/);
		const weight = text.match(/^(?:我想|我要|目标是|计划)?(?:减肥|减重|减)\s*(\d+(?:\.\d+)?)\s*斤$/);
		if (match || weight) {
			const duration = match ? Number(match[1]) || Number(match[2]) : null;
			if (match && !duration) return false;
			const type = weight ? "weight" : {
				早睡: "sleep",
				减肥: "weight",
				喝水: "water",
				运动: "exercise",
				读书: "book"
			}[isNaN(+match[1]) ? match[1] : match[2]];
			const title = weight ? "减 " + weight[1] + " 斤" : duration + " 天" + (isNaN(+match[1]) ? match[1] : match[2]);
			input.value = "";
			chatGrow();
			navigationState.cur = {
				name: "cycles",
				tab: "form",
				key: type,
				date: duration || void 0,
				q: title
			};
			render();
			return true;
		}
		const sleep = text.match(/^昨晚\s*(\d{1,2}[:：][0-5]\d)\s*(?:就)?(?:上床|睡觉|睡)(?:了)?[。！]?$/);
		if (!sleep) return false;
		const date = healthAddDays(key2iso(dkey(/* @__PURE__ */ new Date())), -1), plans = stagePlans().filter((p) => p.type === "sleep" && stageHasTask(p, date));
		if (plans.length !== 1 || journalRank(sleep[1].replace("：", ":")) >= 1440) return false;
		const p = plans[0], time = sleep[1].replace("：", ":").padStart(5, "0");
		input.value = "";
		chatGrow();
		composerState.CHAT = {
			mode: "tip",
			base
		};
		chatShow("ask", "把 " + time + " 记到昨晚的「" + vEsc(p.name) + "」？", [["yes", "记到计划"], ["normal", "只记日常"]], (a) => {
			chatReplyHide();
			if (a === "yes") stageMark(p, date, time, stageMet(p, time));
			else {
				chatPlace([{
					text,
					kind: {
						kind: "event",
						day: towerKey(date)
					}
				}], base);
				render();
			}
		});
		return true;
	}
	function towerCalendarEvent(c, k, index) {
		const compact = key2iso(k).replaceAll("-", "");
		const start = c.time ? "DTSTART:" + compact + "T" + c.time.replace(":", "") + "00" : "DTSTART;VALUE=DATE:" + compact;
		const end = c.time ? "DURATION:PT1M" : "DTEND;VALUE=DATE:" + key2iso(addDaysK(k, 1)).replaceAll("-", "");
		const rules = {
			year: "FREQ=YEARLY",
			month: "FREQ=MONTHLY;BYMONTHDAY=" + c.day + ",-1;BYSETPOS=1",
			daily: "FREQ=DAILY",
			weekly: "FREQ=WEEKLY",
			ndays: "FREQ=DAILY;INTERVAL=" + c.n
		};
		const escape = (s) => String(s).replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/[,;]/g, (m) => "\\" + m);
		const rows = [
			"BEGIN:VEVENT",
			"UID:dotcyc-" + c.id + "-" + index + "@dot",
			"DTSTAMP:" + (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""),
			start,
			end,
			"SUMMARY:" + escape(cycIcon(c) + " " + c.name)
		];
		if (rules[c.kind]) rows.push("RRULE:" + rules[c.kind]);
		if (c.time || c.ahead) rows.push("BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + escape(c.name), "TRIGGER:" + (c.ahead ? "-P" + c.ahead + "D" : "PT0M"), "END:VALARM");
		rows.push("END:VEVENT");
		return rows.join("\r\n") + "\r\n";
	}
	function stageValidateBackup(plans) {
		if (plans == null) return;
		if (!Array.isArray(plans)) throw new Error("阶段计划数据格式无效");
		const ids = /* @__PURE__ */ new Set();
		for (const p of plans) {
			if (!p || !Object.hasOwn(STAGE_TYPES, p.type) || typeof p.id !== "string" || ids.has(p.id) || typeof p.name !== "string" || !healthValidDate(p.start) || ![
				"days",
				"count",
				"open"
			].includes(p.mode) || !Number.isInteger(p.limit) || p.limit < 1 || p.limit > 3650 || !Array.isArray(p.week) || !p.week.every((d) => Number.isInteger(d) && d >= 0 && d <= 6) || !p.log || typeof p.log !== "object" || Array.isArray(p.log) || Object.entries(p.log).some(([date, e]) => !healthValidDate(date) || !e || e.sym !== "task" || typeof e.text !== "string")) throw new Error("阶段计划记录无效");
			ids.add(p.id);
		}
	}
	// src/modules/tower/reminders.js
	var remindersState = {};
	var CYC_ICON = {
		birthday: "🎂",
		anniv: "💍",
		period: "🩸",
		bill: "💳"
	};
	function cycIcon(c) {
		if (CYC_ICON[c.tag]) return CYC_ICON[c.tag];
		const nm = c.name || "";
		if (/生日/.test(nm)) return "🎂";
		if (/纪念/.test(nm)) return "💍";
		if (/还款|信用卡|房贷|账单/.test(nm)) return "💳";
		return "🔁";
	}
	function fmtNextK(k) {
		const y = +k.split(".")[0], ty = +TODAY.split(".")[0];
		if (y === ty) return fmtKey(k);
		if (y === ty + 1) return "明年 " + fmtKey(k);
		return y + " 年 " + fmtKey(k);
	}
	function cycTwinInfo(c) {
		if (!(c.tag === "birthday" || /生日/.test(c.name || "")) || !c.y0) return null;
		let tw = null;
		if (c.kind === "lunar" && c.lm && c.ld) {
			const t = lunarToSolar(c.y0, c.lm, c.ld);
			if (!t) return null;
			tw = {
				kind: "year",
				m: t.getMonth() + 1,
				d: t.getDate(),
				y0: t.getFullYear(),
				label: "阳历生日是 " + (t.getMonth() + 1) + " 月 " + t.getDate() + " 日"
			};
			tw.nextK = cycNext({
				kind: "year",
				m: tw.m,
				d: tw.d
			}, TODAY);
		} else if (c.kind === "year" && c.m && c.d) {
			const L = solarToLunar(new Date(c.y0, c.m - 1, c.d));
			if (!L) return null;
			tw = {
				kind: "lunar",
				lm: L.lm,
				ld: L.ld,
				y0: L.ly,
				label: "农历生日是" + lunarLabel(L.lm, L.ld).slice(2) + (L.leap ? "（生在闰月 · 按平月过）" : "")
			};
			tw.nextK = lunarNextK(tw.lm, tw.ld, TODAY);
		} else return null;
		const pn = (c.name || "").toLowerCase().replace(/的?生日[（(]?.*$/, "");
		tw.dup = (SET.cycles || []).some((x) => x !== c && x.kind === tw.kind && (tw.kind === "lunar" ? x.lm === tw.lm && x.ld === tw.ld : x.m === tw.m && x.d === tw.d) && (!pn || (x.name || "").toLowerCase().indexOf(pn) === 0));
		return tw;
	}
	function cycAgeStr(c, k) {
		if (!c.y0) return "";
		const n2 = +k.split(".")[0] - c.y0;
		return n2 > 0 ? n2 + (c.tag === "anniv" ? " 周年" : " 岁") : "";
	}
	remindersState.cycUiOpen = false;
	var pendingCDel = null;
	remindersState.cycEdit = null;
	remindersState.cycDraft = null;
	remindersState.cycTag = "birthday";
	remindersState.cycCal = "solar";
	function cycDesc(c) {
		if (c.kind === "once") return c.start + " · 仅一次";
		if (c.kind === "daily") return "每天";
		if (c.kind === "weekly") return "每周" + weekCN(towerKey(c.start)).replace("周", "");
		if (c.kind === "lunar") return "每年 " + lunarLabel(c.lm, c.ld);
		if (c.kind === "year") return "每年 " + c.m + " 月 " + c.d + " 日";
		if (c.kind === "month") return "每月 " + c.day + " 号";
		return "每 " + c.n + " 天 · 上次 " + fmtShort(c.anchor) + " 日";
	}
	function cycHits(c, k) {
		if (c.enabled === false) return false;
		const date = key2iso(k);
		if (c.kind === "once") return date === c.start;
		if (c.kind === "daily" || c.kind === "weekly") return date >= c.start && (c.kind === "daily" || healthDays(c.start, date) % 7 === 0);
		const a = k.split(".").map(Number);
		if (c.kind === "lunar") {
			for (let ly = a[0] - 1; ly <= a[0]; ly++) {
				const t = lunarToSolar(ly, c.lm, c.ld);
				if (t && dkey(t) === k) return true;
			}
			return false;
		}
		if (c.kind === "year") return a[1] === +c.m && a[2] === +c.d;
		if (c.kind === "month") {
			const last = new Date(a[0], a[1], 0).getDate();
			return a[2] === Math.min(+c.day, last);
		}
		const diff = Math.round((parseKey(k) - parseKey(c.anchor)) / 864e5);
		return diff > 0 && diff % +c.n === 0;
	}
	function cycNext(c, fromK) {
		const fixed = towerReminderNext(c, fromK);
		if (fixed !== void 0) return fixed;
		if (c.kind === "lunar") return lunarNextK(c.lm, c.ld, fromK);
		const d = parseKey(fromK);
		for (let i = 0; i < 800; i++) {
			const k = dkey(d);
			if (cycHits(c, k)) return k;
			d.setDate(d.getDate() + 1);
		}
		return null;
	}
	function cycOnDone(e) {
		if (!e.cyc) return;
		const c = (SET.cycles || []).find((x) => x.id === e.cyc);
		if (c && c.kind === "ndays") {
			c.anchor = TODAY;
			scheduleSave();
			toast("周期已从今天重新起算");
		}
	}
	function cycIcs(c) {
		const ev = (k, i) => towerCalendarEvent(c, k, i);
		let evs = "";
		if (c.kind === "lunar") {
			let k = cycNext(c, TODAY);
			for (let i = 0; i < 5 && k; i++) {
				evs += ev(k, i);
				k = cycNext(c, addDaysK(k, 1));
			}
		} else {
			const nk = cycNext(c, TODAY);
			if (nk) evs = ev(nk, 0);
		}
		if (!evs) {
			toast("算不出下一次时间");
			return;
		}
		const ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//dot//CN\r\n" + evs + "END:VCALENDAR\r\n";
		platform.download(new Blob([ics], { type: "text/calendar" }), (c.name || "提醒").slice(0, 12) + ".ics");
		toast(c.kind === "lunar" ? "农历日子已按未来 5 年算好写进日历文件" : "已生成日历文件 · 打开即可加入系统日历（会真的响）");
	}
	function renderCycles() {
		if (!SET.cycles.length) {
			const d = document.createElement("div");
			d.className = "empty-hint";
			d.style.textAlign = "center";
			d.style.padding = "26px 2px 8px";
			d.innerHTML = jjImg("nap", 72) + "<div style=\"margin-top:8px\">还没有提醒 · 生日（阴历也认）、纪念日、生理期、还款日都交给我记</div>";
			view.appendChild(d);
		}
		SET.cycles.forEach((c) => {
			const card = document.createElement("div");
			card.className = "vt-card";
			const nk = cycNext(c, TODAY);
			const tw = cycTwinInfo(c);
			card.innerHTML = "<div class=\"vt-site\">" + houseMark("cycles") + vEsc(c.name) + "<button class=\"gm-btn\" data-a=\"edit\" style=\"margin-left:auto\">改</button><button class=\"gm-btn danger\" data-a=\"del\" style=\"margin-left:0\">" + (pendingCDel === c.id ? "确认删除" : "删") + "</button></div><div class=\"vt-note\">" + vEsc(cycDesc(c)) + (c.ahead ? " · 提前 " + c.ahead + " 天提示" : "") + (nk ? "<br>下次：" + fmtNextK(nk) + "（" + weekCN(nk) + "）" + (cycAgeStr(c, nk) ? " · " + cycAgeStr(c, nk) : "") : "") + (tw ? "<br>换算：TA的" + tw.label + (tw.nextK ? " · 下次落 " + fmtNextK(tw.nextK) : "") : "") + "</div><div class=\"rp-tabs\" style=\"margin-top:10px\"><button class=\"chip\" data-a=\"ics\">入系统日历</button>" + (tw && !tw.dup ? "<button class=\"chip\" data-a=\"twin\">" + (tw.kind === "lunar" ? "农历生日也提醒" : "阳历生日也提醒") + "</button>" : "") + (c.kind === "ndays" ? "<button class=\"chip\" data-a=\"reset\">今天来了 · 重新起算</button>" : "") + "</div>";
			const enabled = c.enabled !== false;
			const toggle = journalButton(enabled ? "提醒已开启" : "提醒已暂停", "chip tw-switch", () => {
				c.enabled = !enabled;
				towerRefreshReminder(c);
				scheduleSave();
				render();
			});
			toggle.setAttribute("role", "switch");
			toggle.setAttribute("aria-checked", String(enabled));
			card.querySelector(".rp-tabs").prepend(toggle);
			card.querySelector("[data-a=\"ics\"]").disabled = !enabled;
			if (c.time) card.querySelector(".vt-note").prepend(document.createTextNode(c.time + " · "));
			card.querySelector("[data-a=\"del\"]").onclick = () => {
				if (pendingCDel !== c.id) {
					pendingCDel = c.id;
					toast("再点一次确认删除");
					render();
					return;
				}
				c.enabled = false;
				towerRefreshReminder(c);
				SET.cycles = SET.cycles.filter((x) => x.id !== c.id);
				pendingCDel = null;
				scheduleSave();
				render();
			};
			card.querySelector("[data-a=\"edit\"]").onclick = () => {
				towerGo("reminderForm", c.id);
			};
			card.querySelector("[data-a=\"ics\"]").onclick = () => cycIcs(c);
			const twB = card.querySelector("[data-a=\"twin\"]");
			if (twB) twB.onclick = () => {
				const t2 = cycTwinInfo(c);
				if (!t2 || t2.dup) {
					render();
					return;
				}
				const nc = {
					id: ++appState.uid,
					name: c.name + (t2.kind === "lunar" ? "（农历）" : "（阳历）"),
					tag: "birthday",
					ahead: c.ahead != null ? c.ahead : 3
				};
				if (t2.kind === "lunar") {
					nc.kind = "lunar";
					nc.lm = t2.lm;
					nc.ld = t2.ld;
				} else {
					nc.kind = "year";
					nc.m = t2.m;
					nc.d = t2.d;
				}
				nc.y0 = t2.y0;
				SET.cycles.push(nc);
				scheduleSave();
				toast("已添加 · " + (t2.kind === "lunar" ? "农历" : "阳历") + "那天也会提醒");
				render();
			};
			const rs = card.querySelector("[data-a=\"reset\"]");
			if (rs) rs.onclick = () => {
				c.anchor = TODAY;
				scheduleSave();
				toast("已从今天重新起算");
				render();
			};
			view.appendChild(card);
		});
		const tip = document.createElement("div");
		tip.className = "vt-tip";
		tip.textContent = "到那天打开 App，提醒会出现在「待办」；网页版没有系统推送，想让手机真的响就点「入系统日历」。";
		view.appendChild(tip);
	}
	// src/modules/people/details.js
	function friendParse(t) {
		const m = t.match(/(?:认识(?:了)?(?:一?个)?新朋友[，,\s]*(?:叫|是)?|新朋友叫)([\u4e00-\u9fffA-Za-z·]{2,16})(?=[，,。\s]|$)/);
		if (!m) return null;
		const name = m[1], mb = t.match(/\b([EI][NS][FT][JP])(?:-[AT])?\b/i), intro = t.match(/(?:是|由)?([^，,。\s]{2,12})介绍(?:的)?/);
		const bd = /生日/.test(t) ? t.match(/(?:(\d{4}|\d{2})年)?(?:农历|阴历|阳历)?(\d{1,2})月(\d{1,2})[日号]?/) : null;
		let birthday = null;
		if (bd) {
			let y = bd[1] ? +bd[1] : 0;
			if (y && y < 100) y += y <= (/* @__PURE__ */ new Date()).getFullYear() % 100 ? 2e3 : 1900;
			birthday = {
				y,
				m: +bd[2],
				d: +bd[3],
				calendar: /农历|阴历/.test(t) ? "lunar" : "solar"
			};
		}
		return {
			name,
			rel: "朋友",
			mbti: mb ? mb[1].toUpperCase() : "",
			introducedBy: intro ? intro[1].replace(/^(?:是|由)/, "") : "",
			birthday,
			met: /今天.*(?:认识|新朋友)/.test(t) ? dkey(/* @__PURE__ */ new Date()) : "",
			source: t
		};
	}
	function friendBirthdayLabel(b) {
		return b ? (b.y ? b.y + "年" : "") + b.m + "月" + b.d + "日（" + (b.calendar === "lunar" ? "农历" : "阳历") + "）" : "";
	}
	function friendFields(p) {
		const b = p.birthday || {};
		return "<label>MBTI<input class=\"vt-in\" id=\"frMBTI\" maxlength=\"4\" value=\"" + escAttr(p.mbti || "") + "\" placeholder=\"如 ENFP，可留空\"></label><label>介绍人<input class=\"vt-in\" id=\"frIntro\" value=\"" + escAttr(p.introducedBy || "") + "\" placeholder=\"如老赵，可留空\"></label><label>生日 <select class=\"vt-in\" id=\"frCal\"><option value=\"solar\"" + (b.calendar !== "lunar" ? " selected" : "") + ">阳历</option><option value=\"lunar\"" + (b.calendar === "lunar" ? " selected" : "") + ">农历</option></select></label><div class=\"friend-date\"><input class=\"vt-in\" id=\"frY\" type=\"number\" placeholder=\"出生年，可不填\" value=\"" + (b.y || "") + "\"><input class=\"vt-in\" id=\"frM\" type=\"number\" placeholder=\"月\" value=\"" + (b.m || "") + "\"><input class=\"vt-in\" id=\"frD\" type=\"number\" placeholder=\"日\" value=\"" + (b.d || "") + "\"></div><label>相识日期<input class=\"vt-in\" id=\"frMet\" type=\"date\" value=\"" + (p.met ? key2iso(p.met) : "") + "\"></label>";
	}
	function friendRead(s) {
		const val = (id) => s.querySelector("#" + id).value.trim(), mbti = val("frMBTI").toUpperCase();
		if (mbti && !/^[EI][NS][FT][JP]$/.test(mbti)) {
			toast("MBTI 填四个字母，如 ENFP");
			return null;
		}
		const y = +val("frY"), m = +val("frM"), d = +val("frD"), cal = val("frCal");
		if ((y || m || d) && (!(m >= 1 && m <= 12) || !(d >= 1 && d <= (cal === "lunar" ? 30 : new Date(y || 2e3, m, 0).getDate())) || y && !(y >= 1900 && y <= (/* @__PURE__ */ new Date()).getFullYear()))) {
			toast("生日日期不完整或不正确");
			return null;
		}
		const intro = val("frIntro"), matches = (SET.people || []).filter((p) => personAliases(p).includes(intro));
		return {
			mbti,
			introducedBy: intro,
			introducerId: matches.length === 1 ? matches[0].id : null,
			birthday: m ? {
				y,
				m,
				d,
				calendar: cal
			} : null,
			met: val("frMet") ? val("frMet").split("-").map(Number).join(".") : ""
		};
	}
	function friendEditExtras(s, p) {
		const box = document.createElement("div");
		box.className = "friend-fields";
		box.innerHTML = friendFields(p || {});
		s.querySelector("#peSave").before(box);
	}
	function friendPreview(o, draft) {
		const candidates = (SET.people || []).filter((p) => personAliases(p).includes(draft.name));
		const s = healthSheet("收进亲友", "<p class=\"vt-note\">原话已记在当天日常。生日未注明农历时按阳历。</p><label>姓名<input id=\"frName\" class=\"vt-in\" value=\"" + escAttr(draft.name) + "\"></label><label>关系<input id=\"frRel\" class=\"vt-in\" value=\"" + escAttr(draft.rel) + "\"></label><div id=\"frTargetBox\"><label>册中有同名的人<select id=\"frTarget\" class=\"vt-in\"><option value=\"\">请选择</option>" + candidates.map((p) => "<option value=\"" + p.id + "\">补充到：" + vEsc(p.name) + " · " + vEsc(p.rel || "未填关系") + (p.birthday ? " · " + vEsc(friendBirthdayLabel(p.birthday)) : "") + "</option>").join("") + "<option value=\"new\">这是另一位，新增</option></select></label></div>" + friendFields(draft) + "<p id=\"frConflict\" class=\"vt-note\"></p><label id=\"frOverwriteBox\" hidden><input type=\"checkbox\" id=\"frOverwrite\"> 用本次填写的资料替换冲突项</label><button id=\"frSave\" class=\"rv-confirm\">收进亲友</button><button id=\"frOnly\" class=\"chip\">只记日常</button>");
		s.querySelector("#frTargetBox").hidden = !candidates.length;
		s.querySelector("#frOnly").onclick = () => closeSheet();
		s.querySelector("#frSave").onclick = () => {
			const name = s.querySelector("#frName").value.trim(), fields = friendRead(s);
			if (!name || !fields) {
				if (!name) toast("先写名字");
				return;
			}
			const matches = (SET.people || []).filter((p) => personAliases(p).includes(name));
			let target = s.querySelector("#frTarget").value;
			if (matches.length && !target) {
				const sel = s.querySelector("#frTarget");
				sel.innerHTML = "<option value=\"\">请选择</option>" + matches.map((p) => "<option value=\"" + p.id + "\">补充到：" + vEsc(p.name) + " · " + vEsc(p.rel || "未填关系") + "</option>").join("") + "<option value=\"new\">这是另一位，新增</option>";
				s.querySelector("#frTargetBox").hidden = false;
				toast("选已有的亲友，或新增同名的人");
				return;
			}
			let p = target && target !== "new" ? personById(+target) : null;
			if (p && !personAliases(p).includes(name)) {
				toast("姓名已修改，请重新选择收录对象");
				s.querySelector("#frTarget").value = "";
				return;
			}
			const rel = s.querySelector("#frRel").value.trim();
			const labels = {
				mbti: "MBTI",
				introducedBy: "介绍人",
				birthday: "生日",
				met: "相识日期",
				rel: "关系"
			};
			const values = {
				...fields,
				rel
			};
			const conflicts = p ? Object.keys(labels).filter((k) => p[k] && values[k] && JSON.stringify(p[k]) !== JSON.stringify(values[k])) : [];
			if (conflicts.length && !s.querySelector("#frOverwrite").checked) {
				s.querySelector("#frConflict").textContent = "已有资料不同：" + conflicts.map((k) => labels[k] + "（原来：" + (k === "birthday" ? friendBirthdayLabel(p[k]) : p[k]) + "）").join("、") + "。可改回原值，或勾选替换。";
				s.querySelector("#frOverwriteBox").hidden = false;
				return;
			}
			snapshot("收进亲友");
			if (!p) {
				p = {
					id: ++appState.uid,
					name,
					nick: [],
					rel,
					note: "",
					moments: [],
					pins: [],
					added: TODAY
				};
				SET.people.push(p);
			}
			for (const k of Object.keys(values)) if (values[k] !== "" && values[k] !== null) p[k] = values[k];
			if (fields.introducedBy) p.introducerId = fields.introducerId;
			friendSyncBirthday(p);
			o.e.personLinks = [.../* @__PURE__ */ new Set([...o.e.personLinks || [], p.id])];
			delete SET.pplNo[name];
			scheduleSave();
			closeSheet();
			chatReplyHide();
			navigationState.cur = {
				name: "person",
				pid: p.id
			};
			render();
		};
	}
	function friendBirthdayStart(p) {
		navigationState.cur = {
			name: "cycles",
			tab: "reminderForm",
			key: "preset"
		};
		remindersState.cycUiOpen = true;
		remindersState.cycEdit = null;
		remindersState.cycTag = "birthday";
		remindersState.cycCal = p.birthday && p.birthday.calendar === "lunar" ? "lunar" : "solar";
		const b = p.birthday || {};
		remindersState.cycDraft = {
			kind: remindersState.cycCal === "lunar" ? "lunar" : "year",
			tag: "birthday",
			name: p.name + "生日",
			y0: b.y || "",
			m: b.m,
			d: b.d,
			lm: b.m,
			ld: b.d,
			ahead: 0,
			personId: p.id
		};
		render();
	}
	function friendDetail(p, head) {
		if (!p.mbti && !p.introducedBy && !p.birthday && !p.met) return;
		const box = document.createElement("div");
		box.className = "vt-note";
		[
			p.mbti ? "MBTI：" + p.mbti : "",
			p.introducedBy ? "介绍人：" + p.introducedBy : "",
			p.birthday ? "生日：" + friendBirthdayLabel(p.birthday) : "",
			p.met ? "相识：" + planFull(p.met) : ""
		].filter(Boolean).forEach((t) => {
			const d = document.createElement("div");
			d.textContent = t;
			box.appendChild(d);
		});
		const intro = p.introducerId && personById(p.introducerId);
		if (intro) {
			const b = document.createElement("button");
			b.className = "chip";
			b.textContent = "看看" + intro.name;
			b.onclick = () => {
				navigationState.cur = {
					name: "person",
					pid: intro.id
				};
				render();
			};
			box.appendChild(b);
		}
		head.appendChild(box);
	}
	function friendPeople(e) {
		return (SET.people || []).filter((p) => personHitE(p, e, parseEntry(e)));
	}
	function friendMark(p, e, day) {
		p.marks = p.marks || [];
		if (p.marks.some((m) => m.sourceId === e._id)) return;
		const [y, m, d] = day.split(".").map(Number);
		p.marks.push({
			sourceId: e._id,
			sourceDay: day,
			label: e.text,
			y,
			m,
			d
		});
		scheduleSave();
	}
	function friendRecordRows(p, e, day) {
		const pinned = (p.pins || []).includes(e._id);
		const marked = (p.marks || []).some((m) => m.sourceId === e._id);
		const action = (label, run) => ({
			lab: label,
			fn: () => {
				rowPopCloseAll();
				run();
				scheduleSave();
				render();
			}
		});
		return [{
			t: "亲友别名 · " + ((p.nick || []).join("、") || "未填写"),
			acts: [{
				lab: "修改别名",
				fn: () => {
					rowPopCloseAll();
					openPersonEdit(p);
					document.getElementById("peNick").focus();
				}
			}]
		}, {
			t: "特别的日子",
			acts: [action(pinned || marked ? "移出特别的日子" : "收进特别的日子", () => {
				if (marked || pinned) {
					p.marks = (p.marks || []).filter((m) => m.sourceId !== e._id);
					p.pins = (p.pins || []).filter((id) => id !== e._id);
				} else friendMark(p, e, day);
			})]
		}];
	}
	function friendSuggest(o, text) {
		const explicit = /(?:记成|记为|加入|放进|标为|设为)(?:亲友的)?(?:重要时间点|特别的日子)/.test(o.e.text);
		if (o.e.sym === "task" || !explicit && !/(第一次|初次|认识|重逢|告别|周年|旅行|旅游|去日本|去国外|毕业|搬家|结婚|植发|散伙饭)/.test(o.e.text)) return false;
		const ps = friendPeople(o.e);
		if (!ps.length) return false;
		composerState.CHAT = {
			mode: "one",
			base: o.base,
			outs: [o],
			text
		};
		if (explicit && ps.length === 1) {
			friendMark(ps[0], o.e, o.day);
			chatShow("check", "已记下，并加入" + vEsc(ps[0].name) + "的特别的日子。", [["undo", "撤回"]], () => chatUndo([o], text));
			return true;
		}
		const acts = ps.filter((p) => !(p.marks || []).some((m) => m.sourceId === o.e._id)).map((p) => ["mark:" + p.id, "加入" + p.name + "的特别的日子"]);
		if (!acts.length) return false;
		chatShow("check", "记好了，也能在亲友的共同记录里找到。要留下这个时间点吗？", acts.concat([["no", "不用"], ["undo", "撤回"]]), (a) => {
			if (a === "undo") chatUndo([o], text);
			else if (a === "no") {
				o.e.noFriendSuggest = true;
				scheduleSave();
				chatReplyHide();
			} else {
				const p = personById(+a.split(":")[1]);
				if (p) friendMark(p, o.e, o.day);
				chatReplyHide();
				toast("已收进特别的日子");
			}
		});
		return true;
	}
	function friendResolveMark(k) {
		if (!k.sourceId) return k;
		let found = null;
		walk((day, e) => {
			if (e._id === k.sourceId) found = {
				day,
				e
			};
		});
		if (!found) return null;
		const [y, m, d] = found.day.split(".").map(Number);
		return {
			...k,
			label: found.e.text.replace(/^(今天|昨天|前天)/, "").replace(/[，,]?\s*(?:记成|记为|加入|放进|标为|设为)(?:亲友的)?(?:重要时间点|特别的日子)[。！!]?$/, ""),
			y,
			m,
			d
		};
	}
	function friendChatIntercept(inp, text, base) {
		const draft = friendParse(text);
		if (draft) {
			inp.value = "";
			chatGrow();
			navigationState.focusRef = null;
			const o = chatPlace([{
				text,
				src: text,
				kind: {
					kind: "event",
					day: base
				},
				friend: true
			}], base)[0];
			render();
			friendPreview(o, draft);
			return true;
		}
		const items = planItems(text, dkey(/* @__PURE__ */ new Date()));
		if (!items) return false;
		inp.value = "";
		chatGrow();
		navigationState.focusRef = null;
		const save = () => {
			const outs = chatPlace(items, base);
			render();
			if (outs.length === 1) chatSayOne(outs[0], text);
			else {
				composerState.CHAT = {
					mode: "done",
					base,
					outs,
					text
				};
				chatShow("check", "今天的日常已记下。<br>未来安排已放到 " + planFull(outs[outs.length - 1].day) + " 的待办。", [["undo", "撤回"]], () => chatUndo(outs, text));
			}
			chatFlash(outs);
		};
		if (items[items.length - 1].plan.needsTitle) {
			const s = healthSheet("是什么事情？", "<p>" + planFull(items[items.length - 1].kind.day) + " 放进待办</p><input class=\"vt-in\" id=\"planMissing\" placeholder=\"例如：域名到期\"><button class=\"rv-confirm\" id=\"planConfirm\">保存安排</button><button class=\"chip\" id=\"planCancel\">返回修改</button>");
			s.querySelector("#planConfirm").onclick = () => {
				const t = s.querySelector("#planMissing").value.trim();
				if (!t) return;
				items[items.length - 1].text = t;
				closeSheet();
				save();
			};
			s.querySelector("#planCancel").onclick = () => {
				closeSheet();
				inp.value = text;
				chatGrow();
			};
		} else save();
		return true;
	}
	function friendSyncBirthday(p) {
		if (!p.birthday) return;
		const b = p.birthday;
		(SET.cycles || []).filter((c) => c.personId === p.id && c.tag === "birthday").forEach((c) => {
			c.name = p.name + "生日";
			c.kind = b.calendar === "lunar" ? "lunar" : "year";
			c.y0 = b.y || void 0;
			if (c.kind === "lunar") {
				c.lm = b.m;
				c.ld = b.d;
				delete c.m;
				delete c.d;
			} else {
				c.m = b.m;
				c.d = b.d;
				delete c.lm;
				delete c.ld;
			}
		});
	}
	function friendCombinedRecord(t) {
		const first = t.split(/[，,]/)[0];
		return /散伙饭/.test(first) && !/明天|后天|下周|下个?月|准备|打算|计划|想|要/.test(first) && (SET.people || []).some((p) => personAliases(p).some((n) => first.includes(n)));
	}
	// src/modules/journal/rows.js
	var rowsState = {};
	rowsState.CLEAN_ROWS = false;
	var eventLabels = {
		film: "看片",
		eat: "吃喝",
		med: "看病",
		work: "工作",
		sport: "运动",
		fun: "玩",
		learn: "学",
		buy: "买",
		gift: "人情",
		home: "家里",
		go: "出行",
		meet: "见人"
	};
	var EV_RE = {
		eat: /(吃|喝)(?![^，。,；;]{0,3}药|亏|惊|醋|瓜|苦|力)|饭(?![前后])|(?:早餐|午餐|晚餐)(?![前后])|夜宵|下午茶|外卖|咖啡|奶茶|火锅|烧烤|烤肉|聚餐|请客|甜品|小吃|面馆|餐厅|饭店|食堂|饮料|啤酒/,
		med: /医院|看病|看牙|牙医|拔牙|智齿|体检|挂号|吃药|买药|药店|感冒|发烧|输液|复查|门诊|针灸|理疗|牙龈|牙疼|牙痛|头疼|头痛|胃疼|胃痛|肚子疼|嗓子疼|咳嗽|过敏|生病|不舒服|上火/,
		work: /开会|开[了完].{0,5}会|会议|例会|客户|方案|汇报|对接|谈判|谈了|谈事|面试|上班|加班|出差|项目|签约|合同|提案|招商|甲方|乙方|老板|述职|工作|提报|入职|离职|公章|沟通|招聘|报价|比稿|改稿|交付|上线|周报|日报|聊.{0,10}(方向|方案|合作|项目|计划|业务)/,
		sport: /跑步|跑[完了]|散步|遛弯|健身|撸铁|游泳|瑜伽|普拉提|打球|篮球|足球|羽毛球|网球|乒乓|骑车|骑行|徒步|爬山|运动|拉伸|跳绳/,
		fun: /玩(?!笑)|逛(?!超市|淘宝|京东)|KTV|ktv|唱歌|拼豆|展览|看展|演出|演唱会|音乐节|livehouse|密室|剧本杀|桌游|乐园|游乐|公园|旅行|旅游|露营|蹦迪|酒吧|按摩|泡澡|洗浴|看海|赏花|滑雪|头疗|采耳|搓澡|足疗|洗脚|spa|SPA|美甲|汗蒸|追剧|刷剧/,
		learn: /上课|课程|学习|学了|看书|读书|读了|听课|培训|考试|练字|背单词|网课/,
		buy: /买了|购物|下单|淘宝|京东|拼多多|超市|网购|快递|入手|剁手/,
		gift: /红包|礼物|份子|随礼|送了|礼金/,
		home: /打扫|收拾|搬家|房租|水电|物业|洗衣|家务|装修/,
		go: /打车|滴滴|地铁|公交|开车|加油|停车|高铁|火车|动车|飞机|机场|航班|出租车|网约车|共享单车|的车|坐车|赶车|车站/,
		meet: /见面|见了|聚会|拜访|碰面|聚了|约了/
	};
	function evIconKey(e) {
		if (e.ico) return e.ico;
		const t = String(e.text || "");
		if (!t.trim()) return "dot";
		const tpls = (e.groups || []).map(tplOf), p = parseEntry(e);
		const hit = (k) => {
			if (k === "film") return tpls.includes("movie") || /《[^》]+》/.test(t) && /看|二刷|三刷|补|影院|电影|剧|综艺|片/.test(t);
			if (k === "eat") return tpls.includes("food") || EV_RE.eat.test(t) || !!(p.store || p.delivery) && !(e.groups || []).length;
			if (k === "work") return tpls.includes("work") || EV_RE.work.test(t);
			if (k === "learn") return tpls.includes("book") || EV_RE.learn.test(t);
			if (k === "meet") return EV_RE.meet.test(t) || (p.withs || []).length > 0 && p.withs[0] !== "独自";
			return EV_RE[k] ? EV_RE[k].test(t) : false;
		};
		for (const k of Object.keys(eventLabels)) if (hit(k)) return k;
		return "dot";
	}
	var eventHouses = {
		film: "movie",
		eat: "food",
		med: "health",
		work: "work",
		sport: "health",
		fun: "fun",
		learn: "book",
		buy: "money",
		gift: "people",
		home: "abu",
		go: "money",
		meet: "people"
	};
	function evIcon(e) {
		const k = evIconKey(e);
		return {
			k,
			n: eventLabels[k] || "普通",
			house: eventHouses[k]
		};
	}
	function secHead(t, n, faint, onAdd) {
		const d = document.createElement("div");
		d.className = "section-label sec4" + (faint ? " faint" : "");
		d.innerHTML = "<span>" + t + "</span>" + (n ? "<span class=\"sec-n\">" + n + "</span>" : "") + (onAdd ? "<button class=\"sec-add\" aria-label=\"往这档写一条\">＋</button>" : "");
		if (onAdd) {
			d.querySelector(".sec-add").onclick = (ev) => {
				ev.stopPropagation();
				onAdd();
			};
			if (faint) d.onclick = () => onAdd();
		}
		return d;
	}
	function whenNode(e, editable) {
		if (!e.time && !(e.due && e.due !== curDayKey())) return null;
		const w = document.createElement("span");
		w.className = "e-when";
		if (e.due && e.due !== curDayKey()) {
			const d = document.createElement("span");
			d.className = "due";
			d.textContent = "→" + fmtShort(e.due);
			d.onclick = (ev) => {
				ev.stopPropagation();
				if (editable) openDueSheet(e);
				else gotoDay(e.due);
			};
			w.appendChild(d);
		}
		if (e.time) {
			const tm = document.createElement("span");
			tm.className = "tm";
			tm.textContent = e.time;
			tm.onclick = (ev) => {
				ev.stopPropagation();
				if (editable) openTimeSheet(e);
			};
			w.appendChild(tm);
		}
		return w;
	}
	function rowInfoRows(e, forTask) {
		const rows = [], p = parseEntry(e);
		const cur = navigationState.cur;
		const reminder = forTask && e.state !== "done";
		if (!forTask || [
			"person",
			"group",
			"food",
			"ledger",
			"agg"
		].includes(cur.name)) rows.push({
			i: "◷",
			t: (reminder ? e.time : journalClock(e)) || "时间未定",
			acts: [{
				lab: "修改时间",
				fn: () => {
					rowPopCloseAll();
					if (reminder) openTimeSheet(e);
					else journalTimeSheet(e);
				}
			}]
		});
		if (e.due) rows.push({
			i: "›",
			t: "预定 " + fmtKey(e.due),
			acts: [{
				lab: "修改日期",
				fn: () => {
					rowPopCloseAll();
					openDueSheet(e);
				}
			}]
		});
		if (cur.name === "group" || cur.name === "food") rows.push(...collectionDetailRows(e, tplOf(cur.g), p));
		if (cur.name === "person") {
			const person = personById(cur.pid);
			if (person) rows.push(...friendRecordRows(person, e, dayOfEntry(e)));
		}
		const hk = forTask ? null : sideHome(e);
		if (hk) {
			const acts = [{
				lab: "去看看",
				fn: () => {
					rowPopCloseAll();
					isleGo(hk);
				}
			}];
			if (!e.meal && !e.nbId) acts.push({
				lab: "放回手帐",
				g: 1,
				fn: () => {
					rowPopCloseAll();
					isleBack(e, hk);
				}
			});
			rows.push({
				house: hk,
				t: "住在" + ISLE[hk].h,
				acts
			});
		}
		if (!forTask && e.sym === "event" && !hk) rows.push({
			i: "⌂",
			t: "归入房子",
			acts: [{
				lab: "选房子",
				fn: () => {
					rowPopCloseAll();
					const sheet = healthSheet("归入房子", "<div class=\"gs-chips\"></div>");
					for (const k of [
						"food",
						"money",
						"movie",
						"book",
						"fun"
					].filter(isleOn)) {
						const button = document.createElement("button");
						button.className = "gs-chip";
						button.textContent = ISLE[k].h;
						button.onclick = () => {
							snapshot("归入房子", dayOfEntry(e));
							if (isleSend(e, k)) closeSheet();
						};
						sheet.querySelector(".gs-chips").appendChild(button);
					}
				}
			}]
		});
		const gs = e.groups || [];
		let gt = gs.length ? gs.map((g) => tplOf(g) === "food" ? "美食" : g).join("、") : "没分组";
		if (p.store) {
			const o = storeIndex()[p.store];
			gt += " · " + p.store + (o ? " 去过 " + o.cnt + " 次" : "");
		}
		rows.push({
			i: "#",
			t: gt,
			acts: [{
				lab: "换分组",
				fn: () => {
					rowPopCloseAll();
					navigationState.sheetTarget = e;
					openSheet();
				}
			}]
		});
		if (modOn("ledger") && (p.prices || []).length) {
			const k = expKindOf(e, p), sum = amtSum(p.prices);
			rows.push({
				i: "¥",
				t: (k ? expLabel(k) : "不算花销") + " " + sum,
				acts: [{
					lab: "换类",
					fn: () => {
						rowPopCloseAll();
						expSheet(e);
					}
				}]
			});
		}
		const ws = (p.withs || []).filter((w) => w !== "独自");
		if (ws.length) rows.push({
			house: "people",
			t: "和 " + ws.join("、")
		});
		if (e.srcDay) rows.push({
			i: "◂",
			t: fmtKey(e.srcDay) + " 转来",
			acts: [{
				lab: "看原条",
				fn: () => {
					rowPopCloseAll();
					jumpToEntry(e.srcDay, e.srcId);
				}
			}]
		});
		else if (e.src) rows.push({
			i: "◂",
			t: "来自：" + clipT(String(e.src), 20)
		});
		if (e.lateFrom) rows.push({
			i: "⏱",
			t: "原定 " + fmtKey(e.lateFrom) + "，那天没打开，补到了今天"
		});
		if (e.delegate && e.delegate.to) rows.push({
			i: "→",
			t: "转交给 " + e.delegate.to + (e.delegate.follow ? " · " + fmtKey(e.delegate.follow) + " 跟进" : "")
		});
		if (e.sym === "task" && (e.mig || 0) >= 2) rows.push({
			i: "›",
			t: "已经推过 " + e.mig + " 次"
		});
		if (e.badge && !e.lateFrom && !/^>×/.test(e.badge)) rows.push({
			i: "·",
			t: e.badge
		});
		if (e.nbId) {
			const nb = noteById(e.nbId);
			rows.push({
				house: "notes",
				t: "来自本子" + (nb ? "《" + (nb.title || "未命名") + "》" : "（已删除）"),
				acts: nb ? [{
					lab: "翻开",
					fn: () => {
						rowPopCloseAll();
						navigationState.cur = {
							name: "note",
							id: e.nbId
						};
						render();
					}
				}] : []
			});
		}
		if (!forTask && isThought(e) && modOn("notes") && String(e.text || "").trim()) {
			const wb = e.wrote ? noteById(e.wrote) : null;
			if (wb) rows.push({
				house: "notes",
				t: "已写成《" + (wb.title || "未命名") + "》",
				acts: [{
					lab: "翻开",
					fn: () => {
						rowPopCloseAll();
						navigationState.cur = {
							name: "note",
							id: wb.id
						};
						render();
					}
				}]
			});
			else rows.push({
				house: "notes",
				t: "展开写成一篇，放进" + ISLE.notes.h,
				acts: [{
					lab: "写成一篇",
					fn: () => {
						rowPopCloseAll();
						thWrite([{
							k: dayOfEntry(e) || editKey(),
							e
						}]);
					}
				}]
			});
		}
		if (e.personIntro && !(e.personLinks || []).length && friendParse(e.text)) rows.push({
			i: "人",
			t: "新朋友资料",
			acts: [{
				lab: "收进亲友",
				fn: () => {
					rowPopCloseAll();
					friendPreview({
						e,
						day: dayOfEntry(e),
						base: dayOfEntry(e)
					}, friendParse(e.text));
				}
			}]
		});
		if (e.schedule) rows.push({
			i: "日",
			t: "事情日期：" + planFull(e.schedule.eventDay),
			acts: [{
				lab: "修改安排",
				fn: () => planEdit(e)
			}]
		});
		if (e.note) rows.push({
			i: "✎",
			t: "备注：" + e.note
		});
		const warn = modOn("meals") && e.text ? foodWarn(e) : null;
		if (warn) rows.push({
			i: "⚠",
			t: warn.txt,
			cls: "warn",
			acts: [{
				lab: "看原话",
				fn: () => {
					rowPopCloseAll();
					const op = warn.o.op;
					jumpToEntry(op.k, op.e._id || (op.e._id = ++appState.uid));
				}
			}]
		});
		entryFixes(e, [
			"ledger",
			"food",
			"group",
			"person",
			"notes",
			"agg"
		].includes(cur.name)).forEach((f) => rows.push({
			i: "↺",
			t: "听写把「" + f.from + "」改成了「" + f.to + "」",
			acts: [{
				lab: "改回",
				fn: () => {
					rowPopCloseAll();
					voUndoFix(e, f);
				}
			}]
		}));
		if (!e.noSplit && e.text && [
			"event",
			"note",
			"ask",
			"bang"
		].includes(e.sym) && /[。\n]/.test(e.text.trim().replace(/[。\s]+$/, "")) && splitSentences(e.text).length >= 2) rows.push({
			i: "✂",
			t: "这行有 " + splitSentences(e.text).length + " 句",
			acts: [{
				lab: "拆开",
				fn: () => {
					rowPopCloseAll();
					splitEntry(e);
				}
			}, {
				lab: "不拆",
				g: 1,
				fn: () => {
					e.noSplit = 1;
					scheduleSave();
					rowPopCloseAll();
					render();
				}
			}]
		});
		rows.unshift({ kind: "to" });
		if (!forTask) {
			const loc = findEntry(e);
			if (e.sym === "event" && loc && !loc.parent && !isMinor(e) && (navigationState.cur.name === "today" || navigationState.cur.name === "history")) rows.push({
				i: "＋",
				t: "在这件事下面补一条",
				tap: () => {
					rowPopCloseAll();
					snapshot("追加子项", dayOfEntry(e));
					const ne = {
						sym: "task",
						state: "open",
						text: "",
						_id: ++appState.uid
					};
					(e.children = e.children || []).push(ne);
					e.collapsed = false;
					navigationState.focusRef = ne;
					scheduleSave();
					render();
				}
			});
		}
		return rows;
	}
	var ROW_TO = [
		["task", "待办"],
		["event", "日常"],
		["note", "随想"]
	];
	function rowRowsHTML(e, rows) {
		return rows.map((r, ri) => {
			if (r.kind === "to") return "<div class=\"rp-r\"><span class=\"i\">⇄</span><span class=\"t rp-to\">" + ROW_TO.map(([s, n]) => "<button data-to=\"" + s + "\"" + ((s === "note" ? isThought(e) : s === "event" ? e.sym === "event" || e.sym === "note" && !isThought(e) : e.sym === s) ? " class=\"on\"" : "") + ">" + n + "</button>").join("") + "</span></div>";
			return "<div class=\"rp-r" + (r.cls ? " " + r.cls : "") + (r.tap ? " tapr" : "") + "\" data-ri=\"" + ri + "\"><span class=\"i\">" + (houseMark(r.house) || vEsc(r.i || "")) + "</span><span class=\"t\">" + vEsc(r.t) + "</span>" + (r.acts || []).map((a, ai) => "<button class=\"a" + (a.g ? " g" : "") + "\" data-ri=\"" + ri + "\" data-ai=\"" + ai + "\">" + vEsc(a.lab) + "</button>").join("") + "</div>";
		}).join("");
	}
	function bindRowActs(root, e, rows) {
		root.querySelectorAll("button.a[data-ai]").forEach((b) => b.onclick = (ev) => {
			ev.stopPropagation();
			const a = rows[+b.dataset.ri].acts[+b.dataset.ai];
			if (a.fn) a.fn();
		});
		root.querySelectorAll(".rp-r.tapr").forEach((el) => el.onclick = (ev) => {
			ev.stopPropagation();
			const r = rows[+el.dataset.ri];
			if (r.tap) r.tap();
		});
		root.querySelectorAll(".rp-to [data-to]").forEach((b) => b.onclick = (ev) => {
			ev.stopPropagation();
			const to = b.dataset.to;
			if (to === "note" ? isThought(e) : to === "event" ? e.sym === "event" || e.sym === "note" && !isThought(e) : to === e.sym) return;
			snapshot("换档", dayOfEntry(e) || editKey());
			e.sym = to;
			e.userSet = true;
			delete e.defSym;
			if (to === "task") {
				if (!e.state) e.state = "open";
			} else {
				delete e.state;
				delete e.doneDay;
				delete e.finishedTime;
			}
			if (to !== "task") planToFlow(e);
			scheduleSave();
			rowPopCloseAll();
			render();
			toast("挪到「" + ROW_TO.find((x) => x[0] === to)[1] + "」了");
		});
	}
	function planToFlow(e) {
		if (!e || e.cyc || e.sym === "task") return false;
		for (const k of Object.keys(appState.PAGES)) {
			const p = appState.PAGES[k], i = p && p.plan ? p.plan.indexOf(e) : -1;
			if (i >= 0) {
				p.plan.splice(i, 1);
				(p.flow = p.flow || []).push(e);
				return true;
			}
		}
		return false;
	}
	function planTidy() {
		let n = 0;
		Object.keys(appState.PAGES).forEach((k) => {
			const p = appState.PAGES[k];
			if (!p || !p.plan) return;
			const mv = p.plan.filter((e) => e && !e.cyc && [
				"event",
				"note",
				"ask",
				"bang",
				"mood"
			].includes(e.sym));
			if (!mv.length) return;
			p.plan = p.plan.filter((e) => !mv.includes(e));
			p.flow = (p.flow || []).concat(mv);
			n += mv.length;
		});
		if (n) scheduleSave();
		return n;
	}
	function rowPopCloseAll() {
		closeRowPop();
		if ($("#qsheet") && $("#qsheet").classList.contains("on")) closeQSheet();
	}
	function closeRowPop() {
		const p = $("#rowPop");
		if (p) {
			p.remove();
			$("#qsheet").classList.remove("on");
			if (!$("#drawer.on")) $("#mask").classList.remove("on");
		}
	}
	function openRowPop(e, anchor) {
		actionsState.qsTarget = e;
		openQSheet();
	}
	function wxPillHTML() {
		const d = wxCached();
		return d ? wxIc(d.code) + " " + d.hi + "°" : "☀";
	}
	function wxPillNode() {
		const s = document.createElement("span");
		s.className = "wx-pill";
		s.id = "wxPill";
		s.innerHTML = wxPillHTML();
		s.onclick = (ev) => {
			ev.stopPropagation();
			openHello(true);
		};
		return s;
	}
	function helloMemories(day) {
		const D0 = day || TODAY, ta = D0.split(".").map(Number), out = [];
		const pickDay = (k, label) => {
			if (!appState.PAGES[k]) return false;
			const cands = [];
			appState.PAGES[k].plan.concat(appState.PAGES[k].flow).forEach((e) => {
				if (!e.text || e.sym === "task" || e.sym === "mood" || e.cyc || isMinor(e) || e.text.trim().length < 4) return;
				cands.push({
					k,
					e,
					w: (e.sym === "event" ? 2 : 1) + ((e.groups || []).length ? 2 : 0)
				});
			});
			if (!cands.length) return false;
			let v = seedRng(D0 + "|mem|" + k)() * cands.reduce((s2, x) => s2 + x.w, 0), hit = cands[cands.length - 1];
			for (const x of cands) {
				v -= x.w;
				if (v <= 0) {
					hit = x;
					break;
				}
			}
			out.push(Object.assign({ label }, hit));
			return true;
		};
		for (let y = 1; y <= 5; y++) {
			const d = new Date(ta[0] - y, ta[1] - 1, ta[2]);
			if (d.getDate() !== ta[2]) continue;
			if (pickDay(dkey(d), y === 1 ? "去年今日" : y + " 年前的今天")) break;
		}
		const m1 = new Date(ta[0], ta[1] - 2, ta[2]);
		if (m1.getDate() === ta[2]) pickDay(dkey(m1), "上个月的今天");
		return out;
	}
	// src/modules/island/houses.js
	var housesState = {};
	var ISLE = {
		work: {
			n: "工作",
			h: "大力工坊",
			img: "h_work",
			who: "大力",
			g: "工作",
			tip: "项目进度与工作记录"
		},
		study: {
			n: "学习",
			h: "海风学堂",
			img: "h_study",
			who: "翘翘",
			g: "学习",
			tip: "课程、作业与学习记录"
		},
		food: {
			n: "美食",
			h: "海边饭馆",
			img: "h_food",
			who: "阿饱",
			g: "美食",
			tip: "吃了什么、店好不好、三餐"
		},
		movie: {
			n: "电影",
			h: "小岛影院",
			img: "h_movie",
			who: "阿影",
			g: "电影",
			tip: "看过的电影和剧，打分、片单"
		},
		book: {
			n: "阅读",
			h: "小岛书屋",
			img: "h_book",
			who: "酥酥",
			g: "阅读",
			tip: "读过的书，打分、书单"
		},
		fun: {
			n: "娱乐",
			h: "温泉汤屋",
			img: "h_fun",
			who: "小卡",
			g: "娱乐",
			tip: "玩的、放松的：KTV、按摩、看展"
		},
		money: {
			n: "记账",
			h: "铜板账房",
			img: "h_money",
			who: "小铜板",
			tip: "花了多少、花在哪"
		},
		people: {
			n: "亲友",
			h: "小岛茶屋",
			img: "h_people",
			who: "团团",
			tip: "提到的人、生日和纪念日"
		},
		notes: {
			n: "笔记",
			h: "记事小亭",
			img: "h_notes",
			who: "阿鼠",
			tip: "长一点的文字，慢慢写"
		},
		vault: {
			n: "密码",
			h: "秘屋树洞",
			img: "h_vault",
			who: "松松",
			tip: "账号密码，加密只存在这台手机"
		},
		health: {
			n: "健康",
			h: "晨露小站",
			img: "h_health",
			who: "呦呦",
			tip: "体重、围度、经期与饮水"
		}
	};
	ISLE.abu = {
		n: "自我",
		h: "岛主小筑",
		img: "h_abu",
		who: "阿卜",
		tip: "出生手记与性格测试"
	};
	var DRAWER_ORDER = [
		"food",
		"money",
		"vault",
		"movie",
		"book",
		"people",
		"notes",
		"health",
		"abu",
		"work",
		"study",
		"fun"
	];
	var ISLE_ORDER = [
		"food",
		"movie",
		"book",
		"fun",
		"money",
		"people",
		"notes",
		"vault",
		"health",
		"abu",
		"work",
		"study"
	];
	var HOUSE_SECTIONS = [
		["效率与推进", ["work", "study"]],
		["个人与生活底座", [
			"abu",
			"people",
			"health",
			"money",
			"vault"
		]],
		["兴趣与收藏", [
			"food",
			"movie",
			"book",
			"notes"
		]],
		["休闲互动 · 筹备中", ["fun"]]
	];
	var ISLE_MOD = {
		food: "meals",
		money: "ledger",
		people: "people",
		notes: "notes",
		vault: "vault"
	};
	var ISLE_TPL = {
		food: 1,
		movie: 1,
		book: 1,
		fun: 1,
		money: 1
	};
	var TPL_PLAIN = {
		work: 1,
		fun: 1,
		study: 1
	};
	housesState.ISLE_DEF = null;
	var ISLE_LAST = null;
	function tplGroupName(t) {
		let g = (appState.extraGroups || []).find((x) => tplOf(x) === t) || null;
		if (!g) walk((d, e) => {
			(e.groups || []).forEach((x) => {
				if (!g && tplOf(x) === t) g = x;
			});
		});
		return g;
	}
	function isleOn(k) {
		if (ISLE_MOD[k]) return modOn(ISLE_MOD[k]);
		const o = SET.isle && SET.isle.on;
		if (o && o[k] !== void 0) return !!o[k];
		if (k === "work" || k === "study") return !!tplGroupName(k);
		if (k === "health" || k === "abu") return true;
		if (!housesState.ISLE_DEF) {
			housesState.ISLE_DEF = {};
			[
				"movie",
				"book",
				"fun"
			].forEach((t) => housesState.ISLE_DEF[t] = !!tplGroupName(t));
		}
		return !!housesState.ISLE_DEF[k];
	}
	function islePins() {
		if (SET.isle && SET.isle.pin) return SET.isle.pin.filter((k) => ISLE[k]);
		const m = {
			food: "food",
			ledger: "money",
			people: "people",
			notes: "notes",
			vault: "vault"
		};
		return (SET.dtiles || [
			"cal",
			"someday",
			"food",
			"ledger"
		]).map((x) => m[x]).filter(Boolean).slice(0, 4);
	}
	function houseGroup(k, create) {
		if (k === "food") {
			let fg = foodGroupName();
			if (!fg && create) {
				fg = "美食";
				if (!appState.extraGroups.includes(fg)) appState.extraGroups.push(fg);
			}
			return fg;
		}
		if (!ISLE[k] || !ISLE[k].g) return null;
		let g = tplGroupName(k);
		if (!g && create) {
			g = ISLE[k].g;
			if (!appState.extraGroups.includes(g)) appState.extraGroups.push(g);
			if (tplOf(g) !== k) SET.gtpl[g] = k;
			housesState.ISLE_DEF = null;
		}
		return g;
	}
	function sideHome(e) {
		if (!e || e.sym === "task") return null;
		let k = null;
		if (e.healthId) k = "health";
		else if (e.meal) k = "food";
		else if (e.ledger) k = "money";
		else if (e.nbId) k = "notes";
		else for (const g of e.groups || []) {
			const t = tplOf(g);
			if (ISLE_TPL[t]) {
				k = t;
				break;
			}
		}
		return k && isleOn(k) ? k : null;
	}
	function onsenSVG(sz) {
		return "<svg width=\"" + sz + "\" height=\"" + sz + "\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 3.5c-1.2 1.3 1.2 2.4 0 3.8M12 2.5c-1.2 1.3 1.2 2.4 0 3.8M16 3.5c-1.2 1.3 1.2 2.4 0 3.8\"/><path d=\"M3.5 11.5h17c0 4.6-3.8 8.5-8.5 8.5s-8.5-3.9-8.5-8.5z\"/></svg>";
	}
	function isleIcon(k, px, cls) {
		const I = ISLE[k];
		if (I && I.img && JJ[I.img]) return "<img" + (cls ? " class=\"" + cls + "\"" : "") + " src=\"" + JJ[I.img] + "\" alt=\"\" style=\"width:" + px + "px;height:" + px + "px;object-fit:contain;flex:none\">";
		return "<span class=\"ihx\" style=\"width:" + px + "px;height:" + px + "px\">" + onsenSVG(Math.round(px * .66)) + "</span>";
	}
	function isleCur(k) {
		if (k === "food") navigationState.cur = { name: "food" };
		else if (k === "money") navigationState.cur = { name: "ledger" };
		else if (k === "people") navigationState.cur = { name: "people" };
		else if (k === "notes") navigationState.cur = { name: "notes" };
		else if (k === "vault") navigationState.cur = { name: "vault" };
		else if (k === "health" || k === "abu") navigationState.cur = { name: k };
		else navigationState.cur = {
			name: "group",
			g: houseGroup(k, false) || ISLE[k].g
		};
	}
	function isleGo(k) {
		isleCur(k);
		render();
	}
	function isleSet(k, on) {
		if (ISLE_MOD[k]) {
			SET.mods[ISLE_MOD[k]] = on;
			if (k === "food") {
				if (!on) SET.mealsUserOff = 1;
				else {
					delete SET.mealsUserOff;
					if (!foodGroupName() && !appState.extraGroups.includes("美食")) appState.extraGroups.push("美食");
					try {
						mealAutoTagAll();
					} catch (_) {}
				}
			}
		} else {
			SET.isle = SET.isle || {};
			SET.isle.on = SET.isle.on || {};
			SET.isle.on[k] = on;
			if (on) houseGroup(k, true);
		}
		if (!on) {
			SET.isle = SET.isle || {};
			SET.isle.pin = islePins().filter((x) => x !== k);
		}
		if (k === "abu" && on) abuWelcome();
		housesState.ISLE_DEF = null;
		scheduleSave();
		toast(on ? "「" + ISLE[k].n + "」开了 · 在侧栏的小岛里" : "「" + ISLE[k].n + "」关了 · " + (k === "health" ? "健康记录保留，重新打开即可查看" : "记过的都还在，回到手帐里"));
	}
	function islePin(k) {
		const pins = islePins().slice(), i = pins.indexOf(k);
		if (i >= 0) pins.splice(i, 1);
		else {
			if (pins.length >= 4) {
				toast("最多置顶 4 栋 · 先取消一栋");
				return false;
			}
			pins.push(k);
		}
		SET.isle = SET.isle || {};
		SET.isle.pin = pins;
		scheduleSave();
		return true;
	}
	var ISLE_VID = /抖音|视频|B站|b站|小红书|直播|快手/;
	function isleGuess(e) {
		const t = String(e.text || "").trim();
		if (t.length < 2) return null;
		const pr = parseEntry(e);
		const ttl = pr.title ? canonTitle(pr.title) : null;
		const titled = /《[^》]+》/.test(t) && !(ttl && (SET.isleNoT || {})[ttl]) && !ISLE_VID.test(t);
		const outside = t.replace(/《[^》]*》/g, "");
		const bookish = /读|书|小说|翻完/.test(outside);
		const sig = {
			movie: isleOn("movie") && titled && !bookish && /看|二刷|三刷|补|影院|电影|剧|综艺|片/.test(outside),
			book: isleOn("book") && titled && bookish,
			fun: isleOn("fun") && EV_RE.fun.test(t),
			food: isleOn("food") && EV_RE.eat.test(t)
		};
		const prices = (pr.prices || []).length > 0;
		const two = {
			movie: pr.score != null,
			book: pr.score != null,
			fun: !!(pr.verdict || prices || (pr.withs || []).length && pr.withs[0] !== "独自"),
			food: !!(pr.store || pr.verdict || prices)
		};
		const cand = [
			"movie",
			"book",
			"fun",
			"food"
		].filter((k) => sig[k]);
		if (!cand.length) return isleOn("money") && prices && t.length <= 20 ? {
			k: "money",
			sure: false
		} : null;
		if (cand.length === 1 && two[cand[0]]) return {
			k: cand[0],
			sure: true
		};
		return {
			k: cand[0],
			alt: cand[1] || null,
			sure: false
		};
	}
	function isleSend(e, k) {
		if (k === "money") e.ledger = 1;
		else {
			const g = houseGroup(k, true);
			if (!g) return false;
			e.groups = e.groups || [];
			if (!e.groups.includes(g)) e.groups.push(g);
		}
		delete e.isleAsk;
		ISLE_LAST = {
			id: e._id,
			k,
			at: Date.now()
		};
		scheduleSave();
		return true;
	}
	function isleUndo(e) {
		const k = ISLE_LAST && ISLE_LAST.k;
		ISLE_LAST = null;
		if (k === "money") delete e.ledger;
		else if (k) {
			const g = houseGroup(k, false);
			if (g && e.groups) e.groups = e.groups.filter((x) => x !== g);
		}
		e.isleNo = 1;
		scheduleSave();
		render();
	}
	function isleRoute(e) {
		if (!e || !String(e.text || "").trim() || e.sym === "task" || e.sym === "mood" || e.userSet || e.isleNo || e.isleAsk) return false;
		if (sideHome(e)) return false;
		const loc = findEntry(e);
		if (!loc || loc.parent) return false;
		const gs = isleGuess(e);
		if (!gs) return false;
		if (gs.sure) return isleSend(e, gs.k);
		e.isleAsk = gs.k + (gs.alt ? "," + gs.alt : "");
		scheduleSave();
		return true;
	}
	function isleBack(e, k) {
		if (k === "health" && e.healthId) {
			appState.HEALTH.records.weight = appState.HEALTH.records.weight.filter((r) => r.id !== e.healthId);
			delete e.healthId;
		}
		if (k === "money") delete e.ledger;
		else e.groups = (e.groups || []).filter((g) => !ISLE_TPL[tplOf(g)]);
		e.isleNo = 1;
		delete e.isleAsk;
		scheduleSave();
		render();
	}
	function isleNoThanks(e) {
		const pr = parseEntry(e);
		if (pr.title && /movie|book/.test(e.isleAsk || "")) {
			SET.isleNoT = SET.isleNoT || {};
			SET.isleNoT[canonTitle(pr.title)] = 1;
		}
		delete e.isleAsk;
		e.isleNo = 1;
		scheduleSave();
		render();
	}
	function isleAskNode(e) {
		const ks = String(e.isleAsk || "").split(",").filter((k) => ISLE[k] && isleOn(k));
		if (!ks.length) return null;
		const d = document.createElement("div");
		d.className = "isle-ask";
		d.dataset.eid = e._id;
		d.innerHTML = "<span>像是" + ISLE[ks[0]].n + "</span>" + ks.map((k, i) => "<button class=\"" + (i ? "" : "go") + "\" data-k=\"" + k + "\">送去" + ISLE[k].n + "</button>").join("") + "<button data-no=\"1\">不用</button>";
		d.querySelectorAll("button").forEach((b) => b.onclick = (ev) => {
			ev.stopPropagation();
			if (b.dataset.no) isleNoThanks(e);
			else {
				isleSend(e, b.dataset.k);
				render();
			}
		});
		return d;
	}
	// src/modules/collections/index.js
	var CHAIN_OPEN = /* @__PURE__ */ new Set();
	function appendChainFold(w, r, byId) {
		const hops = [];
		let cur2 = r.e;
		const seen2 = /* @__PURE__ */ new Set();
		while (cur2 && cur2.srcId && byId[cur2.srcId] && !seen2.has(cur2.srcId)) {
			seen2.add(cur2.srcId);
			const prev = byId[cur2.srcId];
			hops.push(prev);
			cur2 = prev.e;
		}
		if (!hops.length) return;
		const body = w.querySelector(".entry-body");
		if (!body) return;
		const hopInfo = (h) => {
			const bits = [];
			if (h.e.progress) bits.push("已完成" + h.e.progress + "%");
			if (h.e.note) bits.push(h.e.note);
			if (!bits.length && h.e.badge) {
				const m2 = String(h.e.badge).replace(/^→[\d.]+\s*·?\s*/, "").replace(/^已完成0%\s*·?\s*/, "").trim();
				if (m2) bits.push(m2);
			}
			return bits.join("——");
		};
		const notable = hops.map((h) => ({
			d: h.d,
			info: hopInfo(h)
		})).filter((x) => x.info).reverse();
		const first = hops[hops.length - 1], open = CHAIN_OPEN.has(r.e._id);
		const fold = document.createElement("div");
		fold.className = "chainfold";
		fold.textContent = (open ? "▾" : "▸") + " 一路 " + (hops.length + 1) + " 次 · 从 " + fmtShort(first.d) + " 跟到 " + fmtShort(r.d) + (notable.length ? " · " + notable.length + " 条进度" : "");
		fold.onclick = (ev) => {
			ev.stopPropagation();
			if (open) CHAIN_OPEN.delete(r.e._id);
			else CHAIN_OPEN.add(r.e._id);
			render();
		};
		body.appendChild(fold);
		if (open) {
			const line = document.createElement("div");
			line.className = "chainline";
			line.innerHTML = notable.length ? notable.map((x) => "<div>" + fmtShort(x.d) + " · " + x.info + "</div>").join("") : "<div>中间没记进度，一路顺延到了这天</div>";
			body.appendChild(line);
		}
	}
	function collectionDetailRows(e, tpl, p) {
		const rows = [];
		const detail = (t, lab, fn) => rows.push({
			t,
			acts: fn ? [{
				lab,
				fn: () => {
					rowPopCloseAll();
					fn();
				}
			}] : []
		});
		if (tpl === "movie" || tpl === "book") {
			if (p.score != null) detail("★ " + p.score + "分");
			else if (p.title && !tplRows(navigationState.cur.g, null).some((r) => r.p.score != null && canonTitle(r.p.title) === canonTitle(p.title))) detail("还没有评分", "补评分", () => openScoreSheet(e));
			for (const name of p.withs || []) if (name !== "独自") detail("和" + name, "看亲友", () => personOpenByName(name));
		}
		if (tpl === "food") {
			if (p.store) detail((e.foodMode || (p.delivery ? "外卖" : "就餐方式未记")) + " · " + (foodPriceLabel(e) || "人均未记"), "修改餐票", () => foodPriceSheet(e));
			if (p.score != null) detail("★ " + p.score + "分");
			if (p.city) detail(p.city);
			if (p.want) detail("想吃");
			else if (p.verdict) detail(p.verdict);
			else if (foodTier(p) && foodTier(p) !== "jia") detail(TIER_NM[foodTier(p)]);
		} else if (p.verdict) detail(p.verdict);
		if (tpl && tpl !== "food" && !TPL_PLAIN[tpl] && !p.prices?.length) detail("未记金额", "补一笔", () => openAmtSheet(e));
		return rows;
	}
	function openScoreSheet(e) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">给「" + (parseLine(e.text).title || (e.text || "").slice(0, 12)) + "」打个分</div><div class=\"gs-chips\" id=\"scChips\"></div>";
		const box = $("#scChips");
		[
			10,
			9,
			8,
			7,
			6,
			5,
			4,
			3
		].forEach((v) => {
			const b = document.createElement("button");
			b.className = "gs-chip";
			b.textContent = v + "分";
			b.onclick = () => {
				snapshot("补评分");
				e.text = (e.text || "").trim() + " " + v + "分";
				scheduleSave();
				closeSheet();
				render();
				toast("已补上 " + v + " 分");
			};
			box.appendChild(b);
		});
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	var RNG_CYCLE = [
		"year",
		"month",
		"lastyear",
		"all"
	];
	function rngLabel(sel) {
		const ta = TODAY.split(".").map(Number);
		return sel === "year" ? String(ta[0]) : sel === "month" ? ta[1] + "月" : sel === "lastyear" ? String(ta[0] - 1) : "全部";
	}
	function renderTplPanel(g, tpl) {
		if (!navigationState.cur.rngSel) navigationState.cur.rngSel = "year";
		const rows = tplRows(g, rngOf(navigationState.cur.rngSel));
		const st = tplStats(tpl, rows);
		const rlab = rngLabel(navigationState.cur.rngSel);
		const pan = document.createElement("div");
		pan.className = "tp-pan";
		pan.innerHTML = "<div class=\"tt\" style=\"display:flex;align-items:center;gap:8px\"><span>自动盘点 · " + rlab + "</span><span style=\"margin-left:auto;color:var(--ink-faint);letter-spacing:0\">" + rows.length + " 条记录</span><span class=\"hw-link\">怎么写?</span></div><div class=\"tp-nums\">" + st.tiles.map((t, i) => "<div class=\"n\" data-ti=\"" + i + "\"" + (t[3] && t[3].length ? " style=\"cursor:pointer\"" : "") + "><b>" + t[0] + (t[1] ? "<i>" + t[1] + "</i>" : "") + "</b><span>" + t[2] + (t[3] && t[3].length ? " ›" : "") + "</span></div>").join("") + "</div>";
		view.appendChild(pan);
		const hwl = pan.querySelector(".hw-link");
		if (hwl) hwl.onclick = () => openHowSheet(tpl);
		pan.querySelectorAll(".n[data-ti]").forEach((el) => {
			el.onclick = () => {
				const t = st.tiles[+el.dataset.ti];
				if (t[3] && t[3].length) openTileSheet(t[2] + " · " + rlab, t[3]);
			};
		});
		if (st.noteLink) {
			const nl = document.createElement("div");
			nl.className = "tp-more";
			nl.textContent = st.noteLink.txt + " ›";
			nl.onclick = () => openTileSheet("还没表态 · " + rlab, st.noteLink.items);
			pan.appendChild(nl);
		}
		if (st.ranks.length) {
			const rk = document.createElement("div");
			rk.className = "tp-pan";
			rk.innerHTML = "<div class=\"tt\">" + st.ranksTitle + "</div>";
			st.ranks.forEach((x) => {
				const row = document.createElement("div");
				row.className = "tp-rk";
				row.innerHTML = "<span class=\"no " + x.cls + "\">" + x.no + "</span><span class=\"nm\">" + x.nm + (x.sub ? "<small>" + x.sub + "</small>" : "") + "</span><span class=\"sc " + x.scCls + "\">" + x.sc + "</span>";
				row.querySelector(".nm").onclick = () => jumpToEntry(x.d, x.id);
				rk.appendChild(row);
			});
			view.appendChild(rk);
		}
		if (st.ranksB && st.ranksB.length) {
			const rk2 = document.createElement("div");
			rk2.className = "tp-pan";
			rk2.innerHTML = "<div class=\"tt\">" + st.ranksBTitle + "</div>";
			st.ranksB.forEach((x) => {
				const row = document.createElement("div");
				row.className = "tp-rk";
				row.innerHTML = "<span class=\"no " + x.cls + "\">" + x.no + "</span><span class=\"nm\">" + x.nm + (x.sub ? "<small>" + x.sub + "</small>" : "") + "</span><span class=\"sc " + x.scCls + "\">" + x.sc + "</span>";
				row.querySelector(".nm").onclick = () => jumpToEntry(x.d, x.id);
				rk2.appendChild(row);
			});
			view.appendChild(rk2);
		}
		if (st.bars.length) {
			const bp = document.createElement("div");
			bp.className = "tp-pan";
			const mx = st.bars[0][1];
			bp.innerHTML = "<div class=\"tt\">我的美食地图 · 点城市看清单</div>" + st.bars.map(([c, v]) => "<div class=\"tp-bar\" data-city=\"" + c + "\" style=\"cursor:pointer\"><span class=\"c\">" + c + "</span><div class=\"tr\"><i style=\"width:" + Math.round(v / mx * 100) + "%\"></i></div><span class=\"v\">" + v + " ›</span></div>").join("");
			view.appendChild(bp);
			bp.querySelectorAll("[data-city]").forEach((el) => {
				el.onclick = () => {
					const c = el.dataset.city;
					const list = st.cityMap && st.cityMap[c] || [];
					if (list.length) openTileSheet(c + " · " + list.length + " 家", list);
				};
			});
		}
		if (st.merges) {
			const [a, b] = st.merges;
			const mg = document.createElement("div");
			mg.className = "tp-merge";
			mg.innerHTML = "<b>《" + a + "》</b>和<b>《" + b + "》</b>是同一部吗？<button class=\"gm-btn\" id=\"mgYes\">是，合并</button><button class=\"gm-btn\" id=\"mgNo\">不是</button>";
			view.appendChild(mg);
			mg.querySelector("#mgYes").onclick = () => {
				SET.alias[a] = b;
				scheduleSave();
				render();
				toast("已合并，统计按《" + b + "》算");
			};
			mg.querySelector("#mgNo").onclick = () => {
				SET.aliasNo[a + "|" + b] = 1;
				scheduleSave();
				render();
			};
		}
	}
	function openTileSheet(title, items) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">" + title + "</div><div id=\"tsList\" style=\"max-height:52vh;overflow-y:auto\"></div>";
		const box = $("#tsList");
		items.forEach((x, i) => {
			const row = document.createElement("div");
			row.className = "tp-rk";
			row.innerHTML = "<span class=\"no " + (x.cls || "") + "\">" + (x.no || i + 1) + "</span><span class=\"nm\">" + x.nm + (x.sub ? "<small>" + x.sub + "</small>" : "") + "</span><span class=\"sc " + (x.scCls || "") + "\">" + (x.sc || "") + "</span>";
			if (x.id && appState.PAGES[x.d]) bindRecordHold(row, () => {
				let entry;
				walkPage(x.d, (e) => {
					if (e._id === x.id) entry = e;
				});
				if (entry) {
					closeSheet();
					openRowPop(entry);
				}
			});
			if (x.d) row.querySelector(".nm").onclick = () => {
				closeSheet();
				jumpToEntry(x.d, x.id);
			};
			box.appendChild(row);
		});
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function openHowSheet(tpl) {
		const S = $("#gsheet");
		const row = (t, ex, note) => "<div class=\"hw-row\"><b>" + t + "</b><code>" + ex + "</code>" + (note ? "<span>" + note + "</span>" : "") + "</div>";
		const per = {
			food: row("美食", "在「烤匠」吃了麻辣烤鱼（鱼皮酥脆），8.5分，会再来", "人均参考在「记美食」里填；实际支出到铜板账房记录。「」里是店名 · 括号里评价菜，不算店的整体表态 · 整体表态放句末"),
			movie: row("电影", "《沙丘2》9分，和赵赵二刷", "《》里是片名 · X分=评分 · 和X=同行人"),
			book: row("读书", "《毫无意义的工作》读完，8分", "《》里是书名 · X分=评分"),
			money: row("花销", "打车 23元，咖啡 ¥18", "写 元 / ¥ 就自动记账"),
			work: row("工作", "完成周报初稿，明天给老板", "写「明天 / 8.25」自动挂日期"),
			fun: row("娱乐", "和朋友去唱K，人均¥80，开心", "和X=同行人 · 写 元 就自动记账")
		};
		S.innerHTML = "<div class=\"gs-title\">怎么写，啾啾才看得懂</div>" + [tpl].concat(Object.keys(per).filter((k) => k !== tpl)).filter((k) => k && per[k]).map((k) => per[k]).join("") + "<div class=\"hw-tier\"><b>美食分四种</b>　宝藏＝8分以上，或写「宝藏 / 会再来 / 回购 / 必吃」；避雷＝6分以下，或写「避雷 / 难吃 / 非必要不去」；其余都算吃过（去过的都在「去过」里）；还没去的写「想去吃「店名」」「种草了「店名」」，是想吃。吃什么从宝藏和想吃里抽。</div><div class=\"hw-tip\">都是普通中文，不用死记——写 #分组名 归进集子，「明天下午三点」自动挂时间。</div>";
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	var TPL_NOUN = {
		movie: "观影",
		food: "美食",
		book: "阅读",
		money: "花销"
	};
	function statsPayload(g, tpl, st, sel) {
		const ta = TODAY.split(".").map(Number);
		const noun = TPL_NOUN[tpl] || TPLS[tpl].n;
		return {
			type: "stats",
			head: "啾啾岛 · 盘点",
			cardTitle: sel === "year" ? ta[0] + " 我的" + noun + "年报" : sel === "lastyear" ? ta[0] - 1 + " 我的" + noun + "年报" : sel === "month" ? ta[1] + "月 " + noun + "小结" : "我的" + noun + "全记录",
			tiles: st.tiles.slice(0, 3),
			list: tpl === "food" ? st.ranks.slice(0, 3).concat((st.ranksB || []).slice(0, 2).map((x) => Object.assign({}, x, { no: "↓" }))) : st.ranks.slice(0, 5),
			bars: tpl === "food" ? (st.bars || []).slice(0, 4) : null,
			quote: st.quote
		};
	}
	function openFoodMap(g) {
		const st = tplStats("food", tplRows(g, rngOf(navigationState.cur.rngSel)));
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">我的美食地图 · " + rngLabel(navigationState.cur.rngSel) + "</div><div id=\"fmList\" style=\"max-height:56vh;overflow-y:auto\"></div>";
		const box = $("#fmList");
		if (!st.bars.length) {
			const d = document.createElement("div");
			d.className = "empty-hint";
			d.textContent = "还没识别到城市 · 写「上海\"店名\"」这样啾啾就能归到城市里";
			box.appendChild(d);
		}
		st.bars.forEach(([c, v]) => {
			const h = document.createElement("div");
			h.style.cssText = "font-size:12px;color:var(--ink-faint);letter-spacing:2px;font-weight:600;margin:12px 0 2px";
			h.textContent = c + " · " + v + " 家";
			box.appendChild(h);
			(st.cityMap && st.cityMap[c] || []).forEach((x) => {
				const row = document.createElement("div");
				row.className = "tp-rk";
				row.innerHTML = "<span class=\"nm\">" + x.nm + (x.sub ? "<small>" + x.sub + "</small>" : "") + "</span><span class=\"sc " + (x.scCls || "") + "\">" + (x.sc || "") + "</span>";
				if (x.id && appState.PAGES[x.d]) bindRecordHold(row, () => {
					let entry;
					walkPage(x.d, (e) => {
						if (e._id === x.id) entry = e;
					});
					if (entry) {
						closeSheet();
						openRowPop(entry);
					}
				});
				if (x.d) row.querySelector(".nm").onclick = () => {
					closeSheet();
					jumpToEntry(x.d, x.id);
				};
				box.appendChild(row);
			});
		});
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	var rcTimer = null;
	function updateRecall(e, inp) {
		clearTimeout(rcTimer);
		rcTimer = setTimeout(() => {
			const RC = $("#recall");
			if (!inp.isConnected || document.activeElement !== inp) {
				RC.classList.remove("on");
				return;
			}
			if ($("#tagSug").classList.contains("on")) {
				RC.classList.remove("on");
				return;
			}
			const p = parseLine(e.text || "");
			const storeKey = p.store && storeSet().has(p.store) ? p.store : null;
			const key = storeKey || p.title;
			if (!key || key.length < 2) {
				if ((e.groups && e.groups.length ? e.groups : ((e.text || "").match(/#([^\s#]{1,12})/g) || []).map((x) => x.slice(1))).some((g2) => tplOf(g2) === "food") && (e.text || "").length >= 10 && !p.store && !foodTier(p)) {
					RC.innerHTML = "<span class=\"rc-ico\">✍️</span><span class=\"rc-tx\">店名加「」、句末给个分数或表态，啾啾就能帮你记榜</span><span class=\"rc-go\">看写法 ›</span>";
					RC.onclick = () => {
						RC.classList.remove("on");
						dismissKB();
						openHowSheet("food");
					};
					RC.classList.add("on");
					placeToolbar();
					return;
				}
				RC.classList.remove("on");
				return;
			}
			const isStore = !!storeKey;
			const hits = [];
			walk((d, x) => {
				if (x._id === e._id || !x.text) return;
				const xp = parseEntry(x);
				if (isStore ? xp.store === key || x.text.includes(key) : xp.title && canonTitle(xp.title) === canonTitle(key)) hits.push({
					d,
					x,
					xp
				});
			});
			if (!hits.length) {
				RC.classList.remove("on");
				return;
			}
			hits.sort((a, b) => parseKey(b.d) - parseKey(a.d));
			const h = hits[0];
			let info = isStore ? key + " · 来过 " + hits.length + " 次 · 上次" + (h.xp.verdict ? "你说：" + h.xp.verdict : "") + "（" + fmtShort(h.d) + "）" : "《" + key + "》你 " + fmtShort(h.d) + " 看过" + (h.xp.score != null ? "，打了 " + h.xp.score + " 分" : "");
			RC.innerHTML = "<span class=\"rc-ico\">" + houseMark(isStore ? "food" : "movie") + "</span><span class=\"rc-tx\">啾啾记得：" + info + "</span><span class=\"rc-go\">看看 ›</span>";
			RC.onclick = () => {
				RC.classList.remove("on");
				dismissKB();
				jumpToEntry(h.d, h.x._id);
			};
			RC.classList.add("on");
			placeToolbar();
		}, 380);
	}
	// src/modules/people/moments.js
	function markDateLabel(k) {
		return k.d ? k.y + "." + k.m + "." + k.d : k.m ? k.y + "年" + k.m + "月" : k.y + "年";
	}
	function markElapsed(k) {
		const ta = TODAY.split(".").map(Number);
		if (k.d) {
			const days = Math.round((parseKey(TODAY) - parseKey(k.y + "." + k.m + "." + k.d)) / 864e5);
			if (days < 0) return "还有 " + -days + " 天";
			let yrs = ta[0] - k.y;
			if (ta[1] < k.m || ta[1] === k.m && ta[2] < k.d) yrs--;
			return "已 " + days + " 天 · 第 " + (yrs + 1) + " 年";
		}
		if (k.m) {
			const months = (ta[0] - k.y) * 12 + (ta[1] - k.m);
			if (months < 0) return "";
			if (months < 1) return "就在这个月";
			const y2 = Math.floor(months / 12), m2 = months % 12;
			return "至今 " + (y2 ? y2 + " 年" : "") + (m2 ? (y2 ? " " : "") + m2 + " 个月" : "");
		}
		const n2 = ta[0] - k.y + 1;
		return n2 > 1 ? "第 " + n2 + " 个年头" : n2 === 1 ? "就是今年" : "";
	}
	function markNextRound(k) {
		if (!k.d) return null;
		const base = parseKey(k.y + "." + k.m + "." + k.d);
		const days = Math.round((parseKey(TODAY) - base) / 864e5);
		if (days < 30) return null;
		const nxt = (Math.floor(days / 100) + 1) * 100;
		const d2 = parseKey(k.y + "." + k.m + "." + k.d);
		d2.setDate(d2.getDate() + nxt);
		return {
			n: nxt,
			left: nxt - days,
			k: dkey(d2)
		};
	}
	function marksPan(holder, isMe, pname) {
		const pan = document.createElement("div");
		pan.className = "tp-pan";
		pan.innerHTML = "<div class=\"tt\" style=\"display:flex;align-items:center\">" + (isMe ? "人生时间点" : "特别的日子") + "<button class=\"gm-btn\" id=\"mkAdd\" style=\"margin-left:auto\">＋ 添加</button></div>";
		const marks = (holder.marks || []).map(friendResolveMark).filter(Boolean);
		if (!isMe) {
			const linked = new Set(marks.map((k) => k.sourceId));
			for (const id of holder.pins || []) {
				if (linked.has(id)) continue;
				const mark = friendResolveMark({ sourceId: id });
				if (mark) {
					marks.push(mark);
					linked.add(id);
				}
			}
			for (const moment of holder.moments || []) {
				const [y, m, d] = String(moment.d).split(".").map(Number);
				marks.push({
					label: moment.t,
					y,
					m,
					d,
					moment
				});
			}
		}
		if (!marks.length) {
			const d3 = document.createElement("div");
			d3.className = "vt-note";
			d3.textContent = isMe ? "记下人生的坐标：入职、搬家、第一次收到鲜花… 记不清就只填年份" : "记下你们的坐标：认识、第一次见面、在一起… 记不清就只填年份";
			pan.appendChild(d3);
		}
		marks.slice().sort((a2, b2) => b2.y * 1e4 + (b2.m || 0) * 100 + (b2.d || 0) - (a2.y * 1e4 + (a2.m || 0) * 100 + (a2.d || 0))).forEach((k) => {
			const row = document.createElement("div");
			row.className = "tp-rk mk";
			const el = markElapsed(k), nr = markNextRound(k);
			row.innerHTML = "<span class=\"no\" style=\"color:var(--accent)\">★</span><span class=\"nm\">" + vEsc(k.label) + "<small>" + markDateLabel(k) + (el ? " · " + el : "") + (nr ? " · 距 " + nr.n + " 天还有 " + nr.left + " 天（" + fmtShort(nr.k) + "）" : "") + "</small></span>" + (k.d || !isMe ? "<span class=\"sc bao\" data-a=\"cy\" style=\"cursor:pointer\">设提醒</span>" : "") + "<span class=\"sc\" data-a=\"x\" style=\"cursor:pointer;color:var(--ink-faint)\">✕</span>";
			const cyB = row.querySelector("[data-a=\"cy\"]");
			if (cyB) cyB.onclick = () => {
				navigationState.cur = {
					name: "cycles",
					tab: "reminderForm",
					key: "preset"
				};
				remindersState.cycUiOpen = true;
				remindersState.cycEdit = null;
				remindersState.cycTag = "anniv";
				remindersState.cycCal = "solar";
				remindersState.cycDraft = {
					kind: "year",
					tag: "anniv",
					name: (isMe ? "" : pname + "·") + k.label,
					m: k.m,
					d: k.d,
					y0: k.y
				};
				render();
				window.scrollTo(0, 0);
			};
			row.querySelector("[data-a=\"x\"]").onclick = () => {
				if (k.moment) holder.moments = holder.moments.filter((m) => m !== k.moment);
				if (k.sourceId && holder.pins) holder.pins = holder.pins.filter((id) => id !== k.sourceId);
				holder.marks = (holder.marks || []).filter((x) => k.sourceId ? x.sourceId !== k.sourceId : x !== k);
				scheduleSave();
				render();
			};
			const nm1 = row.querySelector(".nm");
			nm1.style.cursor = "pointer";
			nm1.onclick = () => k.sourceId ? jumpToEntry(k.y + "." + k.m + "." + k.d, k.sourceId) : openMarkAdd(holder, k);
			pan.appendChild(row);
		});
		pan.querySelector("#mkAdd").onclick = () => openMarkAdd(holder);
		return pan;
	}
	function openMarkAdd(holder, k0) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">" + (k0 ? "修改时间点" : "添加时间点") + "</div><input class=\"vt-in\" id=\"mkLabel\" placeholder=\"哪件事（如：认识 / 在一起 / 入职 / 第一次收到鲜花）\" value=\"" + escAttr(k0 ? k0.label : "") + "\"><div style=\"display:flex;gap:8px\"><input class=\"vt-in\" id=\"mkY\" type=\"number\" min=\"1900\" max=\"2100\" placeholder=\"哪年\" style=\"flex:1.2\"><input class=\"vt-in\" id=\"mkM\" type=\"number\" min=\"1\" max=\"12\" placeholder=\"几月（可不填）\" style=\"flex:1\"><input class=\"vt-in\" id=\"mkD\" type=\"number\" min=\"1\" max=\"31\" placeholder=\"几日（可不填）\" style=\"flex:1\"></div><div class=\"hw-tip\" style=\"padding:6px 2px 0\">记不清就只填年份或年月——有多精确记多精确；写了整日才会帮你数天数</div><button class=\"rv-confirm\" id=\"mkSave\">" + (k0 ? "保存修改" : "记下来") + "</button>";
		if (k0) {
			$("#mkY").value = k0.y;
			if (k0.m) $("#mkM").value = k0.m;
			if (k0.d) $("#mkD").value = k0.d;
		}
		$("#mkSave").onclick = () => {
			const label = $("#mkLabel").value.trim();
			if (!label) {
				toast("先写是哪件事");
				return;
			}
			const y = +$("#mkY").value, m = +$("#mkM").value || 0, d = +$("#mkD").value || 0;
			if (!(y >= 1900 && y <= 2100)) {
				toast("年份没填对");
				return;
			}
			if (m && !(m >= 1 && m <= 12)) {
				toast("月份没填对");
				return;
			}
			if (d && !m) {
				toast("填了几日就要填几月");
				return;
			}
			if (d && !(d >= 1 && d <= 31)) {
				toast("日子没填对");
				return;
			}
			if (k0?.moment) {
				holder.moments = holder.moments.filter((m) => m !== k0.moment);
				k0 = null;
			}
			if (k0) {
				k0.label = label;
				k0.y = y;
				if (m) k0.m = m;
				else delete k0.m;
				if (d) k0.d = d;
				else delete k0.d;
				scheduleSave();
				closeSheet();
				render();
				toast("已保存修改");
				return;
			}
			const k = {
				label,
				y
			};
			if (m) k.m = m;
			if (d) k.d = d;
			holder.marks = holder.marks || [];
			holder.marks.push(k);
			scheduleSave();
			closeSheet();
			render();
			toast("已记下 · " + markDateLabel(k));
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	// src/modules/people/index.js
	var REL_PRESETS = [
		"亲情",
		"友情",
		"爱情",
		"人脉",
		"同事"
	];
	var pendingPDel = null;
	var personListN = 30;
	function personAliases(p) {
		return [p.name].concat(p.nick || []).filter((n) => n && n.length);
	}
	function personById(id) {
		return (SET.people || []).find((p) => p.id === id);
	}
	function personByName(n) {
		return (SET.people || []).find((p) => personAliases(p).includes(n));
	}
	function personHitE(p, e, xp) {
		if (e.personLinks && e.personLinks.length) return e.personLinks.includes(p.id);
		const als = personAliases(p);
		if (e.delegate && e.delegate.to && als.includes(e.delegate.to)) return true;
		const ws = xp && xp.withs || [];
		for (const a2 of als) {
			if (a2 === "找找" && p.name !== a2) continue;
			if (ws.includes(a2)) return true;
			if (a2.length >= 2 && e.text && e.text.includes(a2)) return true;
		}
		return false;
	}
	function personScan(p) {
		const rows = [];
		walk((d, e) => {
			if (!e.text) return;
			const xp = parseEntry(e);
			if (personHitE(p, e, xp)) rows.push({
				d,
				e,
				xp
			});
		});
		rows.sort((a2, b2) => parseKey(b2.d) - parseKey(a2.d));
		return rows;
	}
	function personCycles(p) {
		const als = personAliases(p);
		return (SET.cycles || []).filter((c) => c.personId ? c.personId === p.id : als.some((a2) => (c.name || "").includes(a2)));
	}
	function personOpenByName(n) {
		const p = personByName(n);
		if (p) {
			navigationState.cur = {
				name: "person",
				pid: p.id
			};
			personListN = 30;
			render();
			return;
		}
		if (n === "独自" || GENERIC_PPL.includes(n)) return;
		openPersonEdit(null, n);
	}
	function relChipHtml(sel) {
		return REL_PRESETS.map((r) => "<button class=\"gs-chip" + (sel === r ? " on" : "") + "\" data-r=\"" + r + "\">" + r + "</button>").join("");
	}
	function openPersonEdit(p, prefillName) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">" + (p ? "编辑资料" : "收进亲友") + "</div><input class=\"vt-in\" id=\"peName\" placeholder=\"本名 / 常用称呼\" value=\"" + escAttr(p ? p.name : prefillName || "") + "\"><input class=\"vt-in\" id=\"peNick\" placeholder=\"昵称 / 小名（多个用、隔开，写哪个都认）\" value=\"" + escAttr(p && p.nick ? p.nick.join("、") : "") + "\"><div class=\"gs-chips\" style=\"margin-top:10px\" id=\"peRels\">" + relChipHtml(p ? p.rel : "") + "</div><input class=\"vt-in\" id=\"peRel\" placeholder=\"关系（点上面选，或自己写：发小 / 合伙人…）\" value=\"" + escAttr(p ? p.rel || "" : "") + "\"><textarea class=\"vt-in\" id=\"peNote\" rows=\"2\" placeholder=\"备注：怎么认识的、想记住的话（可不填）\">" + vEsc(p && p.note ? p.note : "") + "</textarea><button class=\"rv-confirm\" id=\"peSave\">" + (p ? "保存" : "收录") + "</button>";
		friendEditExtras(S, p);
		S.querySelectorAll("#peRels [data-r]").forEach((b) => b.onclick = () => {
			$("#peRel").value = b.dataset.r;
			S.querySelectorAll("#peRels .gs-chip").forEach((x) => x.classList.toggle("on", x === b));
		});
		$("#peSave").onclick = () => {
			const name = $("#peName").value.trim();
			if (!name) {
				toast("先写名字");
				return;
			}
			const nick = $("#peNick").value.split(/[、，,\s/]+/).map((x) => x.trim()).filter((x) => x && x !== name);
			const dup = (SET.people || []).find((x) => x !== p && personAliases(x).includes(name));
			if (dup && (!p || p.name !== name)) {
				toast("册子里已经有 " + dup.name + " 了");
				return;
			}
			const more = friendRead(S);
			if (!more) return;
			if (p) {
				p.name = name;
				p.nick = nick;
				p.rel = $("#peRel").value.trim();
				p.note = $("#peNote").value.trim();
			} else {
				p = {
					id: ++appState.uid,
					name,
					nick,
					rel: $("#peRel").value.trim(),
					note: $("#peNote").value.trim(),
					moments: [],
					pins: [],
					added: TODAY
				};
				SET.people.push(p);
			}
			Object.assign(p, more);
			friendSyncBirthday(p);
			delete SET.pplNo[name];
			scheduleSave();
			closeSheet();
			toast(p.name + " 已在册子里");
			navigationState.cur = {
				name: "person",
				pid: p.id
			};
			personListN = 30;
			render();
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function renderPeople() {
		const bar = document.createElement("div");
		bar.className = "rp-tabs";
		bar.style.marginTop = "16px";
		const addB = document.createElement("button");
		addB.className = "chip primary-action";
		addB.textContent = "＋ 手动添加";
		addB.onclick = () => openPersonEdit(null, "");
		bar.appendChild(addB);
		view.appendChild(bar);
		const meRow = document.createElement("div");
		meRow.className = "set-row";
		meRow.innerHTML = "<span>我 · 人生时间点</span><span class=\"sub\" style=\"margin-left:auto\">" + (((SET.me || {}).marks || []).length ? SET.me.marks.length + " 条 " : "") + "›</span>";
		meRow.onclick = () => {
			navigationState.cur = { name: "me" };
			render();
		};
		view.appendChild(meRow);
		const book = SET.people || [];
		const cnt = /* @__PURE__ */ new Map(), last = /* @__PURE__ */ new Map(), cand = /* @__PURE__ */ new Map();
		const inBook = /* @__PURE__ */ new Set();
		book.forEach((p) => personAliases(p).forEach((n) => inBook.add(n)));
		walk((d, e) => {
			if (!e.text) return;
			const xp = parseEntry(e);
			book.forEach((p) => {
				if (personHitE(p, e, xp)) {
					cnt.set(p.id, (cnt.get(p.id) || 0) + 1);
					if (!last.has(p.id) || parseKey(d) > parseKey(last.get(p.id))) last.set(p.id, d);
				}
			});
			const names = new Set((xp.withs || []).filter((w) => w !== "独自"));
			if (e.delegate && e.delegate.to) names.add(e.delegate.to);
			names.forEach((n) => {
				if (n.length < 2 || n.length > 6) return;
				if (inBook.has(n) || SET.pplNo[n] || GENERIC_PPL.includes(n) || n === "同事" || n === "同学" || n === "同行") return;
				cand.set(n, (cand.get(n) || 0) + 1);
			});
		});
		if (book.length) {
			view.appendChild(sectionLabel("已收录 · 点开看你们的记录"));
			book.slice().sort((a2, b2) => (b2.star ? 1 : 0) - (a2.star ? 1 : 0) || (cnt.get(b2.id) || 0) - (cnt.get(a2.id) || 0)).forEach((p) => {
				const it = document.createElement("div");
				it.className = "set-row";
				it.innerHTML = "<span>" + (p.star ? "★ " : "") + vEsc(p.name) + (p.rel ? "<i class=\"pp-rel\">" + vEsc(p.rel) + "</i>" : "") + "</span><span class=\"sub\" style=\"margin-left:auto\">" + (cnt.get(p.id) || 0) + " 条" + (last.has(p.id) ? " · " + fmtShort(last.get(p.id)) : "") + " ›</span>";
				it.onclick = () => {
					navigationState.cur = {
						name: "person",
						pid: p.id
					};
					personListN = 30;
					render();
				};
				view.appendChild(it);
			});
		} else {
			const d2 = document.createElement("div");
			d2.className = "empty-hint";
			d2.style.textAlign = "center";
			d2.style.padding = "22px 2px 6px";
			d2.innerHTML = jjImg("nap", 72) + "<div style=\"margin-top:8px\">团团：还没收录过人。记录里认出的人会列在下面，点「收录」就能一起翻。</div>";
			view.appendChild(d2);
		}
		const cands = [...cand.entries()].sort((a2, b2) => b2[1] - a2[1]).slice(0, 20);
		if (cands.length) {
			view.appendChild(sectionLabel("啾啾还认出这些人 · 收录后才进册子"));
			cands.forEach(([n, c2]) => {
				const it = document.createElement("div");
				it.className = "set-row";
				it.innerHTML = "<span>" + vEsc(n) + "</span><span class=\"sub\" style=\"margin-left:auto\">" + c2 + " 次</span><button class=\"gm-btn\" data-a=\"in\">收录</button><button class=\"gm-btn\" data-a=\"no\">忽略</button>";
				it.querySelector("[data-a=\"in\"]").onclick = (ev) => {
					ev.stopPropagation();
					openPersonEdit(null, n);
				};
				it.querySelector("[data-a=\"no\"]").onclick = (ev) => {
					ev.stopPropagation();
					SET.pplNo[n] = 1;
					scheduleSave();
					render();
				};
				view.appendChild(it);
			});
		}
		const tip = document.createElement("div");
		tip.className = "vt-tip";
		tip.textContent = "写「和赵赵看电影」「转交给小李」啾啾就能认人；收录时填上昵称，以后写昵称也归到同一个人，旧记录一并追认。";
		view.appendChild(tip);
	}
	function renderPerson(p) {
		const rows = personScan(p);
		const head = document.createElement("div");
		head.className = "vt-card";
		head.innerHTML = "<div class=\"vt-site\">" + (p.star ? "★ " : "") + vEsc(p.name) + (p.rel ? "<i class=\"pp-rel\">" + vEsc(p.rel) + "</i>" : "") + "<button class=\"gm-btn\" data-a=\"star\" style=\"margin-left:auto\">" + (p.star ? "⭐ 已星标" : "☆ 星标") + "</button><button class=\"gm-btn\" data-a=\"edit\" style=\"margin-left:0\">编辑</button><button class=\"gm-btn danger\" data-a=\"out\" style=\"margin-left:0\">" + (pendingPDel === p.id ? "确认移出" : "移出") + "</button></div>" + (p.nick && p.nick.length ? "<div class=\"vt-note\">也叫：" + vEsc(p.nick.join("、")) + "</div>" : "") + (p.note ? "<div class=\"vt-note\">" + vEsc(p.note) + "</div>" : "");
		head.querySelector("[data-a=\"star\"]").onclick = () => {
			p.star = !p.star;
			scheduleSave();
			render();
			toast(p.star ? "已星标" : "已取消星标");
		};
		head.querySelector("[data-a=\"edit\"]").onclick = () => openPersonEdit(p);
		head.querySelector("[data-a=\"out\"]").onclick = () => {
			if (pendingPDel !== p.id) {
				pendingPDel = p.id;
				toast("再点一次确认移出（记录不会删，只是出册）");
				render();
				return;
			}
			SET.people = SET.people.filter((x) => x.id !== p.id);
			pendingPDel = null;
			scheduleSave();
			navigationState.cur = { name: "people" };
			render();
		};
		view.appendChild(head);
		friendDetail(p, head);
		const pcs = personCycles(p);
		if (pcs.length) {
			const bc = document.createElement("div");
			bc.className = "vt-card";
			bc.innerHTML = pcs.map((c) => {
				const nk = cycNext(c, TODAY);
				return "<div class=\"vt-note\">" + houseMark("cycles") + vEsc(c.name) + " · " + cycDesc(c) + (nk ? "<br>下次：" + fmtNextK(nk) + "（" + weekCN(nk) + "）" + (cycAgeStr(c, nk) ? " · " + cycAgeStr(c, nk) : "") : "") + "</div>";
			}).join("");
			view.appendChild(bc);
		} else {
			const bb = document.createElement("div");
			bb.className = "rp-tabs";
			const btn = document.createElement("button");
			btn.className = "chip";
			btn.textContent = "＋TA的生日提醒";
			btn.onclick = () => friendBirthdayStart(p);
			bb.appendChild(btn);
			view.appendChild(bb);
		}
		view.appendChild(marksPan(p, false, p.name));
		const mv = rows.filter((r) => r.xp.title && (r.e.groups || []).some((g) => tplOf(g) === "movie"));
		const fd = rows.filter((r) => (r.e.groups || []).some((g) => tplOf(g) === "food"));
		const pan = document.createElement("div");
		pan.className = "tp-pan";
		const tiles = [
			[
				mv.length,
				"部",
				"一起看过",
				mv
			],
			[
				fd.length,
				"顿",
				"一起吃过",
				fd
			],
			[
				rows.length,
				"条",
				"共同出现",
				null
			],
			[
				rows.length ? fmtShort(rows[0].d) : "—",
				"",
				"最近一次",
				null
			]
		];
		pan.innerHTML = "<div class=\"tt\">我们的盘点</div><div class=\"tp-nums\">" + tiles.map((t, i) => "<div class=\"n\" data-pi=\"" + i + "\"" + (t[3] && t[3].length ? " style=\"cursor:pointer\"" : "") + "><b>" + t[0] + (t[1] ? "<i>" + t[1] + "</i>" : "") + "</b><span>" + t[2] + (t[3] && t[3].length ? " ›" : "") + "</span></div>").join("") + "</div>";
		pan.querySelectorAll(".n[data-pi]").forEach((el) => {
			el.onclick = () => {
				const t = tiles[+el.dataset.pi];
				if (t[3] && t[3].length) openTileSheet(t[2] + " · " + p.name, t[3].map((r) => ({
					nm: r.xp.title ? "《" + r.xp.title + "》" : vEsc((r.e.text || "").slice(0, 18)),
					sub: fmtShort(r.d),
					sc: r.xp.score != null ? r.xp.score + "分" : "",
					d: r.d,
					id: r.e._id
				})));
			};
		});
		view.appendChild(pan);
		if (rows.length) {
			view.appendChild(sectionLabel("相关记录 · 点字直接改 · 点日子去那天"));
			let lastDate = null;
			rows.slice(0, personListN).forEach((r) => {
				if (r.d !== lastDate) {
					lastDate = r.d;
					const g2 = document.createElement("div");
					g2.className = "date-group";
					g2.dataset.day = r.d;
					g2.textContent = dayGroupTitle(r.d);
					view.appendChild(g2);
				}
				view.appendChild(jumpRow(r.d, r.e, true));
			});
			if (rows.length > personListN) {
				const more = document.createElement("div");
				more.className = "tapzone";
				more.style.textAlign = "center";
				more.textContent = "▾ 加载更早（还有 " + (rows.length - personListN) + " 条）";
				more.onclick = () => {
					personListN += 50;
					render();
				};
				view.appendChild(more);
			}
		} else {
			const d4 = document.createElement("div");
			d4.className = "empty-hint";
			d4.textContent = "还没有和 " + p.name + " 相关的记录 · 写「和" + p.name + "吃饭」这类句子就会自动归进来";
			view.appendChild(d4);
		}
	}
	function initializePeople() {
		SET.people = SET.people || [];
		SET.pplNo = SET.pplNo || {};
		SET.me = SET.me || { marks: [] };
		SET.cycles = SET.cycles || [];
	}
	// src/core/food-words.js
	var V_POS1 = [
		"会再来",
		"可再来",
		"还会来",
		"还想去",
		"想再去",
		"会回购",
		"可回购",
		"要回购",
		"回购",
		"可复购",
		"复购",
		"要二刷",
		"二刷",
		"必吃",
		"宝藏",
		"绝了",
		"必回"
	];
	// src/core/parser.js
	var parserState = {};
	function weightInKg(text) {
		const m = text.trim().match(/^(?:今天|刚刚|刚才)?(?:称了?(?:下|一下)?(?:体重)?|量了?体重|体重)[：:\s]*(\d{1,3}(?:\.\d+)?)\s*(?:公斤|千克|kg)(?:了)?[。！!]?$/i);
		const value = m && Number(m[1]);
		return value >= 1 && value <= 500 ? value : null;
	}
	function directHouse(text) {
		if (weightInKg(text) !== null) return "health";
		if (/(?:读了|读完(?:了)?|看完了这本书)\s*《[^》]+》/.test(text)) return "book";
		const p = parseLine(text);
		if (/(?:花了|付了|支付了?|消费了?|打车|车费)/.test(text) && p.prices?.length && !p.store) return "money";
		return null;
	}
	function splitIntents(text) {
		const parts = [], pairs = {
			"《": "》",
			"「": "」",
			"“": "”",
			"（": "）",
			"(": ")"
		}, closing = [];
		let buffer = "";
		function flush() {
			const part = buffer.trim().replace(/^(然后|另外|还有|对了|那个|嗯|呃)[，,\s]*/, "").trim();
			if (part.replace(/[！？!?\s]/g, "").length >= 2) parts.push(part);
			buffer = "";
		}
		for (let i = 0; i < text.length; i++) {
			const ch = text[i];
			if (pairs[ch]) closing.push(pairs[ch]);
			if (closing.length) {
				buffer += ch;
				if (ch === closing.at(-1)) closing.pop();
				continue;
			}
			if (/[。！？!?\n；;]/.test(ch)) {
				if (/[！？!?]/.test(ch)) buffer += ch;
				flush();
				continue;
			}
			if (ch === "，" || ch === ",") {
				const next = text.slice(i + 1).trimStart();
				if (!(/聚餐|聚会|旅行|旅游/.test(buffer) && /^(?:打车|吃饭|看电影|门票).*?(?:花了?|费|\d)/.test(next)) && (newIntent(next) || /^(然后|另外|还有|对了|今天|明天|后天|大后天|下周|下个月|晚上|中午|下午|早上|上午|昨天|昨晚|前天)/.test(next) || /^\d{1,2}[:：]\d{2}\s*[\u4e00-\u9fff]/.test(next))) {
					flush();
					continue;
				}
			}
			buffer += ch;
		}
		flush();
		return parts;
	}
	function newIntent(text) {
		return /^(?:以后有空|等有空|有空想|(?:突然|忽然)(?:觉得|感觉)|(?:称了?|量了?)体重|(?:打车|购物|买东西)花了|(?:读了|读完了?)《)/.test(text);
	}
	function detectTimeHM(t) {
		const m = t.match(/([01]?\d|2[0-3])[:：][0-5]\d/);
		return m ? m[0].replace("：", ":") : null;
	}
	function detectTimeCN(t) {
		const cm = t.match(/(上午|早上|中午|下午|晚上)([一二三四五六七八九十两\d]{1,3})点(半|一刻|三刻|(\d{1,2})分)?/);
		if (!cm) return null;
		let h = /^\d+$/.test(cm[2]) ? +cm[2] : {
			"一": 1,
			"二": 2,
			"两": 2,
			"三": 3,
			"四": 4,
			"五": 5,
			"六": 6,
			"七": 7,
			"八": 8,
			"九": 9,
			"十": 10,
			"十一": 11,
			"十二": 12
		}[cm[2]];
		if (h == null || h > 23) return null;
		if ((cm[1] === "下午" || cm[1] === "晚上") && h < 12) h += 12;
		if (cm[1] === "中午" && h <= 2) h += 12;
		const mi = cm[3] === "半" ? 30 : cm[3] === "一刻" ? 15 : cm[3] === "三刻" ? 45 : cm[4] ? +cm[4] : 0;
		return String(h).padStart(2, "0") + ":" + String(mi).padStart(2, "0");
	}
	function detectTime(t) {
		return detectTimeHM(t) || detectTimeCN(t);
	}
	function detectDue(t) {
		const longPlan = planParse(t, dkey(/* @__PURE__ */ new Date()));
		if (longPlan) return {
			key: longPlan.day,
			hard: false
		};
		const dm = t.match(/(\d{1,2})\.(\d{1,2})号?/);
		if (dm && (() => {
			const mo = +dm[1], dy = +dm[2];
			const pre = t[dm.index - 1] || "";
			const post = t.slice(dm.index + dm[0].length, dm.index + dm[0].length + 1);
			return mo >= 1 && mo <= 12 && dy >= 1 && dy <= 31 && !/[\d.]/.test(pre) && !/[\d元块钱％%折]/.test(post);
		})()) {
			const ty = parseKey(TODAY).getFullYear();
			let key = ty + "." + +dm[1] + "." + +dm[2];
			if (parseKey(key) < parseKey(TODAY)) key = ty + 1 + "." + +dm[1] + "." + +dm[2];
			return {
				key,
				hard: true
			};
		}
		let rel = null, mr = null;
		if (/大后天/.test(t)) rel = addDaysK(TODAY, 3);
		else if (/后天/.test(t)) rel = addDaysK(TODAY, 2);
		else if (/明天/.test(t)) rel = TOMORROW;
		else if (mr = t.match(/下+周([一二三四五六日天])/)) rel = nextWeekWeekday(WKMAP[mr[1]]);
		else if (!/上周/.test(t) && (mr = t.match(/(?:这周|本周|周)([一二三四五六日天])/))) rel = upcomingWeekday(WKMAP[mr[1]]);
		else if (mr = t.match(/下个?月(\d{1,2})[号日]/)) {
			const d = parseKey(TODAY);
			d.setDate(1);
			d.setMonth(d.getMonth() + 1);
			d.setDate(+mr[1]);
			rel = dkey(d);
		} else if (/下个?月/.test(t)) {
			const d = parseKey(TODAY);
			const day = d.getDate();
			d.setDate(1);
			d.setMonth(d.getMonth() + 1);
			const mx = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
			d.setDate(Math.min(day, mx));
			rel = dkey(d);
		} else if (mr = t.match(/(\d{1,2})月(\d{1,2})[号日]/)) {
			const ty = parseKey(TODAY).getFullYear();
			let k = ty + "." + +mr[1] + "." + +mr[2];
			if (parseKey(k) < parseKey(TODAY)) k = ty + 1 + "." + +mr[1] + "." + +mr[2];
			rel = k;
		}
		return rel ? {
			key: rel,
			hard: false
		} : null;
	}
	var CITY_LIST = [
		"上海",
		"北京",
		"杭州",
		"广州",
		"深圳",
		"成都",
		"重庆",
		"武汉",
		"西安",
		"南京",
		"苏州",
		"天津",
		"长沙",
		"青岛",
		"厦门",
		"宁波",
		"合肥",
		"郑州",
		"济南",
		"福州",
		"昆明",
		"大连",
		"沈阳",
		"哈尔滨",
		"长春",
		"石家庄",
		"太原",
		"南昌",
		"贵阳",
		"南宁",
		"兰州",
		"海口",
		"三亚",
		"无锡",
		"佛山",
		"东莞",
		"珠海",
		"扬州",
		"绍兴",
		"嘉兴",
		"温州",
		"潮汕",
		"顺德"
	];
	var V_NEG1 = [
		"非必要不去",
		"不会再来",
		"不会再吃",
		"不会再去",
		"再也不来",
		"避雷",
		"踩雷",
		"别去了",
		"别买"
	];
	var V_NEG2 = [
		"拉胯",
		"难吃",
		"翻车",
		"不推荐"
	];
	var V_POS2 = [
		"大满足",
		"惊艳",
		"好吃",
		"很香",
		"神作",
		"yyds",
		"推荐",
		"值得",
		"还行",
		"凑合",
		"很一般",
		"一般般",
		"味道一般",
		"中规中矩"
	];
	var V_NEG = V_NEG1.concat(V_NEG2);
	V_POS1.concat(V_POS2);
	var T_BAO2 = [
		"大满足",
		"惊艳",
		"神作",
		"yyds"
	];
	var TIER_NM = {
		bao: "宝藏",
		jia: "吃过",
		lei: "避雷"
	};
	function foodTier(p) {
		const w = p.verdict || null;
		if (w && (V_NEG1.includes(w) || V_NEG2.includes(w))) return "lei";
		if (w && V_POS1.includes(w)) return "bao";
		if (p.score != null) return p.score >= 8 ? "bao" : p.score >= 6 ? "jia" : "lei";
		if (w) return T_BAO2.includes(w) ? "bao" : "jia";
		return null;
	}
	var WANT_RE = /想吃|想去|种草|收藏|下次去|下回去|有空去|改天去|回头去|找时间去|想试试|想尝尝|去试试|要去试|想打卡/;
	var WANT_VISIT_RE = /吃了|吃过|吃到|喝了|去了|来了|拔草|打卡了|终于|还想|再去|再来|还要去|回购|二刷|又去|第[一二两三四五六七八九十\d]+次/;
	var WANT_TASTE_RE = /好吃|难吃|太香|很香|一般般|踩雷|味道|惊艳|绝了|大满足/;
	var WANT_HEAR_RE = /听说|据说|看着|看起来|网上|说是|推荐|种草/;
	function isWantLine(t, r) {
		return !!(r.store && WANT_RE.test(t) && !WANT_VISIT_RE.test(t) && r.score == null && !(r.prices && r.prices.length) && !(WANT_TASTE_RE.test(t) && !WANT_HEAR_RE.test(t)));
	}
	function parseLine(text) {
		const t = String(text || ""), r = {};
		const range = journalRange(t);
		if (range) {
			r.startTime = range.startTime;
			r.endTime = range.endTime;
		}
		const tm = t.match(/《([^》]{1,25})》/);
		if (tm) r.title = tm[1];
		let m;
		const sre = /(10|[0-9](?:\.[0-9])?)\s*分/g;
		while (m = sre.exec(t)) {
			const pre = t[m.index - 1] || "", post = t.slice(m.index + m[0].length, m.index + m[0].length + 1);
			if (/[\d点:：.]/.test(pre)) continue;
			if (post && "钟贝组享数".includes(post)) continue;
			const v = parseFloat(m[1]);
			if (v <= 10) {
				r.score = v;
				break;
			}
		}
		moneyOf(t, r);
		for (const c of CITY_LIST) if (t.includes(c)) {
			r.city = c;
			break;
		}
		const qm = t.match(/[“"『「]([^”"』」]{1,14})[”"』」]/);
		if (qm) r.store = qm[1];
		if (!r.store) {
			for (const st of storeSet()) if (st.length >= 3 && t.includes(st)) {
				r.store = st;
				break;
			}
		}
		if (!r.store) {
			const sl = storeLink(t);
			if (sl) r.store = sl;
		}
		if (r.store) r.store = canonStore(r.store);
		if (/外卖/.test(t)) r.delivery = true;
		const ws = parseCompanions(t);
		if (ws.length) {
			r.withs = ws;
			r.with = ws[0];
		}
		const vd = parseVerdict(t);
		if (vd) {
			r.verdict = vd.w;
			if (vd.neg) r.vNeg = true;
		}
		if (isWantLine(t, r)) r.want = true;
		return r;
	}
	function parseEntry(e) {
		const t = String(e.text || "");
		const sig = storageState.PARSE_GEN + ":" + peopleSet().size + ":" + storeSet().size;
		if (e._pc && e._pc.t === t && e._pc.g === sig) return e._pc.r;
		const r = parseLine(t);
		if (e.foodCity) r.city = e.foodCity;
		if (e.foodMode !== void 0) r.delivery = e.foodMode === "外卖";
		if (e.foodChoice && e.foodChoice.text === t && [
			"宝藏",
			"吃过",
			"避雷",
			"想吃"
		].includes(e.foodChoice.value)) {
			const choice = e.foodChoice.value;
			r.want = choice === "想吃";
			r.verdict = r.want ? null : choice;
			r.vNeg = choice === "避雷";
			delete r.score;
		}
		e._pc = {
			t,
			g: sig,
			r
		};
		return r;
	}
	function canonTitle(t) {
		return SET.alias[t] || t;
	}
	parserState.KNOWN_PPL = null;
	parserState.KNOWN_STORE = null;
	var PPL_LIST_RE = /([和与跟同])([\u4e00-\u9fa5A-Za-z0-9、，,和]{1,20}?)(?:一起|二刷|三刷|补看|看了|看|吃|去|玩|逛|见面|见|喝|聊|交流|讨论)/;
	var PPL_BLACK = [
		"他",
		"她",
		"它",
		"我",
		"你",
		"大家",
		"别人",
		"我们",
		"你们",
		"他们",
		"自己",
		"进",
		"出",
		"上",
		"下",
		"来",
		"回",
		"走",
		"着",
		"们",
		"人",
		"这",
		"那"
	];
	var PPL_PREPS = [
		"和",
		"与",
		"跟",
		"同"
	];
	function extractPplList(t) {
		const lm = String(t || "").match(PPL_LIST_RE);
		if (!lm) return [];
		let seg = lm[2];
		if (lm[1] === "同") {
			const w2 = "同" + seg.slice(0, 1);
			if ([
				"同时",
				"同意",
				"同样",
				"同期",
				"同城",
				"同步",
				"同款"
			].includes(w2)) return [];
			if ([
				"同事",
				"同学",
				"同行"
			].includes(w2)) return [w2];
		}
		return seg.split(/[、，,和与跟同]/).map((n) => n.trim()).filter((n) => n && n.length <= 6 && !PPL_BLACK.includes(n) && !/[了的呢吗吧啊是在有]/.test(n));
	}
	function peopleSet() {
		if (!parserState.KNOWN_PPL) {
			parserState.KNOWN_PPL = /* @__PURE__ */ new Set();
			(SET.people || []).forEach((p) => personAliases(p).forEach((n) => {
				if (n.length >= 2 && n.length <= 6) parserState.KNOWN_PPL.add(n);
			}));
			walk((d, e) => {
				if (e.delegate && e.delegate.to && e.delegate.to.length <= 4) parserState.KNOWN_PPL.add(e.delegate.to);
				extractPplList(e.text).map(pplClean).forEach((n) => {
					if ((n.length >= 2 && n.length <= 4 || /^[A-Za-z][A-Za-z .'-]{1,11}$/.test(n)) && !/\d/.test(n) && !(SET.pplNo && SET.pplNo[n])) parserState.KNOWN_PPL.add(n);
				});
			});
		}
		return parserState.KNOWN_PPL;
	}
	function storeSet() {
		if (!parserState.KNOWN_STORE) {
			parserState.KNOWN_STORE = new Set((SET.foodShops || []).map((shop) => shop.name));
			walk((d, e) => {
				if (!(e.groups || []).some((g) => tplOf(g) === "food")) return;
				const re = /[“"『「]([^”"』」]{2,14})[”"』」]/g;
				let m;
				const t = String(e.text || "");
				while (m = re.exec(t)) if (!DD().nost[m[1]]) parserState.KNOWN_STORE.add(m[1]);
			});
		}
		return parserState.KNOWN_STORE;
	}
	var GENERIC_PPL = [
		"家人",
		"爸妈",
		"爸爸",
		"妈妈",
		"朋友",
		"同事",
		"闺蜜",
		"室友"
	];
	function initializeParser() {
		SET.gtpl = SET.gtpl || {};
		SET.alias = SET.alias || {};
		SET.aliasNo = SET.aliasNo || {};
	}
	// src/modules/hello/greeting.js
	var JQ_NM = [
		"小寒",
		"大寒",
		"立春",
		"雨水",
		"惊蛰",
		"春分",
		"清明",
		"谷雨",
		"立夏",
		"小满",
		"芒种",
		"夏至",
		"小暑",
		"大暑",
		"立秋",
		"处暑",
		"白露",
		"秋分",
		"寒露",
		"霜降",
		"立冬",
		"小雪",
		"大雪",
		"冬至"
	];
	var JQ_Y0 = 2024;
	var JQ_TAB = "062004190520041905200521062207220722082307220621052003180520042005210521072207230723082307220721052004180520052005210521072307230723082307220722052004190621052006210621072308230823082307220722062004190520041905200521062207220722082307220621052003180520042005210521072207230723082307220721052004180520052005210521072307230723082307220722052004190621052006210621072308230823082307220722062004190520041905200521062207220722082307220621052003180520042005210521072207230723082307220721052004180520052005210521072307230723082307220722052004190621052005210621072307230823082307220722062004190520041905200521062207220722082307220621052003180520042005210521072207230722082307220721052004180520052005210521072307230723082307220722052004190621052005210621072307230823082307220722062004190520041905200521062207220722072307220621052003180520042005200521072207230722082307220721052004180520042005210521072207230723082307220722052004190621052005210621072307230823082307220722062004190520041905200521062207220722072307220621052003180520041905200521072207230722082307220721";
	function jieqiOf(k) {
		const a = k.split(".").map(Number), yi = a[0] - JQ_Y0;
		if (yi < 0 || (yi + 1) * 48 > 1056) return null;
		for (const j of [(a[1] - 1) * 2, (a[1] - 1) * 2 + 1]) if (+JQ_TAB.substr(yi * 48 + j * 2, 2) === a[2]) return JQ_NM[j];
		return null;
	}
	var FEST_S = {
		"1.1": "元旦",
		"2.14": "情人节",
		"3.8": "妇女节",
		"4.1": "愚人节",
		"5.1": "劳动节",
		"5.4": "青年节",
		"6.1": "儿童节",
		"9.10": "教师节",
		"10.1": "国庆节",
		"11.11": "双十一",
		"12.24": "平安夜",
		"12.25": "圣诞节"
	};
	var FEST_L = {
		"1.1": "春节",
		"1.15": "元宵节",
		"2.2": "龙抬头",
		"5.5": "端午节",
		"7.7": "七夕",
		"8.15": "中秋节",
		"9.9": "重阳节",
		"12.8": "腊八",
		"12.23": "小年"
	};
	function festOf(k) {
		const a = k.split(".").map(Number), d = parseKey(k);
		const L = solarToLunar(d);
		if (L && !L.leap && FEST_L[L.lm + "." + L.ld]) return FEST_L[L.lm + "." + L.ld];
		const nx = solarToLunar(parseKey(addDaysK(k, 1)));
		if (nx && !nx.leap && nx.lm === 1 && nx.ld === 1) return "除夕";
		if (FEST_S[a[1] + "." + a[2]]) return FEST_S[a[1] + "." + a[2]];
		if (a[1] === 5 && d.getDay() === 0 && a[2] > 7 && a[2] <= 14) return "母亲节";
		if (a[1] === 6 && d.getDay() === 0 && a[2] > 14 && a[2] <= 21) return "父亲节";
		return null;
	}
	function nextHoliday() {
		const ty = +TODAY.split(".")[0], tk = parseKey(TODAY), cands = [];
		[ty, ty + 1].forEach((y) => {
			cands.push(["元旦", new Date(y, 0, 1)], ["劳动节", new Date(y, 4, 1)], ["国庆节", new Date(y, 9, 1)]);
			[
				[
					"春节",
					1,
					1
				],
				[
					"端午节",
					5,
					5
				],
				[
					"中秋节",
					8,
					15
				]
			].forEach(([n, lm, ld]) => {
				const t = lunarToSolar(y, lm, ld);
				if (t) cands.push([n, t]);
			});
		});
		let best = null;
		cands.forEach(([n, t]) => {
			const dd = Math.round((t - tk) / 864e5);
			if (dd >= 3 && (!best || dd < best.days)) best = {
				n,
				days: dd
			};
		});
		return best;
	}
	function seedRng(s) {
		let h = 1779033703 ^ s.length;
		for (let i = 0; i < s.length; i++) {
			h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
			h = h << 13 | h >>> 19;
		}
		return () => {
			h = Math.imul(h ^ h >>> 16, 2246822507);
			h = Math.imul(h ^ h >>> 13, 3266489909);
			h ^= h >>> 16;
			return (h >>> 0) / 4294967296;
		};
	}
	function clipT(t, n) {
		t = String(t || "").trim();
		return t.length > n ? t.slice(0, n) + "…" : t;
	}
	var WX_CITIES = [
		[
			"杭州",
			30.27,
			120.16
		],
		[
			"上海",
			31.23,
			121.47
		],
		[
			"北京",
			39.9,
			116.4
		],
		[
			"广州",
			23.13,
			113.26
		],
		[
			"深圳",
			22.54,
			114.06
		],
		[
			"成都",
			30.57,
			104.07
		],
		[
			"南京",
			32.06,
			118.8
		],
		[
			"武汉",
			30.59,
			114.31
		],
		[
			"苏州",
			31.3,
			120.59
		],
		[
			"重庆",
			29.56,
			106.55
		],
		[
			"西安",
			34.34,
			108.94
		],
		[
			"天津",
			39.13,
			117.2
		],
		[
			"长沙",
			28.23,
			112.94
		],
		[
			"郑州",
			34.75,
			113.62
		],
		[
			"青岛",
			36.07,
			120.38
		],
		[
			"厦门",
			24.48,
			118.09
		],
		[
			"宁波",
			29.87,
			121.55
		],
		[
			"合肥",
			31.82,
			117.23
		],
		[
			"福州",
			26.07,
			119.3
		],
		[
			"济南",
			36.65,
			117.12
		],
		[
			"昆明",
			25.04,
			102.71
		],
		[
			"沈阳",
			41.8,
			123.43
		],
		[
			"大连",
			38.91,
			121.61
		],
		[
			"哈尔滨",
			45.8,
			126.53
		],
		[
			"长春",
			43.82,
			125.32
		],
		[
			"石家庄",
			38.04,
			114.51
		],
		[
			"太原",
			37.87,
			112.55
		],
		[
			"南昌",
			28.68,
			115.86
		],
		[
			"南宁",
			22.82,
			108.37
		],
		[
			"贵阳",
			26.65,
			106.63
		],
		[
			"兰州",
			36.06,
			103.83
		],
		[
			"呼和浩特",
			40.84,
			111.75
		],
		[
			"乌鲁木齐",
			43.83,
			87.62
		],
		[
			"拉萨",
			29.65,
			91.13
		],
		[
			"西宁",
			36.62,
			101.78
		],
		[
			"银川",
			38.49,
			106.23
		],
		[
			"海口",
			20.04,
			110.2
		],
		[
			"三亚",
			18.25,
			109.51
		],
		[
			"香港",
			22.32,
			114.17
		],
		[
			"澳门",
			22.2,
			113.54
		],
		[
			"台北",
			25.03,
			121.57
		],
		[
			"无锡",
			31.49,
			120.31
		],
		[
			"温州",
			28,
			120.67
		],
		[
			"绍兴",
			30,
			120.58
		],
		[
			"嘉兴",
			30.75,
			120.76
		],
		[
			"湖州",
			30.89,
			120.09
		],
		[
			"常州",
			31.81,
			119.97
		],
		[
			"佛山",
			23.02,
			113.12
		],
		[
			"东莞",
			23.02,
			113.75
		],
		[
			"珠海",
			22.27,
			113.58
		],
		[
			"徐州",
			34.21,
			117.28
		],
		[
			"烟台",
			37.46,
			121.45
		],
		[
			"洛阳",
			34.62,
			112.45
		],
		[
			"桂林",
			25.27,
			110.29
		],
		[
			"丽江",
			26.86,
			100.23
		],
		[
			"大理",
			25.61,
			100.27
		]
	];
	var WX_TOP = [
		"杭州",
		"上海",
		"北京",
		"广州",
		"深圳",
		"成都",
		"南京",
		"武汉"
	];
	function wxCfg() {
		if (!SET.wx || !Array.isArray(SET.wx.cities)) SET.wx = {
			cities: [],
			cur: 0
		};
		return SET.wx;
	}
	function wxCity() {
		const w = wxCfg();
		if (!w.cities.length) return null;
		if (!(w.cur >= 0 && w.cur < w.cities.length)) w.cur = 0;
		return w.cities[w.cur];
	}
	function wxTxt(c) {
		return c === 0 || c === 1 ? "晴" : c === 2 ? "多云" : c === 3 ? "阴" : c <= 48 ? "雾" : c <= 57 ? "毛毛雨" : c === 61 ? "小雨" : c === 63 ? "中雨" : c === 65 ? "大雨" : c <= 67 ? "冻雨" : c === 71 ? "小雪" : c === 73 ? "中雪" : c === 75 ? "大雪" : c === 77 ? "雪粒" : c <= 81 ? "阵雨" : c === 82 ? "大阵雨" : c <= 86 ? "阵雪" : "雷阵雨";
	}
	function wxIc(c) {
		return c === 0 ? "☀️" : c === 1 ? "🌤" : c === 2 ? "⛅" : c === 3 ? "☁️" : c <= 48 ? "🌫" : c <= 57 ? "🌦" : c <= 67 ? "🌧" : c <= 77 ? "🌨" : c <= 82 ? "🌦" : c <= 86 ? "🌨" : "⛈";
	}
	var wxWet = (c) => c >= 51 && c <= 67 || c >= 80 && c <= 82 || c >= 95;
	var wxSnowy = (c) => c >= 71 && c <= 77 || c === 85 || c === 86;
	function wxURL(c) {
		return "https://api.open-meteo.com/v1/forecast?latitude=" + c.la + "&longitude=" + c.lo + "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=precipitation_probability,weather_code&past_days=1&forecast_days=1&timezone=auto";
	}
	function wxParse(j) {
		const iso = key2iso(TODAY), D = j && j.daily;
		if (!D || !Array.isArray(D.time)) return null;
		const i = D.time.indexOf(iso);
		if (i < 1) return null;
		const num = (v) => typeof v === "number" && isFinite(v) ? Math.round(v) : null;
		const d = {
			hi: num(D.temperature_2m_max[i]),
			lo: num(D.temperature_2m_min[i]),
			hiY: num(D.temperature_2m_max[i - 1]),
			loY: num(D.temperature_2m_min[i - 1]),
			code: +(D.weather_code || [])[i] || 0,
			pmax: num((D.precipitation_probability_max || [])[i]),
			hrs: []
		};
		if ([
			d.hi,
			d.lo,
			d.hiY,
			d.loY
		].some((v) => v === null)) return null;
		const H = j.hourly || {};
		(H.time || []).forEach((t, k) => {
			if (String(t).slice(0, 10) === iso) d.hrs.push({
				h: +String(t).slice(11, 13),
				p: (H.precipitation_probability || [])[k],
				c: +(H.weather_code || [])[k] || 0
			});
		});
		return d;
	}
	function wxKey() {
		const c = wxCity();
		return c ? TODAY + "|" + c.n : null;
	}
	function wxHit() {
		const k = wxKey();
		return k && SET.wxc && SET.wxc[k] || null;
	}
	function wxCached() {
		const h = wxHit();
		return h ? h.d : null;
	}
	function wxStale() {
		const h = wxHit();
		return !h || Date.now() - h.t > 108e5;
	}
	var wxBusy = null;
	function wxFetch(force) {
		const c = wxCity();
		if (!c) return Promise.resolve(null);
		const key = wxKey();
		if (!SET.wxc || typeof SET.wxc !== "object") SET.wxc = {};
		const hit = SET.wxc[key];
		if (!force && hit && Date.now() - hit.t < 108e5) return Promise.resolve(hit.d);
		if (wxBusy && wxBusy.key === key) return wxBusy.p;
		const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
		let tm;
		const timeout = new Promise((_, reject) => {
			tm = setTimeout(() => {
				reject(/* @__PURE__ */ new Error("weather timeout"));
				try {
					ctl?.abort();
				} catch (_) {}
			}, 8e3);
		});
		const request = Promise.resolve().then(() => fetch(wxURL(c), ctl ? {
			signal: ctl.signal,
			cache: "no-store"
		} : { cache: "no-store" })).then((r) => {
			if (!r.ok) throw new Error("weather HTTP " + r.status);
			return r.json();
		});
		const p = Promise.race([request, timeout]).then((j) => {
			const d = wxParse(j);
			if (!d) throw new Error("weather data");
			Object.keys(SET.wxc).forEach((k2) => {
				if (k2.indexOf(TODAY + "|") !== 0) delete SET.wxc[k2];
			});
			SET.wxc[key] = {
				t: Date.now(),
				d
			};
			P().wx = {
				c: c.n,
				hi: d.hi,
				lo: d.lo,
				k: d.code
			};
			scheduleSave();
			return d;
		}).catch(() => hit ? hit.d : null).then((d) => {
			clearTimeout(tm);
			if (wxBusy && wxBusy.p === p) wxBusy = null;
			return d;
		});
		wxBusy = {
			key,
			p
		};
		return p;
	}
	function hourCN(h) {
		return h < 12 ? "上午 " + h + " 点" : h === 12 ? "中午 12 点" : h < 18 ? "下午 " + (h - 12) + " 点" : "晚上 " + (h - 12) + " 点";
	}
	function wxAdvice(d) {
		const dd = Math.round((d.hi - d.hiY + (d.lo - d.loY)) / 2);
		const cmp = dd <= -3 ? {
			t: "↓ 比昨天冷 " + -dd + "°",
			c: "cold"
		} : dd >= 3 ? {
			t: "↑ 比昨天暖 " + dd + "°",
			c: "warm"
		} : {
			t: "和昨天差不多",
			c: "same"
		};
		let cloth, short;
		if (d.hi <= 5) {
			cloth = "很冷，帽子围巾安排上";
			short = "穿厚点";
		} else if (dd <= -6) {
			cloth = "降温挺猛，穿厚一点";
			short = "穿厚点";
		} else if (dd <= -3) {
			cloth = "降温了，加件外套";
			short = "加外套";
		} else if (d.hi >= 33) {
			cloth = "很热，防晒、多喝水";
			short = "防晒";
		} else if (dd >= 3) {
			cloth = "回暖了，可以少穿一件";
			short = "少穿一件";
		} else {
			cloth = "照昨天穿就行";
			short = "照昨天穿";
		}
		const nowH = (/* @__PURE__ */ new Date()).getHours();
		const hit = (d.hrs || []).find((x) => x.h >= nowH && x.h <= 22 && (typeof x.p === "number" && x.p >= 50 || wxWet(x.c) || wxSnowy(x.c)));
		let rain = null, rainShort = "";
		if (hit) {
			const sn = wxSnowy(hit.c), when = hit.h <= nowH ? "现在" : hourCN(hit.h) + "后";
			rain = (sn ? "❄ " : "☂ ") + when + (sn ? "有雪，路上慢点" : "有雨，带把伞");
			rainShort = sn ? "有雪" : "带伞";
		}
		const range = d.hi - d.lo >= 10 ? "早晚温差 " + (d.hi - d.lo) + "°，外套带上方便穿脱" : null;
		return {
			dd,
			cmp,
			cloth,
			short,
			rain,
			rainShort,
			range,
			snow: !!(hit && wxSnowy(hit.c)),
			rainy: !!hit,
			hi: d.hi,
			sunny: d.code <= 1
		};
	}
	function wxDesc(d) {
		const seg = (a, b) => {
			const cnt = {};
			(d.hrs || []).filter((x) => x.h >= a && x.h < b).forEach((x) => {
				const t = wxTxt(x.c);
				cnt[t] = (cnt[t] || 0) + 1;
			});
			return Object.keys(cnt).sort((p, q) => cnt[q] - cnt[p])[0] || null;
		};
		const m = seg(6, 12), n = seg(12, 21);
		if (m && n && m !== n) return m + "转" + n;
		return m || n || wxTxt(d.code);
	}
	function helloGreet() {
		const h = (/* @__PURE__ */ new Date()).getHours();
		return h < 5 ? "夜深了" : h < 11 ? "早上好" : h < 13 ? "中午好" : h < 18 ? "下午好" : "晚上好";
	}
	function lastRecordGap() {
		const tk = parseKey(TODAY);
		let best = null;
		Object.keys(appState.PAGES).forEach((k) => {
			const d = parseKey(k);
			if (d >= tk) return;
			const p = appState.PAGES[k];
			if (!((p.plan || []).length || (p.flow || []).length)) return;
			if (!best || d > best) best = d;
		});
		return best ? Math.round((tk - best) / 864e5) : 0;
	}
	function myBirthdayToday() {
		const b = SET.me && SET.me.bday;
		if (!b) return false;
		const a = TODAY.split(".");
		return b === +a[1] + "." + +a[2];
	}
	function helloTags() {
		const tags = [];
		if (myBirthdayToday()) tags.push({
			t: "今天你生日",
			acc: true
		});
		[
			"今天",
			"明天",
			"后天"
		].forEach((w, i) => {
			const k = addDaysK(TODAY, i);
			[festOf(k), jieqiOf(k)].forEach((x) => {
				if (x && tags.length < 2) tags.push({
					t: w + x,
					acc: true
				});
			});
		});
		const h = nextHoliday();
		if (h && h.days <= 120 && !tags.some((t) => t.t.indexOf(h.n) >= 0)) tags.push({
			t: "距" + h.n + " " + h.days + " 天",
			acc: false
		});
		return tags.slice(0, 3);
	}
	function helloItems() {
		return (P().plan || []).filter((e) => (e.text || "").trim() && (e.sym === "task" && e.state === "open" || e.sym === "note" && e.cyc));
	}
	function helloItemHTML(e) {
		let t = (e.text || "").trim(), ic = "<span class=\"ic dt\"></span>", when = "";
		if (e.cyc) {
			const c = (SET.cycles || []).find((x) => x.id === e.cyc);
			const icon = c ? cycIcon(c) : "🔁";
			if (t.indexOf(icon) === 0) t = t.slice(icon.length).trim();
			ic = "<span class=\"ic\">" + houseMark("cycles") + "</span>";
			if (e.sym === "task") when = icon === "🎂" ? "记得说一声" : icon === "💍" ? "别忘了" : icon === "💳" ? "记得还" : "";
		} else if (/^问问 /.test(t)) {
			ic = "<span class=\"ic arr\">→</span>";
			when = "转交跟进";
		} else {
			const hm = detectTimeHM(t);
			if (hm) {
				when = hm;
				t = t.replace(/\s*([01]?\d|2[0-3])[:：][0-5]\d\s*/, " ").trim() || t;
			} else {
				const cn = detectTimeCN(t);
				if (cn) when = cn;
			}
		}
		if (!when && e.time) when = e.time;
		if (!when && e.lateFrom) when = "原定 " + fmtShort(e.lateFrom);
		return "<div class=\"hl-it\" data-hid=\"" + (e._id || "") + "\">" + ic + "<span class=\"tx\">" + vEsc(t) + "</span>" + (when ? "<span class=\"when\">" + vEsc(when) + "</span>" : "") + "</div>";
	}
	var JQ_TIP = {
		"立春": "立春了，天要慢慢暖起来了。",
		"春分": "春分，今天昼夜一样长。",
		"清明": "清明，适合想一想想念的人。",
		"立夏": "立夏了，夏天正式开始。",
		"夏至": "夏至，一年里白天最长的一天。",
		"立秋": "立秋了，暑气要慢慢退了。",
		"秋分": "秋分，昼夜又一样长了。",
		"立冬": "立冬了，吃顿热乎的。",
		"冬至": "冬至，记得吃饺子或汤圆。",
		"小寒": "小寒，最冷的日子要来了，穿暖和。",
		"大寒": "大寒，再冷也快过年了。"
	};
	var CHEER_GEN = [
		"想到什么，随手发我一句。",
		"记饭馆时带上「店名」，下次找起来方便。",
		"没定日子的事，可以先放进待办池。",
		"记花销时带上金额，账房里能一起看。",
		"看完电影记一句，下次就知道推不推荐了。",
		"有个想法还没想清楚？先记半句也行。"
	];
	function helloCheer(cx) {
		let a = null;
		if (cx.mybd) a = "生日快乐" + (SET.me && SET.me.name ? "，" + SET.me.name : "") + "！这是啾啾留给你的生日祝福。";
		else if (cx.gap >= 7) a = seedRng(TODAY + "|gap")() < .5 ? "好久不见，今天想记点什么？" : "接着写今天的就行，不用补齐空着的日子。";
		else if (cx.fest) a = cx.fest === "除夕" ? "除夕快乐，今晚好好吃顿饭。" : cx.fest + "快乐！";
		else if (cx.jq && JQ_TIP[cx.jq]) a = JQ_TIP[cx.jq];
		else if (cx.bd) a = "今天有人过生日，记得说一声。";
		else if (cx.wa) {
			const w = cx.wa;
			if (w.snow) a = "下雪了！路上慢点。";
			else if (w.dd <= -5) a = "降温了，出门多带件衣服。";
			else if (w.rainy) a = "今天有雨，出门记得带伞。";
			else if (w.hi >= 33) a = "好热，记得多喝水。";
			else if (w.sunny && w.hi >= 15 && w.hi <= 28) a = "天气不错，有空出门走走。";
		}
		if (!a) {
			const wd = parseKey(TODAY).getDay();
			a = wd === 1 ? "周一了，看看这周有什么安排。" : wd === 5 ? "周五了，看看还有哪些事要收尾。" : wd === 6 || wd === 0 ? "周末了，有安排就记下来。" : null;
		}
		const b = cx.h < 11 && cx.wa && cx.wa.hi <= 15 && seedRng(TODAY + "|bf")() < .5 ? "天冷了，早饭吃点热乎的。" : CHEER_GEN[Math.floor(seedRng(TODAY + "|gen")() * CHEER_GEN.length)];
		return a ? [a, b] : [b];
	}
	function helloCtx(wx) {
		return {
			gap: lastRecordGap(),
			fest: festOf(TODAY),
			jq: jieqiOf(TODAY),
			mybd: myBirthdayToday(),
			bd: helloItems().some((e) => e.cyc && e.sym === "task" && (e.text || "").indexOf("🎂") >= 0),
			wa: wx ? wxAdvice(wx) : null,
			h: (/* @__PURE__ */ new Date()).getHours()
		};
	}
	function wxBlockHTML(d) {
		const c = wxCity(), a = wxAdvice(d);
		const lo0 = Math.min(d.lo, d.loY) - 2, hi0 = Math.max(d.hi, d.hiY) + 2, sp = Math.max(1, hi0 - lo0);
		const bar = (lo, hi, col) => "<div class=\"hl-rng\"><i style=\"left:" + ((lo - lo0) / sp * 100).toFixed(1) + "%;width:" + Math.max(4, (hi - lo) / sp * 100).toFixed(1) + "%;background:" + col + "\"></i></div>";
		const tcol = a.cmp.c === "cold" ? "#4E7A9B" : a.cmp.c === "warm" ? "var(--accent)" : "var(--ink-soft)";
		const tips = [a.cloth];
		if (a.rain) tips.push(a.rain);
		else if (a.range) tips.push(a.range);
		return "<div class=\"hl-wx\"><div class=\"hl-r1\"><span style=\"font-size:22px\">" + wxIc(d.code) + "</span><span class=\"hl-t\">" + d.hi + "°<small> / " + d.lo + "°</small></span><span class=\"hl-d\">" + vEsc(wxDesc(d)) + "</span><button class=\"hl-city\" id=\"hlCity\">" + vEsc(c ? c.n : "") + " ⇄</button></div><div class=\"hl-rr\"><span class=\"k\">昨天</span>" + bar(d.loY, d.hiY, "var(--line-strong)") + "<span class=\"v\">" + d.loY + "°–" + d.hiY + "°</span></div><div class=\"hl-rr\"><span class=\"k\">今天</span>" + bar(d.lo, d.hi, tcol) + "<span class=\"v\">" + d.lo + "°–" + d.hi + "°</span></div><div class=\"hl-cmp " + a.cmp.c + "\">" + a.cmp.t + "</div><div class=\"hl-tip\">" + tips.map(vEsc).join("<br>") + "</div></div>";
	}
	function wxPickHTML(addMode) {
		const cs = wxCfg().cities;
		return "<div class=\"hl-wx hl-wx0\">" + (addMode ? "选一个城市（存过的点一下就切过去）：" : "告诉我你在哪，每天早上帮你看天气，比昨天冷还是暖：") + "<div class=\"gs-chips\" style=\"margin-top:8px\"><button class=\"gs-chip\" data-wxgeo=\"1\">定位</button>" + cs.map((c, i) => "<button class=\"gs-chip on\" data-wxi=\"" + i + "\">" + vEsc(c.n) + "</button>").join("") + WX_TOP.filter((n) => !cs.some((c) => c.n === n)).map((n) => "<button class=\"gs-chip\" data-wxadd=\"" + n + "\">" + n + "</button>").join("") + "</div><div class=\"hl-fine\">更多城市：设置 → 天气城市（最多存 3 个，卡片上点城市名来回切）</div></div>";
	}
	function bindWxPick(box) {
		box.querySelectorAll("[data-wxadd]").forEach((b) => b.onclick = () => {
			const c = WX_CITIES.find((x) => x[0] === b.dataset.wxadd);
			if (c && wxAddCity({
				n: c[0],
				la: c[1],
				lo: c[2]
			})) helloWxRender();
		});
		box.querySelectorAll("[data-wxi]").forEach((b) => b.onclick = () => {
			wxCfg().cur = +b.dataset.wxi;
			scheduleSave();
			helloWxRender();
		});
		const g = box.querySelector("[data-wxgeo]");
		if (g) g.onclick = () => wxLocate(() => helloWxRender());
	}
	function bindWxBlock(box) {
		const b = box.querySelector("#hlCity");
		if (!b) return;
		b.onclick = () => {
			const w = wxCfg();
			if (w.cities.length >= 2) {
				w.cur = (w.cur + 1) % w.cities.length;
				scheduleSave();
				helloWxRender();
				helloStripRefresh();
			} else {
				box.innerHTML = wxPickHTML(true);
				bindWxPick(box);
			}
		};
	}
	function helloWxRender() {
		const box = $("#hlWx");
		if (!box) return;
		const c = wxCity();
		if (!c) {
			box.innerHTML = wxPickHTML(false);
			bindWxPick(box);
			return;
		}
		const d = wxCached();
		if (d) {
			box.innerHTML = wxBlockHTML(d);
			bindWxBlock(box);
		} else box.innerHTML = "<div class=\"hl-wx hl-wx0\">" + vEsc(c.n) + " · 看一眼天气…</div>";
		if (d && !wxStale()) return;
		wxFetch().then((d2) => {
			const b2 = $("#hlWx");
			if (!b2 || !$("#hello").classList.contains("on")) return;
			const c2 = wxCity();
			if (!c2 || c2.n !== c.n) return;
			if (d2) {
				b2.innerHTML = wxBlockHTML(d2);
				bindWxBlock(b2);
				helloCheerRefresh();
			} else if (!d) {
				b2.innerHTML = "<div class=\"hl-wx hl-wx0\">" + vEsc(c.n) + " 的天气暂时连接不上，请重试<div class=\"gs-chips\" style=\"margin-top:8px\"><button class=\"gs-chip\" id=\"hlWxRetry\">再试一次</button><button class=\"gs-chip\" id=\"hlWxCity\">换城市</button></div></div>";
				$("#hlWxRetry").onclick = () => {
					b2.innerHTML = "<div class=\"hl-wx hl-wx0\">" + vEsc(c.n) + " · 再看一眼…</div>";
					wxFetch(true).then((d3) => {
						if (d3) helloWxRender();
						else {
							b2.innerHTML = "<div class=\"hl-wx hl-wx0\">天气暂时连接不上。<button class=\"gs-chip\" id=\"hlWxAgain\">再试一次</button></div>";
							$("#hlWxAgain").onclick = helloWxRender;
						}
					});
				};
				$("#hlWxCity").onclick = () => {
					b2.innerHTML = wxPickHTML(true);
					bindWxPick(b2);
				};
			}
		});
	}
	function helloCheerRefresh() {
		const el = $("#hlCheer");
		if (!el) return;
		el.innerHTML = helloCheer(helloCtx(wxCached())).map(vEsc).join("<br>") + "<span>—— 啾啾</span>";
	}
	function wxAddCity(c) {
		const w = wxCfg(), i = w.cities.findIndex((x) => x.n === c.n);
		if (i >= 0) {
			w.cur = i;
			scheduleSave();
			return true;
		}
		if (w.cities.length >= 3) {
			toast("最多存 3 个城市 · 去设置里删一个再加");
			return false;
		}
		w.cities.push({
			n: c.n,
			la: +(+c.la).toFixed(2),
			lo: +(+c.lo).toFixed(2)
		});
		w.cur = w.cities.length - 1;
		scheduleSave();
		return true;
	}
	function wxLocate(done) {
		if (!platform.geolocation) {
			toast("这台设备拿不到定位 · 直接选城市吧");
			return;
		}
		toast("正在定位…");
		platform.geolocation.getCurrentPosition((pos) => {
			const la = pos.coords.latitude, lo = pos.coords.longitude;
			let best = null, bd = Infinity;
			WX_CITIES.forEach((c) => {
				const dx = (c[2] - lo) * Math.cos(la * Math.PI / 180), dy = c[1] - la, d2 = dx * dx + dy * dy;
				if (d2 < bd) {
					bd = d2;
					best = c;
				}
			});
			const near = best && Math.sqrt(bd) * 111 < 60;
			if (wxAddCity(near ? {
				n: best[0],
				la: best[1],
				lo: best[2]
			} : {
				n: "我这儿",
				la,
				lo
			})) {
				toast((near ? best[0] : "已按定位") + " · 天气马上来");
				if (done) done();
			}
		}, () => toast("没拿到位置 · 直接点城市也行"), {
			timeout: 9e3,
			maximumAge: 36e5
		});
	}
	function wxCitySheet() {
		const S = $("#gsheet"), w = wxCfg();
		const paint = () => {
			S.innerHTML = "<div class=\"gs-title\">天气城市 · 最多 3 个</div><div class=\"vt-note\" style=\"margin:-2px 0 10px\">早安卡上点城市名来回切 · 常在两地跑就都存上</div><div class=\"gs-chips\" id=\"wxMine\">" + (w.cities.length ? w.cities.map((c, i) => "<button class=\"gs-chip on\" data-rm=\"" + i + "\">" + vEsc(c.n) + (i === w.cur ? " · 当前" : "") + " ✕</button>").join("") : "<span class=\"vt-note\">还没存城市</span>") + "</div><button class=\"gm-btn\" id=\"wxGeo\" style=\"width:100%;margin:12px 0 10px;padding:10px\">用定位找我在哪</button><div class=\"gs-chips\" style=\"max-height:28vh;overflow-y:auto\">" + WX_CITIES.filter((c) => !w.cities.some((x) => x.n === c[0])).map((c) => "<button class=\"gs-chip\" data-add=\"" + c[0] + "\">" + c[0] + "</button>").join("") + "</div><div style=\"display:flex;gap:8px;margin-top:10px\"><input class=\"vt-in\" id=\"wxQ\" placeholder=\"其他城市，如 绍兴 / 大阪\" style=\"flex:1;margin:0\"><button class=\"gm-btn\" id=\"wxFind\" style=\"padding:0 14px\">找</button></div><div class=\"gs-chips\" id=\"wxRes\" style=\"margin-top:8px\"></div><button class=\"gs-done\" id=\"wxOk\">好了</button>";
			S.querySelectorAll("[data-rm]").forEach((b) => b.onclick = () => {
				w.cities.splice(+b.dataset.rm, 1);
				if (w.cur >= w.cities.length) w.cur = 0;
				scheduleSave();
				paint();
			});
			S.querySelectorAll("[data-add]").forEach((b) => b.onclick = () => {
				const c = WX_CITIES.find((x) => x[0] === b.dataset.add);
				if (c && wxAddCity({
					n: c[0],
					la: c[1],
					lo: c[2]
				})) paint();
			});
			$("#wxGeo").onclick = () => wxLocate(paint);
			$("#wxFind").onclick = () => {
				const q = $("#wxQ").value.trim();
				if (!q) return;
				const box = $("#wxRes");
				box.innerHTML = "<span class=\"vt-note\">找一找…</span>";
				fetch("https://geocoding-api.open-meteo.com/v1/search?count=6&language=zh&format=json&name=" + encodeURIComponent(q)).then((r) => r.json()).then((j) => {
					const rs = j && j.results || [];
					if (!rs.length) {
						box.innerHTML = "<span class=\"vt-note\">没找到 · 换个写法试试（拼音也行）</span>";
						return;
					}
					box.innerHTML = rs.map((x, i) => "<button class=\"gs-chip\" data-gi=\"" + i + "\">" + vEsc(x.name) + (x.admin1 && x.admin1 !== x.name ? " · " + vEsc(x.admin1) : "") + "</button>").join("");
					box.querySelectorAll("[data-gi]").forEach((b) => b.onclick = () => {
						const x = rs[+b.dataset.gi];
						if (wxAddCity({
							n: x.name,
							la: x.latitude,
							lo: x.longitude
						})) paint();
					});
				}).catch(() => {
					box.innerHTML = "<span class=\"vt-note\">没连上 · 稍后再试</span>";
				});
			};
			$("#wxOk").onclick = () => {
				closeSheet();
				render();
			};
		};
		paint();
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	var helloReopen = false;
	function openHello(reopen) {
		const H = $("#hello");
		if (!H) return;
		helloReopen = !!reopen;
		try {
			dismissKB();
		} catch (_) {}
		const ta = TODAY.split(".").map(Number), L = solarToLunar(parseKey(TODAY));
		const sub = weekCN(TODAY) + (L ? " · 农历" + (L.leap ? "闰" : "") + LM_NM[L.lm - 1] + "月" + lDayNm(L.ld) : "");
		const items = helloItems(), mems = helloMemories(), cx = helloCtx(wxCached());
		const pooled = !SET.duty && P().pooled ? P().pooled : 0;
		const lower = (items.length ? "<div class=\"hl-lab\">今天的事</div>" + items.slice(0, 5).map(helloItemHTML).join("") + (items.length > 5 ? "<div class=\"hl-none\">还有 " + (items.length - 5) + " 件 · 在今日页</div>" : "") : "") + (pooled ? "<div class=\"hl-pool\" id=\"hlPool\">之前没做完的 " + pooled + " 件，我收进了「待办池」 ›</div>" : "") + mems.map((m, i) => "<div class=\"hl-lab\">" + m.label + "</div><div class=\"hl-mem\" data-mi=\"" + i + "\"" + (i === 0 ? " id=\"hlMem\"" : "") + "><b>" + (m.label === "上个月的今天" ? fmtKey(m.k) : m.k.split(".")[0] + "年" + fmtKey(m.k)) + "</b> · " + vEsc(clipT(m.e.text, 46)) + " ›</div>").join("");
		H.innerHTML = "<div class=\"hl-body\"><div class=\"hl-top\"><div style=\"min-width:0\"><div class=\"hl-hi\">" + (cx.gap >= 7 ? "好久不见 · " : "") + helloGreet() + "</div><div class=\"hl-date\">" + ta[1] + "月" + ta[2] + "日</div><div class=\"hl-sub\">" + sub + "</div><div class=\"hl-tags\">" + helloTags().map((t) => "<span class=\"hl-tag" + (t.acc ? " acc" : "") + "\">" + vEsc(t.t) + "</span>").join("") + "</div></div><div class=\"hl-dot\">" + jjImg("nest", 76) + "</div></div><div id=\"hlWx\"></div><div class=\"hl-cheer top\" id=\"hlCheer\">" + helloCheer(cx).map(vEsc).join("<br>") + "<span>—— 啾啾</span></div><div class=\"hl-lower\">" + lower + "<button class=\"hl-go\" id=\"hlGo\">" + (reopen ? "收起" : "去写今天") + "</button></div></div>";
		H.classList.add("on");
		$("#hlGo").onclick = closeHello;
		H.querySelectorAll("[data-hid]").forEach((el) => el.onclick = () => {
			const id = +el.dataset.hid;
			closeHello();
			if (id) jumpToEntry(TODAY, id);
		});
		if ($("#hlPool")) $("#hlPool").onclick = () => {
			closeHello();
			navigationState.cur = {
				name: "agg",
				key: "someday"
			};
			render();
		};
		H.querySelectorAll(".hl-mem[data-mi]").forEach((el) => el.onclick = () => {
			const m = mems[+el.dataset.mi];
			closeHello();
			jumpToEntry(m.k, m.e._id || (m.e._id = ++appState.uid));
		});
		islandHelloGift();
		helloWxRender();
	}
	function closeHello() {
		islandHelloObserverStop();
		if (navigationState.cur.name === "postoffice" && navigationState.cur.tab !== "album") {
			navigationState.navFromBack = true;
			render();
		}
		const H = $("#hello");
		if (!H || !H.classList.contains("on")) return;
		H.classList.remove("on");
		const first = !helloReopen;
		helloReopen = false;
		helloStripRefresh();
		if (first && SET.duty) morningCheck();
	}
	function helloBoot() {
		if (!modOn("hello") || !appState.SEEN.onboard) {
			if (SET.duty) morningCheck();
			return;
		}
		if (!P().hello) {
			P().hello = 1;
			scheduleSave();
			openHello(false);
			return;
		}
		if (SET.duty) morningCheck();
		if (wxCity() && wxStale()) wxFetch().then(() => helloStripRefresh());
	}
	function helloStripRefresh() {
		const s = document.getElementById("wxPill");
		if (s) s.innerHTML = wxPillHTML();
	}
	function somedayPull(t, k) {
		if (t.state !== "someday") return;
		snapshot("从待办池捞回", TODAY, [k]);
		const copy = JSON.parse(JSON.stringify(t));
		for (const key of [
			"id",
			"updatedAt",
			"createdAt",
			"_pc",
			"doneDay",
			"finishedTime",
			"due",
			"wish",
			"badge"
		]) delete copy[key];
		const resetChildren = (rows) => (rows || []).forEach((child) => {
			delete child.id;
			delete child.updatedAt;
			delete child._pc;
			child._id = ++appState.uid;
			resetChildren(child.children);
		});
		resetChildren(copy.children);
		t.state = "migrated";
		t.badge = "→" + fmtShort(TODAY) + " 捞回";
		P().plan.push({
			...copy,
			state: "open",
			srcDay: k,
			srcId: t._id || (t._id = ++appState.uid),
			_id: ++appState.uid
		});
		scheduleSave();
	}
	function bindLifecycle() {
		platform.onVisibilityChange(() => {
			if (document.visibilityState !== "visible") {
				if (storageState.saveTm) {
					clearTimeout(storageState.saveTm);
					storageState.saveTm = null;
					saveNow();
				}
				return;
			}
			if (dkey(effNow()) !== TODAY) {
				if (storageState.saveTm) {
					clearTimeout(storageState.saveTm);
					storageState.saveTm = null;
				}
				saveNow();
				location.reload();
			}
		});
		platform.onPageHide(() => {
			if (storageState.saveTm) {
				clearTimeout(storageState.saveTm);
				storageState.saveTm = null;
				saveNow();
			}
		});
	}
	// src/modules/island/catalog.js
	var WELCOME_LETTERS = {
		"post": [
			"岛主，我是负责给你收发记录的啾啾，住在海边的信风邮局。",
			"今天要办的事、刚发生的小事，或者突然冒出来的一句话，随手发我就行；想翻从前看日历，岛上大伙儿的来信也都在我这儿收。",
			"信有点多，我再数一遍……嗯，你这封没送错。"
		],
		"food": [
			"岛主，吃过了没？我是管吃喝的阿饱，海边饭馆归我掌勺。",
			"吃着顺口的好店、刷到想尝的新馆子，还有下回不想再去的，全记我这儿；到了饭点拿不定主意，就来抽一张店卡。",
			"我先给你盛碗热汤，菜单咱们坐下慢慢看。"
		],
		"movie": [
			"我是管看电影的阿影，守着小岛影院。",
			"看过哪部片子、打几分、和谁一块儿看的，都能留这儿；散场后心里那点劲儿没过去，也能顺手写两句。白天来找我，可能得多敲两下门。",
			"晚上我一般坐在最后一排——手边这盒纸巾，是给观众备着的。"
		],
		"book": [
			"你好，我是管读书的酥酥，平时就在小岛书屋。",
			"最近在读的书、划下来的句子，还有读完的一点想法，都能搁这儿慢慢攒着，靠窗那张椅子空着，你可以坐那儿翻。",
			"桌上的黄油曲奇也能拿。……啊，我嘴角还沾着碎屑？刚那一章看得太入神，没顾上擦。"
		],
		"people": [
			"岛主好，我是替你记着亲友的团团……在茶屋头回见面，先喝口热茶吧。",
			"你常念叨的人，可以在这儿留个名字，把他们的生日、你们一块吃过的饭，还有舍不得忘的日子都收进来。",
			"我不太会招呼生客，不过你多来坐坐，下回你坐哪把椅子，我就记住了。"
		],
		"money": [
			"我是管记账的小铜板，铜板账房归我管。",
			"买菜、打车，还是路过顺手带的那杯奶茶，带上数儿记一句，月底就能看出钱花在了哪儿。你只管记，算账的活交给我。",
			"至于这笔值不值，我可不说教——我自己抽屉里也攒着几件舍不得退的小玩意儿。"
		],
		"cycles": [
			"笃、笃。岛主好，我是负责敲钟提醒的笃笃，刚给滴答钟楼上完油。",
			"生日、纪念日、还款日，还有隔几天就得办一回的琐事，都能来我这儿上发条，日子改了拨一格就好。",
			"想让手机到点真响起来，顺手把提醒连进手机日历，到点我再敲钟叫你。"
		],
		"notes": [
			"我是帮你把碎念头理成笔记的阿鼠，住在竹林边的记事小亭。",
			"你平时在「随想」里只写了一两句的想法，可以先搁我亭子的架子上，哪天想接着往下写了，挑几条出来就能理成一篇整文章。",
			"亭子晚上也留着灯，我常在里头改稿，敲门没应的话，稍等我把这句写完。"
		],
		"vault": [
			"嘘，我是替你看管密码和秘密的松松，守着这个秘屋树洞。",
			"账号、密码，还有那些总记岔的小备注，先定好主口令就能收进来，要用了再来开锁，存好以后也能随时改。",
			"我秋天藏的橡子可多了，冬天照样一颗不差找回来。门口那颗蓝玻璃珠？那个是我自己的宝贝。"
		],
		"work": [
			"岛主，我是管工作的大力，这是我的大力工坊。",
			"工作上的待办、手头项目的进度，还有开会记的几句要点，都可以扔进来，周五写周报时再一块儿翻。大木桌我已经擦干净了，大事小事都搁得下。",
			"我说话慢半拍，干活还算稳当。你先说第一件，我听着。"
		],
		"study": [
			"我是管学习的翘翘！海风学堂就在前面。",
			"课堂上划的重点、作业、错题本，还有备考时零碎记下的东西，全放我这儿就行，考前翻起来可快了。",
			"我这会儿正在背单词，要不要听我念一遍？咦，刚才卡壳那个词我突然想通了——你看，我头顶这撮毛是不是又翘起来了！"
		],
		"someday": [
			"我是替你收着心愿和延期大事小事的阿兜，住在海边灯塔。",
			"一直想学的手艺、想去逛的地方，还有眼下实在顾不上的待办，先往我这儿放就行，哪天闲下来挑一件点「今天做」就能领回去。",
			"我嘴兜地方大着呢，你慢慢攒。刚海湾漂回来的那只瓶子，也是放了好久今天才拆。"
		],
		"fun": [
			"嗯……岛主来啦。我是管吃喝玩乐的……不对，是专门替你记娱乐和消遣的小卡，守着这间温泉汤屋。",
			"看展、唱歌、打游戏，或者纯粹出去瞎逛了一下午，回来都可以在汤屋记两句，以后翻翻自己是怎么开心的。",
			"你先坐，我把头顶那颗橘子拿下来。要一块儿泡会儿吗？"
		],
		"health": [
			"岛主好，我是陪你记录身体和健康的呦呦，平时就在晨露小站。",
			"体重、身体围度、经期和每天喝了多少水，都能记在这里翻图表看变化；用不上的格子先收进抽屉，最常看的几项排到前面就行。",
			"软尺在桌肚里，水杯在窗台边。我习惯把东西放回原处，下回你来才好找。"
		]
	};
	var POSTCARD_SCENES = [
		{
			"id": "food-1",
			"owner": "food",
			"requires": ["food"],
			"title": "码头早市",
			"line": "天刚亮就来挑鱼，今天的最新鲜。晚上给你留碗鱼汤。",
			"kind": "daily",
			"image": "assets/postcards/food-1.webp",
			"thumb": "assets/postcards/food-1-thumb.webp"
		},
		{
			"id": "food-2",
			"owner": "food",
			"requires": ["food"],
			"title": "打烊后的汤面",
			"line": "打烊啦，给自己也煮一大碗。忙了一天，你吃饭了没？",
			"kind": "daily",
			"image": "assets/postcards/food-2.webp",
			"thumb": "assets/postcards/food-2-thumb.webp"
		},
		{
			"id": "food-3",
			"owner": "food",
			"requires": ["food"],
			"title": "对岸夜市",
			"line": "坐小船去对岸逛夜市，一手烤串一手糖葫芦，下回带你。",
			"kind": "travel",
			"image": "assets/postcards/food-3.webp",
			"thumb": "assets/postcards/food-3-thumb.webp"
		},
		{
			"id": "movie-1",
			"owner": "movie",
			"requires": ["movie"],
			"title": "深夜看老电影",
			"line": "最后一排没人看见……我才没哭，是银幕的光太亮了。",
			"kind": "daily",
			"image": "assets/postcards/movie-1.webp",
			"thumb": "assets/postcards/movie-1-thumb.webp"
		},
		{
			"id": "movie-2",
			"owner": "movie",
			"requires": ["movie"],
			"title": "放映室午睡",
			"line": "白天是我的晚上。胶片都理好了，天黑再放给你看。",
			"kind": "daily",
			"image": "assets/postcards/movie-2.webp",
			"thumb": "assets/postcards/movie-2-thumb.webp"
		},
		{
			"id": "movie-3",
			"owner": "movie",
			"requires": ["movie"],
			"title": "山顶露天电影",
			"line": "山顶看电影，银幕外面还有一整片星星。散场了别急着走。",
			"kind": "travel",
			"image": "assets/postcards/movie-3.webp",
			"thumb": "assets/postcards/movie-3-thumb.webp"
		},
		{
			"id": "book-1",
			"owner": "book",
			"requires": ["book"],
			"title": "晒书",
			"line": "天晴，把书一本本摊开晒太阳，翻起来暖烘烘的。",
			"kind": "daily",
			"image": "assets/postcards/book-1.webp",
			"thumb": "assets/postcards/book-1-thumb.webp"
		},
		{
			"id": "book-2",
			"owner": "book",
			"requires": ["book"],
			"title": "树下读入迷",
			"line": "读入迷了，饼干只吃了一半。嘴角有渣？等这章读完再说。",
			"kind": "daily",
			"image": "assets/postcards/book-2.webp",
			"thumb": "assets/postcards/book-2-thumb.webp"
		},
		{
			"id": "book-3",
			"owner": "book",
			"requires": ["book"],
			"title": "旧书市",
			"line": "旧书市淘到一大摞，抱得快走不动了，还想再逛一摊。",
			"kind": "travel",
			"image": "assets/postcards/book-3.webp",
			"thumb": "assets/postcards/book-3-thumb.webp"
		},
		{
			"id": "people-1",
			"owner": "people",
			"requires": ["people"],
			"title": "给老朋友留座",
			"line": "茶温着，杯子也摆好了。你常念叨的那个人，今天会来吗？",
			"kind": "daily",
			"image": "assets/postcards/people-1.webp",
			"thumb": "assets/postcards/people-1-thumb.webp"
		},
		{
			"id": "people-2",
			"owner": "people",
			"requires": ["people"],
			"title": "雨天缩在壳里",
			"line": "下雨天，我缩在壳里听雨。茶壶还热着，想来就敲门。",
			"kind": "daily",
			"image": "assets/postcards/people-2.webp",
			"thumb": "assets/postcards/people-2-thumb.webp"
		},
		{
			"id": "people-3",
			"owner": "people",
			"requires": ["people"],
			"title": "山里采新茶",
			"line": "去山里采了今年的新茶，回去泡给想念的人喝。",
			"kind": "travel",
			"image": "assets/postcards/people-3.webp",
			"thumb": "assets/postcards/people-3-thumb.webp"
		},
		{
			"id": "money-1",
			"owner": "money",
			"requires": ["money"],
			"title": "月底对账",
			"line": "账本摊了一桌，最后一笔也对上了。",
			"kind": "daily",
			"image": "assets/postcards/money-1.webp",
			"thumb": "assets/postcards/money-1-thumb.webp"
		},
		{
			"id": "money-2",
			"owner": "money",
			"requires": ["money"],
			"title": "砍价成功",
			"line": "砍价成功！一袋橘子省了两个铜板，今天也很划算。",
			"kind": "daily",
			"image": "assets/postcards/money-2.webp",
			"thumb": "assets/postcards/money-2-thumb.webp"
		},
		{
			"id": "money-3",
			"owner": "money",
			"requires": ["money"],
			"title": "跳蚤市场的怀表",
			"line": "在旧货摊挑到一只怀表，擦干净还会走。",
			"kind": "travel",
			"image": "assets/postcards/money-3.webp",
			"thumb": "assets/postcards/money-3-thumb.webp"
		},
		{
			"id": "cycles-1",
			"owner": "cycles",
			"requires": ["cycles"],
			"title": "给齿轮上油",
			"line": "给大齿轮上点油，明天的钟声会更准一点。",
			"kind": "daily",
			"image": "assets/postcards/cycles-1.webp",
			"thumb": "assets/postcards/cycles-1-thumb.webp"
		},
		{
			"id": "cycles-2",
			"owner": "cycles",
			"requires": ["cycles"],
			"title": "傍晚敲钟",
			"line": "当——敲完这一声，我也下楼吃晚饭了。",
			"kind": "daily",
			"image": "assets/postcards/cycles-2.webp",
			"thumb": "assets/postcards/cycles-2-thumb.webp"
		},
		{
			"id": "cycles-3",
			"owner": "cycles",
			"requires": ["cycles"],
			"title": "钟表博物馆",
			"line": "看到一座比钟楼还高的落地钟，仰着头听了好久它的滴答。",
			"kind": "travel",
			"image": "assets/postcards/cycles-3.webp",
			"thumb": "assets/postcards/cycles-3-thumb.webp"
		},
		{
			"id": "notes-1",
			"owner": "notes",
			"requires": ["notes"],
			"title": "灯下写稿",
			"line": "稿纸又堆高了。今天记两句，明天补两句，慢慢就成一篇。",
			"kind": "daily",
			"image": "assets/postcards/notes-1.webp",
			"thumb": "assets/postcards/notes-1-thumb.webp"
		},
		{
			"id": "notes-2",
			"owner": "notes",
			"requires": ["notes"],
			"title": "发光的小石头",
			"line": "今天挖到一颗小石头，灯一照还会发亮。",
			"kind": "daily",
			"image": "assets/postcards/notes-2.webp",
			"thumb": "assets/postcards/notes-2-thumb.webp"
		},
		{
			"id": "notes-3",
			"owner": "notes",
			"requires": ["notes"],
			"title": "慢火车采风",
			"line": "坐慢火车出门采风，窗外的风景，我一句句都记下了。",
			"kind": "travel",
			"image": "assets/postcards/notes-3.webp",
			"thumb": "assets/postcards/notes-3-thumb.webp"
		},
		{
			"id": "vault-1",
			"owner": "vault",
			"requires": ["vault"],
			"title": "清点橡子",
			"line": "橡子一颗颗排好，一颗也没少。你放进树洞的，也一样。",
			"kind": "daily",
			"image": "assets/postcards/vault-1.webp",
			"thumb": "assets/postcards/vault-1-thumb.webp"
		},
		{
			"id": "vault-2",
			"owner": "vault",
			"requires": ["vault"],
			"title": "亮晶晶的玻璃珠",
			"line": "捡到一颗玻璃珠，太阳底下亮晶晶的。嘘，这是我的新宝贝。",
			"kind": "daily",
			"image": "assets/postcards/vault-2.webp",
			"thumb": "assets/postcards/vault-2-thumb.webp"
		},
		{
			"id": "vault-3",
			"owner": "vault",
			"requires": ["vault"],
			"title": "秋天的森林",
			"line": "秋天的森林里，最漂亮的叶子和橡子，都被我先挑走啦。",
			"kind": "travel",
			"image": "assets/postcards/vault-3.webp",
			"thumb": "assets/postcards/vault-3-thumb.webp"
		},
		{
			"id": "work-1",
			"owner": "work",
			"requires": ["work"],
			"title": "开一块菜地",
			"line": "工坊边上开了块菜地，种子埋下去了，咱们慢慢等它长。",
			"kind": "daily",
			"image": "assets/postcards/work-1.webp",
			"thumb": "assets/postcards/work-1-thumb.webp"
		},
		{
			"id": "work-2",
			"owner": "work",
			"requires": ["work"],
			"title": "修岛上的小路",
			"line": "坑洼的那段小路补好了，下雨也不用绕着走。",
			"kind": "daily",
			"image": "assets/postcards/work-2.webp",
			"thumb": "assets/postcards/work-2-thumb.webp"
		},
		{
			"id": "work-3",
			"owner": "work",
			"requires": ["work"],
			"title": "扛回一根大木头",
			"line": "在山里挑到一根好木头，扛回去给工坊打张新桌子。",
			"kind": "travel",
			"image": "assets/postcards/work-3.webp",
			"thumb": "assets/postcards/work-3-thumb.webp"
		},
		{
			"id": "study-1",
			"owner": "study",
			"requires": ["study"],
			"title": "呆毛翘起来了",
			"line": "背了一上午单词卡，刚刚想通了——呆毛「啪」地翘起来！",
			"kind": "daily",
			"image": "assets/postcards/study-1.webp",
			"thumb": "assets/postcards/study-1-thumb.webp"
		},
		{
			"id": "study-2",
			"owner": "study",
			"requires": ["study"],
			"title": "外语小课",
			"line": "今天上外语课：贝壳、叶子、小帆船，大家跟我念一遍！",
			"kind": "daily",
			"image": "assets/postcards/study-2.webp",
			"thumb": "assets/postcards/study-2-thumb.webp"
		},
		{
			"id": "study-3",
			"owner": "study",
			"requires": ["study"],
			"title": "城里的图书馆",
			"line": "城里的图书馆好大，抱到一本比我还大的书！",
			"kind": "travel",
			"image": "assets/postcards/study-3.webp",
			"thumb": "assets/postcards/study-3-thumb.webp"
		},
		{
			"id": "someday-1",
			"owner": "someday",
			"requires": ["someday"],
			"title": "捞起漂流瓶",
			"line": "傍晚捞起一只漂流瓶。没空做的事也这样，先揣我兜里。",
			"kind": "daily",
			"image": "assets/postcards/someday-1.webp",
			"thumb": "assets/postcards/someday-1-thumb.webp"
		},
		{
			"id": "someday-2",
			"owner": "someday",
			"requires": ["someday"],
			"title": "灯塔顶上看星星",
			"line": "瓶子排成一排陪我看星星。里面的心愿，我都替你收着。",
			"kind": "daily",
			"image": "assets/postcards/someday-2.webp",
			"thumb": "assets/postcards/someday-2-thumb.webp"
		},
		{
			"id": "someday-3",
			"owner": "someday",
			"requires": ["someday"],
			"title": "礁石看日出",
			"line": "飞了好一阵才到这块礁石，刚好赶上日出。",
			"kind": "travel",
			"image": "assets/postcards/someday-3.webp",
			"thumb": "assets/postcards/someday-3-thumb.webp"
		},
		{
			"id": "fun-1",
			"owner": "fun",
			"requires": ["fun"],
			"title": "雨天泡汤",
			"line": "下雨天，就多泡一会儿。头顶的橘子都泡暖了。",
			"kind": "daily",
			"image": "assets/postcards/fun-1.webp",
			"thumb": "assets/postcards/fun-1-thumb.webp"
		},
		{
			"id": "fun-2",
			"owner": "fun",
			"requires": ["fun"],
			"title": "躺椅发呆",
			"line": "今天在躺椅上数海鸥，数着数着睡着了。",
			"kind": "daily",
			"image": "assets/postcards/fun-2.webp",
			"thumb": "assets/postcards/fun-2-thumb.webp"
		},
		{
			"id": "fun-3",
			"owner": "fun",
			"requires": ["fun"],
			"title": "雪地温泉",
			"line": "去山里泡雪地温泉，雪花落在毛巾上，一点也不冷。",
			"kind": "travel",
			"image": "assets/postcards/fun-3.webp",
			"thumb": "assets/postcards/fun-3-thumb.webp"
		},
		{
			"id": "story-1",
			"owner": "food",
			"requires": [
				"food",
				"book",
				"money"
			],
			"title": "黄油曲奇悬案",
			"line": "嘘，这盘曲奇别告诉小铜板……啊，他已经在门口了。（阿饱寄）",
			"kind": "story",
			"image": "assets/postcards/story-1.webp",
			"thumb": "assets/postcards/story-1-thumb.webp"
		},
		{
			"id": "story-2",
			"owner": "work",
			"requires": ["work", "someday"],
			"title": "卸压好搭档",
			"line": "箱子太多抱不过来，阿兜张开大嘴，一下接走了一半。（大力寄）",
			"kind": "story",
			"image": "assets/postcards/story-2.webp",
			"thumb": "assets/postcards/story-2-thumb.webp"
		},
		{
			"id": "story-3",
			"owner": "fun",
			"requires": ["cycles", "fun"],
			"title": "快慢反差萌",
			"line": "笃笃说站一会儿就走，结果陪我看完了整场晚霞。（小卡寄）",
			"kind": "story",
			"image": "assets/postcards/story-3.webp",
			"thumb": "assets/postcards/story-3-thumb.webp"
		},
		{
			"id": "story-4",
			"owner": "notes",
			"requires": ["movie", "notes"],
			"title": "深夜亮灯同盟",
			"line": "阿影讲老电影讲到哭，非说是海风太大。我都记下来了。（阿鼠寄）",
			"kind": "story",
			"image": "assets/postcards/story-4.webp",
			"thumb": "assets/postcards/story-4-thumb.webp"
		},
		{
			"id": "story-5",
			"owner": "post",
			"requires": ["post", "vault"],
			"title": "迷路小冤家",
			"line": "又在树洞口撞上松松！信和橡子撒了一地，捡了好半天。（啾啾寄）",
			"kind": "story",
			"image": "assets/postcards/story-5.webp",
			"thumb": "assets/postcards/story-5-thumb.webp"
		},
		{
			"id": "story-6",
			"owner": "people",
			"requires": ["people"],
			"title": "千日茶话会",
			"line": "茶泡好了，大家带着点心过来，坐满了一桌。",
			"kind": "story",
			"image": "assets/postcards/story-6.webp",
			"thumb": "assets/postcards/story-6-thumb.webp"
		},
		{
			"id": "health-1",
			"owner": "health",
			"requires": ["health"],
			"title": "门前的早晨",
			"line": "称完了，把秤收好。门口的花今天开了。",
			"kind": "daily",
			"image": "assets/postcards/health-1.webp",
			"thumb": "assets/postcards/health-1-thumb.webp"
		},
		{
			"id": "health-2",
			"owner": "health",
			"requires": ["health"],
			"title": "窗边量一量",
			"line": "软尺用完卷起来，放回抽屉里。",
			"kind": "daily",
			"image": "assets/postcards/health-2.webp",
			"thumb": "assets/postcards/health-2-thumb.webp"
		},
		{
			"id": "health-3",
			"owner": "health",
			"requires": ["health"],
			"title": "雨天翻手帐",
			"line": "外面下着雨，刚好坐下来翻翻这几页。",
			"kind": "daily",
			"image": "assets/postcards/health-3.webp",
			"thumb": "assets/postcards/health-3-thumb.webp"
		},
		{
			"id": "health-4",
			"owner": "health",
			"requires": ["health"],
			"title": "被窝里的晚安",
			"line": "水杯放床头，手帐也合上了。今晚先到这里。",
			"kind": "daily",
			"image": "assets/postcards/health-4.webp",
			"thumb": "assets/postcards/health-4-thumb.webp"
		}
	];
	WELCOME_LETTERS.abu = [
		"岛主好，我是替你看家的阿卜，就住在你自己的岛主小筑里。别的小屋忙着替你打理吃喝玩乐和日常琐事，只有这间屋子，是留给你安安静静认识自己的地方。",
		"把你的出生时辰和出生地交给我吧，我会连同你的八字、身强身弱、星座和各种性格小测试，一起妥帖收进抽屉里。",
		"不用急着给自己贴标签，我背着壳慢吞吞地陪你，一点点看清自己本来是什么样。"
	];
	POSTCARD_SCENES.push(...[
		{
			"id": "abu-2",
			"owner": "abu",
			"requires": ["abu"],
			"title": "树下慢慢勾选",
			"line": "不用急着给自己贴标签，慢慢勾选，看看今天又认出了怎样的自己。",
			"kind": "daily",
			"image": "assets/postcards/abu-2.webp",
			"thumb": "assets/postcards/abu-2-thumb.webp"
		},
		{
			"id": "abu-3",
			"owner": "abu",
			"requires": ["abu"],
			"title": "雨天来信",
			"line": "外面下雨也没关系，屋檐下永远有盏灯，替你好好读完每一句心事。",
			"kind": "daily",
			"image": "assets/postcards/abu-3.webp",
			"thumb": "assets/postcards/abu-3-thumb.webp"
		},
		{
			"id": "abu-4",
			"owner": "abu",
			"requires": ["abu"],
			"title": "夜晚观星",
			"line": "你出生那晚的星光和风向，我都替你记在小本子里了，随时回来看看。",
			"kind": "daily",
			"image": "assets/postcards/abu-4.webp",
			"thumb": "assets/postcards/abu-4-thumb.webp"
		}
	]);
	var ISLAND_OWNERS = [
		"post",
		"health",
		"abu",
		"food",
		"movie",
		"book",
		"people",
		"money",
		"cycles",
		"notes",
		"vault",
		"work",
		"study",
		"someday",
		"fun"
	];
	var POSTCARDS = ISLAND_OWNERS.map((k) => ({
		id: k + "-welcome",
		owner: k,
		requires: [k],
		kind: "welcome",
		title: k === "abu" ? "很高兴认识你，岛主" : HOUSE_INFO[k].name + "的第一封信",
		line: WELCOME_LETTERS[k].join("\n\n"),
		image: k === "abu" ? "assets/postcards/abu-welcome.webp" : HEAD_ART[k],
		thumb: k === "abu" ? "assets/postcards/abu-welcome-thumb.webp" : HEAD_ART[k]
	})).concat(POSTCARD_SCENES);
	// src/modules/island/index.js
	var ISLAND_ZOOM = 1;
	var ISLAND_SELECTED = "health";
	var ISLAND_HELLO_OBSERVER = null;
	function islandToday() {
		const a = TODAY.split(".").map(Number);
		return Math.floor(Date.UTC(a[0], a[1] - 1, a[2]) / 864e5);
	}
	function islandDate(n) {
		const d = /* @__PURE__ */ new Date(n * 864e5);
		return d.getUTCFullYear() + "." + (d.getUTCMonth() + 1) + "." + d.getUTCDate();
	}
	function islandOpen(k) {
		return [
			"post",
			"cycles",
			"someday"
		].includes(k) || isleOn(k);
	}
	function islandRoster() {
		return ISLAND_OWNERS.filter(islandOpen);
	}
	function islandGo(name, tab) {
		navigationState.cur = {
			name,
			tab
		};
		render();
	}
	function islandCard(id) {
		return POSTCARDS.find((c) => c.id === id);
	}
	function islandArrived(id) {
		return appState.ISLAND.inbox.find((r) => r.id === id) || appState.ISLAND.album.find((r) => r.id === id);
	}
	function islandCommit() {
		scheduleSave();
		saveNow();
		islandMailboxBadge();
	}
	function islandMailboxBadge() {
		if (navigationState.cur.name !== "today") {
			reviewBtn.classList.remove("mailbox-unread");
			reviewBtn.removeAttribute("aria-label");
			return;
		}
		const n = islandUnread(appState.ISLAND);
		reviewBtn.textContent = "✉ 信箱";
		reviewBtn.classList.toggle("mailbox-unread", n > 0);
		reviewBtn.setAttribute("aria-label", n ? "信箱，" + n + " 条未读消息" : "信箱，无未读消息");
	}
	function islandMailboxPrepare() {
		let changed = islandSyncMessages(appState.ISLAND);
		if (appState.SEEN.onboard) changed = islandSystemMessage(appState.ISLAND, "system:mailbox-351", islandToday(), "信箱搬到首页了", "首页右上角现在可以打开信箱。岛民来信和系统消息都放在这里，点开一封才会标记为已读。\n\n明信片看过以后仍可以收藏；已收藏的卡片也保留来信记录。早安卡依然是当天打开才有，错过的日子不补发。\n\n晚间复盘移到了侧栏的「更多」里。") || changed;
		if (changed) islandCommit();
		islandMailboxBadge();
	}
	function islandReadCard(id) {
		if (islandReadMessage(appState.ISLAND, "card:" + id)) islandCommit();
	}
	function islandHelloObserverStop() {
		if (ISLAND_HELLO_OBSERVER) {
			ISLAND_HELLO_OBSERVER.disconnect();
			ISLAND_HELLO_OBSERVER = null;
		}
	}
	function islandHelloSeen(block, id) {
		islandHelloObserverStop();
		if (!("IntersectionObserver" in window)) return;
		ISLAND_HELLO_OBSERVER = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting) && $("#hello").classList.contains("on") && block.isConnected) {
				islandReadCard(id);
				islandHelloObserverStop();
				if (navigationState.cur.name === "postoffice" && navigationState.cur.tab !== "album") {
					navigationState.navFromBack = true;
					render();
				}
			}
		}, { threshold: 1 });
		ISLAND_HELLO_OBSERVER.observe(block.querySelector("h3"));
	}
	function renderMailMessage() {
		topTitle.textContent = "消息";
		reviewBtn.textContent = "回今日";
		const m = appState.ISLAND.messages.find((m) => m.id === navigationState.cur.id && m.kind === "system");
		const d = document.createElement("article");
		d.className = "postcard-detail";
		if (!m) {
			d.textContent = "这条消息没有找到。";
			view.appendChild(d);
			return;
		}
		if (islandReadMessage(appState.ISLAND, m.id)) islandCommit();
		d.innerHTML = "<div class=\"postcard-from\"><span>啾啾岛 · 系统消息</span><small>" + islandDate(m.day) + "</small></div><div class=\"postcard-letter\"><h2>" + vEsc(m.title) + "</h2><p class=\"mail-system-body\">" + vEsc(m.body) + "</p></div><button class=\"chip\" id=\"mailMessageBack\">回信箱</button>";
		view.appendChild(d);
		$("#mailMessageBack").onclick = () => {
			navigationState.cur = {
				name: "postoffice",
				tab: "inbox",
				key: "system"
			};
			render();
		};
	}
	function islandNav(active) {
		const d = document.createElement("div");
		d.className = "island-nav";
		[
			["island", "逛岛"],
			["inbox", "信箱" + (islandUnread(appState.ISLAND) ? " · " + islandUnread(appState.ISLAND) : "")],
			["album", "明信片册"],
			["cal", "日历"]
		].forEach(([key, label]) => {
			const b = document.createElement("button");
			b.className = "chip" + (key === active ? " on" : "");
			b.textContent = label;
			b.setAttribute("aria-current", key === active ? "page" : "false");
			b.onclick = () => key === "cal" ? islandGo("cal") : key === "island" ? islandGo("panorama") : islandGo("postoffice", key);
			d.appendChild(b);
		});
		return d;
	}
	function islandDoor(k) {
		if (!islandOpen(k)) {
			isleSet(k, true);
			islandCommit();
		}
		if (k === "post") islandGo("postoffice", "inbox");
		else if (k === "cycles") islandGo("cycles");
		else if (k === "someday") {
			navigationState.cur = {
				name: "agg",
				key: "someday"
			};
			render();
		} else isleGo(k);
	}
	function islandVisitLine(k) {
		const scenes = POSTCARD_SCENES.filter((c) => c.owner === k && c.kind === "daily");
		if (!scenes.length) return HOUSE_INFO[k].line;
		return scenes[islandHash(k + "|" + islandToday()) % scenes.length].line;
	}
	function renderPanorama() {
		topTitle.textContent = "全景";
		reviewBtn.textContent = "回今日";
		view.appendChild(islandNav("island"));
		const d = document.createElement("section");
		d.className = "island-page";
		const night = (/* @__PURE__ */ new Date()).getHours() >= 19 || (/* @__PURE__ */ new Date()).getHours() < 6;
		const plots = {
			...OB_PLOT,
			health: OB_PLOT.e1,
			abu: OB_PLOT.e2,
			post: [
				OB_PLAZA[0],
				OB_PLAZA[1],
				290
			]
		};
		delete plots.e1;
		delete plots.e2;
		const buttons = Object.keys(plots).sort((a, b) => plots[a][1] - plots[b][1]).map((k) => {
			const [x, y, w] = plots[k], on = islandOpen(k), h = HOUSE_INFO[k];
			return "<button class=\"island-house " + (on ? "built" : "unbuilt") + (ISLAND_SELECTED === k ? " selected" : "") + "\" data-island-house=\"" + k + "\" aria-label=\"" + h.name + "，" + h.who + (on ? "" : "，未开启") + "\" aria-pressed=\"" + (ISLAND_SELECTED === k) + "\" style=\"left:" + x / 1086 * 100 + "%;top:" + y / 1448 * 100 + "%;width:" + w / 1086 * 100 + "%\"><img draggable=\"false\" src=\"" + (on ? k === "abu" ? "assets/ui/abu-map.webp" : HEAD_ART[k] : OBIMG.sign) + "\" alt=\"\"><span>" + h.name + "</span>" + (appState.ISLAND.messages.some((m) => m.kind === "card" && !m.read && islandCard(m.cardId)?.owner === k) ? "<i class=\"island-mail-dot\" aria-label=\"有来信\">✉</i>" : "") + "</button>";
		}).join("");
		d.innerHTML = "<div class=\"island-heading\"><div><b>岛上的" + (night ? "夜晚" : "今天") + "</b><small>点建筑选住户，放大后可以拖动地图</small></div><div class=\"island-zoom\"><button id=\"islandZoomOut\" aria-label=\"缩小地图\">−</button><output id=\"islandZoomValue\">" + Math.round(ISLAND_ZOOM * 100) + "%</output><button id=\"islandZoomIn\" aria-label=\"放大地图\">＋</button></div></div><div class=\"island-viewport\" id=\"islandViewport\" tabindex=\"0\" aria-label=\"全景岛地图，可滚动\"><div class=\"island-world " + (night ? "night" : "") + "\" style=\"width:" + ISLAND_ZOOM * 100 + "%\"><img class=\"island-ground\" src=\"" + OBIMG.ob_isle + "\" alt=\"岛上的道路、草地和码头\" draggable=\"false\">" + buttons + "</div></div><div id=\"islandVisitor\" aria-live=\"polite\"></div><details class=\"island-house-list\"><summary>按建筑查看</summary><div>" + ISLAND_OWNERS.map((k) => "<button class=\"chip\" data-island-list=\"" + k + "\">" + HOUSE_INFO[k].name + "</button>").join("") + "</div></details>";
		view.appendChild(d);
		const select = (k) => {
			ISLAND_SELECTED = k;
			d.querySelectorAll("[data-island-house]").forEach((b) => {
				b.classList.toggle("selected", b.dataset.islandHouse === k);
				b.setAttribute("aria-pressed", b.dataset.islandHouse === k ? "true" : "false");
			});
			islandVisitor();
		};
		d.querySelectorAll("[data-island-house]").forEach((b) => b.onclick = () => select(b.dataset.islandHouse));
		d.querySelectorAll("[data-island-list]").forEach((b) => b.onclick = () => {
			select(b.dataset.islandList);
			$("#islandVisitor").scrollIntoView({
				block: "nearest",
				behavior: "smooth"
			});
		});
		const vp = $("#islandViewport"), world = vp.firstElementChild;
		const zoom = (step) => {
			const x = (vp.scrollLeft + vp.clientWidth / 2) / world.clientWidth, y = (vp.scrollTop + vp.clientHeight / 2) / world.clientHeight;
			ISLAND_ZOOM = Math.max(1, Math.min(2, +(ISLAND_ZOOM + step).toFixed(2)));
			world.style.width = ISLAND_ZOOM * 100 + "%";
			$("#islandZoomValue").textContent = Math.round(ISLAND_ZOOM * 100) + "%";
			vp.scrollLeft = x * world.clientWidth - vp.clientWidth / 2;
			vp.scrollTop = y * world.clientHeight - vp.clientHeight / 2;
			syncZoom();
		};
		const syncZoom = () => {
			$("#islandZoomOut").disabled = ISLAND_ZOOM <= 1;
			$("#islandZoomIn").disabled = ISLAND_ZOOM >= 2;
		};
		syncZoom();
		$("#islandZoomOut").onclick = () => zoom(-.25);
		$("#islandZoomIn").onclick = () => zoom(.25);
		let drag = null, dragged = false;
		vp.onpointerdown = (e) => {
			if (e.pointerType !== "mouse" || e.button !== 0) return;
			drag = {
				x: e.clientX,
				y: e.clientY,
				l: vp.scrollLeft,
				t: vp.scrollTop
			};
			dragged = false;
		};
		vp.onpointermove = (e) => {
			if (!drag) return;
			const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
			if (Math.abs(dx) + Math.abs(dy) > 5) {
				dragged = true;
				vp.scrollLeft = drag.l - dx;
				vp.scrollTop = drag.t - dy;
				e.preventDefault();
			}
		};
		vp.onpointerup = () => {
			drag = null;
		};
		vp.onpointerleave = () => {
			drag = null;
		};
		vp.addEventListener("click", (e) => {
			if (dragged) {
				e.stopPropagation();
				e.preventDefault();
				dragged = false;
			}
		}, true);
		islandVisitor();
	}
	function islandVisitor() {
		const k = ISLAND_SELECTED, h = HOUSE_INFO[k], on = islandOpen(k), box = $("#islandVisitor");
		if (!box) return;
		box.innerHTML = "<div class=\"island-visitor\"><img src=\"" + (k === "abu" ? "assets/ui/abu-face.webp" : HEAD_ART[k]) + "\" alt=\"" + h.who + "\"><div><small>" + h.name + "</small><h3>" + h.who + "</h3><p id=\"islandSpeech\">" + vEsc(on ? islandVisitLine(k) : "这里还没开启。搬进来后，就能使用这栋房子。") + "</p><div class=\"island-actions\"><button class=\"chip on\" id=\"islandEnter\">" + (on ? "进入" + h.name : "开启这栋房子") + "</button><button class=\"chip\" id=\"islandChat\" " + (on ? "" : "disabled") + ">打个招呼</button><button class=\"chip\" id=\"islandCards\">看明信片</button></div></div></div>";
		$("#islandEnter").onclick = () => islandDoor(k);
		$("#islandChat").onclick = () => {
			$("#islandSpeech").textContent = h.who + "：" + HOUSE_INFO[k].line;
		};
		$("#islandCards").onclick = () => {
			navigationState.cur = {
				name: "postoffice",
				tab: "album",
				key: k
			};
			render();
		};
	}
	function postcardName(text, who) {
		const i = text.indexOf(who);
		return i < 0 ? vEsc(text) : vEsc(text.slice(0, i)) + "<strong class=\"resident-name\">" + vEsc(who) + "</strong>" + vEsc(text.slice(i + who.length));
	}
	function postcardParagraphs(c) {
		return c.line.split("\n\n").map((t) => "<p>" + postcardName(t, HOUSE_INFO[c.owner].who) + "</p>").join("");
	}
	function postcardMedia(c, thumb) {
		return "<div class=\"postcard-media " + (c.kind === "welcome" && c.owner !== "abu" ? "welcome" : "") + "\"><img " + (thumb ? "loading=\"lazy\"" : "") + " src=\"" + (thumb ? c.thumb : c.image) + "\" alt=\"" + vEsc(c.title) + "\"><div class=\"postcard-image-error\" hidden><span>图片还没加载，来信和收藏都在。</span><button class=\"chip\" data-image-retry>重新加载图片</button></div></div>";
	}
	function postcardBindImages(root) {
		root.querySelectorAll(".postcard-media").forEach((box) => {
			const im = box.querySelector("img"), msg = box.querySelector(".postcard-image-error");
			const fail = () => {
				im.hidden = true;
				msg.hidden = false;
			};
			im.onerror = fail;
			im.onload = () => {
				im.hidden = false;
				msg.hidden = true;
			};
			if (im.complete && !im.naturalWidth) fail();
			const retry = box.querySelector("[data-image-retry]");
			if (retry) retry.onclick = () => {
				msg.hidden = true;
				im.hidden = false;
				im.src = im.getAttribute("src");
			};
		});
	}
	function renderPostoffice() {
		topTitle.textContent = "信箱";
		reviewBtn.textContent = "回今日";
		const header = letterHouseHead("post");
		header.querySelector("p").textContent = "啾啾：新来的信放在上面，看过的也替你留着。";
		view.appendChild(header);
		const tab = navigationState.cur.tab === "album" ? "album" : "inbox";
		view.appendChild(islandNav(tab));
		const section = document.createElement("section");
		section.className = "postoffice";
		if (tab === "inbox") {
			const filter = [
				"all",
				"card",
				"system"
			].includes(navigationState.cur.key) ? navigationState.cur.key : "all";
			section.innerHTML = "<div class=\"island-heading mail-heading\"><div><b>信箱</b><small>" + islandUnread(appState.ISLAND) + " 条未读 · " + islandVisibleMessages(appState.ISLAND).length + " 条消息</small></div><div class=\"island-actions\"><button class=\"chip\" id=\"mailToday\">今天的早安卡</button><button class=\"chip\" id=\"mailSettings\">来信设置</button></div></div><div class=\"mail-filters\" role=\"group\" aria-label=\"消息分类\">" + [
				["all", "全部"],
				["card", "岛民来信"],
				["system", "系统消息"]
			].map(([k, label]) => "<button class=\"chip" + (filter === k ? " on" : "") + "\" data-mail-filter=\"" + k + "\" aria-pressed=\"" + (filter === k) + "\">" + label + "</button>").join("") + "</div>";
			if (!appState.ISLAND.enabled) section.innerHTML += "<p class=\"postcard-note\">已暂停早安明信片，系统消息仍可接收，已有的信和收藏保留。</p>";
			const messages = islandVisibleMessages(appState.ISLAND, filter);
			if (!messages.length) section.innerHTML += "<div class=\"postcard-empty\">" + jjImg("nest", 72) + "<p>" + (filter === "system" ? "暂时没有系统消息。" : filter === "card" ? "暂时没有岛民来信。" : "信箱里暂时没有消息。") + "</p><small>当天打开早安卡，会收到一张明信片。</small><button class=\"chip\" id=\"mailToAlbum\">翻翻明信片册</button></div>";
			for (const m of messages) {
				const c = m.kind === "card" ? islandCard(m.cardId) : null, b = document.createElement("button");
				b.className = (m.kind === "card" ? "postcard-envelope" : "mail-system-envelope") + " mail-envelope" + (m.read ? "" : " unread");
				if (m.kind === "card") b.dataset.openCard = m.cardId;
				else b.dataset.openMessage = m.id;
				const title = m.kind === "system" ? m.title : c ? c.title : "一张明信片";
				const from = m.kind === "system" ? "系统消息" : c ? HOUSE_INFO[c.owner].who + "寄来" : "岛民来信";
				const state = m.kind === "system" ? m.read ? "已读" : "查看消息 →" : appState.ISLAND.album.some((r) => r.id === m.cardId) ? "已收藏" : m.read ? "已读 · 待收藏" : "拆开看看 →";
				b.setAttribute("aria-label", (m.read ? "" : "未读，") + title + "，" + state);
				b.innerHTML = (c ? "<img src=\"" + (c.owner === "abu" ? "assets/ui/abu-face.webp" : HEAD_ART[c.owner]) + "\" alt=\"\">" : "<span class=\"mail-system-icon\" aria-hidden=\"true\">✉</span>") + "<span class=\"mail-envelope-text\"><small>" + vEsc(from) + " · " + islandDate(m.day) + "</small><b>" + vEsc(title) + "</b><em>" + state + "</em></span>" + (!m.read ? "<i class=\"mail-unread-dot\" aria-hidden=\"true\"></i>" : "");
				section.appendChild(b);
			}
			const actions = document.createElement("div");
			actions.className = "mail-bulk-actions";
			const pending = appState.ISLAND.inbox.length, read = appState.ISLAND.messages.filter((m) => m.read && !m.deleted).length;
			actions.innerHTML = "<div class=\"island-actions\"><button class=\"chip primary-action\" id=\"mailCollectAll\" " + (pending ? "" : "disabled") + ">一键领取" + (pending ? "（" + pending + "）" : "") + "</button><button class=\"chip\" id=\"mailDeleteRead\" " + (read ? "" : "disabled") + ">删除已读" + (read ? "（" + read + "）" : "") + "</button></div><small>操作全部分类；删除消息不影响明信片，未领取的仍可领取。</small>";
			view.classList.add("mailbox-view");
			document.getElementById("phone").appendChild(actions);
			actions.querySelector("#mailCollectAll").onclick = () => {
				const n = islandCollectAll(appState.ISLAND, islandToday());
				if (n) {
					islandCommit();
					navigationState.navFromBack = true;
					render();
					toast("已领取 " + n + " 张明信片");
				}
			};
			actions.querySelector("#mailDeleteRead").onclick = () => {
				const n = islandDeleteRead(appState.ISLAND);
				if (n) {
					islandCommit();
					navigationState.navFromBack = true;
					render();
					toast("已删除 " + n + " 条已读消息，明信片保留");
				}
			};
			section.querySelectorAll("[data-mail-filter]").forEach((b) => b.onclick = () => {
				navigationState.cur.key = b.dataset.mailFilter;
				navigationState.navFromBack = true;
				render();
			});
			section.querySelectorAll("[data-open-message]").forEach((b) => b.onclick = () => {
				navigationState.cur = {
					name: "mailmessage",
					id: b.dataset.openMessage
				};
				render();
			});
		} else {
			section.innerHTML = "<div class=\"island-heading\"><div><b>明信片册</b><small>已收藏 " + appState.ISLAND.album.filter((r) => islandCard(r.id)).length + " / " + POSTCARDS.length + " 张</small></div></div><label class=\"postcard-filter\">翻谁的来信 <select id=\"postcardOwner\"><option value=\"all\">全部岛民</option>" + ISLAND_OWNERS.map((k) => "<option value=\"" + k + "\">" + HOUSE_INFO[k].who + "</option>").join("") + "<option value=\"story\">岛上的小故事</option></select></label>";
			const owner = ISLAND_OWNERS.includes(navigationState.cur.key) || navigationState.cur.key === "story" ? navigationState.cur.key : "all";
			const cards = POSTCARDS.filter((c) => owner === "all" || (owner === "story" ? c.kind === "story" : c.owner === owner));
			const receivedById = new Map(appState.ISLAND.album.map((r, i) => [r.id, {
				...r,
				order: i
			}]));
			const waitingById = new Map(appState.ISLAND.inbox.map((r, i) => [r.id, {
				...r,
				order: i
			}]));
			cards.sort((a, b) => {
				const x = receivedById.get(a.id), y = receivedById.get(b.id);
				if (x && y) return y.collectedDay - x.collectedDay || y.order - x.order;
				if (x || y) return x ? -1 : 1;
				const u = waitingById.get(a.id), v = waitingById.get(b.id);
				return u && v ? v.day - u.day || v.order - u.order : u ? -1 : v ? 1 : 0;
			});
			const grid = document.createElement("div");
			grid.className = "postcard-grid";
			grid.id = "albumReceived";
			const pendingGrid = document.createElement("div");
			pendingGrid.className = "postcard-grid";
			pendingGrid.id = "albumPending";
			const lockedGrid = document.createElement("div");
			lockedGrid.className = "postcard-grid";
			for (const c of cards) {
				const received = appState.ISLAND.album.find((r) => r.id === c.id), waiting = appState.ISLAND.inbox.some((r) => r.id === c.id), b = document.createElement("button");
				b.className = "postcard-tile" + (received ? "" : " locked");
				b.dataset.openCard = c.id;
				b.innerHTML = received ? postcardMedia(c, true) + "<b>" + vEsc(c.title) + "</b><small>" + HOUSE_INFO[c.owner].who + " · " + islandDate(received.collectedDay) + " 领取</small>" : "<div class=\"postcard-unknown\">" + (waiting ? "✉" : "?") + "</div><b>" + vEsc(c.title) + "</b><small>" + (waiting ? "已到信箱，待收藏" : c.id === "abu-welcome" ? "初次进岛主小筑时寄来" : c.requires.every(islandOpen) ? "等一封来信" : "住户开启后可随早安卡寄来") + "</small>";
				(received ? grid : waiting ? pendingGrid : lockedGrid).appendChild(b);
			}
			section.appendChild(sectionLabel("已领取 · 最近领取优先"));
			section.appendChild(grid);
			if (!grid.children.length) {
				const tip = document.createElement("p");
				tip.className = "postcard-note";
				tip.textContent = "还没有领取的明信片。";
				section.appendChild(tip);
			}
			if (pendingGrid.children.length) {
				section.appendChild(sectionLabel("待领取"));
				section.appendChild(pendingGrid);
			}
			if (lockedGrid.children.length) {
				const fold = document.createElement("details");
				fold.className = "album-unreceived";
				const title = document.createElement("summary");
				title.textContent = "未获得的明信片（" + lockedGrid.children.length + "）";
				fold.append(title, lockedGrid);
				section.appendChild(fold);
			}
			section.querySelector("#postcardOwner").value = owner;
			section.querySelector("#postcardOwner").onchange = (e) => {
				navigationState.cur.key = e.target.value;
				navigationState.navFromBack = true;
				render();
			};
		}
		view.appendChild(section);
		postcardBindImages(section);
		section.querySelectorAll("[data-open-card]").forEach((b) => b.onclick = () => {
			const id = b.dataset.openCard;
			if (islandArrived(id)) {
				navigationState.cur = {
					name: "postcard",
					id
				};
				render();
			} else {
				const c = islandCard(id);
				toast(c.id === "abu-welcome" ? "第一次去岛主小筑时，阿卜会寄来这封信。" : c.requires.every(islandOpen) ? "这张还没收到，每天打开早安卡看看" : c.requires.filter((k) => !islandOpen(k)).map((k) => HOUSE_INFO[k].who).join("、") + "开启后可随早安卡寄来");
			}
		});
		if ($("#mailToday")) $("#mailToday").onclick = () => openHello(true);
		if ($("#mailSettings")) $("#mailSettings").onclick = islandMailSettings;
		if ($("#mailToAlbum")) $("#mailToAlbum").onclick = () => islandGo("postoffice", "album");
	}
	function renderPostcard() {
		const c = islandCard(navigationState.cur.id), r = islandArrived(navigationState.cur.id);
		topTitle.textContent = "来信";
		reviewBtn.textContent = "回今日";
		if (!c || !r) {
			const p = document.createElement("p");
			p.className = "postcard-note";
			p.textContent = "这封信还没收到，回信箱看看吧。";
			view.appendChild(p);
			return;
		}
		islandReadCard(c.id);
		const pending = appState.ISLAND.inbox.some((x) => x.id === c.id), d = document.createElement("article");
		d.className = "postcard-detail";
		d.innerHTML = "<div class=\"postcard-from\"><span>FROM · " + HOUSE_INFO[c.owner].who + "</span><small>" + islandDate(r.day) + "</small></div>" + postcardMedia(c, false) + "<div class=\"postcard-letter\"><small>" + {
			welcome: "搬来岛上的第一封信",
			story: "岛上的小故事",
			travel: "岛外的小旅行",
			daily: "岛上的日子"
		}[c.kind] + "</small><h2>" + vEsc(c.title) + "</h2>" + postcardParagraphs(c) + "<div class=\"postcard-sign\">—— <strong class=\"resident-name\">" + HOUSE_INFO[c.owner].who + "</strong></div></div><div class=\"island-actions\"><button class=\"rv-confirm\" id=\"postcardCollect\" " + (pending ? "" : "disabled") + ">" + (pending ? "收进明信片册" : "已收藏") + "</button><button class=\"chip\" id=\"postcardShare\">保存分享图</button><button class=\"chip\" id=\"postcardBack\">" + (pending ? "回信箱" : "回明信片册") + "</button></div><p id=\"postcardShareStatus\" class=\"postcard-note\" role=\"status\"></p><div id=\"postcardShareResult\"></div>";
		view.appendChild(d);
		postcardBindImages(d);
		$("#postcardCollect").onclick = () => {
			if (islandCollect(appState.ISLAND, c.id, islandToday())) {
				islandCommit();
				navigationState.navFromBack = true;
				render();
				toast("已收进明信片册");
			}
		};
		$("#postcardBack").onclick = () => {
			navigationState.cur = {
				name: "postoffice",
				tab: pending ? "inbox" : "album",
				key: c.owner
			};
			render();
		};
		$("#postcardShare").onclick = () => postcardShare(c, r);
	}
	async function postcardShare(c, r) {
		const status = $("#postcardShareStatus"), button = $("#postcardShare");
		button.disabled = true;
		status.textContent = "正在制作分享图…";
		try {
			const im = new Image();
			im.src = c.image;
			await im.decode();
			const canvas = document.createElement("canvas");
			canvas.width = 1080;
			let cx = canvas.getContext("2d");
			cx.font = "28px sans-serif";
			const lines = [];
			for (const [i, para] of c.line.split("\n\n").entries()) {
				if (i) lines.push("");
				let line = "";
				for (const ch of para) {
					if (cx.measureText(line + ch).width > 950) {
						lines.push(line);
						line = "";
					}
					line += ch;
				}
				if (line) lines.push(line);
			}
			canvas.height = Math.max(1160, 862 + (lines.length - 1) * 43 + 165);
			cx = canvas.getContext("2d");
			cx.fillStyle = "#f8f1e5";
			cx.fillRect(0, 0, 1080, canvas.height);
			const ratio = Math.min(960 / im.width, 640 / im.height), w = im.width * ratio, h = im.height * ratio;
			cx.drawImage(im, (1080 - w) / 2, 55 + (640 - h) / 2, w, h);
			cx.fillStyle = "#887963";
			cx.font = "24px sans-serif";
			cx.fillText("啾啾岛来信 · " + islandDate(r.day), 60, 740);
			cx.fillStyle = "#423a2e";
			cx.font = "36px serif";
			cx.fillText(c.title, 60, 800);
			cx.font = "28px sans-serif";
			let y = 862;
			const who = HOUSE_INFO[c.owner].who;
			for (const line of lines) {
				const i = line.indexOf(who);
				cx.fillStyle = "#423a2e";
				if (i < 0) cx.fillText(line, 60, y);
				else {
					const before = line.slice(0, i), after = line.slice(i + who.length), x = 60 + cx.measureText(before).width;
					cx.fillText(before, 60, y);
					cx.fillStyle = "#a64b35";
					cx.fillText(who, x, y);
					cx.fillStyle = "#423a2e";
					cx.fillText(after, x + cx.measureText(who).width, y);
				}
				y += 43;
			}
			cx.font = "26px serif";
			cx.textAlign = "right";
			cx.fillStyle = "#a64b35";
			cx.fillText("—— " + who, 1020, canvas.height - 100);
			cx.font = "20px sans-serif";
			cx.fillStyle = "#887963";
			cx.fillText("啾啾岛 Jotbird", 1020, canvas.height - 40);
			const blob = await new Promise((resolve, reject) => canvas.toBlob((b) => b ? resolve(b) : reject(Error("image")), "image/png"));
			const url = URL.createObjectURL(blob), a = document.createElement("a");
			a.href = url;
			a.download = "啾啾岛-" + c.id + ".png";
			a.textContent = "下载分享图";
			a.className = "chip";
			const result = $("#postcardShareResult");
			result.replaceChildren(a);
			const preview = document.createElement("img");
			preview.src = url;
			preview.alt = "分享图预览";
			preview.style.width = "100%";
			result.appendChild(preview);
			a.click();
			status.textContent = "分享图已生成，也可以长按下方图片保存。";
			setTimeout(() => URL.revokeObjectURL(url), 3e5);
		} catch (_) {
			status.textContent = location.protocol === "file:" ? "浏览器限制了本地图片导出。上传完整文件夹到 GitHub Pages 后即可使用分享图；来信仍可正常查看。" : "图片暂时没加载成功，联网后再试。";
		} finally {
			button.disabled = false;
		}
	}
	function islandMailSettings() {
		const s = healthSheet("来信设置", "<p>当天首次打开早安卡，附一张明信片；再次打开还是当天那张。没打开的日期不发，也不补发。</p><p>先送未收到过的卡，当前可送的都收齐后会重逢旧卡，收藏不重复增加。暂停或关闭早安卡时不自动发；手动打开当天早安卡也适用每日一次。</p><button class=\"rv-confirm\" id=\"islandMailToggle\">" + (appState.ISLAND.enabled ? "暂停新来信" : "开启新来信") + "</button>");
		s.querySelector("#islandMailToggle").onclick = () => {
			appState.ISLAND.enabled = !appState.ISLAND.enabled;
			islandCommit();
			closeSheet();
			navigationState.navFromBack = true;
			render();
		};
	}
	function islandHelloGift() {
		islandHelloObserverStop();
		const host = $("#hello .hl-lower");
		if (!host || !appState.SEEN.onboard) return;
		if (islandGrantDaily(appState.ISLAND, islandToday(), islandRoster(), POSTCARDS, Math.floor(Math.random() * 4294967295))) islandCommit();
		const daily = appState.ISLAND.daily, card = daily && daily.day === islandToday() ? islandCard(daily.id) : null;
		const block = document.createElement("section");
		block.className = "hl-postcard";
		block.id = "hlPostcard";
		if (!card) {
			block.innerHTML = "<p class=\"postcard-note\">" + (appState.ISLAND.enabled ? "今天没有新的明信片。" : "已暂停早安明信片，原来的收藏都在。") + "</p>";
			host.prepend(block);
			return;
		}
		const collected = appState.ISLAND.album.some((r) => r.id === card.id);
		block.innerHTML = postcardMedia(card, true) + "<h3>" + vEsc(card.title) + "</h3>" + postcardParagraphs(card) + "<small>—— <strong class=\"resident-name\">" + HOUSE_INFO[card.owner].who + "</strong> · 今天这一张</small><button class=\"chip\" id=\"hlPostcardCollect\" " + (collected ? "disabled" : "") + ">" + (collected ? "已在明信片册中" : "收进明信片册") + "</button>";
		host.prepend(block);
		postcardBindImages(block);
		islandHelloSeen(block, card.id);
		$("#hlPostcardCollect").onclick = () => {
			if (islandCollect(appState.ISLAND, card.id, islandToday())) {
				islandCommit();
				const btn = $("#hlPostcardCollect");
				btn.textContent = "已收进明信片册";
				btn.disabled = true;
				if (navigationState.cur.name === "postoffice" && navigationState.cur.tab !== "album") {
					navigationState.navFromBack = true;
					render();
				}
			}
		};
	}
	// src/modules/abu/birth.js
	var ABU_SIGNS = "白羊 金牛 双子 巨蟹 狮子 处女 天秤 天蝎 射手 摩羯 水瓶 双鱼".split(" ");
	var ABU_STEMS = "甲乙丙丁戊己庚辛壬癸";
	var ABU_BRANCHES = "子丑寅卯辰巳午未申酉戌亥";
	var ABU_HIDDEN = [
		"癸",
		"己癸辛",
		"甲丙戊",
		"乙",
		"戊乙癸",
		"丙戊庚",
		"丁己",
		"己丁乙",
		"庚壬戊",
		"辛",
		"戊辛丁",
		"壬甲"
	];
	var ABU_GODS = [
		"比肩",
		"劫财",
		"食神",
		"伤官",
		"偏财",
		"正财",
		"七杀",
		"正官",
		"偏印",
		"正印"
	];
	var abuMod = (n, base) => (n % base + base) % base;
	function abuGod(day, stem) {
		return ABU_GODS[abuMod((stem >> 1) - (day >> 1), 5) * 2 + ((day ^ stem) & 1)];
	}
	function abuWallInstants(date, time, zone) {
		const target = Date.parse(date + "T" + time + ":00Z");
		const fmt = new Intl.DateTimeFormat("en-GB", {
			timeZone: zone,
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hourCycle: "h23"
		});
		function wall(ms) {
			const v = Object.fromEntries(fmt.formatToParts(ms).map((p) => [p.type, +p.value]));
			return Date.UTC(v.year, v.month - 1, v.day, v.hour, v.minute, v.second);
		}
		return [...new Set([
			-36,
			0,
			36
		].map((h) => {
			const ms = target + h * 36e5;
			return wall(ms) - ms;
		}))].map((o) => target - o).filter((ms) => wall(ms) === target).sort((a, b) => a - b);
	}
	function abuPillar(stem, branch) {
		return {
			stem: abuMod(stem, 10),
			branch: abuMod(branch, 12)
		};
	}
	function abuAt(ms, p, minutes) {
		const date = new Date(ms), sun = window.Astronomy.SunPosition(date).elon, moon = window.Astronomy.EclipticGeoMoon(date).lon;
		const month = Math.floor(abuMod(sun - 315, 360) / 30);
		const year = Number(p.date.slice(0, 4)) - (+p.date.slice(5, 7) <= 2 && month >= 10 ? 1 : 0);
		const ys = abuMod(year - 4, 10);
		const day = abuMod(Math.floor(Date.parse(p.date + "T12:00:00Z") / 864e5) + 2440588 + 49, 60), hour = Math.floor((minutes + 60) / 120) % 12;
		const rad = Math.PI / 180, theta = (window.Astronomy.SiderealTime(date) * 15 + p.lon) * rad;
		const eps = window.Astronomy.e_tilt(window.Astronomy.MakeTime(date)).tobl * rad;
		const asc = abuMod(180 + Math.atan2(-Math.cos(theta), Math.sin(theta) * Math.cos(eps) + Math.tan(p.lat * rad) * Math.sin(eps)) / rad, 360);
		return {
			sun: Math.floor(sun / 30),
			moon: Math.floor(moon / 30),
			asc: Math.floor(asc / 30),
			pillars: [
				abuPillar(ys, year - 4),
				abuPillar(ys % 5 * 2 + 2 + month, 2 + month),
				abuPillar(day, day),
				abuPillar(day % 5 * 2 + hour, hour)
			]
		};
	}
	function abuChart(p) {
		const known = !!p.time;
		function at(time, late) {
			const hits = abuWallInstants(p.date, time, p.zone);
			if (!hits.length) throw Error("这个当地时间不存在，请核对当时的钟表时间。");
			if (known && hits.length > 1 && !p.fold) throw Error("这一刻遇到拨慢时钟，请选择第一次或第二次出现。");
			const [h, m] = time.split(":").map(Number);
			return abuAt(late ? hits.at(-1) : hits[0], p, 60 * h + m);
		}
		if (known) return at(p.time, p.fold === "later");
		function edge(first) {
			for (let i = 0; i < 1440; i++) {
				const n = first ? i : 1439 - i, t = String(n / 60 | 0).padStart(2, "0") + ":" + String(n % 60).padStart(2, "0");
				if (abuWallInstants(p.date, t, p.zone).length) return at(t, !first);
			}
			throw Error("当地历法中没有这一天，请核对出生日期。");
		}
		const a = edge(true), b = edge(false);
		if (a.sun !== b.sun) a.sun = null;
		if (a.moon !== b.moon) a.moon = null;
		a.asc = null;
		a.pillars = a.pillars.map((v, i) => i < 3 && v.stem === b.pillars[i].stem && v.branch === b.pillars[i].branch ? v : null);
		return a;
	}
	function abuStrength(pillars) {
		if (pillars.some((p) => !p)) return "时刻待补";
		const day = pillars[2].stem >> 1;
		const helps = (s) => {
			const diff = abuMod(day - (s >> 1), 5);
			return diff === 0 || diff === 1;
		};
		let support = 0, total = 0;
		pillars.forEach((p, i) => {
			if (i !== 2) {
				support += Number(helps(p.stem));
				total++;
			}
			const hidden = ABU_HIDDEN[p.branch], factor = i === 1 ? 3 : 1;
			const weights = hidden.length === 3 ? [
				.6,
				.3,
				.1
			] : hidden.length === 2 ? [.7, .3] : [1];
			Array.from(hidden).forEach((c, j) => {
				const w = weights[j] * factor;
				total += w;
				if (helps("甲乙丙丁戊己庚辛壬癸".indexOf(c))) support += w;
			});
		});
		const ratio = support / total;
		return ratio > .75 ? "偏强" : ratio > .53 ? "中和偏强" : ratio >= .47 ? "中和" : ratio >= .25 ? "中和偏弱" : "偏弱";
	}
	// src/modules/abu/loader.js
	var loading;
	function loadChartFile() {
		return new Promise((resolve, reject) => {
			const script = document.createElement("script");
			script.src = document.documentElement.dataset.abuFile;
			script.onload = () => {
				script.remove();
				resolve();
			};
			script.onerror = () => {
				script.remove();
				reject(/* @__PURE__ */ new Error("排盘资料加载失败"));
			};
			document.head.append(script);
		});
	}
	function abuInitData() {
		if (!loading) loading = (location.protocol === "file:" ? loadChartFile() : import("./abu-data-DfA2KwJp.js")).then(() => {
			if (!window.AbuData || !window.Astronomy) throw new Error("排盘资料不完整");
		}).catch((error) => {
			loading = void 0;
			throw error;
		});
		return loading;
	}
	// src/modules/abu/readings.js
	var ABU_SUN_COPY = [
		"碰到没人开头的事，你可能已经伸手试了一下，等有了点眉目再喊大家来看。",
		"一件事做顺手了，你愿意再花点工夫，把别人用起来别扭的地方也磨平。",
		"你也许习惯多问一句。两件原本各说各的事，聊到你这里忽然有了联系。",
		"别人提过的一件小事，你可能记了很久，等对方真的需要时才拿出来。",
		"有人认真听你讲喜欢的东西，你往往越讲越有神采，也乐意让别人试试。",
		"大家聊得热闹时，你也许一直安静听着，过一会儿却点出一个刚才谁都没留意的细节。",
		"同一件事听到两个说法，你常愿意先让两边把话说完，才慢慢讲自己的判断。",
		"话里有一处没说透，你可能记得很清楚。等聊到真正关心的地方，你才愿意多说几句。",
		"新地方或陌生的做法容易勾起你的兴致，你可能想先走一趟，再决定要不要留下。",
		"碰到一团乱的事，你常会顺手找出今天能做的那一步。有了开头，后面就好商量。",
		"别人都习惯这么做，你可能还会问一句缘由。真正想明白以后，你愿意照自己的办法试试。",
		"一句随口提起的话，可能让你想到一幅画面。你常记得当时的气氛，过后才找到合适的形容。"
	];
	var ABU_MOON_COPY = [
		"心里有事的时候，你可能想赶紧说清楚，闷着反而更难受。",
		"熟悉的饭桌、熟悉的声音，有时比一长串安慰更能让你放松。",
		"遇上说不清的感觉，你可能边聊边想，讲到一半才发现自己真正在意哪件事。",
		"有些心事你只想跟熟人说，知道对方还记得上次那半句话，就容易讲下去了。",
		"你认真做过的事被人看见时，可能会高兴很久，哪怕对方只提了一句细节。",
		"情绪乱的时候，你也许会先收拾桌子或列个短单。手边有件小事理顺了，话才容易出口。",
		"气氛僵住时，你可能会惦记好一阵。两个人坐下来把各自的意思说清，你才踏实。",
		"有些感受你会留给真正信任的人。等对方愿意听深一点，你才慢慢说起缘由。",
		"心里闷着的时候，你也许想走出熟悉的地方，换条路，边走边想。",
		"要开口求助，你可能得先想一想。遇到愿意替你接下一件具体事情的人，你会记在心里。",
		"心里有事，也可能想先独处一会儿。等想清楚了，再找那个能聊得深的人说。",
		"身边人的情绪，你也许接得很快。回到自己的角落待一会儿，才听清自己怎么想。"
	];
	var ABU_ASC_COPY = [
		"初次见面，别人容易先注意到你的爽快。",
		"给人的第一印象可能很稳，熟了才知道你心里早有自己的看法。",
		"刚碰面的人，可能记得你把话题接得很自然。",
		"刚到陌生的地方，你可能先看看谁坐在旁边，再慢慢加入谈话。",
		"见过你的人，可能先记得你跟人打招呼的样子。",
		"在旁人眼里，你好像很快就能看清一件事该从哪儿做起。",
		"人多的时候，你常会留意谁还没接上话。",
		"初见时你可能话不多，先看看什么值得聊。",
		"第一次同行，别人容易被你对新鲜事的好奇带动。",
		"刚共事的人，可能最先记住你答应的事有着落。",
		"你偶尔冒出来的一句不同看法，容易让人一下记住你。",
		"刚认识的人，可能觉得跟你说话很容易放松。"
	];
	function abuStars(c) {
		if (c.sun === 5 && c.moon === 10 && c.asc === 1) return "给人的第一印象可能很稳，心里却常有自己的另一套想法。刚认识的人觉得你随和，熟一点才发现，有些事你其实早有判断，只是要等想清楚了才开口。心里有事时也是这样：当下可能只说了半句，过两天一起散步，你才把后半句慢慢讲出来。";
		return [
			ABU_ASC_COPY[c.asc],
			ABU_SUN_COPY[c.sun],
			ABU_MOON_COPY[c.moon]
		].filter(Boolean).join("");
	}
	var ABU_GOD_COPY = {
		正印: "有人肯慢慢讲缘由，你可能听得很认真。学会以后，你连当初为什么要这么做都还记得。",
		偏印: "看别人把事情做过一遍，你可能就想换个顺序试试，看看原来的那一步究竟起什么作用。",
		正财: "同一个点子谈了几轮，你可能最关心落到手里该先做哪一步。你愿意把想法试到用得上为止。",
		偏财: "听朋友提起一个需要，你可能很快想到谁恰好会做，又或者身边什么东西正好派得上用场。",
		食神: "学到点新东西，你可能想亲手做一遍。有个看得见、摸得着的结果，你才觉得过瘾。",
		伤官: "听到一句含混的话，你也许忍不住想给它换个更贴切的说法。表达清楚，对你挺要紧。",
		正官: "大家一起做事的时候，你可能很在意事先说好的分工，知道各自能指望谁才安心。",
		七杀: "真有事情赶到眼前，你可能顾不上多说，先去处理最急的那个环节。",
		比肩: "别人的建议你愿意听，最后那一步，你可能还是想亲手做个判断。",
		劫财: "遇到同样有兴趣的人，你可能一下子就有了劲，两个人很快把话题聊成一件可以动手的事。"
	};
	function abuReading(pillars) {
		const day = pillars[2].stem;
		const gods = [
			0,
			1,
			3
		].filter((i) => pillars[i]).map((i) => abuGod(day, pillars[i].stem));
		if (gods.includes("正印") && gods.includes("偏印")) return "按这张盘里正印、偏印的传统读法，你可能很愿意跟一个懂行的人学东西。有意思的是，你往往记得他当初为什么这么做，等轮到自己上手，却会改掉其中一步，看看换个做法会怎样。";
		const focus = gods.includes("食神") ? "食神" : gods[1] || gods[0];
		return focus ? "按" + focus + "的传统读法，" + ABU_GOD_COPY[focus] : "出生时刻补全后，可以再看这里的解读。";
	}
	// src/modules/abu/index.js
	function abuGo(tab, replace = false) {
		if (replace) navigationState.navFromBack = true;
		navigationState.cur = {
			name: "abu",
			tab
		};
		render();
	}
	function abuButton(label, fn, cls = "chip") {
		return journalButton(label, cls, fn);
	}
	function abuCard(title) {
		const card = towerEl("section", "abu-card");
		card.append(towerEl("h3", "", title));
		view.append(card);
		return card;
	}
	function abuTabs() {
		const nav = towerEl("div", "tw-tabs");
		for (const [key, label] of [["birth", "先天底色"], ["tests", "后天性格"]]) {
			const on = (navigationState.cur.tab || "birth") === key, btn = abuButton(label, () => abuGo(key, true), "chip" + (on ? " on" : ""));
			btn.setAttribute("aria-pressed", on);
			nav.append(btn);
		}
		view.append(nav);
	}
	function abuStart() {
		abuWelcome();
		topTitle.textContent = navigationState.cur.tab === "form" ? "资料" : "自我";
		reviewBtn.textContent = "回今日";
		const route = navigationState.cur;
		if (!window.AbuData && (route.tab === "form" || SET.abuProfile && route.tab !== "tests")) {
			const status = towerEl("p", "abu-muted", "正在读取本地排盘资料…");
			view.append(status);
			abuInitData().then(() => {
				if (navigationState.cur === route && status.isConnected) abuStartLoaded();
			}).catch(() => {
				if (status.isConnected) status.replaceChildren(abuButton("重新读取排盘资料", render));
			});
			return;
		}
		abuStartLoaded();
	}
	function abuStartLoaded() {
		view.replaceChildren();
		if (navigationState.cur.tab === "form") {
			abuForm(SET.abuProfile);
			return;
		}
		if (navigationState.cur.tab === "detail" && SET.abuProfile) {
			abuDetails(SET.abuProfile);
			return;
		}
		view.append(letterHouseHead("abu"));
		abuTabs();
		if (navigationState.cur.tab === "tests") {
			for (const [title, desc, art] of [[
				"MBTI",
				"了解自己习惯怎样获取信息、做决定。",
				"assets/ui/abu-tests-mbti.webp"
			], [
				"五大人格",
				"从五个维度看看自己的性格倾向。",
				"assets/ui/abu-tests-five.webp"
			]]) {
				const card = abuCard(title), im = new Image();
				im.src = art;
				im.alt = "";
				im.className = "abu-test-art";
				card.prepend(im);
				card.append(towerEl("p", "", desc), towerEl("small", "abu-muted", "测试预览 · 尚未开放答题"));
			}
			return;
		}
		if (!SET.abuProfile) {
			abuCard("我的出生手记").append(towerEl("p", "", "填下出生日期和地点，看看你的星座与八字。"), abuButton("填写基础资料", () => abuGo("form"), "chip on"));
			return;
		}
		const p = SET.abuProfile;
		let c;
		try {
			c = abuChart(p);
		} catch (e) {
			abuCard("请核对出生资料").append(abuButton("编辑资料", () => abuGo("form")));
			return;
		}
		const stars = abuCard("我的星座");
		stars.querySelector("h3").append(abuButton("编辑资料 ›", () => abuGo("form"), "abu-link"));
		const strip = towerEl("div", "abu-values");
		for (const [label, i] of [
			["太阳", c.sun],
			["月亮", c.moon],
			["上升", c.asc]
		]) {
			const cell = towerEl("div", "");
			cell.append(towerEl("small", "", label), towerEl("b", "", i == null ? "时刻待补" : ABU_SIGNS[i] + "座"));
			strip.append(cell);
		}
		stars.append(strip, towerEl("p", "", abuStars(c)));
		const bazi = abuCard("传统解读"), summary = towerEl("div", "abu-values");
		const ds = c.pillars[2].stem;
		for (const [name, value] of [["日主", ABU_STEMS[ds] + "木火土金水"[ds >> 1]], ["强弱参考", abuStrength(c.pillars)]]) {
			const col = towerEl("div", "");
			col.append(towerEl("small", "", name), towerEl("b", "", value));
			summary.append(col);
		}
		const tags = towerEl("div", "abu-gods");
		tags.append(towerEl("small", "", "天干十神"));
		for (const i of [
			0,
			1,
			3
		]) if (c.pillars[i]) {
			const god = abuGod(ds, c.pillars[i].stem);
			tags.append(abuButton(god, () => {
				healthSheet(god, "").querySelector(".health-form").append(towerEl("p", "", ABU_GOD_COPY[god]));
			}));
		}
		bazi.append(summary, tags, towerEl("p", "", abuReading(c.pillars)), abuButton("看十神与完整排盘 ›", () => abuGo("detail"), "abu-link"));
	}
	function abuDetails(p) {
		topTitle.textContent = "解读";
		const { pillars } = abuChart(p), day = pillars[2].stem;
		const card = abuCard("四柱与十神");
		[
			"年",
			"月",
			"日",
			"时"
		].forEach((name, i) => {
			const col = pillars[i];
			const row = towerEl("div", "abu-pillar");
			row.append(towerEl("strong", "", name + "柱"));
			if (!col) {
				row.append(towerEl("span", "", "出生时刻待补"));
				card.append(row);
				return;
			}
			row.append(towerEl("span", "", ABU_STEMS[col.stem] + ABU_BRANCHES[col.branch] + " · " + (i === 2 ? "日主" : abuGod(day, col.stem))), towerEl("small", "abu-muted", "藏干　" + Array.from(ABU_HIDDEN[col.branch], (x) => x + "·" + abuGod(day, ABU_STEMS.indexOf(x))).join("　")));
			card.append(row);
		});
		abuCard("怎么看这张盘").append(towerEl("p", "", "以日干为日主，其余天干按五行生克和阴阳定十神。年柱以立春为界，月柱按节气，当地民用时间午夜换日，每两小时一个时辰。"), towerEl("p", "", "强弱仅供传统文化参考。这里按同类、生助日主的比例给出倾向：月支权重为其他地支的三倍，藏干按主次分配；缺少时柱时留待补充。"), towerEl("small", "abu-muted", "星历：Astronomy Engine（MIT） · 地点数据：GeoNames（CC BY 4.0），已筛选和圆整坐标。"));
	}
	function abuForm(old) {
		const f = towerForm("基础资料");
		f.classList.add("abu-form");
		const name = towerField(f, "nickname", "姓名或昵称", "text", old?.nickname);
		name.maxLength = 40;
		const cal = towerField(f, "calendar", "日期类型", "select", old?.calendar || "solar", [["solar", "阳历"], ["lunar", "农历"]]);
		const date = towerField(f, "date", "出生日期", "date", old?.date);
		date.min = "1901-01-01";
		date.max = key2iso(dkey(/* @__PURE__ */ new Date()));
		date.required = true;
		const year = towerNumber(f, "ly", "农历年份", old?.ly || "", 1901, (/* @__PURE__ */ new Date()).getFullYear());
		const month = towerNumber(f, "lm", "农历月份", old?.lm || "", 1, 12);
		const day = towerNumber(f, "ld", "农历日", old?.ld || "", 1, 30);
		const leap = towerField(f, "leap", "闰月", "checkbox", old?.leap);
		const clock = towerField(f, "clock", "出生时间", "time", old?.time || "");
		clock.required = true;
		const unknown = towerField(f, "unknown", "时间不详", "checkbox", old ? !old.time : false);
		const place = towerField(f, "place", "出生地点", "text", old?.place || "");
		place.required = true;
		place.maxLength = 100;
		place.placeholder = "搜索城市或区县";
		place.autocomplete = "off";
		const list = towerEl("div", "abu-cities");
		place.parentElement.after(list);
		const custom = towerField(f, "custom", "手动填写地点坐标和时区", "checkbox", old?.custom);
		const lat = towerNumber(f, "lat", "纬度（北为正）", old?.lat ?? "", -89.99, 89.99, "any");
		const lon = towerNumber(f, "lon", "经度（东为正）", old?.lon ?? "", -180, 180, "any");
		const zone = towerField(f, "zone", "出生地时区", "text", old?.zone || "Asia/Shanghai");
		for (const el of [
			year,
			month,
			day,
			lat,
			lon,
			zone
		]) el.required = true;
		let selected = old && !old.custom ? [
			old.place,
			old.lat,
			old.lon,
			old.zone
		] : null;
		let fold = towerField(f, "fold", "当地时钟重复的时刻", "select", old?.fold || "", [
			["", "请选择"],
			["earlier", "第一次出现"],
			["later", "第二次出现"]
		]);
		let foldNeeded = false;
		function candidates() {
			list.replaceChildren();
			if (custom.checked || selected || !place.value.trim()) return;
			const term = place.value.trim().toLowerCase();
			const matches = window.AbuData.filter((r) => r[0].toLowerCase().includes(term)).slice(0, 12);
			if (!matches.length) list.append(towerEl("small", "abu-muted", "未找到，可改用手动坐标。"));
			matches.forEach((r) => list.append(abuButton(r[0], () => {
				selected = r;
				place.value = r[0];
				list.replaceChildren();
			})));
		}
		function sync() {
			const lunar = cal.value === "lunar";
			towerVisible(date, !lunar);
			for (const el of [
				year,
				month,
				day,
				leap
			]) towerVisible(el, lunar);
			towerVisible(clock, !unknown.checked);
			for (const el of [
				lat,
				lon,
				zone
			]) towerVisible(el, custom.checked);
			towerVisible(fold, foldNeeded && !unknown.checked);
		}
		f.addEventListener("input", (e) => {
			if (e.target === place) {
				selected = null;
				candidates();
			}
			if (e.target === custom) candidates();
			if (e.target !== fold) {
				foldNeeded = false;
				fold.value = "";
			}
			sync();
		});
		sync();
		towerSubmit(f, "查看我的先天底色", () => {
			const lunar = cal.value === "lunar", y = +year.value, m = +month.value, d = +day.value;
			let iso = date.value;
			if (lunar) {
				if (leap.checked && lLeapMonth(y) !== m) return "该农历年份没有这个闰月。";
				if (d > (leap.checked ? lLeapDays(y) : lMonthDays(y, m))) return "这一个农历月没有这一天。";
				const solar = lunarToSolar(y, m, 1);
				if (!solar) return "请核对农历日期。";
				solar.setDate(solar.getDate() + d - 1 + (leap.checked ? lMonthDays(y, m) : 0));
				iso = key2iso(dkey(solar));
			}
			if (!iso || iso < date.min || iso > date.max) return "请填写范围内的出生日期。";
			if (!custom.checked && !selected) return "请从匹配的地点里选一项，或勾选手动填写。";
			const p = {
				nickname: name.value.trim(),
				date: iso,
				calendar: cal.value,
				time: unknown.checked ? "" : clock.value,
				place: place.value.trim(),
				custom: custom.checked,
				lat: custom.checked ? +lat.value : selected[1],
				lon: custom.checked ? +lon.value : selected[2],
				zone: custom.checked ? zone.value.trim() : selected[3],
				fold: fold.value
			};
			if (!p.place) return "请填写出生地点。";
			if (lunar) Object.assign(p, {
				ly: y,
				lm: m,
				ld: d,
				leap: leap.checked
			});
			try {
				if (p.time && abuWallInstants(p.date, p.time, p.zone).length > 1 && !p.fold) {
					foldNeeded = true;
					sync();
					return "这一天当地拨慢过时钟，请选一下实际出生时刻。";
				}
				abuChart(p);
			} catch (e) {
				return e instanceof RangeError ? "请核对时区名称，例如 Asia/Shanghai。" : e.message;
			}
			SET.abuProfile = p;
			scheduleSave();
			saveNow();
			if (navigationState.navStack.at(-1)?.name === "abu") navigationState.navStack.pop();
			abuGo("birth", true);
		});
	}
	function abuWelcome() {
		if (islandArrived("abu-welcome")) return;
		appState.ISLAND.inbox.push({
			id: "abu-welcome",
			day: islandToday()
		});
		islandSyncMessages(appState.ISLAND);
		islandCommit();
	}
	function abuValidateBackup(p) {
		if (p == null) return;
		if (!healthValidDate(p.date) || p.date < "1901-01-01" || p.date > key2iso(dkey(/* @__PURE__ */ new Date())) || !["solar", "lunar"].includes(p.calendar) || typeof p.time !== "string" || p.time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(p.time) || !Number.isFinite(p.lat) || Math.abs(p.lat) > 89.99 || !Number.isFinite(p.lon) || Math.abs(p.lon) > 180 || typeof p.zone !== "string" || !p.zone || typeof p.place !== "string" || !p.place.trim() || typeof p.nickname !== "string" || typeof p.custom !== "boolean" || ![
			"",
			"earlier",
			"later"
		].includes(p.fold)) throw Error("出生资料格式有误");
		new Intl.DateTimeFormat("zh-CN", { timeZone: p.zone });
		if (p.calendar === "lunar" && (![
			p.ly,
			p.lm,
			p.ld
		].every(Number.isInteger) || p.ly < 1901 || p.lm < 1 || p.lm > 12 || p.ld < 1 || p.ld > 30 || typeof p.leap !== "boolean")) throw Error("农历日期格式有误");
	}
	// src/core/images.js
	var IMG_DB = {
		db: null,
		ok: false,
		ready: false,
		bootP: null,
		busy: false,
		uncommitted: /* @__PURE__ */ new Map(),
		nextJs: null,
		missing: 0,
		map: /* @__PURE__ */ new Map(),
		data: /* @__PURE__ */ new Map(),
		pending: /* @__PURE__ */ new Map()
	};
	function imgCheckpoint(js, pending) {
		const state = JSON.parse(js);
		let bytes = 0;
		for (const value of pending.values()) bytes += value.length;
		if (bytes + js.length < 5242880) try {
			const inline = JSON.stringify(state, (key, value) => typeof value === "string" && value.startsWith("idb:") ? pending.get(value.slice(4)) || value : value);
			platform.storage.setItem(LSKEY, inline);
			return inline;
		} catch (err) {
			if (err.name !== "QuotaExceededError") throw err;
		}
		let previous;
		try {
			previous = JSON.parse(platform.storage.getItem("bujo_local_v1")) || {};
		} catch (_) {
			previous = {};
		}
		function visit(page, fn) {
			function row(e) {
				fn(e);
				(e.children || []).forEach(row);
			}
			(page.plan || []).forEach(row);
			(page.flow || []).forEach(row);
		}
		const waiting = (value) => typeof value === "string" && value.startsWith("idb:") && pending.has(value.slice(4));
		for (const [day, page] of Object.entries(state.pages)) {
			const old = /* @__PURE__ */ new Map();
			visit(previous.pages?.[day] || {}, (e) => {
				if (e._id != null) old.set(e._id, e);
			});
			visit(page, (e) => {
				if (e.images?.some(waiting)) {
					const saved = old.get(e._id);
					if (saved?.images) {
						e.images = saved.images;
						e.imgt = saved.imgt;
					} else {
						const keep = e.images.map((v, i) => waiting(v) ? -1 : i).filter((i) => i >= 0);
						e.images = keep.map((i) => e.images[i]);
						if (e.imgt) e.imgt = keep.map((i) => e.imgt[i]);
					}
				}
				if (e.imgt) e.imgt = e.imgt.map((v) => waiting(v) ? null : v);
			});
		}
		const checkpoint = JSON.stringify(state);
		return lsWrite(checkpoint) ? checkpoint : null;
	}
	function imgQueueWrite(js) {
		for (const [id, value] of IMG_DB.pending) IMG_DB.uncommitted.set(id, value);
		try {
			IMG_DB.checkpoint = imgCheckpoint(js, IMG_DB.uncommitted);
		} catch (_) {
			IMG_DB.checkpoint = null;
			toast("本机存档暂时无法写入，请先导出备份。", "oops");
		}
		IMG_DB.nextJs = js;
		if (IMG_DB.busy) return IMG_DB.checkpoint !== null;
		IMG_DB.busy = true;
		async function drain() {
			try {
				while (IMG_DB.pending.size) {
					const batch = [...IMG_DB.pending];
					IMG_DB.pending.clear();
					if (!await imgPut(batch)) {
						for (const [id, value] of batch) IMG_DB.pending.set(id, value);
						toast("照片还在等待保存，请先保留这个页面。", "oops");
						return;
					}
					for (const [id] of batch) IMG_DB.uncommitted.delete(id);
				}
				if (IMG_DB.checkpoint === null || platform.storage.getItem("bujo_local_v1") === IMG_DB.checkpoint) lsWrite(IMG_DB.nextJs);
			} finally {
				IMG_DB.checkpoint = null;
				IMG_DB.nextJs = null;
				IMG_DB.busy = false;
			}
		}
		const written = IMG_DB.checkpoint !== null;
		drain();
		return written;
	}
	function imgDbOpen() {
		return new Promise((res) => {
			try {
				if (!platform.images) {
					res(null);
					return;
				}
				const rq = platform.images.open("bujo_img", 1);
				rq.onupgradeneeded = () => {
					try {
						rq.result.createObjectStore("img");
					} catch (_) {}
				};
				rq.onsuccess = () => res(rq.result);
				rq.onerror = rq.onblocked = () => res(null);
			} catch (_) {
				res(null);
			}
		});
	}
	function imgPut(batch) {
		return new Promise((res) => {
			if (!batch.length) {
				res(true);
				return;
			}
			try {
				const tx = IMG_DB.db.transaction("img", "readwrite"), st = tx.objectStore("img");
				batch.forEach(([id, v]) => st.put(v, id));
				tx.oncomplete = () => res(true);
				tx.onerror = tx.onabort = () => res(false);
			} catch (_) {
				res(false);
			}
		});
	}
	function imgDel(ids) {
		try {
			const st = IMG_DB.db.transaction("img", "readwrite").objectStore("img");
			ids.forEach((id) => {
				st.delete(id);
				const v = IMG_DB.data.get(id);
				IMG_DB.data.delete(id);
				if (v) IMG_DB.map.delete(v);
			});
		} catch (_) {}
	}
	function imgBoot() {
		if (IMG_DB.bootP) return IMG_DB.bootP;
		IMG_DB.bootP = imgDbOpen().then((db) => new Promise((res) => {
			if (!db) {
				IMG_DB.ok = false;
				res();
				return;
			}
			IMG_DB.db = db;
			try {
				const tx = db.transaction("img", "readonly"), st = tx.objectStore("img");
				const kr = st.getAllKeys(), vr = st.getAll();
				tx.oncomplete = () => {
					const ks = kr.result || [], vs = vr.result || [];
					ks.forEach((k, i) => {
						IMG_DB.data.set(k, vs[i]);
						IMG_DB.map.set(vs[i], k);
					});
					IMG_DB.ok = true;
					res();
				};
				tx.onerror = tx.onabort = () => {
					IMG_DB.ok = false;
					res();
				};
			} catch (_) {
				IMG_DB.ok = false;
				res();
			}
		})).then(() => {
			const used = /* @__PURE__ */ new Set();
			let swapped = 0, inline = 0, missing = 0;
			const fix = (arr) => {
				if (!arr) return;
				for (let i = 0; i < arr.length; i++) {
					const v = arr[i];
					if (typeof v !== "string") continue;
					if (v.startsWith("idb:")) {
						const id = v.slice(4), d = IMG_DB.data.get(id);
						used.add(id);
						if (d) {
							arr[i] = d;
							swapped++;
						} else missing++;
					} else if (v.startsWith("data:image/")) inline++;
				}
			};
			walk((k, e) => {
				fix(e.images);
				fix(e.imgt);
			});
			IMG_DB.missing = missing;
			IMG_DB.ready = true;
			if (IMG_DB.ok) {
				const dead = [...IMG_DB.data.keys()].filter((id) => !used.has(id));
				if (dead.length) imgDel(dead);
				if (inline) scheduleSave();
			}
			if (swapped || missing) render();
			try {
				platform.requestPersistentStorage()?.catch(() => {});
			} catch (_) {}
		}).catch(() => {
			IMG_DB.ok = false;
			IMG_DB.ready = true;
		});
		return IMG_DB.bootP;
	}
	function imgUrl(v) {
		return typeof v === "string" && v.startsWith("idb:") ? IMG_DB.data.get(v.slice(4)) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" : v;
	}
	// src/core/backup.js
	var backupState = {};
	function exportMD() {
		let out = "# 啾啾岛备份（" + fmtKey(TODAY) + " 导出）\n";
		const SY = {
			task: "•",
			event: "○",
			note: "—",
			mood: "=",
			ask: "？",
			bang: "！"
		};
		Object.keys(appState.PAGES).sort((a, b) => parseKey(a) - parseKey(b)).forEach((k) => {
			out += "\n## " + k.split(".")[0] + "年" + fmtKey(k) + " " + weekCN(k) + "\n";
			const line = (e, ind) => {
				const st = e.state === "done" ? "✓" : e.state === "migrated" ? "›" : e.state === "dropped" ? "✕" : e.state === "delegated" ? "→" : SY[e.sym] || "•";
				out += ind + st + " " + mealFullText(e) + (e.groups && e.groups.length ? "  #" + e.groups.join(" #") : "") + (e.badge ? "（" + e.badge + "）" : "") + (e.images && e.images.length ? "（图片×" + e.images.length + "）" : "") + "\n";
				(e.children || []).forEach((c) => line(c, ind + "    "));
			};
			if (appState.PAGES[k].plan.length) {
				out += "### 待办\n";
				appState.PAGES[k].plan.forEach((e) => line(e, ""));
			}
			if (appState.PAGES[k].flow.length) {
				out += "### 日常与随想\n";
				appState.PAGES[k].flow.forEach((e) => line(e, ""));
			}
		});
		platform.download(new Blob([out], { type: "text/markdown" }), "啾啾岛备份.md");
		toast("已生成备份文件");
	}
	backupState.pendingWipe = false;
	backupState.pendingRestore = false;
	function importMD(text) {
		const lines = String(text).split(/\r?\n/);
		let curKey = null, section = null, lastTop = null;
		const added = {
			days: 0,
			items: 0
		};
		for (const raw of lines) {
			const h = raw.match(/^##\s*(?:(\d{4})年)?(\d{1,2})月(\d{1,2})日/);
			if (h) {
				curKey = (h[1] ? +h[1] : parseKey(TODAY).getFullYear()) + "." + +h[2] + "." + +h[3];
				if (!appState.PAGES[curKey]) {
					appState.PAGES[curKey] = {
						plan: [],
						flow: [],
						morningAsked: true
					};
					added.days++;
				}
				section = null;
				lastTop = null;
				continue;
			}
			if (/^###/.test(raw)) {
				section = /要做|待办/.test(raw) ? "plan" : "flow";
				lastTop = null;
				continue;
			}
			if (!curKey) continue;
			const m = raw.match(/^(\s*)([•○—=✓›✕→？！?!])\s+(.*)$/);
			if (!m) continue;
			const indent = m[1].length >= 2;
			let txt = m[3].trim();
			let badge;
			const bm = txt.match(/（([^（）]+)）\s*$/);
			if (bm) {
				badge = bm[1];
				txt = txt.slice(0, bm.index).trim();
			}
			const groups = [];
			txt = txt.replace(/#([^\s#，。,]+)/g, (_, gg) => {
				groups.push(gg);
				return "";
			}).trim();
			if (!txt) {
				if (!indent) lastTop = null;
				continue;
			}
			const glyph = m[2];
			const sym = glyph === "○" ? "event" : glyph === "—" ? "note" : glyph === "=" ? "mood" : glyph === "？" || glyph === "?" ? "ask" : glyph === "！" || glyph === "!" ? "bang" : "task";
			let state = glyph === "✓" ? "done" : glyph === "›" ? "migrated" : glyph === "✕" ? "dropped" : glyph === "→" ? "delegated" : sym === "task" ? "open" : void 0;
			if (state === "open" && badge && /someday|想做/.test(badge)) state = "someday";
			let dup = false;
			walkPage(curKey, (e) => {
				if ((e.text || "").trim() === txt) dup = true;
			});
			if (dup) {
				if (!indent) lastTop = null;
				continue;
			}
			const e = {
				sym,
				state,
				text: txt,
				_id: ++appState.uid
			};
			if (groups.length) e.groups = groups;
			if (badge) e.badge = badge;
			const page = appState.PAGES[curKey];
			const target = section ? page[section] : sym === "task" ? page.plan : page.flow;
			if (indent && lastTop) (lastTop.children = lastTop.children || []).push(e);
			else {
				target.push(e);
				lastTop = e;
			}
			added.items++;
		}
		scheduleSave();
		return added;
	}
	function exportJSON() {
		if (!IMG_DB.ready) {
			imgBoot().then(exportJSON);
			return;
		}
		prepareRecords();
		const data = JSON.stringify({
			pages: appState.PAGES,
			extraGroups: appState.extraGroups,
			set: SET,
			seen: appState.SEEN,
			gcolor: appState.GCOLOR,
			notes: appState.NOTES,
			health: appState.HEALTH,
			island: appState.ISLAND,
			exportedAt: TODAY
		}, jstrip);
		platform.download(new Blob([data], { type: "application/json" }), "啾啾岛全量备份.json");
		toast("已生成全量备份（含图片）");
	}
	var ghTm = null;
	var ghBusy = false;
	var pendingGhRestore = false;
	function ghCfg() {
		SET.gh = SET.gh || {
			repo: "",
			token: "",
			on: false,
			last: ""
		};
		return SET.gh;
	}
	function ghHeaders() {
		return {
			Authorization: "Bearer " + ghCfg().token,
			Accept: "application/vnd.github+json"
		};
	}
	function ghPayload() {
		prepareRecords();
		const setCopy = Object.assign({}, SET);
		delete setCopy.gh;
		return JSON.stringify({
			pages: appState.PAGES,
			extraGroups: appState.extraGroups,
			set: setCopy,
			seen: appState.SEEN,
			gcolor: appState.GCOLOR,
			notes: appState.NOTES,
			health: appState.HEALTH,
			island: appState.ISLAND,
			savedAt: (/* @__PURE__ */ new Date()).toISOString()
		}, jstrip);
	}
	async function ghPush(manual) {
		const c = ghCfg();
		if (!c.repo || !c.token) {
			if (manual) toast("先填仓库和令牌");
			return;
		}
		if (!manual && !c.on) return;
		if (ghBusy) {
			ghSchedule();
			return;
		}
		ghBusy = true;
		if (manual && storageState.saveTm) saveNow();
		clearTimeout(ghTm);
		try {
			await imgBoot();
			const url = "https://api.github.com/repos/" + c.repo + "/contents/data.json";
			let sha;
			const r0 = await fetch(url, { headers: ghHeaders() });
			if (r0.status === 200) try {
				sha = (await r0.json()).sha;
			} catch (_) {}
			const revision = c.pending;
			const body = {
				message: "啾啾岛备份 " + TODAY,
				content: btoa(unescape(encodeURIComponent(ghPayload())))
			};
			if (sha) body.sha = sha;
			const r = await fetch(url, {
				method: "PUT",
				headers: Object.assign({ "Content-Type": "application/json" }, ghHeaders()),
				body: JSON.stringify(body)
			});
			if (r.ok && SET.gh === c) {
				if (c.pending === revision) delete c.pending;
				c.last = fmtKey(TODAY) + " " + (/* @__PURE__ */ new Date()).toTimeString().slice(0, 5);
				saveNow({ cloud: storageState.saveTm !== null });
				if (manual) toast("已备份到云端 ✓");
			} else if (manual) toast("备份失败 " + r.status + "（检查仓库名 / 令牌权限）", "oops");
		} catch (_) {
			if (manual) toast("网络不通，稍后会自动重试", "oops");
		}
		ghBusy = false;
	}
	function ghSchedule() {
		const c = SET.gh;
		if (!c || !c.on || !c.repo || !c.token) return;
		clearTimeout(ghTm);
		ghTm = setTimeout(() => ghPush(false), 6e4);
	}
	function restoreSettings(saved) {
		for (const key of [
			"expCats",
			"expNames",
			"foodShops",
			"incomeBook",
			"mods",
			"isle",
			"dtiles",
			"mealsUserOff",
			"healthRecordTimes",
			"abuProfile"
		]) delete SET[key];
		SET.stagePlans = [];
		Object.assign(SET, saved || {});
		initializeJournal();
		settleIncome();
	}
	async function ghRestore() {
		const c = ghCfg();
		if (!c.repo || !c.token) {
			toast("先填仓库和令牌");
			return;
		}
		try {
			const r = await fetch("https://api.github.com/repos/" + c.repo + "/contents/data.json", { headers: ghHeaders() });
			if (!r.ok) {
				toast("云端还没有备份（" + r.status + "）");
				return;
			}
			const j = await r.json();
			const s = JSON.parse(decodeURIComponent(escape(atob(String(j.content).replace(/\n/g, "")))));
			if (!s.pages) throw 0;
			validateIncome(s.set?.incomeBook);
			stageValidateBackup(s.set?.stagePlans);
			abuValidateBackup(s.set?.abuProfile);
			const restoredHealth = healthNormalize(s.health);
			const restoredIsland = islandNormalize(s.island);
			const keep = ghCfg();
			appState.PAGES = s.pages;
			appState.extraGroups = s.extraGroups || appState.extraGroups;
			restoreSettings(s.set);
			SET.gh = keep;
			appState.SEEN = s.seen || appState.SEEN;
			appState.GCOLOR = s.gcolor || {};
			appState.NOTES = s.notes || [];
			appState.HEALTH = restoredHealth;
			healthState.HEALTH_UNDO_WATER = null;
			appState.ISLAND = restoredIsland;
			applyAccent();
			navigationState.undoStack = [];
			navigationState.focusRef = null;
			restoreRecordMetadata();
			ensureToday();
			scheduleSave();
			toast("已从云端恢复");
			navigationState.cur = { name: "today" };
			render();
		} catch (_) {
			toast("恢复失败：云端数据无法解析");
		}
	}
	function openGhSheet() {
		dismissKB();
		const c = ghCfg(), S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">GitHub 云备份" + (c.last ? "（上次：" + c.last + "）" : "") + "</div><input id=\"ghRepo\" class=\"qdate\" placeholder=\"私有仓库：用户名/仓库名，如 xxx/dot-data\" value=\"" + escAttr(c.repo) + "\" style=\"margin-bottom:10px\"><input id=\"ghToken\" type=\"password\" class=\"qdate\" placeholder=\"Fine-grained Token（只授权这一个仓库）\" value=\"" + escAttr(c.token) + "\" style=\"margin-bottom:10px\"><div class=\"gs-new\" style=\"margin-top:2px\"><button class=\"gm-btn\" id=\"ghSave\" style=\"flex:1;padding:10px\">" + (c.on ? "保存修改" : "保存并开启自动备份") + "</button>" + (c.on ? "<button class=\"gm-btn\" id=\"ghOff\" style=\"padding:10px\">停用</button>" : "") + "</div><div class=\"gs-new\" style=\"margin-top:10px\"><button class=\"gm-btn\" id=\"ghNow\" style=\"flex:1;padding:10px\">立即备份</button><button class=\"gm-btn danger\" id=\"ghPull\" style=\"flex:1;padding:10px\">从云端恢复</button></div><div class=\"rp-note\" style=\"margin-top:10px\">令牌只存在本机 · 数据在你的私有仓库 · 改动后约 1 分钟自动上传 · 仓库的提交历史即版本回滚</div>";
		const grab = () => {
			const c2 = ghCfg();
			c2.repo = $("#ghRepo").value.trim();
			c2.token = $("#ghToken").value.trim();
			return c2;
		};
		$("#ghSave").onclick = () => {
			const c2 = grab();
			if (!c2.repo || !c2.token) {
				toast("仓库和令牌都要填");
				return;
			}
			c2.on = true;
			scheduleSave();
			toast("已开启自动云备份");
			closeSheet();
			ghPush(true);
		};
		if (c.on) $("#ghOff").onclick = () => {
			grab().on = false;
			scheduleSave();
			toast("已停用自动备份");
			closeSheet();
		};
		$("#ghNow").onclick = () => {
			grab();
			scheduleSave();
			ghPush(true);
		};
		$("#ghPull").onclick = () => {
			if (!pendingGhRestore) {
				pendingGhRestore = true;
				toast("会覆盖本机数据 · 再点一次确认");
				setTimeout(() => pendingGhRestore = false, 5e3);
				return;
			}
			grab();
			scheduleSave();
			closeSheet();
			ghRestore();
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		placeToolbar();
	}
	function bindBackup() {
		$("#mdInput").addEventListener("change", (ev) => {
			const f = ev.target.files[0];
			if (!f) return;
			const r = platform.createFileReader();
			r.onload = () => {
				try {
					const res = importMD(String(r.result));
					toast(res.items ? "已补充 " + res.items + " 条 · 新增 " + res.days + " 天" : "没有需要补充的内容");
					navigationState.cur = { name: "today" };
					render();
				} catch (_) {
					toast("解析失败：请确认是本应用导出的 Markdown");
				}
				ev.target.value = "";
			};
			r.readAsText(f);
		});
		$("#jsonInput").addEventListener("change", (ev) => {
			const f = ev.target.files[0];
			if (!f) return;
			const r = platform.createFileReader();
			r.onload = () => {
				try {
					const s = JSON.parse(String(r.result));
					if (!s.pages) throw 0;
					validateIncome(s.set?.incomeBook);
					stageValidateBackup(s.set?.stagePlans);
					abuValidateBackup(s.set?.abuProfile);
					const restoredHealth = healthNormalize(s.health);
					const restoredIsland = islandNormalize(s.island);
					appState.PAGES = s.pages;
					appState.extraGroups = s.extraGroups || appState.extraGroups;
					restoreSettings(s.set);
					appState.SEEN = s.seen || appState.SEEN;
					appState.GCOLOR = s.gcolor || {};
					appState.NOTES = s.notes || [];
					appState.HEALTH = restoredHealth;
					healthState.HEALTH_UNDO_WATER = null;
					appState.ISLAND = restoredIsland;
					applyAccent();
					navigationState.undoStack = [];
					navigationState.focusRef = null;
					restoreRecordMetadata();
					ensureToday();
					scheduleSave();
					toast("已恢复备份");
					navigationState.cur = { name: "today" };
					render();
				} catch (_) {
					toast("恢复失败：文件不是有效的备份");
				}
				ev.target.value = "";
			};
			r.readAsText(f);
		});
	}
	// src/modules/collections/report.js
	function genReport(g, kind, incMood) {
		const ta = TODAY.split(".").map(Number);
		const monday = parseKey(TODAY);
		monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7);
		const weekKeys = [];
		for (let i = 0; i < 7; i++) {
			const d = new Date(monday);
			d.setDate(monday.getDate() + i);
			weekKeys.push(dkey(d));
		}
		const rangeStr = kind === "day" ? fmtKey(TODAY) : kind === "week" ? fmtKey(weekKeys[0]) + "–" + fmtKey(weekKeys[6]) : ta[0] + "年" + ta[1] + "月";
		const label = {
			day: "日报",
			week: "周报",
			month: "月报"
		}[kind];
		const inR = (dk) => kind === "day" ? dk === TODAY : kind === "week" ? weekKeys.includes(dk) : dk.startsWith(ta[0] + "." + ta[1] + ".");
		const cat = {
			done: [],
			doing: [],
			plan: [],
			drop: [],
			ev: [],
			note: [],
			mood: [],
			bang: [],
			ask: []
		};
		walk((date, e) => {
			if (!(e.groups && e.groups.includes(g))) return;
			const ed = e.sym === "task" && e.state === "done" && e.doneDay ? e.doneDay : date;
			if (!inR(ed)) return;
			const dd = fmtShort(ed);
			if (e.sym === "task") {
				if (e.state === "someday") return;
				if (e.state === "done") cat.done.push("· " + e.text + (e.note ? "——" + e.note : "") + "（" + dd + "）");
				else if (e.state === "dropped") cat.drop.push("· " + e.text + (e.note ? "——" + e.note : "") + (e.badge ? "（" + e.badge + "）" : ""));
				else if (e.state === "delegated") cat.doing.push("· " + e.text + "（已转交" + (e.delegate ? "给 " + e.delegate.to : "") + "）");
				else if (e.state === "migrated" && !e.due) return;
				else if (e.state === "migrated" && e.due && parseKey(e.due) <= parseKey(TODAY)) return;
				else if (e.due && parseKey(e.due) > parseKey(TODAY)) cat.plan.push("· " + e.text + "（" + fmtShort(e.due) + "）");
				else cat.doing.push("· " + e.text + (e.badge ? "——" + e.badge : e.progress ? "——已完成" + e.progress + "%" : ""));
			} else if (e.sym === "event") cat.ev.push("· " + e.text + "（" + dd + (e.children && e.children.length ? " · 引发 " + e.children.length + " 条" : "") + "）");
			else if (e.sym === "bang") cat.bang.push("· " + e.text + "（" + dd + "）");
			else if (e.sym === "ask") cat.ask.push("· " + e.text);
			else if (e.sym === "note") cat.note.push("· " + mealFullText(e));
			else if (e.sym === "mood") cat.mood.push("· " + e.text + "（" + dd + "）");
		});
		let out = "【#" + g + " " + label + "】" + rangeStr + "\n";
		const sec = (t, a) => {
			if (a.length) out += "\n" + t + "（" + a.length + "）\n" + a.join("\n") + "\n";
		};
		sec("✓ 已完成", cat.done);
		sec("▶ 进行中", cat.doing);
		sec("⏭ 已排未来", cat.plan);
		sec("✕ 搁置", cat.drop);
		sec("○ 相关事件", cat.ev);
		sec("！ 重点", cat.bang);
		sec("？ 疑问", cat.ask);
		sec("— 备忘", cat.note);
		if (incMood) sec("= 心情记录", cat.mood);
		if (out.trim().split("\n").length <= 1) out += "\n（该分组在此周期内暂无记录）";
		return out;
	}
	function openReport(g, kind, incMood) {
		incMood = !!incMood;
		const R = $("#report");
		R.innerHTML = "<div class=\"rv-head\"><div class=\"rv-title\">#" + g + " · 报告</div><button class=\"pill-btn\" id=\"rpClose\">收起</button></div><div class=\"rp-body\"><div class=\"rp-tabs\" id=\"rpTabs\"></div><div class=\"rp-text\" id=\"rpText\"></div><button class=\"rv-confirm\" id=\"rpCopy\" style=\"margin-top:14px\">复制报告</button><div class=\"rp-note\">原型为规则拼装示意 · 正式版可一键 AI 润色成正式语气、自定义模板</div></div>";
		const tabs = $("#rpTabs");
		[
			["day", "日报"],
			["week", "周报"],
			["month", "月报"]
		].forEach(([k, n]) => {
			const c = document.createElement("button");
			c.className = "chip" + (k === kind ? " on" : "");
			c.textContent = n;
			c.onclick = () => openReport(g, k, incMood);
			tabs.appendChild(c);
		});
		const mc = document.createElement("button");
		mc.className = "chip" + (incMood ? " on" : "");
		mc.textContent = "含心情";
		mc.onclick = () => openReport(g, kind, !incMood);
		tabs.appendChild(mc);
		const sc = document.createElement("button");
		sc.className = "chip";
		sc.textContent = "▣ 分享图";
		sc.onclick = () => openShare({
			type: "report",
			head: "啾啾岛 · 报告",
			cardTitle: "#" + g + " · " + ({
				day: "日报",
				week: "周报",
				month: "月报"
			}[kind] || "报告"),
			text: genReport(g, kind, incMood)
		});
		tabs.appendChild(sc);
		$("#rpText").textContent = genReport(g, kind, incMood);
		$("#rpClose").onclick = () => $("#report").classList.remove("on");
		$("#rpCopy").onclick = () => {
			const txt = $("#rpText").textContent;
			(platform.clipboard && platform.clipboard.writeText ? platform.clipboard.writeText(txt) : Promise.reject()).then(() => toast("已复制到剪贴板")).catch(() => {
				const r = document.createRange();
				r.selectNodeContents($("#rpText"));
				const s = getSelection();
				s.removeAllRanges();
				s.addRange(r);
				toast("已全选 · 长按复制");
			});
		};
		R.classList.add("on");
	}
	function bindReport() {
		reviewBtn.onclick = () => {
			if (navigationState.cur.name === "today") islandGo("postoffice", "inbox");
			else {
				navigationState.cur = { name: "today" };
				render();
			}
		};
	}
	// src/modules/journal/calendar.js
	function calMarks(y, m) {
		const marks = {};
		Object.keys(appState.PAGES).forEach((k) => {
			const a = k.split(".").map(Number);
			if (a[0] !== y || a[1] !== m) return;
			let n = 0;
			walkPage(k, () => n++);
			if (n) marks[a[2]] = {
				rec: n,
				fut: false
			};
		});
		walk((d, e) => {
			if (!e.due || e.state === "done" || e.state === "dropped") return;
			const a = e.due.split(".").map(Number);
			if (a[0] === y && a[1] === m) {
				marks[a[2]] = marks[a[2]] || { rec: 0 };
				marks[a[2]].fut = true;
			}
		});
		if ((SET.cycles || []).length) {
			const days = new Date(y, m, 0).getDate();
			const tK = parseKey(TODAY);
			for (let dd = 1; dd <= days; dd++) {
				const k = y + "." + m + "." + dd;
				if (parseKey(k) <= tK) continue;
				if (SET.cycles.some((c) => cycHits(c, k))) {
					marks[dd] = marks[dd] || { rec: 0 };
					marks[dd].fut = true;
				}
			}
		}
		return marks;
	}
	function renderCal() {
		const y = navigationState.cur.y, m = navigationState.cur.m;
		const ta = TODAY.split(".").map(Number);
		const head = document.createElement("div");
		head.className = "cal-head";
		const prev = document.createElement("button");
		prev.className = "icon-btn";
		prev.textContent = "‹";
		prev.onclick = () => {
			navigationState.cur.m--;
			if (navigationState.cur.m < 1) {
				navigationState.cur.m = 12;
				navigationState.cur.y--;
			}
			render();
		};
		const next = document.createElement("button");
		next.className = "icon-btn";
		next.textContent = "›";
		next.onclick = () => {
			navigationState.cur.m++;
			if (navigationState.cur.m > 12) {
				navigationState.cur.m = 1;
				navigationState.cur.y++;
			}
			render();
		};
		const tt = document.createElement("div");
		tt.className = "cal-title";
		tt.textContent = y + "年" + m + "月";
		head.appendChild(prev);
		head.appendChild(tt);
		head.appendChild(next);
		view.appendChild(head);
		const grid = document.createElement("div");
		grid.className = "cal-grid";
		[
			"一",
			"二",
			"三",
			"四",
			"五",
			"六",
			"日"
		].forEach((w) => {
			const d = document.createElement("div");
			d.className = "cal-wd";
			d.textContent = w;
			grid.appendChild(d);
		});
		const offset = (new Date(y, m - 1, 1).getDay() + 6) % 7;
		const days = new Date(y, m, 0).getDate();
		for (let i = 0; i < offset; i++) grid.appendChild(document.createElement("div"));
		const marks = calMarks(y, m);
		for (let d = 1; d <= days; d++) {
			const cell = document.createElement("div");
			cell.className = "cal-day";
			cell.dataset.day = d;
			if (y === ta[0] && m === ta[1] && d === ta[2]) cell.classList.add("today");
			const num = document.createElement("div");
			num.className = "num";
			num.textContent = d;
			cell.appendChild(num);
			const dots = document.createElement("div");
			dots.className = "dots";
			const mk = marks[d];
			if (mk) {
				const n = mk.rec >= 7 ? 3 : mk.rec >= 4 ? 2 : mk.rec >= 1 ? 1 : 0;
				for (let i = 0; i < n; i++) dots.appendChild(document.createElement("i"));
				if (mk.fut) {
					const f = document.createElement("i");
					f.className = "fut";
					dots.appendChild(f);
				}
			}
			cell.appendChild(dots);
			cell.onclick = () => gotoDay(y + "." + m + "." + d);
			grid.appendChild(cell);
		}
		view.appendChild(grid);
		const lg = document.createElement("div");
		lg.className = "cal-legend";
		lg.innerHTML = "<span><i></i>有记录</span><span><i class=\"fut\"></i>有安排</span><span>空白 = 没有记录</span>";
		view.appendChild(lg);
		const tip = document.createElement("div");
		tip.className = "readonly-tip";
		tip.textContent = "点过去的日子翻记录，点未来的日子看安排";
		tip.style.marginTop = "22px";
		view.appendChild(tip);
	}
	// src/modules/vault/index.js
	var vaultKey = null;
	var vaultItems = null;
	var vtReveal = /* @__PURE__ */ new Set();
	var pendingVDel = null;
	var vtEdit = null;
	function vB64(buf) {
		let s2 = "";
		const u = new Uint8Array(buf);
		for (let i = 0; i < u.length; i++) s2 += String.fromCharCode(u[i]);
		return btoa(s2);
	}
	function vBuf(b64) {
		const s2 = atob(b64);
		const u = new Uint8Array(s2.length);
		for (let i = 0; i < s2.length; i++) u[i] = s2.charCodeAt(i);
		return u.buffer;
	}
	async function vDerive(pass, saltB64) {
		const km = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
		return crypto.subtle.deriveKey({
			name: "PBKDF2",
			salt: vBuf(saltB64),
			iterations: 12e4,
			hash: "SHA-256"
		}, km, {
			name: "AES-GCM",
			length: 256
		}, false, ["encrypt", "decrypt"]);
	}
	async function vEnc(key, str) {
		const iv = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12));
		const ct = await crypto.subtle.encrypt({
			name: "AES-GCM",
			iv
		}, key, new TextEncoder().encode(str));
		const out = new Uint8Array(12 + ct.byteLength);
		out.set(iv);
		out.set(new Uint8Array(ct), 12);
		return vB64(out.buffer);
	}
	async function vDec(key, b64) {
		const u = new Uint8Array(vBuf(b64));
		const pt = await crypto.subtle.decrypt({
			name: "AES-GCM",
			iv: u.slice(0, 12)
		}, key, u.slice(12));
		return new TextDecoder().decode(pt);
	}
	async function vaultCreate(pass) {
		const salt = vB64(crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16)).buffer);
		const key = await vDerive(pass, salt);
		SET.vault = {
			salt,
			check: await vEnc(key, "dot-vault-ok"),
			data: await vEnc(key, "[]")
		};
		vaultKey = key;
		vaultItems = [];
		scheduleSave();
	}
	async function vaultUnlock(pass) {
		const v = SET.vault;
		if (!v) return false;
		try {
			const key = await vDerive(pass, v.salt);
			if (await vDec(key, v.check) !== "dot-vault-ok") return false;
			vaultItems = JSON.parse(await vDec(key, v.data));
			vaultItems.forEach((it) => {
				if (it._id && it._id > appState.uid) appState.uid = it._id;
			});
			vaultKey = key;
			return true;
		} catch (_) {
			return false;
		}
	}
	async function vaultPersist() {
		if (!vaultKey || !SET.vault) return;
		SET.vault.data = await vEnc(vaultKey, JSON.stringify(vaultItems));
		scheduleSave();
	}
	function vaultLock() {
		vaultKey = null;
		vaultItems = null;
		vtReveal = /* @__PURE__ */ new Set();
	}
	function vCopy(txt, msg) {
		const done = () => toast(msg || "已复制");
		if (platform.clipboard && platform.clipboard.writeText) platform.clipboard.writeText(txt).then(done).catch(() => done());
		else done();
	}
	function renderVault() {
		const wrap = document.createElement("div");
		if (!(window.crypto && crypto.subtle)) {
			wrap.innerHTML = "<div class=\"vt-tip\" style=\"margin-top:26px\">这台设备的浏览器环境不支持加密接口，树洞（密码）用不了。</div>";
			view.appendChild(wrap);
			return;
		}
		if (!SET.vault) {
			wrap.innerHTML = "<div class=\"vt-card\"><div style=\"text-align:center;padding:6px 0 2px\">" + jjImg("lock", 96) + "</div><div style=\"font-size:15px;font-weight:700;margin-top:8px\">给树洞设一个主口令</div><div class=\"vt-tip\" style=\"margin-top:6px\">所有内容用它加密后才保存，本机和云备份里都只有密文。<b style=\"color:var(--red)\">主口令忘了没有任何找回办法</b>，请记牢。<br>适合存 wifi 密码、会员号、水电户号这类；银行级密码建议放系统钥匙串，原生版会配 FaceID。</div><input type=\"password\" class=\"vt-in\" id=\"vtP1\" placeholder=\"主口令（至少 4 位）\"><input type=\"password\" class=\"vt-in\" id=\"vtP2\" placeholder=\"再输一遍\"><button class=\"rv-confirm\" id=\"vtNew\">建好树洞</button></div>";
			view.appendChild(wrap);
			$("#vtNew").onclick = async () => {
				const a = $("#vtP1").value, b2 = $("#vtP2").value;
				if (a.length < 4) {
					toast("口令至少 4 位");
					return;
				}
				if (a !== b2) {
					toast("两次输入不一致");
					return;
				}
				await vaultCreate(a);
				toast("树洞建好了 · 记牢主口令");
				render();
			};
			return;
		}
		if (!vaultKey) {
			wrap.innerHTML = "<div class=\"vt-card\"><div style=\"text-align:center;padding:6px 0 2px\">" + jjImg("lock", 96) + "</div><div style=\"font-size:15px;font-weight:700;margin-top:8px;text-align:center\">树洞已上锁</div><input type=\"password\" class=\"vt-in\" id=\"vtP\" placeholder=\"输入主口令解锁\"><button class=\"rv-confirm\" id=\"vtGo\">解锁</button></div>";
			view.appendChild(wrap);
			const go = async () => {
				if (await vaultUnlock($("#vtP").value)) {
					toast("已解锁");
					render();
				} else toast("口令不对（或数据损坏）");
			};
			$("#vtGo").onclick = go;
			$("#vtP").addEventListener("keydown", (ev) => {
				if (ev.key === "Enter") go();
			});
			setTimeout(() => $("#vtP") && $("#vtP").focus(), 60);
			return;
		}
		const bar = document.createElement("div");
		bar.className = "rp-tabs";
		bar.style.marginTop = "16px";
		const addC = document.createElement("button");
		addC.className = "chip primary-action";
		addC.textContent = "＋ 添加";
		const lockC = document.createElement("button");
		lockC.className = "chip";
		lockC.textContent = "锁定";
		bar.appendChild(addC);
		bar.appendChild(lockC);
		view.appendChild(bar);
		lockC.onclick = () => {
			vaultLock();
			toast("已锁定");
			render();
		};
		const form = document.createElement("div");
		form.className = "vt-card";
		form.style.display = "none";
		form.innerHTML = "<input class=\"vt-in\" id=\"vtSite\" placeholder=\"哪里的账号（如：小区wifi / 京东）\" style=\"margin-top:0\"><input class=\"vt-in\" id=\"vtUser\" placeholder=\"账号（可不填）\"><input class=\"vt-in\" id=\"vtPwd\" placeholder=\"密码\"><input class=\"vt-in\" id=\"vtNote\" placeholder=\"备注（可不填）\"><button class=\"rv-confirm\" id=\"vtSave\">保存</button>";
		const vtFill = (it) => {
			$("#vtSite").value = it ? it.site || "" : "";
			$("#vtUser").value = it ? it.user || "" : "";
			$("#vtPwd").value = it ? it.pwd || "" : "";
			$("#vtNote").value = it ? it.note || "" : "";
			$("#vtSave").textContent = it ? "保存修改" : "保存";
		};
		view.appendChild(form);
		addC.onclick = () => {
			vtEdit = null;
			const showing = form.style.display === "block";
			form.style.display = showing ? "none" : "block";
			if (!showing) {
				vtFill(null);
				$("#vtSite").focus();
			}
		};
		$("#vtSave").onclick = async () => {
			const site = $("#vtSite").value.trim();
			if (!site) {
				toast("先写这是哪里的账号");
				return;
			}
			const rec = {
				site,
				user: $("#vtUser").value.trim(),
				pwd: $("#vtPwd").value,
				note: $("#vtNote").value.trim()
			};
			if (vtEdit) {
				const it = vaultItems.find((x) => x._id === vtEdit);
				if (it) Object.assign(it, rec);
				vtEdit = null;
				await vaultPersist();
				toast("已保存修改");
				render();
			} else {
				vaultItems.unshift(Object.assign(rec, { _id: ++appState.uid }));
				await vaultPersist();
				toast("已加密保存");
				render();
			}
		};
		if (!vaultItems.length) {
			const d = document.createElement("div");
			d.className = "empty-hint";
			d.style.textAlign = "center";
			d.style.padding = "26px 2px 8px";
			d.innerHTML = jjImg("nap", 72) + "<div style=\"margin-top:8px\">松松：树洞还空着，点「＋ 添加」存第一条。</div>";
			view.appendChild(d);
		}
		vaultItems.forEach((it) => {
			const c = document.createElement("div");
			c.className = "vt-card vt-item";
			const rev = vtReveal.has(it._id);
			c.innerHTML = "<div class=\"vt-site\">" + vEsc(it.site) + "<button class=\"gm-btn\" data-a=\"ed\" style=\"margin-left:auto\">改</button><button class=\"gm-btn danger\" data-a=\"del\" style=\"margin-left:0\">" + (pendingVDel === it._id ? "确认删除" : "删") + "</button></div>" + (it.user ? "<div class=\"vt-line\"><span class=\"lab\">账号</span><span class=\"val\">" + vEsc(it.user) + "</span><button class=\"gm-btn\" data-a=\"cu\">复制</button></div>" : "") + "<div class=\"vt-line\"><span class=\"lab\">密码</span><span class=\"val" + (rev ? "" : " masked") + "\" data-a=\"rv\" style=\"cursor:pointer\">" + (rev ? vEsc(it.pwd) : "••••••••") + "</span><button class=\"gm-btn\" data-a=\"cp\">复制</button></div>" + (it.note ? "<div class=\"vt-note\">" + vEsc(it.note) + "</div>" : "");
			c.querySelector("[data-a=\"del\"]").onclick = async () => {
				if (pendingVDel !== it._id) {
					pendingVDel = it._id;
					toast("再点一次确认删除");
					render();
					return;
				}
				vaultItems = vaultItems.filter((x) => x._id !== it._id);
				pendingVDel = null;
				await vaultPersist();
				toast("已删除");
				render();
			};
			c.querySelector("[data-a=\"ed\"]").onclick = () => {
				vtEdit = it._id;
				form.style.display = "block";
				vtFill(it);
				try {
					form.scrollIntoView({ block: "center" });
				} catch (_) {}
			};
			const cu = c.querySelector("[data-a=\"cu\"]");
			if (cu) cu.onclick = () => vCopy(it.user, "账号已复制");
			c.querySelector("[data-a=\"cp\"]").onclick = () => vCopy(it.pwd, "密码已复制");
			c.querySelector("[data-a=\"rv\"]").onclick = () => {
				if (vtReveal.has(it._id)) vtReveal.delete(it._id);
				else vtReveal.add(it._id);
				render();
			};
			view.appendChild(c);
		});
		const tip = document.createElement("div");
		tip.className = "vt-tip";
		tip.textContent = "本机与云备份里只有密文 · 内容不进搜索、报告和分享 · 离开或点「锁定」后需重新输入主口令";
		view.appendChild(tip);
	}
	// src/ui/route-sheets.js
	function dismissRouteSheets() {
		const active = document.activeElement;
		if (active?.matches("textarea,input,select,[contenteditable=true]")) active.blur();
		navigationState.focusRef = null;
		if ($("#gsheet").classList.contains("on")) dismissGroupSheet();
		if ($("#voice").classList.contains("on")) $("#voCancel")?.click();
		actionsState.qsTarget = null;
		for (const id of [
			"gsheet",
			"qsheet",
			"shSheet"
		]) {
			const panel = document.getElementById(id);
			panel?.classList.remove("on");
			if (id === "gsheet" || id === "qsheet") panel.replaceChildren();
		}
		closeRowPop();
		if (!$("#drawer").classList.contains("on")) $("#mask").classList.remove("on");
		updateToolbarVis();
	}
	// src/ui/help.js
	function showManual() {
		const R = $("#report");
		R.innerHTML = "<div class=\"rv-head\"><div class=\"rv-title\">功能手册</div><button class=\"pill-btn\" id=\"mnClose\">收起</button></div><div class=\"rp-body\"><div class=\"rp-text\">【今日页三档 · 发给啾啾】\n待办 · 日常 · 随想；新的一条都从最下面的输入栏发给啾啾，像发消息一样，不用想放哪儿，我替你放好；哪一栏还空着，点那一行浅色字，直接写在那一栏\n•  待办——点一下打勾，长按处理（处理面板顶上写来历）\n○ 日常按发生时刻排列，点图标看细节，也可以长按整条补时间和子项\n— 随想记灵感、疑问和心情。长按后选「写成一篇」可以放进记事小亭\n发出去我回一句：放在哪、能撤回、能改；一句话说了好几件事，我拆好给你看，点「都放好」才放进去\n长按文字，或在编辑栏点「更多」，可以看分组、花销和同行人，也可以改类型、分享或删除。\n\n【手帐和小岛】\n首页只放手帐；吃的、看的、读的、玩的、记的账住进岛上的房子，首页最下面一行「今天在岛上」，点开能看能改\n明确的消费、阅读和体重记录会先显示归属签，点签可改，确认后入屋，也能撤回。拿不准时我会问一句「送去哪」；说过「不用」的下次不再问\n每栋房子里都能「＋ 记一条」，哪天的事选哪天；侧栏点「+ 添加或管理岛上的房子」分组选房或置顶；日历、提醒、待办池常驻，信箱在首页右上角，全景岛在侧栏设置下一行\n\n【书写】\n写「明天 / 下周四 / 8.15号 / 28号」自动放到那天的待办；写「下午三点 / 16:00」自动挂时间\n说的是过去的事——「昨天打车花了 45」「上周五和朋友吃了火锅」「11月3日交了物业费」——我放回那天，账也记在那天\n一句里连加的钱自动算总数：「一共花了100+30+40」记 170 元；写了「=273.8元」就按你写的\n「一个经验：…」「心得：…」「冷知识：…」「一个想法：…」这样开头的，放进随想\n敲 # 归分组；已经记下的那条，点字就能改，回车在下面接着写\n\n【因果记录】\n事件行回车：下一行自动挂在这件事下面\n空的子行再回车：回到顶层\n点事件的图标 →「在这件事下面补一条」；「▾3」点击折叠\n\n【处理任务】\n点待办圆点完成。长按文字可以推迟、放进待办池、转交或放弃。历史日补勾默认记在原日，三秒内可点「改为今天完成」。\n推迟可选任意日期并填进度；转交要填给谁和跟进日，到期自动提醒\n处理面板里的备注会进日报周报\n\n【翻阅】\n今日页左右滑（或顶栏 ‹ ›）翻到前一天 / 后一天\n☰ 侧栏：上面是手帐（日历、提醒、待办池，和你的分组·长按管理），下面是小岛（开着的房子，长按置顶或关掉，「＋」里开别的），再往下按标记汇总、搜索\n汇总、房子、搜索里点待办符号可直接勾掉，点字直接改（改完留在原处），点日子去那天\n长按房子里的记录看分类、时间及听写纠错，点「看原条」可跳回来源；历史页的「→8.12」跳去目标日\n\n【🎤 说话】\n点输入栏左边的话筒，再按键盘右下角的 🎤 一口气说完，点「发送」：说了好几件事我拆开给你看，确认才放进去；想细改点「细改」，进整屏的分拣页（复盘里的「说说今天」也是它）。听错的名字照你的词典改好（设置 → 我的词典），点 ↺ 改回\n\n【🎲 今天吃什么】\n美食 → 吃什么：从你的宝藏店（写过「宝藏 / 会再来 / 回购 / 必吃」或 8 分以上的）和想吃的店里抽，理由全是你自己写过的话；吃完点 ✓ 一键评价。美食分去过、宝藏、避雷、想吃：写「想去吃「店名」」「种草了「店名」」记成想吃，不算去过。三餐打卡在设置里可以再打开\n\n【早安卡】\n每天第一次打开递上一张：大日期、农历节气、天气和昨天比冷暖、啾啾的一句话；有约好的事、去年今日 / 上个月的今天才出现在下面\n收起后日期旁留一个天气小签，点开再看；城市在 设置 → 天气城市 里加，最多 3 个\n\n【复盘与报告】\n首页右上「信箱」查看岛民来信与系统消息；首页页末「睡前复盘一下」或侧栏「更多 → 晚间复盘」查看今日快照和盖章，点「现在过一遍」可整理未完成事项\n没日子的事当天没做完，第二天自动收进「☾ 待办池」，不催不计数（设置 → 提醒力度 可切到「规律」）\n分组视图里一键生成日报 / 周报 / 月报，可选含心情\n\n【上岛】\n设置 → 功能手册 · 实验室 →「重新走一遍上岛」：改称呼、城市、生日，重新盖房子、换提醒搭档\n\n【数据安全】\n数据只存在本机；设置里定期「完整备份(.json)」\n⏰ 芯片不会响，点它「加入系统日历」才有真提醒</div></div>";
		$("#mnClose").onclick = () => R.classList.remove("on");
		R.classList.add("on");
	}
	function showChangelog() {
		const R = $("#report");
		R.innerHTML = "<div class=\"rv-head\"><div class=\"rv-title\">版本记录</div><button class=\"pill-btn\" id=\"clClose\">收起</button></div><div class=\"rp-body\"><div class=\"rp-text\">v3.11.2（当前 · 2026.11.24）\n· 日常可记起止时间，按开始时间排序。账房可管理支出分类，店单支持编辑，茶屋将共同回忆收进「特别的日子」。\n\nv3.11.1（2026.11.24）\n· 待办轻点符号完成或恢复，长按整条查看详情。建筑明细收起小标签，发生时间操作键统一为 44px。\n· 设置和全景岛各占一行。今日手帐页末可直接进入晚间复盘。\n\nv3.11.0（2026.11.24）\n· 简约侧栏按生活板块选房。首页时间线、五键工具栏和条目抽屉统一，灯塔分为待办池与心愿。\n· 复合记录按意图分拣，支持确认入屋、餐票就餐方式和定期收入。\n\nv3.10.3（2026.11.23）\n· 切页不再重复保存；岛主小筑按需读取排盘资料，安装后仍可离线使用。\n\nv3.10.2（2026.11.22）\n· 照片保存时重开手帐，也能找到刚记的待办。\n\nv3.10.1（2026.11.21）\n· 小筑资料随主程序提供，首次进入可直接使用。\n\nv3.10.0（2026.11.21）\n· 岛主小筑：阿卜的出生手记、性格测试示意和四张明信片。\n\nv3.9.0（2026.11.20）\n· 滴答钟楼增加阶段计划和定时提醒。\n\nv3.8.1（2026.11.20）\n· 修正带钟点的日常误进待办\n\nv3.8.0（2026.11.19）\n· 日常按时间排列，支持补时间与修改\n\nv3.7.0（2026.11.18）\n【安排与亲友】\n· 一年后、三个月后及提前提醒放进对应日期待办\n· 新朋友资料预览收录，生日默认阳历\n· 重要经历可加入亲友时间点，原记录保留\n\nv3.6.0（2026.11.17）\n【阅读与打开体验】\n· 四档字号设置，保留行首符号，首次操作提示\n· 明信片最近领取在前，未获得默认折叠\n· 首屏与图片分离，本机缓存优先打开\n\nv3.5.5（2026.11.16）\n【加载与信箱修复】\n· 明信片场景图随 HTML 内置，不再依赖单独上传图片\n· 天气请求设置独立超时，失败可重试\n· 信箱批量按钮独立固定在底部，列表单独滚动\n\nv3.5.4（2026.11.14）\n【海边饭馆样式】\n· 店单加上菜单边框、格纹纸边和热汤小图案\n· 店铺改为餐票卡片，标记和人均更清楚，保留原记录与独立抽卡\n\nv3.5.3（2026.11.14）\n【海边饭馆】\n· 顶部简化为记美食、今天吃什么和我的店单，底部保留全部原始记录\n· 人均参考独立保存，可修改清空，不计入账房；旧支出保留\n· 抽卡沿用原来的独立页面，更多收起分享与三餐入口\n\nv3.5.2（2026.11.13）\n【来信与信箱整理】\n· 14封初见介绍信更新，三段排版、岛民姓名使用强调色\n· 未读消息在前、已读沉底，支持一键领取与删除已读\n· 清理消息不删除明信片，旧记录和收藏继续保留\n\nv3.5.1（2026.11.13）\n【首页信箱】\n· 首页右上改为信箱，未读消息显示圆点；复盘移到侧栏更多\n· 全部、岛民来信、系统消息分类，已读与收藏分别保存\n· 早安照片看到后不重复提示，旧收藏与来信保留\n\nv3.5.0（2026.11.13）\n【全景岛与明信片】\n· 14栋建筑可点选进入，支持地图放大和拖动，加入晨露小站与呦呦\n· 简约版可直接打开信箱和明信片册，收信、收藏、筛选与分享\n· 14张入住问候、42张岛民生活与故事、4张呦呦场景，共60张\n· 当天打开早安卡附一张明信片，每日一次；没打开不发、不补发，已收卡片保留\n\nv3.4.0（2026.11.12）\n【晨露小站】\n· 体重、围度、经期、饮水记录与变化图，支持修改、删除、补记\n· 身体指标估算、个人周期预计、水杯进度，计算说明收在页底\n· 四个板块可排序、移除和恢复，健康记录纳入完整备份\n【小岛页头】\n· 14栋建筑统一信纸式门楣，换上住户与建筑的新组合图\n【文案修订 · 11.13】\n· 上岛引导、岛民台词、消息回复与早晚提示改为具体简短的说法\n\nv3.3.5（2026.11.12）\n【美食 · 想吃】\n· 写「想去吃「店名」」「种草了「店名」」「收藏一家「店名」」「下次去吃「店名」」，记成想吃，不再算成去过一次\n· 集子里四格并排：去过 · 宝藏 · 避雷 · 想吃；「记一家店」也能选想吃\n· 吃什么：宝藏和想吃都会抽到；想吃的卡写着「还没去过 · 哪天收的」，吃完点 ✓ 评价，就从想吃挪到去过\n· 美食地图里也有想吃的店，后面标一个「想吃」\n\nv3.3.4（2026.11.11）\n【侧栏】\n· 小岛的房子一行放 3 个，跟上面手帐那排一样大，不挤了\n【首页】\n· 待办里有东西时，不再提示「待办池 · 几件 · 想做哪件捞回来」；待办空着才出来\n【记账】\n· 一句里连加的钱自动算总数：「今天旅游一共花了100+30+40」记 170 元，回话里说一声「100+30+40 一共 170 元」\n· 写了等号的按你写的总数：「251.9+16.9+5=273.8元」记 273.8，不再把 251.9 也算进去；加起来对不上，回话里提一句\n· 一句里两笔一样的钱都算（早饭10元，午饭10元 = 20 元）；「花了300，……300元」这样同一笔说了两遍的，还是算一笔\n· 一句里最多认 8 笔（原来 3 笔）\n\nv3.3.3（2026.11.11）\n【小岛】\n· 住户的圆头像换成新画的：上岛引导里的三封信、身份四选一、住户说话，头像都是整张放进圆框，不再切掉一块\n· 发消息后啾啾回话，左边那个小圆也换成啾啾的圆头像\n\nv3.3.2（2026.11.11）\n【首页】\n· 哪一栏空着，就有一行浅色字（写一件要做的事 / 记一件今天的事 / 冒出来的念头），点一下直接在那一栏写；那支显眼的笔去掉了\n· 「一个经验：…」「心得：…」「冷知识：…」「一个想法：…」放进随想\n· 小卡里把待办换成日常 / 随想，真的挪过去，不再留在待办\n· 屏幕最下面那条深色的米色去掉了，整页一个颜色铺到底\n【房子和汇总】\n· 从侧栏房子进去的记录（还有账房、茶屋、汇总、搜索）：点字直接改，改完留在原处；点行首图标看这一行；点日子才去那天\n【美食】\n· 只分 吃过 · 宝藏 · 避雷，不再有「家常」\n· 吃什么只从宝藏里抽；吃完的评价是 宝藏 / 一般 / 避雷，「记一家店」是 宝藏 / 吃过 / 避雷\n\nv3.3.1（2026.11.11）\n【小岛】\n· 全家福里有翘翘了\n· 小岛茶屋门口挂上茶杯招牌，两栋中间摆了一张茶桌\n· 上岛时：三封信那行和落地那天的纸条，换成从信封里探头的啾啾；办岛民证那屏，啾啾在盖章；空地上插的是画好的小木牌\n\nv3.3（2026.11.10）\n【上岛】\n· 第一次打开有五屏引导：拆三封信、办一张岛民证（称呼、城市、生日、在忙什么）、先盖几栋房子、挑个提醒搭档、看看盖好的小岛\n· 落地那天，待办下面有一张啾啾的纸条，点一下例句就填进输入栏；发出第一条，纸条收走\n· 设置 → 功能手册 · 实验室 里能重新走一遍\n【说到别的日子，就放到那天】\n· 「昨天打车花了 45」「上周五和朋友吃了火锅」「11月3日交了物业费」：放回那天，账也记在那天；今天这页待办下面留一行\n· 要做的事只说了「28号」也认得：这个月还没到就是这个月，过了就是下个月\n【小岛】\n· 房子都换成四个字：铜板账房、记事小亭、秘屋树洞……日历换上信风邮局，待办池换上心愿灯塔，温泉汤屋、秘屋树洞有了自己的样子\n· 新房子海风学堂（学习），学生党可以在上岛时盖\n· 提醒力度「严格」改叫「规律」\n· 生日那天，早安卡上我第一个祝你\n· 啾啾的回话改了口气；收进饭馆的那句会顺带说一声记了多少钱\n\nv3.2（2026.11.9）\n【发给啾啾】\n· 首页最下面多了一条输入栏：像发消息一样，打字或按键盘上的 🎤 说，点「发送」就记下了；档不用选，我来认\n· 发出去我回一句：放在哪、能撤回、能改；吃的、看的这类，有把握就直接收进房子，没把握就问一句\n· 一句话说了好几件事，我拆好给你看，点「都放好」才放进去；想细改就进整屏的分拣页\n· 每档的「＋」、点空白处写、右下角的「说一段」都收进了这条输入栏\n【三档】\n· 要做的事改叫待办，发生的事改叫日常，想法改叫随想；心情不再单独一档，并进随想\n· 随想也按内容挑小图标：💡 灵感、📖 学到、❓ 疑问、❗ 重点、🌤 心情，点图标能换\n【记事亭 · 随想架】\n· 记事亭多了「随想」页签：所有随想按日子收在一起，能按图标筛，点一条跳回那天\n· 挑几条「写成一篇」，变成一个新本子接着写；原来那几条还在当天，标上「已写成」\n\nv3.1（2026.11.9）\n【手帐和小岛分开】\n· 首页只放手帐：要做的事、发生的事、想法、心情\n· 吃的、看的、读的、玩的、记的账住进岛上的房子；首页最下面一行「今天在岛上」，点开能看能改\n· 写完一行，有把握就直接收进房子，旁边能撤回；没把握就问一句「送去哪」；什么都不像的留在手帐。说过「不用」的下次不再问\n【侧栏】\n· 上面是手帐：日历、提醒、待办池三格，和你自己的分组\n· 下面是小岛：开着的房子排在这，长按能置顶或关掉，「＋」里能开别的\n【房子】\n· 设置里新加「岛上的房子」：每栋都能开关、置顶；关掉的不出现在侧栏，记过的都还在，回到手帐里\n· 美食、电影、阅读、娱乐的房子里有「＋ 记一条」，哪天的事选哪天\n· 新模板「娱乐」：休闲、KTV、按摩这类，住温泉汤屋\n【改名】\n· 熟人改叫亲友，循环提醒改叫提醒，笔记本改叫笔记，账号小本改叫密码，想做的事改叫待办池\n· 房子名：海边饭馆、小岛影院、小岛书屋、账房、小岛茶屋、温泉汤屋、记事亭、树洞\n· 日历的邮局、待办池的灯塔、树洞、汤屋还在画，先用旧图顶着\n\nv3.0（2026.11.6）\n【改名 · 啾啾岛 Jotbird】\n· 点点手帐改名「啾啾岛」，英文名 Jotbird。陪你记事的，从一颗小圆点换成了住在岛上的小鸟啾啾\n· 啾啾出现在引导页、侧栏、早安卡、复盘结束、各种空白页、账号小本、说一段分拣和出错提示里\n· 集子变成岛上的房子：美食街、小电影院、书屋、小账房、工作坊；侧栏的格子和工具也换上了小房子\n· 今天要做的都做完了，啾啾会出来说一声\n【换色】\n· 纸、墨、围巾红、海青，都从啾啾和岛上取色；6 套主题色也换成岛上的颜色，字比以前清楚\n· 分享图换了落款，多了「信纸」底图\n【更新提示】\n· 主屏幕上的名字和图标，要删掉旧图标、重新「添加到主屏幕」才会变成啾啾岛。删之前先在「设置 → 数据与备份」做一次完整备份；加好后要是记录没了，就用它恢复\n\nv2.32（2026.11.6）\n【更稳 · 更好点】\n· 照片和文字分开存：照片挪到浏览器的另一个仓库，不再挤占文字那 5MB；以前的照片第一次打开时自动搬过去，导出和云备份照旧带图\n· 「数据与备份 → 存储占用」能看到文字和照片各占多少\n· 行首的符号、每档的 ＋、翻天的箭头、字前的时间、小卡里的按钮：看起来一样大，手指能点中的范围变大了\n· 按标记汇总、搜索结果很长时先显示最近 120 条，底下点「再往前」接着看\n· 早安卡「今天的事」里单独设了时间的任务，时间也显示出来了\n· 约到某天、推迟到明天的任务，到了那天时间还在（以前会丢）\n· 「晚饭后散步」这种算运动 🏃，不再认成吃饭\n\nv2.31（2026.11.5）\n【今日页 · 分四档】\n· 要做的事 · 发生的事 · 想法 · 心情 四档固定；哪档还没写只剩一行浅色标题，点「＋」直接往那档写\n· 「？疑问」「！重点」归在想法里；挂在事件下面的子条目跟着事件走\n【发生的事用图标】\n· 行首按内容自动挑：🍚 吃喝（说了花多少、和谁也还是 🍚）· 💼 工作 · 🚗 出行 · 🎡 玩 · 🎬 看片 · 🏥 看病 · 🏃 运动 · 📚 学 · 🛍️ 买 · 🎁 人情 · 🏠 家里 · 👥 见人\n· 认错了点图标换，这一行就记住你选的\n【行下不再挂小签】\n· 分组、记账类别、和谁、从哪转来、听写纠错、拆条、避雷，全部收进点符号弹出的小卡；任务长按，处理面板顶上写来历\n· 时间写在字前面；避雷过的店，图标上一个小红点\n· 一行想换档（比如心情认成了事件），小卡里点「⇄」挪过去\n【早安卡】\n· 大日期、天气、点点的一句话放在上面；今天的事、去年今日 / 上个月的今天放下面，没有就不出现\n· 随便抽一条的「翻到一页」和饭点抽卡那行拿掉了\n· 今日页顶上的天气条缩成日期旁的小签，点一下看整张早安卡\n【侧栏】\n· 上面四格：默认 日历 · 想做的事 · 美食 · 记账，长按换；分组变成一排标签（长按管理）；其他工具一排图标；按标记汇总折起来\n【设置】\n· 分成 记录 / 提醒 / 工具箱 / 数据 / 其他；备份收进「数据与备份」；「任务风格 随缘 / 对账」改叫「提醒力度 温和 / 严格」\n\nv2.30（2026.11.5）\n【🗣 说一段 · 我来分拣】\n· 右下角的话筒换成「说一段 · 我来分拣」：点开是整屏，键盘直接弹好，按键盘右下角的 🎤 一口气说完，点右上角「分拣」\n· 分拣结果按放到哪分组：今天发生 / 今天要做 / 后天 / 昨天…，每条能改字、⇄ 换地方、✕ 不要；没问题点「确认」才放进去\n· 放到别的日子的，会去掉「后天」「昨天」这类词，到了那天读着才对；今天这页留一行小字，点一下跳过去\n· 说到一半退出也不丢，下次打开接着说\n【📖 我的词典 · 从你的记录里长出来】\n· 认识的人、去过的店自动收进词典，越常写越靠前；英文名（orion）也认得了\n· 听写打错的名字自动改好并标出来（「布尔」→ 不二），点 ↺ 改回，以后就不这样改\n· 店名说简称也认得：「陈先进」就是陈先进小馆，算去过一次；「姐姐」「我姐」算同一个人\n· 你手动把名字改对一次，它就记住；设置 → 我的词典 里能看、能删、能手动加「A 就是 B」\n· 「和旭旭、不二、orion、姐夫」这种一长串名单，每个人都算上\n\nv2.29（2026.11.5）\n【🎲 今天吃什么 · 抽卡】\n· 美食板块第二个页签换成「吃什么」：只从你说过好吃的店里抽，避雷的永远不会出现；宝藏是金边卡\n· 理由全是你自己写过的话：原话、你给自己的提醒（几点去、几个人去）、必点和别点、上次和谁花了多少，再加上今天的天气\n· 城市跟早安卡走，可选堂食 / 外卖；降温的日子「想吃热乎的」自动亮；好久没去的店更容易出现\n· 点「就它了」进今天要做；吃完点 ✓，一键说「宝藏 / 还想去 / 一般 / 避雷」，就算去过一次\n· 早安卡在饭点多一行「中午 / 晚上吃什么？抽一张」\n【🍚 只记喜欢的和避雷的】\n· 三餐打卡退役：三餐页签和复盘里的三餐格子默认收起，以前的记录都在，设置里可以再打开\n· 新增「记一家店」：店名、宝藏 / 还想去 / 避雷、一句话，必点别点城市花费都可不填\n· 去过几次：任何一句话里提到这家店都算（同一天算一次）\n· 又写到避雷过的店，那行下面冒一枚红签，提醒你当时说过什么\n· 识别补强：「可复购」「不会再吃了」认得了；「天使面没那么好吃了」「避雷蓝龙虾」只算单品，不冤枉整家店\n【🎙 说一段，我来安排】\n· 今日页右下角常驻一颗 🎙，复盘里也有「说说今天」：用 iPhone 键盘的听写一口气说，点「整理一下」，每句自动放到该去的地方——后天要做的进后天，今天吃的进今天还认出店名和好不好吃，花的钱进记账（「打车花了45」没说元也认），昨天的事放回昨天\n· 放之前给你看一眼，哪句放哪点一下就能换，不要的划掉\n· 直接在某一行里说了一大段，行下会出现「✂ 拆成 N 条」\n\nv2.28（2026.11.5）\n【☀ 早安卡 · 每天第一次打开】\n· 今天几号、农历、节气节日，离下个假期还有几天\n· 天气：今天和昨天的温度画成两根条，冷了暖了一眼看出；跟着给穿衣建议（加外套 / 少穿一件 / 照昨天穿），几点开始下雨也说\n· 今天的事：谁过生日、约好今天的、转交该跟进的——只放有日子的\n· 翻到一页：从旧记录里抽一条（一个月前的今天优先），点一下跳回那天\n· 最后点点说一句话；点「开始全新的一天」进今日页\n· 收起后今日页顶上留一行天气条，点开再看整张卡\n· 天气城市在 设置 → 天气城市：最多存 3 个，卡片上点城市名来回切，也能一键定位；没网就不显示天气，别的照常\n【随缘：没做完的不再天天搬】\n· 没日子的任务当天没做完，第二天自动收进「☾ 想做的事」：不弹窗、不计次、不催；今日页一行小字能看到，想做哪件点「⤴ 今天做」\n· 推迟到某天、那天正好没打开的不会再丢：两天内补到今天（带「原定」小签），更久的收进想做的事\n· 晚间复盘直达快照和盖章；想逐件过，点「现在过一遍」\n· 今日页不再挂「>×5」这类拖延计数\n· 喜欢每天逐件表态的，设置 → 任务风格 切回「对账」，一切照旧\n· Someday 改叫「想做的事」\n【三餐不追“没吃”】\n· 打卡墙上没记的那顿只是一个小点，不再是等你填的虚圈\n· 「三餐齐全连击」退役，换成只增不减的「本月吃到新店」\n【其他】\n· App 在后台过了夜，回来自动翻到新的一天；切走前没存的内容先存好\n\nv2.27（2026.8.28）\n【⚙ 今日小事折叠条 · 正文归正文】\n· 模块生出来的行——三餐打卡（含没吃）、本子足迹（开了/写了）、「记一笔」的账——不再混在流水里，收进页尾一条：「⚙ 今日小事 · 5 条　🍚没吃×2 · 📓本子×2 · 💰记账×1」\n· 你亲手写的句子永远在正文，哪怕带着 🍚💰 小签；点条展开是完整的行，照旧能改能删能挂；手动挂到事件下面的小事跟着事件走，不折叠\n· 复盘快照和一日分享卡默认只算正文（任务不受影响）；从汇总/搜索/打卡墙跳到某条小事时会自动帮你展开\n\nv2.26（2026.8.26）\n【记账类别 · 你说了算】\n· 类别管理（盘点页「✎ 类别」或换类面板底部进）：预置八类可改叫法（自动识别规则照旧），自定义的可改名可删——改名会带着用过它的记录一起换，删了的回到自动分类（双确认）\n【点类别看它的全部】\n· 盘点里点任何一个类别条，跳到流水只看那一类：大数字、日均、逐日账单全部只算它；流水页的图例也能点；「只看 · 出行 ✕」一点回到全部\n\nv2.25（2026.8.26）\n【💰 记一笔 · 哪天花的记哪天】\n· 记账页新增「＋ 记一笔」：金额、类别、一句备注，还有个日期框——前天打的车今天想起来，选回前天就行\n· 记下的这笔不进什么独立账本，直接并到那天的手帐流水里，行首以 💰 符号出现，和手写的一样可改可删可撤\n· 备注留空就用类别名组句（「出行 45元」）；选了类别的直接定类，没选的按词典自动认\n\nv2.24（2026.8.26）\n【💰 记账板块（方案B）】\n· 不用换记录方式：任何一行写了金额（45元 / ¥18 / 30块）就自动成账；「工资到账」这类收入句自动排除\n· 类别从「打车/水电/买了…」这些词里保守认出（吃喝/出行/购物/居住/娱乐/医疗/人情/其他），三餐美食自动算吃喝、电影票算娱乐；认不出老实归其他\n· 行下多一枚 💰 小签，点开可换类别、可自定义类别、可选「不算花销」——处处可改铁律\n· 板块页双页签：📒 流水（本月大数字、分类彩条、逐日账单，每行点了跳回当天原句）｜📊 盘点（本月/上月、最大一笔、去向条形、几句值得一提，可切上月/今年、可出分享卡）\n· 聪明工具条同步递 💰 抓手；板块管理「💰 记账（扩展）」默认关\n【¥ 处处能补金额】\n· 三餐快捷表本就有金额框；现在电影/读书/美食集子里没写金额的行，会有一枚「¥ 补一笔」轻推——点开填个数，拼进句尾就归账\n\nv2.23（2026.8.25）\n【美食升格为板块 · 侧栏一个门】\n· 侧栏不再有 #美食 分组 + 三餐 两个入口——板块区一个「🍚 美食」，进门是双页签：🗂 集子（宝藏/家常/避雷、榜单、美食地图、分享）｜🍚 三餐（连击、外卖、花销、打卡墙），横着一步互切，不用跳页\n· 美食不再叫标签：行下小签从「#美食」改为「🍚 美食」，分组面板、聪明工具条同步改口；数据结构不变，老备份原样兼容\n· 板块管理里「三餐」改名「美食」，一个开关管整个板块；已经在用集子的，更新后自动点亮\n· 从打卡墙跳去某天再返回，会回到三餐那一签，不会跑回集子\n\nv2.22（2026.8.25）\n【三餐三改（按你的截图反馈）】\n· 快捷填写表：时间框换成「¥ 花销」——填了就拼进句尾（45元），当月吃饭花销直接算上；时间本来就有餐次，不用再填\n· 打卡墙四态分明：虚圈＝还没记（点一下补）、✕＝这顿没吃、灰点＝日常吃、彩点＝进了美食集子——没吃和没记不再撞脸\n· 餐食行不再用笔记的「—」：统一小饭碗 🍚 符号；快捷表记的这顿，餐次改成行下小签「🍚 午饭」，不再占正文字符——正文只剩你吃了什么\n· 手写的「晚饭点了外卖…」照旧全认；导出备份、报告、分享图里会自动把餐次词补回去，语境不丢\n\nv2.21（2026.8.24）\n【生日双历互算】\n· 填了出生年月日的生日（阳历阴历都行），卡片自动换算出另一个历法的生日：「换算：TA的农历生日是五月初二 · 下次落 明年6月6日」\n· 一键「🌗 农历生日也提醒 / 🌞 阳历生日也提醒」补建另一条；已有的不重复建（orion 和 Orion 这种大小写也认得出是同一人）\n· 反向换算引擎与农历表同源，1901–2099 与 zhdate 参照库逐日比对零偏差；生在闰月的按平月过\n【下次日期看得懂了】\n· 今年已经过完的，下次写明「明年 6月15日」；更远的直接带年份——不再让 6 月的生日在 8 月看起来像还没过\n【小修】\n· v2.12 之前建的老条目没有场景图标：现在按名字兜底（生日🎂 / 纪念💍 / 还款💳），不用重建\n· 老条目想要岁数和双历换算：点「改」→ 选 🎂生日 场景 → 补个出生年份即可\n\nv2.20（2026.8.24）\n【新符号 ？疑问 · ！重点】\n· 符号面板 4 行变 6 行：？还没弄清的事，！值得记住的一句\n· 侧栏「按标记汇总」多两栏：疑问一处翻、重点一处翻；分组报告单列「！重点」「？疑问」段\n· 流水里句尾带「？」的行自动识别为疑问（心情句不抢、任务区不抢）；导入导出、分享图、手册同步认识\n【✨ 聪明工具条（内测）】\n· 设置「内测实验室」里打开：打字时键盘上方递一排小抓手——写「明天下午三点交方案」递出「📅挂到8.25」「🕐记时间15:00」，写「晚饭在『烤匠』」递「#美食」，提到分组名/常用组也递 #签\n· 点一下贴上、变 ✓；再点取消，取消过的这行就不再自动挂——比回车后默默挂上看得见、可反悔\n· 识别与自动识别同一套规则；默认关，关着时一切照旧\n\nv2.19（2026.8.24）\n【输入工具条重做】\n· 九键平铺 → 五组大键：四个符号键收成一格（显示当前行符号，点开弹面板换，面板自带解释）\n· # 分组、📷 照片升级为带字大键；两个缩进键合成一个聪明键——上一条是事件时「⇥挂入」，已挂着时「⇤升出」，挂无可挂自动置灰\n· 🗑删除 与 ↩撤回 成对放条尾：删是删整行（连子弹一起），撤回是整行找回，不再是一次一个字\n\nv2.18（2026.8.24）\n【修复 · 笔记本页面蹿动】\n· 标题跳正文、正文打前几行字时整页乱蹿：长文编辑豁免了「保持在键盘上方」的滚动逻辑，自动长高改为只长不缩并锁定滚动位置\n【笔记本里写任务】\n· 以「- 」或「□ 」开头的行（回车或离开本子时）自动变成今天首页的任务，带「📓 翻开」来源签；生成后各走各的，改行字算新任务\n【全局返回上一页】\n· 进入二级页（人物页、本子、从日历点进的某天、集子…）左上角 ☰ 变成「‹ 返回」，一路原路返回；右上「回今日」照旧并清空来路\n【修复 · 熟人册新人被顶替】\n· 根因是重启后编号水位漏算了熟人册/循环提醒/笔记本，导致新人和旧人撞号——水位已补全，已撞的号启动时自动换新，账号小本解锁时同步计入\n\nv2.17（2026.8.23）\n【📓 笔记本】\n· 侧栏新增「笔记本」：像备忘录一样写长文——装修计划、读书摘抄、写到一半的小说，边写边自动保存\n· 本子不是孤岛：新建本子当天流水自动记「开了新本子《xxx》」，每天第一次动笔自动留「写了《xxx》」（一天一本只记一次）\n· 双向跳转：流水足迹带「📓 翻开」直达本子；本子页头「始于X · 写过N天 · 最近X」，点开看全部足迹、跳回任何一天\n· 搜索打通：全局搜索多一栏「本子里也有」\n· 本子长文不进识别引擎和报告——小说草稿不会污染熟店簿\n\nv2.16（2026.8.22）\n【🍚 三餐快捷录入】\n· 打卡墙的格子现在能点：空圈点一下＝就地补记这顿——是否吃了 / 吃了什么 / 店名 / 和谁 / 几点，一张小表引导填完，自动组成一句手帐话\n· 已记的格子点一下跳回原文；点日期看那天全页\n· 晚间复盘补三餐也换成同一张引导小表，不再是干巴巴一个输入框\n· 「这顿没吃」也算一条诚实记录，照样点亮格子\n【颜色区分】\n· 墙上灰点＝日常吃，橙点＝这顿进了美食集子（有店名/外卖）——一眼分清哪顿只是吃了、哪顿成了资产\n\nv2.15（2026.8.21）\n【🔖 今日印章】\n· 复盘收尾给今天盖个章：充实高效 / 平淡安稳 / 小有波折但收尾顺利 / 彻底放空 / 小有收获，也能自己刻——刻过的进你的章库\n· 今日页顶部和日页标题都能看到章，点一下随时改；过去任何一天也能补章\n【🍚 三餐（设置里打开）】\n· 写「早饭/午饭/晚饭/下午茶/夜宵 + 吃了什么」自动归格，不用打标签，识别保守绝不硬塞\n· 晚间复盘带三餐条：空格子点一下就地补一句\n· 三餐页：三餐齐全连击、本月外卖次数、吃饭花销、最常一起吃饭的人、两周打卡墙\n· 三餐里写了「店名」或外卖，自动同时收进美食集子（同一份数据，两副眼镜）\n【板块管理】\n· 设置新增：三餐 / 熟人册 / 账号小本 / 循环提醒 可开关，关掉的从侧栏消失、数据不动\n【处处可改】\n· 我们的时刻、重要时间点、账号小本条目——所有手动填写的现在都能点开修改（立为铁律）\n\nv2.14（2026.8.20）\n【⭐ 星标熟人 · 重要时间点】\n· 人物页可以点星：星标的人解锁「重要时间点」——认识 / 第一次见面 / 在一起…标签全由你写\n· 日期支持三档模糊：只填年份（第 N 个年头）、年份+月份（至今 N 年 N 个月）、整日（已 N 天 · 第 N 年）\n· 写了整日的：整百天纪念提前看得见（距 2700 天还有 32 天），一键「设提醒」进纪念日模板\n【🌟 我 · 人生时间点】\n· 熟人册第一页是你自己：入离职、搬家、第一次收到鲜花…同一套时间点，随时翻到自己的坐标\n\nv2.13（2026.8.20）\n【👥 熟人册】\n· 侧栏新增「熟人册」：点点从记录里认出的人（和X、转交给X）列成候选，点「收录」进册，不想要的可忽略\n· 收录时可填 本名＋昵称（多个用、隔开）：写哪个都认账，旧记录也一并追认到同一个人\n· 关系标签：亲情 / 友情 / 爱情 / 人脉 / 同事，也能自己写；外加自由备注\n· 人物页：我们的盘点（一起看过 / 一起吃过 / 共同出现 / 最近一次，可下钻）\n· 「我们的时刻」：手写纪念的事，或在记录里点 📌 收进来\n· 记录里的「和赵赵」小签可以点了，直接进TA的页；TA的生日提醒在人物页直达\n\nv2.12（2026.8.19）\n【循环提醒场景化】\n· 添加时先选场景：🎂生日 · 💍纪念日 · 🩸生理期 · 💳还款日 · 🔁自定义，表单跟着变，提前天数给好默认\n· 生日支持阴历：内置 1900–2100 农历表离线换算，填一次「农历冬月廿三」，每年自动算出阳历日子\n· 填出生年份/起始年份，提醒自动带岁数和周年：「🎂 妈妈生日（58 岁）」\n· 农历日子入系统日历＝一次写入未来 5 年各自算好的日期\n\nv2.11（2026.8.19）\n【美食盘点三档制】\n· 全页统一三个词：宝藏 / 家常 / 避雷——磁贴、榜单、小签一个说法，不再五花八门\n· 没写判决、只打了分也能归档：8分以上宝藏，6–8家常，6以下避雷；明确写「避雷 / 会再来」的以你的话为准\n· 榜单拆成「宝藏榜」和「避雷榜」，右侧统一显示分数或你的原话\n· 磁贴下多一行「还有 N 家没表态」，点开看清单、跳回当天补一句\n【怎么写】\n· 集子页新增「怎么写?」例句卡：每个模板一行范例\n· 写美食时没读出店名和表态，点点会轻声提示写法\n\nv2.10（2026.8.19）\n【提速】\n· 修复一条长句让识别卡死 11 秒的灾难性回溯——从侧栏进分组不再等 2 秒，瞬开\n· 保存后不再全量重算识别，只有熟店簿/熟人簿变了才重算\n【循环提醒】\n· 每条提醒新增「改」按钮：名字、周期、日期、提前天数都能直接修改，不用删了重建\n【叫法】\n· 「待办」统一改叫「任务」\n\nv2.9（2026.8.18）\n【☾ Someday · 给\"改天做\"一个正经的家】\n· 长按任务、晚间复盘、晨间勾选里都能把事放进 Someday：不催、不追、不算拖延，退出每日循环\n· 侧栏汇总新增「☾ Someday」，点任务符号一键「⤴ 捞回今天」\n· 跟了 3 天以上的任务，复盘时点点会提议放 Someday；晨间列表每行标「已跟 N 天」；「没勾的放 Someday」一键清场\n· Someday 不进报告不进任务列表——那是你表过态的事，不是欠着的账\n【识别修正（来自你的真实数据）】\n· 引号强调不再被当成店名（\"自传\"事件）：店名只跟美食分组学习\n· 正面判决词补充：可再来 / 好吃 / 很香 / 可回购（叹锅、烤匠这类都能认了）\n【数据卫生】\n· 导出与云备份不再夹带解析缓存；空白历史页和空白子行自动清理\n\nv2.8（2026.8.18）\n【找到卡顿真凶】\n· 列表里的照片过去直接渲染原图（每张几百KB），这是标签页慢的根源——现在插图自动生成小缩略图，列表只加载缩略图＋懒加载，点开看大图不变；老照片打开 App 后台自动补一遍缩略图\n· 侧栏改为打开时才构建，不再每次刷新页面都重算\n【做减法】\n· 设置删掉三个未实现的占位项（周报起始日 / 复盘提醒 / 应用锁），真做出来再回来\n· 推迟不再有进度滑杆：只留「一句话进度」，它会进报告和折叠时间线；旧数据里难看的「已完成0%」徽章自动清掉\n\nv2.7（2026.8.18）\n【更快】\n· 识别结果全面缓存，集子页不再重复解析；抽屉计数一次遍历\n· 集子列表先展示最近 30 条，底部「加载更早」，数据再多也秒开\n【更干净】\n· 迁移链归并：反复推迟的任务在集子和搜索里只显示最新一条（>×N 照旧），行下「▸ 一路 N 次」点开看途中进度小时间线；原页划痕不动\n【循环提醒】\n· 侧栏新增「🔁 循环提醒」：每年（生日纪念日）/ 每月（发工资）/ 每 N 天（周期），可设提前几天提示\n· 到那天自动出现在「今天要做」，正常打勾复盘；每 N 天类打完勾自动从今天重新起算（大姨妈越用越准）\n· 总日历和未来页提前可见；「📅 入系统日历」生成重复日历文件，手机会真的响\n\nv2.5（2026.8.18）\n· 同行人介词全覆盖：和/与/跟/同 都认（跟赵赵、与琨、同事一起都可以）；「跟进」「同时」这类词不会误判\n· 新增「账号小本」（侧栏 🔐）：独立于手帐流，主口令加密（AES），本机和云备份里只存密文；密码默认打码、点一下显示、一键复制；离开页面自动上锁\n· 小本内容不进搜索、报告、分享；主口令无找回，请记牢；适合 wifi/会员号级别，银行级请用系统钥匙串\n\nv2.4（2026.8.18）\n【识别再进化】\n· 多人同伴：「和赵赵、Orion和家人二刷」三个人都认出来，各记一次；家人/爸妈/同事等称呼有效\n· 点点的熟人簿与熟店簿：认过一次的人和店（含转交对象），之后不带引号、不带动作词也认识——\"又吃了子午路肉夹馍\"会计入去过次数\n· 二刷标注：同一部片多条记录，榜单和列表里标 ×2、\"看了2次\"\n· 店的判决＝括号外离店名最近的判决词；括号里的（惊艳/拉胯）只算单品评价\n· 金额不再误判日期：60.28元、6.28元这类都不会变成日期；月>12、日>31 不认；已有的错日期自动清掉\n· 外卖识别：挂「外卖」小签，美食地图单列「外卖」栏\n【节奏修正】\n· 晨间承接改为逐条勾选：勾谁带谁，配全选；不带的留在原页与任务汇总\n· 哪天做完算哪天：在任务汇总或历史页勾掉旧任务，记入当天——日报周报按完成日归属，复盘快照多一行\"还清了 N 件旧账\"，汇总里带「✓ 8.18 清账」签\n\nv2.3（2026.8.13）\n【按定稿示意图纠偏】\n· 「生成月报」改为直接生成本月盘点分享卡（数字+榜单+原话引用），不再打开文字版报告；文字版日/周/月报只在工作模板的「报告」里\n· 美食顶部中间改为「我的美食地图」：按城市展开店清单，点店跳原文\n· 盘点分享卡装全内容：美食卡新增城市分布条\n· 范围与标题用真实年月：盘点·2026 ▾ / 盘点·8月 ▾；卡片标题如「2026 我的观影年报」「8月 美食小结」\n· 「和谁」只认人名：限 1~3 字并紧跟动作词，转交过的人名优先识别\n· 未套模板的分组顶部只保留「▣ 分享」\n\nv2.2（2026.8.13）\n· 集子页顶部按示意图定稿：盘点·今年 ▾ ｜ 生成月报（工作模板为「报告」）｜ ▣ 分享（分享的就是当前盘点，含数字、榜单与美食地图，不再另设入口）\n· 模板选择搬进侧栏：新建分组时直接选；已有分组长按或左滑 →「模板」随时改\n· 美食「城市分布」升级为「我的美食地图」，点城市看该城清单\n\nv2.1（2026.8.13）\n· 集子页顶部收成一行：模板 / 报告（工作模板才有）/ 分享集子\n· 日报周报月报归入「工作」模板（#工作类分组名自动套用，其他分组顶部不再挤报告按钮）\n· 时间范围收进盘点标题：点「盘点·今年 ▾」循环切 今年/本月/去年/全部；「▣ 分享」也在盘点标题行\n· 盘点数字可点开：看过/回头再去/回购/避雷/和谁看，点进去是完整列表，再点跳到当天原文\n· 高分榜「和独自」改为「独自」\n· 主页任何一条记录整行长按即可生成分享图（任务的符号长按仍是处理面板）\n\nv2.0（2026.8.12）\n【集子结构化 · 记录长成资产】\n· 六种识别：《作品》、评分、金额、城市、\"店名\"、判决词（会再来/避雷…）、和谁一起——全从你写的原话里读，记录方式不变，历史一并识别\n· 四个模板：电影 / 美食 / 读书 / 花钱；#电影 #美食 这类分组名自动套用，集子页「模板·」一键换\n· 盘点面板：数字大盘 + 高分榜 / 回购避雷榜 + 城市分布，按 今年/本月/去年/全部 切换\n· 美食不算总账：按「去过几次」算回头率，单品价格只做小签\n· 别名合并：《英雄无归》=《蜘蛛侠英雄无归》确认一次，统计归一\n· 没打分的作品轻轻问一句，点一下补分\n· 点点记得：写到以前记过的店/片，键盘上方浮出上次的记录，一点跳回去\n· 「▣ 分享盘点」直接产年报/盘点卡\n\nv1.9.1（2026.8.12）\n· 分享卡自定义底图：往仓库传 share-bg.png（或分尺寸 share-bg-34 / 11 / 916.png），排版里自动多出「底图·深字 / 浅字」两个选项，删掉图片即恢复\n\nv1.9（2026.8.10）\n【一键分享图】\n· 四种卡片：单条（事件带因果串）/ 一天快照 / 日周月报 / 集子精选\n· 三种尺寸（3:4 / 1:1 / 竖屏）× 两套排版（手帐纸 / 墨色），带点点和纸纹\n· 入口：长按事件·笔记·心情的符号；任务长按面板；报告页与集子页的「▣」；复盘结束页\n· 支持系统分享面板直发，或长按预览图存相册；只分享你选中的内容\n\nv1.8.2（2026.8.10）\n· 点顶栏日期直接打开总日历选日子（标题带 ▾ 提示）\n· 修复：总日历点进过去的空白天进不了完整编辑页、左右滑一下才恢复的问题；未来天从日历进也统一为「提前安排」视图\n· 分割线整体转淡与纸色统一，输入框和按钮描边单独保留层次\n\nv1.8.1（2026.8.9）\n· 未来任何一天都能直接「＋ 提前安排一条」，到期自动进当天；别的日子挂过来的单独列出\n· 长内容自动换行：行输入改为自动增高，不再一行截断\n· 历史页去掉「返回日历」链接，页面更干净\n\nv1.8（2026.8.9）\n【品牌换装】\n· 全新配色：纸 / 墨 / 点亮橙对齐点点 Logo，主题色新增点亮橙并设为默认\n· 字号行距整体调升：标题、分区标签、正文层级更清楚\n· 点点吉祥物入驻：引导页、侧栏、复盘结束页、空白天\n· 提示文案改为点点语气，发生区提示点明因果挂载\n· 图标换新文件名 icon-dot.png，绕开 iOS 对旧图标的顽固缓存\n\nv1.7（2026.8.8）\n· 品牌更名「点点手帐 Dot」\n· 新增 GitHub 私有仓库云备份：改动后自动上传、立即备份、从云端恢复；仓库提交历史即版本回滚，电脑浏览器打开同一网址配置后即可同步\n\nv1.6（2026.8.8）\n· 任何方式完成（打勾 / 面板 / 复盘）后追问一句备注，可跳过，备注进日报周报\n· 历史页可直接编辑补记\n· 汇总视图升级：点符号就地勾掉/长按处理，点文字跳回当天并高亮定位\n· 今日页左右滑翻天（顶栏新增 ‹ › 箭头）\n· 双向溯源：「◂ 8.6 转来」点击跳回源头条目；历史页「→日期」跳去目标日\n· 识别中文时间：下午三点 / 晚上八点半 / 中午12点\n· 设置新增「使用引导 · 功能手册」，随时回看\n· 版本记录标注日期\n\nv1.5（2026.8.8）\n【因果记录显性化】\n· 事件行回车：下一行自动挂在这件事下面（空行再回车升回顶层）\n· 事件行尾新增「＋」：随时在这件事下补一笔\n· 子条目计数与折叠（▾3）；跨天承接的任务带「◂ 源自」溯源签\n· 周报里事件显示「引发 N 条」\n· 分区默认符号：「要做」默认 •，「发生」默认 ○（写了日期自动转任务）\n· 子条目仅事件可挂：缩进与「＋」只在事件（○）上生效\n· 「发生」区提示加铅笔图标\n【短板修复】\n· ⏰ 面板新增「加入系统日历」：生成日历文件，系统会真的响\n· 转交需填对象和跟进日期，到期自动生成「问问XX」任务\n· 复盘结束页改为今日快照 + 一句话小结（历史页可见）\n\nv1.4（2026.8.8）\n· 修复长按触发系统全选的蓝框\n· 识别下周X / 周X / 大后天 / 下个月X号 / X月Y号\n· 点日期 / 时间芯片可修改或清除\n\nv1.3（2026.8.8）\n· 键盘遮挡彻底修复：按可视区域计算，当前行始终保持在键盘上方\n· 图片可删除：空行退格先删图再删行；点大图有「删除这张图片」\n· 任务状态随时可改：任何状态长按（或点符号）重开四选一，可恢复任务\n· 打开处理面板 / 复盘时自动收起键盘；底部面板抬到键盘上方\n\nv1.2（2026.8.8）\n· 推迟可选任意日期：明天 / 后天 / 下周一 / 日历选择\n· 修复：空行插图后看不到缩略图\n· 分组可选颜色（长按分组 → 颜色）；设置新增主题色\n· 导出 Markdown 带年份分区；新增导入合并（以现有为准只补缺）\n· 新增完整备份 / 恢复（.json 含图片）\n\nv1.1（2026.8.7）\n· 顶栏避开刘海 / 灵动岛（安全区适配）\n· 修复输入聚焦时页面缩放窜动\n\nv1.0（2026.8.7）\n· 首个可日用版本：真实日期自动建页、本地持久化、晨间承接迁移、晚间复盘、总日历、分组、报告、搜索、图片、Markdown 导出、首次引导</div></div>";
		$("#clClose").onclick = () => R.classList.remove("on");
		R.classList.add("on");
	}
	// src/ui/reading.js
	var readingState = {};
	var READING_SIZES = [
		16,
		18,
		20,
		22
	];
	var READING_NAMES = [
		"标准",
		"舒适",
		"大",
		"特大"
	];
	readingState.readingGuideShown = false;
	function readingSize() {
		return READING_SIZES.includes(SET.readSize) ? SET.readSize : 16;
	}
	function applyReading() {
		const n = readingSize();
		document.documentElement.style.setProperty("--read-size", n + "px");
		document.documentElement.style.setProperty("--read-extra", n - 16 + "px");
		readingReflow();
	}
	function readingSettings() {
		const s = healthSheet("字体大小", "<div class=\"gs-chips\" id=\"readChoices\">" + READING_SIZES.map((n, i) => "<button class=\"gs-chip" + (readingSize() === n ? " on" : "") + "\" data-size=\"" + n + "\">" + READING_NAMES[i] + "</button>").join("") + "</div><div class=\"read-preview\"><small>首页预览</small><h3>今天的记录</h3><p>○ 下班去取快递，再买一袋橘子</p><p>— 午饭吃了热汤面，汤很好喝。</p><p>· 周末想去河边走走，带上相机。</p></div><p class=\"postcard-note\">选择后立即生效，并保存在设置里。</p>");
		s.querySelectorAll("[data-size]").forEach((b) => b.onclick = () => {
			SET.readSize = Number(b.dataset.size);
			applyReading();
			scheduleSave();
			s.querySelectorAll("[data-size]").forEach((x) => x.classList.toggle("on", x === b));
		});
	}
	function readingGuideDone(kind) {
		appState.SEEN["symGuide" + kind] = true;
		scheduleSave();
		document.querySelectorAll(".sym-use-guide").forEach((x) => x.remove());
	}
	function readingGuide(wrap, s, e) {
		if (navigationState.cur.name !== "today" || !appState.SEEN.onboard || !e.text || s.classList.contains("static")) return;
		const kind = e.sym === "task" ? "Task" : "Record";
		s.addEventListener("click", () => readingGuideDone(kind), true);
		if (appState.SEEN["symGuide" + kind] || readingState.readingGuideShown) return;
		readingState.readingGuideShown = true;
		const d = document.createElement("div");
		d.className = "sym-use-guide";
		d.setAttribute("role", "note");
		const txt = document.createElement("span");
		txt.textContent = kind === "Task" ? "点左边的符号完成，长按还有更多操作。" : "长按整条记录，或在编辑栏点「更多」。";
		d.appendChild(txt);
		const b = document.createElement("button");
		b.textContent = "知道了";
		b.onclick = () => readingGuideDone(kind);
		d.appendChild(b);
		wrap.appendChild(d);
	}
	function readingHelp() {
		healthSheet("行首符号怎么用", "<p>待办：点左边的符号完成，再点恢复；长按打开处理菜单。</p><p>日常和随想：长按整条记录或点编辑栏「更多」，打开条目操作。</p><p>点记录文字，可以直接修改。</p>");
	}
	function readingReflow() {
		requestAnimationFrame(() => document.querySelectorAll("textarea.line-input,textarea#chatIn").forEach(growTA));
	}
	function bindReading() {
		window.addEventListener("resize", readingReflow);
	}
	// src/ui/settings.js
	function setSub(t) {
		const s = document.createElement("span");
		s.className = "sub";
		s.textContent = t;
		return s;
	}
	function setRow(label, right, fn) {
		const r = document.createElement("div");
		r.className = "set-row";
		const l = document.createElement("span");
		l.textContent = label;
		r.appendChild(l);
		if (right) r.appendChild(right);
		if (fn) r.onclick = fn;
		view.appendChild(r);
		return r;
	}
	function setToggle(on) {
		const sw = document.createElement("div");
		sw.className = "switch" + (on ? " on" : "");
		sw.innerHTML = "<i></i>";
		return sw;
	}
	function labSheet() {
		const S = $("#gsheet");
		const on = modOn("smartbar");
		S.innerHTML = "<div class=\"gs-title\">功能手册 · 实验室</div><button class=\"gm-btn\" id=\"labMan\" style=\"width:100%;padding:11px;margin-top:6px\">使用引导 · 功能手册</button><button class=\"gm-btn\" id=\"labOb\" style=\"width:100%;padding:11px;margin-top:8px\">重新走一遍上岛</button><div class=\"gm-sec\">内测实验室</div><div class=\"set-row\" id=\"labSmart\" style=\"border:1px solid var(--line);border-radius:12px;padding:10px 12px\"><span>✨ 聪明工具条<small style=\"display:block;font-size:11.5px;color:var(--ink-faint);margin-top:2px\">打字时认出日期 / 时间 / 分组，键盘上递一排小抓手</small></span><div class=\"switch" + (on ? " on" : "") + "\"><i></i></div></div><button class=\"gs-done\" id=\"labDone\">好了</button>";
		$("#labMan").onclick = () => {
			closeSheet();
			showManual();
		};
		$("#labOb").onclick = () => {
			closeSheet();
			obOpen(true);
		};
		$("#labSmart").onclick = () => {
			SET.mods.smartbar = !on;
			scheduleSave();
			labSheet();
			toast(!on ? "已开启 · 写一行「明天下午三点交方案」试试" : "已关闭 · 随时回来再开");
		};
		$("#labDone").onclick = () => closeSheet();
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	// src/ui/render.js
	function renderGroupBody() {
		const tpl = tplOf(navigationState.cur.g);
		if (!navigationState.cur.rngSel) navigationState.cur.rngSel = tpl === "food" ? "all" : "year";
		if (tpl === "food") renderFoodOverview();
		else {
			const tabs = document.createElement("div");
			tabs.className = "rp-tabs";
			tabs.style.marginTop = "16px";
			const canRec = tpl === "movie" || tpl === "book" || tpl === "fun" || tpl === "food";
			if (canRec) {
				const ad1 = document.createElement("button");
				ad1.className = "chip on";
				ad1.id = "rcAdd";
				ad1.textContent = "＋ 记一条";
				ad1.onclick = () => recordSheet(navigationState.cur.g, tpl);
				tabs.appendChild(ad1);
			}
			if (tpl && !TPL_PLAIN[tpl]) {
				const rc = document.createElement("button");
				rc.className = canRec ? "chip" : "chip on";
				rc.textContent = "盘点 · " + rngLabel(navigationState.cur.rngSel) + " ▾";
				rc.onclick = () => {
					navigationState.cur.rngSel = RNG_CYCLE[(RNG_CYCLE.indexOf(navigationState.cur.rngSel) + 1) % RNG_CYCLE.length];
					render();
				};
				tabs.appendChild(rc);
			}
			if (tpl === "work") {
				const rp = document.createElement("button");
				rp.className = "chip";
				rp.textContent = "报告";
				rp.onclick = () => openReport(navigationState.cur.g, "week");
				tabs.appendChild(rp);
			} else if (tpl === "food") {
				const mp = document.createElement("button");
				mp.className = "chip";
				mp.textContent = "美食地图";
				mp.onclick = () => openFoodMap(navigationState.cur.g);
				tabs.appendChild(mp);
				const ad = document.createElement("button");
				ad.className = "chip";
				ad.textContent = "＋ 记一家店";
				ad.onclick = () => storeSheet();
				tabs.appendChild(ad);
			} else if (tpl && !TPL_PLAIN[tpl]) {
				const rp = document.createElement("button");
				rp.className = "chip";
				rp.textContent = "生成月报";
				rp.onclick = () => {
					const rows = tplRows(navigationState.cur.g, rngOf("month"));
					openShare(statsPayload(navigationState.cur.g, tpl, tplStats(tpl, rows), "month"));
				};
				tabs.appendChild(rp);
			}
			const shc = document.createElement("button");
			shc.className = "chip";
			shc.textContent = "▣ 分享";
			shc.onclick = () => {
				if (tpl && !TPL_PLAIN[tpl]) {
					const rows = tplRows(navigationState.cur.g, rngOf(navigationState.cur.rngSel));
					openShare(statsPayload(navigationState.cur.g, tpl, tplStats(tpl, rows), navigationState.cur.rngSel));
				} else openShare({
					type: "group",
					head: "啾啾岛 · 集子",
					cardTitle: "#" + navigationState.cur.g + " · 最近精选",
					g: navigationState.cur.g
				});
			};
			tabs.appendChild(shc);
			if (!tpl || TPL_PLAIN[tpl]) {
				const hw = document.createElement("button");
				hw.className = "chip";
				hw.textContent = "怎么写?";
				hw.onclick = () => openHowSheet(tpl);
				tabs.appendChild(hw);
			}
			view.appendChild(tabs);
			if (tpl && !TPL_PLAIN[tpl]) renderTplPanel(navigationState.cur.g, tpl);
		}
		const rows2 = tplRows(navigationState.cur.g, null);
		if (!rows2.length) {
			const d = document.createElement("div");
			d.className = "empty-hint";
			d.textContent = navigationState.cur.name === "food" ? "阿饱：先记一家店吧，比如「晚饭在『店名』吃了面」，想去的也能记。" : "这个分组还空着 · 在任意一行打 #" + navigationState.cur.g + " 就能归进来";
			view.appendChild(d);
		} else {
			const lab = document.createElement("div");
			lab.className = "section-label";
			lab.textContent = "全部记录";
			view.appendChild(lab);
			const byId = {};
			rows2.forEach((r) => {
				if (r.e._id) byId[r.e._id] = r;
			});
			const superseded = /* @__PURE__ */ new Set();
			rows2.forEach((r) => {
				if (r.e.srcId && byId[r.e.srcId]) superseded.add(r.e.srcId);
			});
			const shown = rows2.filter((r) => !(superseded.has(r.e._id) && r.e.state === "migrated"));
			if (!navigationState.cur.listN) navigationState.cur.listN = 30;
			const pageRows = shown.slice(0, navigationState.cur.listN);
			let lastDate = null;
			pageRows.forEach((r) => {
				if (r.d !== lastDate) {
					lastDate = r.d;
					const g2 = document.createElement("div");
					g2.className = "date-group";
					g2.dataset.day = r.d;
					g2.textContent = dayGroupTitle(r.d);
					view.appendChild(g2);
				}
				const w = jumpRow(r.d, r.e, true);
				appendChainFold(w, r, byId);
				view.appendChild(w);
			});
			if (shown.length > navigationState.cur.listN) {
				const more = document.createElement("div");
				more.className = "tapzone";
				more.style.textAlign = "center";
				more.textContent = "▾ 加载更早（还有 " + (shown.length - navigationState.cur.listN) + " 条）";
				more.onclick = () => {
					navigationState.cur.listN += 50;
					render();
				};
				view.appendChild(more);
			}
			const tip = document.createElement("div");
			tip.className = "readonly-tip";
			tip.textContent = "点字修改原话 · 长按记录看详情 · 点日子去那天";
			view.appendChild(tip);
		}
	}
	var renderedRoute;
	function render() {
		if (renderedRoute && renderedRoute !== navSnap()) dismissRouteSheets();
		applyReading();
		readingState.readingGuideShown = false;
		reviewBtn.style.visibility = navigationState.cur.name === "abu" && navigationState.cur.tab === "form" ? "hidden" : "";
		islandMailboxPrepare();
		document.querySelector(".mail-bulk-actions")?.remove();
		view.classList.remove("mailbox-view");
		closeRowPop();
		topTitle.classList.remove("has-wx");
		topTitle.parentElement.classList.toggle("food-header", navigationState.cur.name === "food" || navigationState.cur.name === "group" && tplOf(navigationState.cur.g) === "food");
		if (navigationState.cur.name === "health") {
			const tabs = appState.HEALTH.order.filter((k) => !appState.HEALTH.hidden.includes(k));
			if (!tabs.includes(navigationState.cur.tab)) navigationState.cur.tab = tabs[0] || null;
		}
		if (navigationState.cur.name === "meals") {
			navigationState.cur.name = "food";
			if (!navigationState.cur.tab) navigationState.cur.tab = "meal";
		}
		(() => {
			const ns2 = navSnap();
			if (navigationState.cur.name === "today") navigationState.navStack = [];
			else if (!navigationState.navFromBack && navigationState.navPrevSnap && ns2 !== navigationState.navPrevSnap) {
				const pv = JSON.parse(navigationState.navPrevSnap);
				navigationState.navStack.push({
					name: pv.n,
					g: pv.g,
					key: pv.k,
					pid: pv.p,
					id: pv.i,
					q: pv.q,
					date: pv.d,
					tab: pv.t,
					lim: navigationState.navPrevLim || void 0
				});
				if (navigationState.navStack.length > 20) navigationState.navStack.shift();
			}
			navigationState.navFromBack = false;
			navigationState.navPrevSnap = ns2;
			navigationState.navPrevLim = navigationState.cur.lim || 0;
			const mb = $("#menuBtn");
			if (mb) {
				const back = navigationState.navStack.length && navigationState.cur.name !== "today";
				if (back && !mb.classList.contains("mb-back")) {
					mb.classList.add("mb-back");
					mb.innerHTML = "‹ 返回";
					mb.onclick = navBack;
				} else if (!back && mb.classList.contains("mb-back")) {
					mb.classList.remove("mb-back");
					mb.innerHTML = "<span class=\"hamburger\"><i></i><i></i><i></i></span>";
					mb.onclick = openDrawer;
				} else if (back) mb.onclick = navBack;
				else mb.onclick = openDrawer;
			}
		})();
		if (navigationState.cur.name !== "vault" && vaultKey) vaultLock();
		view.innerHTML = "";
		chatBarSync();
		if (navigationState.cur.name === "today") {
			topTitle.textContent = dayGroupTitle(TODAY);
			islandMailboxBadge();
			if (modOn("hello")) {
				topTitle.appendChild(wxPillNode());
				topTitle.classList.add("has-wx");
			}
			renderPageInto(view, TODAY, true);
		} else if (navigationState.cur.name === "agg") {
			const a = AGG[navigationState.cur.key];
			const pool = navigationState.cur.key === "someday", wish = navigationState.cur.tab === "wish";
			if (pool) {
				view.appendChild(letterHouseHead("someday"));
				const tabs = document.createElement("div");
				tabs.className = "ftabs";
				for (const [key, label] of [["pool", "待办池"], ["wish", "心愿"]]) {
					const btn = document.createElement("button");
					btn.className = "ftab" + (key === "wish" === wish ? " on" : "");
					btn.textContent = label;
					btn.onclick = () => {
						navigationState.cur.tab = key;
						render();
					};
					tabs.appendChild(btn);
				}
				view.appendChild(tabs);
				if (wish) {
					const form = document.createElement("form");
					form.className = "gs-new";
					form.innerHTML = "<input class=\"vt-in\" aria-label=\"心愿\" required placeholder=\"写下一个心愿\"><button class=\"chip primary-action\">记下心愿</button>";
					form.onsubmit = (ev) => {
						ev.preventDefault();
						const text = form.elements[0].value.trim();
						if (!text) return;
						P().plan.push({
							sym: "task",
							state: "someday",
							wish: true,
							text,
							_id: ++appState.uid
						});
						scheduleSave();
						render();
					};
					view.appendChild(form);
				}
			}
			topTitle.textContent = {
				someday: "待办",
				done: "完成",
				delegated: "转交",
				dropped: "放弃"
			}[navigationState.cur.key] || a.title.split(" ").pop();
			reviewBtn.textContent = "回今日";
			const tip = sectionLabel(pool && wish ? "想留给以后的事" : a.tip);
			view.appendChild(tip);
			if (navigationState.cur.key === "mood") {
				const ta = TODAY.split(".").map(Number);
				const cap = document.createElement("div");
				cap.className = "date-group";
				cap.textContent = ta[1] + "月情绪 · 有记录的日子点亮";
				view.appendChild(cap);
				const strip = document.createElement("div");
				strip.className = "mood-strip";
				const md = /* @__PURE__ */ new Set();
				walk((d, e) => {
					const a = d.split(".").map(Number);
					if (e.sym === "mood" && a[0] === ta[0] && a[1] === ta[1]) md.add(a[2]);
				});
				const days = new Date(ta[0], ta[1], 0).getDate();
				for (let d = 1; d <= days; d++) {
					const c = document.createElement("div");
					c.className = "mood-cell" + (md.has(d) ? " has" : "");
					c.title = ta[1] + "月" + d + "日";
					strip.appendChild(c);
				}
				view.appendChild(strip);
			}
			const items = [];
			walk((date, e) => {
				if (a.f(e) && (!pool || !!e.wish === wish)) items.push({
					date,
					e
				});
			});
			if (!pagedList(view, items, ({ date, e }) => {
				const jr = jumpRow(date, e, pool);
				if (navigationState.cur.key === "someday") {
					const pull = document.createElement("button");
					pull.className = "pool-pull";
					pull.textContent = "今天做";
					pull.onclick = () => {
						somedayPull(e, date);
						toast("已捞回今天");
						render();
					};
					jr.querySelector(".entry").appendChild(pull);
				}
				return jr;
			})) {
				const d = document.createElement("div");
				d.className = "empty-hint";
				d.textContent = navigationState.cur.key === "someday" ? wish ? "还没有心愿。" : "阿兜：兜里还空着。暂时顾不上的事，长按后选「待办池」放进来。" : "这里还没有记录";
				view.appendChild(d);
			}
		} else if (navigationState.cur.name === "group") {
			topTitle.textContent = ISLE[tplOf(navigationState.cur.g)]?.n || "分组";
			reviewBtn.textContent = "回今日";
			{
				const hh = houseHead(tplOf(navigationState.cur.g), navigationState.cur.g);
				if (hh) view.appendChild(hh);
				else view.appendChild(sectionLabel("#" + navigationState.cur.g));
			}
			renderGroupBody();
		} else if (navigationState.cur.name === "food") {
			if (!navigationState.cur.tab) navigationState.cur.tab = "ji";
			if (navigationState.cur.tab === "meal" && SET.mods.mealLog !== true) navigationState.cur.tab = "ji";
			topTitle.textContent = "美食";
			reviewBtn.textContent = "回今日";
			navigationState.cur.g = foodGroupName() || "美食";
			{
				const hh = houseHead("food", navigationState.cur.g);
				if (hh) view.appendChild(hh);
			}
			if (navigationState.cur.tab !== "ji") {
				const back = document.createElement("button");
				back.className = "chip";
				back.id = "foodBack";
				back.textContent = "‹ 我的店单";
				back.onclick = () => {
					navigationState.cur.tab = "ji";
					render();
				};
				view.appendChild(back);
			}
			if (navigationState.cur.tab === "meal") renderMeals();
			else if (navigationState.cur.tab === "pick") renderPick();
			else renderGroupBody();
		} else if (navigationState.cur.name === "ledger") {
			if (!navigationState.cur.tab) navigationState.cur.tab = "liu";
			topTitle.textContent = "记账";
			reviewBtn.textContent = "回今日";
			view.appendChild(letterHouseHead("money"));
			const ltb = document.createElement("div");
			ltb.className = "ftabs";
			ltb.innerHTML = "<div class=\"ftab" + (navigationState.cur.tab === "liu" ? " on" : "") + "\" data-ft=\"liu\">流水</div><div class=\"ftab" + (navigationState.cur.tab === "pan" ? " on" : "") + "\" data-ft=\"pan\">盘点</div>";
			ltb.querySelectorAll(".ftab").forEach((t2) => t2.onclick = () => {
				if (navigationState.cur.tab !== t2.dataset.ft) {
					navigationState.cur.tab = t2.dataset.ft;
					navigationState.navFromBack = true;
					render();
				}
			});
			view.appendChild(ltb);
			if (navigationState.cur.tab === "pan") renderLedgerPan();
			else renderLedgerFlow();
		} else if (navigationState.cur.name === "search") {
			topTitle.textContent = "搜索";
			reviewBtn.textContent = "回今日";
			view.appendChild(sectionLabel("「" + navigationState.cur.q + "」的结果 · 点结果跳到当天"));
			const isG = navigationState.cur.q.startsWith("#");
			const qq = isG ? navigationState.cur.q.slice(1) : navigationState.cur.q.toLowerCase();
			if (!dateGroupList(view, (e) => isG ? e.groups && e.groups.includes(qq) : e.text && e.text.toLowerCase().includes(qq))) {
				const d = document.createElement("div");
				d.className = "empty-hint";
				d.textContent = "没有找到相关记录";
				view.appendChild(d);
			}
			if (!isG) {
				const nbHits = (appState.NOTES || []).filter((nb) => (nb.title || "").toLowerCase().includes(qq) || (nb.body || "").toLowerCase().includes(qq));
				if (nbHits.length) {
					view.appendChild(sectionLabel("本子里也有"));
					nbHits.forEach((nb) => {
						const i2 = (nb.body || "").toLowerCase().indexOf(qq);
						const snip = i2 >= 0 ? (nb.body || "").substr(Math.max(0, i2 - 6), 24) : (nb.body || "").slice(0, 20);
						const it = document.createElement("div");
						it.className = "set-row";
						it.innerHTML = "<span>" + houseMark("notes") + vEsc(nb.title || "未命名") + "</span><span class=\"sub\" style=\"margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:46%\">" + vEsc(snip) + " ›</span>";
						it.onclick = () => {
							navigationState.cur = {
								name: "note",
								id: nb.id
							};
							render();
						};
						view.appendChild(it);
					});
				}
			}
		} else if (navigationState.cur.name === "settings") {
			topTitle.textContent = "设置";
			reviewBtn.textContent = "回今日";
			view.appendChild(sectionLabel("记录"));
			(() => {
				const sw = document.createElement("div");
				sw.className = "switch" + (SET.recog ? " on" : "");
				sw.innerHTML = "<i></i>";
				sw.onclick = (ev) => {
					ev.stopPropagation();
					SET.recog = !SET.recog;
					scheduleSave();
					toast(SET.recog ? "已开启自动识别" : "已关闭 · #分组与时间抽取不受影响");
					render();
				};
				setRow("智能识别类型判断", sw, null);
			})();
			setRow("一天的边界", setSub("凌晨 4:00"), () => toast("4 点前的记录算前一天 · 适合夜猫子"));
			setRow("我的词典", setSub(dictPeopleList().length + " 人 · " + dictStoreList().length + " 家店 · " + dictFixCount() + " 条纠正 ›"), () => {
				navigationState.cur = { name: "dict" };
				render();
			});
			view.appendChild(sectionLabel("提醒"));
			(() => {
				const on = modOn("hello"), tg = setToggle(on);
				setRow("☀ 早安卡", tg, null);
				tg.onclick = () => {
					SET.mods.hello = !on;
					scheduleSave();
					render();
					toast(!on ? "已打开 · 明天第一次打开就能看到" : "已关闭 · 日期旁的天气小签一起收起");
				};
			})();
			setRow("提醒力度", setSub(SET.duty ? "规律 · 每天逐件过一遍 ›" : "温和 · 没做完的不催 ›"), () => {
				SET.duty = !SET.duty;
				scheduleSave();
				render();
				toast(SET.duty ? "已切到规律：早上逐件过、复盘再过一遍" : "已切到温和：没做完的第二天自动收进「待办池」");
			});
			if (modOn("cycles")) setRow("提醒", setSub("生日 · 还款 · 周期 ›"), () => {
				navigationState.cur = { name: "cycles" };
				render();
			});
			else {
				const tgc = setToggle(false);
				setRow("提醒 · 生日、还款、周期", tgc, null);
				tgc.onclick = () => {
					SET.mods.cycles = true;
					scheduleSave();
					render();
				};
			}
			setRow("天气城市", setSub((wxCfg().cities.map((c) => c.n).join("、") || "还没设") + " ›"), wxCitySheet);
			view.appendChild(sectionLabel("小岛"));
			setRow("全景岛", setSub("逛岛 · 看住户 ›"), () => islandGo("panorama"));
			setRow("✉ 信箱与明信片册", setSub(islandUnread(appState.ISLAND) + " 条未读 · " + appState.ISLAND.album.length + " 张收藏 ›"), () => islandGo("postoffice", "inbox"));
			setRow("岛民来信", setSub(appState.ISLAND.enabled ? "已开启 ›" : "已暂停 ›"), islandMailSettings);
			setRow("岛上的房子", setSub(ISLE_ORDER.filter((k) => isleOn(k)).length + " 栋开着 · 开关、置顶 ›"), () => {
				navigationState.cur = { name: "isle" };
				render();
			});
			view.appendChild(sectionLabel("数据"));
			setRow("数据与备份", setSub("导出 · 导入 · 云备份 · 恢复 ›"), () => {
				navigationState.cur = { name: "data" };
				render();
			});
			view.appendChild(sectionLabel("其他"));
			const accWrap = document.createElement("div");
			accWrap.className = "cdots";
			accWrap.style.marginLeft = "auto";
			ACCENTS.forEach((a, i) => {
				const dd = document.createElement("span");
				dd.className = "cdot" + (SET.accent === i ? " on" : "");
				dd.style.background = a[0];
				dd.onclick = (ev) => {
					ev.stopPropagation();
					SET.accent = i;
					applyAccent();
					scheduleSave();
					render();
				};
				accWrap.appendChild(dd);
			});
			setRow("主题色", accWrap, null);
			setRow("字体大小", setSub(READING_NAMES[READING_SIZES.indexOf(readingSize())] + " ›"), readingSettings);
			setRow("行首符号怎么用", setSub("›"), readingHelp);
			setRow("功能手册 · 实验室", setSub("›"), labSheet);
			setRow("版本记录", setSub("v3.11.2 ›"), showChangelog);
		} else if (navigationState.cur.name === "isle") {
			topTitle.textContent = "选房";
			reviewBtn.textContent = "回今日";
			const tip = document.createElement("div");
			tip.className = "hw-tip";
			tip.style.padding = "14px 4px 6px";
			tip.textContent = "邮局、钟楼和灯塔常驻。其他房子按自己的用法开。关掉的不出现在侧栏，也不再自动收记录；记过的都还在。健康记录仍保存在晨露小站，重新打开可查看。最多置顶 4 栋，排在侧栏最前面。";
			view.appendChild(tip);
			const pins = islePins();
			for (const [label, keys] of HOUSE_SECTIONS) {
				view.appendChild(sectionLabel(label));
				for (const k of keys) {
					const I = ISLE[k], on = isleOn(k), pd = pins.includes(k);
					const r = document.createElement("div");
					r.className = "isle-set" + (on ? "" : " off");
					r.dataset.isle = k;
					r.innerHTML = isleIcon(k, 36) + "<div class=\"nm\"><b>" + I.n + " · " + I.h + "</b><small>" + I.tip + "</small></div>" + (on ? "<button class=\"pin" + (pd ? " on" : "") + "\">" + (pd ? "已置顶" : "置顶") + "</button>" : "");
					const sw = setToggle(on);
					r.appendChild(sw);
					sw.onclick = (ev) => {
						ev.stopPropagation();
						isleSet(k, !on);
						render();
					};
					const pb = r.querySelector(".pin");
					if (pb) pb.onclick = (ev) => {
						ev.stopPropagation();
						if (islePin(k)) render();
					};
					view.appendChild(r);
					if (k === "food" && on) {
						const ml = SET.mods.mealLog === true;
						const r2 = document.createElement("div");
						r2.className = "isle-set";
						r2.dataset.isle = "mealLog";
						r2.style.paddingLeft = "50px";
						r2.innerHTML = "<div class=\"nm\"><b style=\"font-size:13.5px\">三餐打卡</b><small>美食里的「三餐」页签</small></div>";
						const sw2 = setToggle(ml);
						r2.appendChild(sw2);
						sw2.onclick = (ev) => {
							ev.stopPropagation();
							SET.mods.mealLog = !ml;
							scheduleSave();
							render();
						};
						view.appendChild(r2);
					}
				}
			}
		} else if (navigationState.cur.name === "data") {
			topTitle.textContent = "备份";
			reviewBtn.textContent = "回今日";
			setRow("导出 Markdown 备份", setSub("仅手帐正文 ›"), exportMD);
			setRow("导入 Markdown（合并）", setSub("以现有为准，只补缺 ›"), () => $("#mdInput").click());
			setRow("完整备份（.json 含图片）", setSub("生成文件 ›"), exportJSON);
			setRow("云备份（GitHub 私有仓库）", setSub(ghCfg().on ? "自动 · " + (ghCfg().last || "待首次备份") : "未开启 ›"), openGhSheet);
			setRow("恢复备份（.json）", setSub("整体替换 ›"), () => {
				if (!backupState.pendingRestore) {
					backupState.pendingRestore = true;
					toast("恢复将完全替换当前数据 · 再点一次选择文件");
					setTimeout(() => backupState.pendingRestore = false, 5e3);
					return;
				}
				backupState.pendingRestore = false;
				$("#jsonInput").click();
			});
			setRow("存储占用", setSub(storageText()), () => toast(IMG_DB.ok ? "文字和照片分开存，照片不占文字的地方 · 建议定期导出备份" : "数据保存在本机浏览器里 · 建议定期导出备份"));
			setRow("清空全部数据", setSub("谨慎操作"), () => {
				if (backupState.pendingWipe) {
					platform.storage.removeItem(LSKEY);
					try {
						if (IMG_DB.db) IMG_DB.db.close();
						const rq = indexedDB.deleteDatabase("bujo_img");
						rq.onsuccess = rq.onerror = rq.onblocked = () => location.reload();
					} catch (_) {}
					setTimeout(() => location.reload(), 900);
					return;
				}
				backupState.pendingWipe = true;
				toast("再点一次确认清空（建议先导出备份）");
				setTimeout(() => backupState.pendingWipe = false, 4e3);
			});
		} else if (navigationState.cur.name === "dict") {
			topTitle.textContent = "词典";
			reviewBtn.textContent = "回今日";
			renderDict();
		} else if (navigationState.cur.name === "panorama") renderPanorama();
		else if (navigationState.cur.name === "postoffice") renderPostoffice();
		else if (navigationState.cur.name === "postcard") renderPostcard();
		else if (navigationState.cur.name === "mailmessage") renderMailMessage();
		else if (navigationState.cur.name === "abu") abuStart();
		else if (navigationState.cur.name === "health") {
			topTitle.textContent = "健康";
			reviewBtn.textContent = "回今日";
			renderHealth();
		} else if (navigationState.cur.name === "cycles") {
			topTitle.textContent = "提醒";
			reviewBtn.textContent = "回今日";
			towerRender();
		} else if (navigationState.cur.name === "notes") {
			topTitle.textContent = "笔记";
			reviewBtn.textContent = "回今日";
			renderNotes();
		} else if (navigationState.cur.name === "note") {
			const nb0 = noteById(navigationState.cur.id);
			topTitle.textContent = "笔记";
			reviewBtn.textContent = "回今日";
			if (nb0) {
				ensureNoteBorn(nb0);
				renderNote(nb0);
			} else renderNotes();
		} else if (navigationState.cur.name === "meals") {
			topTitle.textContent = "三餐";
			reviewBtn.textContent = "回今日";
			renderMeals();
		} else if (navigationState.cur.name === "people") {
			topTitle.textContent = "亲友";
			reviewBtn.textContent = "回今日";
			view.appendChild(letterHouseHead("people"));
			renderPeople();
		} else if (navigationState.cur.name === "me") {
			topTitle.textContent = "时刻";
			reviewBtn.textContent = "回今日";
			view.appendChild(marksPan(SET.me, true, ""));
			const tip0 = document.createElement("div");
			tip0.className = "vt-tip";
			tip0.textContent = "换工作、搬家、拿证……想记住的日子放这里。填了完整日期，满整百天的纪念日会提前列出来。";
			view.appendChild(tip0);
		} else if (navigationState.cur.name === "person") {
			const pp0 = personById(navigationState.cur.pid);
			topTitle.textContent = "亲友";
			reviewBtn.textContent = "回今日";
			if (pp0) renderPerson(pp0);
			else renderPeople();
		} else if (navigationState.cur.name === "vault") {
			topTitle.textContent = "密码";
			reviewBtn.textContent = "回今日";
			view.appendChild(letterHouseHead("vault"));
			renderVault();
		} else if (navigationState.cur.name === "cal") {
			topTitle.textContent = "日历";
			reviewBtn.textContent = "回今日";
			view.appendChild(letterHouseHead("post"));
			view.appendChild(islandNav("cal"));
			renderCal();
		} else if (navigationState.cur.name === "day") {
			topTitle.textContent = dayGroupTitle(navigationState.cur.key);
			reviewBtn.textContent = "回今日";
			const g = document.createElement("div");
			g.className = "date-group";
			g.textContent = appState.PAGES[navigationState.cur.key]?.stamp || "添加日章";
			g.style.cursor = "pointer";
			g.onclick = () => stampSheet(navigationState.cur.key);
			view.appendChild(g);
			const p = appState.PAGES[navigationState.cur.key] || { plan: [] };
			view.appendChild(sectionLabel("这天的待办"));
			p.plan.forEach((e) => view.appendChild(entryNode(e, true)));
			view.appendChild(tapZone("＋ 提前安排一条", false, () => addLine(EP().plan)));
			const cycHitsHere = (SET.cycles || []).filter((c) => cycHits(c, navigationState.cur.key));
			if (cycHitsHere.length) {
				view.appendChild(sectionLabel("这天有提醒"));
				cycHitsHere.forEach((c) => {
					const d2 = document.createElement("div");
					d2.className = "empty-hint";
					d2.style.padding = "6px 2px";
					d2.textContent = "" + c.name + " · " + cycDesc(c);
					view.appendChild(d2);
				});
			}
			let n = 0;
			const inc = document.createDocumentFragment();
			walk((date, e) => {
				if (date === navigationState.cur.key) return;
				if (e.due !== navigationState.cur.key || e.state === "done" || e.state === "dropped") return;
				n++;
				inc.appendChild(jumpRow(date, e));
			});
			if (n) {
				view.appendChild(sectionLabel("到这天会自动出现"));
				view.appendChild(inc);
				const tip = document.createElement("div");
				tip.className = "readonly-tip";
				tip.textContent = "这些从别的日子挂过来 · 点文字可跳回源头";
				view.appendChild(tip);
			}
			if (!n && !p.plan.length && !cycHitsHere.length) {
				const d = document.createElement("div");
				d.className = "empty-hint";
				d.style.textAlign = "center";
				d.style.padding = "30px 2px 10px";
				d.innerHTML = jjImg("nap", 72) + "<div style=\"margin-top:10px\">笃笃：这天还没安排。提前记下的事，到那天打开就能看见。</div>";
				view.appendChild(d);
			}
		} else if (navigationState.cur.name === "history") {
			topTitle.textContent = dayGroupTitle(navigationState.cur.date);
			reviewBtn.textContent = "回今日";
			if (appState.PAGES[navigationState.cur.date]?.summary) {
				const sm = document.createElement("div");
				sm.className = "empty-hint";
				sm.style.fontStyle = "italic";
				sm.textContent = "“" + appState.PAGES[navigationState.cur.date].summary + "”";
				view.appendChild(sm);
			}
			renderPageInto(view, navigationState.cur.date, true);
		}
		const dayNavOn = navigationState.cur.name === "today" || navigationState.cur.name === "history" || navigationState.cur.name === "day";
		topTitle.classList.toggle("t-nav", dayNavOn);
		$("#prevDay").style.visibility = dayNavOn ? "visible" : "hidden";
		$("#nextDay").style.visibility = dayNavOn ? "visible" : "hidden";
		if ($("#drawer").classList.contains("on")) buildDrawer();
		if ((navigationState.cur.name === "today" || navigationState.cur.name === "history" || navigationState.cur.name === "day") && navigationState.focusRef) {
			const inp = view.querySelector(".line-input[data-eid=\"" + navigationState.focusRef._id + "\"]");
			if (inp) {
				try {
					inp.focus({ preventScroll: true });
				} catch (_) {
					inp.focus();
				}
				const L = inp.value.length;
				try {
					inp.setSelectionRange(L, L);
				} catch (_) {}
				keepAboveKeyboard(inp);
			}
		}
		renderedRoute = navSnap();
		updateToolbarVis();
	}
	// src/modules/journal/symbols.js
	function symNode(e) {
		const s = document.createElement("span");
		s.className = "sym";
		const st = e.state;
		if (e.sym === "task") {
			if (st === "done") s.innerHTML = "<span class=\"glyph done\">✓</span>";
			else if (st === "migrated") s.innerHTML = "<span class=\"glyph migrated\">›</span>";
			else if (st === "dropped") s.innerHTML = "<span class=\"glyph dropped\">✕</span>";
			else if (st === "delegated") s.innerHTML = "<span class=\"glyph delegated\">→</span>";
			else if (st === "someday") s.innerHTML = "<span class=\"glyph someday\">☾</span>";
			else s.innerHTML = "<span class=\"dot\"></span>";
		} else if (e.sym === "event") s.innerHTML = "<span class=\"circle\"></span>";
		else if (isThought(e)) {
			const icon = thIcon(e);
			s.innerHTML = icon.i ? "<span class=\"evi\">" + icon.i + "</span>" : "<span class=\"dash\"></span>";
		} else if (e.sym === "note") s.innerHTML = e.ledger ? "<span class=\"glyph moneyg\">" + houseMark("money") + "</span>" : mealGlyphSlot(e) ? "<span class=\"glyph meal\">" + houseMark("food") + "</span>" : "<span class=\"dash\"></span>";
		else if (e.sym === "mood") s.innerHTML = "<span class=\"ddash\"><i></i><i></i></span>";
		else if (e.sym === "ask") s.innerHTML = "<span class=\"glyph ask\">？</span>";
		else if (e.sym === "bang") s.innerHTML = "<span class=\"glyph bang\">！</span>";
		return s;
	}
	// src/modules/journal/review.js
	var queue = [];
	var qi = 0;
	var stat = null;
	function openReview() {
		dismissKB();
		queue = [];
		qi = 0;
		stat = {
			mig: 0,
			drop: 0,
			del: 0,
			sd: 0
		};
		walkPage(TODAY, (e) => {
			if (e.sym === "task" && e.state === "open" && !e.due) queue.push(e);
		});
		if (!SET.duty) qi = queue.length;
		$("#review").classList.add("on");
		renderReview();
	}
	function closeReview() {
		$("#review").classList.remove("on");
		render();
	}
	function renderReview() {
		const R = $("#review");
		let doneN = 0;
		walkPage(TODAY, (e) => {
			if (e.state === "done") doneN++;
		});
		if (qi >= queue.length) {
			let recN = 0, evN = 0;
			const moods = [];
			walkPage(TODAY, (x) => {
				if (isMinor(x) && x.sym !== "task") return;
				recN++;
				if (x.sym === "mood" && x.text) moods.push(x.text);
				if (x.sym === "event") evN++;
			});
			const rvLeft = SET.duty ? 0 : queue.filter((t) => t.sym === "task" && t.state === "open").length;
			let oldDone = 0;
			walk((k, x) => {
				if (k !== TODAY && x.sym === "task" && x.state === "done" && x.doneDay === TODAY) oldDone++;
			});
			const stAll = STAMP_PRESETS.concat((SET.stamps || []).filter((x) => !STAMP_PRESETS.includes(x)));
			const stCur = P().stamp || null;
			let mealsHtml = "";
			if (modOn("meals") && SET.mods.mealLog === true) {
				const got = {};
				walkPage(TODAY, (x) => {
					const k2 = mealSlotOf(x);
					if (k2 && k2 !== "unk" && !got[k2]) got[k2] = mealStrip(x.text).slice(0, 8) || "已记";
				});
				const cell = (k2, ghost) => got[k2] ? "<button class=\"gs-chip on\" style=\"pointer-events:none\">✓" + MEAL_NM[k2] + " " + vEsc(got[k2]) + "</button>" : "<button class=\"gs-chip\" data-ml=\"" + k2 + "\"" + (ghost ? " style=\"opacity:.6\"" : "") + ">" + (ghost ? "＋" + MEAL_NM[k2] : MEAL_NM[k2] + " ─") + "</button>";
				mealsHtml = "<div class=\"rv-q\" style=\"margin-top:18px\">今天的三餐 · 点空格子补一句</div><div class=\"gs-chips\">" + cell("bre") + cell("lun") + cell("din") + cell("tea", true) + cell("sup", true) + "</div><div id=\"rvMealBox\"></div>";
			}
			R.innerHTML = "<div class=\"rv-head\"><div class=\"rv-title\">晚间复盘</div><button class=\"pill-btn\" id=\"rvClose\">收起</button></div><div class=\"rv-body\"><div class=\"rv-finish\" style=\"margin:14px auto 0\">" + jjImg("night", 120) + "<br><b>今日快照</b><br>记录 " + recN + " 条 · 完成 " + doneN + " 件 · 事件 " + evN + " 件<br>迁移 " + stat.mig + " · 放弃 " + stat.drop + " · 转交 " + stat.del + (stat.sd ? " · 待办池 " + stat.sd : "") + (oldDone ? "<br>还清了 " + oldDone + " 件旧账 ✓" : "") + (moods.length ? "<br>今天的心情：" + moods.slice(0, 3).join("、") : "") + "<br>" + (rvLeft ? "还有没做完的，想现在整理就点下面。" : doneN ? "今天完成的事都记下了，收起前还可以盖个章。" : "今天先记到这里，想补一句也可以。") + "</div>" + (rvLeft ? "<div class=\"rv-q\" style=\"margin-top:14px;text-align:center\">还有 " + rvLeft + " 件没做完 · 明天我替你收进「待办池」<br><button class=\"gm-btn\" id=\"rvWalk\" style=\"margin-top:8px;padding:8px 16px\">现在过一遍 ›</button></div>" : "") + mealsHtml + "<div class=\"rv-q\" style=\"margin-top:18px\">说说今天</div><div id=\"rvVoice\"><button class=\"gm-btn\" id=\"rvVoGo\" style=\"width:100%;padding:10px\">说一段，我来分拣 ›</button></div><div class=\"rv-q\" style=\"margin-top:18px\">给今天盖个章</div><div class=\"gs-chips\" id=\"rvStamps\">" + stAll.map((x) => "<button class=\"gs-chip" + (stCur === x ? " on" : "") + "\" data-st=\"" + escAttr(x) + "\">" + vEsc(x) + "</button>").join("") + "</div><input id=\"rvNewStamp\" class=\"qdate\" placeholder=\"或自己刻一个章（会存进你的章库）\" style=\"margin-top:10px\"><input id=\"rvSum\" class=\"qdate\" placeholder=\"给今天留一句话（可不填）\" style=\"margin-top:10px\" value=\"" + String(P().summary || "").replace(/"/g, "&quot;") + "\"><button class=\"rv-confirm\" id=\"rvSave\">保存小结并收起</button><button class=\"gm-btn\" id=\"rvShare\" style=\"width:100%;margin-top:12px;padding:10px\">▣ 把今天做成分享图</button></div>";
			$("#rvClose").onclick = closeReview;
			if ($("#rvWalk")) $("#rvWalk").onclick = () => {
				queue = queue.filter((t) => t.state === "open");
				qi = 0;
				renderReview();
			};
			if ($("#rvVoGo")) $("#rvVoGo").onclick = () => openVoice({ onDone: () => renderReview() });
			R.querySelectorAll("[data-st]").forEach((b) => b.onclick = () => {
				P().stamp = b.dataset.st;
				scheduleSave();
				R.querySelectorAll("[data-st]").forEach((x) => x.classList.toggle("on", x === b));
			});
			R.querySelectorAll("[data-ml]").forEach((b) => b.onclick = () => {
				const k2 = b.dataset.ml;
				const box = $("#rvMealBox");
				box.innerHTML = "<div class=\"rv-q\" style=\"margin:12px 0 6px\">" + MEAL_WORD[k2] + " · 顺手补全这顿</div>" + mealComposerHTML();
				bindMealComposer(box, TODAY, k2, () => renderReview());
				const w = box.querySelector("#mcWhat");
				if (w) w.focus();
			});
			const stTake = () => {
				const ns = $("#rvNewStamp").value.trim();
				if (ns) {
					if (!STAMP_PRESETS.includes(ns) && !SET.stamps.includes(ns)) SET.stamps.push(ns);
					P().stamp = ns;
				}
				P().summary = $("#rvSum").value.trim();
				scheduleSave();
			};
			$("#rvSave").onclick = () => {
				stTake();
				closeReview();
			};
			$("#rvShare").onclick = () => {
				stTake();
				openShare(shDayPayload(TODAY));
			};
			return;
		}
		const t = queue[qi];
		R.innerHTML = "<div class=\"rv-head\"><div class=\"rv-title\">晚间复盘</div><span class=\"rv-prog\">" + (qi + 1) + " / " + queue.length + "</span><button class=\"pill-btn\" id=\"rvClose\">收起</button></div><div class=\"rv-body\">" + (doneN ? "<div class=\"rv-done-note\">今天完成了 " + doneN + " 件 ✓</div>" : "") + "<div class=\"rv-card\"><div class=\"rv-task\" id=\"rvTask\"></div>" + (t.badge ? "<div class=\"rv-meta\"><span class=\"badge\">" + t.badge + "</span></div>" : "") + "<div class=\"rv-q\">这件事怎么处理？</div><div class=\"rv-grid\"><button class=\"rv-btn b-done\" id=\"bDone\"><span class=\"g\">✓</span>完成</button><button class=\"rv-btn b-mig\"  id=\"bMig\"><span class=\"g\">›</span>继续做</button><button class=\"rv-btn b-drop\" id=\"bDrop\"><span class=\"g\">✕</span>不做了</button><button class=\"rv-btn b-del\"  id=\"bDel\"><span class=\"g\">→</span>转交</button><button class=\"rv-btn\" id=\"bSd\" style=\"grid-column:1/-1\"><span class=\"g\" style=\"color:var(--ink-faint)\">☾</span>待办池 · 先放着，不催</button></div>" + (SET.duty && (t.mig || 0) >= 3 ? "<div class=\"rv-q\" style=\"margin:12px 0 0;color:var(--accent)\">这件事已经顺延了 " + t.mig + " 天 · 暂时顾不上，可以先放进「☾ 待办池」</div>" : "") + "<div class=\"rv-mig-panel\" id=\"migPanel\"><div class=\"mig-quick\" id=\"migQuick\"></div><input type=\"date\" class=\"qdate\" id=\"migDate\"><input id=\"migNote\" placeholder=\"一句话进度，如：初稿完成，剩附录\"><button class=\"rv-confirm\" id=\"migGo\">确认迁移</button></div><div class=\"rv-mig-panel\" id=\"rvDelPanel\"><input id=\"rvDelTo\" class=\"qdate\" placeholder=\"转交给谁\" style=\"margin-bottom:10px\"><div class=\"mig-quick\" id=\"rvDelQuick\"></div><input type=\"date\" class=\"qdate\" id=\"rvDelDate\"><button class=\"rv-confirm\" id=\"rvDelGo\">确认转交 · 到期提醒我跟进</button></div></div></div>";
		const taskBox = $("#rvTask");
		const sn = symNode({
			sym: "task",
			state: "open"
		});
		sn.classList.add("static");
		taskBox.appendChild(sn);
		const tt = document.createElement("span");
		tt.textContent = t.text;
		taskBox.appendChild(tt);
		$("#rvClose").onclick = closeReview;
		const next = () => {
			qi++;
			renderReview();
		};
		const rvMemoStep = () => {
			const card = R.querySelector(".rv-card");
			card.innerHTML = "<div class=\"rv-task\"><span class=\"glyph done\" style=\"font-size:17px\">✓</span><span>已完成</span></div><div class=\"rv-q\">补一句备注？会进日报周报（可跳过）</div><input id=\"rvMemo\" class=\"qdate\" placeholder=\"比如：对方已确认 / 结果如何…\" value=\"" + escAttr(t.note) + "\"><div class=\"rv-grid\" style=\"margin-top:12px\"><button class=\"rv-btn\" id=\"rvMSkip\">跳过</button><button class=\"rv-btn b-done\" id=\"rvMSave\"><span class=\"g\">✓</span>保存备注</button></div>";
			$("#rvMSkip").onclick = next;
			$("#rvMSave").onclick = () => {
				const m = $("#rvMemo").value.trim();
				if (m) t.note = m;
				next();
			};
		};
		$("#bDone").onclick = () => {
			t.state = "done";
			t.doneDay = TODAY;
			cycOnDone(t);
			rvMemoStep();
		};
		$("#bDrop").onclick = () => {
			t.state = "dropped";
			t.badge = "不做了";
			stat.drop++;
			toast("✕ 已放弃 · 页面保留划痕");
			next();
		};
		$("#bSd").onclick = () => {
			t.state = "someday";
			delete t.due;
			t.badge = "☾ 想做";
			stat.sd = (stat.sd || 0) + 1;
			toast("☾ 收进「待办池」· 不催不追");
			next();
		};
		$("#bDel").onclick = () => {
			$("#migPanel").classList.remove("on");
			$("#rvDelPanel").classList.toggle("on");
		};
		$("#bMig").onclick = () => {
			$("#rvDelPanel").classList.remove("on");
			$("#migPanel").classList.toggle("on");
		};
		setupDatePick("migQuick", "migDate");
		setupDatePick("rvDelQuick", "rvDelDate");
		$("#rvDelGo").onclick = () => {
			const to = $("#rvDelTo").value.trim();
			if (!to) {
				toast("先填转交给谁");
				return;
			}
			const f = pickDate("rvDelDate");
			t.state = "delegated";
			t.delegate = {
				to,
				follow: f
			};
			delete t.followArrived;
			t.badge = "→ " + to + " · " + fmtShort(f) + " 跟进";
			stat.del++;
			toast("→ 已转交给 " + to);
			next();
		};
		$("#migGo").onclick = () => {
			const sel = pickDate("migDate");
			const note = $("#migNote").value.trim();
			t.state = "migrated";
			t.due = sel;
			t.mig = (t.mig || 0) + 1;
			if (note) t.note = note;
			t.badge = "→" + fmtShort(sel) + (note ? " · " + note : "");
			stat.mig++;
			toast("› 已迁移到 " + fmtKey(sel));
			next();
		};
	}
	// src/modules/journal/photos.js
	var photosState = {};
	photosState.imgTarget = null;
	function compressImg(src, cb) {
		const img = new Image();
		img.onload = () => {
			const MX = 1e3;
			let w = img.width, h = img.height;
			if (Math.max(w, h) > MX) {
				const r = MX / Math.max(w, h);
				w = Math.round(w * r);
				h = Math.round(h * r);
			}
			const cv = document.createElement("canvas");
			cv.width = w;
			cv.height = h;
			cv.getContext("2d").drawImage(img, 0, 0, w, h);
			try {
				cb(cv.toDataURL("image/jpeg", .72));
			} catch (_) {
				cb(src);
			}
		};
		img.onerror = () => cb(src);
		img.src = src;
	}
	function makeThumb(src, cb) {
		const img = new Image();
		img.onload = () => {
			let w = img.width, h = img.height;
			const mx = Math.max(w, h);
			if (mx > 160) {
				const r2 = 160 / mx;
				w = Math.round(w * r2);
				h = Math.round(h * r2);
			}
			const cv = document.createElement("canvas");
			cv.width = w;
			cv.height = h;
			cv.getContext("2d").drawImage(img, 0, 0, w, h);
			try {
				cb(cv.toDataURL("image/jpeg", .6));
			} catch (_) {
				cb(null);
			}
		};
		img.onerror = () => cb(null);
		img.src = src;
	}
	function backfillThumbs() {
		const q = [];
		walk((k, e) => {
			(e.images || []).forEach((src, i) => {
				if (!(e.imgt && e.imgt[i]) && !String(src).startsWith("idb:")) q.push({
					e,
					i,
					src
				});
			});
		});
		if (!q.length) return;
		let i2 = 0;
		const step = () => {
			if (i2 >= q.length) {
				scheduleSave();
				return;
			}
			const job = q[i2++];
			makeThumb(job.src, (tb) => {
				if (tb) (job.e.imgt = job.e.imgt || [])[job.i] = tb;
				setTimeout(step, 80);
			});
		};
		setTimeout(step, 1800);
	}
	function openLightbox(e, idx, canDel) {
		const L = $("#lightbox");
		L.innerHTML = "<img src=\"" + imgUrl(e.images[idx]) + "\">" + (canDel ? "<button class=\"rv-confirm\" id=\"lbDel\" style=\"position:absolute;left:24px;right:24px;width:auto;bottom:calc(28px + env(safe-area-inset-bottom));background:#C0604E\">删除这张图片</button>" : "");
		L.classList.add("on");
		L.onclick = () => L.classList.remove("on");
		if (canDel) $("#lbDel").onclick = (ev) => {
			ev.stopPropagation();
			snapshot("删除图片");
			e.images.splice(idx, 1);
			if (e.imgt) e.imgt.splice(idx, 1);
			L.classList.remove("on");
			scheduleSave();
			toast("已删除 · 可撤回");
			render();
		};
	}
	function bindPhotos() {
		$("#imgInput").addEventListener("change", (ev) => {
			const fs = [...ev.target.files];
			if (!fs.length || !photosState.imgTarget) return;
			snapshot("插入图片");
			let left = fs.length;
			fs.forEach((f) => {
				const r = platform.createFileReader();
				r.onload = () => compressImg(r.result, (out) => {
					const arr = photosState.imgTarget.images = photosState.imgTarget.images || [];
					const ix = arr.length;
					arr.push(out);
					const tgt = photosState.imgTarget;
					makeThumb(out, (tb) => {
						if (tb) {
							(tgt.imgt = tgt.imgt || [])[ix] = tb;
							scheduleSave();
							document.querySelectorAll(".thumbs img").forEach((im2) => {
								if (im2.src === out) im2.src = tb;
							});
						}
					});
					if (--left === 0) {
						delete photosState.imgTarget._imgPending;
						if (!findEntry(photosState.imgTarget)) EP().flow.push(photosState.imgTarget);
						navigationState.focusRef = photosState.imgTarget;
						scheduleSave();
						toast("已插入图片 · 点缩略图看大图");
						render();
					}
				});
				r.readAsDataURL(f);
			});
		});
		window.addEventListener("focus", () => setTimeout(() => {
			if (photosState.imgTarget && photosState.imgTarget._imgPending && !(photosState.imgTarget.images || []).length) delete photosState.imgTarget._imgPending;
		}, 800));
	}
	// src/ui/toolbar.js
	function buildToolbar() {
		toolbar.addEventListener("pointerdown", (ev) => ev.preventDefault());
		const sb0 = document.createElement("div");
		sb0.id = "smartBar";
		sb0.addEventListener("pointerdown", (ev) => ev.preventDefault());
		toolbar.parentElement.insertBefore(sb0, toolbar);
		const mk = (html, fn, cls) => {
			const b = document.createElement("button");
			b.className = "tb-btn" + (cls ? " " + cls : "");
			b.innerHTML = html;
			b.addEventListener("click", fn);
			toolbar.appendChild(b);
			return b;
		};
		const need = (fn) => () => {
			if (navigationState.focusRef) fn(navigationState.focusRef);
		};
		mk(lineIcon("time") + "<small>时间</small>", need((e) => e.sym === "task" && e.state !== "done" ? openTimeSheet(e) : journalTimeSheet(e)));
		mk(lineIcon("group") + "<small># 分组</small>", need((e) => {
			navigationState.sheetTarget = e;
			openSheet();
		}), "tb-big");
		mk(lineIcon("camera") + "<small>照片</small>", need((e) => {
			photosState.imgTarget = e;
			e._imgPending = true;
			const fi = $("#imgInput");
			fi.value = "";
			fi.click();
		}), "tb-big");
		const nest = mk(lineIcon("nest") + "<small>子项</small>", need((e) => {
			const loc = findEntry(e);
			if (!loc || loc.parent || e.sym !== "event") return;
			snapshot("追加子项");
			const child = {
				sym: "task",
				state: "open",
				text: "",
				_id: ++appState.uid
			};
			(e.children ||= []).push(child);
			e.collapsed = false;
			navigationState.focusRef = child;
			scheduleSave();
			render();
		}));
		nest.id = "tbNest";
		mk(lineIcon("more") + "<small>更多</small>", need((e) => openRowPop(e))).id = "tbMore";
	}
	function refreshToolbarKeys() {
		const e = navigationState.focusRef, nest = $("#tbNest");
		if (nest) nest.hidden = !e || e.sym !== "event" || !!findEntry(e)?.parent;
		smartBarUpd(e);
	}
	var sbTimer = null;
	var SB_FREQ = null;
	function sbFreqGroup() {
		if (SB_FREQ && SB_FREQ.day === TODAY && SB_FREQ.gen === storageState.PARSE_GEN) return SB_FREQ.g;
		const since = parseKey(addDaysK(TODAY, -30)), cnt = {};
		walk((d, e2) => {
			if (parseKey(d) >= since) (e2.groups || []).forEach((g) => cnt[g] = (cnt[g] || 0) + 1);
		});
		let best = null;
		Object.keys(cnt).forEach((g) => {
			if (!best || cnt[g] > cnt[best]) best = g;
		});
		SB_FREQ = {
			day: TODAY,
			gen: storageState.PARSE_GEN,
			g: best
		};
		return best;
	}
	function sbGroups(e, t) {
		const names = allGroupNames(), out = [];
		const push = (g) => {
			if (g && !out.includes(g) && names.includes(g)) out.push(g);
		};
		if (/《[^》]{1,30}》/.test(t) || /(二刷|三刷|补看)/.test(t)) push(names.find((g) => tplOf(g) === "movie"));
		if (/「[^」]{1,20}」/.test(t) || /外卖/.test(t) || modOn("meals") && mealSlotOf(e)) push(names.find((g) => tplOf(g) === "food"));
		names.forEach((g) => {
			if (g.length >= 2 && t.includes(g)) push(g);
		});
		if (out.length < 2 && t.length >= 4) push(sbFreqGroup());
		return out.slice(0, 2).map((g) => ({
			g,
			on: (e.groups || []).includes(g)
		}));
	}
	function smartBarUpd(e) {
		const S = $("#smartBar");
		if (!S) return;
		if (!modOn("smartbar") || !e) {
			S.classList.remove("on");
			S.innerHTML = "";
			return;
		}
		clearTimeout(sbTimer);
		sbTimer = setTimeout(() => sbBuild(e), 150);
	}
	function sbBuild(e) {
		const S = $("#smartBar");
		if (!S) return;
		const hide = () => {
			S.classList.remove("on");
			S.innerHTML = "";
			placeToolbar();
		};
		if (!modOn("smartbar") || !e || navigationState.focusRef !== e || !toolbar.classList.contains("on")) return hide();
		const t = (e.text || "").trim();
		if (!t) return hide();
		S.innerHTML = "";
		const chip = (html, on, fn) => {
			const c = document.createElement("button");
			c.className = "sb-chip" + (on ? " onx" : "");
			c.innerHTML = html;
			c.addEventListener("click", () => {
				fn();
				scheduleSave();
				sbBuild(e);
			});
			S.appendChild(c);
		};
		const dd2 = detectDue(t);
		if (dd2) {
			const on = e.due === dd2.key;
			chip(on ? "✓ 已挂 " + fmtShort(dd2.key) : lineIcon("calendar") + " 挂到 " + fmtShort(dd2.key), on, () => {
				if (on) {
					delete e.due;
					e.noDue = 1;
					toast("取消 · 这行不自动挂日期了");
				} else {
					e.due = dd2.key;
					delete e.noDue;
					toast("已挂到 " + fmtKey(dd2.key) + "（" + weekCN(dd2.key) + "）");
				}
			});
		}
		const tv = detectTime(t);
		if (tv) {
			const on = e.time === tv;
			chip(on ? "✓ " + tv : lineIcon("time") + " 记时间 " + tv, on, () => {
				if (e.sym !== "task") delete e.journalTime;
				if (on) {
					delete e.time;
					e.noTime = 1;
					toast("取消 · 这行不自动记时间了");
				} else {
					e.time = tv;
					delete e.noTime;
					toast("已记时间 " + tv);
				}
			});
		}
		sbGroups(e, t).forEach((o) => {
			chip((houseMark(tplOf(o.g)) || "#") + vEsc(o.g), o.on, () => {
				if (o.on) {
					e.groups = (e.groups || []).filter((x) => x !== o.g);
					toast("已移出 #" + o.g);
				} else {
					(e.groups = e.groups || []).push(o.g);
					toast("已归入 #" + o.g);
				}
			});
		});
		if (modOn("ledger")) {
			const pl = parseLine(t);
			if (pl.prices && pl.prices.length) {
				const k = expKindOf(e, pl);
				if (k) chip(houseMark("money") + vEsc(expLabel(k)) + " · 换类", false, () => {
					expSheet(e);
				});
			}
		}
		if (!S.children.length) return hide();
		S.classList.add("on");
		placeToolbar();
	}
	// src/modules/journal/entries.js
	function chipRow(e, editable) {
		if (rowsState.CLEAN_ROWS && !isMinor(e)) return null;
		const hasG = e.groups && e.groups.length;
		let expK = null;
		if (modOn("ledger") && e.text) {
			const px = parseEntry(e);
			if (px.prices && px.prices.length) expK = expKindOf(e, px);
		}
		const warn = modOn("meals") && e.text ? foodWarn(e) : null;
		const canSplit = editable && !e.noSplit && e.text && [
			"event",
			"note",
			"ask",
			"bang"
		].includes(e.sym) && /[。\n]/.test(e.text.trim().replace(/[。\s]+$/, "")) && splitSentences(e.text).length >= 2;
		const fxs = entryFixes(e);
		if (!e.badge && !e.time && !e.due && !hasG && !e.src && !e.srcDay && !e.note && !e.nbId && !e.meal && !expK && !warn && !canSplit && !fxs.length) return null;
		const c = document.createElement("div");
		c.className = "chips";
		if (e.meal && MEAL_WORD[e.meal]) {
			const mb = document.createElement("span");
			mb.className = "badge";
			mb.innerHTML = houseMark("food");
			mb.append(MEAL_WORD[e.meal]);
			c.appendChild(mb);
		}
		if (expK) {
			const xb = document.createElement("span");
			xb.className = "badge";
			xb.innerHTML = houseMark("money");
			xb.append(expLabel(expK));
			xb.style.cursor = "pointer";
			xb.onclick = (ev) => {
				ev.stopPropagation();
				expSheet(e);
			};
			c.appendChild(xb);
		}
		if (hasG) e.groups.forEach((g) => {
			const b = document.createElement("span");
			b.className = "badge";
			const [bg, fg] = gStyle(g);
			b.style.background = bg;
			b.style.color = fg;
			b.innerHTML = houseMark(tplOf(g)) || "#";
			b.append(g);
			c.appendChild(b);
		});
		if (e.badge) {
			const b = document.createElement("span");
			b.className = "badge";
			b.textContent = e.badge;
			c.appendChild(b);
		}
		if (e.srcDay) {
			const b = document.createElement("span");
			b.className = "badge acc";
			b.textContent = "◂ " + fmtShort(e.srcDay) + " 转来";
			b.style.cursor = "pointer";
			b.onclick = (ev) => {
				ev.stopPropagation();
				jumpToEntry(e.srcDay, e.srcId);
			};
			c.appendChild(b);
		} else if (e.src) {
			const b = document.createElement("span");
			b.className = "badge";
			b.textContent = "◂ " + String(e.src).slice(0, 12);
			c.appendChild(b);
		}
		if (e.note) {
			const b = document.createElement("span");
			b.className = "badge";
			b.textContent = "✎ " + String(e.note).slice(0, 14);
			c.appendChild(b);
		}
		if (e.time) {
			const b = document.createElement("span");
			b.className = "badge";
			b.innerHTML = lineIcon("time");
			b.append(e.time);
			if (editable) {
				b.style.cursor = "pointer";
				b.onclick = (ev) => {
					ev.stopPropagation();
					openTimeSheet(e);
				};
			}
			c.appendChild(b);
		}
		if (e.due) {
			const b = document.createElement("span");
			b.className = "badge acc";
			b.textContent = "→" + fmtShort(e.due);
			b.style.cursor = "pointer";
			if (editable) b.onclick = (ev) => {
				ev.stopPropagation();
				openDueSheet(e);
			};
			else b.onclick = (ev) => {
				ev.stopPropagation();
				gotoDay(e.due);
			};
			c.appendChild(b);
		}
		if (e.nbId) {
			const b = document.createElement("span");
			b.className = "badge acc";
			b.innerHTML = houseMark("notes") + "翻开";
			b.style.cursor = "pointer";
			b.onclick = (ev) => {
				ev.stopPropagation();
				if (noteById(e.nbId)) {
					navigationState.cur = {
						name: "note",
						id: e.nbId
					};
					render();
				} else toast("这个本子已经删掉了");
			};
			c.appendChild(b);
		}
		if (warn) {
			const b = document.createElement("span");
			b.className = "badge warn";
			b.textContent = warn.txt;
			b.style.cursor = "pointer";
			b.onclick = (ev) => {
				ev.stopPropagation();
				const op = warn.o.op;
				jumpToEntry(op.k, op.e._id || (op.e._id = ++appState.uid));
			};
			c.appendChild(b);
		}
		if (canSplit) {
			const n = splitSentences(e.text).length;
			const b = document.createElement("span");
			b.className = "badge acc";
			b.textContent = "✂ 拆成 " + n + " 条";
			b.style.cursor = "pointer";
			b.onclick = (ev) => {
				ev.stopPropagation();
				splitEntry(e);
			};
			const x = document.createElement("span");
			x.className = "badge";
			x.textContent = "不拆";
			x.style.cursor = "pointer";
			x.onclick = (ev) => {
				ev.stopPropagation();
				e.noSplit = 1;
				scheduleSave();
				render();
			};
			c.appendChild(b);
			c.appendChild(x);
		}
		fxs.forEach((f) => {
			const b = document.createElement("span");
			b.className = "badge acc vo-fixb";
			b.textContent = "「" + f.from + "」→ " + f.to + " ↺";
			b.onclick = (ev) => {
				ev.stopPropagation();
				voUndoFix(e, f);
			};
			c.appendChild(b);
		});
		return c;
	}
	function growTA(t) {
		if (!t || !t.isConnected) return;
		t.style.height = "auto";
		t.style.height = t.scrollHeight + "px";
	}
	function bindEntryHold(row, e) {
		bindRecordHold(row, () => {
			readingGuideDone(e.sym === "task" ? "Task" : "Record");
			openRowPop(e);
		});
	}
	function reviewCountLabel() {
		let count = 0;
		if (appState.PAGES[TODAY]) walkPage(TODAY, (e) => {
			if (e.text?.trim() || e.images?.length) count++;
		});
		return "今天记了 " + count + " 件小事 · 睡前复盘一下 ›";
	}
	function entryNode(e, editable, isChild, flat, liveSym, inJournal, building = false) {
		e._id = e._id || ++appState.uid;
		const wrap = document.createElement("div");
		wrap.dataset.eid = e._id;
		const row = document.createElement("div");
		row.className = "entry " + e.sym + " " + (e.state || "");
		const s = symNode(e);
		if (e.sym === "event") {
			const mark = houseMark(sideHome(e) || evIcon(e).house);
			if (mark) s.innerHTML = mark;
		}
		if (rowsState.CLEAN_ROWS && e.text && modOn("meals") && !isMinor(e) && foodWarn(e)) {
			const wd = document.createElement("i");
			wd.className = "wdot";
			s.appendChild(wd);
		}
		if ((editable || liveSym) && e.sym === "task") {
			bindRecordHold(s, () => {
				readingGuideDone("Task");
				actionsState.qsTarget = e;
				openQSheet();
			}, 450);
			s.addEventListener("click", () => {
				if (!e.state || e.state === "open" || e.state === "someday" && navigationState.cur.name === "history") {
					snapshot("处理任务", dayOfEntry(e) || editKey());
					if (e.state === "someday") e.doneFromPool = true;
					e.state = "done";
					e.doneDay = navigationState.cur.name === "history" ? navigationState.cur.date : TODAY;
					cycOnDone(e);
					scheduleSave();
					render();
					if (e.pick) pickDone(e);
					else journalCompleted(e);
				} else if ([
					"done",
					"migrated",
					"delegated",
					"dropped"
				].includes(e.state)) {
					snapshot("恢复任务", dayOfEntry(e) || editKey());
					if (e.state !== "done") {
						e.badge = SET.duty && e.mig ? ">×" + e.mig : void 0;
						if (e.due && parseKey(e.due) > parseKey(TODAY)) delete e.due;
						delete e.delegate;
						delete e.followArrived;
					}
					e.state = e.doneFromPool ? "someday" : "open";
					delete e.doneFromPool;
					delete e.doneDay;
					delete e.finishedTime;
					toast("恢复任务");
					scheduleSave();
					render();
				} else {
					actionsState.qsTarget = e;
					openQSheet();
				}
			});
			s.title = "点按完成 · 长按处理";
		} else if (rowsState.CLEAN_ROWS && (editable || liveSym)) {
			s.classList.add("tapme");
			s.title = "点一下看这一行";
			s.addEventListener("click", (ev) => {
				ev.stopPropagation();
				openRowPop(e, s);
			});
		} else s.classList.add("static");
		if (editable || liveSym) bindEntryHold(row, e);
		const body = document.createElement("div");
		body.className = "entry-body";
		if (editable) {
			const inp = document.createElement("textarea");
			inp.className = "line-input";
			inp.rows = 1;
			inp.value = journalBody(e);
			inp.dataset.eid = e._id;
			inp.setAttribute("autocomplete", "off");
			requestAnimationFrame(() => growTA(inp));
			inp.addEventListener("input", () => {
				const hadText = !!e.text?.trim();
				e.text = inp.value;
				const review = hadText !== !!e.text.trim() && view.querySelector(".journal-review");
				if (review) review.textContent = reviewCountLabel();
				scheduleSave();
				growTA(inp);
				updateTagSug(e, inp);
				updateRecall(e, inp);
				smartBarUpd(e);
				keepAboveKeyboard(inp);
			});
			inp.addEventListener("focus", () => {
				navigationState.focusRef = e;
				navigationState.pendingDel = null;
				inp._t0 = e.text;
			});
			inp.addEventListener("keydown", (ev) => {
				if (ev.isComposing) return;
				if (ev.key === "Enter") {
					ev.preventDefault();
					$("#tagSug").classList.remove("on");
					commit(e);
					const loc = findEntry(e);
					if (!loc) return;
					if (!e.text.trim()) {
						if (loc.parent) {
							loc.list.splice(loc.idx, 1);
							const ploc = findEntry(loc.parent);
							const pe = Object.assign({
								text: "",
								_id: ++appState.uid
							}, defFor(ploc.list));
							ploc.list.splice(ploc.idx + 1, 0, pe);
							navigationState.focusRef = pe;
							scheduleSave();
							render();
						}
						return;
					}
					const sent = !loc.parent && isleRoute(e) && !!sideHome(e);
					let ne;
					if (sent) {
						ne = Object.assign({
							text: "",
							_id: ++appState.uid
						}, defFor(loc.list));
						loc.list.splice(loc.idx + 1, 0, ne);
					} else if (!loc.parent && isThought(e)) {
						ne = {
							sym: "note",
							userSet: true,
							noDue: 1,
							text: "",
							_id: ++appState.uid
						};
						loc.list.splice(loc.idx + 1, 0, ne);
					} else if (!loc.parent && e.sym === "event") {
						ne = {
							sym: "task",
							state: "open",
							text: "",
							_id: ++appState.uid
						};
						(e.children = e.children || []).push(ne);
						e.collapsed = false;
					} else if (loc.parent) {
						ne = {
							sym: "task",
							state: "open",
							text: "",
							_id: ++appState.uid
						};
						loc.list.splice(loc.idx + 1, 0, ne);
					} else {
						ne = Object.assign({
							text: "",
							_id: ++appState.uid
						}, defFor(loc.list));
						loc.list.splice(loc.idx + 1, 0, ne);
					}
					navigationState.focusRef = ne;
					scheduleSave();
					render();
				}
				if (ev.key === "Backspace" && !inp.value) {
					ev.preventDefault();
					if (e.images && e.images.length) {
						snapshot("删除图片");
						e.images.pop();
						if (e.imgt) e.imgt.pop();
						toast("已删除 1 张图片 · 可撤回");
						scheduleSave();
						render();
						return;
					}
					snapshot("删除行");
					removeEntry(e);
					if (navigationState.focusRef === e) navigationState.focusRef = null;
					render();
				}
			});
			inp.addEventListener("blur", () => {
				setTimeout(() => {
					$("#recall").classList.remove("on");
				}, 250);
				setTimeout(() => {
					if (!inp.isConnected) return;
					const changed = commit(e);
					if (inp._t0 != null && inp._t0 !== e.text) {
						const L = dictLearnEdit(inp._t0, e.text);
						inp._t0 = e.text;
						if (L && L.from) toast("记住了：「" + L.from + "」就是「" + L.to + "」，以后自动改");
						else if (L && L.no) toast("好，以后不把「" + L.no + "」改成「" + L.to + "」");
					}
					const keep = e.images && e.images.length || e.children && e.children.length || e._imgPending || navigationState.sheetTarget === e && $("#gsheet").classList.contains("on");
					if (!e.text.trim() && !keep) {
						removeEntry(e);
						if (navigationState.focusRef === e) navigationState.focusRef = null;
						render();
						return;
					}
					const routed = isleRoute(e);
					if (changed || routed) {
						scheduleSave();
						render();
					}
				}, 60);
			});
			const wn = rowsState.CLEAN_ROWS && (!inJournal || e.sym === "task") ? whenNode(e, true) : null;
			if (wn) {
				const ln = document.createElement("div");
				ln.className = "e-line";
				ln.appendChild(wn);
				ln.appendChild(inp);
				body.appendChild(ln);
			} else body.appendChild(inp);
		} else {
			const tx = document.createElement("div");
			tx.className = "entry-text";
			tx.textContent = journalBody(e);
			const wn = rowsState.CLEAN_ROWS ? whenNode(e, false) : null;
			if (wn) {
				const ln = document.createElement("div");
				ln.className = "e-line";
				ln.appendChild(wn);
				ln.appendChild(tx);
				body.appendChild(ln);
			} else body.appendChild(tx);
		}
		if (inJournal && isChild && journalClock(e) && (e.sym !== "task" || e.state === "done")) {
			const clock = document.createElement("div");
			clock.className = "journal-child-time";
			clock.appendChild(journalTimeButton(e));
			body.appendChild(clock);
		}
		const chips = building ? null : chipRow(e, editable);
		if (chips) body.appendChild(chips);
		if (e.images && e.images.length) {
			const tw = document.createElement("div");
			tw.className = "thumbs";
			e.images.forEach((src, idx) => {
				const im = document.createElement("img");
				im.src = imgUrl(e.imgt && e.imgt[idx] || src);
				if (im.src === "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" && IMG_DB.ready) {
					im.classList.add("lost");
					im.title = "这张照片找不到了";
				}
				im.loading = "lazy";
				im.decoding = "async";
				im.onclick = (ev) => {
					ev.stopPropagation();
					openLightbox(e, idx, editable);
				};
				tw.appendChild(im);
			});
			body.appendChild(tw);
		}
		row.appendChild(s);
		row.appendChild(body);
		if (!isChild) {
			const hasKids = e.children && e.children.length;
			const rt = document.createElement("div");
			rt.className = "rowtools";
			if (hasKids) {
				const kp = document.createElement("button");
				kp.className = "kidpill";
				kp.textContent = (e.collapsed ? "▸ " : "▾ ") + e.children.length;
				kp.onclick = (ev) => {
					ev.stopPropagation();
					e.collapsed = !e.collapsed;
					scheduleSave();
					render();
				};
				rt.appendChild(kp);
			}
			if (editable && e.sym === "event" && !rowsState.CLEAN_ROWS) {
				const ab = document.createElement("button");
				ab.className = "addchild";
				ab.textContent = "＋";
				ab.title = "在这件事下记一笔";
				ab.onclick = (ev) => {
					ev.stopPropagation();
					const ne = {
						sym: "task",
						state: "open",
						text: "",
						_id: ++appState.uid
					};
					(e.children = e.children || []).push(ne);
					e.collapsed = false;
					navigationState.focusRef = ne;
					scheduleSave();
					render();
				};
				rt.appendChild(ab);
			}
			if (rt.children.length) row.appendChild(rt);
		}
		wrap.appendChild(row);
		if (e.children && e.children.length && !e.collapsed && !flat) {
			const c = document.createElement("div");
			c.className = "children";
			e.children.forEach((ch) => c.appendChild(entryNode(ch, editable, true, false, false, inJournal)));
			wrap.appendChild(c);
		}
		readingGuide(wrap, s, e);
		return wrap;
	}
	function gotoDay(k) {
		if (k === TODAY) navigationState.cur = { name: "today" };
		else if (parseKey(k) < parseKey(TODAY)) navigationState.cur = {
			name: "history",
			date: k
		};
		else navigationState.cur = {
			name: "day",
			key: k
		};
		render();
	}
	function jumpToEntry(date, id) {
		if (appState.PAGES[date]) {
			let hit = null;
			walkPage(date, (e) => {
				if (e._id === id) hit = e;
			});
			if (hit && (isMinor(hit) || sideHome(hit))) minorOpen.add(date);
		}
		gotoDay(date);
		setTimeout(() => {
			const el = view.querySelector("[data-eid=\"" + id + "\"]");
			if (el) {
				try {
					el.scrollIntoView({ block: "center" });
				} catch (_) {}
				el.classList.add("flash");
				setTimeout(() => el.classList.remove("flash"), 1700);
			}
		}, 80);
	}
	function sectionLabel(t) {
		const d = document.createElement("div");
		d.className = "section-label";
		d.textContent = t;
		return d;
	}
	function jumpRow(date, e, building = false) {
		const w = document.createElement("div");
		if (building) w.className = "house-record";
		w.appendChild(entryNode(e, false, true, true, true, false, building));
		const tx = w.querySelector(".entry-text");
		if (tx) {
			tx.style.cursor = "text";
			tx.onclick = (ev) => {
				ev.stopPropagation();
				inplaceEdit(tx, e);
			};
		}
		const sy = w.querySelector(".sym.static");
		if (sy && e.sym !== "task") {
			sy.classList.remove("static");
			sy.classList.add("tapme");
			sy.onclick = (ev) => {
				ev.stopPropagation();
				openRowPop(e, sy);
			};
		}
		if (!building && e.state === "done" && e.doneDay && e.doneDay !== date) {
			const body = w.querySelector(".entry-body");
			if (body) {
				const c = document.createElement("div");
				c.className = "chips";
				c.innerHTML = "<span class=\"badge acc\">✓ " + fmtShort(e.doneDay) + " 清账</span>";
				body.appendChild(c);
			}
		}
		return w;
	}
	function inplaceEdit(tx, e) {
		if (!tx || !tx.isConnected) return;
		const t0 = e.text || "";
		const ta = document.createElement("textarea");
		ta.className = "line-input inplace";
		ta.rows = 1;
		ta.value = t0;
		ta.setAttribute("autocomplete", "off");
		tx.replaceWith(ta);
		growTA(ta);
		try {
			ta.focus();
			const n = ta.value.length;
			ta.setSelectionRange(n, n);
		} catch (_) {}
		keepAboveKeyboard(ta);
		let done = false;
		const finish = () => {
			if (done) return;
			done = true;
			const v = ta.value.trim();
			if (v && v !== t0) {
				snapshot("改一条");
				e.text = v;
				scheduleSave();
				let L = null;
				try {
					L = dictLearnEdit(t0, v);
				} catch (_) {}
				toast(L && L.from ? "记住了：「" + L.from + "」就是「" + L.to + "」，以后自动改" : "改好了");
			} else if (!v) toast("空着就不改了 · 要删这条，去那天删");
			const a = document.activeElement;
			if (!ta.isConnected || a && a !== ta && a.classList && a.classList.contains("inplace")) {
				if (ta.isConnected) {
					const nt = document.createElement("div");
					nt.className = "entry-text";
					nt.textContent = e.text;
					nt.style.cursor = "text";
					nt.onclick = (ev) => {
						ev.stopPropagation();
						inplaceEdit(nt, e);
					};
					ta.replaceWith(nt);
				}
				return;
			}
			const st = view.scrollTop;
			render();
			view.scrollTop = st;
		};
		ta.addEventListener("input", () => {
			growTA(ta);
			keepAboveKeyboard(ta);
		});
		ta.addEventListener("keydown", (ev) => {
			if (ev.isComposing) return;
			if (ev.key === "Enter" && !ev.shiftKey) {
				ev.preventDefault();
				ta.blur();
			} else if (ev.key === "Escape") {
				ta.value = t0;
				ta.blur();
			}
		});
		ta.addEventListener("blur", () => setTimeout(finish, 40));
	}
	var LIST_STEP = 120;
	function pagedList(box, items, one) {
		let shown = 0, lastDate = null;
		const more = document.createElement("button");
		more.className = "more-btn";
		const step = (n) => {
			const frag = document.createDocumentFragment(), end = Math.min(items.length, shown + n);
			for (; shown < end; shown++) {
				const h = items[shown];
				if (h.date !== lastDate) {
					lastDate = h.date;
					const g = document.createElement("div");
					g.className = "date-group";
					g.dataset.day = h.date;
					g.textContent = dayGroupTitle(h.date);
					frag.appendChild(g);
				}
				frag.appendChild(one(h));
			}
			if (more.isConnected) box.insertBefore(frag, more);
			else box.appendChild(frag);
			const left = items.length - shown;
			if (left > 0) {
				more.textContent = left > LIST_STEP ? "再往前 120 条 · 还有 " + left + " 条" : "再往前 " + left + " 条";
				if (!more.isConnected) box.appendChild(more);
			} else if (more.isConnected) more.remove();
		};
		more.onclick = () => {
			step(LIST_STEP);
			navigationState.cur.lim = shown;
			navigationState.navPrevLim = shown;
		};
		step(Math.max(LIST_STEP, navigationState.cur.lim || 0));
		return items.length;
	}
	function dateGroupList(box, filter) {
		const hits = [];
		walk((date, e) => {
			if (filter(e)) hits.push({
				date,
				e
			});
		});
		const ids = new Set(hits.map((h) => h.e._id));
		const superseded = /* @__PURE__ */ new Set();
		hits.forEach((h) => {
			if (h.e.srcId && ids.has(h.e.srcId)) superseded.add(h.e.srcId);
		});
		return pagedList(box, hits.filter((h) => !(superseded.has(h.e._id) && h.e.state === "migrated")), (h) => jumpRow(h.date, h.e));
	}
	function tapZone(text, big, onTap, pen) {
		const z = document.createElement("div");
		z.className = "tapzone" + (big ? " big" : "");
		if (pen) z.innerHTML = "<svg class=\"penicon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z\"/></svg><span>" + text + "</span>";
		else z.textContent = text;
		z.addEventListener("click", onTap);
		return z;
	}
	function secPh(text, onTap) {
		const z = document.createElement("div");
		z.className = "sec-ph";
		z.innerHTML = "<i>＋</i><span>" + vEsc(text) + "</span>";
		z.addEventListener("click", onTap);
		return z;
	}
	function secWrite(date, kind) {
		const p = appState.PAGES[date] || (appState.PAGES[date] = {
			plan: [],
			flow: []
		});
		const ne = kind === "task" ? {
			sym: "task",
			state: "open",
			userSet: true,
			text: "",
			_id: ++appState.uid
		} : {
			sym: kind,
			userSet: true,
			noDue: 1,
			text: "",
			_id: ++appState.uid
		};
		(kind === "task" ? p.plan : p.flow).push(ne);
		navigationState.focusRef = ne;
		scheduleSave();
		render();
	}
	function defFor(list) {
		return list === EP().flow ? {
			sym: "event",
			defSym: true
		} : {
			sym: "task",
			state: "open"
		};
	}
	function addLine(list) {
		const ne = Object.assign({
			text: "",
			_id: ++appState.uid
		}, defFor(list));
		list.push(ne);
		navigationState.focusRef = ne;
		scheduleSave();
		render();
		if (list === EP().plan) {
			const n = EP().plan.filter((x) => x.sym === "task" && x.state === "open").length;
			if (n >= 8) toast("已经第 " + n + " 件了——真的都是今天吗？");
		}
	}
	function renderPageInto(box, date, editable) {
		const p = appState.PAGES[date] || {
			plan: [],
			flow: []
		};
		if (p.stamp) {
			const st0 = document.createElement("div");
			st0.className = "tp-more";
			st0.style.textAlign = "center";
			st0.style.padding = "2px 0 0";
			st0.textContent = p.stamp + " 的一天";
			st0.onclick = () => stampSheet(date);
			box.appendChild(st0);
		}
		rowsState.CLEAN_ROWS = true;
		try {
			const flowTasks = p.flow.filter((e) => e.sym === "task" && !isMinor(e));
			const tasks = p.plan.concat(flowTasks).filter((e) => !e.wish && (e.state !== "someday" || date !== TODAY));
			const iso = key2iso(date);
			const staged = stagePlans().filter((p) => stageHasTask(p, iso));
			const nOpen = staged.filter((p) => !stageTaskDone(p, iso)).length + tasks.filter((e) => e.sym === "task" && e.state === "open").length;
			box.appendChild(secHead("待办", nOpen, !tasks.length, null));
			tasks.filter((e) => !e.state || e.state === "open").concat(tasks.filter((e) => e.state && e.state !== "open")).forEach((e) => box.appendChild(entryNode(e, editable)));
			for (const p of staged) stageHomeRow(box, p, iso);
			if (editable && !tasks.length && !staged.length) box.appendChild(secPh("写一件要做的事", () => secWrite(date, "task")));
			if (date === TODAY && !staged.some((p) => !stageTaskDone(p, iso)) && tasks.some((e) => e.sym === "task" && e.state === "done") && !tasks.some((e) => e.sym === "task" && e.state === "open")) {
				const ad = document.createElement("div");
				ad.className = "alldone";
				ad.innerHTML = "<img src=\"" + JJ.happy + "\" alt=\"\">今天完成了 " + tasks.filter((e) => e.sym === "task" && e.state === "done").length + " 件，待办清空了";
				box.appendChild(ad);
			}
			if (editable && date === TODAY) {
				let sdN = 0;
				walk((k2, x) => {
					if (x.sym === "task" && x.state === "someday" && !x.wish) sdN++;
				});
				if (sdN) {
					const pl = document.createElement("div");
					pl.className = "pool-line";
					pl.textContent = "☾ 待办池 · " + sdN + " 件 · 想做哪件捞回来 ›";
					pl.onclick = () => {
						navigationState.cur = {
							name: "agg",
							key: "someday"
						};
						render();
					};
					box.appendChild(pl);
				}
			}
			if (p.voOut && p.voOut.length) {
				const vo = voOutNode(p.voOut);
				if (vo) box.appendChild(vo);
			}
			if (editable && date === TODAY && obLandOn()) box.appendChild(obSlipNode());
			const majors = [], minors = [], thoughts = [], sides = [];
			p.flow.forEach((e) => {
				if (sideHome(e)) sides.push(e);
				else if (isMinor(e)) minors.push(e);
				else if (e.sym === "task") return;
				else if (isThought(e)) thoughts.push(e);
				else majors.push(e);
			});
			const withAsk = (e) => {
				box.appendChild(entryNode(e, editable));
				if (editable && e.isleAsk) {
					const a = isleAskNode(e);
					if (a) box.appendChild(a);
				}
			};
			journalRender(box, date, editable, majors, sides, minors);
			if (minors.length) {
				const meals2 = minors.filter((e) => e.meal);
				const skips2 = meals2.filter((e) => /^没(有)?吃$/.test((e.text || "").trim()));
				const nbs2 = minors.filter((e) => e.nbId && !e.meal);
				const lgs2 = minors.filter((e) => e.ledger);
				const segs = [];
				if (meals2.length) segs.push(skips2.length === meals2.length ? "没吃×" + meals2.length : "三餐×" + meals2.length);
				if (nbs2.length) segs.push("本子×" + nbs2.length);
				if (lgs2.length) segs.push("记账×" + lgs2.length);
				const open = minorOpen.has(date);
				const strip = document.createElement("div");
				strip.className = "minor-strip";
				strip.innerHTML = "⚙ <b>" + (date === TODAY ? "今日" : "这天") + "小事 · " + minors.length + " 条</b><span class=\"ms-segs\">" + segs.join(" · ") + "</span><span class=\"ms-ar\">" + (open ? "▴ 收起" : "▾ 展开") + "</span>";
				strip.onclick = () => {
					if (open) minorOpen.delete(date);
					else minorOpen.add(date);
					render();
				};
				box.appendChild(strip);
				if (open) {
					const mb2 = document.createElement("div");
					mb2.className = "minor-box";
					minors.forEach((e) => mb2.appendChild(entryNode(e, editable)));
					const cap = document.createElement("div");
					cap.className = "minor-cap";
					cap.textContent = "模块打卡、本子足迹、记的账都收在这 · 每条照旧能改能删";
					mb2.appendChild(cap);
					box.appendChild(mb2);
				}
			}
			box.appendChild(secHead("随想", thoughts.length, !thoughts.length, null));
			thoughts.forEach(withAsk);
			if (editable && !thoughts.length) box.appendChild(secPh(date === TODAY && obLandOn() ? "冒出来的念头、此刻的心情" : "冒出来的念头", () => secWrite(date, "note")));
			if (sides.length) {
				const cnt = {};
				sides.forEach((e) => {
					const k = sideHome(e);
					cnt[k] = (cnt[k] || 0) + 1;
				});
				const ks = ISLE_ORDER.filter((k) => cnt[k]);
				const open = minorOpen.has(date);
				const li = document.createElement("div");
				li.className = "isle-line";
				li.id = "isleLine";
				li.innerHTML = "<div class=\"r1\"><b>" + (date === TODAY ? "今天在岛上" : "这天在岛上") + "</b><span>· " + sides.length + " 条</span><span class=\"ar\">" + (open ? "收起 ▴" : "展开 ▾") + "</span></div><div class=\"ihs\">" + ks.map((k) => "<span class=\"ih\" data-isle=\"" + k + "\">" + isleIcon(k, 22) + ISLE[k].n + " " + cnt[k] + "</span>").join("") + "</div>";
				li.onclick = () => {
					if (open) minorOpen.delete(date);
					else minorOpen.add(date);
					render();
				};
				box.appendChild(li);
				const fl = ISLE_LAST && Date.now() - ISLE_LAST.at < 2e4 ? sides.find((e) => e._id === ISLE_LAST.id) : null;
				if (fl) {
					const f = document.createElement("div");
					f.className = "isle-flash";
					f.id = "isleFlash";
					f.innerHTML = "<span>刚收进「" + ISLE[ISLE_LAST.k].n + "」：" + vEsc(String(fl.text)) + "</span><button>撤回</button>";
					f.querySelector("button").onclick = (ev) => {
						ev.stopPropagation();
						isleUndo(fl);
					};
					box.appendChild(f);
				}
				if (open) {
					const bx = document.createElement("div");
					bx.className = "isle-box";
					ks.forEach((k) => {
						const hd = document.createElement("div");
						hd.className = "isle-sub";
						hd.dataset.isle = k;
						hd.innerHTML = isleIcon(k, 20) + "<span>" + ISLE[k].n + " · " + cnt[k] + "</span><span class=\"go\">去" + ISLE[k].h + " ›</span>";
						hd.onclick = () => isleGo(k);
						bx.appendChild(hd);
						sides.filter((e) => sideHome(e) === k).forEach((e) => bx.appendChild(entryNode(e, editable)));
					});
					box.appendChild(bx);
				}
			}
			if (date === TODAY) {
				const review = document.createElement("button");
				review.className = "journal-review";
				review.textContent = reviewCountLabel();
				review.onclick = openReview;
				box.appendChild(review);
			}
		} finally {
			rowsState.CLEAN_ROWS = false;
		}
	}
	function bindEntryLinks() {
		view.addEventListener("click", (ev) => {
			const g = ev.target && ev.target.closest ? ev.target.closest(".date-group[data-day]") : null;
			if (g) {
				ev.stopPropagation();
				minorOpen.add(g.dataset.day);
				gotoDay(g.dataset.day);
			}
		});
	}
	// src/ui/navigation.js
	var navigationState = {};
	navigationState.cur = { name: "today" };
	navigationState.navStack = [];
	navigationState.navPrevSnap = null;
	navigationState.navFromBack = false;
	navigationState.navPrevLim = 0;
	function navSnap() {
		return JSON.stringify({
			n: navigationState.cur.name,
			g: navigationState.cur.g,
			k: navigationState.cur.key,
			p: navigationState.cur.pid,
			i: navigationState.cur.id,
			q: navigationState.cur.q,
			d: navigationState.cur.date,
			t: navigationState.cur.tab
		});
	}
	function navBack() {
		if (!navigationState.navStack.length) return;
		navigationState.navFromBack = true;
		navigationState.cur = navigationState.navStack.pop();
		render();
	}
	navigationState.focusRef = null;
	navigationState.pendingDel = null;
	navigationState.undoStack = [];
	function snapshot(label, day = editKey(), otherDays = []) {
		prepareRecords();
		const pages = {};
		for (const key of /* @__PURE__ */ new Set([day, ...otherDays])) pages[key] = appState.PAGES[key] ? JSON.parse(JSON.stringify(appState.PAGES[key])) : null;
		const change = {
			label,
			pages,
			addedWeights: []
		};
		navigationState.undoStack.push(change);
		if (navigationState.undoStack.length > 20) navigationState.undoStack.shift();
		return change;
	}
	function undoLastChange() {
		const change = navigationState.undoStack.pop();
		if (!change) return;
		for (const [key, page] of Object.entries(change.pages)) if (page) appState.PAGES[key] = page;
		else delete appState.PAGES[key];
		if (change.addedWeights.length) appState.HEALTH.records.weight = appState.HEALTH.records.weight.filter((row) => !change.addedWeights.includes(row.id));
		return change;
	}
	function placeToolbar() {
		const vv = window.visualViewport;
		const kb = vv ? Math.max(0, window.innerHeight - vv.height - vv.offsetTop) : 0;
		toolbar.style.bottom = kb + "px";
		const S = $("#tagSug");
		const tbH = toolbar.classList.contains("on") ? toolbar.offsetHeight || 54 : 0;
		if (S) S.style.bottom = kb + tbH + "px";
		const sugH2 = S && S.classList.contains("on") ? S.offsetHeight || 44 : 0;
		const SB = $("#smartBar");
		if (SB) SB.style.bottom = kb + tbH + sugH2 + "px";
		const sbH2 = SB && SB.classList.contains("on") ? SB.offsetHeight || 44 : 0;
		const RC = $("#recall");
		if (RC) RC.style.bottom = kb + tbH + sugH2 + sbH2 + "px";
		view.style.paddingBottom = (view.classList.contains("th-picking") ? 0 : 150) + kb + "px";
		const CB = document.getElementById("chatBar"), CR = document.getElementById("chatReply");
		const cfoc = !!(document.activeElement && document.activeElement.id === "chatIn");
		if (CB) CB.style.bottom = (cfoc ? kb : 0) + "px";
		if (CR) CR.style.bottom = (cfoc ? kb : 0) + (CB && CB.classList.contains("on") ? CB.offsetHeight || 58 : 0) + 8 + "px";
		["gsheet", "qsheet"].forEach((id) => {
			const el = document.getElementById(id);
			if (el) el.style.bottom = (el.classList.contains("on") ? kb : 0) + "px";
		});
	}
	function findScroller(el) {
		let sc = el.parentElement;
		while (sc && sc !== document.body) {
			const cs = getComputedStyle(sc);
			if (sc.scrollHeight > sc.clientHeight + 4 && /(auto|scroll)/.test(cs.overflowY)) return sc;
			sc = sc.parentElement;
		}
		return null;
	}
	function keepAboveKeyboard(el) {
		if (!el || !el.getBoundingClientRect || !el.isConnected) return;
		const vv = window.visualViewport;
		const vBottom = vv ? vv.offsetTop + vv.height : window.innerHeight;
		const isLine = el.classList && el.classList.contains("line-input");
		const tbH = isLine && toolbar.classList.contains("on") ? toolbar.offsetHeight || 54 : 0;
		const sugH = isLine && $("#tagSug").classList.contains("on") ? $("#tagSug").offsetHeight || 44 : 0;
		const sb4 = $("#smartBar");
		const sbH4 = isLine && sb4 && sb4.classList.contains("on") ? sb4.offsetHeight || 44 : 0;
		const limit = vBottom - tbH - sugH - sbH4 - 14;
		const r = el.getBoundingClientRect();
		const sc = findScroller(el);
		if (!sc) return;
		if (r.bottom > limit) sc.scrollTop += r.bottom - limit;
		else if (r.top < 70) sc.scrollTop -= 70 - r.top;
	}
	function scrollFocused() {
		const ae = document.activeElement;
		if (ae && ae.classList && (ae.classList.contains("nb-body") || ae.classList.contains("nb-title"))) return;
		if (ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA")) keepAboveKeyboard(ae);
	}
	function updateToolbarVis() {
		const ae = document.activeElement;
		const editing = (navigationState.cur.name === "today" || navigationState.cur.name === "history" || navigationState.cur.name === "day") && ae && ae.classList && ae.classList.contains("line-input");
		toolbar.classList.toggle("on", editing);
		{
			const ph0 = document.getElementById("phone");
			if (ph0) ph0.classList.toggle("lnedit", !!editing);
		}
		if (editing) refreshToolbarKeys();
		else {
			$("#tagSug").classList.remove("on");
			const sb2 = $("#smartBar");
			if (sb2) {
				sb2.classList.remove("on");
				sb2.innerHTML = "";
			}
		}
		placeToolbar();
		if (ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA")) {
			setTimeout(scrollFocused, 120);
			setTimeout(scrollFocused, 420);
		}
	}
	var sugTarget = null;
	function updateTagSug(e, inp) {
		const S = $("#tagSug");
		const m = inp.value.match(/#([^\s#，。,]*)$/);
		if (!m) {
			S.classList.remove("on");
			return;
		}
		const part = m[1];
		sugTarget = {
			e,
			inp
		};
		S.innerHTML = "<span class=\"ts-label\">归入分组</span>";
		const names = allGroupNames().filter((g) => !part || g.includes(part));
		const addChip = (label, fn) => {
			const c = document.createElement("button");
			c.className = "gs-chip";
			c.textContent = label;
			c.addEventListener("click", fn);
			S.appendChild(c);
		};
		names.forEach((g) => addChip("#" + g, () => applyTag(g)));
		if (part && !allGroupNames().includes(part)) addChip("新建 #" + part, () => {
			if (!appState.extraGroups.includes(part)) appState.extraGroups.push(part);
			applyTag(part);
		});
		S.classList.add("on");
		placeToolbar();
	}
	function applyTag(g) {
		if (!sugTarget) return;
		const { e, inp } = sugTarget;
		e.text = inp.value.replace(/#([^\s#，。,]*)$/, "").trim();
		if (!(e.groups = e.groups || []).includes(g)) e.groups.push(g);
		scheduleSave();
		$("#tagSug").classList.remove("on");
		toast("已归入 #" + g);
		render();
	}
	function curDayKey() {
		return navigationState.cur.name === "today" ? TODAY : navigationState.cur.name === "history" ? navigationState.cur.date : navigationState.cur.name === "day" ? navigationState.cur.key : null;
	}
	function navDay(d) {
		const k0 = curDayKey();
		if (!k0) return;
		gotoDay(addDaysK(k0, d));
	}
	var swX = null;
	var swY = null;
	navigationState.sheetTarget = null;
	var GPAL = [
		["#E8EFE4", "#5F7E64"],
		["#EAE7F5", "#6C5F8F"],
		["#F5E8E0", "#9A6B4F"],
		["#E4EDF3", "#4F7286"],
		["#F6E4EA", "#B25A76"],
		["#FBF2D5", "#93762A"],
		["#E0F0ED", "#3F8578"],
		["#ECECEC", "#6B6B6B"]
	];
	function gStyle(name) {
		if (appState.GCOLOR[name] != null && GPAL[appState.GCOLOR[name]]) return GPAL[appState.GCOLOR[name]];
		let h = 0;
		for (const c of name) h += c.charCodeAt(0);
		return GPAL[h % 4];
	}
	var ACCENTS = [
		["#B5483A", "#F7E1DC"],
		["#2F6B64", "#E3EDE9"],
		["#487236", "#E8EEDF"],
		["#4A6C8C", "#E3EAF1"],
		["#7A5C8F", "#ECE5F1"],
		["#9C5A1C", "#F3E7CF"]
	];
	function applyAccent() {
		const a = ACCENTS[SET.accent] || ACCENTS[0];
		const r = document.documentElement.style;
		r.setProperty("--accent", a[0]);
		r.setProperty("--accent-soft", a[1]);
	}
	function allGroupNames() {
		const s = new Set(appState.extraGroups);
		walk((d, e) => {
			if (e.groups) e.groups.forEach((g) => s.add(g));
		});
		return [...s];
	}
	navigationState.TOAST_MUTE = 0;
	function toast(msg, pose) {
		if (navigationState.TOAST_MUTE) return;
		const t = $("#toast");
		if (pose && JJ[pose]) {
			t.innerHTML = "<img src=\"" + JJ[pose] + "\" alt=\"\">" + vEsc(msg);
			t.classList.add("pose");
		} else {
			t.textContent = msg;
			t.classList.remove("pose");
		}
		t.classList.add("on");
		clearTimeout(t._tm);
		t._tm = setTimeout(() => t.classList.remove("on"), 1700);
	}
	function editKey() {
		return navigationState.cur.name === "history" ? navigationState.cur.date : navigationState.cur.name === "day" ? navigationState.cur.key : TODAY;
	}
	function EP() {
		const k = editKey();
		if (!appState.PAGES[k]) appState.PAGES[k] = {
			plan: [],
			flow: []
		};
		return appState.PAGES[k];
	}
	function findEntry(e, day = editKey()) {
		const search = (list, parent) => {
			for (let i = 0; i < list.length; i++) {
				if (list[i] === e) return {
					list,
					idx: i,
					parent
				};
				if (list[i].children) {
					const r = search(list[i].children, list[i]);
					if (r) return r;
				}
			}
			return null;
		};
		const page = appState.PAGES[day];
		return page && (search(page.plan, null) || search(page.flow, null));
	}
	function removeEntry(e) {
		const loc = findEntry(e);
		if (loc) {
			loc.list.splice(loc.idx, 1);
			scheduleSave();
		}
	}
	var minorOpen = /* @__PURE__ */ new Set();
	function isMinor(e) {
		return !!(e.ledger || e.nbId || e.meal);
	}
	function bindNavigation() {
		setInterval(placeToolbar, 300);
		document.addEventListener("DOMContentLoaded", () => {});
		$("#tagSug").addEventListener("pointerdown", (ev) => ev.preventDefault());
		if (window.visualViewport) {
			window.visualViewport.addEventListener("resize", updateToolbarVis);
			window.visualViewport.addEventListener("scroll", placeToolbar);
		}
		window.addEventListener("scroll", () => {
			if (window.scrollY) window.scrollTo(0, 0);
		});
		topTitle.addEventListener("click", () => {
			const k = curDayKey();
			if (!k) return;
			const a = k.split(".").map(Number);
			navigationState.cur = {
				name: "cal",
				y: a[0],
				m: a[1]
			};
			render();
		});
		document.getElementById("prevDay").onclick = () => navDay(-1);
		document.getElementById("nextDay").onclick = () => navDay(1);
		view.addEventListener("pointerdown", (ev) => {
			swX = ev.clientX;
			swY = ev.clientY;
		});
		view.addEventListener("pointerup", (ev) => {
			if (swX === null) return;
			const dx = ev.clientX - swX, dy = ev.clientY - swY, sx = swX;
			swX = null;
			const ae = document.activeElement;
			if (ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA")) return;
			if (sx < 24) return;
			if (Math.abs(dx) > 60 && Math.abs(dy) < 40 && curDayKey()) navDay(dx > 0 ? -1 : 1);
		});
		document.addEventListener("focusin", updateToolbarVis);
		document.addEventListener("focusout", () => setTimeout(updateToolbarVis, 80));
	}
	// src/modules/share/index.js
	var SH_SIZES = [
		[
			"xhs",
			"3:4",
			1080,
			1440
		],
		[
			"sq",
			"1:1",
			1080,
			1080
		],
		[
			"story",
			"竖屏",
			1080,
			1920
		]
	];
	var shPayload = null;
	var shSize = "xhs";
	var shTheme = "paper";
	var shCanvas = null;
	var SH_BG = {
		tried: false,
		block: false,
		imgs: {}
	};
	function shLoadBGs() {
		if (SH_BG.tried) return;
		SH_BG.tried = true;
		[
			["34", JJ.bg34],
			["11", JJ.bg11],
			["916", JJ.bg916],
			["base", JJ.bg34]
		].forEach(([k, f]) => {
			const im = new Image();
			im.onload = () => {
				SH_BG.imgs[k] = im;
				if ($("#shSheet").classList.contains("on")) shRender();
			};
			im.src = f;
		});
	}
	function shBgFor(size) {
		const m = {
			xhs: "34",
			sq: "11",
			story: "916"
		}[size];
		return SH_BG.block ? null : SH_BG.imgs[m] || SH_BG.imgs.base || null;
	}
	function shThemeList() {
		const base = [["paper", "手帐纸"], ["ink", "墨色"]];
		if (shBgFor(shSize)) base.push(["bgd", "信纸"]);
		return base;
	}
	function shT() {
		const acc = (ACCENTS[SET.accent] || ACCENTS[0])[0];
		return shTheme === "ink" || shTheme === "bgl" ? {
			bg: "#2B231C",
			ink: "#F7F0E2",
			soft: "#C9BBA4",
			faint: "#8F7F6B",
			acc: "#E38C78",
			pill: "#3A3027",
			grain: "#000",
			wm: "light"
		} : {
			bg: "#F7F0E2",
			ink: "#2E241C",
			soft: "#75624F",
			faint: "#958370",
			acc,
			pill: "#EFE5D3",
			grain: "#5A5140",
			wm: "dark"
		};
	}
	function shFont(w, px) {
		return w + " " + px + "px -apple-system,\"PingFang SC\",\"Noto Sans CJK SC\",sans-serif";
	}
	function shWrap(ctx, text, maxW) {
		const out = [];
		String(text == null ? "" : text).split("\n").forEach((par) => {
			let line = "";
			for (const ch of par) if (line && ctx.measureText(line + ch).width > maxW) {
				out.push(line);
				line = ch;
			} else line += ch;
			out.push(line);
		});
		return out;
	}
	function shRR(ctx, x, y, w, h, r) {
		ctx.beginPath();
		ctx.moveTo(x + r, y);
		ctx.arcTo(x + w, y, x + w, y + h, r);
		ctx.arcTo(x + w, y + h, x, y + h, r);
		ctx.arcTo(x, y + h, x, y, r);
		ctx.arcTo(x, y, x + w, y, r);
		ctx.closePath();
	}
	function shMascot(ctx, cx, cy, h, T) {
		const im = jjObj("nest");
		if (!im.complete || !im.naturalWidth) return;
		const w = h * im.naturalWidth / im.naturalHeight;
		ctx.drawImage(im, cx - w / 2, cy - h / 2, w, h);
	}
	function shGlyph(e) {
		if (e.sym === "note" && e.ledger) return {
			t: "💰",
			c: null
		};
		if (e.sym === "note" && mealGlyphSlot(e)) return {
			t: "🍚",
			c: null
		};
		if (e.sym === "task") return {
			t: {
				open: "•",
				done: "✓",
				migrated: "›",
				dropped: "✕",
				delegated: "→",
				someday: "☾"
			}[e.state] || "•",
			c: {
				done: "#5F8F66",
				dropped: "#C0604E"
			}[e.state] || null
		};
		return {
			t: {
				event: "○",
				note: "—",
				mood: "＝",
				ask: "？",
				bang: "！"
			}[e.sym] || "•",
			c: {
				ask: "#5B7FA6",
				bang: "#B5493A"
			}[e.sym] || null
		};
	}
	function shGrain(ctx, W, H, T) {
		ctx.save();
		ctx.globalAlpha = shTheme === "ink" ? .06 : .05;
		ctx.fillStyle = T.grain;
		const n = Math.round(W * H / 380);
		for (let i = 0; i < n; i++) ctx.fillRect(Math.random() * W, Math.random() * H, 1.5, 1.5);
		ctx.restore();
	}
	function shFooter(ctx, W, H, T) {
		shMascot(ctx, W / 2, H - 222, 100, T);
		let saved = false;
		try {
			const vb = WM.vb.split(/\s+/).map(Number), sc = 50 / vb[3], ww = vb[2] * sc;
			ctx.save();
			saved = true;
			ctx.translate(W / 2 - ww / 2 - vb[0] * sc, H - 158 - vb[1] * sc);
			ctx.scale(sc, sc);
			const c1 = T.wm === "light" ? "#F7F0E2" : "#2E241C", c2 = T.wm === "light" ? "#9CC9BF" : "#2F6B64";
			const p1 = new Path2D(WM.d1), p2 = new Path2D(WM.d2);
			ctx.lineJoin = "round";
			ctx.fillStyle = c1;
			ctx.strokeStyle = c1;
			ctx.lineWidth = 2.4;
			ctx.fill(p1);
			ctx.stroke(p1);
			ctx.fillStyle = c2;
			ctx.strokeStyle = c2;
			ctx.lineWidth = 1.2;
			ctx.fill(p2);
			ctx.stroke(p2);
			ctx.restore();
			saved = false;
		} catch (_) {
			if (saved) ctx.restore();
			ctx.textAlign = "center";
			ctx.font = shFont(700, 32);
			ctx.fillStyle = T.ink;
			ctx.fillText("啾啾岛 Jotbird", W / 2, H - 118);
		}
		ctx.textAlign = "center";
		ctx.textBaseline = "alphabetic";
		ctx.font = shFont(400, 22);
		ctx.fillStyle = T.faint;
		ctx.fillText("把日子记在岛上", W / 2, H - 72);
		ctx.textAlign = "left";
	}
	function shList(ctx, items, x, y0, maxW, F, T, fit) {
		let y = y0;
		const lh = F * 1.62, gap = F * .72, childF = Math.round(F * .82);
		for (const it of items) {
			const g = shGlyph(it.e), indent = it.child ? F * 1.5 : 0;
			const tx = x + indent + F * 1.35, tw = maxW - indent - F * 1.35;
			ctx.font = shFont(it.child ? 400 : 500, it.child ? childF : F);
			const lines = shWrap(ctx, mealFullText(it.e), tw);
			if (!fit) {
				ctx.fillStyle = g.c || (it.e.sym === "mood" ? "#7A5C8F" : it.child ? T.soft : T.ink);
				ctx.font = shFont(600, it.child ? childF : F);
				ctx.fillText(g.t, x + indent, y + (it.child ? childF : F));
				ctx.font = shFont(it.child ? 400 : 500, it.child ? childF : F);
				if (it.child) {
					ctx.strokeStyle = T.pill;
					ctx.lineWidth = 3;
					ctx.beginPath();
					ctx.moveTo(x + F * .6, y - gap * .4);
					ctx.lineTo(x + F * .6, y + lines.length * lh * .9);
					ctx.stroke();
				}
				lines.forEach((ln, i) => {
					ctx.fillStyle = g.c && it.e.state === "done" ? T.faint : it.child ? T.soft : it.e.sym === "mood" ? "#7A5C8F" : T.ink;
					ctx.fillText(ln, tx, y + (it.child ? childF : F) + i * lh * .92);
					if (it.e.state === "done" || it.e.state === "dropped") {
						const lw = ctx.measureText(ln).width;
						ctx.strokeStyle = T.faint;
						ctx.lineWidth = 2.4;
						ctx.beginPath();
						ctx.moveTo(tx, y + (it.child ? childF : F) * .68 + i * lh * .92);
						ctx.lineTo(tx + lw, y + (it.child ? childF : F) * .68 + i * lh * .92);
						ctx.stroke();
					}
				});
				if (it.e.note) {
					ctx.font = shFont(400, Math.round(childF * .86));
					ctx.fillStyle = T.soft;
					ctx.fillText("✎ " + it.e.note, tx, y + (it.child ? childF : F) + lines.length * lh * .92 - lh * .18 + childF * .9);
				}
			}
			y += (it.child ? childF : F) + (lines.length - 1) * lh * .92 + (it.e.note ? childF * 1.15 : 0) + gap;
		}
		return y - y0;
	}
	function shItemsOf(payload) {
		if (payload.type === "entry") {
			const arr = [{
				e: payload.e,
				child: false
			}];
			(payload.e.children || []).forEach((ch) => arr.push({
				e: ch,
				child: true
			}));
			return arr;
		}
		if (payload.type === "day") {
			const p = appState.PAGES[payload.date] || {
				plan: [],
				flow: []
			};
			const arr = [];
			[...p.plan, ...p.flow].filter((e) => !(isMinor(e) && e.sym !== "task")).forEach((e) => {
				arr.push({
					e,
					child: false
				});
				(e.children || []).forEach((ch) => arr.push({
					e: ch,
					child: true
				}));
			});
			return arr;
		}
		if (payload.type === "group") {
			const rows = [];
			walk((d, e) => {
				if (e.groups && e.groups.includes(payload.g)) rows.push({
					d,
					e
				});
			});
			rows.sort((a, b) => parseKey(b.d) - parseKey(a.d));
			return rows.slice(0, 6).map((r) => ({
				e: Object.assign({}, r.e, { text: fmtShort(r.d) + "日 · " + (r.e.text || "") }),
				child: false
			}));
		}
		return [];
	}
	function shDraw() {
		const sz = SH_SIZES.find((x) => x[0] === shSize), W = sz[2], H = sz[3];
		const T = shT(), P = shPayload;
		const c = document.createElement("canvas");
		c.width = W;
		c.height = H;
		const ctx = c.getContext("2d");
		ctx.fillStyle = T.bg;
		ctx.fillRect(0, 0, W, H);
		const bgImg = shTheme === "bgd" || shTheme === "bgl" ? shBgFor(shSize) : null;
		if (bgImg) {
			const sc = Math.max(W / bgImg.width, H / bgImg.height);
			ctx.drawImage(bgImg, (W - bgImg.width * sc) / 2, (H - bgImg.height * sc) / 2, bgImg.width * sc, bgImg.height * sc);
		}
		const M = 88, CW = W - 176, top = 128, bottom = H - 320;
		ctx.textBaseline = "alphabetic";
		ctx.font = shFont(600, 30);
		ctx.fillStyle = T.faint;
		const head = P.head || "";
		ctx.fillText(head, M, top);
		ctx.font = shFont(700, 46);
		ctx.fillStyle = T.ink;
		const title = P.cardTitle || "";
		if (title) ctx.fillText(title, M, 196);
		const y0 = top + (title ? 130 : 56);
		if (P.type === "stats") {
			let y = y0 + 26;
			const tw = (CW - 40) / 3;
			(P.tiles || []).forEach((t, i) => {
				const x = M + i * (tw + 20);
				ctx.fillStyle = T.pill;
				shRR(ctx, x, y, tw, 176, 18);
				ctx.fill();
				ctx.fillStyle = T.ink;
				ctx.textAlign = "center";
				ctx.font = shFont(700, 58);
				const big = String(t[0]);
				ctx.fillText(big, x + tw / 2 - (t[1] ? 12 : 0), y + 96);
				if (t[1]) {
					ctx.font = shFont(400, 24);
					ctx.fillStyle = T.soft;
					ctx.fillText(t[1], x + tw / 2 + ctx.measureText(big).width + 26, y + 92);
				}
				ctx.font = shFont(400, 22);
				ctx.fillStyle = T.faint;
				ctx.fillText(t[2], x + tw / 2, y + 142);
			});
			ctx.textAlign = "left";
			y += 236;
			for (const x of P.list || []) {
				if (y > bottom - 30) break;
				ctx.font = shFont(700, 34);
				ctx.fillStyle = T.acc;
				ctx.fillText(x.no, 92, y);
				ctx.font = shFont(500, 34);
				ctx.fillStyle = T.ink;
				let nm = x.nm;
				while (ctx.measureText(nm).width > CW - 220 && nm.length > 2) nm = nm.slice(0, -1);
				if (nm !== x.nm) nm += "…";
				ctx.fillText(nm, 146, y);
				ctx.font = shFont(700, 32);
				ctx.fillStyle = x.scCls === "no2" || x.scCls === "lei" ? "#C0604E" : x.scCls === "ok" ? "#5F8F66" : x.scCls === "bao" ? T.acc : x.scCls === "jia" ? T.soft : T.ink;
				ctx.fillText(x.sc, M + CW - ctx.measureText(x.sc).width, y);
				y += 62;
			}
			if (P.bars && P.bars.length && y < bottom - 90) {
				y += 14;
				ctx.font = shFont(600, 24);
				ctx.fillStyle = T.faint;
				ctx.fillText("城 市 分 布", M, y);
				y += 40;
				const bmax = P.bars[0][1];
				for (const [c, v] of P.bars) {
					if (y > bottom - 20) break;
					ctx.font = shFont(400, 27);
					ctx.fillStyle = T.soft;
					ctx.fillText(c, M, y);
					const bx = 216, bw = CW - 128 - 70;
					ctx.fillStyle = T.pill;
					shRR(ctx, bx, y - 22, bw, 24, 12);
					ctx.fill();
					ctx.fillStyle = T.acc;
					shRR(ctx, bx, y - 22, Math.max(24, bw * v / bmax), 24, 12);
					ctx.fill();
					ctx.font = shFont(400, 24);
					ctx.fillStyle = T.faint;
					ctx.fillText(String(v), bx + bw + 22, y);
					y += 52;
				}
			}
			if (P.quote && y < bottom - 100) {
				y += 22;
				ctx.fillStyle = T.pill;
				shRR(ctx, M, y - 34, CW, 92, 14);
				ctx.fill();
				ctx.font = shFont(400, 26);
				ctx.fillStyle = T.soft;
				let qt = "“" + P.quote.text + "”";
				while (ctx.measureText(qt).width > CW - 48 && qt.length > 4) qt = qt.slice(0, -2) + "”";
				ctx.fillText(qt, 112, y + 4);
				ctx.font = shFont(400, 21);
				ctx.fillStyle = T.faint;
				ctx.fillText("—— " + fmtShort(P.quote.d) + "日 的我", 112, y + 42);
			}
		} else if (P.type === "report") {
			let F = 34;
			while (F > 24) {
				ctx.font = shFont(400, F);
				if (y0 + shWrap(ctx, P.text, CW).length * F * 1.72 < bottom) break;
				F -= 2;
			}
			ctx.font = shFont(400, F);
			ctx.fillStyle = T.ink;
			let lines = shWrap(ctx, P.text, CW);
			const maxN = Math.floor((bottom - y0) / (F * 1.72));
			let cut = false;
			if (lines.length > maxN) {
				lines = lines.slice(0, maxN - 1);
				cut = true;
			}
			lines.forEach((ln, i) => {
				ctx.fillStyle = /^[【#]/.test(ln) ? T.acc : T.ink;
				ctx.fillText(ln, M, y0 + (i + 1) * F * 1.72);
			});
			if (cut) {
				ctx.fillStyle = T.faint;
				ctx.fillText("……换竖屏尺寸能装下更多", M, y0 + (lines.length + 1) * F * 1.72);
			}
		} else {
			const items = shItemsOf(P);
			let F = P.type === "entry" ? 56 : 44;
			while (F > 30 && shList(ctx, items, M, y0, CW, F, T, true) > bottom - y0) F -= 3;
			let used = shList(ctx, items, M, y0, CW, F, T, true), cut = 0, its = items.slice();
			while (its.length > 1 && used > bottom - y0) {
				its.pop();
				cut++;
				used = shList(ctx, its, M, y0, CW, F, T, true);
			}
			const avail = bottom - y0;
			const yS = y0 + (used < avail * .62 ? Math.min(avail - used, avail * .62 - used) * .52 : 0);
			shList(ctx, its, M, yS, CW, F, T, false);
			if (cut) {
				ctx.font = shFont(400, 30);
				ctx.fillStyle = T.faint;
				ctx.fillText("……还有 " + cut + " 条，换竖屏尺寸能装下更多", M, yS + used + 44);
			}
			if (P.sub) {
				ctx.font = shFont(400, 30);
				ctx.fillStyle = T.soft;
				ctx.fillText(P.sub, M, bottom + 58);
			}
		}
		shFooter(ctx, W, H, T);
		if (!bgImg) shGrain(ctx, W, H, T);
		return c;
	}
	function shEntryPayload(e) {
		const k = curDayKey() || TODAY;
		return {
			type: "entry",
			head: fmtKey(k) + " · " + weekCN(k),
			cardTitle: "",
			e
		};
	}
	function shDayPayload(k) {
		const p = appState.PAGES[k] || {
			plan: [],
			flow: []
		};
		let rec = 0, done = 0, ev = 0;
		walkPage(k, (e) => {
			if (isMinor(e) && e.sym !== "task") return;
			rec++;
			if (e.state === "done") done++;
			if (e.sym === "event") ev++;
		});
		return {
			type: "day",
			head: "啾啾岛 · 一日",
			cardTitle: fmtKey(k) + " " + weekCN(k),
			date: k,
			sub: "记录 " + rec + " 条 · 完成 " + done + " 件 · 事件 " + ev + " 件" + (p.summary ? "　「" + p.summary + "」" : "")
		};
	}
	function openShare(payload) {
		shPayload = payload;
		shSize = "xhs";
		shTheme = "paper";
		shLoadBGs();
		dismissKB();
		$("#shSheet").classList.add("on");
		shRender();
	}
	function shRender() {
		const P = $("#shPanel");
		P.innerHTML = "<div class=\"gs-title\">分享图</div><div class=\"sh-prev\"><img id=\"shImg\" alt=\"分享预览\"></div><div class=\"sh-row\"><span class=\"sh-lab\">尺寸</span>" + SH_SIZES.map((x) => "<button class=\"gs-chip" + (shSize === x[0] ? " on" : "") + "\" data-sz=\"" + x[0] + "\">" + x[1] + "</button>").join("") + "</div><div class=\"sh-row\"><span class=\"sh-lab\">排版</span>" + shThemeList().map((x) => "<button class=\"gs-chip" + (shTheme === x[0] ? " on" : "") + "\" data-th=\"" + x[0] + "\">" + x[1] + "</button>").join("") + "</div><div class=\"sh-actions\"><button class=\"sh-ghost\" id=\"shClose\">关闭</button><button class=\"rv-confirm\" id=\"shGo\">分享 / 保存</button></div><div class=\"sh-hint\">长按上方预览图可直接存入相册</div>";
		if ((shTheme === "bgd" || shTheme === "bgl") && !shBgFor(shSize)) shTheme = "paper";
		shCanvas = shDraw();
		try {
			$("#shImg").src = shCanvas.toDataURL("image/png");
		} catch (_) {
			SH_BG.block = true;
			shTheme = "paper";
			shCanvas = shDraw();
			$("#shImg").src = shCanvas.toDataURL("image/png");
		}
		P.querySelectorAll("[data-sz]").forEach((b) => b.onclick = () => {
			shSize = b.dataset.sz;
			shRender();
		});
		P.querySelectorAll("[data-th]").forEach((b) => b.onclick = () => {
			shTheme = b.dataset.th;
			shRender();
		});
		$("#shClose").onclick = closeShare;
		$("#shGo").onclick = shExport;
	}
	function closeShare() {
		$("#shSheet").classList.remove("on");
	}
	function shExport() {
		if (!shCanvas) return;
		shCanvas.toBlob(async (blob) => {
			if (!blob) {
				toast("生成失败，重试一下");
				return;
			}
			const file = new File([blob], "啾啾岛分享.png", { type: "image/png" });
			if (platform.canShare([file])) try {
				await platform.share([file]);
				return;
			} catch (_) {}
			const a = document.createElement("a");
			a.href = URL.createObjectURL(blob);
			a.download = "啾啾岛分享.png";
			a.click();
			setTimeout(() => URL.revokeObjectURL(a.href), 4e3);
			toast("已生成图片 · 也可长按预览图存相册");
		}, "image/png");
	}
	function bindShare() {
		$("#shSheet").addEventListener("click", (ev) => {
			if (ev.target.id === "shSheet") closeShare();
		});
	}
	// src/ui/art.js
	function jjImg(k, h, cls) {
		return "<img class=\"jj" + (cls ? " " + cls : "") + "\" src=\"" + JJ[k] + "\" alt=\"\" style=\"height:" + h + "px\">";
	}
	function wordmarkSVG(h, light) {
		const c1 = light ? "#F7F0E2" : "var(--ink)", c2 = light ? "#9CC9BF" : "var(--teal)";
		return "<svg class=\"wm\" viewBox=\"" + WM.vb + "\" width=\"" + Math.round(h * WM.ratio) + "\" height=\"" + h + "\" role=\"img\" aria-label=\"啾啾岛 Jotbird\"><path d=\"" + WM.d1 + "\" fill=\"" + c1 + "\" stroke=\"" + c1 + "\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><path d=\"" + WM.d2 + "\" fill=\"" + c2 + "\" stroke=\"" + c2 + "\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/></svg>";
	}
	var JJI = {};
	function jjObj(k) {
		let im = JJI[k];
		if (!im) {
			im = JJI[k] = new Image();
			im.onload = () => {
				try {
					if ($("#shSheet") && $("#shSheet").classList.contains("on")) shRender();
				} catch (_) {}
			};
			im.src = JJ[k];
		}
		return im;
	}
	function houseLine(key) {
		const now = /* @__PURE__ */ new Date(), minute = now.getHours() * 60 + now.getMinutes();
		if (key === "food" && (minute >= 660 && minute < 810 || minute >= 1050 && minute < 1200)) return "到饭点了，拿不定主意就点「吃什么」抽一家。";
		if (key === "work" && now.getDay() === 5) return "今天周五，要整理这周的进度，可以点「报告」。";
		if (key === "money" && now.getDate() >= 25) return "快到月底了，点「盘点」看看这个月花在哪儿。";
		if ((key === "movie" || key === "book") && navigationState.cur.name === "group" && navigationState.cur.g) {
			const n = tplRows(navigationState.cur.g, null).length;
			if (n >= (key === "movie" ? 10 : 5)) return "这里已经有 " + n + " 条" + (key === "movie" ? "观影" : "读书") + "记录，往下翻翻。";
		}
		return HOUSE_INFO[key].line;
	}
	function letterHouseHead(key) {
		const h = HOUSE_INFO[key];
		if (!h) return null;
		const d = document.createElement("div");
		d.className = "house-head letter-house";
		d.dataset.house = key;
		d.innerHTML = "<div class=\"letter-copy\"><div class=\"letter-kicker\">岛上的日常 · " + vEsc(h.who) + "</div><b>" + vEsc(h.name) + "</b><p>" + vEsc(h.who + "：" + houseLine(key)) + "</p></div><img src=\"" + HEAD_ART[key] + "\" alt=\"" + vEsc(h.who + "与" + h.name) + "\">";
		return d;
	}
	function houseHead(tpl, g) {
		return letterHouseHead(tpl);
	}
	// src/modules/health/index.js
	var healthState = {};
	var HEALTH_PART = "waist";
	healthState.HEALTH_UNDO_WATER = null;
	var HEALTH_LIMIT = 40;
	function healthToday() {
		return key2iso(dkey(effNow()));
	}
	function healthClock() {
		const n = /* @__PURE__ */ new Date();
		return String(n.getHours()).padStart(2, "0") + ":" + String(n.getMinutes()).padStart(2, "0");
	}
	function healthId() {
		return "hl_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
	}
	function healthDateLabel(s) {
		return s ? Number(s.slice(5, 7)) + "月" + Number(s.slice(8, 10)) + "日" : "尚未记录";
	}
	function healthCommit() {
		scheduleSave();
		navigationState.navFromBack = true;
		render();
	}
	function healthCount() {
		return HEALTH_MODULES.reduce((n, k) => n + appState.HEALTH.records[k].length, 0);
	}
	function healthChart(rows, unit, bars, period) {
		if (!rows.some((r) => r.value != null)) return "<div class=\"health-empty\">记下第一条，变化会出现在这里。</div>";
		const vals = rows.filter((r) => r.value != null).map((r) => r.value), min = Math.min(...vals), max = Math.max(...vals), pad = Math.max((max - min) * .15, unit === "kg" || unit === "cm" ? .5 : 1), lo = bars ? 0 : Math.max(0, min - pad), hi = bars ? Math.max(1, max * 1.18) : max + pad, left = 48, bottom = 143;
		const yy = (v) => bottom - (v - lo) / (hi - lo) * 128, days = rows.map((r) => Date.parse(r.date + "T00:00:00Z")), from = Math.min(...days), to = Math.max(...days);
		const xx = (i) => bars ? left + (i + .5) * 258 / rows.length : to === from ? 177 : left + (days[i] - from) / (to - from) * 258;
		const fmt = (v) => Number.isInteger(v) ? String(v) : v.toFixed(1), short = (s) => Number(s.slice(5, 7)) + "/" + Number(s.slice(8, 10));
		let svg = "<svg class=\"health-chart\" viewBox=\"0 0 320 190\" role=\"img\" aria-label=\"" + vEsc((bars ? "记录柱状图" : "变化折线图") + "，单位" + unit) + "\"><title>" + vEsc(rows.map((r) => r.date + "：" + (r.value == null ? "未记录" : r.value + unit)).join("；")) + "</title>";
		[
			lo,
			(lo + hi) / 2,
			hi
		].forEach((v) => {
			const y = yy(v);
			svg += "<line class=\"hl-grid\" x1=\"48\" x2=\"306\" y1=\"" + y + "\" y2=\"" + y + "\"/><text x=\"41\" y=\"" + (y + 5) + "\" text-anchor=\"end\">" + fmt(v) + "</text>";
		});
		if (!bars) {
			let p = "";
			rows.forEach((r, i) => {
				if (r.value == null) {
					p = "";
					return;
				}
				const q = xx(i) + "," + yy(r.value);
				if (p) svg += "<line class=\"hl-line\" x1=\"" + p.split(",")[0] + "\" y1=\"" + p.split(",")[1] + "\" x2=\"" + xx(i) + "\" y2=\"" + yy(r.value) + "\"/>";
				p = q;
			});
		}
		rows.forEach((r, i) => {
			const x = xx(i);
			if (r.value == null) {
				svg += "<text x=\"" + x + "\" y=\"138\" text-anchor=\"middle\">—</text>";
				return;
			}
			const y = yy(r.value), caption = r.date + "：" + r.value + " " + unit;
			if (bars) {
				const width = Math.min(26, 258 / rows.length * .64);
				svg += "<rect tabindex=\"0\" role=\"img\" aria-label=\"" + caption + "\" class=\"hl-hit " + (period ? "hl-period-bar" : "hl-bar") + "\" x=\"" + (x - width / 2) + "\" y=\"" + y + "\" width=\"" + width + "\" height=\"" + (bottom - y) + "\" rx=\"3\"><title>" + caption + "</title></rect>";
			} else svg += "<circle tabindex=\"0\" role=\"img\" aria-label=\"" + caption + "\" class=\"hl-hit hl-point\" cx=\"" + x + "\" cy=\"" + y + "\" r=\"4\"><title>" + caption + "</title></circle>";
		});
		[.../* @__PURE__ */ new Set([
			0,
			Math.floor((rows.length - 1) / 2),
			rows.length - 1
		])].forEach((i) => {
			const x = xx(i);
			svg += "<text x=\"" + x + "\" y=\"164\" text-anchor=\"" + (!bars && i === 0 && rows.length > 1 ? "start" : !bars && i === rows.length - 1 && rows.length > 1 ? "end" : "middle") + "\">" + short(rows[i].date) + "</text>";
		});
		return svg + "<text x=\"48\" y=\"187\">日期</text><text x=\"306\" y=\"187\" text-anchor=\"end\">" + unit + "</text></svg>";
	}
	function healthLog(kind) {
		const rows = healthSorted(appState.HEALTH.records[kind]).reverse();
		if (!rows.length) return "";
		let html = "<div class=\"health-log\">", date = "";
		rows.slice(0, HEALTH_LIMIT).forEach((r) => {
			if (r.date !== date) {
				date = r.date;
				html += "<div class=\"date-group\">" + vEsc(r.date.replaceAll("-", ".")) + (date === healthToday() ? " · 今天" : "") + "</div>";
			}
			const value = kind === "weight" ? r.value + " kg" : kind === "water" ? r.ml + " ml" : kind === "size" ? Object.keys(HEALTH_DIMS).filter((k) => r.values[k] != null).map((k) => HEALTH_DIMS[k] + " " + r.values[k] + " cm").join(" · ") : healthDateLabel(r.date) + " — " + (r.end ? healthDateLabel(r.end) + " · " + (healthDays(r.date, r.end) + 1) + "天" : "记录中");
			html += "<div class=\"health-row\"><span class=\"hl-sym\">○</span><div class=\"hl-body\">" + vEsc(value) + (kind === "water" ? "<small>" + vEsc(r.time) + "</small>" : "") + (r.note ? "<small>" + vEsc(r.note) + "</small>" : "") + "</div><button class=\"hl-link\" data-hl-edit=\"" + escAttr(r.id) + "\" aria-label=\"修改" + HEALTH_LABELS[kind] + "记录\">修改</button></div>";
		});
		if (rows.length > HEALTH_LIMIT) html += "<button class=\"hl-link\" data-hl-more>再看40条</button>";
		return html + "</div>";
	}
	function healthWeightHTML() {
		const r = healthLatest(appState.HEALTH.records.weight), m = healthMetrics(appState.HEALTH.profile, r && r.value);
		return "<div class=\"health-pan\"><div class=\"health-heading\"><span>" + (r ? "最近一次 · " + vEsc(r.date.replaceAll("-", ".")) : "还没有体重记录") + "</span><button class=\"hl-link\" data-hl-action=\"profile\">身体资料 ›</button></div><div class=\"health-nums\"><div><b>" + (r ? r.value + "<small>kg</small>" : "—") + "</b><span>当前体重</span></div><div><b>" + (m.ree == null ? "—" : m.ree) + "</b><span>预计代谢 · kcal/天</span></div><div><b>" + (m.bmi == null ? "—" : m.bmi.toFixed(1)) + "</b><span>BMI</span></div></div></div><div class=\"health-pan\"><div class=\"health-heading\"><span>体重变化 · 最近30个记录日</span><button class=\"hl-link\" data-hl-action=\"record\">＋ 记体重</button></div>" + healthChart(healthDaily(appState.HEALTH.records.weight, (r) => r.value).slice(-30), "kg", false) + "</div>" + healthLog("weight");
	}
	function healthSizeHTML() {
		const key = HEALTH_PART, geo = {
			waist: [
				44,
				86,
				108
			],
			chest: [
				43,
				87,
				76
			],
			hip: [
				43,
				87,
				135
			],
			thigh: [
				46,
				62,
				176
			],
			calf: [
				46,
				59,
				224
			],
			back: [
				39,
				91,
				61
			]
		}[key], latest = {};
		Object.keys(HEALTH_DIMS).forEach((k) => latest[k] = healthLatest(appState.HEALTH.records.size.filter((r) => r.values[k] != null)));
		const dims = Object.keys(HEALTH_DIMS).map((k) => "<button class=\"health-dim" + (key === k ? " on" : "") + "\" data-hl-part=\"" + k + "\" aria-pressed=\"" + (key === k) + "\">" + HEALTH_DIMS[k] + "<b>" + (latest[k] ? latest[k].values[k] + " <small>cm</small>" : "—") + "</b></button>").join("");
		return "<div class=\"health-pan\"><div class=\"health-heading\"><span>身体围度 · cm</span><button class=\"hl-link\" data-hl-action=\"record\">＋ 记围度</button></div><div class=\"health-size\"><div>" + ("<svg class=\"health-body\" viewBox=\"0 0 130 270\" role=\"img\" aria-label=\"" + (key === "back" ? "背面" : "正面") + "示意，" + HEALTH_DIMS[key] + "测量位置\"><circle class=\"hl-outline\" cx=\"65\" cy=\"24\" r=\"15\"/><path class=\"hl-outline\" d=\"M57 40L57 46Q43 47 38 57L24 107Q23 114 29 116Q34 116 37 108L47 80L46 112Q43 130 43 144L46 194L46 247Q45 253 38 257L38 262L56 262Q60 259 59 250L61 197L65 160L69 197L71 250Q70 259 74 262L92 262L92 257Q85 253 84 247L84 194L87 144Q87 130 84 112L83 80L93 108Q96 116 101 116Q107 114 106 107L92 57Q87 47 73 46L73 40\"/><path class=\"hl-detail\" d=\"" + (key === "back" ? "M65 52V113M48 64Q56 75 61 74M82 64Q74 75 69 74" : "M65 55V100") + "\"/><path class=\"hl-measure\" d=\"M" + geo[0] + " " + geo[2] + "H" + geo[1] + "\"/><circle class=\"hl-dot\" cx=\"" + geo[1] + "\" cy=\"" + geo[2] + "\" r=\"3\"/></svg>") + "<div class=\"health-body-label\">" + (key === "back" ? "背面" : "正面") + " · " + HEALTH_DIMS[key] + "</div></div><div class=\"health-dims\">" + dims + "</div></div><p class=\"health-note\">" + HEALTH_DIMS[key] + "最近记录：" + (latest[key] ? vEsc(latest[key].date) : "尚未记录") + "</p></div><div class=\"health-pan\"><div class=\"health-heading\"><span>" + HEALTH_DIMS[key] + "变化</span><span>最近30个记录日</span></div>" + healthChart(healthDaily(appState.HEALTH.records.size, (r) => r.values[key]).slice(-30), "cm", false) + "</div>" + healthLog("size");
	}
	function healthPeriodHTML() {
		const f = healthForecast(appState.HEALTH, healthToday()), open = appState.HEALTH.records.period.find((r) => !r.end), n = appState.HEALTH.cycleLength;
		const count = f && f.next ? f.remaining > 0 ? "约" + f.remaining + "天后" : f.remaining === 0 ? "预计今天" : "预计日期已过" + -f.remaining + "天" : "";
		let track = "";
		if (f && n) {
			const length = f.last.end ? healthDays(f.last.date, f.last.end) + 1 : f.day;
			track = "<div class=\"health-track\" aria-label=\"周期第" + f.day + "天\"><div class=\"hl-days\" style=\"width:" + Math.min(100, length / n * 100) + "%\"></div><span class=\"hl-today\" style=\"left:" + Math.max(1, Math.min(99, (f.day - 1) / n * 100)) + "%\"></span></div>";
		}
		return "<div class=\"health-pan\"><div class=\"health-heading\"><span>下一次经期 · 预计</span><button class=\"hl-link\" data-hl-action=\"cycle\">设置周期 ›</button></div><div class=\"health-forecast\"><div><b>" + (f && f.next ? healthDateLabel(f.next) : "尚未预计") + "</b><span>" + (f && f.next ? "前后 · 仅作日期参考" : !f ? "记下上次开始日期" : "填入你的生理周期") + "</span></div><div class=\"hl-count\">" + count + (f ? "<br><span>周期第" + f.day + "天</span>" : "") + "</div></div>" + track + "<div class=\"health-cycle\"><span>你的生理周期 <b>" + (n || "—") + "</b> 天</span><button class=\"hl-link\" data-hl-action=\"cycle\">修改</button></div>" + (f ? "<p class=\"health-note\">上次开始 " + vEsc(f.last.date) + (f.last.end ? " · 持续" + (healthDays(f.last.date, f.last.end) + 1) + "天" : " · 记录中") + "</p>" : "") + "</div><div class=\"health-quick\"><button class=\"chip\" data-hl-action=\"period-start\" " + (open ? "disabled" : "") + ">今天来了</button><button class=\"chip\" data-hl-action=\"period-end\" " + (!open ? "disabled" : "") + ">这次结束了</button><button class=\"chip\" data-hl-action=\"record\">补记经期</button></div><div class=\"health-pan\"><div class=\"health-heading\"><span>历次经期持续时间</span><span>天</span></div>" + healthChart(healthSorted(appState.HEALTH.records.period.filter((r) => r.end)).slice(-6).map((r) => ({
			date: r.date,
			value: healthDays(r.date, r.end) + 1
		})), "天", true, true) + "</div>" + healthLog("period");
	}
	function healthWaterHTML() {
		const today = healthToday(), rows = appState.HEALTH.records.water.filter((r) => r.date === today), total = rows.reduce((s, r) => s + r.ml, 0), goal = healthWaterTarget(appState.HEALTH), pct = goal ? Math.min(100, total / goal * 100) : 0, done = goal && total >= goal;
		return "<div class=\"health-pan\"><div class=\"health-heading\"><span>今天的饮水</span><button class=\"hl-link\" data-hl-action=\"goal\">调整目标 ›</button></div><div class=\"health-water\"><div class=\"health-cup\" role=\"progressbar\" aria-label=\"今日饮水目标进度\" aria-valuemin=\"0\" " + (goal ? "aria-valuemax=\"" + goal + "\" aria-valuenow=\"" + Math.min(goal, total) + "\"" : "") + " aria-valuetext=\"已记录" + total + "毫升，" + (goal ? "目标" + goal + "毫升" : "尚未设置目标") + "\"><div class=\"health-fill\" style=\"height:" + pct + "%\"></div><span>" + (goal ? Math.round(pct) + "%" : "—") + "</span></div><div class=\"health-water-value\"><b>" + total + " <small>ml</small></b><p>" + (goal ? (appState.HEALTH.waterGoal.mode === "manual" ? "自定目标 " : "建议每日 ") + goal + " ml" : "设置每日目标") + "</p><div class=\"health-status" + (done ? " done" : "") + "\">" + (goal ? done ? "已完成今日目标" : "未完成 · 还差" + (goal - total) + " ml" : "先设置目标") + "</div></div></div><div class=\"health-quick\"><button class=\"chip\" data-hl-water=\"200\">＋200 ml</button><button class=\"chip on\" data-hl-water=\"250\">＋一杯250 ml</button><button class=\"chip\" data-hl-water=\"500\">＋500 ml</button></div><div class=\"health-subrow\"><span>今天记了" + rows.length + "次</span>" + (healthState.HEALTH_UNDO_WATER && appState.HEALTH.records.water.some((r) => r.id === healthState.HEALTH_UNDO_WATER) ? "<button class=\"hl-link\" data-hl-action=\"water-undo\">撤回上一杯</button>" : "<button class=\"hl-link\" data-hl-action=\"record\">补记饮水</button>") + "</div><p class=\"health-note\">少量多次，达到目标后按需饮水。</p></div><div class=\"health-pan\"><div class=\"health-heading\"><span>近7天饮水记录</span><button class=\"hl-link\" data-hl-action=\"record\">＋ 记饮水</button></div>" + healthChart(healthWaterDays(appState.HEALTH, today), "ml", true) + "<p class=\"health-note\">— 表示未记录；今天为目前累计量。</p></div>" + healthLog("water");
	}
	function renderHealth() {
		view.appendChild(letterHouseHead("health"));
		const visible = appState.HEALTH.order.filter((k) => !appState.HEALTH.hidden.includes(k));
		if (!visible.includes(navigationState.cur.tab)) navigationState.cur.tab = visible[0] || null;
		const page = document.createElement("div");
		page.className = "health-page";
		page.id = "healthPage";
		page.innerHTML = "<div class=\"health-tabs\">" + visible.map((k) => "<button class=\"chip" + (navigationState.cur.tab === k ? " on" : "") + "\" data-hl-tab=\"" + k + "\" aria-pressed=\"" + (navigationState.cur.tab === k) + "\">" + HEALTH_LABELS[k] + "</button>").join("") + "<button class=\"hl-link\" data-hl-action=\"manage\">管理</button></div>" + (navigationState.cur.tab ? {
			weight: healthWeightHTML,
			size: healthSizeHTML,
			period: healthPeriodHTML,
			water: healthWaterHTML
		}[navigationState.cur.tab]() : "<div class=\"health-empty\">暂未显示板块<br>从“管理”里恢复需要的内容，原记录都还在。</div>") + "<div class=\"health-footer\"><span>晨露小站 · 呦呦</span><button class=\"hl-link\" data-hl-action=\"about\">关于这些数字 ⓘ</button></div>";
		for (const button of page.querySelectorAll("[data-hl-edit]")) bindRecordHold(button.closest(".health-row"), () => healthRecordSheet(navigationState.cur.tab, button.dataset.hlEdit));
		towerHealthLinks(page);
		page.addEventListener("click", (e) => {
			const b = e.target.closest("button");
			if (!b || b.disabled) return;
			const d = b.dataset;
			if (d.hlTab) {
				navigationState.cur.tab = d.hlTab;
				HEALTH_LIMIT = 40;
				navigationState.navFromBack = true;
				render();
			} else if (d.hlPart) {
				HEALTH_PART = d.hlPart;
				navigationState.navFromBack = true;
				render();
			} else if (d.hlWater) healthAddWater(Number(d.hlWater));
			else if (d.hlEdit) healthRecordSheet(navigationState.cur.tab, d.hlEdit);
			else if (d.hlMore !== void 0) {
				HEALTH_LIMIT += 40;
				const y = view.scrollTop;
				navigationState.navFromBack = true;
				render();
				view.scrollTop = y;
			} else if (d.hlAction) {
				const a = d.hlAction;
				if (a === "record") healthRecordSheet(navigationState.cur.tab);
				else if (a === "manage") healthManage();
				else if (a === "about") healthAbout();
				else if (a === "water-undo") {
					appState.HEALTH.records.water = appState.HEALTH.records.water.filter((r) => r.id !== healthState.HEALTH_UNDO_WATER);
					healthState.HEALTH_UNDO_WATER = null;
					healthCommit();
				} else if (a === "period-start") {
					const r = {
						id: healthId(),
						date: healthToday(),
						end: null,
						note: "",
						createdAt: Date.now()
					}, err = healthPeriodError(appState.HEALTH.records.period, r, healthToday());
					if (err) {
						toast(err);
						return;
					}
					appState.HEALTH.records.period.push(r);
					healthCommit();
				} else if (a === "period-end") {
					const r = appState.HEALTH.records.period.find((r) => !r.end);
					if (r) healthRecordSheet("period", r.id, true);
				} else healthSettings(a);
			}
		});
		view.appendChild(page);
	}
	function healthAddWater(ml) {
		const r = {
			id: healthId(),
			date: healthToday(),
			time: healthClock(),
			ml,
			note: "",
			createdAt: Date.now()
		};
		appState.HEALTH.records.water.push(r);
		healthState.HEALTH_UNDO_WATER = r.id;
		healthCommit();
	}
	function healthSheet(title, content) {
		dismissKB();
		const s = $("#gsheet");
		s.innerHTML = "<div class=\"health-form\"><div class=\"hl-head\"><h3>" + vEsc(title) + "</h3><button class=\"hl-link\" id=\"hlClose\" type=\"button\">关闭</button></div>" + content + "<div class=\"health-error\" id=\"hlError\" role=\"alert\"></div></div>";
		$("#hlClose").onclick = closeSheet;
		s.classList.add("on");
		$("#mask").classList.add("on");
		return s;
	}
	function healthInput(label, name, value, attrs) {
		return "<label>" + label + "<input name=\"" + name + "\" value=\"" + escAttr(value == null ? "" : String(value)) + "\" " + (attrs || "") + "></label>";
	}
	function healthForm(content, label, remove) {
		return "<form id=\"hlForm\"><div class=\"health-form-grid\">" + content + "</div><div class=\"hl-actions\"><button class=\"rv-confirm\" type=\"submit\">" + (label || "保存") + "</button>" + (remove ? "<button type=\"button\" id=\"hlDelete\" class=\"hl-delete\">删除记录</button>" : "") + "</div></form>";
	}
	function healthSettings(kind) {
		let html = "", title = "";
		const p = appState.HEALTH.profile;
		if (kind === "profile") {
			title = "身体资料";
			html = healthInput("身高 · cm", "height", p.height, "type=\"number\" inputmode=\"decimal\" min=\"50\" max=\"250\" step=\"0.1\"") + healthInput("年龄 · 岁", "age", p.age, "type=\"number\" inputmode=\"numeric\" min=\"1\" max=\"120\" step=\"1\"") + "<label class=\"hl-full\">公式使用的生理性别<select name=\"sex\"><option value=\"\">暂不填写</option><option value=\"f\" " + (p.sex === "f" ? "selected" : "") + ">女</option><option value=\"m\" " + (p.sex === "m" ? "selected" : "") + ">男</option></select></label><label class=\"hl-full hl-check\"><input name=\"general\" type=\"checkbox\" " + (p.general ? "checked" : "") + ">使用一般成人估算（非孕哺期，无特殊体重或限水要求）</label>";
		} else if (kind === "cycle") {
			title = "你的生理周期";
			html = healthInput("两次开始日之间 · 天", "cycle", appState.HEALTH.cycleLength, "type=\"number\" inputmode=\"numeric\" min=\"1\" max=\"120\" step=\"1\" required") + "<p class=\"hl-full\">填入你自己的周期，用于估算下一次开始日期。</p>";
		} else if (kind === "goal") {
			title = "每日饮水目标";
			const suggestion = healthWaterTarget({
				...appState.HEALTH,
				waterGoal: { mode: "suggested" }
			});
			html = "<label class=\"hl-full\">目标来源<select name=\"mode\" id=\"hlGoalMode\"><option value=\"suggested\" " + (appState.HEALTH.waterGoal.mode === "suggested" ? "selected" : "") + ">一般成人建议" + (suggestion ? " · " + suggestion + " ml" : " · 需补全身体资料") + "</option><option value=\"manual\" " + (appState.HEALTH.waterGoal.mode === "manual" ? "selected" : "") + ">自己设置</option></select></label>" + healthInput("自定每日目标 · ml", "ml", appState.HEALTH.waterGoal.ml, "type=\"number\" inputmode=\"numeric\" min=\"1\" max=\"10000\" step=\"1\" id=\"hlGoalMl\"") + "<p class=\"hl-full\">建议依据与适用条件收在页底说明里。有特殊饮水要求时，可按医嘱自定。</p>";
		} else return;
		healthSheet(title, healthForm(html));
		if (kind === "goal") {
			const sync = () => {
				const manual = $("#hlGoalMode").value === "manual";
				$("#hlGoalMl").disabled = !manual;
				$("#hlGoalMl").required = manual;
			};
			$("#hlGoalMode").onchange = sync;
			sync();
		}
		$("#hlForm").onsubmit = (e) => {
			e.preventDefault();
			const f = new FormData(e.target);
			if (kind === "profile") appState.HEALTH.profile = {
				height: f.get("height") ? Number(f.get("height")) : null,
				age: f.get("age") ? Number(f.get("age")) : null,
				sex: String(f.get("sex")),
				general: f.has("general")
			};
			if (kind === "cycle") appState.HEALTH.cycleLength = Number(f.get("cycle"));
			if (kind === "goal") {
				const goal = {
					mode: String(f.get("mode")),
					ml: f.get("mode") === "manual" ? Number(f.get("ml")) : null
				};
				if (goal.mode === "suggested" && !healthWaterTarget({
					...appState.HEALTH,
					waterGoal: goal
				})) {
					$("#hlError").textContent = "先在体重页填写身体资料，或选择自己设置目标。";
					return;
				}
				appState.HEALTH.waterGoal = goal;
			}
			closeSheet();
			healthCommit();
		};
	}
	function healthRecordSheet(kind, id, endNow) {
		const old = id ? appState.HEALTH.records[kind].find((r) => r.id === id) : null;
		if (id && !old) return;
		const r = old || {
			date: healthToday(),
			note: ""
		};
		let fields = healthInput(kind === "period" ? "开始日期" : "记录日期", "date", r.date, "type=\"date\" max=\"" + healthToday() + "\" required");
		if (kind === "weight") fields += healthInput("体重 · kg", "value", old ? r.value : null, "type=\"number\" inputmode=\"decimal\" min=\"1\" max=\"500\" step=\"0.1\" required");
		if (kind === "size") fields += "<p>测量同一位置，方便看变化。</p>" + Object.keys(HEALTH_DIMS).map((k) => healthInput(HEALTH_DIMS[k] + " · cm", k, old ? r.values[k] : null, "type=\"number\" inputmode=\"decimal\" min=\"0.1\" max=\"300\" step=\"0.1\"")).join("");
		if (kind === "water") fields += healthInput("时间", "time", r.time || healthClock(), "type=\"time\" required") + healthInput("饮水量 · ml", "ml", old ? r.ml : 250, "type=\"number\" inputmode=\"numeric\" min=\"1\" max=\"10000\" step=\"1\" required");
		if (kind === "period") fields += healthInput("结束日期 · 可暂不填", "end", endNow ? healthToday() : r.end, "type=\"date\" max=\"" + healthToday() + "\"");
		fields += "<label class=\"hl-full\">备注 · 选填<textarea name=\"note\" rows=\"2\" maxlength=\"1000\">" + vEsc(r.note || "") + "</textarea></label>";
		healthSheet((old ? "修改" : "记录") + HEALTH_LABELS[kind], healthForm(fields, old ? "保存修改" : "记下", !!old));
		$("#hlForm").onsubmit = (e) => {
			e.preventDefault();
			const f = new FormData(e.target), record = {
				id: old ? old.id : healthId(),
				date: String(f.get("date")),
				note: String(f.get("note") || "").trim(),
				createdAt: old ? old.createdAt : Date.now()
			};
			if (!healthValidDate(record.date) || record.date > healthToday()) {
				$("#hlError").textContent = "请选择今天或过去的日期。";
				return;
			}
			if (kind === "weight") record.value = Number(f.get("value"));
			if (kind === "water") {
				record.ml = Number(f.get("ml"));
				record.time = String(f.get("time"));
			}
			if (kind === "size") {
				record.values = {};
				Object.keys(HEALTH_DIMS).forEach((k) => {
					if (f.get(k)) record.values[k] = Number(f.get(k));
				});
				if (!Object.keys(record.values).length) {
					$("#hlError").textContent = "至少填一个本次测量的部位。";
					return;
				}
			}
			if (kind === "period") {
				record.end = f.get("end") ? String(f.get("end")) : null;
				const err = healthPeriodError(appState.HEALTH.records.period, record, healthToday());
				if (err) {
					$("#hlError").textContent = err;
					return;
				}
			}
			if (!healthRecordValid(kind, record)) {
				$("#hlError").textContent = "请检查填写的数值。";
				return;
			}
			if (old) appState.HEALTH.records[kind][appState.HEALTH.records[kind].findIndex((x) => x.id === old.id)] = record;
			else appState.HEALTH.records[kind].push(record);
			if (kind === "water") healthState.HEALTH_UNDO_WATER = null;
			closeSheet();
			healthCommit();
		};
		if (old) {
			let confirm = false;
			$("#hlDelete").onclick = () => {
				if (!confirm) {
					confirm = true;
					$("#hlDelete").textContent = "再点一次删除";
					return;
				}
				appState.HEALTH.records[kind] = appState.HEALTH.records[kind].filter((x) => x.id !== old.id);
				if (kind === "water") healthState.HEALTH_UNDO_WATER = null;
				closeSheet();
				healthCommit();
			};
		}
	}
	function healthManage() {
		const active = appState.HEALTH.order.filter((k) => !appState.HEALTH.hidden.includes(k)), off = appState.HEALTH.order.filter((k) => appState.HEALTH.hidden.includes(k));
		healthSheet("我的健康板块", "<p>移除只收起入口，原记录保留，随时可以恢复。</p>" + active.map((k, i) => "<div class=\"health-module\"><span>" + HEALTH_LABELS[k] + "</span><button data-hl-move=\"" + k + "\" data-step=\"-1\" " + (i === 0 ? "disabled" : "") + " aria-label=\"" + HEALTH_LABELS[k] + "前移\">前移</button><button data-hl-move=\"" + k + "\" data-step=\"1\" " + (i === active.length - 1 ? "disabled" : "") + " aria-label=\"" + HEALTH_LABELS[k] + "后移\">后移</button><button data-hl-remove=\"" + k + "\" aria-label=\"移除" + HEALTH_LABELS[k] + "板块\">移除</button></div>").join("") + (off.length ? "<h4>已移除</h4>" : "") + off.map((k) => "<div class=\"health-module\"><span>" + HEALTH_LABELS[k] + "</span><button data-hl-restore=\"" + k + "\">恢复</button></div>").join("")).querySelectorAll("[data-hl-remove],[data-hl-restore],[data-hl-move]").forEach((b) => b.onclick = () => {
			const d = b.dataset;
			if (d.hlRemove) appState.HEALTH.hidden.push(d.hlRemove);
			if (d.hlRestore) appState.HEALTH.hidden = appState.HEALTH.hidden.filter((k) => k !== d.hlRestore);
			if (d.hlMove) {
				const i = active.indexOf(d.hlMove), j = i + Number(d.step);
				if (j >= 0 && j < active.length) {
					[active[i], active[j]] = [active[j], active[i]];
					appState.HEALTH.order = active.concat(off);
				}
			}
			healthCommit();
			healthManage();
		});
	}
	function healthAbout() {
		const p = appState.HEALTH.profile;
		healthSheet("关于这些数字", "<h4>体重与BMI</h4><p>BMI＝体重kg÷身高m²。中国一般成人参考区间为18.5≤BMI＜24；不依性别改变，也不能单凭BMI判断个人健康。<a href=\"https://www.nhc.gov.cn/jkj/s10045/200907/943149b60565497bb3e25783a0e3de68.shtml\" target=\"_blank\" rel=\"noopener noreferrer\">计算依据</a></p>" + (healthAdult(p) && p.height ? "<p>按已填身高，一般成人体重参考约 " + (18.5 * (p.height / 100) ** 2).toFixed(1) + " 至 " + (24 * (p.height / 100) ** 2).toFixed(1) + " kg（上界不含，显示已四舍五入）。参考范围不是减重目标。</p>" : "") + "<h4>预计代谢</h4><p>这里是静息能量消耗估算，不是实测基础代谢、全天总消耗或建议摄入热量。Mifflin公式：10×体重kg＋6.25×身高cm－5×年龄，男性再加5，女性减161。结果按10kcal/天取整。<a href=\"https://pubmed.ncbi.nlm.nih.gov/2305711/\" target=\"_blank\" rel=\"noopener noreferrer\">研究来源</a></p><p>当前一般估算限定18—64岁、非孕哺期且无特殊体重管理要求的成人；资料不全或不适用时显示“—”，仍能记录。体脂率仅凭身高体重推算误差较大，本页不提供估计值。</p><h4>经期预计日期</h4><p>上次实际开始日＋你填写的周期天数。周期可能变化，日期仅作参考，不用于判断排卵或避孕。预计日期不会自动生成实际经期记录。<a href=\"https://www.nhs.uk/symptoms/irregular-periods/\" target=\"_blank\" rel=\"noopener noreferrer\">周期说明</a></p><h4>饮水建议</h4><p>温和气候、低身体活动水平的一般成年男性1700ml、女性1500ml，为直接饮水量，不含食物中的水。气候和活动等会影响需要量；有特殊限水要求时按医嘱自定。杯子只统计已记录量，达到目标后按需饮水。<a href=\"https://www.ndcpa.gov.cn/jbkzzx/c100040/common/content/content_2104761364364300288.html\" target=\"_blank\" rel=\"noopener noreferrer\">建议来源</a></p><h4>记录与备份</h4><p>记录保存在本机，随完整JSON备份一起导出；启用GitHub云备份时也会包含健康记录。Markdown导出仅包含手帐正文，不含这里的结构化记录。移除板块保留数据；修改记录里可以单独删除。</p>");
	}
	// src/modules/journal/composer.js
	var composerState = {};
	var TH_ICONS = [
		[
			"idea",
			"✧",
			"灵感"
		],
		[
			"learn",
			"◇",
			"学到"
		],
		[
			"ask",
			"?",
			"疑问"
		],
		[
			"bang",
			"!",
			"重点"
		],
		[
			"mood",
			"≈",
			"心情"
		]
	];
	var TH_RE = {
		ask: /[？?]\s*$|^(为什么|为啥|怎么办|怎么才能|怎么会|怎么能|凭什么|难道|要不要|是不是|能不能|该不该|到底)|(吗|呢)\s*$/,
		learn: /原来|学到|学会了|才知道|涨知识|今天明白/,
		idea: /可以试试|可以去|可以做|也许可以|不如去|要是能|如果能|想(去|学|做|试|买|养|写|搞|换|找|报|开|辞|搬)|点子|灵感|主意|突然想到|有个想法|有个念头/,
		mood: /心累|好累|有点累|太累|累了|累死|好烦|有点烦|烦死|开心|难过|焦虑|郁闷|委屈|生气|高兴|快乐|伤心|失落|无聊|紧张|压力好?大|崩溃|emo|低落|平静|期待|兴奋|心情/,
		bang: /划重点|切记|重要的是|一定要记住|千万别|千万要/
	};
	function isThought(e) {
		return !!e && (e.sym === "note" || e.sym === "ask" || e.sym === "bang" || e.sym === "mood") && !e.ledger && !e.meal && !e.nbId && !(e.sym === "note" && !e.userSet && !e.ico && mealGlyphSlot(e));
	}
	var TH_LABEL = {
		learn: /^(?:一个|一条|一点|个|小|一些)?(?:经验|心得|冷知识|小知识|知识点?|教训|感悟|体会|道理|技巧|小技巧|干货|常识)(?:\s*[:：]|[，,]|是|就是)|(?:经验|心得|知识点?|冷知识|教训|感悟|体会)\s*[:：]/,
		idea: /^(?:一个|有个|突然有个|冒出一个|冒出个)?(?:想法|念头|脑洞|点子|主意)(?:\s*[:：]|[，,]|是|就是)|(?:想法|念头|脑洞)\s*[:：]/
	};
	function thLabel(t) {
		t = String(t || "").trim();
		return TH_LABEL.learn.test(t) ? "learn" : TH_LABEL.idea.test(t) ? "idea" : null;
	}
	function thGuess(t) {
		t = String(t || "").trim();
		if (t.length < 2) return null;
		const lb = thLabel(t);
		if (lb) return lb;
		if (TH_RE.ask.test(t)) return "ask";
		if (TH_RE.learn.test(t)) return "learn";
		if (TH_RE.idea.test(t)) return "idea";
		if (t.length <= 20 && TH_RE.mood.test(t) && !Object.keys(EV_RE).some((k) => EV_RE[k].test(t)) && thMoodOnly(t)) return "mood";
		return null;
	}
	var TH_FILL = /今天|今晚|今早|此刻|现在|最近|有点儿?|有些|一点|挺|好|很|太|超级?|非常|特别|比较|真的?|但是?|可是|不过|还是?|又|就|也|都|了|啊|呀|吧|哈|啦|呢|的|感觉|觉得|心里|整个人/g;
	function thMoodOnly(t) {
		return t.replace(new RegExp(TH_RE.mood.source, "g"), "").replace(TH_FILL, "").replace(/[，,。.！!～~、…\s]/g, "").length <= 3;
	}
	function thIconKey(e) {
		if (e.ico === "dash") return "dash";
		if (e.ico && TH_ICONS.some((x) => x[0] === e.ico)) return e.ico;
		if (e.sym === "ask" || e.sym === "bang" || e.sym === "mood") return e.sym;
		const t = String(e.text || "");
		if (TH_RE.bang.test(t)) return "bang";
		return thGuess(t) || "dash";
	}
	function thIcon(e) {
		const k = thIconKey(e), d = TH_ICONS.find((x) => x[0] === k);
		return d ? {
			k,
			i: d[1],
			n: d[2]
		} : {
			k: "dash",
			i: "",
			n: "随想"
		};
	}
	function dayOfEntry(e) {
		let hit = null;
		walk((k, x) => {
			if (!hit && x === e) hit = k;
		});
		return hit;
	}
	composerState.CHAT = null;
	function chatBase() {
		return navigationState.cur.name === "today" || navigationState.cur.name === "history" ? curDayKey() : null;
	}
	function chatPlaceholder() {
		const h = (/* @__PURE__ */ new Date()).getHours();
		return h >= 6 && h < 11 ? "发给啾啾… 今天有什么安排？" : h >= 11 && h < 14 || h >= 17 && h < 20 ? "发给啾啾… 吃了什么、花了多少？" : h >= 20 && h < 23 ? "发给啾啾… 今天有什么想记的？" : "发给啾啾… 想到什么就记下来";
	}
	function chatBarSync() {
		const B = $("#chatBar");
		if (!B) return;
		const base = chatBase();
		B.classList.toggle("on", !!base);
		const inp = $("#chatIn");
		if (inp && base) inp.placeholder = base === TODAY ? chatPlaceholder() : "补记 " + fmtKey(base) + "…";
		if (composerState.CHAT && composerState.CHAT.base !== base) chatReplyHide();
		const V = $("#view");
		if (V) V.classList.toggle("th-picking", navigationState.cur.name === "notes" && TH_TAB === "th" && !!TH_PICK);
	}
	function chatFocus() {
		const i = $("#chatIn");
		if (i) try {
			i.focus();
		} catch (_) {}
	}
	function chatGrow() {
		const i = $("#chatIn");
		if (!i) return;
		i.style.height = "40px";
		i.style.height = Math.min(120, Math.max(40, i.scrollHeight)) + "px";
		$("#chatBar").classList.toggle("has", !!i.value.trim());
		placeToolbar();
	}
	var CHAT_TASK_LEAD = /^(交|买|取|寄|还|订|约|预约|提交|发|打电话|去|找|准备|整理|写|改|问|联系|预定|续费|缴|报名|记得|别忘|完成|做|弄|搞|给\S{1,6}(打电话|发|买|寄|回|送))/;
	var CHAT_DONE_RE = /入职|离职|定下来了|搞定|成功|失败|不顺利|顺利|不错|很差|一般般?|好吃|难吃|好看|难看|没意思|太棒/;
	function chatKind(t, rel) {
		if (/^(刚刚|刚才)(起床|出门|到家|到公司|吃完|喝了)|^刚到(家|公司|学校)/.test(t) && !/提醒|要做|待办/.test(t)) return {
			kind: "event",
			day: null
		};
		if (!/明天|后天|下周|下个?月|打算|准备|计划|想去|要去|提醒|通知/.test(t) && /^(今天|昨天|前天)?(?:第一次|初次)?(?:和|陪|跟)/.test(t) && (SET.people || []).some((p) => personAliases(p).some((n) => t.includes(n)))) return {
			kind: "event",
			day: rel ? (chatPastDay(t) || {}).key : null
		};
		const r = rel ? voRoute(t) : { dest: VO_TASK_RE.test(t) && !/了(?:[，,。！!？?]|$)/.test(t) ? "plan" : "flow" };
		const routine = /每个?(?:周|星期|礼拜|天|日|月|年)/.test(t);
		const pd = rel && !routine ? chatPastDay(t) : null;
		const same = pd && pd.strong && r.dest === "day" && /月|\./.test(pd.cut);
		const fut = routine || same ? null : r.dest === "day" ? r.day : rel && !(pd && pd.strong) ? (chatBareDay(t) || {}).key || null : null;
		if (/提醒我|通知我|设个?提醒/.test(t) && detectTime(t)) return {
			kind: "task",
			day: fut
		};
		if (!fut && /^(?:以后有空|等有空|有空想|以后想|改天想)/.test(t)) return {
			kind: "pool",
			day: null
		};
		if (!fut && /^(?:我)?(?:突然|忽然|越来越)?(?:觉得|感觉到|意识到)/.test(t)) return {
			kind: "thought",
			ic: "idea",
			day: pd?.key || null
		};
		if (!fut && !/提醒|记得|别忘|计划|打算/.test(t) && /^(?:睡觉|起床|吃了|去了|称了体重)/.test(t)) return {
			kind: "event",
			day: pd?.key || null
		};
		if (fut && /记得|提醒|要|打算|准备/.test(t)) return {
			kind: "task",
			day: fut
		};
		if (!fut && !/提醒|记得|别忘|打算|计划/.test(t) && journalTimedLine(t)?.endTime) return {
			kind: "event",
			day: null
		};
		const p = parseLine(t), lead = CHAT_TASK_LEAD.test(t);
		const rec = p.score != null || !!p.store || (p.prices || []).length > 0 || CHAT_DONE_RE.test(t) || /《[^》]+》/.test(t) && /看|二刷|三刷|补|影院|电影|剧|读|翻完/.test(t.replace(/《[^》]*》/g, ""));
		const done = /了/.test(t.replace(/为了|了解|除了|罢了|了不起/g, "")) && !VO_TASK_RE.test(t);
		const notYet = /还没|没来得及|忘了|别忘|还得|还要|得赶紧/.test(t);
		const past = pd && !notYet && (rec || done || TH_RE.mood.test(t) || pd.strong && !fut) ? pd.key : null;
		const th = thGuess(t);
		if (th === "mood") return {
			kind: "thought",
			ic: th,
			day: past
		};
		const lb = thLabel(t);
		if (lb) return {
			kind: "thought",
			ic: lb,
			day: past
		};
		if (rec && !lead) return {
			kind: "event",
			day: past
		};
		if (th) return {
			kind: "thought",
			ic: th,
			day: past
		};
		if (TH_RE.mood.test(t) && !lead) return {
			kind: "event",
			day: past
		};
		if (/交给|\bto\s?\S|To[A-Z一-龥]/.test(t)) return {
			kind: "task",
			day: fut
		};
		if (!done && fut && !past) return {
			kind: "task",
			day: fut
		};
		if (!done && r.dest === "plan" && !past) return {
			kind: "task",
			day: null
		};
		if (done || past) return {
			kind: "event",
			day: past
		};
		if (!routine && !notYet && !fut && journalElapsedLine(t, rel)) return {
			kind: "event",
			day: null
		};
		if (/痛|疼|不舒服|发烧|感冒|咳嗽|过敏|上火/.test(t) || /^(和|跟|与).{1,14}一起/.test(t)) return {
			kind: "event",
			day: null
		};
		if (t.length > 28 && !lead && !(detectTimeHM(t) || detectTimeCN(t))) return {
			kind: "event",
			day: null
		};
		return {
			kind: "task",
			day: null
		};
	}
	function chatItems(text, rel) {
		if (friendCombinedRecord(text) && !voSplit(text).slice(1).some(newIntent)) return [{
			text,
			src: text,
			kind: {
				kind: "event",
				day: rel ? (chatPastDay(text.split(/[，,]/)[0]) || {}).key : null
			}
		}];
		return voSplit(text).map((src) => {
			const fx = dictFix(src), it = {
				src,
				fixed: fx.text,
				fixes: fx.fixes
			};
			it.kind = chatKind(fx.text, rel);
			if (it.kind.kind === "event") {
				const home = directHouse(fx.text);
				const other = home === "money" && isleGuess({
					sym: "event",
					text: fx.text
				});
				if (home && !(other?.sure && other.k !== "money") && isleOn(home) && !(home === "book" && SET.isleNoT?.[parseLine(fx.text).title])) it.house = home;
			}
			it.text = fx.text;
			if (rel && it.kind.day) it.text = voStripDay(fx.text, {
				dest: it.kind.kind === "task" ? "day" : "past",
				day: it.kind.day
			}).text;
			return it;
		});
	}
	function chatToVo(ci) {
		const k = ci.kind || {}, it = {
			src: ci.src,
			fixed: ci.fixed || ci.text,
			fixes: ci.fixes || []
		};
		if (ci.house) it.house = ci.house;
		if (ci.manual) it.manual = true;
		if (ci.off) it.off = true;
		if (k.kind === "pool") it.dest = "pool";
		else if (k.kind === "task") {
			if (k.day && k.day !== TODAY) {
				it.dest = "day";
				it.day = k.day;
			} else it.dest = "plan";
		} else {
			if (k.day && k.day !== TODAY) {
				it.dest = "past";
				it.day = k.day;
			} else it.dest = "flow";
			if (k.kind === "thought") it.th = k.ic || "dash";
		}
		const sd = voStripDay(it.fixed, it);
		it.text = sd.text;
		it.cut = sd.cut;
		return it;
	}
	function voToChat(it) {
		const task = it.dest === "plan" || it.dest === "day";
		return {
			src: it.src,
			fixed: it.fixed,
			fixes: it.fixes || [],
			text: it.text || "",
			off: !!it.off,
			house: it.house,
			manual: it.manual,
			kind: {
				kind: it.dest === "pool" ? "pool" : task ? "task" : it.th ? "thought" : "event",
				day: it.dest === "day" || it.dest === "past" ? it.day : null,
				ic: it.th || null
			}
		};
	}
	function chatStripTime(t) {
		for (const re of [/(?:凌晨|早上|上午|中午|下午|傍晚|晚上)?([01]?\d|2[0-3])[:：][0-5]\d/, /(上午|早上|中午|下午|晚上)([一二三四五六七八九十两\d]{1,3})点(半|一刻|三刻|(\d{1,2})分)?/]) {
			const m = t.match(re);
			if (!m) continue;
			const r = (t.slice(0, m.index) + t.slice(m.index + m[0].length)).replace(/^[，,、\s]+|[，,、\s]+$/g, "").trim();
			if (r.length >= 2) return r;
		}
		return t;
	}
	function chatPlace(items, base, why) {
		const out = [], d = DD();
		const active = items.filter((it) => !it.off && String(it.text || "").trim());
		const change = snapshot(why || "发给啾啾", base, active.map((it) => it.kind.day || base));
		active.forEach((it) => {
			const t = it.text.trim(), k0 = it.kind, day = k0.day || base;
			if (!appState.PAGES[day]) appState.PAGES[day] = {
				plan: [],
				flow: []
			};
			let ne, list;
			if (k0.kind === "task" || k0.kind === "pool") {
				ne = {
					sym: "task",
					state: k0.kind === "pool" ? "someday" : "open",
					text: t,
					_id: ++appState.uid
				};
				list = appState.PAGES[day].plan;
			} else if (k0.kind === "thought") {
				ne = {
					sym: {
						ask: "ask",
						mood: "mood",
						bang: "bang"
					}[k0.ic] || "note",
					userSet: true,
					noDue: 1,
					text: t,
					_id: ++appState.uid
				};
				list = appState.PAGES[day].flow;
				if ((k0.ic === "idea" || k0.ic === "learn") && thIconKey(ne) !== k0.ic) ne.ico = k0.ic;
			} else {
				ne = {
					sym: "event",
					noDue: 1,
					text: t,
					_id: ++appState.uid
				};
				list = appState.PAGES[day].flow;
				const p = parseLine(t);
				if (!it.manual && !it.house && p.store && modOn("meals")) {
					const fg = foodGroupName() || "美食";
					if (!foodGroupName() && !appState.extraGroups.includes(fg)) appState.extraGroups.push(fg);
					ne.groups = [fg];
				} else if (!it.manual && !it.house && p.title && /看了|电影|二刷|补看|影院|观影/.test(t)) {
					const mg = movieGroupName();
					if (mg) ne.groups = [mg];
				}
			}
			const fx = (it.fixes || []).filter((f) => t.includes(f.to));
			if (fx.length) {
				ne.fix = fx.map((f) => ({
					from: f.from,
					to: f.to
				}));
				ne.fixAt = TODAY;
				fx.forEach((f) => {
					if (!d.fix[f.from] && !d.no[f.from + ">" + f.to]) d.fix[f.from] = f.to;
				});
				storageState.PARSE_GEN++;
			}
			if (it.friend) {
				ne.personIntro = true;
				ne.noDue = 1;
			}
			if (it.plan) {
				ne.schedule = { ...it.plan };
				ne.due = day;
				ne.noDue = 1;
			}
			if (ne.sym === "event" && base === TODAY && day === TODAY && /^(刚刚|刚才|刚到)/.test(t) && !detectTime(t)) ne.time = journalNow();
			ne.userSet = true;
			list.push(ne);
			navigationState.TOAST_MUTE++;
			try {
				commit(ne);
			} finally {
				navigationState.TOAST_MUTE--;
			}
			if (k0.kind !== "thought") delete ne.userSet;
			const timedLine = journalTimedLine(t);
			if (timedLine && (ne.sym === "event" || ne.sym === "task")) {
				ne.time = timedLine.time;
				if (ne.sym === "event") {
					ne.startTime = timedLine.time;
					if (timedLine.endTime) ne.endTime = timedLine.endTime;
				}
				ne.text = timedLine.body;
			} else if (ne.sym === "task" && ne.time) ne.text = chatStripTime(ne.text);
			if (day !== base) {
				const pg = appState.PAGES[base];
				(pg.voOut = pg.voOut || []).push({
					d: day,
					id: ne._id
				});
			}
			if (it.house === "health" && weightInKg(t) !== null) {
				const record = {
					id: healthId(),
					date: key2iso(day),
					value: weightInKg(t),
					note: "",
					createdAt: Date.now()
				};
				appState.HEALTH.records.weight.push(record);
				ne.healthId = record.id;
				change.addedWeights.push(record.id);
			} else if (it.house) isleSend(ne, it.house);
			if (it.manual) ne.isleNo = 1;
			out.push({
				e: ne,
				day,
				base,
				change
			});
		});
		housesState.ISLE_DEF = null;
		out.forEach((o) => {
			if (o.e.sym === "task" || o.e.personIntro) return;
			if (o.day === base && base === editKey()) isleRoute(o.e);
			else if (o.day !== base && !o.e.isleNo && !o.e.userSet && !sideHome(o.e)) {
				const gs = isleGuess(o.e);
				if (gs && gs.sure) isleSend(o.e, gs.k);
			}
		});
		scheduleSave();
		return out;
	}
	function chatReplyHide() {
		const R = $("#chatReply");
		if (R) {
			R.classList.remove("on");
			R.innerHTML = "";
		}
		composerState.CHAT = null;
	}
	function chatShow(pose, html, acts, onAct) {
		const R = $("#chatReply");
		if (!R) return;
		R.innerHTML = "<div class=\"cr-av\"><img src=\"" + OBIMG.av_jj + "\" alt=\"啾啾\"></div><div class=\"cr-bb\"><button class=\"cr-x\" aria-label=\"收起\">✕</button>" + html + (acts && acts.length ? "<div class=\"cr-acts\">" + acts.map(([k, lab, pri]) => "<button data-a=\"" + k + "\"" + (pri ? " class=\"pri\"" : "") + ">" + lab + "</button>").join("") + "</div>" : "") + "</div>";
		R.classList.add("on");
		R.querySelector(".cr-x").onclick = (ev) => {
			ev.stopPropagation();
			chatReplyHide();
		};
		R.querySelectorAll(".cr-acts [data-a]").forEach((b) => b.onclick = (ev) => {
			ev.stopPropagation();
			onAct(b.dataset.a);
		});
		placeToolbar();
	}
	function chatDrop(o) {
		if (o.e.healthId) appState.HEALTH.records.weight = appState.HEALTH.records.weight.filter((r) => r.id !== o.e.healthId);
		const pg = appState.PAGES[o.day];
		if (pg) ["plan", "flow"].forEach((l) => {
			const i = pg[l].indexOf(o.e);
			if (i >= 0) pg[l].splice(i, 1);
		});
		if (o.day !== o.base && appState.PAGES[o.base] && appState.PAGES[o.base].voOut) appState.PAGES[o.base].voOut = appState.PAGES[o.base].voOut.filter((v) => v.id !== o.e._id);
	}
	function chatUndo(outs, text) {
		outs.forEach(chatDrop);
		const change = outs[0]?.change;
		if (change) navigationState.undoStack = navigationState.undoStack.filter((item) => item !== change);
		scheduleSave();
		chatReplyHide();
		render();
		const i = $("#chatIn");
		if (i && !i.value.trim() && text) {
			i.value = text;
			chatGrow();
		}
		toast("撤回了 · 话放回输入框里");
	}
	function chatFix(o) {
		chatReplyHide();
		if (o.day !== editKey()) gotoDay(o.day);
		setTimeout(() => {
			const w = view.querySelector("[data-eid=\"" + o.e._id + "\"]");
			if (!w) return;
			try {
				w.scrollIntoView({ block: "center" });
			} catch (_) {}
			const sy = w.querySelector(".sym");
			if (sy) openRowPop(o.e, sy);
		}, 80);
	}
	function chatSayOne(o, text) {
		if (planSay(o, text)) return;
		if (!o.e.noFriendSuggest && friendSuggest(o, text)) return;
		const e = o.e, hk = sideHome(e), acts = [];
		let say = "", pose = "check";
		if (e.state === "someday") {
			say = "已放进待办池。";
			acts.push(["undo", "撤回"]);
		} else if (o.day !== o.base) {
			const dn = voRelDay(o.day) || fmtKey(o.day), amt = e.sym !== "task" && hk !== "money" ? chatAmt(e) : 0;
			say = "记好了：" + (e.time ? e.time + " " : "") + vEsc(clipT(e.text, 16)) + "，放到" + dn + (hk ? "，收进" + ISLE[hk].h : "的" + (e.sym === "task" ? "待办" : isThought(e) ? "随想" : "日常")) + "。" + (hk === "money" ? amtWords(e, true) || amtWords(e) : amt ? amtWords(e) + "也记进了" + ISLE.money.h + "。" : "");
			acts.push(["go", "去看看"], ["undo", "撤回"]);
		} else if (hk) {
			const amt = hk !== "money" ? chatAmt(e) : 0, aw = amtWords(e, true);
			say = amt ? ISLE[hk].who + "收进" + ISLE[hk].h + "了，" + amtWords(e) + "也记进了" + ISLE.money.h + "。" : ISLE[hk].who + "收进" + ISLE[hk].h + "了" + (hk === "money" && aw ? "，" + aw.replace(/，$/, "。") : "：" + vEsc(clipT(e.text, 18)));
			if (hk === "food" && parseEntry(e).want) say = "阿饱收进" + ISLE.food.h + "的想吃了：" + vEsc(parseEntry(e).store) + "。先记在想吃里，不算去过；「吃什么」里能抽到它。";
			acts.push(["house", "去看看"], ["back", "放回手帐"], ["undo", "撤回"]);
		} else if (e.isleAsk) {
			const ks = String(e.isleAsk).split(",").filter((k) => ISLE[k] && isleOn(k));
			say = "记好了。" + amtWords(e, true).replace(/，$/, "。") + "这条像是" + ISLE[ks[0]].n + "，要送去" + ISLE[ks[0]].h + "吗？";
			pose = "ask";
			ks.forEach((k, i) => acts.push([
				"send:" + k,
				"送去" + ISLE[k].n,
				i === 0
			]));
			acts.push(["no", "不用"]);
		} else if (e.sym === "task") {
			say = "记好了：" + (e.time ? e.time + " " : "") + vEsc(clipT(e.text, 18)) + "，放在待办。";
			acts.push(["undo", "撤回"], ["fix", "改一下"]);
		} else if (isThought(e)) {
			const ic = thIcon(e);
			say = "记好了，放进随想" + (ic.i ? " · " + ic.i + " " + ic.n : "") + "。";
			acts.push(["undo", "撤回"], ["fix", "改一下"]);
		} else {
			const ic = evIcon(e);
			const aw = amtWords(e, true);
			say = "记好了，放进" + (o.base === TODAY ? "今天" : "这天") + "的日常" + (ic.house ? " · " + isleIcon(ic.house, 18) + ic.n : "") + "。" + (aw ? aw + "记进了" + ISLE.money.h + "。" : "");
			acts.push(["undo", "撤回"], ["fix", "改一下"]);
		}
		composerState.CHAT = {
			mode: "one",
			base: o.base,
			outs: [o],
			text
		};
		chatShow(pose, say, acts, (a) => {
			if (a === "undo") chatUndo([o], text);
			else if (a === "fix") chatFix(o);
			else if (a === "go") {
				chatReplyHide();
				jumpToEntry(o.day, e._id);
			} else if (a === "house") {
				chatReplyHide();
				isleGo(hk);
			} else if (a === "back") {
				isleBack(e, hk);
				chatSayOne(o, text);
			} else if (a.indexOf("send:") === 0) {
				isleSend(e, a.slice(5));
				render();
				chatSayOne(o, text);
			} else if (a === "no") {
				isleNoThanks(e);
				chatReplyHide();
			}
		});
	}
	function chatHouse(t) {
		if (parseLine(t).store && modOn("meals") && isleOn("food")) return "food";
		const g = isleGuess({
			sym: "event",
			text: t
		});
		return g && g.sure ? g.k : null;
	}
	function chatDestHTML(it) {
		const k = it.kind, rl = k.day ? (voRelDay(k.day) || fmtShort(k.day)) + " · " : "";
		if (k.kind === "pool") return "待办池";
		if (it.house) return rl + isleIcon(it.house, 18) + ISLE[it.house].h;
		if (k.kind === "task") return rl + "待办";
		if (k.kind === "thought") {
			const d = TH_ICONS.find((x) => x[0] === k.ic);
			return rl + "随想" + (d ? " " + d[1] : "");
		}
		if (!it.manual && !k.day && k.kind === "event") {
			const hk = chatHouse(it.text);
			if (hk) return isleIcon(hk, 18) + ISLE[hk].h;
		}
		return rl + "日常";
	}
	function chatShowMany() {
		const C = composerState.CHAT;
		if (!C) return;
		const live = C.items.filter((x) => !x.off).length;
		chatShow("sort", (C.items.length === 1 ? "这条收在哪里？点小签可以修改。" : "刚才那段话，我帮你理成了 " + C.items.length + " 条，点前面的小签能换地方：") + "<div class=\"cr-list\">" + C.items.map((it, i) => "<div class=\"cr-row" + (it.off ? " off" : "") + "\"><button class=\"cr-k\" data-k=\"" + i + "\">" + chatDestHTML(it) + "</button><span class=\"cr-t\">" + vEsc(it.text) + "</span><button class=\"cr-o\" data-o=\"" + i + "\">" + (it.off ? "↺" : "✕") + "</button></div>").join("") + "</div>", [[
			"all",
			C.items.length === 1 ? "确认收好" : "都放好（" + live + "）",
			true
		]].concat(C.base === TODAY ? [["fine", "细改 ›"]] : [], [["back", "撤回"]]), (a) => {
			if (a === "all") {
				if (!live) {
					toast("一条都没留 · 点 ↺ 恢复");
					return;
				}
				const outs = chatPlace(C.items, C.base);
				navigationState.focusRef = null;
				render();
				if (outs.length === 1) chatSayOne(outs[0], C.text);
				else chatSayMany(outs, C.text);
				chatFlash(outs);
			} else if (a === "fine") {
				const t = C.text;
				chatReplyHide();
				SET.voDraft = t;
				scheduleSave();
				openVoice({});
				VO.items = C.items.map(chatToVo);
				VO.open = null;
				voPaint();
			} else if (a === "back") {
				const t = C.text;
				chatReplyHide();
				const i = $("#chatIn");
				if (i && !i.value.trim()) {
					i.value = t;
					chatGrow();
				}
			}
		});
		const R = $("#chatReply");
		R.querySelectorAll("[data-o]").forEach((b) => b.onclick = (ev) => {
			ev.stopPropagation();
			const it = C.items[+b.dataset.o];
			it.off = !it.off;
			chatShowMany();
		});
		R.querySelectorAll("[data-k]").forEach((b) => b.onclick = (ev) => {
			ev.stopPropagation();
			const it = C.items[+b.dataset.k], was = it.kind;
			it.manual = true;
			if (it.house) {
				delete it.house;
				chatShowMany();
				return;
			}
			const nx = {
				pool: "task",
				task: "event",
				event: "thought",
				thought: "task"
			}[was.kind];
			if (nx === "thought") it.kind = {
				kind: "thought",
				ic: thGuess(it.text) || "dash",
				day: was.day
			};
			else if (nx === "task") it.kind = {
				kind: "task",
				day: null
			};
			else it.kind = {
				kind: "event",
				day: was.kind === "task" ? null : was.day
			};
			chatShowMany();
		});
	}
	function chatSayMany(outs, text) {
		const cnt = {}, ord = [];
		outs.forEach((o) => {
			const hk = sideHome(o.e);
			const lab = (o.day !== o.base ? (voRelDay(o.day) || fmtShort(o.day)) + "的" : "") + (hk ? ISLE[hk].h : o.e.state === "someday" ? "待办池" : o.e.sym === "task" ? "待办" : isThought(o.e) ? "随想" : "日常");
			if (!cnt[lab]) {
				cnt[lab] = 0;
				ord.push(lab);
			}
			cnt[lab]++;
		});
		composerState.CHAT = {
			mode: "done",
			base: outs.length ? outs[0].base : editKey(),
			outs,
			text
		};
		chatShow("happy", "放好了：" + ord.map((l) => l + " " + cnt[l]).join(" · ") + "。", [["undo", "撤回"]], (a) => {
			if (a === "undo") chatUndo(outs, text);
		});
	}
	function chatFlash(outs) {
		setTimeout(() => {
			const vr = view.getBoundingClientRect(), R = $("#chatReply"), B = $("#chatBar");
			const lim = R && R.classList.contains("on") ? R.getBoundingClientRect().top : B && B.classList.contains("on") ? B.getBoundingClientRect().top : vr.bottom;
			let first = true;
			outs.forEach((o) => {
				if (o.day !== o.base) return;
				const el = view.querySelector("[data-eid=\"" + o.e._id + "\"]");
				if (!el) return;
				if (first) {
					first = false;
					const r = el.getBoundingClientRect(), top = vr.top + 8, bot = lim - 8;
					if (r.top < top || r.bottom > bot) view.scrollTop += r.top - top - Math.max(0, (bot - top - r.height) / 2);
				}
				el.classList.add("flash");
				setTimeout(() => el.classList.remove("flash"), 1700);
			});
		}, 80);
	}
	function chatSend() {
		const inp = $("#chatIn");
		if (!inp) return;
		const text = inp.value.trim();
		if (!text) return;
		const base = chatBase();
		if (!base) return;
		if (!voSplit(text).slice(1).some(newIntent) && (towerChat(inp, text, base) || friendChatIntercept(inp, text, base))) return;
		const items = chatItems(text, base === TODAY);
		if (!items.length) {
			toast("再多说两个字吧");
			return;
		}
		inp.value = "";
		chatGrow();
		navigationState.focusRef = null;
		if (SET.obLand) {
			delete SET.obLand;
			scheduleSave();
		}
		if (items.length === 1 && !items[0].house) {
			const outs = chatPlace(items, base);
			render();
			if (outs[0]) chatSayOne(outs[0], text);
			chatFlash(outs);
		} else {
			composerState.CHAT = {
				mode: "many",
				base,
				items,
				text
			};
			chatShowMany();
		}
	}
	function bindComposer() {
		(() => {
			const inp = $("#chatIn");
			if (!inp) return;
			inp.addEventListener("input", () => {
				chatGrow();
				if (composerState.CHAT && composerState.CHAT.mode !== "many") chatReplyHide();
			});
			inp.addEventListener("keydown", (ev) => {
				if (ev.isComposing || ev.keyCode === 229) return;
				if (ev.key === "Enter" && !ev.shiftKey) {
					ev.preventDefault();
					chatSend();
				}
			});
			inp.addEventListener("focus", () => setTimeout(placeToolbar, 60));
			inp.addEventListener("blur", () => setTimeout(placeToolbar, 60));
			$("#chatBar").addEventListener("click", (ev) => {
				if (ev.target === ev.currentTarget) chatFocus();
			});
			const sb = $("#chatSend");
			sb.addEventListener("pointerdown", (ev) => ev.preventDefault());
			sb.onclick = chatSend;
			$("#chatMic").onclick = () => {
				chatFocus();
				composerState.CHAT = {
					mode: "tip",
					base: chatBase()
				};
				chatShow("ask", "按键盘右下角的麦克风 说就行，说完点「发送」。一口气说好几件事也没关系，我帮你理。", [["ok", "知道了"]], () => chatReplyHide());
			};
			$("#chatPlus").onclick = () => {
				if (!chatBase()) return;
				photosState.imgTarget = {
					sym: "event",
					defSym: true,
					text: "",
					_id: ++appState.uid,
					_imgPending: true
				};
				const fi = $("#imgInput");
				fi.value = "";
				fi.click();
			};
		})();
	}
	// src/modules/collections/summary.js
	var AGG = {
		task: {
			title: "• 待办",
			tip: "所有没做完的待办（跨日期）",
			f: (e) => e.sym === "task" && e.state === "open"
		},
		event: {
			title: "○ 日常",
			tip: "发生过的事",
			f: (e) => e.sym === "event"
		},
		note: {
			title: "— 随想",
			tip: "灵感、学到的和备注 · 记事小亭的「随想」页签能按图标翻",
			f: (e) => e.sym === "note" && isThought(e)
		},
		mood: {
			title: "🌤 心情",
			tip: "情绪轨迹",
			f: (e) => e.sym === "mood"
		},
		ask: {
			title: "❓ 疑问",
			tip: "还没弄清的事 · 想明白了点这行改符号",
			f: (e) => e.sym === "ask"
		},
		bang: {
			title: "❗ 重点",
			tip: "被你标了重点的句子",
			f: (e) => e.sym === "bang"
		},
		done: {
			title: "✓ 已完成",
			tip: "成就流水",
			f: (e) => e.state === "done"
		},
		delegated: {
			title: "→ 等待中",
			tip: "已转交，按跟进日提醒",
			f: (e) => e.state === "delegated"
		},
		someday: {
			title: "☾ 待办池",
			tip: "没做完的、先放着的都在这 · 不催不计数 · 想做哪件点「⤴ 今天做」",
			f: (e) => e.sym === "task" && e.state === "someday"
		},
		dropped: {
			title: "✕ 不做了",
			tip: "放弃归档",
			f: (e) => e.state === "dropped"
		}
	};
	// src/ui/drawer.js
	function openDrawer() {
		dismissRouteSheets();
		buildDrawer();
		const dl = $("#drawerList");
		if (dl) dl.scrollTop = 0;
		$("#drawer").classList.add("on");
		$("#mask").classList.add("on");
	}
	function closeDrawer() {
		$("#drawer").classList.remove("on");
		$("#mask").classList.remove("on");
		groupsState.gEdit = null;
		groupsState.pendingGDel = null;
	}
	var DTILE = {
		cal: {
			ic: "<svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"4\" y=\"5\" width=\"16\" height=\"15\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"7\"/><line x1=\"15\" y1=\"3\" x2=\"15\" y2=\"7\"/></svg>",
			n: "日历",
			ok: () => true,
			s: () => "按月翻",
			go: () => {
				const ta = TODAY.split(".").map(Number);
				navigationState.cur = {
					name: "cal",
					y: ta[0],
					m: ta[1]
				};
			}
		},
		someday: {
			img: "h_someday",
			ic: "☾",
			n: "待办池",
			ok: () => true,
			s: (c) => (c.someday || 0) + " 件 · 不催",
			go: () => {
				navigationState.cur = {
					name: "agg",
					key: "someday"
				};
			}
		},
		food: {
			img: "h_food",
			ic: "🍚",
			n: "美食",
			ok: () => modOn("meals"),
			s: () => "吃什么 · 熟店",
			go: () => {
				navigationState.cur = { name: "food" };
			}
		},
		ledger: {
			img: "h_money",
			ic: "💰",
			n: "记账",
			ok: () => modOn("ledger"),
			s: () => "本月 ¥" + drawerMonthSpend(),
			go: () => {
				navigationState.cur = { name: "ledger" };
			}
		},
		cycles: {
			img: "h_cycles",
			ic: "🔁",
			n: "提醒",
			ok: () => modOn("cycles"),
			s: () => "生日 · 还款 · 周期",
			go: () => {
				navigationState.cur = { name: "cycles" };
			}
		},
		notes: {
			img: "h_notes",
			ic: "📓",
			n: "笔记本",
			ok: () => modOn("notes"),
			s: () => (typeof appState.NOTES !== "undefined" ? appState.NOTES : []).length + " 本",
			go: () => {
				navigationState.cur = { name: "notes" };
			}
		},
		people: {
			img: "h_people",
			ic: "👥",
			n: "熟人",
			ok: () => modOn("people"),
			s: () => "熟人册",
			go: () => {
				navigationState.cur = { name: "people" };
			}
		},
		vault: {
			img: "h_vault",
			ic: "🔐",
			n: "小本",
			ok: () => modOn("vault"),
			s: () => "账号小本",
			go: () => {
				navigationState.cur = { name: "vault" };
			}
		}
	};
	var drawerAggOpen = false;
	function drawerMonthSpend() {
		const ta = TODAY.split(".").map(Number), pre = ta[0] + "." + ta[1] + ".";
		try {
			return Math.round(expRows().filter((r) => r.d.startsWith(pre)).reduce((s2, r) => s2 + r.sum, 0)).toLocaleString("en-US");
		} catch (_) {
			return "0";
		}
	}
	function longPress(el, onLong, onTap) {
		let t = null, fired = false, sx = 0, sy = 0;
		el.addEventListener("pointerdown", (ev) => {
			fired = false;
			sx = ev.clientX;
			sy = ev.clientY;
			clearTimeout(t);
			t = setTimeout(() => {
				fired = true;
				onLong();
			}, 480);
		});
		el.addEventListener("pointermove", (ev) => {
			if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 10) clearTimeout(t);
		});
		el.addEventListener("pointerup", () => clearTimeout(t));
		el.addEventListener("pointerleave", () => clearTimeout(t));
		el.addEventListener("contextmenu", (ev) => ev.preventDefault());
		el.addEventListener("click", (ev) => {
			if (fired) {
				fired = false;
				ev.preventDefault();
				return;
			}
			onTap();
		});
	}
	function buildDrawer() {
		if (SET.mods.meals !== true && !SET.mealsUserOff && foodGroupName()) {
			SET.mods.meals = true;
			scheduleSave();
		}
		const box = $("#drawerList");
		box.innerHTML = "";
		let mc = 0;
		const taSub = TODAY.split(".").map(Number);
		const GCNT = {}, ACNT = {};
		walk((d, e) => {
			const a = d.split(".").map(Number);
			if (a[0] === taSub[0] && a[1] === taSub[1]) mc++;
			(e.groups || []).forEach((g2) => GCNT[g2] = (GCNT[g2] || 0) + 1);
			Object.keys(AGG).forEach((k2) => {
				if (AGG[k2].f(e)) ACNT[k2] = (ACNT[k2] || 0) + 1;
			});
		});
		$("#drawerSub").textContent = taSub[0] + " 年 " + taSub[1] + " 月 · 本月已记 " + mc + " 条";
		const go = (fn) => {
			fn();
			closeDrawer();
			render();
		};
		const cellOf = (T) => {
			const el = document.createElement("button");
			el.type = "button";
			el.className = "dcell";
			if (T.k) el.dataset.isle = T.k;
			if (T.tile) el.dataset.tile = T.tile;
			el.innerHTML = T.icon + "<b>" + T.n + "</b><i>" + vEsc(T.s) + "</i>";
			if (T.k) longPress(el, () => houseSheet(T.k), () => go(T.go));
			else el.onclick = () => go(T.go);
			return el;
		};
		const lab1 = document.createElement("div");
		lab1.className = "drawer-label";
		lab1.innerHTML = "手帐<span class=\"dsec-sub\">翻日子 · 有日子的 · 没日子的</span>";
		box.appendChild(lab1);
		const nCyc = (SET.cycles || []).length;
		const mg = document.createElement("div");
		mg.className = "dgrid g3";
		[
			{
				tile: "cal",
				n: "日历",
				icon: "<img class=\"dimg\" src=\"" + JJ.h_post + "\" alt=\"\">",
				s: "按月翻",
				go: DTILE.cal.go
			},
			{
				tile: "cycles",
				n: "提醒",
				icon: "<img class=\"dimg\" src=\"" + JJ.h_cycles + "\" alt=\"\">",
				s: nCyc ? nCyc + " 个" : "生日 · 还款",
				go: () => {
					if (SET.mods.cycles === false) {
						SET.mods.cycles = true;
						scheduleSave();
					}
					navigationState.cur = { name: "cycles" };
				}
			},
			{
				tile: "someday",
				n: "待办池",
				icon: "<img class=\"dimg\" src=\"" + JJ.h_someday + "\" alt=\"\">",
				s: (ACNT.someday || 0) + " 件 · 不催",
				go: () => {
					navigationState.cur = {
						name: "agg",
						key: "someday"
					};
				}
			}
		].forEach((T) => mg.appendChild(cellOf(T)));
		box.appendChild(mg);
		const gw = document.createElement("div");
		gw.className = "dchips";
		gw.style.marginTop = "8px";
		allGroupNames().forEach((g) => {
			const t = tplOf(g);
			if (ISLE_TPL[t] && isleOn(t)) return;
			const [, fg] = gStyle(g), n = GCNT[g] || 0;
			const c = document.createElement("span");
			c.className = "dchip";
			c.dataset.g = g;
			c.innerHTML = "<b style=\"color:" + fg + "\">#</b>" + vEsc(g) + (n ? "<i>" + n + "</i>" : "");
			longPress(c, () => groupManageSheet(g), () => go(() => {
				navigationState.cur = {
					name: "group",
					g
				};
			}));
			gw.appendChild(c);
		});
		const add = document.createElement("span");
		add.className = "dchip add";
		add.id = "dGroupAdd";
		add.textContent = "＋";
		add.onclick = () => groupNewSheet();
		gw.appendChild(add);
		box.appendChild(gw);
		const lab2 = document.createElement("div");
		lab2.className = "drawer-label";
		lab2.innerHTML = "小岛<span class=\"dsec-sub\">一栋房子一个功能 · 长按置顶</span>";
		box.appendChild(lab2);
		const HC = {};
		walk((d, e) => {
			const k = sideHome(e);
			if (k) HC[k] = (HC[k] || 0) + 1;
		});
		const pins = islePins(), ons = DRAWER_ORDER.filter((k) => isleOn(k));
		const sub = (k) => {
			if (k === "money") {
				const v = +String(drawerMonthSpend()).replace(/,/g, "") || 0;
				return "本月 ¥" + (v >= 1e4 ? Math.round(v / 1e3) / 10 + "万" : v.toLocaleString("en-US"));
			}
			if (k === "people") return (SET.people || []).length + " 人";
			if (k === "notes") return (typeof appState.NOTES !== "undefined" ? appState.NOTES : []).length + " 本";
			if (k === "vault") return "上锁";
			if (k === "abu") return "岛主小筑";
			if (k === "health") return healthCount() + " 条";
			return (HC[k] || 0) + " 条";
		};
		const ig = document.createElement("div");
		ig.className = "dgrid g3";
		ig.id = "isleGrid";
		pins.filter((k) => ons.includes(k)).concat(ons.filter((k) => !pins.includes(k))).forEach((k) => ig.appendChild(cellOf({
			k,
			n: ISLE[k].n,
			icon: isleIcon(k, 38, "dimg"),
			s: sub(k),
			go: () => isleCur(k)
		})));
		box.appendChild(ig);
		const manage = document.createElement("button");
		manage.className = "manage-houses";
		manage.textContent = "+ 添加或管理岛上的房子";
		manage.onclick = () => go(() => {
			navigationState.cur = { name: "isle" };
		});
		box.appendChild(manage);
		const fold = document.createElement("div");
		fold.className = "dfold";
		fold.id = "dAggFold";
		fold.innerHTML = "<span class=\"ic\">≡</span><div>按标记汇总<small>待办 · 日常 · 随想 · 已完成 …</small></div><span class=\"ar\">" + (drawerAggOpen ? "▾" : "▸") + "</span>";
		fold.onclick = () => {
			drawerAggOpen = !drawerAggOpen;
			buildDrawer();
		};
		box.appendChild(fold);
		if (drawerAggOpen) {
			const aw = document.createElement("div");
			aw.className = "dchips daggs";
			Object.keys(AGG).forEach((key) => {
				const c = document.createElement("span");
				c.className = "dchip";
				c.dataset.agg = key;
				c.innerHTML = vEsc(AGG[key].title) + (ACNT[key] ? "<i>" + ACNT[key] + "</i>" : "");
				c.onclick = () => go(() => {
					navigationState.cur = {
						name: "agg",
						key
					};
				});
				aw.appendChild(c);
			});
			box.appendChild(aw);
		}
		const more = document.createElement("details");
		more.className = "drawer-more";
		more.id = "drawerMore";
		more.innerHTML = "<summary>更多</summary><button class=\"dfold\" id=\"drawerReview\">晚间复盘</button>";
		more.querySelector("button").onclick = () => {
			closeDrawer();
			openReview();
		};
		box.appendChild(more);
		const st = document.createElement("button");
		st.className = "dfold";
		st.id = "dSettings";
		st.innerHTML = "<span class=\"ic\">⚙</span><div>设置</div>";
		st.onclick = () => go(() => {
			navigationState.cur = { name: "settings" };
		});
		const panorama = document.createElement("button");
		panorama.id = "openPanorama";
		panorama.textContent = "切换互动版 · 全景岛";
		panorama.onclick = () => go(() => {
			navigationState.cur = { name: "panorama" };
		});
		const footer = document.createElement("div");
		footer.className = "drawer-footer";
		footer.append(st, panorama);
		box.appendChild(footer);
	}
	function houseSheet(k) {
		const S = $("#gsheet"), I = ISLE[k], pinned = islePins().includes(k);
		S.innerHTML = "<div class=\"gs-title\">" + I.n + " · " + I.h + "</div><div class=\"hw-tip\" style=\"padding:0 2px 12px\">" + I.tip + "</div><button class=\"gm-btn\" id=\"hsPin\" style=\"width:100%;padding:11px\">" + (pinned ? "取消置顶" : "置顶到最前面") + "</button><button class=\"gm-btn\" id=\"hsOff\" style=\"width:100%;padding:11px;margin-top:8px;color:var(--ink-soft)\">关掉这栋房子 · 记过的都还在</button><button class=\"gs-done\" id=\"hsDone\">好了</button>";
		const back = () => {
			S.classList.remove("on");
			$("#mask").classList.add("on");
		};
		$("#hsPin").onclick = () => {
			islePin(k);
			back();
			buildDrawer();
		};
		$("#hsOff").onclick = () => {
			isleSet(k, false);
			back();
			buildDrawer();
			render();
		};
		$("#hsDone").onclick = back;
		S.classList.add("on");
	}
	function groupManageSheet(g) {
		const S = $("#gsheet");
		let delArm = false;
		const paint = () => {
			S.innerHTML = "<div class=\"gs-title\">#" + vEsc(g) + "</div><label class=\"ss-f\"><span>改名</span><input id=\"gmName\" value=\"" + escAttr(g) + "\"></label><div class=\"gm-sec\">颜色</div><div class=\"cdots\" id=\"gmColors\">" + GPAL.map((pal, ci) => "<span class=\"cdot" + (appState.GCOLOR[g] === ci ? " on" : "") + "\" data-ci=\"" + ci + "\" style=\"background:" + pal[1] + "\"></span>").join("") + "</div><div class=\"gm-sec\">模板</div><div class=\"gs-chips\" id=\"gmTpl\">" + TPL_ORDER.map((k) => "<button class=\"gs-chip" + (tplOf(g) === k ? " on" : "") + "\" data-tpl=\"" + (k || "") + "\">" + (k ? TPLS[k].n : "无") + "</button>").join("") + "</div><div class=\"gs-new\" style=\"margin-top:12px\"><button class=\"gm-btn danger\" id=\"gmDel\" style=\"flex:1;padding:10px\">" + (delArm ? "确认删除（只摘标签，条目都在）" : "删除分组") + "</button><button class=\"gm-btn\" id=\"gmOk\" style=\"flex:1;padding:10px;background:var(--accent);color:#fff;border-color:var(--accent)\">好了</button></div>";
			S.querySelectorAll("#gmColors [data-ci]").forEach((d) => d.onclick = () => {
				appState.GCOLOR[g] = +d.dataset.ci;
				scheduleSave();
				paint();
			});
			S.querySelectorAll("#gmTpl [data-tpl]").forEach((b) => b.onclick = () => {
				const k = b.dataset.tpl || null;
				SET.gtpl[g] = k;
				scheduleSave();
				paint();
				toast(k ? "#" + g + " 用「" + TPLS[k].n + "」模板 · 历史记录已识别" : "#" + g + " 已取消模板");
			});
			$("#gmDel").onclick = () => {
				if (!delArm) {
					delArm = true;
					paint();
					return;
				}
				deleteGroup(g);
				S.classList.remove("on");
				$("#mask").classList.add("on");
				buildDrawer();
				render();
				toast("已删除分组 · 记录都还在");
			};
			$("#gmOk").onclick = () => {
				const v = $("#gmName").value.trim().replace(/^#/, "");
				if (v && v !== g) {
					renameGroup(g, v);
					toast("已改名 · 全局生效");
				}
				S.classList.remove("on");
				$("#mask").classList.add("on");
				buildDrawer();
				render();
			};
		};
		paint();
		S.classList.add("on");
	}
	function groupNewSheet() {
		const S = $("#gsheet");
		let pick;
		const paint = () => {
			const v0 = $("#gnName") ? $("#gnName").value : "";
			S.innerHTML = "<div class=\"gs-title\">新建分组</div><label class=\"ss-f\"><span>名字</span><input id=\"gnName\" placeholder=\"比如：健身\"></label><div class=\"gm-sec\">套用模板（可不选，之后长按分组也能改）</div><div class=\"gs-chips\" id=\"gnTpl\">" + TPL_ORDER.map((k) => "<button class=\"gs-chip" + ((pick === void 0 ? null : pick) === k ? " on" : "") + "\" data-tpl=\"" + (k || "") + "\">" + (k ? TPLS[k].n : "无") + "</button>").join("") + "</div><button class=\"gs-done\" id=\"gnOk\">建好</button>";
			$("#gnName").value = v0;
			S.querySelectorAll("#gnTpl [data-tpl]").forEach((b) => b.onclick = () => {
				pick = b.dataset.tpl || null;
				paint();
			});
			$("#gnOk").onclick = () => {
				const v = $("#gnName").value.trim().replace(/^#/, "");
				if (!v) {
					toast("先写个名字");
					return;
				}
				if (!appState.extraGroups.includes(v)) appState.extraGroups.push(v);
				const k = pick === void 0 ? tplOf(v) : pick;
				if (k !== tplOf(v) || k !== null) SET.gtpl[v] = k || null;
				scheduleSave();
				scheduleSave();
				S.classList.remove("on");
				$("#mask").classList.add("on");
				buildDrawer();
				toast("已新建 #" + v + (k ? " · " + TPLS[k].n + "模板" : ""));
			};
		};
		paint();
		S.classList.add("on");
		setTimeout(() => {
			const i = $("#gnName");
			if (i) i.focus();
		}, 60);
	}
	function bindDrawer() {
		$("#menuBtn").onclick = openDrawer;
		$("#mask").onclick = () => {
			closeDrawer();
			if ($("#gsheet").classList.contains("on")) closeSheet();
			if ($("#qsheet").classList.contains("on")) closeQSheet();
		};
	}
	// src/modules/collections/groups.js
	var groupsState = {};
	groupsState.gEdit = null;
	groupsState.pendingGDel = null;
	function renameGroup(oldN, newN) {
		walk((d, e) => {
			if (e.groups) {
				const i = e.groups.indexOf(oldN);
				if (i >= 0) e.groups[i] = newN;
			}
		});
		const j = appState.extraGroups.indexOf(oldN);
		if (j >= 0) appState.extraGroups[j] = newN;
		scheduleSave();
	}
	function deleteGroup(n) {
		walk((d, e) => {
			if (e.groups) {
				const i = e.groups.indexOf(n);
				if (i >= 0) e.groups.splice(i, 1);
			}
		});
		appState.extraGroups = appState.extraGroups.filter((x) => x !== n);
		scheduleSave();
	}
	function openSheet() {
		dismissKB();
		buildSheet();
		$("#gsheet").classList.add("on");
		$("#mask").classList.add("on");
		placeToolbar();
	}
	function dismissGroupSheet() {
		$("#gsheet").classList.remove("on");
		if (!$("#drawer").classList.contains("on")) $("#mask").classList.remove("on");
		const t = navigationState.sheetTarget;
		navigationState.sheetTarget = null;
		if (t && !(t.text || "").trim() && !(t.groups && t.groups.length) && !(t.images && t.images.length) && !(t.children && t.children.length)) removeEntry(t);
	}
	function closeSheet() {
		dismissGroupSheet();
		render();
	}
	function buildSheet() {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">分组 · " + (navigationState.sheetTarget.text || "未命名行").slice(0, 14) + "</div><div class=\"gs-chips\" id=\"gsChips\"></div><div class=\"gs-new\"><input id=\"gsNew\" placeholder=\"新建分组…\" autocomplete=\"off\"><button id=\"gsAdd\">添加</button></div><button class=\"gs-done\" id=\"gsDone\">完成</button>";
		const chips = $("#gsChips");
		allGroupNames().forEach((g) => {
			const c = document.createElement("button");
			c.className = "gs-chip" + ((navigationState.sheetTarget.groups || []).includes(g) ? " on" : "");
			c.innerHTML = houseMark(tplOf(g)) || "#";
			c.append(g);
			c.onclick = () => {
				snapshot("分组");
				const a = navigationState.sheetTarget.groups = navigationState.sheetTarget.groups || [];
				const i = a.indexOf(g);
				i >= 0 ? a.splice(i, 1) : a.push(g);
				scheduleSave();
				buildSheet();
			};
			chips.appendChild(c);
		});
		$("#gsAdd").onclick = () => {
			const v = $("#gsNew").value.trim().replace(/^#/, "");
			if (!v) return;
			if (!appState.extraGroups.includes(v)) appState.extraGroups.push(v);
			snapshot("分组");
			const a = navigationState.sheetTarget.groups = navigationState.sheetTarget.groups || [];
			if (!a.includes(v)) a.push(v);
			scheduleSave();
			buildSheet();
		};
		$("#gsDone").onclick = closeSheet;
	}
	function bindGroups() {
		$("#searchBox").addEventListener("keydown", (ev) => {
			if (ev.key === "Enter") {
				const v = ev.target.value.trim();
				if (!v) return;
				ev.target.blur();
				navigationState.cur = {
					name: "search",
					q: v
				};
				closeDrawer();
				render();
			}
		});
	}
	// src/core/dictionary.js
	var dictionaryState = {};
	var PY_SRC = "a 啊阿吖嗄腌锕|ai 埃挨哎唉哀皑癌蔼矮艾碍爱隘乃捱呃嗳嗌噫嫒瑷暧砹锿霭|an 鞍氨安俺按暗岸胺案干盒谙埯揞犴庵桉铵鹌黯|ang 肮昂盎仰|ao 凹敖熬翱袄傲奥懊澳嚣坳拗嗷岙廒遨媪骜獒燠聱螯鏊鳌鏖|ba 芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸湃茇菝捭岜灞杷钯粑鲅魃|bai 白柏百摆佰败拜稗伯排捭呗掰擘|ban 斑班搬扳般颁板版扮拌伴瓣半办绊辨彬阪坂豳钣瘢癍舨|bang 邦帮梆榜膀绑棒磅蚌镑傍谤蒡浜螃|bao 苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆呆刨炮袍曝瀑勹裒葆孢煲鸨褓趵龅|bei 跋杯碑悲卑北辈背贝钡倍狈备惫焙被臂波葡菩孛俾陂邶蓓呗悖碚鹎褙鐾鞴|ben 奔苯本笨夯体畚坌贲锛|beng 榜蚌崩绷甭泵蹦迸抨俸堋唪嘣甏|bi 卑被逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛肥拂幅服虑秘泌瞥匕仳俾陴埤芘荜荸萆薜吡哔狴庳愎滗濞弼妣婢媲嬖璧枇檗殍贲畀铋秕馥裨筚箅篦舭襞跛跸髀|bian 鞭边编贬扁便变卞辨辩辫遍封匾弁苄拚忭汴缏煸砭碥稹窆褊蝙笾鳊|biao 标彪膘表漂剽婊嫖骠杓飑飙飚灬镖镳瘭裱鳔髟鏖|bie 捌蔽鳖憋别瘪撇蹩|bin 彬斌濒滨宾摈份傧豳浜缤玢槟殡膑镔髌鬓|bing 兵冰柄丙秉饼炳病并拼屏禀冫邴摒枋槟燹|bo 拔白柏百剥薄爆玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳卜簿募怕拍潘跑魄蒲孛亳蕃薜蘖擗啵饽艴檗擘礴钹鹁簸趵跛踣鲅|bu 堡捕卜哺补埠不布步簿部怖附埔拊卟逋瓿晡钚钸醭|ca 擦嚓礤|cai 猜裁材才财睬踩采彩菜蔡|can 餐参蚕残惭惨灿掺孱骖璨粲黪|cang 苍舱仓沧藏伧臧|cao 操糙槽曹草澡造艹嘈漕屮螬艚|ce 厕策侧册测赦恻|cen 参岑涔|ceng 层蹭僧增曾噌|cha 插叉茬茶查碴搽察岔差诧刹喳苴荼嚓猹馇汊姹杈楂槎檫锸镲衩|chai 差拆柴豺搓侪钗瘥虿|chan 搀掺蝉馋谗缠铲产阐颤单厘兔冁谄蒇廛忏潺澶孱羼婵嬗骣觇禅镡蟾躔|chang 昌猖场尝常长偿肠厂敞畅唱倡尚裳倘淌伥鬯苌菖徜怅惝阊娼嫦昶氅鲳|chao 超抄钞朝嘲潮巢吵炒绰剿怊晁焯耖|che 拆车扯撤掣彻澈尺斥宅坼屮砗|chen 郴臣辰尘晨忱沉陈趁衬称堪帘沈填湛枕疹伧谌谶抻嗔宸琛榇肜胂碜眈龀|cheng 敞撑称城橙成呈乘程惩澄诚承逞骋秤盯净盛醒丞郢埕噌嵊枨柽樘晟塍瞠铖铛裎蛏酲|chi 茬吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽哆离莉抬拖喜移治傺郗坻墀芪茌搋叱哧啻嗤彳饬媸柢敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑|chong 充冲虫崇宠茧涌盅种重烛茺忡憧潼铳舂艟|chou 抽酬畴踌稠愁筹仇绸瞅丑臭扭俦揄帱惆溴妯瘳雠|chu 初出橱厨躇锄雏滁除楚础储矗搐触处硫柠淑涂畜絮助亍刍怵憷绌杵楮樗褚蜍蹰黜|chuai 揣搋啜嘬膪踹|chuan 川穿椽传船喘串掾舛惴遄巛氚钏舡|chuang 疮窗幢床闯创葱囱怆舂|chui 吹炊捶锤垂椎陲棰槌|chun 春椿醇唇淳纯蠢莼肫鹑蝽|chuo 躇戳绰簇促醛荃啜辶辍斫踔踱龊|ci 柴疵茨磁雌辞慈瓷词此刺赐次司伺兹滋茈呲嵯祠鹚蚝螅粢糍趑|cong 窗聪葱囱匆从丛偬苁淙骢琮璁枞|cou 凑奏揍蔟楱辏腠|cu 粗醋簇促戚趣卒蔟徂猝槭殂酢蹙蹴|cuan 蹿篡窜攒汆撺爨镩|cui 察摧崔催脆瘁粹淬翠萃啐悴璀榱毳隹|cun 村存寸忖皴|cuo 磋撮搓措挫错昔最厝嵯脞锉矬痤瘥鹾蹉|da 搭达答瘩打大塌塔耷哒嗒怛妲沓疸褡笪靼鞑|dai 大呆歹傣戴带殆代贷袋待逮怠毒隶埭甙呔岱迨逯骀绐玳黛|dan 忱耽担丹单郸掸胆旦氮但惮淡诞弹蛋憾石蜒詹儋萏啖怛澹澶檐殚赕膻眈疸瘅聃箪|dang 当挡党荡档谠凼菪宕砀铛裆|dao 刀捣蹈倒岛祷导到稻悼道盗受刂叨帱忉氘焘忑纛|de 德得的登底地陟锝|dei 得|deng 橙澄蹬灯登等瞪凳邓噔嶝戥磴镫簦|di 逮的堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔提蹄逐氐籴诋谛邸坻荻啻嘀娣柢棣觌砥碲睇镝羝骶|dia 嗲|dian 颠掂滇碘点典靛垫电佃甸店惦奠淀殿拈阽坫埝巅玷钿癜癫蜓簟踮|diao 刀碉叼雕凋刁掉吊钓调鸟跳佻倜莜铞铫蜩踔貂鲷|die 跌爹碟蝶迭谍叠涉踢至窒佚垤堞揲喋嗲渫牒瓞褶耋蹀鲽|ding 灯丁盯叮钉顶鼎锭定订汀仃葶啶玎腚碇町铤疔耵酊|diu 丢铥|dong 东冬董懂动栋侗恫冻洞桐酮筒垌咚岽峒氡胨胴硐甬鸫|dou 兜抖斗陡豆逗痘都读投逾蔸钭窦窬蚪篼|du 都督毒犊独读堵睹赌杜镀肚度渡妒顿土芏嘟渎椟橐牍碡蠹竺笃纛髑黩|duan 端短锻段断缎椴煅簖|dui 堆兑队对敦追怼憝碓镦|dun 墩吨蹲敦顿囤钝盾遁沌豚炖砘礅盹镦趸|duo 揣捶度掇哆多夺垛躲朵跺舵剁惰堕隋陀驮杂咄哚沱缍柁棰铎裰酡踱|e 啊阿隘胺歹蛾峨鹅俄额讹娥恶厄扼遏鄂饿哦邑噩谔垩苊莪萼呃愕阏屙婀轭曷腭硪锇锷鹗疴颚鳄|ei 诶|en 恩蒽摁|er 而儿耳尔饵洱二贰佴迩珥铒鸸鲕|fa 发罚筏伐乏阀法珐垡砝|fan 藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蕃蘩幡梵燔畈袢蟠蹯|fang 坊芳方肪房防妨仿访纺放匚邡彷枋钫舫鲂|fei 菲非啡飞肥匪诽吠肺废沸费裴芾狒怫悱淝妃绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱|fen 扮奔匪芬酚吩氛分纷坟焚汾粉奋份忿愤粪盼偾瀵玢棼燔愍鲼鼢|feng 泛丰封枫蜂峰锋风疯烽逢冯缝讽奉凤捧俸酆葑唪沣逄砜|fo 佛|fou 不否缶|fu 哺沸佛夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐怀仅莆市匐凫阝郛芙芾苻茯莩菔拊掊呋幞彳怫溥滏宓艴孚驸绂绋桴赙祓砩黻黼罘稃馥蚨蜉蝠蝮麸趺跗鲋鳆鞴|ga 噶嘎胳夹咖伽尬呷尕尜戛旮钆|gai 该改概钙盖溉骸芥汽丐陔垓戤赅胲|gan 干甘杆柑竿肝赶感秆敢赣个汗奸乾坩苷尴擀泔淦澉绀橄旰矸疳酐|gang 冈刚钢缸肛纲岗港杠扛抗亢伉戆罡筻|gao 篙皋高膏羔糕搞镐稿告浩咎睾诰郜蒿藁缟槔槁杲锆|ge 噶盖哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各菏合介咯可屹鬲仡哿圪塥嗝纥搿膈硌镉袼颌虼舸骼髂|gei 给|gen 根跟痕亘茛哏艮|geng 耕更庚羹埂耿梗颈邢硬哽赓绠鲠|gong 杠工攻功恭龚供躬公宫弓巩汞拱贡共红廾咣珙肱蚣蛩觥|gou 钩勾沟苟狗垢构购够拘句佝诟岣遘媾缑枸觏彀笱篝鞲|gu 辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇滑贾枯苦嘏诂菰呱哌崮汩梏轱牯牿胍臌毂瞽罟钴锢鸪鹄痼蛄酤觚鲴骰鹘|gua 刮瓜剐寡挂褂括舌卦诖呱栝胍鸹聒|guai 乖拐怪掴|guan 串棺关官冠观管馆罐惯灌贯纶斡倌莞菅掼涫盥鹳鳏|guang 光广逛横恍咣犷潢桄胱|gui 概瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽撅傀祈炔哇洼娃桅匦匮刿庋宄妫桧炅晷皈簋蹶鲑鳜|gun 辊滚棍混丨衮绲磙鲧|guo 锅郭国果裹过划活涡馘蠃埚掴呙囗帼崞猓椁虢聒蜮蜾蝈|ha 蛤哈呵虾獬铪|hai 骸孩海氦亥害骇还咳咴嗨胲醢|han 厂甘感酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉嵌邗菡撖犴阚泔淦澉瀚旰晗焓矸顸颔蚶鼾|hang 肮夯杭航炕吭狼巷行沆绗珩桁颃酐|hao 皋镐壕嚎豪毫郝好耗号浩貉睾蒿薅嗥嚆濠灏妞昊皓颢蚝|he 硅哈害呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺霍苛洽吓蝎诃劾壑藿嗑嗬阖纥曷盍颌蚵翮|hei 嘿黑嗨|hen 痕很狠恨掀哏艮|heng 哼亨横衡恒蘅珩桁|hng 哼|hong 港共轰哄烘虹鸿洪宏弘红汪黉訇讧荭蕻薨闳泓洚|hou 喉侯猴吼厚候后堠後逅瘊篌糇鲎骺|hu 雇核和呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户芦戏许羽冱芴唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜瓠鹄鹕鹱虍笏醐斛鹘|hua 敌花哗华猾滑画划化话豁找劐侉叱骅桦砉铧稞|huai 槐徊怀淮坏坯喟踝|huan 灌欢环桓还缓换患唤痪豢焕涣宦幻皖眩援郇奂垸萑擐圜獾洹浣漶寰逭缳瑗脘锾鲩鬟|huang 荒慌黄磺蝗簧皇凰惶煌晃幌恍谎芒茫隍徨湟潢遑璜肓癀蟥篁鳇|hui 虫堕徊涣灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘溃诙茴荟蕙咴哕喙隳洄浍彗缋珲桧晖恚眭睢皓虺蟪麾|hun 棍荤昏婚魂浑混昆捆诨馄阍溷珲|huo 化豁活伙火获或惑霍货祸越劐壑藿攉嚯夥灬砉钬锪镬瓠耠蠖|ji 革给击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪秸洁藉居期其棋奇齐系揖倚丌亟乩厝剞佶偈脔诘郅墼芨芰荠萁蒺蕺掎卟叽咭哜唧岌嵴猗洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶睽羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂|jia 嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁揩茄暇夏挟嘏伽郏葭拮岬浃迦珈柙戛胛恝铗镓痂瘕袷蛱笳袈跏骱|jian 歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建沮前浅咸僭谏谫茛菅蒹搛囝湔蹇謇缣枧楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯|jiang 虹僵姜将浆江疆蒋桨奖讲匠酱降强茳洚绛缰犟礓耩糨豇|jiao 激蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖觉校妖咬佼僬艽茭菽挢叽噍峤徼湫姣敫爝皎鹪蛟醮跤鲛|jie 担亥圾籍家假价揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届楷渴她祖偕偈讦诘卩拮唧喈嗟婕孑桀砝碣疖颉蚧羯暨鲒骱髻|jin 巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲吟卺荩堇噤馑廑妗缙瑾槿赆觐钅衿矜|jing 劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净青刭儆阱菁獍憬泾迳弪婧檠肼胫腈旌蜻箐靓|jiong 炯窘坷冂垧迥炅扃|jiu 揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾噍阄柩桕鸠鹫赳鬏|ju 车告拱柜桔姐鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧且蛆渠娶租足倨讵鄹苣苴莒菹蘧掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎瞿鞫|juan 捐鹃娟倦眷卷绢圈蕊身甄鄄擐狷泫涓桊蠲锩镌蜷隽|jue 嚼脚角撅攫抉掘倔爵觉决诀绝狂屈蛙穴乙厥劂谲矍蕨蕞嗟噘噱崛獗孓珏柽梏桷橛爝镢蠼蹶觖|jun 龟均菌钧军君峻俊竣浚郡骏旬匀訇捃睃皲筠隽麇|ka 喀咖卡咯佧咔胩|kai 开揩楷凯慨岂剀劾垲蒈忾恺溘铠锎锴雉|kan 喊槛刊堪勘坎砍看侃凵莰阚戡龛瞰|kang 奋杭荒康慷糠扛抗亢炕坑伉闶沆钪|kao 考拷烤靠尻栲槁犒铐|ke 喀坷苛柯棵磕颗科壳咳可渴克刻客课嗑岢恪溘骒缂珂轲氪碣瞌盍钶锞稞疴窠颏蚵蝌髁|kei 刻|ken 肯啃垦恳垠裉龈|keng 坑吭忐硎铿|kong 空恐孔控腔倥崆穹箜|kou 抠口扣寇刳佝芤蔻叩彀眍筘|ku 古掘枯哭窟苦酷库裤挎跨圣刳堀喾绔骷|kua 夸垮挎跨胯侉髁|kuai 会块筷侩快魁蒯郐哙狯浍脍|kuan 棵宽款完髋|kuang 呈逛磺匡筐狂框矿眶旷况枉兄诓诳邝圹夼哐湟纩贶|kui 踩亏盔岿窥葵奎魁傀馈愧溃缺馗匮夔隗蒉揆喹喟悝愦逵暌睽聩蝰篑跬觖|kun 坤昆捆困卵悃阃琨锟醌鲲髡|kuo 括扩廓阔适蛞|la 垃拉喇蜡腊辣啦蓝落剌摺邋旯砬瘌|lai 莱来赖崃徕涞濑赉睐铼癞籁黧|lan 郴蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴|lang 羹琅榔狼廊郎朗浪莨蒗啷阆锒稂螂踉|lao 捞劳牢老佬姥酪烙涝撩僚潦络唠崂獠栳铑铹痨耢醪|le 勒乐肋了仂叻嘞泐鳓|lei 勒雷镭蕾磊累儡垒擂肋类泪羸诔嘞嫘缧檑耒酹|leng 棱楞冷塄愣|li 厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩列泣位鬲仂俪俚郦坜苈莅蓠藜捩叻呖唳喱猁悝溧澧逦娌嫠骊缡珞枥栎轹戾砺砬詈罹锂鹂疠疬蛎蜊蠡笠篥粝翮醴跞雳霾鲡鳢黧|lia 俩|lian 联莲连镰廉怜涟帘敛脸链恋炼练零令羸苓蔹奁搛潋濂琏楝殓臁膦瞵裢裣蠊鲢|liang 惊俩粮凉梁粱良两辆量晾亮谅墚莨椋踉靓魉|liao 佬撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩|lie 栗例列裂烈劣猎冽埒捩咧洌邋趔躐鬣|lin 琳林磷霖临邻鳞淋凛赁吝拎任蔺啉嶙廪懔遴檩辚膦瞵粼躏麟|ling 棱冷怜磷拎玲菱零龄铃伶羚凌灵陵岭领另令酃苓呤囹泠绫柃棂瓴聆蛉翎鲮|liu 聊溜琉榴硫馏留刘瘤流柳六碌陆游泖浏遛骝绺旒熘锍镏鹨鎏|long 龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃|lou 牢楼娄搂篓漏陋露偻蒌喽嵝镂瘘耧蝼髅|lu 谷六芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮绿垆蓼撸噜泸渌漉逯璐栌橹轳辂辘氇胪镥鸬鹭瘳簏舻鲈|luan 峦挛孪滦卵乱脔娈栾鸾銮|lun 抡轮伦仑沦纶论囵|luo 格果酪烙路萝螺罗逻锣箩骡裸落洛骆络倮蠃荦捋摞猓猡泺漯珞椤脶硌镙瘰袼蜾蠡跞雒|lv 累鹿驴吕铝侣旅履屡缕虑氯律率滤绿偻捋闾榈膂稆褛|lve 掠略锊|m 呒|ma 妈麻玛码蚂马骂嘛吗靡摩抹唛犸嬷杩蟆貊麽|mai 哩埋买麦卖迈脉派劢荬唛霾|man 埋瞒馒蛮满蔓曼慢漫谩幕墁幔缦熳镘颟螨鳗鞔|mang 芒茫盲氓忙莽邙瞢漭朦硭蟒|mao 耗猫茅锚毛矛铆卯茂冒帽貌贸描侔袤勖茆峁泖瑁昴牦耄旄懋瞀蛑蝥蟊髦|me 么末|mei 玫枚梅酶霉煤没眉媒镁每美昧寐妹媚糜谜墨某味坶莓嵋猸浼湄楣镅鹛袂魅|men 门闷们扪焖懑钔鞔|meng 氓萌蒙檬盟锰猛梦孟明勐甍瞢懵朦礞瞑虻蜢蟒蟊蠓艋艨|mi 眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼咪嘧猕汨溟宓弭幺脒祢敉糸縻麋|mian 棉眠绵冕免勉娩缅面冥沔泯渑湎宀腼眄黾|miao 吵猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱|mie 蔑灭乜咩咪蠛篾|min 眠民抿皿敏悯闽苠岷闵汶泯缗玟珉愍黾鳘|ming 萌盟皿明螟鸣铭名命冥茗溟暝瞑酩|miu 谬|mo 佰嘿脉冒貌没藐摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌帕袜万无勿谟茉蓦馍嫫嬷殁镆秣瘼耱蟆貊貘麽|mou 件谋牟某毋侔袤厶哞婺缪眸蛑鍪|mu 姥模莫牟拇牡亩姆母墓暮幕募慕木目睦牧穆仫坶苜沐毪钼|n 嗯|na 拿哪呐钠那娜纳南内捺呶肭镎衲箬|nai 氖乃奶耐奈鼐佴艿萘柰|nan 南男难冉喃囝囡楠腩罱蝻赧|nang 囊攮囔馕曩|nao 挠脑恼闹淖孬垴呶猱瑙硇铙蛲|ne 哪呐呢讷疒疔|nei 馁内|nen 嫩枘恁|neng 而耐能|ng 唔嗯|ni 呢妮霓倪泥尼拟你匿腻逆溺伲坭嶷猊怩昵旎祢慝睨铌鲵|nian 蔫拈年碾撵捻念粘辗廿埝辇黏鲇鲶|niang 娘酿|niao 鸟尿茑尥嬲脲袅|nie 倪泥捻捏聂孽啮镊镍涅幸乜陧蘖嗫囡颞臬蹑|nin 您|ning 冰年柠狞凝宁拧泞攘疑佞咛甯聍|niu 牛扭钮纽拗狃忸妞蚴|nong 脓浓农弄侬咔哝|nou 耨|nu 奴努怒褥帑弩胬孥驽肭|nuan 暖暧|nuo 掉那娜挪懦糯诺需傩搦喏锘|nv 女狃胬恧钕衄|nve 虐疟|o 哦喔噢|ou 欧鸥殴藕呕偶沤区握讴怄渥瓯耦|pa 芭扒叭吧把耙啪趴爬帕怕琶葩杷钯筢|pai 拍排牌徘湃派脾迫俳蒎哌|pan 扳般拌伴半卞番攀潘盘磐盼畔判叛胖片彦弁拚爿泮皤袢襻蟠蹒|pang 膀磅傍方房仿乓庞旁耪胖彭蒡彷滂逄螃|pao 苞胞包抱抛咆刨炮袍跑泡匏狍庖脬疱|pei 倍啡肺呸胚培裴赔陪配佩沛茇辔帔淠妃旆锫蜚醅霈|pen 吩汾喷盆湓|peng 逢旁砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰苹庄堋嘭怦滂蟛|pi 比庇辟否副坏坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬扑丕仳陂陴邳郫鄱圮埤鼙芘苤萆擗吡噼帔庀庳淠濞媲纰枇甓睥罴铍痦癖裨疋蚍蜱篦貔|pian 扁便篇偏片骗平谝骈缏犏胼褊蝙翩蹁|piao 膘飘漂瓢票朴剽莩嘌嫖骠缥殍瞟螵髟|pie 撇瞥丿苤氕|pin 泵拼频贫品聘匕姘娉嫔榀牝颦|ping 秤冯砰聘乒坪苹萍平凭瓶评屏俜娉枰鲆|po 霸膊泊繁坡泼颇婆破魄迫粕剖叵鄱泺珀钋钷皤笸|pou 部涪培剖裒掊瓿踣|pu 暴扶甫脯扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍苻噗溥濮璞攴氆攵镤镨蹼|qi 甭吃刺畸稽缉己技揭期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫切勤示溪枝支丌亟亓俟圻芑芪荠萁萋葺蕲嘁屺岐忮忾汔淇骐绮琪琦杞桤槭耆挈欹祺恝憩碛颀蛴蜞綦綮蹊鳍麒|qia 卡客掐恰洽葜袷髂|qian 柑赶筋牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉纤倩佥阡凵芊芡茜荨掮撖岍忏悭慊涔骞搴褰缱椠犍肷腱愆钤虔箝|qiang 将控枪呛腔羌墙蔷强抢哐丬爿戕嫱樯戗炝锖锵镪襁蜣羟跫跄|qiao 愁搞蕉焦壳橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍雀硝招劁诮谯荞峤愀憔缲樵毳敫硗醮跷跤鞒|qie 捷漆沏砌切茄且怯窃郄蕺唼惬慊妾婕挈脞锲箧趄|qin 浸钦侵亲秦琴勤芹擒禽寝沁芩堇蓁揿吣嗪噙廑溱槿檎锓衿矜覃螓衾|qing 精亲青轻氢倾卿清擎晴氰情顷请庆声倩苘圊檠磬蜻罄箐綮謦鲭黥|qiong 琼穷邛芎茕穹蛩筇跫銎|qiu 仇秋丘邱球求囚酋泅团馗俅氽邺巯艽犰惆愀湫逑遒楸赇虬蚯蝤裘糗鳅鼽|qu 鞠巨蜡趋区蛆曲躯屈驱渠取娶龋趣去戌诎劬苣蕖蘧岖衢阒遽璩觑氍朐祛磲鸲癯蛐蠼麴瞿鞫黢|quan 卷圈颧权醛泉全痊拳犬券劝栓拴诠圳荃犭獾悛绻桊辁畎铨蜷筌鬈|que 缺炔瘸却鹊榷确雀攉阕阙觳悫舄|qun 遁裙群逡麇|ran 然燃冉染苒蚺髯|rang 瓤壤攘嚷让禳穰|rao 饶扰绕荛娆桡|re 惹热若偌喏|ren 儿壬仁人忍韧任认刃妊纫亻仞荏葚饪轫恁稔衽|reng 耳扔仍戎艿穰|ri 日|rong 隔戎茸蓉荣融熔溶容绒冗嵘狨榕肜蝾|rou 揉柔肉糅蹂鞣|ru 女肉茹蠕儒孺如辱乳汝入褥月蓐薷嚅洳溽濡缛铷襦颥|ruan 软阮濡朊|rui 兑蕊瑞锐芮蕤枘睿蚋|run 闰润|ruo 溺惹若弱偌芮箬|sa 蔡撒洒萨卅仨檫挲脎飒趿|sai 腮鳃塞赛思噻|san 三叁伞散馓毵糁霰|sang 桑嗓丧搡磉颡|sao 搔骚扫嫂哨燥埽缫缲臊瘙鳋|se 塞瑟色涩寨啬铯穑|sen 森|seng 僧|sha 莎砂杀刹沙纱傻啥煞杉厦唼嗄歃铩痧裟霎鲨|shai 色筛晒酾|shan 掸邓珊苫杉山删煽衫闪陕擅赡膳善汕扇缮檀栅剡儋讪鄯埏芟彡潸姗嬗骟膻禅钐疝蟮舢跚鳝|shang 墒伤商赏晌上尚裳汤垧绱殇熵觞|shao 鞘梢捎稍烧芍勺韶少哨邵绍召劭苕溲潲杓裢蛸笤筲艄|she 碟睫奢赊蛇舌舍赦摄射慑涉社设拾折厍佘揲猞滠歙畲蛞麝|shei 谁|shen 砷申呻伸身深娠绅神沈审婶甚肾慎渗什信震诜谂莘葚抻吲哂渖椹胂矧蜃糁|sheng 乘声生甥牲升绳省盛剩胜圣姓丞冼垩嵊渑晟媵眚笙|shi 匙郝赫舍师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试斯寺似嘘液肢殖峙谥埘莳蓍弑唑饣彖轼贳炻礻铈螫舐筮豉酾豕鲥鲺|shou 收手首守寿授售受瘦兽熟扌狩绶艏|shu 售蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕透野俞朱倏塾菽摅沭澍姝纾杼毹腧殳秫疋|shua 刷耍唆唰涮|shuai 率摔衰甩帅蟀|shuan 汕栓拴闩涮踹|shuang 霜双爽泷淙孀|shui 谁水睡税说氵|shun 盾俊吮瞬顺舜恂巛|shuo 勺数说硕朔烁嗽溯蒴搠嗍濯妁槊铄|si 厕食斯撕嘶思私司丝死肆寺嗣四伺似饲巳析已以肄厮俟兕厶菥咝徙汜泗澌姒驷纟缌祀祠锶鸶耜蛳笥糸|song 松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦|sou 搜艘擞嗽族叟薮嗖嗾馊涑溲敕飕瞍锼螋|su 搬苏酥俗素速粟僳塑溯宿诉肃缩夙谡蔌蓿嗖嗉愫涑簌觫稣|suan 酸蒜算狻|sui 粹尿虽隋随绥髓碎岁穗遂隧祟蓑谇荽濉邃彗燧眭睢|sun 餐孙损笋荪狲飧榫跣隼|suo 抄莎沙衰蓑梭唆缩琐索锁所些唢嗦嗍娑桫挲睃羧|ta 搭塌他它她塔獭挞蹋踏太拓嗒闼溻漯遢榻沓铊趿鳎|tai 能胎苔抬台泰酞太态汰邰薹呔骀肽炱钛跆鲐|tan 胆但弹坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭舔炎郯蕈澹昙忐钽锬镡覃|tang 汤塘搪堂棠膛唐糖倘躺淌趟烫傥帑饧惝溏瑭樘铴镗耥螗螳羰醣|tao 掏涛滔绦萄桃逃淘陶讨套挑鼗叨啕洮韬焘饕|te 匿式特忒忑慝铽|teng 藤腾疼誊滕|ti 达堤狄弟是肆梯剔踢锑提题蹄啼体替嚏惕涕剃屉倜荑悌逖绨缇棣睇鹈裼醍|tian 蚕滇典佃甸苫天添填田甜恬舔腆吞沾掭嗔忝阗栝殄畋钿蚺|tiao 超稠调桃挑条迢眺跳姚佻苕祧窕蜩笤粜龆鲦髫|tie 蝶贴铁帖占萜怙餮|ting 奠厅听烃汀廷停亭庭挺艇莛葶婷梃町铤蜓霆|tong 侗恫洞通桐酮瞳同铜彤童桶捅筒统痛恿佟僮仝垌茼嗵峒恸潼砼硐|tou 偷投头透愉亠钭骰|tu 跌杜凸秃突图徒途涂屠土吐兔余堍荼菟钍酴|tuan 痪湍团抟彖疃|tui 推颓腿蜕褪退脱忒煺|tun 吨囤褪吞屯臀吴氽饨暾豚炖窀|tuo 池惰税他它拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沲沱迤柝柁橐砣铊箨酡跎鼍|wa 凹挖哇蛙洼娃瓦袜鞋佤娲腽|wai 歪外崴|wan 蔓娩豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕园剜芄莞菀纨绾琬朊脘畹蜿箢|wang 皇匡汪王亡枉网往旺望忘妄罔尢惘辋魍|wei 机立威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫遗有于倭偎诿阢隈隗圩芟荽葳薇囗帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨痿艉鲔|wen 昧免瘟温蚊文闻纹吻稳紊问限眼刎愠阌汶玟璺殁笏雯|weng 嗡翁瓮壅蓊蕹|wo 瘟挝蜗涡窝我斡卧握沃夭倭莴喔幄渥杌肟硪龌|wu 恶母亡巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴呒唔庑怃忤浯寤迕妩婺骛杌牾於旄焐瞀鹉鹜痦蜈蝥鋈鼯|xi 既腊猎卤栖洒屎撕昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郄郗茜菥葸蓰奚咭咦唏徙饩阋浠淅屣嬉玺樨曦觋欷歙熹禊禧嵇皙穸裼蜥蜴螅蟋舄舾羲粞翕醯蹊鼷|xia 瞎虾匣霞辖暇峡侠狭下厦夏吓斜押呀葭呷哧岈狎遐瑕柙歃硖瘕罅黠|xian 捍肩碱见探铣洗掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线矣冼苋莶藓岘彡猃濂寰暹妗娴氙燹祆黹锬鹇痫蚬筅籼酰跣跹霰|xiang 亨降相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象洋芗葙饷庠骧缃蟓舡鲞飨|xiao 号呼唬胶狡俏梢捎芍搜萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效爻佼叟茭哓崤潇逍姣骁绡枭枵蛸筱箫魈|xie 溉接解契楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑血耶叶豫汁偕亵隰勰燮薤撷唏喈獬廨渫瀣迦邂绁缬榭榍颉跬躞鲑|xin 款薪芯锌欣辛新忻心信衅寻囟馨莘忄昕歆鑫|xing 省胜星腥猩惺兴刑型形邢行醒幸杏性姓研陉荇荥擤饧悻硎|xiong 宪兄凶胸匈汹雄熊芎|xiu 臭宿休修羞朽嗅锈秀袖绣莠咻岫馐庥溴煦鸺貅髹|xu 休墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续芋吁馘诩勖圩蓿咻怵洫浒溆顼栩旮肷朐煦盱胥糈醑雩|xuan 暖券轩喧宣悬旋玄选癣眩绚撰亘儇谖萱揎泫洵渲漩璇楦昕暄炫煊碹铉镟痃|xue 削哮靴薛学穴雪血谑噱嚯泶踅鳕|xun 荤浚梭潭勋熏循旬询寻驯巡殉汛训讯逊迅巽郇埙荀荨蕈薰峋徇狻獯恂悛洵浔逡曛窨醺鑫鲟|ya 歇邪压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶御札轧伢垭揠吖岈迓娅琊桠氩砑睚痖|yan 癌俺淡广狠蔫铅涎羡巡焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殷淫厣赝剡俨偃兖讠谳阽郾鄢埏埯芫菸揞崦庵恹闫阏洇湮滟妍嫣琰檐晏氤胭腌焱罨筵酽趼魇餍鼹|yang 昂殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾英映徉怏泱炀烊恙蛘鞅|yao 侥么疟陶邀腰妖瑶摇尧遥窑谣姚咬舀药要耀由幼约钥夭爻吆崤崾徭徼洮瀹幺珧杳轺曜肴铫鹞窈繇鳐|ye 喝射墅咽椰噎耶爷野冶也页掖业叶曳腋夜液拽靥谒邺揶晔烨铘|yi 艾怠迭蛾疙姬崎蛇失施巳台叹尾熙夕泄焉噎也一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎印丿刈劓仡佚佗佾诒圪圯坨埸懿苡荑薏弈奕挹掎弋呓咦咿嗌噫峄嶷猗饴怿怡悒洫漪迤驿缢殪轶贻犄欹旖焱熠眙钇镒镱痍瘗癔翊衤袂蜴舣羿翳酏黝黟|yin 币垦听烟言壹沂茵荫因殷音阴姻吟银淫寅饮尹引隐印众胤鄞廴圻垠堙芩茚吲喑狺夤洇湮氤铟瘾窨蚓霪龈|ying 逞景央英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔荥莺萦蓥撄哽嘤膺滢潆瀛瑛璎楹媵鹦瘿颍罂|yo 哟唷|yong 容拥佣臃痈庸雍踊蛹咏泳涌永恿勇用遇俑壅墉蕹喁慵邕镛甬臾鳙饔|you 泅扰幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑坳莠莜莸尢呦囿宥柚猷牖铕疣聱蚰蚴蝣蝤繇鱿黝鼬|yu 奥懊澳或亏舒王蔚尉梧吾衙迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭苑粥禺毓伛俣谀谕萸菸菀蓣揄唷喁噢圄圉崛嵛狳饫馀庾阈汩鬻妪妤纡瑜栩昙昱觎毹腴腧欤於煜煨熨燠肀聿钰鹆鹬瘐瘀窬窳蜍蜮蝓竽臾舁雩龉|yuan 穿捐阮宛鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院允垸塬芫掾圜沅涓媛瑗橼爰眢畹鸢螈箢鼋|yue 块乐蜕曰约越跃钥岳粤月悦阅龠哕瀹妁栎樾刖钺蠖|yun 均温尹员怨耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽愠媪纭韫殒昀氲熨筠|za 匝砸杂咱扎咋籴拶咂|zai 才栽哉灾宰载再在仔崽甾|zan 咱攒暂赞拶湔瓒昝簪糌趱錾|zang 藏赃脏葬奘戕驵臧|zao 槽草窖遭糟凿藻枣早澡蚤躁噪造皂灶燥唣|ze 侧措责择则泽咋仄赜啧帻迮昃稷笮箦舴|zei 贼|zen 怎僭谮|zeng 增憎曾赠综缯甑罾锃|zha 册插查扎喳渣札轧铡闸眨栅榨乍炸诈柞揸吒咤哳喋馇怍楂膪砟痄蚱齄|zhai 翟祭择摘斋宅窄债寨砦瘵豸|zhan 颤袒瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃躔|zhang 长樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑|zhao 朝嘲淖蚤招昭找沼赵照罩兆肇召爪着诏啁棹晁钊笊|zhe 堵遮折哲蛰辙者锗蔗这浙着乇谪陬耷摺嘀柘辄磔鹧褚褶蜇螫赭|zhei 这|zhen 趁唇鼎慎珍斟真甄砧臻贞针侦枕疹诊震振镇阵帧圳坫蓁浈溱缜桢椹榛轸戡赈胗朕祯畛稹鸩箴|zheng 承丁趟蒸挣睁征狰争怔整拯正政帧症郑证诤峥徵瞠钲铮筝鲭|zhi 埃抵积伎祁识氏恃芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮氐陟郅埴芷摭帙徵夂忮彘咫骘栉枳栀桎轵轾昵耆贽胝膣祉祗砥黹雉鸷痣蛭絷酯跖踬踯豸觯|zhong 董童中盅忠钟衷终种肿重仲众冢夂忪锺蚣螽舯踵|zhou 育舟周州洲诌粥轴肘帚咒皱宙昼骤注祝啄侏荮啁喙鬻妯纣绉柚胄碡籀舳酎|zhu 除斗逗宁泞属术庶予之珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻茁阻丶伫侏邾苎茱洙渚潴澍杼楮槠橥炷铢疰瘃蚰竺箸舳翥躅麈|zhua 挝抓爪|zhuai 拽转|zhuan 传湍专砖转撰赚篆巽啭馔沌颛|zhuang 幢桩庄装妆撞壮状僮奘憧戆艟|zhui 垂隧致椎锥追赘坠缀萑惴骓缒槌隹|zhun 淳屯谆准肫胗盹窀|zhuo 掇缴著捉拙卓桌琢茁酌啄灼浊倬诼擢浞涿濯棹焯禚斫镯箸躅|zi 疵次事吱兹咨资姿滋淄孜紫仔籽滓子自渍字谘茈呲嵫姊孳缁甾梓辎赀恣眦锱秭耔笫粢趑觜訾龇鲻髭|zong 从鬃棕踪宗综总纵偬枞腙粽|zou 邹走奏揍诹陬鄹驺楱鲰|zu 淬租足卒族祖诅阻组俎菹啐嘁镞蹴|zuan 赚钻纂攥缵躜|zui 摧堆咀嘴醉最罪蕞羧觜|zun 蹲尊遵撙樽鳟|zuo 醋撮挫凿乍琢昨左佐柞做作坐座阼唑嘬怍迮胙祚砟笮酢";
	var PY_MAP = null;
	function pyOf(ch) {
		if (!PY_MAP) {
			PY_MAP = /* @__PURE__ */ new Map();
			PY_SRC.split("|").forEach((g) => {
				const sp = g.indexOf(" "), syl = g.slice(0, sp);
				for (const c of g.slice(sp + 1)) {
					const a = PY_MAP.get(c);
					if (a) a.push(syl);
					else PY_MAP.set(c, [syl]);
				}
			});
		}
		return PY_MAP.get(ch) || null;
	}
	var pyFuzz = (s) => s.replace(/^([zcs])h/, "$1").replace(/([aei])ng$/, "$1n");
	function pySame(a, b, fuzzy) {
		if (!a || !b || a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (a[i] === b[i]) continue;
			const pa = pyOf(a[i]), pb = pyOf(b[i]);
			if (!pa || !pb) return false;
			if (!pa.some((x) => pb.some((y) => x === y || fuzzy && pyFuzz(x) === pyFuzz(y)))) return false;
		}
		return true;
	}
	function DD() {
		const d = SET.dict || (SET.dict = {});
		d.fix = d.fix || {};
		d.same = d.same || {};
		d.no = d.no || {};
		d.nost = d.nost || {};
		return d;
	}
	dictionaryState.PPL_CNT = null;
	var PPL_FIRST = null;
	dictionaryState.DICT_T = null;
	dictionaryState.STORE_CORES = null;
	function dictChanged() {
		scheduleSave();
	}
	var REL_GROUPS = [
		[
			"姐姐",
			"我姐",
			"老姐",
			"姐"
		],
		[
			"哥哥",
			"我哥",
			"老哥",
			"哥"
		],
		[
			"妹妹",
			"我妹",
			"老妹"
		],
		[
			"弟弟",
			"我弟",
			"老弟"
		],
		[
			"妈妈",
			"我妈",
			"老妈",
			"妈"
		],
		[
			"爸爸",
			"我爸",
			"老爸",
			"爸"
		],
		["奶奶", "我奶"],
		["爷爷", "我爷"],
		["外婆", "姥姥"],
		["外公", "姥爷"]
	];
	var REL_OF = /* @__PURE__ */ new Map();
	REL_GROUPS.forEach((g) => g.forEach((n) => REL_OF.set(n, g)));
	var COMMON_W = [
		"一下",
		"一会",
		"一起",
		"一样",
		"我们",
		"你们",
		"他们",
		"她们",
		"大家",
		"别人",
		"自己",
		"这个",
		"那个",
		"时候",
		"什么",
		"怎么",
		"东西",
		"事情",
		"家里",
		"公司",
		"老师",
		"孩子",
		"对象",
		"同事",
		"同学",
		"朋友"
	];
	function pplCounts() {
		if (dictionaryState.PPL_CNT) return dictionaryState.PPL_CNT;
		const m = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
		walk((d, e) => {
			if (!e.text || e.state === "migrated") return;
			const ns = new Set(parseCompanionsRaw(e.text).filter((n) => n !== "独自"));
			if (e.delegate && e.delegate.to) ns.add(e.delegate.to);
			ns.forEach((n) => {
				m.set(n, (m.get(n) || 0) + 1);
				if (!f.has(n) || parseKey(d) < parseKey(f.get(n))) f.set(n, d);
			});
		});
		PPL_FIRST = f;
		dictionaryState.PPL_CNT = m;
		return m;
	}
	function canonPerson(n) {
		if (!n || n === "独自") return n;
		const d = DD();
		let x = d.same[n] || d.fix[n] || n;
		if (/^[A-Za-z]/.test(x)) {
			const c = pplCounts(), lx = x.toLowerCase();
			let best = null;
			c.forEach((v, k) => {
				if (k.toLowerCase() === lx && (!best || v > best.v || v === best.v && parseKey(PPL_FIRST.get(k)) < parseKey(PPL_FIRST.get(best.n)))) best = {
					n: k,
					v
				};
			});
			if (best) x = best.n;
		}
		const g = REL_OF.get(x);
		if (g) {
			const c = pplCounts();
			let best = null;
			g.forEach((m2) => {
				const v = c.get(m2) || 0;
				if (!v) return;
				if (!best || v > best.v || v === best.v && parseKey(PPL_FIRST.get(m2)) < parseKey(PPL_FIRST.get(best.n))) best = {
					n: m2,
					v
				};
			});
			if (best) x = best.n;
		}
		return x;
	}
	var STORE_SUFFIX_RE = /(小馆|餐厅|饭店|饭馆|菜馆|酒家|酒楼|食堂|面馆|粉馆|火锅|烧烤|烤肉|小吃|大排档|料理|私房菜|家常菜|小厨|厨房|咖啡馆|咖啡|茶餐厅|酒馆|甜品|奶茶)店?$/;
	function storeCoreOf(s) {
		const c = String(s || "").replace(STORE_SUFFIX_RE, "");
		return c !== s && c.length >= 2 && !CITY_LIST.includes(c) ? c : null;
	}
	function storeCores() {
		if (dictionaryState.STORE_CORES) return dictionaryState.STORE_CORES;
		const m = /* @__PURE__ */ new Map();
		for (const st of storeSet()) {
			const c = storeCoreOf(st);
			if (c && (!m.has(c) || m.get(c).length < st.length)) m.set(c, st);
		}
		dictionaryState.STORE_CORES = m;
		return m;
	}
	function isStoreName(x) {
		return storeSet().has(x) || storeCores().has(x);
	}
	function canonStore(s) {
		if (!s) return s;
		const d = DD();
		let x = d.same[s] || d.fix[s] || s;
		const cs = storeCores();
		if (cs.has(x)) x = cs.get(x);
		return (SET.foodShops || []).find((o) => o.name === s || o.aliases.includes(s) || o.aliases.includes(x))?.name || x;
	}
	var STORE_TRIG_RE = /(?:吃了?|去了?|在|到了?|点了?|叫了?|逛了?)$/;
	function storeLink(t) {
		const d = DD();
		for (const [v, c] of Object.entries(d.same).concat(Object.entries(d.fix))) if (v.length >= 2 && t.includes(v) && isStoreName(c)) return c;
		for (const [c, st] of storeCores()) if (c.length >= 3 && t.includes(c)) return st;
		for (const st of storeSet()) {
			if (st.length !== 2) continue;
			let i = t.indexOf(st);
			while (i >= 0) {
				if (STORE_TRIG_RE.test(t.slice(Math.max(0, i - 3), i))) return st;
				i = t.indexOf(st, i + 1);
			}
		}
		return null;
	}
	function dictTargets() {
		if (dictionaryState.DICT_T) return dictionaryState.DICT_T;
		const d = DD(), pc = pplCounts(), ppl = [];
		pc.forEach((c, n) => {
			if (!/^[一-龥]{2,4}$/.test(n) || REL_OF.has(n) || GENERIC_PPL.includes(n) || d.fix[n] || SET.pplNo && SET.pplNo[n]) return;
			ppl.push({
				n,
				c,
				forms: [n]
			});
		});
		(SET.people || []).forEach((p) => personAliases(p).forEach((n) => {
			if (/^[一-龥]{2,4}$/.test(n) && !ppl.some((o) => o.n === n)) ppl.push({
				n,
				c: 2,
				forms: [n]
			});
		}));
		const idx = storeIndex(), st = [];
		for (const s of storeSet()) {
			if (d.fix[s]) continue;
			const forms = [s], core = storeCoreOf(s);
			if (core) forms.push(core);
			st.push({
				n: s,
				c: (idx[canonStore(s)] || {}).cnt || 1,
				forms
			});
		}
		dictionaryState.DICT_T = {
			ppl,
			st
		};
		return dictionaryState.DICT_T;
	}
	function dictProtected(w, kind) {
		if (REL_OF.has(w) || GENERIC_PPL.includes(w) || CITY_LIST.includes(w) || COMMON_W.includes(w)) return true;
		if (storeSet().has(w) || storeCores().has(w)) return true;
		const c = pplCounts().get(w) || 0;
		return c >= 2 || kind === "s" && c >= 1;
	}
	var FIX_P_TRIG = /(?:和|与|跟|同|陪|约了?|给|找|问|请|帮|带|叫上|送|、)/g;
	var FIX_S_TRIG = /(?:吃了?|去了?|在|到了?|点了?|叫了?|逛了?)/g;
	var FIX_FOLLOW = /^(?:$|[、，,。.！!？?；;\s和与跟及也都一去来吃看玩逛见喝聊说打的在从给请约陪带上下过家店])/;
	function dictFix(s) {
		const T = dictTargets(), d = DD();
		let t = String(s || "");
		const fixes = [];
		const scan = (re, list, kind) => {
			re.lastIndex = 0;
			let m;
			const starts = [];
			while (m = re.exec(t)) starts.push(m.index + m[0].length);
			if (kind === "p") starts.unshift(0);
			starts.sort((a, b) => b - a).forEach((i0) => {
				for (const [v, c] of Object.entries(d.fix)) if (v !== "找找" && v.length && t.startsWith(v, i0) && FIX_FOLLOW.test(t.slice(i0 + v.length, i0 + v.length + 1)) && !d.no[v + ">" + c] && (kind === "p" ? !isStoreName(c) : isStoreName(c))) {
					t = t.slice(0, i0) + c + t.slice(i0 + v.length);
					fixes.push({
						from: v,
						to: c,
						k: kind,
						learned: 1
					});
					return;
				}
				if (i0 === 0) return;
				let best = null, second = null;
				list.forEach((o) => o.forms.forEach((f) => {
					const L = f.length, w = t.substr(i0, L);
					if (w === "找找" || L < 2 || w.length !== L || w === f) return;
					if (!FIX_FOLLOW.test(t.slice(i0 + L, i0 + L + 1)) || d.no[w + ">" + f] || dictProtected(w, kind)) return;
					const lv = pySame(w, f, false) ? 2 : o.c >= 2 && pySame(w, f, true) ? 1 : 0;
					if (!lv) return;
					const x = {
						sc: lv * 1e5 + o.c * 10 + L,
						lv,
						w,
						f,
						L,
						c: o.c,
						n: o.n
					};
					if (!best || x.sc > best.sc) {
						if (best && best.n !== x.n) second = best;
						best = x;
					} else if (x.n !== best.n && (!second || x.sc > second.sc)) second = x;
				}));
				if (!best) return;
				if (second && second.lv === best.lv && second.c * 2 > best.c) return;
				t = t.slice(0, i0) + best.f + t.slice(i0 + best.L);
				fixes.push({
					from: best.w,
					to: best.f,
					k: kind
				});
			});
		};
		scan(FIX_P_TRIG, T.ppl, "p");
		scan(FIX_S_TRIG, T.st, "s");
		return {
			text: t,
			fixes
		};
	}
	function dictLearnEdit(a, b) {
		a = String(a || "");
		b = String(b || "");
		if (!a || !b || a === b || a.length !== b.length) return null;
		let p = 0;
		while (p < a.length && a[p] === b[p]) p++;
		let s = 0;
		while (s < a.length - p && a[a.length - 1 - s] === b[b.length - 1 - s]) s++;
		const mid = a.length - p - s;
		if (mid < 1 || mid > 6) return null;
		const T = dictTargets(), d = DD(), pc = pplCounts(), cands = [];
		T.ppl.forEach((o) => cands.push({
			f: o.n,
			k: "p"
		}));
		T.st.forEach((o) => o.forms.forEach((f) => cands.push({
			f,
			k: "s"
		})));
		const cover = (txt, f, cb) => {
			let i = txt.indexOf(f);
			while (i >= 0) {
				if (i <= p && i + f.length >= p + mid && cb(i)) return true;
				i = txt.indexOf(f, i + 1);
			}
			return false;
		};
		for (const x of cands) {
			if (x.f.length < 2) continue;
			let got = null;
			cover(b, x.f, (i) => {
				const old = a.substr(i, x.f.length);
				if (old !== x.f && pySame(old, x.f, true) && (pc.get(old) || 0) <= 1 && !storeSet().has(old)) {
					got = old;
					return true;
				}
				return false;
			});
			if (got) {
				d.fix[got] = x.f;
				delete d.no[got + ">" + x.f];
				dictChanged();
				return {
					from: got,
					to: x.f
				};
			}
		}
		for (const x of cands) {
			if (x.f.length < 2) continue;
			let got = null;
			cover(a, x.f, (i) => {
				const nw = b.substr(i, x.f.length);
				if (nw !== x.f && pySame(nw, x.f, true) && !dictProtected(nw, x.k)) {
					got = nw;
					return true;
				}
				return false;
			});
			if (got) {
				d.no[got + ">" + x.f] = 1;
				if (d.fix[got] === x.f) delete d.fix[got];
				dictChanged();
				return {
					no: got,
					to: x.f
				};
			}
		}
		return null;
	}
	function parseCompanionsRaw(t) {
		t = String(t || "");
		if (/独自|一个人/.test(t)) return ["独自"];
		const out = [];
		const add = (n) => {
			n = pplClean(n);
			if (n && (/^[A-Za-z]/.test(n) ? n.length <= 12 : n.length <= 6) && !PPL_BLACK.includes(n) && !out.includes(n) && !(SET.pplNo && SET.pplNo[n])) out.push(n);
		};
		extractPplList(t).forEach(add);
		const known = peopleSet();
		const names = /* @__PURE__ */ new Set([...known, ...(SET.people || []).flatMap((p) => [p.name, ...p.nick || []])]);
		for (const n of names) if (n && ([
			"去",
			"去了",
			"到",
			"到了"
		].some((v) => [
			"家",
			"那儿",
			"那里"
		].some((place) => t.includes(v + n + place))) || t.includes("找" + n))) add(n);
		for (const hit of t.matchAll(/(?:去了?|到了?)(老[\u4e00-\u9fff]|小[\u4e00-\u9fff])(?:家|那儿|那里)/g)) add(hit[1]);
		for (const n of known) if (n && PPL_PREPS.some((pp) => t.includes(pp + n))) add(n);
		for (const g of GENERIC_PPL) if (PPL_PREPS.some((pp) => t.includes(pp + g))) add(g);
		const re = /[和与跟同]/g;
		let m;
		while (m = re.exec(t)) {
			let i = m.index + 1, guard = 0;
			while (i < t.length && guard++ < 12) {
				let hit = null;
				for (const n of known) if (n.length >= 2 && t.startsWith(n, i) && (!hit || n.length > hit.length)) hit = n;
				if (!hit) {
					for (const r2 of REL_OF.keys()) if (r2.length >= 2 && t.startsWith(r2, i) && (!hit || r2.length > hit.length)) hit = r2;
				}
				if (!hit) break;
				add(hit);
				i += hit.length;
				const sep = t.slice(i).match(/^\s*[、,，和与跟]\s*/);
				if (!sep) break;
				i += sep[0].length;
			}
		}
		return out;
	}
	function pplClean(n) {
		n = String(n || "").trim();
		const m = n.match(/^([A-Za-z][A-Za-z.'-]{1,11})[\u4e00-\u9fa5]{1,2}$/);
		return m ? m[1] : n;
	}
	function parseCompanions(t) {
		const raw = parseCompanionsRaw(t);
		if (raw[0] === "独自") return raw;
		const out = [];
		raw.forEach((n) => {
			const c = canonPerson(n);
			if (c && !out.includes(c)) out.push(c);
		});
		return out;
	}
	function parseVerdict(t) {
		t = String(t).replace(/避雷([\u4e00-\u9fa5]{2,5})(?=[，,。！!；;\s]|$)/g, (m, x) => /[店家的这那]/.test(x) || CITY_LIST.some((c) => x.includes(c)) ? m : "＃＃" + x);
		const masked = t.replace(/（[^）]*）|\([^)]*\)/g, (m) => "＃".repeat(m.length));
		const scan = (src, negs, poss) => {
			let best = null;
			for (const w of negs) {
				const i = src.indexOf(w);
				if (i >= 0 && (!best || i < best.i)) best = {
					i,
					w,
					neg: true
				};
			}
			for (const w of poss) {
				if (src.includes("不" + w) || src.includes("没那么" + w) || src.includes("没有那么" + w)) continue;
				const i = src.indexOf(w);
				if (i >= 0 && (!best || i < best.i)) best = {
					i,
					w,
					neg: false
				};
			}
			return best;
		};
		const mid = masked.match(/(^|[，,。！!；;\s、])一般(?=[，,。！!；;\s~～]|$)/);
		return scan(masked, V_NEG1, V_POS1) || scan(t, V_NEG1, V_POS1) || scan(masked, V_NEG2, V_POS2) || scan(t, V_NEG2, V_POS2) || (mid ? {
			i: mid.index + mid[1].length,
			w: "一般",
			neg: false
		} : null);
	}
	var TPLS = {
		work: {
			n: "工作",
			unit: "件"
		},
		movie: {
			n: "电影",
			unit: "部"
		},
		food: {
			n: "美食",
			unit: "家"
		},
		book: {
			n: "读书",
			unit: "本"
		},
		money: {
			n: "花钱",
			unit: "笔"
		},
		fun: {
			n: "娱乐",
			unit: "次"
		},
		study: {
			n: "学习",
			unit: "件"
		}
	};
	var TPL_ORDER = [
		null,
		"work",
		"study",
		"movie",
		"food",
		"book",
		"money",
		"fun"
	];
	function tplOf(g) {
		const o = SET.gtpl[g];
		if (o !== void 0) return o || null;
		if (/工作|上班|公司|项目|业务|事业/.test(g)) return "work";
		if (/电影|观影|影视/.test(g)) return "movie";
		if (/美食|餐|吃/.test(g)) return "food";
		if (/读书|阅读|书/.test(g)) return "book";
		if (/花钱|消费|记账|账单|开销/.test(g)) return "money";
		if (/休闲|娱乐|玩乐|好玩/.test(g)) return "fun";
		if (/学习|课程|考试|作业|备考|考研|考证|上课/.test(g)) return "study";
		return null;
	}
	function rngOf(sel) {
		const ta = TODAY.split(".").map(Number);
		if (!sel || sel === "all") return null;
		if (sel === "year") return {
			from: parseKey(ta[0] + ".1.1"),
			to: parseKey(ta[0] + ".12.31"),
			label: ta[0] + "年"
		};
		if (sel === "lastyear") return {
			from: parseKey(ta[0] - 1 + ".1.1"),
			to: parseKey(ta[0] - 1 + ".12.31"),
			label: ta[0] - 1 + "年"
		};
		if (sel === "month") {
			const ld = new Date(ta[0], ta[1], 0).getDate();
			return {
				from: parseKey(ta[0] + "." + ta[1] + ".1"),
				to: parseKey(ta[0] + "." + ta[1] + "." + ld),
				label: ta[1] + "月"
			};
		}
		return sel;
	}
	function tplRows(g, rng) {
		const rows = [];
		walk((d, e) => {
			if (!(e.groups && e.groups.includes(g))) return;
			if (rng) {
				const t = parseKey(d);
				if (t < rng.from || t > rng.to) return;
			}
			rows.push({
				d,
				e,
				p: parseEntry(e)
			});
		});
		rows.sort((a, b) => parseKey(b.d) - parseKey(a.d));
		return rows;
	}
	function tplStats(tpl, rows) {
		const S = {
			tiles: [],
			ranks: [],
			ranksTitle: "",
			bars: [],
			merges: null,
			quote: null
		};
		const q = rows.find((r) => r.p.verdict || r.p.score != null);
		if (q) S.quote = {
			text: (q.e.text || "").slice(0, 42),
			d: q.d
		};
		if (tpl === "movie" || tpl === "book") {
			const map = {};
			rows.forEach((r) => {
				if (!r.p.title) return;
				const c = canonTitle(r.p.title);
				const o = map[c] || (map[c] = {
					name: c,
					score: null,
					withs: null,
					cnt: 0,
					d: r.d,
					id: r.e._id
				});
				o.cnt++;
				if (r.p.score != null && (o.score == null || r.p.score > o.score)) o.score = r.p.score;
				if (r.p.withs && !o.withs) o.withs = r.p.withs;
			});
			const titles = Object.values(map);
			const scored = titles.filter((x) => x.score != null);
			const wsub = (x) => x.withs ? x.withs[0] === "独自" ? "独自" : "和" + x.withs.slice(0, 3).join("、") : "";
			const nmx = (x) => x.name + (x.cnt >= 2 ? " ×" + x.cnt : "");
			const li = (arr) => arr.map((x) => ({
				nm: nmx(x),
				sub: (x.cnt >= 2 ? "看了" + x.cnt + "次 " : "") + wsub(x),
				sc: x.score != null ? x.score + "分" : "",
				d: x.d,
				id: x.id
			}));
			const wcnt = {};
			rows.forEach((r) => (r.p.withs || []).forEach((w) => {
				if (w !== "独自") wcnt[w] = (wcnt[w] || 0) + 1;
			}));
			const topW = Object.entries(wcnt).sort((a, b) => b[1] - a[1])[0];
			const wRows = topW ? rows.filter((r) => (r.p.withs || []).includes(topW[0])).map((r) => ({
				nm: r.p.title ? "《" + r.p.title + "》" : (r.e.text || "").slice(0, 16),
				sub: fmtShort(r.d) + "日",
				sc: r.p.score != null ? r.p.score + "分" : "",
				d: r.d,
				id: r.e._id
			})) : [];
			S.tiles = [
				[
					titles.length,
					TPLS[tpl].unit,
					tpl === "movie" ? "看过" : "读过",
					li(titles)
				],
				[
					scored.length ? (scored.reduce((a, x) => a + x.score, 0) / scored.length).toFixed(1) : "—",
					"分",
					"平均打分",
					li(scored.slice().sort((a, b) => b.score - a.score))
				],
				[
					scored.filter((x) => x.score >= 10).length,
					TPLS[tpl].unit,
					"满分神作",
					li(scored.filter((x) => x.score >= 10))
				],
				topW ? [
					topW[1],
					"次",
					"和" + topW[0].slice(0, 3),
					wRows
				] : [
					rows.length,
					"条",
					"记录",
					null
				]
			];
			S.ranksTitle = "高分榜";
			S.ranks = scored.sort((a, b) => b.score - a.score).slice(0, 5).map((x, i) => ({
				no: String(i + 1),
				cls: i === 0 ? "g" : "",
				nm: nmx(x),
				sub: wsub(x),
				sc: x.score + "分",
				scCls: "",
				d: x.d,
				id: x.id
			}));
			const names = titles.map((x) => x.name);
			outer: for (let i = 0; i < names.length; i++) for (let j = 0; j < names.length; j++) {
				if (i === j) continue;
				const a = names[i], b = names[j];
				if (a.length >= 2 && a.length < b.length && b.includes(a) && !SET.aliasNo[a + "|" + b]) {
					S.merges = [a, b];
					break outer;
				}
			}
		}
		if (tpl === "food") {
			const map = {};
			const wm = {};
			rows.forEach((r) => {
				if (!r.p.store) return;
				if (r.p.want) {
					if (!wm[r.p.store]) wm[r.p.store] = r;
					return;
				}
				const o = map[r.p.store] || (map[r.p.store] = {
					name: r.p.store,
					cnt: 0,
					v: null,
					vNeg: false,
					tier: null,
					tv: null,
					tsc: null,
					city: null,
					price: null,
					delivery: false,
					d: r.d,
					id: r.e._id
				});
				o.cnt++;
				if (!o.v && r.p.verdict) {
					o.v = r.p.verdict;
					o.vNeg = !!r.p.vNeg;
				}
				if (!o.tier) {
					const tr = foodTier(r.p);
					if (tr) {
						o.tier = tr;
						o.tv = r.p.verdict || null;
						o.tsc = r.p.score != null ? r.p.score : null;
					}
				}
				if (!o.city && r.p.city) o.city = r.p.city;
				if (r.p.delivery) o.delivery = true;
				if (o.price == null && r.p.prices) o.price = r.p.prices[0];
			});
			const stores = Object.values(map);
			const tCls = (t) => t || "";
			const sli = (arr) => arr.map((x) => ({
				nm: x.name,
				sub: (x.delivery ? "外卖" : x.city || "") + (x.price != null ? " ¥" + x.price : "") + (x.cnt > 1 ? " 去过" + x.cnt + "次" : "") + (x.tsc != null && x.tv ? " “" + x.tv + "”" : ""),
				sc: x.tsc != null ? x.tsc + "分" : x.tv || "",
				scCls: tCls(x.tier),
				d: x.d,
				id: x.id
			}));
			const bao = stores.filter((x) => x.tier === "bao").sort((a, b) => (b.tsc || 0) - (a.tsc || 0) || b.cnt - a.cnt);
			stores.filter((x) => x.tier === "jia").sort((a, b) => b.cnt - a.cnt);
			const lei = stores.filter((x) => x.tier === "lei");
			const mute = stores.filter((x) => !x.tier).sort((a, b) => b.cnt - a.cnt);
			const SI = storeIndex();
			const want = Object.values(wm).filter((r) => !map[r.p.store] && !SI[r.p.store]).map((r) => {
				const c = r.p.delivery ? "外卖" : r.p.city || dayCity(r.d) || null;
				return {
					nm: r.p.store,
					sub: [c || "", fmtKey(r.d) + " 收的"].filter(Boolean).join(" · "),
					sc: "想吃",
					scCls: "want",
					d: r.d,
					id: r.e._id,
					city: c
				};
			});
			S.tiles = [
				[
					stores.length,
					"家",
					"去过",
					sli(stores.slice().sort((a, b) => b.cnt - a.cnt))
				],
				[
					bao.length,
					"家",
					"宝藏",
					sli(bao)
				],
				[
					lei.length,
					"家",
					"避雷",
					sli(lei)
				],
				[
					want.length,
					"家",
					"想吃",
					want
				]
			];
			if (mute.length) S.noteLink = {
				txt: "还有 " + mute.length + " 家没表态 · 补个分数或一句话就归档",
				items: sli(mute)
			};
			S.ranksTitle = "宝藏榜";
			S.ranks = sli(bao.slice(0, 4)).map((x, i) => Object.assign(x, {
				no: String(i + 1),
				cls: i === 0 ? "g" : ""
			}));
			if (lei.length) {
				S.ranksBTitle = "避雷榜";
				S.ranksB = sli(lei.slice(0, 3)).map((x, i) => Object.assign(x, {
					no: String(i + 1),
					cls: "r"
				}));
			}
			const ccnt = {};
			S.cityMap = {};
			stores.forEach((x) => {
				const bucket = x.delivery ? "外卖" : x.city;
				if (!bucket) return;
				ccnt[bucket] = (ccnt[bucket] || 0) + 1;
				(S.cityMap[bucket] = S.cityMap[bucket] || []).push(sli([x])[0]);
			});
			want.forEach((x) => {
				if (!x.city) return;
				ccnt[x.city] = (ccnt[x.city] || 0) + 1;
				(S.cityMap[x.city] = S.cityMap[x.city] || []).push(x);
			});
			S.bars = Object.entries(ccnt).sort((a, b) => b[1] - a[1]).slice(0, 6);
		}
		if (tpl === "money") {
			let n = 0, sum = 0, mx = 0;
			rows.forEach((r) => (r.p.prices || []).forEach((v) => {
				n++;
				sum += v;
				mx = Math.max(mx, v);
			}));
			S.tiles = [
				[
					rows.length,
					"条",
					"记录",
					null
				],
				[
					n,
					"笔",
					"识别到金额",
					null
				],
				[
					"¥" + Math.round(sum),
					"",
					"合计",
					null
				],
				[
					"¥" + Math.round(mx),
					"",
					"最大一笔",
					null
				]
			];
		}
		return S;
	}
	function dictPeopleList() {
		const pc = pplCounts(), g = /* @__PURE__ */ new Map();
		pc.forEach((c, n) => {
			if (n === "独自" || SET.pplNo && SET.pplNo[n] || GENERIC_PPL.includes(n) || /\d/.test(n)) return;
			const cn = canonPerson(n), o = g.get(cn) || {
				n: cn,
				c: 0,
				als: /* @__PURE__ */ new Set()
			};
			o.c += c;
			if (n !== cn) o.als.add(n);
			g.set(cn, o);
		});
		const d = DD();
		Object.entries(d.same).forEach(([v, c]) => {
			const o = g.get(c);
			if (o) o.als.add(v);
		});
		return [...g.values()].sort((a, b) => b.c - a.c || a.n.localeCompare(b.n));
	}
	function dictStoreList() {
		const idx = storeIndex(), d = DD(), out = [], seen = /* @__PURE__ */ new Set();
		for (const s of storeSet()) {
			const cn = canonStore(s);
			if (seen.has(cn) || d.nost[cn]) continue;
			seen.add(cn);
			const als = /* @__PURE__ */ new Set();
			for (const [c, st] of storeCores()) if (st === cn && (c.length >= 3 || storeSet().has(c))) als.add(c);
			Object.entries(d.same).concat(Object.entries(d.fix)).forEach(([v, c]) => {
				if (canonStore(c) === cn && v !== cn) als.add(v);
			});
			out.push({
				n: cn,
				c: (idx[cn] || {}).cnt || 0,
				als
			});
		}
		return out.sort((a, b) => b.c - a.c || a.n.localeCompare(b.n));
	}
	function dictFixCount() {
		const d = DD();
		return Object.keys(d.fix).length + Object.keys(d.same).length + Object.keys(d.no).length;
	}
	function renderDict() {
		const d = DD();
		const tip = document.createElement("div");
		tip.className = "vt-tip";
		tip.style.marginTop = "14px";
		tip.textContent = "从你写过的记录里自动长出来，不用维护。发给啾啾、「说一段」时听错的名字照这里改；点 ↺ 改回过的，它记住以后别这样改。";
		view.appendChild(tip);
		const rows = [];
		Object.entries(d.fix).forEach(([v, c]) => rows.push({
			t: "「" + v + "」→ " + c,
			s: "听错的字 · 自动改",
			del: () => {
				delete d.fix[v];
			}
		}));
		Object.entries(d.same).forEach(([v, c]) => rows.push({
			t: "「" + v + "」＝ " + c,
			s: "另一种叫法 · 不改字",
			del: () => {
				delete d.same[v];
			}
		}));
		Object.keys(d.no).forEach((k) => {
			const a = k.split(">");
			rows.push({
				t: "「" + a[0] + "」不改成 " + a[1],
				s: "你改回过",
				del: () => {
					delete d.no[k];
				}
			});
		});
		view.appendChild(sectionLabel("纠正 · " + rows.length + " 条"));
		rows.forEach((r) => {
			const el = document.createElement("div");
			el.className = "set-row dc-row";
			el.innerHTML = "<span>" + vEsc(r.t) + "</span><span class=\"sub\" style=\"margin-left:auto\">" + vEsc(r.s) + "</span><button class=\"gm-btn dc-x\">✕</button>";
			el.querySelector(".dc-x").onclick = (ev) => {
				ev.stopPropagation();
				r.del();
				dictChanged();
				render();
				toast("删掉了");
			};
			view.appendChild(el);
		});
		const add = document.createElement("button");
		add.className = "chip primary-action";
		add.id = "dcAdd";
		add.textContent = "＋ 加一条：A 就是 B";
		add.style.margin = "8px 0 4px";
		add.onclick = () => dictAddSheet("", "");
		view.appendChild(add);
		const ppl = dictPeopleList();
		view.appendChild(sectionLabel("人 · " + ppl.length + " · 点名字：加叫法 / 不当人名"));
		const pw = document.createElement("div");
		pw.className = "dc-chips";
		ppl.forEach((o) => {
			const b = document.createElement("button");
			b.className = "dc-chip";
			b.dataset.n = o.n;
			b.innerHTML = vEsc(o.n) + " <i>" + o.c + "</i>" + (o.als.size ? "<small> · 也叫 " + vEsc([...o.als].join("、")) + "</small>" : "");
			b.onclick = () => dictItemSheet("p", o.n);
			pw.appendChild(b);
		});
		view.appendChild(pw);
		const sts = dictStoreList();
		view.appendChild(sectionLabel("店 · " + sts.length + " · 点店名：加简称 / 不当店名"));
		const sw = document.createElement("div");
		sw.className = "dc-chips";
		sts.forEach((o) => {
			const b = document.createElement("button");
			b.className = "dc-chip";
			b.dataset.n = o.n;
			b.innerHTML = vEsc(o.n) + " <i>" + o.c + "</i>" + (o.als.size ? "<small> · 简称 " + vEsc([...o.als].join("、")) + "</small>" : "");
			b.onclick = () => dictItemSheet("s", o.n);
			sw.appendChild(b);
		});
		view.appendChild(sw);
	}
	function dictAddSheet(v0, c0) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">加一条 · A 就是 B</div><label class=\"ss-f\"><span>说法</span><input id=\"dcV\" placeholder=\"比如：布尔 / 老姐 / 陈先进\" value=\"" + escAttr(v0) + "\"></label><label class=\"ss-f\"><span>其实是</span><input id=\"dcC\" placeholder=\"比如：不二 / 我姐 / 陈先进小馆\" value=\"" + escAttr(c0) + "\"></label><div class=\"gs-chips\" id=\"dcK\" style=\"margin:10px 0 0\"><button class=\"gs-chip on\" data-k=\"fix\">听错的字 · 以后自动改</button><button class=\"gs-chip\" data-k=\"same\">另一种叫法 · 只认不改字</button></div><button class=\"gs-done\" id=\"dcSave\">存下</button>";
		let kind = "fix";
		S.querySelectorAll("#dcK [data-k]").forEach((b) => b.onclick = () => {
			kind = b.dataset.k;
			S.querySelectorAll("#dcK [data-k]").forEach((x) => x.classList.toggle("on", x === b));
		});
		$("#dcSave").onclick = () => {
			const v = $("#dcV").value.trim(), c = $("#dcC").value.trim();
			if (!v || !c || v === c) {
				toast("两边都写上，而且不一样");
				return;
			}
			const d = DD();
			delete d.fix[v];
			delete d.same[v];
			delete d.no[v + ">" + c];
			d[kind][v] = c;
			dictChanged();
			closeSheet();
			render();
			toast(kind === "fix" ? "记住了：以后「" + v + "」自动改成「" + c + "」" : "记住了：「" + v + "」就是「" + c + "」");
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		setTimeout(() => {
			const i = v0 ? $("#dcC") : $("#dcV");
			if (i) i.focus();
		}, 60);
	}
	function dictItemSheet(kind, n) {
		const S = $("#gsheet");
		S.innerHTML = "<div class=\"gs-title\">「" + vEsc(n) + "」</div><label class=\"ss-f\"><span>" + (kind === "p" ? "另一种叫法" : "简称") + "</span><input id=\"dcAl\" placeholder=\"" + (kind === "p" ? "比如：老姐" : "比如：陈先进") + "\"></label><div class=\"gs-new\" style=\"margin-top:10px\"><button class=\"gm-btn\" id=\"dcAlSave\" style=\"flex:1;padding:10px\">存下这个" + (kind === "p" ? "叫法" : "简称") + "</button></div><button class=\"gm-btn\" id=\"dcIgn\" style=\"width:100%;padding:10px;margin-top:10px;color:var(--ink-soft)\">" + (kind === "p" ? "这不是人名，别认它" : "这不是店名，别认它") + "</button>";
		$("#dcAlSave").onclick = () => {
			const v = $("#dcAl").value.trim();
			if (!v || v === n) {
				toast("写一个不一样的说法");
				return;
			}
			const d = DD();
			delete d.fix[v];
			d.same[v] = n;
			dictChanged();
			closeSheet();
			render();
			toast("记住了：「" + v + "」就是「" + n + "」");
		};
		$("#dcIgn").onclick = () => {
			if (kind === "p") {
				SET.pplNo = SET.pplNo || {};
				SET.pplNo[n] = 1;
			} else DD().nost[n] = 1;
			dictChanged();
			closeSheet();
			render();
			toast("好，不再把「" + n + "」当" + (kind === "p" ? "人名" : "店名"));
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	// src/modules/food/index.js
	var foodState = {};
	var FOOD_CAT = [
		["火锅", /火锅|涮/],
		["寿喜烧", /寿喜烧/],
		["烤肉", /烤肉|韩式烤|烤五花/],
		["烧烤", /烧烤|撸串|串串|烤串|烤鱼/],
		["日料", /寿司|刺身|日料|拉面|乌冬|三文鱼/],
		["西餐", /西餐|牛排|意面|天使面|披萨|汉堡|西兰花/],
		["麻辣烫", /麻辣烫|冒菜/],
		["面馆", /牛肉面|面馆|拌面|炒面|油泼面|青菜面|鸡蛋面/],
		["川菜", /川菜|四川|辣椒炒肉|水煮|川味/],
		["云南菜", /云南/],
		["海鲜", /海鲜|蟹|生蚝/],
		["羊汤", /羊汤|羊肉汤/],
		["小吃", /肉夹馍|沙县|小吃|煎饼|灌饼|包子/],
		["甜品饮品", /甜品|奶茶|咖啡|冰茶|双皮奶|蛋糕/],
		["家常菜", /家常菜|饭店|小馆|菜馆|食堂/]
	];
	var HOT_CATS = [
		"火锅",
		"寿喜烧",
		"烤肉",
		"烧烤",
		"麻辣烫",
		"面馆",
		"川菜",
		"羊汤"
	];
	var LIKE_WORDS = V_POS1.concat([
		"大满足",
		"惊艳",
		"好吃",
		"很香",
		"神作",
		"yyds",
		"推荐",
		"值得"
	]);
	var MEH_WORDS = [
		"还行",
		"凑合",
		"很一般",
		"一般般",
		"味道一般",
		"中规中矩",
		"一般"
	];
	var TIP_RE = /(\d+|[一二三四五六七八九十两])点(去|到|前|以前|之前)|排队|预约|订位|适合.{0,6}人|(\d|[一二三四五六两俩])人.{0,6}适合|分着吃|吃不完|打卡送|人均|早点去|早去|要等位|等位/;
	foodState.STORE_IDX = null;
	foodState.WANT_IDX = null;
	function storeClauses(t) {
		return String(t || "").replace(/（[^）]*）|\([^)]*\)/g, "").split(/[，,。！!；;？?\n]/).map((s) => s.trim()).filter(Boolean);
	}
	function cleanClause(c) {
		return String(c || "").replace(/^(早饭|午饭|晚饭|晚餐|午餐|夜宵|下午茶)\s*/, "").replace(/[“"『「][^”"』」]*[”"』」]/g, "").replace(/^(?:和|跟|与)[^，。！!？?吃喝]{1,14}?(?:一起)?(?:吃了|吃|喝了)/, "").replace(/^(?:(?:吃了|点了|去了|在)\s*)+/, "").replace(/(花了|花费)?\s*[¥￥]?\d+(\.\d+)?\s*[元块]/g, "").replace(/\s+/g, "").replace(/^[，、·:：\-]+|[，、·:：\-]+$/g, "");
	}
	function dayCity(k) {
		const p = appState.PAGES[k];
		if (!p) return null;
		if (p.wx && p.wx.c && p.wx.c !== "我这儿") return p.wx.c;
		let c = null;
		walkPage(k, (e) => {
			if (!c && e.text) {
				const pc = parseEntry(e).city;
				if (pc) c = pc;
			}
		});
		return c;
	}
	function foodCatOf(o) {
		const src = o.name + " " + o.recs.map((r) => r.e.text || "").join(" ");
		for (const [nm, re] of FOOD_CAT) if (re.test(src)) return nm;
		return "";
	}
	function storeIndex() {
		if (foodState.STORE_IDX) return foodState.STORE_IDX;
		const map = Object.create(null);
		walk((k, e) => {
			if (!e.text) return;
			if (e.sym === "task" && e.state !== "done") return;
			const p = parseEntry(e);
			if (!p.store) return;
			if (p.want) return;
			const o = map[p.store] || (map[p.store] = {
				name: p.store,
				days: /* @__PURE__ */ new Set(),
				recs: []
			});
			o.days.add(k);
			o.recs.push({
				k,
				e,
				p
			});
		});
		Object.values(map).forEach((o) => {
			o.recs.sort((a, b) => parseKey(b.k) - parseKey(a.k) || (b.e._id || 0) - (a.e._id || 0));
			o.cnt = o.days.size;
			o.last = o.recs[0].k;
			const op = o.recs.find((r) => r.p.verdict || r.p.score != null);
			o.op = op || null;
			o.avoid = !!(op && foodTier(op.p) === "lei");
			let like = false;
			if (op && !o.avoid) {
				if (op.p.score != null) like = op.p.score >= 7;
				else like = !MEH_WORDS.includes(op.p.verdict) && LIKE_WORDS.includes(op.p.verdict);
			}
			o.like = like;
			o.tier = op ? foodTier(op.p) : null;
			o.gold = o.tier === "bao";
			const cr = o.recs.find((r) => r.p.city);
			o.city = cr ? cr.p.city : null;
			if (!o.city) for (const r of o.recs) {
				const c = dayCity(r.k);
				if (c) {
					o.city = c;
					break;
				}
			}
			o.delivery = o.recs.some((r) => foodMode(r.e) === "外卖");
			o.cat = foodCatOf(o);
			applyShopDetails(o);
		});
		foodState.STORE_IDX = map;
		return map;
	}
	function wantIndex() {
		if (foodState.WANT_IDX) return foodState.WANT_IDX;
		const idx = storeIndex(), map = Object.create(null);
		walk((k, e) => {
			if (!e.text || e.state === "migrated") return;
			const p = parseEntry(e);
			if (!p.want || !p.store || idx[p.store]) return;
			(map[p.store] || (map[p.store] = {
				name: p.store,
				want: true,
				tier: "want",
				recs: [],
				cnt: 0
			})).recs.push({
				k,
				e,
				p
			});
		});
		Object.values(map).forEach((o) => {
			o.recs.sort((a, b) => parseKey(b.k) - parseKey(a.k) || (b.e._id || 0) - (a.e._id || 0));
			o.last = o.recs[0].k;
			o.since = o.recs[o.recs.length - 1].k;
			o.delivery = o.recs.some((r) => foodMode(r.e) === "外卖");
			const cr = o.recs.find((r) => r.p.city);
			o.city = o.delivery ? null : cr ? cr.p.city : dayCity(o.since) || null;
			o.cat = foodCatOf(o);
			applyShopDetails(o);
		});
		foodState.WANT_IDX = map;
		return map;
	}
	function storeQuote(o) {
		for (const r of o.recs) {
			const t = r.e.text || "";
			const pm = t.match(/([一-龥A-Za-z]{2,10}?)\s*\d*(?:\.\d+)?\s*[元块]?\s*（([^）]{2,30})）/);
			if (pm && o.like && LIKE_WORDS.some((w) => pm[2].includes(w))) return {
				text: pm[1] + pm[2].replace(/[，,]\s*$/, ""),
				k: r.k
			};
			const words = o.avoid ? V_NEG : LIKE_WORDS;
			const cs = storeClauses(t).filter((c) => words.some((w) => c.includes(w)) && !/没那么|没有那么/.test(c)).map(cleanClause).filter((c) => c.length >= 2);
			if (cs.length) return {
				text: clipT([...new Set(cs)].join("，"), 30),
				k: r.k
			};
		}
		return null;
	}
	function storeTip(o) {
		for (const r of o.recs) {
			const srcs = [r.e.text || ""].concat((r.e.children || []).map((c) => c.text || ""));
			for (const t of srcs) {
				const cs = storeClauses(t).filter((c) => TIP_RE.test(c)).map(cleanClause).filter((c) => c.length >= 2);
				if (cs.length) return clipT(cs.join("，"), 24);
			}
		}
		return null;
	}
	function storeDishes(o) {
		const must = [], avoid = [];
		const BAD = /^(烤肉|火锅|烧烤|西餐|日料|自助|东西|味道|环境|服务|这家|他家|整体)$/;
		const push = (arr, x) => {
			x = String(x || "").replace(/^(突然觉得|觉得|感觉|就是|招牌|有个|要有|他家|这家|点的|的)/, "").trim();
			if ((x.length >= 2 || /^[粥面汤饭鱼虾蟹鸡鸭]$/.test(x)) && x.length <= 8 && !BAD.test(x) && x !== o.name && !must.includes(x) && !avoid.includes(x)) arr.push(x);
		};
		o.recs.forEach((r) => {
			const t = r.e.text || "";
			let m;
			const re = /([一-龥A-Za-z]{2,10}?)\s*\d*(?:\.\d+)?\s*[元块]?\s*（([^）]{1,30})）/g;
			while (m = re.exec(t)) if (V_NEG.some((w) => m[2].includes(w))) push(avoid, m[1]);
			else if (LIKE_WORDS.some((w) => m[2].includes(w))) push(must, m[1]);
			const lm = t.match(/避雷([一-龥]{2,5})(?=[，,。！!；;\s]|$)/);
			if (lm && !/[店家的这那]/.test(lm[1])) push(avoid, lm[1]);
			(t.match(/必点([^·，,。！!\s]{1,10})/g) || []).forEach((x) => push(must, x.slice(2)));
			(t.match(/别点([^·，,。！!\s]{1,10})/g) || []).forEach((x) => push(avoid, x.slice(2)));
			storeClauses(t).map(cleanClause).forEach((c) => {
				const a = c.match(/^([一-龥]{1,10}?)(?:不好吃|难吃|拉胯|太油了?|太咸了?|不入味|很一般|没那么好吃了?|没有那么好吃了?)$/);
				if (a) {
					push(avoid, a[1]);
					return;
				}
				const g = c.match(/^([一-龥]{1,10}?)(?:很?好吃|很香|好香|绝了|惊艳|必点|一绝)$/);
				if (g) push(must, g[1]);
			});
		});
		return {
			must: must.slice(0, 2),
			avoid: avoid.slice(0, 2)
		};
	}
	function storeLast(o) {
		const r = o.recs.find((x) => (x.p.withs || []).length || (x.p.prices || []).length) || o.recs[0];
		const w = (r.p.withs || []).filter((x) => x !== "独自");
		const pc = (r.e.text || "").match(/俩人|两个人|两人|三个人|三人|四个人|四人|五个人|六个人|六人/);
		const pr = (r.p.prices || [])[0];
		return {
			with: w.slice(0, 2).join("、"),
			spend: pr != null ? (pc ? pc[0].replace("俩人", "两个人") + " " : "") + "¥" + pr : "",
			alone: (r.p.withs || [])[0] === "独自"
		};
	}
	function daysAgo(k) {
		return Math.round((parseKey(TODAY) - parseKey(k)) / 864e5);
	}
	function agoCN(n) {
		return n <= 0 ? "今天" : n === 1 ? "昨天" : n < 14 ? n + " 天前" : n < 60 ? Math.round(n / 7) + " 周没去了" : Math.round(n / 30) + " 个月没去了";
	}
	function pickContext(o, f) {
		const d = wxCached();
		if (d) {
			const a = wxAdvice(d);
			if ((a.dd <= -3 || d.hi <= 15) && HOT_CATS.includes(o.cat)) return {
				i: houseMark("food"),
				t: (a.dd <= -3 ? "今天降温 " + -a.dd + "°，" : "天冷，") + o.cat + "正合适"
			};
			if (d.hi >= 30 && ["日料", "甜品饮品"].includes(o.cat)) return {
				i: houseMark("food"),
				t: "天热，吃点清爽的"
			};
			if (a.rainy && o.delivery) return {
				i: "☂",
				t: "下雨天，点外卖不用出门"
			};
		}
		const n = daysAgo(o.last);
		if (n >= 30) return {
			i: lineIcon("time"),
			t: agoCN(n).replace("没去了", "没去，想它了吧")
		};
		return null;
	}
	function wantReasons(o) {
		return o.recs.slice(0, 2).map((r) => ({
			i: "“",
			h: "<q>" + vEsc(clipT(r.e.text || "", 30)) + "</q><small>—— 你 " + fmtKey(r.k) + " 写的</small>"
		}));
	}
	function pickReasons(o) {
		const R = [];
		const q = storeQuote(o);
		if (q) R.push({
			i: "“",
			h: "<q>" + vEsc(q.text) + "</q><small>—— 你 " + fmtKey(q.k) + " 说的</small>"
		});
		const tip = storeTip(o);
		if (tip) R.push({
			i: houseMark("notes"),
			h: "你提醒过自己：<b>" + vEsc(tip) + "</b>"
		});
		const ds = storeDishes(o);
		if (ds.must.length || ds.avoid.length) R.push({
			i: houseMark("food"),
			h: (ds.must.length ? "必点" + vEsc(ds.must.join("、")) : "") + (ds.must.length && ds.avoid.length ? " · " : "") + (ds.avoid.length ? "<span class=\"pk-neg\">" + vEsc(ds.avoid.join("、")) + " 别点</span>" : "")
		});
		const L = storeLast(o);
		if (L.with || L.spend) R.push({
			i: houseMark("people"),
			h: (L.with ? "上次和 " + vEsc(L.with) : L.alone ? "上次自己去的" : "上次") + (L.spend ? "，" + vEsc(L.spend) : "")
		});
		const cx = pickContext(o);
		if (cx) R.push({
			i: cx.i,
			h: vEsc(cx.t)
		});
		return R.slice(0, 4);
	}
	var pickSt = null;
	function pickDefaults() {
		if (!pickSt) pickSt = {
			city: null,
			mode: "all",
			hot: null,
			seen: [],
			cur: null,
			n: 0,
			first: null,
			went: null
		};
		if (pickSt.city === null) {
			const c = wxCity();
			pickSt.city = c && c.n !== "我这儿" ? c.n : "";
		}
		if (pickSt.hot === null) {
			const d = wxCached();
			pickSt.hot = !!(d && (wxAdvice(d).dd <= -3 || d.hi <= 15));
		}
		return pickSt;
	}
	function pickPool(f) {
		const ok = (o) => (f.mode === "all" || (f.mode === "take" ? o.delivery : !o.delivery)) && (!f.city || !o.city || o.city === f.city);
		return [...Object.values(storeIndex()), ...Object.values(wantIndex())].filter((o) => (o.gold || o.want) && ok(o));
	}
	function pickWeight(o, f) {
		let w = 2;
		const n = o.want ? 10 : daysAgo(o.last);
		w *= n < 3 ? .3 : n < 7 ? .7 : n > 30 ? 1.5 : 1;
		if (f.hot && HOT_CATS.includes(o.cat)) w *= 2.2;
		return w;
	}
	function pickDraw() {
		const f = pickDefaults();
		let pool = pickPool(f).filter((o) => !f.seen.includes(o.name));
		if (!pool.length) {
			f.seen = [];
			pool = pickPool(f);
		}
		if (!pool.length) return null;
		let v = Math.random() * pool.reduce((s, o) => s + pickWeight(o, f), 0), hit = pool[pool.length - 1];
		for (const o of pool) {
			v -= pickWeight(o, f);
			if (v <= 0) {
				hit = o;
				break;
			}
		}
		f.seen.push(hit.name);
		f.cur = hit.name;
		f.n++;
		if (!f.first) f.first = hit.name;
		f.went = null;
		f.anim = true;
		return hit;
	}
	function pickCardHTML(o) {
		const lab = o.want ? "想吃" : "★ 宝藏";
		const meta = [o.delivery ? "外卖" : o.cat || "", o.city || ""].filter(Boolean).join(" · ");
		const anim = pickSt && pickSt.anim;
		if (pickSt) pickSt.anim = false;
		const n = daysAgo(o.last);
		return "<div class=\"pk-card" + (o.gold ? " gold" : "") + (o.want ? " want" : "") + (anim ? " flip" : "") + "\"><div class=\"pk-top\"><span class=\"pk-rare\">" + vEsc(lab) + "</span><span class=\"pk-meta\">" + vEsc(meta || "城市没记") + "</span></div><div class=\"pk-name\">" + vEsc(o.name) + "</div>" + (o.want ? "<div class=\"pk-sub\">还没去过 · " + fmtKey(o.since) + " 收的</div><div class=\"pk-lab\">想吃的理由</div>" : "<div class=\"pk-sub\">去过 " + o.cnt + " 次 · 上次 " + fmtKey(o.last) + (n >= 14 ? "，" + agoCN(n) : "") + "</div><div class=\"pk-lab\">吃的理由</div>") + (o.want ? wantReasons(o) : pickReasons(o)).map((x) => "<div class=\"pk-r\"><span class=\"i\">" + x.i + "</span><div>" + x.h + "</div></div>").join("") + "</div>";
	}
	function renderPick() {
		const f = pickDefaults();
		const idx = storeIndex();
		const avoidN = Object.values(idx).filter((o) => o.avoid).length;
		const pool = pickPool(f);
		const cities = wxCfg().cities.map((c) => c.n).filter((n) => n !== "我这儿");
		const bar = document.createElement("div");
		bar.className = "rp-tabs";
		bar.style.marginTop = "12px";
		const chip = (txt, on, fn, cls) => {
			const b = document.createElement("button");
			b.className = "chip" + (on ? " on" : "") + (cls ? " " + cls : "");
			b.textContent = txt;
			b.onclick = fn;
			bar.appendChild(b);
			return b;
		};
		chip("城市 · " + (f.city || "不限城市") + (cities.length ? " ⇄" : ""), !!f.city, () => {
			const ring = cities.concat([""]);
			const i = ring.indexOf(f.city);
			f.city = ring[(i + 1) % ring.length];
			f.cur = null;
			f.seen = [];
			render();
		});
		[
			["dine", "堂食"],
			["take", "外卖"],
			["all", "都行"]
		].forEach(([k, nm]) => chip(nm, f.mode === k, () => {
			f.mode = k;
			f.cur = null;
			f.seen = [];
			render();
		}));
		chip("想吃热乎的", f.hot, () => {
			f.hot = !f.hot;
			render();
		}, f.hot ? "pk-warm" : "");
		chip("＋ 记一家店", false, () => storeSheet());
		view.appendChild(bar);
		const pl = document.createElement("div");
		pl.className = "pk-pool";
		const nW = pool.filter((o) => o.want).length, nB = pool.length - nW;
		pl.textContent = pool.length ? "从你的 " + [nB ? nB + " 家宝藏" : "", nW ? nW + " 家想吃" : ""].filter(Boolean).join("、") + "里抽" + (avoidN ? " · 避雷的 " + avoidN + " 家永远不会出现" : "") : "阿饱：还没找到可抽的店，记一家宝藏店或想吃的试试。";
		view.appendChild(pl);
		if (!pool.length) {
			const em = document.createElement("div");
			em.className = "empty-hint";
			em.style.textAlign = "center";
			em.style.padding = "26px 6px";
			em.innerHTML = jjImg("ask", 72) + "<div style=\"margin-top:10px;line-height:1.8\">吃到宝藏店，写一句「在「店名」吃了…宝藏 / 会回购」<br>想去的写「想去吃「店名」」<br>或者点上面「＋ 记一家店」<br>宝藏和想吃进卡池，避雷的永远不会出现" + (f.city ? "<br><span style=\"color:var(--ink-faint)\">（现在只看" + vEsc(f.city) + "，点城市可以换成不限城市）</span>" : "") + "</div>";
			view.appendChild(em);
			return;
		}
		const o = f.cur ? pool.find((x) => x.name === f.cur) || null : null;
		const deck = document.createElement("div");
		deck.className = "pk-deck";
		deck.innerHTML = "<div class=\"pk-back b1\"></div><div class=\"pk-back b2\"></div>" + (o ? pickCardHTML(o) : "<div class=\"pk-cover\">" + jjImg("ask", 88) + "<div class=\"pk-q\">今天吃什么？</div><div class=\"pk-hint\">" + pool.length + " 张店卡 · 点一下翻一张</div></div>");
		view.appendChild(deck);
		if (!o) deck.onclick = () => {
			pickDraw();
			render();
		};
		const acts = document.createElement("div");
		acts.className = "pk-acts";
		if (o) acts.innerHTML = "<button class=\"pk-go\" id=\"pkGo\"" + (f.went === o.name ? " disabled" : "") + ">" + (f.went === o.name ? "✓ 已放进今天的待办" : "就它了") + "</button><button class=\"pk-re\" id=\"pkRe\">↻ 换一张</button>";
		else acts.innerHTML = "<button class=\"pk-go\" id=\"pkDraw\" style=\"flex:1\">抽一张</button>";
		view.appendChild(acts);
		if ($("#pkDraw")) $("#pkDraw").onclick = () => {
			pickDraw();
			render();
		};
		if ($("#pkRe")) $("#pkRe").onclick = () => {
			pickDraw();
			render();
		};
		if ($("#pkGo") && f.went !== o.name) $("#pkGo").onclick = () => pickGo(o);
		const nt = document.createElement("div");
		nt.className = "pk-note";
		nt.textContent = !o ? "宝藏和想吃都会出 · 理由全是你自己写过的话" : f.went === o.name ? "吃完点 ✓，啾啾问一句怎么样，点一下就记好了" : f.n >= 3 && f.first && f.first !== o.name ? "抽了 " + f.n + " 张了 · 第一张「" + f.first + "」其实也不错？" : "点「就它了」，今天的待办里多一条，吃完点 ✓ 顺手说句好不好吃";
		view.appendChild(nt);
	}
	function pickGo(o) {
		const h = (/* @__PURE__ */ new Date()).getHours();
		const slot = h < 10 ? "早饭" : h < 15 ? "午饭" : h < 21 ? "晚饭" : "夜宵";
		P().plan.push({
			sym: "task",
			state: "open",
			text: slot + "：「" + o.name + "」",
			pick: o.name,
			_id: ++appState.uid
		});
		pickDefaults().went = o.name;
		scheduleSave();
		toast("就它了！在今天的待办里 · 吃完点 ✓");
		render();
	}
	function pickDone(t) {
		dismissKB();
		const S = $("#qsheet");
		const nm = t.pick, o0 = storeIndex()[nm];
		let wasWant = !o0 || o0.recs.every((r) => r.e === t);
		if (wasWant) {
			wasWant = false;
			walk((k, e) => {
				if (!wasWant && e.text && e !== t) {
					const q = parseEntry(e);
					if (q.want && q.store === nm) wasWant = true;
				}
			});
		}
		S.innerHTML = "<div class=\"gs-title\">✓ " + (wasWant ? "第一次吃" : "吃完了") + " ·「" + vEsc(nm) + "」怎么样？</div><div class=\"gs-chips\" id=\"pdChips\">" + [
			["宝藏", "★ 宝藏"],
			["一般般", "一般"],
			["避雷", "避雷"]
		].map(([w, lab]) => "<button class=\"gs-chip\" data-w=\"" + w + "\">" + lab + "</button>").join("") + "</div><input id=\"pdLine\" class=\"qdate\" placeholder=\"一句话（可不填）：点了什么、下次注意啥\" style=\"margin-top:10px\"><div class=\"gs-new\" style=\"margin-top:4px\"><button class=\"gm-btn\" id=\"pdSkip\" style=\"flex:1;padding:10px\">跳过</button><button class=\"gm-btn\" id=\"pdSave\" style=\"flex:1;padding:10px;background:var(--accent);color:#fff;border-color:var(--accent)\">记下</button></div>";
		let sel = null;
		S.querySelectorAll("[data-w]").forEach((b) => b.onclick = () => {
			sel = b.dataset.w;
			S.querySelectorAll("[data-w]").forEach((x) => x.classList.toggle("on", x === b));
		});
		$("#pdSkip").onclick = () => closeQSheet();
		$("#pdSave").onclick = () => {
			const line = $("#pdLine").value.trim();
			if (!sel && !line) {
				toast("点一个评价，或写一句再记");
				return;
			}
			const fg = foodGroupName() || "美食";
			if (!appState.extraGroups.includes(fg) && !foodGroupName()) appState.extraGroups.push(fg);
			P().flow.push({
				sym: "event",
				text: "「" + nm + "」" + (sel ? " " + sel : "") + (line ? "：" + line : ""),
				groups: [fg],
				_id: ++appState.uid
			});
			scheduleSave();
			closeQSheet();
			toast(sel === "避雷" ? "记下了 · 以后不会再抽到它" : wasWant ? "记下了 · 从想吃挪到去过了" : "记下了 · 去过次数 +1");
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
		placeToolbar();
	}
	function foodPrice(e) {
		return typeof e.foodPerPerson === "number" && Number.isFinite(e.foodPerPerson) && e.foodPerPerson >= 0 ? e.foodPerPerson : null;
	}
	function foodPriceLabel(e) {
		const n = foodPrice(e);
		return n === null ? "" : "人均 ¥" + n;
	}
	function foodReadPrice(input) {
		const raw = input.value.trim();
		if (!raw) return null;
		if (!/^\d+(?:\.\d{1,2})?$/.test(raw) || !Number.isFinite(Number(raw))) {
			toast("人均填 0 或正数，最多两位小数");
			input.focus();
			return false;
		}
		return Number(raw);
	}
	function foodMode(e) {
		if (e.foodMode !== void 0) return ["堂食", "外卖"].includes(e.foodMode) ? e.foodMode : "";
		return parseEntry(e).delivery ? "外卖" : "";
	}
	function modeField(value = "") {
		return "<div class=\"ss-f\"><span>就餐方式</span><div id=\"foodMode\" class=\"gs-chips\" role=\"group\" aria-label=\"就餐方式\">" + ["堂食", "外卖"].map((v) => "<button type=\"button\" class=\"gs-chip" + (value === v ? " on" : "") + "\" data-mode=\"" + v + "\" aria-pressed=\"" + (value === v) + "\">" + v + "</button>").join("") + "</div></div>";
	}
	function bindModes() {
		const buttons = $("#foodMode").querySelectorAll("[data-mode]");
		for (const b of buttons) b.onclick = () => {
			const select = !b.classList.contains("on");
			for (const x of buttons) {
				const on = select && x === b;
				x.classList.toggle("on", on);
				x.setAttribute("aria-pressed", String(on));
			}
		};
		return () => $("#foodMode [aria-pressed=\"true\"]")?.dataset.mode || "";
	}
	function applyShopDetails(o) {
		const shop = (SET.foodShops || []).find((s) => s.name === o.name);
		const recent = o.recs.find((r) => r.e.foodMode !== void 0 || foodMode(r.e));
		o.mode = recent ? foodMode(recent.e) : "";
		o.price = foodPrice(o.recs.find((r) => foodPrice(r.e) !== null)?.e || {});
		if (!shop) return;
		o.city = shop.city;
		o.mode = shop.mode;
		o.price = shop.price;
		o.delivery = o.mode === "外卖";
		if (o.recs.some((r) => r.e._id > shop.ratedThrough && (r.p.verdict || r.p.score != null || r.p.want))) return;
		o.want = shop.choice === "想吃";
		o.gold = shop.choice === "宝藏";
		o.avoid = shop.choice === "避雷";
		o.tier = o.want ? "want" : o.gold ? "bao" : o.avoid ? "lei" : "been";
		o.like = o.gold;
	}
	function foodDetail(o) {
		const records = o.recs;
		openTileSheet(vEsc(o.name), records.map(({ k, e }) => ({
			nm: vEsc(e.text),
			sub: vEsc(fmtKey(k) + (foodPriceLabel(e) ? " · " + foodPriceLabel(e) : "")),
			d: k,
			id: e._id
		})));
		const edit = document.createElement("button");
		edit.className = "gm-btn food-edit";
		edit.textContent = "编辑";
		edit.onclick = () => storeSheet(o.name, o);
		$("#gsheet .gs-title").appendChild(edit);
	}
	function renderFoodOverview() {
		const g = navigationState.cur.g, box = document.createElement("section");
		box.className = "food-overview";
		box.innerHTML = "<div class=\"food-actions\"><button class=\"chip on\" id=\"foodAdd\">＋ 记美食</button><button class=\"chip\" id=\"foodPick\">今天吃什么</button></div><div class=\"food-menu\"><div class=\"food-heading\"><h2>我的店单</h2><button class=\"food-textbtn\" id=\"foodMap\">美食地图 ↗</button></div><div class=\"food-filters\" role=\"group\" aria-label=\"店单筛选\"></div><div id=\"foodStoreList\"></div><details class=\"food-more\"><summary>更多</summary><div class=\"rp-tabs\"><button class=\"chip\" id=\"foodShare\">分享店单</button><button class=\"chip\" id=\"foodHelp\">怎么记</button>" + (SET.mods.mealLog === true ? "<button class=\"chip\" id=\"foodMeals\">三餐记录</button>" : "") + "</div></details></div>";
		box.querySelector("#foodAdd").onclick = () => storeSheet();
		box.querySelector("#foodPick").onclick = () => {
			navigationState.cur = {
				name: "food",
				tab: "pick"
			};
			render();
		};
		box.querySelector("#foodMap").onclick = () => openFoodMap(g);
		box.querySelector("#foodShare").onclick = () => openShare(statsPayload(g, "food", tplStats("food", tplRows(g, null)), "all"));
		box.querySelector("#foodHelp").onclick = () => openHowSheet("food");
		const meal = box.querySelector("#foodMeals");
		if (meal) meal.onclick = () => {
			navigationState.cur = {
				name: "food",
				tab: "meal"
			};
			render();
		};
		const belongs = (o) => o.recs.some((r) => (r.e.groups || []).includes(g));
		const stores = [...Object.values(storeIndex()), ...Object.values(wantIndex())].filter(belongs);
		const lists = {
			been: stores.filter((o) => !o.want),
			bao: stores.filter((o) => o.gold),
			lei: stores.filter((o) => o.avoid),
			want: stores.filter((o) => o.want)
		};
		if (!lists[navigationState.cur.foodFilter]) navigationState.cur.foodFilter = "been";
		const list = box.querySelector("#foodStoreList"), filters = box.querySelector(".food-filters");
		[
			["been", "去过"],
			["bao", "宝藏"],
			["lei", "避雷"],
			["want", "想吃"]
		].forEach(([key, label]) => {
			const b = document.createElement("button");
			b.className = "food-filter" + (navigationState.cur.foodFilter === key ? " on" : "");
			b.dataset.foodFilter = key;
			b.setAttribute("aria-pressed", String(navigationState.cur.foodFilter === key));
			b.innerHTML = label + "<small>" + lists[key].length + "</small>";
			b.onclick = () => {
				navigationState.cur.foodFilter = key;
				navigationState.cur.foodExpanded = false;
				navigationState.navFromBack = true;
				render();
			};
			filters.appendChild(b);
		});
		const items = lists[navigationState.cur.foodFilter].slice().sort((a, b) => parseKey(b.last) - parseKey(a.last));
		if (!items.length) {
			const hint = document.createElement("div");
			hint.className = "empty-hint";
			hint.textContent = {
				been: "吃过的店会记在这里。",
				bao: "喜欢的店，记一句「宝藏」。",
				lei: "不想再去的店，记一句「避雷」。",
				want: "想尝的新店，先记在这里。"
			}[navigationState.cur.foodFilter] || "还没有这种就餐方式的记录。";
			list.appendChild(hint);
		}
		items.slice(0, navigationState.cur.foodExpanded ? items.length : 5).forEach((o) => {
			const row = document.createElement("button");
			row.className = "food-store";
			const tier = o.want ? "want" : o.gold ? "bao" : o.avoid ? "lei" : "been";
			row.dataset.tier = tier;
			const meta = [
				o.city,
				o.mode,
				o.cnt ? "去过 " + o.cnt + " 天" : fmtKey(o.since || o.last) + " 收的"
			].filter(Boolean).join(" · ");
			row.innerHTML = "<span class=\"food-store-top\"><b>" + vEsc(o.name) + "</b><span class=\"food-stamp\">" + {
				want: "想吃",
				bao: "宝藏",
				lei: "避雷",
				been: "吃过"
			}[tier] + "</span></span><small><span>" + vEsc(meta) + "</span>" + (o.price !== null ? "<span class=\"food-store-price\">人均 ¥" + vEsc(String(o.price)) + "</span>" : "") + "</small>";
			row.onclick = () => foodDetail(o);
			list.appendChild(row);
		});
		if (items.length > 5) {
			const more = document.createElement("button");
			more.className = "food-textbtn";
			more.textContent = navigationState.cur.foodExpanded ? "收起店单" : "展开其余 " + (items.length - 5) + " 家";
			more.onclick = () => {
				navigationState.cur.foodExpanded = !navigationState.cur.foodExpanded;
				navigationState.navFromBack = true;
				render();
			};
			list.appendChild(more);
		}
		view.appendChild(box);
	}
	function storeSheet(prefill, shop = null) {
		const S = $("#gsheet"), iso = (k) => k.split(".").map((n, i) => i ? String(n).padStart(2, "0") : n).join("-");
		S.innerHTML = "<div class=\"gs-title\">记美食</div><label class=\"ss-f\"><span>店名</span><input id=\"ssName\" placeholder=\"必填\" value=\"" + escAttr(prefill || "") + "\"></label><div class=\"gs-chips\" id=\"ssV\" style=\"margin:12px 0\">" + [
			["宝藏", "宝藏"],
			["吃过", "吃过"],
			["避雷", "避雷"],
			["想吃", "想吃"]
		].map(([v, t]) => "<button class=\"gs-chip" + (v === "吃过" ? " on" : "") + "\" data-w=\"" + v + "\">" + t + "</button>").join("") + "</div>" + modeField(shop?.mode) + "<label class=\"ss-f\"><span>人均 ¥</span><input id=\"ssPerPerson\" inputmode=\"decimal\" placeholder=\"参考价，可不填\"></label><div class=\"food-price-help\">供下次选店参考，不计入账房。</div><label class=\"food-note\" for=\"ssLine\">一句话</label><textarea class=\"vt-in\" id=\"ssLine\" rows=\"2\" placeholder=\"想点什么、喜欢哪道菜……可不填\"></textarea><details class=\"food-form-more\"><summary>补充城市、日期</summary><label class=\"ss-f\"><span>城市</span><input id=\"ssCity\" placeholder=\"可不填\"></label><label class=\"ss-f\"><span>日期</span><input id=\"ssDate\" type=\"date\" max=\"" + iso(TODAY) + "\" value=\"" + iso(TODAY) + "\"></label></details><button class=\"gs-done\" id=\"ssSave\">记下</button>";
		let choice = shop ? shop.want ? "想吃" : shop.gold ? "宝藏" : shop.avoid ? "避雷" : "吃过" : "吃过";
		if (shop) {
			S.querySelector(".gs-title").textContent = "编辑店铺";
			$("#ssSave").textContent = "保存修改";
			$("#ssPerPerson").value = shop.price ?? "";
			$("#ssCity").value = shop.city || "";
			$("#ssLine").remove();
			S.querySelector(".food-note").remove();
			const more = S.querySelector("details");
			more.before($("#ssCity").closest("label"));
			more.remove();
			for (const b of S.querySelectorAll("[data-w]")) b.classList.toggle("on", b.dataset.w === choice);
		}
		const selectedMode = bindModes();
		S.querySelectorAll("#ssV [data-w]").forEach((b) => b.onclick = () => {
			choice = b.dataset.w;
			S.querySelectorAll("#ssV [data-w]").forEach((x) => x.classList.toggle("on", x === b));
		});
		$("#ssSave").onclick = () => {
			const name = $("#ssName").value.trim().replace(/[「」“”"『』]/g, "");
			if (!name) {
				toast("先写店名");
				$("#ssName").focus();
				return;
			}
			const price = foodReadPrice($("#ssPerPerson"));
			if (price === false) return;
			const city = $("#ssCity").value.trim();
			if (shop) {
				if (name !== shop.name && (storeIndex()[name] || wantIndex()[name] || (SET.foodShops || []).some((s) => s.aliases.includes(name) && s.name !== shop.name))) {
					toast("已有同名店铺");
					return;
				}
				snapshot("编辑店铺");
				const shops = SET.foodShops ||= [];
				let profile = shops.find((o) => o.name === shop.name);
				if (!profile) {
					profile = { aliases: [] };
					shops.push(profile);
				}
				if (name !== shop.name && !profile.aliases.includes(shop.name)) profile.aliases.push(shop.name);
				Object.assign(profile, {
					name,
					choice,
					mode: selectedMode(),
					price,
					city,
					ratedThrough: appState.uid
				});
				scheduleSave();
				render();
				foodDetail(storeIndex()[name] || wantIndex()[name]);
				return;
			}
			const date = $("#ssDate").value;
			if (!date || date > iso(TODAY)) {
				toast("选今天或之前的日期");
				S.querySelector("details").open = true;
				return;
			}
			const key = date.split("-").map(Number).join("."), note = $("#ssLine").value.trim();
			const text = "「" + name + "」 " + choice + (note ? "：" + note : "") + (city ? " · " + city : "");
			const g = navigationState.cur.g && tplOf(navigationState.cur.g) === "food" ? navigationState.cur.g : foodGroupName() || "美食";
			snapshot("记美食", key);
			if (!foodGroupName() && !appState.extraGroups.includes(g)) appState.extraGroups.push(g);
			const e = {
				sym: "event",
				text,
				groups: [g],
				_id: ++appState.uid,
				foodChoice: {
					value: choice,
					text
				}
			};
			e.foodMode = selectedMode();
			if (city) e.foodCity = city;
			if (price !== null) e.foodPerPerson = price;
			if (!appState.PAGES[key]) appState.PAGES[key] = {
				plan: [],
				flow: []
			};
			appState.PAGES[key].flow.push(e);
			scheduleSave();
			closeSheet();
			render();
			toast(choice === "想吃" ? "记下了 · 收进想吃，吃什么里能抽到它" : "记下了");
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function foodPriceSheet(e) {
		const S = $("#gsheet"), price = foodPrice(e);
		S.innerHTML = "<div class=\"gs-title\">人均参考 · " + vEsc(parseEntry(e).store || "这条记录") + "</div><label class=\"ss-f\"><span>人均 ¥</span><input id=\"foodPriceEdit\" inputmode=\"decimal\" placeholder=\"留空可清除\" value=\"" + (price === null ? "" : price) + "\"></label>" + modeField(foodMode(e)) + "<div class=\"food-price-help\">修改这条记录的人均参考和就餐方式，不改动实际支出。</div><button class=\"gs-done\" id=\"foodPriceSave\">保存</button>";
		const selectedMode = bindModes();
		$("#foodPriceSave").onclick = () => {
			const n = foodReadPrice($("#foodPriceEdit"));
			if (n === false) return;
			snapshot("修改餐票");
			e.foodMode = selectedMode();
			if (n === null) delete e.foodPerPerson;
			else e.foodPerPerson = n;
			scheduleSave();
			closeSheet();
			render();
			toast(n === null ? "已清除人均参考" : "人均参考已更新");
		};
		S.classList.add("on");
		$("#mask").classList.add("on");
	}
	function foodWarn(e) {
		if (!e.text) return null;
		const p = parseEntry(e);
		if (!p.store) return null;
		const o = storeIndex()[p.store];
		if (!o || !o.avoid || !o.op) return null;
		if (o.op.e === e || p.verdict && V_NEG.includes(p.verdict)) return null;
		const q = storeQuote(o);
		return {
			o,
			txt: "⚠ 避雷 · " + fmtKey(o.op.k) + " 你说：" + clipT(q ? q.text : o.op.p.verdict || "避雷", 16)
		};
	}
	function splitSentences(t) {
		const out = [];
		let buf = "";
		for (const ch of String(t || "")) {
			buf += ch;
			if ("。！？!?\n".includes(ch)) {
				const s = buf.replace(/[。\n]+$/, "").trim();
				if (s) out.push(s);
				buf = "";
			}
		}
		if (buf.trim()) out.push(buf.replace(/[。\n]+$/, "").trim());
		return out.filter((s) => s.replace(/[！？!?\s]/g, "").length >= 3);
	}
	function splitEntry(e) {
		const parts = splitSentences(e.text);
		if (parts.length < 2) return;
		const loc = findEntry(e);
		if (!loc) return;
		snapshot("拆条");
		e.text = parts[0];
		delete e.noSplit;
		commit(e);
		const news = parts.slice(1).map((s) => {
			const ne = {
				sym: e.sym,
				text: s,
				_id: ++appState.uid
			};
			if (e.sym === "task") ne.state = "open";
			if (e.defSym) ne.defSym = true;
			if (e.groups && e.groups.length) ne.groups = [...e.groups];
			commit(ne);
			return ne;
		});
		loc.list.splice(loc.idx + 1, 0, ...news);
		scheduleSave();
		render();
		toast("已拆成 " + parts.length + " 条 · 可撤回");
	}
	// src/core/storage.js
	var storageState = {};
	var tracker = createRecordTracker();
	var photoAliases = /* @__PURE__ */ new Map();
	var newPhotoKeys = /* @__PURE__ */ new Map();
	var photoSerial = 0;
	function photoKey(value) {
		if (typeof value !== "string") return value;
		if (value.startsWith("idb:")) return photoAliases.get(value) || value;
		const id = IMG_DB.map.get(value);
		if (id) return photoAliases.get("idb:" + id) || "idb:" + id;
		if (!newPhotoKeys.has(value)) newPhotoKeys.set(value, "photo:" + ++photoSerial);
		return newPhotoKeys.get(value);
	}
	function healthFingerprint(row) {
		const values = Object.entries(row.values || {}).sort(([a], [b]) => a.localeCompare(b));
		const text = JSON.stringify([
			row.date,
			row.note || "",
			row.createdAt || 0,
			row.value,
			values,
			row.ml,
			row.time,
			row.end
		]);
		let hash = 2166136261;
		for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
		return hash >>> 0;
	}
	function prepareRecords() {
		const records = tracker.prepare(appState, { photoKey });
		const index = [];
		for (const [kind, rows] of Object.entries(appState.HEALTH.records)) for (const row of rows) index.push([
			kind,
			row.id,
			healthFingerprint(row),
			row.updatedAt
		]);
		if (index.length) SET.healthRecordTimes = index;
		else delete SET.healthRecordTimes;
		return records;
	}
	function restoreRecordMetadata() {
		const times = /* @__PURE__ */ new Map();
		for (const item of Array.isArray(SET.healthRecordTimes) ? SET.healthRecordTimes : []) if (Array.isArray(item) && Number.isSafeInteger(item[3])) times.set(item[0] + ":" + item[1], item);
		for (const [kind, rows] of Object.entries(appState.HEALTH.records)) for (const row of rows) {
			const saved = times.get(kind + ":" + row.id);
			if (saved && !row.updatedAt) row.updatedAt = saved[2] === healthFingerprint(row) ? saved[3] : Math.max(Date.now(), saved[3] + 1);
		}
		tracker.accept(tracker.prepare(appState, {
			restore: true,
			photoKey
		}), false);
	}
	var LSKEY = "bujo_local_v1";
	storageState.saveTm = null;
	storageState.PARSE_GEN = 1;
	function jstrip(k, v) {
		if (k === "_pc") return void 0;
		if (typeof v === "string" && v.startsWith("idb:")) return IMG_DB.data.get(v.slice(4)) || v;
		return v;
	}
	function jstripLocal(k, v) {
		if (k === "_pc") return void 0;
		if (typeof v === "string" && v.length > 200 && v.startsWith("data:image/")) {
			let id = IMG_DB.map.get(v);
			if (!id) {
				id = "i" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
				if (newPhotoKeys.has(v)) {
					photoAliases.set("idb:" + id, newPhotoKeys.get(v));
					newPhotoKeys.delete(v);
				}
				IMG_DB.map.set(v, id);
				IMG_DB.data.set(id, v);
				IMG_DB.pending.set(id, v);
			}
			return "idb:" + id;
		}
		return v;
	}
	function scheduleSave() {
		storageState.PARSE_GEN++;
		if (typeof parserState.KNOWN_PPL !== "undefined") parserState.KNOWN_PPL = null;
		if (typeof housesState.ISLE_DEF !== "undefined") housesState.ISLE_DEF = null;
		if (typeof parserState.KNOWN_STORE !== "undefined") parserState.KNOWN_STORE = null;
		foodState.STORE_IDX = null;
		foodState.WANT_IDX = null;
		dictionaryState.PPL_CNT = null;
		dictionaryState.DICT_T = null;
		dictionaryState.STORE_CORES = null;
		clearTimeout(storageState.saveTm);
		storageState.saveTm = setTimeout(() => {
			storageState.saveTm = null;
			saveNow();
		}, 300);
	}
	function saveState() {
		return {
			pages: appState.PAGES,
			extraGroups: appState.extraGroups,
			set: SET,
			seen: appState.SEEN,
			gcolor: appState.GCOLOR,
			notes: appState.NOTES,
			health: appState.HEALTH,
			island: appState.ISLAND
		};
	}
	function lsWrite(js) {
		try {
			if (platform.storage.getItem("bujo_local_v1") !== js) platform.storage.setItem(LSKEY, js);
			return true;
		} catch (_) {
			toast("存储已满：请先导出备份，再删掉一些旧记录", "oops");
			return false;
		}
	}
	function saveNow({ cloud = true } = {}) {
		if (storageState.saveTm) {
			clearTimeout(storageState.saveTm);
			storageState.saveTm = null;
		}
		try {
			mealAutoTagAll();
		} catch (_) {}
		const records = prepareRecords();
		const compact = IMG_DB.ok && IMG_DB.ready;
		const replacer = compact ? jstripLocal : jstrip;
		let js = JSON.stringify(saveState(), replacer);
		const pendingPhotos = compact && (IMG_DB.pending.size || IMG_DB.busy);
		if (!pendingPhotos && js === platform.storage.getItem("bujo_local_v1")) return;
		const cfg = SET.gh;
		if (cloud && cfg?.on && cfg.repo && cfg.token) {
			cfg.pending = (Number(cfg.pending) || 0) + 1;
			js = JSON.stringify(saveState(), replacer);
		}
		if (pendingPhotos ? imgQueueWrite(js) : lsWrite(js)) {
			tracker.accept(records);
			if (cloud) ghSchedule();
		}
	}
	function storageText() {
		const kb = Math.max(1, Math.round((platform.storage.getItem("bujo_local_v1") || "").length / 1024));
		let n = 0, len = 0;
		walk((k, e) => (e.images || []).forEach((v) => {
			n++;
			len += imgUrl(v).length;
		}));
		return "文字 " + kb + " KB" + (n ? " · 照片 " + n + " 张 " + (len / 1048576).toFixed(1) + " MB" : "");
	}
	function restoreStorage() {
		try {
			const raw = platform.storage.getItem(LSKEY);
			if (!raw) {
				SET.mods = {
					meals: true,
					ledger: true
				};
				SET.isle = { on: {
					movie: true,
					book: true,
					fun: false,
					work: false,
					study: false
				} };
			}
			if (raw) {
				const s = JSON.parse(raw);
				appState.PAGES = s.pages || {};
				appState.extraGroups = s.extraGroups || appState.extraGroups;
				delete SET.abuProfile;
				SET.stagePlans = [];
				Object.assign(SET, s.set || {});
				appState.SEEN = s.seen || {};
				appState.GCOLOR = s.gcolor || {};
				appState.NOTES = s.notes || [];
				appState.HEALTH = healthNormalize(s.health);
				appState.ISLAND = islandNormalize(s.island);
			}
		} catch (_) {}
	}
	// src/modules/ledger/income.js
	function settleIncome() {
		return postMonthlyIncome(SET.incomeBook, key2iso(dkey(/* @__PURE__ */ new Date())));
	}
	function ruleForm(rule) {
		const sheet = healthSheet("定期收入", "<form id=\"incomeForm\"><label>名称<input class=\"vt-in\" name=\"name\" required maxlength=\"60\" value=\"" + escAttr(rule?.name || "") + "\"></label><label>每月金额（元）<input class=\"vt-in\" name=\"amount\" type=\"number\" required min=\"0.01\" max=\"999999999\" step=\"0.01\" value=\"" + (rule?.amount || "") + "\"></label><label>每月几号到账<input class=\"vt-in\" name=\"day\" type=\"number\" required min=\"1\" max=\"31\" value=\"" + (rule?.day || 1) + "\"></label><p>从启用月开始，短月在月末到账。停用后保留已入账的收入。</p><button class=\"rv-confirm\">保存并启用</button></form>" + (rule?.active ? "<button class=\"chip\" id=\"stopIncome\">停用</button>" : ""));
		sheet.querySelector("form").onsubmit = (ev) => {
			ev.preventDefault();
			const data = new FormData(ev.target), name = String(data.get("name")).trim();
			if (!name) return;
			const book = SET.incomeBook ||= {
				rules: [],
				posted: []
			};
			const current = rule || { id: crypto.randomUUID() };
			if (!rule) book.rules.push(current);
			if (!current.active) current.start = key2iso(dkey(/* @__PURE__ */ new Date())).slice(0, 7);
			Object.assign(current, {
				name,
				day: Number(data.get("day")),
				amount: Number(data.get("amount")),
				active: true
			});
			settleIncome();
			scheduleSave();
			closeSheet();
		};
		const stop = sheet.querySelector("#stopIncome");
		if (stop) stop.onclick = () => {
			rule.active = false;
			scheduleSave();
			closeSheet();
		};
	}
	function incomePanel(spend) {
		const panel = document.createElement("details");
		panel.className = "income-panel";
		const month = key2iso(TODAY).slice(0, 7), book = SET.incomeBook;
		const total = (book?.posted || []).filter((r) => r.month === month).reduce((s, r) => s + Math.round(r.amount * 100), 0) / 100;
		panel.innerHTML = "<summary>定期收入" + (book ? " · 本月 ¥" + total + " · 结余 ¥" + Number((total - spend).toFixed(2)) : "（可选）") + "</summary>";
		const button = (label, run) => {
			const b = document.createElement("button");
			b.className = "chip";
			b.textContent = label;
			b.onclick = run;
			panel.appendChild(b);
		};
		for (const rule of book?.rules || []) button(rule.name + " · " + (rule.active ? "每月 " + rule.day + " 日" : "已停用"), () => ruleForm(rule));
		button("＋ 添加收入", () => ruleForm());
		for (const row of [...book?.posted || []].reverse()) {
			const line = document.createElement("p");
			line.textContent = row.date + " · " + row.name + "　+¥" + row.amount;
			panel.appendChild(line);
		}
		return panel;
	}
	// src/main.js
	restoreStorage();
	var beforeStartup = JSON.stringify(saveState(), jstrip);
	restoreRecordMetadata();
	bindNavigation();
	bindEntryLinks();
	bindDrawer();
	bindPhotos();
	bindGroups();
	bindReport();
	bindBackup();
	initializeParser();
	bindShare();
	initializeJournal();
	initializePeople();
	bindLifecycle();
	bindComposer();
	bindVoice();
	bindReading();
	platform.registerWorker();
	applyAccent();
	ensureToday();
	settleIncome();
	planTidy();
	cycMaterialize();
	imgBoot().then(() => backfillThumbs());
	buildToolbar();
	render();
	$("#drawerDot").innerHTML = jjImg("nest", 40);
	$("#drawerWm").innerHTML = wordmarkSVG(22);
	helloBoot();
	showOnboard();
	if (beforeStartup !== JSON.stringify(saveState(), jstrip)) scheduleSave();
	beforeStartup = null;
	if (SET.gh?.pending) ghSchedule();
})();
