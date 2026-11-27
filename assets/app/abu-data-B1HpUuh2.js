(() => {
	// \0rolldown/runtime.js
	var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
		if (typeof require !== "undefined") return require.apply(this, arguments);
		throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
	});
	// src/modules/abu/cities.json
	var cities_default = /*#__PURE__*/ JSON.parse("[[\"山西省左权县\",37.08,113.37,\"Asia/Shanghai\"],[\"河北省沧州市\",38.3,116.84,\"Asia/Shanghai\"],[\"上海市 · Shanghai\",31.2222,121.4581,\"Asia/Shanghai\"],[\"重庆市 · Chongqing\",29.5603,106.5577,\"Asia/Shanghai\"],[\"成都市 · Chengdu\",30.6667,104.0667,\"Asia/Shanghai\"],[\"北京市 · Beijing\",39.9075,116.3972,\"Asia/Shanghai\"],[\"广州市 · Guangzhou\",23.1167,113.25,\"Asia/Shanghai\"],[\"深圳市 · Shenzhen\",22.5455,114.0683,\"Asia/Shanghai\"],[\"天津市 · Tianjin\",39.1422,117.1767,\"Asia/Shanghai\"],[\"武汉市 · Wuhan\",30.5833,114.2667,\"Asia/Shanghai\"],[\"西安市 · Xi’an\",34.2583,108.9286,\"Asia/Shanghai\"],[\"杭州市 · Hangzhou\",30.2936,120.1614,\"Asia/Shanghai\"],[\"哈尔滨市 · Harbin\",45.75,126.65,\"Asia/Shanghai\"],[\"东莞市 · Dongguan\",23.018,113.7487,\"Asia/Shanghai\"],[\"合肥市 · Hefei\",31.8639,117.2808,\"Asia/Shanghai\"],[\"潍坊市 · Weifang\",36.71,119.1019,\"Asia/Shanghai\"],[\"南京市 · Nanjing\",32.0617,118.7778,\"Asia/Shanghai\"],[\"沈阳市 · Shenyang\",41.7922,123.4328,\"Asia/Shanghai\"],[\"佛山市 · Foshan\",23.0268,113.1315,\"Asia/Shanghai\"],[\"济南市 · Jinan\",36.6683,116.9972,\"Asia/Shanghai\"],[\"台北市 · Taipei\",25.0531,121.5264,\"Asia/Taipei\"],[\"大连市 · Dalian\",38.9122,121.6022,\"Asia/Shanghai\"],[\"香港 · Hong Kong\",22.2783,114.1747,\"Asia/Hong_Kong\"],[\"吴忠市 · Wuzhong\",37.9867,106.201,\"Asia/Shanghai\"],[\"青岛市 · Qingdao\",36.0649,120.3804,\"Asia/Shanghai\"],[\"烟台市 · Yantai\",37.4765,121.4408,\"Asia/Shanghai\"],[\"苏州市 · Suzhou\",31.3041,120.5954,\"Asia/Shanghai\"],[\"浦西 · Puxi\",31.2441,121.4659,\"Asia/Shanghai\"],[\"郑州市 · Zhengzhou\",34.7578,113.6486,\"Asia/Shanghai\"],[\"南宁市 · Nanning\",22.8167,108.3167,\"Asia/Shanghai\"],[\"昆明市 · Kunming\",25.0389,102.7183,\"Asia/Shanghai\"],[\"石家庄市 · Shijiazhuang\",38.0414,114.4786,\"Asia/Shanghai\"],[\"长春市 · Changchun\",43.88,125.3228,\"Asia/Shanghai\"],[\"浦东新区 · Pudong\",31.24,121.5009,\"Asia/Shanghai\"],[\"太原市 · Taiyuan\",37.8694,112.5603,\"Asia/Shanghai\"],[\"淄博市 · Zibo\",36.7906,118.0633,\"Asia/Shanghai\"],[\"厦门市 · Xiamen\",24.4798,118.0819,\"Asia/Shanghai\"],[\"扬州市 · Yangzhou\",32.3972,119.4358,\"Asia/Shanghai\"],[\"淮安市 · Huai'an\",33.5886,119.0192,\"Asia/Shanghai\"],[\"贵阳市 · Guiyang\",26.5833,106.7167,\"Asia/Shanghai\"],[\"Bao'an\",22.5521,113.8829,\"Asia/Shanghai\"],[\"无锡市 · Wuxi\",31.5689,120.2886,\"Asia/Shanghai\"],[\"兰州市 · Lanzhou\",36.057,103.8399,\"Asia/Shanghai\"],[\"福州市 · Fuzhou\",26.0614,119.3061,\"Asia/Shanghai\"],[\"乌鲁木齐市 · Ürümqi\",43.801,87.6005,\"Asia/Urumqi\"],[\"新北市 · New Taipei City\",25.062,121.457,\"Asia/Taipei\"],[\"新界 · New Territories\",22.4244,114.111,\"Asia/Hong_Kong\"],[\"枣庄市 · Zaozhuang\",34.8647,117.5542,\"Asia/Shanghai\"],[\"中山市 · Zhongshan\",22.5231,113.3791,\"Asia/Shanghai\"],[\"汕头市 · Shantou\",23.3549,116.6788,\"Asia/Shanghai\"],[\"宁波市 · Ningbo\",29.8782,121.5494,\"Asia/Shanghai\"],[\"南海 · Nanhai\",23.0219,113.1428,\"Asia/Shanghai\"],[\"浦阳 · Puyang\",29.4568,119.8887,\"Asia/Shanghai\"],[\"十堰市 · Shiyan\",32.6475,110.7781,\"Asia/Shanghai\"],[\"呼和浩特市 · Hohhot\",40.8106,111.6522,\"Asia/Shanghai\"],[\"唐山市 · Tangshan\",39.6438,118.1832,\"Asia/Shanghai\"],[\"吕梁市 · Lüliang\",37.5192,111.1444,\"Asia/Shanghai\"],[\"鞍山市 · Anshan\",41.1236,122.99,\"Asia/Shanghai\"],[\"常州市 · Changzhou\",31.7736,119.954,\"Asia/Shanghai\"],[\"大同市 · Datong\",40.0936,113.2914,\"Asia/Shanghai\"],[\"长沙市 · Changsha\",28.1987,112.9709,\"Asia/Shanghai\"],[\"淮南市 · Huainan\",32.6264,116.9969,\"Asia/Shanghai\"],[\"海口市 · Haikou\",20.0342,110.3465,\"Asia/Shanghai\"],[\"恵州市 · Huizhou\",23.1115,114.4152,\"Asia/Shanghai\"],[\"银川市 · Yinchuan\",38.4681,106.2731,\"Asia/Shanghai\"],[\"台中市 · Taichung\",24.1469,120.6839,\"Asia/Taipei\"],[\"包头市 · Baotou\",40.6516,109.8439,\"Asia/Shanghai\"],[\"临沂市 · Linyi\",35.0631,118.3428,\"Asia/Shanghai\"],[\"保定市 · Baoding\",38.8729,115.4625,\"Asia/Shanghai\"],[\"高雄市 · Kaohsiung\",22.6163,120.3133,\"Asia/Taipei\"],[\"闵行 · Minhang\",31.1088,121.3747,\"Asia/Shanghai\"],[\"巴中市 · Bazhong\",31.8694,106.7443,\"Asia/Shanghai\"],[\"温州市 · Wenzhou\",27.9994,120.6668,\"Asia/Shanghai\"],[\"云浮市 · Yunfu\",22.9279,112.0381,\"Asia/Shanghai\"],[\"西宁市 · Xining\",36.6255,101.7574,\"Asia/Shanghai\"],[\"南昌市 · Nanchang\",28.684,115.8531,\"Asia/Shanghai\"],[\"绍兴市 · Shaoxing\",30.0024,120.5786,\"Asia/Shanghai\"],[\"南通市 · Nantong\",32.0303,120.8747,\"Asia/Shanghai\"],[\"宝山 · Baoshan\",31.4084,121.4896,\"Asia/Shanghai\"],[\"九龍 · Kowloon\",22.3167,114.1833,\"Asia/Hong_Kong\"],[\"珠海市 · Zhuhai\",22.2769,113.5678,\"Asia/Shanghai\"],[\"鄂尔多斯市 · Ordos\",39.6086,109.7816,\"Asia/Shanghai\"],[\"庆阳市 · Qingyang\",35.7098,107.6445,\"Asia/Shanghai\"],[\"昆山市 · Kunshan\",31.3776,120.9543,\"Asia/Shanghai\"],[\"遵义市 · Zunyi\",27.6867,106.9072,\"Asia/Shanghai\"],[\"连云港市 · Lianyungang\",34.5984,119.2156,\"Asia/Shanghai\"],[\"普宁市 · Puning\",23.3107,116.1687,\"Asia/Shanghai\"],[\"赣州市 · Ganzhou\",25.8466,114.9326,\"Asia/Shanghai\"],[\"松江区 · Songjiang\",31.0344,121.2233,\"Asia/Shanghai\"],[\"揭阳市 · Jieyang\",23.5418,116.3658,\"Asia/Shanghai\"],[\"吉林市 · Jilin\",43.8465,126.5608,\"Asia/Shanghai\"],[\"嘉定镇 · Jiading\",31.3858,121.2446,\"Asia/Shanghai\"],[\"商丘市 · Shangqiu\",34.4143,115.6561,\"Asia/Shanghai\"],[\"南充市 · Nanchong\",30.7951,106.0847,\"Asia/Shanghai\"],[\"台南市 · Tainan\",22.9926,120.2051,\"Asia/Taipei\"],[\"南阳市 · Nanyang\",33.0052,112.5466,\"Asia/Shanghai\"],[\"江门市 · Jiangmen\",22.5833,113.0833,\"Asia/Shanghai\"],[\"江阴市 · Jiangyin\",31.911,120.263,\"Asia/Shanghai\"],[\"阜阳市 · Fuyang\",32.9,115.8167,\"Asia/Shanghai\"],[\"巴彦淖尔市 · Bayan Nur\",40.7414,107.386,\"Asia/Shanghai\"],[\"滕县 · Chengtangcun\",35.0836,117.1907,\"Asia/Shanghai\"],[\"潮州市 · Chaozhou\",23.654,116.6226,\"Asia/Shanghai\"],[\"清远市 · Qingyuan\",23.7,113.0333,\"Asia/Shanghai\"],[\"泰安市 · Tai’an\",36.1853,117.12,\"Asia/Shanghai\"],[\"Changshu\",31.6461,120.7422,\"Asia/Shanghai\"],[\"宿州市 · Suzhou\",33.6361,116.9789,\"Asia/Shanghai\"],[\"六安市 · Lu’an\",31.7356,116.5169,\"Asia/Shanghai\"],[\"塩城市 · Yancheng\",33.3575,120.1573,\"Asia/Shanghai\"],[\"泰州市 · Taizhou\",32.4907,119.9081,\"Asia/Shanghai\"],[\"大庆市 · Daqing\",46.5833,125.0,\"Asia/Shanghai\"],[\"芜湖市 · Wuhu\",31.3526,118.4295,\"Asia/Shanghai\"],[\"达州市 · Dazhou\",31.2106,107.4631,\"Asia/Shanghai\"],[\"桂林市 · Guilin\",25.2802,110.2964,\"Asia/Shanghai\"],[\"肇庆市 · Zhaoqing\",23.0489,112.4609,\"Asia/Shanghai\"],[\"绵阳市 · Mianyang\",31.4678,104.6817,\"Asia/Shanghai\"],[\"万州区 · Wanzhou\",30.7645,108.3959,\"Asia/Shanghai\"],[\"莆田市 · Putian\",25.4394,119.0103,\"Asia/Shanghai\"],[\"锦州市 · Jinzhou\",41.1078,121.1417,\"Asia/Shanghai\"],[\"台州市 · Taizhou\",28.6627,121.4331,\"Asia/Shanghai\"],[\"义乌 · Yiwu\",29.3151,120.0768,\"Asia/Shanghai\"],[\"泉州市 · Quanzhou\",24.9139,118.5858,\"Asia/Shanghai\"],[\"金华市 · Jinhua\",29.1068,119.6442,\"Asia/Shanghai\"],[\"慈溪市 · Cixi\",30.1764,121.2457,\"Asia/Shanghai\"],[\"常德市 · Changde\",29.0321,111.6984,\"Asia/Shanghai\"],[\"开封市 · Kaifeng\",34.7986,114.3074,\"Asia/Shanghai\"],[\"宝鸡市 · Baoji\",34.3678,107.237,\"Asia/Shanghai\"],[\"宿迁市 · Suqian\",33.9492,118.2958,\"Asia/Shanghai\"],[\"柳州市 · Liuzhou\",24.324,109.407,\"Asia/Shanghai\"],[\"张家港市 · Zhangjiagang\",31.865,120.5389,\"Asia/Shanghai\"],[\"信阳市 · Xinyang\",32.1228,114.0656,\"Asia/Shanghai\"],[\"晋江市 · Jinjiang\",24.8198,118.5742,\"Asia/Shanghai\"],[\"亳州市 · Bozhou\",33.8772,115.7703,\"Asia/Shanghai\"],[\"曲靖市 · Qujing\",25.4833,103.7833,\"Asia/Shanghai\"],[\"湛江市 · Zhanjiang\",21.2339,110.3875,\"Asia/Shanghai\"],[\"抚顺市 · Fushun\",41.8867,123.9436,\"Asia/Shanghai\"],[\"洛阳市 · Luoyang\",34.6735,112.4368,\"Asia/Shanghai\"],[\"浏阳市 · Guankou\",28.1586,113.6271,\"Asia/Shanghai\"],[\"廉江 · Lianjiang\",21.6467,110.2817,\"Asia/Shanghai\"],[\"邯郸市 · Handan\",36.61,114.4876,\"Asia/Shanghai\"],[\"宜昌市 · Yichang\",30.7144,111.2847,\"Asia/Shanghai\"],[\"菏泽市 · Heze\",35.2393,115.4736,\"Asia/Shanghai\"],[\"六盘水市 · Liupanshui\",26.5944,104.8333,\"Asia/Shanghai\"],[\"茂名市 · Maoming\",21.6663,110.9136,\"Asia/Shanghai\"],[\"钦州市 · Qinzhou\",21.9825,108.6506,\"Asia/Shanghai\"],[\"漯河市 · Luohe\",33.5742,114.0326,\"Asia/Shanghai\"],[\"樊城镇 · Xiangyang\",32.0422,112.1448,\"Asia/Shanghai\"],[\"阳江市 · Yangjiang\",21.8556,111.9627,\"Asia/Shanghai\"],[\"宜兴市 · Yixing\",31.3606,119.8202,\"Asia/Shanghai\"],[\"青浦 · Qingpu\",31.1539,121.1141,\"Asia/Shanghai\"],[\"许昌市 · Xuchang\",34.0319,113.863,\"Asia/Shanghai\"],[\"自贡市 · Zigong\",29.3416,104.7769,\"Asia/Shanghai\"],[\"徐州市 · Xuzhou\",34.2044,117.2839,\"Asia/Shanghai\"],[\"内江市 · Neijiang\",29.5835,105.0622,\"Asia/Shanghai\"],[\"益阳市 · Heshan\",28.5694,112.3473,\"Asia/Shanghai\"],[\"济宁市 · Jining\",35.405,116.5814,\"Asia/Shanghai\"],[\"普陀 · Putuo\",31.251,121.3897,\"Asia/Shanghai\"],[\"聊城市 · Liaocheng\",36.4506,116.0025,\"Asia/Shanghai\"],[\"晋中市 · Jinzhong\",37.684,112.7547,\"Asia/Shanghai\"],[\"长治市 · Changzhi\",36.1839,113.1053,\"Asia/Shanghai\"],[\"天水市 · Tianshui\",34.5795,105.7424,\"Asia/Shanghai\"],[\"杨浦 · Yangpu\",31.2619,121.519,\"Asia/Shanghai\"],[\"渭南市 · Weinan\",34.5035,109.5089,\"Asia/Shanghai\"],[\"香港岛 · Hong Kong Island\",22.263,114.1842,\"Asia/Hong_Kong\"],[\"嘉兴市 · Jiaxing\",30.7522,120.75,\"Asia/Shanghai\"],[\"中卫市 · Zhongwei\",37.5113,105.1907,\"Asia/Shanghai\"],[\"盘锦市 · Panjin\",41.121,122.0739,\"Asia/Shanghai\"],[\"九江市 · Jiujiang\",29.7048,116.0021,\"Asia/Shanghai\"],[\"安阳市 · Anyang\",36.096,114.3828,\"Asia/Shanghai\"],[\"Luohu District\",22.5472,114.1315,\"Asia/Shanghai\"],[\"奉贤区 · Fengxiang\",30.8584,121.4678,\"Asia/Shanghai\"],[\"毕节市 · Bijie\",27.3019,105.2863,\"Asia/Shanghai\"],[\"株洲市 · Zhuzhou\",27.8333,113.15,\"Asia/Shanghai\"],[\"瑞安 · Rui’an\",27.7761,120.6586,\"Asia/Shanghai\"],[\"邹城市 · Zoucheng\",35.4006,116.9656,\"Asia/Shanghai\"],[\"上饶市 · Shangrao\",28.4518,117.9429,\"Asia/Shanghai\"],[\"淮北市 · Huaibei\",33.9744,116.7917,\"Asia/Shanghai\"],[\"徐汇 · Xuhui\",31.1959,121.4471,\"Asia/Shanghai\"],[\"眉山市 · Meishan\",30.0439,103.837,\"Asia/Shanghai\"],[\"Wuchang\",30.5431,114.3007,\"Asia/Shanghai\"],[\"抚州市 · Fuzhou\",27.96,116.3333,\"Asia/Shanghai\"],[\"贵港市 · Guigang\",23.116,109.5947,\"Asia/Shanghai\"],[\"衡阳市 · Hengyang\",26.8895,112.6189,\"Asia/Shanghai\"],[\"玉林市 · Yulin\",22.6305,110.1469,\"Asia/Shanghai\"],[\"荆州市 · Jingzhou\",30.3503,112.1903,\"Asia/Shanghai\"],[\"新乡市 · Xinxiang\",35.1903,113.8015,\"Asia/Shanghai\"],[\"宜春市 · Yichun\",27.8333,114.4,\"Asia/Shanghai\"],[\"咸阳市 · Xianyang\",34.3378,108.7026,\"Asia/Shanghai\"],[\"三亚市 · Sanya\",18.2543,109.5095,\"Asia/Shanghai\"],[\"韶关市 · Shaoguan\",24.8,113.5833,\"Asia/Shanghai\"],[\"龙岩市 · Longyan\",25.0749,117.0178,\"Asia/Shanghai\"],[\"永州市 · Yongzhou\",26.4239,111.6131,\"Asia/Shanghai\"],[\"吴兴区 · Huzhou\",30.8703,120.0933,\"Asia/Shanghai\"],[\"信宜 · Xinyi\",22.373,110.9475,\"Asia/Shanghai\"],[\"武威市 · Wuwei\",37.9267,102.632,\"Asia/Shanghai\"],[\"Yishui\",35.7847,118.6281,\"Asia/Shanghai\"],[\"汉中市 · Hanzhong\",33.0751,107.0221,\"Asia/Shanghai\"],[\"贺州市 · Hezhou\",24.4036,111.5667,\"Asia/Shanghai\"],[\"Zhu Cheng City\",35.995,119.4026,\"Asia/Shanghai\"],[\"东营市 · Dongying\",37.4627,118.4917,\"Asia/Shanghai\"],[\"泸州市 · Luzhou\",28.8903,105.4257,\"Asia/Shanghai\"],[\"梅州市 · Meizhou\",24.2886,116.1177,\"Asia/Shanghai\"],[\"岳阳市 · Yueyang\",29.3745,113.0948,\"Asia/Shanghai\"],[\"莱芜市 · Laiwu\",36.1928,117.6569,\"Asia/Shanghai\"],[\"平顶山市 · Pingdingshan\",33.7309,113.3155,\"Asia/Shanghai\"],[\"蚌埠市 · Bengbu\",32.9408,117.3608,\"Asia/Shanghai\"],[\"Feicheng\",36.2486,116.7658,\"Asia/Shanghai\"],[\"三河 · Sanhe\",39.9805,117.0689,\"Asia/Shanghai\"],[\"Guli\",28.8816,120.0331,\"Asia/Shanghai\"],[\"湘潭市 · Xiangtan\",27.85,112.9,\"Asia/Shanghai\"],[\"临汾市 · Linfen\",36.0889,111.5189,\"Asia/Shanghai\"],[\"Victoria\",22.2875,114.1442,\"Asia/Hong_Kong\"],[\"镇江市 · Zhenjiang\",32.2109,119.4551,\"Asia/Shanghai\"],[\"葫芦岛市 · Huludao\",40.7524,120.8355,\"Asia/Shanghai\"],[\"静安 · Jing’an\",31.22,121.4158,\"Asia/Shanghai\"],[\"保山市 · Baoshan\",25.1163,99.1637,\"Asia/Shanghai\"],[\"承德市 · Chengde\",40.9519,117.9588,\"Asia/Shanghai\"],[\"来宾市 · Laibin\",23.7474,109.2222,\"Asia/Shanghai\"],[\"孝感市 · Xiaogan\",30.9269,113.9222,\"Asia/Shanghai\"],[\"吴川 · Wuchuan\",21.4571,110.7659,\"Asia/Shanghai\"],[\"资阳市 · Ziyang\",30.1211,104.6481,\"Asia/Shanghai\"],[\"衢州市 · Quzhou\",28.9594,118.8686,\"Asia/Shanghai\"],[\"萍乡市 · Pingxiang\",27.6167,113.8535,\"Asia/Shanghai\"],[\"定海区 · Zhoushan\",29.9887,122.2049,\"Asia/Shanghai\"],[\"齐齐哈尔市 · Qiqihar\",47.3392,123.9615,\"Asia/Shanghai\"],[\"Laiyang\",36.9758,120.7136,\"Asia/Shanghai\"],[\"Daye\",30.0833,114.95,\"Asia/Shanghai\"],[\"安康市 · Ankang\",32.68,109.0172,\"Asia/Shanghai\"],[\"廊坊市 · Langfang\",39.5208,116.7147,\"Asia/Shanghai\"],[\"拉萨市 · Lhasa\",29.65,91.1,\"Asia/Shanghai\"],[\"焦作市 · Jiaozuo\",35.2392,113.2391,\"Asia/Shanghai\"],[\"本溪市 · Benxi\",41.2886,123.765,\"Asia/Shanghai\"],[\"万州 · Wanxian\",30.816,108.3741,\"Asia/Shanghai\"],[\"广安市 · Guang’an\",30.4741,106.637,\"Asia/Shanghai\"],[\"威海市 · Weihai\",37.5091,122.1136,\"Asia/Shanghai\"],[\"闸北 · Zhabei\",31.2586,121.4597,\"Asia/Shanghai\"],[\"上虞区 · Shangyu\",30.0156,120.8711,\"Asia/Shanghai\"],[\"新余市 · Xinyu\",27.8043,114.9334,\"Asia/Shanghai\"],[\"宜宾市 · Yibin\",28.7593,104.6399,\"Asia/Shanghai\"],[\"城厢镇 · Taicang\",31.4478,121.0939,\"Asia/Shanghai\"],[\"椒江村 · Jiaojiang\",28.6984,121.4733,\"Asia/Shanghai\"],[\"金山区 · Jinshan\",30.8356,121.2937,\"Asia/Shanghai\"],[\"郴州 · Chenzhou\",25.8,113.0333,\"Asia/Shanghai\"],[\"丹东市 · Dandong\",40.1292,124.3947,\"Asia/Shanghai\"],[\"安庆市 · Anqing\",30.5136,117.0472,\"Asia/Shanghai\"],[\"邢台市 · Xingtai\",37.0622,114.4927,\"Asia/Shanghai\"],[\"昭通市 · Zhaotong\",27.3167,103.7167,\"Asia/Shanghai\"],[\"Hondlon\",40.6483,109.7939,\"Asia/Shanghai\"],[\"攀枝花市 · Panzhihua\",26.5851,101.7128,\"Asia/Shanghai\"],[\"滁州市 · Chuzhou\",32.3219,118.2978,\"Asia/Shanghai\"],[\"宣城市 · Xuancheng\",30.9525,118.7553,\"Asia/Shanghai\"],[\"安顺市 · Anshun\",26.25,105.9333,\"Asia/Shanghai\"],[\"梧州市 · Wuzhou\",23.4805,111.2885,\"Asia/Shanghai\"],[\"秦皇岛市 · Qinhuangdao\",39.941,119.5894,\"Asia/Shanghai\"],[\"邵阳市 · Shaoyang\",27.2382,111.4621,\"Asia/Shanghai\"],[\"鹤岗市 · Hegang\",47.3473,130.2903,\"Asia/Shanghai\"],[\"Zhuanghe\",39.7008,122.9911,\"Asia/Shanghai\"],[\"马鞍山市 · Ma’anshan\",31.6858,118.5101,\"Asia/Shanghai\"],[\"石嘴山市 · Shizuishan\",38.9808,106.3892,\"Asia/Shanghai\"],[\"德阳市 · Deyang\",31.1302,104.382,\"Asia/Shanghai\"],[\"阳泉市 · Yangquan\",37.8575,113.5633,\"Asia/Shanghai\"],[\"驻马店市 · Zhumadian\",32.9838,114.0259,\"Asia/Shanghai\"],[\"Qingshan\",40.6631,109.8817,\"Asia/Shanghai\"],[\"Changzhi\",35.2089,111.7386,\"Asia/Shanghai\"],[\"长宁 · Changning\",31.2174,121.421,\"Asia/Shanghai\"],[\"张家口市 · Zhangjiakou\",40.7834,114.8714,\"Asia/Shanghai\"],[\"阜新市 · Fuxin\",42.0156,121.6589,\"Asia/Shanghai\"],[\"开平 · Changsha\",22.3812,112.6849,\"Asia/Shanghai\"],[\"黄石市 · Huangshi\",30.2471,115.0481,\"Asia/Shanghai\"],[\"辽阳市 · Liaoyang\",41.2719,123.1731,\"Asia/Shanghai\"],[\"虹口 · Hongkou\",31.25,121.4892,\"Asia/Shanghai\"],[\"百色市 · Baise\",23.8901,106.6268,\"Asia/Shanghai\"],[\"滨州市 · Binzhou\",37.3667,118.0167,\"Asia/Shanghai\"],[\"运城市 · Yuncheng\",35.0231,110.9928,\"Asia/Shanghai\"],[\"德州市 · Dezhou\",37.4466,116.3671,\"Asia/Shanghai\"],[\"三门峡市 · Sanmenxia\",34.7808,111.1929,\"Asia/Shanghai\"],[\"鄂州市 · E’zhou\",30.3961,114.8865,\"Asia/Shanghai\"],[\"牡丹江市 · Mudanjiang\",44.548,129.6259,\"Asia/Shanghai\"],[\"乐山市 · Leshan\",29.5623,103.7639,\"Asia/Shanghai\"],[\"日照市 · Rizhao\",35.4141,119.5291,\"Asia/Shanghai\"],[\"Dongcun\",36.7767,121.1597,\"Asia/Shanghai\"],[\"遂宁市 · Suining\",30.508,105.5733,\"Asia/Shanghai\"],[\"黄浦 · Huangpu\",31.2378,121.4781,\"Asia/Shanghai\"],[\"濮阳市 · Puyang\",35.7564,115.0436,\"Asia/Shanghai\"],[\"澳門 · Macau\",22.2006,113.5461,\"Asia/Macau\"],[\"Lingyuan\",41.24,119.4011,\"Asia/Shanghai\"],[\"Mingguang\",32.7802,117.9638,\"Asia/Shanghai\"],[\"崇明区 · Chongming\",31.6185,121.6962,\"Asia/Shanghai\"],[\"鹤壁市 · Hebi\",35.7323,114.2862,\"Asia/Shanghai\"],[\"荆门市 · Jingmen\",31.0336,112.2047,\"Asia/Shanghai\"],[\"四平市 · Siping\",43.1614,124.3778,\"Asia/Shanghai\"],[\"Panshan\",41.1881,122.0494,\"Asia/Shanghai\"],[\"Jiaozhou\",36.2839,120.0033,\"Asia/Shanghai\"],[\"随州市 · Suizhou\",31.7111,113.3631,\"Asia/Shanghai\"],[\"池州市 · Chizhou\",30.6613,117.4778,\"Asia/Shanghai\"],[\"雅安市 · Ya'an\",29.9852,102.999,\"Asia/Shanghai\"],[\"三明市 · Sanming\",26.2486,117.6186,\"Asia/Shanghai\"],[\"双鸭山市 · Shuangyashan\",46.6769,131.1327,\"Asia/Shanghai\"],[\"栾城 · Luancheng\",37.8845,114.6463,\"Asia/Shanghai\"],[\"蒙自市 · Mengzi\",23.3678,103.3821,\"Asia/Shanghai\"],[\"営口市 · Yingkou\",40.6647,122.2318,\"Asia/Shanghai\"],[\"漳州市 · Zhangzhou\",24.5133,117.6556,\"Asia/Shanghai\"],[\"东胜区 · Dongsheng\",39.8161,109.9776,\"Asia/Shanghai\"],[\"石河子市 · Shihezi\",44.3023,86.0369,\"Asia/Urumqi\"],[\"Xinmin\",41.9908,122.8253,\"Asia/Shanghai\"],[\"文城镇 · Wenchang\",19.5516,110.8028,\"Asia/Shanghai\"],[\"楚雄市 · Chuxiong\",25.0364,101.5456,\"Asia/Shanghai\"],[\"怀化市 · Huaihua\",27.5634,110.004,\"Asia/Shanghai\"],[\"Sishui\",35.6489,117.2758,\"Asia/Shanghai\"],[\"板橋 · Banqiao\",25.0143,121.4672,\"Asia/Taipei\"],[\"乌兰察布市 · Ulanqab\",40.993,113.133,\"Asia/Shanghai\"],[\"佳木斯市 · Jiamusi\",46.7971,130.3112,\"Asia/Shanghai\"],[\"库尔勒市 · Korla\",41.7606,86.1523,\"Asia/Urumqi\"],[\"万宁市 · Wanning\",18.7993,110.3841,\"Asia/Shanghai\"],[\"忻州市 · Xinzhou\",38.4092,112.7333,\"Asia/Shanghai\"],[\"平度 · Pingdu\",36.7844,119.9464,\"Asia/Shanghai\"],[\"吉安市 · Ji’an\",27.1172,114.9793,\"Asia/Shanghai\"],[\"阿克苏市 · Aqsu\",41.1842,80.2792,\"Asia/Urumqi\"],[\"塘沽 · Tanggu\",39.0211,117.6469,\"Asia/Shanghai\"],[\"商洛市 · Shangluo\",33.8667,109.9306,\"Asia/Shanghai\"],[\"琼海市 · Qionghai\",19.2425,110.4642,\"Asia/Shanghai\"],[\"原平市 · Yuanping\",38.7153,112.7575,\"Asia/Shanghai\"],[\"北海市 · Beihai\",21.4835,109.1155,\"Asia/Shanghai\"],[\"衡水市 · Hengshui\",37.7391,115.6835,\"Asia/Shanghai\"],[\"大兴安岭 · Daxing’anling\",52.3338,124.7124,\"Asia/Shanghai\"],[\"广元市 · Guangyuan\",32.442,105.823,\"Asia/Shanghai\"],[\"咸宁市 · Xianning\",29.8435,114.322,\"Asia/Shanghai\"],[\"通化市 · Tonghua\",41.7197,125.9264,\"Asia/Shanghai\"],[\"Mianzhu, Deyang, Sichuan\",31.3379,104.2206,\"Asia/Shanghai\"],[\"巴南区 · Banan\",29.3786,106.54,\"Asia/Shanghai\"],[\"屯門 · Tuen Mun\",22.3917,113.9716,\"Asia/Hong_Kong\"],[\"张掖市 · Zhangye\",38.9342,100.4517,\"Asia/Shanghai\"],[\"喀什市 · Kashgar\",39.4672,75.9868,\"Asia/Urumqi\"],[\"周口市 · Zhoukou\",33.6147,114.6499,\"Asia/Shanghai\"],[\"平凉市 · Pingliang\",35.5392,106.6861,\"Asia/Shanghai\"],[\"密州 · Zhucheng\",35.9947,119.3975,\"Asia/Shanghai\"],[\"娄底市 · Loudi\",27.7344,111.9944,\"Asia/Shanghai\"],[\"沙田 · Sha Tin\",22.3833,114.1833,\"Asia/Hong_Kong\"],[\"Hecun\",36.5333,114.1111,\"Asia/Shanghai\"],[\"汕尾市 · Shanwei\",22.782,115.3475,\"Asia/Shanghai\"],[\"碱水 · Jianshui\",24.2774,101.224,\"Asia/Shanghai\"],[\"东河 · Donghe\",40.5661,110.0197,\"Asia/Shanghai\"],[\"西昌市 · Xichang\",27.8964,102.2634,\"Asia/Shanghai\"],[\"Zaoyang\",32.1272,112.7542,\"Asia/Shanghai\"],[\"Chéngguān Qū\",29.6384,91.0444,\"Asia/Shanghai\"],[\"晋城市 · Jincheng\",35.5022,112.8328,\"Asia/Shanghai\"],[\"Hongjiang\",27.11,109.9956,\"Asia/Shanghai\"],[\"桃園市 · Taoyuan\",24.9937,121.297,\"Asia/Taipei\"],[\"延安市 · Yan’an\",36.5989,109.4917,\"Asia/Shanghai\"],[\"Shouguang\",36.88,118.7375,\"Asia/Shanghai\"],[\"景德镇 · Jingdezhen\",29.2947,117.2079,\"Asia/Shanghai\"],[\"南平市 · Nanping\",26.645,118.1736,\"Asia/Shanghai\"],[\"辽源市 · Longshan\",42.8854,125.1367,\"Asia/Shanghai\"],[\"河源市 · Heyuan\",23.7333,114.6833,\"Asia/Shanghai\"],[\"屯溪区 · Huangshan\",29.7114,118.3125,\"Asia/Shanghai\"],[\"铁岭市 · Tieling\",42.2931,123.8414,\"Asia/Shanghai\"],[\"Wafangdian\",39.6183,122.0081,\"Asia/Shanghai\"],[\"新竹市 · Hsinchu\",24.8036,120.9686,\"Asia/Taipei\"],[\"永济市 · Yongji\",34.8661,110.4403,\"Asia/Shanghai\"],[\"丽水县 · Lishui\",28.4604,119.9103,\"Asia/Shanghai\"],[\"文山市 · Wenshan City\",23.3631,104.2505,\"Asia/Shanghai\"],[\"东方市 · Basuo\",19.1027,108.6656,\"Asia/Shanghai\"],[\"张家界市 · Zhangjiajie\",29.1294,110.4783,\"Asia/Shanghai\"],[\"Zhongxiang\",31.1661,112.5831,\"Asia/Shanghai\"],[\"Bei’an\",48.2667,126.6,\"Asia/Shanghai\"],[\"麻城市 · Macheng\",31.1801,115.0221,\"Asia/Shanghai\"],[\"朔州市 · Shuozhou\",39.3158,112.4225,\"Asia/Shanghai\"],[\"深水埗區 · Sham Shui Po\",22.3302,114.1595,\"Asia/Hong_Kong\"],[\"宁德市 · Ningde\",26.6617,119.5228,\"Asia/Shanghai\"],[\"酒泉市 · Jiuquan\",39.7432,98.5174,\"Asia/Shanghai\"],[\"黃大仙 · Wong Tai Sin\",22.35,114.1833,\"Asia/Hong_Kong\"],[\"定西市 · Dingxi\",35.5709,104.623,\"Asia/Shanghai\"],[\"九龍城 · Kowloon City\",22.3305,114.1922,\"Asia/Hong_Kong\"],[\"铜川市 · Tongchuan\",34.8988,108.9506,\"Asia/Shanghai\"],[\"Tseung Kwan O\",22.3279,114.2499,\"Asia/Hong_Kong\"],[\"固原市 · Guyuan\",36.0067,106.2808,\"Asia/Shanghai\"],[\"朝阳市 · Chaoyang\",41.5703,120.4586,\"Asia/Shanghai\"],[\"和田市 · Gujangbagh\",37.1093,79.9343,\"Asia/Urumqi\"],[\"Zhijiang\",30.4214,111.7533,\"Asia/Shanghai\"],[\"鸡西市 · Jixi\",45.2932,130.9622,\"Asia/Shanghai\"],[\"铜陵市 · Tongling\",30.95,117.7833,\"Asia/Shanghai\"],[\"Hancheng\",35.4603,110.4292,\"Asia/Shanghai\"],[\"Liaozhong\",41.5061,122.7242,\"Asia/Shanghai\"],[\"Gaomi\",36.3833,119.7528,\"Asia/Shanghai\"],[\"崇左 · Chongzuo\",22.3816,107.3683,\"Asia/Shanghai\"],[\"坦洲镇 · Tanzhou\",22.255,113.4669,\"Asia/Shanghai\"],[\"合川 · Hechuan\",29.9923,106.2646,\"Asia/Shanghai\"],[\"Yanzhou\",35.5528,116.8286,\"Asia/Shanghai\"],[\"Pingyin\",36.2831,116.4453,\"Asia/Shanghai\"],[\"张家口市宣化区 · Xuanhua\",40.6121,115.0646,\"Asia/Shanghai\"],[\"大场 · Dachang\",31.3087,121.4153,\"Asia/Shanghai\"],[\"Fenghuang\",27.9356,109.5996,\"Asia/Shanghai\"],[\"黄冈市 · Huanggang\",30.4514,114.8704,\"Asia/Shanghai\"],[\"Anqiu\",36.4342,119.1925,\"Asia/Shanghai\"],[\"基隆市 · Keelung\",25.1309,121.7409,\"Asia/Taipei\"],[\"冀州 · Jizhou\",37.5505,115.5687,\"Asia/Shanghai\"],[\"Nanqiao\",30.9161,121.4494,\"Asia/Shanghai\"],[\"霍城县 · Huocheng\",44.053,80.8717,\"Asia/Shanghai\"],[\"鳳山区 · Fengshan\",22.6266,120.3613,\"Asia/Taipei\"],[\"山南市 · Lhoka\",29.243,91.7724,\"Asia/Shanghai\"],[\"Pengze\",29.8988,116.5457,\"Asia/Shanghai\"],[\"锡林浩特市 · Xilinhot\",43.9389,116.0702,\"Asia/Shanghai\"],[\"呼伦贝尔市 · Hulunbuir\",49.2114,119.7558,\"Asia/Shanghai\"],[\"红山区 · Chifeng\",42.2683,118.9636,\"Asia/Shanghai\"],[\"Yunlong\",34.2528,117.2517,\"Asia/Shanghai\"],[\"七台河市 · Qitaihe\",45.768,130.9953,\"Asia/Shanghai\"],[\"Pizhou\",34.3114,117.9503,\"Asia/Shanghai\"],[\"Laixi\",36.8592,120.5269,\"Asia/Shanghai\"],[\"葵涌 · Kwai Chung\",22.3683,114.1388,\"Asia/Hong_Kong\"],[\"河池市 · Hechi\",24.6928,108.0838,\"Asia/Shanghai\"],[\"徐州市 · Tongshan\",34.1805,117.1571,\"Asia/Shanghai\"],[\"延吉市 · Yanji\",42.8882,129.5024,\"Asia/Shanghai\"],[\"临沧市 · Lincang\",23.8797,100.0945,\"Asia/Shanghai\"],[\"兴义市 · Xingyi\",25.0962,104.9064,\"Asia/Shanghai\"],[\"潭头 · Tantou\",22.7512,113.835,\"Asia/Shanghai\"],[\"荃灣 · Tsuen Wan\",22.3714,114.1133,\"Asia/Hong_Kong\"],[\"白城市 · Baicheng\",45.6175,122.833,\"Asia/Shanghai\"],[\"连山区 · Lianshan\",40.7643,120.8533,\"Asia/Shanghai\"],[\"奎聚 · Changyi\",36.8536,119.3908,\"Asia/Shanghai\"],[\"新安镇 · Xinyi\",34.3842,118.3462,\"Asia/Shanghai\"],[\"阳朔 · Yangshuo\",24.7808,110.4897,\"Asia/Shanghai\"],[\"Linqu\",36.5156,118.5397,\"Asia/Shanghai\"],[\"思茅镇 · Pu'er\",22.7886,100.9748,\"Asia/Shanghai\"],[\"白银市 · Baiyin\",36.547,104.1702,\"Asia/Shanghai\"],[\"高州 · Gaozhou\",21.9197,110.8568,\"Asia/Shanghai\"],[\"秀英 · Xiuying\",20.0007,110.2936,\"Asia/Shanghai\"],[\"天水囲 · Tin Shui Wai\",22.4568,114.0023,\"Asia/Hong_Kong\"],[\"花洲 · Dengzhou\",32.6827,112.0887,\"Asia/Shanghai\"],[\"阿图什市 · Artux\",39.7084,76.1797,\"Asia/Shanghai\"],[\"七宝 · Qibao\",31.1527,121.3569,\"Asia/Shanghai\"],[\"新源县 · Xinyuan\",43.4265,83.2496,\"Asia/Urumqi\"],[\"恩施市 · Enshi\",30.3,109.4833,\"Asia/Shanghai\"],[\"唐河 · Tanghe\",32.6855,112.8323,\"Asia/Shanghai\"],[\"防城港市 · Fangchenggang\",21.7694,108.3566,\"Asia/Shanghai\"],[\"凯里市 · Kaili\",26.5858,107.9797,\"Asia/Shanghai\"],[\"内湖区 · Neihu\",25.0815,121.5881,\"Asia/Taipei\"],[\"兴城镇 · Xingning\",24.1483,115.7227,\"Asia/Shanghai\"],[\"临夏城关镇 · Linxia Chengguanzhen\",35.6003,103.2064,\"Asia/Shanghai\"],[\"大埔 · Tai Po\",22.4501,114.1688,\"Asia/Hong_Kong\"],[\"吐鲁番县 · Turpan\",42.9477,89.1789,\"Asia/Urumqi\"],[\"Longling County\",24.5866,98.6893,\"Asia/Shanghai\"],[\"伊宁市 · Ghulja\",43.9151,81.3215,\"Asia/Urumqi\"],[\"涪陵 · Fuling\",29.71,107.3939,\"Asia/Shanghai\"],[\"城中 · Chengzhong\",30.9445,113.5528,\"Asia/Shanghai\"],[\"乌兰浩特市 · Ulanhot\",46.0833,122.0833,\"Asia/Shanghai\"],[\"Hulan Ergi\",47.2042,123.6333,\"Asia/Shanghai\"],[\"东海 · Donghai\",22.9459,115.642,\"Asia/Shanghai\"],[\"Huayin\",34.5653,110.0664,\"Asia/Shanghai\"],[\"Fanling\",22.4949,114.1395,\"Asia/Hong_Kong\"],[\"嘉義市 · Chiayi City\",23.4792,120.4489,\"Asia/Taipei\"],[\"东台市 · Dongtai\",32.8523,120.3095,\"Asia/Shanghai\"],[\"克拉玛依市 · Karamay\",45.5847,84.8872,\"Asia/Urumqi\"],[\"科尔沁区 · Tongliao\",43.6125,122.2653,\"Asia/Shanghai\"],[\"海东市 · Nianbo\",36.48,102.4164,\"Asia/Shanghai\"],[\"Changle\",36.7058,118.8275,\"Asia/Shanghai\"],[\"平地泉镇 · Jining\",41.0275,113.1058,\"Asia/Shanghai\"],[\"石岐 · Shiqi\",22.5168,113.3852,\"Asia/Shanghai\"],[\"Rugao\",32.3704,120.5765,\"Asia/Shanghai\"],[\"Suicheng\",33.8963,117.9331,\"Asia/Shanghai\"],[\"儋州市 · Nada\",19.5213,109.579,\"Asia/Shanghai\"],[\"绥化市 · Suihua\",46.6481,126.9666,\"Asia/Shanghai\"],[\"北碚 · Beibei\",29.8274,106.4364,\"Asia/Shanghai\"],[\"石碣镇 · Shijie\",23.0955,113.7919,\"Asia/Shanghai\"],[\"哈密地区 · Hami\",42.8339,93.506,\"Asia/Urumqi\"],[\"济源县 · Jiyuan\",35.0891,112.5881,\"Asia/Shanghai\"],[\"老河口 · Laohekou\",32.3858,111.6678,\"Asia/Shanghai\"],[\"顾村 · Gucun\",31.3493,121.3934,\"Asia/Shanghai\"],[\"Xiulin\",29.7167,112.4,\"Asia/Shanghai\"],[\"Xiantao\",30.3708,113.4429,\"Asia/Shanghai\"],[\"Qingzhou\",36.6967,118.4797,\"Asia/Shanghai\"],[\"榆次区 · Yuci\",37.6803,112.7319,\"Asia/Shanghai\"],[\"博乐 · Bole\",44.8933,82.0699,\"Asia/Shanghai\"],[\"大理市 · Dali\",25.5847,100.2123,\"Asia/Shanghai\"],[\"湘乡市 · Xiangxiang\",27.7333,112.5333,\"Asia/Shanghai\"],[\"永康区 · Yongkang\",23.0244,120.2556,\"Asia/Taipei\"],[\"嘉峪关市 · Jiayuguan\",39.8112,98.2862,\"Asia/Shanghai\"],[\"Huanren\",41.2647,125.3667,\"Asia/Shanghai\"],[\"长征镇 · Changzheng\",31.2391,121.3678,\"Asia/Shanghai\"],[\"金昌市 · Jinchang\",38.5006,102.1938,\"Asia/Shanghai\"],[\"彰化 · Chang-hua\",24.0733,120.5628,\"Asia/Taipei\"],[\"彰化市 · Changhua\",24.0692,120.5512,\"Asia/Taipei\"],[\"让胡路区 · Fendou\",46.6414,124.8628,\"Asia/Shanghai\"],[\"黄冈 · Huanggang\",23.677,116.9996,\"Asia/Shanghai\"],[\"Jingling\",30.65,113.1,\"Asia/Shanghai\"],[\"黑河市 · Heihe\",50.2441,127.4902,\"Asia/Shanghai\"],[\"铜川市 · Tongchuanshi\",35.0747,109.085,\"Asia/Shanghai\"],[\"Xintai\",35.9006,117.7519,\"Asia/Shanghai\"],[\"介休市 · Jiexiu\",37.0244,111.9125,\"Asia/Shanghai\"],[\"武穴 · Wuxue\",29.8506,115.5525,\"Asia/Shanghai\"],[\"乌海市 · Wuhai\",39.6844,106.8158,\"Asia/Shanghai\"],[\"Yintai\",35.1152,109.097,\"Asia/Shanghai\"],[\"Jinzhou\",39.1,121.7167,\"Asia/Shanghai\"],[\"龙岗区 · Longgang\",22.7229,114.2633,\"Asia/Shanghai\"],[\"馬鞍山 · Ma On Shan\",22.4061,114.2408,\"Asia/Hong_Kong\"],[\"鹰潭市 · Yingtan\",28.2333,117.0,\"Asia/Shanghai\"],[\"锡林浩特市 · Xilin Hot\",43.9667,116.0333,\"Asia/Shanghai\"],[\"潼南县 · Zitong\",30.1782,105.8299,\"Asia/Shanghai\"],[\"竹北市 · Zhubei\",24.8383,121.0078,\"Asia/Taipei\"],[\"罗江 · Luojiang\",31.305,104.5048,\"Asia/Shanghai\"],[\"丽江市 · Lijiang\",26.8688,100.2207,\"Asia/Shanghai\"],[\"海拉尔区 · Hailar\",49.2,119.7,\"Asia/Shanghai\"],[\"顺德区 · Daliang\",22.8407,113.2503,\"Asia/Shanghai\"],[\"八徳区 · Bade\",24.9298,121.2837,\"Asia/Taipei\"],[\"铜梁县 · Bachuan\",29.8486,106.0505,\"Asia/Shanghai\"],[\"Hangu\",39.2489,117.7892,\"Asia/Shanghai\"],[\"古南镇 · Gunan\",29.0231,106.648,\"Asia/Shanghai\"],[\"景洪市 · Yunjinghong\",22.0148,100.7984,\"Asia/Shanghai\"],[\"共和涌 · Gongheyong\",22.7592,113.7945,\"Asia/Shanghai\"],[\"南川区 · Nanchuan\",29.152,107.1034,\"Asia/Shanghai\"],[\"璧山县 · Bishan\",29.5949,106.2248,\"Asia/Shanghai\"],[\"汐止区 · Xizhi\",25.0662,121.6599,\"Asia/Taipei\"],[\"杨行 · Yanghang\",31.3702,121.4374,\"Asia/Shanghai\"],[\"高坪 · Gaoping\",30.7758,106.1029,\"Asia/Shanghai\"],[\"林芝 · Nyingchi\",29.6488,94.3551,\"Asia/Shanghai\"],[\"元朗 · Yuen Long San Hui\",22.4333,114.0333,\"Asia/Hong_Kong\"],[\"元朗 · Yuen Long\",22.4452,114.0262,\"Asia/Hong_Kong\"],[\"Beiliu\",22.7072,110.3492,\"Asia/Shanghai\"],[\"昌吉市 · Changji\",44.0078,87.3046,\"Asia/Urumqi\"],[\"都匀市 · Duyun\",26.2667,107.5167,\"Asia/Shanghai\"],[\"开远 · Kaiyuan\",23.6977,103.3037,\"Asia/Shanghai\"],[\"冷水江市 · Lengshuijiang\",27.6881,111.4294,\"Asia/Shanghai\"],[\"门头沟 · Mentougou\",39.9382,116.0931,\"Asia/Shanghai\"],[\"泸水市 · Lushui\",25.8232,98.8585,\"Asia/Shanghai\"],[\"江津区 · Jijiang\",29.2899,106.25,\"Asia/Shanghai\"],[\"开县 · Hanfeng\",31.1695,108.4031,\"Asia/Shanghai\"],[\"Fengcheng\",40.4536,124.0717,\"Asia/Shanghai\"],[\"Peicheng\",34.7361,116.9247,\"Asia/Shanghai\"],[\"Kowloon City Centre\",22.3298,114.1889,\"Asia/Hong_Kong\"],[\"Ezhou\",30.4,114.8333,\"Asia/Shanghai\"],[\"正定 · Zhengding\",38.145,114.5656,\"Asia/Shanghai\"],[\"永川区 · Yongchuan\",29.3538,105.8939,\"Asia/Shanghai\"],[\"廉州镇 · Hepu\",21.6592,109.2001,\"Asia/Shanghai\"],[\"爱辉镇 · Aihui\",49.9795,127.4812,\"Asia/Shanghai\"],[\"福鼎 · Fuding\",27.3273,120.214,\"Asia/Shanghai\"],[\"虎门镇 · Humen\",22.819,113.6731,\"Asia/Shanghai\"],[\"海城市 · Haicheng\",40.8516,122.7475,\"Asia/Shanghai\"],[\"Beipiao\",41.7919,120.7792,\"Asia/Shanghai\"],[\"阿勒泰市 · Jinshanlu\",47.8505,88.1329,\"Asia/Urumqi\"],[\"淡水 · Danshui\",25.172,121.4429,\"Asia/Taipei\"],[\"垫江县 · Guixi\",30.3335,107.3454,\"Asia/Shanghai\"],[\"掖县 · Laizhou\",37.1807,119.9422,\"Asia/Shanghai\"],[\"回兴 · Huixing\",29.684,106.6149,\"Asia/Shanghai\"],[\"荣昌县 · Changyuan\",29.405,105.5883,\"Asia/Shanghai\"],[\"香格里拉市 · Shangri-La\",27.8251,99.7078,\"Asia/Shanghai\"],[\"合阳城 · Yangcheng\",29.9997,106.256,\"Asia/Shanghai\"],[\"敦煌市 · Dunhuang\",40.1667,94.6833,\"Asia/Shanghai\"],[\"井岸镇 · Jing’an\",22.2107,113.2922,\"Asia/Shanghai\"],[\"白山市 · Baishan\",41.9385,126.4197,\"Asia/Shanghai\"],[\"青衣 · Tsing Yi Town\",22.35,114.1,\"Asia/Hong_Kong\"],[\"镇平城关镇 · Zhenping\",33.0346,112.2276,\"Asia/Shanghai\"],[\"安达市 · Anda\",46.4487,125.3016,\"Asia/Shanghai\"],[\"Gongzhuling\",43.5007,124.8198,\"Asia/Shanghai\"],[\"樹林区 · Shulin\",24.9908,121.422,\"Asia/Taipei\"],[\"Pingwu County\",32.4073,104.5274,\"Asia/Shanghai\"],[\"园林 · Qianjiang\",30.421,112.8919,\"Asia/Shanghai\"],[\"仪征市 · Zhenzhou\",32.2803,119.17,\"Asia/Shanghai\"],[\"Xindi\",29.8167,113.4667,\"Asia/Shanghai\"],[\"长寿区 · Fengcheng\",29.8259,107.0602,\"Asia/Shanghai\"],[\"九台 · Jiutai\",44.1513,125.8298,\"Asia/Shanghai\"],[\"曾城 · Licheng\",23.2955,113.8247,\"Asia/Shanghai\"],[\"Dongling\",41.8144,123.5758,\"Asia/Shanghai\"],[\"元朗墟 · Yuen Long Kau Hui\",22.4483,114.032,\"Asia/Hong_Kong\"],[\"灣仔 · Wan Chai\",22.2814,114.1726,\"Asia/Hong_Kong\"],[\"松城 · Songcheng\",26.8819,120.0011,\"Asia/Shanghai\"],[\"恒山区 · Hengshan\",45.2084,130.8981,\"Asia/Shanghai\"],[\"通州 · Tongzhou\",39.904,116.6618,\"Asia/Shanghai\"],[\"庵埠 · Anbu\",23.4489,116.6809,\"Asia/Shanghai\"],[\"宁洱 · Ning’er\",23.0405,101.0368,\"Asia/Shanghai\"],[\"Fengcheng\",34.7039,116.5872,\"Asia/Shanghai\"],[\"塔城市 · Tacheng\",46.7454,82.9585,\"Asia/Urumqi\"],[\"枝城镇 · Zhicheng\",30.2956,111.5047,\"Asia/Shanghai\"],[\"香港仔 · Aberdeen\",22.248,114.1529,\"Asia/Hong_Kong\"],[\"南票 · Nanpiao\",41.0982,120.7479,\"Asia/Shanghai\"],[\"涪陵区 · Lizhi\",29.7032,107.3952,\"Asia/Shanghai\"],[\"宜州 · Yizhou\",24.5,108.6667,\"Asia/Shanghai\"],[\"新桥镇 · Xinqiao\",31.065,121.3075,\"Asia/Shanghai\"],[\"伊春市 · Yichun\",47.7214,128.8753,\"Asia/Shanghai\"],[\"梁湖镇 · Lianghu\",29.9915,120.8984,\"Asia/Shanghai\"],[\"广水 · Guangshui\",31.6199,113.9978,\"Asia/Shanghai\"],[\"福安市 · Fu’an\",27.0913,119.6445,\"Asia/Shanghai\"],[\"肇东市 · Zhaodong\",46.0522,125.9552,\"Asia/Shanghai\"],[\"五家渠市 · Wujiaqu\",44.1628,87.5217,\"Asia/Urumqi\"],[\"三水 · Sanshui\",23.1549,112.8916,\"Asia/Shanghai\"],[\"Boshan\",36.4833,117.8333,\"Asia/Shanghai\"],[\"阳春 · Yangchun\",22.1667,111.7833,\"Asia/Shanghai\"],[\"定州 · Dingzhou\",38.5147,114.9868,\"Asia/Shanghai\"],[\"彭浦 · Pengpu\",31.2855,121.4367,\"Asia/Shanghai\"],[\"澄华 · Chenghua\",23.4613,116.7701,\"Asia/Shanghai\"],[\"龙凤区 · Longfeng\",46.5317,125.1038,\"Asia/Shanghai\"],[\"Beining\",41.5956,121.7928,\"Asia/Shanghai\"],[\"敦化 · Dunhua\",43.3695,128.2286,\"Asia/Shanghai\"],[\"Sujiatun\",41.6592,123.3392,\"Asia/Shanghai\"],[\"红岗区 · Honggang\",46.3974,124.8845,\"Asia/Shanghai\"],[\"Yima\",34.7381,111.8839,\"Asia/Shanghai\"],[\"桃州镇 · Taozhou\",30.9064,119.4086,\"Asia/Shanghai\"],[\"辛集 · Xinji\",37.926,115.2191,\"Asia/Shanghai\"],[\"台山市 · Taishan\",22.2513,112.7799,\"Asia/Shanghai\"],[\"阿城市 · Acheng\",45.5456,126.9519,\"Asia/Shanghai\"],[\"海林市 · Hailin\",44.5715,129.3854,\"Asia/Shanghai\"],[\"奉节县 · Yong’an\",31.0189,109.4595,\"Asia/Shanghai\"],[\"合川区 · Nanjin\",29.985,106.2653,\"Asia/Shanghai\"],[\"黔江区 · Qianjiang\",29.5328,108.7748,\"Asia/Shanghai\"],[\"界首市 · Jieshou\",33.2634,115.3611,\"Asia/Shanghai\"],[\"玉树市 · Yushu\",33.0012,97.0089,\"Asia/Shanghai\"],[\"三合镇 · Sanhe\",29.8686,107.7303,\"Asia/Shanghai\"],[\"水寨镇 · Shuizhai\",23.9296,115.765,\"Asia/Shanghai\"],[\"山海关 · Shanhaiguan\",40.0012,119.754,\"Asia/Shanghai\"],[\"月浦 · Yuepu\",31.4269,121.4214,\"Asia/Shanghai\"],[\"桦甸 · Huadian\",42.9721,126.7411,\"Asia/Shanghai\"],[\"六枝 · Liuzhi\",26.2342,105.426,\"Asia/Shanghai\"],[\"Fuyu\",45.1833,124.8167,\"Asia/Shanghai\"],[\"乌丹镇 · Wūdān\",42.9344,119.0239,\"Asia/Shanghai\"],[\"巢湖市 · Chaohu\",31.6,117.8667,\"Asia/Shanghai\"],[\"梁平 · Liangping\",30.6611,107.7661,\"Asia/Shanghai\"],[\"东嘎 · Doilungdêqên\",29.655,90.9918,\"Asia/Shanghai\"],[\"碣石镇 · Jieshi\",22.8103,115.8306,\"Asia/Shanghai\"],[\"合江 · Hejiang\",28.8116,105.8336,\"Asia/Shanghai\"],[\"青浦区 · Xiayang\",31.1497,121.1159,\"Asia/Shanghai\"],[\"武夷山市 · Wuyishan\",27.7599,118.0307,\"Asia/Shanghai\"],[\"Jiashan\",30.8492,120.9258,\"Asia/Shanghai\"],[\"加格达奇区 · Jiagedaqi\",50.4167,124.1167,\"Asia/Shanghai\"],[\"惠农区 · Huinong\",39.2333,106.7694,\"Asia/Shanghai\"],[\"个旧市 · Gejiu\",23.3608,103.1537,\"Asia/Shanghai\"],[\"图木舒克市 · Tumxuk\",39.8698,79.0612,\"Asia/Urumqi\"],[\"市桥 · Shiqiao\",22.9464,113.3577,\"Asia/Shanghai\"],[\"胜利路 · Shenglilu\",29.3505,105.8775,\"Asia/Shanghai\"],[\"Jiawang\",34.4328,117.4419,\"Asia/Shanghai\"],[\"Puqi\",29.7167,113.8833,\"Asia/Shanghai\"],[\"武冈 · Wugang\",26.7279,110.632,\"Asia/Shanghai\"],[\"扎兰屯市 · Zhalantun\",48.0095,122.7365,\"Asia/Shanghai\"],[\"福集 · Fuji\",29.1482,105.3739,\"Asia/Shanghai\"],[\"Dawukou\",39.0419,106.3958,\"Asia/Shanghai\"],[\"马街 · Majie\",25.0319,102.638,\"Asia/Shanghai\"],[\"河婆 · Hepo\",23.4308,115.8299,\"Asia/Shanghai\"],[\"尚志市 · Shangzhi\",45.2056,128.0024,\"Asia/Shanghai\"],[\"双城 · Shuangcheng\",45.3798,126.3071,\"Asia/Shanghai\"],[\"东阳市 · Dongyang\",29.2678,120.2253,\"Asia/Shanghai\"],[\"南头镇 · Nantou\",22.7217,113.2926,\"Asia/Shanghai\"],[\"甲子镇 · Jiazi\",22.8793,116.0732,\"Asia/Shanghai\"],[\"Dongxing\",21.55,107.9667,\"Asia/Shanghai\"],[\"萍乡 · Pingxiang\",22.0969,106.7567,\"Asia/Shanghai\"],[\"聖安多尼堂區 · Santo António\",22.2021,113.5439,\"Asia/Macau\"],[\"耒阳 · Leiyang\",26.4024,112.8591,\"Asia/Shanghai\"],[\"双龙湖 · Shuanglonghu\",29.7162,106.6068,\"Asia/Shanghai\"],[\"Shache\",38.4167,77.2406,\"Asia/Urumqi\"],[\"高境 · Gaojing\",31.3223,121.4751,\"Asia/Shanghai\"],[\"淞南 · Songnan\",31.3504,121.4822,\"Asia/Shanghai\"],[\"Jiangyou\",31.7667,104.7167,\"Asia/Shanghai\"],[\"腾越 · Tengyue\",24.9949,98.5128,\"Asia/Shanghai\"],[\"沙井 · Shajing\",22.7463,113.819,\"Asia/Shanghai\"],[\"金峰 · Jinfeng\",28.2385,116.6005,\"Asia/Shanghai\"],[\"Jingzhi\",36.31,119.3875,\"Asia/Shanghai\"],[\"惠阳区 · Danshui\",22.7984,114.4672,\"Asia/Shanghai\"],[\"阿拉尔市 · Aral\",40.5418,81.2657,\"Asia/Shanghai\"],[\"花地瑪堂區 · Nossa Senhora de Fátima\",22.2077,113.5483,\"Asia/Macau\"],[\"惠城 · Huicheng\",23.0385,116.2899,\"Asia/Shanghai\"],[\"Xiazhen\",34.8022,117.1117,\"Asia/Shanghai\"],[\"海门镇 · Haimen\",23.1935,116.6122,\"Asia/Shanghai\"],[\"Shahecheng\",36.9383,114.5058,\"Asia/Shanghai\"],[\"榆树 · Yushu\",44.8275,126.5406,\"Asia/Shanghai\"],[\"員林 · Yuanlin\",23.9567,120.5761,\"Asia/Taipei\"],[\"乐城 · Lecheng\",25.128,113.3504,\"Asia/Shanghai\"],[\"南村 · Nancun\",36.5328,120.1339,\"Asia/Shanghai\"],[\"Jiupu\",41.0667,122.95,\"Asia/Shanghai\"],[\"宝山 · Baoshan\",46.5747,131.3932,\"Asia/Shanghai\"],[\"罗阳 · Luoyang\",23.1624,114.2734,\"Asia/Shanghai\"],[\"民主 · Jiaohe\",43.7213,127.3347,\"Asia/Shanghai\"],[\"乌达区 · Wuda\",39.4994,106.7117,\"Asia/Shanghai\"],[\"Huangzhou\",30.45,114.8,\"Asia/Shanghai\"],[\"Zhoucun\",36.8167,117.8167,\"Asia/Shanghai\"],[\"祥城 · Xiangcheng\",25.4669,100.5625,\"Asia/Shanghai\"],[\"龙水镇 · Longshui\",29.5656,105.7621,\"Asia/Shanghai\"],[\"南岔区 · Lianhe\",47.1333,129.2743,\"Asia/Shanghai\"],[\"Lichuan\",30.3,108.85,\"Asia/Shanghai\"],[\"Bao'an Centre\",22.5795,113.9163,\"Asia/Shanghai\"],[\"朱泾镇 · Zhujing\",30.901,121.1597,\"Asia/Shanghai\"],[\"招远市 · Zhaoyuan\",37.365,120.41,\"Asia/Shanghai\"],[\"巡场 · Xunchang\",28.4543,104.715,\"Asia/Shanghai\"],[\"南宾镇 · Nanbin\",29.9994,108.1091,\"Asia/Shanghai\"],[\"罗店 · Luodian\",31.4156,121.3344,\"Asia/Shanghai\"],[\"韶山市 · Shaoshan\",27.9167,112.5167,\"Asia/Shanghai\"],[\"巫山县 · Wushan\",31.0775,109.8764,\"Asia/Shanghai\"],[\"顺义 · Shunyi\",40.1217,116.6478,\"Asia/Shanghai\"],[\"龙井 · Longjing\",42.7713,129.4231,\"Asia/Shanghai\"],[\"古蔺 · Gulin\",28.0422,105.8104,\"Asia/Shanghai\"],[\"Chenggu\",33.1492,107.3258,\"Asia/Shanghai\"],[\"大沙 · Dasha\",23.1104,113.4418,\"Asia/Shanghai\"],[\"牙克石市 · Yakeshi\",49.2833,120.7333,\"Asia/Shanghai\"],[\"新东涌坑 · San Tung Chung Hang\",22.2787,113.9431,\"Asia/Hong_Kong\"],[\"白沙镇 · Baisha\",29.0623,106.1189,\"Asia/Shanghai\"],[\"安流镇 · Anliu\",23.6982,115.6795,\"Asia/Shanghai\"],[\"文登市 · Tianfu\",37.2637,122.0523,\"Asia/Shanghai\"],[\"三峡区 · Sanxia\",24.9345,121.3714,\"Asia/Taipei\"],[\"Mingshui\",36.7167,117.5,\"Asia/Shanghai\"],[\"大通回族土族自治县 · Qiaotou\",36.935,101.6736,\"Asia/Shanghai\"],[\"余姚 · Yuyao\",30.05,121.1494,\"Asia/Shanghai\"],[\"东涌 · Tung Chung\",22.2878,113.9424,\"Asia/Hong_Kong\"],[\"肇州 · Zhaozhou\",45.706,125.2661,\"Asia/Shanghai\"],[\"万盛区 · Wansheng\",28.9629,106.9284,\"Asia/Shanghai\"],[\"Wayaobu\",37.1361,109.6597,\"Asia/Shanghai\"],[\"平山 · Pingshan\",22.9938,114.7131,\"Asia/Shanghai\"],[\"松原市 · Songyuan\",45.129,124.8277,\"Asia/Shanghai\"],[\"马坝 · Maba\",24.6841,113.5984,\"Asia/Shanghai\"],[\"城桥 · Chengqiao\",31.6308,121.3925,\"Asia/Shanghai\"],[\"內壢 · Neili\",24.9725,121.2614,\"Asia/Taipei\"],[\"洮南市 · Taonan\",45.3332,122.7846,\"Asia/Shanghai\"],[\"海口镇 · Haikou\",24.7798,102.5755,\"Asia/Shanghai\"],[\"邵武 · Shaowu\",27.3409,117.4831,\"Asia/Shanghai\"],[\"勐卯 · Mengmao\",24.0014,97.865,\"Asia/Shanghai\"],[\"Kaiyuan\",42.5331,124.0403,\"Asia/Shanghai\"],[\"五指山市 · Wuzhishan\",18.7823,109.5013,\"Asia/Shanghai\"],[\"贺兰县 · Xigang\",38.5526,106.3481,\"Asia/Shanghai\"],[\"崇福镇 · Chóngfú\",30.5311,120.4309,\"Asia/Shanghai\"],[\"氹仔 · Taipa\",22.1558,113.5569,\"Asia/Macau\"],[\"思城 · Encheng\",22.1866,112.3042,\"Asia/Shanghai\"],[\"诸暨市 · Zhuji\",29.7188,120.2423,\"Asia/Shanghai\"],[\"Datun\",34.8092,116.9017,\"Asia/Shanghai\"],[\"临青 · Qingnian\",36.8409,115.7109,\"Asia/Shanghai\"],[\"Linshui\",36.4247,114.2047,\"Asia/Shanghai\"],[\"海伦市 · Hailun\",47.4466,126.9248,\"Asia/Shanghai\"],[\"石龙镇 · Shilong\",23.1144,113.8472,\"Asia/Shanghai\"],[\"滴道区 · Didao\",45.3473,130.8369,\"Asia/Shanghai\"],[\"南城县 · Jianchang\",27.5583,116.6398,\"Asia/Shanghai\"],[\"呼兰 · Hulan\",45.8933,126.5784,\"Asia/Shanghai\"],[\"德惠 · Dehui\",44.5367,125.6943,\"Asia/Shanghai\"],[\"彭水苗族土家族自治县 · Hanjia\",29.2952,108.1613,\"Asia/Shanghai\"],[\"太白 · Taibai\",30.8248,108.3578,\"Asia/Shanghai\"],[\"叙永 · Xuyong\",28.1699,105.4345,\"Asia/Shanghai\"],[\"讷河 · Nehe\",48.4793,124.8702,\"Asia/Shanghai\"],[\"斗六市 · Douliu\",23.7094,120.5433,\"Asia/Taipei\"],[\"扎赉诺尔 · Jalai Nur\",49.45,117.7,\"Asia/Shanghai\"],[\"铁力市 · Tieli\",46.9754,128.048,\"Asia/Shanghai\"],[\"沙坪 · Shaping\",22.7702,112.9578,\"Asia/Shanghai\"],[\"安宁市 · Anning\",24.9227,102.485,\"Asia/Shanghai\"],[\"龙江县 · Longjiang\",47.336,123.196,\"Asia/Shanghai\"],[\"埠河镇 · Buhe\",30.2876,112.2298,\"Asia/Shanghai\"],[\"頭份市 · Toufen\",24.6875,120.9094,\"Asia/Taipei\"],[\"Xinghua\",32.9392,119.8342,\"Asia/Shanghai\"],[\"南投市 · Nantou\",23.9157,120.6639,\"Asia/Taipei\"],[\"Yidu\",36.7712,118.4245,\"Asia/Shanghai\"],[\"中和镇 · Zhonghe\",28.4505,108.989,\"Asia/Shanghai\"],[\"濮阳县城关镇 · Puyang Chengguanzhen\",35.7062,115.0279,\"Asia/Shanghai\"],[\"大兴 · Daxing\",39.7403,116.3269,\"Asia/Shanghai\"],[\"建始县 · Yezhou\",30.6037,109.7233,\"Asia/Shanghai\"],[\"牌楼 · Pailou\",30.7964,108.3858,\"Asia/Shanghai\"],[\"普兰店 · Pulandian\",39.3953,121.9669,\"Asia/Shanghai\"],[\"土默特右旗 · Salaqi\",40.5414,110.5108,\"Asia/Shanghai\"],[\"Jishu\",44.3167,126.8,\"Asia/Shanghai\"],[\"玉溪市 · Yuxi\",24.355,102.5422,\"Asia/Shanghai\"],[\"崇仁县 · Bashan\",27.7682,116.0502,\"Asia/Shanghai\"],[\"同仁县 · Tongren\",35.5148,102.016,\"Asia/Shanghai\"],[\"甘古城关镇 · Gangu Chengguanzhen\",34.7356,105.3263,\"Asia/Shanghai\"],[\"台東 · Taitung\",22.7599,121.1446,\"Asia/Taipei\"],[\"库车县 · Xincheng\",41.715,82.9325,\"Asia/Urumqi\"],[\"吉首市 · Jishou\",28.3193,109.7335,\"Asia/Shanghai\"],[\"水富县 · Shuifu\",28.6321,104.4078,\"Asia/Shanghai\"],[\"河东镇 · Hedong\",23.9196,115.7801,\"Asia/Shanghai\"],[\"华城镇 · Huacheng\",24.067,115.6131,\"Asia/Shanghai\"],[\"林西 · Linxi\",39.7118,118.4495,\"Asia/Shanghai\"],[\"Xinzhai\",36.4,118.6167,\"Asia/Shanghai\"],[\"晏家 · Yanjia\",29.8276,106.9973,\"Asia/Shanghai\"],[\"康定市 · Kangding\",30.0022,101.9569,\"Asia/Shanghai\"],[\"绥芬河 · Suifenhe\",44.3998,131.1478,\"Asia/Shanghai\"],[\"Sino-Singapore Tianjin Eco-city\",39.1531,117.7835,\"Asia/Shanghai\"],[\"南丰县 · Qincheng\",27.2127,116.5301,\"Asia/Shanghai\"],[\"芒市 · Menghuan\",24.4353,98.5837,\"Asia/Shanghai\"],[\"西乡县 · Xixiang\",32.987,107.764,\"Asia/Shanghai\"],[\"望奎县 · Wangkui\",46.8321,126.4766,\"Asia/Shanghai\"],[\"花蓮市 · Hualien City\",23.9769,121.6044,\"Asia/Taipei\"],[\"梅河口 · Meihekou\",42.5287,125.6788,\"Asia/Shanghai\"],[\"新乐 · Xinle\",38.349,114.6853,\"Asia/Shanghai\"],[\"Linghe\",36.3642,119.0769,\"Asia/Shanghai\"],[\"Xingcheng\",40.6167,120.7167,\"Asia/Shanghai\"],[\"任丘市 · Renqiu\",38.7094,116.1009,\"Asia/Shanghai\"],[\"新市 · Xinshi\",31.047,113.141,\"Asia/Shanghai\"],[\"城子河 · Chengzihe\",45.3361,131.0049,\"Asia/Shanghai\"],[\"醴陵市 · Xishan\",27.6667,113.5,\"Asia/Shanghai\"],[\"Yeyuan\",36.4167,118.5,\"Asia/Shanghai\"],[\"Guanhu\",34.4253,117.9953,\"Asia/Shanghai\"],[\"旧店 · Jiudian\",36.9918,120.2041,\"Asia/Shanghai\"],[\"新兴镇 · Xinxing\",34.776,105.3222,\"Asia/Shanghai\"],[\"房山 · Fangshan\",39.687,115.9966,\"Asia/Shanghai\"],[\"金牛 · Jinniu\",25.8006,100.5743,\"Asia/Shanghai\"],[\"草屯 · Caotun\",23.977,120.6877,\"Asia/Taipei\"],[\"Houzhen\",36.9914,118.9658,\"Asia/Shanghai\"],[\"竹東 · Zhudong\",24.7317,121.0908,\"Asia/Taipei\"],[\"Gongguan\",21.8,109.6,\"Asia/Shanghai\"],[\"南溪 · Nanxi\",28.8421,104.9796,\"Asia/Shanghai\"],[\"禄步镇 · Lubu\",23.1723,112.283,\"Asia/Shanghai\"],[\"通州市 · Jinsha\",32.0898,121.0735,\"Asia/Shanghai\"],[\"都城镇 · Ducheng\",23.2421,111.5284,\"Asia/Shanghai\"],[\"沈家门 · Shenjiamen\",29.9576,122.298,\"Asia/Shanghai\"],[\"勃利县 · Boli\",45.7529,130.5845,\"Asia/Shanghai\"],[\"萧山县 · Xiaoshan\",30.1675,120.2588,\"Asia/Shanghai\"],[\"秦安县 · Xingguo\",34.8586,105.6686,\"Asia/Shanghai\"],[\"五常市 · Wuchang\",44.9275,127.1604,\"Asia/Shanghai\"],[\"吉安县 · Dunhou\",27.05,114.9,\"Asia/Shanghai\"],[\"巴彦浩特镇 · Bayan Hot\",38.8386,105.6686,\"Asia/Shanghai\"],[\"西美 · Ximeicun\",24.9877,118.3858,\"Asia/Shanghai\"],[\"大溪 · Daxi\",24.8837,121.2904,\"Asia/Taipei\"],[\"宜蘭市 · Yilan\",24.757,121.753,\"Asia/Taipei\"],[\"酉阳土家族苗族自治县 · Zhongduo\",28.8466,108.7642,\"Asia/Shanghai\"],[\"方城城关镇 · Fangcheng\",33.2569,113.001,\"Asia/Shanghai\"],[\"Daotian\",36.8339,118.8978,\"Asia/Shanghai\"],[\"云南驿 · Yunnanyi\",25.4245,100.689,\"Asia/Shanghai\"],[\"双辽 · Shuangliao\",43.5107,123.5007,\"Asia/Shanghai\"],[\"肇源 · Zhaoyuan\",45.5197,125.0763,\"Asia/Shanghai\"],[\"Dalai\",45.5,124.3,\"Asia/Shanghai\"],[\"Tangwu\",36.4467,118.8597,\"Asia/Shanghai\"],[\"Jiayue\",36.0236,119.1761,\"Asia/Shanghai\"],[\"昌平 · Changping\",40.2161,116.2347,\"Asia/Shanghai\"],[\"连州镇 · Lianzhou\",24.7819,112.3712,\"Asia/Shanghai\"],[\"Yingqiu\",36.5266,118.9929,\"Asia/Shanghai\"],[\"Danjiangkou\",32.5428,111.5086,\"Asia/Shanghai\"],[\"百安坝 · Bai’anba\",30.7628,108.4372,\"Asia/Shanghai\"],[\"中枢 · Zhongshu\",24.5167,103.7667,\"Asia/Shanghai\"],[\"Huazhou\",21.6333,110.5833,\"Asia/Shanghai\"],[\"Xingren\",25.4333,105.2333,\"Asia/Shanghai\"],[\"易门县 · Longquan\",24.6719,102.1613,\"Asia/Shanghai\"],[\"荣成市 · Yatou\",37.1566,122.4376,\"Asia/Shanghai\"],[\"Tanfang\",36.6998,118.6709,\"Asia/Shanghai\"],[\"高邮市 · Gaoyou\",32.7893,119.4418,\"Asia/Shanghai\"],[\"楡林市 · Yulinshi\",38.2918,109.7375,\"Asia/Shanghai\"],[\"寒亭区 · Hanting\",36.7708,119.2108,\"Asia/Shanghai\"],[\"铜仁市 · Tongren\",27.7172,109.1853,\"Asia/Shanghai\"],[\"淅河镇 · Xihe\",31.6864,113.4659,\"Asia/Shanghai\"],[\"多宝镇 · Duobao\",30.67,112.6895,\"Asia/Shanghai\"],[\"洛门 · Luomen\",34.7542,105.0247,\"Asia/Shanghai\"],[\"Huaidian\",33.4333,115.0333,\"Asia/Shanghai\"],[\"Baisha\",21.7167,109.6833,\"Asia/Shanghai\"],[\"庙行 · Miaohang\",31.3247,121.4395,\"Asia/Shanghai\"],[\"富锦 · Fujin\",47.2472,132.0296,\"Asia/Shanghai\"],[\"怀城镇 · Huaicheng\",23.9195,112.1763,\"Asia/Shanghai\"],[\"弥城 · Micheng\",25.3429,100.4873,\"Asia/Shanghai\"],[\"庐江县 · Lucheng\",31.2336,117.2806,\"Asia/Shanghai\"],[\"合德 · Hede\",33.7722,120.2618,\"Asia/Shanghai\"],[\"城厢镇 · Chengxiang\",31.398,109.5706,\"Asia/Shanghai\"],[\"Gantang\",27.4375,111.9731,\"Asia/Shanghai\"],[\"南大街 · Nandajie\",29.3377,105.8924,\"Asia/Shanghai\"],[\"冷水滩 · Lengshuitan\",26.4111,111.5956,\"Asia/Shanghai\"],[\"王清县 · Wangqing\",43.3108,129.7633,\"Asia/Shanghai\"],[\"Xiazhuang\",36.4492,119.8356,\"Asia/Shanghai\"],[\"更庆镇 · Gengqing\",31.8167,98.5806,\"Asia/Shanghai\"],[\"Linjiacun\",35.9939,119.6503,\"Asia/Shanghai\"],[\"周家坝 · Zhoujiaba\",30.8435,108.3664,\"Asia/Shanghai\"],[\"Honghe\",36.4028,118.9181,\"Asia/Shanghai\"],[\"宜宾县 · Baixi\",28.6997,104.5492,\"Asia/Shanghai\"],[\"李渡镇 · Lidu\",29.7386,107.2948,\"Asia/Shanghai\"],[\"禹州 · Yuzhou\",34.1547,113.4681,\"Asia/Shanghai\"],[\"鶯歌区 · Yingge\",24.9561,121.3507,\"Asia/Taipei\"],[\"古宋镇 · Gusong\",28.3133,105.2377,\"Asia/Shanghai\"],[\"Hanchuan\",30.65,113.7667,\"Asia/Shanghai\"],[\"Tiefu\",34.5333,118.0333,\"Asia/Shanghai\"],[\"琼山区 · Qiongshan\",20.0086,110.3538,\"Asia/Shanghai\"],[\"德清县 · Deqing\",30.5449,119.9599,\"Asia/Shanghai\"],[\"广昌县 · Xujiang\",26.8394,116.3201,\"Asia/Shanghai\"],[\"Mishan\",45.55,131.8833,\"Asia/Shanghai\"],[\"嫩江县 · Nenjiang\",49.1741,125.2197,\"Asia/Shanghai\"],[\"勐朗 · Menglang\",22.5621,99.9103,\"Asia/Shanghai\"],[\"Shizilu\",35.1711,118.8289,\"Asia/Shanghai\"],[\"姜山 · Jiangshan\",36.6781,120.5292,\"Asia/Shanghai\"],[\"赵各庄 · Zhaogezhuang\",39.7654,118.4119,\"Asia/Shanghai\"],[\"Anlong\",25.1,105.5167,\"Asia/Shanghai\"],[\"埔里 · Puli\",23.9664,120.9695,\"Asia/Taipei\"],[\"苗栗 · Miaoli\",24.5643,120.8237,\"Asia/Taipei\"],[\"昌都市 · Qamdo\",31.1304,97.1798,\"Asia/Shanghai\"],[\"南丰镇 · Nanfeng\",23.7269,111.7972,\"Asia/Shanghai\"],[\"钟鼓楼 · Zhonggulou\",30.8249,108.3841,\"Asia/Shanghai\"],[\"陇南市 · Longnan\",33.3979,104.917,\"Asia/Shanghai\"],[\"和龙市 · Helong\",42.5397,128.9972,\"Asia/Shanghai\"],[\"Nanding\",36.7483,118.0558,\"Asia/Shanghai\"],[\"虢镇 · Guozhen\",34.3659,107.359,\"Asia/Shanghai\"],[\"蓬莱市 · Dengzhou\",37.8082,120.7591,\"Asia/Shanghai\"],[\"曲阜市 · Qufu\",35.5967,116.9911,\"Asia/Shanghai\"],[\"老君庙镇 · Laojunmiao\",39.8333,97.7333,\"Asia/Shanghai\"],[\"大成镇 · Dacheng\",19.5093,109.3928,\"Asia/Shanghai\"],[\"勉县 · Mianyang\",33.157,106.6945,\"Asia/Shanghai\"],[\"大中镇 · Dazhong\",33.1997,120.4578,\"Asia/Shanghai\"],[\"蓼兰 · Liaolan\",36.6744,119.8753,\"Asia/Shanghai\"],[\"金乡 · Jinxiang\",27.4326,120.6063,\"Asia/Shanghai\"],[\"Dongxia\",36.7492,118.5827,\"Asia/Shanghai\"],[\"德感 · Degan\",29.2785,106.2316,\"Asia/Shanghai\"],[\"江都市 · Xiannü\",32.4281,119.5605,\"Asia/Shanghai\"],[\"Yinma\",36.6608,119.4625,\"Asia/Shanghai\"],[\"岭东 · Lingdong\",46.5543,131.1449,\"Asia/Shanghai\"],[\"南漳城关镇 · Nanzhang Chengguanzhen\",31.7839,111.8275,\"Asia/Shanghai\"],[\"徐城镇 · Xucheng\",20.3302,110.1664,\"Asia/Shanghai\"],[\"温宿县 · Wensu\",41.2755,80.2361,\"Asia/Shanghai\"],[\"Ningyang\",35.7642,116.7914,\"Asia/Shanghai\"],[\"津市 · Jinshi\",29.6049,111.8701,\"Asia/Shanghai\"],[\"乐安县 · Aoxi\",27.4259,115.8364,\"Asia/Shanghai\"],[\"Liping\",26.2311,109.1314,\"Asia/Shanghai\"],[\"Changqing\",36.5575,116.7272,\"Asia/Shanghai\"],[\"Dali Old Town\",25.6886,100.1589,\"Asia/Shanghai\"],[\"Xindian\",36.7975,118.2944,\"Asia/Shanghai\"],[\"Qiaoguan\",36.5644,118.8839,\"Asia/Shanghai\"],[\"南宫 · Nangong\",37.3546,115.3888,\"Asia/Shanghai\"],[\"旅顺口区 · Lüshun\",38.8,121.2667,\"Asia/Shanghai\"],[\"Anguo\",34.8306,116.8194,\"Asia/Shanghai\"],[\"石湾 · Shiwan\",23.0011,113.077,\"Asia/Shanghai\"],[\"东河镇 · Donghe\",32.2334,106.3013,\"Asia/Shanghai\"],[\"槐阳 · Huaiyang\",37.7615,114.517,\"Asia/Shanghai\"],[\"塘坪镇 · Tangping\",22.0318,111.9354,\"Asia/Shanghai\"],[\"Yudong\",29.385,106.5194,\"Asia/Shanghai\"],[\"长宁 · Changning\",28.5777,104.9209,\"Asia/Shanghai\"],[\"秀谷镇 · Xiugu\",27.9113,116.7764,\"Asia/Shanghai\"],[\"Feicheng\",35.2606,117.9675,\"Asia/Shanghai\"],[\"Shanting\",35.0753,117.4578,\"Asia/Shanghai\"],[\"筠连 · Junlian\",28.1711,104.5116,\"Asia/Shanghai\"],[\"Nianzhuang\",34.2972,117.7722,\"Asia/Shanghai\"],[\"平原 · Yingjiang\",24.7102,97.9367,\"Asia/Shanghai\"],[\"娄山关镇 · Loushanguan\",28.1368,106.822,\"Asia/Shanghai\"],[\"Baoying\",33.2292,119.3092,\"Asia/Shanghai\"],[\"大石桥市 · Dashiqiao\",40.6373,122.5025,\"Asia/Shanghai\"],[\"磐石 · Panshi\",42.9372,126.0574,\"Asia/Shanghai\"],[\"Xichang\",21.6333,108.95,\"Asia/Shanghai\"],[\"Huanglou\",36.6471,118.6055,\"Asia/Shanghai\"],[\"Dushan\",25.8333,107.5333,\"Asia/Shanghai\"],[\"日喀则市 · Xigazê\",29.25,88.8833,\"Asia/Shanghai\"],[\"沙田 · Sha Tin Wai\",22.3776,114.1975,\"Asia/Hong_Kong\"],[\"Songlou\",34.5723,116.6024,\"Asia/Shanghai\"],[\"泰兴市 · Taixing\",32.1667,120.0136,\"Asia/Shanghai\"],[\"唐家庄 · Tangjiazhuang\",39.7433,118.451,\"Asia/Shanghai\"],[\"雁塔 · Yanta\",36.2411,115.6672,\"Asia/Shanghai\"],[\"栖霞市 · Zhuangyuan\",37.3055,120.8275,\"Asia/Shanghai\"],[\"Wuyang\",31.9925,116.2472,\"Asia/Shanghai\"],[\"雄州 · Xiongzhou\",25.1167,114.3,\"Asia/Shanghai\"],[\"Chaigou\",36.2489,119.6242,\"Asia/Shanghai\"],[\"Xinzhou\",30.8667,114.8,\"Asia/Shanghai\"],[\"Shitanjing\",39.2342,106.3439,\"Asia/Shanghai\"],[\"图们 · Tumen\",42.9656,129.842,\"Asia/Shanghai\"],[\"大字号 · Qinggang\",29.4677,106.2362,\"Asia/Shanghai\"],[\"Hengbei\",23.8797,115.7255,\"Asia/Shanghai\"],[\"Yishan\",36.2211,118.6966,\"Asia/Shanghai\"],[\"友好区 · Youhao\",47.8531,128.8356,\"Asia/Shanghai\"],[\"Pingyi\",35.5006,117.6308,\"Asia/Shanghai\"],[\"武隆 · Wulong\",29.3243,107.7606,\"Asia/Shanghai\"],[\"临平镇 · Linping\",30.4225,120.2972,\"Asia/Shanghai\"],[\"西乡 · Xixiang\",22.5931,113.8889,\"Asia/Shanghai\"],[\"Shap Pat Heung\",22.4248,114.0358,\"Asia/Hong_Kong\"],[\"Huankou\",34.87,116.6697,\"Asia/Shanghai\"],[\"林口县 · Linkou\",45.2762,130.2733,\"Asia/Shanghai\"],[\"黄梅 · Huangmei\",30.1924,116.025,\"Asia/Shanghai\"],[\"松陵 · Songling\",31.1933,120.7176,\"Asia/Shanghai\"],[\"Jishui\",33.7333,115.4,\"Asia/Shanghai\"],[\"舒兰 · Shulan\",44.4113,126.9483,\"Asia/Shanghai\"],[\"Baicheng\",36.3274,119.7788,\"Asia/Shanghai\"],[\"Damiao\",34.2641,117.3638,\"Asia/Shanghai\"],[\"Pok Fu Lam\",22.2686,114.1292,\"Asia/Hong_Kong\"],[\"珲春市 · Hunchun\",42.8674,130.3569,\"Asia/Shanghai\"],[\"三都镇 · Sandu\",19.7894,109.215,\"Asia/Shanghai\"],[\"良乡 · Liangxiang\",39.736,116.1329,\"Asia/Shanghai\"],[\"Zhaodun\",34.3027,117.857,\"Asia/Shanghai\"],[\"奉化市 · Fenghua\",29.6563,121.4064,\"Asia/Shanghai\"],[\"雅星镇 · Yaxing\",19.4478,109.2627,\"Asia/Shanghai\"],[\"杨柳青 · Yangliuqing\",39.1375,116.9997,\"Asia/Shanghai\"],[\"Qiuji\",33.8,118.0,\"Asia/Shanghai\"],[\"浠水县 · Qingquan\",30.4511,115.2559,\"Asia/Shanghai\"],[\"Shouxian\",34.8465,116.4588,\"Asia/Shanghai\"],[\"临潼 · Lintong\",34.378,109.2089,\"Asia/Shanghai\"],[\"喀格勒克 · Kageleke\",37.301,79.6013,\"Asia/Shanghai\"],[\"Kanjia\",36.3723,119.5821,\"Asia/Shanghai\"],[\"隐珠 · Yinzhu\",35.8786,119.9753,\"Asia/Shanghai\"],[\"Chaoyang\",42.6622,126.0263,\"Asia/Shanghai\"],[\"上梅 · Shangmei\",27.7428,111.2956,\"Asia/Shanghai\"],[\"富裕县 · Fuyu\",47.7949,124.4577,\"Asia/Shanghai\"],[\"新営区 · Xinying\",23.3069,120.3106,\"Asia/Taipei\"],[\"茅洲 · Maozhou\",22.7636,113.8129,\"Asia/Shanghai\"],[\"启动市 · Huilong\",31.8111,121.655,\"Asia/Shanghai\"],[\"Nam Cheong\",22.328,114.1539,\"Asia/Hong_Kong\"],[\"麦积区 · Beidao\",34.5686,105.8933,\"Asia/Shanghai\"],[\"阳谷 · Yanggu\",36.1106,115.7753,\"Asia/Shanghai\"],[\"Kowloon West End\",22.3285,114.1851,\"Asia/Hong_Kong\"],[\"龙岗 · Longgang\",29.6974,105.7137,\"Asia/Shanghai\"],[\"Shancheng\",34.7953,116.0817,\"Asia/Shanghai\"],[\"Zhangzhai\",34.6167,116.95,\"Asia/Shanghai\"],[\"南麻镇 · Nanma\",36.1848,118.1549,\"Asia/Shanghai\"],[\"徽城镇 · Huicheng\",29.8693,118.4336,\"Asia/Shanghai\"],[\"院上 · Yuanshang\",36.7683,120.3456,\"Asia/Shanghai\"],[\"濉溪 · Suixi\",33.8907,116.7747,\"Asia/Shanghai\"],[\"Zhangzhuang\",34.5194,117.0056,\"Asia/Shanghai\"],[\"古城城关镇 · Gucheng Chengguanzhen\",32.266,111.6348,\"Asia/Shanghai\"],[\"咸水沽镇 · Xianshuigu\",38.985,117.3828,\"Asia/Shanghai\"],[\"云阳 · Yunyang\",33.4474,112.7142,\"Asia/Shanghai\"],[\"贵溪市 · Huayuan\",28.2863,117.2066,\"Asia/Shanghai\"],[\"Lanxi\",29.2159,119.4716,\"Asia/Shanghai\"],[\"根河市 · Genhe\",50.7833,121.5167,\"Asia/Shanghai\"],[\"罗城 · Luocheng\",29.3848,104.0286,\"Asia/Shanghai\"],[\"Heguan\",36.89,118.5738,\"Asia/Shanghai\"],[\"如东县 · Juegang\",32.3174,121.1855,\"Asia/Shanghai\"],[\"Shixing\",24.9482,114.0657,\"Asia/Shanghai\"],[\"Dongdu\",35.85,117.7,\"Asia/Shanghai\"],[\"Dongkan\",33.9997,119.8308,\"Asia/Shanghai\"],[\"定城 · Huangchuan\",32.139,115.0429,\"Asia/Shanghai\"],[\"乌苏市 · Wusu\",44.431,84.6762,\"Asia/Urumqi\"],[\"兰西县 · Lanxi\",46.2577,126.2806,\"Asia/Shanghai\"],[\"弥勒县 · Miyang\",24.4042,103.4428,\"Asia/Shanghai\"],[\"Jiangzhuang\",36.4944,119.7942,\"Asia/Shanghai\"],[\"丰镇 · Beichengqu\",40.4394,113.1536,\"Asia/Shanghai\"],[\"Xinzhi\",36.4989,111.7047,\"Asia/Shanghai\"],[\"凓城镇 · Licheng\",31.4281,119.4835,\"Asia/Shanghai\"],[\"Zhoucheng\",35.9122,116.3117,\"Asia/Shanghai\"],[\"蔡甸区 · Caidian\",30.5833,114.0333,\"Asia/Shanghai\"],[\"岫岩 · Xiuyan\",40.2928,123.2744,\"Asia/Shanghai\"],[\"珞璜镇 · Luohuang\",29.3466,106.4351,\"Asia/Shanghai\"],[\"上思 · Shangsi\",22.1563,107.9795,\"Asia/Shanghai\"],[\"卡拉苏 · Qarasu\",44.2028,80.4164,\"Asia/Shanghai\"],[\"昌图县 · Changtu\",42.7788,124.0954,\"Asia/Shanghai\"],[\"Huashan\",34.63,116.7358,\"Asia/Shanghai\"],[\"安陆 · Anlu\",31.2575,113.6783,\"Asia/Shanghai\"],[\"依兰县 · Yilan\",46.3223,129.5608,\"Asia/Shanghai\"],[\"临江镇 · Linjiang\",31.0996,108.2196,\"Asia/Shanghai\"],[\"桂平镇 · Guiping\",23.3948,110.0743,\"Asia/Shanghai\"],[\"Kuandian\",40.7286,124.7847,\"Asia/Shanghai\"],[\"Shenzhen City Centre\",22.5359,114.0771,\"Asia/Shanghai\"],[\"鄱阳县 · Poyang\",28.9924,116.6675,\"Asia/Shanghai\"],[\"永丰 · Yongfeng\",27.4549,112.1694,\"Asia/Shanghai\"],[\"Gongchangling\",41.1167,123.45,\"Asia/Shanghai\"],[\"即墨市 · Jimo\",36.3897,120.4622,\"Asia/Shanghai\"],[\"拜泉县 · Baiquan\",47.6066,126.0823,\"Asia/Shanghai\"],[\"姜堰市 · Jiangyan\",32.5061,120.1428,\"Asia/Shanghai\"],[\"石拐区 · Shiguai\",40.7058,110.2856,\"Asia/Shanghai\"],[\"富阳市 · Fuyang\",30.0533,119.9519,\"Asia/Shanghai\"],[\"硖石 · Haining\",30.5363,120.6864,\"Asia/Shanghai\"],[\"Shankou\",21.6,109.7167,\"Asia/Shanghai\"],[\"磐安镇 · Pan’an\",34.7547,105.1117,\"Asia/Shanghai\"],[\"蒙城城关镇 · Mengcheng Chengguanzhen\",33.2661,116.5661,\"Asia/Shanghai\"],[\"新河 · Xinhe\",36.925,119.5931,\"Asia/Shanghai\"],[\"石蟆镇 · Shima\",28.9877,105.9244,\"Asia/Shanghai\"],[\"Fengping\",24.3973,98.5177,\"Asia/Shanghai\"],[\"城关镇 · Chengxian Chengguanzhen\",33.7478,105.7329,\"Asia/Shanghai\"],[\"独山子区 · Xininglu\",44.3396,84.9043,\"Asia/Urumqi\"],[\"玄滩 · Xuantan\",29.2086,105.5697,\"Asia/Shanghai\"],[\"Jiehu\",35.5428,118.455,\"Asia/Shanghai\"],[\"临江 · Linjiang\",41.8069,126.9078,\"Asia/Shanghai\"],[\"潭头镇 · Tantou\",26.0303,119.5974,\"Asia/Shanghai\"],[\"小市 · Xiaoshi\",41.2971,124.1209,\"Asia/Shanghai\"],[\"澄迈县 · Jinjiang\",19.7378,110.0093,\"Asia/Shanghai\"],[\"云门镇 · Yunmen\",30.0827,106.3238,\"Asia/Shanghai\"],[\"武山 · Wushan\",34.7208,104.8858,\"Asia/Shanghai\"],[\"Heishan\",41.6892,122.1128,\"Asia/Shanghai\"],[\"Pengcheng\",36.4311,114.17,\"Asia/Shanghai\"],[\"文江 · Wenjiang\",28.3881,104.5634,\"Asia/Shanghai\"],[\"石码 · Shima\",24.4465,117.8122,\"Asia/Shanghai\"],[\"宁海县 · Ninghai\",29.2892,121.4247,\"Asia/Shanghai\"],[\"柴河镇 · Chaihe\",44.7598,129.6783,\"Asia/Shanghai\"],[\"Minggang\",32.4586,114.0486,\"Asia/Shanghai\"],[\"Tangzhai\",34.4328,116.5911,\"Asia/Shanghai\"],[\"Xunyang\",32.8239,109.3653,\"Asia/Shanghai\"],[\"永宁县 · Yanghe\",38.2785,106.2478,\"Asia/Shanghai\"],[\"东丰 · Dongfeng\",42.6739,125.5289,\"Asia/Shanghai\"],[\"江安 · Jiang’an\",28.7334,105.0683,\"Asia/Shanghai\"],[\"镇赉 · Zhenlai\",45.8496,123.1979,\"Asia/Shanghai\"],[\"渝北区 · Shuangfengqiao\",29.7186,106.6271,\"Asia/Shanghai\"],[\"集安市 · Ji’an\",41.1282,126.1946,\"Asia/Shanghai\"],[\"松江河镇 · Songjianghe\",42.1859,127.4789,\"Asia/Shanghai\"],[\"Luorong\",24.4058,109.6086,\"Asia/Shanghai\"],[\"略阳城关镇 · Lüeyang Chengguanzhen\",33.3321,106.155,\"Asia/Shanghai\"],[\"温岭 · Wenling\",28.3752,121.3842,\"Asia/Shanghai\"],[\"华泾 · Huajing\",31.122,121.4493,\"Asia/Shanghai\"],[\"福清 · Fuqing\",25.7294,119.3747,\"Asia/Shanghai\"],[\"漕河镇 · Caohe\",30.2297,115.4335,\"Asia/Shanghai\"],[\"Gaoliu\",36.8,118.5,\"Asia/Shanghai\"],[\"新州镇 · Xinzhou\",19.7145,109.3115,\"Asia/Shanghai\"],[\"元宝山区 · Pingzhuang\",42.0372,119.2889,\"Asia/Shanghai\"],[\"Tianliu\",37.0,118.7833,\"Asia/Shanghai\"],[\"湟中县 · Lushar\",36.4842,101.5633,\"Asia/Shanghai\"],[\"Wanggou\",34.6715,116.4921,\"Asia/Shanghai\"],[\"峰口镇 · Fengkou\",30.0827,113.3335,\"Asia/Shanghai\"],[\"Shajing Town\",22.7385,113.8076,\"Asia/Shanghai\"],[\"柳河县 · Liuhe\",42.2847,125.7454,\"Asia/Shanghai\"],[\"汉阴县 · Hanyin Chengguanzhen\",32.8914,108.5047,\"Asia/Shanghai\"],[\"娲城 · Wacheng Neighborhood\",33.7833,114.5167,\"Asia/Shanghai\"],[\"多巴镇 · Duoba\",36.6579,101.5337,\"Asia/Shanghai\"],[\"Shaozhuang\",36.747,118.3166,\"Asia/Shanghai\"],[\"泰来县 · Tailai\",46.39,123.4085,\"Asia/Shanghai\"],[\"李市 · Lishi\",29.0789,106.262,\"Asia/Shanghai\"],[\"Chengyang\",35.5794,118.8328,\"Asia/Shanghai\"],[\"Sanchazi\",42.0817,126.6003,\"Asia/Shanghai\"],[\"Daxu\",34.2824,117.5527,\"Asia/Shanghai\"],[\"喀拉喀什镇 · Qaraqash\",37.2725,79.7344,\"Asia/Urumqi\"],[\"太和镇 · Taihe\",30.0995,106.0489,\"Asia/Shanghai\"],[\"涟源市 · Lianyuan\",27.6883,111.6642,\"Asia/Shanghai\"],[\"浯溪镇 · Wuxi\",26.5844,111.859,\"Asia/Shanghai\"],[\"棋盘村 · Qipan\",34.2447,118.2211,\"Asia/Shanghai\"],[\"大足县 · Tangxiang\",29.7023,105.7236,\"Asia/Shanghai\"],[\"Huinan\",42.6225,126.2614,\"Asia/Shanghai\"],[\"Beimeng\",36.6044,119.4956,\"Asia/Shanghai\"],[\"洛阳 · Luoyang\",24.9594,118.683,\"Asia/Shanghai\"],[\"穆棱市 · Muling\",44.9165,130.5171,\"Asia/Shanghai\"],[\"沅江市 · Qionghu\",28.8412,112.3551,\"Asia/Shanghai\"],[\"桦南县 · Huanan\",46.2362,130.5464,\"Asia/Shanghai\"],[\"孝陵卫 · Xiaolingwei\",32.0324,118.854,\"Asia/Shanghai\"],[\"赶水镇 · Ganshui\",28.7422,106.7111,\"Asia/Shanghai\"],[\"Yaoji\",34.0667,117.8167,\"Asia/Shanghai\"],[\"钱塘镇 · Qiantang\",30.1842,106.3165,\"Asia/Shanghai\"],[\"Mengyin\",35.7069,117.9264,\"Asia/Shanghai\"],[\"Jietou\",25.4274,98.6532,\"Asia/Shanghai\"],[\"襄城城关镇 · Xiangcheng\",33.8541,113.4872,\"Asia/Shanghai\"],[\"Bayiji\",34.2667,117.6833,\"Asia/Shanghai\"],[\"Shangkou\",36.9656,118.8831,\"Asia/Shanghai\"],[\"李哥庄 · Ligezhuang\",36.3578,120.1428,\"Asia/Shanghai\"],[\"Dashitou\",43.3067,128.5114,\"Asia/Shanghai\"],[\"Huanghua\",35.8892,119.4578,\"Asia/Shanghai\"],[\"福山区 · Qingyang\",37.4958,121.2581,\"Asia/Shanghai\"],[\"Babu\",24.4167,111.5167,\"Asia/Shanghai\"],[\"霧峰区 · Wufeng\",24.0637,120.698,\"Asia/Taipei\"],[\"Yebaishou\",41.3975,119.6408,\"Asia/Shanghai\"],[\"怀远城关镇 · Huaiyuan Chengguanzhen\",32.9589,117.1657,\"Asia/Shanghai\"],[\"新城 · Dancheng\",33.6441,115.1816,\"Asia/Shanghai\"],[\"Bianzhuang\",34.8486,118.0447,\"Asia/Shanghai\"],[\"Suyangshan\",34.3928,117.7556,\"Asia/Shanghai\"],[\"湾沟镇 · Hepingjie\",42.0597,126.9158,\"Asia/Shanghai\"],[\"Liuxin\",34.3686,117.115,\"Asia/Shanghai\"],[\"Caoqiao\",34.3405,118.1104,\"Asia/Shanghai\"],[\"龙山 · Longshan\",24.6009,98.7042,\"Asia/Shanghai\"],[\"丰润 · Fengrun\",39.8266,118.1382,\"Asia/Shanghai\"],[\"Kunyang\",27.6658,120.5658,\"Asia/Shanghai\"],[\"田庄 · Tianzhuang\",36.7958,119.7367,\"Asia/Shanghai\"],[\"临城镇 · Lingao\",19.9087,109.6872,\"Asia/Shanghai\"],[\"Shikang\",21.7667,109.3167,\"Asia/Shanghai\"],[\"宜黄县 · Fenggang\",27.5457,116.2146,\"Asia/Shanghai\"],[\"Picheng\",34.4667,117.9667,\"Asia/Shanghai\"],[\"仁兆 · Renzhao\",36.6386,120.2036,\"Asia/Shanghai\"],[\"昌黎 · Changli\",39.7065,119.1603,\"Asia/Shanghai\"],[\"开化 · Kaihua\",23.3695,104.2772,\"Asia/Shanghai\"],[\"云梦城关镇 · Yunmeng Chengguanzhen\",31.0625,113.7655,\"Asia/Shanghai\"],[\"洋县 · Yangzhou\",33.2219,107.5427,\"Asia/Shanghai\"],[\"青冈县 · Qinggang\",46.6983,126.0921,\"Asia/Shanghai\"],[\"余江县 · Dengbu\",28.2084,116.8172,\"Asia/Shanghai\"],[\"Yangcun\",39.3639,117.0603,\"Asia/Shanghai\"],[\"长兴县 · Zhicheng\",31.0075,119.9085,\"Asia/Shanghai\"],[\"馬公 · Magong\",23.5654,119.5863,\"Asia/Taipei\"],[\"Lulou\",34.7167,116.7667,\"Asia/Shanghai\"],[\"百合 · Baihecun\",22.1132,107.2359,\"Asia/Shanghai\"],[\"观音 · Guanyin\",29.0993,104.3942,\"Asia/Shanghai\"],[\"马白 · Mabai\",23.0128,104.4508,\"Asia/Shanghai\"],[\"南隆 · Nanlong\",31.3533,106.0631,\"Asia/Shanghai\"],[\"油溪镇 · Youxi\",29.2094,106.1443,\"Asia/Shanghai\"],[\"Xiazhuang\",34.9161,118.6389,\"Asia/Shanghai\"],[\"Changcheng\",36.0906,119.4517,\"Asia/Shanghai\"],[\"山旺 · Shanwang\",36.5454,118.711,\"Asia/Shanghai\"],[\"泊头 · Botou\",38.0737,116.5667,\"Asia/Shanghai\"],[\"Liuku\",25.8505,98.8557,\"Asia/Shanghai\"],[\"宝清 · Baoqing\",46.3245,132.1897,\"Asia/Shanghai\"],[\"旺角 · Mong Kok\",22.3194,114.1714,\"Asia/Hong_Kong\"],[\"Shizhai\",34.8056,116.6389,\"Asia/Shanghai\"],[\"Jinggou\",36.2818,119.5519,\"Asia/Shanghai\"],[\"Fanlou\",34.4809,116.8525,\"Asia/Shanghai\"],[\"Qingshuping\",27.3808,112.0206,\"Asia/Shanghai\"],[\"Changle\",21.8333,109.4167,\"Asia/Shanghai\"],[\"Miaojie\",25.3123,100.2798,\"Asia/Shanghai\"],[\"开通 · Kaitong\",44.8091,123.0811,\"Asia/Shanghai\"],[\"张家川回族自治县 · Zhangjiachuan\",34.9876,106.209,\"Asia/Shanghai\"],[\"平南镇 · Pingnan\",23.5418,110.3893,\"Asia/Shanghai\"],[\"德庆 · Dêqên\",29.9618,90.7188,\"Asia/Shanghai\"],[\"嵩阳 · Songyang\",34.4555,113.0319,\"Asia/Shanghai\"],[\"Yucheng\",34.9289,116.4653,\"Asia/Shanghai\"],[\"水口镇 · Shuikou\",23.9837,115.8958,\"Asia/Shanghai\"],[\"双阳 · Shuangyang\",43.5226,125.6595,\"Asia/Shanghai\"],[\"碾子山 · Nianzishan\",47.5134,122.8879,\"Asia/Shanghai\"],[\"宾县 · Bin Xian\",45.7427,127.4605,\"Asia/Shanghai\"],[\"镇海区 · Zhaobaoshan\",29.9695,121.6875,\"Asia/Shanghai\"],[\"虎石台 · Hushitai\",41.9417,123.5027,\"Asia/Shanghai\"],[\"Zhangji\",34.1375,117.3756,\"Asia/Shanghai\"],[\"霍邱城关镇 · Huoqiu Chengguanzhen\",32.3547,116.2939,\"Asia/Shanghai\"],[\"木渎镇 · Mudu\",31.256,120.5186,\"Asia/Shanghai\"],[\"Fengyi\",25.584,100.3118,\"Asia/Shanghai\"],[\"Nandu\",22.8525,110.8233,\"Asia/Shanghai\"],[\"龙凤坝镇 · Longfeng\",30.3879,109.5071,\"Asia/Shanghai\"],[\"Taoluo\",35.2739,119.3703,\"Asia/Shanghai\"],[\"颖上城关镇 · Yingshang Chengguanzhen\",32.6294,116.2701,\"Asia/Shanghai\"],[\"Xiangzhou\",36.1644,119.4189,\"Asia/Shanghai\"],[\"蒲庙镇 · Yongning\",22.761,108.4836,\"Asia/Shanghai\"],[\"新野 · Xinye\",32.5288,112.3651,\"Asia/Shanghai\"],[\"梨树 · Lishu\",43.3073,124.3337,\"Asia/Shanghai\"],[\"阿里河镇 · Oroqen Zizhiqi\",50.5667,123.7167,\"Asia/Shanghai\"],[\"仙居 · Xianju\",28.8547,120.7317,\"Asia/Shanghai\"],[\"丰城市 · Jianguang\",28.1938,115.7836,\"Asia/Shanghai\"],[\"东宁县 · Dongning\",44.0844,131.1184,\"Asia/Shanghai\"],[\"大石镇 · Dashi\",30.0937,106.2223,\"Asia/Shanghai\"],[\"Tianchang\",37.9981,114.0156,\"Asia/Shanghai\"],[\"Xifeng\",42.7372,124.7222,\"Asia/Shanghai\"],[\"Datong\",32.6208,117.0632,\"Asia/Shanghai\"],[\"Nanhu\",35.4878,119.3458,\"Asia/Shanghai\"],[\"鄢城 · Yicheng\",31.7047,112.2561,\"Asia/Shanghai\"],[\"歇马镇 · Xiema\",29.7741,106.3688,\"Asia/Shanghai\"],[\"阎良 · Yanliang\",34.6592,109.2292,\"Asia/Shanghai\"],[\"塔河 · Tahe\",52.3215,124.6976,\"Asia/Shanghai\"],[\"Erdaojiang\",41.7764,126.0319,\"Asia/Shanghai\"],[\"天彭 · Tianpeng\",30.9866,103.9393,\"Asia/Shanghai\"],[\"Xixiang\",35.1628,112.865,\"Asia/Shanghai\"],[\"Yaowan\",34.1833,118.0667,\"Asia/Shanghai\"],[\"Mujiayingzi\",42.1167,118.7833,\"Asia/Shanghai\"],[\"丁家镇 · Dingjia\",29.409,106.1423,\"Asia/Shanghai\"],[\"阆中 · Langzhong\",31.5504,105.9938,\"Asia/Shanghai\"],[\"莲峰 · Liancheng\",25.7183,116.7489,\"Asia/Shanghai\"],[\"江北 · Jiangbei\",29.7283,106.6351,\"Asia/Shanghai\"],[\"龙港 · Longgang\",37.6518,120.3306,\"Asia/Shanghai\"],[\"Taitou\",37.0273,118.6339,\"Asia/Shanghai\"],[\"姑熟 · Gushu\",31.5605,118.4815,\"Asia/Shanghai\"],[\"分水镇 · Fenshui\",30.7197,108.0833,\"Asia/Shanghai\"],[\"Wujing\",36.45,118.4,\"Asia/Shanghai\"],[\"五城镇 · Wucheng\",29.6008,118.1749,\"Asia/Shanghai\"],[\"余下镇 · Yuxia\",34.0615,108.6291,\"Asia/Shanghai\"],[\"汝南 · Runan\",33.0002,114.3459,\"Asia/Shanghai\"],[\"Gucheng\",36.9535,118.7625,\"Asia/Shanghai\"],[\"Taozhuang\",34.85,117.3333,\"Asia/Shanghai\"],[\"三道河子镇 · Sandaohezi\",44.326,85.6201,\"Asia/Urumqi\"],[\"永北 · Yongbei\",26.6462,100.7807,\"Asia/Shanghai\"],[\"大泽山 · Dazeshan\",36.9887,119.9222,\"Asia/Shanghai\"],[\"朱家角镇 · Zhujiajiao\",31.1076,121.057,\"Asia/Shanghai\"],[\"乌镇 · Wuzhen\",30.7454,120.4851,\"Asia/Shanghai\"],[\"江口镇 · Jiangkou\",25.4869,119.1983,\"Asia/Shanghai\"],[\"玛沁县 · Maqin County\",34.4744,100.245,\"Asia/Shanghai\"],[\"南浦镇 · Pucheng\",27.9233,118.5333,\"Asia/Shanghai\"],[\"白马井镇 · Baimajing\",19.712,109.218,\"Asia/Shanghai\"],[\"团堡镇 · Tuanbao\",30.3367,109.1346,\"Asia/Shanghai\"],[\"Wenshang\",35.7275,116.4961,\"Asia/Shanghai\"],[\"明水县 · Mingshui\",47.1794,125.9028,\"Asia/Shanghai\"],[\"Huiqu\",36.2714,119.049,\"Asia/Shanghai\"],[\"甘南县 · Gannan\",47.9204,123.5005,\"Asia/Shanghai\"],[\"Pánlóngchéng Jīngjì Kāifāqū\",30.6931,114.2707,\"Asia/Shanghai\"],[\"建瓯市 · Jian’ou\",27.0415,118.319,\"Asia/Shanghai\"],[\"Tashan\",34.3361,117.5667,\"Asia/Shanghai\"],[\"集贤 · Jixian\",46.7259,131.1331,\"Asia/Shanghai\"],[\"合作市 · Hezuo\",34.9856,102.9094,\"Asia/Shanghai\"],[\"海州 · Haizhou\",34.5817,119.1289,\"Asia/Shanghai\"],[\"Longgu\",34.9033,116.8067,\"Asia/Shanghai\"],[\"Yigou\",35.8114,114.3167,\"Asia/Shanghai\"],[\"浪头 · Langtoucun\",40.0407,124.3353,\"Asia/Shanghai\"],[\"Xiaoweizhai\",26.1903,107.5125,\"Asia/Shanghai\"],[\"安图 · Antu\",43.1025,128.9085,\"Asia/Shanghai\"],[\"Suozhen\",36.9539,118.1047,\"Asia/Shanghai\"],[\"太伏 · Taifu\",28.982,105.637,\"Asia/Shanghai\"],[\"Shiqiaozi\",36.1617,119.2631,\"Asia/Shanghai\"],[\"鸡东 · Jidong\",45.256,131.1164,\"Asia/Shanghai\"],[\"分宜县 · Fenyi\",27.8112,114.668,\"Asia/Shanghai\"],[\"重龙 · Chonglong\",29.7806,104.8522,\"Asia/Shanghai\"],[\"Xinglongshan\",43.9561,125.4661,\"Asia/Shanghai\"],[\"马尔康市 · Barkam\",31.9006,102.2209,\"Asia/Shanghai\"],[\"潼川 · Tongchuan\",31.0941,105.0873,\"Asia/Shanghai\"],[\"Shibuzi\",36.1239,119.1028,\"Asia/Shanghai\"],[\"Lixian\",34.19,105.1725,\"Asia/Shanghai\"],[\"洪桥 · Hongqiao\",26.7684,112.1081,\"Asia/Shanghai\"],[\"长白 · Changbai\",41.4177,128.1962,\"Asia/Shanghai\"],[\"朱沱镇 · Zhutuo\",29.0184,105.8488,\"Asia/Shanghai\"],[\"定陶 · Dingtao\",35.0744,115.5658,\"Asia/Shanghai\"],[\"Dongxi\",28.7614,106.6611,\"Asia/Shanghai\"],[\"巨野镇 · Juye\",35.3874,116.0717,\"Asia/Shanghai\"],[\"Jing'an\",34.4962,116.9225,\"Asia/Shanghai\"],[\"额敏镇 · Emin\",46.5258,83.6342,\"Asia/Urumqi\"],[\"龙潭镇 · Longtan\",28.7572,108.9641,\"Asia/Shanghai\"],[\"安乡城关镇 · Shenliu\",29.4137,112.1643,\"Asia/Shanghai\"],[\"Maocun\",34.3767,117.2506,\"Asia/Shanghai\"],[\"黄陂区 · Huangpi\",30.8845,114.3779,\"Asia/Shanghai\"],[\"山河村 · Shanhecun\",45.7113,128.5803,\"Asia/Shanghai\"],[\"Yantongshan\",43.2919,126.0094,\"Asia/Shanghai\"],[\"Guiren\",33.6697,118.1889,\"Asia/Shanghai\"],[\"小瀝源 · Siu Lek Yuen\",22.3817,114.2126,\"Asia/Hong_Kong\"],[\"Zhongxing\",33.7039,118.6792,\"Asia/Shanghai\"],[\"朗乡镇 · Langxiang\",46.9498,128.8685,\"Asia/Shanghai\"],[\"巴格其 · Bageqi\",37.1407,79.8351,\"Asia/Urumqi\"],[\"绥棱县 · Suiling\",47.2349,127.1077,\"Asia/Shanghai\"],[\"湘阴县 · Wenxing\",28.6821,112.8786,\"Asia/Shanghai\"],[\"Yingli\",37.065,118.8103,\"Asia/Shanghai\"],[\"Baishishan\",43.5833,127.5667,\"Asia/Shanghai\"],[\"宁海 · Ninghai\",37.3842,121.6086,\"Asia/Shanghai\"],[\"Zhuzhai\",34.7611,116.8139,\"Asia/Shanghai\"],[\"Jinji\",23.2281,110.8261,\"Asia/Shanghai\"],[\"Weining\",26.85,104.2333,\"Asia/Shanghai\"],[\"庆符 · Qingfu\",28.437,104.5162,\"Asia/Shanghai\"],[\"道口 · Daokou\",35.569,114.5159,\"Asia/Shanghai\"],[\"Yashan\",22.1975,109.9419,\"Asia/Shanghai\"],[\"南台镇 · Nantai\",40.9241,122.8044,\"Asia/Shanghai\"],[\"Changleng\",28.7,115.8167,\"Asia/Shanghai\"],[\"湖塘 · Hutang\",31.5343,119.49,\"Asia/Shanghai\"],[\"Sanchuan\",26.7504,100.6589,\"Asia/Shanghai\"],[\"Sitou\",36.3128,118.4119,\"Asia/Shanghai\"],[\"玉湖 · Zibihu\",26.1143,99.9527,\"Asia/Shanghai\"],[\"白帝镇 · Baidi\",31.0576,109.5909,\"Asia/Shanghai\"],[\"高沟镇 · Gaogou\",34.0175,119.1886,\"Asia/Shanghai\"],[\"Linghai\",41.1653,121.3667,\"Asia/Shanghai\"],[\"龙市 · Longshi\",30.2147,106.4574,\"Asia/Shanghai\"],[\"Xuzhuang\",34.2961,117.458,\"Asia/Shanghai\"],[\"紫荆路 · Gongyi\",34.7553,113.0114,\"Asia/Shanghai\"],[\"Qinnan\",33.2531,119.9133,\"Asia/Shanghai\"],[\"葛兰镇 · Gelan\",30.0359,107.1161,\"Asia/Shanghai\"],[\"Dalianwan\",39.0286,121.695,\"Asia/Shanghai\"],[\"长岭 · Changling\",44.273,123.9756,\"Asia/Shanghai\"],[\"老街 · Bonan\",25.4633,99.5283,\"Asia/Shanghai\"],[\"Zhuyi\",31.0254,109.3856,\"Asia/Shanghai\"],[\"清水县 · Yongqing\",34.7481,106.1269,\"Asia/Shanghai\"],[\"临邛 · Linqiong\",30.4159,103.4609,\"Asia/Shanghai\"],[\"祁山 · Qishan\",29.8443,117.7194,\"Asia/Shanghai\"],[\"Lanshan\",33.9361,117.725,\"Asia/Shanghai\"],[\"Anjiang\",27.3194,110.1031,\"Asia/Shanghai\"],[\"新青 · Xinqing\",48.287,129.5234,\"Asia/Shanghai\"],[\"杜尔伯特蒙古族自治县 · Dorbod\",46.8614,124.442,\"Asia/Shanghai\"],[\"宁乡县 · Yutan\",28.2583,112.5605,\"Asia/Shanghai\"],[\"Ahu\",34.3766,118.6031,\"Asia/Shanghai\"],[\"巴彦县 · Bayan\",46.0762,127.3937,\"Asia/Shanghai\"],[\"里岔 · Licha\",36.0572,119.7833,\"Asia/Shanghai\"],[\"屏锦镇 · Pingjin\",30.6118,107.545,\"Asia/Shanghai\"],[\"石林镇 · Shilin\",24.8188,103.3324,\"Asia/Shanghai\"],[\"Liguo\",34.5529,117.333,\"Asia/Shanghai\"],[\"Huangnihe\",43.5583,128.0239,\"Asia/Shanghai\"],[\"満州里市 · Manzhouli\",49.6,117.4333,\"Asia/Shanghai\"],[\"护国 · Huguo\",28.5863,105.3666,\"Asia/Shanghai\"],[\"Liuji\",34.3583,117.0528,\"Asia/Shanghai\"],[\"Liangzhai\",34.5,116.75,\"Asia/Shanghai\"],[\"Wangji\",33.9833,117.75,\"Asia/Shanghai\"],[\"南县 · Nanzhou\",29.3638,112.4065,\"Asia/Shanghai\"],[\"云锦 · Yunjin\",29.0818,105.6433,\"Asia/Shanghai\"],[\"罗泾镇 · Luojing\",31.4782,121.3391,\"Asia/Shanghai\"],[\"秀茂坪 · Sau Mau Ping\",22.3202,114.235,\"Asia/Hong_Kong\"],[\"Fangcun\",34.0864,117.4736,\"Asia/Shanghai\"],[\"溪湖 · Xihu\",23.9568,120.4792,\"Asia/Taipei\"],[\"Yongjian\",25.4254,100.2124,\"Asia/Shanghai\"],[\"Xiazhuang\",25.4,100.8333,\"Asia/Shanghai\"],[\"明村 · Mingcun\",36.7536,119.6408,\"Asia/Shanghai\"],[\"Lingcheng\",33.8164,118.1136,\"Asia/Shanghai\"],[\"金顶 · Jinding\",26.439,99.4406,\"Asia/Shanghai\"],[\"清溪场镇 · Qingxichang\",28.4042,108.9044,\"Asia/Shanghai\"],[\"金华 · Jinhua\",26.538,99.9172,\"Asia/Shanghai\"],[\"Buzhuang\",36.9122,119.5566,\"Asia/Shanghai\"],[\"Shiquan\",33.0408,108.2364,\"Asia/Shanghai\"],[\"Yangtun\",34.8833,116.8833,\"Asia/Shanghai\"],[\"章凤 · Zhangfeng\",24.1906,97.8019,\"Asia/Shanghai\"],[\"潮洲 · Chaozhou\",22.5499,120.5407,\"Asia/Taipei\"],[\"Yousuo\",26.0253,100.0677,\"Asia/Shanghai\"],[\"Zhaozhuang\",34.7389,116.4556,\"Asia/Shanghai\"],[\"Tangzhang\",34.1478,117.254,\"Asia/Shanghai\"],[\"Lingwu\",38.1019,106.3402,\"Asia/Shanghai\"],[\"Taoyuan\",33.8528,117.7703,\"Asia/Shanghai\"],[\"北苏镇 · Beisu\",38.1548,114.8069,\"Asia/Shanghai\"],[\"武陵源区 · Wulingyuan\",29.3494,110.5441,\"Asia/Shanghai\"],[\"Malingshan\",34.2035,118.3565,\"Asia/Shanghai\"],[\"Hualong\",36.9459,118.5886,\"Asia/Shanghai\"],[\"店埠 · Dianbu\",36.7017,120.3511,\"Asia/Shanghai\"],[\"大兴 · Daxing\",27.2637,100.8639,\"Asia/Shanghai\"],[\"Puji\",36.1319,119.7211,\"Asia/Shanghai\"],[\"星桥镇 · Xingqiao\",30.3994,120.2517,\"Asia/Shanghai\"],[\"松岭 · Songlingcun\",40.2939,118.2714,\"Asia/Shanghai\"],[\"云山 · Yunshan\",36.8242,120.2261,\"Asia/Shanghai\"],[\"Dapeng\",34.2844,117.0752,\"Asia/Shanghai\"],[\"Sanzhuang\",35.5033,119.1717,\"Asia/Shanghai\"],[\"大堂区 · Sé\",22.1909,113.5473,\"Asia/Macau\"],[\"扎瓦 · Zhawa\",37.2142,79.629,\"Asia/Shanghai\"],[\"Jitai\",36.7572,118.7387,\"Asia/Shanghai\"],[\"Zizhuang\",34.3615,117.4882,\"Asia/Shanghai\"],[\"Liangji\",33.9639,117.9694,\"Asia/Shanghai\"],[\"安文镇 · Ānwén\",29.0595,120.4377,\"Asia/Shanghai\"],[\"Dashahe\",34.5385,116.6245,\"Asia/Shanghai\"],[\"渡舟镇 · Duzhou\",29.8785,107.0784,\"Asia/Shanghai\"],[\"中心 · Zhongxin\",26.6167,101.2715,\"Asia/Shanghai\"],[\"Weimiao\",34.5833,117.0667,\"Asia/Shanghai\"],[\"調景嶺 · Tiu Keng Leng\",22.2985,114.2511,\"Asia/Hong_Kong\"],[\"Qishan\",34.6333,116.8,\"Asia/Shanghai\"],[\"风顺堂区 · São Lourenço\",22.1885,113.5349,\"Asia/Macau\"],[\"泽普 · Zepu\",38.1887,77.2708,\"Asia/Urumqi\"],[\"Liuquan\",34.4342,117.2983,\"Asia/Shanghai\"],[\"Zhefang\",24.2667,98.2833,\"Asia/Shanghai\"],[\"三汇镇 · Sanhui\",30.0817,106.5912,\"Asia/Shanghai\"],[\"店子 · Dianzi\",36.9011,119.8657,\"Asia/Shanghai\"],[\"盘龙镇 · Panlong\",29.5003,105.3707,\"Asia/Shanghai\"],[\"Gangshang\",34.5215,118.1184,\"Asia/Shanghai\"],[\"Guanshan\",33.7983,117.8664,\"Asia/Shanghai\"],[\"打通镇 · Datong\",28.5965,106.6675,\"Asia/Shanghai\"],[\"水江镇 · Shuijiang\",29.2476,107.2844,\"Asia/Shanghai\"],[\"Guanzhuang\",36.2633,119.1939,\"Asia/Shanghai\"],[\"白碱滩镇 · Baijiantan\",45.693,85.1394,\"Asia/Urumqi\"],[\"Shanji\",34.2047,117.5956,\"Asia/Shanghai\"],[\"Lhünzhub\",29.8931,91.2617,\"Asia/Shanghai\"],[\"宁强县 · Hanyuan\",32.834,106.2503,\"Asia/Shanghai\"],[\"洋河 · Yanghe\",36.1381,119.9135,\"Asia/Shanghai\"],[\"南涧 · Nanjian\",25.0449,100.5144,\"Asia/Shanghai\"],[\"纳溪 · Naxi\",28.7742,105.3649,\"Asia/Shanghai\"],[\"珍溪镇 · Zhenxi\",29.8993,107.4645,\"Asia/Shanghai\"],[\"LOHAS Park\",22.2932,114.2725,\"Asia/Hong_Kong\"],[\"永新镇 · Yongxin\",28.9667,106.5333,\"Asia/Shanghai\"],[\"Changdian\",34.7759,116.5834,\"Asia/Shanghai\"],[\"Xinglou\",34.5667,117.8278,\"Asia/Shanghai\"],[\"Mihe\",36.621,118.5287,\"Asia/Shanghai\"],[\"工卡 · Maizhokunggar\",29.8377,91.7289,\"Asia/Shanghai\"],[\"双河镇 · Shuanghe\",29.3207,105.5694,\"Asia/Shanghai\"],[\"广顺 · Guangshun\",29.3748,105.5265,\"Asia/Shanghai\"],[\"高粱镇 · Gaoliang\",30.8239,108.3022,\"Asia/Shanghai\"],[\"东成镇 · Dongcheng\",19.7087,109.4561,\"Asia/Shanghai\"],[\"锦江镇 · Jinjiang\",28.4005,116.8998,\"Asia/Shanghai\"],[\"高安镇 · Gao’an\",30.2902,107.462,\"Asia/Shanghai\"],[\"Jiawang Zhen\",34.422,117.4676,\"Asia/Shanghai\"],[\"海阳镇 · Haiyang\",29.7861,118.177,\"Asia/Shanghai\"],[\"Gupi\",34.1139,117.8828,\"Asia/Shanghai\"],[\"Xinhe\",34.1861,117.9878,\"Asia/Shanghai\"],[\"Ningdong\",38.1614,106.585,\"Asia/Shanghai\"],[\"先锋镇 · Xianfeng\",29.21,106.3001,\"Asia/Shanghai\"],[\"Gaoliu\",34.3167,118.5167,\"Asia/Shanghai\"],[\"Liutuan\",36.9333,119.3833,\"Asia/Shanghai\"],[\"大安镇 · Da’an\",29.3831,106.0148,\"Asia/Shanghai\"],[\"Chenlou\",34.3889,118.05,\"Asia/Shanghai\"],[\"Qing’an\",33.9694,117.8806,\"Asia/Shanghai\"],[\"石堰镇 · Shiyan\",30.0834,107.1722,\"Asia/Shanghai\"],[\"大路镇 · Dalu\",29.7298,106.2177,\"Asia/Shanghai\"],[\"Qianliu\",22.9,100.2,\"Asia/Shanghai\"],[\"Weiji\",34.0333,117.95,\"Asia/Shanghai\"],[\"Wangfen\",36.55,118.3833,\"Asia/Shanghai\"],[\"接龙镇 · Jielong\",29.2495,106.7766,\"Asia/Shanghai\"],[\"Santangpu\",27.4056,111.9869,\"Asia/Shanghai\"],[\"双福镇 · Shuangfu\",29.4136,106.2701,\"Asia/Shanghai\"],[\"当曲卡 · Damxung\",30.478,91.1055,\"Asia/Shanghai\"],[\"白梓镇 · Baizi\",30.094,105.713,\"Asia/Shanghai\"],[\"岳溪镇 · Yuexi\",30.9113,108.1593,\"Asia/Shanghai\"],[\"東港 · Donggang\",22.4652,120.4493,\"Asia/Taipei\"],[\"崔家集 · Cuijiaji\",36.6253,119.7133,\"Asia/Shanghai\"],[\"界石 · Jieshi\",29.3896,106.6078,\"Asia/Shanghai\"],[\"大牟家 · Damoujia\",36.5436,119.8133,\"Asia/Shanghai\"],[\"Shunhe\",34.8418,116.5572,\"Asia/Shanghai\"],[\"Gongqingcheng\",29.2492,115.8095,\"Asia/Shanghai\"],[\"Hekou\",34.5778,116.8139,\"Asia/Shanghai\"],[\"Hanwang\",34.1944,117.0833,\"Asia/Shanghai\"],[\"钓鱼城 · Diaoyucheng\",29.9988,106.2661,\"Asia/Shanghai\"],[\"长沙镇 · Changsha\",31.0,108.3046,\"Asia/Shanghai\"],[\"孔滩 · Kongtan\",29.1441,104.6747,\"Asia/Shanghai\"],[\"Sunlou\",34.6667,116.5833,\"Asia/Shanghai\"],[\"共和县 · Qabqa\",36.2814,100.6131,\"Asia/Shanghai\"],[\"Nanpeng\",29.3347,106.6522,\"Asia/Shanghai\"],[\"愉群翁 · Yuqunweng\",43.8744,81.6206,\"Asia/Urumqi\"],[\"Shaji\",33.9,118.1333,\"Asia/Shanghai\"],[\"南桐镇 · Nantong\",28.9439,106.8819,\"Asia/Shanghai\"],[\"和静县 · Hejing\",42.3107,86.391,\"Asia/Shanghai\"],[\"三教镇 · Sanjiao\",29.488,105.8676,\"Asia/Shanghai\"],[\"Sankeshu\",26.5637,108.0658,\"Asia/Shanghai\"],[\"芒市 · Mangshi\",24.4533,98.5704,\"Asia/Shanghai\"],[\"Biantang\",34.4233,117.6454,\"Asia/Shanghai\"],[\"白涛镇 · Baitao\",29.5508,107.4869,\"Asia/Shanghai\"],[\"石角镇 · Shijiao\",28.9244,106.7561,\"Asia/Shanghai\"],[\"美孚 · Mei Foo\",22.3372,114.1386,\"Asia/Hong_Kong\"],[\"Chefushan\",34.4753,117.7512,\"Asia/Shanghai\"],[\"Shuanggou\",34.0353,117.5781,\"Asia/Shanghai\"],[\"Gudong\",25.3417,98.483,\"Asia/Shanghai\"],[\"Pingli\",32.3847,109.3456,\"Asia/Shanghai\"],[\"Zouzhuang\",34.6,118.05,\"Asia/Shanghai\"],[\"Dangjiang\",21.65,109.1167,\"Asia/Shanghai\"],[\"屏山 · Ping Shan\",22.4411,114.0061,\"Asia/Hong_Kong\"],[\"塘坝镇 · Tangba\",30.0165,105.7973,\"Asia/Shanghai\"],[\"Nongzhang\",24.616,97.8822,\"Asia/Shanghai\"],[\"河口 · Hekou\",22.5385,104.0111,\"Asia/Shanghai\"],[\"Yanguan\",34.2639,105.4639,\"Asia/Shanghai\"],[\"Shangyun\",23.0519,99.8284,\"Asia/Shanghai\"],[\"Dahuangshan\",34.2934,117.3444,\"Asia/Shanghai\"],[\"Hegou\",34.4083,118.1222,\"Asia/Shanghai\"],[\"Qisha\",21.575,108.479,\"Asia/Shanghai\"],[\"水土镇 · Shuitu\",29.7822,106.4974,\"Asia/Shanghai\"],[\"古岘 · Guxian\",36.7341,120.2256,\"Asia/Shanghai\"],[\"Jiushan\",36.1961,118.465,\"Asia/Shanghai\"],[\"Xindian\",34.1428,118.3353,\"Asia/Shanghai\"],[\"邮亭镇 · Youting\",29.4313,105.7376,\"Asia/Shanghai\"],[\"Qingshanquan\",34.4164,117.3631,\"Asia/Shanghai\"],[\"草街 · Caojie\",29.9976,106.3902,\"Asia/Shanghai\"],[\"Beiwangli\",38.6208,115.3964,\"Asia/Shanghai\"],[\"竹山 · Zhushan\",23.7555,120.682,\"Asia/Taipei\"],[\"双龙 · Shuanglong\",28.4521,104.3449,\"Asia/Shanghai\"],[\"高家镇 · Gaojia\",30.0204,107.86,\"Asia/Shanghai\"],[\"蔡家镇 · Caijia\",28.9089,106.3404,\"Asia/Shanghai\"],[\"日庄 · Rizhuang\",36.9508,120.3831,\"Asia/Shanghai\"],[\"罕艾日克 · Han’airike\",37.5417,80.1174,\"Asia/Urumqi\"],[\"石壕镇 · Shihao\",28.5408,106.6807,\"Asia/Shanghai\"],[\"静观镇 · Jingguan\",29.8955,106.5639,\"Asia/Shanghai\"],[\"二林 · Erlin\",23.9005,120.3689,\"Asia/Taipei\"],[\"蕨溪 · Juexi\",28.9241,104.2615,\"Asia/Shanghai\"],[\"Gaozuo\",33.9031,118.0397,\"Asia/Shanghai\"],[\"中和镇 · Zhonghe\",31.1766,108.1316,\"Asia/Shanghai\"],[\"轮胎县 · Luntai\",41.7795,84.2705,\"Asia/Shanghai\"],[\"奎牙 · Kuiya\",37.296,79.6358,\"Asia/Shanghai\"],[\"Zhigou\",35.9167,119.2167,\"Asia/Shanghai\"],[\"博望山 · Bowangshan\",28.3077,105.0522,\"Asia/Shanghai\"],[\"Huangji\",34.4333,116.9833,\"Asia/Shanghai\"],[\"Zhengji\",34.4372,117.0389,\"Asia/Shanghai\"],[\"Jiangping\",21.6,108.15,\"Asia/Shanghai\"],[\"Baichihe\",36.1156,119.5333,\"Asia/Shanghai\"],[\"Tushan\",34.2208,117.8369,\"Asia/Shanghai\"],[\"官渡镇 · Guandu\",30.9559,109.847,\"Asia/Shanghai\"],[\"剑阁县 · Pu’an\",32.0373,105.4669,\"Asia/Shanghai\"],[\"啟德 · Kai Tak\",22.3242,114.1974,\"Asia/Hong_Kong\"],[\"白朗县 · Luobuqiongzi\",29.1667,89.25,\"Asia/Shanghai\"],[\"额尔古纳市 · E’erguna\",50.2236,120.1709,\"Asia/Shanghai\"],[\"Daizhuang\",34.5139,117.8528,\"Asia/Shanghai\"],[\"竹海 · Zhuhai\",29.3694,105.8832,\"Asia/Shanghai\"],[\"Qushi\",25.2167,98.6,\"Asia/Shanghai\"],[\"Guangtong\",25.1686,101.7486,\"Asia/Shanghai\"],[\"马力乡 · Mali\",34.6646,104.6978,\"Asia/Shanghai\"],[\"马连庄镇 · Malianzhuang\",37.0748,120.4625,\"Asia/Shanghai\"],[\"凤翔镇 · Luobei\",47.576,130.8131,\"Asia/Shanghai\"],[\"铁桥镇 · Tieqiao\",31.04,108.1336,\"Asia/Shanghai\"],[\"Wangyuan\",38.3841,106.272,\"Asia/Shanghai\"],[\"古陶镇 · Gutao\",37.2025,112.1781,\"Asia/Shanghai\"],[\"曲水 · Quxu\",29.3554,90.7321,\"Asia/Shanghai\"],[\"琼中黎族苗族自治县 · Yinggen\",19.0383,109.84,\"Asia/Shanghai\"],[\"Wuduan\",34.5744,117.0953,\"Asia/Shanghai\"],[\"天城镇 · Tiancheng\",30.8676,108.3697,\"Asia/Shanghai\"],[\"蔺市 · Linshi\",29.667,107.1923,\"Asia/Shanghai\"],[\"Shiji\",34.2,118.4833,\"Asia/Shanghai\"],[\"Naliang\",21.6667,107.8667,\"Asia/Shanghai\"],[\"白花 · Baihua\",29.0942,104.6085,\"Asia/Shanghai\"],[\"佐敦 · Jordan\",22.3054,114.17,\"Asia/Hong_Kong\"],[\"古冶 · Guye\",39.7408,118.4507,\"Asia/Shanghai\"],[\"兴隆镇 · Xinglong\",30.6572,109.446,\"Asia/Shanghai\"],[\"来苏镇 · Laisu\",29.266,105.778,\"Asia/Shanghai\"],[\"澄溪镇 · Chengxi\",30.2092,107.2589,\"Asia/Shanghai\"],[\"Chongxing\",38.0333,106.3,\"Asia/Shanghai\"],[\"巡司 · Xunsi\",28.1008,104.5606,\"Asia/Shanghai\"],[\"百胜镇 · Baisheng\",29.8135,107.3926,\"Asia/Shanghai\"],[\"吐祥镇 · Tuxiang\",30.7129,109.1556,\"Asia/Shanghai\"],[\"南门镇 · Nanmen\",30.9619,108.2433,\"Asia/Shanghai\"],[\"白鹤 · Baihe\",31.2635,108.4637,\"Asia/Shanghai\"],[\"喀尔赛 · Ka'ersai\",37.4842,79.5956,\"Asia/Shanghai\"],[\"Anyuan\",34.8808,105.2764,\"Asia/Shanghai\"],[\"西丽 · Xili\",22.5881,113.9479,\"Asia/Shanghai\"],[\"罗龙 · Luolong\",28.8056,104.8991,\"Asia/Shanghai\"],[\"埔子 · Buzi\",24.2101,120.5725,\"Asia/Taipei\"],[\"Sihu\",34.6262,117.9714,\"Asia/Shanghai\"],[\"木棠镇 · Mutang\",19.8075,109.3454,\"Asia/Shanghai\"],[\"Pat Heung\",22.4461,114.0923,\"Asia/Hong_Kong\"],[\"Shiwan\",21.75,109.2,\"Asia/Shanghai\"],[\"云台镇 · Yuntai\",30.1389,107.2049,\"Asia/Shanghai\"],[\"安富镇 · Anfu\",29.3594,105.4674,\"Asia/Shanghai\"],[\"Mingguang\",25.4931,98.5415,\"Asia/Shanghai\"],[\"南墅镇 · Nanshu\",37.0201,120.3373,\"Asia/Shanghai\"],[\"东阳 · Dongyang\",29.8329,106.4507,\"Asia/Shanghai\"],[\"大兴镇 · Daxing\",29.556,106.16,\"Asia/Shanghai\"],[\"Gangtou\",34.3174,118.2072,\"Asia/Shanghai\"],[\"赵家镇 · Zhaojia\",31.0813,108.4116,\"Asia/Shanghai\"],[\"双槐镇 · Shuanghuai\",30.1842,106.5558,\"Asia/Shanghai\"],[\"名山 · Mingshan\",29.8783,107.6992,\"Asia/Shanghai\"],[\"陈食镇 · Chenshi\",29.3145,105.9926,\"Asia/Shanghai\"],[\"三江镇 · Sanjiang\",28.9447,106.7106,\"Asia/Shanghai\"],[\"Chenghai\",26.4617,100.6786,\"Asia/Shanghai\"],[\"保家镇 · Baojia\",29.4387,108.3132,\"Asia/Shanghai\"],[\"Liji\",33.7667,117.7833,\"Asia/Shanghai\"],[\"石船镇 · Shichuan\",29.7658,106.8228,\"Asia/Shanghai\"],[\"城关镇 · Huixian Chengguanzhen\",33.7683,106.0808,\"Asia/Shanghai\"],[\"温泉镇 · Wenquan\",31.3591,108.5222,\"Asia/Shanghai\"],[\"竹园镇 · Zhuyuan\",31.3022,109.2581,\"Asia/Shanghai\"],[\"西林吉 · Xilinji\",52.9906,123.2352,\"Asia/Shanghai\"],[\"Mangbang\",24.9319,98.6701,\"Asia/Shanghai\"],[\"Lequn\",22.5776,113.8739,\"Asia/Shanghai\"],[\"白什坎特 · Baishikante\",38.4596,77.479,\"Asia/Shanghai\"],[\"Whampoa\",22.305,114.1902,\"Asia/Hong_Kong\"],[\"Jinzhongzi\",36.3346,119.2581,\"Asia/Shanghai\"],[\"十里 · Shili\",33.9518,105.2925,\"Asia/Shanghai\"],[\"Balu\",34.1887,117.9126,\"Asia/Shanghai\"],[\"仁义镇 · Renyi\",29.5074,105.4783,\"Asia/Shanghai\"],[\"公平镇 · Gongping\",31.127,109.1972,\"Asia/Shanghai\"],[\"太保市 · Taibao\",23.4594,120.3322,\"Asia/Taipei\"],[\"柏林镇 · Bailin\",28.736,106.4604,\"Asia/Shanghai\"],[\"嘉川镇 · Jiachuan\",32.2091,106.2149,\"Asia/Shanghai\"],[\"Choi Wan\",22.3339,114.2137,\"Asia/Hong_Kong\"],[\"河头店镇 · Hetoudian\",37.0184,120.5737,\"Asia/Shanghai\"],[\"西湖 · Xihu\",29.1002,106.3954,\"Asia/Shanghai\"],[\"安香 · Anxiang\",38.3834,114.5405,\"Asia/Shanghai\"],[\"Xinxing\",36.0492,119.5414,\"Asia/Shanghai\"],[\"Zhancheng\",34.175,117.7629,\"Asia/Shanghai\"],[\"Miaozi\",36.6386,118.2314,\"Asia/Shanghai\"],[\"卫星湖 · Weixinghu\",29.2445,105.88,\"Asia/Shanghai\"],[\"何埂镇 · Hegeng\",29.137,105.8699,\"Asia/Shanghai\"],[\"Fate\",44.4833,126.5,\"Asia/Shanghai\"],[\"堅尼地城 · Kennedy Town\",22.2828,114.1295,\"Asia/Hong_Kong\"],[\"Longshan\",35.0319,106.0806,\"Asia/Shanghai\"],[\"长寿湖镇 · Changshouhu\",29.9054,107.2379,\"Asia/Shanghai\"],[\"Jinshan\",34.8114,105.4344,\"Asia/Shanghai\"],[\"沙河 · Shahe\",22.5523,113.9791,\"Asia/Shanghai\"],[\"中河 · Zhonghe\",25.0557,98.3999,\"Asia/Shanghai\"],[\"晋城 · Jincheng\",24.4341,118.3171,\"Asia/Taipei\"],[\"Yingpan\",26.45,99.15,\"Asia/Shanghai\"],[\"义和镇 · Yihe\",29.7373,107.2192,\"Asia/Shanghai\"],[\"城口县 · Gecheng\",31.9486,108.6607,\"Asia/Shanghai\"],[\"Mei Foo Sun Chuen\",22.3364,114.1402,\"Asia/Hong_Kong\"],[\"西和县 · Hanyuan\",34.0108,105.2919,\"Asia/Shanghai\"],[\"慈云山 · Tsz Wan Shan\",22.3525,114.2002,\"Asia/Hong_Kong\"],[\"吉里于孜 · Jelilyüzi\",43.9749,81.5356,\"Asia/Urumqi\"],[\"西螺 · Xiluo\",23.7989,120.4634,\"Asia/Taipei\"],[\"Wayao\",34.3833,118.2333,\"Asia/Shanghai\"],[\"滩歌镇 · Tange\",34.6276,104.8406,\"Asia/Shanghai\"],[\"鸳鸯 · Yuanyang\",29.6657,106.5575,\"Asia/Shanghai\"],[\"郭嘉镇 · Guojia\",34.9728,105.5584,\"Asia/Shanghai\"],[\"碧阳镇 · Biyang\",29.9289,117.9464,\"Asia/Shanghai\"],[\"敦好镇 · Dunhao\",31.333,108.3582,\"Asia/Shanghai\"],[\"洛碛镇 · Luoqi\",29.7223,106.9321,\"Asia/Shanghai\"],[\"Qina\",26.3094,100.6251,\"Asia/Shanghai\"],[\"艾里西湖 · Elixku\",38.7092,77.3706,\"Asia/Urumqi\"],[\"六峰镇 · Liufeng\",34.7345,105.3861,\"Asia/Shanghai\"],[\"木洞镇 · Mudong\",29.5733,106.8393,\"Asia/Shanghai\"],[\"八颗镇 · Bake\",29.9006,107.0229,\"Asia/Shanghai\"],[\"支坪 · Zhiping\",29.2583,106.3586,\"Asia/Shanghai\"],[\"达达木图 · Dadamtu\",43.9803,81.3142,\"Asia/Urumqi\"],[\"社頭 · Shetou\",23.898,120.5883,\"Asia/Taipei\"],[\"仙龙镇 · Xianlong\",29.1511,105.784,\"Asia/Shanghai\"],[\"坑口 · Hang Hau\",22.3181,114.2699,\"Asia/Hong_Kong\"],[\"浩门镇 · Haomen\",37.3757,101.622,\"Asia/Shanghai\"],[\"龙潭镇 · Longtan\",29.4463,107.1022,\"Asia/Shanghai\"],[\"聖方濟堂區 · Luhuan\",22.1181,113.5519,\"Asia/Macau\"],[\"龙兴镇 · Longxing\",29.702,106.7911,\"Asia/Shanghai\"],[\"大昌镇 · Dachang\",31.2686,109.8021,\"Asia/Shanghai\"],[\"渭沱镇 · Weituo\",30.0398,106.147,\"Asia/Shanghai\"],[\"三庙镇 · Sanmiao\",30.2376,106.127,\"Asia/Shanghai\"],[\"西貢 · Sai Kung\",22.3833,114.2667,\"Asia/Hong_Kong\"],[\"Zhutang\",22.7152,99.8071,\"Asia/Shanghai\"],[\"龙河镇 · Longhe\",29.8396,107.9851,\"Asia/Shanghai\"],[\"石门镇 · Shimen\",29.1004,106.033,\"Asia/Shanghai\"],[\"蔡家岗镇 · Caijiagang\",29.7425,106.4751,\"Asia/Shanghai\"],[\"龙河镇 · Longhe\",30.0175,107.1804,\"Asia/Shanghai\"],[\"康乐镇 · Kangle\",31.1128,109.4296,\"Asia/Shanghai\"],[\"紫阳县 · Ziyang Chengguanzhen\",32.5192,108.5323,\"Asia/Shanghai\"],[\"三角镇 · Sanjiao\",29.0503,106.7364,\"Asia/Shanghai\"],[\"Tai Koo\",22.2841,114.2163,\"Asia/Hong_Kong\"],[\"Shidui\",36.3933,119.3086,\"Asia/Shanghai\"],[\"永靖 · Yongjing\",23.9215,120.5459,\"Asia/Taipei\"],[\"Mapo\",34.5167,117.0667,\"Asia/Shanghai\"],[\"岚皋县 · Langao Chengguanzhen\",32.3003,108.8931,\"Asia/Shanghai\"],[\"Puqiakeqi\",37.3174,79.7053,\"Asia/Shanghai\"],[\"Heqiao\",34.4528,116.9,\"Asia/Shanghai\"],[\"Yizhuang\",34.1565,117.5937,\"Asia/Shanghai\"],[\"白羊镇 · Baiyang\",30.8164,108.611,\"Asia/Shanghai\"],[\"长岭 · Changling\",30.7684,108.4844,\"Asia/Shanghai\"],[\"庙宇镇 · Miaoyu\",30.8687,109.6461,\"Asia/Shanghai\"],[\"田中 · Tianzhong\",23.8581,120.5857,\"Asia/Taipei\"],[\"Taikoo Shing\",22.2861,114.2187,\"Asia/Hong_Kong\"],[\"油塘 · Yau Tong\",22.2957,114.236,\"Asia/Hong_Kong\"],[\"荒地 · Huangdi\",38.809,77.4486,\"Asia/Shanghai\"],[\"涛源 · Taoyuan\",26.2283,100.56,\"Asia/Shanghai\"],[\"海头镇 · Haitou\",19.5056,108.9505,\"Asia/Shanghai\"],[\"古溪镇 · Guxi\",30.3303,105.8721,\"Asia/Shanghai\"],[\"塔尕尔其 · Tage'erqi\",38.5452,77.2573,\"Asia/Shanghai\"],[\"吴家镇 · Wujia\",29.6348,105.3911,\"Asia/Shanghai\"],[\"龙桥 · Longqiao\",29.7103,107.2944,\"Asia/Shanghai\"],[\"五营乡 · Wuying\",35.0149,105.8988,\"Asia/Shanghai\"],[\"莲花 · Lianhua\",35.0616,105.7911,\"Asia/Shanghai\"],[\"新妙镇 · Xinmiao\",29.6553,107.0499,\"Asia/Shanghai\"],[\"Zhelou\",24.9667,105.8167,\"Asia/Shanghai\"],[\"新田镇 · Xintian\",30.6987,108.4019,\"Asia/Shanghai\"],[\"朱溪镇 · Zhuxi\",29.5361,105.6668,\"Asia/Shanghai\"],[\"Liushan\",36.4497,118.7602,\"Asia/Shanghai\"],[\"龙凤 · Longfeng\",29.8153,106.4291,\"Asia/Shanghai\"],[\"侣俸镇 · Lüfeng\",29.8583,105.9731,\"Asia/Shanghai\"],[\"雅瓦 · Yawa\",37.4119,79.5143,\"Asia/Shanghai\"],[\"Wushan\",36.2473,118.8383,\"Asia/Shanghai\"],[\"大角咀 · Tai Kok Tsui\",22.3215,114.163,\"Asia/Hong_Kong\"],[\"双江镇 · Shuangjiang\",30.2175,105.7452,\"Asia/Shanghai\"],[\"双河口 · Shuanghekou\",30.754,108.3696,\"Asia/Shanghai\"],[\"复兴镇 · Fuxing\",29.8191,106.5571,\"Asia/Shanghai\"],[\"麻旺镇 · Mawang\",28.8933,108.9511,\"Asia/Shanghai\"],[\"社坛镇 · Shetan\",29.9892,107.6152,\"Asia/Shanghai\"],[\"北港 · Beigang\",23.5701,120.3016,\"Asia/Taipei\"],[\"北斗 · Beidou\",23.8729,120.5243,\"Asia/Taipei\"],[\"双凤镇 · Shuangfeng\",30.0233,106.4296,\"Asia/Shanghai\"],[\"熊家镇 · Xiongjia\",30.9016,108.4337,\"Asia/Shanghai\"],[\"保亭黎族苗族自治县 · Baocheng\",18.6403,109.6994,\"Asia/Shanghai\"],[\"巴彦岱 · Bayandai\",43.9659,81.2485,\"Asia/Shanghai\"],[\"望德堂区 · São Lázaro\",22.1999,113.549,\"Asia/Macau\"],[\"荣隆镇 · Ronglong\",29.4359,105.4487,\"Asia/Shanghai\"],[\"Shawei\",22.52,114.0338,\"Asia/Shanghai\"],[\"聚奎镇 · Jukui\",30.6359,107.5963,\"Asia/Shanghai\"],[\"南平镇 · Nanping\",29.0864,106.9872,\"Asia/Shanghai\"],[\"Wuhe\",24.8591,98.6678,\"Asia/Shanghai\"],[\"Guofu\",28.85,106.6014,\"Asia/Shanghai\"],[\"九龙山镇 · Jiulongshan\",31.1944,108.2509,\"Asia/Shanghai\"],[\"周嘉镇 · Zhoujia\",30.4191,107.5385,\"Asia/Shanghai\"],[\"和硕县 · Tewulike\",42.2586,86.8573,\"Asia/Shanghai\"],[\"何坝 · Heba\",33.9362,105.2163,\"Asia/Shanghai\"],[\"永兴镇 · Yongxing\",28.9897,106.1761,\"Asia/Shanghai\"],[\"Haojiaqiao\",38.0167,106.2833,\"Asia/Shanghai\"],[\"Shaodian\",34.1333,118.4333,\"Asia/Shanghai\"],[\"米夏 · Mixia\",38.454,77.2492,\"Asia/Shanghai\"],[\"下寺镇 · Xiasi\",32.29,105.5133,\"Asia/Shanghai\"],[\"马武镇 · Mawu\",29.5925,107.3134,\"Asia/Shanghai\"],[\"萨依巴格 · Saybag\",37.1497,79.6583,\"Asia/Urumqi\"],[\"福田镇 · Futian\",31.222,109.7107,\"Asia/Shanghai\"],[\"德庆 · Dagzê\",29.6733,91.3453,\"Asia/Shanghai\"],[\"阿尔山市 · Wenquan\",47.1756,119.9481,\"Asia/Shanghai\"],[\"Rongjiang\",26.55,101.25,\"Asia/Shanghai\"],[\"Huzhai\",34.6694,117.0083,\"Asia/Shanghai\"],[\"大进镇 · Dajin\",31.5096,108.4458,\"Asia/Shanghai\"],[\"Anfu\",34.9728,105.6303,\"Asia/Shanghai\"],[\"Shunzhou\",26.6212,100.5543,\"Asia/Shanghai\"],[\"回龙镇 · Huilong\",30.5296,107.481,\"Asia/Shanghai\"],[\"汾河镇 · Fenhe\",31.1372,109.5221,\"Asia/Shanghai\"],[\"Jiangzhuang\",34.4917,117.3972,\"Asia/Shanghai\"],[\"龙驹镇 · Longju\",30.6109,108.6352,\"Asia/Shanghai\"],[\"郭勒木德镇 · Guōlèmùdé\",36.4293,94.8246,\"Asia/Shanghai\"],[\"城关镇 · Tanchang Chengguanzhen\",34.0446,104.3946,\"Asia/Shanghai\"],[\"峰高镇 · Fenggao\",29.4269,105.6751,\"Asia/Shanghai\"],[\"Baliwan\",34.8476,105.3704,\"Asia/Shanghai\"],[\"Dasheng\",36.32,118.8554,\"Asia/Shanghai\"],[\"Taolin\",35.8001,119.534,\"Asia/Shanghai\"],[\"石梨 · Shek Lei\",22.3661,114.1398,\"Asia/Hong_Kong\"],[\"焉耆镇 · Yanqi\",42.0632,86.5718,\"Asia/Shanghai\"],[\"中和镇 · Zhonghe\",19.7428,109.3449,\"Asia/Shanghai\"],[\"土地垭 · Dade\",31.2129,108.3403,\"Asia/Shanghai\"],[\"安澜 · Anlan\",29.2472,106.5942,\"Asia/Shanghai\"],[\"乌达力克 · Wudalike\",38.3618,77.1297,\"Asia/Shanghai\"],[\"旧县 · Jiuxian\",29.862,106.2029,\"Asia/Shanghai\"],[\"郭家镇 · Guojia\",31.2953,108.481,\"Asia/Shanghai\"],[\"城关镇 · Wenxian Chengguanzhen\",32.9471,104.6814,\"Asia/Shanghai\"],[\"文峰镇 · Wenfeng\",31.4049,109.2346,\"Asia/Shanghai\"],[\"松柏 · Songbai\",31.7569,110.6725,\"Asia/Shanghai\"],[\"闸口社区 · Zhakou\",21.7066,109.475,\"Asia/Shanghai\"],[\"中敖镇 · Zhong’ao\",29.765,105.6664,\"Asia/Shanghai\"],[\"Yengisar\",38.9258,76.1714,\"Asia/Shanghai\"],[\"道成 · Daocheng\",29.0379,100.2974,\"Asia/Shanghai\"],[\"郁山镇 · Yushan\",29.5328,108.425,\"Asia/Shanghai\"],[\"天府镇 · Tianfu\",29.8741,106.4982,\"Asia/Shanghai\"],[\"平凯镇 · Pingkai\",28.426,108.9959,\"Asia/Shanghai\"],[\"Shuangtang\",34.3653,118.4747,\"Asia/Shanghai\"],[\"望洪一队 · Wanghong\",38.2125,106.225,\"Asia/Shanghai\"],[\"沙坪镇 · Shaping\",30.4746,107.4359,\"Asia/Shanghai\"],[\"甘宁镇 · Ganning\",30.6691,108.2805,\"Asia/Shanghai\"],[\"Jinhu\",24.4394,118.4211,\"Asia/Taipei\"],[\"平滩镇 · Pingtan\",29.8459,105.8778,\"Asia/Shanghai\"],[\"Shagang\",21.6667,109.0333,\"Asia/Shanghai\"],[\"夏格庄 · Xiagezhuang\",36.6931,120.4347,\"Asia/Shanghai\"],[\"统景镇 · Tongjing\",29.8565,106.8448,\"Asia/Shanghai\"],[\"隆盛镇 · Longsheng\",29.0814,106.8164,\"Asia/Shanghai\"],[\"兴义镇 · Xingyi\",29.9555,107.8165,\"Asia/Shanghai\"],[\"安稳镇 · Anwen\",28.68,106.7565,\"Asia/Shanghai\"],[\"新港 · Xingang\",23.5574,120.346,\"Asia/Taipei\"],[\"三道岭露天矿五七农场 · Sandaoling Lutiankuang Wuqi Nongchang\",43.0148,92.8828,\"Asia/Urumqi\"],[\"余家镇 · Yujia\",30.8115,107.9538,\"Asia/Shanghai\"],[\"洪湖镇 · Honghu\",30.0004,106.952,\"Asia/Shanghai\"],[\"燕窝镇 · Yanwo\",30.3318,106.0736,\"Asia/Shanghai\"],[\"勐腊 · Mengla\",21.4623,101.5637,\"Asia/Shanghai\"],[\"虎峰镇 · Hufeng\",29.7155,106.1109,\"Asia/Shanghai\"],[\"于田县 · Mugala\",36.8545,81.6642,\"Asia/Urumqi\"],[\"上帕 · Shangpa\",26.9195,98.9516,\"Asia/Shanghai\"],[\"Chahe\",34.5333,117.8833,\"Asia/Shanghai\"],[\"叶堡镇 · Yebao\",34.9372,105.6467,\"Asia/Shanghai\"],[\"Whampoa Garden\",22.3053,114.1894,\"Asia/Hong_Kong\"],[\"Taiping\",24.6612,97.8526,\"Asia/Shanghai\"],[\"那曲市 · Nagqu\",31.4768,92.0573,\"Asia/Shanghai\"],[\"抚远 · Fuyuan\",48.3635,134.2984,\"Asia/Shanghai\"],[\"天都城 · Tianducheng\",30.3887,120.2426,\"Asia/Shanghai\"],[\"尼木 · Nyêmo\",29.4374,90.1485,\"Asia/Shanghai\"],[\"Xihu\",35.4493,119.2361,\"Asia/Shanghai\"],[\"洛峪 · Luoyu\",33.841,105.2312,\"Asia/Shanghai\"],[\"恰热克 · Qarek\",38.3722,76.9903,\"Asia/Urumqi\"],[\"伊什库力 · Yishikuli\",38.4889,77.2014,\"Asia/Urumqi\"],[\"安化镇 · Anhua\",33.5053,105.0478,\"Asia/Shanghai\"],[\"胡杨河 · Huyanghe\",44.6984,84.8336,\"Asia/Shanghai\"],[\"Jingui\",38.5,106.4167,\"Asia/Shanghai\"],[\"大长山岛镇 · Dachang Shandao\",39.2756,122.6,\"Asia/Shanghai\"],[\"Nuozhadu\",22.5782,100.2692,\"Asia/Shanghai\"],[\"恆春鎮 · Hengchun\",22.0042,120.7439,\"Asia/Taipei\"],[\"铜溪镇 · Tongxi\",30.0005,106.1304,\"Asia/Shanghai\"],[\"砚台镇 · Yantai\",30.1467,107.3196,\"Asia/Shanghai\"],[\"云龙镇 · Yunlong\",30.5228,107.642,\"Asia/Shanghai\"],[\"梅江镇 · Meijiang\",28.2636,109.0268,\"Asia/Shanghai\"],[\"草堂镇 · Caotang\",31.0902,109.624,\"Asia/Shanghai\"],[\"油麻地 · Yau Ma Tei\",22.3138,114.1686,\"Asia/Hong_Kong\"],[\"那龙镇 · Nalong\",22.037,112.2089,\"Asia/Shanghai\"],[\"托木吾斯塘 · Tuomuwusitang\",38.3631,77.2315,\"Asia/Shanghai\"],[\"Lower Wong Tai Sin Estate (I & II)\",22.3392,114.1944,\"Asia/Hong_Kong\"],[\"朝天 · Chaotian\",32.6446,105.885,\"Asia/Shanghai\"],[\"坪山镇 · Pingshan\",30.0966,107.4244,\"Asia/Shanghai\"],[\"西川 · Xichuan\",35.0305,106.063,\"Asia/Shanghai\"],[\"South Horizons\",22.2438,114.1483,\"Asia/Hong_Kong\"],[\"埤頭 · Pitou\",23.895,120.4786,\"Asia/Taipei\"],[\"Xindian\",25.2814,101.5583,\"Asia/Shanghai\"],[\"清溪镇 · Qingxi\",29.7971,107.4575,\"Asia/Shanghai\"],[\"双龙镇 · Shuanglong\",29.9597,107.2036,\"Asia/Shanghai\"],[\"吴滩镇 · Wutan\",29.257,106.0629,\"Asia/Shanghai\"],[\"South Horizons (Estate)\",22.2441,114.1462,\"Asia/Hong_Kong\"],[\"礼顿山 · Leighton Hill\",22.2761,114.184,\"Asia/Hong_Kong\"],[\"东温泉 · Dongwenquan\",29.4561,106.8578,\"Asia/Shanghai\"],[\"十直镇 · Shizhi\",30.053,107.7943,\"Asia/Shanghai\"],[\"Shiqiao\",34.1539,105.1297,\"Asia/Shanghai\"],[\"拉依喀 · Layka\",37.0769,79.7317,\"Asia/Urumqi\"],[\"万古镇 · Wangu\",29.6824,105.9355,\"Asia/Shanghai\"],[\"圣灯山 · Tiaoshi\",29.2772,106.6425,\"Asia/Shanghai\"],[\"官庄镇 · Guanzhuang\",28.5078,109.0114,\"Asia/Shanghai\"],[\"Heshan\",35.5234,119.5101,\"Asia/Shanghai\"],[\"隆兴镇 · Longxing\",30.1919,106.0588,\"Asia/Shanghai\"],[\"竹园 · Chuk Yuen\",22.3454,114.1933,\"Asia/Hong_Kong\"],[\"Ruidian\",25.5317,98.4086,\"Asia/Shanghai\"],[\"冈厦 · Gangxia\",22.5403,114.0614,\"Asia/Shanghai\"],[\"溪洲 · Xizhou\",24.2767,120.6892,\"Asia/Taipei\"],[\"三驱镇 · Sanqu\",29.6416,105.6216,\"Asia/Shanghai\"],[\"青石嘴镇 · Qingshizui\",37.4667,101.4333,\"Asia/Shanghai\"],[\"智凤镇 · Zhifeng\",29.6544,105.7842,\"Asia/Shanghai\"],[\"南雅镇 · Nanya\",31.0843,108.0866,\"Asia/Shanghai\"],[\"马街 · Majie\",33.4594,104.9578,\"Asia/Shanghai\"],[\"Zheshan\",36.1488,118.9514,\"Asia/Shanghai\"],[\"哈达铺镇 · Hadapu Zhen\",34.2313,104.223,\"Asia/Shanghai\"],[\"龙沙镇 · Longsha\",30.6396,108.237,\"Asia/Shanghai\"],[\"澄江镇 · Chengjiang\",29.8719,106.3847,\"Asia/Shanghai\"],[\"新民镇 · Xinmin\",30.3976,107.3895,\"Asia/Shanghai\"],[\"Leifeng\",28.2,112.8461,\"Asia/Shanghai\"],[\"Yitang\",34.2583,117.8889,\"Asia/Shanghai\"],[\"Yinqiao Zhen\",25.7543,100.1235,\"Asia/Shanghai\"],[\"金桥 · Jinqiao\",31.2709,121.5933,\"Asia/Shanghai\"],[\"猴桥 · Houqiao\",25.3236,98.278,\"Asia/Shanghai\"],[\"龙华镇 · Longhua\",29.2103,106.2073,\"Asia/Shanghai\"],[\"Kuangshi\",38.0725,114.0461,\"Asia/Shanghai\"],[\"正兴镇 · Zhengxing\",29.4574,106.1293,\"Asia/Shanghai\"],[\"光村 · Guangcun\",19.6419,109.3545,\"Asia/Shanghai\"],[\"崇龛镇 · Chongkan\",30.1556,105.6122,\"Asia/Shanghai\"],[\"新盛镇 · Xinsheng\",30.8437,107.7241,\"Asia/Shanghai\"],[\"Lijun\",38.1858,106.12,\"Asia/Shanghai\"],[\"汉王镇 · Hanwang\",33.3431,105.0105,\"Asia/Shanghai\"],[\"罗田镇 · Luotian\",30.5156,108.5595,\"Asia/Shanghai\"],[\"河包镇 · Hebao\",29.5662,105.5434,\"Asia/Shanghai\"],[\"云集镇 · Yunji\",29.9194,107.3404,\"Asia/Shanghai\"],[\"Dashi\",34.8975,105.1864,\"Asia/Shanghai\"],[\"小渡镇 · Xiaodu\",29.9621,105.8868,\"Asia/Shanghai\"],[\"Kuanchuan\",34.1664,105.5411,\"Asia/Shanghai\"],[\"Mazhan\",25.2114,98.484,\"Asia/Shanghai\"],[\"阿克萨拉依 · Akesalayi\",37.1692,79.6898,\"Asia/Shanghai\"],[\"贾嗣镇 · Jiasi\",29.1157,106.4469,\"Asia/Shanghai\"],[\"两水镇 · Liangshui\",33.4318,104.8091,\"Asia/Shanghai\"],[\"四门 · Simen\",34.6222,105.0128,\"Asia/Shanghai\"],[\"小沔镇 · Xiaomian\",30.1227,106.5344,\"Asia/Shanghai\"],[\"中山 · Zhongshan\",34.9381,105.8775,\"Asia/Shanghai\"],[\"布扎克 · Buzhake\",37.0657,79.8,\"Asia/Shanghai\"],[\"姜席 · Jiangxi\",33.9993,105.1999,\"Asia/Shanghai\"],[\"Puchuan\",24.7031,98.5701,\"Asia/Shanghai\"],[\"依盖尔其 · Yigai'erqi\",38.3407,77.4691,\"Asia/Shanghai\"],[\"咀台镇 · Zuitai\",33.3308,105.6047,\"Asia/Shanghai\"],[\"花土沟 · Huatugou\",38.2554,90.8679,\"Asia/Shanghai\"],[\"塔瓦库勒 · Tawakule\",37.7588,80.2165,\"Asia/Urumqi\"],[\"青莲 · Qinglian\",31.1906,109.2369,\"Asia/Shanghai\"],[\"魏店乡 · Weidian\",35.1024,105.5656,\"Asia/Shanghai\"],[\"杜市 · Dushi\",29.15,106.5328,\"Asia/Shanghai\"],[\"Shuikou\",25.9128,109.3136,\"Asia/Shanghai\"],[\"双桥区 · Shuanglu\",29.4854,105.7629,\"Asia/Shanghai\"],[\"Dafengdong\",26.7119,107.8114,\"Asia/Shanghai\"],[\"南沱镇 · Nantuo\",29.8554,107.5279,\"Asia/Shanghai\"],[\"永安镇 · Yong’an\",30.3531,107.5129,\"Asia/Shanghai\"],[\"鸳鸯镇 · Yuanyang\",34.7877,104.7753,\"Asia/Shanghai\"],[\"利東 · Lei Tung\",22.2405,114.1576,\"Asia/Hong_Kong\"],[\"阔依其 · Kuoyiqi\",37.3545,79.721,\"Asia/Shanghai\"],[\"忠县 · Báigōng Jiēdào\",30.2949,108.0337,\"Asia/Shanghai\"],[\"朱杨镇 · Zhuyang\",29.0642,105.9449,\"Asia/Shanghai\"],[\"温亚尔 · Onyar\",43.8504,81.7831,\"Asia/Urumqi\"],[\"义和镇 · Yihe\",31.1573,108.0826,\"Asia/Shanghai\"],[\"下路镇 · Xialu\",29.9417,108.0844,\"Asia/Shanghai\"],[\"华富邨 · Wah Fu\",22.2547,114.1362,\"Asia/Hong_Kong\"],[\"桑柘镇 · Sangzhe\",29.2784,108.3982,\"Asia/Shanghai\"],[\"石沱镇 · Shituo\",29.7161,107.1356,\"Asia/Shanghai\"],[\"田尾 · Tianwei\",23.8927,120.524,\"Asia/Taipei\"],[\"走马镇 · Zouma\",30.5696,108.4375,\"Asia/Shanghai\"],[\"Longchi\",36.9453,119.3253,\"Asia/Shanghai\"],[\"五马 · Wuma\",30.8541,109.3765,\"Asia/Shanghai\"],[\"深井 · Sham Tseng\",22.3667,114.05,\"Asia/Hong_Kong\"],[\"西林镇 · Linxi\",43.5167,118.0333,\"Asia/Shanghai\"],[\"洛塘镇 · Luotang\",33.0677,105.2648,\"Asia/Shanghai\"],[\"火炉镇 · Huolu\",29.3942,107.8725,\"Asia/Shanghai\"],[\"临江镇 · Linjiang\",29.2452,105.9566,\"Asia/Shanghai\"],[\"Yanzibu\",34.5056,117.7022,\"Asia/Shanghai\"],[\"上磺镇 · Shanghuang\",31.3205,109.4842,\"Asia/Shanghai\"],[\"白马镇 · Baima\",29.3955,107.5394,\"Asia/Shanghai\"],[\"祁连县 · Qilian\",38.1806,100.2403,\"Asia/Shanghai\"],[\"西沱镇 · Xituo\",30.4079,108.2173,\"Asia/Shanghai\"],[\"Shek Kip Mei Estate\",22.3341,114.1653,\"Asia/Hong_Kong\"],[\"中興新村 · Zhongxing New Village\",23.9591,120.6852,\"Asia/Taipei\"],[\"Xiasi\",26.5167,107.7833,\"Asia/Shanghai\"],[\"潘津 · Panjim\",44.0075,81.4247,\"Asia/Urumqi\"],[\"南头 · Nantou\",22.5356,113.9156,\"Asia/Shanghai\"],[\"Choi Wan Estate (I & II)\",22.3334,114.2133,\"Asia/Hong_Kong\"],[\"二崙 · Erlun\",23.7705,120.4134,\"Asia/Taipei\"],[\"Fuhuan\",28.8338,106.7554,\"Asia/Shanghai\"],[\"舟白 · Zhoubai\",29.5295,108.8227,\"Asia/Shanghai\"],[\"阿瓦提 · Awati\",38.6084,77.3964,\"Asia/Urumqi\"],[\"Changxin\",38.6747,106.3297,\"Asia/Shanghai\"],[\"Lushan\",26.65,107.7833,\"Asia/Shanghai\"],[\"陇城 · Longcheng\",35.001,105.9734,\"Asia/Shanghai\"],[\"香龙镇 · Xianglong\",30.2613,106.5759,\"Asia/Shanghai\"],[\"Bojia\",26.4672,111.9681,\"Asia/Shanghai\"],[\"莿桐 · Citong\",23.7575,120.4997,\"Asia/Taipei\"],[\"沙河 · Shahe\",30.8282,108.3503,\"Asia/Shanghai\"],[\"官渡镇 · Guandu\",30.081,106.429,\"Asia/Shanghai\"],[\"噶尔县 · Gar\",32.5012,80.0976,\"Asia/Shanghai\"],[\"Renhe\",26.4167,101.0167,\"Asia/Shanghai\"],[\"骡坪镇 · Luoping\",31.2066,110.0868,\"Asia/Shanghai\"],[\"龙池镇 · Longchi\",28.61,109.0492,\"Asia/Shanghai\"],[\"Hehua\",24.9702,98.3937,\"Asia/Shanghai\"],[\"安坪 · Anping\",30.9638,109.345,\"Asia/Shanghai\"],[\"英塔木 · Yengitam\",43.7458,81.6569,\"Asia/Urumqi\"],[\"万州区 · Chenjiaba\",30.8077,108.4085,\"Asia/Shanghai\"],[\"Chentuan\",35.5047,119.2669,\"Asia/Shanghai\"],[\"Minning\",38.2487,105.9707,\"Asia/Shanghai\"],[\"吐外特 · Tuwaite\",37.3449,79.7681,\"Asia/Shanghai\"],[\"盐井镇 · Yanjing\",29.9449,106.3503,\"Asia/Shanghai\"],[\"武陵镇 · Wuling\",30.5059,108.2588,\"Asia/Shanghai\"],[\"Pianjiao\",26.0167,100.5833,\"Asia/Shanghai\"],[\"尖沙咀 · Tsim Sha Tsui\",22.3,114.1667,\"Asia/Hong_Kong\"],[\"龙形镇 · Longxing\",30.2508,105.9085,\"Asia/Shanghai\"],[\"加汗巴格 · Jiahanbage\",37.1965,79.7057,\"Asia/Shanghai\"],[\"虎城镇 · Hucheng\",30.8148,107.5418,\"Asia/Shanghai\"],[\"西峪 · Xiyu\",34.0516,105.3036,\"Asia/Shanghai\"],[\"涞滩镇 · Laitan\",30.1758,106.4862,\"Asia/Shanghai\"],[\"李溪镇 · Lixi\",28.5313,108.611,\"Asia/Shanghai\"],[\"甲高镇 · Jiagao\",30.8892,109.176,\"Asia/Shanghai\"],[\"太平镇 · Taiping\",30.262,107.2929,\"Asia/Shanghai\"],[\"双石镇 · Shuangshi\",29.4003,105.8378,\"Asia/Shanghai\"],[\"王五镇 · Wangwu\",19.6562,109.2907,\"Asia/Shanghai\"],[\"太安镇 · Tai’an\",30.066,105.8093,\"Asia/Shanghai\"],[\"海棠镇 · Haitang\",30.1717,107.2299,\"Asia/Shanghai\"],[\"山丹乡 · Shandan\",34.7511,104.8313,\"Asia/Shanghai\"],[\"卧佛镇 · Wofo\",29.9082,105.7871,\"Asia/Shanghai\"],[\"松岗 · Songgang\",22.7787,113.8454,\"Asia/Shanghai\"],[\"Ligang\",38.6464,106.4304,\"Asia/Shanghai\"],[\"Nanling\",22.7112,99.9956,\"Asia/Shanghai\"],[\"Xingdaohu\",21.7148,109.1321,\"Asia/Shanghai\"],[\"Gantang\",26.7156,109.7689,\"Asia/Shanghai\"],[\"卓家村 · Zhuojiacun\",22.1614,113.5564,\"Asia/Macau\"],[\"长道镇 · Changdao\",34.2049,105.3365,\"Asia/Shanghai\"],[\"兴丰 · Xingfeng\",34.8611,105.8375,\"Asia/Shanghai\"],[\"玉峰山镇 · Yufengshan\",29.7198,106.7234,\"Asia/Shanghai\"],[\"关坝镇 · Guanba\",28.8019,106.8059,\"Asia/Shanghai\"],[\"邻封镇 · Linfeng\",29.891,107.2197,\"Asia/Shanghai\"],[\"战河 · Zhanhe\",26.8589,100.914,\"Asia/Shanghai\"],[\"卢河 · Luhe\",34.0092,105.3402,\"Asia/Shanghai\"],[\"八塘镇 · Batang\",29.8354,106.2927,\"Asia/Shanghai\"],[\"兰洋镇 · Lanyang\",19.4614,109.6604,\"Asia/Shanghai\"],[\"Jiuhe\",26.7627,99.9918,\"Asia/Shanghai\"],[\"南丰镇 · Nanfeng\",19.4102,109.5502,\"Asia/Shanghai\"],[\"伏家镇 · Fujia\",33.8189,105.9536,\"Asia/Shanghai\"],[\"英阿瓦提 · Ying’awati\",37.2987,79.8303,\"Asia/Urumqi\"],[\"高桥镇 · Gaoqiao\",31.3688,108.2421,\"Asia/Shanghai\"],[\"阿拉买提 · Alamaiti\",38.582,77.4762,\"Asia/Shanghai\"],[\"喀什 · Kax\",43.6411,81.87,\"Asia/Urumqi\"],[\"Xinlin\",51.6667,124.4,\"Asia/Shanghai\"],[\"Wu Kai Sha\",22.4302,114.2421,\"Asia/Hong_Kong\"],[\"焦石镇 · Jiaoshi\",29.7161,107.5976,\"Asia/Shanghai\"],[\"三芝区 · Sanzhi\",25.2578,121.5018,\"Asia/Taipei\"],[\"白石镇 · Báishí Zhèn\",30.3167,107.8825,\"Asia/Shanghai\"],[\"王铺 · Wangpu\",35.0571,105.4359,\"Asia/Shanghai\"],[\"芒来 · Manglai\",37.2752,79.6781,\"Asia/Shanghai\"],[\"Xiaying\",37.0425,119.4765,\"Asia/Shanghai\"],[\"李河镇 · Lihe\",30.8161,108.2622,\"Asia/Shanghai\"],[\"木耳镇 · Mu’er\",29.806,106.6444,\"Asia/Shanghai\"],[\"恭门 · Gongmen\",34.9414,106.2964,\"Asia/Shanghai\"],[\"Guanlong\",22.5878,113.944,\"Asia/Shanghai\"],[\"临潭县 · Lintan Chengguanzhen\",34.6889,103.3524,\"Asia/Shanghai\"],[\"惠民镇 · Huimin\",29.4619,106.7047,\"Asia/Shanghai\"],[\"茨竹镇 · Cizhu\",29.9854,106.7398,\"Asia/Shanghai\"],[\"夏河县 · Labuleng\",35.2013,102.5212,\"Asia/Shanghai\"],[\"竹溪镇 · Zhuxi\",31.1244,108.2906,\"Asia/Shanghai\"],[\"石马镇 · Shima\",29.6312,105.8307,\"Asia/Shanghai\"],[\"板桥镇 · Banqiao\",29.513,105.9534,\"Asia/Shanghai\"],[\"蒲吕镇 · Pulü\",29.818,106.1593,\"Asia/Shanghai\"],[\"Laguna City\",22.3055,114.2286,\"Asia/Hong_Kong\"],[\"明达镇 · Mingda\",30.7263,107.6573,\"Asia/Shanghai\"],[\"白云鄂博矿区 · Tongyangdao\",41.7703,109.9699,\"Asia/Shanghai\"],[\"Beihai\",25.08,98.5775,\"Asia/Shanghai\"],[\"石堡 · Shibao\",34.1079,105.3158,\"Asia/Shanghai\"],[\"猛阿 · Meng’a\",22.1994,100.4169,\"Asia/Shanghai\"],[\"大湾 · Dawan\",30.0196,106.8202,\"Asia/Shanghai\"],[\"尉犁县 · Yuli\",41.337,86.2566,\"Asia/Shanghai\"],[\"船湾 · Shuen Wan\",22.4677,114.2081,\"Asia/Hong_Kong\"],[\"永乐镇 · Yongle\",31.0105,109.5048,\"Asia/Shanghai\"],[\"永嘉镇 · Yongjia\",29.5719,106.0013,\"Asia/Shanghai\"],[\"古路镇 · Gulu\",31.3301,109.4399,\"Asia/Shanghai\"],[\"Panghai\",26.7269,108.0636,\"Asia/Shanghai\"],[\"博湖镇 · Bohu\",41.9787,86.6318,\"Asia/Shanghai\"],[\"万顺镇 · Wanshun\",30.0401,106.9716,\"Asia/Shanghai\"],[\"古勒巴格 · Gulebage\",38.4127,77.2303,\"Asia/Urumqi\"],[\"青年镇 · Qingnian\",28.865,106.8381,\"Asia/Shanghai\"],[\"王尹 · Wangyin\",34.8339,105.7617,\"Asia/Shanghai\"],[\"Zhongchao\",26.1375,109.22,\"Asia/Shanghai\"],[\"火炭 · Fo Tan\",22.3985,114.1929,\"Asia/Hong_Kong\"],[\"石岗 · Shigang\",31.1361,109.3643,\"Asia/Shanghai\"],[\"荔枝碗 · Lai Chi Van\",22.1197,113.5511,\"Asia/Macau\"],[\"察布查尔自治县 · Chapchal\",43.8355,81.1476,\"Asia/Urumqi\"],[\"Yongxing\",34.2078,105.3289,\"Asia/Shanghai\"],[\"谢家湾 · Xiejiawan\",34.8121,105.1715,\"Asia/Shanghai\"],[\"东塔镇 · Dongta\",38.0814,106.3444,\"Asia/Shanghai\"],[\"马关 · Maguan\",35.0662,106.0332,\"Asia/Shanghai\"],[\"和什托洛盖镇 · Hoxtolgay\",46.5187,86.0021,\"Asia/Shanghai\"],[\"周庄镇 · Zhouzhuang\",31.1179,120.8443,\"Asia/Shanghai\"],[\"舟曲县 · Zhouqu Chengguanzhen\",33.7842,104.3628,\"Asia/Shanghai\"],[\"普顺镇 · Pushun\",30.4724,107.6033,\"Asia/Shanghai\"],[\"新民镇 · Xinmin\",30.9034,109.4668,\"Asia/Shanghai\"],[\"抛沙镇 · Paosha\",33.7235,105.6757,\"Asia/Shanghai\"],[\"錦田 · Kam Tin\",22.4412,114.0602,\"Asia/Hong_Kong\"],[\"斯也克 · Siyeke\",36.8853,81.523,\"Asia/Urumqi\"],[\"大盛镇 · Dasheng\",29.8903,106.8973,\"Asia/Shanghai\"],[\"大阳 · Dayang\",34.9898,106.0721,\"Asia/Shanghai\"],[\"Tsz Ching Estate\",22.351,114.2006,\"Asia/Hong_Kong\"],[\"Fubang\",22.9042,99.8029,\"Asia/Shanghai\"],[\"童家溪镇 · Tongjiaxi\",29.685,106.4444,\"Asia/Shanghai\"],[\"冯家 · Fengjia\",29.3931,108.7846,\"Asia/Shanghai\"],[\"大树镇 · Dashu\",31.2109,109.3215,\"Asia/Shanghai\"],[\"金龙镇 · Jinlong\",29.5136,106.0606,\"Asia/Shanghai\"],[\"红炉镇 · Honglu\",29.352,105.7268,\"Asia/Shanghai\"],[\"新市 · Xinshi\",29.96,107.1041,\"Asia/Shanghai\"],[\"沙湾镇 · Shawan\",33.6274,104.5637,\"Asia/Shanghai\"],[\"江南镇 · Jiangnan\",29.7931,107.0371,\"Asia/Shanghai\"],[\"仁贤镇 · Renxian\",30.6609,107.679,\"Asia/Shanghai\"],[\"Shangchong\",26.2532,108.6578,\"Asia/Shanghai\"],[\"包鸾镇 · Baoluan\",29.7642,107.6783,\"Asia/Shanghai\"],[\"刘坪 · Liuping\",34.8914,105.7192,\"Asia/Shanghai\"],[\"八一镇 · Bayi\",29.6581,94.3589,\"Asia/Shanghai\"],[\"Judian\",27.3061,99.6491,\"Asia/Shanghai\"],[\"郭村镇 · Guocun\",30.5662,108.1693,\"Asia/Shanghai\"],[\"Hongzhou\",26.1258,109.4089,\"Asia/Shanghai\"],[\"Haidong Zhen\",25.7098,100.2606,\"Asia/Shanghai\"],[\"桥头 · Qiaotou\",33.1076,104.8117,\"Asia/Shanghai\"],[\"七塘 · Qitang\",29.7785,106.2851,\"Asia/Shanghai\"],[\"清平镇 · Qingping\",29.977,106.5206,\"Asia/Shanghai\"],[\"厦村市 · Ha Tsuen\",22.4472,113.9916,\"Asia/Hong_Kong\"],[\"篆塘镇 · Zhuantang\",28.8963,106.6684,\"Asia/Shanghai\"],[\"回龙场 · Caohui\",30.3973,107.4695,\"Asia/Shanghai\"],[\"树人镇 · Shuren\",29.9866,107.7392,\"Asia/Shanghai\"],[\"Xinyingpan\",27.1676,100.9201,\"Asia/Shanghai\"],[\"Shigu\",26.8685,99.9563,\"Asia/Shanghai\"],[\"安居镇 · Anju\",29.9907,106.0319,\"Asia/Shanghai\"],[\"三间仔 · Sanjianzai\",22.7291,113.7758,\"Asia/Shanghai\"],[\"吉安镇 · Ji’an\",29.159,105.747,\"Asia/Shanghai\"],[\"红堡 · Hongbao\",34.7519,106.0603,\"Asia/Shanghai\"],[\"Yongning\",27.8333,100.6667,\"Asia/Shanghai\"],[\"大窝口 · Tai Wo Hau\",22.3672,114.1235,\"Asia/Hong_Kong\"],[\"江口镇 · Jiangkou\",29.2396,107.8788,\"Asia/Shanghai\"],[\"Wanqiao Zhen\",25.7892,100.1228,\"Asia/Shanghai\"],[\"高峰镇 · Gaofeng\",30.2197,107.4079,\"Asia/Shanghai\"],[\"和庆镇 · Heqing\",19.5283,109.6328,\"Asia/Shanghai\"],[\"石澳 · Shek O\",22.2334,114.2512,\"Asia/Hong_Kong\"],[\"赤柱 · Chek Chue\",22.2185,114.2124,\"Asia/Hong_Kong\"],[\"五桥 · Wuqiao\",30.7797,108.4551,\"Asia/Shanghai\"],[\"上和镇 · Shanghe\",30.1604,105.934,\"Asia/Shanghai\"],[\"和谦镇 · Heqian\",31.415,108.4697,\"Asia/Shanghai\"],[\"文亨 · Wenheng\",25.6674,116.7543,\"Asia/Shanghai\"],[\"大观镇 · Daguan\",29.255,106.9769,\"Asia/Shanghai\"],[\"新城 · Xincheng\",34.6743,103.5868,\"Asia/Shanghai\"],[\"上水 · Sheung Shui\",22.5167,114.1167,\"Asia/Hong_Kong\"],[\"中山 · Zhongshan\",28.8554,106.336,\"Asia/Shanghai\"],[\"Wutongshu\",38.1833,106.2833,\"Asia/Shanghai\"],[\"兴隆镇 · Xinglong\",29.1685,107.0064,\"Asia/Shanghai\"],[\"Baijiawan\",34.6958,105.2889,\"Asia/Shanghai\"],[\"城郊 · Chengjiao\",33.3852,104.9196,\"Asia/Shanghai\"],[\"溶溪镇 · Rongxi\",28.5249,108.8804,\"Asia/Shanghai\"],[\"石龙镇 · Shilong\",29.2822,106.8981,\"Asia/Shanghai\"],[\"北屯镇 · Beitun\",47.3525,87.8205,\"Asia/Shanghai\"],[\"紫水 · Zishui\",31.4128,108.3147,\"Asia/Shanghai\"],[\"康樂園 · Hong Lok Yuen\",22.4631,114.1552,\"Asia/Hong_Kong\"],[\"濯水镇 · Zhuoshui\",29.3031,108.7702,\"Asia/Shanghai\"],[\"龙凤镇 · Longfeng\",30.2682,106.0228,\"Asia/Shanghai\"],[\"兴隆镇 · Xinglong\",29.8893,106.7062,\"Asia/Shanghai\"],[\"Fairview Park\",22.4674,114.0477,\"Asia/Hong_Kong\"],[\"福禄镇 · Fulu\",30.6542,107.9683,\"Asia/Shanghai\"],[\"Burqin\",47.7028,86.8637,\"Asia/Urumqi\"],[\"古瑾圍 · Ma Tau Wai\",22.3207,114.1874,\"Asia/Hong_Kong\"],[\"黄山 · Huangshan\",26.8263,100.2191,\"Asia/Shanghai\"],[\"Shilongba\",26.5793,101.3632,\"Asia/Shanghai\"],[\"Hongqiao\",27.4298,100.797,\"Asia/Shanghai\"],[\"Tuqiang\",52.9,122.7667,\"Asia/Shanghai\"],[\"仁沙 · Rensha\",30.053,107.5941,\"Asia/Shanghai\"],[\"河边镇 · Hebian\",29.6566,106.1967,\"Asia/Shanghai\"],[\"阿热吾斯塘 · Arewusitang\",43.7977,81.5243,\"Asia/Shanghai\"],[\"大圍 · Tai Wai\",22.3729,114.179,\"Asia/Hong_Kong\"],[\"五间镇 · Wujian\",29.1821,105.8344,\"Asia/Shanghai\"],[\"丰乐 · Fengle\",31.1898,108.4146,\"Asia/Shanghai\"],[\"何文田 · Ho Man Tin\",22.3158,114.1818,\"Asia/Hong_Kong\"],[\"巫山 · Wushan\",30.9372,107.9466,\"Asia/Shanghai\"],[\"伊斯拉木阿瓦提 · Yisilamu'awati\",37.5849,80.184,\"Asia/Shanghai\"],[\"拍克其 · Paikeqi\",38.5501,77.2083,\"Asia/Shanghai\"],[\"兴隆 · Xinglong\",34.0382,105.3442,\"Asia/Shanghai\"],[\"礼让镇 · Lirang\",30.6849,107.6315,\"Asia/Shanghai\"],[\"先拜巴扎镇 · Xambabazar\",36.8864,81.5097,\"Asia/Urumqi\"],[\"Fuyun\",46.9919,89.5212,\"Asia/Urumqi\"],[\"Cheung Chau\",22.2109,114.0279,\"Asia/Hong_Kong\"],[\"Shui Chuen O\",22.3716,114.1978,\"Asia/Hong_Kong\"],[\"理川镇 · Lichuan Zhen\",34.2484,104.3195,\"Asia/Shanghai\"],[\"中寨 · Zhongzhai\",33.1913,104.4201,\"Asia/Shanghai\"],[\"鸭江镇 · Yajiang\",29.4548,107.3737,\"Asia/Shanghai\"],[\"青锋镇 · Qingfeng\",29.3394,105.8268,\"Asia/Shanghai\"],[\"萨木于孜 · Samuyuzi\",43.7195,81.864,\"Asia/Shanghai\"],[\"新田 · San Tin\",22.5017,114.0693,\"Asia/Hong_Kong\"],[\"河堰镇 · Heyan\",31.3564,108.6705,\"Asia/Shanghai\"],[\"太安镇 · Tai’an\",30.7955,108.6592,\"Asia/Shanghai\"],[\"高峰镇 · Gaofeng\",30.7128,108.3419,\"Asia/Shanghai\"],[\"丁市 · Dingshi\",28.7755,108.5465,\"Asia/Shanghai\"],[\"兰干 · Langgar\",36.7,81.5,\"Asia/Urumqi\"],[\"抱龙镇 · Baolong\",30.9423,110.0059,\"Asia/Shanghai\"],[\"古楼镇 · Gulou\",30.176,106.1717,\"Asia/Shanghai\"],[\"龙孔 · Longkong\",30.0448,107.9149,\"Asia/Shanghai\"],[\"屯門新墟 · Tuen Mun San Hui\",22.3988,113.976,\"Asia/Hong_Kong\"],[\"外纳 · Waina\",33.2064,105.0497,\"Asia/Shanghai\"],[\"龙门镇 · Longmen\",30.7982,107.6871,\"Asia/Shanghai\"],[\"狮滩镇 · Shitan\",30.069,106.5029,\"Asia/Shanghai\"],[\"Olympic\",22.3194,114.1574,\"Asia/Hong_Kong\"],[\"愉景灣 · Discovery Bay\",22.3,114.0167,\"Asia/Hong_Kong\"],[\"三圣 · Sansheng\",29.8926,106.6265,\"Asia/Shanghai\"],[\"和林镇 · Helin\",30.5812,107.6806,\"Asia/Shanghai\"],[\"布袋 · Budai\",23.3779,120.1615,\"Asia/Taipei\"],[\"巴依托海 · Baytokay\",43.6817,81.7889,\"Asia/Urumqi\"],[\"江洛镇 · Jiangluo\",33.9014,105.8219,\"Asia/Shanghai\"],[\"山頂 · The Peak\",22.262,114.1565,\"Asia/Hong_Kong\"],[\"铜鼓 · Tonggu\",28.7817,108.6826,\"Asia/Shanghai\"],[\"少云镇 · Shaoyun\",29.9846,105.9842,\"Asia/Shanghai\"],[\"白家 · Baijia\",30.017,107.3258,\"Asia/Shanghai\"],[\"龙井 · Longjing\",31.0894,109.8873,\"Asia/Shanghai\"],[\"角弓 · Jiaogong\",33.5655,104.6464,\"Asia/Shanghai\"],[\"宋皇臺 · Sung Wong Toi\",22.3247,114.1915,\"Asia/Hong_Kong\"],[\"杠家 · Gangjia\",30.2205,107.504,\"Asia/Shanghai\"],[\"宝兴镇 · Baoxing\",29.6217,105.6927,\"Asia/Shanghai\"],[\"勐满 · Mengman\",22.3216,100.8879,\"Asia/Shanghai\"],[\"三溪 · Sanxi\",31.132,110.094,\"Asia/Shanghai\"],[\"蘇屋 · So Uk\",22.3413,114.1568,\"Asia/Hong_Kong\"],[\"苏合 · Suhe\",34.0625,105.2221,\"Asia/Shanghai\"],[\"且末县 · Qiemo\",38.1339,85.5299,\"Asia/Urumqi\"],[\"嘉平 · Jiaping\",28.9916,106.3484,\"Asia/Shanghai\"],[\"茫崖 · Mangnai Zhen\",38.3855,90.1555,\"Asia/Shanghai\"],[\"九龍塘 · Kowloon Tong\",22.3331,114.1797,\"Asia/Hong_Kong\"],[\"麻柳嘴镇 · Maliuzui\",29.6929,106.944,\"Asia/Shanghai\"],[\"大顺 · Dashun\",29.5701,107.0454,\"Asia/Shanghai\"],[\"镇东 · Zhendong\",31.1852,108.3954,\"Asia/Shanghai\"],[\"Siu Sai Wan Estate\",22.2615,114.2488,\"Asia/Hong_Kong\"],[\"托胡拉 · Tuohula\",37.2423,79.6928,\"Asia/Shanghai\"],[\"西湾河 · Sai Wan Ho\",22.2845,114.2232,\"Asia/Hong_Kong\"],[\"喀群 · Kaqun\",37.9781,76.8672,\"Asia/Urumqi\"],[\"So Uk Estate\",22.3415,114.1565,\"Asia/Hong_Kong\"],[\"蛇口 · Shekou\",22.4936,113.9156,\"Asia/Shanghai\"],[\"董家镇 · Dongjia\",30.2235,107.7057,\"Asia/Shanghai\"],[\"Tak Long Estate\",22.3302,114.2034,\"Asia/Hong_Kong\"],[\"Keng Hau\",22.3651,114.1747,\"Asia/Hong_Kong\"],[\"Un Chau Estate\",22.3363,114.1562,\"Asia/Hong_Kong\"],[\"古路镇 · Gulu\",29.8389,106.7426,\"Asia/Shanghai\"],[\"玉其温 · Weiwu'eryuqiwen\",43.756,81.8606,\"Asia/Shanghai\"],[\"藍田 · Lam Tin\",22.3093,114.2363,\"Asia/Hong_Kong\"],[\"同乐 · Tongle\",29.4612,107.197,\"Asia/Shanghai\"],[\"双龙镇 · Shuanglong\",31.1949,109.8805,\"Asia/Shanghai\"],[\"翠云 · Cuiyun\",29.6882,106.5885,\"Asia/Shanghai\"],[\"蟠龙镇 · Panlong\",30.635,107.8502,\"Asia/Shanghai\"],[\"阿蓬江镇 · Apengjiang\",29.152,108.7429,\"Asia/Shanghai\"],[\"铜鼓镇 · Tonggu\",30.9341,109.7311,\"Asia/Shanghai\"],[\"科克亚 · Kokyar\",36.819,81.6333,\"Asia/Urumqi\"],[\"Lei Tung Estate\",22.2412,114.1552,\"Asia/Hong_Kong\"],[\"荫平镇 · Yinping\",30.542,107.5752,\"Asia/Shanghai\"],[\"Longchang\",26.6667,107.9167,\"Asia/Shanghai\"],[\"慈云镇 · Ciyun\",29.0754,106.2056,\"Asia/Shanghai\"],[\"胡地于孜 · Hudiyuzi\",43.9255,81.4121,\"Asia/Shanghai\"],[\"Nuofu\",22.22,99.6996,\"Asia/Shanghai\"],[\"千户 · Qianhu\",34.8047,105.5778,\"Asia/Shanghai\"],[\"Wushipai\",22.5238,113.9097,\"Asia/Shanghai\"],[\"Kaitang\",26.7203,108.1297,\"Asia/Shanghai\"],[\"灵泉 · Lingquan\",49.4052,117.677,\"Asia/Shanghai\"],[\"稍峪 · Shaoyu\",34.0641,105.3651,\"Asia/Shanghai\"],[\"古昌镇 · Guchang\",29.4868,105.5886,\"Asia/Shanghai\"],[\"弹子镇 · Danzi\",30.857,108.0059,\"Asia/Shanghai\"],[\"Jiuchao\",26.0908,108.7653,\"Asia/Shanghai\"],[\"温泉 · Wenquan\",34.6519,105.0535,\"Asia/Shanghai\"],[\"泉口 · Quankou\",37.3522,101.7393,\"Asia/Shanghai\"],[\"靛水 · Dianshui\",29.2834,108.089,\"Asia/Shanghai\"],[\"Yongping\",34.2899,105.2722,\"Asia/Shanghai\"],[\"奥依托格拉克 · Oytograk\",36.8333,81.9333,\"Asia/Urumqi\"],[\"峨溶镇 · Erong\",28.5713,109.2884,\"Asia/Shanghai\"],[\"头党坝 · Xintian\",29.1963,108.2705,\"Asia/Shanghai\"],[\"洪安镇 · Hong’an\",28.5023,109.2666,\"Asia/Shanghai\"],[\"新蒲崗 · San Po Kong\",22.3355,114.1967,\"Asia/Hong_Kong\"],[\"高楼 · Gaolou\",34.7608,104.6767,\"Asia/Shanghai\"],[\"健龙 · Jianlong\",29.3586,106.1852,\"Asia/Shanghai\"],[\"龙林 · Longlin\",33.9428,105.0674,\"Asia/Shanghai\"],[\"普子镇 · Puzi\",29.6329,108.3282,\"Asia/Shanghai\"],[\"白关 · Baiguan\",33.9662,104.9144,\"Asia/Shanghai\"],[\"洛浦镇 · Lop\",37.0789,80.1818,\"Asia/Shanghai\"],[\"Bibo\",26.5308,107.6314,\"Asia/Shanghai\"],[\"何家场 · Baohe\",30.0608,107.7017,\"Asia/Shanghai\"],[\"碧山镇 · Bishan\",30.7707,107.4571,\"Asia/Shanghai\"],[\"小川镇 · Xiaochuan\",33.6806,105.5616,\"Asia/Shanghai\"],[\"Hok Yuen\",22.3103,114.1882,\"Asia/Hong_Kong\"],[\"Laguna Verde\",22.3072,114.1907,\"Asia/Hong_Kong\"],[\"石硤尾 · Shek Kip Mei\",22.3315,114.168,\"Asia/Hong_Kong\"],[\"白河 · Baihe\",33.8697,104.8522,\"Asia/Shanghai\"],[\"广普镇 · Guangpu\",29.3357,106.1452,\"Asia/Shanghai\"],[\"东川镇 · Dongchuan\",37.368,101.8357,\"Asia/Shanghai\"],[\"Heng Fa Chuen\",22.2767,114.2408,\"Asia/Hong_Kong\"],[\"阿日希 · Arix\",36.7554,81.6077,\"Asia/Urumqi\"],[\"阿热勒 · Arele\",36.813,81.6669,\"Asia/Shanghai\"],[\"Wangyao\",34.885,105.5417,\"Asia/Shanghai\"],[\"Aldrich Bay\",22.282,114.2247,\"Asia/Hong_Kong\"],[\"太平镇 · Taiping\",29.9036,106.0387,\"Asia/Shanghai\"],[\"长滩镇 · Changtan\",30.7392,108.5998,\"Asia/Shanghai\"],[\"尼玛镇 · Nima\",34.0007,102.0713,\"Asia/Shanghai\"],[\"Choi Hung Estate\",22.3364,114.2058,\"Asia/Hong_Kong\"],[\"酉酬镇 · Youchou\",28.9635,109.1415,\"Asia/Shanghai\"],[\"鹿谷 · Lugu\",23.7464,120.7525,\"Asia/Taipei\"],[\"卓尼县 · Liulin\",34.5897,103.5042,\"Asia/Shanghai\"],[\"九池 · Jiuchi\",30.7983,108.3709,\"Asia/Shanghai\"],[\"大水坑 · Tai Shui Hang\",22.4063,114.2238,\"Asia/Hong_Kong\"],[\"永城镇 · Yongcheng\",29.0213,106.8201,\"Asia/Shanghai\"],[\"杨家营 · Yangjiaying\",39.4806,111.693,\"Asia/Shanghai\"],[\"加依 · Jiayi\",36.8548,81.6355,\"Asia/Shanghai\"],[\"宝顶 · Baoding\",29.7488,105.7584,\"Asia/Shanghai\"],[\"墩巴格 · Dunbage\",38.8574,77.5047,\"Asia/Shanghai\"],[\"排浦镇 · Paipu\",19.6398,109.1586,\"Asia/Shanghai\"],[\"禾輋 · Wo Che\",22.3902,114.1922,\"Asia/Hong_Kong\"],[\"大埔海滨 · Tai Mei Tuk\",22.4745,114.2346,\"Asia/Hong_Kong\"],[\"柳荫镇 · Liuyin\",29.9621,106.61,\"Asia/Shanghai\"],[\"夏坝镇 · Xiaba\",29.1168,106.5101,\"Asia/Shanghai\"],[\"团田 · Tuantian\",24.7113,98.6532,\"Asia/Shanghai\"],[\"麻柳 · Maliu\",31.4342,108.2446,\"Asia/Shanghai\"],[\"嘉道理 · Kadoorie\",22.3225,114.1756,\"Asia/Hong_Kong\"],[\"洪广七队 · Hongguang Qidui\",38.7332,106.2872,\"Asia/Shanghai\"],[\"Oi Man Estate\",22.312,114.1785,\"Asia/Hong_Kong\"],[\"阿热勒 · Arele\",38.3801,77.3132,\"Asia/Shanghai\"],[\"厚坝 · Houba\",31.2051,108.5063,\"Asia/Shanghai\"],[\"霍什拉甫 · Huoshilafu\",37.8664,76.6958,\"Asia/Urumqi\"],[\"三河 · Sanhe\",30.0365,108.1821,\"Asia/Shanghai\"],[\"尖山镇 · Jianshan\",31.434,108.8953,\"Asia/Shanghai\"],[\"Discovery Park\",22.3762,114.1114,\"Asia/Hong_Kong\"],[\"峨蔓镇 · Eman\",19.8572,109.2627,\"Asia/Shanghai\"],[\"Huimin\",22.2614,100.0829,\"Asia/Shanghai\"],[\"二郎镇 · Erlang\",30.3626,105.9921,\"Asia/Shanghai\"],[\"福永 · Fuyong\",22.6721,113.8152,\"Asia/Shanghai\"],[\"龚滩镇 · Gongtan\",28.9077,108.3486,\"Asia/Shanghai\"],[\"土场镇 · Tuchang\",29.9253,106.4907,\"Asia/Shanghai\"],[\"Siwei\",38.0166,114.1533,\"Asia/Shanghai\"],[\"五洞镇 · Wudong\",30.2099,107.3413,\"Asia/Shanghai\"],[\"黑水镇 · Heishui\",29.0555,108.7964,\"Asia/Shanghai\"],[\"龙射镇 · Longshe\",29.5309,108.2113,\"Asia/Shanghai\"],[\"Wanshui\",26.7353,107.9872,\"Asia/Shanghai\"],[\"合兴镇 · Hexing\",30.7448,107.8198,\"Asia/Shanghai\"],[\"Shajing Residential District\",22.7318,113.8119,\"Asia/Shanghai\"],[\"秀林 · Xiulin\",24.1202,121.6263,\"Asia/Taipei\"],[\"塘坊 · Tangfang\",31.3929,109.3092,\"Asia/Shanghai\"],[\"丛林镇 · Conglin\",29.0303,106.9703,\"Asia/Shanghai\"],[\"塔什科瑞克 · Taxkowrük\",43.8926,81.306,\"Asia/Urumqi\"],[\"汀九 · Ting Kau\",22.3696,114.0791,\"Asia/Hong_Kong\"],[\"Chuk Yuen North Estate\",22.3459,114.192,\"Asia/Hong_Kong\"],[\"虎威镇 · Huwei\",29.9057,107.6385,\"Asia/Shanghai\"],[\"巴格阿瓦提 · Bage'awati\",38.4891,77.5402,\"Asia/Shanghai\"],[\"Wang Tau Hom\",22.3401,114.1873,\"Asia/Hong_Kong\"],[\"Long’e\",25.8072,109.2125,\"Asia/Shanghai\"],[\"达来呼布镇 · Dalain Hob\",41.9653,101.0639,\"Asia/Shanghai\"],[\"Shenzhenwan\",22.4871,113.9396,\"Asia/Shanghai\"],[\"响水镇 · Xiangshui\",30.655,108.193,\"Asia/Shanghai\"],[\"Zhouxi\",26.4833,107.9167,\"Asia/Shanghai\"],[\"林內 · Linnei\",23.7615,120.6188,\"Asia/Taipei\"],[\"Pak Tin Estate\",22.3371,114.1667,\"Asia/Hong_Kong\"],[\"东江镇 · Dongjiang\",33.3792,104.9507,\"Asia/Shanghai\"],[\"田湾 · Tin Wan\",22.2511,114.1473,\"Asia/Hong_Kong\"],[\"Zhuzilin\",22.5381,114.015,\"Asia/Shanghai\"],[\"额肯呼都格镇 · Ehen Hudag\",39.2107,101.669,\"Asia/Shanghai\"],[\"两坪 · Liangping\",31.1214,109.9691,\"Asia/Shanghai\"],[\"Wang Tau Hom Estate\",22.3401,114.1867,\"Asia/Hong_Kong\"],[\"白土镇 · Baitu\",30.5972,108.8114,\"Asia/Shanghai\"],[\"Shuangjiang\",25.9667,108.9242,\"Asia/Shanghai\"],[\"官塘 · Kwun Tong\",22.3118,114.2218,\"Asia/Hong_Kong\"],[\"富东 · Fudong\",23.1232,100.0001,\"Asia/Shanghai\"],[\"Lixin\",34.9122,105.0806,\"Asia/Shanghai\"],[\"Zhaoxing\",25.9108,109.1764,\"Asia/Shanghai\"],[\"临河 · Linhe\",38.3214,106.368,\"Asia/Shanghai\"],[\"Kam Ying\",22.4229,114.2366,\"Asia/Hong_Kong\"],[\"新田 · San Tin\",22.3719,114.1839,\"Asia/Hong_Kong\"],[\"Sun Tin Wai\",22.3706,114.187,\"Asia/Hong_Kong\"],[\"长龙 · Changlong\",30.3062,107.413,\"Asia/Shanghai\"],[\"玉井 · Yujing\",23.1249,120.4614,\"Asia/Taipei\"],[\"木河 · Muhe\",35.0234,106.1349,\"Asia/Shanghai\"],[\"西高山 · Xigaoshan\",33.7347,105.3882,\"Asia/Shanghai\"],[\"钟灵 · Zhongling\",28.2967,108.9584,\"Asia/Shanghai\"],[\"姜家 · Jiangjia\",29.3931,106.8192,\"Asia/Shanghai\"],[\"朗如 · Langru\",36.8933,79.6214,\"Asia/Urumqi\"],[\"玉溪镇 · Yuxi\",30.3239,105.7774,\"Asia/Shanghai\"],[\"Ersheng\",29.4658,106.7708,\"Asia/Shanghai\"],[\"二连浩特市 · Erenhot\",43.6475,111.9767,\"Asia/Shanghai\"],[\"Sam Shing\",22.3813,113.9787,\"Asia/Hong_Kong\"],[\"阔什艾日克 · Kuoshi'airike\",38.6228,77.2795,\"Asia/Shanghai\"],[\"乌尔其 · Wu'erqi\",37.3202,79.5593,\"Asia/Shanghai\"],[\"嘴头 · Jutou\",34.8208,105.0339,\"Asia/Shanghai\"],[\"田家镇 · Tianjia\",30.0896,105.8567,\"Asia/Shanghai\"],[\"肖家镇 · Xiaojia\",30.2884,106.4703,\"Asia/Shanghai\"],[\"Xinhua\",24.7525,98.483,\"Asia/Shanghai\"],[\"柱山 · Zhushan\",30.7329,108.2742,\"Asia/Shanghai\"],[\"Wong Chuk Hang\",22.2398,114.17,\"Asia/Hong_Kong\"],[\"龙溪镇 · Longxi\",31.3022,109.6355,\"Asia/Shanghai\"],[\"大庙镇 · Damiao\",29.6443,106.0696,\"Asia/Shanghai\"],[\"Jifeng\",33.6553,105.6579,\"Asia/Shanghai\"],[\"蒲池 · Puchi\",33.5347,104.8142,\"Asia/Shanghai\"],[\"Bikou\",32.7458,105.2414,\"Asia/Shanghai\"],[\"Yeung Uk Tsuen\",22.45,114.0167,\"Asia/Hong_Kong\"],[\"云山 · Yunshan\",34.7606,105.7925,\"Asia/Shanghai\"],[\"青羊镇 · Qingyang\",29.5274,107.2007,\"Asia/Shanghai\"],[\"Mujia\",22.991,99.6345,\"Asia/Shanghai\"],[\"Braemar Hill\",22.2828,114.2003,\"Asia/Hong_Kong\"],[\"中坝 · Zhongba\",34.0351,105.0329,\"Asia/Shanghai\"],[\"Dazhuang\",34.9589,105.3361,\"Asia/Shanghai\"],[\"马营 · Maying\",33.5964,104.8462,\"Asia/Shanghai\"],[\"桦林 · Hualin\",34.8256,104.752,\"Asia/Shanghai\"],[\"拾万 · Shiwan\",29.6148,105.8946,\"Asia/Shanghai\"],[\"玉龙镇 · Yulong\",29.5462,105.8104,\"Asia/Shanghai\"],[\"小长山岛镇 · Xiaochangshan\",39.2358,122.7236,\"Asia/Shanghai\"],[\"Hoi Lai Estate\",22.3318,114.1467,\"Asia/Hong_Kong\"],[\"Mount Davis\",22.2786,114.1178,\"Asia/Hong_Kong\"],[\"迭部县 · Dianga\",34.0636,103.2136,\"Asia/Shanghai\"],[\"Dashan\",23.0024,100.1149,\"Asia/Shanghai\"],[\"礼嘉镇 · Lijia\",29.6788,106.4931,\"Asia/Shanghai\"],[\"临溪镇 · Linxi\",30.4064,108.3502,\"Asia/Shanghai\"],[\"阿扎特巴格 · Azhatebage\",38.6588,77.4664,\"Asia/Shanghai\"],[\"Pok Hong\",22.3756,114.1958,\"Asia/Hong_Kong\"],[\"连湖镇 · Lianhu\",29.6981,108.4353,\"Asia/Shanghai\"],[\"新生镇 · Xinsheng\",29.9567,105.7509,\"Asia/Shanghai\"],[\"铁山镇 · Tieshan\",29.6895,105.501,\"Asia/Shanghai\"],[\"Fu Cheong Estate\",22.3289,114.154,\"Asia/Hong_Kong\"],[\"土瓜灣 · To Kwa Wan\",22.3169,114.1905,\"Asia/Hong_Kong\"],[\"Lee On\",22.4263,114.2413,\"Asia/Hong_Kong\"],[\"Yùmén\",40.2914,97.0454,\"Asia/Shanghai\"],[\"白驼 · Baituo\",34.8511,106.0017,\"Asia/Shanghai\"],[\"Wujia\",21.7667,109.0333,\"Asia/Shanghai\"],[\"增福 · Zengfu\",29.5107,106.9858,\"Asia/Shanghai\"],[\"高谷镇 · Gaogu\",29.3956,108.0658,\"Asia/Shanghai\"],[\"峰灵 · Fengling\",31.3194,109.5547,\"Asia/Shanghai\"],[\"冯坪 · Fengping\",30.8348,109.505,\"Asia/Shanghai\"],[\"Butterfly\",22.3759,113.9625,\"Asia/Hong_Kong\"],[\"Fazhanhe\",22.3342,100.1731,\"Asia/Shanghai\"],[\"Prince Edward\",22.3236,114.1794,\"Asia/Hong_Kong\"],[\"大歇 · Daxie\",30.0729,108.1103,\"Asia/Shanghai\"],[\"Mid Levels\",22.284,114.1496,\"Asia/Hong_Kong\"],[\"炮臺山 · Fortress Hill\",22.2886,114.1942,\"Asia/Hong_Kong\"],[\"镇安镇 · Zhen’an\",31.1523,108.3167,\"Asia/Shanghai\"],[\"王家 · Wangjia\",29.7672,106.6981,\"Asia/Shanghai\"],[\"Tung Tau Estate\",22.3321,114.1928,\"Asia/Hong_Kong\"],[\"阿乌利亚 · Awuliya\",43.9303,81.6932,\"Asia/Shanghai\"],[\"第一城 · City One\",22.3868,114.2027,\"Asia/Hong_Kong\"],[\"鱼龙 · Yulong\",33.51,105.1812,\"Asia/Shanghai\"],[\"Donghui\",22.4405,99.8001,\"Asia/Shanghai\"],[\"后山镇 · Houshan\",30.8259,108.0287,\"Asia/Shanghai\"],[\"青龙镇 · Qinglong\",30.7798,109.2564,\"Asia/Shanghai\"],[\"后海 · Houhai\",22.5123,113.9255,\"Asia/Shanghai\"],[\"长坝镇 · Changba\",29.3347,107.475,\"Asia/Shanghai\"],[\"郭川 · Guochuan\",34.6838,105.81,\"Asia/Shanghai\"],[\"谭家 · Tanjia\",31.4557,108.4986,\"Asia/Shanghai\"],[\"杜热 · Dure\",46.5119,88.5339,\"Asia/Urumqi\"],[\"万木 · Wanmu\",28.6328,108.5002,\"Asia/Shanghai\"],[\"雍溪镇 · Yongxi\",29.7385,105.9794,\"Asia/Shanghai\"],[\"City Garden\",22.29,114.1926,\"Asia/Hong_Kong\"],[\"石会镇 · Shihui\",29.5718,108.6102,\"Asia/Shanghai\"],[\"窝依莫克 · Oymak\",47.8781,86.9895,\"Asia/Urumqi\"],[\"西坪 · Xiping\",34.6057,105.115,\"Asia/Shanghai\"],[\"Yiu Tung Estate\",22.2785,114.223,\"Asia/Hong_Kong\"]]");
	// src/modules/abu/abu-data.js
	function initializeChartData() {
		if (window.AbuData) return;
		var $jscomp = $jscomp || {};
		$jscomp.scope = {};
		$jscomp.createTemplateTagFirstArg = function(r) {
			return r.raw = r;
		};
		$jscomp.createTemplateTagFirstArgWithRaw = function(r, u) {
			r.raw = u;
			return r;
		};
		$jscomp.arrayIteratorImpl = function(r) {
			var u = 0;
			return function() {
				return u < r.length ? {
					done: !1,
					value: r[u++]
				} : { done: !0 };
			};
		};
		$jscomp.arrayIterator = function(r) {
			return { next: $jscomp.arrayIteratorImpl(r) };
		};
		$jscomp.makeIterator = function(r) {
			var u = "undefined" != typeof Symbol && Symbol.iterator && r[Symbol.iterator];
			return u ? u.call(r) : $jscomp.arrayIterator(r);
		};
		$jscomp.getGlobal = function(r) {
			r = [
				"object" == typeof globalThis && globalThis,
				r,
				"object" == typeof window && window,
				"object" == typeof self && self,
				"object" == typeof global && global
			];
			for (var u = 0; u < r.length; ++u) {
				var e = r[u];
				if (e && e.Math == Math) return e;
			}
			throw Error("Cannot find global object");
		};
		$jscomp.global = $jscomp.getGlobal(this);
		$jscomp.ASSUME_ES5 = !1;
		$jscomp.ASSUME_NO_NATIVE_MAP = !1;
		$jscomp.ASSUME_NO_NATIVE_SET = !1;
		$jscomp.SIMPLE_FROUND_POLYFILL = !1;
		$jscomp.ISOLATE_POLYFILLS = !1;
		$jscomp.FORCE_POLYFILL_PROMISE = !1;
		$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
		$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(r, u, e) {
			if (r == Array.prototype || r == Object.prototype) return r;
			r[u] = e.value;
			return r;
		};
		$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
		$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
		$jscomp.polyfills = {};
		$jscomp.propertyToPolyfillSymbol = {};
		$jscomp.POLYFILL_PREFIX = "$jscp$";
		$jscomp.polyfill = function(r, u, e, C) {
			u && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(r, u, e, C) : $jscomp.polyfillUnisolated(r, u, e, C));
		};
		$jscomp.polyfillUnisolated = function(r, u, e, C) {
			e = $jscomp.global;
			r = r.split(".");
			for (C = 0; C < r.length - 1; C++) {
				var A = r[C];
				if (!(A in e)) return;
				e = e[A];
			}
			r = r[r.length - 1];
			C = e[r];
			u = u(C);
			u != C && null != u && $jscomp.defineProperty(e, r, {
				configurable: !0,
				writable: !0,
				value: u
			});
		};
		$jscomp.polyfillIsolated = function(r, u, e, C) {
			var A = r.split(".");
			r = 1 === A.length;
			C = A[0];
			C = !r && C in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
			for (var w = 0; w < A.length - 1; w++) {
				var Q = A[w];
				if (!(Q in C)) return;
				C = C[Q];
			}
			A = A[A.length - 1];
			e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? C[A] : null;
			u = u(e);
			null != u && (r ? $jscomp.defineProperty($jscomp.polyfills, A, {
				configurable: !0,
				writable: !0,
				value: u
			}) : u !== e && (void 0 === $jscomp.propertyToPolyfillSymbol[A] && ($jscomp.propertyToPolyfillSymbol[A] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(A) : $jscomp.POLYFILL_PREFIX + A), $jscomp.defineProperty(C, $jscomp.propertyToPolyfillSymbol[A], {
				configurable: !0,
				writable: !0,
				value: u
			})));
		};
		$jscomp.polyfill("Math.log10", function(r) {
			return r ? r : function(u) {
				return Math.log(u) / Math.LN10;
			};
		}, "es6", "es3");
		$jscomp.polyfill("Number.isFinite", function(r) {
			return r ? r : function(u) {
				return "number" !== typeof u ? !1 : !isNaN(u) && Infinity !== u && -Infinity !== u;
			};
		}, "es6", "es3");
		$jscomp.polyfill("Math.hypot", function(r) {
			return r ? r : function(u) {
				if (2 > arguments.length) return arguments.length ? Math.abs(arguments[0]) : 0;
				var e = A = 0, C, A;
				for (; e < arguments.length; e++) A = Math.max(A, Math.abs(arguments[e]));
				if (1e100 < A || 1e-100 > A) {
					if (!A) return A;
					for (e = C = 0; e < arguments.length; e++) {
						var w = Number(arguments[e]) / A;
						C += w * w;
					}
					return Math.sqrt(C) * A;
				}
				for (e = C = 0; e < arguments.length; e++) w = Number(arguments[e]), C += w * w;
				return Math.sqrt(C);
			};
		}, "es6", "es3");
		$jscomp.polyfill("Number.MAX_SAFE_INTEGER", function() {
			return 9007199254740991;
		}, "es6", "es3");
		$jscomp.polyfill("Number.isInteger", function(r) {
			return r ? r : function(u) {
				return Number.isFinite(u) ? u === Math.floor(u) : !1;
			};
		}, "es6", "es3");
		$jscomp.polyfill("Number.isSafeInteger", function(r) {
			return r ? r : function(u) {
				return Number.isInteger(u) && Math.abs(u) <= Number.MAX_SAFE_INTEGER;
			};
		}, "es6", "es3");
		$jscomp.polyfill("Math.cbrt", function(r) {
			return r ? r : function(u) {
				if (0 === u) return u;
				u = Number(u);
				var e = Math.pow(Math.abs(u), 1 / 3);
				return 0 > u ? -e : e;
			};
		}, "es6", "es3");
		(function(factory) {
			window.Astronomy = factory();
		})(function() {
			return function() {
				function r(u, e, C) {
					function A(N, T) {
						if (!e[N]) {
							if (!u[N]) {
								var ka = "function" == typeof __require && __require;
								if (!T && ka) return ka(N, !0);
								if (w) return w(N, !0);
								T = Error("Cannot find module '" + N + "'");
								throw T.code = "MODULE_NOT_FOUND", T;
							}
							T = e[N] = { exports: {} };
							u[N][0].call(T.exports, function(sa) {
								return A(u[N][1][sa] || sa);
							}, T, T.exports, r, u, e, C);
						}
						return e[N].exports;
					}
					for (var w = "function" == typeof __require && __require, Q = 0; Q < C.length; Q++) A(C[Q]);
					return A;
				}
				return r;
			}()({ 1: [function(r, u, e) {
				function C(a) {
					switch (a) {
						case m.Sun: return .0002959122082855911;
						case m.Mercury: return 4912547451450812e-26;
						case m.Venus: return 7243452486162703e-25;
						case m.Earth: return 8887692390113509e-25;
						case m.Moon: return 1093189565989891e-26;
						case m.EMB: return 8997011346712498e-25;
						case m.Mars: return 9549535105779258e-26;
						case m.Jupiter: return 2.825345909524226e-7;
						case m.Saturn: return 8.459715185680659e-8;
						case m.Uranus: return 1.292024916781969e-8;
						case m.Neptune: return 1.524358900784276e-8;
						case m.Pluto: return 218869976542597e-26;
						default: throw "Do not know mass product for body: " + a;
					}
				}
				function A(a) {
					if (!0 !== a && !1 !== a) throw console.trace(), "Value is not boolean: " + a;
					return a;
				}
				function w(a) {
					if (!Number.isFinite(a)) throw console.trace(), "Value is not a finite number: " + a;
					return a;
				}
				function Q(a) {
					return a - Math.floor(a);
				}
				function N(a, b) {
					var c = a.x * a.x + a.y * a.y + a.z * a.z;
					if (1e-8 > Math.abs(c)) throw "AngleBetween: first vector is too short.";
					var d = b.x * b.x + b.y * b.y + b.z * b.z;
					if (1e-8 > Math.abs(d)) throw "AngleBetween: second vector is too short.";
					a = (a.x * b.x + a.y * b.y + a.z * b.z) / Math.sqrt(c * d);
					return -1 >= a ? 180 : 1 <= a ? 0 : e.RAD2DEG * Math.acos(a);
				}
				function T(a) {
					a = ld.indexOf(a);
					return 0 <= a ? md[a] : null;
				}
				function ka(a) {
					return (a = T(a)) && 0 < a.dist ? a : null;
				}
				function sa(a) {
					var b = 2e3 + (a - 14) / 365.24217;
					if (-500 > b) return a = (b - 1820) / 100, -20 + 32 * a * a;
					if (500 > b) {
						a = b / 100;
						b = a * a;
						var c = a * b;
						return 10583.6 - 1014.41 * a + 33.78311 * b - 5.952053 * c - .1798452 * b * b + .022174192 * b * c + .0090316521 * c * c;
					}
					if (1600 > b) return a = (b - 1e3) / 100, b = a * a, c = a * b, 1574.2 - 556.01 * a + 71.23472 * b + .319781 * c - .8503463 * b * b - .005050998 * b * c + .0083572073 * c * c;
					if (1700 > b) return a = b - 1600, b = a * a, 120 - .9808 * a - .01532 * b + a * b / 7129;
					if (1800 > b) return a = b - 1700, b = a * a, 8.83 + .1603 * a - .0059285 * b + 13336e-8 * a * b - b * b / 1174e3;
					if (1860 > b) {
						a = b - 1800;
						b = a * a;
						c = a * b;
						var d = b * b;
						return 13.72 - .332447 * a + .0068612 * b + .0041116 * c - 37436e-8 * d + 121272e-10 * b * c - 1.699e-7 * c * c + 875e-12 * c * d;
					}
					if (1900 > b) return a = b - 1860, b = a * a, c = a * b, 7.62 + .5737 * a - .251754 * b + .01680668 * c - .0004473624 * b * b + b * c / 233174;
					if (1920 > b) return a = b - 1900, b = a * a, -2.79 + 1.494119 * a - .0598939 * b + .0061966 * a * b - 197e-6 * b * b;
					if (1941 > b) return a = b - 1920, b = a * a, 21.2 + .84493 * a - .0761 * b + .0020936 * a * b;
					if (1961 > b) return a = b - 1950, b = a * a, 29.07 + .407 * a - b / 233 + a * b / 2547;
					if (1986 > b) return a = b - 1975, b = a * a, 45.45 + 1.067 * a - b / 260 - a * b / 718;
					if (2005 > b) return a = b - 2e3, b = a * a, c = a * b, 63.86 + .3345 * a - .060374 * b + .0017275 * c + 651814e-9 * b * b + 2373599e-11 * b * c;
					if (2050 > b) return a = b - 2e3, 62.92 + .32217 * a + .005589 * a * a;
					if (2150 > b) return a = (b - 1820) / 100, -20 + 32 * a * a - .5628 * (2150 - b);
					a = (b - 1820) / 100;
					return -20 + 32 * a * a;
				}
				function Vb(a) {
					return a + Wb(a) / 86400;
				}
				function v(a) {
					return a instanceof O ? a : new O(a);
				}
				function Xb(a) {
					a = a.tt / 36525;
					return (((((-4.34e-8 * a - 576e-9) * a + .0020034) * a - 1831e-7) * a - 46.836769) * a + 84381.406) / 3600;
				}
				function da(a) {
					if (!$a || 1e-6 < Math.abs($a.tt - a.tt)) {
						var b = a.tt / 36525;
						var c = (1287104.79305 + 129596581.0481 * b) % 1296e3 * 484813681109536e-20;
						var d = (335779.526232 + 1739527262.8478 * b) % 1296e3 * 484813681109536e-20, f = (450160.398036 - 6962890.5431 * b) % 1296e3 * 484813681109536e-20, g = Math.sin(f), h = Math.cos(f), l = (-172064161 - 174666 * b) * g + 33386 * h, k = (92052331 + 9086 * b) * h + 15377 * g;
						h = 2 * (d - (1072260.70369 + 1602961601.209 * b) % 1296e3 * 484813681109536e-20 + f);
						g = Math.sin(h);
						h = Math.cos(h);
						l += (-13170906 - 1675 * b) * g - 13696 * h;
						k += (5730336 - 3015 * b) * h - 4587 * g;
						h = 2 * (d + f);
						g = Math.sin(h);
						h = Math.cos(h);
						l += (-2276413 - 234 * b) * g + 2796 * h;
						k += (978459 - 485 * b) * h + 1374 * g;
						h = 2 * f;
						g = Math.sin(h);
						h = Math.cos(h);
						l += (2074554 + 207 * b) * g - 698 * h;
						k += (-897492 + 470 * b) * h - 291 * g;
						g = Math.sin(c);
						h = Math.cos(c);
						c = -135e-6 + 1e-7 * (l + ((1475877 - 3633 * b) * g + 11817 * h));
						b = 388e-6 + 1e-7 * (k + ((73871 - 184 * b) * h - 1924 * g));
						g = Xb(a);
						$a = {
							tt: a.tt,
							dpsi: c,
							deps: b,
							ee: c * Math.cos(g * e.DEG2RAD) / 15,
							mobl: g,
							tobl: g + b / 3600
						};
					}
					return $a;
				}
				function Yb(a, b) {
					var c = a * e.DEG2RAD;
					a = Math.cos(c);
					c = Math.sin(c);
					return [
						b[0],
						b[1] * a - b[2] * c,
						b[1] * c + b[2] * a
					];
				}
				function ea(a) {
					function b(D, G, P, fa) {
						for (var L = [], ta = 0; ta <= G - D; ++ta) {
							var ua = L, ub = ua.push, vb, Zb = P, nd = fa, $b = [];
							for (vb = 0; vb <= nd - Zb; ++vb) $b.push(0);
							ub.call(ua, {
								min: Zb,
								array: $b
							});
						}
						return {
							min: D,
							array: L
						};
					}
					function c(D, G, P) {
						D = D.array[G - D.min];
						return D.array[P - D.min];
					}
					function d(D, G, P) {
						D = y.array[D - y.min];
						D.array[G - D.min] = P;
					}
					function f(D, G, P) {
						D = x.array[D - x.min];
						D.array[G - D.min] = P;
					}
					function g(D, G, P, fa, L) {
						L(D * P - G * fa, G * P + D * fa);
					}
					function h(D) {
						return Math.sin(U * D);
					}
					function l(D, G, P, fa) {
						var L = {
							x: 1,
							y: 0
						};
						D = [
							0,
							D,
							G,
							P,
							fa
						];
						for (G = 1; 4 >= G; ++G) 0 !== D[G] && g(L.x, L.y, c(y, D[G], G), c(x, D[G], G), function(ta, ua) {
							return L.x = ta, L.y = ua;
						});
						return L;
					}
					function k(D, G, P, fa, L, ta, ua, ub) {
						L = l(L, ta, ua, ub);
						q += D * L.y;
						t += G * L.y;
						ab += P * L.x;
						va += fa * L.x;
					}
					++e.CalcMoonCount;
					a = a.tt / 36525;
					var n, p, q, t, y = b(-6, 6, 1, 4), x = b(-6, 6, 1, 4);
					var z = a * a;
					var ab = t = q = 0;
					var va = 3422.7;
					var la = h(.19833 + .05611 * a);
					var ha = h(.27869 + .04508 * a);
					var V = h(.16827 - .36903 * a);
					var ba = h(.34734 - 5.37261 * a);
					var La = h(.10498 - 5.37899 * a);
					var bb = h(.42681 - .41855 * a), od = h(.14943 - 5.37511 * a);
					var cb = .84 * la + .31 * ha + 14.27 * V + 7.26 * ba + .28 * La + .24 * bb;
					var wb = 2.94 * la + .31 * ha + 14.27 * V + 9.34 * ba + 1.12 * La + .83 * bb;
					var db = -6.4 * la - 1.89 * bb;
					ha = .21 * la + .31 * ha + 14.27 * V - 88.7 * ba - 15.3 * La + .24 * bb - 1.86 * od;
					V = cb - db;
					la = -3332e-9 * h(.59734 - 5.37261 * a) - 539e-9 * h(.35498 - 5.37899 * a) - 64e-9 * h(.39943 - 5.37511 * a);
					cb = U * Q(.60643382 + 1336.85522467 * a - 313e-8 * z) + cb / ia;
					wb = U * Q(.37489701 + 1325.55240982 * a + 2565e-8 * z) + wb / ia;
					db = U * Q(.99312619 + 99.99735956 * a - 44e-8 * z) + db / ia;
					ha = U * Q(.25909118 + 1342.2278298 * a - 892e-8 * z) + ha / ia;
					La = U * Q(.82736186 + 1236.85308708 * a - 397e-8 * z) + V / ia;
					for (n = 1; 4 >= n; ++n) {
						switch (n) {
							case 1:
								V = wb;
								z = 4;
								ba = 1.000002208;
								break;
							case 2:
								V = db;
								z = 3;
								ba = .997504612 - .002495388 * a;
								break;
							case 3:
								V = ha;
								z = 4;
								ba = 1.000002708 + 139.978 * la;
								break;
							case 4:
								V = La;
								z = 6;
								ba = 1;
								break;
							default: throw "Internal error: I = " + n;
						}
						d(0, n, 1);
						d(1, n, Math.cos(V) * ba);
						f(0, n, 0);
						f(1, n, Math.sin(V) * ba);
						for (p = 2; p <= z; ++p) g(c(y, p - 1, n), c(x, p - 1, n), c(y, 1, n), c(x, 1, n), function(D, G) {
							return d(p, n, D), f(p, n, G);
						});
						for (p = 1; p <= z; ++p) d(-p, n, c(y, p, n)), f(-p, n, -c(x, p, n));
					}
					k(13.902, 14.06, -.001, .2607, 0, 0, 0, 4);
					k(.403, -4.01, .394, .0023, 0, 0, 0, 3);
					k(2369.912, 2373.36, .601, 28.2333, 0, 0, 0, 2);
					k(-125.154, -112.79, -.725, -.9781, 0, 0, 0, 1);
					k(1.979, 6.98, -.445, .0433, 1, 0, 0, 4);
					k(191.953, 192.72, .029, 3.0861, 1, 0, 0, 2);
					k(-8.466, -13.51, .455, -.1093, 1, 0, 0, 1);
					k(22639.5, 22609.07, .079, 186.5398, 1, 0, 0, 0);
					k(18.609, 3.59, -.094, .0118, 1, 0, 0, -1);
					k(-4586.465, -4578.13, -.077, 34.3117, 1, 0, 0, -2);
					k(3.215, 5.44, .192, -.0386, 1, 0, 0, -3);
					k(-38.428, -38.64, .001, .6008, 1, 0, 0, -4);
					k(-.393, -1.43, -.092, .0086, 1, 0, 0, -6);
					k(-.289, -1.59, .123, -.0053, 0, 1, 0, 4);
					k(-24.42, -25.1, .04, -.3, 0, 1, 0, 2);
					k(18.023, 17.93, .007, .1494, 0, 1, 0, 1);
					k(-668.146, -126.98, -1.302, -.3997, 0, 1, 0, 0);
					k(.56, .32, -.001, -.0037, 0, 1, 0, -1);
					k(-165.145, -165.06, .054, 1.9178, 0, 1, 0, -2);
					k(-1.877, -6.46, -.416, .0339, 0, 1, 0, -4);
					k(.213, 1.02, -.074, .0054, 2, 0, 0, 4);
					k(14.387, 14.78, -.017, .2833, 2, 0, 0, 2);
					k(-.586, -1.2, .054, -.01, 2, 0, 0, 1);
					k(769.016, 767.96, .107, 10.1657, 2, 0, 0, 0);
					k(1.75, 2.01, -.018, .0155, 2, 0, 0, -1);
					k(-211.656, -152.53, 5.679, -.3039, 2, 0, 0, -2);
					k(1.225, .91, -.03, -.0088, 2, 0, 0, -3);
					k(-30.773, -34.07, -.308, .3722, 2, 0, 0, -4);
					k(-.57, -1.4, -.074, .0109, 2, 0, 0, -6);
					k(-2.921, -11.75, .787, -.0484, 1, 1, 0, 2);
					k(1.267, 1.52, -.022, .0164, 1, 1, 0, 1);
					k(-109.673, -115.18, .461, -.949, 1, 1, 0, 0);
					k(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2);
					k(.233, .36, .012, -.0025, 1, 1, 0, -3);
					k(-4.391, -9.66, -.471, .0673, 1, 1, 0, -4);
					k(.283, 1.53, -.111, .006, 1, -1, 0, 4);
					k(14.577, 31.7, -1.54, .2302, 1, -1, 0, 2);
					k(147.687, 138.76, .679, 1.1528, 1, -1, 0, 0);
					k(-1.089, .55, .021, 0, 1, -1, 0, -1);
					k(28.475, 23.59, -.443, -.2257, 1, -1, 0, -2);
					k(-.276, -.38, -.006, -.0036, 1, -1, 0, -3);
					k(.636, 2.27, .146, -.0102, 1, -1, 0, -4);
					k(-.189, -1.68, .131, -.0028, 0, 2, 0, 2);
					k(-7.486, -.66, -.037, -.0086, 0, 2, 0, 0);
					k(-8.096, -16.35, -.74, .0918, 0, 2, 0, -2);
					k(-5.741, -.04, 0, -9e-4, 0, 0, 2, 2);
					k(.255, 0, 0, 0, 0, 0, 2, 1);
					k(-411.608, -.2, 0, -.0124, 0, 0, 2, 0);
					k(.584, .84, 0, .0071, 0, 0, 2, -1);
					k(-55.173, -52.14, 0, -.1052, 0, 0, 2, -2);
					k(.254, .25, 0, -.0017, 0, 0, 2, -3);
					k(.025, -1.67, 0, .0031, 0, 0, 2, -4);
					k(1.06, 2.96, -.166, .0243, 3, 0, 0, 2);
					k(36.124, 50.64, -1.3, .6215, 3, 0, 0, 0);
					k(-13.193, -16.4, .258, -.1187, 3, 0, 0, -2);
					k(-1.187, -.74, .042, .0074, 3, 0, 0, -4);
					k(-.293, -.31, -.002, .0046, 3, 0, 0, -6);
					k(-.29, -1.45, .116, -.0051, 2, 1, 0, 2);
					k(-7.649, -10.56, .259, -.1038, 2, 1, 0, 0);
					k(-8.627, -7.59, .078, -.0192, 2, 1, 0, -2);
					k(-2.74, -2.54, .022, .0324, 2, 1, 0, -4);
					k(1.181, 3.32, -.212, .0213, 2, -1, 0, 2);
					k(9.703, 11.67, -.151, .1268, 2, -1, 0, 0);
					k(-.352, -.37, .001, -.0028, 2, -1, 0, -1);
					k(-2.494, -1.17, -.003, -.0017, 2, -1, 0, -2);
					k(.36, .2, -.012, -.0043, 2, -1, 0, -4);
					k(-1.167, -1.25, .008, -.0106, 1, 2, 0, 0);
					k(-7.412, -6.12, .117, .0484, 1, 2, 0, -2);
					k(-.311, -.65, -.032, .0044, 1, 2, 0, -4);
					k(.757, 1.82, -.105, .0112, 1, -2, 0, 2);
					k(2.58, 2.32, .027, .0196, 1, -2, 0, 0);
					k(2.533, 2.4, -.014, -.0212, 1, -2, 0, -2);
					k(-.344, -.57, -.025, .0036, 0, 3, 0, -2);
					k(-.992, -.02, 0, 0, 1, 0, 2, 2);
					k(-45.099, -.02, 0, -.001, 1, 0, 2, 0);
					k(-.179, -9.52, 0, -.0833, 1, 0, 2, -2);
					k(-.301, -.33, 0, .0014, 1, 0, 2, -4);
					k(-6.382, -3.37, 0, -.0481, 1, 0, -2, 2);
					k(39.528, 85.13, 0, -.7136, 1, 0, -2, 0);
					k(9.366, .71, 0, -.0112, 1, 0, -2, -2);
					k(.202, .02, 0, 0, 1, 0, -2, -4);
					k(.415, .1, 0, .0013, 0, 1, 2, 0);
					k(-2.152, -2.26, 0, -.0066, 0, 1, 2, -2);
					k(-1.44, -1.3, 0, .0014, 0, 1, -2, 2);
					k(.384, -.04, 0, 0, 0, 1, -2, -2);
					k(1.938, 3.6, -.145, .0401, 4, 0, 0, 0);
					k(-.952, -1.58, .052, -.013, 4, 0, 0, -2);
					k(-.551, -.94, .032, -.0097, 3, 1, 0, 0);
					k(-.482, -.57, .005, -.0045, 3, 1, 0, -2);
					k(.681, .96, -.026, .0115, 3, -1, 0, 0);
					k(-.297, -.27, .002, -9e-4, 2, 2, 0, -2);
					k(.254, .21, -.003, 0, 2, -2, 0, -2);
					k(-.25, -.22, .004, .0014, 1, 3, 0, -2);
					k(-3.996, 0, 0, 4e-4, 2, 0, 2, 0);
					k(.557, -.75, 0, -.009, 2, 0, 2, -2);
					k(-.459, -.38, 0, -.0053, 2, 0, -2, 2);
					k(-1.298, .74, 0, 4e-4, 2, 0, -2, 0);
					k(.538, 1.14, 0, -.0141, 2, 0, -2, -2);
					k(.263, .02, 0, 0, 1, 1, 2, 0);
					k(.426, .07, 0, -6e-4, 1, 1, -2, -2);
					k(-.304, .03, 0, 3e-4, 1, -1, 2, 0);
					k(-.372, -.19, 0, -.0027, 1, -1, -2, 2);
					k(.418, 0, 0, 0, 0, 0, 4, 0);
					k(-.33, -.04, 0, 0, 3, 0, 2, 0);
					z = -526.069 * l(0, 0, 1, -2).y;
					z += -3.352 * l(0, 0, 1, -4).y;
					z += 44.297 * l(1, 0, 1, -2).y;
					z += -6 * l(1, 0, 1, -4).y;
					z += 20.599 * l(-1, 0, 1, 0).y;
					z += -30.598 * l(-1, 0, 1, -2).y;
					z += -24.649 * l(-2, 0, 1, 0).y;
					z += -2 * l(-2, 0, 1, -2).y;
					z += -22.571 * l(0, 1, 1, -2).y;
					z += 10.985 * l(0, -1, 1, -2).y;
					q += .82 * h(.7736 - 62.5512 * a) + .31 * h(.0466 - 125.1025 * a) + .35 * h(.5785 - 25.1042 * a) + .66 * h(.4591 + 1335.8075 * a) + .64 * h(.313 - 91.568 * a) + 1.14 * h(.148 + 1331.2898 * a) + .21 * h(.5918 + 1056.5859 * a) + .44 * h(.5784 + 1322.8595 * a) + .24 * h(.2275 - 5.7374 * a) + .28 * h(.2965 + 2.6929 * a) + .33 * h(.3132 + 6.3368 * a);
					a = ha + t / ia;
					a = (1.000002708 + 139.978 * la) * (18518.511 + 1.189 + ab) * Math.sin(a) - 6.24 * Math.sin(3 * a) + z;
					return {
						geo_eclip_lon: U * Q((cb + q / ia) / U),
						geo_eclip_lat: Math.PI / 648e3 * a,
						distance_au: ia * pd / (.999953253 * va)
					};
				}
				function ac(a, b) {
					return [
						a.rot[0][0] * b[0] + a.rot[1][0] * b[1] + a.rot[2][0] * b[2],
						a.rot[0][1] * b[0] + a.rot[1][1] * b[1] + a.rot[2][1] * b[2],
						a.rot[0][2] * b[0] + a.rot[1][2] * b[1] + a.rot[2][2] * b[2]
					];
				}
				function wa(a, b, c) {
					b = Ma(b, c);
					return ac(b, a);
				}
				function Ma(a, b) {
					a = a.tt / 36525;
					var c = 84381.406, d = ((((3.337e-7 * a - 467e-9) * a - .00772503) * a + .0512623) * a - .025754) * a + c;
					c *= 484813681109536e-20;
					var f = ((((-9.51e-8 * a + 132851e-9) * a - .00114045) * a - 1.0790069) * a + 5038.481507) * a * 484813681109536e-20;
					d *= 484813681109536e-20;
					var g = ((((-56e-9 * a + 170663e-9) * a - .00121197) * a - 2.3814292) * a + 10.556403) * a * 484813681109536e-20;
					a = Math.sin(c);
					c = Math.cos(c);
					var h = Math.sin(-f);
					f = Math.cos(-f);
					var l = Math.sin(-d);
					d = Math.cos(-d);
					var k = Math.sin(g), n = Math.cos(g);
					g = n * f - h * k * d;
					var p = n * h * c + k * d * f * c - a * k * l, q = n * h * a + k * d * f * a + c * k * l, t = -k * f - h * n * d, y = -k * h * c + n * d * f * c - a * n * l;
					k = -k * h * a + n * d * f * a + c * n * l;
					h *= l;
					n = -l * f * c - a * d;
					a = -l * f * a + d * c;
					if (b === F.Into2000) return new J([
						[
							g,
							p,
							q
						],
						[
							t,
							y,
							k
						],
						[
							h,
							n,
							a
						]
					]);
					if (b === F.From2000) return new J([
						[
							g,
							t,
							h
						],
						[
							p,
							y,
							n
						],
						[
							q,
							k,
							a
						]
					]);
					throw "Invalid precess direction";
				}
				function ca(a) {
					if (!eb || eb.tt !== a.tt) {
						var b = a.tt / 36525, c = 15 * da(a).ee, d = (.779057273264 + .00273781191135448 * a.ut + a.ut % 1) % 1 * 360;
						0 > d && (d += 360);
						b = ((c + .014506 + ((((-3.68e-8 * b - 29956e-9) * b - 44e-8) * b + 1.3915817) * b + 4612.156534) * b) / 3600 + d) % 360 / 15;
						0 > b && (b += 24);
						eb = {
							tt: a.tt,
							st: b
						};
					}
					return eb.st;
				}
				function bc(a) {
					a = v(a);
					return ca(a);
				}
				function xb(a, b) {
					var c = a.latitude * e.DEG2RAD, d = Math.sin(c);
					c = Math.cos(c);
					var f = 1 / Math.hypot(c, .996647180302104 * d), g = a.height / 1e3, h = 6378.1366 * f + g;
					b = (15 * b + a.longitude) * e.DEG2RAD;
					a = Math.sin(b);
					b = Math.cos(b);
					return {
						pos: [
							h * c * b / e.KM_PER_AU,
							h * c * a / e.KM_PER_AU,
							(6335.438815127603 * f + g) * d / e.KM_PER_AU
						],
						vel: [
							-7292115e-11 * h * c * a * 86400 / e.KM_PER_AU,
							7292115e-11 * h * c * b * 86400 / e.KM_PER_AU,
							0
						]
					};
				}
				function xa(a, b, c) {
					b = Na(b, c);
					return ac(b, a);
				}
				function Na(a, b) {
					a = da(a);
					var c = a.mobl * e.DEG2RAD, d = a.tobl * e.DEG2RAD, f = 484813681109536e-20 * a.dpsi;
					a = Math.cos(c);
					c = Math.sin(c);
					var g = Math.cos(d), h = Math.sin(d);
					d = Math.cos(f);
					var l = Math.sin(f);
					f = -l * a;
					var k = -l * c, n = l * g, p = d * a * g + c * h, q = d * c * g - a * h;
					l *= h;
					var t = d * a * h - c * g;
					a = d * c * h + a * g;
					if (b === F.From2000) return new J([
						[
							d,
							n,
							l
						],
						[
							f,
							p,
							t
						],
						[
							k,
							q,
							a
						]
					]);
					if (b === F.Into2000) return new J([
						[
							d,
							f,
							k
						],
						[
							n,
							p,
							q
						],
						[
							l,
							t,
							a
						]
					]);
					throw "Invalid precess direction";
				}
				function fb(a, b, c) {
					return c === F.Into2000 ? wa(xa(a, b, c), b, c) : xa(wa(a, b, c), b, c);
				}
				function cc(a, b) {
					var c = ca(a);
					b = xb(b, c).pos;
					return fb(b, a, F.Into2000);
				}
				function qd(a) {
					if (!(a instanceof Array) || 3 !== a.length) return !1;
					for (var b = 0; 3 > b; ++b) {
						if (!(a[b] instanceof Array) || 3 !== a[b].length) return !1;
						for (var c = 0; 3 > c; ++c) if (!Number.isFinite(a[b][c])) return !1;
					}
					return !0;
				}
				function yb(a, b) {
					return new E(a[0], a[1], a[2], b);
				}
				function dc(a, b) {
					b = yb(a, b);
					var c = b.x * b.x + b.y * b.y, d = Math.sqrt(c + b.z * b.z);
					if (0 === c) {
						if (0 === b.z) throw "Indeterminate sky coordinates";
						return new gb(0, 0 > b.z ? -90 : 90, d, b);
					}
					var f = e.RAD2HOUR * Math.atan2(b.y, b.x);
					0 > f && (f += 24);
					return new gb(f, e.RAD2DEG * Math.atan2(a[2], Math.sqrt(c)), d, b);
				}
				function ya(a, b) {
					var c = a * e.DEG2RAD;
					a = Math.cos(c);
					c = Math.sin(c);
					return [
						a * b[0] + c * b[1],
						a * b[1] - c * b[0],
						b[2]
					];
				}
				function hb(a, b, c, d, f) {
					a = v(a);
					za(b);
					w(c);
					w(d);
					var g = Math.sin(b.latitude * e.DEG2RAD), h = Math.cos(b.latitude * e.DEG2RAD), l = Math.sin(b.longitude * e.DEG2RAD), k = Math.cos(b.longitude * e.DEG2RAD);
					b = Math.sin(d * e.DEG2RAD);
					var n = Math.cos(d * e.DEG2RAD), p = Math.sin(c * e.HOUR2RAD), q = Math.cos(c * e.HOUR2RAD), t = [
						h * k,
						h * l,
						g
					];
					g = [
						-g * k,
						-g * l,
						h
					];
					l = [
						l,
						-k,
						0
					];
					h = -15 * ca(a);
					a = ya(h, t);
					t = ya(h, g);
					l = ya(h, l);
					b = [
						n * q,
						n * p,
						b
					];
					p = b[0] * a[0] + b[1] * a[1] + b[2] * a[2];
					n = b[0] * t[0] + b[1] * t[1] + b[2] * t[2];
					t = b[0] * l[0] + b[1] * l[1] + b[2] * l[2];
					q = Math.hypot(n, t);
					0 < q ? (n = -e.RAD2DEG * Math.atan2(t, n), 0 > n && (n += 360)) : n = 0;
					p = e.RAD2DEG * Math.atan2(q, p);
					q = d;
					if (f && (d = p, f = Oa(f, 90 - p), p -= f, 0 < f && 3e-4 < p)) {
						c = Math.sin(p * e.DEG2RAD);
						q = Math.cos(p * e.DEG2RAD);
						t = Math.sin(d * e.DEG2RAD);
						d = Math.cos(d * e.DEG2RAD);
						f = [];
						for (l = 0; 3 > l; ++l) f.push((b[l] - d * a[l]) / t * c + a[l] * q);
						q = Math.hypot(f[0], f[1]);
						0 < q ? (c = e.RAD2HOUR * Math.atan2(f[1], f[0]), 0 > c && (c += 24)) : c = 0;
						q = e.RAD2DEG * Math.atan2(f[2], q);
					}
					return new ec(n, 90 - p, c, q);
				}
				function za(a) {
					if (!(a instanceof zb)) throw "Not an instance of the Observer class: " + a;
					w(a.latitude);
					w(a.longitude);
					w(a.height);
					if (-90 > a.latitude || 90 < a.latitude) throw "Latitude " + a.latitude + " is out of range. Must be -90..+90.";
					return a;
				}
				function fc(a) {
					a = v(a).AddDays(-1 / e.C_AUDAY);
					var b = Aa(M.Earth, a), c = $jscomp.makeIterator(fb([
						-b.x,
						-b.y,
						-b.z
					], a, F.From2000));
					b = c.next().value;
					var d = c.next().value, f = c.next().value, g = e.DEG2RAD * da(a).tobl;
					c = Math.cos(g);
					g = Math.sin(g);
					a = new E(b, d, f, a);
					return Ab(a, c, g);
				}
				function Pa(a, b, c, d, f) {
					za(c);
					A(d);
					A(f);
					b = v(b);
					c = cc(b, c);
					a = W(a, b, f);
					a = [
						a.x - c[0],
						a.y - c[1],
						a.z - c[2]
					];
					if (!d) return dc(a, b);
					d = fb(a, b, F.From2000);
					return dc(d, b);
				}
				function Ab(a, b, c) {
					var d = a.x, f = a.y * b + a.z * c;
					c = -a.y * c + a.z * b;
					var g = Math.hypot(d, f);
					b = 0;
					0 < g && (b = e.RAD2DEG * Math.atan2(f, d), 0 > b && (b += 360));
					g = e.RAD2DEG * Math.atan2(c, g);
					a = new E(d, f, c, a.t);
					return new gc(a, g, b);
				}
				function Qa(a) {
					var b = da(a.t), c = wa([
						a.x,
						a.y,
						a.z
					], a.t, F.From2000), d = $jscomp.makeIterator(xa(c, a.t, F.From2000));
					c = d.next().value;
					var f = d.next().value;
					d = d.next().value;
					a = new E(c, f, d, a.t);
					b = b.tobl * e.DEG2RAD;
					return Ab(a, Math.cos(b), Math.sin(b));
				}
				function Y(a) {
					a = v(a);
					var b = ea(a), c = b.distance_au * Math.cos(b.geo_eclip_lat);
					b = [
						c * Math.cos(b.geo_eclip_lon),
						c * Math.sin(b.geo_eclip_lon),
						b.distance_au * Math.sin(b.geo_eclip_lat)
					];
					b = Yb(Xb(a), b);
					b = wa(b, a, F.Into2000);
					return new E(b[0], b[1], b[2], a);
				}
				function ib(a) {
					var b = v(a);
					a = ea(b);
					var c = a.distance_au * Math.cos(a.geo_eclip_lat), d = [
						c * Math.cos(a.geo_eclip_lon),
						c * Math.sin(a.geo_eclip_lon),
						a.distance_au * Math.sin(a.geo_eclip_lat)
					];
					c = da(b);
					d = Yb(c.mobl, d);
					d = xa(d, b, F.From2000);
					b = yb(d, b);
					c = c.tobl * e.DEG2RAD;
					b = Ab(b, Math.cos(c), Math.sin(c));
					return new Ba(b.elat, b.elon, a.distance_au);
				}
				function Ra(a) {
					a = v(a);
					var b = a.AddDays(-1e-5), c = a.AddDays(1e-5);
					b = Y(b);
					c = Y(c);
					return new I((b.x + c.x) / 2, (b.y + c.y) / 2, (b.z + c.z) / 2, (c.x - b.x) / 2e-5, (c.y - b.y) / 2e-5, (c.z - b.z) / 2e-5, a);
				}
				function Bb(a) {
					a = v(a);
					var b = Ra(a);
					return new I(b.x / 82.30056, b.y / 82.30056, b.z / 82.30056, b.vx / 82.30056, b.vy / 82.30056, b.vz / 82.30056, a);
				}
				function ma(a, b, c) {
					var d = 1, f = 0;
					a = $jscomp.makeIterator(a);
					for (var g = a.next(); !g.done; g = a.next()) {
						var h = 0;
						g = $jscomp.makeIterator(g.value);
						for (var l = g.next(); !l.done; l = g.next()) {
							var k = $jscomp.makeIterator(l.value);
							l = k.next().value;
							var n = k.next().value;
							k = k.next().value;
							h += l * Math.cos(n + b * k);
						}
						h *= d;
						c && (h %= U);
						f += h;
						d *= b;
					}
					return f;
				}
				function Cb(a, b) {
					var c = 1, d = 0, f = 0, g = 0;
					a = $jscomp.makeIterator(a);
					for (var h = a.next(); !h.done; h = a.next()) {
						var l = 0, k = 0;
						h = $jscomp.makeIterator(h.value);
						for (var n = h.next(); !n.done; n = h.next()) {
							var p = $jscomp.makeIterator(n.value);
							n = p.next().value;
							var q = p.next().value;
							p = p.next().value;
							q += b * p;
							l += n * p * Math.sin(q);
							0 < g && (k += n * Math.cos(q));
						}
						f += g * d * k - c * l;
						d = c;
						c *= b;
						++g;
					}
					return f;
				}
				function Db(a) {
					return new B(a[0] + 4.4036e-7 * a[1] - 1.90919e-7 * a[2], -4.79966e-7 * a[0] + .917482137087 * a[1] - .397776982902 * a[2], .397776982902 * a[1] + .917482137087 * a[2]);
				}
				function hc(a, b, c) {
					var d = c * Math.cos(b);
					return [
						d * Math.cos(a),
						d * Math.sin(a),
						c * Math.sin(b)
					];
				}
				function Aa(a, b) {
					var c = b.tt / 365250, d = ma(a[0], c, !0), f = ma(a[1], c, !1);
					a = ma(a[2], c, !1);
					d = hc(d, f, a);
					return Db(d).ToAstroVector(b);
				}
				function Sa(a, b) {
					var c = b / 365250, d = ma(a[0], c, !0), f = ma(a[1], c, !1), g = ma(a[2], c, !1), h = Cb(a[0], c), l = Cb(a[1], c);
					c = Cb(a[2], c);
					var k = Math.cos(d), n = Math.sin(d), p = Math.cos(f), q = Math.sin(f);
					a = +(c * p * k) - g * q * k * l - g * p * n * h;
					h = +(c * p * n) - g * q * n * l + g * p * k * h;
					l = +(c * q) + g * p * l;
					d = hc(d, f, g);
					f = [
						a / 365250,
						h / 365250,
						l / 365250
					];
					d = Db(d);
					f = Db(f);
					return new X(b, d, f);
				}
				function jb(a, b, c, d) {
					d /= d + .0002959122082855911;
					b = Aa(M[c], b);
					a.x += d * b.x;
					a.y += d * b.y;
					a.z += d * b.z;
				}
				function R(a, b, c, d) {
					d /= d + .0002959122082855911;
					b = Sa(M[c], b);
					a.r.incr(b.r.mul(d));
					a.v.incr(b.v.mul(d));
					return b;
				}
				function Ta(a, b, c) {
					a = c.sub(a);
					c = a.quadrature();
					return a.mul(b / (c * Math.sqrt(c)));
				}
				function Ca(a, b, c, d) {
					return new B(b.x + a * (c.x + a * d.x / 2), b.y + a * (c.y + a * d.y / 2), b.z + a * (c.z + a * d.z / 2));
				}
				function Eb(a, b, c) {
					return new B(b.x + a * c.x, b.y + a * c.y, b.z + a * c.z);
				}
				function Fb(a, b) {
					var c = a - b.tt, d = new Da(a), f = Ca(c, b.r, b.v, b.a), g = d.Acceleration(f).mean(b.a);
					f = Ca(c, b.r, b.v, g);
					b = b.v.add(g.mul(c));
					c = d.Acceleration(f);
					a = new Ua(a, f, b, c);
					return new ic(d, a);
				}
				function jc(a, b) {
					a = Math.floor(a);
					return 0 > a ? 0 : a >= b ? b - 1 : a;
				}
				function Gb(a) {
					var b = $jscomp.makeIterator(a);
					a = b.next().value;
					var c = $jscomp.makeIterator(b.next().value);
					var d = c.next().value;
					var f = c.next().value;
					c = c.next().value;
					var g = $jscomp.makeIterator(b.next().value);
					b = g.next().value;
					var h = g.next().value;
					g = g.next().value;
					d = new X(a, new B(d, f, c), new B(b, h, g));
					a = new Da(d.tt);
					f = d.r.add(a.Sun.r);
					c = d.v.add(a.Sun.v);
					b = a.Acceleration(f);
					d = new Ua(d.tt, f, c, b);
					return new ic(a, d);
				}
				function kc(a, b, c) {
					a = Gb(a);
					for (var d = Math.ceil((b - a.grav.tt) / c), f = 0; f < d; ++f) a = Fb(f + 1 === d ? b : a.grav.tt + c, a.grav);
					return a;
				}
				function Hb(a, b) {
					var c = a.tt;
					var d = na[0][0];
					if (c < d || c > na[50][0]) c = null;
					else {
						c = jc((c - d) / 29200, 50);
						if (!Ib[c]) {
							d = Ib[c] = [];
							d[0] = Gb(na[c]).grav;
							d[200] = Gb(na[c + 1]).grav;
							var f, g = d[0].tt;
							for (f = 1; 200 > f; ++f) d[f] = Fb(g += 146, d[f - 1]).grav;
							g = d[200].tt;
							var h = [];
							h[200] = d[200];
							for (f = 199; 0 < f; --f) h[f] = Fb(g -= 146, h[f + 1]).grav;
							for (f = 199; 0 < f; --f) g = f / 200, d[f].r = d[f].r.mul(1 - g).add(h[f].r.mul(g)), d[f].v = d[f].v.mul(1 - g).add(h[f].v.mul(g)), d[f].a = d[f].a.mul(1 - g).add(h[f].a.mul(g));
						}
						c = Ib[c];
					}
					if (d = c) {
						f = jc((a.tt - d[0].tt) / 146, 200);
						c = d[f];
						g = d[f + 1];
						var l = c.a.mean(g.a);
						f = Ca(a.tt - c.tt, c.r, c.v, l);
						d = Eb(a.tt - c.tt, c.v, l);
						h = Ca(a.tt - g.tt, g.r, g.v, l);
						g = Eb(a.tt - g.tt, g.v, l);
						l = (a.tt - c.tt) / 146;
						c = f.mul(1 - l).add(h.mul(l));
						d = d.mul(1 - l).add(g.mul(l));
					} else {
						var k = a.tt < na[0][0] ? kc(na[0], a.tt, -146) : kc(na[50], a.tt, 146);
						c = k.grav.r;
						d = k.grav.v;
						k = k.bary;
					}
					b && (k || (k = new Da(a.tt)), c = c.sub(k.Sun.r), d = d.sub(k.Sun.v));
					return new I(c.x, c.y, c.z, d.x, d.y, d.z, a);
				}
				function kb(a, b) {
					for (var c = a.tt + 18262.5, d = [
						0,
						b.al[0] + c * b.al[1],
						0,
						0,
						0,
						0
					], f = $jscomp.makeIterator(b.a), g = f.next(); !g.done; g = f.next()) {
						var h = $jscomp.makeIterator(g.value);
						g = h.next().value;
						var l = h.next().value;
						h = h.next().value;
						d[0] += g * Math.cos(l + c * h);
					}
					f = $jscomp.makeIterator(b.l);
					for (g = f.next(); !g.done; g = f.next()) h = $jscomp.makeIterator(g.value), g = h.next().value, l = h.next().value, h = h.next().value, d[1] += g * Math.sin(l + c * h);
					d[1] %= U;
					0 > d[1] && (d[1] += U);
					f = $jscomp.makeIterator(b.z);
					for (g = f.next(); !g.done; g = f.next()) h = $jscomp.makeIterator(g.value), g = h.next().value, l = h.next().value, h = h.next().value, l += c * h, d[2] += g * Math.cos(l), d[3] += g * Math.sin(l);
					f = $jscomp.makeIterator(b.zeta);
					for (g = f.next(); !g.done; g = f.next()) h = $jscomp.makeIterator(g.value), g = h.next().value, l = h.next().value, h = h.next().value, l += c * h, d[4] += g * Math.cos(l), d[5] += g * Math.sin(l);
					f = d[0];
					h = d[1];
					g = d[2];
					l = d[3];
					c = d[4];
					d = d[5];
					var k = Math.sqrt(b.mu / (f * f * f));
					b = h + g * Math.sin(h) - l * Math.cos(h);
					do {
						var n = Math.cos(b);
						var p = Math.sin(b);
						n = (h - b + g * p - l * n) / (1 - g * n - l * p);
						b += n;
					} while (1e-12 <= Math.abs(n));
					n = Math.cos(b);
					p = Math.sin(b);
					h = l * n - g * p;
					var q = -g * n - l * p, t = 1 / (1 + q), y = 1 / (1 + Math.sqrt(1 - g * g - l * l));
					b = f * (n - g - y * l * h);
					h = f * (p - l + y * g * h);
					l = k * t * f * (-p - y * l * q);
					f = k * t * f * (+n + y * g * q);
					g = 2 * Math.sqrt(1 - c * c - d * d);
					k = 1 - 2 * d * d;
					n = 1 - 2 * c * c;
					p = 2 * d * c;
					a = new I(b * k + h * p, b * p + h * n, (c * h - b * d) * g, l * k + f * p, l * p + f * n, (c * f - l * d) * g, a);
					return Ea(rd, a);
				}
				function Z(a, b) {
					b = v(b);
					if (a in M) return Aa(M[a], b);
					if (a === m.Pluto) return a = Hb(b, !0), new E(a.x, a.y, a.z, b);
					if (a === m.Sun) return new E(0, 0, 0, b);
					if (a === m.Moon) {
						a = Aa(M.Earth, b);
						var c = Y(b);
						return new E(a.x + c.x, a.y + c.y, a.z + c.z, b);
					}
					if (a === m.EMB) return a = Aa(M.Earth, b), c = Y(b), new E(a.x + c.x / 82.30056, a.y + c.y / 82.30056, a.z + c.z / 82.30056, b);
					if (a === m.SSB) return a = new E(0, 0, 0, b), jb(a, b, m.Jupiter, 2.825345909524226e-7), jb(a, b, m.Saturn, 8.459715185680659e-8), jb(a, b, m.Uranus, 1.292024916781969e-8), jb(a, b, m.Neptune, 1.524358900784276e-8), a;
					if (c = ka(a)) return a = new Ba(c.dec, 15 * c.ra, c.dist), lb(a, b);
					throw "HelioVector: Unknown body \"" + a + "\"";
				}
				function oa(a, b) {
					var c = ka(a);
					if (c) return c.dist;
					b = v(b);
					return a in M ? ma(M[a][2], b.tt / 365250, !1) : Z(a, b).Length();
				}
				function lc(a, b) {
					for (var c = b, d = 0, f = 0; 10 > f; ++f) {
						var g = a(c);
						d = g.Length() / e.C_AUDAY;
						if (1 < d) throw "Object is too distant for light-travel solver.";
						var h = b.AddDays(-d);
						d = Math.abs(h.tt - c.tt);
						if (1e-9 > d) return g;
						c = h;
					}
					throw "Light-travel time solver did not converge: dt = " + d;
				}
				function mc(a, b, c, d) {
					A(d);
					a = v(a);
					if (ka(c)) {
						c = Z(c, a);
						if (d) return b = mb(b, a), d = new E(c.x - b.x, c.y - b.y, c.z - b.z, a), c = e.C_AUDAY / d.Length(), new E(d.x + b.vx / c, d.y + b.vy / c, d.z + b.vz / c, a);
						b = Z(b, a);
						return new E(c.x - b.x, c.y - b.y, c.z - b.z, a);
					}
					var f = d ? new E(0, 0, 0, a) : Z(b, a);
					var g = new nc(b, c, d, f);
					return lc(function(h) {
						return g.Position(h);
					}, a);
				}
				function W(a, b, c) {
					A(c);
					b = v(b);
					switch (a) {
						case m.Earth: return new E(0, 0, 0, b);
						case m.Moon: return Y(b);
						default: return a = mc(b, m.Earth, a, c), a.t = b, a;
					}
				}
				function pa(a, b) {
					return new I(a.r.x, a.r.y, a.r.z, a.v.x, a.v.y, a.v.z, b);
				}
				function mb(a, b) {
					b = v(b);
					switch (a) {
						case m.Sun: return new I(0, 0, 0, 0, 0, 0, b);
						case m.SSB: return a = new Da(b.tt), new I(-a.Sun.r.x, -a.Sun.r.y, -a.Sun.r.z, -a.Sun.v.x, -a.Sun.v.y, -a.Sun.v.z, b);
						case m.Mercury:
						case m.Venus:
						case m.Earth:
						case m.Mars:
						case m.Jupiter:
						case m.Saturn:
						case m.Uranus:
						case m.Neptune: return a = Sa(M[a], b.tt), pa(a, b);
						case m.Pluto: return Hb(b, !0);
						case m.Moon:
						case m.EMB:
							var c = Sa(M.Earth, b.tt);
							a = a == m.Moon ? Ra(b) : Bb(b);
							return new I(a.x + c.r.x, a.y + c.r.y, a.z + c.r.z, a.vx + c.v.x, a.vy + c.v.y, a.vz + c.v.z, b);
						default:
							if (ka(a)) return a = Z(a, b), new I(a.x, a.y, a.z, 0, 0, 0, b);
							throw "HelioState: Unsupported body \"" + a + "\"";
					}
				}
				function sd(a, b, c, d, f) {
					var g = (f + c) / 2 - d;
					c = (f - c) / 2;
					if (0 == g) {
						if (0 == c) return null;
						d = -d / c;
						if (-1 > d || 1 < d) return null;
					} else {
						d = c * c - 4 * g * d;
						if (0 >= d) return null;
						f = Math.sqrt(d);
						d = (-c + f) / (2 * g);
						f = (-c - f) / (2 * g);
						if (-1 <= d && 1 >= d) {
							if (-1 <= f && 1 >= f) return null;
						} else if (-1 <= f && 1 >= f) d = f;
						else return null;
					}
					return {
						t: a + d * b,
						df_dt: (2 * g * d + c) / b
					};
				}
				function K(a, b, c, d) {
					var f = w(d && d.dt_tolerance_seconds || 1);
					f = Math.abs(f / 86400);
					var g = d && d.init_f1 || a(b), h = d && d.init_f2 || a(c), l = NaN, k = 0;
					d = d && d.iter_limit || 20;
					for (var n = !0;;) {
						if (++k > d) throw "Excessive iteration in Search()";
						var p = new O(b.ut + .5 * (c.ut - b.ut)), q = p.ut - b.ut;
						if (Math.abs(q) < f) return p;
						n ? l = a(p) : n = !0;
						var t = sd(p.ut, c.ut - p.ut, g, l, h);
						if (t) {
							var y = v(t.t), x = a(y);
							if (0 !== t.df_dt) {
								if (Math.abs(x / t.df_dt) < f) return y;
								t = 1.2 * Math.abs(x / t.df_dt);
								if (t < q / 10 && (q = y.AddDays(-t), y = y.AddDays(+t), 0 > (q.ut - b.ut) * (q.ut - c.ut) && 0 > (y.ut - b.ut) * (y.ut - c.ut))) {
									t = a(q);
									var z = a(y);
									if (0 > t && 0 <= z) {
										g = t;
										h = z;
										b = q;
										c = y;
										l = x;
										n = !1;
										continue;
									}
								}
							}
						}
						if (0 > g && 0 <= l) c = p, h = l;
						else if (0 > l && 0 <= h) b = p, g = l;
						else return null;
					}
				}
				function Fa(a) {
					for (; -180 >= a;) a += 360;
					for (; 180 < a;) a -= 360;
					return a;
				}
				function Ga(a) {
					for (; 0 > a;) a += 360;
					for (; 360 <= a;) a -= 360;
					return a;
				}
				function oc(a, b, c) {
					w(a);
					w(c);
					b = v(b);
					c = b.AddDays(c);
					return K(function(d) {
						d = fc(d);
						return Fa(d.elon - a);
					}, b, c, { dt_tolerance_seconds: .01 });
				}
				function Jb(a, b, c) {
					if (a === m.Earth || b === m.Earth) throw "The Earth does not have a longitude as seen from itself.";
					c = v(c);
					a = W(a, c, !1);
					a = Qa(a);
					b = W(b, c, !1);
					b = Qa(b);
					return Ga(a.elon - b.elon);
				}
				function Ha(a, b) {
					if (a == m.Earth) throw "The Earth does not have an angle as seen from itself.";
					var c = v(b);
					b = W(m.Sun, c, !0);
					a = W(a, c, !0);
					return N(b, a);
				}
				function qa(a, b) {
					if (a === m.Sun) throw "Cannot calculate heliocentric longitude of the Sun.";
					a = Z(a, b);
					return Qa(a).elon;
				}
				function nb(a, b) {
					if (a === m.Earth) throw "The illumination of the Earth is not defined.";
					var c = v(b), d = Aa(M.Earth, c);
					if (a === m.Sun) {
						var f = new E(-d.x, -d.y, -d.z, c);
						b = new E(0, 0, 0, c);
						d = 0;
					} else a === m.Moon ? (f = Y(c), b = new E(d.x + f.x, d.y + f.y, d.z + f.z, c)) : (b = Z(a, b), f = new E(b.x - d.x, b.y - d.y, b.z - d.z, c)), d = N(f, b);
					var g = f.Length(), h = b.Length();
					if (a === m.Sun) var l = td + 5 * Math.log10(g);
					else if (a === m.Moon) a = d * e.DEG2RAD, l = a * a, a = -12.717 + 1.49 * Math.abs(a) + .0431 * l * l, l = a += 5 * Math.log10(g / (385000.6 / e.KM_PER_AU) * h);
					else if (a === m.Saturn) {
						var k = d;
						a = Qa(f);
						l = 28.06 * e.DEG2RAD;
						var n = e.DEG2RAD * a.elat;
						a = Math.asin(Math.sin(n) * Math.cos(l) - Math.cos(n) * Math.sin(l) * Math.sin(e.DEG2RAD * a.elon - e.DEG2RAD * (169.51 + 382e-7 * c.tt)));
						l = Math.sin(Math.abs(a));
						k = -9 + .044 * k + l * (-2.6 + 1.2 * l) + 5 * Math.log10(h * g);
						a *= e.RAD2DEG;
						l = k;
						k = a;
					} else {
						var p = n = l = 0;
						switch (a) {
							case m.Mercury:
								a = -.6;
								l = 4.98;
								n = -4.88;
								p = 3.02;
								break;
							case m.Venus:
								163.6 > d ? (a = -4.47, l = 1.03, n = .57, p = .13) : (a = .98, l = -1.02);
								break;
							case m.Mars:
								a = -1.52;
								l = 1.6;
								break;
							case m.Jupiter:
								a = -9.4;
								l = .5;
								break;
							case m.Uranus:
								a = -7.19;
								l = .25;
								break;
							case m.Neptune:
								a = -6.87;
								break;
							case m.Pluto:
								a = -1;
								l = 4;
								break;
							default: throw "VisualMagnitude: unsupported body " + a;
						}
						var q = d / 100;
						l = a + q * (l + q * (n + q * p)) + 5 * Math.log10(h * g);
					}
					return new pc(c, l, d, h, g, f, b, k);
				}
				function Va(a) {
					if (a === m.Earth) throw "The Earth does not have a synodic period as seen from itself.";
					if (a === m.Moon) return 29.530588;
					var b = aa[a];
					if (!b) throw "Not a valid planet name: " + a;
					a = aa.Earth.OrbitalPeriod;
					return Math.abs(a / (a / b.OrbitalPeriod - 1));
				}
				function Ia(a, b, c) {
					function d(n) {
						var p = qa(a, n);
						n = qa(m.Earth, n);
						return Fa(g * (n - p) - b);
					}
					w(b);
					var f = aa[a];
					if (!f) throw "Cannot search relative longitude because body is not a planet: " + a;
					if (a === m.Earth) throw "Cannot search relative longitude for the Earth (it is always 0)";
					var g = f.OrbitalPeriod > aa.Earth.OrbitalPeriod ? 1 : -1;
					f = Va(a);
					c = v(c);
					var h = d(c);
					0 < h && (h -= 360);
					for (var l = 0; 100 > l; ++l) {
						var k = -h / 360 * f;
						c = c.AddDays(k);
						if (1 > 86400 * Math.abs(k)) return c;
						k = h;
						h = d(c);
						30 > Math.abs(k) && k !== h && (k /= k - h, .5 < k && 2 > k && (f *= k));
					}
					throw "Relative longitude search failed to converge for " + a + " near " + c.toString() + " (error_angle = " + h + ").";
				}
				function Kb(a) {
					return Jb(m.Moon, m.Sun, a);
				}
				function Wa(a, b, c) {
					function d(l) {
						l = Kb(l);
						return Fa(l - a);
					}
					w(a);
					w(c);
					b = v(b);
					var f = d(b);
					if (0 > c) {
						0 > f && (f += 360);
						var g = -(29.530588 * f) / 360;
						f = g + 1.5;
						if (f < c) return null;
						var h = Math.max(c, g - 1.5);
					} else {
						0 < f && (f -= 360);
						g = -(29.530588 * f) / 360;
						h = g - 1.5;
						if (h > c) return null;
						f = Math.min(c, g + 1.5);
					}
					c = b.AddDays(h);
					b = b.AddDays(f);
					return K(d, c, b, { dt_tolerance_seconds: .1 });
				}
				function qc(a) {
					var b = Kb(a);
					b = (Math.floor(b / 90) + 1) % 4;
					a = Wa(90 * b, a, 10);
					if (!a) throw "Cannot find moon quarter";
					return new rc(b, a);
				}
				function sc(a) {
					if (!Number.isFinite(a) || -500 > a || 1e5 < a) throw "Invalid elevation: " + a;
					if (11e3 >= a) {
						var b = 288.15 - .0065 * a;
						a = 101325 * Math.pow(288.15 / b, -5.25577);
					} else 2e4 >= a ? (b = 216.65, a = 22632 * Math.exp(-.00015768832 * (a - 11e3))) : (b = 216.65 + .001 * (a - 2e4), a = 5474.87 * Math.pow(216.65 / b, 34.16319));
					return new tc(a, b, a / b / (101325 / 288.15));
				}
				function Lb(a, b, c, d, f, g, h) {
					if (0 > g && 0 <= h) return new ud(d, f, g, h);
					if (0 <= g && 0 > h) return null;
					if (17 < a) throw "Excessive recursion in rise/set ascent search.";
					var l = f.ut - d.ut;
					if (1 > 86400 * l || Math.min(Math.abs(g), Math.abs(h)) > l / 2 * c) return null;
					l = new O((d.ut + f.ut) / 2);
					var k = b(l);
					return Lb(1 + a, b, c, d, l, g, k) || Lb(1 + a, b, c, l, f, k, h);
				}
				function vd(a, b) {
					if (-90 > b || 90 < b) throw "Invalid geographic latitude: " + b;
					switch (a) {
						case m.Moon:
							a = 4.5;
							var c = 8.2;
							break;
						case m.Sun:
							a = .8;
							c = .5;
							break;
						case m.Mercury:
							a = -1.6;
							c = 1;
							break;
						case m.Venus:
							a = -.8;
							c = .6;
							break;
						case m.Mars:
							a = -.5;
							c = .4;
							break;
						case m.Jupiter:
						case m.Saturn:
						case m.Uranus:
						case m.Neptune:
						case m.Pluto:
							a = -.2;
							c = .2;
							break;
						case m.Star1:
						case m.Star2:
						case m.Star3:
						case m.Star4:
						case m.Star5:
						case m.Star6:
						case m.Star7:
						case m.Star8:
							a = -.008;
							c = .008;
							break;
						default: throw "Body not allowed for altitude search: " + a;
					}
					b *= e.DEG2RAD;
					return Math.abs((360.98564540070413 - a) * Math.cos(b)) + Math.abs(c * Math.sin(b));
				}
				function uc(a, b, c, d, f, g, h) {
					function l(x) {
						var z = Pa(a, x, b, !0, !0);
						x = hb(x, b, z.ra, z.dec).altitude + e.RAD2DEG * Math.asin(g / z.dist);
						return c * (x - h);
					}
					za(b);
					w(f);
					w(g);
					w(h);
					if (-90 > h || 90 < h) throw "Invalid target altitude angle: " + h;
					for (var k = vd(a, b.latitude), n = d = v(d), p = d, q = l(n), t = q;;) {
						0 > f ? (n = p.AddDays(-.42), q = l(n)) : (p = n.AddDays(.42), t = l(p));
						var y = Lb(0, l, k, n, p, q, t);
						if (y) {
							if (k = K(l, y.tx, y.ty, {
								dt_tolerance_seconds: .1,
								init_f1: y.ax,
								init_f2: y.ay
							})) {
								if (0 > f) {
									if (k.ut < d.ut + f) return null;
								} else if (k.ut > d.ut + f) return null;
								return k;
							}
							throw "Rise/set search failed after finding ascent: t1=" + n + ", t2=" + p + ", a1=" + q + ", a2=" + t;
						}
						if (0 > f) {
							if (n.ut < d.ut + f) return null;
							p = n;
							t = q;
						} else {
							if (p.ut > d.ut + f) return null;
							n = p;
							q = t;
						}
					}
				}
				function vc(a, b) {
					b = v(b);
					var c = Jb(a, m.Sun, b);
					if (180 < c) {
						var d = "morning";
						c = 360 - c;
					} else d = "evening";
					a = Ha(a, b);
					return new wc(b, d, a, c);
				}
				function xc(a) {
					function b(l) {
						var k = l.AddDays(-5e-4);
						l = l.AddDays(5e-4);
						k = ea(k).distance_au;
						return (ea(l).distance_au - k) / .001;
					}
					function c(l) {
						return -b(l);
					}
					a = v(a);
					for (var d = b(a), f = 0; 59.061176 > 5 * f; ++f) {
						var g = a.AddDays(5), h = b(g);
						if (0 >= d * h) {
							if (0 > d || 0 < h) {
								a = K(b, a, g, {
									init_f1: d,
									init_f2: h
								});
								if (!a) throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
								d = ea(a).distance_au;
								return new Xa(a, 0, d);
							}
							if (0 < d || 0 > h) {
								a = K(c, a, g, {
									init_f1: -d,
									init_f2: -h
								});
								if (!a) throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
								d = ea(a).distance_au;
								return new Xa(a, 1, d);
							}
							throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
						}
						a = g;
						d = h;
					}
					throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
				}
				function yc(a, b, c, d) {
					for (var f = b === Ja.Apocenter ? 1 : -1;;) {
						d /= 9;
						if (d < 1 / 1440) return c = c.AddDays(d / 2), a = oa(a, c), new Xa(c, b, a);
						for (var g = -1, h = 0, l = 0; 10 > l; ++l) {
							var k = c.AddDays(l * d);
							k = f * oa(a, k);
							if (0 == l || k > h) g = l, h = k;
						}
						c = c.AddDays((g - 1) * d);
						d *= 2;
					}
				}
				function wd(a, b) {
					var c = b.AddDays(-30 / 360 * aa[a].OrbitalPeriod), d = b.AddDays(.75 * aa[a].OrbitalPeriod), f = c, g = c, h = -1, l = -1;
					d = (d.ut - c.ut) / 99;
					for (var k = 0; 100 > k; ++k) {
						var n = c.AddDays(k * d), p = oa(a, n);
						0 === k ? l = h = p : (p > l && (l = p, g = n), p < h && (h = p, f = n));
					}
					c = yc(a, 0, f.AddDays(-2 * d), 4 * d);
					a = yc(a, 1, g.AddDays(-2 * d), 4 * d);
					if (c.time.tt >= b.tt) return a.time.tt >= b.tt && a.time.tt < c.time.tt ? a : c;
					if (a.time.tt >= b.tt) return a;
					throw "Internal error: failed to find Neptune apsis.";
				}
				function zc(a, b) {
					function c(p) {
						var q = p.AddDays(-5e-4);
						p = p.AddDays(5e-4);
						q = oa(a, q);
						return (oa(a, p) - q) / .001;
					}
					function d(p) {
						return -c(p);
					}
					b = v(b);
					if (a === m.Neptune || a === m.Pluto) return wd(a, b);
					for (var f = aa[a].OrbitalPeriod, g = f / 6, h = c(b), l = 0; l * g < 2 * f; ++l) {
						var k = b.AddDays(g), n = c(k);
						if (0 >= h * n) {
							f = g = void 0;
							if (0 > h || 0 < n) g = c, f = Ja.Pericenter;
							else if (0 < h || 0 > n) g = d, f = Ja.Apocenter;
							else throw "Internal error with slopes in SearchPlanetApsis";
							b = K(g, b, k);
							if (!b) throw "Failed to find slope transition in planetary apsis search.";
							h = oa(a, b);
							return new Xa(b, f, h);
						}
						b = k;
						h = n;
					}
					throw "Internal error: should have found planetary apsis within 2 orbital periods.";
				}
				function Ka(a) {
					return new J([
						[
							a.rot[0][0],
							a.rot[1][0],
							a.rot[2][0]
						],
						[
							a.rot[0][1],
							a.rot[1][1],
							a.rot[2][1]
						],
						[
							a.rot[0][2],
							a.rot[1][2],
							a.rot[2][2]
						]
					]);
				}
				function ja(a, b) {
					return new J([
						[
							b.rot[0][0] * a.rot[0][0] + b.rot[1][0] * a.rot[0][1] + b.rot[2][0] * a.rot[0][2],
							b.rot[0][1] * a.rot[0][0] + b.rot[1][1] * a.rot[0][1] + b.rot[2][1] * a.rot[0][2],
							b.rot[0][2] * a.rot[0][0] + b.rot[1][2] * a.rot[0][1] + b.rot[2][2] * a.rot[0][2]
						],
						[
							b.rot[0][0] * a.rot[1][0] + b.rot[1][0] * a.rot[1][1] + b.rot[2][0] * a.rot[1][2],
							b.rot[0][1] * a.rot[1][0] + b.rot[1][1] * a.rot[1][1] + b.rot[2][1] * a.rot[1][2],
							b.rot[0][2] * a.rot[1][0] + b.rot[1][2] * a.rot[1][1] + b.rot[2][2] * a.rot[1][2]
						],
						[
							b.rot[0][0] * a.rot[2][0] + b.rot[1][0] * a.rot[2][1] + b.rot[2][0] * a.rot[2][2],
							b.rot[0][1] * a.rot[2][0] + b.rot[1][1] * a.rot[2][1] + b.rot[2][1] * a.rot[2][2],
							b.rot[0][2] * a.rot[2][0] + b.rot[1][2] * a.rot[2][1] + b.rot[2][2] * a.rot[2][2]
						]
					]);
				}
				function lb(a, b) {
					b = v(b);
					var c = a.lat * e.DEG2RAD, d = a.lon * e.DEG2RAD, f = a.dist * Math.cos(c);
					return new E(f * Math.cos(d), f * Math.sin(d), a.dist * Math.sin(c), b);
				}
				function Mb(a) {
					var b = Nb(a);
					return new gb(b.lon / 15, b.lat, b.dist, a);
				}
				function Nb(a) {
					var b = a.x * a.x + a.y * a.y, c = Math.sqrt(b + a.z * a.z);
					if (0 === b) {
						if (0 === a.z) throw "Zero-length vector not allowed.";
						var d = 0;
						a = 0 > a.z ? -90 : 90;
					} else d = e.RAD2DEG * Math.atan2(a.y, a.x), 0 > d && (d += 360), a = e.RAD2DEG * Math.atan2(a.z, Math.sqrt(b));
					return new Ba(a, d, c);
				}
				function Ac(a) {
					a = 360 - a;
					360 <= a ? a -= 360 : 0 > a && (a += 360);
					return a;
				}
				function Oa(a, b) {
					w(b);
					if (-90 > b || 90 < b) return 0;
					if ("normal" === a || "jplhor" === a) {
						var c = b;
						-1 > c && (c = -1);
						c = 1.02 / Math.tan((c + 10.3 / (c + 5.11)) * e.DEG2RAD) / 60;
						"normal" === a && -1 > b && (c *= (b + 90) / 89);
					} else {
						if (a) throw "Invalid refraction option: " + a;
						c = 0;
					}
					return c;
				}
				function Bc(a, b) {
					if (-90 > b || 90 < b) return 0;
					for (var c = b - Oa(a, b);;) {
						var d = c + Oa(a, c) - b;
						if (1e-14 > Math.abs(d)) return c - b;
						c -= d;
					}
				}
				function Ya(a, b) {
					return new E(a.rot[0][0] * b.x + a.rot[1][0] * b.y + a.rot[2][0] * b.z, a.rot[0][1] * b.x + a.rot[1][1] * b.y + a.rot[2][1] * b.z, a.rot[0][2] * b.x + a.rot[1][2] * b.y + a.rot[2][2] * b.z, b.t);
				}
				function Ea(a, b) {
					return new I(a.rot[0][0] * b.x + a.rot[1][0] * b.y + a.rot[2][0] * b.z, a.rot[0][1] * b.x + a.rot[1][1] * b.y + a.rot[2][1] * b.z, a.rot[0][2] * b.x + a.rot[1][2] * b.y + a.rot[2][2] * b.z, a.rot[0][0] * b.vx + a.rot[1][0] * b.vy + a.rot[2][0] * b.vz, a.rot[0][1] * b.vx + a.rot[1][1] * b.vy + a.rot[2][1] * b.vz, a.rot[0][2] * b.vx + a.rot[1][2] * b.vy + a.rot[2][2] * b.vz, b.t);
				}
				function Cc() {
					return new J([
						[
							1,
							0,
							0
						],
						[
							0,
							.9174821430670688,
							-.3977769691083922
						],
						[
							0,
							.3977769691083922,
							.9174821430670688
						]
					]);
				}
				function ob(a) {
					a = v(a);
					var b = Ma(a, F.From2000);
					a = Na(a, F.From2000);
					return ja(b, a);
				}
				function pb(a) {
					a = v(a);
					var b = Na(a, F.Into2000);
					a = Ma(a, F.Into2000);
					return ja(b, a);
				}
				function Ob(a, b) {
					a = v(a);
					var c = Math.sin(b.latitude * e.DEG2RAD), d = Math.cos(b.latitude * e.DEG2RAD), f = Math.sin(b.longitude * e.DEG2RAD), g = Math.cos(b.longitude * e.DEG2RAD);
					b = [
						d * g,
						d * f,
						c
					];
					c = [
						-c * g,
						-c * f,
						d
					];
					f = [
						f,
						-g,
						0
					];
					a = -15 * ca(a);
					b = ya(a, b);
					c = ya(a, c);
					a = ya(a, f);
					return new J([
						[
							c[0],
							a[0],
							b[0]
						],
						[
							c[1],
							a[1],
							b[1]
						],
						[
							c[2],
							a[2],
							b[2]
						]
					]);
				}
				function Dc(a, b) {
					a = Ob(a, b);
					return Ka(a);
				}
				function Ec(a, b) {
					a = v(a);
					b = Dc(a, b);
					a = pb(a);
					return ja(b, a);
				}
				function Fc(a) {
					a = pb(a);
					var b = Cc();
					return ja(a, b);
				}
				function Gc(a) {
					a = Fc(a);
					return Ka(a);
				}
				function Hc(a, b) {
					a = v(a);
					var c = Gc(a);
					a = Ob(a, b);
					return ja(c, a);
				}
				function Ic(a) {
					var b = da(v(a)).tobl * e.DEG2RAD;
					a = Math.cos(b);
					b = Math.sin(b);
					return new J([
						[
							1,
							0,
							0
						],
						[
							0,
							+a,
							+b
						],
						[
							0,
							-b,
							+a
						]
					]);
				}
				function Jc(a) {
					var b = da(v(a)).tobl * e.DEG2RAD;
					a = Math.cos(b);
					b = Math.sin(b);
					return new J([
						[
							1,
							0,
							0
						],
						[
							0,
							+a,
							-b
						],
						[
							0,
							+b,
							+a
						]
					]);
				}
				function Za(a, b, c, d) {
					var f = (d.x * c.x + d.y * c.y + d.z * c.z) / (d.x * d.x + d.y * d.y + d.z * d.z);
					return new xd(b, f, e.KM_PER_AU * Math.hypot(f * d.x - c.x, f * d.y - c.y, f * d.z - c.z), 695700 - (1 + f) * (695700 - a), -695700 + (1 + f) * (695700 + a), c, d);
				}
				function qb(a) {
					var b = W(m.Sun, a, !0);
					b = new E(-b.x, -b.y, -b.z, b.t);
					return Za(6459, a, Y(a), b);
				}
				function Kc(a) {
					var b = W(m.Sun, a, !0), c = Y(a), d = new E(-c.x, -c.y, -c.z, c.t);
					c.x -= b.x;
					c.y -= b.y;
					c.z -= b.z;
					return Za(1737.4, a, d, c);
				}
				function Pb(a, b) {
					var c = cc(a, b);
					b = W(m.Sun, a, !0);
					var d = Y(a);
					c = new E(c[0] - d.x, c[1] - d.y, c[2] - d.z, a);
					d.x -= b.x;
					d.y -= b.y;
					d.z -= b.z;
					return Za(1737.4, a, c, d);
				}
				function rb(a, b, c) {
					a = W(a, c, !0);
					var d = W(m.Sun, c, !0), f = new E(a.x - d.x, a.y - d.y, a.z - d.z, c);
					d.x = -a.x;
					d.y = -a.y;
					d.z = -a.z;
					return Za(b, c, d, f);
				}
				function Qb(a, b) {
					var c = 1 / 86400, d = b.AddDays(-c);
					b = b.AddDays(+c);
					d = a(d);
					return (a(b).r - d.r) / c;
				}
				function yd(a) {
					var b = a.AddDays(-.03);
					a = a.AddDays(.03);
					b = K(function(c) {
						return Qb(qb, c);
					}, b, a);
					if (!b) throw "Failed to find peak Earth shadow time.";
					return qb(b);
				}
				function zd(a) {
					var b = a.AddDays(-.03);
					a = a.AddDays(.03);
					b = K(function(c) {
						return Qb(Kc, c);
					}, b, a);
					if (!b) throw "Failed to find peak Moon shadow time.";
					return Kc(b);
				}
				function Ad(a, b, c) {
					var d = c.AddDays(-1);
					c = c.AddDays(1);
					d = K(function(f) {
						var g = 1 / 86400, h = rb(a, b, f.AddDays(-g));
						return (rb(a, b, f.AddDays(+g)).r - h.r) / g;
					}, d, c);
					if (!d) throw "Failed to find peak planet shadow time.";
					return rb(a, b, d);
				}
				function Bd(a, b) {
					function c(g) {
						return Pb(g, b);
					}
					var d = a.AddDays(-.2), f = a.AddDays(.2);
					d = K(function(g) {
						return Qb(c, g);
					}, d, f);
					if (!d) throw "PeakLocalMoonShadow: search failure for search_center_time = " + a;
					return Pb(d, b);
				}
				function Rb(a, b, c) {
					var d = c / 1440;
					c = a.AddDays(-d);
					d = a.AddDays(+d);
					c = K(function(f) {
						return -(qb(f).r - b);
					}, c, a);
					a = K(function(f) {
						return +(qb(f).r - b);
					}, a, d);
					if (!c || !a) throw "Failed to find shadow semiduration";
					return 720 * (a.ut - c.ut);
				}
				function Sb(a) {
					a = ea(a);
					return e.RAD2DEG * a.geo_eclip_lat;
				}
				function Lc(a, b, c) {
					if (0 >= a) throw "Radius of first disc must be positive.";
					if (0 >= b) throw "Radius of second disc must be positive.";
					if (0 > c) throw "Distance between discs is not allowed to be negative.";
					if (c >= a + b) return 0;
					if (0 == c) return a <= b ? 1 : b * b / (a * a);
					var d = (a * a - b * b + c * c) / (2 * c), f = a * a - d * d;
					if (0 >= f) return a <= b ? 1 : b * b / (a * a);
					f = Math.sqrt(f);
					return (a * a * Math.acos(d / a) - d * f + (b * b * Math.acos((c - d) / b) - (c - d) * f)) / (Math.PI * a * a);
				}
				function Mc(a, b) {
					var c = new E(a.x + b.x, a.y + b.y, a.z + b.z, a.t);
					a = Math.asin(Nc / c.Length());
					var d = Math.asin(Cd / b.Length());
					b = N(b, c);
					b = Lc(a, d, b * e.DEG2RAD);
					return Math.min(.9999, b);
				}
				function Oc(a) {
					a = v(a);
					for (var b = 0; 12 > b; ++b) {
						var c = Wa(180, a, 40);
						if (!c) throw "Cannot find full moon.";
						a = Sb(c);
						if (1.8 > Math.abs(a) && (a = yd(c), a.r < a.p + 1737.4)) {
							b = S.Penumbral;
							var d = c = 0, f = 0, g = Rb(a.time, a.p + 1737.4, 200);
							a.r < a.k + 1737.4 && (b = S.Partial, f = Rb(a.time, a.k + 1737.4, g), a.r + 1737.4 < a.k ? (b = S.Total, c = 1, d = Rb(a.time, a.k - 1737.4, f)) : c = Lc(1737.4, a.k, a.r));
							return new Pc(b, c, a.time, g, f, d);
						}
						a = c.AddDays(10);
					}
					throw "Failed to find lunar eclipse within 12 full moons.";
				}
				function Qc(a) {
					a = v(a);
					var b = 0;
					for (; 12 > b; ++b) {
						var c = Wa(0, a, 40);
						if (!c) throw "Cannot find new moon";
						a = Sb(c);
						if (1.8 > Math.abs(a) && (a = zd(c), a.r < a.p + 6371)) {
							var d = void 0, f = void 0, g = S.Partial;
							b = a.time;
							c = a.r;
							var h = ob(a.time), l = Ya(h, a.dir), k = Ya(h, a.target);
							l.x *= e.KM_PER_AU;
							l.y *= e.KM_PER_AU;
							l.z *= e.KM_PER_AU / .996647180302104;
							k.x *= e.KM_PER_AU;
							k.y *= e.KM_PER_AU;
							k.z *= e.KM_PER_AU / .996647180302104;
							var n = l.x * l.x + l.y * l.y + l.z * l.z, p = -2 * (l.x * k.x + l.y * k.y + l.z * k.z), q = p * p - 4 * n * (k.x * k.x + k.y * k.y + k.z * k.z - 40680626.48825956);
							if (0 < q) {
								f = (-p - Math.sqrt(q)) / (2 * n);
								g = f * l.x - k.x;
								n = f * l.y - k.y;
								l = .996647180302104 * (f * l.z - k.z);
								f = .9933056020041345 * Math.hypot(g, n);
								f = 0 == f ? 0 < l ? 90 : -90 : e.RAD2DEG * Math.atan(l / f);
								d = ca(b);
								d = (e.RAD2DEG * Math.atan2(n, g) - 15 * d) % 360;
								-180 >= d ? d += 360 : 180 < d && (d -= 360);
								h = Ka(h);
								l = new E(g / e.KM_PER_AU, n / e.KM_PER_AU, l / e.KM_PER_AU, a.time);
								l = Ya(h, l);
								l.x += a.target.x;
								l.y += a.target.y;
								l.z += a.target.z;
								h = Za(1736, a.time, l, a.dir);
								if (1e-9 < h.r || 0 > h.r) throw "Unexpected shadow distance from geoid intersection = " + h.r;
								g = .014 < h.k ? S.Total : S.Annular;
								a = g === S.Total ? 1 : Mc(a.dir, l);
							} else a = void 0;
							return new Rc(g, a, b, c, f, d);
						}
						a = c.AddDays(10);
					}
					throw "Failed to find solar eclipse within 12 full moons.";
				}
				function Sc(a) {
					return a.p - a.r;
				}
				function Tc(a) {
					return Math.abs(a.k) - a.r;
				}
				function sb(a, b, c, d, f) {
					d = K(function(g) {
						g = Pb(g, a);
						return b * c(g);
					}, d, f);
					if (!d) throw "Local eclipse transition search failed.";
					return Uc(a, d);
				}
				function Uc(a, b) {
					var c = Pa(m.Sun, b, a, !0, !0);
					a = hb(b, a, c.ra, c.dec, "normal").altitude;
					return new Vc(b, a);
				}
				function Wc(a, b) {
					a = v(a);
					for (za(b);;) {
						a = Wa(0, a, 40);
						if (!a) throw "Cannot find next new moon";
						var c = Sb(a);
						if (1.8 > Math.abs(c)) {
							var d = Bd(a, b);
							if (d.r < d.p) {
								var f = c = void 0;
								var g = b;
								var h = Uc(g, d.time), l = d.time.AddDays(-.2), k = d.time.AddDays(.2), n = sb(g, 1, Sc, l, d.time), p = sb(g, -1, Sc, d.time, k);
								d.r < Math.abs(d.k) ? (l = d.time.AddDays(-.01), k = d.time.AddDays(.01), f = sb(g, 1, Tc, l, d.time), c = sb(g, -1, Tc, d.time, k), g = .014 < d.k ? S.Total : S.Annular) : g = S.Partial;
								d = g === S.Total ? 1 : Mc(d.dir, d.target);
								c = new Xc(g, d, n, f, h, c, p);
								if (0 < c.partial_begin.altitude || 0 < c.partial_end.altitude) return c;
							}
						}
						a = a.AddDays(10);
					}
				}
				function Yc(a, b, c, d, f) {
					c = K(function(g) {
						g = rb(a, b, g);
						return f * (g.r - g.p);
					}, c, d);
					if (!c) throw "Planet transit boundary search failed";
					return c;
				}
				function Zc(a, b) {
					b = v(b);
					switch (a) {
						case m.Mercury:
							var c = 2439.7;
							break;
						case m.Venus:
							c = 6051.8;
							break;
						default: throw "Invalid body: " + a;
					}
					for (;;) {
						var d = Ia(a, 0, b);
						if (.4 > Ha(a, d) && (b = Ad(a, c, d), b.r < b.p)) {
							d = b.time.AddDays(-1);
							d = Yc(a, c, d, b.time, -1);
							var f = b.time.AddDays(1);
							c = Yc(a, c, b.time, f, 1);
							a = 60 * Ha(a, b.time);
							return new $c(d, b.time, c, a);
						}
						b = d.AddDays(10);
					}
				}
				function ad(a) {
					var b = v(a), c = ib(b);
					for (a = {};; a = { $jscomp$loop$prop$kind$33: a.$jscomp$loop$prop$kind$33 }) {
						var d = b.AddDays(10), f = ib(d);
						if (0 >= c.lat * f.lat) {
							a.$jscomp$loop$prop$kind$33 = f.lat > c.lat ? ra.Ascending : ra.Descending;
							b = K(function(g) {
								return function(h) {
									return g.$jscomp$loop$prop$kind$33 * ib(h).lat;
								};
							}(a), b, d);
							if (!b) throw "Could not find moon node.";
							return new bd(a.$jscomp$loop$prop$kind$33, b);
						}
						b = d;
						c = f;
					}
				}
				function cd(a, b, c, d, f) {
					if (1 > a || 5 < a) throw "Invalid lagrange point " + a;
					if (!Number.isFinite(c) || 0 >= c) throw "Major mass must be a positive number.";
					if (!Number.isFinite(f) || 0 >= f) throw "Minor mass must be a negative number.";
					var g = d.x - b.x, h = d.y - b.y, l = d.z - b.z, k = g * g + h * h + l * l, n = Math.sqrt(k), p = d.vx - b.vx, q = d.vy - b.vy;
					d = d.vz - b.vz;
					if (4 === a || 5 === a) {
						k = h * d - l * q;
						c = l * p - g * d;
						var t = g * q - h * p, y = c * l - t * h;
						t = t * g - k * l;
						k = k * h - c * g;
						c = Math.sqrt(y * y + t * t + k * k);
						y /= c;
						t /= c;
						k /= c;
						g /= n;
						h /= n;
						l /= n;
						a = 4 == a ? .8660254037844386 : -.8660254037844386;
						c = .5 * g + a * y;
						f = .5 * h + a * t;
						var x = .5 * l + a * k, z = p * g + q * h + d * l;
						p = p * y + q * t + d * k;
						b = new I(n * c, n * f, n * x, z * c + p * (.5 * y - a * g), z * f + p * (.5 * t - a * h), z * x + p * (.5 * k - a * l), b.t);
					} else {
						y = f / (c + f) * -n;
						t = c / (c + f) * +n;
						k = (c + f) / (k * n);
						if (1 === a || 2 === a) x = c / (c + f) * Math.cbrt(f / (3 * c)), c = -c, 1 == a ? (x = 1 - x, a = +f) : (x = 1 + x, a = -f);
						else if (3 === a) x = (7 / 12 * f - c) / (f + c), c = +c, a = +f;
						else throw "Invalid Langrage point " + a + ". Must be an integer 1..5.";
						f = n * x - y;
						do
							x = f - y, z = f - t, x = (k * f + c / (x * x) + a / (z * z)) / (k - 2 * c / (x * x * x) - 2 * a / (z * z * z)), f -= x;
						while (1e-14 < Math.abs(x / n));
						x = (f - y) / n;
						b = new I(x * g, x * h, x * l, x * p, x * q, x * d, b.t);
					}
					return b;
				}
				Object.defineProperty(e, "__esModule", { value: !0 });
				e.GeoEmbState = e.GeoMoonState = e.EclipticGeoMoon = e.GeoMoon = e.Ecliptic = e.ObserverGravity = e.VectorObserver = e.ObserverState = e.ObserverVector = e.Equator = e.SunPosition = e.Observer = e.Horizon = e.EclipticCoordinates = e.HorizontalCoordinates = e.MakeRotation = e.RotationMatrix = e.EquatorialCoordinates = e.Spherical = e.StateVector = e.Vector = e.SiderealTime = e.Libration = e.LibrationInfo = e.CalcMoonCount = e.e_tilt = e.MakeTime = e.AstroTime = e.SetDeltaTFunction = e.DeltaT_JplHorizons = e.DeltaT_EspenakMeeus = e.PlanetOrbitalPeriod = e.DefineStar = e.Body = e.AngleBetween = e.MassProduct = e.CALLISTO_RADIUS_KM = e.GANYMEDE_RADIUS_KM = e.EUROPA_RADIUS_KM = e.IO_RADIUS_KM = e.JUPITER_MEAN_RADIUS_KM = e.JUPITER_POLAR_RADIUS_KM = e.JUPITER_EQUATORIAL_RADIUS_KM = e.RAD2HOUR = e.RAD2DEG = e.HOUR2RAD = e.DEG2RAD = e.AU_PER_LY = e.KM_PER_AU = e.C_AUDAY = void 0;
				e.VectorFromHorizon = e.HorizonFromVector = e.SphereFromVector = e.EquatorFromVector = e.VectorFromSphere = e.Pivot = e.IdentityMatrix = e.CombineRotation = e.InverseRotation = e.NextPlanetApsis = e.SearchPlanetApsis = e.NextLunarApsis = e.SearchLunarApsis = e.Apsis = e.ApsisKind = e.SearchPeakMagnitude = e.SearchMaxElongation = e.Elongation = e.ElongationEvent = e.Seasons = e.SeasonInfo = e.HourAngle = e.SearchHourAngle = e.HourAngleEvent = e.SearchAltitude = e.SearchRiseSet = e.Atmosphere = e.AtmosphereInfo = e.NextMoonQuarter = e.SearchMoonQuarter = e.MoonQuarter = e.SearchMoonPhase = e.MoonPhase = e.SearchRelativeLongitude = e.Illumination = e.IlluminationInfo = e.EclipticLongitude = e.AngleFromSun = e.PairLongitude = e.SearchSunLongitude = e.Search = e.HelioState = e.BaryState = e.GeoVector = e.BackdatePosition = e.CorrectLightTravel = e.HelioDistance = e.HelioVector = e.JupiterMoons = e.JupiterMoonsInfo = void 0;
				e.GravitySimulator = e.LagrangePointFast = e.LagrangePoint = e.RotationAxis = e.AxisInfo = e.NextMoonNode = e.SearchMoonNode = e.NodeEventInfo = e.NodeEventKind = e.NextTransit = e.SearchTransit = e.TransitInfo = e.NextLocalSolarEclipse = e.SearchLocalSolarEclipse = e.LocalSolarEclipseInfo = e.EclipseEvent = e.NextGlobalSolarEclipse = e.SearchGlobalSolarEclipse = e.NextLunarEclipse = e.GlobalSolarEclipseInfo = e.SearchLunarEclipse = e.LunarEclipseInfo = e.EclipseKind = e.Constellation = e.ConstellationInfo = e.Rotation_EQD_ECT = e.Rotation_ECT_EQD = e.Rotation_GAL_EQJ = e.Rotation_EQJ_GAL = e.Rotation_HOR_ECL = e.Rotation_ECL_HOR = e.Rotation_ECL_EQD = e.Rotation_EQD_ECL = e.Rotation_EQJ_HOR = e.Rotation_HOR_EQJ = e.Rotation_HOR_EQD = e.Rotation_EQD_HOR = e.Rotation_EQD_EQJ = e.Rotation_ECT_EQJ = e.Rotation_EQJ_ECT = e.Rotation_EQJ_EQD = e.Rotation_ECL_EQJ = e.Rotation_EQJ_ECL = e.RotateState = e.RotateVector = e.InverseRefraction = e.Refraction = void 0;
				e.C_AUDAY = 173.1446326846693;
				e.KM_PER_AU = 149597870.69098932;
				e.AU_PER_LY = 63241.07708807546;
				e.DEG2RAD = .017453292519943295;
				e.HOUR2RAD = .26179938779914946;
				e.RAD2DEG = 57.29577951308232;
				e.RAD2HOUR = 3.819718634205488;
				e.JUPITER_EQUATORIAL_RADIUS_KM = 71492;
				e.JUPITER_POLAR_RADIUS_KM = 66854;
				e.JUPITER_MEAN_RADIUS_KM = 69911;
				e.IO_RADIUS_KM = 1821.6;
				e.EUROPA_RADIUS_KM = 1560.8;
				e.GANYMEDE_RADIUS_KM = 2631.2;
				e.CALLISTO_RADIUS_KM = 2410.3;
				var dd = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), U = 2 * Math.PI, ia = 180 / Math.PI * 3600, td = -.17 - 5 * Math.log10(648e3 / Math.PI), Nc = 695700 / e.KM_PER_AU, pd = 6378.1366 / e.KM_PER_AU, Dd = 1738.1 / e.KM_PER_AU, Cd = 1736 / e.KM_PER_AU, Ed = 34 / 60;
				e.MassProduct = C;
				e.AngleBetween = N;
				var m;
				(function(a) {
					a.Sun = "Sun";
					a.Moon = "Moon";
					a.Mercury = "Mercury";
					a.Venus = "Venus";
					a.Earth = "Earth";
					a.Mars = "Mars";
					a.Jupiter = "Jupiter";
					a.Saturn = "Saturn";
					a.Uranus = "Uranus";
					a.Neptune = "Neptune";
					a.Pluto = "Pluto";
					a.SSB = "SSB";
					a.EMB = "EMB";
					a.Star1 = "Star1";
					a.Star2 = "Star2";
					a.Star3 = "Star3";
					a.Star4 = "Star4";
					a.Star5 = "Star5";
					a.Star6 = "Star6";
					a.Star7 = "Star7";
					a.Star8 = "Star8";
				})(m = e.Body || (e.Body = {}));
				var ld = [
					m.Star1,
					m.Star2,
					m.Star3,
					m.Star4,
					m.Star5,
					m.Star6,
					m.Star7,
					m.Star8
				], md = [
					{
						ra: 0,
						dec: 0,
						dist: 0
					},
					{
						ra: 0,
						dec: 0,
						dist: 0
					},
					{
						ra: 0,
						dec: 0,
						dist: 0
					},
					{
						ra: 0,
						dec: 0,
						dist: 0
					},
					{
						ra: 0,
						dec: 0,
						dist: 0
					},
					{
						ra: 0,
						dec: 0,
						dist: 0
					},
					{
						ra: 0,
						dec: 0,
						dist: 0
					},
					{
						ra: 0,
						dec: 0,
						dist: 0
					}
				];
				e.DefineStar = function(a, b, c, d) {
					var f = T(a);
					if (!f) throw "Invalid star body: " + a;
					w(b);
					w(c);
					w(d);
					if (0 > b || 24 <= b) throw "Invalid right ascension for star: " + b;
					if (-90 > c || 90 < c) throw "Invalid declination for star: " + c;
					if (1 > d) throw "Invalid star distance: " + d;
					f.ra = b;
					f.dec = c;
					f.dist = d * e.AU_PER_LY;
				};
				var F;
				(function(a) {
					a[a.From2000 = 0] = "From2000";
					a[a.Into2000 = 1] = "Into2000";
				})(F || (F = {}));
				var aa = {
					Mercury: { OrbitalPeriod: 87.969 },
					Venus: { OrbitalPeriod: 224.701 },
					Earth: { OrbitalPeriod: 365.256 },
					Mars: { OrbitalPeriod: 686.98 },
					Jupiter: { OrbitalPeriod: 4332.589 },
					Saturn: { OrbitalPeriod: 10759.22 },
					Uranus: { OrbitalPeriod: 30685.4 },
					Neptune: { OrbitalPeriod: 60189 },
					Pluto: { OrbitalPeriod: 90560 }
				};
				e.PlanetOrbitalPeriod = function(a) {
					if (a in aa) return aa[a].OrbitalPeriod;
					throw "Unknown orbital period for: " + a;
				};
				var M = {
					Mercury: [
						[[
							[
								4.40250710144,
								0,
								0
							],
							[
								.40989414977,
								1.48302034195,
								26087.9031415742
							],
							[
								.050462942,
								4.47785489551,
								52175.8062831484
							],
							[
								.00855346844,
								1.16520322459,
								78263.70942472259
							],
							[
								.00165590362,
								4.11969163423,
								104351.61256629678
							],
							[
								.00034561897,
								.77930768443,
								130439.51570787099
							],
							[
								7583476e-11,
								3.71348404924,
								156527.41884944518
							]
						], [
							[
								26087.90313685529,
								0,
								0
							],
							[
								.01131199811,
								6.21874197797,
								26087.9031415742
							],
							[
								.00292242298,
								3.04449355541,
								52175.8062831484
							],
							[
								.00075775081,
								6.08568821653,
								78263.70942472259
							],
							[
								.00019676525,
								2.80965111777,
								104351.61256629678
							]
						]],
						[[
							[
								.11737528961,
								1.98357498767,
								26087.9031415742
							],
							[
								.02388076996,
								5.03738959686,
								52175.8062831484
							],
							[
								.01222839532,
								3.14159265359,
								0
							],
							[
								.0054325181,
								1.79644363964,
								78263.70942472259
							],
							[
								.0012977877,
								4.83232503958,
								104351.61256629678
							],
							[
								.00031866927,
								1.58088495658,
								130439.51570787099
							],
							[
								7963301e-11,
								4.60972126127,
								156527.41884944518
							]
						], [[
							.00274646065,
							3.95008450011,
							26087.9031415742
						], [
							.00099737713,
							3.14159265359,
							0
						]]],
						[[
							[
								.39528271651,
								0,
								0
							],
							[
								.07834131818,
								6.19233722598,
								26087.9031415742
							],
							[
								.00795525558,
								2.95989690104,
								52175.8062831484
							],
							[
								.00121281764,
								6.01064153797,
								78263.70942472259
							],
							[
								.00021921969,
								2.77820093972,
								104351.61256629678
							],
							[
								4354065e-11,
								5.82894543774,
								130439.51570787099
							]
						], [[
							.0021734774,
							4.65617158665,
							26087.9031415742
						], [
							.00044141826,
							1.42385544001,
							52175.8062831484
						]]]
					],
					Venus: [
						[[
							[
								3.17614666774,
								0,
								0
							],
							[
								.01353968419,
								5.59313319619,
								10213.285546211
							],
							[
								.00089891645,
								5.30650047764,
								20426.571092422
							],
							[
								5477194e-11,
								4.41630661466,
								7860.4193924392
							],
							[
								3455741e-11,
								2.6996444782,
								11790.6290886588
							],
							[
								2372061e-11,
								2.99377542079,
								3930.2096962196
							],
							[
								1317168e-11,
								5.18668228402,
								26.2983197998
							],
							[
								1664146e-11,
								4.25018630147,
								1577.3435424478
							],
							[
								1438387e-11,
								4.15745084182,
								9683.5945811164
							],
							[
								1200521e-11,
								6.15357116043,
								30639.856638633
							]
						], [
							[
								10213.28554621638,
								0,
								0
							],
							[
								.00095617813,
								2.4640651111,
								10213.285546211
							],
							[
								7787201e-11,
								.6247848222,
								20426.571092422
							]
						]],
						[[
							[
								.05923638472,
								.26702775812,
								10213.285546211
							],
							[
								.00040107978,
								1.14737178112,
								20426.571092422
							],
							[
								.00032814918,
								3.14159265359,
								0
							]
						], [[
							.00287821243,
							1.88964962838,
							10213.285546211
						]]],
						[[
							[
								.72334820891,
								0,
								0
							],
							[
								.00489824182,
								4.02151831717,
								10213.285546211
							],
							[
								1658058e-11,
								4.90206728031,
								20426.571092422
							],
							[
								1378043e-11,
								1.12846591367,
								11790.6290886588
							],
							[
								1632096e-11,
								2.84548795207,
								7860.4193924392
							],
							[
								498395e-11,
								2.58682193892,
								9683.5945811164
							],
							[
								221985e-11,
								2.01346696541,
								19367.1891622328
							],
							[
								237454e-11,
								2.55136053886,
								15720.8387848784
							]
						], [[
							.00034551041,
							.89198706276,
							10213.285546211
						]]]
					],
					Earth: [
						[
							[
								[
									1.75347045673,
									0,
									0
								],
								[
									.03341656453,
									4.66925680415,
									6283.0758499914
								],
								[
									.00034894275,
									4.62610242189,
									12566.1516999828
								],
								[
									3417572e-11,
									2.82886579754,
									3.523118349
								],
								[
									3497056e-11,
									2.74411783405,
									5753.3848848968
								],
								[
									3135899e-11,
									3.62767041756,
									77713.7714681205
								],
								[
									2676218e-11,
									4.41808345438,
									7860.4193924392
								],
								[
									2342691e-11,
									6.13516214446,
									3930.2096962196
								],
								[
									1273165e-11,
									2.03709657878,
									529.6909650946
								],
								[
									1324294e-11,
									.74246341673,
									11506.7697697936
								],
								[
									901854e-11,
									2.04505446477,
									26.2983197998
								],
								[
									1199167e-11,
									1.10962946234,
									1577.3435424478
								],
								[
									857223e-11,
									3.50849152283,
									398.1490034082
								],
								[
									779786e-11,
									1.17882681962,
									5223.6939198022
								],
								[
									99025e-10,
									5.23268072088,
									5884.9268465832
								],
								[
									753141e-11,
									2.53339052847,
									5507.5532386674
								],
								[
									505267e-11,
									4.58292599973,
									18849.2275499742
								],
								[
									492392e-11,
									4.20505711826,
									775.522611324
								],
								[
									356672e-11,
									2.91954114478,
									.0673103028
								],
								[
									284125e-11,
									1.89869240932,
									796.2980068164
								],
								[
									242879e-11,
									.34481445893,
									5486.777843175
								],
								[
									317087e-11,
									5.84901948512,
									11790.6290886588
								],
								[
									271112e-11,
									.31486255375,
									10977.078804699
								],
								[
									206217e-11,
									4.80646631478,
									2544.3144198834
								],
								[
									205478e-11,
									1.86953770281,
									5573.1428014331
								],
								[
									202318e-11,
									2.45767790232,
									6069.7767545534
								],
								[
									126225e-11,
									1.08295459501,
									20.7753954924
								],
								[
									155516e-11,
									.83306084617,
									213.299095438
								]
							],
							[
								[
									6283.0758499914,
									0,
									0
								],
								[
									.00206058863,
									2.67823455808,
									6283.0758499914
								],
								[
									4303419e-11,
									2.63512233481,
									12566.1516999828
								]
							],
							[[
								8721859e-11,
								1.07253635559,
								6283.0758499914
							]]
						],
						[[], [[
							.00227777722,
							3.4137662053,
							6283.0758499914
						], [
							3805678e-11,
							3.37063423795,
							12566.1516999828
						]]],
						[
							[
								[
									1.00013988784,
									0,
									0
								],
								[
									.01670699632,
									3.09846350258,
									6283.0758499914
								],
								[
									.00013956024,
									3.05524609456,
									12566.1516999828
								],
								[
									308372e-10,
									5.19846674381,
									77713.7714681205
								],
								[
									1628463e-11,
									1.17387558054,
									5753.3848848968
								],
								[
									1575572e-11,
									2.84685214877,
									7860.4193924392
								],
								[
									924799e-11,
									5.45292236722,
									11506.7697697936
								],
								[
									542439e-11,
									4.56409151453,
									3930.2096962196
								],
								[
									47211e-10,
									3.66100022149,
									5884.9268465832
								],
								[
									8.5831e-7,
									1.27079125277,
									161000.6857376741
								],
								[
									5.7056e-7,
									2.01374292245,
									83996.84731811189
								],
								[
									5.5736e-7,
									5.2415979917,
									71430.69561812909
								],
								[
									174844e-11,
									3.01193636733,
									18849.2275499742
								],
								[
									243181e-11,
									4.2734953079,
									11790.6290886588
								]
							],
							[[
								.00103018607,
								1.10748968172,
								6283.0758499914
							], [
								1721238e-11,
								1.06442300386,
								12566.1516999828
							]],
							[[
								4359385e-11,
								5.78455133808,
								6283.0758499914
							]]
						]
					],
					Mars: [
						[
							[
								[
									6.20347711581,
									0,
									0
								],
								[
									.18656368093,
									5.0503710027,
									3340.6124266998
								],
								[
									.01108216816,
									5.40099836344,
									6681.2248533996
								],
								[
									.00091798406,
									5.75478744667,
									10021.8372800994
								],
								[
									.00027744987,
									5.97049513147,
									3.523118349
								],
								[
									.00010610235,
									2.93958560338,
									2281.2304965106
								],
								[
									.00012315897,
									.84956094002,
									2810.9214616052
								],
								[
									8926784e-11,
									4.15697846427,
									.0172536522
								],
								[
									8715691e-11,
									6.11005153139,
									13362.4497067992
								],
								[
									6797556e-11,
									.36462229657,
									398.1490034082
								],
								[
									7774872e-11,
									3.33968761376,
									5621.8429232104
								],
								[
									3575078e-11,
									1.6618650571,
									2544.3144198834
								],
								[
									4161108e-11,
									.22814971327,
									2942.4634232916
								],
								[
									3075252e-11,
									.85696614132,
									191.4482661116
								],
								[
									2628117e-11,
									.64806124465,
									3337.0893083508
								],
								[
									2937546e-11,
									6.07893711402,
									.0673103028
								],
								[
									2389414e-11,
									5.03896442664,
									796.2980068164
								],
								[
									2579844e-11,
									.02996736156,
									3344.1355450488
								],
								[
									1528141e-11,
									1.14979301996,
									6151.533888305
								],
								[
									1798806e-11,
									.65634057445,
									529.6909650946
								],
								[
									1264357e-11,
									3.62275122593,
									5092.1519581158
								],
								[
									1286228e-11,
									3.06796065034,
									2146.1654164752
								],
								[
									1546404e-11,
									2.91579701718,
									1751.539531416
								],
								[
									1024902e-11,
									3.69334099279,
									8962.4553499102
								],
								[
									891566e-11,
									.18293837498,
									16703.062133499
								],
								[
									858759e-11,
									2.4009381194,
									2914.0142358238
								],
								[
									832715e-11,
									2.46418619474,
									3340.5951730476
								],
								[
									83272e-10,
									4.49495782139,
									3340.629680352
								],
								[
									712902e-11,
									3.66335473479,
									1059.3819301892
								],
								[
									748723e-11,
									3.82248614017,
									155.4203994342
								],
								[
									723861e-11,
									.67497311481,
									3738.761430108
								],
								[
									635548e-11,
									2.92182225127,
									8432.7643848156
								],
								[
									655162e-11,
									.48864064125,
									3127.3133312618
								],
								[
									550474e-11,
									3.81001042328,
									.9803210682
								],
								[
									55275e-10,
									4.47479317037,
									1748.016413067
								],
								[
									425966e-11,
									.55364317304,
									6283.0758499914
								],
								[
									415131e-11,
									.49662285038,
									213.299095438
								],
								[
									472167e-11,
									3.62547124025,
									1194.4470102246
								],
								[
									306551e-11,
									.38052848348,
									6684.7479717486
								],
								[
									312141e-11,
									.99853944405,
									6677.7017350506
								],
								[
									293198e-11,
									4.22131299634,
									20.7753954924
								],
								[
									302375e-11,
									4.48618007156,
									3532.0606928114
								],
								[
									274027e-11,
									.54222167059,
									3340.545116397
								],
								[
									281079e-11,
									5.88163521788,
									1349.8674096588
								],
								[
									231183e-11,
									1.28242156993,
									3870.3033917944
								],
								[
									283602e-11,
									5.7688543494,
									3149.1641605882
								],
								[
									236117e-11,
									5.75503217933,
									3333.498879699
								],
								[
									274033e-11,
									.13372524985,
									3340.6797370026
								],
								[
									299395e-11,
									2.78323740866,
									6254.6266625236
								]
							],
							[
								[
									3340.61242700512,
									0,
									0
								],
								[
									.01457554523,
									3.60433733236,
									3340.6124266998
								],
								[
									.00168414711,
									3.92318567804,
									6681.2248533996
								],
								[
									.00020622975,
									4.26108844583,
									10021.8372800994
								],
								[
									3452392e-11,
									4.7321039319,
									3.523118349
								],
								[
									2586332e-11,
									4.60670058555,
									13362.4497067992
								],
								[
									841535e-11,
									4.45864030426,
									2281.2304965106
								]
							],
							[[
								.00058152577,
								2.04961712429,
								3340.6124266998
							], [
								.00013459579,
								2.45738706163,
								6681.2248533996
							]]
						],
						[[
							[
								.03197134986,
								3.76832042431,
								3340.6124266998
							],
							[
								.00298033234,
								4.10616996305,
								6681.2248533996
							],
							[
								.00289104742,
								0,
								0
							],
							[
								.00031365539,
								4.4465105309,
								10021.8372800994
							],
							[
								34841e-9,
								4.7881254926,
								13362.4497067992
							]
						], [
							[
								.00217310991,
								6.04472194776,
								3340.6124266998
							],
							[
								.00020976948,
								3.14159265359,
								0
							],
							[
								.00012834709,
								1.60810667915,
								6681.2248533996
							]
						]],
						[
							[
								[
									1.53033488271,
									0,
									0
								],
								[
									.1418495316,
									3.47971283528,
									3340.6124266998
								],
								[
									.00660776362,
									3.81783443019,
									6681.2248533996
								],
								[
									.00046179117,
									4.15595316782,
									10021.8372800994
								],
								[
									8109733e-11,
									5.55958416318,
									2810.9214616052
								],
								[
									7485318e-11,
									1.77239078402,
									5621.8429232104
								],
								[
									5523191e-11,
									1.3643630377,
									2281.2304965106
								],
								[
									382516e-10,
									4.49407183687,
									13362.4497067992
								],
								[
									2306537e-11,
									.09081579001,
									2544.3144198834
								],
								[
									1999396e-11,
									5.36059617709,
									3337.0893083508
								],
								[
									2484394e-11,
									4.9254563992,
									2942.4634232916
								],
								[
									1960195e-11,
									4.74249437639,
									3344.1355450488
								],
								[
									1167119e-11,
									2.11260868341,
									5092.1519581158
								],
								[
									1102816e-11,
									5.00908403998,
									398.1490034082
								],
								[
									899066e-11,
									4.40791133207,
									529.6909650946
								],
								[
									992252e-11,
									5.83861961952,
									6151.533888305
								],
								[
									807354e-11,
									2.10217065501,
									1059.3819301892
								],
								[
									797915e-11,
									3.44839203899,
									796.2980068164
								],
								[
									740975e-11,
									1.49906336885,
									2146.1654164752
								]
							],
							[
								[
									.01107433345,
									2.03250524857,
									3340.6124266998
								],
								[
									.00103175887,
									2.37071847807,
									6681.2248533996
								],
								[
									128772e-9,
									0,
									0
								],
								[
									.0001081588,
									2.70888095665,
									10021.8372800994
								]
							],
							[[
								.00044242249,
								.47930604954,
								3340.6124266998
							], [
								8138042e-11,
								.86998389204,
								6681.2248533996
							]]
						]
					],
					Jupiter: [
						[
							[
								[
									.59954691494,
									0,
									0
								],
								[
									.09695898719,
									5.06191793158,
									529.6909650946
								],
								[
									.00573610142,
									1.44406205629,
									7.1135470008
								],
								[
									.00306389205,
									5.41734730184,
									1059.3819301892
								],
								[
									.00097178296,
									4.14264726552,
									632.7837393132
								],
								[
									.00072903078,
									3.64042916389,
									522.5774180938
								],
								[
									.00064263975,
									3.41145165351,
									103.0927742186
								],
								[
									.00039806064,
									2.29376740788,
									419.4846438752
								],
								[
									.00038857767,
									1.27231755835,
									316.3918696566
								],
								[
									.00027964629,
									1.7845459182,
									536.8045120954
								],
								[
									.0001358973,
									5.7748104079,
									1589.0728952838
								],
								[
									8246349e-11,
									3.5822792584,
									206.1855484372
								],
								[
									8768704e-11,
									3.63000308199,
									949.1756089698
								],
								[
									7368042e-11,
									5.0810119427,
									735.8765135318
								],
								[
									626315e-10,
									.02497628807,
									213.299095438
								],
								[
									6114062e-11,
									4.51319998626,
									1162.4747044078
								],
								[
									4905396e-11,
									1.32084470588,
									110.2063212194
								],
								[
									5305285e-11,
									1.30671216791,
									14.2270940016
								],
								[
									5305441e-11,
									4.18625634012,
									1052.2683831884
								],
								[
									4647248e-11,
									4.69958103684,
									3.9321532631
								],
								[
									3045023e-11,
									4.31676431084,
									426.598190876
								],
								[
									2609999e-11,
									1.56667394063,
									846.0828347512
								],
								[
									2028191e-11,
									1.06376530715,
									3.1813937377
								],
								[
									1764763e-11,
									2.14148655117,
									1066.49547719
								],
								[
									1722972e-11,
									3.88036268267,
									1265.5674786264
								],
								[
									1920945e-11,
									.97168196472,
									639.897286314
								],
								[
									1633223e-11,
									3.58201833555,
									515.463871093
								],
								[
									1431999e-11,
									4.29685556046,
									625.6701923124
								],
								[
									973272e-11,
									4.09764549134,
									95.9792272178
								]
							],
							[
								[
									529.69096508814,
									0,
									0
								],
								[
									.00489503243,
									4.2208293947,
									529.6909650946
								],
								[
									.00228917222,
									6.02646855621,
									7.1135470008
								],
								[
									.00030099479,
									4.54540782858,
									1059.3819301892
								],
								[
									.0002072092,
									5.45943156902,
									522.5774180938
								],
								[
									.00012103653,
									.16994816098,
									536.8045120954
								],
								[
									6067987e-11,
									4.42422292017,
									103.0927742186
								],
								[
									5433968e-11,
									3.98480737746,
									419.4846438752
								],
								[
									4237744e-11,
									5.89008707199,
									14.2270940016
								]
							],
							[
								[
									.00047233601,
									4.32148536482,
									7.1135470008
								],
								[
									.00030649436,
									2.929777887,
									529.6909650946
								],
								[
									.00014837605,
									3.14159265359,
									0
								]
							]
						],
						[[
							[
								.02268615702,
								3.55852606721,
								529.6909650946
							],
							[
								.00109971634,
								3.90809347197,
								1059.3819301892
							],
							[
								.00110090358,
								0,
								0
							],
							[
								8101428e-11,
								3.60509572885,
								522.5774180938
							],
							[
								6043996e-11,
								4.25883108339,
								1589.0728952838
							],
							[
								6437782e-11,
								.30627119215,
								536.8045120954
							]
						], [[
							.00078203446,
							1.52377859742,
							529.6909650946
						]]],
						[[
							[
								5.20887429326,
								0,
								0
							],
							[
								.25209327119,
								3.49108639871,
								529.6909650946
							],
							[
								.00610599976,
								3.84115365948,
								1059.3819301892
							],
							[
								.00282029458,
								2.57419881293,
								632.7837393132
							],
							[
								.00187647346,
								2.07590383214,
								522.5774180938
							],
							[
								.00086792905,
								.71001145545,
								419.4846438752
							],
							[
								.00072062974,
								.21465724607,
								536.8045120954
							],
							[
								.00065517248,
								5.9799588479,
								316.3918696566
							],
							[
								.00029134542,
								1.67759379655,
								103.0927742186
							],
							[
								.00030135335,
								2.16132003734,
								949.1756089698
							],
							[
								.00023453271,
								3.54023522184,
								735.8765135318
							],
							[
								.00022283743,
								4.19362594399,
								1589.0728952838
							],
							[
								.00023947298,
								.2745803748,
								7.1135470008
							],
							[
								.00013032614,
								2.96042965363,
								1162.4747044078
							],
							[
								970336e-10,
								1.90669633585,
								206.1855484372
							],
							[
								.00012749023,
								2.71550286592,
								1052.2683831884
							],
							[
								7057931e-11,
								2.18184839926,
								1265.5674786264
							],
							[
								6137703e-11,
								6.26418240033,
								846.0828347512
							],
							[
								2616976e-11,
								2.00994012876,
								1581.959348283
							]
						], [
							[
								.0127180152,
								2.64937512894,
								529.6909650946
							],
							[
								.00061661816,
								3.00076460387,
								1059.3819301892
							],
							[
								.00053443713,
								3.89717383175,
								522.5774180938
							],
							[
								.00031185171,
								4.88276958012,
								536.8045120954
							],
							[
								.00041390269,
								0,
								0
							]
						]]
					],
					Saturn: [
						[
							[
								[
									.87401354025,
									0,
									0
								],
								[
									.11107659762,
									3.96205090159,
									213.299095438
								],
								[
									.01414150957,
									4.58581516874,
									7.1135470008
								],
								[
									.00398379389,
									.52112032699,
									206.1855484372
								],
								[
									.00350769243,
									3.30329907896,
									426.598190876
								],
								[
									.00206816305,
									.24658372002,
									103.0927742186
								],
								[
									792713e-9,
									3.84007056878,
									220.4126424388
								],
								[
									.00023990355,
									4.66976924553,
									110.2063212194
								],
								[
									.00016573588,
									.43719228296,
									419.4846438752
								],
								[
									.00014906995,
									5.76903183869,
									316.3918696566
								],
								[
									.0001582029,
									.93809155235,
									632.7837393132
								],
								[
									.00014609559,
									1.56518472,
									3.9321532631
								],
								[
									.00013160301,
									4.44891291899,
									14.2270940016
								],
								[
									.00015053543,
									2.71669915667,
									639.897286314
								],
								[
									.00013005299,
									5.98119023644,
									11.0457002639
								],
								[
									.00010725067,
									3.12939523827,
									202.2533951741
								],
								[
									5863206e-11,
									.23656938524,
									529.6909650946
								],
								[
									5227757e-11,
									4.20783365759,
									3.1813937377
								],
								[
									6126317e-11,
									1.76328667907,
									277.0349937414
								],
								[
									5019687e-11,
									3.17787728405,
									433.7117378768
								],
								[
									459255e-10,
									.61977744975,
									199.0720014364
								],
								[
									4005867e-11,
									2.24479718502,
									63.7358983034
								],
								[
									2953796e-11,
									.98280366998,
									95.9792272178
								],
								[
									387367e-10,
									3.22283226966,
									138.5174968707
								],
								[
									2461186e-11,
									2.03163875071,
									735.8765135318
								],
								[
									3269484e-11,
									.77492638211,
									949.1756089698
								],
								[
									1758145e-11,
									3.2658010994,
									522.5774180938
								],
								[
									1640172e-11,
									5.5050445305,
									846.0828347512
								],
								[
									1391327e-11,
									4.02333150505,
									323.5054166574
								],
								[
									1580648e-11,
									4.37265307169,
									309.2783226558
								],
								[
									1123498e-11,
									2.83726798446,
									415.5524906121
								],
								[
									1017275e-11,
									3.71700135395,
									227.5261894396
								],
								[
									848642e-11,
									3.1915017083,
									209.3669421749
								]
							],
							[
								[
									213.2990952169,
									0,
									0
								],
								[
									.01297370862,
									1.82834923978,
									213.299095438
								],
								[
									.00564345393,
									2.88499717272,
									7.1135470008
								],
								[
									.00093734369,
									1.06311793502,
									426.598190876
								],
								[
									.00107674962,
									2.27769131009,
									206.1855484372
								],
								[
									.00040244455,
									2.04108104671,
									220.4126424388
								],
								[
									.00019941774,
									1.2795439047,
									103.0927742186
								],
								[
									.00010511678,
									2.7488034213,
									14.2270940016
								],
								[
									6416106e-11,
									.38238295041,
									639.897286314
								],
								[
									4848994e-11,
									2.43037610229,
									419.4846438752
								],
								[
									4056892e-11,
									2.92133209468,
									110.2063212194
								],
								[
									3768635e-11,
									3.6496533078,
									3.9321532631
								]
							],
							[
								[
									.0011644133,
									1.17988132879,
									7.1135470008
								],
								[
									.00091841837,
									.0732519584,
									213.299095438
								],
								[
									.00036661728,
									0,
									0
								],
								[
									.00015274496,
									4.06493179167,
									206.1855484372
								]
							]
						],
						[[
							[
								.04330678039,
								3.60284428399,
								213.299095438
							],
							[
								.00240348302,
								2.85238489373,
								426.598190876
							],
							[
								.00084745939,
								0,
								0
							],
							[
								.00030863357,
								3.48441504555,
								220.4126424388
							],
							[
								.00034116062,
								.57297307557,
								206.1855484372
							],
							[
								.0001473407,
								2.11846596715,
								639.897286314
							],
							[
								9916667e-11,
								5.79003188904,
								419.4846438752
							],
							[
								6993564e-11,
								4.7360468972,
								7.1135470008
							],
							[
								4807588e-11,
								5.43305312061,
								316.3918696566
							]
						], [
							[
								.00198927992,
								4.93901017903,
								213.299095438
							],
							[
								.00036947916,
								3.14159265359,
								0
							],
							[
								.00017966989,
								.5197943111,
								426.598190876
							]
						]],
						[
							[
								[
									9.55758135486,
									0,
									0
								],
								[
									.52921382865,
									2.39226219573,
									213.299095438
								],
								[
									.01873679867,
									5.2354960466,
									206.1855484372
								],
								[
									.01464663929,
									1.64763042902,
									426.598190876
								],
								[
									.00821891141,
									5.93520042303,
									316.3918696566
								],
								[
									.00547506923,
									5.0153261898,
									103.0927742186
								],
								[
									.0037168465,
									2.27114821115,
									220.4126424388
								],
								[
									.00361778765,
									3.13904301847,
									7.1135470008
								],
								[
									.00140617506,
									5.70406606781,
									632.7837393132
								],
								[
									.00108974848,
									3.29313390175,
									110.2063212194
								],
								[
									.00069006962,
									5.94099540992,
									419.4846438752
								],
								[
									.00061053367,
									.94037691801,
									639.897286314
								],
								[
									.00048913294,
									1.55733638681,
									202.2533951741
								],
								[
									.00034143772,
									.19519102597,
									277.0349937414
								],
								[
									.00032401773,
									5.47084567016,
									949.1756089698
								],
								[
									.00020936596,
									.46349251129,
									735.8765135318
								],
								[
									9796004e-11,
									5.20477537945,
									1265.5674786264
								],
								[
									.00011993338,
									5.98050967385,
									846.0828347512
								],
								[
									208393e-9,
									1.52102476129,
									433.7117378768
								],
								[
									.00015298404,
									3.0594381494,
									529.6909650946
								],
								[
									6465823e-11,
									.17732249942,
									1052.2683831884
								],
								[
									.00011380257,
									1.7310542704,
									522.5774180938
								],
								[
									3419618e-11,
									4.94550542171,
									1581.959348283
								]
							],
							[
								[
									.0618298134,
									.2584351148,
									213.299095438
								],
								[
									.00506577242,
									.71114625261,
									206.1855484372
								],
								[
									.00341394029,
									5.79635741658,
									426.598190876
								],
								[
									.00188491195,
									.47215589652,
									220.4126424388
								],
								[
									.00186261486,
									3.14159265359,
									0
								],
								[
									.00143891146,
									1.40744822888,
									7.1135470008
								]
							],
							[[
								.00436902572,
								4.78671677509,
								213.299095438
							]]
						]
					],
					Uranus: [
						[[
							[
								5.48129294297,
								0,
								0
							],
							[
								.09260408234,
								.89106421507,
								74.7815985673
							],
							[
								.01504247898,
								3.6271926092,
								1.4844727083
							],
							[
								.00365981674,
								1.89962179044,
								73.297125859
							],
							[
								.00272328168,
								3.35823706307,
								149.5631971346
							],
							[
								.00070328461,
								5.39254450063,
								63.7358983034
							],
							[
								.00068892678,
								6.09292483287,
								76.2660712756
							],
							[
								.00061998615,
								2.26952066061,
								2.9689454166
							],
							[
								.00061950719,
								2.85098872691,
								11.0457002639
							],
							[
								.0002646877,
								3.14152083966,
								71.8126531507
							],
							[
								.00025710476,
								6.11379840493,
								454.9093665273
							],
							[
								.0002107885,
								4.36059339067,
								148.0787244263
							],
							[
								.00017818647,
								1.74436930289,
								36.6485629295
							],
							[
								.00014613507,
								4.73732166022,
								3.9321532631
							],
							[
								.00011162509,
								5.8268179635,
								224.3447957019
							],
							[
								.0001099791,
								.48865004018,
								138.5174968707
							],
							[
								9527478e-11,
								2.95516862826,
								35.1640902212
							],
							[
								7545601e-11,
								5.236265824,
								109.9456887885
							],
							[
								4220241e-11,
								3.23328220918,
								70.8494453042
							],
							[
								40519e-9,
								2.277550173,
								151.0476698429
							],
							[
								3354596e-11,
								1.0654900738,
								4.4534181249
							],
							[
								2926718e-11,
								4.62903718891,
								9.5612275556
							],
							[
								349034e-10,
								5.48306144511,
								146.594251718
							],
							[
								3144069e-11,
								4.75199570434,
								77.7505439839
							],
							[
								2922333e-11,
								5.35235361027,
								85.8272988312
							],
							[
								2272788e-11,
								4.36600400036,
								70.3281804424
							],
							[
								2051219e-11,
								1.51773566586,
								.1118745846
							],
							[
								2148602e-11,
								.60745949945,
								38.1330356378
							],
							[
								1991643e-11,
								4.92437588682,
								277.0349937414
							],
							[
								1376226e-11,
								2.04283539351,
								65.2203710117
							],
							[
								1666902e-11,
								3.62744066769,
								380.12776796
							],
							[
								1284107e-11,
								3.11347961505,
								202.2533951741
							],
							[
								1150429e-11,
								.93343589092,
								3.1813937377
							],
							[
								1533221e-11,
								2.58594681212,
								52.6901980395
							],
							[
								1281604e-11,
								.54271272721,
								222.8603229936
							],
							[
								1372139e-11,
								4.19641530878,
								111.4301614968
							],
							[
								1221029e-11,
								.1990065003,
								108.4612160802
							],
							[
								946181e-11,
								1.19253165736,
								127.4717966068
							],
							[
								1150989e-11,
								4.17898916639,
								33.6796175129
							]
						], [
							[
								74.7815986091,
								0,
								0
							],
							[
								.00154332863,
								5.24158770553,
								74.7815985673
							],
							[
								.00024456474,
								1.71260334156,
								1.4844727083
							],
							[
								9258442e-11,
								.4282973235,
								11.0457002639
							],
							[
								8265977e-11,
								1.50218091379,
								63.7358983034
							],
							[
								915016e-10,
								1.41213765216,
								149.5631971346
							]
						]],
						[[
							[
								.01346277648,
								2.61877810547,
								74.7815985673
							],
							[
								623414e-9,
								5.08111189648,
								149.5631971346
							],
							[
								.00061601196,
								3.14159265359,
								0
							],
							[
								9963722e-11,
								1.61603805646,
								76.2660712756
							],
							[
								992616e-10,
								.57630380333,
								73.297125859
							]
						], [[
							.00034101978,
							.01321929936,
							74.7815985673
						]]],
						[[
							[
								19.21264847206,
								0,
								0
							],
							[
								.88784984413,
								5.60377527014,
								74.7815985673
							],
							[
								.03440836062,
								.32836099706,
								73.297125859
							],
							[
								.0205565386,
								1.7829515933,
								149.5631971346
							],
							[
								.0064932241,
								4.52247285911,
								76.2660712756
							],
							[
								.00602247865,
								3.86003823674,
								63.7358983034
							],
							[
								.00496404167,
								1.40139935333,
								454.9093665273
							],
							[
								.00338525369,
								1.58002770318,
								138.5174968707
							],
							[
								.00243509114,
								1.57086606044,
								71.8126531507
							],
							[
								.00190522303,
								1.99809394714,
								1.4844727083
							],
							[
								.00161858838,
								2.79137786799,
								148.0787244263
							],
							[
								.00143706183,
								1.38368544947,
								11.0457002639
							],
							[
								.00093192405,
								.17437220467,
								36.6485629295
							],
							[
								.00071424548,
								4.24509236074,
								224.3447957019
							],
							[
								.00089806014,
								3.66105364565,
								109.9456887885
							],
							[
								.00039009723,
								1.66971401684,
								70.8494453042
							],
							[
								.00046677296,
								1.39976401694,
								35.1640902212
							],
							[
								.00039025624,
								3.36234773834,
								277.0349937414
							],
							[
								.00036755274,
								3.88649278513,
								146.594251718
							],
							[
								.00030348723,
								.70100838798,
								151.0476698429
							],
							[
								.00029156413,
								3.180563367,
								77.7505439839
							],
							[
								.00022637073,
								.72518687029,
								529.6909650946
							],
							[
								.00011959076,
								1.7504339214,
								984.6003316219
							],
							[
								.00025620756,
								5.25656086672,
								380.12776796
							]
						], [[
							.01479896629,
							3.67205697578,
							74.7815985673
						]]]
					],
					Neptune: [
						[[
							[
								5.31188633046,
								0,
								0
							],
							[
								.0179847553,
								2.9010127389,
								38.1330356378
							],
							[
								.01019727652,
								.48580922867,
								1.4844727083
							],
							[
								.00124531845,
								4.83008090676,
								36.6485629295
							],
							[
								.00042064466,
								5.41054993053,
								2.9689454166
							],
							[
								.00037714584,
								6.09221808686,
								35.1640902212
							],
							[
								.00033784738,
								1.24488874087,
								76.2660712756
							],
							[
								.00016482741,
								7727998e-11,
								491.5579294568
							],
							[
								9198584e-11,
								4.93747051954,
								39.6175083461
							],
							[
								899425e-10,
								.27462171806,
								175.1660598002
							]
						], [
							[
								38.13303563957,
								0,
								0
							],
							[
								.00016604172,
								4.86323329249,
								1.4844727083
							],
							[
								.00015744045,
								2.27887427527,
								38.1330356378
							]
						]],
						[[
							[
								.03088622933,
								1.44104372644,
								38.1330356378
							],
							[
								.00027780087,
								5.91271884599,
								76.2660712756
							],
							[
								.00027623609,
								0,
								0
							],
							[
								.00015355489,
								2.52123799551,
								36.6485629295
							],
							[
								.00015448133,
								3.50877079215,
								39.6175083461
							]
						]],
						[[
							[
								30.07013205828,
								0,
								0
							],
							[
								.27062259632,
								1.32999459377,
								38.1330356378
							],
							[
								.01691764014,
								3.25186135653,
								36.6485629295
							],
							[
								.00807830553,
								5.18592878704,
								1.4844727083
							],
							[
								.0053776051,
								4.52113935896,
								35.1640902212
							],
							[
								.00495725141,
								1.5710564165,
								491.5579294568
							],
							[
								.00274571975,
								1.84552258866,
								175.1660598002
							],
							[
								.0001201232,
								1.92059384991,
								1021.2488945514
							],
							[
								.00121801746,
								5.79754470298,
								76.2660712756
							],
							[
								.00100896068,
								.3770272493,
								73.297125859
							],
							[
								.00135134092,
								3.37220609835,
								39.6175083461
							],
							[
								7571796e-11,
								1.07149207335,
								388.4651552382
							]
						]]
					]
				};
				e.DeltaT_EspenakMeeus = sa;
				e.DeltaT_JplHorizons = function(a) {
					return sa(Math.min(a, 17 * 365.24217));
				};
				var Wb = sa;
				e.SetDeltaTFunction = function(a) {
					Wb = a;
				};
				var O = function(a) {
					if (a instanceof O) this.date = a.date, this.ut = a.ut, this.tt = a.tt;
					else if (a instanceof Date && Number.isFinite(a.getTime())) this.date = a, this.ut = (a.getTime() - dd.getTime()) / 864e5, this.tt = Vb(this.ut);
					else if (Number.isFinite(a)) this.date = new Date(dd.getTime() + 864e5 * a), this.ut = a, this.tt = Vb(this.ut);
					else throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
				};
				O.FromTerrestrialTime = function(a) {
					for (var b = new O(a);;) {
						var c = a - b.tt;
						if (1e-12 > Math.abs(c)) return b;
						b = b.AddDays(c);
					}
				};
				O.prototype.toString = function() {
					return this.date.toISOString();
				};
				O.prototype.AddDays = function(a) {
					return new O(this.ut + a);
				};
				e.AstroTime = O;
				e.MakeTime = v;
				var $a;
				e.e_tilt = da;
				e.CalcMoonCount = 0;
				var ed = function(a, b, c, d, f, g) {
					this.elat = a;
					this.elon = b;
					this.mlat = c;
					this.mlon = d;
					this.dist_km = f;
					this.diam_deg = g;
				};
				e.LibrationInfo = ed;
				e.Libration = function(a) {
					var b = v(a);
					a = b.tt / 36525;
					var c = a * a, d = c * a, f = c * c, g = ea(b);
					b = g.geo_eclip_lon;
					var h = g.geo_eclip_lat;
					g = g.distance_au * e.KM_PER_AU;
					var l = 1.543 * e.DEG2RAD, k = e.DEG2RAD * Ga(93.272095 + 483202.0175233 * a - .0036539 * c - d / 3526e3 + f / 86331e4), n = e.DEG2RAD * Ga(125.0445479 - 1934.1362891 * a + .0020754 * c + d / 467441 - f / 60616e3), p = e.DEG2RAD * Ga(357.5291092 + 35999.0502909 * a - 1536e-7 * c + d / 2449e4), q = e.DEG2RAD * Ga(134.9633964 + 477198.8675055 * a + .0087414 * c + d / 69699 - f / 14712e3);
					d = e.DEG2RAD * Ga(297.8501921 + 445267.1114034 * a - .0018819 * c + d / 545868 - f / 113065e3);
					c = 1 - .002516 * a - 74e-7 * c;
					var t = b - n;
					f = Math.atan2(Math.sin(t) * Math.cos(h) * Math.cos(l) - Math.sin(h) * Math.sin(l), Math.cos(t) * Math.cos(h));
					var y = Fa(e.RAD2DEG * (f - k));
					l = Math.asin(-Math.sin(t) * Math.cos(h) * Math.sin(l) - Math.sin(h) * Math.cos(l));
					t = -.02752 * Math.cos(q) + -.02245 * Math.sin(k) + .00684 * Math.cos(q - 2 * k) + -.00293 * Math.cos(2 * k) + -85e-5 * Math.cos(2 * k - 2 * d) + -54e-5 * Math.cos(q - 2 * d) + -2e-4 * Math.sin(q + k) + -2e-4 * Math.cos(q + 2 * k) + -2e-4 * Math.cos(q - k) + 14e-5 * Math.cos(q + 2 * k - 2 * d);
					var x = -.02816 * Math.sin(q) + .02244 * Math.cos(k) + -.00682 * Math.sin(q - 2 * k) + -.00279 * Math.sin(2 * k) + -83e-5 * Math.sin(2 * k - 2 * d) + 69e-5 * Math.sin(q - 2 * d) + 4e-4 * Math.cos(q + k) + -25e-5 * Math.sin(2 * q) + -23e-5 * Math.sin(q + 2 * k) + 2e-4 * Math.cos(q - k) + 19e-5 * Math.sin(q - k) + 13e-5 * Math.sin(q + 2 * k - 2 * d) + -1e-4 * Math.cos(q - 3 * k);
					return new ed(e.RAD2DEG * l + (x * Math.cos(f) - t * Math.sin(f)), y + (-(.0252 * c * Math.sin(p) + .00473 * Math.sin(2 * q - 2 * k) + -.00467 * Math.sin(q) + .00396 * Math.sin(e.DEG2RAD * (119.75 + 131.849 * a)) + .00276 * Math.sin(2 * q - 2 * d) + .00196 * Math.sin(n) + -.00183 * Math.cos(q - k) + .00115 * Math.sin(q - 2 * d) + -96e-5 * Math.sin(q - d) + 46e-5 * Math.sin(2 * k - 2 * d) + -39e-5 * Math.sin(q - k) + -32e-5 * Math.sin(q - p - d) + 27e-5 * Math.sin(2 * q - p - 2 * d) + 23e-5 * Math.sin(e.DEG2RAD * (72.56 + 20.186 * a)) + -14e-5 * Math.sin(2 * d) + 14e-5 * Math.cos(2 * q - 2 * k) + -12e-5 * Math.sin(q - 2 * k) + -12e-5 * Math.sin(2 * q) + 11e-5 * Math.sin(2 * q - 2 * p - 2 * d)) + (t * Math.cos(f) + x * Math.sin(f)) * Math.tan(l)), e.RAD2DEG * h, e.RAD2DEG * b, g, 2 * e.RAD2DEG * Math.atan(1737.4 / Math.sqrt(g * g - 1737.4 * 1737.4)));
				};
				var eb;
				e.SiderealTime = bc;
				var E = function(a, b, c, d) {
					this.x = a;
					this.y = b;
					this.z = c;
					this.t = d;
				};
				E.prototype.Length = function() {
					return Math.hypot(this.x, this.y, this.z);
				};
				e.Vector = E;
				var I = function(a, b, c, d, f, g, h) {
					this.x = a;
					this.y = b;
					this.z = c;
					this.vx = d;
					this.vy = f;
					this.vz = g;
					this.t = h;
				};
				e.StateVector = I;
				var Ba = function(a, b, c) {
					this.lat = w(a);
					this.lon = w(b);
					this.dist = w(c);
				};
				e.Spherical = Ba;
				var gb = function(a, b, c, d) {
					this.ra = w(a);
					this.dec = w(b);
					this.dist = w(c);
					this.vec = d;
				};
				e.EquatorialCoordinates = gb;
				var J = function(a) {
					this.rot = a;
				};
				e.RotationMatrix = J;
				e.MakeRotation = function(a) {
					if (!qd(a)) throw "Argument must be a [3][3] array of numbers";
					return new J(a);
				};
				var ec = function(a, b, c, d) {
					this.azimuth = w(a);
					this.altitude = w(b);
					this.ra = w(c);
					this.dec = w(d);
				};
				e.HorizontalCoordinates = ec;
				var gc = function(a, b, c) {
					this.vec = a;
					this.elat = w(b);
					this.elon = w(c);
				};
				e.EclipticCoordinates = gc;
				e.Horizon = hb;
				var zb = function(a, b, c) {
					this.latitude = a;
					this.longitude = b;
					this.height = c;
					za(this);
				};
				e.Observer = zb;
				e.SunPosition = fc;
				e.Equator = Pa;
				e.ObserverVector = function(a, b, c) {
					a = v(a);
					var d = ca(a);
					b = xb(b, d).pos;
					c || (b = fb(b, a, F.Into2000));
					return yb(b, a);
				};
				e.ObserverState = function(a, b, c) {
					a = v(a);
					var d = ca(a);
					b = xb(b, d);
					b = new I(b.pos[0], b.pos[1], b.pos[2], b.vel[0], b.vel[1], b.vel[2], a);
					return c ? b : (c = F.Into2000, c === F.Into2000 ? (d = Na(a, c), b = Ea(d, b), a = Ma(a, c), a = Ea(a, b)) : (d = Ma(a, c), b = Ea(d, b), a = Na(a, c), a = Ea(a, b)), a);
				};
				e.VectorObserver = function(a, b) {
					var c = ca(a.t), d = [
						a.x,
						a.y,
						a.z
					];
					b || (d = wa(d, a.t, F.From2000), d = xa(d, a.t, F.From2000));
					b = d[0] * e.KM_PER_AU;
					var f = d[1] * e.KM_PER_AU;
					d = d[2] * e.KM_PER_AU;
					a = Math.hypot(b, f);
					if (1e-6 > a) {
						c = 0;
						var g = 0 < d ? 90 : -90;
						d = Math.abs(d) - 6356.751857971648;
					} else {
						for (c = e.RAD2DEG * Math.atan2(f, b) - 15 * c; -180 >= c;) c += 360;
						for (; 180 < c;) c -= 360;
						g = Math.atan2(d, a);
						for (var h, l = 0;;) {
							if (10 < ++l) throw "inverse_terra failed to converge.";
							b = Math.cos(g);
							f = Math.sin(g);
							var k = b * b, n = f * f, p = k + .9933056020041345 * n;
							h = Math.sqrt(p);
							var q = -42.69778487239616 * f * b / h - d * b + a * f;
							if (1e-8 > Math.abs(q)) break;
							g -= q / (-42.69778487239616 * ((k - n) / h - n * k * -.006694397995865464 / (-42.69778487239616 * p)) + d * f + a * b);
						}
						g *= e.RAD2DEG;
						h = 6378.1366 / h;
						d = Math.abs(f) > Math.abs(b) ? d / f - .9933056020041345 * h : a / b - h;
					}
					return new zb(g, c, 1e3 * d);
				};
				e.ObserverGravity = function(a, b) {
					a = Math.sin(a * e.DEG2RAD);
					a *= a;
					return 9.7803253359 * (1 + .00193185265241 * a) / Math.sqrt(1 - .00669437999013 * a) * (1 - (3.15704e-7 - 2.10269e-9 * a) * b + 737452e-19 * b * b);
				};
				e.Ecliptic = Qa;
				e.GeoMoon = Y;
				e.EclipticGeoMoon = ib;
				e.GeoMoonState = Ra;
				e.GeoEmbState = Bb;
				var na = [
					[
						-73e4,
						[
							-26.118207232108,
							-14.376168177825,
							3.384402515299
						],
						[
							.0016339372163656,
							-.0027861699588508,
							-.0013585880229445
						]
					],
					[
						-700800,
						[
							41.974905202127,
							-.448502952929,
							-12.770351505989
						],
						[
							.00073458569351457,
							.0022785014891658,
							.00048619778602049
						]
					],
					[
						-671600,
						[
							14.706930780744,
							44.269110540027,
							9.353698474772
						],
						[
							-.00210001479998,
							.00022295915939915,
							.00070143443551414
						]
					],
					[
						-642400,
						[
							-29.441003929957,
							-6.43016153057,
							6.858481011305
						],
						[
							.00084495803960544,
							-.0030783914758711,
							-.0012106305981192
						]
					],
					[
						-613200,
						[
							39.444396946234,
							-6.557989760571,
							-13.913760296463
						],
						[
							.0011480029005873,
							.0022400006880665,
							.00035168075922288
						]
					],
					[
						-584e3,
						[
							20.2303809507,
							43.266966657189,
							7.382966091923
						],
						[
							-.0019754081700585,
							.00053457141292226,
							.00075929169129793
						]
					],
					[
						-554800,
						[
							-30.65832536462,
							2.093818874552,
							9.880531138071
						],
						[
							61010603013347e-18,
							-.0031326500935382,
							-.00099346125151067
						]
					],
					[
						-525600,
						[
							35.737703251673,
							-12.587706024764,
							-14.677847247563
						],
						[
							.0015802939375649,
							.0021347678412429,
							.00019074436384343
						]
					],
					[
						-496400,
						[
							25.466295188546,
							41.367478338417,
							5.216476873382
						],
						[
							-.0018054401046468,
							.0008328308359951,
							.00080260156912107
						]
					],
					[
						-467200,
						[
							-29.847174904071,
							10.636426313081,
							12.297904180106
						],
						[
							-.00063257063052907,
							-.0029969577578221,
							-.00074476074151596
						]
					],
					[
						-438e3,
						[
							30.774692107687,
							-18.236637015304,
							-14.945535879896
						],
						[
							.0020113162005465,
							.0019353827024189,
							-20937793168297e-19
						]
					],
					[
						-408800,
						[
							30.243153324028,
							38.656267888503,
							2.938501750218
						],
						[
							-.0016052508674468,
							.0011183495337525,
							.00083333973416824
						]
					],
					[
						-379600,
						[
							-27.288984772533,
							18.643162147874,
							14.023633623329
						],
						[
							-.0011856388898191,
							-.0027170609282181,
							-.00049015526126399
						]
					],
					[
						-350400,
						[
							24.519605196774,
							-23.245756064727,
							-14.626862367368
						],
						[
							.0024322321483154,
							.0016062008146048,
							-.00023369181613312
						]
					],
					[
						-321200,
						[
							34.505274805875,
							35.125338586954,
							.557361475637
						],
						[
							-.0013824391637782,
							.0013833397561817,
							.00084823598806262
						]
					],
					[
						-292e3,
						[
							-23.275363915119,
							25.818514298769,
							15.055381588598
						],
						[
							-.0016062295460975,
							-.0023395961498533,
							-.00024377362639479
						]
					],
					[
						-262800,
						[
							17.050384798092,
							-27.180376290126,
							-13.608963321694
						],
						[
							.0028175521080578,
							.0011358749093955,
							-.00049548725258825
						]
					],
					[
						-233600,
						[
							38.093671910285,
							30.880588383337,
							-1.843688067413
						],
						[
							-.0011317697153459,
							.0016128814698472,
							.00084177586176055
						]
					],
					[
						-204400,
						[
							-18.197852930878,
							31.932869934309,
							15.438294826279
						],
						[
							-.0019117272501813,
							-.0019146495909842,
							-19657304369835e-18
						]
					],
					[
						-175200,
						[
							8.528924039997,
							-29.618422200048,
							-11.805400994258
						],
						[
							.0031034370787005,
							.0005139363329243,
							-.00077293066202546
						]
					],
					[
						-146e3,
						[
							40.94685725864,
							25.904973592021,
							-4.256336240499
						],
						[
							-.00083652705194051,
							.0018129497136404,
							.0008156422827306
						]
					],
					[
						-116800,
						[
							-12.326958895325,
							36.881883446292,
							15.217158258711
						],
						[
							-.0021166103705038,
							-.001481442003599,
							.00017401209844705
						]
					],
					[
						-87600,
						[
							-.633258375909,
							-30.018759794709,
							-9.17193287495
						],
						[
							.0032016994581737,
							-.00025279858672148,
							-.0010411088271861
						]
					],
					[
						-58400,
						[
							42.936048423883,
							20.344685584452,
							-6.588027007912
						],
						[
							-.00050525450073192,
							.0019910074335507,
							.00077440196540269
						]
					],
					[
						-29200,
						[
							-5.975910552974,
							40.61180995846,
							14.470131723673
						],
						[
							-.0022184202156107,
							-.0010562361130164,
							.00033652250216211
						]
					],
					[
						0,
						[
							-9.875369580774,
							-27.978926224737,
							-5.753711824704
						],
						[
							.0030287533248818,
							-.0011276087003636,
							-.0012651326732361
						]
					],
					[
						29200,
						[
							43.958831986165,
							14.214147973292,
							-8.808306227163
						],
						[
							-.00014717608981871,
							.0021404187242141,
							.00071486567806614
						]
					],
					[
						58400,
						[
							.67813676352,
							43.094461639362,
							13.243238780721
						],
						[
							-.0022358226110718,
							-.00063233636090933,
							.00047664798895648
						]
					],
					[
						87600,
						[
							-18.282602096834,
							-23.30503958666,
							-1.766620508028
						],
						[
							.0025567245263557,
							-.0019902940754171,
							-.0013943491701082
						]
					],
					[
						116800,
						[
							43.873338744526,
							7.700705617215,
							-10.814273666425
						],
						[
							.00023174803055677,
							.0022402163127924,
							.00062988756452032
						]
					],
					[
						146e3,
						[
							7.392949027906,
							44.382678951534,
							11.629500214854
						],
						[
							-.002193281545383,
							-.00021751799585364,
							.00059556516201114
						]
					],
					[
						175200,
						[
							-24.981690229261,
							-16.204012851426,
							2.466457544298
						],
						[
							.001819398914958,
							-.0026765419531201,
							-.0013848283502247
						]
					],
					[
						204400,
						[
							42.530187039511,
							.845935508021,
							-12.554907527683
						],
						[
							.00065059779150669,
							.0022725657282262,
							.00051133743202822
						]
					],
					[
						233600,
						[
							13.999526486822,
							44.462363044894,
							9.669418486465
						],
						[
							-.0021079296569252,
							.00017533423831993,
							.00069128485798076
						]
					],
					[
						262800,
						[
							-29.184024803031,
							-7.371243995762,
							6.493275957928
						],
						[
							.00093581363109681,
							-.0030610357109184,
							-.0012364201089345
						]
					],
					[
						292e3,
						[
							39.831980671753,
							-6.078405766765,
							-13.909815358656
						],
						[
							.0011117769689167,
							.0022362097830152,
							.00036230548231153
						]
					],
					[
						321200,
						[
							20.294955108476,
							43.417190420251,
							7.450091985932
						],
						[
							-.0019742157451535,
							.00053102050468554,
							.00075938408813008
						]
					],
					[
						350400,
						[
							-30.66999230216,
							2.318743558955,
							9.973480913858
						],
						[
							45605107450676e-18,
							-.0031308219926928,
							-.00099066533301924
						]
					],
					[
						379600,
						[
							35.626122155983,
							-12.897647509224,
							-14.777586508444
						],
						[
							.0016015684949743,
							.0021171931182284,
							.00018002516202204
						]
					],
					[
						408800,
						[
							26.133186148561,
							41.232139187599,
							5.00640132622
						],
						[
							-.0017857704419579,
							.00086046232702817,
							.00080614690298954
						]
					],
					[
						438e3,
						[
							-29.57674022923,
							11.863535943587,
							12.631323039872
						],
						[
							-.00072292830060955,
							-.0029587820140709,
							-.000708242964503
						]
					],
					[
						467200,
						[
							29.910805787391,
							-19.159019294,
							-15.013363865194
						],
						[
							.0020871080437997,
							.0018848372554514,
							-38528655083926e-18
						]
					],
					[
						496400,
						[
							31.375957451819,
							38.050372720763,
							2.433138343754
						],
						[
							-.0015546055556611,
							.0011699815465629,
							.00083565439266001
						]
					],
					[
						525600,
						[
							-26.360071336928,
							20.662505904952,
							14.414696258958
						],
						[
							-.0013142373118349,
							-.0026236647854842,
							-.00042542017598193
						]
					],
					[
						554800,
						[
							22.599441488648,
							-24.508879898306,
							-14.484045731468
						],
						[
							.0025454108304806,
							.0014917058755191,
							-.00030243665086079
						]
					],
					[
						584e3,
						[
							35.877864013014,
							33.894226366071,
							-.224524636277
						],
						[
							-.0012941245730845,
							.0014560427668319,
							.00084762160640137
						]
					],
					[
						613200,
						[
							-21.538149762417,
							28.204068269761,
							15.321973799534
						],
						[
							-.001731211740901,
							-.0021939631314577,
							-.0001631691327518
						]
					],
					[
						642400,
						[
							13.971521374415,
							-28.339941764789,
							-13.083792871886
						],
						[
							.0029334630526035,
							.00091860931752944,
							-.00059939422488627
						]
					],
					[
						671600,
						[
							39.526942044143,
							28.93989736011,
							-2.872799527539
						],
						[
							-.0010068481658095,
							.001702113288809,
							.00083578230511981
						]
					],
					[
						700800,
						[
							-15.576200701394,
							34.399412961275,
							15.466033737854
						],
						[
							-.0020098814612884,
							-.0017191109825989,
							70414782780416e-18
						]
					],
					[
						73e4,
						[
							4.24325283709,
							-30.118201690825,
							-10.707441231349
						],
						[
							.0031725847067411,
							.0001609846120227,
							-.00090672150593868
						]
					]
				], B = function(a, b, c) {
					this.x = a;
					this.y = b;
					this.z = c;
				};
				B.prototype.clone = function() {
					return new B(this.x, this.y, this.z);
				};
				B.prototype.ToAstroVector = function(a) {
					return new E(this.x, this.y, this.z, a);
				};
				B.zero = function() {
					return new B(0, 0, 0);
				};
				B.prototype.quadrature = function() {
					return this.x * this.x + this.y * this.y + this.z * this.z;
				};
				B.prototype.add = function(a) {
					return new B(this.x + a.x, this.y + a.y, this.z + a.z);
				};
				B.prototype.sub = function(a) {
					return new B(this.x - a.x, this.y - a.y, this.z - a.z);
				};
				B.prototype.incr = function(a) {
					this.x += a.x;
					this.y += a.y;
					this.z += a.z;
				};
				B.prototype.decr = function(a) {
					this.x -= a.x;
					this.y -= a.y;
					this.z -= a.z;
				};
				B.prototype.mul = function(a) {
					return new B(a * this.x, a * this.y, a * this.z);
				};
				B.prototype.div = function(a) {
					return new B(this.x / a, this.y / a, this.z / a);
				};
				B.prototype.mean = function(a) {
					return new B((this.x + a.x) / 2, (this.y + a.y) / 2, (this.z + a.z) / 2);
				};
				B.prototype.neg = function() {
					return new B(-this.x, -this.y, -this.z);
				};
				var X = function(a, b, c) {
					this.tt = a;
					this.r = b;
					this.v = c;
				};
				X.prototype.clone = function() {
					return new X(this.tt, this.r, this.v);
				};
				X.prototype.sub = function(a) {
					return new X(this.tt, this.r.sub(a.r), this.v.sub(a.v));
				};
				var Da = function(a) {
					var b = new X(a, new B(0, 0, 0), new B(0, 0, 0));
					this.Jupiter = R(b, a, m.Jupiter, 2.825345909524226e-7);
					this.Saturn = R(b, a, m.Saturn, 8.459715185680659e-8);
					this.Uranus = R(b, a, m.Uranus, 1.292024916781969e-8);
					this.Neptune = R(b, a, m.Neptune, 1.524358900784276e-8);
					this.Jupiter.r.decr(b.r);
					this.Jupiter.v.decr(b.v);
					this.Saturn.r.decr(b.r);
					this.Saturn.v.decr(b.v);
					this.Uranus.r.decr(b.r);
					this.Uranus.v.decr(b.v);
					this.Neptune.r.decr(b.r);
					this.Neptune.v.decr(b.v);
					this.Sun = new X(a, b.r.mul(-1), b.v.mul(-1));
				};
				Da.prototype.Acceleration = function(a) {
					var b = Ta(a, .0002959122082855911, this.Sun.r);
					b.incr(Ta(a, 2.825345909524226e-7, this.Jupiter.r));
					b.incr(Ta(a, 8.459715185680659e-8, this.Saturn.r));
					b.incr(Ta(a, 1.292024916781969e-8, this.Uranus.r));
					b.incr(Ta(a, 1.524358900784276e-8, this.Neptune.r));
					return b;
				};
				var Ua = function(a, b, c, d) {
					this.tt = a;
					this.r = b;
					this.v = c;
					this.a = d;
				};
				Ua.prototype.clone = function() {
					return new Ua(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
				};
				var ic = function(a, b) {
					this.bary = a;
					this.grav = b;
				}, Ib = [], rd = new J([
					[
						.999432765338654,
						-.0336771074697641,
						0
					],
					[
						.0303959428906285,
						.902057912352809,
						.430543388542295
					],
					[
						-.0144994559663353,
						-.430299169409101,
						.902569881273754
					]
				]), tb = [
					{
						mu: 2.82489428433814e-7,
						al: [1.446213296021224, 3.5515522861824],
						a: [[
							.0028210960212903,
							0,
							0
						]],
						l: [
							[
								-.0001925258348666,
								4.9369589722645,
								.01358483658305
							],
							[
								-970803596076e-16,
								4.3188796477322,
								.01303413843243
							],
							[
								-8988174165e-14,
								1.9080016428617,
								.00305064867158
							],
							[
								-553101050262e-16,
								1.4936156681569,
								.01293892891155
							]
						],
						z: [
							[
								.0041510849668155,
								4.089939635545,
								-.01290686414666
							],
							[
								.0006260521444113,
								1.446188898627,
								3.5515522949802
							],
							[
								352747346169e-16,
								2.1256287034578,
								.00012727416567
							]
						],
						zeta: [[
							.0003142172466014,
							2.7964219722923,
							-.002315096098
						], [
							904169207946e-16,
							1.0477061879627,
							-.00056920638196
						]]
					},
					{
						mu: 2.82483274392893e-7,
						al: [-.3735263437471362, 1.76932271112347],
						a: [[
							.0044871037804314,
							0,
							0
						], [
							4.324367498e-7,
							1.819645606291,
							1.7822295777568
						]],
						l: [
							[
								.0008576433172936,
								4.3188693178264,
								.01303413830805
							],
							[
								.0004549582875086,
								1.4936531751079,
								.01293892881962
							],
							[
								.0003248939825174,
								1.8196494533458,
								1.7822295777568
							],
							[
								-.0003074250079334,
								4.9377037005911,
								.01358483286724
							],
							[
								.0001982386144784,
								1.907986905476,
								.00305101212869
							],
							[
								.0001834063551804,
								2.1402853388529,
								.00145009789338
							],
							[
								-.0001434383188452,
								5.622214036663,
								.89111478887838
							],
							[
								-771939140944e-16,
								4.300272437235,
								2.6733443704266
							]
						],
						z: [
							[
								-.0093589104136341,
								4.0899396509039,
								-.01290686414666
							],
							[
								.0002988994545555,
								5.9097265185595,
								1.7693227079462
							],
							[
								.000213903639035,
								2.1256289300016,
								.00012727418407
							],
							[
								.0001980963564781,
								2.743516829265,
								.00067797343009
							],
							[
								.0001210388158965,
								5.5839943711203,
								320566149e-13
							],
							[
								837042048393e-16,
								1.6094538368039,
								-.90402165808846
							],
							[
								823525166369e-16,
								1.4461887708689,
								3.5515522949802
							]
						],
						zeta: [
							[
								.0040404917832303,
								1.0477063169425,
								-.0005692064054
							],
							[
								.0002200421034564,
								3.3368857864364,
								-.00012491307307
							],
							[
								.0001662544744719,
								2.4134862374711,
								0
							],
							[
								590282470983e-16,
								5.9719930968366,
								-3056160225e-14
							]
						]
					},
					{
						mu: 2.82498184184723e-7,
						al: [.2874089391143348, .878207923589328],
						a: [[
							.0071566594572575,
							0,
							0
						], [
							1393029911e-15,
							1.1586745884981,
							2.6733443704266
						]],
						l: [
							[
								.0002310797886226,
								2.1402987195942,
								.00145009784384
							],
							[
								-.0001828635964118,
								4.3188672736968,
								.01303413828263
							],
							[
								.0001512378778204,
								4.9373102372298,
								.01358483481252
							],
							[
								-.0001163720969778,
								4.300265986149,
								2.6733443704266
							],
							[
								-955478069846e-16,
								1.4936612842567,
								.01293892879857
							],
							[
								815246854464e-16,
								5.6222137132535,
								.89111478887838
							],
							[
								-801219679602e-16,
								1.2995922951532,
								1.0034433456729
							],
							[
								-607017260182e-16,
								.64978769669238,
								.50172167043264
							]
						],
						z: [
							[
								.0014289811307319,
								2.1256295942739,
								.00012727413029
							],
							[
								.000771093122676,
								5.5836330003496,
								320643411e-13
							],
							[
								.0005925911780766,
								4.0899396636448,
								-.01290686414666
							],
							[
								.0002045597496146,
								5.2713683670372,
								-.12523544076106
							],
							[
								.0001785118648258,
								.28743156721063,
								.8782079244252
							],
							[
								.0001131999784893,
								1.4462127277818,
								3.5515522949802
							],
							[
								-65877816921e-15,
								2.2702423990985,
								-1.7951364394537
							],
							[
								497058888328e-16,
								5.9096792204858,
								1.7693227129285
							]
						],
						zeta: [
							[
								.0015932721570848,
								3.3368862796665,
								-.00012491307058
							],
							[
								.0008533093128905,
								2.4133881688166,
								0
							],
							[
								.0003513347911037,
								5.9720789850127,
								-3056101771e-14
							],
							[
								-.0001441929255483,
								1.0477061764435,
								-.00056920632124
							]
						]
					},
					{
						mu: 2.82492144889909e-7,
						al: [-.3620341291375704, .376486233433828],
						a: [
							[
								.0125879701715314,
								0,
								0
							],
							[
								3595204947e-15,
								.64965776007116,
								.50172168165034
							],
							[
								27580210652e-16,
								1.808423578151,
								3.1750660413359
							]
						],
						l: [
							[
								.0005586040123824,
								2.1404207189815,
								.00145009793231
							],
							[
								-.0003805813868176,
								2.7358844897853,
								2972965062e-14
							],
							[
								.0002205152863262,
								.649796525964,
								.5017216724358
							],
							[
								.0001877895151158,
								1.8084787604005,
								3.1750660413359
							],
							[
								766916975242e-16,
								6.2720114319755,
								1.3928364636651
							],
							[
								747056855106e-16,
								1.2995916202344,
								1.0034433456729
							]
						],
						z: [
							[
								.0073755808467977,
								5.5836071576084,
								3206509914e-14
							],
							[
								.0002065924169942,
								5.9209831565786,
								.37648624194703
							],
							[
								.0001589869764021,
								.28744006242623,
								.8782079244252
							],
							[
								-.0001561131605348,
								2.1257397865089,
								.00012727441285
							],
							[
								.0001486043380971,
								1.4462134301023,
								3.5515522949802
							],
							[
								635073108731e-16,
								5.9096803285954,
								1.7693227129285
							],
							[
								599351698525e-16,
								4.1125517584798,
								-2.7985797954589
							],
							[
								540660842731e-16,
								5.5390350845569,
								.00286834082283
							],
							[
								-489596900866e-16,
								4.6218149483338,
								-.62695712529519
							]
						],
						zeta: [
							[
								.0038422977898495,
								2.4133922085557,
								0
							],
							[
								.0022453891791894,
								5.9721736773277,
								-3056125525e-14
							],
							[
								-.0002604479450559,
								3.3368746306409,
								-.00012491309972
							],
							[
								33211214323e-15,
								5.5604137742337,
								.00290037688507
							]
						]
					}
				], fd = function(a, b, c, d) {
					this.io = a;
					this.europa = b;
					this.ganymede = c;
					this.callisto = d;
				};
				e.JupiterMoonsInfo = fd;
				e.JupiterMoons = function(a) {
					a = new O(a);
					return new fd(kb(a, tb[0]), kb(a, tb[1]), kb(a, tb[2]), kb(a, tb[3]));
				};
				e.HelioVector = Z;
				e.HelioDistance = oa;
				e.CorrectLightTravel = lc;
				var nc = function(a, b, c, d) {
					this.observerBody = a;
					this.targetBody = b;
					this.aberration = c;
					this.observerPos = d;
				};
				nc.prototype.Position = function(a) {
					this.aberration && (this.observerPos = Z(this.observerBody, a));
					var b = Z(this.targetBody, a);
					return new E(b.x - this.observerPos.x, b.y - this.observerPos.y, b.z - this.observerPos.z, a);
				};
				e.BackdatePosition = mc;
				e.GeoVector = W;
				e.BaryState = function(a, b) {
					b = v(b);
					if (a === m.SSB) return new I(0, 0, 0, 0, 0, 0, b);
					if (a === m.Pluto) return Hb(b, !1);
					var c = new Da(b.tt);
					switch (a) {
						case m.Sun: return pa(c.Sun, b);
						case m.Jupiter: return pa(c.Jupiter, b);
						case m.Saturn: return pa(c.Saturn, b);
						case m.Uranus: return pa(c.Uranus, b);
						case m.Neptune: return pa(c.Neptune, b);
						case m.Moon:
						case m.EMB:
							var d = Sa(M[m.Earth], b.tt);
							a = a === m.Moon ? Ra(b) : Bb(b);
							return new I(a.x + c.Sun.r.x + d.r.x, a.y + c.Sun.r.y + d.r.y, a.z + c.Sun.r.z + d.r.z, a.vx + c.Sun.v.x + d.v.x, a.vy + c.Sun.v.y + d.v.y, a.vz + c.Sun.v.z + d.v.z, b);
					}
					if (a in M) return a = Sa(M[a], b.tt), new I(c.Sun.r.x + a.r.x, c.Sun.r.y + a.r.y, c.Sun.r.z + a.r.z, c.Sun.v.x + a.v.x, c.Sun.v.y + a.v.y, c.Sun.v.z + a.v.z, b);
					throw "BaryState: Unsupported body \"" + a + "\"";
				};
				e.HelioState = mb;
				e.Search = K;
				e.SearchSunLongitude = oc;
				e.PairLongitude = Jb;
				e.AngleFromSun = Ha;
				e.EclipticLongitude = qa;
				var pc = function(a, b, c, d, f, g, h, l) {
					this.time = a;
					this.mag = b;
					this.phase_angle = c;
					this.helio_dist = d;
					this.geo_dist = f;
					this.gc = g;
					this.hc = h;
					this.ring_tilt = l;
					this.phase_fraction = (1 + Math.cos(e.DEG2RAD * c)) / 2;
				};
				e.IlluminationInfo = pc;
				e.Illumination = nb;
				e.SearchRelativeLongitude = Ia;
				e.MoonPhase = Kb;
				e.SearchMoonPhase = Wa;
				var rc = function(a, b) {
					this.quarter = a;
					this.time = b;
				};
				e.MoonQuarter = rc;
				e.SearchMoonQuarter = qc;
				e.NextMoonQuarter = function(a) {
					a = new Date(a.time.date.getTime() + 5184e5);
					return qc(a);
				};
				var tc = function(a, b, c) {
					this.pressure = a;
					this.temperature = b;
					this.density = c;
				};
				e.AtmosphereInfo = tc;
				e.Atmosphere = sc;
				e.SearchRiseSet = function(a, b, c, d, f, g) {
					g = void 0 === g ? 0 : g;
					if (!Number.isFinite(g) || 0 > g) throw "Invalid value for metersAboveGround: " + g;
					a: switch (a) {
						case m.Sun:
							var h = Nc;
							break a;
						case m.Moon:
							h = Dd;
							break a;
						default: h = 0;
					}
					var l = sc(b.height - g), k = b.latitude * e.DEG2RAD, n = Math.sin(k);
					k = Math.cos(k);
					var p = 1 / Math.hypot(k, .996647180302104 * n), q = (b.height - g) / 1e3, t = .175 * Math.pow(1 - .0065 / 283.15 * (b.height - 2 / 3 * g), 3.256);
					return uc(a, b, c, d, f, h, e.RAD2DEG * -(Math.sqrt(2 * (1 - t) * g / (1e3 * Math.hypot((6378.1366 * p + q) * k, (6335.438815127603 * p + q) * n))) / (1 - t)) - Ed * l.density);
				};
				e.SearchAltitude = function(a, b, c, d, f, g) {
					if (!Number.isFinite(g) || -90 > g || 90 < g) throw "Invalid altitude angle: " + g;
					return uc(a, b, c, d, f, 0, g);
				};
				var ud = function(a, b, c, d) {
					this.tx = a;
					this.ty = b;
					this.ax = c;
					this.ay = d;
				}, gd = function(a, b) {
					this.time = a;
					this.hor = b;
				};
				e.HourAngleEvent = gd;
				e.SearchHourAngle = function(a, b, c, d, f) {
					f = void 0 === f ? 1 : f;
					za(b);
					d = v(d);
					var g = 0;
					if (a === m.Earth) throw "Cannot search for hour angle of the Earth.";
					w(c);
					if (0 > c || 24 <= c) throw "Invalid hour angle " + c;
					w(f);
					if (0 === f) throw "Direction must be positive or negative.";
					for (;;) {
						++g;
						var h = ca(d), l = Pa(a, d, b, !0, !0);
						h = (c + l.ra - b.longitude / 15 - h) % 24;
						1 === g ? 0 < f ? 0 > h && (h += 24) : 0 < h && (h -= 24) : -12 > h ? h += 24 : 12 < h && (h -= 24);
						if (.1 > 3600 * Math.abs(h)) return a = hb(d, b, l.ra, l.dec, "normal"), new gd(d, a);
						d = d.AddDays(h / 24 * .9972695717592592);
					}
				};
				e.HourAngle = function(a, b, c) {
					var d = v(b);
					b = bc(d);
					a = Pa(a, d, c, !0, !0);
					c = (c.longitude / 15 + b - a.ra) % 24;
					0 > c && (c += 24);
					return c;
				};
				var hd = function(a, b, c, d) {
					this.mar_equinox = a;
					this.jun_solstice = b;
					this.sep_equinox = c;
					this.dec_solstice = d;
				};
				e.SeasonInfo = hd;
				e.Seasons = function(a) {
					function b(h, l, k) {
						l = new Date(Date.UTC(a, l - 1, k));
						h = oc(h, l, 20);
						if (!h) throw "Cannot find season change near " + l.toISOString();
						return h;
					}
					a instanceof Date && Number.isFinite(a.getTime()) && (a = a.getUTCFullYear());
					if (!Number.isSafeInteger(a)) throw "Cannot calculate seasons because year argument " + a + " is neither a Date nor a safe integer.";
					return new hd(b(0, 3, 10), b(90, 6, 10), b(180, 9, 10), b(270, 12, 10));
				};
				var wc = function(a, b, c, d) {
					this.time = a;
					this.visibility = b;
					this.elongation = c;
					this.ecliptic_separation = d;
				};
				e.ElongationEvent = wc;
				e.Elongation = vc;
				e.SearchMaxElongation = function(a, b) {
					function c(n) {
						var p = n.AddDays(-.005);
						n = n.AddDays(.005);
						p = Ha(a, p);
						n = Ha(a, n);
						return (p - n) / .01;
					}
					b = v(b);
					var d = {
						Mercury: {
							s1: 50,
							s2: 85
						},
						Venus: {
							s1: 40,
							s2: 50
						}
					}[a];
					if (!d) throw "SearchMaxElongation works for Mercury and Venus only.";
					for (var f = 0; 2 >= ++f;) {
						var g = qa(a, b), h = qa(m.Earth, b), l = Fa(g - h), k = g = h = void 0;
						l >= -d.s1 && l < +d.s1 ? (k = 0, h = +d.s1, g = +d.s2) : l >= +d.s2 || l < -d.s2 ? (k = 0, h = -d.s2, g = -d.s1) : 0 <= l ? (k = -Va(a) / 4, h = +d.s1, g = +d.s2) : (k = -Va(a) / 4, h = -d.s2, g = -d.s1);
						l = b.AddDays(k);
						h = Ia(a, h, l);
						g = Ia(a, g, h);
						l = c(h);
						if (0 <= l) throw "SearchMaxElongation: internal error: m1 = " + l;
						k = c(g);
						if (0 >= k) throw "SearchMaxElongation: internal error: m2 = " + k;
						l = K(c, h, g, {
							init_f1: l,
							init_f2: k,
							dt_tolerance_seconds: 10
						});
						if (!l) throw "SearchMaxElongation: failed search iter " + f + " (t1=" + h.toString() + ", t2=" + g.toString() + ")";
						if (l.tt >= b.tt) return vc(a, l);
						b = g.AddDays(1);
					}
					throw "SearchMaxElongation: failed to find event after 2 tries.";
				};
				e.SearchPeakMagnitude = function(a, b) {
					function c(k) {
						var n = k.AddDays(-.005);
						k = k.AddDays(.005);
						n = nb(a, n).mag;
						return (nb(a, k).mag - n) / .01;
					}
					if (a !== m.Venus) throw "SearchPeakMagnitude currently works for Venus only.";
					b = v(b);
					for (var d = 0; 2 >= ++d;) {
						var f = qa(a, b), g = qa(m.Earth, b), h = Fa(f - g), l = f = g = void 0;
						-10 <= h && 10 > h ? (l = 0, g = 10, f = 30) : 30 <= h || -30 > h ? (l = 0, g = -30, f = -10) : 0 <= h ? (l = -Va(a) / 4, g = 10, f = 30) : (l = -Va(a) / 4, g = -30, f = -10);
						h = b.AddDays(l);
						g = Ia(a, g, h);
						f = Ia(a, f, g);
						h = c(g);
						if (0 <= h) throw "SearchPeakMagnitude: internal error: m1 = " + h;
						l = c(f);
						if (0 >= l) throw "SearchPeakMagnitude: internal error: m2 = " + l;
						h = K(c, g, f, {
							init_f1: h,
							init_f2: l,
							dt_tolerance_seconds: 10
						});
						if (!h) throw "SearchPeakMagnitude: failed search iter " + d + " (t1=" + g.toString() + ", t2=" + f.toString() + ")";
						if (h.tt >= b.tt) return nb(a, h);
						b = f.AddDays(1);
					}
					throw "SearchPeakMagnitude: failed to find event after 2 tries.";
				};
				var Ja;
				(function(a) {
					a[a.Pericenter = 0] = "Pericenter";
					a[a.Apocenter = 1] = "Apocenter";
				})(Ja = e.ApsisKind || (e.ApsisKind = {}));
				var Xa = function(a, b, c) {
					this.time = a;
					this.kind = b;
					this.dist_au = c;
					this.dist_km = c * e.KM_PER_AU;
				};
				e.Apsis = Xa;
				e.SearchLunarApsis = xc;
				e.NextLunarApsis = function(a) {
					var b = xc(a.time.AddDays(11));
					if (1 !== b.kind + a.kind) throw "NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=" + a.kind + " @ " + a.time.toString() + ", next=" + b.kind + " @ " + b.time.toString();
					return b;
				};
				e.SearchPlanetApsis = zc;
				e.NextPlanetApsis = function(a, b) {
					if (b.kind !== Ja.Pericenter && b.kind !== Ja.Apocenter) throw "Invalid apsis kind: " + b.kind;
					var c = b.time.AddDays(.25 * aa[a].OrbitalPeriod);
					a = zc(a, c);
					if (1 !== a.kind + b.kind) throw "Internal error: previous apsis was " + b.kind + ", but found " + a.kind + " for next apsis.";
					return a;
				};
				e.InverseRotation = Ka;
				e.CombineRotation = ja;
				e.IdentityMatrix = function() {
					return new J([
						[
							1,
							0,
							0
						],
						[
							0,
							1,
							0
						],
						[
							0,
							0,
							1
						]
					]);
				};
				e.Pivot = function(a, b, c) {
					if (0 !== b && 1 !== b && 2 !== b) throw "Invalid axis " + b + ". Must be [0, 1, 2].";
					var d = w(c) * e.DEG2RAD;
					c = Math.cos(d);
					d = Math.sin(d);
					var f = (b + 1) % 3, g = (b + 2) % 3, h = [
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						]
					];
					h[f][f] = c * a.rot[f][f] - d * a.rot[f][g];
					h[f][g] = d * a.rot[f][f] + c * a.rot[f][g];
					h[f][b] = a.rot[f][b];
					h[g][f] = c * a.rot[g][f] - d * a.rot[g][g];
					h[g][g] = d * a.rot[g][f] + c * a.rot[g][g];
					h[g][b] = a.rot[g][b];
					h[b][f] = c * a.rot[b][f] - d * a.rot[b][g];
					h[b][g] = d * a.rot[b][f] + c * a.rot[b][g];
					h[b][b] = a.rot[b][b];
					return new J(h);
				};
				e.VectorFromSphere = lb;
				e.EquatorFromVector = Mb;
				e.SphereFromVector = Nb;
				e.HorizonFromVector = function(a, b) {
					a = Nb(a);
					a.lon = Ac(a.lon);
					a.lat += Oa(b, a.lat);
					return a;
				};
				e.VectorFromHorizon = function(a, b, c) {
					b = v(b);
					var d = Ac(a.lon);
					c = a.lat + Bc(c, a.lat);
					a = new Ba(c, d, a.dist);
					return lb(a, b);
				};
				e.Refraction = Oa;
				e.InverseRefraction = Bc;
				e.RotateVector = Ya;
				e.RotateState = Ea;
				e.Rotation_EQJ_ECL = Cc;
				e.Rotation_ECL_EQJ = function() {
					return new J([
						[
							1,
							0,
							0
						],
						[
							0,
							.9174821430670688,
							.3977769691083922
						],
						[
							0,
							-.3977769691083922,
							.9174821430670688
						]
					]);
				};
				e.Rotation_EQJ_EQD = ob;
				e.Rotation_EQJ_ECT = function(a) {
					var b = v(a);
					a = ob(b);
					b = Jc(b);
					return ja(a, b);
				};
				e.Rotation_ECT_EQJ = function(a) {
					var b = v(a);
					a = Ic(b);
					b = pb(b);
					return ja(a, b);
				};
				e.Rotation_EQD_EQJ = pb;
				e.Rotation_EQD_HOR = Ob;
				e.Rotation_HOR_EQD = Dc;
				e.Rotation_HOR_EQJ = Ec;
				e.Rotation_EQJ_HOR = function(a, b) {
					a = Ec(a, b);
					return Ka(a);
				};
				e.Rotation_EQD_ECL = Fc;
				e.Rotation_ECL_EQD = Gc;
				e.Rotation_ECL_HOR = Hc;
				e.Rotation_HOR_ECL = function(a, b) {
					a = Hc(a, b);
					return Ka(a);
				};
				e.Rotation_EQJ_GAL = function() {
					return new J([
						[
							-.0548624779711344,
							.4941095946388765,
							-.8676668813529025
						],
						[
							-.8734572784246782,
							-.4447938112296831,
							-.1980677870294097
						],
						[
							-.483800052994852,
							.7470034631630423,
							.4559861124470794
						]
					]);
				};
				e.Rotation_GAL_EQJ = function() {
					return new J([
						[
							-.0548624779711344,
							-.8734572784246782,
							-.483800052994852
						],
						[
							.4941095946388765,
							-.4447938112296831,
							.7470034631630423
						],
						[
							-.8676668813529025,
							-.1980677870294097,
							.4559861124470794
						]
					]);
				};
				e.Rotation_ECT_EQD = Ic;
				e.Rotation_EQD_ECT = Jc;
				var Fd = [
					["And", "Andromeda"],
					["Ant", "Antila"],
					["Aps", "Apus"],
					["Aql", "Aquila"],
					["Aqr", "Aquarius"],
					["Ara", "Ara"],
					["Ari", "Aries"],
					["Aur", "Auriga"],
					["Boo", "Bootes"],
					["Cae", "Caelum"],
					["Cam", "Camelopardis"],
					["Cap", "Capricornus"],
					["Car", "Carina"],
					["Cas", "Cassiopeia"],
					["Cen", "Centaurus"],
					["Cep", "Cepheus"],
					["Cet", "Cetus"],
					["Cha", "Chamaeleon"],
					["Cir", "Circinus"],
					["CMa", "Canis Major"],
					["CMi", "Canis Minor"],
					["Cnc", "Cancer"],
					["Col", "Columba"],
					["Com", "Coma Berenices"],
					["CrA", "Corona Australis"],
					["CrB", "Corona Borealis"],
					["Crt", "Crater"],
					["Cru", "Crux"],
					["Crv", "Corvus"],
					["CVn", "Canes Venatici"],
					["Cyg", "Cygnus"],
					["Del", "Delphinus"],
					["Dor", "Dorado"],
					["Dra", "Draco"],
					["Equ", "Equuleus"],
					["Eri", "Eridanus"],
					["For", "Fornax"],
					["Gem", "Gemini"],
					["Gru", "Grus"],
					["Her", "Hercules"],
					["Hor", "Horologium"],
					["Hya", "Hydra"],
					["Hyi", "Hydrus"],
					["Ind", "Indus"],
					["Lac", "Lacerta"],
					["Leo", "Leo"],
					["Lep", "Lepus"],
					["Lib", "Libra"],
					["LMi", "Leo Minor"],
					["Lup", "Lupus"],
					["Lyn", "Lynx"],
					["Lyr", "Lyra"],
					["Men", "Mensa"],
					["Mic", "Microscopium"],
					["Mon", "Monoceros"],
					["Mus", "Musca"],
					["Nor", "Norma"],
					["Oct", "Octans"],
					["Oph", "Ophiuchus"],
					["Ori", "Orion"],
					["Pav", "Pavo"],
					["Peg", "Pegasus"],
					["Per", "Perseus"],
					["Phe", "Phoenix"],
					["Pic", "Pictor"],
					["PsA", "Pisces Austrinus"],
					["Psc", "Pisces"],
					["Pup", "Puppis"],
					["Pyx", "Pyxis"],
					["Ret", "Reticulum"],
					["Scl", "Sculptor"],
					["Sco", "Scorpius"],
					["Sct", "Scutum"],
					["Ser", "Serpens"],
					["Sex", "Sextans"],
					["Sge", "Sagitta"],
					["Sgr", "Sagittarius"],
					["Tau", "Taurus"],
					["Tel", "Telescopium"],
					["TrA", "Triangulum Australe"],
					["Tri", "Triangulum"],
					["Tuc", "Tucana"],
					["UMa", "Ursa Major"],
					["UMi", "Ursa Minor"],
					["Vel", "Vela"],
					["Vir", "Virgo"],
					["Vol", "Volans"],
					["Vul", "Vulpecula"]
				], Gd = [
					[
						83,
						0,
						8640,
						2112
					],
					[
						83,
						2880,
						5220,
						2076
					],
					[
						83,
						7560,
						8280,
						2068
					],
					[
						83,
						6480,
						7560,
						2064
					],
					[
						15,
						0,
						2880,
						2040
					],
					[
						10,
						3300,
						3840,
						1968
					],
					[
						15,
						0,
						1800,
						1920
					],
					[
						10,
						3840,
						5220,
						1920
					],
					[
						83,
						6300,
						6480,
						1920
					],
					[
						33,
						7260,
						7560,
						1920
					],
					[
						15,
						0,
						1263,
						1848
					],
					[
						10,
						4140,
						4890,
						1848
					],
					[
						83,
						5952,
						6300,
						1800
					],
					[
						15,
						7260,
						7440,
						1800
					],
					[
						10,
						2868,
						3300,
						1764
					],
					[
						33,
						3300,
						4080,
						1764
					],
					[
						83,
						4680,
						5952,
						1680
					],
					[
						13,
						1116,
						1230,
						1632
					],
					[
						33,
						7350,
						7440,
						1608
					],
					[
						33,
						4080,
						4320,
						1596
					],
					[
						15,
						0,
						120,
						1584
					],
					[
						83,
						5040,
						5640,
						1584
					],
					[
						15,
						8490,
						8640,
						1584
					],
					[
						33,
						4320,
						4860,
						1536
					],
					[
						33,
						4860,
						5190,
						1512
					],
					[
						15,
						8340,
						8490,
						1512
					],
					[
						10,
						2196,
						2520,
						1488
					],
					[
						33,
						7200,
						7350,
						1476
					],
					[
						15,
						7393.2,
						7416,
						1462
					],
					[
						10,
						2520,
						2868,
						1440
					],
					[
						82,
						2868,
						3030,
						1440
					],
					[
						33,
						7116,
						7200,
						1428
					],
					[
						15,
						7200,
						7393.2,
						1428
					],
					[
						15,
						8232,
						8340,
						1418
					],
					[
						13,
						0,
						876,
						1404
					],
					[
						33,
						6990,
						7116,
						1392
					],
					[
						13,
						612,
						687,
						1380
					],
					[
						13,
						876,
						1116,
						1368
					],
					[
						10,
						1116,
						1140,
						1368
					],
					[
						15,
						8034,
						8232,
						1350
					],
					[
						10,
						1800,
						2196,
						1344
					],
					[
						82,
						5052,
						5190,
						1332
					],
					[
						33,
						5190,
						6990,
						1332
					],
					[
						10,
						1140,
						1200,
						1320
					],
					[
						15,
						7968,
						8034,
						1320
					],
					[
						15,
						7416,
						7908,
						1316
					],
					[
						13,
						0,
						612,
						1296
					],
					[
						50,
						2196,
						2340,
						1296
					],
					[
						82,
						4350,
						4860,
						1272
					],
					[
						33,
						5490,
						5670,
						1272
					],
					[
						15,
						7908,
						7968,
						1266
					],
					[
						10,
						1200,
						1800,
						1260
					],
					[
						13,
						8232,
						8400,
						1260
					],
					[
						33,
						5670,
						6120,
						1236
					],
					[
						62,
						735,
						906,
						1212
					],
					[
						33,
						6120,
						6564,
						1212
					],
					[
						13,
						0,
						492,
						1200
					],
					[
						62,
						492,
						600,
						1200
					],
					[
						50,
						2340,
						2448,
						1200
					],
					[
						13,
						8400,
						8640,
						1200
					],
					[
						82,
						4860,
						5052,
						1164
					],
					[
						13,
						0,
						402,
						1152
					],
					[
						13,
						8490,
						8640,
						1152
					],
					[
						39,
						6543,
						6564,
						1140
					],
					[
						33,
						6564,
						6870,
						1140
					],
					[
						30,
						6870,
						6900,
						1140
					],
					[
						62,
						600,
						735,
						1128
					],
					[
						82,
						3030,
						3300,
						1128
					],
					[
						13,
						60,
						312,
						1104
					],
					[
						82,
						4320,
						4350,
						1080
					],
					[
						50,
						2448,
						2652,
						1068
					],
					[
						30,
						7887,
						7908,
						1056
					],
					[
						30,
						7875,
						7887,
						1050
					],
					[
						30,
						6900,
						6984,
						1044
					],
					[
						82,
						3300,
						3660,
						1008
					],
					[
						82,
						3660,
						3882,
						960
					],
					[
						8,
						5556,
						5670,
						960
					],
					[
						39,
						5670,
						5880,
						960
					],
					[
						50,
						3330,
						3450,
						954
					],
					[
						0,
						0,
						906,
						882
					],
					[
						62,
						906,
						924,
						882
					],
					[
						51,
						6969,
						6984,
						876
					],
					[
						62,
						1620,
						1689,
						864
					],
					[
						30,
						7824,
						7875,
						864
					],
					[
						44,
						7875,
						7920,
						864
					],
					[
						7,
						2352,
						2652,
						852
					],
					[
						50,
						2652,
						2790,
						852
					],
					[
						0,
						0,
						720,
						840
					],
					[
						44,
						7920,
						8214,
						840
					],
					[
						44,
						8214,
						8232,
						828
					],
					[
						0,
						8232,
						8460,
						828
					],
					[
						62,
						924,
						978,
						816
					],
					[
						82,
						3882,
						3960,
						816
					],
					[
						29,
						4320,
						4440,
						816
					],
					[
						50,
						2790,
						3330,
						804
					],
					[
						48,
						3330,
						3558,
						804
					],
					[
						0,
						258,
						507,
						792
					],
					[
						8,
						5466,
						5556,
						792
					],
					[
						0,
						8460,
						8550,
						770
					],
					[
						29,
						4440,
						4770,
						768
					],
					[
						0,
						8550,
						8640,
						752
					],
					[
						29,
						5025,
						5052,
						738
					],
					[
						80,
						870,
						978,
						736
					],
					[
						62,
						978,
						1620,
						736
					],
					[
						7,
						1620,
						1710,
						720
					],
					[
						51,
						6543,
						6969,
						720
					],
					[
						82,
						3960,
						4320,
						696
					],
					[
						30,
						7080,
						7530,
						696
					],
					[
						7,
						1710,
						2118,
						684
					],
					[
						48,
						3558,
						3780,
						684
					],
					[
						29,
						4770,
						5025,
						684
					],
					[
						0,
						0,
						24,
						672
					],
					[
						80,
						507,
						600,
						672
					],
					[
						7,
						2118,
						2352,
						672
					],
					[
						37,
						2838,
						2880,
						672
					],
					[
						30,
						7530,
						7824,
						672
					],
					[
						30,
						6933,
						7080,
						660
					],
					[
						80,
						690,
						870,
						654
					],
					[
						25,
						5820,
						5880,
						648
					],
					[
						8,
						5430,
						5466,
						624
					],
					[
						25,
						5466,
						5820,
						624
					],
					[
						51,
						6612,
						6792,
						624
					],
					[
						48,
						3870,
						3960,
						612
					],
					[
						51,
						6792,
						6933,
						612
					],
					[
						80,
						600,
						690,
						600
					],
					[
						66,
						258,
						306,
						570
					],
					[
						48,
						3780,
						3870,
						564
					],
					[
						87,
						7650,
						7710,
						564
					],
					[
						77,
						2052,
						2118,
						548
					],
					[
						0,
						24,
						51,
						528
					],
					[
						73,
						5730,
						5772,
						528
					],
					[
						37,
						2118,
						2238,
						516
					],
					[
						87,
						7140,
						7290,
						510
					],
					[
						87,
						6792,
						6930,
						506
					],
					[
						0,
						51,
						306,
						504
					],
					[
						87,
						7290,
						7404,
						492
					],
					[
						37,
						2811,
						2838,
						480
					],
					[
						87,
						7404,
						7650,
						468
					],
					[
						87,
						6930,
						7140,
						460
					],
					[
						6,
						1182,
						1212,
						456
					],
					[
						75,
						6792,
						6840,
						444
					],
					[
						59,
						2052,
						2076,
						432
					],
					[
						37,
						2238,
						2271,
						420
					],
					[
						75,
						6840,
						7140,
						388
					],
					[
						77,
						1788,
						1920,
						384
					],
					[
						39,
						5730,
						5790,
						384
					],
					[
						75,
						7140,
						7290,
						378
					],
					[
						77,
						1662,
						1788,
						372
					],
					[
						77,
						1920,
						2016,
						372
					],
					[
						23,
						4620,
						4860,
						360
					],
					[
						39,
						6210,
						6570,
						344
					],
					[
						23,
						4272,
						4620,
						336
					],
					[
						37,
						2700,
						2811,
						324
					],
					[
						39,
						6030,
						6210,
						308
					],
					[
						61,
						0,
						51,
						300
					],
					[
						77,
						2016,
						2076,
						300
					],
					[
						37,
						2520,
						2700,
						300
					],
					[
						61,
						7602,
						7680,
						300
					],
					[
						37,
						2271,
						2496,
						288
					],
					[
						39,
						6570,
						6792,
						288
					],
					[
						31,
						7515,
						7578,
						284
					],
					[
						61,
						7578,
						7602,
						284
					],
					[
						45,
						4146,
						4272,
						264
					],
					[
						59,
						2247,
						2271,
						240
					],
					[
						37,
						2496,
						2520,
						240
					],
					[
						21,
						2811,
						2853,
						240
					],
					[
						61,
						8580,
						8640,
						240
					],
					[
						6,
						600,
						1182,
						238
					],
					[
						31,
						7251,
						7308,
						204
					],
					[
						8,
						4860,
						5430,
						192
					],
					[
						61,
						8190,
						8580,
						180
					],
					[
						21,
						2853,
						3330,
						168
					],
					[
						45,
						3330,
						3870,
						168
					],
					[
						58,
						6570,
						6718.4,
						150
					],
					[
						3,
						6718.4,
						6792,
						150
					],
					[
						31,
						7500,
						7515,
						144
					],
					[
						20,
						2520,
						2526,
						132
					],
					[
						73,
						6570,
						6633,
						108
					],
					[
						39,
						5790,
						6030,
						96
					],
					[
						58,
						6570,
						6633,
						72
					],
					[
						61,
						7728,
						7800,
						66
					],
					[
						66,
						0,
						720,
						48
					],
					[
						73,
						6690,
						6792,
						48
					],
					[
						31,
						7308,
						7500,
						48
					],
					[
						34,
						7500,
						7680,
						48
					],
					[
						61,
						7680,
						7728,
						48
					],
					[
						61,
						7920,
						8190,
						48
					],
					[
						61,
						7800,
						7920,
						42
					],
					[
						20,
						2526,
						2592,
						36
					],
					[
						77,
						1290,
						1662,
						0
					],
					[
						59,
						1662,
						1680,
						0
					],
					[
						20,
						2592,
						2910,
						0
					],
					[
						85,
						5280,
						5430,
						0
					],
					[
						58,
						6420,
						6570,
						0
					],
					[
						16,
						954,
						1182,
						-42
					],
					[
						77,
						1182,
						1290,
						-42
					],
					[
						73,
						5430,
						5856,
						-78
					],
					[
						59,
						1680,
						1830,
						-96
					],
					[
						59,
						2100,
						2247,
						-96
					],
					[
						73,
						6420,
						6468,
						-96
					],
					[
						73,
						6570,
						6690,
						-96
					],
					[
						3,
						6690,
						6792,
						-96
					],
					[
						66,
						8190,
						8580,
						-96
					],
					[
						45,
						3870,
						4146,
						-144
					],
					[
						85,
						4146,
						4260,
						-144
					],
					[
						66,
						0,
						120,
						-168
					],
					[
						66,
						8580,
						8640,
						-168
					],
					[
						85,
						5130,
						5280,
						-192
					],
					[
						58,
						5730,
						5856,
						-192
					],
					[
						3,
						7200,
						7392,
						-216
					],
					[
						4,
						7680,
						7872,
						-216
					],
					[
						58,
						6180,
						6468,
						-240
					],
					[
						54,
						2100,
						2910,
						-264
					],
					[
						35,
						1770,
						1830,
						-264
					],
					[
						59,
						1830,
						2100,
						-264
					],
					[
						41,
						2910,
						3012,
						-264
					],
					[
						74,
						3450,
						3870,
						-264
					],
					[
						85,
						4260,
						4620,
						-264
					],
					[
						58,
						6330,
						6360,
						-280
					],
					[
						3,
						6792,
						7200,
						-288.8
					],
					[
						35,
						1740,
						1770,
						-348
					],
					[
						4,
						7392,
						7680,
						-360
					],
					[
						73,
						6180,
						6570,
						-384
					],
					[
						72,
						6570,
						6792,
						-384
					],
					[
						41,
						3012,
						3090,
						-408
					],
					[
						58,
						5856,
						5895,
						-438
					],
					[
						41,
						3090,
						3270,
						-456
					],
					[
						26,
						3870,
						3900,
						-456
					],
					[
						71,
						5856,
						5895,
						-462
					],
					[
						47,
						5640,
						5730,
						-480
					],
					[
						28,
						4530,
						4620,
						-528
					],
					[
						85,
						4620,
						5130,
						-528
					],
					[
						41,
						3270,
						3510,
						-576
					],
					[
						16,
						600,
						954,
						-585.2
					],
					[
						35,
						954,
						1350,
						-585.2
					],
					[
						26,
						3900,
						4260,
						-588
					],
					[
						28,
						4260,
						4530,
						-588
					],
					[
						47,
						5130,
						5370,
						-588
					],
					[
						58,
						5856,
						6030,
						-590
					],
					[
						16,
						0,
						600,
						-612
					],
					[
						11,
						7680,
						7872,
						-612
					],
					[
						4,
						7872,
						8580,
						-612
					],
					[
						16,
						8580,
						8640,
						-612
					],
					[
						41,
						3510,
						3690,
						-636
					],
					[
						35,
						1692,
						1740,
						-654
					],
					[
						46,
						1740,
						2202,
						-654
					],
					[
						11,
						7200,
						7680,
						-672
					],
					[
						41,
						3690,
						3810,
						-700
					],
					[
						41,
						4530,
						5370,
						-708
					],
					[
						47,
						5370,
						5640,
						-708
					],
					[
						71,
						5640,
						5760,
						-708
					],
					[
						35,
						1650,
						1692,
						-720
					],
					[
						58,
						6030,
						6336,
						-720
					],
					[
						76,
						6336,
						6420,
						-720
					],
					[
						41,
						3810,
						3900,
						-748
					],
					[
						19,
						2202,
						2652,
						-792
					],
					[
						41,
						4410,
						4530,
						-792
					],
					[
						41,
						3900,
						4410,
						-840
					],
					[
						36,
						1260,
						1350,
						-864
					],
					[
						68,
						3012,
						3372,
						-882
					],
					[
						35,
						1536,
						1650,
						-888
					],
					[
						76,
						6420,
						6900,
						-888
					],
					[
						65,
						7680,
						8280,
						-888
					],
					[
						70,
						8280,
						8400,
						-888
					],
					[
						36,
						1080,
						1260,
						-950
					],
					[
						1,
						3372,
						3960,
						-954
					],
					[
						70,
						0,
						600,
						-960
					],
					[
						36,
						600,
						1080,
						-960
					],
					[
						35,
						1392,
						1536,
						-960
					],
					[
						70,
						8400,
						8640,
						-960
					],
					[
						14,
						5100,
						5370,
						-1008
					],
					[
						49,
						5640,
						5760,
						-1008
					],
					[
						71,
						5760,
						5911.5,
						-1008
					],
					[
						9,
						1740,
						1800,
						-1032
					],
					[
						22,
						1800,
						2370,
						-1032
					],
					[
						67,
						2880,
						3012,
						-1032
					],
					[
						35,
						1230,
						1392,
						-1056
					],
					[
						71,
						5911.5,
						6420,
						-1092
					],
					[
						24,
						6420,
						6900,
						-1092
					],
					[
						76,
						6900,
						7320,
						-1092
					],
					[
						53,
						7320,
						7680,
						-1092
					],
					[
						35,
						1080,
						1230,
						-1104
					],
					[
						9,
						1620,
						1740,
						-1116
					],
					[
						49,
						5520,
						5640,
						-1152
					],
					[
						63,
						0,
						840,
						-1156
					],
					[
						35,
						960,
						1080,
						-1176
					],
					[
						40,
						1470,
						1536,
						-1176
					],
					[
						9,
						1536,
						1620,
						-1176
					],
					[
						38,
						7680,
						7920,
						-1200
					],
					[
						67,
						2160,
						2880,
						-1218
					],
					[
						84,
						2880,
						2940,
						-1218
					],
					[
						35,
						870,
						960,
						-1224
					],
					[
						40,
						1380,
						1470,
						-1224
					],
					[
						63,
						0,
						660,
						-1236
					],
					[
						12,
						2160,
						2220,
						-1260
					],
					[
						84,
						2940,
						3042,
						-1272
					],
					[
						40,
						1260,
						1380,
						-1276
					],
					[
						32,
						1380,
						1440,
						-1276
					],
					[
						63,
						0,
						570,
						-1284
					],
					[
						35,
						780,
						870,
						-1296
					],
					[
						64,
						1620,
						1800,
						-1296
					],
					[
						49,
						5418,
						5520,
						-1296
					],
					[
						84,
						3042,
						3180,
						-1308
					],
					[
						12,
						2220,
						2340,
						-1320
					],
					[
						14,
						4260,
						4620,
						-1320
					],
					[
						49,
						5100,
						5418,
						-1320
					],
					[
						56,
						5418,
						5520,
						-1320
					],
					[
						32,
						1440,
						1560,
						-1356
					],
					[
						84,
						3180,
						3960,
						-1356
					],
					[
						14,
						3960,
						4050,
						-1356
					],
					[
						5,
						6300,
						6480,
						-1368
					],
					[
						78,
						6480,
						7320,
						-1368
					],
					[
						38,
						7920,
						8400,
						-1368
					],
					[
						40,
						1152,
						1260,
						-1380
					],
					[
						64,
						1800,
						1980,
						-1380
					],
					[
						12,
						2340,
						2460,
						-1392
					],
					[
						63,
						0,
						480,
						-1404
					],
					[
						35,
						480,
						780,
						-1404
					],
					[
						63,
						8400,
						8640,
						-1404
					],
					[
						32,
						1560,
						1650,
						-1416
					],
					[
						56,
						5520,
						5911.5,
						-1440
					],
					[
						43,
						7320,
						7680,
						-1440
					],
					[
						64,
						1980,
						2160,
						-1464
					],
					[
						18,
						5460,
						5520,
						-1464
					],
					[
						5,
						5911.5,
						5970,
						-1464
					],
					[
						18,
						5370,
						5460,
						-1526
					],
					[
						5,
						5970,
						6030,
						-1526
					],
					[
						64,
						2160,
						2460,
						-1536
					],
					[
						12,
						2460,
						3252,
						-1536
					],
					[
						14,
						4050,
						4260,
						-1536
					],
					[
						27,
						4260,
						4620,
						-1536
					],
					[
						14,
						4620,
						5232,
						-1536
					],
					[
						18,
						4860,
						4920,
						-1560
					],
					[
						5,
						6030,
						6060,
						-1560
					],
					[
						40,
						780,
						1152,
						-1620
					],
					[
						69,
						1152,
						1650,
						-1620
					],
					[
						18,
						5310,
						5370,
						-1620
					],
					[
						5,
						6060,
						6300,
						-1620
					],
					[
						60,
						6300,
						6480,
						-1620
					],
					[
						81,
						7920,
						8400,
						-1620
					],
					[
						32,
						1650,
						2370,
						-1680
					],
					[
						18,
						4920,
						5310,
						-1680
					],
					[
						79,
						5310,
						6120,
						-1680
					],
					[
						81,
						0,
						480,
						-1800
					],
					[
						42,
						1260,
						1650,
						-1800
					],
					[
						86,
						2370,
						3252,
						-1800
					],
					[
						12,
						3252,
						4050,
						-1800
					],
					[
						55,
						4050,
						4920,
						-1800
					],
					[
						60,
						6480,
						7680,
						-1800
					],
					[
						43,
						7680,
						8400,
						-1800
					],
					[
						81,
						8400,
						8640,
						-1800
					],
					[
						81,
						270,
						480,
						-1824
					],
					[
						42,
						0,
						1260,
						-1980
					],
					[
						17,
						2760,
						4920,
						-1980
					],
					[
						2,
						4920,
						6480,
						-1980
					],
					[
						52,
						1260,
						2760,
						-2040
					],
					[
						57,
						0,
						8640,
						-2160
					]
				], Tb, id, jd = function(a, b, c, d) {
					this.symbol = a;
					this.name = b;
					this.ra1875 = c;
					this.dec1875 = d;
				};
				e.ConstellationInfo = jd;
				e.Constellation = function(a, b) {
					w(a);
					w(b);
					if (-90 > b || 90 < b) throw "Invalid declination angle. Must be -90..+90.";
					a %= 24;
					0 > a && (a += 24);
					Tb || (Tb = ob(new O(-45655.74141261017)), id = new O(0));
					a = new Ba(b, 15 * a, 1);
					a = lb(a, id);
					a = Ya(Tb, a);
					a = Mb(a);
					b = 10 / 240;
					for (var c = b / 15, d = $jscomp.makeIterator(Gd), f = d.next(); !f.done; f = d.next()) {
						f = f.value;
						var g = f[1] * c, h = f[2] * c;
						if (f[3] * b <= a.dec && g <= a.ra && a.ra < h) return b = Fd[f[0]], new jd(b[0], b[1], a.ra, a.dec);
					}
					throw "Unable to find constellation for given coordinates.";
				};
				var S;
				(function(a) {
					a.Penumbral = "penumbral";
					a.Partial = "partial";
					a.Annular = "annular";
					a.Total = "total";
				})(S = e.EclipseKind || (e.EclipseKind = {}));
				var Pc = function(a, b, c, d, f, g) {
					this.kind = a;
					this.obscuration = b;
					this.peak = c;
					this.sd_penum = d;
					this.sd_partial = f;
					this.sd_total = g;
				};
				e.LunarEclipseInfo = Pc;
				var xd = function(a, b, c, d, f, g, h) {
					this.time = a;
					this.u = b;
					this.r = c;
					this.k = d;
					this.p = f;
					this.target = g;
					this.dir = h;
				};
				e.SearchLunarEclipse = Oc;
				var Rc = function(a, b, c, d, f, g) {
					this.kind = a;
					this.obscuration = b;
					this.peak = c;
					this.distance = d;
					this.latitude = f;
					this.longitude = g;
				};
				e.GlobalSolarEclipseInfo = Rc;
				e.NextLunarEclipse = function(a) {
					a = v(a);
					a = a.AddDays(10);
					return Oc(a);
				};
				e.SearchGlobalSolarEclipse = Qc;
				e.NextGlobalSolarEclipse = function(a) {
					a = v(a);
					a = a.AddDays(10);
					return Qc(a);
				};
				var Vc = function(a, b) {
					this.time = a;
					this.altitude = b;
				};
				e.EclipseEvent = Vc;
				var Xc = function(a, b, c, d, f, g, h) {
					this.kind = a;
					this.obscuration = b;
					this.partial_begin = c;
					this.total_begin = d;
					this.peak = f;
					this.total_end = g;
					this.partial_end = h;
				};
				e.LocalSolarEclipseInfo = Xc;
				e.SearchLocalSolarEclipse = Wc;
				e.NextLocalSolarEclipse = function(a, b) {
					a = v(a);
					a = a.AddDays(10);
					return Wc(a, b);
				};
				var $c = function(a, b, c, d) {
					this.start = a;
					this.peak = b;
					this.finish = c;
					this.separation = d;
				};
				e.TransitInfo = $c;
				e.SearchTransit = Zc;
				e.NextTransit = function(a, b) {
					b = v(b);
					b = b.AddDays(100);
					return Zc(a, b);
				};
				var ra;
				(function(a) {
					a[a.Invalid = 0] = "Invalid";
					a[a.Ascending = 1] = "Ascending";
					a[a.Descending = -1] = "Descending";
				})(ra = e.NodeEventKind || (e.NodeEventKind = {}));
				var bd = function(a, b) {
					this.kind = a;
					this.time = b;
				};
				e.NodeEventInfo = bd;
				e.SearchMoonNode = ad;
				e.NextMoonNode = function(a) {
					var b = a.time.AddDays(10);
					b = ad(b);
					switch (a.kind) {
						case ra.Ascending:
							if (b.kind !== ra.Descending) throw "Internal error: previous node was ascending, but this node was: " + b.kind;
							break;
						case ra.Descending:
							if (b.kind !== ra.Ascending) throw "Internal error: previous node was descending, but this node was: " + b.kind;
							break;
						default: throw "Previous node has an invalid node kind: " + a.kind;
					}
					return b;
				};
				var Ub = function(a, b, c, d) {
					this.ra = a;
					this.dec = b;
					this.spin = c;
					this.north = d;
				};
				e.AxisInfo = Ub;
				e.RotationAxis = function(a, b) {
					b = v(b);
					var c = b.tt, d = c / 36525;
					switch (a) {
						case m.Sun:
							a = 286.13;
							var f = 63.87;
							c = 84.176 + 14.1844 * c;
							break;
						case m.Mercury:
							a = 281.0103 - .0328 * d;
							f = 61.4155 - .0049 * d;
							c = 329.5988 + 6.1385108 * c + .01067257 * Math.sin(e.DEG2RAD * (174.7910857 + 4.092335 * c)) - .00112309 * Math.sin(e.DEG2RAD * (349.5821714 + 8.18467 * c)) - 1104e-7 * Math.sin(e.DEG2RAD * (164.3732571 + 12.277005 * c)) - 2539e-8 * Math.sin(e.DEG2RAD * (339.1643429 + 16.36934 * c)) - 571e-8 * Math.sin(e.DEG2RAD * (153.9554286 + 20.461675 * c));
							break;
						case m.Venus:
							a = 272.76;
							f = 67.16;
							c = 160.2 - 1.4813688 * c;
							break;
						case m.Earth: return a = xa([
							0,
							0,
							1
						], b, F.Into2000), a = wa(a, b, F.Into2000), a = new E(a[0], a[1], a[2], b), c = Mb(a), new Ub(c.ra, c.dec, 190.41375788700253 + 360.9856122880876 * b.ut, a);
						case m.Moon:
							var g = e.DEG2RAD * (125.045 - .0529921 * c), h = e.DEG2RAD * (250.089 - .1059842 * c), l = e.DEG2RAD * (260.008 + 13.0120009 * c), k = e.DEG2RAD * (176.625 + 13.3407154 * c), n = e.DEG2RAD * (357.529 + .9856003 * c), p = e.DEG2RAD * (311.589 + 26.4057084 * c), q = e.DEG2RAD * (134.963 + 13.064993 * c), t = e.DEG2RAD * (276.617 + .3287146 * c), y = e.DEG2RAD * (34.226 + 1.7484877 * c), x = e.DEG2RAD * (15.134 - .1589763 * c), z = e.DEG2RAD * (119.743 + .0036096 * c), ab = e.DEG2RAD * (239.961 + .1643573 * c), va = e.DEG2RAD * (25.053 + 12.9590088 * c);
							a = 269.9949 + .0031 * d - 3.8787 * Math.sin(g) - .1204 * Math.sin(h) + .07 * Math.sin(l) - .0172 * Math.sin(k) + .0072 * Math.sin(p) - .0052 * Math.sin(x) + .0043 * Math.sin(va);
							f = 66.5392 + .013 * d + 1.5419 * Math.cos(g) + .0239 * Math.cos(h) - .0278 * Math.cos(l) + .0068 * Math.cos(k) - .0029 * Math.cos(p) + 9e-4 * Math.cos(q) + 8e-4 * Math.cos(x) - 9e-4 * Math.cos(va);
							c = 38.3213 + (13.17635815 - 14e-13 * c) * c + 3.561 * Math.sin(g) + .1208 * Math.sin(h) - .0642 * Math.sin(l) + .0158 * Math.sin(k) + .0252 * Math.sin(n) - .0066 * Math.sin(p) - .0047 * Math.sin(q) - .0046 * Math.sin(t) + .0028 * Math.sin(y) + .0052 * Math.sin(x) + .004 * Math.sin(z) + .0019 * Math.sin(ab) - .0044 * Math.sin(va);
							break;
						case m.Mars:
							a = 317.269202 - .10927547 * d + 68e-6 * Math.sin(e.DEG2RAD * (198.991226 + 19139.4819985 * d)) + 238e-6 * Math.sin(e.DEG2RAD * (226.292679 + 38280.8511281 * d)) + 52e-6 * Math.sin(e.DEG2RAD * (249.663391 + 57420.7251593 * d)) + 9e-6 * Math.sin(e.DEG2RAD * (266.18351 + 76560.636795 * d)) + .419057 * Math.sin(e.DEG2RAD * (79.398797 + .5042615 * d));
							f = 54.432516 - .05827105 * d + 51e-6 * Math.cos(e.DEG2RAD * (122.433576 + 19139.9407476 * d)) + 141e-6 * Math.cos(e.DEG2RAD * (43.058401 + 38280.8753272 * d)) + 31e-6 * Math.cos(e.DEG2RAD * (57.663379 + 57420.7517205 * d)) + 5e-6 * Math.cos(e.DEG2RAD * (79.476401 + 76560.6495004 * d)) + 1.591274 * Math.cos(e.DEG2RAD * (166.325722 + .5042615 * d));
							c = 176.049863 + 350.891982443297 * c + 145e-6 * Math.sin(e.DEG2RAD * (129.071773 + 19140.0328244 * d)) + 157e-6 * Math.sin(e.DEG2RAD * (36.352167 + 38281.0473591 * d)) + 4e-5 * Math.sin(e.DEG2RAD * (56.668646 + 57420.929536 * d)) + 1e-6 * Math.sin(e.DEG2RAD * (67.364003 + 76560.2552215 * d)) + 1e-6 * Math.sin(e.DEG2RAD * (104.79268 + 95700.4387578 * d)) + .584542 * Math.sin(e.DEG2RAD * (95.391654 + .5042615 * d));
							break;
						case m.Jupiter:
							f = e.DEG2RAD * (99.360714 + 4850.4046 * d);
							g = e.DEG2RAD * (175.895369 + 1191.9605 * d);
							h = e.DEG2RAD * (300.323162 + 262.5475 * d);
							l = e.DEG2RAD * (114.012305 + 6070.2476 * d);
							k = e.DEG2RAD * (49.511251 + 64.3 * d);
							a = 268.056595 - .006499 * d + 117e-6 * Math.sin(f) + 938e-6 * Math.sin(g) + .001432 * Math.sin(h) + 3e-5 * Math.sin(l) + .00215 * Math.sin(k);
							f = 64.495303 + .002413 * d + 5e-5 * Math.cos(f) + 404e-6 * Math.cos(g) + 617e-6 * Math.cos(h) - 13e-6 * Math.cos(l) + 926e-6 * Math.cos(k);
							c = 284.95 + 870.536 * c;
							break;
						case m.Saturn:
							a = 40.589 - .036 * d;
							f = 83.537 - .004 * d;
							c = 38.9 + 810.7939024 * c;
							break;
						case m.Uranus:
							a = 257.311;
							f = -15.175;
							c = 203.81 - 501.1600928 * c;
							break;
						case m.Neptune:
							d = e.DEG2RAD * (357.85 + 52.316 * d);
							a = 299.36 + .7 * Math.sin(d);
							f = 43.46 - .51 * Math.cos(d);
							c = 249.978 + 541.1397757 * c - .48 * Math.sin(d);
							break;
						case m.Pluto:
							a = 132.993;
							f = -6.163;
							c = 302.695 + 56.3625225 * c;
							break;
						default: throw "Invalid body: " + a;
					}
					d = f * e.DEG2RAD;
					g = a * e.DEG2RAD;
					h = Math.cos(d);
					b = new E(h * Math.cos(g), h * Math.sin(g), Math.sin(d), b);
					return new Ub(a / 15, f, c, b);
				};
				e.LagrangePoint = function(a, b, c, d) {
					var f = v(b);
					b = C(c);
					var g = C(d);
					c === m.Earth && d === m.Moon ? (c = new I(0, 0, 0, 0, 0, 0, f), d = Ra(f)) : (c = mb(c, f), d = mb(d, f));
					return cd(a, c, b, d, g);
				};
				e.LagrangePointFast = cd;
				var H = function(a, b, c) {
					b = v(b);
					this.originBody = a;
					for (var d = $jscomp.makeIterator(c), f = d.next(); !f.done; f = d.next()) if (f.value.t.tt !== b.tt) throw "Inconsistent times in bodyStates";
					d = [];
					f = H.CalcSolarSystem(b);
					this.curr = new kd(b, f, d);
					a = this.InternalBodyState(a);
					c = $jscomp.makeIterator(c);
					for (f = c.next(); !f.done; f = c.next()) {
						var g = f.value;
						f = new B(g.x + a.r.x, g.y + a.r.y, g.z + a.r.z);
						g = new B(g.vx + a.v.x, g.vy + a.v.y, g.vz + a.v.z);
						var h = B.zero();
						d.push(new Ua(b.tt, f, g, h));
					}
					this.CalcBodyAccelerations();
					this.prev = this.Duplicate();
				};
				H.prototype.Update = function(a) {
					a = v(a);
					var b = a.tt - this.curr.time.tt;
					if (0 === b) this.prev = this.Duplicate();
					else {
						this.Swap();
						this.curr.time = a;
						this.curr.gravitators = H.CalcSolarSystem(a);
						for (var c = 0; c < this.curr.bodies.length; ++c) {
							var d = this.prev.bodies[c];
							this.curr.bodies[c].r = Ca(b, d.r, d.v, d.a);
						}
						this.CalcBodyAccelerations();
						for (c = 0; c < this.curr.bodies.length; ++c) {
							d = this.prev.bodies[c];
							var f = this.curr.bodies[c], g = d.a.mean(f.a);
							f.tt = a.tt;
							f.r = Ca(b, d.r, d.v, g);
							f.v = Eb(b, d.v, g);
						}
						this.CalcBodyAccelerations();
					}
					b = [];
					c = this.InternalBodyState(this.originBody);
					d = $jscomp.makeIterator(this.curr.bodies);
					for (f = d.next(); !f.done; f = d.next()) f = f.value, b.push(new I(f.r.x - c.r.x, f.r.y - c.r.y, f.r.z - c.r.z, f.v.x - c.v.x, f.v.y - c.v.y, f.v.z - c.v.z, a));
					return b;
				};
				H.prototype.Swap = function() {
					var a = this.curr;
					this.curr = this.prev;
					this.prev = a;
				};
				H.prototype.SolarSystemBodyState = function(a) {
					a = this.InternalBodyState(a);
					var b = this.InternalBodyState(this.originBody);
					return pa(a.sub(b), this.curr.time);
				};
				H.prototype.InternalBodyState = function(a) {
					if (a === m.SSB) return new X(this.curr.time.tt, B.zero(), B.zero());
					var b = this.curr.gravitators[a];
					if (b) return b;
					throw "Invalid body: " + a;
				};
				H.CalcSolarSystem = function(a) {
					var b = {}, c = new X(a.tt, B.zero(), B.zero());
					b[m.Mercury] = R(c, a.tt, m.Mercury, 4912547451450812e-26);
					b[m.Venus] = R(c, a.tt, m.Venus, 7243452486162703e-25);
					b[m.Earth] = R(c, a.tt, m.Earth, 8997011346712498e-25);
					b[m.Mars] = R(c, a.tt, m.Mars, 9549535105779258e-26);
					b[m.Jupiter] = R(c, a.tt, m.Jupiter, 2.825345909524226e-7);
					b[m.Saturn] = R(c, a.tt, m.Saturn, 8.459715185680659e-8);
					b[m.Uranus] = R(c, a.tt, m.Uranus, 1.292024916781969e-8);
					b[m.Neptune] = R(c, a.tt, m.Neptune, 1.524358900784276e-8);
					for (var d in b) b[d].r.decr(c.r), b[d].v.decr(c.v);
					b[m.Sun] = new X(a.tt, c.r.neg(), c.v.neg());
					return b;
				};
				H.prototype.CalcBodyAccelerations = function() {
					for (var a = $jscomp.makeIterator(this.curr.bodies), b = a.next(); !b.done; b = a.next()) b = b.value, b.a = B.zero(), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Sun].r, .0002959122082855911), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Mercury].r, 4912547451450812e-26), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Venus].r, 7243452486162703e-25), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Earth].r, 8997011346712498e-25), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Mars].r, 9549535105779258e-26), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Jupiter].r, 2.825345909524226e-7), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Saturn].r, 8.459715185680659e-8), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Uranus].r, 1.292024916781969e-8), H.AddAcceleration(b.a, b.r, this.curr.gravitators[m.Neptune].r, 1.524358900784276e-8);
				};
				H.AddAcceleration = function(a, b, c, d) {
					var f = c.x - b.x, g = c.y - b.y;
					b = c.z - b.z;
					c = f * f + g * g + b * b;
					d /= c * Math.sqrt(c);
					a.x += f * d;
					a.y += g * d;
					a.z += b * d;
				};
				H.prototype.Duplicate = function() {
					var a = {};
					for (b in this.curr.gravitators) a[b] = this.curr.gravitators[b].clone();
					var b = [];
					for (var c = $jscomp.makeIterator(this.curr.bodies), d = c.next(); !d.done; d = c.next()) b.push(d.value.clone());
					return new kd(this.curr.time, a, b);
				};
				$jscomp.global.Object.defineProperties(H.prototype, {
					OriginBody: {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return this.originBody;
						}
					},
					Time: {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return this.curr.time;
						}
					}
				});
				e.GravitySimulator = H;
				var kd = function(a, b, c) {
					this.time = a;
					this.gravitators = b;
					this.bodies = c;
				};
			}, {}] }, {}, [1])(1);
		});
		window.AbuData = cities_default;
	}
	initializeChartData();
})();
