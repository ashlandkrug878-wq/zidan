
/* ============ v3.0 啾啾岛：插画（缩到显示尺寸的两倍，WebP 内嵌，离线可用） ============ */
const JJ = {
  nest:'assets/ui/b46d166960867a68.webp',
  check:'assets/ui/c115b4c108022fc5.webp',
  nap:'assets/ui/0425f92bd80dd461.webp',
  ask:'assets/ui/9878e4dd4bae6863.webp',
  night:'assets/ui/ce1ecaa64d1fdeab.webp',
  happy:'assets/ui/c84b6c8eec8cc2c3.webp',
  lock:'assets/ui/e4c23f6d26406601.webp',
  sort:'assets/ui/fe1b8c8e416d7a82.webp',
  oops:'assets/ui/6ff446542b79fe71.webp',
  h_food:'assets/ui/823f54907366aa0a.webp',
  h_movie:'assets/ui/99590152542fce53.webp',
  h_book:'assets/ui/150c0eebe6e0b241.webp',
  h_people:'assets/ui/7bccf5d2c59c01a7.webp',
  h_money:'assets/ui/dd5736b2a404b880.webp',
  h_someday:'assets/ui/1a181f25c4b10892.webp',
  h_cycles:'assets/ui/73a0083c06f82be5.webp',
  h_notes:'assets/ui/04769fe59f93d7bb.webp',
  h_vault:'assets/ui/d740b8852e6b662d.webp',
  h_work:'assets/ui/2c1ec19aaa79dc24.webp',
  h_study:'assets/ui/cfb1177ce29e894b.webp',
  h_fun:'assets/ui/a133d5aa4bc8d6bd.webp',
  h_post:'assets/ui/00251dccfb23bb52.webp',
  bg34:'assets/ui/5712bbac87c0d89c.webp',
  bg11:'assets/ui/189c43e5d375d05b.webp',
  bg916:'assets/ui/24fa3b2cc1474ac8.webp'
};
/* v3.3 上岛引导用图（住户头像、搭档、空岛、全家福、站着的啾啾）；v3.3.1 加盖章的啾啾、信封里的啾啾、小木牌；
   v3.3.3 住户头像换成 Ar 重画的圆头像（180 方图，四周留白，整张放进圆框，不裁不放大） */
const OBIMG = {
  av_jj:'assets/ui/c005501caba9af8d.webp',
  av_qiao:'assets/ui/1d285b14555c4e6b.webp',
  av_cow:'assets/ui/5820ac153c4ba8ac.webp',
  av_capy:'assets/ui/a7591053d3b7508c.webp',
  av_jay:'assets/ui/b47740fd8216e757.webp',
  av_boar:'assets/ui/c8ab3863737bdc6f.webp',
  av_owl:'assets/ui/84a7bd08b64348f1.webp',
  av_badger:'assets/ui/dd5d65b644b378fd.webp',
  av_crab:'assets/ui/8ecc5b2a527f0256.webp',
  av_fox:'assets/ui/60584773cbbc6d4d.webp',
  av_mole:'assets/ui/17ad7d47e4f8c80d.webp',
  av_pelican:'assets/ui/15dedafe35bff811.webp',
  av_woodp:'assets/ui/88d9c6059246ff1a.webp',
  pt_pelican:'assets/ui/b24b410a16afbd31.webp',
  pt_woodp:'assets/ui/705b753d797a587c.webp',
  jj_stand:'assets/ui/f211c389431ef5d7.webp',
  ob_isle:'assets/ui/0d052e003b79b3f2.webp',
  jj_stamp:'assets/ui/de4e03307183a558.webp',
  jj_env:'assets/ui/a3fac65c054fcb3d.webp',
  sign:'assets/ui/bde1a39c28fcda7a.webp',
  ob_family:'assets/ui/ff4f36227c71d074.webp',
};
const WM = {d1:'M57.300000000000004 39.5 65.5 34.89999999999999 69.5 42.0 69.3 21.89999999999999 78.7 21.69999999999999 79.0 46.199999999999996 83.80000000000001 33.599999999999994 92.7 37.0 85.80000000000001 55.099999999999994 79.0 52.599999999999994 79.2 64.0 78.80000000000001 65.9 74.2 77.1 76.4 75.4 92.5 96.1 85.0 101.9 71.3 84.3 62.400000000000006 106.2 53.7 102.6 69.7 63.199999999999996 69.60000000000001 52.0 65.5 54.199999999999996ZM27.700000000000003 30.39999999999999 55.300000000000004 22.69999999999999 57.800000000000004 31.700000000000003 48.2 34.39999999999999H48.800000000000004V46.3L58.0 45.5L58.900000000000006 54.9L48.800000000000004 55.699999999999996V61.4L49.5 60.699999999999996L59.2 70.5L52.400000000000006 77.0L48.800000000000004 73.4V103.9H39.400000000000006V74.8L27.5 105.1L18.8 101.7L36.4 56.699999999999996L29.5 57.199999999999996L28.8 47.9L39.400000000000006 47.099999999999994V36.9L30.3 39.5ZM4.0 81.5 -0.6000000000000001 45.0 3.4000000000000004 39.699999999999996 20.8 37.199999999999996 26.200000000000003 42.0 26.0 80.5 21.5 85.1 8.9 85.6ZM12.9 76.0 16.7 75.9V47.4L9.4 48.4Z M153.3 39.5 161.5 34.89999999999999 165.5 42.0 165.3 21.89999999999999 174.7 21.69999999999999 175.0 46.199999999999996 179.8 33.599999999999994 188.7 37.0 181.8 55.099999999999994 175.0 52.599999999999994 175.2 64.0 174.8 65.9 170.2 77.1 172.4 75.4 188.5 96.1 181.0 101.9 167.3 84.3 158.4 106.2 149.7 102.6 165.7 63.199999999999996 165.60000000000002 52.0 161.5 54.199999999999996ZM123.7 30.39999999999999 151.3 22.69999999999999 153.8 31.700000000000003 144.2 34.39999999999999H144.8V46.3L154.0 45.5L154.9 54.9L144.8 55.699999999999996V61.4L145.5 60.699999999999996L155.2 70.5L148.4 77.0L144.8 73.4V103.9H135.4V74.8L123.5 105.1L114.8 101.7L132.4 56.699999999999996L125.5 57.199999999999996L124.8 47.9L135.4 47.099999999999994V36.9L126.3 39.5ZM100.0 81.5 95.4 45.0 99.4 39.699999999999996 116.8 37.199999999999996 122.2 42.0 122.0 80.5 117.5 85.1 104.9 85.6ZM108.9 76.0 112.7 75.9V47.4L105.4 48.4Z M230.9 30.299999999999997 268.8 29.39999999999999 273.7 34.0V50.5L269.4 55.3L251.8 56.9L250.9 47.5L264.2 46.3V38.9L224.2 40.0H224.1L209.9 40.3L209.2 59.099999999999994H270.5L275.3 63.4L278.7 95.4L275.9 100.1L258.9 107.6L255.2 99.0L268.9 92.9L266.3 68.5H204.2L199.5 63.6L200.8 35.39999999999999L205.3 30.89999999999999L219.2 30.599999999999994L226.3 20.5L233.9 25.89999999999999ZM234.9 57.5 226.4 46.599999999999994 233.8 40.8 242.4 51.8ZM233.7 89.8 247.9 89.1 246.9 77.0 256.3 76.3 257.7 93.3 253.2 98.3 202.4 100.5 197.4 95.5 198.9 75.0 208.4 75.6 207.3 90.9 224.1 90.2 226.0 73.3 235.4 74.4Z', d2:'M320.632 101.054Q318.338 101.054 316.35400000000004 100.40299999999999Q314.37 99.752 312.913 98.884Q311.456 98.016 310.588 97.241Q309.72 96.466 309.472 96.218Q308.666 95.412 308.077 94.637Q307.488 93.862 307.488 92.87Q307.488 92.064 307.953 91.16499999999999Q308.418 90.266 309.286 89.336Q310.216 88.406 311.053 87.941Q311.89 87.476 312.696 87.476Q313.812 87.476 314.649 88.158Q315.486 88.84 316.416 89.77Q316.788 90.018 317.408 90.452Q318.028 90.886 318.896 91.227Q319.764 91.568 320.942 91.568Q322.306 91.568 323.36 91.10300000000001Q324.414 90.638 325.12699999999995 89.739Q325.84 88.84 326.212 87.631Q326.584 86.422 326.584 84.996V62.428Q326.584 61.126 326.832 59.917Q327.08 58.708 328.10299999999995 57.964Q329.126 57.22 331.42 57.22Q333.652 57.22 334.582 57.902Q335.512 58.584 335.76 59.7Q336.008 60.816 336.008 61.994V85.43Q336.008 88.716 334.892 91.568Q333.776 94.42 331.699 96.52799999999999Q329.622 98.636 326.80100000000004 99.845Q323.98 101.054 320.632 101.054Z M357.654 101.054Q354.73999999999995 101.054 351.85699999999997 99.90700000000001Q348.974 98.76 346.61799999999994 96.652Q344.26199999999994 94.544 342.89799999999997 91.59899999999999Q341.534 88.654 341.534 85.05799999999999Q341.534 81.71000000000001 342.774 78.827Q344.01399999999995 75.944 346.246 73.712Q348.47799999999995 71.48 351.361 70.209Q354.24399999999997 68.938 357.53 68.938Q361.99399999999997 68.938 365.621 71.077Q369.248 73.21600000000001 371.418 76.874Q373.58799999999997 80.532 373.58799999999997 84.996Q373.58799999999997 88.778 372.193 91.72300000000001Q370.79799999999994 94.668 368.47299999999996 96.77600000000001Q366.14799999999997 98.884 363.327 99.969Q360.506 101.054 357.654 101.054ZM357.53 91.69200000000001Q359.018 91.69200000000001 360.568 90.94800000000001Q362.118 90.20400000000001 363.172 88.71600000000001Q364.226 87.228 364.226 84.934Q364.226 82.95 363.35799999999995 81.462Q362.48999999999995 79.974 360.971 79.137Q359.452 78.3 357.46799999999996 78.3Q355.60799999999995 78.3 354.15099999999995 79.168Q352.69399999999996 80.036 351.79499999999996 81.555Q350.89599999999996 83.074 350.89599999999996 84.996Q350.89599999999996 87.228 351.919 88.747Q352.94199999999995 90.266 354.49199999999996 90.97900000000001Q356.042 91.69200000000001 357.53 91.69200000000001Z M394.366 100.558Q391.204 100.558 388.94100000000003 99.876Q386.678 99.194 385.19 97.768Q383.702 96.342 382.98900000000003 94.14099999999999Q382.276 91.94 382.276 88.902V78.982H380.106Q378.308 78.92 377.595 77.89699999999999Q376.882 76.874 376.882 74.456Q376.882 72.224 377.75 71.13900000000001Q378.618 70.054 380.354 70.054H382.276V63.73Q382.276 62.49 382.493 61.498000000000005Q382.71 60.506 383.702 59.855000000000004Q384.69399999999996 59.204 386.926 59.204Q389.158 59.204 390.15 59.885999999999996Q391.142 60.568 391.359 61.622Q391.57599999999996 62.676 391.57599999999996 63.916V69.93L395.72999999999996 69.806Q396.908 69.806 397.962 70.023Q399.01599999999996 70.24000000000001 399.698 71.232Q400.38 72.224 400.38 74.518Q400.38 76.626 399.729 77.618Q399.078 78.61 398.024 78.88900000000001Q396.96999999999997 79.168 395.72999999999996 79.168L391.57599999999996 79.044V88.53Q391.57599999999996 89.522 391.731 90.173Q391.88599999999997 90.824 392.19599999999997 91.134Q392.506 91.444 393.06399999999996 91.56800000000001Q393.62199999999996 91.69200000000001 394.428 91.69200000000001Q395.792 91.69200000000001 396.846 91.94Q397.9 92.188 398.489 93.05600000000001Q399.078 93.924 399.078 95.97Q399.078 98.202 398.39599999999996 99.194Q397.714 100.186 396.629 100.37200000000001Q395.544 100.558 394.366 100.558Z M421.53 100.496Q418.49199999999996 100.496 416.198 99.194Q414.89599999999996 98.574 413.90399999999994 97.582V97.768Q413.59399999999994 99.194 412.602 99.876Q411.60999999999996 100.558 409.43999999999994 100.558Q407.20799999999997 100.558 406.21599999999995 99.876Q405.22399999999993 99.194 405.00699999999995 98.10900000000001Q404.78999999999996 97.024 404.78999999999996 95.846V60.196Q404.78999999999996 58.894 405.03799999999995 57.84Q405.28599999999994 56.786 406.24699999999996 56.135000000000005Q407.20799999999997 55.484 409.50199999999995 55.484Q411.734 55.484 412.664 56.166Q413.59399999999994 56.848 413.78 57.933Q413.96599999999995 59.018 413.90399999999994 60.196V72.47200000000001Q414.95799999999997 71.542 416.25999999999993 70.798Q418.49199999999996 69.62 421.53 69.62Q424.258 69.62 426.83099999999996 70.86Q429.40399999999994 72.1 431.3879999999999 74.239Q433.37199999999996 76.378 434.51899999999995 79.137Q435.66599999999994 81.896 435.66599999999994 84.934Q435.66599999999994 88.096 434.51899999999995 90.917Q433.37199999999996 93.738 431.3879999999999 95.908Q429.40399999999994 98.078 426.86199999999997 99.287Q424.31999999999994 100.496 421.53 100.496ZM420.22799999999995 91.32Q421.96399999999994 91.32 423.328 90.483Q424.69199999999995 89.646 425.529 88.22Q426.366 86.794 426.366 85.05799999999999Q426.366 83.26 425.55999999999995 81.86500000000001Q424.75399999999996 80.47 423.39 79.664Q422.02599999999995 78.858 420.28999999999996 78.858Q418.616 78.858 417.221 79.664Q415.82599999999996 80.47 415.05099999999993 81.86500000000001Q414.27599999999995 83.26 414.27599999999995 85.05799999999999Q414.27599999999995 86.794 415.082 88.22Q415.888 89.646 417.25199999999995 90.483Q418.616 91.32 420.22799999999995 91.32Z M445.78 100.558Q443.486 100.558 442.525 99.90700000000001Q441.56399999999996 99.256 441.347 98.17099999999999Q441.12999999999994 97.086 441.12999999999994 95.908V74.27Q441.12999999999994 73.03 441.347 71.976Q441.56399999999996 70.922 442.5559999999999 70.271Q443.54799999999994 69.62 445.842 69.62Q448.07399999999996 69.62 449.03499999999997 70.302Q449.996 70.98400000000001 450.21299999999997 72.03800000000001Q450.42999999999995 73.092 450.42999999999995 74.394V95.97Q450.42999999999995 97.148 450.21299999999997 98.233Q449.996 99.318 449.03499999999997 99.938Q448.07399999999996 100.558 445.78 100.558ZM445.78 65.094Q443.424 65.094 442.43199999999996 64.41199999999999Q441.43999999999994 63.73 441.22299999999996 62.614Q441.006 61.498 441.006 60.258Q441.006 58.956 441.25399999999996 57.871Q441.50199999999995 56.786 442.49399999999997 56.135000000000005Q443.486 55.484 445.842 55.484Q448.13599999999997 55.484 449.12799999999993 56.166Q450.11999999999995 56.848 450.337 57.964Q450.554 59.08 450.554 60.32Q450.554 61.56 450.337 62.676Q450.11999999999995 63.792 449.12799999999993 64.443Q448.13599999999997 65.094 445.78 65.094Z M461.474 100.558Q459.18 100.558 458.219 99.90700000000001Q457.258 99.256 457.04099999999994 98.14Q456.82399999999996 97.024 456.82399999999996 95.846V74.208Q456.82399999999996 72.968 457.072 71.914Q457.32 70.86 458.28099999999995 70.209Q459.24199999999996 69.55799999999999 461.536 69.55799999999999Q463.70599999999996 69.55799999999999 464.667 70.14699999999999Q465.628 70.736 465.876 71.48Q466.0 71.914 466.06199999999995 72.286Q466.62 71.666 467.488 70.922Q468.418 70.24000000000001 469.751 69.744Q471.084 69.248 472.82 69.248Q473.50199999999995 69.248 474.33899999999994 69.34100000000001Q475.176 69.434 476.075 69.713Q476.974 69.992 477.71799999999996 70.457Q478.462 70.922 478.927 71.604Q479.392 72.286 479.392 73.27799999999999Q479.392 75.82 478.214 77.58699999999999Q477.036 79.354 475.238 79.354Q474.18399999999997 79.354 473.75 79.168Q473.316 78.982 473.037 78.79599999999999Q472.758 78.61 472.38599999999997 78.455Q472.014 78.3 471.022 78.3Q470.092 78.3 469.255 78.548Q468.418 78.79599999999999 467.705 79.323Q466.99199999999996 79.85 466.58899999999994 80.625Q466.186 81.4 466.186 82.33V95.97Q466.186 97.148 465.969 98.233Q465.752 99.318 464.76 99.938Q463.768 100.558 461.474 100.558Z M497.318 100.496Q494.52799999999996 100.496 491.955 99.287Q489.382 98.078 487.398 95.908Q485.414 93.738 484.267 90.917Q483.12 88.096 483.12 84.934Q483.12 81.896 484.267 79.137Q485.414 76.378 487.429 74.239Q489.44399999999996 72.1 491.986 70.86Q494.52799999999996 69.62 497.318 69.62Q500.294 69.62 502.58799999999997 70.798Q503.828 71.48 504.882 72.47200000000001V60.196Q504.882 59.018 505.03700000000003 57.933Q505.192 56.848 506.12199999999996 56.166Q507.05199999999996 55.484 509.346 55.484Q511.64 55.484 512.601 56.135000000000005Q513.562 56.786 513.779 57.84Q513.996 58.894 513.996 60.134V95.846Q513.996 97.024 513.779 98.10900000000001Q513.562 99.194 512.601 99.876Q511.64 100.558 509.40799999999996 100.558Q507.29999999999995 100.558 506.246 99.876Q505.192 99.194 504.882 97.768V97.644Q503.89 98.574 502.712 99.194Q500.418 100.496 497.318 100.496ZM498.558 91.32Q500.23199999999997 91.32 501.56499999999994 90.483Q502.89799999999997 89.646 503.735 88.22Q504.572 86.794 504.572 85.05799999999999Q504.572 83.26 503.76599999999996 81.86500000000001Q502.96 80.47 501.596 79.664Q500.23199999999997 78.858 498.496 78.858Q496.822 78.858 495.427 79.664Q494.032 80.47 493.25699999999995 81.86500000000001Q492.48199999999997 83.26 492.48199999999997 85.05799999999999Q492.48199999999997 86.794 493.288 88.22Q494.094 89.646 495.52 90.483Q496.94599999999997 91.32 498.558 91.32Z', vb:'-12.6 8.5 538.6 111.1', ratio:4.8479};
function jjImg(k, h, cls){ return '<img class="jj' + (cls ? ' ' + cls : '') + '" src="' + JJ[k] + '" alt="" style="height:' + h + 'px">'; }
function wordmarkSVG(h, light){
  const c1 = light ? '#F7F0E2' : 'var(--ink)', c2 = light ? '#9CC9BF' : 'var(--teal)';
  return '<svg class="wm" viewBox="' + WM.vb + '" width="' + Math.round(h * WM.ratio) + '" height="' + h + '" role="img" aria-label="啾啾岛 Jotbird">'
    + '<path d="' + WM.d1 + '" fill="' + c1 + '" stroke="' + c1 + '" stroke-width="2.4" stroke-linejoin="round"/>'
    + '<path d="' + WM.d2 + '" fill="' + c2 + '" stroke="' + c2 + '" stroke-width="1.2" stroke-linejoin="round"/></svg>';
}
const JJI = {};
function jjObj(k){   /* 分享图要在画布上画啾啾：先把图片对象备好 */
  let im = JJI[k];
  if (!im){ im = JJI[k] = new Image();
    im.onload = () => { try{ if ($('#shSheet') && $('#shSheet').classList.contains('on')) shRender(); }catch(_){ } };
    im.src = JJ[k]; }
  return im;
}
/* 集子 = 岛上的房子 */
const HOUSE = {food:['h_food', '海边饭馆', '阿饱'], movie:['h_movie', '小岛影院', '阿影'], book:['h_book', '小岛书屋', '酥酥'], money:['h_money', '铜板账房', '小铜板'], work:['h_work', '大力工坊', '大力'], fun:['h_fun', '温泉汤屋', '小卡'], study:['h_study', '海风学堂', '翘翘']};
const HEAD_ART = {"post":"assets/ui/01c3ac6e05a90796.webp","food":"assets/ui/198948363f1616ca.webp","movie":"assets/ui/1b8382647d988759.webp","book":"assets/ui/aca781211c4643ac.webp","people":"assets/ui/df389b0952f31a4d.webp","money":"assets/ui/15f5381e0c173d4d.webp","cycles":"assets/ui/42bda3d0cf8a9a22.webp","notes":"assets/ui/e9e6f83fce751373.webp","vault":"assets/ui/2835141d30874e1c.webp","work":"assets/ui/df98b9eb5e0e5a46.webp","someday":"assets/ui/4e1f94c22758e577.webp","fun":"assets/ui/f935a812eb5ce5dc.webp","study":"assets/ui/b595bb4029d0f8ba.webp","health":"assets/ui/699792c2d5f4bc3d.webp"};
JJ.h_health = HEAD_ART.health;
HEAD_ART.abu='assets/ui/abu-house.webp';JJ.h_abu=HEAD_ART.abu;
/* 14栋建筑共用信纸式门楣；建筑编号仅用于基础Markdown文档，不在App显示。 */
const HOUSE_INFO={
 post:{name:'信风邮局',who:'啾啾',line:'想翻哪天的记录，点日历看看。'},
 food:{name:'海边饭馆',who:'阿饱',line:'好吃的、想吃的店，都可以记在这里。'},
 movie:{name:'小岛影院',who:'阿影',line:'看完记个片名，顺手打个分。'},
 book:{name:'小岛书屋',who:'酥酥',line:'读到想留的一句，就摘下来。'},
 people:{name:'小岛茶屋',who:'团团',line:'收录一个人，再翻翻和对方有关的事。'},
 money:{name:'铜板账房',who:'小铜板',line:'记花销时带上金额，这里能一起算。'},
 cycles:{name:'滴答钟楼',who:'笃笃',line:'生日、还款日和固定安排，都可以在这里设提醒。'},
 notes:{name:'记事小亭',who:'阿鼠',line:'零碎念头先放架子上，想写长文时再挑出来。'},
 vault:{name:'秘屋树洞',who:'松松',line:'Wi-Fi、会员账号这些，用主口令锁好。'},
 work:{name:'大力工坊',who:'大力',line:'记下项目进度，写周报时点「报告」整理。'},
 study:{name:'海风学堂',who:'翘翘',line:'课堂重点、错题和考试日子，放这里一起找。'},
 someday:{name:'心愿灯塔',who:'阿兜',line:'暂时顾不上的先放我这儿，想做时点「今天做」。'},
 fun:{name:'温泉汤屋',who:'小卡',line:'看展、唱歌、出去玩，回来记两句。'},
 health:{name:'晨露小站',who:'呦呦',line:'体重、围度、经期、喝水，想记哪项就记哪项。'}
};
HOUSE_INFO.abu={name:'岛主小筑',who:'阿卜',line:'你的那本手记，就放在靠窗的抽屉里。'};
function houseLine(key){
 const now=new Date(), minute=now.getHours()*60+now.getMinutes();
 if(key==='food'&&((minute>=660&&minute<810)||(minute>=1050&&minute<1200)))return '到饭点了，拿不定主意就点「吃什么」抽一家。';
 if(key==='work'&&now.getDay()===5)return '今天周五，要整理这周的进度，可以点「报告」。';
 if(key==='money'&&now.getDate()>=25)return '快到月底了，点「盘点」看看这个月花在哪儿。';
 if((key==='movie'||key==='book')&&cur.name==='group'&&cur.g){
  const n=tplRows(cur.g,null).length;
  if(n>=(key==='movie'?10:5))return '这里已经有 '+n+' 条'+(key==='movie'?'观影':'读书')+'记录，往下翻翻。';
 }
 return HOUSE_INFO[key].line;
}
function letterHouseHead(key){
 const h=HOUSE_INFO[key];if(!h)return null;
 const d=document.createElement('div');d.className='house-head letter-house';d.dataset.house=key;
 d.innerHTML='<div class="letter-copy"><div class="letter-kicker">岛上的日常 · '+vEsc(h.who)+'</div><b>'+vEsc(h.name)+'</b><p>'+vEsc(h.who+'：'+houseLine(key))+'</p></div><img src="'+HEAD_ART[key]+'" alt="'+vEsc(h.who+'与'+h.name)+'">';
 return d;
}

function houseHead(tpl, g){return letterHouseHead(tpl);}
/* 晨露小站：纯数据与计算，亦用于 Node 回归测试。日期均为本地记录日的 ISO 字符串。 */
const HEALTH_MODULES = ['weight', 'size', 'period', 'water'];
const HEALTH_LABELS = {weight:'体重', size:'围度', period:'经期', water:'饮水'};
const HEALTH_DIMS = {waist:'腰围', chest:'胸围', hip:'臀围', thigh:'大腿围', calf:'小腿围', back:'背宽'};
function healthDefaults(){
  return {version:1, profile:{height:null, age:null, sex:'', general:false}, order:HEALTH_MODULES.slice(), hidden:[], cycleLength:null, waterGoal:{mode:'suggested', ml:null}, records:{weight:[], size:[], period:[], water:[]}};
}
function healthValidDate(s){
  if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s + 'T00:00:00Z');
  return Number.isFinite(+d) && d.toISOString().slice(0,10) === s;
}
function healthDays(a,b){ return Math.round((Date.parse(b+'T00:00:00Z')-Date.parse(a+'T00:00:00Z'))/86400000); }
function healthAddDays(s,n){ return new Date(Date.parse(s+'T00:00:00Z')+n*86400000).toISOString().slice(0,10); }
function healthNumber(n,min,max){ return typeof n === 'number' && Number.isFinite(n) && n>=min && n<=max; }
function healthRecordValid(k,r){
  if (!r || typeof r.id !== 'string' || !r.id || !healthValidDate(r.date)) return false;
  if (k==='weight') return healthNumber(r.value,1,500);
  if (k==='size') return r.values && Object.keys(HEALTH_DIMS).some(d=>healthNumber(r.values[d],.1,300)) && Object.keys(r.values).every(d=>HEALTH_DIMS[d] && healthNumber(r.values[d],.1,300));
  if (k==='water') return healthNumber(r.ml,1,10000) && Number.isInteger(r.ml) && /^([01]\d|2[0-3]):[0-5]\d$/.test(r.time || '');
  return !r.end || (healthValidDate(r.end) && r.end>=r.date);
}
function healthNormalize(raw){
  const d = healthDefaults();
  if (raw == null) return d;
  if (typeof raw !== 'object' || Array.isArray(raw) || (raw.version && raw.version!==1)) throw new Error('健康备份格式不支持');
  const p=raw.profile || {};
  d.profile={height:healthNumber(p.height,50,250)?p.height:null, age:healthNumber(p.age,1,120)&&Number.isInteger(p.age)?p.age:null, sex:['m','f'].includes(p.sex)?p.sex:'', general:p.general===true};
  const order=Array.isArray(raw.order)?raw.order:[];
  d.order=[...new Set(order.filter(k=>HEALTH_MODULES.includes(k)))];
  d.order.push(...HEALTH_MODULES.filter(k=>!d.order.includes(k)));
  d.hidden=[...new Set((Array.isArray(raw.hidden)?raw.hidden:[]).filter(k=>HEALTH_MODULES.includes(k)))];
  d.cycleLength=healthNumber(raw.cycleLength,1,120)&&Number.isInteger(raw.cycleLength)?raw.cycleLength:null;
  if (raw.waterGoal && raw.waterGoal.mode==='manual') d.waterGoal={mode:'manual',ml:healthNumber(raw.waterGoal.ml,1,10000)&&Number.isInteger(raw.waterGoal.ml)?raw.waterGoal.ml:null};
  for (const k of HEALTH_MODULES){
    const rows=raw.records && raw.records[k];
    if (rows!==undefined && (!Array.isArray(rows)||rows.some(r=>!healthRecordValid(k,r)))) throw new Error('健康记录格式无效');
    const ids=new Set();
    d.records[k]=(rows||[]).map(r=>{
      if(ids.has(r.id)) throw new Error('健康记录编号重复'); ids.add(r.id);
      const o={id:r.id,date:r.date,note:typeof r.note==='string'?r.note.slice(0,1000):'',createdAt:Number.isFinite(r.createdAt)?r.createdAt:0};
      if(k==='weight')o.value=r.value;
      if(k==='size')o.values=Object.assign({},r.values);
      if(k==='water'){o.ml=r.ml;o.time=r.time;}
      if(k==='period')o.end=r.end||null;
      return o;
    });
  }
  return d;
}
function healthAdult(p){ return p.general===true && healthNumber(p.age,18,64); }
function healthMetrics(p,weight){
  const b=healthAdult(p)&&healthNumber(p.height,50,250)&&healthNumber(weight,1,500)?weight/((p.height/100)**2):null;
  const energy=b!==null&&['m','f'].includes(p.sex)?10*weight+6.25*p.height-5*p.age+(p.sex==='m'?5:-161):null;
  return {bmi:b,ree:energy!==null&&energy>0?Math.round(energy/10)*10:null};
}
function healthWaterTarget(h){
  if(h.waterGoal.mode==='manual')return h.waterGoal.ml;
  return healthAdult(h.profile)?(h.profile.sex==='m'?1700:h.profile.sex==='f'?1500:null):null;
}
function healthSorted(rows){ return rows.slice().sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||'')||(a.createdAt||0)-(b.createdAt||0)); }
function healthLatest(rows){ const a=healthSorted(rows); return a[a.length-1]||null; }
function healthDaily(rows,value){
  const m=new Map();healthSorted(rows).forEach(r=>{const v=value(r);if(v!=null)m.set(r.date,v);});return [...m].map(([date,value])=>({date,value}));
}
function healthWaterDays(h,today){
  return Array.from({length:7},(_,i)=>{const date=healthAddDays(today,i-6),rows=h.records.water.filter(r=>r.date===date);return {date,value:rows.length?rows.reduce((n,r)=>n+r.ml,0):null};});
}
function healthForecast(h,today){
  const last=healthLatest(h.records.period);if(!last)return null;
  const next=h.cycleLength?healthAddDays(last.date,h.cycleLength):null;
  return {last,next,remaining:next?healthDays(today,next):null,day:healthDays(last.date,today)+1};
}
function healthPeriodError(rows,record,today){
  if(!healthValidDate(record.date)||record.date>today)return '开始日期不能晚于今天';
  if(record.end&&(!healthValidDate(record.end)||record.end<record.date||record.end>today))return '结束日期应在开始日期与今天之间';
  const overlaps=rows.some(r=>r.id!==record.id && r.date<=(record.end||today) && record.date<=(r.end||today));
  return overlaps?'这段时间与已有经期重叠，请修改原记录':'';
}
if(typeof module!=='undefined'&&module.exports)module.exports={HEALTH_MODULES,HEALTH_DIMS,healthDefaults,healthNormalize,healthValidDate,healthDays,healthAddDays,healthMetrics,healthWaterTarget,healthSorted,healthLatest,healthDaily,healthWaterDays,healthForecast,healthPeriodError};

/* ============ 数据与本地存储 ============ */
let uid = 0;
/* ---- 日期 ---- */
function dkey(d){ return d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate(); }
function parseKey(k){ const a = k.split('.').map(Number); return new Date(a[0], a[1] - 1, a[2]); }
function effNow(){ const n = new Date(); if (n.getHours() < 4) n.setDate(n.getDate() - 1); return n; }
const TODAY = dkey(effNow());
function addDaysK(k, n){ const d = parseKey(k); d.setDate(d.getDate() + n); return dkey(d); }
const TOMORROW = addDaysK(TODAY, 1);
function fmtKey(k){ const a = k.split('.'); return a[1] + '月' + a[2] + '日'; }
function fmtShort(k){ const a = k.split('.'); return a[1] + '.' + a[2]; }
function weekCN(k){ return '周' + '日一二三四五六'[parseKey(k).getDay()]; }
function dayGroupTitle(k){ return fmtKey(k) + ' · ' + weekCN(k); }
function key2iso(k){ const a = k.split('.').map(Number); return a[0] + '-' + String(a[1]).padStart(2, '0') + '-' + String(a[2]).padStart(2, '0'); }
function iso2key(s){ const a = s.split('-').map(Number); return a[0] + '.' + a[1] + '.' + a[2]; }
function nextMondayKey(){ const d = parseKey(TODAY); d.setDate(d.getDate() + ((8 - d.getDay()) % 7 || 7)); return dkey(d); }
const WKMAP = {'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'日':0,'天':0};
function upcomingWeekday(w){
  const d = parseKey(TODAY); let diff = (w - d.getDay() + 7) % 7; if (!diff) diff = 7;
  d.setDate(d.getDate() + diff); return dkey(d);
}
function nextWeekWeekday(w){
  const d = parseKey(TODAY);
  const mon = new Date(d); mon.setDate(d.getDate() - ((d.getDay() + 6) % 7) + 7);
  mon.setDate(mon.getDate() + ((w + 6) % 7)); return dkey(mon);
}
/* ---- 本地存储 ---- */
const LSKEY = 'bujo_local_v1';
/* v2.32 照片单独放 IndexedDB：本地存档里只留「idb:编号」，文字那 5MB 不再被照片挤满 */
var IMG_DB = {db:null, ok:false, ready:false, bootP:null, busy:false, nextJs:null, missing:0,
  map:new Map() /* 图片 → 编号 */, data:new Map() /* 编号 → 图片 */, pending:new Map() /* 等着写进去的 */};
let PAGES = {}, SEEN = {}, GCOLOR = {};
let extraGroups = ['工作', '健康', '恋爱'];
const SET = {recog:true, accent:0};
/* A postcard is granted only when today's greeting is opened. No elapsed-time delivery. */
function islandDefaults(){return {version:4,enabled:true,seed:0,daily:null,inbox:[],album:[],messages:[]};}
function islandNormalize(raw){
 if(raw==null)return islandDefaults();
 if(!raw||typeof raw!=='object'||![1,2,3,4].includes(raw.version))throw Error('Unsupported island backup');
 const s=islandDefaults(),validDay=n=>Number.isInteger(n)&&n>=0&&n<200000;
 if(typeof raw.enabled!=='boolean'||!Number.isInteger(raw.seed)||raw.seed<0||raw.seed>4294967295||!Array.isArray(raw.inbox)||!Array.isArray(raw.album))throw Error('Invalid island backup');
 if(raw.inbox.length>2000||raw.album.length>2000)throw Error('Invalid island size');
 s.enabled=raw.enabled;s.seed=raw.seed;
 const validId=x=>typeof x==='string'&&(/^[a-z]+-[a-z0-9]+$/).test(x),seen=new Set();
 for(const kind of ['album','inbox'])s[kind]=raw[kind].map(r=>{
  if(!r||!validId(r.id)||!validDay(r.day)||seen.has(r.id))throw Error('Invalid postcard');
  if(kind==='album'&&!validDay(r.collectedDay))throw Error('Invalid collected date');
  seen.add(r.id);return kind==='album'?{id:r.id,day:r.day,collectedDay:r.collectedDay}:{id:r.id,day:r.day};
 });
 if(raw.version>=2&&raw.daily!=null){
  if(!validId(raw.daily.id)||!validDay(raw.daily.day)||!seen.has(raw.daily.id))throw Error('Invalid daily postcard');
  s.daily={day:raw.daily.day,id:raw.daily.id};
 }
 if(raw.version>=3){
  if(!Array.isArray(raw.messages)||raw.messages.length>6000)throw Error('Invalid messages');
  const ids=new Set();
  s.messages=raw.messages.map(m=>{
   if(!m||typeof m.id!=='string'||m.id.length>100||ids.has(m.id)||!validDay(m.day)||typeof m.read!=='boolean')throw Error('Invalid message');
   if(m.deleted!==undefined&&(typeof m.deleted!=='boolean'||(m.deleted&&!m.read)))throw Error('Invalid deleted message');
   const deletion=m.deleted===undefined?{}:{deleted:m.deleted};
   ids.add(m.id);
   if(m.kind==='card'){
    if(!validId(m.cardId)||m.id!=='card:'+m.cardId||!seen.has(m.cardId))throw Error('Invalid card message');
    return {id:m.id,kind:'card',cardId:m.cardId,day:m.day,read:m.read,...deletion};
   }
   if(m.kind!=='system'||!/^system:[a-z0-9-]+$/.test(m.id)||typeof m.title!=='string'||!m.title.trim()||m.title.length>150||typeof m.body!=='string'||!m.body.trim()||m.body.length>6000)throw Error('Invalid system message');
   return {id:m.id,kind:'system',day:m.day,read:m.read,title:m.title,body:m.body,...deletion};
  });
 }
 islandSyncMessages(s); // Migrate old collected cards as read; pending cards remain unread.
 return s;
}
function islandSyncMessages(s){
 let changed=false;
 for(const [rows,read] of [[s.inbox,false],[s.album,true]])for(const r of rows){
  if(!s.messages.some(m=>m.id==='card:'+r.id)){
   s.messages.push({id:'card:'+r.id,kind:'card',cardId:r.id,day:r.day,read});changed=true;
  }
 }
 return changed;
}
function islandSystemMessage(s,id,day,title,body){
 if(s.messages.some(m=>m.id===id))return false;
 s.messages.push({id,kind:'system',day,read:false,title,body});return true;
}
function islandReadMessage(s,id){const m=s.messages.find(m=>m.id===id);if(!m||m.read)return false;m.read=true;return true;}
function islandUnread(s){return s.messages.filter(m=>!m.deleted&&!m.read).length;}
function islandVisibleMessages(s,kind='all'){
 return s.messages.map((m,i)=>({...m,order:i})).filter(m=>!m.deleted&&(kind==='all'||m.kind===kind)).sort((a,b)=>Number(a.read)-Number(b.read)||b.day-a.day||b.order-a.order);
}
function islandDeleteRead(s){
 let n=0;for(const m of s.messages)if(m.read&&!m.deleted){m.deleted=true;n++;}return n;
}
function islandCollectAll(s,day){
 const ids=s.inbox.slice().sort((a,b)=>a.day-b.day).map(r=>r.id);let n=0;for(const id of ids)if(islandCollect(s,id,day))n++;return n;
}
function islandHash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function islandGrantDaily(s,day,roster,catalog,seed){
 if(!Number.isInteger(day)||day<0||day>=200000)return false;
 if(s.daily&&day<=s.daily.day)return false; // Reopening and a backward clock cannot grant twice.
 if(!s.enabled)return false;
 const pool=catalog.filter(c=>c.id!=='abu-welcome'&&c.requires.every(k=>roster.includes(k)));if(!pool.length)return false;
 if(!s.seed)s.seed=(seed>>>0)||1;
 const known=new Set([...s.album,...s.inbox].map(r=>r.id));
 const fresh=pool.filter(c=>!known.has(c.id));
 const choices=fresh.length?fresh:pool; // After collecting the eligible set, revisit a card without duplicating it.
 const card=choices[islandHash(s.seed+'|morning|'+day)%choices.length];
 if(!known.has(card.id)){s.inbox.push({id:card.id,day});islandSyncMessages(s);}
 s.daily={day,id:card.id};return true;
}
function islandCollect(s,id,day){
 const i=s.inbox.findIndex(r=>r.id===id);if(i<0)return false;
 islandSyncMessages(s);islandReadMessage(s,'card:'+id);
 if(!s.album.some(r=>r.id===id))s.album.push({...s.inbox[i],collectedDay:Math.max(day,s.inbox[i].day)});
 s.inbox.splice(i,1);return true;
}

let HEALTH = healthDefaults();
let ISLAND = islandDefaults();
try{
  var NOTES = [];
  const raw = localStorage.getItem(LSKEY);
  if (raw){ const s = JSON.parse(raw);
    PAGES = s.pages || {}; extraGroups = s.extraGroups || extraGroups;
    delete SET.abuProfile; SET.stagePlans=[]; Object.assign(SET, s.set || {}); SEEN = s.seen || {}; GCOLOR = s.gcolor || {};
    NOTES = s.notes || []; HEALTH = healthNormalize(s.health); ISLAND = islandNormalize(s.island); }
}catch(_){}
let saveTm = null;
let PARSE_GEN = 1;
function jstrip(k, v){   /* 导出 / 云备份：编号换回图片本身，备份文件自带照片 */
  if (k === '_pc') return undefined;
  if (typeof v === 'string' && v.startsWith('idb:')){ const d = IMG_DB.data.get(v.slice(4)); return d || v; }
  return v;
}
function jstripLocal(k, v){   /* 本地存档：图片换成编号，新图片排队写进 IndexedDB */
  if (k === '_pc') return undefined;
  if (typeof v === 'string' && v.length > 200 && v.startsWith('data:image/')){
    let id = IMG_DB.map.get(v);
    if (!id){
      id = 'i' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      IMG_DB.map.set(v, id); IMG_DB.data.set(id, v); IMG_DB.pending.set(id, v);
    }
    return 'idb:' + id;
  }
  return v;
}
function scheduleSave(){
  if (typeof KNOWN_PPL !== 'undefined') KNOWN_PPL = null;
  if (typeof ISLE_DEF !== 'undefined') ISLE_DEF = null;
  if (typeof KNOWN_STORE !== 'undefined') KNOWN_STORE = null;
  STORE_IDX = null; WANT_IDX = null; PPL_CNT = null; DICT_T = null; STORE_CORES = null;
  clearTimeout(saveTm);
  saveTm = setTimeout(() => { saveTm = null; saveNow(); }, 300);
}
function saveState(){ return {pages:PAGES, extraGroups, set:SET, seen:SEEN, gcolor:GCOLOR, notes:NOTES, health:HEALTH, island:ISLAND}; }
function lsWrite(js){
  try{ localStorage.setItem(LSKEY, js); return true; }
  catch(_){ toast('存储已满：请先导出备份，再删掉一些旧记录', 'oops'); return false; }
}
function saveNow(){
  try{ mealAutoTagAll(); }catch(_){}
  if (IMG_DB.ok && IMG_DB.ready){
    let js = null;
    try{ js = JSON.stringify(saveState(), jstripLocal); }catch(_){ js = null; }
    if (js !== null){
      if (IMG_DB.pending.size || IMG_DB.busy) imgQueueWrite(js); else lsWrite(js);
      try{ ghSchedule(); }catch(_){}
      return;
    }
  }
  lsWrite(JSON.stringify(saveState(), jstrip));   /* 没有 IndexedDB（或还没准备好）：照老办法 */
  try{ ghSchedule(); }catch(_){}
}
/* 先把新照片写进 IndexedDB，写成功了再存文字；写不进去就退回老办法（照片内联），什么都不丢 */
function imgQueueWrite(js){
  IMG_DB.nextJs = js;
  if (IMG_DB.busy) return;
  IMG_DB.busy = true;
  const run = () => {
    const batch = [...IMG_DB.pending]; IMG_DB.pending.clear();
    const js2 = IMG_DB.nextJs; IMG_DB.nextJs = null;
    imgPut(batch).then(ok => {
      if (ok){ if (js2 !== null) lsWrite(js2); }
      else { IMG_DB.ok = false; lsWrite(JSON.stringify(saveState(), jstrip)); }
      if (IMG_DB.ok && (IMG_DB.nextJs !== null || IMG_DB.pending.size)) run();
      else { IMG_DB.busy = false; IMG_DB.nextJs = null; }
    });
  };
  run();
}
function imgDbOpen(){
  return new Promise(res => {
    try{
      if (!window.indexedDB){ res(null); return; }
      const rq = indexedDB.open('bujo_img', 1);
      rq.onupgradeneeded = () => { try{ rq.result.createObjectStore('img'); }catch(_){ } };
      rq.onsuccess = () => res(rq.result);
      rq.onerror = rq.onblocked = () => res(null);
    }catch(_){ res(null); }
  });
}
function imgPut(batch){
  return new Promise(res => {
    if (!batch.length){ res(true); return; }
    try{
      const tx = IMG_DB.db.transaction('img', 'readwrite'), st = tx.objectStore('img');
      batch.forEach(([id, v]) => st.put(v, id));
      tx.oncomplete = () => res(true);
      tx.onerror = tx.onabort = () => res(false);
    }catch(_){ res(false); }
  });
}
function imgDel(ids){
  try{
    const tx = IMG_DB.db.transaction('img', 'readwrite'), st = tx.objectStore('img');
    ids.forEach(id => { st.delete(id); const v = IMG_DB.data.get(id); IMG_DB.data.delete(id); if (v) IMG_DB.map.delete(v); });
  }catch(_){ }
}
/* 启动：读出照片、把编号换回图片；老的内联照片下一次存档时自动搬家；没人用的照片记录清掉 */
function imgBoot(){
  if (IMG_DB.bootP) return IMG_DB.bootP;
  IMG_DB.bootP = imgDbOpen().then(db => new Promise(res => {
    if (!db){ IMG_DB.ok = false; res(); return; }
    IMG_DB.db = db;
    try{
      const tx = db.transaction('img', 'readonly'), st = tx.objectStore('img');
      const kr = st.getAllKeys(), vr = st.getAll();
      tx.oncomplete = () => {
        const ks = kr.result || [], vs = vr.result || [];
        ks.forEach((k, i) => { IMG_DB.data.set(k, vs[i]); IMG_DB.map.set(vs[i], k); });
        IMG_DB.ok = true; res();
      };
      tx.onerror = tx.onabort = () => { IMG_DB.ok = false; res(); };
    }catch(_){ IMG_DB.ok = false; res(); }
  })).then(() => {
    const used = new Set(); let swapped = 0, inline = 0, missing = 0;
    const fix = arr => { if (!arr) return; for (let i = 0; i < arr.length; i++){ const v = arr[i]; if (typeof v !== 'string') continue;
      if (v.startsWith('idb:')){ const id = v.slice(4), d = IMG_DB.data.get(id); used.add(id); if (d){ arr[i] = d; swapped++; } else missing++; }
      else if (v.startsWith('data:image/')) inline++; } };
    walk((k, e) => { fix(e.images); fix(e.imgt); });
    IMG_DB.missing = missing; IMG_DB.ready = true;
    if (IMG_DB.ok){
      const dead = [...IMG_DB.data.keys()].filter(id => !used.has(id));
      if (dead.length) imgDel(dead);
      if (inline) scheduleSave();
    }
    if (swapped || missing) render();
    try{ if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {}); }catch(_){ }
  }).catch(() => { IMG_DB.ok = false; IMG_DB.ready = true; });
  return IMG_DB.bootP;
}
const IMG_BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
function imgUrl(v){ return (typeof v === 'string' && v.startsWith('idb:')) ? (IMG_DB.data.get(v.slice(4)) || IMG_BLANK) : v; }
function storageText(){
  const kb = Math.max(1, Math.round((localStorage.getItem(LSKEY) || '').length / 1024));
  let n = 0, len = 0;
  walk((k, e) => (e.images || []).forEach(v => { n++; len += imgUrl(v).length; }));
  return '文字 ' + kb + ' KB' + (n ? ' · 照片 ' + n + ' 张 ' + (len / 1048576).toFixed(1) + ' MB' : '');
}
const P = () => PAGES[TODAY];

/* ============ 基础工具 ============ */
const $ = s => document.querySelector(s);
const escAttr = s => String(s || '').replace(/"/g, '&quot;');
const view = $('#view'), topTitle = $('#topTitle'), reviewBtn = $('#reviewBtn'), toolbar = $('#toolbar');
let cur = {name:'today'};
let navStack = [], navPrevSnap = null, navFromBack = false, navPrevLim = 0;   /* v2.32 navPrevLim：长列表展开到第几条，返回时还原 */
function navSnap(){ return JSON.stringify({n:cur.name, g:cur.g, k:cur.key, p:cur.pid, i:cur.id, q:cur.q, d:cur.date, t:cur.tab}); }
function navBack(){
  if (!navStack.length) return;
  navFromBack = true;
  cur = navStack.pop();
  render();
}
let focusRef = null, pendingDel = null;
let undoStack = [];
function snapshot(label){
  undoStack.push({label, data: JSON.parse(JSON.stringify(PAGES[TODAY]))});
  if (undoStack.length > 20) undoStack.shift();
}
function placeToolbar(){
  const vv = window.visualViewport;
  const kb = vv ? Math.max(0, window.innerHeight - vv.height - vv.offsetTop) : 0;
  toolbar.style.bottom = kb + 'px';
  const S = $('#tagSug');
  const tbH = toolbar.classList.contains('on') ? (toolbar.offsetHeight || 54) : 0;
  if (S) S.style.bottom = (kb + tbH) + 'px';
  const sugH2 = (S && S.classList.contains('on')) ? (S.offsetHeight || 44) : 0;
  const SB = $('#smartBar');
  if (SB) SB.style.bottom = (kb + tbH + sugH2) + 'px';
  const sbH2 = (SB && SB.classList.contains('on')) ? (SB.offsetHeight || 44) : 0;
  const RC = $('#recall');
  if (RC) RC.style.bottom = (kb + tbH + sugH2 + sbH2) + 'px';
  view.style.paddingBottom = ((view.classList.contains('th-picking') ? 0 : 150) + kb) + 'px';
  const CB = document.getElementById('chatBar'), CR = document.getElementById('chatReply');   /* v3.2 输入栏和啾啾的回话跟着键盘 */
  const cfoc = !!(document.activeElement && document.activeElement.id === 'chatIn');
  if (CB) CB.style.bottom = (cfoc ? kb : 0) + 'px';
  if (CR) CR.style.bottom = ((cfoc ? kb : 0) + ((CB && CB.classList.contains('on')) ? (CB.offsetHeight || 58) : 0) + 8) + 'px';
  ['gsheet', 'qsheet'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.bottom = (el.classList.contains('on') ? kb : 0) + 'px';
  });
}
function findScroller(el){
  let sc = el.parentElement;
  while (sc && sc !== document.body){
    const cs = getComputedStyle(sc);
    if (sc.scrollHeight > sc.clientHeight + 4 && /(auto|scroll)/.test(cs.overflowY)) return sc;
    sc = sc.parentElement;
  }
  return null;
}
function keepAboveKeyboard(el){
  if (!el || !el.getBoundingClientRect || !el.isConnected) return;
  const vv = window.visualViewport;
  const vBottom = vv ? (vv.offsetTop + vv.height) : window.innerHeight;
  const isLine = el.classList && el.classList.contains('line-input');
  const tbH = (isLine && toolbar.classList.contains('on')) ? (toolbar.offsetHeight || 54) : 0;
  const sugH = (isLine && $('#tagSug').classList.contains('on')) ? ($('#tagSug').offsetHeight || 44) : 0;
  const sb4 = $('#smartBar');
  const sbH4 = (isLine && sb4 && sb4.classList.contains('on')) ? (sb4.offsetHeight || 44) : 0;
  const limit = vBottom - tbH - sugH - sbH4 - 14;
  const r = el.getBoundingClientRect();
  const sc = findScroller(el);
  if (!sc) return;
  if (r.bottom > limit) sc.scrollTop += (r.bottom - limit);
  else if (r.top < 70) sc.scrollTop -= (70 - r.top);
}
function scrollFocused(){
  const ae = document.activeElement;
  if (ae && ae.classList && (ae.classList.contains('nb-body') || ae.classList.contains('nb-title'))) return;   /* 笔记本长文不参与“保持在键盘上方”，避免整页蹿动 */
  if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA')) keepAboveKeyboard(ae);
}
function updateToolbarVis(){
  const ae = document.activeElement;
  const editing = (cur.name === 'today' || cur.name === 'history' || cur.name === 'day') && ae && ae.classList && ae.classList.contains('line-input');
  toolbar.classList.toggle('on', editing);
  { const ph0 = document.getElementById('phone'); if (ph0) ph0.classList.toggle('lnedit', !!editing); }   /* v3.2 改某一行时输入栏让开 */
  if (editing) refreshToolbarKeys();
  else { $('#tagSug').classList.remove('on'); const sp2 = $('#symPop'); if (sp2) sp2.classList.remove('on');
    const sb2 = $('#smartBar'); if (sb2){ sb2.classList.remove('on'); sb2.innerHTML = ''; } }
  placeToolbar();
  if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA')){
    setTimeout(scrollFocused, 120); setTimeout(scrollFocused, 420);
  }
}
setInterval(placeToolbar, 300);

/* ============ # 联想（输入 # 弹出分组建议） ============ */
let sugTarget = null;
function updateTagSug(e, inp){
  const S = $('#tagSug');
  const m = inp.value.match(/#([^\s#，。,]*)$/);
  if (!m){ S.classList.remove('on'); return; }
  const part = m[1];
  sugTarget = {e, inp};
  S.innerHTML = '<span class="ts-label">归入分组</span>';
  const names = allGroupNames().filter(g => !part || g.includes(part));
  const addChip = (label, fn) => {
    const c = document.createElement('button'); c.className = 'gs-chip'; c.textContent = label;
    c.addEventListener('click', fn); S.appendChild(c);
  };
  names.forEach(g => addChip('#' + g, () => applyTag(g)));
  if (part && !allGroupNames().includes(part))
    addChip('新建 #' + part, () => { if (!extraGroups.includes(part)) extraGroups.push(part); applyTag(part); });
  S.classList.add('on'); placeToolbar();
}
function applyTag(g){
  if (!sugTarget) return;
  const {e, inp} = sugTarget;
  e.text = inp.value.replace(/#([^\s#，。,]*)$/, '').trim();
  if (!(e.groups = e.groups || []).includes(g)) e.groups.push(g);
  $('#tagSug').classList.remove('on');
  toast('已归入 #' + g);
  render();
}
document.addEventListener('DOMContentLoaded', () => {});
$('#tagSug').addEventListener('pointerdown', ev => ev.preventDefault());
if (window.visualViewport){
  window.visualViewport.addEventListener('resize', updateToolbarVis);
  window.visualViewport.addEventListener('scroll', placeToolbar);
}
window.addEventListener('scroll', () => { if (window.scrollY) window.scrollTo(0, 0); });

/* ============ 翻天：顶栏箭头 + 左右滑 ============ */
function curDayKey(){
  return cur.name === 'today' ? TODAY : cur.name === 'history' ? cur.date : cur.name === 'day' ? cur.key : null;
}
function navDay(d){
  const k0 = curDayKey(); if (!k0) return;
  gotoDay(addDaysK(k0, d));
}
topTitle.addEventListener('click', () => {
  const k = curDayKey(); if (!k) return;
  const a = k.split('.').map(Number);
  cur = {name:'cal', y:a[0], m:a[1]}; render();
});
document.getElementById('prevDay').onclick = () => navDay(-1);
document.getElementById('nextDay').onclick = () => navDay(1);
let swX = null, swY = null;
view.addEventListener('pointerdown', ev => { swX = ev.clientX; swY = ev.clientY; });
view.addEventListener('pointerup', ev => {
  if (swX === null) return;
  const dx = ev.clientX - swX, dy = ev.clientY - swY, sx = swX;
  swX = null;
  const ae = document.activeElement;
  if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA')) return;
  if (sx < 24) return;
  if (Math.abs(dx) > 60 && Math.abs(dy) < 40 && curDayKey()) navDay(dx > 0 ? -1 : 1);
});
document.addEventListener('focusin', updateToolbarVis);
document.addEventListener('focusout', () => setTimeout(updateToolbarVis, 80));

/* ============ 分组 ============ */
let sheetTarget = null;
const GPAL = [
  ['#E8EFE4','#5F7E64'],['#EAE7F5','#6C5F8F'],['#F5E8E0','#9A6B4F'],['#E4EDF3','#4F7286'],
  ['#F6E4EA','#B25A76'],['#FBF2D5','#93762A'],['#E0F0ED','#3F8578'],['#ECECEC','#6B6B6B'],
];
function gStyle(name){
  if (GCOLOR[name] != null && GPAL[GCOLOR[name]]) return GPAL[GCOLOR[name]];
  let h = 0; for (const c of name) h += c.charCodeAt(0); return GPAL[h % 4];
}
const ACCENTS = [['#B5483A','#F7E1DC'],['#2F6B64','#E3EDE9'],['#487236','#E8EEDF'],['#4A6C8C','#E3EAF1'],['#7A5C8F','#ECE5F1'],['#9C5A1C','#F3E7CF']];   /* v3.0 围巾红 · 海青 · 羽毛绿 · 屋瓦蓝 · 暮紫 · 灯笼橙 */
function applyAccent(){
  const a = ACCENTS[SET.accent] || ACCENTS[0];
  const r = document.documentElement.style;
  r.setProperty('--accent', a[0]); r.setProperty('--accent-soft', a[1]);
}
function allGroupNames(){
  const s = new Set(extraGroups);
  walk((d, e) => { if (e.groups) e.groups.forEach(g => s.add(g)); });
  return [...s];
}
var TOAST_MUTE = 0;   /* v3.2 发给啾啾时，识别出的钟点由啾啾回话说，不另弹 */
function toast(msg, pose){
  if (TOAST_MUTE) return;
  const t = $('#toast');
  if (pose && JJ[pose]){ t.innerHTML = '<img src="' + JJ[pose] + '" alt="">' + vEsc(msg); t.classList.add('pose'); }   /* v3.0 出错时啾啾挠头 */
  else { t.textContent = msg; t.classList.remove('pose'); }
  t.classList.add('on');
  clearTimeout(t._tm); t._tm = setTimeout(() => t.classList.remove('on'), 1700);
}
function walkPage(date, cb){
  const rec = list => list.forEach(e => { cb(e); if (e.children) rec(e.children); });
  rec(PAGES[date].plan); rec(PAGES[date].flow);
}
/* v2.32 日子从新到旧的顺序缓存起来：页数不变就不重排 */
let WALK_SIG = '', WALK_KEYS = [];
function pagesDesc(){
  const ks = Object.keys(PAGES), sig = ks.join('|');
  if (sig !== WALK_SIG){
    WALK_SIG = sig;
    WALK_KEYS = ks.map(k => { const a = k.split('.'); return [k, (+a[0]) * 10000 + (+a[1]) * 100 + (+a[2])]; }).sort((x, y) => y[1] - x[1]).map(x => x[0]);
  }
  return WALK_KEYS;
}
function walk(cb){ pagesDesc().forEach(d => walkPage(d, e => cb(d, e))); }
function walkWithParent(cb){
  pagesDesc().forEach(k => {
    const rec = (list, parent) => list.forEach(e => { cb(k, e, parent); if (e.children) rec(e.children, e); });
    rec(PAGES[k].plan, null); rec(PAGES[k].flow, null);
  });
}
function editKey(){ return cur.name === 'history' ? cur.date : cur.name === 'day' ? cur.key : TODAY; }
function EP(){
  const k = editKey();
  if (!PAGES[k]) PAGES[k] = {plan:[], flow:[]};
  return PAGES[k];
}
function findEntry(e){
  const search = (list, parent) => {
    for (let i = 0; i < list.length; i++){
      if (list[i] === e) return {list, idx:i, parent};
      if (list[i].children){ const r = search(list[i].children, list[i]); if (r) return r; }
    }
    return null;
  };
  return search(EP().plan, null) || search(EP().flow, null);
}
function removeEntry(e){ const loc = findEntry(e); if (loc) loc.list.splice(loc.idx, 1); }

/* ===== v2.27 小事折叠：模块生出来的行（打卡/足迹/记一笔）不打扰正文 ===== */
let minorOpen = new Set();
function isMinor(e){ return !!(e.ledger || e.nbId || e.meal); }
/* ============ v3.1 手帐和小岛：一条记录只有一个家 ============ */
const ISLE = {
  food:  {n:'美食', h:'海边饭馆', img:'h_food',   who:'阿饱',   g:'美食', tip:'吃了什么、店好不好、三餐'},
  movie: {n:'电影', h:'小岛影院', img:'h_movie',  who:'阿影',   g:'电影', tip:'看过的电影和剧，打分、片单'},
  book:  {n:'阅读', h:'小岛书屋', img:'h_book',   who:'酥酥',   g:'阅读', tip:'读过的书，打分、书单'},
  fun:   {n:'娱乐', h:'温泉汤屋', img:'h_fun',    who:'小卡',   g:'娱乐', tip:'玩的、放松的：KTV、按摩、看展'},
  money: {n:'记账', h:'铜板账房', img:'h_money',  who:'小铜板', tip:'花了多少、花在哪'},
  people:{n:'亲友', h:'小岛茶屋', img:'h_people', who:'团团',   tip:'提到的人、生日和纪念日'},
  notes: {n:'笔记', h:'记事小亭', img:'h_notes',  who:'阿鼠',   tip:'长一点的文字，慢慢写'},
  vault: {n:'密码', h:'秘屋树洞', img:'h_vault',  who:'松松',   tip:'账号密码，加密只存在这台手机'},
  health:{n:'健康', h:'晨露小站', img:'h_health', who:'呦呦', tip:'体重、围度、经期与饮水'},
};
ISLE.abu={n:'自我',h:'岛主小筑',img:'h_abu',who:'阿卜',tip:'出生手记与性格测试'};
const ISLE_ORDER = ['food', 'movie', 'book', 'fun', 'money', 'people', 'notes', 'vault', 'health', 'abu'];
const ISLE_MOD = {food:'meals', money:'ledger', people:'people', notes:'notes', vault:'vault'};
const ISLE_TPL = {food:1, movie:1, book:1, fun:1, money:1};   /* 用这些模板的分组算副线 */
const TPL_PLAIN = {work:1, fun:1, study:1};   /* 没有盘点面板的模板 */
let ISLE_DEF = null, ISLE_LAST = null;
function tplGroupName(t){
  let g = (extraGroups || []).find(x => tplOf(x) === t) || null;
  if (!g) walk((d, e) => { (e.groups || []).forEach(x => { if (!g && tplOf(x) === t) g = x; }); });
  return g;
}
function isleOn(k){
  if (ISLE_MOD[k]) return modOn(ISLE_MOD[k]);
  const o = SET.isle && SET.isle.on;
  if (o && o[k] !== undefined) return !!o[k];
  if (k === 'health' || k === 'abu') return true;   /* 新建筑默认可进入，仍可手动关闭 */
  if (!ISLE_DEF){ ISLE_DEF = {}; ['movie', 'book', 'fun'].forEach(t => ISLE_DEF[t] = !!tplGroupName(t)); }   /* 没设过：有这类分组就开着 */
  return !!ISLE_DEF[k];
}
function islePins(){
  if (SET.isle && SET.isle.pin) return SET.isle.pin.filter(k => ISLE[k]);
  const m = {food:'food', ledger:'money', people:'people', notes:'notes', vault:'vault'};   /* 从以前的四格接过来 */
  return (SET.dtiles || ['cal', 'someday', 'food', 'ledger']).map(x => m[x]).filter(Boolean).slice(0, 4);
}
function houseGroup(k, create){
  if (k === 'food'){ let fg = foodGroupName(); if (!fg && create){ fg = '美食'; if (!extraGroups.includes(fg)) extraGroups.push(fg); } return fg; }
  if (!ISLE[k] || !ISLE[k].g) return null;
  let g = tplGroupName(k);
  if (!g && create){ g = ISLE[k].g; if (!extraGroups.includes(g)) extraGroups.push(g); if (tplOf(g) !== k) SET.gtpl[g] = k; ISLE_DEF = null; }
  return g;
}
function sideHome(e){
  if (!e || e.sym === 'task') return null;
  let k = null;
  if (e.meal) k = 'food';
  else if (e.ledger) k = 'money';
  else if (e.nbId) k = 'notes';
  else for (const g of (e.groups || [])){ const t = tplOf(g); if (ISLE_TPL[t]){ k = t; break; } }
  return k && isleOn(k) ? k : null;
}
function onsenSVG(sz){ return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3.5c-1.2 1.3 1.2 2.4 0 3.8M12 2.5c-1.2 1.3 1.2 2.4 0 3.8M16 3.5c-1.2 1.3 1.2 2.4 0 3.8"/><path d="M3.5 11.5h17c0 4.6-3.8 8.5-8.5 8.5s-8.5-3.9-8.5-8.5z"/></svg>'; }
function isleIcon(k, px, cls){
  const I = ISLE[k];
  if (I && I.img && JJ[I.img]) return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="' + JJ[I.img] + '" alt="" style="width:' + px + 'px;height:' + px + 'px;object-fit:contain;flex:none">';
  return '<span class="ihx" style="width:' + px + 'px;height:' + px + 'px">' + onsenSVG(Math.round(px * .66)) + '</span>';   /* 汤屋还在画，先用简笔 */
}
function isleCur(k){
  if (k === 'food') cur = {name:'food'};
  else if (k === 'money') cur = {name:'ledger'};
  else if (k === 'people') cur = {name:'people'};
  else if (k === 'notes') cur = {name:'notes'};
  else if (k === 'vault') cur = {name:'vault'};
  else if (k === 'health' || k === 'abu') cur = {name:k};
  else cur = {name:'group', g:houseGroup(k, true)};
}
function isleGo(k){ isleCur(k); render(); }
function isleSet(k, on){
  if (ISLE_MOD[k]){
    SET.mods[ISLE_MOD[k]] = on;
    if (k === 'food'){
      if (!on) SET.mealsUserOff = 1;
      else { delete SET.mealsUserOff; if (!foodGroupName() && !extraGroups.includes('美食')) extraGroups.push('美食'); try{ mealAutoTagAll(); }catch(_){ } }
    }
  } else {
    SET.isle = SET.isle || {}; SET.isle.on = SET.isle.on || {}; SET.isle.on[k] = on;
    if (on) houseGroup(k, true);
  }
  if (!on){ SET.isle = SET.isle || {}; SET.isle.pin = islePins().filter(x => x !== k); }
  if(k==='abu'&&on)abuWelcome();
  ISLE_DEF = null; scheduleSave();
  toast(on ? ('「' + ISLE[k].n + '」开了 · 在侧栏的小岛里') : ('「' + ISLE[k].n + '」关了 · ' + (k === 'health' ? '健康记录保留，重新打开即可查看' : '记过的都还在，回到手帐里')));
}
function islePin(k){
  const pins = islePins().slice(), i = pins.indexOf(k);
  if (i >= 0) pins.splice(i, 1);
  else { if (pins.length >= 4){ toast('最多置顶 4 栋 · 先取消一栋'); return false; } pins.push(k); }
  SET.isle = SET.isle || {}; SET.isle.pin = pins; scheduleSave(); return true;
}
/* ---- 写完一行：有把握直接收（能撤回），没把握问一句，什么都不像就留在手帐 ---- */
const ISLE_VID = /抖音|视频|B站|b站|小红书|直播|快手/;
function isleGuess(e){
  const t = String(e.text || '').trim(); if (t.length < 2) return null;
  const pr = parseEntry(e);
  const ttl = pr.title ? canonTitle(pr.title) : null;
  const titled = /《[^》]+》/.test(t) && !(ttl && (SET.isleNoT || {})[ttl]) && !ISLE_VID.test(t);
  const outside = t.replace(/《[^》]*》/g, '');   /* 名字里的字不算证据 */
  const bookish = /读|书|小说|翻完/.test(outside);
  const sig = {
    movie: isleOn('movie') && titled && !bookish && /看|二刷|三刷|补|影院|电影|剧|综艺|片/.test(outside),
    book:  isleOn('book') && titled && bookish,
    fun:   isleOn('fun') && EV_RE.fun.test(t),
    food:  isleOn('food') && EV_RE.eat.test(t),
  };
  const prices = (pr.prices || []).length > 0;
  const two = {
    movie: pr.score != null,
    book:  pr.score != null,
    fun:   !!(pr.verdict || prices || ((pr.withs || []).length && pr.withs[0] !== '独自')),
    food:  !!(pr.store || pr.verdict || prices),
  };
  const cand = ['movie', 'book', 'fun', 'food'].filter(k => sig[k]);
  if (!cand.length) return (isleOn('money') && prices && t.length <= 20) ? {k:'money', sure:false} : null;   /* 只记了一笔钱 */
  if (cand.length === 1 && two[cand[0]]) return {k:cand[0], sure:true};
  return {k:cand[0], alt:cand[1] || null, sure:false};
}
function isleSend(e, k){
  if (k === 'money') e.ledger = 1;
  else { const g = houseGroup(k, true); if (!g) return false; e.groups = e.groups || []; if (!e.groups.includes(g)) e.groups.push(g); }
  delete e.isleAsk; ISLE_LAST = {id:e._id, k, at:Date.now()};
  scheduleSave(); return true;
}
function isleUndo(e){
  const k = ISLE_LAST && ISLE_LAST.k; ISLE_LAST = null;
  if (k === 'money') delete e.ledger;
  else if (k){ const g = houseGroup(k, false); if (g && e.groups) e.groups = e.groups.filter(x => x !== g); }
  e.isleNo = 1; scheduleSave(); render();
}
function isleRoute(e){
  if (!e || !String(e.text || '').trim() || e.sym === 'task' || e.sym === 'mood' || e.userSet || e.isleNo || e.isleAsk) return false;
  if (sideHome(e)) return false;
  const loc = findEntry(e); if (!loc || loc.parent) return false;
  const gs = isleGuess(e); if (!gs) return false;
  if (gs.sure) return isleSend(e, gs.k);
  e.isleAsk = gs.k + (gs.alt ? ',' + gs.alt : ''); scheduleSave(); return true;
}
function isleBack(e, k){   /* 放回手帐：摘掉房子的标记，以后也不再自动收 */
  if (k === 'money') delete e.ledger;
  else e.groups = (e.groups || []).filter(g => !ISLE_TPL[tplOf(g)]);
  e.isleNo = 1; delete e.isleAsk; scheduleSave(); render();
}
function isleNoThanks(e){
  const pr = parseEntry(e);
  if (pr.title && /movie|book/.test(e.isleAsk || '')){ SET.isleNoT = SET.isleNoT || {}; SET.isleNoT[canonTitle(pr.title)] = 1; }   /* 这个名字不是电影 / 书，记住 */
  delete e.isleAsk; e.isleNo = 1; scheduleSave(); render();
}
function isleAskNode(e){
  const ks = String(e.isleAsk || '').split(',').filter(k => ISLE[k] && isleOn(k)); if (!ks.length) return null;
  const d = document.createElement('div'); d.className = 'isle-ask'; d.dataset.eid = e._id;
  d.innerHTML = '<span>像是' + ISLE[ks[0]].n + '</span>' + ks.map((k, i) => '<button class="' + (i ? '' : 'go') + '" data-k="' + k + '">送去' + ISLE[k].n + '</button>').join('') + '<button data-no="1">不用</button>';
  d.querySelectorAll('button').forEach(b => b.onclick = ev => { ev.stopPropagation();
    if (b.dataset.no) isleNoThanks(e); else { isleSend(e, b.dataset.k); render(); } });
  return d;
}
/* ============ 符号 ============ */
function symNode(e){
  const s = document.createElement('span'); s.className = 'sym';
  const st = e.state;
  if (e.sym === 'task'){
    if (st === 'done')      s.innerHTML = '<span class="glyph done">✓</span>';
    else if (st === 'migrated')  s.innerHTML = '<span class="glyph migrated">›</span>';
    else if (st === 'dropped')   s.innerHTML = '<span class="glyph dropped">✕</span>';
    else if (st === 'delegated') s.innerHTML = '<span class="glyph delegated">→</span>';
    else if (st === 'someday')   s.innerHTML = '<span class="glyph someday">☾</span>';
    else s.innerHTML = '<span class="dot"></span>';
  }
  else if (e.sym === 'event') s.innerHTML = '<span class="circle"></span>';
  else if (isThought(e)){ const ic = thIcon(e); s.innerHTML = ic.i ? '<span class="evi">' + ic.i + '</span>' : '<span class="dash"></span>'; }   /* v3.2 随想按内容挑小图标 */
  else if (e.sym === 'note')  s.innerHTML = e.ledger ? '<span class="glyph moneyg">💰</span>'
    : (mealGlyphSlot(e) ? '<span class="glyph meal">🍚</span>' : '<span class="dash"></span>');
  else if (e.sym === 'mood')  s.innerHTML = '<span class="ddash"><i></i><i></i></span>';
  else if (e.sym === 'ask')   s.innerHTML = '<span class="glyph ask">？</span>';
  else if (e.sym === 'bang')  s.innerHTML = '<span class="glyph bang">！</span>';
  return s;
}

/* ============ 逐行智能识别 ============ */
/* 时间/日期识别抽成独立函数：commit 与聪明工具条共用同一套规则，不会两边打架 */
function detectTimeHM(t){ const m = t.match(/([01]?\d|2[0-3])[:：][0-5]\d/); return m ? m[0].replace('：', ':') : null; }
function detectTimeCN(t){
  const cm = t.match(/(上午|早上|中午|下午|晚上)([一二三四五六七八九十两\d]{1,3})点(半|一刻|三刻|(\d{1,2})分)?/);
  if (!cm) return null;
  const M = {'一':1,'二':2,'两':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10,'十一':11,'十二':12};
  let h = /^\d+$/.test(cm[2]) ? +cm[2] : M[cm[2]];
  if (h == null || h > 23) return null;
  if ((cm[1] === '下午' || cm[1] === '晚上') && h < 12) h += 12;
  if (cm[1] === '中午' && h <= 2) h += 12;
  const mi = cm[3] === '半' ? 30 : cm[3] === '一刻' ? 15 : cm[3] === '三刻' ? 45 : (cm[4] ? +cm[4] : 0);
  return String(h).padStart(2, '0') + ':' + String(mi).padStart(2, '0');
}
function detectTime(t){ return detectTimeHM(t) || detectTimeCN(t); }
function detectDue(t){
  const longPlan=planParse(t,dkey(new Date()));if(longPlan)return {key:longPlan.day,hard:false};
  const dm = t.match(/(\d{1,2})\.(\d{1,2})号?/);
  const dmOK = dm && (() => {
    const mo = +dm[1], dy = +dm[2];
    const pre = t[dm.index - 1] || '';
    const post = t.slice(dm.index + dm[0].length, dm.index + dm[0].length + 1);
    return mo >= 1 && mo <= 12 && dy >= 1 && dy <= 31
      && !/[\d.]/.test(pre) && !/[\d元块钱％%折]/.test(post);
  })();
  if (dmOK){
    const ty = parseKey(TODAY).getFullYear();
    let key = ty + '.' + (+dm[1]) + '.' + (+dm[2]);
    if (parseKey(key) < parseKey(TODAY)) key = (ty + 1) + '.' + (+dm[1]) + '.' + (+dm[2]);
    return {key, hard:true};
  }
  let rel = null, mr = null;
  if (/大后天/.test(t)) rel = addDaysK(TODAY, 3);
  else if (/后天/.test(t)) rel = addDaysK(TODAY, 2);
  else if (/明天/.test(t)) rel = TOMORROW;
  else if ((mr = t.match(/下+周([一二三四五六日天])/))) rel = nextWeekWeekday(WKMAP[mr[1]]);
  else if (!/上周/.test(t) && (mr = t.match(/(?:这周|本周|周)([一二三四五六日天])/))) rel = upcomingWeekday(WKMAP[mr[1]]);
  else if ((mr = t.match(/下个?月(\d{1,2})[号日]/))){
    const d = parseKey(TODAY); d.setDate(1); d.setMonth(d.getMonth() + 1); d.setDate(+mr[1]); rel = dkey(d);
  }
  else if (/下个?月/.test(t)){
    const d = parseKey(TODAY); const day = d.getDate(); d.setDate(1); d.setMonth(d.getMonth() + 1);
    const mx = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    d.setDate(Math.min(day, mx)); rel = dkey(d);
  }
  else if ((mr = t.match(/(\d{1,2})月(\d{1,2})[号日]/))){
    const ty = parseKey(TODAY).getFullYear();
    let k = ty + '.' + (+mr[1]) + '.' + (+mr[2]);
    if (parseKey(k) < parseKey(TODAY)) k = (ty + 1) + '.' + (+mr[1]) + '.' + (+mr[2]);
    rel = k;
  }
  return rel ? {key:rel, hard:false} : null;
}
function inPlanTree(e){
  let hit = false;
  const go = list => list.forEach(x => { if (x === e) hit = true; else if (x.children && x.children.length) go(x.children); });
  go(EP().plan); return hit;
}
function commit(e){
  let t = (e.text || '').trim(); let changed = false;
  const gm = t.match(/#([^\s#，。,]{1,12})/g);
  if (gm){
    e.groups = e.groups || [];
    gm.forEach(x => { const g = x.slice(1);
      if (!e.groups.includes(g)){ e.groups.push(g); toast('已归入 #' + g); } });
    t = t.replace(/#[^\s#，。,]{1,12}\s?/g, '').trim();
    e.text = t; changed = true;
  }
  const hm = detectTimeHM(t);
  if (hm && !e.noTime){ if (e.time !== hm){ e.time = hm; changed = true; } }
  else if (!e.time && !e.noTime){
    const cv = detectTimeCN(t);
    if (cv){ e.time = cv; changed = true; toast('已识别时间 ' + cv); }
  }
  const dd2 = detectDue(t);
  if (dd2 && dd2.hard && !e.noDue){
    if (e.due !== dd2.key){ e.due = dd2.key; changed = true; toast('已同步到 ' + fmtKey(dd2.key)); }
  }
  else if (dd2 && !dd2.hard && !e.due && !e.noDue){
    e.due = dd2.key; changed = true;
    toast('已同步到 ' + fmtKey(dd2.key) + '（' + weekCN(dd2.key) + '）');
  }
  if (SET.recog && !e.userSet && t){
    let g = null;
    if (/^(见了|去了|开完|参加了|聊了|吃了|逛了|看了|开了)/.test(t)) g = 'event';
    else if (t.length <= 10 && /(焦虑|开心|难过|平静|烦|累|期待|紧张|兴奋|低落|郁闷|委屈|爽)/.test(t)) g = 'mood';
    else if (/[？?]$/.test(t) && !inPlanTree(e)) g = 'ask';   /* 任务区的问句仍是任务 */
    if (g){
      delete e.defSym;
      if (e.sym !== g){
        e.sym = g; e.state = undefined; changed = true;
        toast('识别为' + ({event:'日常', mood:'随想 · 🌤 心情', ask:'随想 · ❓ 疑问'})[g] + ' · 点行首图标能改');
      }
    }
  }
  if (e.defSym && e.sym === 'event' && e.due){
    e.sym = 'task'; e.state = 'open'; delete e.defSym; changed = true;
  }
  return changed;
}

/* ============ 条目渲染 ============ */
function chipRow(e, editable){
  if (CLEAN_ROWS && !isMinor(e)) return null;   /* v2.31 页面里不挂小签（小事折叠盒里照旧） */
  const hasG = e.groups && e.groups.length;
  let expK = null;
  if (modOn('ledger') && e.text){
    const px = parseEntry(e);
    if (px.prices && px.prices.length) expK = expKindOf(e, px);
  }
  const warn = (modOn('meals') && e.text) ? foodWarn(e) : null;   /* v2.29 又写到避雷过的店 */
  const canSplit = editable && !e.noSplit && e.text && ['event','note','ask','bang'].includes(e.sym)
    && /[。\n]/.test(e.text.trim().replace(/[。\s]+$/, '')) && splitSentences(e.text).length >= 2;   /* v2.29 一段话拆条 */
  const fxs = entryFixes(e);   /* v2.30 听写纠错小标 */
  if (!e.badge && !e.time && !e.due && !hasG && !e.src && !e.srcDay && !e.note && !e.nbId && !e.meal && !expK && !warn && !canSplit && !fxs.length) return null;
  const c = document.createElement('div'); c.className = 'chips';
  if (e.meal && MEAL_WORD[e.meal]){
    const mb = document.createElement('span'); mb.className = 'badge';
    mb.textContent = '🍚 ' + MEAL_WORD[e.meal]; c.appendChild(mb);
  }
  if (expK){
    const xb = document.createElement('span'); xb.className = 'badge';
    xb.textContent = '💰 ' + expLabel(expK); xb.style.cursor = 'pointer';
    xb.onclick = ev => { ev.stopPropagation(); expSheet(e); };
    c.appendChild(xb);
  }
  if (hasG) e.groups.forEach(g => {
    const b = document.createElement('span'); b.className = 'badge';
    const [bg, fg] = gStyle(g); b.style.background = bg; b.style.color = fg;
    b.textContent = (tplOf(g) === 'food' ? '🍚 ' : '#') + g; c.appendChild(b);
  });
  if (e.badge){ const b = document.createElement('span'); b.className = 'badge'; b.textContent = e.badge; c.appendChild(b); }
  if (e.srcDay){
    const b = document.createElement('span'); b.className = 'badge acc';
    b.textContent = '◂ ' + fmtShort(e.srcDay) + ' 转来';
    b.style.cursor = 'pointer';
    b.onclick = ev => { ev.stopPropagation(); jumpToEntry(e.srcDay, e.srcId); };
    c.appendChild(b);
  } else if (e.src){
    const b = document.createElement('span'); b.className = 'badge';
    b.textContent = '◂ ' + String(e.src).slice(0, 12); c.appendChild(b);
  }
  if (e.note){
    const b = document.createElement('span'); b.className = 'badge';
    b.textContent = '✎ ' + String(e.note).slice(0, 14); c.appendChild(b);
  }
  if (e.time){
    const b = document.createElement('span'); b.className = 'badge'; b.textContent = '⏰ ' + e.time;
    if (editable){ b.style.cursor = 'pointer'; b.onclick = ev => { ev.stopPropagation(); openTimeSheet(e); }; }
    c.appendChild(b);
  }
  if (e.due){
    const b = document.createElement('span'); b.className = 'badge acc'; b.textContent = '→' + fmtShort(e.due);
    b.style.cursor = 'pointer';
    if (editable){ b.onclick = ev => { ev.stopPropagation(); openDueSheet(e); }; }
    else { b.onclick = ev => { ev.stopPropagation(); gotoDay(e.due); }; }
    c.appendChild(b);
  }
  if (e.nbId){
    const b = document.createElement('span'); b.className = 'badge acc'; b.textContent = '📓 翻开';
    b.style.cursor = 'pointer';
    b.onclick = ev => { ev.stopPropagation();
      if (noteById(e.nbId)){ cur = {name:'note', id:e.nbId}; render(); }
      else toast('这个本子已经删掉了'); };
    c.appendChild(b);
  }
  if (warn){
    const b = document.createElement('span'); b.className = 'badge warn'; b.textContent = warn.txt; b.style.cursor = 'pointer';
    b.onclick = ev => { ev.stopPropagation(); const op = warn.o.op; jumpToEntry(op.k, op.e._id || (op.e._id = ++uid)); };
    c.appendChild(b);
  }
  if (canSplit){
    const n = splitSentences(e.text).length;
    const b = document.createElement('span'); b.className = 'badge acc'; b.textContent = '✂ 拆成 ' + n + ' 条'; b.style.cursor = 'pointer';
    b.onclick = ev => { ev.stopPropagation(); splitEntry(e); };
    const x = document.createElement('span'); x.className = 'badge'; x.textContent = '不拆'; x.style.cursor = 'pointer';
    x.onclick = ev => { ev.stopPropagation(); e.noSplit = 1; scheduleSave(); render(); };
    c.appendChild(b); c.appendChild(x);
  }
  fxs.forEach(f => {
    const b = document.createElement('span'); b.className = 'badge acc vo-fixb'; b.textContent = '「' + f.from + '」→ ' + f.to + ' ↺';
    b.onclick = ev => { ev.stopPropagation(); voUndoFix(e, f); };
    c.appendChild(b);
  });
  return c;
}
function growTA(t){ if (!t || !t.isConnected) return; t.style.height = 'auto'; t.style.height = t.scrollHeight + 'px'; }
function entryNode(e, editable, isChild, flat, liveSym, inJournal){
  e._id = e._id || (++uid);
  const wrap = document.createElement('div');
  wrap.dataset.eid = e._id;
  const row = document.createElement('div');
  row.className = 'entry ' + e.sym + ' ' + (e.state || '');
  const s = symNode(e);
  if (e.sym === 'event' && !isMinor(e)){ const ic = evIcon(e); if (ic.i) s.innerHTML = '<span class="evi">' + ic.i + '</span>'; }   /* v2.31 发生的事用图标 */
  if (CLEAN_ROWS && e.text && modOn('meals') && !isMinor(e) && foodWarn(e)){ const wd = document.createElement('i'); wd.className = 'wdot'; s.appendChild(wd); }
  if ((editable || liveSym) && e.sym === 'task'){
    let lpTimer = null, lpFired = false;
    s.addEventListener('pointerdown', () => {
      lpFired = false;
      lpTimer = setTimeout(() => { lpFired = true; readingGuideDone('Task'); qsTarget = e; openQSheet(); }, 450);
    });
    s.addEventListener('pointerup', () => clearTimeout(lpTimer));
    s.addEventListener('pointerleave', () => clearTimeout(lpTimer));
    s.addEventListener('click', () => {
      if (lpFired){ lpFired = false; return; }
      if (e.state === 'open'){
        snapshot('处理任务');
        e.state = 'done'; e.doneDay = TODAY; cycOnDone(e); render();
        if (e.pick) pickDone(e); else journalCompleted(e);
      } else if (e.state === 'done'){
        e.state = 'open'; delete e.doneDay; delete e.finishedTime; toast('恢复任务'); render();
      } else { qsTarget = e; openQSheet(); }
    });
    s.title = '点按完成 · 长按处理';
  } else if (CLEAN_ROWS && (editable || liveSym)){   /* v2.31 点符号：这一行的细节小卡 */
    s.classList.add('tapme'); s.title = '点一下看这一行';
    s.addEventListener('click', ev => { ev.stopPropagation(); openRowPop(e, s); });
  } else s.classList.add('static');
  if (editable){
    let rpT = null, sx = 0, sy = 0;
    row.addEventListener('pointerdown', ev => {
      if (e.sym === 'task' && ev.target.closest('.sym')) return;      /* 任务符号长按留给处理面板 */
      if (ev.target.classList && ev.target.classList.contains('line-input') && document.activeElement === ev.target) return; /* 正在编辑不劫持 */
      sx = ev.clientX; sy = ev.clientY;
      clearTimeout(rpT);
      rpT = setTimeout(() => {
        try{ if (ev.target.blur) ev.target.blur(); }catch(_){ }
        dismissKB(); openShare(shEntryPayload(e));
      }, 550);
    });
    row.addEventListener('pointermove', ev => {
      if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 12) clearTimeout(rpT);
    });
    row.addEventListener('pointerup', () => clearTimeout(rpT));
    row.addEventListener('pointerleave', () => clearTimeout(rpT));
  }
  const body = document.createElement('div'); body.className = 'entry-body';
  if (editable){
    const inp = document.createElement('textarea');
    inp.className = 'line-input'; inp.rows = 1; inp.value = e.text; inp.dataset.eid = e._id;
    inp.setAttribute('autocomplete', 'off');
    requestAnimationFrame(() => growTA(inp));
    inp.addEventListener('input', () => { e.text = inp.value; growTA(inp); updateTagSug(e, inp); updateRecall(e, inp); smartBarUpd(e); keepAboveKeyboard(inp); });
    inp.addEventListener('focus', () => { focusRef = e; pendingDel = null; inp._t0 = e.text; });
    inp.addEventListener('keydown', ev => {
      if (ev.isComposing) return;
      if (ev.key === 'Enter'){
        ev.preventDefault(); $('#tagSug').classList.remove('on'); commit(e);
        const loc = findEntry(e); if (!loc) return;
        if (!e.text.trim()){
          if (loc.parent){
            loc.list.splice(loc.idx, 1);
            const ploc = findEntry(loc.parent);
            const pe = Object.assign({text:'', _id:++uid}, defFor(ploc.list));
            ploc.list.splice(ploc.idx + 1, 0, pe);
            focusRef = pe; render();
          }
          return;
        }
        const sent = !loc.parent && isleRoute(e) && !!sideHome(e);   /* v3.1 收进岛上的房子了：下一行在手帐里另起，不挂在它下面 */
        let ne;
        if (sent){
          ne = Object.assign({text:'', _id:++uid}, defFor(loc.list));
          loc.list.splice(loc.idx + 1, 0, ne);
        } else if (!loc.parent && isThought(e)){   /* v3.3.2 随想里回车：下一行还是随想 */
          ne = {sym:'note', userSet:true, noDue:1, text:'', _id:++uid};
          loc.list.splice(loc.idx + 1, 0, ne);
        } else if (!loc.parent && e.sym === 'event'){
          ne = {sym:'task', state:'open', text:'', _id:++uid};
          (e.children = e.children || []).push(ne); e.collapsed = false;
        } else if (loc.parent){
          ne = {sym:'task', state:'open', text:'', _id:++uid};
          loc.list.splice(loc.idx + 1, 0, ne);
        } else {
          ne = Object.assign({text:'', _id:++uid}, defFor(loc.list));
          loc.list.splice(loc.idx + 1, 0, ne);
        }
        focusRef = ne; render();
      }
      if (ev.key === 'Backspace' && !inp.value){
        ev.preventDefault();
        if (e.images && e.images.length){
          snapshot('删除图片'); e.images.pop(); if (e.imgt) e.imgt.pop();
          toast('已删除 1 张图片 · 可撤回'); render(); return;
        }
        snapshot('删除行'); removeEntry(e);
        if (focusRef === e) focusRef = null; render();
      }
    });
    inp.addEventListener('blur', () => {
      setTimeout(() => { $('#recall').classList.remove('on'); }, 250);
      setTimeout(() => {
        if (!inp.isConnected) return;
        const changed = commit(e);
        if (inp._t0 != null && inp._t0 !== e.text){   /* v2.30 把名字改成听起来一样的熟人 / 熟店 → 词典记住 */
          const L = dictLearnEdit(inp._t0, e.text); inp._t0 = e.text;
          if (L && L.from) toast('记住了：「' + L.from + '」就是「' + L.to + '」，以后自动改');
          else if (L && L.no) toast('好，以后不把「' + L.no + '」改成「' + L.to + '」');
        }
        const keep = (e.images && e.images.length) || (e.children && e.children.length) || e._imgPending
          || (sheetTarget === e && $('#gsheet').classList.contains('on'));
        if (!e.text.trim() && !keep){ removeEntry(e); if (focusRef === e) focusRef = null; render(); return; }
        const routed = isleRoute(e);   /* v3.1 */
        if (changed || routed) render();
      }, 60);
    });
    const wn = CLEAN_ROWS && (!inJournal || e.sym === "task") ? whenNode(e, true) : null;   /* v2.31 时间 / 日子写在字前面 */
    if (wn){ const ln = document.createElement('div'); ln.className = 'e-line'; ln.appendChild(wn); ln.appendChild(inp); body.appendChild(ln); }
    else body.appendChild(inp);
  } else {
    const tx = document.createElement('div'); tx.className = 'entry-text'; tx.textContent = e.text;
    const wn = CLEAN_ROWS ? whenNode(e, false) : null;
    if (wn){ const ln = document.createElement('div'); ln.className = 'e-line'; ln.appendChild(wn); ln.appendChild(tx); body.appendChild(ln); }
    else body.appendChild(tx);
  }
  if(inJournal && isChild && (e.sym!=="task" || e.state==="done")){
    const clock=document.createElement('div');clock.className='journal-child-time';
    clock.appendChild(journalTimeButton(e));body.appendChild(clock);
  }
  const chips = chipRow(e, editable); if (chips) body.appendChild(chips);
  if (e.images && e.images.length){
    const tw = document.createElement('div'); tw.className = 'thumbs';
    e.images.forEach((src, idx) => {
      const im = document.createElement('img');
      im.src = imgUrl((e.imgt && e.imgt[idx]) || src);
      if (im.src === IMG_BLANK && IMG_DB.ready){ im.classList.add('lost'); im.title = '这张照片找不到了'; }
      im.loading = 'lazy'; im.decoding = 'async';
      im.onclick = ev => { ev.stopPropagation(); openLightbox(e, idx, editable); };
      tw.appendChild(im);
    });
    body.appendChild(tw);
  }
  row.appendChild(s); row.appendChild(body);
  if (!isChild){
    const hasKids = e.children && e.children.length;
    const rt = document.createElement('div'); rt.className = 'rowtools';
    if (hasKids){
      const kp = document.createElement('button'); kp.className = 'kidpill';
      kp.textContent = (e.collapsed ? '▸ ' : '▾ ') + e.children.length;
      kp.onclick = ev => { ev.stopPropagation(); e.collapsed = !e.collapsed; render(); };
      rt.appendChild(kp);
    }
    if (editable && e.sym === 'event' && !CLEAN_ROWS){   /* v2.31 页面里「＋」收进点符号的小卡 */
      const ab = document.createElement('button'); ab.className = 'addchild'; ab.textContent = '＋';
      ab.title = '在这件事下记一笔';
      ab.onclick = ev => { ev.stopPropagation();
        const ne = {sym:'task', state:'open', text:'', _id:++uid};
        (e.children = e.children || []).push(ne); e.collapsed = false;
        focusRef = ne; render(); };
      rt.appendChild(ab);
    }
    if (rt.children.length) row.appendChild(rt);
  }
  wrap.appendChild(row);
  if (e.children && e.children.length && !e.collapsed && !flat){
    const c = document.createElement('div'); c.className = 'children';
    e.children.forEach(ch => c.appendChild(entryNode(ch, editable, true, false, false, inJournal)));
    wrap.appendChild(c);
  }
  readingGuide(wrap,s,e);
  return wrap;
}
function gotoDay(k){
  if (k === TODAY) cur = {name:'today'};
  else if (parseKey(k) < parseKey(TODAY)){
    if (!PAGES[k]) PAGES[k] = {plan:[], flow:[]};
    cur = {name:'history', date:k};
  } else cur = {name:'day', key:k};
  render();
}
function jumpToEntry(date, id){
  if (PAGES[date]){
    let hit = null;
    walkPage(date, e => { if (e._id === id) hit = e; });
    if (hit && (isMinor(hit) || sideHome(hit))) minorOpen.add(date);   /* 目标在小事折叠 / 岛上那一行里 → 自动展开 */
  }
  gotoDay(date);
  setTimeout(() => {
    const el = view.querySelector('[data-eid="' + id + '"]');
    if (el){
      try{ el.scrollIntoView({block:'center'}); }catch(_){}
      el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 1700);
    }
  }, 80);
}
function sectionLabel(t){ const d = document.createElement('div'); d.className = 'section-label'; d.textContent = t; return d; }
function jumpRow(date, e){   /* v3.3.2 房子、汇总、搜索里的一条：点字就地改，点行首图标看小卡；去那天点上面的日子 */
  const w = document.createElement('div');
  w.appendChild(entryNode(e, false, true, true, true));
  const tx = w.querySelector('.entry-text');
  if (tx){ tx.style.cursor = 'text'; tx.onclick = ev => { ev.stopPropagation(); inplaceEdit(tx, e); }; }
  const sy = w.querySelector('.sym.static');
  if (sy && e.sym !== 'task'){ sy.classList.remove('static'); sy.classList.add('tapme'); sy.onclick = ev => { ev.stopPropagation(); openRowPop(e, sy); }; }
  if (e.state === 'done' && e.doneDay && e.doneDay !== date){
    const body = w.querySelector('.entry-body');
    if (body){ const c = document.createElement('div'); c.className = 'chips';
      c.innerHTML = '<span class="badge acc">✓ ' + fmtShort(e.doneDay) + ' 清账</span>';
      body.appendChild(c); }
  }
  return w;
}
function inplaceEdit(tx, e){   /* v3.3.2 就地改：回车或点别处就存，改完留在原处 */
  if (!tx || !tx.isConnected) return;
  const t0 = e.text || '';
  const ta = document.createElement('textarea'); ta.className = 'line-input inplace'; ta.rows = 1; ta.value = t0; ta.setAttribute('autocomplete', 'off');
  tx.replaceWith(ta); growTA(ta);
  try{ ta.focus(); const n = ta.value.length; ta.setSelectionRange(n, n); }catch(_){ }
  keepAboveKeyboard(ta);
  let done = false;
  const finish = () => {
    if (done) return; done = true;
    const v = ta.value.trim();
    if (v && v !== t0){
      snapshot('改一条'); e.text = v; scheduleSave();
      let L = null; try{ L = dictLearnEdit(t0, v); }catch(_){ }
      toast(L && L.from ? '记住了：「' + L.from + '」就是「' + L.to + '」，以后自动改' : '改好了');
    } else if (!v) toast('空着就不改了 · 要删这条，去那天删');
    const a = document.activeElement;
    if (!ta.isConnected || (a && a !== ta && a.classList && a.classList.contains('inplace'))){   /* 又点了另一条：这条只换回字，不重画 */
      if (ta.isConnected){ const nt = document.createElement('div'); nt.className = 'entry-text'; nt.textContent = e.text; nt.style.cursor = 'text';
        nt.onclick = ev => { ev.stopPropagation(); inplaceEdit(nt, e); }; ta.replaceWith(nt); }
      return;
    }
    const st = view.scrollTop; render(); view.scrollTop = st;
  };
  ta.addEventListener('input', () => { growTA(ta); keepAboveKeyboard(ta); });
  ta.addEventListener('keydown', ev => {
    if (ev.isComposing) return;
    if (ev.key === 'Enter' && !ev.shiftKey){ ev.preventDefault(); ta.blur(); }
    else if (ev.key === 'Escape'){ ta.value = t0; ta.blur(); }
  });
  ta.addEventListener('blur', () => setTimeout(finish, 40));
}
view.addEventListener('click', ev => {   /* v3.3.2 记录列表里的日子：点一下去那天 */
  const g = ev.target && ev.target.closest ? ev.target.closest('.date-group[data-day]') : null;
  if (g){ ev.stopPropagation(); minorOpen.add(g.dataset.day); gotoDay(g.dataset.day); }   /* 从房子里过去：那天「在岛上」那一行先展开 */
});
/* v2.32 长列表先画最近 120 条，底下「再往前」接着画（记在 cur.lim，返回时还在原处） */
const LIST_STEP = 120;
function pagedList(box, items, one){
  let shown = 0, lastDate = null;
  const more = document.createElement('button'); more.className = 'more-btn';
  const step = n => {
    const frag = document.createDocumentFragment(), end = Math.min(items.length, shown + n);
    for (; shown < end; shown++){
      const h = items[shown];
      if (h.date !== lastDate){ lastDate = h.date;
        const g = document.createElement('div'); g.className = 'date-group'; g.dataset.day = h.date; g.textContent = dayGroupTitle(h.date); frag.appendChild(g); }
      frag.appendChild(one(h));
    }
    if (more.isConnected) box.insertBefore(frag, more); else box.appendChild(frag);
    const left = items.length - shown;
    if (left > 0){ more.textContent = left > LIST_STEP ? '再往前 ' + LIST_STEP + ' 条 · 还有 ' + left + ' 条' : '再往前 ' + left + ' 条'; if (!more.isConnected) box.appendChild(more); }
    else if (more.isConnected) more.remove();
  };
  more.onclick = () => { step(LIST_STEP); cur.lim = shown; navPrevLim = shown; };
  step(Math.max(LIST_STEP, cur.lim || 0));
  return items.length;
}
function dateGroupList(box, filter){
  const hits = [];
  walk((date, e) => { if (filter(e)) hits.push({date, e}); });
  const ids = new Set(hits.map(h => h.e._id));
  const superseded = new Set();
  hits.forEach(h => { if (h.e.srcId && ids.has(h.e.srcId)) superseded.add(h.e.srcId); });
  const shown = hits.filter(h => !(superseded.has(h.e._id) && h.e.state === 'migrated'));
  return pagedList(box, shown, h => jumpRow(h.date, h.e));
}
function tapZone(text, big, onTap, pen){
  const z = document.createElement('div'); z.className = 'tapzone' + (big ? ' big' : '');
  if (pen){
    z.innerHTML = '<svg class="penicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg><span>' + text + '</span>';
  } else z.textContent = text;
  z.addEventListener('click', onTap); return z;
}
function secPh(text, onTap){   /* v3.3.2 空着的一栏：一行浅色字，点了直接在这一栏写 */
  const z = document.createElement('div'); z.className = 'sec-ph';
  z.innerHTML = '<i>＋</i><span>' + vEsc(text) + '</span>';
  z.addEventListener('click', onTap); return z;
}
function secWrite(date, kind){   /* 写在哪一栏就是哪一栏：待办照旧认日子、钟点；日常、随想不认日子 */
  const p = PAGES[date] || (PAGES[date] = {plan:[], flow:[]});
  const ne = kind === 'task' ? {sym:'task', state:'open', userSet:true, text:'', _id:++uid} : {sym:kind, userSet:true, noDue:1, text:'', _id:++uid};
  (kind === 'task' ? p.plan : p.flow).push(ne); focusRef = ne; render();
}
function defFor(list){
  return (list === EP().flow) ? {sym:'event', defSym:true} : {sym:'task', state:'open'};
}
function addLine(list){
  const ne = Object.assign({text:'', _id:++uid}, defFor(list));
  list.push(ne); focusRef = ne; render();
  if (list === EP().plan){
    const n = EP().plan.filter(x => x.sym === 'task' && x.state === 'open').length;
    if (n >= 8) toast('已经第 ' + n + ' 件了——真的都是今天吗？');
  }
}
function renderPageInto(box, date, editable){
  const p = PAGES[date];
  if (p.stamp){
    const st0 = document.createElement('div'); st0.className = 'tp-more'; st0.style.textAlign = 'center'; st0.style.padding = '2px 0 0';
    st0.textContent = '🔖 ' + p.stamp + ' 的一天'; st0.onclick = () => stampSheet(date);
    box.appendChild(st0);
  }
  CLEAN_ROWS = true;   /* v2.31 页面里行下不挂小签，细节点符号看 */
  try{
    /* ① 待办（流水里带日子转成的任务也算这一档） */
    const flowTasks = p.flow.filter(e => e.sym === 'task' && !isMinor(e));
    const tasks = p.plan.concat(flowTasks);
    const iso=key2iso(date);
    const staged=stagePlans().filter(p=>stageHasTask(p,iso));
    const nOpen = staged.filter(p=>!stageTaskDone(p,iso)).length + tasks.filter(e => e.sym === 'task' && e.state === 'open').length;
    box.appendChild(secHead('待办', nOpen, !tasks.length, null));   /* v3.2 新的都从底下发给啾啾 */
    tasks.filter(e => !e.state || e.state === 'open').concat(tasks.filter(e => e.state && e.state !== 'open')).forEach(e => box.appendChild(entryNode(e, editable)));   /* v3.1 没做完的在前 */
    for(const p of staged)stageHomeRow(box,p,iso);
    if (editable && !tasks.length && !staged.length) box.appendChild(secPh('写一件要做的事', () => secWrite(date, 'task')));   /* v3.3.2 */
    if (date === TODAY && !staged.some(p=>!stageTaskDone(p,iso)) && tasks.some(e => e.sym === 'task' && e.state === 'done') && !tasks.some(e => e.sym === 'task' && e.state === 'open')){
      const ad = document.createElement('div'); ad.className = 'alldone';   /* v3.0 */
      ad.innerHTML = '<img src="' + JJ.happy + '" alt="">今天完成了 ' + tasks.filter(e => e.sym === 'task' && e.state === 'done').length + ' 件，待办清空了'; box.appendChild(ad);
    }
    if (editable && date === TODAY && !tasks.length){   /* v2.28 储备：只是一行小字，想做时再捞；v3.3.4 待办里有东西时不出来 */
      let sdN = 0; walk((k2, x) => { if (x.sym === 'task' && x.state === 'someday') sdN++; });
      if (sdN){
        const pl = document.createElement('div'); pl.className = 'pool-line';
        pl.textContent = '☾ 储备 · ' + sdN + ' 件 · 想做哪件捞回来 ›';
        pl.onclick = () => { cur = {name:'agg', key:'someday'}; render(); };
        box.appendChild(pl);
      }
    }
    if (p.voOut && p.voOut.length){ const vo = voOutNode(p.voOut); if (vo) box.appendChild(vo); }   /* v2.30 放到别的日子的（v3.2 挪到待办下面） */
    if (editable && date === TODAY && obLandOn()) box.appendChild(obSlipNode());   /* v3.3 上岛那天：啾啾送来一张纸条 */
    const majors = [], minors = [], thoughts = [], sides = [];
    p.flow.forEach(e => {
      if (sideHome(e)) sides.push(e);   /* v3.1 副线住在岛上 */
      else if (isMinor(e)) minors.push(e);
      else if (e.sym === 'task') return;
      else if (isThought(e)) thoughts.push(e);   /* v3.2 心情并进随想；手写的饭句留在日常 */
      else majors.push(e);
    });
    /* ② 日常 */

    const withAsk = e => { box.appendChild(entryNode(e, editable)); if (editable && e.isleAsk){ const a = isleAskNode(e); if (a) box.appendChild(a); } };
    journalRender(box,date,editable,majors,sides,minors);
    if (minors.length){
      const meals2 = minors.filter(e => e.meal);
      const skips2 = meals2.filter(e => /^没(有)?吃$/.test((e.text || '').trim()));
      const nbs2 = minors.filter(e => e.nbId && !e.meal);
      const lgs2 = minors.filter(e => e.ledger);
      const segs = [];
      if (meals2.length) segs.push('🍚 ' + (skips2.length === meals2.length ? '没吃×' + meals2.length : '三餐×' + meals2.length));
      if (nbs2.length) segs.push('📓 本子×' + nbs2.length);
      if (lgs2.length) segs.push('💰 记账×' + lgs2.length);
      const open = minorOpen.has(date);
      const strip = document.createElement('div'); strip.className = 'minor-strip';
      strip.innerHTML = '⚙ <b>' + (date === TODAY ? '今日' : '这天') + '小事 · ' + minors.length + ' 条</b>'
        + '<span class="ms-segs">' + segs.join(' · ') + '</span>'
        + '<span class="ms-ar">' + (open ? '▴ 收起' : '▾ 展开') + '</span>';
      strip.onclick = () => { if (open) minorOpen.delete(date); else minorOpen.add(date); render(); };
      box.appendChild(strip);
      if (open){
        const mb2 = document.createElement('div'); mb2.className = 'minor-box';
        minors.forEach(e => mb2.appendChild(entryNode(e, editable)));
        const cap = document.createElement('div'); cap.className = 'minor-cap';
        cap.textContent = '模块打卡、本子足迹、记的账都收在这 · 每条照旧能改能删';
        mb2.appendChild(cap);
        box.appendChild(mb2);
      }
    }
    /* ③ 随想（灵感、学到、疑问、重点、心情） */
    box.appendChild(secHead('随想', thoughts.length, !thoughts.length, null));
    thoughts.forEach(withAsk);
    if (editable && !thoughts.length) box.appendChild(secPh(date === TODAY && obLandOn() ? '冒出来的念头、此刻的心情' : '冒出来的念头', () => secWrite(date, 'note')));   /* v3.3.2 */
    /* ⑤ v3.1 这天在岛上：副线只占一行，点开能看能改 */
    if (sides.length){
      const cnt = {}; sides.forEach(e => { const k = sideHome(e); cnt[k] = (cnt[k] || 0) + 1; });
      const ks = ISLE_ORDER.filter(k => cnt[k]);
      const open = minorOpen.has(date);
      const li = document.createElement('div'); li.className = 'isle-line'; li.id = 'isleLine';
      li.innerHTML = '<div class="r1"><b>' + (date === TODAY ? '今天在岛上' : '这天在岛上') + '</b><span>· ' + sides.length + ' 条</span><span class="ar">' + (open ? '收起 ▴' : '展开 ▾') + '</span></div><div class="ihs">'
        + ks.map(k => '<span class="ih" data-isle="' + k + '">' + isleIcon(k, 22) + ISLE[k].n + ' ' + cnt[k] + '</span>').join('') + '</div>';
      li.onclick = () => { if (open) minorOpen.delete(date); else minorOpen.add(date); render(); };
      box.appendChild(li);
      const fl = (ISLE_LAST && Date.now() - ISLE_LAST.at < 20000) ? sides.find(e => e._id === ISLE_LAST.id) : null;
      if (fl){
        const f = document.createElement('div'); f.className = 'isle-flash'; f.id = 'isleFlash';
        f.innerHTML = '<span>刚收进「' + ISLE[ISLE_LAST.k].n + '」：' + vEsc(String(fl.text)) + '</span><button>撤回</button>';
        f.querySelector('button').onclick = ev => { ev.stopPropagation(); isleUndo(fl); };
        box.appendChild(f);
      }
      if (open){
        const bx = document.createElement('div'); bx.className = 'isle-box';
        ks.forEach(k => {
          const hd = document.createElement('div'); hd.className = 'isle-sub'; hd.dataset.isle = k;
          hd.innerHTML = isleIcon(k, 20) + '<span>' + ISLE[k].n + ' · ' + cnt[k] + '</span><span class="go">去' + ISLE[k].h + ' ›</span>';
          hd.onclick = () => isleGo(k);
          bx.appendChild(hd);
          sides.filter(e => sideHome(e) === k).forEach(e => bx.appendChild(entryNode(e, editable)));
        });
        box.appendChild(bx);
      }
    }
  } finally { CLEAN_ROWS = false; }
}

/* ============ 汇总 ============ */
const AGG = {
  task:      {title:'• 待办',   tip:'所有没做完的待办（跨日期）', f:e => e.sym === 'task' && e.state === 'open'},
  event:     {title:'○ 日常',   tip:'发生过的事',                 f:e => e.sym === 'event'},
  note:      {title:'— 随想',   tip:'灵感、学到的和备注 · 记事小亭的「随想」页签能按图标翻', f:e => e.sym === 'note' && isThought(e)},
  mood:      {title:'🌤 心情',   tip:'情绪轨迹',                   f:e => e.sym === 'mood'},
  ask:       {title:'❓ 疑问',  tip:'还没弄清的事 · 想明白了点这行改符号', f:e => e.sym === 'ask'},
  bang:      {title:'❗ 重点',  tip:'被你标了重点的句子',          f:e => e.sym === 'bang'},
  done:      {title:'✓ 已完成', tip:'成就流水',                   f:e => e.state === 'done'},
  delegated: {title:'→ 等待中', tip:'已转交，按跟进日提醒',        f:e => e.state === 'delegated'},
  someday:   {title:'☾ 储备', tip:'没做完的、先放着的都在这 · 不催不计数 · 想做哪件点「⤴ 今天做」', f:e => e.sym === 'task' && e.state === 'someday'},
  dropped:   {title:'✕ 不做了', tip:'放弃归档',                   f:e => e.state === 'dropped'},
};

/* ============ 总日历 ============ */
const WD_CN = ['日','一','二','三','四','五','六'];
function calMarks(y, m){
  const marks = {};
  Object.keys(PAGES).forEach(k => {
    const a = k.split('.').map(Number);
    if (a[0] !== y || a[1] !== m) return;
    let n = 0; walkPage(k, () => n++);
    if (n) marks[a[2]] = {rec:n, fut:false};
  });
  walk((d, e) => {
    if (!e.due || e.state === 'done' || e.state === 'dropped') return;
    const a = e.due.split('.').map(Number);
    if (a[0] === y && a[1] === m){ marks[a[2]] = marks[a[2]] || {rec:0}; marks[a[2]].fut = true; }
  });
  if ((SET.cycles || []).length){
    const days = new Date(y, m, 0).getDate();
    const tK = parseKey(TODAY);
    for (let dd = 1; dd <= days; dd++){
      const k = y + '.' + m + '.' + dd;
      if (parseKey(k) <= tK) continue;
      if (SET.cycles.some(c => cycHits(c, k))){ marks[dd] = marks[dd] || {rec:0}; marks[dd].fut = true; }
    }
  }
  return marks;
}
function renderCal(){
  const y = cur.y, m = cur.m;
  const ta = TODAY.split('.').map(Number);
  const head = document.createElement('div'); head.className = 'cal-head';
  const prev = document.createElement('button'); prev.className = 'icon-btn'; prev.textContent = '‹';
  prev.onclick = () => { cur.m--; if (cur.m < 1){ cur.m = 12; cur.y--; } render(); };
  const next = document.createElement('button'); next.className = 'icon-btn'; next.textContent = '›';
  next.onclick = () => { cur.m++; if (cur.m > 12){ cur.m = 1; cur.y++; } render(); };
  const tt = document.createElement('div'); tt.className = 'cal-title'; tt.textContent = y + '年' + m + '月';
  head.appendChild(prev); head.appendChild(tt); head.appendChild(next); view.appendChild(head);
  const grid = document.createElement('div'); grid.className = 'cal-grid';
  ['一','二','三','四','五','六','日'].forEach(w => {
    const d = document.createElement('div'); d.className = 'cal-wd'; d.textContent = w; grid.appendChild(d);
  });
  const offset = (new Date(y, m - 1, 1).getDay() + 6) % 7;
  const days = new Date(y, m, 0).getDate();
  for (let i = 0; i < offset; i++) grid.appendChild(document.createElement('div'));
  const marks = calMarks(y, m);
  for (let d = 1; d <= days; d++){
    const cell = document.createElement('div'); cell.className = 'cal-day'; cell.dataset.day = d;
    if (y === ta[0] && m === ta[1] && d === ta[2]) cell.classList.add('today');
    const num = document.createElement('div'); num.className = 'num'; num.textContent = d; cell.appendChild(num);
    const dots = document.createElement('div'); dots.className = 'dots';
    const mk = marks[d];
    if (mk){
      const n = mk.rec >= 7 ? 3 : mk.rec >= 4 ? 2 : mk.rec >= 1 ? 1 : 0;
      for (let i = 0; i < n; i++) dots.appendChild(document.createElement('i'));
      if (mk.fut){ const f = document.createElement('i'); f.className = 'fut'; dots.appendChild(f); }
    }
    cell.appendChild(dots);
    cell.onclick = () => gotoDay(y + '.' + m + '.' + d);
    grid.appendChild(cell);
  }
  view.appendChild(grid);
  const lg = document.createElement('div'); lg.className = 'cal-legend';
  lg.innerHTML = '<span><i></i>有记录</span><span><i class="fut"></i>有安排</span><span>空白 = 没有记录</span>';
  view.appendChild(lg);
  const tip = document.createElement('div'); tip.className = 'readonly-tip';
  tip.textContent = '点过去的日子翻记录，点未来的日子看安排';
  tip.style.marginTop = '22px'; view.appendChild(tip);
}

/* ============ 视图渲染 ============ */
function renderGroupBody(){
    const tpl = tplOf(cur.g);
    if (!cur.rngSel) cur.rngSel = tpl === 'food' ? 'all' : 'year';
    if (tpl === 'food') renderFoodOverview();
    else {
    const tabs = document.createElement('div'); tabs.className = 'rp-tabs'; tabs.style.marginTop = '16px';
    const canRec = tpl === 'movie' || tpl === 'book' || tpl === 'fun' || tpl === 'food';
    if (canRec){   /* v3.1 房子里记一条，哪天的事记哪天 */
      const ad1 = document.createElement('button'); ad1.className = 'chip on'; ad1.id = 'rcAdd'; ad1.textContent = '＋ 记一条';
      ad1.onclick = () => recordSheet(cur.g, tpl); tabs.appendChild(ad1);
    }
    if (tpl && !TPL_PLAIN[tpl]){
      const rc = document.createElement('button'); rc.className = canRec ? 'chip' : 'chip on'; rc.textContent = '盘点 · ' + rngLabel(cur.rngSel) + ' ▾';
      rc.onclick = () => { cur.rngSel = RNG_CYCLE[(RNG_CYCLE.indexOf(cur.rngSel) + 1) % RNG_CYCLE.length]; render(); };
      tabs.appendChild(rc);
    }
    if (tpl === 'work'){
      const rp = document.createElement('button'); rp.className = 'chip'; rp.textContent = '报告';
      rp.onclick = () => openReport(cur.g, 'week'); tabs.appendChild(rp);
    } else if (tpl === 'food'){
      const mp = document.createElement('button'); mp.className = 'chip'; mp.textContent = '美食地图';
      mp.onclick = () => openFoodMap(cur.g); tabs.appendChild(mp);
      const ad = document.createElement('button'); ad.className = 'chip'; ad.textContent = '＋ 记一家店';
      ad.onclick = () => storeSheet(); tabs.appendChild(ad);
    } else if (tpl && !TPL_PLAIN[tpl]){
      const rp = document.createElement('button'); rp.className = 'chip'; rp.textContent = '生成月报';
      rp.onclick = () => {
        const rows = tplRows(cur.g, rngOf('month'));
        openShare(statsPayload(cur.g, tpl, tplStats(tpl, rows), 'month'));
      };
      tabs.appendChild(rp);
    }
    const shc = document.createElement('button'); shc.className = 'chip'; shc.textContent = '▣ 分享';
    shc.onclick = () => {
      if (tpl && !TPL_PLAIN[tpl]){
        const rows = tplRows(cur.g, rngOf(cur.rngSel));
        openShare(statsPayload(cur.g, tpl, tplStats(tpl, rows), cur.rngSel));
      } else openShare({type:'group', head:'啾啾岛 · 集子', cardTitle:'#' + cur.g + ' · 最近精选', g:cur.g});
    };
    tabs.appendChild(shc);
    if (!tpl || TPL_PLAIN[tpl]){   /* 有盘点面板的模板页，「怎么写?」在面板标题行 */
      const hw = document.createElement('button'); hw.className = 'chip'; hw.textContent = '怎么写?';
      hw.onclick = () => openHowSheet(tpl);
      tabs.appendChild(hw);
    }
    view.appendChild(tabs);
    if (tpl && !TPL_PLAIN[tpl]) renderTplPanel(cur.g, tpl);
    }
    const rows2 = tplRows(cur.g, null);
    if (!rows2.length){ const d = document.createElement('div'); d.className = 'empty-hint';
      d.textContent = cur.name === 'food'
        ? '阿饱：先记一家店吧，比如「晚饭在『店名』吃了面」，想去的也能记。'
        : ('这个分组还空着 · 在任意一行打 #' + cur.g + ' 就能归进来'); view.appendChild(d); }
    else {
      const lab = document.createElement('div'); lab.className = 'section-label'; lab.textContent = '全部记录'; view.appendChild(lab);
      /* 迁移链归并：被后继引用、状态为「已迁移」的中间节点收起 */
      const byId = {};
      rows2.forEach(r => { if (r.e._id) byId[r.e._id] = r; });
      const superseded = new Set();
      rows2.forEach(r => { if (r.e.srcId && byId[r.e.srcId]) superseded.add(r.e.srcId); });
      const shown = rows2.filter(r => !(superseded.has(r.e._id) && r.e.state === 'migrated'));
      if (!cur.listN) cur.listN = 30;
      const pageRows = shown.slice(0, cur.listN);
      let lastDate = null;
      const scoredSet = new Set();
      rows2.forEach(r => { if (r.p.title && r.p.score != null) scoredSet.add(canonTitle(r.p.title)); });
      pageRows.forEach(r => {
        if (r.d !== lastDate){ lastDate = r.d;
          const g2 = document.createElement('div'); g2.className = 'date-group'; g2.dataset.day = r.d;
          g2.textContent = dayGroupTitle(r.d); view.appendChild(g2); }
        const w = jumpRow(r.d, r.e);
        if (tpl){
          const tg = ptagRow(r, tpl, scoredSet);
          if (tg){ const body = w.querySelector('.entry-body'); if (body) body.appendChild(tg); }
        }
        appendChainFold(w, r, byId);
        view.appendChild(w);
      });
      if (shown.length > cur.listN){
        const more = document.createElement('div'); more.className = 'tapzone'; more.style.textAlign = 'center';
        more.textContent = '▾ 加载更早（还有 ' + (shown.length - cur.listN) + ' 条）';
        more.onclick = () => { cur.listN += 50; render(); };
        view.appendChild(more);
      }
      const tip = document.createElement('div'); tip.className = 'readonly-tip';
      tip.textContent = tpl === 'food' ? '点字修改原话 · 点人均调整参考价 · 点日子去那天' : tpl ? '小签是从你的原话里读出来的 · 点字直接改 · 点日子去那天' : '这就是自动长出来的「集子」 · 点字直接改 · 点日子去那天';
      view.appendChild(tip);
    }
  }
function render(){
  applyReading();readingGuideShown=false;reviewBtn.style.visibility=cur.name==='abu'&&cur.tab==='form'?'hidden':'';
  islandMailboxPrepare();
  document.querySelector('.mail-bulk-actions')?.remove();
  view.classList.remove('mailbox-view');
  closeRowPop(); topTitle.classList.remove('has-wx');
  topTitle.parentElement.classList.toggle('food-header',cur.name === 'food' || (cur.name === 'group' && tplOf(cur.g) === 'food'));
  if (cur.name === 'health'){ const tabs = HEALTH.order.filter(k => !HEALTH.hidden.includes(k)); if (!tabs.includes(cur.tab)) cur.tab = tabs[0] || null; }
  if (cur.name === 'meals'){ cur.name = 'food'; if (!cur.tab) cur.tab = 'meal'; }   /* v2.23 三餐并入美食板块 */
  (() => {   /* v2.18 导航栈：自动记来路，二级页左上角变「‹ 返回」 */
    const ns2 = navSnap();
    if (cur.name === 'today'){ navStack = []; }
    else if (!navFromBack && navPrevSnap && ns2 !== navPrevSnap){
      const pv = JSON.parse(navPrevSnap);
      navStack.push({name:pv.n, g:pv.g, key:pv.k, pid:pv.p, id:pv.i, q:pv.q, date:pv.d, tab:pv.t, lim:navPrevLim || undefined});
      if (navStack.length > 20) navStack.shift();
    }
    navFromBack = false; navPrevSnap = ns2; navPrevLim = cur.lim || 0;
    const mb = $('#menuBtn');
    if (mb){
      const back = navStack.length && cur.name !== 'today';
      if (back && !mb.classList.contains('mb-back')){
        mb.classList.add('mb-back'); mb.innerHTML = '‹ 返回'; mb.onclick = navBack;
      } else if (!back && mb.classList.contains('mb-back')){
        mb.classList.remove('mb-back');
        mb.innerHTML = '<span class="hamburger"><i></i><i></i><i></i></span>';
        mb.onclick = openDrawer;
      } else if (back){ mb.onclick = navBack; }
      else { mb.onclick = openDrawer; }
    }
  })();
  if (cur.name !== 'vault' && vaultKey) vaultLock();
  view.innerHTML = '';
  chatBarSync();   /* v3.2 发给啾啾的输入栏：今天和过去的日子 */
  if (cur.name === 'today'){
    topTitle.textContent = dayGroupTitle(TODAY); islandMailboxBadge();
    if (modOn('hello')){ topTitle.appendChild(wxPillNode()); topTitle.classList.add('has-wx'); }   /* v2.31 天气缩成日期旁的小签 */
    renderPageInto(view, TODAY, true);
  }
  else if (cur.name === 'agg'){
    const a = AGG[cur.key];
    if (cur.key === 'someday') view.appendChild(letterHouseHead('someday'));
    topTitle.textContent = a.title; reviewBtn.textContent = '回今日';
    const tip = sectionLabel(a.tip); view.appendChild(tip);
    if (cur.key === 'mood'){
      const ta = TODAY.split('.').map(Number);
      const cap = document.createElement('div'); cap.className = 'date-group';
      cap.textContent = ta[1] + '月情绪 · 有记录的日子点亮'; view.appendChild(cap);
      const strip = document.createElement('div'); strip.className = 'mood-strip';
      const md = new Set();
      walk((d, e) => { const a = d.split('.').map(Number);
        if (e.sym === 'mood' && a[0] === ta[0] && a[1] === ta[1]) md.add(a[2]); });
      const days = new Date(ta[0], ta[1], 0).getDate();
      for (let d = 1; d <= days; d++){
        const c = document.createElement('div'); c.className = 'mood-cell' + (md.has(d) ? ' has' : '');
        c.title = ta[1] + '月' + d + '日'; strip.appendChild(c);
      }
      view.appendChild(strip);
    }
    const items = []; walk((date, e) => { if (a.f(e)) items.push({date, e}); });
    const n = pagedList(view, items, ({date, e}) => {
      const jr = jumpRow(date, e);
      if (cur.key === 'someday'){   /* v2.28 储备：一键捞回今天 */
        const body = jr.querySelector('.entry-body');
        if (body){
          let c2 = body.querySelector('.chips');
          if (!c2){ c2 = document.createElement('div'); c2.className = 'chips'; body.appendChild(c2); }
          c2.querySelectorAll('.badge').forEach(bg => {
            if (bg.textContent.indexOf('☾ 想做') !== 0) return;
            const rest = bg.textContent.replace(/^☾ 想做\s*·?\s*/, '');
            if (rest) bg.textContent = rest; else bg.remove();
          });
          const b2 = document.createElement('span'); b2.className = 'badge acc'; b2.style.cursor = 'pointer'; b2.textContent = '⤴ 今天做';
          b2.onclick = ev => { ev.stopPropagation(); somedayPull(e, date); toast('⤴ 已捞回今天'); render(); };
          c2.appendChild(b2);
        }
      }
      return jr;
    });
    if (!n){ const d = document.createElement('div'); d.className = 'empty-hint'; d.textContent = cur.key === 'someday' ? '阿兜：兜里还空着。暂时顾不上的事，长按后选「储备」放进来。' : '这里还没有记录'; view.appendChild(d); }
  }
  else if (cur.name === 'group'){
    { const ht = tplOf(cur.g); topTitle.textContent = (ht && ht !== 'money' && ISLE_TPL[ht] && HOUSE[ht]) ? HOUSE[ht][1] : '#' + cur.g; } reviewBtn.textContent = '回今日';
    { const hh = houseHead(tplOf(cur.g), cur.g); if (hh) view.appendChild(hh); }   /* v3.0 */
    renderGroupBody();
  }
  else if (cur.name === 'food'){
    /* v2.23 美食板块（方案B双页签）：集子=资产 · 三餐=习惯，一个门两间房 */
    if (!cur.tab) cur.tab = 'ji';
    if (cur.tab === 'meal' && SET.mods.mealLog !== true) cur.tab = 'ji';   /* v2.29 三餐打卡退役 */
    topTitle.textContent = '海边饭馆'; reviewBtn.textContent = '回今日';
    if (!foodGroupName() && !extraGroups.includes('美食')) extraGroups.push('美食');
    cur.g = foodGroupName() || '美食';
    { const hh = houseHead('food', cur.g); if (hh) view.appendChild(hh); }   /* v3.0 */
    if (cur.tab !== 'ji'){
      const back = document.createElement('button'); back.className = 'chip'; back.id = 'foodBack'; back.textContent = '‹ 我的店单';
      back.onclick = () => {cur.tab = 'ji'; render();}; view.appendChild(back);
    }
    if (cur.tab === 'meal') renderMeals();
    else if (cur.tab === 'pick') renderPick();
    else renderGroupBody();
  }
  else if (cur.name === 'ledger'){
    /* v2.24 记账板块（方案B双页签）：流水=账单页 · 盘点=月对比与去向 */
    if (!cur.tab) cur.tab = 'liu';
    topTitle.textContent = '铜板账房'; reviewBtn.textContent = '回今日';
    view.appendChild(letterHouseHead('money'));
    const ltb = document.createElement('div'); ltb.className = 'ftabs';
    ltb.innerHTML = '<div class="ftab' + (cur.tab === 'liu' ? ' on' : '') + '" data-ft="liu">📒 流水</div>'
      + '<div class="ftab' + (cur.tab === 'pan' ? ' on' : '') + '" data-ft="pan">📊 盘点</div>';
    ltb.querySelectorAll('.ftab').forEach(t2 => t2.onclick = () => {
      if (cur.tab !== t2.dataset.ft){ cur.tab = t2.dataset.ft; navFromBack = true; render(); } });
    view.appendChild(ltb);
    if (cur.tab === 'pan') renderLedgerPan();
    else renderLedgerFlow();
  }
  else if (cur.name === 'search'){
    topTitle.textContent = '搜索'; reviewBtn.textContent = '回今日';
    view.appendChild(sectionLabel('「' + cur.q + '」的结果 · 点结果跳到当天'));
    const isG = cur.q.startsWith('#');
    const qq = isG ? cur.q.slice(1) : cur.q.toLowerCase();
    const n = dateGroupList(view, e => isG
      ? (e.groups && e.groups.includes(qq))
      : (e.text && e.text.toLowerCase().includes(qq)));
    if (!n){ const d = document.createElement('div'); d.className = 'empty-hint'; d.textContent = '没有找到相关记录'; view.appendChild(d); }
    if (!isG){
      const nbHits = (NOTES || []).filter(nb => (nb.title || '').toLowerCase().includes(qq) || (nb.body || '').toLowerCase().includes(qq));
      if (nbHits.length){
        view.appendChild(sectionLabel('本子里也有'));
        nbHits.forEach(nb => {
          const i2 = (nb.body || '').toLowerCase().indexOf(qq);
          const snip = i2 >= 0 ? (nb.body || '').substr(Math.max(0, i2 - 6), 24) : (nb.body || '').slice(0, 20);
          const it = document.createElement('div'); it.className = 'set-row';
          it.innerHTML = '<span>📓 ' + vEsc(nb.title || '未命名') + '</span>'
            + '<span class="sub" style="margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:46%">' + vEsc(snip) + ' ›</span>';
          it.onclick = () => { cur = {name:'note', id:nb.id}; render(); };
          view.appendChild(it);
        });
      }
    }
  }
  else if (cur.name === 'settings'){
    topTitle.textContent = '设置'; reviewBtn.textContent = '回今日';
    view.appendChild(sectionLabel('记录'));
    (() => {
      const sw = document.createElement('div'); sw.className = 'switch' + (SET.recog ? ' on' : ''); sw.innerHTML = '<i></i>';
      sw.onclick = ev => { ev.stopPropagation(); SET.recog = !SET.recog;
        toast(SET.recog ? '已开启自动识别' : '已关闭 · #分组与时间抽取不受影响'); render(); };
      setRow('智能识别类型判断', sw, null);
    })();
    setRow('一天的边界', setSub('凌晨 4:00'), () => toast('4 点前的记录算前一天 · 适合夜猫子'));
    setRow('📖 我的词典', setSub(dictPeopleList().length + ' 人 · ' + dictStoreList().length + ' 家店 · ' + dictFixCount() + ' 条纠正 ›'), () => { cur = {name:'dict'}; render(); });
    view.appendChild(sectionLabel('提醒'));
    (() => {
      const on = modOn('hello'), tg = setToggle(on);
      setRow('☀ 早安卡', tg, null);
      tg.onclick = () => { SET.mods.hello = !on; scheduleSave(); render();
        toast(!on ? '已打开 · 明天第一次打开就能看到' : '已关闭 · 日期旁的天气小签一起收起'); };
    })();
    setRow('提醒力度', setSub(SET.duty ? '规律 · 每天逐件过一遍 ›' : '温和 · 没做完的不催 ›'), () => {
      SET.duty = !SET.duty; scheduleSave(); render();
      toast(SET.duty ? '已切到规律：早上逐件过、复盘再过一遍' : '已切到温和：没做完的第二天自动收进「储备」');
    });
    if (modOn('cycles')) setRow('🔁 提醒', setSub('生日 · 还款 · 周期 ›'), () => { cur = {name:'cycles'}; render(); });
    else { const tgc = setToggle(false); setRow('🔁 提醒 · 生日、还款、周期', tgc, null); tgc.onclick = () => { SET.mods.cycles = true; scheduleSave(); render(); }; }
    setRow('天气城市', setSub((wxCfg().cities.map(c => c.n).join('、') || '还没设') + ' ›'), wxCitySheet);
    view.appendChild(sectionLabel('小岛'));
    setRow('🏝 全景岛', setSub('逛岛 · 看住户 ›'), () => islandGo('panorama'));
    setRow('✉ 信箱与明信片册', setSub(islandUnread(ISLAND)+' 条未读 · '+ISLAND.album.length+' 张收藏 ›'), () => islandGo('postoffice','inbox'));
    setRow('岛民来信', setSub(ISLAND.enabled?'已开启 ›':'已暂停 ›'), islandMailSettings);
    setRow('🏝 岛上的房子', setSub(ISLE_ORDER.filter(k => isleOn(k)).length + ' 栋开着 · 开关、置顶 ›'), () => { cur = {name:'isle'}; render(); });
    view.appendChild(sectionLabel('数据'));
    setRow('数据与备份', setSub('导出 · 导入 · 云备份 · 恢复 ›'), () => { cur = {name:'data'}; render(); });
    view.appendChild(sectionLabel('其他'));
    const accWrap = document.createElement('div'); accWrap.className = 'cdots'; accWrap.style.marginLeft = 'auto';
    ACCENTS.forEach((a, i) => {
      const dd = document.createElement('span');
      dd.className = 'cdot' + ((SET.accent === i) ? ' on' : '');
      dd.style.background = a[0];
      dd.onclick = ev => { ev.stopPropagation(); SET.accent = i; applyAccent(); scheduleSave(); render(); };
      accWrap.appendChild(dd);
    });
    setRow('主题色', accWrap, null);
    setRow('字体大小', setSub(READING_NAMES[READING_SIZES.indexOf(readingSize())]+' ›'), readingSettings);
    setRow('行首符号怎么用', setSub('›'), readingHelp);
    setRow('功能手册 · 实验室', setSub('›'), labSheet);
    setRow('版本记录', setSub('v3.10.1 ›'), showChangelog);
  }
  else if (cur.name === 'isle'){   /* v3.1 岛上的房子：开关、置顶 */
    topTitle.textContent = '岛上的房子'; reviewBtn.textContent = '回今日';
    const tip = document.createElement('div'); tip.className = 'hw-tip'; tip.style.padding = '14px 4px 6px';
    tip.textContent = '一栋房子一个小本子，按自己的用法开。关掉的不出现在侧栏，也不再自动收记录；记过的都还在。健康记录仍保存在晨露小站，重新打开可查看。最多置顶 4 栋，排在侧栏最前面。';
    view.appendChild(tip);
    const pins = islePins();
    ISLE_ORDER.forEach(k => {
      const I = ISLE[k], on = isleOn(k), pd = pins.includes(k);
      const r = document.createElement('div'); r.className = 'isle-set' + (on ? '' : ' off'); r.dataset.isle = k;
      r.innerHTML = isleIcon(k, 36) + '<div class="nm"><b>' + I.n + ' · ' + I.h + '</b><small>' + I.tip + '</small></div>'
        + (on ? '<button class="pin' + (pd ? ' on' : '') + '">' + (pd ? '已置顶' : '置顶') + '</button>' : '');
      const sw = setToggle(on); r.appendChild(sw);
      sw.onclick = ev => { ev.stopPropagation(); isleSet(k, !on); render(); };
      const pb = r.querySelector('.pin'); if (pb) pb.onclick = ev => { ev.stopPropagation(); if (islePin(k)) render(); };
      view.appendChild(r);
      if (k === 'food' && on){   /* 三餐打卡：饭馆里的一个页签 */
        const ml = SET.mods.mealLog === true;
        const r2 = document.createElement('div'); r2.className = 'isle-set'; r2.dataset.isle = 'mealLog'; r2.style.paddingLeft = '50px';
        r2.innerHTML = '<div class="nm"><b style="font-size:13.5px">三餐打卡</b><small>美食里的「三餐」页签</small></div>';
        const sw2 = setToggle(ml); r2.appendChild(sw2);
        sw2.onclick = ev => { ev.stopPropagation(); SET.mods.mealLog = !ml; scheduleSave(); render(); };
        view.appendChild(r2);
      }
    });
  }
  else if (cur.name === 'data'){
    topTitle.textContent = '数据与备份'; reviewBtn.textContent = '回今日';
    setRow('导出 Markdown 备份', setSub('仅手帐正文 ›'), exportMD);
    setRow('导入 Markdown（合并）', setSub('以现有为准，只补缺 ›'), () => $('#mdInput').click());
    setRow('完整备份（.json 含图片）', setSub('生成文件 ›'), exportJSON);
    setRow('云备份（GitHub 私有仓库）', setSub(ghCfg().on ? ('自动 · ' + (ghCfg().last || '待首次备份')) : '未开启 ›'), openGhSheet);
    setRow('恢复备份（.json）', setSub('整体替换 ›'), () => {
      if (!pendingRestore){ pendingRestore = true;
        toast('恢复将完全替换当前数据 · 再点一次选择文件');
        setTimeout(() => pendingRestore = false, 5000); return; }
      pendingRestore = false; $('#jsonInput').click();
    });
    setRow('存储占用', setSub(storageText()), () => toast(IMG_DB.ok ? '文字和照片分开存，照片不占文字的地方 · 建议定期导出备份' : '数据保存在本机浏览器里 · 建议定期导出备份'));
    setRow('清空全部数据', setSub('谨慎操作'), () => {
      if (pendingWipe){
        localStorage.removeItem(LSKEY);
        try{ if (IMG_DB.db) IMG_DB.db.close(); const rq = indexedDB.deleteDatabase('bujo_img'); rq.onsuccess = rq.onerror = rq.onblocked = () => location.reload(); }catch(_){ }
        setTimeout(() => location.reload(), 900); return;
      }
      pendingWipe = true; toast('再点一次确认清空（建议先导出备份）');
      setTimeout(() => pendingWipe = false, 4000);
    });
  }
  else if (cur.name === 'dict'){
    topTitle.textContent = '📖 我的词典'; reviewBtn.textContent = '回今日';
    renderDict();
  }
  else if (cur.name === 'panorama'){ renderPanorama(); }
  else if (cur.name === 'postoffice'){ renderPostoffice(); }
  else if (cur.name === 'postcard'){ renderPostcard(); }
  else if (cur.name === 'mailmessage'){ renderMailMessage(); }
  else if (cur.name === 'abu'){abuStart();}
  else if (cur.name === 'health'){
    topTitle.textContent = '健康'; reviewBtn.textContent = '回今日';
    renderHealth();
  }
  else if (cur.name === 'cycles'){
    topTitle.textContent = '提醒'; reviewBtn.textContent = '回今日';
    towerRender();
  }
  else if (cur.name === 'notes'){
    topTitle.textContent = '记事小亭'; reviewBtn.textContent = '回今日';
    renderNotes();
  }
  else if (cur.name === 'note'){
    const nb0 = noteById(cur.id);
    topTitle.textContent = nb0 ? (nb0.title || '未命名') : '记事小亭'; reviewBtn.textContent = '回今日';
    if (nb0){ ensureNoteBorn(nb0); renderNote(nb0); } else renderNotes();
  }
  else if (cur.name === 'meals'){
    topTitle.textContent = '三餐'; reviewBtn.textContent = '回今日';
    renderMeals();
  }
  else if (cur.name === 'people'){
    topTitle.textContent = '小岛茶屋'; reviewBtn.textContent = '回今日';
    view.appendChild(letterHouseHead('people'));
    renderPeople();
  }
  else if (cur.name === 'me'){
    topTitle.textContent = '我的人生时间点'; reviewBtn.textContent = '回今日';
    view.appendChild(marksPan(SET.me, true, ''));
    const tip0 = document.createElement('div'); tip0.className = 'vt-tip';
    tip0.textContent = '换工作、搬家、拿证……想记住的日子放这里。填了完整日期，满整百天的纪念日会提前列出来。';
    view.appendChild(tip0);
  }
  else if (cur.name === 'person'){
    const pp0 = personById(cur.pid);
    topTitle.textContent = pp0 ? pp0.name : '小岛茶屋'; reviewBtn.textContent = '回今日';
    if (pp0) renderPerson(pp0); else renderPeople();
  }
  else if (cur.name === 'vault'){
    topTitle.textContent = '秘屋树洞'; reviewBtn.textContent = '回今日';
    view.appendChild(letterHouseHead('vault'));
    renderVault();
  }
  else if (cur.name === 'cal'){
    topTitle.textContent = '总日历'; reviewBtn.textContent = '回今日';
    view.appendChild(letterHouseHead('post'));
    view.appendChild(islandNav('cal'));
    renderCal();
  }
  else if (cur.name === 'day'){
    topTitle.textContent = fmtKey(cur.key); reviewBtn.textContent = '回今日';
    const g = document.createElement('div'); g.className = 'date-group';
    g.textContent = dayGroupTitle(cur.key) + (PAGES[cur.key] && PAGES[cur.key].stamp ? ' · 🔖' + PAGES[cur.key].stamp : '');
    g.style.cursor = 'pointer'; g.onclick = () => stampSheet(cur.key);
    view.appendChild(g);
    if (!PAGES[cur.key]) PAGES[cur.key] = {plan:[], flow:[]};
    const p = PAGES[cur.key];
    view.appendChild(sectionLabel('这天的待办'));
    p.plan.forEach(e => view.appendChild(entryNode(e, true)));
    view.appendChild(tapZone('＋ 提前安排一条', false, () => addLine(p.plan)));
    const cycHitsHere = (SET.cycles || []).filter(c => cycHits(c, cur.key));
    if (cycHitsHere.length){
      view.appendChild(sectionLabel('这天有提醒'));
      cycHitsHere.forEach(c => {
        const d2 = document.createElement('div'); d2.className = 'empty-hint'; d2.style.padding = '6px 2px';
        d2.textContent = '🔁 ' + c.name + ' · ' + cycDesc(c);
        view.appendChild(d2);
      });
    }
    let n = 0; const inc = document.createDocumentFragment();
    walk((date, e) => {
      if (date === cur.key) return;
      if (e.due !== cur.key || e.state === 'done' || e.state === 'dropped') return;
      n++; inc.appendChild(jumpRow(date, e));
    });
    if (n){
      view.appendChild(sectionLabel('到这天会自动出现'));
      view.appendChild(inc);
      const tip = document.createElement('div'); tip.className = 'readonly-tip';
      tip.textContent = '这些从别的日子挂过来 · 点文字可跳回源头'; view.appendChild(tip);
    }
    if (!n && !p.plan.length && !cycHitsHere.length){
      const d = document.createElement('div'); d.className = 'empty-hint'; d.style.textAlign = 'center'; d.style.padding = '30px 2px 10px';
      d.innerHTML = jjImg('nap', 72) + '<div style="margin-top:10px">笃笃：这天还没安排。提前记下的事，到那天打开就能看见。</div>'; view.appendChild(d);
    }
  }
  else if (cur.name === 'history'){
    topTitle.textContent = fmtKey(cur.date); reviewBtn.textContent = '回今日';
    const t = document.createElement('div'); t.className = 'date-group';
    t.textContent = dayGroupTitle(cur.date); view.appendChild(t);
    if (PAGES[cur.date].summary){
      const sm = document.createElement('div'); sm.className = 'empty-hint';
      sm.style.fontStyle = 'italic';
      sm.textContent = '“' + PAGES[cur.date].summary + '”'; view.appendChild(sm);
    }
    renderPageInto(view, cur.date, true);
  }
  const dayNavOn = (cur.name === 'today' || cur.name === 'history' || cur.name === 'day');
  topTitle.classList.toggle('t-nav', dayNavOn);
  $('#prevDay').style.visibility = dayNavOn ? 'visible' : 'hidden';
  $('#nextDay').style.visibility = dayNavOn ? 'visible' : 'hidden';
  if ($('#drawer').classList.contains('on')) buildDrawer();
  scheduleSave();
  if ((cur.name === 'today' || cur.name === 'history' || cur.name === 'day') && focusRef){
    const inp = view.querySelector('.line-input[data-eid="' + focusRef._id + '"]');
    if (inp){
      try{ inp.focus({preventScroll:true}); }catch(_){ inp.focus(); }
      const L = inp.value.length; try{ inp.setSelectionRange(L, L); }catch(_){}
      keepAboveKeyboard(inp);
    }
  }
  updateToolbarVis();
}

/* ============ 编辑工具条（v2.19 方案A：符号一格 · 按频率分组 · 聪明挂入 · 删/撤成对） ============ */
const TB_GLYPH = {task:'●', event:'○', note:'—', mood:'🌤', ask:'❓', bang:'❗'};
function buildToolbar(){
  toolbar.addEventListener('pointerdown', ev => ev.preventDefault());
  const sb0 = document.createElement('div'); sb0.id = 'smartBar';
  sb0.addEventListener('pointerdown', ev => ev.preventDefault());
  toolbar.parentElement.insertBefore(sb0, toolbar);
  const mk = (html, fn, cls) => {
    const b = document.createElement('button'); b.className = 'tb-btn' + (cls ? ' ' + cls : '');
    b.innerHTML = html;
    b.addEventListener('click', fn); toolbar.appendChild(b); return b;
  };
  const sep = () => { const d = document.createElement('div'); d.className = 'tb-sep'; toolbar.appendChild(d); };
  const need = fn => () => { if (!focusRef){ toast('先点选一行'); return; } fn(focusRef); };
  /* 符号弹层 */
  const pop = document.createElement('div'); pop.id = 'symPop';
  pop.innerHTML = [['task','●','待办','点符号打勾'],
    ['event','○','日常 · 发生的事','能挂子弹'],
    ['note','—','随想 · 灵感、学到的','图标自动挑'],
    ['mood','🌤','随想 · 心情',''],
    ['ask','❓','随想 · 疑问','侧栏汇总能翻'],
    ['bang','❗','随想 · 重点','侧栏汇总能翻']]
    .map(([k, g, t, d]) => '<div class="sp-row" data-sym="' + k + '"><span class="g">' + g + '</span><span>' + t + '</span>'
      + (d ? '<span class="d">' + d + '</span>' : '') + '</div>').join('');
  pop.addEventListener('pointerdown', ev => ev.preventDefault());
  document.body.appendChild(pop);
  pop.querySelectorAll('[data-sym]').forEach(r => r.addEventListener('click', () => {
    const e = focusRef; if (!e){ pop.classList.remove('on'); return; }
    snapshot('修改符号');
    e.sym = r.dataset.sym; e.userSet = true; delete e.defSym;
    if (e.sym === 'task'){ if (!e.state) e.state = 'open'; } else e.state = undefined;
    pop.classList.remove('on');
    render();
  }));
  /* ① 当前符号一格 */
  const symBtn = mk('<span class="tb-glyph">●</span><small>符号</small>', need(() => {
    if (pop.classList.contains('on')){ pop.classList.remove('on'); return; }
    pop.querySelectorAll('.sp-row').forEach(r => r.classList.toggle('on', !!focusRef && focusRef.sym === r.dataset.sym));
    const tr = toolbar.getBoundingClientRect();
    pop.style.bottom = Math.max(8, window.innerHeight - tr.top + 8) + 'px';
    pop.classList.add('on');
  }), 'tb-sym');
  symBtn.id = 'tbSym';
  sep();
  /* ② 常用直达 */
  mk('#<small>分组</small>', need(e => { sheetTarget = e; openSheet(); }), 'tb-big');
  mk('📷<small>照片</small>', need(e => { imgTarget = e; e._imgPending = true; const fi = $('#imgInput'); fi.value = ''; fi.click(); }), 'tb-big');
  sep();
  /* ③ 聪明挂入键：按上下文在 挂入/升出/置灰 之间变脸 */
  const nest = mk('⇥<small>挂入</small>', need(e => {
    const loc = findEntry(e); if (!loc) return;
    if (loc.parent){
      snapshot('取消缩进');
      loc.list.splice(loc.idx, 1);
      const ploc = findEntry(loc.parent);
      ploc.list.splice(ploc.idx + 1, 0, e);
      toast('已升回顶层'); render(); return;
    }
    if (loc.idx === 0 || loc.list[loc.idx - 1].sym !== 'event'){ toast('上一条不是事件（○），挂不进去'); return; }
    const prev = loc.list[loc.idx - 1];
    snapshot('缩进');
    loc.list.splice(loc.idx, 1);
    (prev.children = prev.children || []).push(e);
    if ((!e.groups || !e.groups.length) && prev.groups && prev.groups.length) e.groups = [...prev.groups];
    toast('已挂到「' + (prev.text || '…') + '」下'); render();
  }), 'tb-big');
  nest.id = 'tbNest';
  sep();
  /* ④ 删除 / 撤回 成对：都是整行级 */
  mk('🗑<small>删除</small>', need(e => {
    const hasHist = e.badge && e.badge.indexOf('>×') === 0;
    if (hasHist && pendingDel !== e){ pendingDel = e; toast('该任务带迁移历史 · 再点一次确认'); return; }
    snapshot('删除整行');
    removeEntry(e); if (focusRef === e) focusRef = null; pendingDel = null;
    toast('整行已删 · 点「撤回」整行找回'); render();
  }), 'warn tb-big');
  mk('↩<small>撤回</small>', () => {
    if (!undoStack.length){ toast('没有可撤回的操作'); return; }
    const s2 = undoStack.pop();
    PAGES[TODAY] = s2.data; focusRef = null; pendingDel = null;
    render(); toast('已撤回 · ' + s2.label);
  }, 'tb-big');
}
function refreshToolbarKeys(){
  const sb = $('#tbSym'), nb2 = $('#tbNest');
  if (!sb || !nb2) return;
  const e = focusRef;
  const g2 = sb.querySelector('.tb-glyph');
  if (g2) g2.textContent = (e && TB_GLYPH[e.sym]) || '●';
  let mode = 'off';
  if (e){
    const loc = findEntry(e);
    if (loc && loc.parent) mode = 'out';
    else if (loc && loc.idx > 0 && loc.list[loc.idx - 1] && loc.list[loc.idx - 1].sym === 'event') mode = 'in';
  }
  nb2.innerHTML = (mode === 'out') ? '⇤<small>升出</small>' : '⇥<small>挂入</small>';
  nb2.classList.toggle('dim', mode === 'off');
  smartBarUpd(e);
}

/* ============ 聪明工具条（方案B · 内测）：打字时递小抓手 ============ */
let sbTimer = null, SB_FREQ = null;
function sbFreqGroup(){
  if (SB_FREQ && SB_FREQ.day === TODAY && SB_FREQ.gen === PARSE_GEN) return SB_FREQ.g;
  const since = parseKey(addDaysK(TODAY, -30)), cnt = {};
  walk((d, e2) => { if (parseKey(d) >= since) (e2.groups || []).forEach(g => cnt[g] = (cnt[g] || 0) + 1); });
  let best = null; Object.keys(cnt).forEach(g => { if (!best || cnt[g] > cnt[best]) best = g; });
  SB_FREQ = {day:TODAY, gen:PARSE_GEN, g:best}; return best;
}
function sbGroups(e, t){
  const names = allGroupNames(), out = [];
  const push = g => { if (g && !out.includes(g) && names.includes(g)) out.push(g); };
  if (/《[^》]{1,30}》/.test(t) || /(二刷|三刷|补看)/.test(t)) push(names.find(g => tplOf(g) === 'movie'));
  if (/「[^」]{1,20}」/.test(t) || /外卖/.test(t) || (modOn('meals') && mealSlotOf(e))) push(names.find(g => tplOf(g) === 'food'));
  names.forEach(g => { if (g.length >= 2 && t.includes(g)) push(g); });
  if (out.length < 2 && t.length >= 4) push(sbFreqGroup());
  return out.slice(0, 2).map(g => ({g, on:(e.groups || []).includes(g)}));
}
function smartBarUpd(e){
  const S = $('#smartBar'); if (!S) return;
  if (!modOn('smartbar') || !e){ S.classList.remove('on'); S.innerHTML = ''; return; }
  clearTimeout(sbTimer); sbTimer = setTimeout(() => sbBuild(e), 150);
}
function sbBuild(e){
  const S = $('#smartBar'); if (!S) return;
  const hide = () => { S.classList.remove('on'); S.innerHTML = ''; placeToolbar(); };
  if (!modOn('smartbar') || !e || focusRef !== e || !toolbar.classList.contains('on')) return hide();
  const t = (e.text || '').trim();
  if (!t) return hide();
  S.innerHTML = '';
  const chip = (html, on, fn) => {
    const c = document.createElement('button'); c.className = 'sb-chip' + (on ? ' onx' : '');
    c.innerHTML = html;
    c.addEventListener('click', () => { fn(); scheduleSave(); sbBuild(e); }); S.appendChild(c);
  };
  const dd2 = detectDue(t);
  if (dd2){
    const on = e.due === dd2.key;
    chip(on ? '✓ 已挂 ' + fmtShort(dd2.key) : '📅 挂到 ' + fmtShort(dd2.key), on, () => {
      if (on){ delete e.due; e.noDue = 1; toast('取消 · 这行不自动挂日期了'); }
      else { e.due = dd2.key; delete e.noDue; toast('已挂到 ' + fmtKey(dd2.key) + '（' + weekCN(dd2.key) + '）'); }
    });
  }
  const tv = detectTime(t);
  if (tv){
    const on = e.time === tv;
    chip(on ? '✓ ' + tv : '🕐 记时间 ' + tv, on, () => {
      if (e.sym!=='task') delete e.journalTime;
      if (on){ delete e.time; e.noTime = 1; toast('取消 · 这行不自动记时间了'); }
      else { e.time = tv; delete e.noTime; toast('已记时间 ' + tv); }
    });
  }
  sbGroups(e, t).forEach(o => {
    chip((o.on ? '✓ ' : '') + (tplOf(o.g) === 'food' ? '🍚 ' : '#') + o.g, o.on, () => {
      if (o.on){ e.groups = (e.groups || []).filter(x => x !== o.g); toast('已移出 #' + o.g); }
      else { (e.groups = e.groups || []).push(o.g); toast('已归入 #' + o.g); }
    });
  });
  if (modOn('ledger')){
    const pl = parseLine(t);
    if (pl.prices && pl.prices.length){
      const k = expKindOf(e, pl);
      if (k) chip('💰 ' + expLabel(k) + ' · 换类', false, () => { expSheet(e); });
    }
  }
  if (!S.children.length) return hide();
  S.classList.add('on'); placeToolbar();
}

/* ============ 抽屉 ============ */
function openDrawer(){ buildDrawer(); const dl = $('#drawerList'); if (dl) dl.scrollTop = 0; $('#drawer').classList.add('on'); $('#mask').classList.add('on'); }
function closeDrawer(){
  $('#drawer').classList.remove('on'); $('#mask').classList.remove('on');
  gEdit = null; pendingGDel = null;
}
$('#menuBtn').onclick = openDrawer;
$('#mask').onclick = () => {
  closeDrawer();
  if ($('#gsheet').classList.contains('on')) closeSheet();
  if ($('#qsheet').classList.contains('on')) closeQSheet();
};

/* ============ 图片 ============ */
let imgTarget = null;
function compressImg(src, cb){
  const img = new Image();
  img.onload = () => {
    const MX = 1000; let w = img.width, h = img.height;
    if (Math.max(w, h) > MX){ const r = MX / Math.max(w, h); w = Math.round(w * r); h = Math.round(h * r); }
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    cv.getContext('2d').drawImage(img, 0, 0, w, h);
    try{ cb(cv.toDataURL('image/jpeg', 0.72)); }catch(_){ cb(src); }
  };
  img.onerror = () => cb(src);
  img.src = src;
}
function makeThumb(src, cb){
  const img = new Image();
  img.onload = () => {
    let w = img.width, h = img.height;
    const mx = Math.max(w, h);
    if (mx > 160){ const r2 = 160 / mx; w = Math.round(w * r2); h = Math.round(h * r2); }
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    cv.getContext('2d').drawImage(img, 0, 0, w, h);
    try{ cb(cv.toDataURL('image/jpeg', 0.6)); }catch(_){ cb(null); }
  };
  img.onerror = () => cb(null);
  img.src = src;
}
/* 老数据后台补缩略图：一次几张、闲时进行 */
function backfillThumbs(){
  const q = [];
  walk((k, e) => { (e.images || []).forEach((src, i) => { if (!(e.imgt && e.imgt[i]) && !String(src).startsWith('idb:')) q.push({e, i, src}); }); });
  if (!q.length) return;
  let i2 = 0;
  const step = () => {
    if (i2 >= q.length){ scheduleSave(); return; }
    const job = q[i2++];
    makeThumb(job.src, tb => { if (tb) (job.e.imgt = job.e.imgt || [])[job.i] = tb; setTimeout(step, 80); });
  };
  setTimeout(step, 1800);
}
$('#imgInput').addEventListener('change', ev => {
  const fs = [...ev.target.files]; if (!fs.length || !imgTarget) return;
  snapshot('插入图片');
  let left = fs.length;
  fs.forEach(f => {
    const r = new FileReader();
    r.onload = () => compressImg(r.result, out => {
      const arr = (imgTarget.images = imgTarget.images || []);
      const ix = arr.length; arr.push(out);
      const tgt = imgTarget;
      makeThumb(out, tb => { if (tb){ (tgt.imgt = tgt.imgt || [])[ix] = tb; scheduleSave();
        document.querySelectorAll('.thumbs img').forEach(im2 => { if (im2.src === out) im2.src = tb; }); } });
      if (--left === 0){
        delete imgTarget._imgPending;
        if (!findEntry(imgTarget)) EP().flow.push(imgTarget);
        focusRef = imgTarget;
        toast('已插入图片 · 点缩略图看大图'); render();
      }
    });
    r.readAsDataURL(f);
  });
});
window.addEventListener('focus', () => setTimeout(() => {
  if (imgTarget && imgTarget._imgPending && !(imgTarget.images || []).length) delete imgTarget._imgPending;
}, 800));
function openLightbox(e, idx, canDel){
  const L = $('#lightbox');
  L.innerHTML = '<img src="' + imgUrl(e.images[idx]) + '">'
    + (canDel ? '<button class="rv-confirm" id="lbDel" style="position:absolute;left:24px;right:24px;width:auto;bottom:calc(28px + env(safe-area-inset-bottom));background:#C0604E">删除这张图片</button>' : '');
  L.classList.add('on');
  L.onclick = () => L.classList.remove('on');
  if (canDel) $('#lbDel').onclick = ev => {
    ev.stopPropagation(); snapshot('删除图片');
    e.images.splice(idx, 1); if (e.imgt) e.imgt.splice(idx, 1);
    L.classList.remove('on'); toast('已删除 · 可撤回'); render();
  };
}

/* ============ 芯片点击：改日期 / 改时间 ============ */
let dueTarget = null;
function makeICS(e){
  const dk = (e.due && parseKey(e.due) >= parseKey(TODAY)) ? e.due : TODAY;
  const da = dk.split('.').map(Number);
  const tm = (e.time || '09:00').split(':').map(Number);
  const pad = n => String(n).padStart(2, '0');
  const dt = da[0] + pad(da[1]) + pad(da[2]) + 'T' + pad(tm[0]) + pad(tm[1]) + '00';
  const ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//bujo//CN\r\n'
    + 'BEGIN:VEVENT\r\nUID:' + (e._id || 0) + '-' + dt + '@bujo\r\nDTSTART:' + dt + '\r\n'
    + 'SUMMARY:' + String(e.text || '提醒').replace(/[\r\n,;]/g, ' ') + '\r\n'
    + 'BEGIN:VALARM\r\nACTION:DISPLAY\r\nTRIGGER:-PT0M\r\nDESCRIPTION:啾啾岛\r\nEND:VALARM\r\n'
    + 'END:VEVENT\r\nEND:VCALENDAR\r\n';
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], {type:'text/calendar'}));
  a.download = (String(e.text || '提醒').slice(0, 12) || '提醒') + '.ics'; a.click();
  toast('已生成日历文件 · 打开并「添加」到系统日历，它会真的响');
}
function openDueSheet(e){
  if(e.schedule){planEdit(e);return;}
  dismissKB(); dueTarget = e;
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">修改日期 · ' + (((e.text || '').slice(0, 12)) || '未命名') + '</div>'
    + '<div class="mig-quick" id="dQuick"></div>'
    + '<input type="date" class="qdate" id="dDate">'
    + '<div class="gs-new" style="margin-top:4px">'
    + '<button class="gm-btn" id="dClear" style="flex:1;padding:10px">清除日期</button>'
    + '<button class="gm-btn" id="dOk" style="flex:1;padding:10px;background:var(--ink);color:#fff;border-color:var(--ink)">确定</button>'
    + '</div>';
  setupDatePick('dQuick', 'dDate');
  if (e.due){ try{ $('#dDate').value = key2iso(e.due); }catch(_){} }
  $('#dClear').onclick = () => { snapshot('修改日期'); delete dueTarget.due; toast('已清除日期'); closeSheet(); };
  $('#dOk').onclick = () => {
    const v = $('#dDate').value; if (!v){ closeSheet(); return; }
    snapshot('修改日期'); const k = iso2key(v);
    dueTarget.due = k;
    if (dueTarget.badge && dueTarget.badge.indexOf('→') === 0)
      dueTarget.badge = dueTarget.badge.replace(/→[\d.]+/, '→' + fmtShort(k));
    toast('已改到 ' + fmtKey(k) + '（' + weekCN(k) + '）'); closeSheet();
  };
  S.classList.add('on'); $('#mask').classList.add('on'); placeToolbar();
}
function openTimeSheet(e){
  dismissKB(); dueTarget = e;
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">修改提醒时间 · ' + (((e.text || '').slice(0, 12)) || '未命名') + '</div>'
    + '<input type="time" class="qdate" id="tTime" value="' + (e.time || '09:00') + '">'
    + '<div class="gs-new" style="margin-top:4px">'
    + '<button class="gm-btn" id="tClear" style="flex:1;padding:10px">清除时间</button>'
    + '<button class="gm-btn" id="tOk" style="flex:1;padding:10px;background:var(--ink);color:#fff;border-color:var(--ink)">确定</button>'
    + '</div>'
    + '<button class="gs-done" id="tCal" style="margin-top:12px">加入系统日历（会真的响）</button>'
    + '<div class="rp-note" style="margin-top:8px">页面里的 ⏰ 只是标记不会响；加入系统日历才有推送提醒</div>';
  $('#tClear').onclick = () => { snapshot('修改时间'); delete dueTarget.time; dueTarget.noTime=1; if(dueTarget.sym!=='task') dueTarget.journalTime=''; toast('已清除时间'); closeSheet(); };
  $('#tOk').onclick = () => {
    const v = $('#tTime').value;
    if (v){ snapshot('修改时间'); dueTarget.time = v; dueTarget.noTime=1; if(dueTarget.sym!=='task') delete dueTarget.journalTime; toast('已改为 ' + v); }
    closeSheet();
  };
  $('#tCal').onclick = () => { const v = $('#tTime').value; if (v) dueTarget.time = v; makeICS(dueTarget); };
  S.classList.add('on'); $('#mask').classList.add('on'); placeToolbar();
}

/* ============ 推迟日期选择（快捷 + 日历） ============ */
function setupDatePick(quickId, dateId){
  const di = $('#' + dateId);
  di.min = key2iso(TOMORROW); di.value = key2iso(TOMORROW);
  const box = $('#' + quickId); box.innerHTML = '';
  [['明天', TOMORROW], ['后天', addDaysK(TODAY, 2)], ['下周一', nextMondayKey()]].forEach(([n, k]) => {
    const c = document.createElement('button'); c.className = 'chip'; c.textContent = n + ' ' + fmtShort(k);
    c.onclick = ev => { ev.preventDefault(); di.value = key2iso(k); };
    box.appendChild(c);
  });
}
function pickDate(dateId){
  const v = $('#' + dateId).value;
  if (!v) return TOMORROW;
  const k = iso2key(v);
  return parseKey(k) > parseKey(TODAY) ? k : TOMORROW;
}

/* ============ 随时处理（长按四选一） ============ */
let qsTarget = null;
function dismissKB(){
  const ae = document.activeElement;
  if (ae && ae.blur) ae.blur();
  focusRef = null;
}
function openQSheet(){ dismissKB(); buildQSheet(); $('#qsheet').classList.add('on'); $('#mask').classList.add('on'); placeToolbar(); }
function askMemo(t){
  dismissKB();
  const S = $('#qsheet');
  S.innerHTML = '<div class="gs-title">✓ 已完成 · 补一句备注？（会进日报周报）</div>'
    + '<input id="qMemo" class="qdate" placeholder="比如：对方已确认 / 结果如何…" value="' + escAttr(t.note) + '">'
    + '<div class="gs-new" style="margin-top:4px">'
    + '<button class="gm-btn" id="qSkip" style="flex:1;padding:10px">跳过</button>'
    + '<button class="gm-btn" id="qSave" style="flex:1;padding:10px;background:var(--ink);color:#fff;border-color:var(--ink)">保存备注</button>'
    + '</div>';
  $('#qSkip').onclick = () => closeQSheet();
  $('#qSave').onclick = () => { const m = $('#qMemo').value.trim(); if (m) t.note = m; closeQSheet(); };
  S.classList.add('on'); $('#mask').classList.add('on'); placeToolbar();
}
function closeQSheet(){
  $('#qsheet').classList.remove('on');
  if (!$('#drawer').classList.contains('on')) $('#mask').classList.remove('on');
  render();
}
function buildQSheet(){
  const t = qsTarget, S = $('#qsheet');
  const isSd = t.state === 'someday';
  S.innerHTML = '<div class="gs-title">处理 · ' + ((t.text || '未命名').slice(0, 14)) + '</div>'
    + qsInfoHTML(t)
    + '<div class="rv-grid">'
    + (isSd ? '<button class="rv-btn b-done" id="qBack"><span class="g">⤴</span>捞回今天</button>'
            : '<button class="rv-btn b-done" id="qDone"><span class="g">✓</span>' + (t.state && t.state !== 'open' ? '恢复任务' : '完成') + '</button>')
    + '<button class="rv-btn b-mig"  id="qMig"><span class="g">›</span>推迟</button>'
    + '<button class="rv-btn b-drop" id="qDrop"><span class="g">✕</span>不做了</button>'
    + '<button class="rv-btn b-del"  id="qDel"><span class="g">→</span>转交</button>'
    + (isSd ? '' : '<button class="rv-btn" id="qSd" style="grid-column:1/-1"><span class="g" style="color:var(--ink-faint)">☾</span>储备 · 先放着，别催我</button>')
    + '</div>'
    + '<div class="rv-mig-panel" id="qMigPanel">'
    + '<div class="mig-quick" id="qQuick"></div>'
    + '<input type="date" class="qdate" id="qDate">'
    + '<input id="qNote" placeholder="一句话进度（可不填）">'
    + '<button class="rv-confirm" id="qGo">确认推迟</button>'
    + '</div>'
    + '<div class="rv-mig-panel" id="qDelPanel">'
    + '<input id="qDelTo" class="qdate" placeholder="转交给谁" style="margin-bottom:10px">'
    + '<div class="mig-quick" id="qDelQuick"></div>'
    + '<input type="date" class="qdate" id="qDelDate">'
    + '<button class="rv-confirm" id="qDelGo">确认转交 · 到期提醒我跟进</button>'
    + '</div>'
    + '<button class="gm-btn" id="qShare" style="width:100%;margin-top:12px;padding:10px">▣ 把这条做成分享图</button>';
  const fin = msg => { toast(msg); closeQSheet(); };
  if ($('#qsInfo')) bindRowActs($('#qsInfo'), t, rowInfoRows(t, true));   /* v2.31 来历写在处理面板顶上 */
  if ($('#qSd')) $('#qSd').onclick = () => {
    snapshot('处理任务');
    t.state = 'someday'; delete t.due; t.badge = '☾ 想做';
    fin('☾ 收进「储备」· 不催你，想做时去侧栏捞');
  };
  if ($('#qBack')) $('#qBack').onclick = () => {
    snapshot('处理任务');
    t.state = 'migrated'; t.badge = '→' + fmtShort(TODAY) + ' 捞回';
    P().plan.push({sym:'task', state:'open', text:t.text, time:t.time || undefined, pick:t.pick || undefined, nbId:t.nbId || undefined,
      groups:t.groups ? [...t.groups] : undefined, mig:t.mig,
      src:t.src || undefined, srcDay:curDayKey() || undefined, srcId:t._id || (t._id = ++uid),
      _id:++uid});
    fin('⤴ 已捞回今天');
  };
  if ($('#qDone')) $('#qDone').onclick = () => {
    snapshot('处理任务');
    if (t.state && t.state !== 'open'){
      t.state = 'open';
      t.badge = (SET.duty && t.mig) ? ('>×' + t.mig + (t.progress ? ' · 已完成' + t.progress + '%' : '')) : (t.progress ? '已完成' + t.progress + '%' : undefined);
      if (t.due && parseKey(t.due) > parseKey(TODAY)) t.due = undefined;
      delete t.delegate; delete t.followArrived; delete t.doneDay; delete t.finishedTime;
      fin('已恢复任务');
    } else { t.state = 'done'; t.doneDay = TODAY; cycOnDone(t); if (t.pick) pickDone(t); else journalCompleted(t); }
  };
  $('#qDrop').onclick = () => { snapshot('处理任务'); t.state = 'dropped'; t.badge = '不做了'; fin('✕ 已放弃 · 保留划痕'); };
  $('#qDel').onclick  = () => { $('#qMigPanel').classList.remove('on'); $('#qDelPanel').classList.toggle('on'); };
  $('#qMig').onclick  = () => { $('#qDelPanel').classList.remove('on'); $('#qMigPanel').classList.toggle('on'); };
  setupDatePick('qQuick', 'qDate');
  setupDatePick('qDelQuick', 'qDelDate');
  $('#qDelGo').onclick = () => {
    const to = $('#qDelTo').value.trim(); if (!to){ toast('先填转交给谁'); return; }
    snapshot('处理任务'); const f = pickDate('qDelDate');
    t.state = 'delegated'; t.delegate = {to, follow:f};
    delete t.followArrived;
    t.badge = '→ ' + to + ' · ' + fmtShort(f) + ' 跟进';
    fin('→ 已转交给 ' + to + '，' + fmtKey(f) + ' 提醒跟进');
  };
  $('#qShare').onclick = () => { closeSheet(); openShare(shEntryPayload(qsTarget)); };
  $('#qGo').onclick = () => {
    snapshot('处理任务');
    const sel = pickDate('qDate');
    const note = $('#qNote').value.trim();
    t.state = 'migrated'; t.due = sel; t.mig = (t.mig || 0) + 1;
    if (note) t.note = note;
    t.badge = '→' + fmtShort(sel) + (note ? ' · ' + note : '');
    fin('› 已推迟到 ' + fmtKey(sel));
  };
}

/* ============ 分组管理 ============ */
let gEdit = null, pendingGDel = null;
function renameGroup(oldN, newN){
  walk((d, e) => { if (e.groups){ const i = e.groups.indexOf(oldN); if (i >= 0) e.groups[i] = newN; } });
  const j = extraGroups.indexOf(oldN);
  if (j >= 0) extraGroups[j] = newN;
}
function deleteGroup(n){
  walk((d, e) => { if (e.groups){ const i = e.groups.indexOf(n); if (i >= 0) e.groups.splice(i, 1); } });
  extraGroups = extraGroups.filter(x => x !== n);
}
$('#searchBox').addEventListener('keydown', ev => {
  if (ev.key === 'Enter'){
    const v = ev.target.value.trim(); if (!v) return;
    ev.target.blur(); cur = {name:'search', q:v}; closeDrawer(); render();
  }
});

/* ============ 分组面板 ============ */
function openSheet(){ dismissKB(); buildSheet(); $('#gsheet').classList.add('on'); $('#mask').classList.add('on'); placeToolbar(); }
function closeSheet(){
  $('#gsheet').classList.remove('on');
  if (!$('#drawer').classList.contains('on')) $('#mask').classList.remove('on');
  const t = sheetTarget; sheetTarget = null;
  if (t && !(t.text || '').trim() && !(t.groups && t.groups.length)
      && !(t.images && t.images.length) && !(t.children && t.children.length)) removeEntry(t);
  render();
}
function buildSheet(){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">分组 · ' + ((sheetTarget.text || '未命名行').slice(0, 14)) + '</div>'
    + '<div class="gs-chips" id="gsChips"></div>'
    + '<div class="gs-new"><input id="gsNew" placeholder="新建分组…" autocomplete="off"><button id="gsAdd">添加</button></div>'
    + '<button class="gs-done" id="gsDone">完成</button>';
  const chips = $('#gsChips');
  allGroupNames().forEach(g => {
    const c = document.createElement('button');
    c.className = 'gs-chip' + ((sheetTarget.groups || []).includes(g) ? ' on' : '');
    c.textContent = (tplOf(g) === 'food' ? '🍚 ' : '#') + g;
    c.onclick = () => {
      snapshot('分组'); const a = sheetTarget.groups = sheetTarget.groups || [];
      const i = a.indexOf(g); i >= 0 ? a.splice(i, 1) : a.push(g); scheduleSave(); buildSheet();
    };
    chips.appendChild(c);
  });
  $('#gsAdd').onclick = () => {
    const v = $('#gsNew').value.trim().replace(/^#/, ''); if (!v) return;
    if (!extraGroups.includes(v)) extraGroups.push(v);
    snapshot('分组'); const a = sheetTarget.groups = sheetTarget.groups || [];
    if (!a.includes(v)) a.push(v); scheduleSave(); buildSheet();
  };
  $('#gsDone').onclick = closeSheet;
}

/* ============ 报告生成 ============ */
function genReport(g, kind, incMood){
  const ta = TODAY.split('.').map(Number);
  const monday = parseKey(TODAY); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const weekKeys = [];
  for (let i = 0; i < 7; i++){ const d = new Date(monday); d.setDate(monday.getDate() + i); weekKeys.push(dkey(d)); }
  const rangeStr = kind === 'day' ? fmtKey(TODAY)
    : kind === 'week' ? (fmtKey(weekKeys[0]) + '–' + fmtKey(weekKeys[6]))
    : (ta[0] + '年' + ta[1] + '月');
  const label = {day:'日报', week:'周报', month:'月报'}[kind];
  const inR = dk => kind === 'day' ? dk === TODAY
    : kind === 'week' ? weekKeys.includes(dk)
    : dk.startsWith(ta[0] + '.' + ta[1] + '.');
  const cat = {done:[], doing:[], plan:[], drop:[], ev:[], note:[], mood:[], bang:[], ask:[]};
  walk((date, e) => {
    if (!(e.groups && e.groups.includes(g))) return;
    const ed = (e.sym === 'task' && e.state === 'done' && e.doneDay) ? e.doneDay : date;
    if (!inR(ed)) return;
    const dd = fmtShort(ed);
    if (e.sym === 'task'){
      if (e.state === 'someday') return;
      if (e.state === 'done') cat.done.push('· ' + e.text + (e.note ? '——' + e.note : '') + '（' + dd + '）');
      else if (e.state === 'dropped') cat.drop.push('· ' + e.text + (e.note ? '——' + e.note : '') + (e.badge ? '（' + e.badge + '）' : ''));
      else if (e.state === 'delegated') cat.doing.push('· ' + e.text + '（已转交' + (e.delegate ? '给 ' + e.delegate.to : '') + '）');
      else if (e.state === 'migrated' && !e.due) return;
      else if (e.state === 'migrated' && e.due && parseKey(e.due) <= parseKey(TODAY)) return;
      else if (e.due && parseKey(e.due) > parseKey(TODAY)) cat.plan.push('· ' + e.text + '（' + fmtShort(e.due) + '）');
      else cat.doing.push('· ' + e.text + (e.badge ? '——' + e.badge : (e.progress ? '——已完成' + e.progress + '%' : '')));
    }
    else if (e.sym === 'event') cat.ev.push('· ' + e.text + '（' + dd + (e.children && e.children.length ? ' · 引发 ' + e.children.length + ' 条' : '') + '）');
    else if (e.sym === 'bang') cat.bang.push('· ' + e.text + '（' + dd + '）');
    else if (e.sym === 'ask') cat.ask.push('· ' + e.text);
    else if (e.sym === 'note') cat.note.push('· ' + mealFullText(e));
    else if (e.sym === 'mood') cat.mood.push('· ' + e.text + '（' + dd + '）');
  });
  let out = '【#' + g + ' ' + label + '】' + rangeStr + '\n';
  const sec = (t, a) => { if (a.length) out += '\n' + t + '（' + a.length + '）\n' + a.join('\n') + '\n'; };
  sec('✓ 已完成', cat.done); sec('▶ 进行中', cat.doing); sec('⏭ 已排未来', cat.plan);
  sec('✕ 搁置', cat.drop); sec('○ 相关事件', cat.ev);
  sec('！ 重点', cat.bang); sec('？ 疑问', cat.ask); sec('— 备忘', cat.note);
  if (incMood) sec('= 心情记录', cat.mood);
  if (out.trim().split('\n').length <= 1) out += '\n（该分组在此周期内暂无记录）';
  return out;
}
function openReport(g, kind, incMood){
  incMood = !!incMood;
  const R = $('#report');
  R.innerHTML = '<div class="rv-head"><div class="rv-title">#' + g + ' · 报告</div>'
    + '<button class="pill-btn" id="rpClose">收起</button></div>'
    + '<div class="rp-body"><div class="rp-tabs" id="rpTabs"></div>'
    + '<div class="rp-text" id="rpText"></div>'
    + '<button class="rv-confirm" id="rpCopy" style="margin-top:14px">复制报告</button>'
    + '<div class="rp-note">原型为规则拼装示意 · 正式版可一键 AI 润色成正式语气、自定义模板</div></div>';
  const tabs = $('#rpTabs');
  [['day','日报'],['week','周报'],['month','月报']].forEach(([k, n]) => {
    const c = document.createElement('button'); c.className = 'chip' + (k === kind ? ' on' : '');
    c.textContent = n; c.onclick = () => openReport(g, k, incMood); tabs.appendChild(c);
  });
  const mc = document.createElement('button'); mc.className = 'chip' + (incMood ? ' on' : '');
  mc.textContent = '含心情'; mc.onclick = () => openReport(g, kind, !incMood); tabs.appendChild(mc);
  const sc = document.createElement('button'); sc.className = 'chip'; sc.textContent = '▣ 分享图';
  sc.onclick = () => openShare({type:'report', head:'啾啾岛 · 报告',
    cardTitle:'#' + g + ' · ' + ({day:'日报', week:'周报', month:'月报'}[kind] || '报告'),
    text:genReport(g, kind, incMood)});
  tabs.appendChild(sc);
  $('#rpText').textContent = genReport(g, kind, incMood);
  $('#rpClose').onclick = () => $('#report').classList.remove('on');
  $('#rpCopy').onclick = () => {
    const txt = $('#rpText').textContent;
    const p = (navigator.clipboard && navigator.clipboard.writeText) ? navigator.clipboard.writeText(txt) : Promise.reject();
    p.then(() => toast('已复制到剪贴板')).catch(() => {
      const r = document.createRange(); r.selectNodeContents($('#rpText'));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      toast('已全选 · 长按复制');
    });
  };
  R.classList.add('on');
}
reviewBtn.onclick = () => { if (cur.name === 'today') islandGo('postoffice','inbox'); else { cur = {name:'today'}; render(); } };

/* ============ 晚间复盘 ============ */
let queue = [], qi = 0, stat = null;
function openReview(){
  dismissKB();
  queue = []; qi = 0; stat = {mig:0, drop:0, del:0, sd:0};
  walkPage(TODAY, e => { if (e.sym === 'task' && e.state === 'open' && !e.due) queue.push(e); });
  if (!SET.duty) qi = queue.length;   /* v2.28 随缘：直达快照，想逐件过再点 */
  $('#review').classList.add('on'); renderReview();
}
function closeReview(){ $('#review').classList.remove('on'); render(); }
function renderReview(){
  const R = $('#review');
  let doneN = 0; walkPage(TODAY, e => { if (e.state === 'done') doneN++; });
  if (qi >= queue.length){
    let recN = 0, evN = 0; const moods = [];
    walkPage(TODAY, x => { if (isMinor(x) && x.sym !== 'task') return;   /* 小事不进快照 */
      recN++; if (x.sym === 'mood' && x.text) moods.push(x.text); if (x.sym === 'event') evN++; });
    const rvLeft = SET.duty ? 0 : queue.filter(t => t.sym === 'task' && t.state === 'open').length;
    let oldDone = 0;
    walk((k, x) => { if (k !== TODAY && x.sym === 'task' && x.state === 'done' && x.doneDay === TODAY) oldDone++; });
    const stAll = STAMP_PRESETS.concat((SET.stamps || []).filter(x => !STAMP_PRESETS.includes(x)));
    const stCur = P().stamp || null;
    let mealsHtml = '';
    if (modOn('meals') && SET.mods.mealLog === true){
      const got = {};
      walkPage(TODAY, x => { const k2 = mealSlotOf(x);
        if (k2 && k2 !== 'unk' && !got[k2]) got[k2] = mealStrip(x.text).slice(0, 8) || '已记'; });
      const cell = (k2, ghost) => got[k2]
        ? '<button class="gs-chip on" style="pointer-events:none">✓' + MEAL_NM[k2] + ' ' + vEsc(got[k2]) + '</button>'
        : '<button class="gs-chip" data-ml="' + k2 + '"' + (ghost ? ' style="opacity:.6"' : '') + '>'
          + (ghost ? '＋' + MEAL_NM[k2] : MEAL_NM[k2] + ' ─') + '</button>';
      mealsHtml = '<div class="rv-q" style="margin-top:18px">今天的三餐 · 点空格子补一句</div>'
        + '<div class="gs-chips">' + cell('bre') + cell('lun') + cell('din') + cell('tea', true) + cell('sup', true) + '</div>'
        + '<div id="rvMealBox"></div>';
    }
    R.innerHTML = '<div class="rv-head"><div class="rv-title">晚间复盘</div>'
      + '<button class="pill-btn" id="rvClose">收起</button></div>'
      + '<div class="rv-body"><div class="rv-finish" style="margin:14px auto 0">' + jjImg('night', 120) + '<br><b>今日快照</b><br>'
      + '记录 ' + recN + ' 条 · 完成 ' + doneN + ' 件 · 事件 ' + evN + ' 件<br>'
      + '迁移 ' + stat.mig + ' · 放弃 ' + stat.drop + ' · 转交 ' + stat.del + (stat.sd ? ' · 储备 ' + stat.sd : '')
      + (oldDone ? ('<br>还清了 ' + oldDone + ' 件旧账 ✓') : '')
      + (moods.length ? ('<br>今天的心情：' + moods.slice(0, 3).join('、')) : '')
      + '<br>' + (rvLeft ? '还有没做完的，想现在整理就点下面。' : doneN ? '今天完成的事都记下了，收起前还可以盖个章。' : '今天先记到这里，想补一句也可以。') + '</div>'
      + (rvLeft ? '<div class="rv-q" style="margin-top:14px;text-align:center">还有 ' + rvLeft + ' 件没做完 · 明天我替你收进「储备」'
          + '<br><button class="gm-btn" id="rvWalk" style="margin-top:8px;padding:8px 16px">现在过一遍 ›</button></div>' : '')
      + mealsHtml
      + '<div class="rv-q" style="margin-top:18px">🗣 说说今天</div><div id="rvVoice"><button class="gm-btn" id="rvVoGo" style="width:100%;padding:10px">说一段，我来分拣 ›</button></div>'
      + '<div class="rv-q" style="margin-top:18px">给今天盖个章</div>'
      + '<div class="gs-chips" id="rvStamps">' + stAll.map(x => '<button class="gs-chip' + (stCur === x ? ' on' : '') + '" data-st="' + escAttr(x) + '">' + vEsc(x) + '</button>').join('') + '</div>'
      + '<input id="rvNewStamp" class="qdate" placeholder="或自己刻一个章（会存进你的章库）" style="margin-top:10px">'
      + '<input id="rvSum" class="qdate" placeholder="给今天留一句话（可不填）" style="margin-top:10px" value="' + String(P().summary || '').replace(/"/g, '&quot;') + '">'
      + '<button class="rv-confirm" id="rvSave">保存小结并收起</button>'
      + '<button class="gm-btn" id="rvShare" style="width:100%;margin-top:12px;padding:10px">▣ 把今天做成分享图</button></div>';
    $('#rvClose').onclick = closeReview;
    if ($('#rvWalk')) $('#rvWalk').onclick = () => { queue = queue.filter(t => t.state === 'open'); qi = 0; renderReview(); };
    if ($('#rvVoGo')) $('#rvVoGo').onclick = () => openVoice({onDone:() => renderReview()});
    R.querySelectorAll('[data-st]').forEach(b => b.onclick = () => {
      P().stamp = b.dataset.st; scheduleSave();
      R.querySelectorAll('[data-st]').forEach(x => x.classList.toggle('on', x === b));
    });
    R.querySelectorAll('[data-ml]').forEach(b => b.onclick = () => {
      const k2 = b.dataset.ml;
      const box = $('#rvMealBox');
      box.innerHTML = '<div class="rv-q" style="margin:12px 0 6px">' + MEAL_WORD[k2] + ' · 顺手补全这顿</div>' + mealComposerHTML();
      bindMealComposer(box, TODAY, k2, () => renderReview());
      const w = box.querySelector('#mcWhat'); if (w) w.focus();
    });
    const stTake = () => {
      const ns = $('#rvNewStamp').value.trim();
      if (ns){ if (!STAMP_PRESETS.includes(ns) && !SET.stamps.includes(ns)) SET.stamps.push(ns); P().stamp = ns; }
      P().summary = $('#rvSum').value.trim(); scheduleSave();
    };
    $('#rvSave').onclick = () => { stTake(); closeReview(); };
    $('#rvShare').onclick = () => { stTake(); openShare(shDayPayload(TODAY)); };
    return;
  }
  const t = queue[qi];
  R.innerHTML = '<div class="rv-head"><div class="rv-title">晚间复盘</div>'
    + '<span class="rv-prog">' + (qi + 1) + ' / ' + queue.length + '</span>'
    + '<button class="pill-btn" id="rvClose">收起</button></div>'
    + '<div class="rv-body">'
    + (doneN ? '<div class="rv-done-note">今天完成了 ' + doneN + ' 件 ✓</div>' : '')
    + '<div class="rv-card"><div class="rv-task" id="rvTask"></div>'
    + (t.badge ? '<div class="rv-meta"><span class="badge">' + t.badge + '</span></div>' : '')
    + '<div class="rv-q">这件事怎么处理？</div>'
    + '<div class="rv-grid">'
    + '<button class="rv-btn b-done" id="bDone"><span class="g">✓</span>完成</button>'
    + '<button class="rv-btn b-mig"  id="bMig"><span class="g">›</span>继续做</button>'
    + '<button class="rv-btn b-drop" id="bDrop"><span class="g">✕</span>不做了</button>'
    + '<button class="rv-btn b-del"  id="bDel"><span class="g">→</span>转交</button>'
    + '<button class="rv-btn" id="bSd" style="grid-column:1/-1"><span class="g" style="color:var(--ink-faint)">☾</span>储备 · 先放着，不催</button>'
    + '</div>'
    + (SET.duty && (t.mig || 0) >= 3 ? '<div class="rv-q" style="margin:12px 0 0;color:var(--accent)">这件事已经顺延了 ' + t.mig + ' 天 · 暂时顾不上，可以先放进「☾ 储备」</div>' : '')
    + '<div class="rv-mig-panel" id="migPanel">'
    + '<div class="mig-quick" id="migQuick"></div>'
    + '<input type="date" class="qdate" id="migDate">'
    + '<input id="migNote" placeholder="一句话进度，如：初稿完成，剩附录">'
    + '<button class="rv-confirm" id="migGo">确认迁移</button>'
    + '</div>'
    + '<div class="rv-mig-panel" id="rvDelPanel">'
    + '<input id="rvDelTo" class="qdate" placeholder="转交给谁" style="margin-bottom:10px">'
    + '<div class="mig-quick" id="rvDelQuick"></div>'
    + '<input type="date" class="qdate" id="rvDelDate">'
    + '<button class="rv-confirm" id="rvDelGo">确认转交 · 到期提醒我跟进</button>'
    + '</div></div></div>';
  const taskBox = $('#rvTask');
  const sn = symNode({sym:'task', state:'open'}); sn.classList.add('static'); taskBox.appendChild(sn);
  const tt = document.createElement('span'); tt.textContent = t.text; taskBox.appendChild(tt);
  $('#rvClose').onclick = closeReview;
  const next = () => { qi++; renderReview(); };
  const rvMemoStep = () => {
    const card = R.querySelector('.rv-card');
    card.innerHTML = '<div class="rv-task"><span class="glyph done" style="font-size:17px">✓</span><span>已完成</span></div>'
      + '<div class="rv-q">补一句备注？会进日报周报（可跳过）</div>'
      + '<input id="rvMemo" class="qdate" placeholder="比如：对方已确认 / 结果如何…" value="' + escAttr(t.note) + '">'
      + '<div class="rv-grid" style="margin-top:12px">'
      + '<button class="rv-btn" id="rvMSkip">跳过</button>'
      + '<button class="rv-btn b-done" id="rvMSave"><span class="g">✓</span>保存备注</button></div>';
    $('#rvMSkip').onclick = next;
    $('#rvMSave').onclick = () => { const m = $('#rvMemo').value.trim(); if (m) t.note = m; next(); };
  };
  $('#bDone').onclick = () => { t.state = 'done'; t.doneDay = TODAY; cycOnDone(t); rvMemoStep(); };
  $('#bDrop').onclick = () => { t.state = 'dropped'; t.badge = '不做了'; stat.drop++; toast('✕ 已放弃 · 页面保留划痕'); next(); };
  $('#bSd').onclick = () => { t.state = 'someday'; delete t.due; t.badge = '☾ 想做'; stat.sd = (stat.sd || 0) + 1; toast('☾ 收进「储备」· 不催不追'); next(); };
  $('#bDel').onclick  = () => { $('#migPanel').classList.remove('on'); $('#rvDelPanel').classList.toggle('on'); };
  $('#bMig').onclick  = () => { $('#rvDelPanel').classList.remove('on'); $('#migPanel').classList.toggle('on'); };
  setupDatePick('migQuick', 'migDate');
  setupDatePick('rvDelQuick', 'rvDelDate');
  $('#rvDelGo').onclick = () => {
    const to = $('#rvDelTo').value.trim(); if (!to){ toast('先填转交给谁'); return; }
    const f = pickDate('rvDelDate');
    t.state = 'delegated'; t.delegate = {to, follow:f}; delete t.followArrived;
    t.badge = '→ ' + to + ' · ' + fmtShort(f) + ' 跟进';
    stat.del++; toast('→ 已转交给 ' + to); next();
  };
  $('#migGo').onclick = () => {
    const sel = pickDate('migDate');
    const note = $('#migNote').value.trim();
    t.state = 'migrated'; t.due = sel; t.mig = (t.mig || 0) + 1;
    if (note) t.note = note;
    t.badge = '→' + fmtShort(sel) + (note ? ' · ' + note : '');
    stat.mig++; toast('› 已迁移到 ' + fmtKey(sel)); next();
  };
}

/* ============ 导出备份 ============ */
function exportMD(){
  let out = '# 啾啾岛备份（' + fmtKey(TODAY) + ' 导出）\n';
  const SY = {task:'•', event:'○', note:'—', mood:'=', ask:'？', bang:'！'};
  Object.keys(PAGES).sort((a, b) => parseKey(a) - parseKey(b)).forEach(k => {
    out += '\n## ' + k.split('.')[0] + '年' + fmtKey(k) + ' ' + weekCN(k) + '\n';
    const line = (e, ind) => {
      const st = e.state === 'done' ? '✓' : e.state === 'migrated' ? '›'
        : e.state === 'dropped' ? '✕' : e.state === 'delegated' ? '→' : (SY[e.sym] || '•');
      out += ind + st + ' ' + mealFullText(e)
        + (e.groups && e.groups.length ? '  #' + e.groups.join(' #') : '')
        + (e.badge ? '（' + e.badge + '）' : '')
        + (e.images && e.images.length ? '（图片×' + e.images.length + '）' : '') + '\n';
      (e.children || []).forEach(c => line(c, ind + '    '));
    };
    if (PAGES[k].plan.length){ out += '### 待办\n'; PAGES[k].plan.forEach(e => line(e, '')); }
    if (PAGES[k].flow.length){ out += '### 日常与随想\n'; PAGES[k].flow.forEach(e => line(e, '')); }
  });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([out], {type:'text/markdown'}));
  a.download = '啾啾岛备份.md'; a.click();
  toast('已生成备份文件');
}
let pendingWipe = false, pendingRestore = false;

/* ============ 导入 Markdown（合并：以现有为准，只补缺） ============ */
function importMD(text){
  const lines = String(text).split(/\r?\n/);
  let curKey = null, section = null, lastTop = null;
  const added = {days:0, items:0};
  for (const raw of lines){
    const h = raw.match(/^##\s*(?:(\d{4})年)?(\d{1,2})月(\d{1,2})日/);
    if (h){
      const y = h[1] ? +h[1] : parseKey(TODAY).getFullYear();
      curKey = y + '.' + (+h[2]) + '.' + (+h[3]);
      if (!PAGES[curKey]){ PAGES[curKey] = {plan:[], flow:[], morningAsked:true}; added.days++; }
      section = null; lastTop = null; continue;
    }
    if (/^###/.test(raw)){ section = /要做|待办/.test(raw) ? 'plan' : 'flow'; lastTop = null; continue; }   /* v3.2 导出写的是「### 待办」 */
    if (!curKey) continue;
    const m = raw.match(/^(\s*)([•○—=✓›✕→？！?!])\s+(.*)$/);
    if (!m) continue;
    const indent = m[1].length >= 2;
    let txt = m[3].trim();
    let badge; const bm = txt.match(/（([^（）]+)）\s*$/);
    if (bm){ badge = bm[1]; txt = txt.slice(0, bm.index).trim(); }
    const groups = [];
    txt = txt.replace(/#([^\s#，。,]+)/g, (_, gg) => { groups.push(gg); return ''; }).trim();
    if (!txt){ if (!indent) lastTop = null; continue; }
    const glyph = m[2];
    const sym = glyph === '○' ? 'event' : glyph === '—' ? 'note' : glyph === '=' ? 'mood'
      : (glyph === '？' || glyph === '?') ? 'ask' : (glyph === '！' || glyph === '!') ? 'bang' : 'task';
    let state = glyph === '✓' ? 'done' : glyph === '›' ? 'migrated' : glyph === '✕' ? 'dropped'
      : glyph === '→' ? 'delegated' : (sym === 'task' ? 'open' : undefined);
    if (state === 'open' && badge && /someday|想做/.test(badge)) state = 'someday';
    let dup = false;
    walkPage(curKey, e => { if ((e.text || '').trim() === txt) dup = true; });
    if (dup){ if (!indent) lastTop = null; continue; }
    const e = {sym, state, text:txt, _id:++uid};
    if (groups.length) e.groups = groups;
    if (badge) e.badge = badge;
    const page = PAGES[curKey];
    const target = section ? page[section] : (sym === 'task' ? page.plan : page.flow);
    if (indent && lastTop) (lastTop.children = lastTop.children || []).push(e);
    else { target.push(e); lastTop = e; }
    added.items++;
  }
  scheduleSave();
  return added;
}
$('#mdInput').addEventListener('change', ev => {
  const f = ev.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try{
      const res = importMD(String(r.result));
      toast(res.items ? ('已补充 ' + res.items + ' 条 · 新增 ' + res.days + ' 天') : '没有需要补充的内容');
      cur = {name:'today'}; render();
    }catch(_){ toast('解析失败：请确认是本应用导出的 Markdown'); }
    ev.target.value = '';
  };
  r.readAsText(f);
});

/* ============ 完整备份 / 恢复（JSON） ============ */
function exportJSON(){
  if (!IMG_DB.ready){ imgBoot().then(exportJSON); return; }
  const data = JSON.stringify({pages:PAGES, extraGroups, set:SET, seen:SEEN, gcolor:GCOLOR, notes:NOTES, health:HEALTH, island:ISLAND, exportedAt:TODAY}, jstrip);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([data], {type:'application/json'}));
  a.download = '啾啾岛全量备份.json'; a.click();
  toast('已生成全量备份（含图片）');
}
$('#jsonInput').addEventListener('change', ev => {
  const f = ev.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try{
      const s = JSON.parse(String(r.result));
      if (!s.pages) throw 0;
      stageValidateBackup(s.set?.stagePlans); abuValidateBackup(s.set?.abuProfile);
      const restoredHealth = healthNormalize(s.health);
      const restoredIsland = islandNormalize(s.island);
      PAGES = s.pages; extraGroups = s.extraGroups || extraGroups;
      delete SET.abuProfile; SET.stagePlans=[]; Object.assign(SET, s.set || {}); SEEN = s.seen || SEEN; GCOLOR = s.gcolor || {}; NOTES = s.notes || []; HEALTH = restoredHealth; HEALTH_UNDO_WATER = null; ISLAND = restoredIsland;
      applyAccent(); undoStack = []; focusRef = null;
      ensureToday(); scheduleSave();
      toast('已恢复备份'); cur = {name:'today'}; render();
    }catch(_){ toast('恢复失败：文件不是有效的备份'); }
    ev.target.value = '';
  };
  r.readAsText(f);
});

/* ============ GitHub 云备份 ============ */
let ghTm = null, ghBusy = false, pendingGhRestore = false;
function ghCfg(){ SET.gh = SET.gh || {repo:'', token:'', on:false, last:''}; return SET.gh; }
function ghHeaders(){ return {Authorization:'Bearer ' + ghCfg().token, Accept:'application/vnd.github+json'}; }
function ghPayload(){
  const setCopy = Object.assign({}, SET); delete setCopy.gh;
  return JSON.stringify({pages:PAGES, extraGroups, set:setCopy, seen:SEEN, gcolor:GCOLOR, notes:NOTES, health:HEALTH, island:ISLAND, savedAt:new Date().toISOString()}, jstrip);
}
async function ghPush(manual){
  const c = ghCfg();
  if (!c.repo || !c.token){ if (manual) toast('先填仓库和令牌'); return; }
  if (ghBusy) return; ghBusy = true;
  try{
    await imgBoot();   /* v2.32 照片读出来了再备份，云端那份自带照片 */
    const url = 'https://api.github.com/repos/' + c.repo + '/contents/data.json';
    let sha;
    const r0 = await fetch(url, {headers:ghHeaders()});
    if (r0.status === 200){ try{ sha = (await r0.json()).sha; }catch(_){} }
    const body = {message:'啾啾岛备份 ' + TODAY, content:btoa(unescape(encodeURIComponent(ghPayload())))};
    if (sha) body.sha = sha;
    const r = await fetch(url, {method:'PUT',
      headers:Object.assign({'Content-Type':'application/json'}, ghHeaders()),
      body:JSON.stringify(body)});
    if (r.ok){
      c.last = fmtKey(TODAY) + ' ' + new Date().toTimeString().slice(0, 5);
      scheduleSave(); if (manual) toast('已备份到云端 ✓');
    } else if (manual) toast('备份失败 ' + r.status + '（检查仓库名 / 令牌权限）', 'oops');
  }catch(_){ if (manual) toast('网络不通，稍后会自动重试', 'oops'); }
  ghBusy = false;
}
function ghSchedule(){
  const c = SET.gh;
  if (!c || !c.on || !c.repo || !c.token) return;
  clearTimeout(ghTm); ghTm = setTimeout(() => ghPush(false), 60000);
}
async function ghRestore(){
  const c = ghCfg();
  if (!c.repo || !c.token){ toast('先填仓库和令牌'); return; }
  try{
    const r = await fetch('https://api.github.com/repos/' + c.repo + '/contents/data.json', {headers:ghHeaders()});
    if (!r.ok){ toast('云端还没有备份（' + r.status + '）'); return; }
    const j = await r.json();
    const s = JSON.parse(decodeURIComponent(escape(atob(String(j.content).replace(/\n/g, '')))));
    if (!s.pages) throw 0;
      stageValidateBackup(s.set?.stagePlans); abuValidateBackup(s.set?.abuProfile);
      const restoredHealth = healthNormalize(s.health);
      const restoredIsland = islandNormalize(s.island);
    const keep = ghCfg();
    PAGES = s.pages; extraGroups = s.extraGroups || extraGroups;
    delete SET.abuProfile; SET.stagePlans=[]; Object.assign(SET, s.set || {}); SET.gh = keep;
    SEEN = s.seen || SEEN; GCOLOR = s.gcolor || {}; NOTES = s.notes || []; HEALTH = restoredHealth; HEALTH_UNDO_WATER = null; ISLAND = restoredIsland;
    applyAccent(); undoStack = []; focusRef = null;
    ensureToday(); scheduleSave();
    toast('已从云端恢复'); cur = {name:'today'}; render();
  }catch(_){ toast('恢复失败：云端数据无法解析'); }
}
function openGhSheet(){
  dismissKB();
  const c = ghCfg(), S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">GitHub 云备份' + (c.last ? '（上次：' + c.last + '）' : '') + '</div>'
    + '<input id="ghRepo" class="qdate" placeholder="私有仓库：用户名/仓库名，如 xxx/dot-data" value="' + escAttr(c.repo) + '" style="margin-bottom:10px">'
    + '<input id="ghToken" type="password" class="qdate" placeholder="Fine-grained Token（只授权这一个仓库）" value="' + escAttr(c.token) + '" style="margin-bottom:10px">'
    + '<div class="gs-new" style="margin-top:2px">'
    + '<button class="gm-btn" id="ghSave" style="flex:1;padding:10px">' + (c.on ? '保存修改' : '保存并开启自动备份') + '</button>'
    + (c.on ? '<button class="gm-btn" id="ghOff" style="padding:10px">停用</button>' : '')
    + '</div>'
    + '<div class="gs-new" style="margin-top:10px">'
    + '<button class="gm-btn" id="ghNow" style="flex:1;padding:10px">立即备份</button>'
    + '<button class="gm-btn danger" id="ghPull" style="flex:1;padding:10px">从云端恢复</button>'
    + '</div>'
    + '<div class="rp-note" style="margin-top:10px">令牌只存在本机 · 数据在你的私有仓库 · 改动后约 1 分钟自动上传 · 仓库的提交历史即版本回滚</div>';
  const grab = () => { const c2 = ghCfg(); c2.repo = $('#ghRepo').value.trim(); c2.token = $('#ghToken').value.trim(); return c2; };
  $('#ghSave').onclick = () => {
    const c2 = grab();
    if (!c2.repo || !c2.token){ toast('仓库和令牌都要填'); return; }
    c2.on = true; scheduleSave(); toast('已开启自动云备份'); closeSheet(); ghPush(true);
  };
  if (c.on) $('#ghOff').onclick = () => { grab().on = false; scheduleSave(); toast('已停用自动备份'); closeSheet(); };
  $('#ghNow').onclick = () => { grab(); scheduleSave(); ghPush(true); };
  $('#ghPull').onclick = () => {
    if (!pendingGhRestore){ pendingGhRestore = true;
      toast('会覆盖本机数据 · 再点一次确认'); setTimeout(() => pendingGhRestore = false, 5000); return; }
    grab(); scheduleSave(); closeSheet(); ghRestore();
  };
  S.classList.add('on'); $('#mask').classList.add('on'); placeToolbar();
}

/* ============ 功能手册 ============ */
function showManual(){
  const R = $('#report');
  R.innerHTML = '<div class="rv-head"><div class="rv-title">功能手册</div>'
    + '<button class="pill-btn" id="mnClose">收起</button></div>'
    + '<div class="rp-body"><div class="rp-text">'
    + '【今日页三档 · 发给啾啾】\n待办 · 日常 · 随想；新的一条都从最下面的输入栏发给啾啾，像发消息一样，不用想放哪儿，我替你放好；哪一栏还空着，点那一行浅色字，直接写在那一栏\n•  待办——点一下打勾，长按处理（处理面板顶上写来历）\n🍚 💼 🚗 🎡…  日常——发生的事，按内容自动挑图标，点图标看细节、换图标\n💡 📖 ❓ ❗ 🌤  随想——灵感、学到的、疑问、重点、心情，也按内容自动挑；点图标能换，或者「写成一篇」放进记事小亭\n发出去我回一句：放在哪、能撤回、能改；一句话说了好几件事，我拆好给你看，点「都放好」才放进去\n行下不挂小签：分组、花了多少、和谁、纠错、避雷都在点符号的小卡里\n\n'
    + '【手帐和小岛】\n首页只放手帐；吃的、看的、读的、玩的、记的账住进岛上的房子，首页最下面一行「今天在岛上」，点开能看能改\n发给我的话，我有把握就直接收进房子（能撤回），没把握就问一句「送去哪」；说过「不用」的下次不再问\n每栋房子里都能「＋ 记一条」，哪天的事选哪天；设置 → 岛上的房子 里开关、置顶\n\n'
    + '【书写】\n写「明天 / 下周四 / 8.15号 / 28号」自动放到那天的待办；写「下午三点 / 16:00」自动挂时间\n说的是过去的事——「昨天打车花了 45」「上周五和朋友吃了火锅」「11月3日交了物业费」——我放回那天，账也记在那天\n一句里连加的钱自动算总数：「一共花了100+30+40」记 170 元；写了「=273.8元」就按你写的\n「一个经验：…」「心得：…」「冷知识：…」「一个想法：…」这样开头的，放进随想\n敲 # 归分组；已经记下的那条，点字就能改，回车在下面接着写\n\n'
    + '【因果记录】\n事件行回车：下一行自动挂在这件事下面\n空的子行再回车：回到顶层\n点事件的图标 →「在这件事下面补一条」；「▾3」点击折叠\n\n'
    + '【处理任务】\n点符号 = 完成；长按符号 = 推迟 / 不做了 / 转交 / 恢复\n推迟可选任意日期并填进度；转交要填给谁和跟进日，到期自动提醒\n处理面板里的备注会进日报周报\n\n'
    + '【翻阅】\n今日页左右滑（或顶栏 ‹ ›）翻到前一天 / 后一天\n☰ 侧栏：上面是手帐（日历、提醒、储备，和你的分组·长按管理），下面是小岛（开着的房子，长按置顶或关掉，「＋」里开别的），再往下按标记汇总、搜索\n汇总、房子、搜索里点符号可直接勾掉，点字直接改（改完留在原处），点日子去那天\n「◂ 8.6 转来」芯片点击跳回源头；历史页的「→8.12」跳去目标日\n\n'
    + '【🎤 说话】\n点输入栏左边的话筒，再按键盘右下角的 🎤 一口气说完，点「发送」：说了好几件事我拆开给你看，确认才放进去；想细改点「细改」，进整屏的分拣页（复盘里的「说说今天」也是它）。听错的名字照你的词典改好（设置 → 我的词典），点 ↺ 改回\n\n'
    + '【🎲 今天吃什么】\n美食 → 吃什么：从你的宝藏店（写过「宝藏 / 会再来 / 回购 / 必吃」或 8 分以上的）和想吃的店里抽，理由全是你自己写过的话；吃完点 ✓ 一键评价。美食分去过、宝藏、避雷、想吃：写「想去吃「店名」」「种草了「店名」」记成想吃，不算去过。三餐打卡在设置里可以再打开\n\n'
    + '【早安卡】\n每天第一次打开递上一张：大日期、农历节气、天气和昨天比冷暖、啾啾的一句话；有约好的事、去年今日 / 上个月的今天才出现在下面\n收起后日期旁留一个天气小签，点开再看；城市在 设置 → 天气城市 里加，最多 3 个\n\n'
    + '【复盘与报告】\n首页右上「信箱」查看岛民来信与系统消息；侧栏「更多 → 晚间复盘」查看今日快照和盖章，点「现在过一遍」可整理未完成事项\n没日子的事当天没做完，第二天自动收进「☾ 储备」，不催不计数（设置 → 提醒力度 可切到「规律」）\n分组视图里一键生成日报 / 周报 / 月报，可选含心情\n\n'
    + '【上岛】\n设置 → 功能手册 · 实验室 →「重新走一遍上岛」：改称呼、城市、生日，重新盖房子、换提醒搭档\n\n'
    + '【数据安全】\n数据只存在本机；设置里定期「完整备份(.json)」\n⏰ 芯片不会响，点它「加入系统日历」才有真提醒'
    + '</div></div>';
  $('#mnClose').onclick = () => R.classList.remove('on');
  R.classList.add('on');
}

/* ============ 版本记录 ============ */
function showChangelog(){
  const R = $('#report');
  R.innerHTML = '<div class="rv-head"><div class="rv-title">版本记录</div>'
    + '<button class="pill-btn" id="clClose">收起</button></div>'
    + '<div class="rp-body"><div class="rp-text">'
    + 'v3.10.1（当前 · 2026.11.21）\n· 小筑资料随主程序提供，首次进入可直接使用。\n\nv3.10.0（2026.11.21）\n· 岛主小筑：阿卜的出生手记、性格测试示意和四张明信片。\n\nv3.9.0（2026.11.20）\n· 滴答钟楼增加阶段计划和定时提醒。\n\nv3.8.1（2026.11.20）\n· 修正带钟点的日常误进待办\n\n'
    + 'v3.8.0（2026.11.19）\n· 日常按时间排列，支持补时间与修改\n\n'
    + 'v3.7.0（2026.11.18）\n【安排与亲友】\n· 一年后、三个月后及提前提醒放进对应日期待办\n· 新朋友资料预览收录，生日默认阳历\n· 重要经历可加入亲友时间点，原记录保留\n\n'
    + 'v3.6.0（2026.11.17）\n【阅读与打开体验】\n· 四档字号设置，保留行首符号，首次操作提示\n· 明信片最近领取在前，未获得默认折叠\n· 首屏与图片分离，本机缓存优先打开\n\n'
    + 'v3.5.5（2026.11.16）\n【加载与信箱修复】\n· 明信片场景图随 HTML 内置，不再依赖单独上传图片\n· 天气请求设置独立超时，失败可重试\n· 信箱批量按钮独立固定在底部，列表单独滚动\n\n'
    + 'v3.5.4（2026.11.14）\n【海边饭馆样式】\n· 店单加上菜单边框、格纹纸边和热汤小图案\n· 店铺改为餐票卡片，标记和人均更清楚，保留原记录与独立抽卡\n\n'
    + 'v3.5.3（2026.11.14）\n【海边饭馆】\n· 顶部简化为记美食、今天吃什么和我的店单，底部保留全部原始记录\n· 人均参考独立保存，可修改清空，不计入账房；旧支出保留\n· 抽卡沿用原来的独立页面，更多收起分享与三餐入口\n\n'
    + 'v3.5.2（2026.11.13）\n【来信与信箱整理】\n· 14封初见介绍信更新，三段排版、岛民姓名使用强调色\n· 未读消息在前、已读沉底，支持一键领取与删除已读\n· 清理消息不删除明信片，旧记录和收藏继续保留\n\n'
    + 'v3.5.1（2026.11.13）\n【首页信箱】\n· 首页右上改为信箱，未读消息显示圆点；复盘移到侧栏更多\n· 全部、岛民来信、系统消息分类，已读与收藏分别保存\n· 早安照片看到后不重复提示，旧收藏与来信保留\n\n'
    + 'v3.5.0（2026.11.13）\n【全景岛与明信片】\n· 14栋建筑可点选进入，支持地图放大和拖动，加入晨露小站与呦呦\n· 简约版可直接打开信箱和明信片册，收信、收藏、筛选与分享\n· 14张入住问候、42张岛民生活与故事、4张呦呦场景，共60张\n· 当天打开早安卡附一张明信片，每日一次；没打开不发、不补发，已收卡片保留\n\n'
    + 'v3.4.0（2026.11.12）\n【晨露小站】\n· 体重、围度、经期、饮水记录与变化图，支持修改、删除、补记\n· 身体指标估算、个人周期预计、水杯进度，计算说明收在页底\n· 四个板块可排序、移除和恢复，健康记录纳入完整备份\n【小岛页头】\n· 14栋建筑统一信纸式门楣，换上住户与建筑的新组合图\n【文案修订 · 11.13】\n· 上岛引导、岛民台词、消息回复与早晚提示改为具体简短的说法\n\n'
    + 'v3.3.5（2026.11.12）\n【美食 · 想吃】\n· 写「想去吃「店名」」「种草了「店名」」「收藏一家「店名」」「下次去吃「店名」」，记成想吃，不再算成去过一次\n· 集子里四格并排：去过 · 宝藏 · 避雷 · 想吃；「记一家店」也能选想吃\n· 吃什么：宝藏和想吃都会抽到；想吃的卡写着「还没去过 · 哪天收的」，吃完点 ✓ 评价，就从想吃挪到去过\n· 美食地图里也有想吃的店，后面标一个「想吃」\n\n'
    + 'v3.3.4（2026.11.11）\n【侧栏】\n· 小岛的房子一行放 3 个，跟上面手帐那排一样大，不挤了\n【首页】\n· 待办里有东西时，不再提示「储备 · 几件 · 想做哪件捞回来」；待办空着才出来\n【记账】\n· 一句里连加的钱自动算总数：「今天旅游一共花了100+30+40」记 170 元，回话里说一声「100+30+40 一共 170 元」\n· 写了等号的按你写的总数：「251.9+16.9+5=273.8元」记 273.8，不再把 251.9 也算进去；加起来对不上，回话里提一句\n· 一句里两笔一样的钱都算（早饭10元，午饭10元 = 20 元）；「花了300，……300元」这样同一笔说了两遍的，还是算一笔\n· 一句里最多认 8 笔（原来 3 笔）\n\n'
    + 'v3.3.3（2026.11.11）\n【小岛】\n· 住户的圆头像换成新画的：上岛引导里的三封信、身份四选一、住户说话，头像都是整张放进圆框，不再切掉一块\n· 发消息后啾啾回话，左边那个小圆也换成啾啾的圆头像\n\n'
    + 'v3.3.2（2026.11.11）\n【首页】\n· 哪一栏空着，就有一行浅色字（写一件要做的事 / 记一件今天的事 / 冒出来的念头），点一下直接在那一栏写；那支显眼的笔去掉了\n· 「一个经验：…」「心得：…」「冷知识：…」「一个想法：…」放进随想\n· 小卡里把待办换成日常 / 随想，真的挪过去，不再留在待办\n· 屏幕最下面那条深色的米色去掉了，整页一个颜色铺到底\n【房子和汇总】\n· 从侧栏房子进去的记录（还有账房、茶屋、汇总、搜索）：点字直接改，改完留在原处；点行首图标看这一行；点日子才去那天\n【美食】\n· 只分 吃过 · 宝藏 · 避雷，不再有「家常」\n· 吃什么只从宝藏里抽；吃完的评价是 宝藏 / 一般 / 避雷，「记一家店」是 宝藏 / 吃过 / 避雷\n\n'
    + 'v3.3.1（2026.11.11）\n【小岛】\n· 全家福里有翘翘了\n· 小岛茶屋门口挂上茶杯招牌，两栋中间摆了一张茶桌\n· 上岛时：三封信那行和落地那天的纸条，换成从信封里探头的啾啾；办岛民证那屏，啾啾在盖章；空地上插的是画好的小木牌\n\n'
    + 'v3.3（2026.11.10）\n【上岛】\n· 第一次打开有五屏引导：拆三封信、办一张岛民证（称呼、城市、生日、在忙什么）、先盖几栋房子、挑个提醒搭档、看看盖好的小岛\n· 落地那天，待办下面有一张啾啾的纸条，点一下例句就填进输入栏；发出第一条，纸条收走\n· 设置 → 功能手册 · 实验室 里能重新走一遍\n【说到别的日子，就放到那天】\n· 「昨天打车花了 45」「上周五和朋友吃了火锅」「11月3日交了物业费」：放回那天，账也记在那天；今天这页待办下面留一行\n· 要做的事只说了「28号」也认得：这个月还没到就是这个月，过了就是下个月\n【小岛】\n· 房子都换成四个字：铜板账房、记事小亭、秘屋树洞……日历换上信风邮局，储备换上心愿灯塔，温泉汤屋、秘屋树洞有了自己的样子\n· 新房子海风学堂（学习），学生党可以在上岛时盖\n· 提醒力度「严格」改叫「规律」\n· 生日那天，早安卡上我第一个祝你\n· 啾啾的回话改了口气；收进饭馆的那句会顺带说一声记了多少钱\n\n'
    + 'v3.2（2026.11.9）\n【发给啾啾】\n· 首页最下面多了一条输入栏：像发消息一样，打字或按键盘上的 🎤 说，点「发送」就记下了；档不用选，我来认\n· 发出去我回一句：放在哪、能撤回、能改；吃的、看的这类，有把握就直接收进房子，没把握就问一句\n· 一句话说了好几件事，我拆好给你看，点「都放好」才放进去；想细改就进整屏的分拣页\n· 每档的「＋」、点空白处写、右下角的「说一段」都收进了这条输入栏\n【三档】\n· 要做的事改叫待办，发生的事改叫日常，想法改叫随想；心情不再单独一档，并进随想\n· 随想也按内容挑小图标：💡 灵感、📖 学到、❓ 疑问、❗ 重点、🌤 心情，点图标能换\n【记事亭 · 随想架】\n· 记事亭多了「随想」页签：所有随想按日子收在一起，能按图标筛，点一条跳回那天\n· 挑几条「写成一篇」，变成一个新本子接着写；原来那几条还在当天，标上「已写成」\n\n'
    + 'v3.1（2026.11.9）\n【手帐和小岛分开】\n· 首页只放手帐：要做的事、发生的事、想法、心情\n· 吃的、看的、读的、玩的、记的账住进岛上的房子；首页最下面一行「今天在岛上」，点开能看能改\n· 写完一行，有把握就直接收进房子，旁边能撤回；没把握就问一句「送去哪」；什么都不像的留在手帐。说过「不用」的下次不再问\n【侧栏】\n· 上面是手帐：日历、提醒、储备三格，和你自己的分组\n· 下面是小岛：开着的房子排在这，长按能置顶或关掉，「＋」里能开别的\n【房子】\n· 设置里新加「岛上的房子」：每栋都能开关、置顶；关掉的不出现在侧栏，记过的都还在，回到手帐里\n· 美食、电影、阅读、娱乐的房子里有「＋ 记一条」，哪天的事选哪天\n· 新模板「娱乐」：休闲、KTV、按摩这类，住温泉汤屋\n【改名】\n· 熟人改叫亲友，循环提醒改叫提醒，笔记本改叫笔记，账号小本改叫密码，想做的事改叫储备\n· 房子名：海边饭馆、小岛影院、小岛书屋、账房、小岛茶屋、温泉汤屋、记事亭、树洞\n· 日历的邮局、储备的灯塔、树洞、汤屋还在画，先用旧图顶着\n\n'
    + 'v3.0（2026.11.6）\n【改名 · 啾啾岛 Jotbird】\n· 点点手帐改名「啾啾岛」，英文名 Jotbird。陪你记事的，从一颗小圆点换成了住在岛上的小鸟啾啾\n· 啾啾出现在引导页、侧栏、早安卡、复盘结束、各种空白页、账号小本、说一段分拣和出错提示里\n· 集子变成岛上的房子：美食街、小电影院、书屋、小账房、工作坊；侧栏的格子和工具也换上了小房子\n· 今天要做的都做完了，啾啾会出来说一声\n【换色】\n· 纸、墨、围巾红、海青，都从啾啾和岛上取色；6 套主题色也换成岛上的颜色，字比以前清楚\n· 分享图换了落款，多了「信纸」底图\n【更新提示】\n· 主屏幕上的名字和图标，要删掉旧图标、重新「添加到主屏幕」才会变成啾啾岛。删之前先在「设置 → 数据与备份」做一次完整备份；加好后要是记录没了，就用它恢复\n\n'
    + 'v2.32（2026.11.6）\n【更稳 · 更好点】\n· 照片和文字分开存：照片挪到浏览器的另一个仓库，不再挤占文字那 5MB；以前的照片第一次打开时自动搬过去，导出和云备份照旧带图\n· 「数据与备份 → 存储占用」能看到文字和照片各占多少\n· 行首的符号、每档的 ＋、翻天的箭头、字前的时间、小卡里的按钮：看起来一样大，手指能点中的范围变大了\n· 按标记汇总、搜索结果很长时先显示最近 120 条，底下点「再往前」接着看\n· 早安卡「今天的事」里单独设了时间的任务，时间也显示出来了\n· 约到某天、推迟到明天的任务，到了那天时间还在（以前会丢）\n· 「晚饭后散步」这种算运动 🏃，不再认成吃饭\n\n'
    + 'v2.31（2026.11.5）\n【今日页 · 分四档】\n· 要做的事 · 发生的事 · 想法 · 心情 四档固定；哪档还没写只剩一行浅色标题，点「＋」直接往那档写\n· 「？疑问」「！重点」归在想法里；挂在事件下面的子条目跟着事件走\n【发生的事用图标】\n· 行首按内容自动挑：🍚 吃喝（说了花多少、和谁也还是 🍚）· 💼 工作 · 🚗 出行 · 🎡 玩 · 🎬 看片 · 🏥 看病 · 🏃 运动 · 📚 学 · 🛍️ 买 · 🎁 人情 · 🏠 家里 · 👥 见人\n· 认错了点图标换，这一行就记住你选的\n【行下不再挂小签】\n· 分组、记账类别、和谁、从哪转来、听写纠错、拆条、避雷，全部收进点符号弹出的小卡；任务长按，处理面板顶上写来历\n· 时间写在字前面；避雷过的店，图标上一个小红点\n· 一行想换档（比如心情认成了事件），小卡里点「⇄」挪过去\n【早安卡】\n· 大日期、天气、点点的一句话放在上面；今天的事、去年今日 / 上个月的今天放下面，没有就不出现\n· 随便抽一条的「翻到一页」和饭点抽卡那行拿掉了\n· 今日页顶上的天气条缩成日期旁的小签，点一下看整张早安卡\n【侧栏】\n· 上面四格：默认 日历 · 想做的事 · 美食 · 记账，长按换；分组变成一排标签（长按管理）；其他工具一排图标；按标记汇总折起来\n【设置】\n· 分成 记录 / 提醒 / 工具箱 / 数据 / 其他；备份收进「数据与备份」；「任务风格 随缘 / 对账」改叫「提醒力度 温和 / 严格」\n\n'
    + 'v2.30（2026.11.5）\n【🗣 说一段 · 我来分拣】\n· 右下角的话筒换成「说一段 · 我来分拣」：点开是整屏，键盘直接弹好，按键盘右下角的 🎤 一口气说完，点右上角「分拣」\n· 分拣结果按放到哪分组：今天发生 / 今天要做 / 后天 / 昨天…，每条能改字、⇄ 换地方、✕ 不要；没问题点「确认」才放进去\n· 放到别的日子的，会去掉「后天」「昨天」这类词，到了那天读着才对；今天这页留一行小字，点一下跳过去\n· 说到一半退出也不丢，下次打开接着说\n【📖 我的词典 · 从你的记录里长出来】\n· 认识的人、去过的店自动收进词典，越常写越靠前；英文名（orion）也认得了\n· 听写打错的名字自动改好并标出来（「布尔」→ 不二），点 ↺ 改回，以后就不这样改\n· 店名说简称也认得：「陈先进」就是陈先进小馆，算去过一次；「姐姐」「我姐」算同一个人\n· 你手动把名字改对一次，它就记住；设置 → 我的词典 里能看、能删、能手动加「A 就是 B」\n· 「和旭旭、不二、orion、姐夫」这种一长串名单，每个人都算上\n\n'
    + 'v2.29（2026.11.5）\n【🎲 今天吃什么 · 抽卡】\n· 美食板块第二个页签换成「吃什么」：只从你说过好吃的店里抽，避雷的永远不会出现；宝藏是金边卡\n· 理由全是你自己写过的话：原话、你给自己的提醒（几点去、几个人去）、必点和别点、上次和谁花了多少，再加上今天的天气\n· 城市跟早安卡走，可选堂食 / 外卖；降温的日子「想吃热乎的」自动亮；好久没去的店更容易出现\n· 点「就它了」进今天要做；吃完点 ✓，一键说「宝藏 / 还想去 / 一般 / 避雷」，就算去过一次\n· 早安卡在饭点多一行「中午 / 晚上吃什么？抽一张」\n【🍚 只记喜欢的和避雷的】\n· 三餐打卡退役：三餐页签和复盘里的三餐格子默认收起，以前的记录都在，设置里可以再打开\n· 新增「记一家店」：店名、宝藏 / 还想去 / 避雷、一句话，必点别点城市花费都可不填\n· 去过几次：任何一句话里提到这家店都算（同一天算一次）\n· 又写到避雷过的店，那行下面冒一枚红签，提醒你当时说过什么\n· 识别补强：「可复购」「不会再吃了」认得了；「天使面没那么好吃了」「避雷蓝龙虾」只算单品，不冤枉整家店\n【🎙 说一段，我来安排】\n· 今日页右下角常驻一颗 🎙，复盘里也有「说说今天」：用 iPhone 键盘的听写一口气说，点「整理一下」，每句自动放到该去的地方——后天要做的进后天，今天吃的进今天还认出店名和好不好吃，花的钱进记账（「打车花了45」没说元也认），昨天的事放回昨天\n· 放之前给你看一眼，哪句放哪点一下就能换，不要的划掉\n· 直接在某一行里说了一大段，行下会出现「✂ 拆成 N 条」\n\n'
    + 'v2.28（2026.11.5）\n【☀ 早安卡 · 每天第一次打开】\n· 今天几号、农历、节气节日，离下个假期还有几天\n· 天气：今天和昨天的温度画成两根条，冷了暖了一眼看出；跟着给穿衣建议（加外套 / 少穿一件 / 照昨天穿），几点开始下雨也说\n· 今天的事：谁过生日、约好今天的、转交该跟进的——只放有日子的\n· 翻到一页：从旧记录里抽一条（一个月前的今天优先），点一下跳回那天\n· 最后点点说一句话；点「开始全新的一天」进今日页\n· 收起后今日页顶上留一行天气条，点开再看整张卡\n· 天气城市在 设置 → 天气城市：最多存 3 个，卡片上点城市名来回切，也能一键定位；没网就不显示天气，别的照常\n【随缘：没做完的不再天天搬】\n· 没日子的任务当天没做完，第二天自动收进「☾ 想做的事」：不弹窗、不计次、不催；今日页一行小字能看到，想做哪件点「⤴ 今天做」\n· 推迟到某天、那天正好没打开的不会再丢：两天内补到今天（带「原定」小签），更久的收进想做的事\n· 晚间复盘直达快照和盖章；想逐件过，点「现在过一遍」\n· 今日页不再挂「>×5」这类拖延计数\n· 喜欢每天逐件表态的，设置 → 任务风格 切回「对账」，一切照旧\n· Someday 改叫「想做的事」\n【三餐不追“没吃”】\n· 打卡墙上没记的那顿只是一个小点，不再是等你填的虚圈\n· 「三餐齐全连击」退役，换成只增不减的「本月吃到新店」\n【其他】\n· App 在后台过了夜，回来自动翻到新的一天；切走前没存的内容先存好\n\n'
    + 'v2.27（2026.8.28）\n【⚙ 今日小事折叠条 · 正文归正文】\n· 模块生出来的行——三餐打卡（含没吃）、本子足迹（开了/写了）、「记一笔」的账——不再混在流水里，收进页尾一条：「⚙ 今日小事 · 5 条　🍚没吃×2 · 📓本子×2 · 💰记账×1」\n· 你亲手写的句子永远在正文，哪怕带着 🍚💰 小签；点条展开是完整的行，照旧能改能删能挂；手动挂到事件下面的小事跟着事件走，不折叠\n· 复盘快照和一日分享卡默认只算正文（任务不受影响）；从汇总/搜索/打卡墙跳到某条小事时会自动帮你展开\n\n'
    + 'v2.26（2026.8.26）\n【记账类别 · 你说了算】\n· 类别管理（盘点页「✎ 类别」或换类面板底部进）：预置八类可改叫法（自动识别规则照旧），自定义的可改名可删——改名会带着用过它的记录一起换，删了的回到自动分类（双确认）\n【点类别看它的全部】\n· 盘点里点任何一个类别条，跳到流水只看那一类：大数字、日均、逐日账单全部只算它；流水页的图例也能点；「只看 · 出行 ✕」一点回到全部\n\n'
    + 'v2.25（2026.8.26）\n【💰 记一笔 · 哪天花的记哪天】\n· 记账页新增「＋ 记一笔」：金额、类别、一句备注，还有个日期框——前天打的车今天想起来，选回前天就行\n· 记下的这笔不进什么独立账本，直接并到那天的手帐流水里，行首以 💰 符号出现，和手写的一样可改可删可撤\n· 备注留空就用类别名组句（「出行 45元」）；选了类别的直接定类，没选的按词典自动认\n\n'
    + 'v2.24（2026.8.26）\n【💰 记账板块（方案B）】\n· 不用换记录方式：任何一行写了金额（45元 / ¥18 / 30块）就自动成账；「工资到账」这类收入句自动排除\n· 类别从「打车/水电/买了…」这些词里保守认出（吃喝/出行/购物/居住/娱乐/医疗/人情/其他），三餐美食自动算吃喝、电影票算娱乐；认不出老实归其他\n· 行下多一枚 💰 小签，点开可换类别、可自定义类别、可选「不算花销」——处处可改铁律\n· 板块页双页签：📒 流水（本月大数字、分类彩条、逐日账单，每行点了跳回当天原句）｜📊 盘点（本月/上月、最大一笔、去向条形、几句值得一提，可切上月/今年、可出分享卡）\n· 聪明工具条同步递 💰 抓手；板块管理「💰 记账（扩展）」默认关\n【¥ 处处能补金额】\n· 三餐快捷表本就有金额框；现在电影/读书/美食集子里没写金额的行，会有一枚「¥ 补一笔」轻推——点开填个数，拼进句尾就归账\n\n'
    + 'v2.23（2026.8.25）\n【美食升格为板块 · 侧栏一个门】\n· 侧栏不再有 #美食 分组 + 三餐 两个入口——板块区一个「🍚 美食」，进门是双页签：🗂 集子（宝藏/家常/避雷、榜单、美食地图、分享）｜🍚 三餐（连击、外卖、花销、打卡墙），横着一步互切，不用跳页\n· 美食不再叫标签：行下小签从「#美食」改为「🍚 美食」，分组面板、聪明工具条同步改口；数据结构不变，老备份原样兼容\n· 板块管理里「三餐」改名「美食」，一个开关管整个板块；已经在用集子的，更新后自动点亮\n· 从打卡墙跳去某天再返回，会回到三餐那一签，不会跑回集子\n\n'
    + 'v2.22（2026.8.25）\n【三餐三改（按你的截图反馈）】\n· 快捷填写表：时间框换成「¥ 花销」——填了就拼进句尾（45元），当月吃饭花销直接算上；时间本来就有餐次，不用再填\n· 打卡墙四态分明：虚圈＝还没记（点一下补）、✕＝这顿没吃、灰点＝日常吃、彩点＝进了美食集子——没吃和没记不再撞脸\n· 餐食行不再用笔记的「—」：统一小饭碗 🍚 符号；快捷表记的这顿，餐次改成行下小签「🍚 午饭」，不再占正文字符——正文只剩你吃了什么\n· 手写的「晚饭点了外卖…」照旧全认；导出备份、报告、分享图里会自动把餐次词补回去，语境不丢\n\n'
    + 'v2.21（2026.8.24）\n【生日双历互算】\n· 填了出生年月日的生日（阳历阴历都行），卡片自动换算出另一个历法的生日：「换算：TA的农历生日是五月初二 · 下次落 明年6月6日」\n· 一键「🌗 农历生日也提醒 / 🌞 阳历生日也提醒」补建另一条；已有的不重复建（orion 和 Orion 这种大小写也认得出是同一人）\n· 反向换算引擎与农历表同源，1901–2099 与 zhdate 参照库逐日比对零偏差；生在闰月的按平月过\n【下次日期看得懂了】\n· 今年已经过完的，下次写明「明年 6月15日」；更远的直接带年份——不再让 6 月的生日在 8 月看起来像还没过\n【小修】\n· v2.12 之前建的老条目没有场景图标：现在按名字兜底（生日🎂 / 纪念💍 / 还款💳），不用重建\n· 老条目想要岁数和双历换算：点「改」→ 选 🎂生日 场景 → 补个出生年份即可\n\n'
    + 'v2.20（2026.8.24）\n【新符号 ？疑问 · ！重点】\n· 符号面板 4 行变 6 行：？还没弄清的事，！值得记住的一句\n· 侧栏「按标记汇总」多两栏：疑问一处翻、重点一处翻；分组报告单列「！重点」「？疑问」段\n· 流水里句尾带「？」的行自动识别为疑问（心情句不抢、任务区不抢）；导入导出、分享图、手册同步认识\n【✨ 聪明工具条（内测）】\n· 设置「内测实验室」里打开：打字时键盘上方递一排小抓手——写「明天下午三点交方案」递出「📅挂到8.25」「🕐记时间15:00」，写「晚饭在『烤匠』」递「#美食」，提到分组名/常用组也递 #签\n· 点一下贴上、变 ✓；再点取消，取消过的这行就不再自动挂——比回车后默默挂上看得见、可反悔\n· 识别与自动识别同一套规则；默认关，关着时一切照旧\n\n'
    + 'v2.19（2026.8.24）\n【输入工具条重做】\n· 九键平铺 → 五组大键：四个符号键收成一格（显示当前行符号，点开弹面板换，面板自带解释）\n· # 分组、📷 照片升级为带字大键；两个缩进键合成一个聪明键——上一条是事件时「⇥挂入」，已挂着时「⇤升出」，挂无可挂自动置灰\n· 🗑删除 与 ↩撤回 成对放条尾：删是删整行（连子弹一起），撤回是整行找回，不再是一次一个字\n\n'
    + 'v2.18（2026.8.24）\n【修复 · 笔记本页面蹿动】\n· 标题跳正文、正文打前几行字时整页乱蹿：长文编辑豁免了「保持在键盘上方」的滚动逻辑，自动长高改为只长不缩并锁定滚动位置\n【笔记本里写任务】\n· 以「- 」或「□ 」开头的行（回车或离开本子时）自动变成今天首页的任务，带「📓 翻开」来源签；生成后各走各的，改行字算新任务\n【全局返回上一页】\n· 进入二级页（人物页、本子、从日历点进的某天、集子…）左上角 ☰ 变成「‹ 返回」，一路原路返回；右上「回今日」照旧并清空来路\n【修复 · 熟人册新人被顶替】\n· 根因是重启后编号水位漏算了熟人册/循环提醒/笔记本，导致新人和旧人撞号——水位已补全，已撞的号启动时自动换新，账号小本解锁时同步计入\n\n'
    + 'v2.17（2026.8.23）\n【📓 笔记本】\n· 侧栏新增「笔记本」：像备忘录一样写长文——装修计划、读书摘抄、写到一半的小说，边写边自动保存\n· 本子不是孤岛：新建本子当天流水自动记「开了新本子《xxx》」，每天第一次动笔自动留「写了《xxx》」（一天一本只记一次）\n· 双向跳转：流水足迹带「📓 翻开」直达本子；本子页头「始于X · 写过N天 · 最近X」，点开看全部足迹、跳回任何一天\n· 搜索打通：全局搜索多一栏「本子里也有」\n· 本子长文不进识别引擎和报告——小说草稿不会污染熟店簿\n\n'
    + 'v2.16（2026.8.22）\n【🍚 三餐快捷录入】\n· 打卡墙的格子现在能点：空圈点一下＝就地补记这顿——是否吃了 / 吃了什么 / 店名 / 和谁 / 几点，一张小表引导填完，自动组成一句手帐话\n· 已记的格子点一下跳回原文；点日期看那天全页\n· 晚间复盘补三餐也换成同一张引导小表，不再是干巴巴一个输入框\n· 「这顿没吃」也算一条诚实记录，照样点亮格子\n【颜色区分】\n· 墙上灰点＝日常吃，橙点＝这顿进了美食集子（有店名/外卖）——一眼分清哪顿只是吃了、哪顿成了资产\n\n'
    + 'v2.15（2026.8.21）\n【🔖 今日印章】\n· 复盘收尾给今天盖个章：充实高效 / 平淡安稳 / 小有波折但收尾顺利 / 彻底放空 / 小有收获，也能自己刻——刻过的进你的章库\n· 今日页顶部和日页标题都能看到章，点一下随时改；过去任何一天也能补章\n【🍚 三餐（设置里打开）】\n· 写「早饭/午饭/晚饭/下午茶/夜宵 + 吃了什么」自动归格，不用打标签，识别保守绝不硬塞\n· 晚间复盘带三餐条：空格子点一下就地补一句\n· 三餐页：三餐齐全连击、本月外卖次数、吃饭花销、最常一起吃饭的人、两周打卡墙\n· 三餐里写了「店名」或外卖，自动同时收进美食集子（同一份数据，两副眼镜）\n【板块管理】\n· 设置新增：三餐 / 熟人册 / 账号小本 / 循环提醒 可开关，关掉的从侧栏消失、数据不动\n【处处可改】\n· 我们的时刻、重要时间点、账号小本条目——所有手动填写的现在都能点开修改（立为铁律）\n\n'
    + 'v2.14（2026.8.20）\n【⭐ 星标熟人 · 重要时间点】\n· 人物页可以点星：星标的人解锁「重要时间点」——认识 / 第一次见面 / 在一起…标签全由你写\n· 日期支持三档模糊：只填年份（第 N 个年头）、年份+月份（至今 N 年 N 个月）、整日（已 N 天 · 第 N 年）\n· 写了整日的：整百天纪念提前看得见（距 2700 天还有 32 天），一键「设提醒」进纪念日模板\n【🌟 我 · 人生时间点】\n· 熟人册第一页是你自己：入离职、搬家、第一次收到鲜花…同一套时间点，随时翻到自己的坐标\n\n'
    + 'v2.13（2026.8.20）\n【👥 熟人册】\n· 侧栏新增「熟人册」：点点从记录里认出的人（和X、转交给X）列成候选，点「收录」进册，不想要的可忽略\n· 收录时可填 本名＋昵称（多个用、隔开）：写哪个都认账，旧记录也一并追认到同一个人\n· 关系标签：亲情 / 友情 / 爱情 / 人脉 / 同事，也能自己写；外加自由备注\n· 人物页：我们的盘点（一起看过 / 一起吃过 / 共同出现 / 最近一次，可下钻）\n· 「我们的时刻」：手写纪念的事，或在记录里点 📌 收进来\n· 记录里的「和赵赵」小签可以点了，直接进TA的页；TA的生日提醒在人物页直达\n\n'
    + 'v2.12（2026.8.19）\n【循环提醒场景化】\n· 添加时先选场景：🎂生日 · 💍纪念日 · 🩸生理期 · 💳还款日 · 🔁自定义，表单跟着变，提前天数给好默认\n· 生日支持阴历：内置 1900–2100 农历表离线换算，填一次「农历冬月廿三」，每年自动算出阳历日子\n· 填出生年份/起始年份，提醒自动带岁数和周年：「🎂 妈妈生日（58 岁）」\n· 农历日子入系统日历＝一次写入未来 5 年各自算好的日期\n\n'
    + 'v2.11（2026.8.19）\n【美食盘点三档制】\n· 全页统一三个词：宝藏 / 家常 / 避雷——磁贴、榜单、小签一个说法，不再五花八门\n· 没写判决、只打了分也能归档：8分以上宝藏，6–8家常，6以下避雷；明确写「避雷 / 会再来」的以你的话为准\n· 榜单拆成「宝藏榜」和「避雷榜」，右侧统一显示分数或你的原话\n· 磁贴下多一行「还有 N 家没表态」，点开看清单、跳回当天补一句\n【怎么写】\n· 集子页新增「怎么写?」例句卡：每个模板一行范例\n· 写美食时没读出店名和表态，点点会轻声提示写法\n\n'
    + 'v2.10（2026.8.19）\n【提速】\n· 修复一条长句让识别卡死 11 秒的灾难性回溯——从侧栏进分组不再等 2 秒，瞬开\n· 保存后不再全量重算识别，只有熟店簿/熟人簿变了才重算\n【循环提醒】\n· 每条提醒新增「改」按钮：名字、周期、日期、提前天数都能直接修改，不用删了重建\n【叫法】\n· 「待办」统一改叫「任务」\n\n'
    + 'v2.9（2026.8.18）\n【☾ Someday · 给"改天做"一个正经的家】\n· 长按任务、晚间复盘、晨间勾选里都能把事放进 Someday：不催、不追、不算拖延，退出每日循环\n· 侧栏汇总新增「☾ Someday」，点任务符号一键「⤴ 捞回今天」\n· 跟了 3 天以上的任务，复盘时点点会提议放 Someday；晨间列表每行标「已跟 N 天」；「没勾的放 Someday」一键清场\n· Someday 不进报告不进任务列表——那是你表过态的事，不是欠着的账\n【识别修正（来自你的真实数据）】\n· 引号强调不再被当成店名（"自传"事件）：店名只跟美食分组学习\n· 正面判决词补充：可再来 / 好吃 / 很香 / 可回购（叹锅、烤匠这类都能认了）\n【数据卫生】\n· 导出与云备份不再夹带解析缓存；空白历史页和空白子行自动清理\n\n'
    + 'v2.8（2026.8.18）\n【找到卡顿真凶】\n· 列表里的照片过去直接渲染原图（每张几百KB），这是标签页慢的根源——现在插图自动生成小缩略图，列表只加载缩略图＋懒加载，点开看大图不变；老照片打开 App 后台自动补一遍缩略图\n· 侧栏改为打开时才构建，不再每次刷新页面都重算\n【做减法】\n· 设置删掉三个未实现的占位项（周报起始日 / 复盘提醒 / 应用锁），真做出来再回来\n· 推迟不再有进度滑杆：只留「一句话进度」，它会进报告和折叠时间线；旧数据里难看的「已完成0%」徽章自动清掉\n\n'
    + 'v2.7（2026.8.18）\n【更快】\n· 识别结果全面缓存，集子页不再重复解析；抽屉计数一次遍历\n· 集子列表先展示最近 30 条，底部「加载更早」，数据再多也秒开\n【更干净】\n· 迁移链归并：反复推迟的任务在集子和搜索里只显示最新一条（>×N 照旧），行下「▸ 一路 N 次」点开看途中进度小时间线；原页划痕不动\n【循环提醒】\n· 侧栏新增「🔁 循环提醒」：每年（生日纪念日）/ 每月（发工资）/ 每 N 天（周期），可设提前几天提示\n· 到那天自动出现在「今天要做」，正常打勾复盘；每 N 天类打完勾自动从今天重新起算（大姨妈越用越准）\n· 总日历和未来页提前可见；「📅 入系统日历」生成重复日历文件，手机会真的响\n\n'
    + 'v2.5（2026.8.18）\n· 同行人介词全覆盖：和/与/跟/同 都认（跟赵赵、与琨、同事一起都可以）；「跟进」「同时」这类词不会误判\n· 新增「账号小本」（侧栏 🔐）：独立于手帐流，主口令加密（AES），本机和云备份里只存密文；密码默认打码、点一下显示、一键复制；离开页面自动上锁\n· 小本内容不进搜索、报告、分享；主口令无找回，请记牢；适合 wifi/会员号级别，银行级请用系统钥匙串\n\n'
    + 'v2.4（2026.8.18）\n【识别再进化】\n· 多人同伴：「和赵赵、Orion和家人二刷」三个人都认出来，各记一次；家人/爸妈/同事等称呼有效\n· 点点的熟人簿与熟店簿：认过一次的人和店（含转交对象），之后不带引号、不带动作词也认识——"又吃了子午路肉夹馍"会计入去过次数\n· 二刷标注：同一部片多条记录，榜单和列表里标 ×2、"看了2次"\n· 店的判决＝括号外离店名最近的判决词；括号里的（惊艳/拉胯）只算单品评价\n· 金额不再误判日期：60.28元、6.28元这类都不会变成日期；月>12、日>31 不认；已有的错日期自动清掉\n· 外卖识别：挂「外卖」小签，美食地图单列「外卖」栏\n【节奏修正】\n· 晨间承接改为逐条勾选：勾谁带谁，配全选；不带的留在原页与任务汇总\n· 哪天做完算哪天：在任务汇总或历史页勾掉旧任务，记入当天——日报周报按完成日归属，复盘快照多一行"还清了 N 件旧账"，汇总里带「✓ 8.18 清账」签\n\n'
    + 'v2.3（2026.8.13）\n【按定稿示意图纠偏】\n· 「生成月报」改为直接生成本月盘点分享卡（数字+榜单+原话引用），不再打开文字版报告；文字版日/周/月报只在工作模板的「报告」里\n· 美食顶部中间改为「我的美食地图」：按城市展开店清单，点店跳原文\n· 盘点分享卡装全内容：美食卡新增城市分布条\n· 范围与标题用真实年月：盘点·2026 ▾ / 盘点·8月 ▾；卡片标题如「2026 我的观影年报」「8月 美食小结」\n· 「和谁」只认人名：限 1~3 字并紧跟动作词，转交过的人名优先识别\n· 未套模板的分组顶部只保留「▣ 分享」\n\n'
    + 'v2.2（2026.8.13）\n· 集子页顶部按示意图定稿：盘点·今年 ▾ ｜ 生成月报（工作模板为「报告」）｜ ▣ 分享（分享的就是当前盘点，含数字、榜单与美食地图，不再另设入口）\n· 模板选择搬进侧栏：新建分组时直接选；已有分组长按或左滑 →「模板」随时改\n· 美食「城市分布」升级为「我的美食地图」，点城市看该城清单\n\n'
    + 'v2.1（2026.8.13）\n· 集子页顶部收成一行：模板 / 报告（工作模板才有）/ 分享集子\n· 日报周报月报归入「工作」模板（#工作类分组名自动套用，其他分组顶部不再挤报告按钮）\n· 时间范围收进盘点标题：点「盘点·今年 ▾」循环切 今年/本月/去年/全部；「▣ 分享」也在盘点标题行\n· 盘点数字可点开：看过/回头再去/回购/避雷/和谁看，点进去是完整列表，再点跳到当天原文\n· 高分榜「和独自」改为「独自」\n· 主页任何一条记录整行长按即可生成分享图（任务的符号长按仍是处理面板）\n\n'
    + 'v2.0（2026.8.12）\n【集子结构化 · 记录长成资产】\n· 六种识别：《作品》、评分、金额、城市、"店名"、判决词（会再来/避雷…）、和谁一起——全从你写的原话里读，记录方式不变，历史一并识别\n· 四个模板：电影 / 美食 / 读书 / 花钱；#电影 #美食 这类分组名自动套用，集子页「模板·」一键换\n· 盘点面板：数字大盘 + 高分榜 / 回购避雷榜 + 城市分布，按 今年/本月/去年/全部 切换\n· 美食不算总账：按「去过几次」算回头率，单品价格只做小签\n· 别名合并：《英雄无归》=《蜘蛛侠英雄无归》确认一次，统计归一\n· 没打分的作品轻轻问一句，点一下补分\n· 点点记得：写到以前记过的店/片，键盘上方浮出上次的记录，一点跳回去\n· 「▣ 分享盘点」直接产年报/盘点卡\n\n'
    + 'v1.9.1（2026.8.12）\n· 分享卡自定义底图：往仓库传 share-bg.png（或分尺寸 share-bg-34 / 11 / 916.png），排版里自动多出「底图·深字 / 浅字」两个选项，删掉图片即恢复\n\n'
    + 'v1.9（2026.8.10）\n【一键分享图】\n· 四种卡片：单条（事件带因果串）/ 一天快照 / 日周月报 / 集子精选\n· 三种尺寸（3:4 / 1:1 / 竖屏）× 两套排版（手帐纸 / 墨色），带点点和纸纹\n· 入口：长按事件·笔记·心情的符号；任务长按面板；报告页与集子页的「▣」；复盘结束页\n· 支持系统分享面板直发，或长按预览图存相册；只分享你选中的内容\n\n'
    + 'v1.8.2（2026.8.10）\n· 点顶栏日期直接打开总日历选日子（标题带 ▾ 提示）\n· 修复：总日历点进过去的空白天进不了完整编辑页、左右滑一下才恢复的问题；未来天从日历进也统一为「提前安排」视图\n· 分割线整体转淡与纸色统一，输入框和按钮描边单独保留层次\n\n'
    + 'v1.8.1（2026.8.9）\n· 未来任何一天都能直接「＋ 提前安排一条」，到期自动进当天；别的日子挂过来的单独列出\n· 长内容自动换行：行输入改为自动增高，不再一行截断\n· 历史页去掉「返回日历」链接，页面更干净\n\n'
    + 'v1.8（2026.8.9）\n【品牌换装】\n· 全新配色：纸 / 墨 / 点亮橙对齐点点 Logo，主题色新增点亮橙并设为默认\n· 字号行距整体调升：标题、分区标签、正文层级更清楚\n· 点点吉祥物入驻：引导页、侧栏、复盘结束页、空白天\n· 提示文案改为点点语气，发生区提示点明因果挂载\n· 图标换新文件名 icon-dot.png，绕开 iOS 对旧图标的顽固缓存\n\n'
    + 'v1.7（2026.8.8）\n· 品牌更名「点点手帐 Dot」\n· 新增 GitHub 私有仓库云备份：改动后自动上传、立即备份、从云端恢复；仓库提交历史即版本回滚，电脑浏览器打开同一网址配置后即可同步\n\n'
    + 'v1.6（2026.8.8）\n· 任何方式完成（打勾 / 面板 / 复盘）后追问一句备注，可跳过，备注进日报周报\n· 历史页可直接编辑补记\n· 汇总视图升级：点符号就地勾掉/长按处理，点文字跳回当天并高亮定位\n· 今日页左右滑翻天（顶栏新增 ‹ › 箭头）\n· 双向溯源：「◂ 8.6 转来」点击跳回源头条目；历史页「→日期」跳去目标日\n· 识别中文时间：下午三点 / 晚上八点半 / 中午12点\n· 设置新增「使用引导 · 功能手册」，随时回看\n· 版本记录标注日期\n\n'
    + 'v1.5（2026.8.8）\n【因果记录显性化】\n· 事件行回车：下一行自动挂在这件事下面（空行再回车升回顶层）\n· 事件行尾新增「＋」：随时在这件事下补一笔\n· 子条目计数与折叠（▾3）；跨天承接的任务带「◂ 源自」溯源签\n· 周报里事件显示「引发 N 条」\n· 分区默认符号：「要做」默认 •，「发生」默认 ○（写了日期自动转任务）\n· 子条目仅事件可挂：缩进与「＋」只在事件（○）上生效\n· 「发生」区提示加铅笔图标\n【短板修复】\n· ⏰ 面板新增「加入系统日历」：生成日历文件，系统会真的响\n· 转交需填对象和跟进日期，到期自动生成「问问XX」任务\n· 复盘结束页改为今日快照 + 一句话小结（历史页可见）\n\n'
    + 'v1.4（2026.8.8）\n· 修复长按触发系统全选的蓝框\n· 识别下周X / 周X / 大后天 / 下个月X号 / X月Y号\n· 点日期 / 时间芯片可修改或清除\n\n'
    + 'v1.3（2026.8.8）\n· 键盘遮挡彻底修复：按可视区域计算，当前行始终保持在键盘上方\n· 图片可删除：空行退格先删图再删行；点大图有「删除这张图片」\n· 任务状态随时可改：任何状态长按（或点符号）重开四选一，可恢复任务\n· 打开处理面板 / 复盘时自动收起键盘；底部面板抬到键盘上方\n\n'
    + 'v1.2（2026.8.8）\n· 推迟可选任意日期：明天 / 后天 / 下周一 / 日历选择\n· 修复：空行插图后看不到缩略图\n· 分组可选颜色（长按分组 → 颜色）；设置新增主题色\n· 导出 Markdown 带年份分区；新增导入合并（以现有为准只补缺）\n· 新增完整备份 / 恢复（.json 含图片）\n\n'
    + 'v1.1（2026.8.7）\n· 顶栏避开刘海 / 灵动岛（安全区适配）\n· 修复输入聚焦时页面缩放窜动\n\n'
    + 'v1.0（2026.8.7）\n· 首个可日用版本：真实日期自动建页、本地持久化、晨间承接迁移、晚间复盘、总日历、分组、报告、搜索、图片、Markdown 导出、首次引导'
    + '</div></div>';
  $('#clClose').onclick = () => R.classList.remove('on');
  R.classList.add('on');
}

/* ============ 点点吉祥物（与 Logo 同源测绘数据） ============ */
function dotSVG(h){ return jjImg('nest', Math.round(h * 1.1)); }   /* v3.0 啾啾 → 啾啾 */

/* ============ v2.0 识别引擎：从原话里读结构 ============ */
SET.gtpl = SET.gtpl || {}; SET.alias = SET.alias || {}; SET.aliasNo = SET.aliasNo || {};
const CITY_LIST = ['上海','北京','杭州','广州','深圳','成都','重庆','武汉','西安','南京','苏州','天津','长沙','青岛','厦门','宁波','合肥','郑州','济南','福州','昆明','大连','沈阳','哈尔滨','长春','石家庄','太原','南昌','贵阳','南宁','兰州','海口','三亚','无锡','佛山','东莞','珠海','扬州','绍兴','嘉兴','温州','潮汕','顺德'];
/* 一级＝明确的去留判决（优先），二级＝口味形容（兜底） */
const V_NEG1 = ['非必要不去','不会再来','不会再吃','不会再去','再也不来','避雷','踩雷','别去了','别买'];
const V_POS1 = ['会再来','可再来','还会来','还想去','想再去','会回购','可回购','要回购','回购','可复购','复购','要二刷','二刷','必吃','宝藏','绝了','必回'];
const V_NEG2 = ['拉胯','难吃','翻车','不推荐'];
const V_POS2 = ['大满足','惊艳','好吃','很香','神作','yyds','推荐','值得','还行','凑合','很一般','一般般','味道一般','中规中矩'];
const V_NEG = V_NEG1.concat(V_NEG2);
const V_POS = V_POS1.concat(V_POS2);
/* ===== 美食三档（v2.11）：宝藏 / 家常 / 避雷 =====
   优先级：负面词 > 明确回头意愿词 > 分数（≥8宝藏 · 6–8家常 · <6避雷）> 口味词 */
const T_BAO2 = ['大满足','惊艳','神作','yyds'];
const TIER_NM = {bao:'宝藏', jia:'吃过', lei:'避雷'};   /* v3.3.2 不再有「家常」：6–8 分、只说好吃 / 还行的都算吃过 */
function foodTier(p){
  const w = p.verdict || null;
  if (w && (V_NEG1.includes(w) || V_NEG2.includes(w))) return 'lei';
  if (w && V_POS1.includes(w)) return 'bao';
  if (p.score != null) return p.score >= 8 ? 'bao' : (p.score >= 6 ? 'jia' : 'lei');
  if (w) return T_BAO2.includes(w) ? 'bao' : 'jia';
  return null;
}
/* v3.3.4 一句里的连加：100+30+40 → ¥170；写了「=273.8」按写的总数（加起来对不上也按写的，回话里说一声） */
const MC_NUM = '[¥￥]?\\s*\\d+(?:\\.\\d{1,2})?(?:\\s*[元块](?![以之]))?';
const MC_RE = new RegExp(MC_NUM + '(?:\\s*[+＋]\\s*' + MC_NUM + ')+(?:\\s*[=＝]\\s*' + MC_NUM + ')?', 'g');
function moneyChains(t){
  let chain = null;
  const out = String(t || '').replace(MC_RE, (m, off, all) => {
    const pre = all.slice(Math.max(0, off - 8), off), post = all.slice(off + m.length);
    const money = /[¥￥元块]/.test(m) || /(?:花了?|花费|付了?|付款|消费|支出|一共|总共|合计|共计|总计)\s*$/.test(pre);
    if (!money || /^\s*[%个次天号点分秒岁年月周人小遍趟页张本件条斤公千万百kKwWhH]/.test(post)) return m;
    const parts = m.split(/[=＝]/), nums = s => (s.match(/\d+(?:\.\d{1,2})?/g) || []).map(Number);
    const sum = Math.round(nums(parts[0]).reduce((a, b) => a + b, 0) * 100) / 100;
    const said = parts.length > 1 && nums(parts[1]).length ? nums(parts[1])[0] : null;
    if (!chain) chain = {expr:nums(parts[0]).join('+'), sum, said};
    return '¥' + (said != null ? said : sum) + ' ';
  });
  return {t:out, chain};
}
function moneyOf(t, r){   /* v3.3.4 从一句话里找钱，最多 8 笔 */
  const tp = moneyChains(t); if (tp.chain) r.chain = tp.chain;
  const prices = [], at = new Set(), byVal = new Map(); let m;
  const take = (v, i, k) => {   /* 同一个位置只算一次；换一种写法说同一个数（「两个人花了300…300元」），是同一笔又说了一遍；同一种写法的两笔一样的钱（早饭10元，午饭10元）都算 */
    v = Math.round(parseFloat(v) * 100) / 100;
    if (at.has(i)) return; at.add(i);
    if (byVal.has(v) && byVal.get(v) !== k) return;
    byVal.set(v, k); prices.push(v);
  };
  const p1 = /[¥￥]\s*(\d+(?:\.\d{1,2})?)/g, p2 = /(\d+(?:\.\d{1,2})?)\s*[元块](?![以之])/g;
  while ((m = p1.exec(tp.t))) take(m[1], m.index + m[0].length - m[1].length, 'y');
  while ((m = p2.exec(tp.t))) take(m[1], m.index, 'u');
  const p3 = /(?:花了|花费|付了|一共花了?|总共花了?)\s*(\d+(?:\.\d{1,2})?)(?![\d.]|\s*[%个次天号点分秒岁年月周人小遍趟页张本件条斤公千万百kKwWhH])/g;   /* v2.29 说话时常省掉「元」：打车花了45 */
  while ((m = p3.exec(tp.t))) take(m[1], m.index + m[0].length - m[1].length, 'h');
  if (prices.length) r.prices = prices.slice(0, 8);
}
function amtSum(a){ return Math.round((a || []).reduce((s, v) => s + v, 0) * 100) / 100; }   /* v3.3.4 几笔加起来，去掉 0.1+0.2 那种尾巴 */
/* v3.3.5 想吃：说了想吃 / 想去 / 种草 / 收藏 / 下次去…，又没说吃了、去了、好不好吃、几分、花了多少 → 还没去过 */
const WANT_RE = /想吃|想去|种草|收藏|下次去|下回去|有空去|改天去|回头去|找时间去|想试试|想尝尝|去试试|要去试|想打卡/;
const WANT_VISIT_RE = /吃了|吃过|吃到|喝了|去了|来了|拔草|打卡了|终于|还想|再去|再来|还要去|回购|二刷|又去|第[一二两三四五六七八九十\d]+次/;
const WANT_TASTE_RE = /好吃|难吃|太香|很香|一般般|踩雷|味道|惊艳|绝了|大满足/;
const WANT_HEAR_RE = /听说|据说|看着|看起来|网上|说是|推荐|种草/;
function isWantLine(t, r){
  return !!(r.store && WANT_RE.test(t) && !WANT_VISIT_RE.test(t) && r.score == null && !(r.prices && r.prices.length)
    && !(WANT_TASTE_RE.test(t) && !WANT_HEAR_RE.test(t)));
}
function parseLine(text){
  const t = String(text || ''), r = {};
  const tm = t.match(/《([^》]{1,25})》/); if (tm) r.title = tm[1];
  let m; const sre = /(10|[0-9](?:\.[0-9])?)\s*分/g;
  while ((m = sre.exec(t))){
    const pre = t[m.index - 1] || '', post = t.slice(m.index + m[0].length, m.index + m[0].length + 1);
    if (/[\d点:：.]/.test(pre)) continue;
    if (post && '钟贝组享数'.includes(post)) continue;
    const v = parseFloat(m[1]); if (v <= 10){ r.score = v; break; }
  }
  moneyOf(t, r);   /* v3.3.4 连加先算总数、写了「=」按写的；同一笔换个写法再说一遍只算一次，同一种写法的两笔一样的钱都算；最多 8 笔 */
  for (const c of CITY_LIST){ if (t.includes(c)){ r.city = c; break; } }
  const qm = t.match(/[“"『「]([^”"』」]{1,14})[”"』」]/); if (qm) r.store = qm[1];
  if (!r.store){
    for (const st of storeSet()){ if (st.length >= 3 && t.includes(st)){ r.store = st; break; } }
  }
  if (!r.store){ const sl = storeLink(t); if (sl) r.store = sl; }   /* v2.30 简称 / 叫法 / 两个字的店名 */
  if (r.store) r.store = canonStore(r.store);
  if (/外卖/.test(t)) r.delivery = true;
  const ws = parseCompanions(t);
  if (ws.length){ r.withs = ws; r.with = ws[0]; }
  const vd = parseVerdict(t);
  if (vd){ r.verdict = vd.w; if (vd.neg) r.vNeg = true; }
  if (isWantLine(t, r)) r.want = true;   /* v3.3.5 想吃 */
  return r;
}
function parseEntry(e){
  const t = String(e.text || '');
  const sig = PARSE_GEN + ':' + peopleSet().size + ':' + storeSet().size;   /* 普通保存不再全量重算；熟店簿/熟人簿长大才整体失效（保住追溯识别） */
  if (e._pc && e._pc.t === t && e._pc.g === sig) return e._pc.r;
  const r = parseLine(t);
  if (e.foodChoice && e.foodChoice.text === t && ['宝藏','吃过','避雷','想吃'].includes(e.foodChoice.value)){
    const choice = e.foodChoice.value; r.want = choice === '想吃';
    r.verdict = r.want ? null : choice; r.vNeg = choice === '避雷'; delete r.score;
  }
  e._pc = {t, g:sig, r};
  return r;
}
function canonTitle(t){ return SET.alias[t] || t; }
let KNOWN_PPL = null, KNOWN_STORE = null;
const PPL_LIST_RE = /([和与跟同])([\u4e00-\u9fa5A-Za-z0-9、，,和]{1,20}?)(?:一起|二刷|三刷|补看|看了|看|吃|去|玩|逛|见面|见|喝|聊|交流|讨论)/;   /* 扁平字符类＝线性回溯；旧的嵌套量词在长句上指数爆炸（实测 11 秒/条） */
const PPL_BLACK = ['他','她','它','我','你','大家','别人','我们','你们','他们','自己','进','出','上','下','来','回','走','着','们','人','这','那'];
const PPL_PREPS = ['和', '与', '跟', '同'];
/* 从一句话里抽同行人名单（含「同事/同学」词头与「跟进/参与」类误判防护） */
function extractPplList(t){
  const lm = String(t || '').match(PPL_LIST_RE);
  if (!lm) return [];
  let seg = lm[2];
  if (lm[1] === '同'){
    const w2 = '同' + seg.slice(0, 1);
    if (['同时', '同意', '同样', '同期', '同城', '同步', '同款'].includes(w2)) return [];
    if (['同事', '同学', '同行'].includes(w2)) return [w2];
  }
  return seg.split(/[、，,和与跟同]/).map(n => n.trim())
    .filter(n => n && n.length <= 6 && !PPL_BLACK.includes(n) && !/[了的呢吗吧啊是在有]/.test(n));
}
function peopleSet(){
  if (!KNOWN_PPL){
    KNOWN_PPL = new Set();
    (SET.people || []).forEach(p => personAliases(p).forEach(n => { if (n.length >= 2 && n.length <= 6) KNOWN_PPL.add(n); }));   /* 熟人册的本名和昵称直接进词典 */
    walk((d, e) => {
      if (e.delegate && e.delegate.to && e.delegate.to.length <= 4) KNOWN_PPL.add(e.delegate.to);
      extractPplList(e.text).map(pplClean).forEach(n => {   /* v2.30 英文名（orion）也算 */
        if (((n.length >= 2 && n.length <= 4) || /^[A-Za-z][A-Za-z .'-]{1,11}$/.test(n)) && !/\d/.test(n) && !(SET.pplNo && SET.pplNo[n])) KNOWN_PPL.add(n);
      });
    });
  }
  return KNOWN_PPL;
}
function storeSet(){
  if (!KNOWN_STORE){
    KNOWN_STORE = new Set();
    walk((d, e) => {
      if (!((e.groups || []).some(g => tplOf(g) === 'food'))) return;   /* 只跟美食组学店名，引号强调不误伤 */
      const re = /[“"『「]([^”"』」]{2,14})[”"』」]/g; let m;
      const t = String(e.text || '');
      while ((m = re.exec(t))) if (!DD().nost[m[1]]) KNOWN_STORE.add(m[1]);
    });
  }
  return KNOWN_STORE;
}
const GENERIC_PPL = ['家人','爸妈','爸爸','妈妈','朋友','同事','闺蜜','室友'];
/* ============ v2.30 你的词典：从记录里长出来的人名 / 店名 · 听写纠错 ============ */
/* 拼音表：GB2312 常用 6763 字，不分声调，每字最多两个读音（「音节 字字字|…」） */
const PY_SRC = 'a 啊阿吖嗄腌锕|ai 埃挨哎唉哀皑癌蔼矮艾碍爱隘乃捱呃嗳嗌噫嫒瑷暧砹锿霭|an 鞍氨安俺按暗岸胺案干盒谙埯揞犴庵桉铵鹌黯|ang 肮昂盎仰|ao 凹敖熬翱袄傲奥懊澳嚣坳拗嗷岙廒遨媪骜獒燠聱螯鏊鳌鏖|ba 芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸湃茇菝捭岜灞杷钯粑鲅魃|bai 白柏百摆佰败拜稗伯排捭呗掰擘|ban 斑班搬扳般颁板版扮拌伴瓣半办绊辨彬阪坂豳钣瘢癍舨|bang 邦帮梆榜膀绑棒磅蚌镑傍谤蒡浜螃|bao 苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆呆刨炮袍曝瀑勹裒葆孢煲鸨褓趵龅|bei 跋杯碑悲卑北辈背贝钡倍狈备惫焙被臂波葡菩孛俾陂邶蓓呗悖碚鹎褙鐾鞴|ben 奔苯本笨夯体畚坌贲锛|beng 榜蚌崩绷甭泵蹦迸抨俸堋唪嘣甏|bi 卑被逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛肥拂幅服虑秘泌瞥匕仳俾陴埤芘荜荸萆薜吡哔狴庳愎滗濞弼妣婢媲嬖璧枇檗殍贲畀铋秕馥裨筚箅篦舭襞跛跸髀|bian 鞭边编贬扁便变卞辨辩辫遍封匾弁苄拚忭汴缏煸砭碥稹窆褊蝙笾鳊|biao 标彪膘表漂剽婊嫖骠杓飑飙飚灬镖镳瘭裱鳔髟鏖|bie 捌蔽鳖憋别瘪撇蹩|bin 彬斌濒滨宾摈份傧豳浜缤玢槟殡膑镔髌鬓|bing 兵冰柄丙秉饼炳病并拼屏禀冫邴摒枋槟燹|bo 拔白柏百剥薄爆玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳卜簿募怕拍潘跑魄蒲孛亳蕃薜蘖擗啵饽艴檗擘礴钹鹁簸趵跛踣鲅|bu 堡捕卜哺补埠不布步簿部怖附埔拊卟逋瓿晡钚钸醭|ca 擦嚓礤|cai 猜裁材才财睬踩采彩菜蔡|can 餐参蚕残惭惨灿掺孱骖璨粲黪|cang 苍舱仓沧藏伧臧|cao 操糙槽曹草澡造艹嘈漕屮螬艚|ce 厕策侧册测赦恻|cen 参岑涔|ceng 层蹭僧增曾噌|cha 插叉茬茶查碴搽察岔差诧刹喳苴荼嚓猹馇汊姹杈楂槎檫锸镲衩|chai 差拆柴豺搓侪钗瘥虿|chan 搀掺蝉馋谗缠铲产阐颤单厘兔冁谄蒇廛忏潺澶孱羼婵嬗骣觇禅镡蟾躔|chang 昌猖场尝常长偿肠厂敞畅唱倡尚裳倘淌伥鬯苌菖徜怅惝阊娼嫦昶氅鲳|chao 超抄钞朝嘲潮巢吵炒绰剿怊晁焯耖|che 拆车扯撤掣彻澈尺斥宅坼屮砗|chen 郴臣辰尘晨忱沉陈趁衬称堪帘沈填湛枕疹伧谌谶抻嗔宸琛榇肜胂碜眈龀|cheng 敞撑称城橙成呈乘程惩澄诚承逞骋秤盯净盛醒丞郢埕噌嵊枨柽樘晟塍瞠铖铛裎蛏酲|chi 茬吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽哆离莉抬拖喜移治傺郗坻墀芪茌搋叱哧啻嗤彳饬媸柢敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑|chong 充冲虫崇宠茧涌盅种重烛茺忡憧潼铳舂艟|chou 抽酬畴踌稠愁筹仇绸瞅丑臭扭俦揄帱惆溴妯瘳雠|chu 初出橱厨躇锄雏滁除楚础储矗搐触处硫柠淑涂畜絮助亍刍怵憷绌杵楮樗褚蜍蹰黜|chuai 揣搋啜嘬膪踹|chuan 川穿椽传船喘串掾舛惴遄巛氚钏舡|chuang 疮窗幢床闯创葱囱怆舂|chui 吹炊捶锤垂椎陲棰槌|chun 春椿醇唇淳纯蠢莼肫鹑蝽|chuo 躇戳绰簇促醛荃啜辶辍斫踔踱龊|ci 柴疵茨磁雌辞慈瓷词此刺赐次司伺兹滋茈呲嵯祠鹚蚝螅粢糍趑|cong 窗聪葱囱匆从丛偬苁淙骢琮璁枞|cou 凑奏揍蔟楱辏腠|cu 粗醋簇促戚趣卒蔟徂猝槭殂酢蹙蹴|cuan 蹿篡窜攒汆撺爨镩|cui 察摧崔催脆瘁粹淬翠萃啐悴璀榱毳隹|cun 村存寸忖皴|cuo 磋撮搓措挫错昔最厝嵯脞锉矬痤瘥鹾蹉|da 搭达答瘩打大塌塔耷哒嗒怛妲沓疸褡笪靼鞑|dai 大呆歹傣戴带殆代贷袋待逮怠毒隶埭甙呔岱迨逯骀绐玳黛|dan 忱耽担丹单郸掸胆旦氮但惮淡诞弹蛋憾石蜒詹儋萏啖怛澹澶檐殚赕膻眈疸瘅聃箪|dang 当挡党荡档谠凼菪宕砀铛裆|dao 刀捣蹈倒岛祷导到稻悼道盗受刂叨帱忉氘焘忑纛|de 德得的登底地陟锝|dei 得|deng 橙澄蹬灯登等瞪凳邓噔嶝戥磴镫簦|di 逮的堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔提蹄逐氐籴诋谛邸坻荻啻嘀娣柢棣觌砥碲睇镝羝骶|dia 嗲|dian 颠掂滇碘点典靛垫电佃甸店惦奠淀殿拈阽坫埝巅玷钿癜癫蜓簟踮|diao 刀碉叼雕凋刁掉吊钓调鸟跳佻倜莜铞铫蜩踔貂鲷|die 跌爹碟蝶迭谍叠涉踢至窒佚垤堞揲喋嗲渫牒瓞褶耋蹀鲽|ding 灯丁盯叮钉顶鼎锭定订汀仃葶啶玎腚碇町铤疔耵酊|diu 丢铥|dong 东冬董懂动栋侗恫冻洞桐酮筒垌咚岽峒氡胨胴硐甬鸫|dou 兜抖斗陡豆逗痘都读投逾蔸钭窦窬蚪篼|du 都督毒犊独读堵睹赌杜镀肚度渡妒顿土芏嘟渎椟橐牍碡蠹竺笃纛髑黩|duan 端短锻段断缎椴煅簖|dui 堆兑队对敦追怼憝碓镦|dun 墩吨蹲敦顿囤钝盾遁沌豚炖砘礅盹镦趸|duo 揣捶度掇哆多夺垛躲朵跺舵剁惰堕隋陀驮杂咄哚沱缍柁棰铎裰酡踱|e 啊阿隘胺歹蛾峨鹅俄额讹娥恶厄扼遏鄂饿哦邑噩谔垩苊莪萼呃愕阏屙婀轭曷腭硪锇锷鹗疴颚鳄|ei 诶|en 恩蒽摁|er 而儿耳尔饵洱二贰佴迩珥铒鸸鲕|fa 发罚筏伐乏阀法珐垡砝|fan 藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蕃蘩幡梵燔畈袢蟠蹯|fang 坊芳方肪房防妨仿访纺放匚邡彷枋钫舫鲂|fei 菲非啡飞肥匪诽吠肺废沸费裴芾狒怫悱淝妃绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱|fen 扮奔匪芬酚吩氛分纷坟焚汾粉奋份忿愤粪盼偾瀵玢棼燔愍鲼鼢|feng 泛丰封枫蜂峰锋风疯烽逢冯缝讽奉凤捧俸酆葑唪沣逄砜|fo 佛|fou 不否缶|fu 哺沸佛夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐怀仅莆市匐凫阝郛芙芾苻茯莩菔拊掊呋幞彳怫溥滏宓艴孚驸绂绋桴赙祓砩黻黼罘稃馥蚨蜉蝠蝮麸趺跗鲋鳆鞴|ga 噶嘎胳夹咖伽尬呷尕尜戛旮钆|gai 该改概钙盖溉骸芥汽丐陔垓戤赅胲|gan 干甘杆柑竿肝赶感秆敢赣个汗奸乾坩苷尴擀泔淦澉绀橄旰矸疳酐|gang 冈刚钢缸肛纲岗港杠扛抗亢伉戆罡筻|gao 篙皋高膏羔糕搞镐稿告浩咎睾诰郜蒿藁缟槔槁杲锆|ge 噶盖哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各菏合介咯可屹鬲仡哿圪塥嗝纥搿膈硌镉袼颌虼舸骼髂|gei 给|gen 根跟痕亘茛哏艮|geng 耕更庚羹埂耿梗颈邢硬哽赓绠鲠|gong 杠工攻功恭龚供躬公宫弓巩汞拱贡共红廾咣珙肱蚣蛩觥|gou 钩勾沟苟狗垢构购够拘句佝诟岣遘媾缑枸觏彀笱篝鞲|gu 辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇滑贾枯苦嘏诂菰呱哌崮汩梏轱牯牿胍臌毂瞽罟钴锢鸪鹄痼蛄酤觚鲴骰鹘|gua 刮瓜剐寡挂褂括舌卦诖呱栝胍鸹聒|guai 乖拐怪掴|guan 串棺关官冠观管馆罐惯灌贯纶斡倌莞菅掼涫盥鹳鳏|guang 光广逛横恍咣犷潢桄胱|gui 概瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽撅傀祈炔哇洼娃桅匦匮刿庋宄妫桧炅晷皈簋蹶鲑鳜|gun 辊滚棍混丨衮绲磙鲧|guo 锅郭国果裹过划活涡馘蠃埚掴呙囗帼崞猓椁虢聒蜮蜾蝈|ha 蛤哈呵虾獬铪|hai 骸孩海氦亥害骇还咳咴嗨胲醢|han 厂甘感酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉嵌邗菡撖犴阚泔淦澉瀚旰晗焓矸顸颔蚶鼾|hang 肮夯杭航炕吭狼巷行沆绗珩桁颃酐|hao 皋镐壕嚎豪毫郝好耗号浩貉睾蒿薅嗥嚆濠灏妞昊皓颢蚝|he 硅哈害呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺霍苛洽吓蝎诃劾壑藿嗑嗬阖纥曷盍颌蚵翮|hei 嘿黑嗨|hen 痕很狠恨掀哏艮|heng 哼亨横衡恒蘅珩桁|hng 哼|hong 港共轰哄烘虹鸿洪宏弘红汪黉訇讧荭蕻薨闳泓洚|hou 喉侯猴吼厚候后堠後逅瘊篌糇鲎骺|hu 雇核和呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户芦戏许羽冱芴唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜瓠鹄鹕鹱虍笏醐斛鹘|hua 敌花哗华猾滑画划化话豁找劐侉叱骅桦砉铧稞|huai 槐徊怀淮坏坯喟踝|huan 灌欢环桓还缓换患唤痪豢焕涣宦幻皖眩援郇奂垸萑擐圜獾洹浣漶寰逭缳瑗脘锾鲩鬟|huang 荒慌黄磺蝗簧皇凰惶煌晃幌恍谎芒茫隍徨湟潢遑璜肓癀蟥篁鳇|hui 虫堕徊涣灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘溃诙茴荟蕙咴哕喙隳洄浍彗缋珲桧晖恚眭睢皓虺蟪麾|hun 棍荤昏婚魂浑混昆捆诨馄阍溷珲|huo 化豁活伙火获或惑霍货祸越劐壑藿攉嚯夥灬砉钬锪镬瓠耠蠖|ji 革给击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪秸洁藉居期其棋奇齐系揖倚丌亟乩厝剞佶偈脔诘郅墼芨芰荠萁蒺蕺掎卟叽咭哜唧岌嵴猗洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶睽羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂|jia 嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁揩茄暇夏挟嘏伽郏葭拮岬浃迦珈柙戛胛恝铗镓痂瘕袷蛱笳袈跏骱|jian 歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建沮前浅咸僭谏谫茛菅蒹搛囝湔蹇謇缣枧楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯|jiang 虹僵姜将浆江疆蒋桨奖讲匠酱降强茳洚绛缰犟礓耩糨豇|jiao 激蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖觉校妖咬佼僬艽茭菽挢叽噍峤徼湫姣敫爝皎鹪蛟醮跤鲛|jie 担亥圾籍家假价揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届楷渴她祖偕偈讦诘卩拮唧喈嗟婕孑桀砝碣疖颉蚧羯暨鲒骱髻|jin 巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲吟卺荩堇噤馑廑妗缙瑾槿赆觐钅衿矜|jing 劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净青刭儆阱菁獍憬泾迳弪婧檠肼胫腈旌蜻箐靓|jiong 炯窘坷冂垧迥炅扃|jiu 揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾噍阄柩桕鸠鹫赳鬏|ju 车告拱柜桔姐鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧且蛆渠娶租足倨讵鄹苣苴莒菹蘧掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎瞿鞫|juan 捐鹃娟倦眷卷绢圈蕊身甄鄄擐狷泫涓桊蠲锩镌蜷隽|jue 嚼脚角撅攫抉掘倔爵觉决诀绝狂屈蛙穴乙厥劂谲矍蕨蕞嗟噘噱崛獗孓珏柽梏桷橛爝镢蠼蹶觖|jun 龟均菌钧军君峻俊竣浚郡骏旬匀訇捃睃皲筠隽麇|ka 喀咖卡咯佧咔胩|kai 开揩楷凯慨岂剀劾垲蒈忾恺溘铠锎锴雉|kan 喊槛刊堪勘坎砍看侃凵莰阚戡龛瞰|kang 奋杭荒康慷糠扛抗亢炕坑伉闶沆钪|kao 考拷烤靠尻栲槁犒铐|ke 喀坷苛柯棵磕颗科壳咳可渴克刻客课嗑岢恪溘骒缂珂轲氪碣瞌盍钶锞稞疴窠颏蚵蝌髁|kei 刻|ken 肯啃垦恳垠裉龈|keng 坑吭忐硎铿|kong 空恐孔控腔倥崆穹箜|kou 抠口扣寇刳佝芤蔻叩彀眍筘|ku 古掘枯哭窟苦酷库裤挎跨圣刳堀喾绔骷|kua 夸垮挎跨胯侉髁|kuai 会块筷侩快魁蒯郐哙狯浍脍|kuan 棵宽款完髋|kuang 呈逛磺匡筐狂框矿眶旷况枉兄诓诳邝圹夼哐湟纩贶|kui 踩亏盔岿窥葵奎魁傀馈愧溃缺馗匮夔隗蒉揆喹喟悝愦逵暌睽聩蝰篑跬觖|kun 坤昆捆困卵悃阃琨锟醌鲲髡|kuo 括扩廓阔适蛞|la 垃拉喇蜡腊辣啦蓝落剌摺邋旯砬瘌|lai 莱来赖崃徕涞濑赉睐铼癞籁黧|lan 郴蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴|lang 羹琅榔狼廊郎朗浪莨蒗啷阆锒稂螂踉|lao 捞劳牢老佬姥酪烙涝撩僚潦络唠崂獠栳铑铹痨耢醪|le 勒乐肋了仂叻嘞泐鳓|lei 勒雷镭蕾磊累儡垒擂肋类泪羸诔嘞嫘缧檑耒酹|leng 棱楞冷塄愣|li 厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩列泣位鬲仂俪俚郦坜苈莅蓠藜捩叻呖唳喱猁悝溧澧逦娌嫠骊缡珞枥栎轹戾砺砬詈罹锂鹂疠疬蛎蜊蠡笠篥粝翮醴跞雳霾鲡鳢黧|lia 俩|lian 联莲连镰廉怜涟帘敛脸链恋炼练零令羸苓蔹奁搛潋濂琏楝殓臁膦瞵裢裣蠊鲢|liang 惊俩粮凉梁粱良两辆量晾亮谅墚莨椋踉靓魉|liao 佬撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩|lie 栗例列裂烈劣猎冽埒捩咧洌邋趔躐鬣|lin 琳林磷霖临邻鳞淋凛赁吝拎任蔺啉嶙廪懔遴檩辚膦瞵粼躏麟|ling 棱冷怜磷拎玲菱零龄铃伶羚凌灵陵岭领另令酃苓呤囹泠绫柃棂瓴聆蛉翎鲮|liu 聊溜琉榴硫馏留刘瘤流柳六碌陆游泖浏遛骝绺旒熘锍镏鹨鎏|long 龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃|lou 牢楼娄搂篓漏陋露偻蒌喽嵝镂瘘耧蝼髅|lu 谷六芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮绿垆蓼撸噜泸渌漉逯璐栌橹轳辂辘氇胪镥鸬鹭瘳簏舻鲈|luan 峦挛孪滦卵乱脔娈栾鸾銮|lun 抡轮伦仑沦纶论囵|luo 格果酪烙路萝螺罗逻锣箩骡裸落洛骆络倮蠃荦捋摞猓猡泺漯珞椤脶硌镙瘰袼蜾蠡跞雒|lv 累鹿驴吕铝侣旅履屡缕虑氯律率滤绿偻捋闾榈膂稆褛|lve 掠略锊|m 呒|ma 妈麻玛码蚂马骂嘛吗靡摩抹唛犸嬷杩蟆貊麽|mai 哩埋买麦卖迈脉派劢荬唛霾|man 埋瞒馒蛮满蔓曼慢漫谩幕墁幔缦熳镘颟螨鳗鞔|mang 芒茫盲氓忙莽邙瞢漭朦硭蟒|mao 耗猫茅锚毛矛铆卯茂冒帽貌贸描侔袤勖茆峁泖瑁昴牦耄旄懋瞀蛑蝥蟊髦|me 么末|mei 玫枚梅酶霉煤没眉媒镁每美昧寐妹媚糜谜墨某味坶莓嵋猸浼湄楣镅鹛袂魅|men 门闷们扪焖懑钔鞔|meng 氓萌蒙檬盟锰猛梦孟明勐甍瞢懵朦礞瞑虻蜢蟒蟊蠓艋艨|mi 眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼咪嘧猕汨溟宓弭幺脒祢敉糸縻麋|mian 棉眠绵冕免勉娩缅面冥沔泯渑湎宀腼眄黾|miao 吵猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱|mie 蔑灭乜咩咪蠛篾|min 眠民抿皿敏悯闽苠岷闵汶泯缗玟珉愍黾鳘|ming 萌盟皿明螟鸣铭名命冥茗溟暝瞑酩|miu 谬|mo 佰嘿脉冒貌没藐摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌帕袜万无勿谟茉蓦馍嫫嬷殁镆秣瘼耱蟆貊貘麽|mou 件谋牟某毋侔袤厶哞婺缪眸蛑鍪|mu 姥模莫牟拇牡亩姆母墓暮幕募慕木目睦牧穆仫坶苜沐毪钼|n 嗯|na 拿哪呐钠那娜纳南内捺呶肭镎衲箬|nai 氖乃奶耐奈鼐佴艿萘柰|nan 南男难冉喃囝囡楠腩罱蝻赧|nang 囊攮囔馕曩|nao 挠脑恼闹淖孬垴呶猱瑙硇铙蛲|ne 哪呐呢讷疒疔|nei 馁内|nen 嫩枘恁|neng 而耐能|ng 唔嗯|ni 呢妮霓倪泥尼拟你匿腻逆溺伲坭嶷猊怩昵旎祢慝睨铌鲵|nian 蔫拈年碾撵捻念粘辗廿埝辇黏鲇鲶|niang 娘酿|niao 鸟尿茑尥嬲脲袅|nie 倪泥捻捏聂孽啮镊镍涅幸乜陧蘖嗫囡颞臬蹑|nin 您|ning 冰年柠狞凝宁拧泞攘疑佞咛甯聍|niu 牛扭钮纽拗狃忸妞蚴|nong 脓浓农弄侬咔哝|nou 耨|nu 奴努怒褥帑弩胬孥驽肭|nuan 暖暧|nuo 掉那娜挪懦糯诺需傩搦喏锘|nv 女狃胬恧钕衄|nve 虐疟|o 哦喔噢|ou 欧鸥殴藕呕偶沤区握讴怄渥瓯耦|pa 芭扒叭吧把耙啪趴爬帕怕琶葩杷钯筢|pai 拍排牌徘湃派脾迫俳蒎哌|pan 扳般拌伴半卞番攀潘盘磐盼畔判叛胖片彦弁拚爿泮皤袢襻蟠蹒|pang 膀磅傍方房仿乓庞旁耪胖彭蒡彷滂逄螃|pao 苞胞包抱抛咆刨炮袍跑泡匏狍庖脬疱|pei 倍啡肺呸胚培裴赔陪配佩沛茇辔帔淠妃旆锫蜚醅霈|pen 吩汾喷盆湓|peng 逢旁砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰苹庄堋嘭怦滂蟛|pi 比庇辟否副坏坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬扑丕仳陂陴邳郫鄱圮埤鼙芘苤萆擗吡噼帔庀庳淠濞媲纰枇甓睥罴铍痦癖裨疋蚍蜱篦貔|pian 扁便篇偏片骗平谝骈缏犏胼褊蝙翩蹁|piao 膘飘漂瓢票朴剽莩嘌嫖骠缥殍瞟螵髟|pie 撇瞥丿苤氕|pin 泵拼频贫品聘匕姘娉嫔榀牝颦|ping 秤冯砰聘乒坪苹萍平凭瓶评屏俜娉枰鲆|po 霸膊泊繁坡泼颇婆破魄迫粕剖叵鄱泺珀钋钷皤笸|pou 部涪培剖裒掊瓿踣|pu 暴扶甫脯扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍苻噗溥濮璞攴氆攵镤镨蹼|qi 甭吃刺畸稽缉己技揭期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫切勤示溪枝支丌亟亓俟圻芑芪荠萁萋葺蕲嘁屺岐忮忾汔淇骐绮琪琦杞桤槭耆挈欹祺恝憩碛颀蛴蜞綦綮蹊鳍麒|qia 卡客掐恰洽葜袷髂|qian 柑赶筋牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉纤倩佥阡凵芊芡茜荨掮撖岍忏悭慊涔骞搴褰缱椠犍肷腱愆钤虔箝|qiang 将控枪呛腔羌墙蔷强抢哐丬爿戕嫱樯戗炝锖锵镪襁蜣羟跫跄|qiao 愁搞蕉焦壳橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍雀硝招劁诮谯荞峤愀憔缲樵毳敫硗醮跷跤鞒|qie 捷漆沏砌切茄且怯窃郄蕺唼惬慊妾婕挈脞锲箧趄|qin 浸钦侵亲秦琴勤芹擒禽寝沁芩堇蓁揿吣嗪噙廑溱槿檎锓衿矜覃螓衾|qing 精亲青轻氢倾卿清擎晴氰情顷请庆声倩苘圊檠磬蜻罄箐綮謦鲭黥|qiong 琼穷邛芎茕穹蛩筇跫銎|qiu 仇秋丘邱球求囚酋泅团馗俅氽邺巯艽犰惆愀湫逑遒楸赇虬蚯蝤裘糗鳅鼽|qu 鞠巨蜡趋区蛆曲躯屈驱渠取娶龋趣去戌诎劬苣蕖蘧岖衢阒遽璩觑氍朐祛磲鸲癯蛐蠼麴瞿鞫黢|quan 卷圈颧权醛泉全痊拳犬券劝栓拴诠圳荃犭獾悛绻桊辁畎铨蜷筌鬈|que 缺炔瘸却鹊榷确雀攉阕阙觳悫舄|qun 遁裙群逡麇|ran 然燃冉染苒蚺髯|rang 瓤壤攘嚷让禳穰|rao 饶扰绕荛娆桡|re 惹热若偌喏|ren 儿壬仁人忍韧任认刃妊纫亻仞荏葚饪轫恁稔衽|reng 耳扔仍戎艿穰|ri 日|rong 隔戎茸蓉荣融熔溶容绒冗嵘狨榕肜蝾|rou 揉柔肉糅蹂鞣|ru 女肉茹蠕儒孺如辱乳汝入褥月蓐薷嚅洳溽濡缛铷襦颥|ruan 软阮濡朊|rui 兑蕊瑞锐芮蕤枘睿蚋|run 闰润|ruo 溺惹若弱偌芮箬|sa 蔡撒洒萨卅仨檫挲脎飒趿|sai 腮鳃塞赛思噻|san 三叁伞散馓毵糁霰|sang 桑嗓丧搡磉颡|sao 搔骚扫嫂哨燥埽缫缲臊瘙鳋|se 塞瑟色涩寨啬铯穑|sen 森|seng 僧|sha 莎砂杀刹沙纱傻啥煞杉厦唼嗄歃铩痧裟霎鲨|shai 色筛晒酾|shan 掸邓珊苫杉山删煽衫闪陕擅赡膳善汕扇缮檀栅剡儋讪鄯埏芟彡潸姗嬗骟膻禅钐疝蟮舢跚鳝|shang 墒伤商赏晌上尚裳汤垧绱殇熵觞|shao 鞘梢捎稍烧芍勺韶少哨邵绍召劭苕溲潲杓裢蛸笤筲艄|she 碟睫奢赊蛇舌舍赦摄射慑涉社设拾折厍佘揲猞滠歙畲蛞麝|shei 谁|shen 砷申呻伸身深娠绅神沈审婶甚肾慎渗什信震诜谂莘葚抻吲哂渖椹胂矧蜃糁|sheng 乘声生甥牲升绳省盛剩胜圣姓丞冼垩嵊渑晟媵眚笙|shi 匙郝赫舍师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试斯寺似嘘液肢殖峙谥埘莳蓍弑唑饣彖轼贳炻礻铈螫舐筮豉酾豕鲥鲺|shou 收手首守寿授售受瘦兽熟扌狩绶艏|shu 售蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕透野俞朱倏塾菽摅沭澍姝纾杼毹腧殳秫疋|shua 刷耍唆唰涮|shuai 率摔衰甩帅蟀|shuan 汕栓拴闩涮踹|shuang 霜双爽泷淙孀|shui 谁水睡税说氵|shun 盾俊吮瞬顺舜恂巛|shuo 勺数说硕朔烁嗽溯蒴搠嗍濯妁槊铄|si 厕食斯撕嘶思私司丝死肆寺嗣四伺似饲巳析已以肄厮俟兕厶菥咝徙汜泗澌姒驷纟缌祀祠锶鸶耜蛳笥糸|song 松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦|sou 搜艘擞嗽族叟薮嗖嗾馊涑溲敕飕瞍锼螋|su 搬苏酥俗素速粟僳塑溯宿诉肃缩夙谡蔌蓿嗖嗉愫涑簌觫稣|suan 酸蒜算狻|sui 粹尿虽隋随绥髓碎岁穗遂隧祟蓑谇荽濉邃彗燧眭睢|sun 餐孙损笋荪狲飧榫跣隼|suo 抄莎沙衰蓑梭唆缩琐索锁所些唢嗦嗍娑桫挲睃羧|ta 搭塌他它她塔獭挞蹋踏太拓嗒闼溻漯遢榻沓铊趿鳎|tai 能胎苔抬台泰酞太态汰邰薹呔骀肽炱钛跆鲐|tan 胆但弹坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭舔炎郯蕈澹昙忐钽锬镡覃|tang 汤塘搪堂棠膛唐糖倘躺淌趟烫傥帑饧惝溏瑭樘铴镗耥螗螳羰醣|tao 掏涛滔绦萄桃逃淘陶讨套挑鼗叨啕洮韬焘饕|te 匿式特忒忑慝铽|teng 藤腾疼誊滕|ti 达堤狄弟是肆梯剔踢锑提题蹄啼体替嚏惕涕剃屉倜荑悌逖绨缇棣睇鹈裼醍|tian 蚕滇典佃甸苫天添填田甜恬舔腆吞沾掭嗔忝阗栝殄畋钿蚺|tiao 超稠调桃挑条迢眺跳姚佻苕祧窕蜩笤粜龆鲦髫|tie 蝶贴铁帖占萜怙餮|ting 奠厅听烃汀廷停亭庭挺艇莛葶婷梃町铤蜓霆|tong 侗恫洞通桐酮瞳同铜彤童桶捅筒统痛恿佟僮仝垌茼嗵峒恸潼砼硐|tou 偷投头透愉亠钭骰|tu 跌杜凸秃突图徒途涂屠土吐兔余堍荼菟钍酴|tuan 痪湍团抟彖疃|tui 推颓腿蜕褪退脱忒煺|tun 吨囤褪吞屯臀吴氽饨暾豚炖窀|tuo 池惰税他它拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沲沱迤柝柁橐砣铊箨酡跎鼍|wa 凹挖哇蛙洼娃瓦袜鞋佤娲腽|wai 歪外崴|wan 蔓娩豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕园剜芄莞菀纨绾琬朊脘畹蜿箢|wang 皇匡汪王亡枉网往旺望忘妄罔尢惘辋魍|wei 机立威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫遗有于倭偎诿阢隈隗圩芟荽葳薇囗帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨痿艉鲔|wen 昧免瘟温蚊文闻纹吻稳紊问限眼刎愠阌汶玟璺殁笏雯|weng 嗡翁瓮壅蓊蕹|wo 瘟挝蜗涡窝我斡卧握沃夭倭莴喔幄渥杌肟硪龌|wu 恶母亡巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴呒唔庑怃忤浯寤迕妩婺骛杌牾於旄焐瞀鹉鹜痦蜈蝥鋈鼯|xi 既腊猎卤栖洒屎撕昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郄郗茜菥葸蓰奚咭咦唏徙饩阋浠淅屣嬉玺樨曦觋欷歙熹禊禧嵇皙穸裼蜥蜴螅蟋舄舾羲粞翕醯蹊鼷|xia 瞎虾匣霞辖暇峡侠狭下厦夏吓斜押呀葭呷哧岈狎遐瑕柙歃硖瘕罅黠|xian 捍肩碱见探铣洗掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线矣冼苋莶藓岘彡猃濂寰暹妗娴氙燹祆黹锬鹇痫蚬筅籼酰跣跹霰|xiang 亨降相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象洋芗葙饷庠骧缃蟓舡鲞飨|xiao 号呼唬胶狡俏梢捎芍搜萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效爻佼叟茭哓崤潇逍姣骁绡枭枵蛸筱箫魈|xie 溉接解契楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑血耶叶豫汁偕亵隰勰燮薤撷唏喈獬廨渫瀣迦邂绁缬榭榍颉跬躞鲑|xin 款薪芯锌欣辛新忻心信衅寻囟馨莘忄昕歆鑫|xing 省胜星腥猩惺兴刑型形邢行醒幸杏性姓研陉荇荥擤饧悻硎|xiong 宪兄凶胸匈汹雄熊芎|xiu 臭宿休修羞朽嗅锈秀袖绣莠咻岫馐庥溴煦鸺貅髹|xu 休墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续芋吁馘诩勖圩蓿咻怵洫浒溆顼栩旮肷朐煦盱胥糈醑雩|xuan 暖券轩喧宣悬旋玄选癣眩绚撰亘儇谖萱揎泫洵渲漩璇楦昕暄炫煊碹铉镟痃|xue 削哮靴薛学穴雪血谑噱嚯泶踅鳕|xun 荤浚梭潭勋熏循旬询寻驯巡殉汛训讯逊迅巽郇埙荀荨蕈薰峋徇狻獯恂悛洵浔逡曛窨醺鑫鲟|ya 歇邪压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶御札轧伢垭揠吖岈迓娅琊桠氩砑睚痖|yan 癌俺淡广狠蔫铅涎羡巡焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殷淫厣赝剡俨偃兖讠谳阽郾鄢埏埯芫菸揞崦庵恹闫阏洇湮滟妍嫣琰檐晏氤胭腌焱罨筵酽趼魇餍鼹|yang 昂殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾英映徉怏泱炀烊恙蛘鞅|yao 侥么疟陶邀腰妖瑶摇尧遥窑谣姚咬舀药要耀由幼约钥夭爻吆崤崾徭徼洮瀹幺珧杳轺曜肴铫鹞窈繇鳐|ye 喝射墅咽椰噎耶爷野冶也页掖业叶曳腋夜液拽靥谒邺揶晔烨铘|yi 艾怠迭蛾疙姬崎蛇失施巳台叹尾熙夕泄焉噎也一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎印丿刈劓仡佚佗佾诒圪圯坨埸懿苡荑薏弈奕挹掎弋呓咦咿嗌噫峄嶷猗饴怿怡悒洫漪迤驿缢殪轶贻犄欹旖焱熠眙钇镒镱痍瘗癔翊衤袂蜴舣羿翳酏黝黟|yin 币垦听烟言壹沂茵荫因殷音阴姻吟银淫寅饮尹引隐印众胤鄞廴圻垠堙芩茚吲喑狺夤洇湮氤铟瘾窨蚓霪龈|ying 逞景央英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔荥莺萦蓥撄哽嘤膺滢潆瀛瑛璎楹媵鹦瘿颍罂|yo 哟唷|yong 容拥佣臃痈庸雍踊蛹咏泳涌永恿勇用遇俑壅墉蕹喁慵邕镛甬臾鳙饔|you 泅扰幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑坳莠莜莸尢呦囿宥柚猷牖铕疣聱蚰蚴蝣蝤繇鱿黝鼬|yu 奥懊澳或亏舒王蔚尉梧吾衙迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭苑粥禺毓伛俣谀谕萸菸菀蓣揄唷喁噢圄圉崛嵛狳饫馀庾阈汩鬻妪妤纡瑜栩昙昱觎毹腴腧欤於煜煨熨燠肀聿钰鹆鹬瘐瘀窬窳蜍蜮蝓竽臾舁雩龉|yuan 穿捐阮宛鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院允垸塬芫掾圜沅涓媛瑗橼爰眢畹鸢螈箢鼋|yue 块乐蜕曰约越跃钥岳粤月悦阅龠哕瀹妁栎樾刖钺蠖|yun 均温尹员怨耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽愠媪纭韫殒昀氲熨筠|za 匝砸杂咱扎咋籴拶咂|zai 才栽哉灾宰载再在仔崽甾|zan 咱攒暂赞拶湔瓒昝簪糌趱錾|zang 藏赃脏葬奘戕驵臧|zao 槽草窖遭糟凿藻枣早澡蚤躁噪造皂灶燥唣|ze 侧措责择则泽咋仄赜啧帻迮昃稷笮箦舴|zei 贼|zen 怎僭谮|zeng 增憎曾赠综缯甑罾锃|zha 册插查扎喳渣札轧铡闸眨栅榨乍炸诈柞揸吒咤哳喋馇怍楂膪砟痄蚱齄|zhai 翟祭择摘斋宅窄债寨砦瘵豸|zhan 颤袒瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃躔|zhang 长樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑|zhao 朝嘲淖蚤招昭找沼赵照罩兆肇召爪着诏啁棹晁钊笊|zhe 堵遮折哲蛰辙者锗蔗这浙着乇谪陬耷摺嘀柘辄磔鹧褚褶蜇螫赭|zhei 这|zhen 趁唇鼎慎珍斟真甄砧臻贞针侦枕疹诊震振镇阵帧圳坫蓁浈溱缜桢椹榛轸戡赈胗朕祯畛稹鸩箴|zheng 承丁趟蒸挣睁征狰争怔整拯正政帧症郑证诤峥徵瞠钲铮筝鲭|zhi 埃抵积伎祁识氏恃芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮氐陟郅埴芷摭帙徵夂忮彘咫骘栉枳栀桎轵轾昵耆贽胝膣祉祗砥黹雉鸷痣蛭絷酯跖踬踯豸觯|zhong 董童中盅忠钟衷终种肿重仲众冢夂忪锺蚣螽舯踵|zhou 育舟周州洲诌粥轴肘帚咒皱宙昼骤注祝啄侏荮啁喙鬻妯纣绉柚胄碡籀舳酎|zhu 除斗逗宁泞属术庶予之珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻茁阻丶伫侏邾苎茱洙渚潴澍杼楮槠橥炷铢疰瘃蚰竺箸舳翥躅麈|zhua 挝抓爪|zhuai 拽转|zhuan 传湍专砖转撰赚篆巽啭馔沌颛|zhuang 幢桩庄装妆撞壮状僮奘憧戆艟|zhui 垂隧致椎锥追赘坠缀萑惴骓缒槌隹|zhun 淳屯谆准肫胗盹窀|zhuo 掇缴著捉拙卓桌琢茁酌啄灼浊倬诼擢浞涿濯棹焯禚斫镯箸躅|zi 疵次事吱兹咨资姿滋淄孜紫仔籽滓子自渍字谘茈呲嵫姊孳缁甾梓辎赀恣眦锱秭耔笫粢趑觜訾龇鲻髭|zong 从鬃棕踪宗综总纵偬枞腙粽|zou 邹走奏揍诹陬鄹驺楱鲰|zu 淬租足卒族祖诅阻组俎菹啐嘁镞蹴|zuan 赚钻纂攥缵躜|zui 摧堆咀嘴醉最罪蕞羧觜|zun 蹲尊遵撙樽鳟|zuo 醋撮挫凿乍琢昨左佐柞做作坐座阼唑嘬怍迮胙祚砟笮酢';
let PY_MAP = null;
function pyOf(ch){
  if (!PY_MAP){
    PY_MAP = new Map();
    PY_SRC.split('|').forEach(g => {
      const sp = g.indexOf(' '), syl = g.slice(0, sp);
      for (const c of g.slice(sp + 1)){ const a = PY_MAP.get(c); if (a) a.push(syl); else PY_MAP.set(c, [syl]); }
    });
  }
  return PY_MAP.get(ch) || null;
}
const pyFuzz = s => s.replace(/^([zcs])h/, '$1').replace(/([aei])ng$/, '$1n');   /* 平翘舌、前后鼻音听写常混 */
function pySame(a, b, fuzzy){
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++){
    if (a[i] === b[i]) continue;
    const pa = pyOf(a[i]), pb = pyOf(b[i]);
    if (!pa || !pb) return false;
    if (!pa.some(x => pb.some(y => x === y || (fuzzy && pyFuzz(x) === pyFuzz(y))))) return false;
  }
  return true;
}
/* 词典里你教过的：fix＝听错的字（以后自动改）· same＝另一种叫法（只认不改字）· no＝别这样改 · nost＝不当店名 */
function DD(){ const d = SET.dict || (SET.dict = {}); d.fix = d.fix || {}; d.same = d.same || {}; d.no = d.no || {}; d.nost = d.nost || {}; return d; }
var PPL_CNT = null, PPL_FIRST = null, DICT_T = null, STORE_CORES = null;
function dictChanged(){ PARSE_GEN++; scheduleSave(); }
/* 叫法：同一个人的几种说法，统一成你最常写的那个 */
const REL_GROUPS = [['姐姐','我姐','老姐','姐'], ['哥哥','我哥','老哥','哥'], ['妹妹','我妹','老妹'], ['弟弟','我弟','老弟'],
  ['妈妈','我妈','老妈','妈'], ['爸爸','我爸','老爸','爸'], ['奶奶','我奶'], ['爷爷','我爷'], ['外婆','姥姥'], ['外公','姥爷']];
const REL_OF = new Map(); REL_GROUPS.forEach(g => g.forEach(n => REL_OF.set(n, g)));
const COMMON_W = ['一下','一会','一起','一样','我们','你们','他们','她们','大家','别人','自己','这个','那个','时候','什么','怎么','东西','事情','家里','公司','老师','孩子','对象','同事','同学','朋友'];
function pplCounts(){
  if (PPL_CNT) return PPL_CNT;
  const m = new Map(), f = new Map();
  walk((d, e) => {
    if (!e.text || e.state === 'migrated') return;   /* 推迟留下的旧副本不重复算 */
    const ns = new Set(parseCompanionsRaw(e.text).filter(n => n !== '独自'));
    if (e.delegate && e.delegate.to) ns.add(e.delegate.to);
    ns.forEach(n => { m.set(n, (m.get(n) || 0) + 1); if (!f.has(n) || parseKey(d) < parseKey(f.get(n))) f.set(n, d); });
  });
  PPL_FIRST = f; PPL_CNT = m; return m;
}
function canonPerson(n){
  if (!n || n === '独自') return n;
  const d = DD();
  let x = d.same[n] || d.fix[n] || n;
  if (/^[A-Za-z]/.test(x)){   /* orion / Orion 是同一个人：用你最常写的大小写 */
    const c = pplCounts(), lx = x.toLowerCase(); let best = null;
    c.forEach((v, k) => { if (k.toLowerCase() === lx && (!best || v > best.v || (v === best.v && parseKey(PPL_FIRST.get(k)) < parseKey(PPL_FIRST.get(best.n))))) best = {n:k, v}; });
    if (best) x = best.n;
  }
  const g = REL_OF.get(x);
  if (g){   /* 写得最多的那个；一样多就用你最早写的那个，免得来回变 */
    const c = pplCounts(); let best = null;
    g.forEach(m2 => { const v = c.get(m2) || 0; if (!v) return;
      if (!best || v > best.v || (v === best.v && parseKey(PPL_FIRST.get(m2)) < parseKey(PPL_FIRST.get(best.n)))) best = {n:m2, v}; });
    if (best) x = best.n;
  }
  return x;
}
/* 店：去掉「小馆 / 餐厅 / 火锅…」的尾巴就是简称 */
const STORE_SUFFIX_RE = /(小馆|餐厅|饭店|饭馆|菜馆|酒家|酒楼|食堂|面馆|粉馆|火锅|烧烤|烤肉|小吃|大排档|料理|私房菜|家常菜|小厨|厨房|咖啡馆|咖啡|茶餐厅|酒馆|甜品|奶茶)店?$/;
function storeCoreOf(s){ const c = String(s || '').replace(STORE_SUFFIX_RE, ''); return (c !== s && c.length >= 2 && !CITY_LIST.includes(c)) ? c : null; }
function storeCores(){
  if (STORE_CORES) return STORE_CORES;
  const m = new Map();
  for (const st of storeSet()){ const c = storeCoreOf(st); if (c && (!m.has(c) || m.get(c).length < st.length)) m.set(c, st); }
  STORE_CORES = m; return m;
}
function isStoreName(x){ return storeSet().has(x) || storeCores().has(x); }
function canonStore(s){
  if (!s) return s;
  const d = DD(); let x = d.same[s] || d.fix[s] || s;
  const cs = storeCores(); if (cs.has(x)) x = cs.get(x);
  return x;
}
const STORE_TRIG_RE = /(?:吃了?|去了?|在|到了?|点了?|叫了?|逛了?)$/;
function storeLink(t){
  const d = DD();
  for (const [v, c] of Object.entries(d.same).concat(Object.entries(d.fix))){
    if (v.length >= 2 && t.includes(v) && isStoreName(c)) return c;
  }
  for (const [c, st] of storeCores()){ if (c.length >= 3 && t.includes(c)) return st; }
  for (const st of storeSet()){   /* 两个字的店名：前面得有「吃 / 去 / 在」才算 */
    if (st.length !== 2) continue;
    let i = t.indexOf(st);
    while (i >= 0){ if (STORE_TRIG_RE.test(t.slice(Math.max(0, i - 3), i))) return st; i = t.indexOf(st, i + 1); }
  }
  return null;
}
/* 纠错的靶子：写过的人（按次数）、记过的店（全名和简称） */
function dictTargets(){
  if (DICT_T) return DICT_T;
  const d = DD(), pc = pplCounts(), ppl = [];
  pc.forEach((c, n) => {
    if (!/^[一-龥]{2,4}$/.test(n) || REL_OF.has(n) || GENERIC_PPL.includes(n) || d.fix[n] || (SET.pplNo && SET.pplNo[n])) return;
    ppl.push({n, c, forms:[n]});
  });
  (SET.people || []).forEach(p => personAliases(p).forEach(n => { if (/^[一-龥]{2,4}$/.test(n) && !ppl.some(o => o.n === n)) ppl.push({n, c:2, forms:[n]}); }));
  const idx = storeIndex(), st = [];
  for (const s of storeSet()){
    if (d.fix[s]) continue;
    const forms = [s], core = storeCoreOf(s); if (core) forms.push(core);
    st.push({n:s, c:(idx[canonStore(s)] || {}).cnt || 1, forms});
  }
  DICT_T = {ppl, st}; return DICT_T;
}
function dictProtected(w, kind){
  if (REL_OF.has(w) || GENERIC_PPL.includes(w) || CITY_LIST.includes(w) || COMMON_W.includes(w)) return true;
  if (storeSet().has(w) || storeCores().has(w)) return true;
  const c = pplCounts().get(w) || 0;
  return c >= 2 || (kind === 's' && c >= 1);   /* 写过两次以上的名字是真有其人，不动 */
}
const FIX_P_TRIG = /(?:和|与|跟|同|陪|约了?|给|找|问|请|帮|带|叫上|送|、)/g;
const FIX_S_TRIG = /(?:吃了?|去了?|在|到了?|点了?|叫了?|逛了?)/g;
const FIX_FOLLOW = /^(?:$|[、，,。.！!？?；;\s和与跟及也都一去来吃看玩逛见喝聊说打的在从给请约陪带上下过家店])/;
/* 听写纠错：只在「和X、跟X、给X」这种说人的位置，和「吃了X、去X、在X」这种说店的位置上改 */
function dictFix(s){
  const T = dictTargets(), d = DD();
  let t = String(s || ''); const fixes = [];
  const scan = (re, list, kind) => {
    re.lastIndex = 0; let m; const starts = [];
    while ((m = re.exec(t))) starts.push(m.index + m[0].length);
    if (kind === 'p') starts.unshift(0);
    starts.sort((a, b) => b - a).forEach(i0 => {
      for (const [v, c] of Object.entries(d.fix)){   /* 你教过的，直接改 */
        if (v.length && t.startsWith(v, i0) && FIX_FOLLOW.test(t.slice(i0 + v.length, i0 + v.length + 1)) && !d.no[v + '>' + c]
            && (kind === 'p' ? !isStoreName(c) : isStoreName(c))){
          t = t.slice(0, i0) + c + t.slice(i0 + v.length); fixes.push({from:v, to:c, k:kind, learned:1}); return;
        }
      }
      if (i0 === 0) return;   /* 句首只用教过的 */
      let best = null, second = null;
      list.forEach(o => o.forms.forEach(f => {
        const L = f.length, w = t.substr(i0, L);
        if (L < 2 || w.length !== L || w === f) return;
        if (!FIX_FOLLOW.test(t.slice(i0 + L, i0 + L + 1)) || d.no[w + '>' + f] || dictProtected(w, kind)) return;
        const lv = pySame(w, f, false) ? 2 : (o.c >= 2 && pySame(w, f, true) ? 1 : 0);
        if (!lv) return;
        const x = {sc:lv * 100000 + o.c * 10 + L, lv, w, f, L, c:o.c, n:o.n};
        if (!best || x.sc > best.sc){ if (best && best.n !== x.n) second = best; best = x; }
        else if (x.n !== best.n && (!second || x.sc > second.sc)) second = x;
      }));
      if (!best) return;
      if (second && second.lv === best.lv && second.c * 2 > best.c) return;   /* 两个都像、拿不准就不动 */
      t = t.slice(0, i0) + best.f + t.slice(i0 + best.L);
      fixes.push({from:best.w, to:best.f, k:kind});
    });
  };
  scan(FIX_P_TRIG, T.ppl, 'p');
  scan(FIX_S_TRIG, T.st, 's');
  return {text:t, fixes};
}
/* 改一次就记住：把一个名字改成了听起来一样的熟人 / 熟店 → 记下；把点点改过的又改回去 → 记下「别这样改」 */
function dictLearnEdit(a, b){
  a = String(a || ''); b = String(b || '');
  if (!a || !b || a === b || a.length !== b.length) return null;
  let p = 0; while (p < a.length && a[p] === b[p]) p++;
  let s = 0; while (s < a.length - p && a[a.length - 1 - s] === b[b.length - 1 - s]) s++;
  const mid = a.length - p - s; if (mid < 1 || mid > 6) return null;
  const T = dictTargets(), d = DD(), pc = pplCounts(), cands = [];
  T.ppl.forEach(o => cands.push({f:o.n, k:'p'}));
  T.st.forEach(o => o.forms.forEach(f => cands.push({f, k:'s'})));
  const cover = (txt, f, cb) => { let i = txt.indexOf(f); while (i >= 0){ if (i <= p && i + f.length >= p + mid && cb(i)) return true; i = txt.indexOf(f, i + 1); } return false; };
  for (const x of cands){
    if (x.f.length < 2) continue;
    let got = null;
    cover(b, x.f, i => { const old = a.substr(i, x.f.length);
      if (old !== x.f && pySame(old, x.f, true) && (pc.get(old) || 0) <= 1 && !storeSet().has(old)){ got = old; return true; } return false; });
    if (got){ d.fix[got] = x.f; delete d.no[got + '>' + x.f]; dictChanged(); return {from:got, to:x.f}; }
  }
  for (const x of cands){
    if (x.f.length < 2) continue;
    let got = null;
    cover(a, x.f, i => { const nw = b.substr(i, x.f.length);
      if (nw !== x.f && pySame(nw, x.f, true) && !dictProtected(nw, x.k)){ got = nw; return true; } return false; });
    if (got){ d.no[got + '>' + x.f] = 1; if (d.fix[got] === x.f) delete d.fix[got]; dictChanged(); return {no:got, to:x.f}; }
  }
  return null;
}
function parseCompanionsRaw(t){
  t = String(t || '');
  if (/独自|一个人/.test(t)) return ['独自'];
  const out = [];
  const add = n => { n = pplClean(n);
    if (n && (/^[A-Za-z]/.test(n) ? n.length <= 12 : n.length <= 6) && !PPL_BLACK.includes(n) && !out.includes(n) && !(SET.pplNo && SET.pplNo[n])) out.push(n); };
  extractPplList(t).forEach(add);
  const known = peopleSet();
  for (const n of known){ if (n && PPL_PREPS.some(pp => t.includes(pp + n))) add(n); }
  for (const g of GENERIC_PPL){ if (PPL_PREPS.some(pp => t.includes(pp + g))) add(g); }
  /* v2.30「和旭旭、不二、orion、姐夫」：认识的名字一路接下去 */
  const re = /[和与跟同]/g; let m;
  while ((m = re.exec(t))){
    let i = m.index + 1, guard = 0;
    while (i < t.length && guard++ < 12){
      let hit = null;
      for (const n of known){ if (n.length >= 2 && t.startsWith(n, i) && (!hit || n.length > hit.length)) hit = n; }
      if (!hit) for (const r2 of REL_OF.keys()){ if (r2.length >= 2 && t.startsWith(r2, i) && (!hit || r2.length > hit.length)) hit = r2; }
      if (!hit) break;
      add(hit); i += hit.length;
      const sep = t.slice(i).match(/^\s*[、,，和与跟]\s*/); if (!sep) break; i += sep[0].length;
    }
  }
  return out;
}
/* 「和orion畅聊」里抽出的「orion畅」→ orion */
function pplClean(n){ n = String(n || '').trim(); const m = n.match(/^([A-Za-z][A-Za-z.'-]{1,11})[\u4e00-\u9fa5]{1,2}$/); return m ? m[1] : n; }
/* 同行人：叫法统一（姐姐 → 我姐）、教过的说法换成本名 */
function parseCompanions(t){
  const raw = parseCompanionsRaw(t); if (raw[0] === '独自') return raw;
  const out = []; raw.forEach(n => { const c = canonPerson(n); if (c && !out.includes(c)) out.push(c); });
  return out;
}
/* 店的判决＝括号外、位置最早的判决词；括号内视为单品评价 */
function parseVerdict(t){
  t = String(t).replace(/避雷([\u4e00-\u9fa5]{2,5})(?=[，,。！!；;\s]|$)/g, (m, x) => (/[店家的这那]/.test(x) || CITY_LIST.some(c => x.includes(c))) ? m : '＃＃' + x);   /* v2.29「避雷蓝龙虾，」是单品避雷，不冤枉整家店 */
  const masked = t.replace(/（[^）]*）|\([^)]*\)/g, m => '＃'.repeat(m.length));
  const scan = (src, negs, poss) => {
    let best = null;
    for (const w of negs){ const i = src.indexOf(w);
      if (i >= 0 && (!best || i < best.i)) best = {i, w, neg:true}; }
    for (const w of poss){ if (src.includes('不' + w) || src.includes('没那么' + w) || src.includes('没有那么' + w)) continue;
      const i = src.indexOf(w);
      if (i >= 0 && (!best || i < best.i)) best = {i, w, neg:false}; }
    return best;
  };
  const mid = masked.match(/(^|[，,。！!；;\s、])一般(?=[，,。！!；;\s~～]|$)/);   /* v2.29 说话常说「，一般」 */
  return scan(masked, V_NEG1, V_POS1) || scan(t, V_NEG1, V_POS1)
      || scan(masked, V_NEG2, V_POS2) || scan(t, V_NEG2, V_POS2)
      || (mid ? {i:mid.index + mid[1].length, w:'一般', neg:false} : null);
}
const TPLS = {work:{n:'工作', unit:'件'}, movie:{n:'电影', unit:'部'}, food:{n:'美食', unit:'家'}, book:{n:'读书', unit:'本'}, money:{n:'花钱', unit:'笔'}, fun:{n:'娱乐', unit:'次'}, study:{n:'学习', unit:'件'}};
const TPL_ORDER = [null, 'work', 'study', 'movie', 'food', 'book', 'money', 'fun'];
function tplOf(g){
  const o = SET.gtpl[g];
  if (o !== undefined) return o || null;
  if (/工作|上班|公司|项目|业务|事业/.test(g)) return 'work';
  if (/电影|观影|影视/.test(g)) return 'movie';
  if (/美食|餐|吃/.test(g)) return 'food';
  if (/读书|阅读|书/.test(g)) return 'book';
  if (/花钱|消费|记账|账单|开销/.test(g)) return 'money';
  if (/休闲|娱乐|玩乐|好玩/.test(g)) return 'fun';   /* v3.1 */
  if (/学习|课程|考试|作业|备考|考研|考证|上课/.test(g)) return 'study';   /* v3.3 海风学堂 */
  return null;
}
function rngOf(sel){
  const ta = TODAY.split('.').map(Number);
  if (!sel || sel === 'all') return null;
  if (sel === 'year') return {from:parseKey(ta[0] + '.1.1'), to:parseKey(ta[0] + '.12.31'), label:ta[0] + '年'};
  if (sel === 'lastyear') return {from:parseKey((ta[0]-1) + '.1.1'), to:parseKey((ta[0]-1) + '.12.31'), label:(ta[0]-1) + '年'};
  if (sel === 'month'){ const ld = new Date(ta[0], ta[1], 0).getDate();
    return {from:parseKey(ta[0] + '.' + ta[1] + '.1'), to:parseKey(ta[0] + '.' + ta[1] + '.' + ld), label:ta[1] + '月'}; }
  return sel;
}
function tplRows(g, rng){
  const rows = [];
  walk((d, e) => {
    if (!(e.groups && e.groups.includes(g))) return;
    if (rng){ const t = parseKey(d); if (t < rng.from || t > rng.to) return; }
    rows.push({d, e, p:parseEntry(e)});
  });
  rows.sort((a, b) => parseKey(b.d) - parseKey(a.d));
  return rows;
}
function tplStats(tpl, rows){
  const S = {tiles:[], ranks:[], ranksTitle:'', bars:[], merges:null, quote:null};
  const q = rows.find(r => r.p.verdict || r.p.score != null);
  if (q) S.quote = {text:(q.e.text || '').slice(0, 42), d:q.d};
  if (tpl === 'movie' || tpl === 'book'){
    const map = {};
    rows.forEach(r => { if (!r.p.title) return;
      const c = canonTitle(r.p.title);
      const o = map[c] || (map[c] = {name:c, score:null, withs:null, cnt:0, d:r.d, id:r.e._id});
      o.cnt++;
      if (r.p.score != null && (o.score == null || r.p.score > o.score)) o.score = r.p.score;
      if (r.p.withs && !o.withs) o.withs = r.p.withs;
    });
    const titles = Object.values(map);
    const scored = titles.filter(x => x.score != null);
    const wsub = x => x.withs ? (x.withs[0] === '独自' ? '独自' : '和' + x.withs.slice(0, 3).join('、')) : '';
    const nmx = x => x.name + (x.cnt >= 2 ? ' ×' + x.cnt : '');
    const li = arr => arr.map(x => ({nm:nmx(x), sub:(x.cnt >= 2 ? '看了' + x.cnt + '次 ' : '') + wsub(x), sc:x.score != null ? x.score + '分' : '', d:x.d, id:x.id}));
    const wcnt = {};
    rows.forEach(r => (r.p.withs || []).forEach(w => { if (w !== '独自') wcnt[w] = (wcnt[w] || 0) + 1; }));
    const topW = Object.entries(wcnt).sort((a, b) => b[1] - a[1])[0];
    const wRows = topW ? rows.filter(r => (r.p.withs || []).includes(topW[0]))
      .map(r => ({nm:(r.p.title ? '《' + r.p.title + '》' : (r.e.text || '').slice(0, 16)), sub:fmtShort(r.d) + '日', sc:r.p.score != null ? r.p.score + '分' : '', d:r.d, id:r.e._id})) : [];
    S.tiles = [
      [titles.length, TPLS[tpl].unit, tpl === 'movie' ? '看过' : '读过', li(titles)],
      [scored.length ? (scored.reduce((a, x) => a + x.score, 0) / scored.length).toFixed(1) : '—', '分', '平均打分', li(scored.slice().sort((a, b) => b.score - a.score))],
      [scored.filter(x => x.score >= 10).length, TPLS[tpl].unit, '满分神作', li(scored.filter(x => x.score >= 10))],
      topW ? [topW[1], '次', '和' + topW[0].slice(0, 3), wRows] : [rows.length, '条', '记录', null]
    ];
    S.ranksTitle = '高分榜';
    S.ranks = scored.sort((a, b) => b.score - a.score).slice(0, 5)
      .map((x, i) => ({no:String(i + 1), cls:i === 0 ? 'g' : '', nm:nmx(x), sub:wsub(x), sc:x.score + '分', scCls:'', d:x.d, id:x.id}));
    // 别名合并候选
    const names = titles.map(x => x.name);
    outer: for (let i = 0; i < names.length; i++) for (let j = 0; j < names.length; j++){
      if (i === j) continue;
      const a = names[i], b = names[j];
      if (a.length >= 2 && a.length < b.length && b.includes(a) && !SET.aliasNo[a + '|' + b]){ S.merges = [a, b]; break outer; }
    }
  }
  if (tpl === 'food'){
    const map = {};
    const wm = {};   /* v3.3.5 想吃：不算去过，单独一格 */
    rows.forEach(r => { if (!r.p.store) return;
      if (r.p.want){ if (!wm[r.p.store]) wm[r.p.store] = r; return; }
      const o = map[r.p.store] || (map[r.p.store] = {name:r.p.store, cnt:0, v:null, vNeg:false, tier:null, tv:null, tsc:null, city:null, price:null, delivery:false, d:r.d, id:r.e._id});
      o.cnt++;
      if (!o.v && r.p.verdict){ o.v = r.p.verdict; o.vNeg = !!r.p.vNeg; }
      if (!o.tier){ const tr = foodTier(r.p);
        if (tr){ o.tier = tr; o.tv = r.p.verdict || null; o.tsc = (r.p.score != null ? r.p.score : null); } }
      if (!o.city && r.p.city) o.city = r.p.city;
      if (r.p.delivery) o.delivery = true;
      if (o.price == null && r.p.prices) o.price = r.p.prices[0];
    });
    const stores = Object.values(map);
    const tCls = t => t || '';
    const sli = arr => arr.map(x => ({nm:x.name,
      sub:(x.delivery ? '外卖' : (x.city || '')) + (x.price != null ? ' ¥' + x.price : '') + (x.cnt > 1 ? ' 去过' + x.cnt + '次' : '') + (x.tsc != null && x.tv ? ' “' + x.tv + '”' : ''),
      sc:(x.tsc != null ? x.tsc + '分' : (x.tv || '')), scCls:tCls(x.tier), d:x.d, id:x.id}));
    const bao = stores.filter(x => x.tier === 'bao').sort((a, b) => (b.tsc || 0) - (a.tsc || 0) || b.cnt - a.cnt);
    const jia = stores.filter(x => x.tier === 'jia').sort((a, b) => b.cnt - a.cnt);
    const lei = stores.filter(x => x.tier === 'lei');
    const mute = stores.filter(x => !x.tier).sort((a, b) => b.cnt - a.cnt);
    const SI = storeIndex();
    const want = Object.values(wm).filter(r => !map[r.p.store] && !SI[r.p.store]).map(r => {
      const c = r.p.delivery ? '外卖' : (r.p.city || dayCity(r.d) || null);
      return {nm:r.p.store, sub:[c || '', fmtKey(r.d) + ' 收的'].filter(Boolean).join(' · '), sc:'想吃', scCls:'want', d:r.d, id:r.e._id, city:c};
    });
    S.tiles = [   /* v3.3.5 去过 · 宝藏 · 避雷 · 想吃 */
      [stores.length, '家', '去过', sli(stores.slice().sort((a, b) => b.cnt - a.cnt))],
      [bao.length, '家', '宝藏', sli(bao)],
      [lei.length, '家', '避雷', sli(lei)],
      [want.length, '家', '想吃', want]
    ];
    if (mute.length) S.noteLink = {txt:'还有 ' + mute.length + ' 家没表态 · 补个分数或一句话就归档', items:sli(mute)};
    S.ranksTitle = '宝藏榜';
    S.ranks = sli(bao.slice(0, 4)).map((x, i) => Object.assign(x, {no:String(i + 1), cls:i === 0 ? 'g' : ''}));
    if (lei.length){
      S.ranksBTitle = '避雷榜';
      S.ranksB = sli(lei.slice(0, 3)).map((x, i) => Object.assign(x, {no:String(i + 1), cls:'r'}));
    }
    const ccnt = {}; S.cityMap = {};
    stores.forEach(x => {
      const bucket = x.delivery ? '外卖' : x.city;
      if (!bucket) return;
      ccnt[bucket] = (ccnt[bucket] || 0) + 1;
      (S.cityMap[bucket] = S.cityMap[bucket] || []).push(sli([x])[0]); });
    want.forEach(x => { if (!x.city) return; ccnt[x.city] = (ccnt[x.city] || 0) + 1; (S.cityMap[x.city] = S.cityMap[x.city] || []).push(x); });   /* v3.3.5 美食地图里也有想吃，后面标一下 */
    S.bars = Object.entries(ccnt).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }
  if (tpl === 'money'){
    let n = 0, sum = 0, mx = 0;
    rows.forEach(r => (r.p.prices || []).forEach(v => { n++; sum += v; mx = Math.max(mx, v); }));
    S.tiles = [[rows.length, '条', '记录', null], [n, '笔', '识别到金额', null], ['¥' + Math.round(sum), '', '合计', null], ['¥' + Math.round(mx), '', '最大一笔', null]];
  }
  return S;
}

/* ============ v2.0 盘点面板 ============ */
let CHAIN_OPEN = new Set();
function appendChainFold(w, r, byId){
  const hops = [];
  let cur2 = r.e; const seen2 = new Set();
  while (cur2 && cur2.srcId && byId[cur2.srcId] && !seen2.has(cur2.srcId)){
    seen2.add(cur2.srcId);
    const prev = byId[cur2.srcId];
    hops.push(prev); cur2 = prev.e;
  }
  if (!hops.length) return;
  const body = w.querySelector('.entry-body'); if (!body) return;
  const hopInfo = h => {
    const bits = [];
    if (h.e.progress) bits.push('已完成' + h.e.progress + '%');
    if (h.e.note) bits.push(h.e.note);
    if (!bits.length && h.e.badge){
      const m2 = String(h.e.badge).replace(/^→[\d.]+\s*·?\s*/, '').replace(/^已完成0%\s*·?\s*/, '').trim();
      if (m2) bits.push(m2);
    }
    return bits.join('——');
  };
  const notable = hops.map(h => ({d:h.d, info:hopInfo(h)})).filter(x => x.info).reverse();
  const first = hops[hops.length - 1], open = CHAIN_OPEN.has(r.e._id);
  const fold = document.createElement('div'); fold.className = 'chainfold';
  fold.textContent = (open ? '▾' : '▸') + ' 一路 ' + (hops.length + 1) + ' 次 · 从 ' + fmtShort(first.d) + ' 跟到 ' + fmtShort(r.d)
    + (notable.length ? ' · ' + notable.length + ' 条进度' : '');
  fold.onclick = ev => { ev.stopPropagation();
    if (open) CHAIN_OPEN.delete(r.e._id); else CHAIN_OPEN.add(r.e._id);
    render(); };
  body.appendChild(fold);
  if (open){
    const line = document.createElement('div'); line.className = 'chainline';
    line.innerHTML = notable.length
      ? notable.map(x => '<div>' + fmtShort(x.d) + ' · ' + x.info + '</div>').join('')
      : '<div>中间没记进度，一路顺延到了这天</div>';
    body.appendChild(line);
  }
}
function ptagRow(r, tpl, scoredSet){
  const p = r.p; const d = document.createElement('div'); d.className = 'ptags';
  const add = (cls, txt, fn) => { const x = document.createElement('span'); x.className = 'ptg ' + cls; x.textContent = txt; if (fn) x.onclick = fn; d.appendChild(x); };
  if ((tpl === 'movie' || tpl === 'book')){
    if (p.score != null) add('sc', '★ ' + p.score + '分');
    else if (p.title && !(scoredSet && scoredSet.has(canonTitle(p.title)))) add('ask', '没打分 · 补一个？', ev => { ev.stopPropagation(); openScoreSheet(r.e); });
    (p.withs || []).slice(0, 3).forEach(w => add(personByName(w) ? 'pp' : '', w === '独自' ? '独自' : '和' + w,
      w === '独自' ? null : (ev => { ev.stopPropagation(); personOpenByName(w); })));
  }
  if (tpl === 'food'){
    if (p.store) add('', p.store.slice(0, 8));
    if (p.delivery) add('', '外卖');
    else if (p.city) add('', p.city);
    if (p.score != null) add('sc', '★ ' + p.score + '分');
    (p.prices || []).slice(0, 2).forEach(v => add('sc', '支出 ¥' + v));
    if (p.store) add('ask', foodPriceLabel(r.e) || '＋ 人均', ev => {ev.stopPropagation(); foodPriceSheet(r.e);});
  }
  if (tpl === 'money') (p.prices || []).forEach(v => add('sc', '¥' + v));
  if (tpl && tpl !== 'food' && !TPL_PLAIN[tpl] && !(p.prices || []).length)
    add('ask', '¥ 补一笔', ev => { ev.stopPropagation(); openAmtSheet(r.e); });
  if (tpl === 'food' && p.want) add('want', '📌 想吃');   /* v3.3.5 */
  else if (p.verdict){
    if (tpl === 'food'){ const tr = foodTier(p) || 'jia';
      add(tr === 'lei' ? 'neg' : tr, p.verdict); }
    else add(p.vNeg ? 'neg' : 'ok', p.verdict);
  } else if (tpl === 'food'){
    const tr = foodTier(p);
    if (tr && tr !== 'jia') add(tr === 'lei' ? 'neg' : tr, TIER_NM[tr]);   /* v3.3.2 吃过的不挂档名 */
  }
  return d.children.length ? d : null;
}
function openScoreSheet(e){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">给「' + ((parseLine(e.text).title) || (e.text || '').slice(0, 12)) + '」打个分</div>'
    + '<div class="gs-chips" id="scChips"></div>';
  const box = $('#scChips');
  [10,9,8,7,6,5,4,3].forEach(v => {
    const b = document.createElement('button'); b.className = 'gs-chip'; b.textContent = v + '分';
    b.onclick = () => { snapshot('补评分'); e.text = (e.text || '').trim() + ' ' + v + '分'; scheduleSave(); closeSheet(); render(); toast('已补上 ' + v + ' 分'); };
    box.appendChild(b);
  });
  S.classList.add('on'); $('#mask').classList.add('on');
}
const RNG_CYCLE = ['year', 'month', 'lastyear', 'all'];
function rngLabel(sel){
  const ta = TODAY.split('.').map(Number);
  return sel === 'year' ? String(ta[0]) : sel === 'month' ? (ta[1] + '月')
    : sel === 'lastyear' ? String(ta[0] - 1) : '全部';
}
function renderTplPanel(g, tpl){
  if (!cur.rngSel) cur.rngSel = 'year';
  const rng = rngOf(cur.rngSel);
  const rows = tplRows(g, rng);
  const st = tplStats(tpl, rows);
  const rlab = rngLabel(cur.rngSel);
  const pan = document.createElement('div'); pan.className = 'tp-pan';
  pan.innerHTML = '<div class="tt" style="display:flex;align-items:center;gap:8px">'
    + '<span>自动盘点 · ' + rlab + '</span>'
    + '<span style="margin-left:auto;color:var(--ink-faint);letter-spacing:0">' + rows.length + ' 条记录</span>'
    + '<span class="hw-link">怎么写?</span></div>'
    + '<div class="tp-nums">' + st.tiles.map((t, i) =>
      '<div class="n" data-ti="' + i + '"' + (t[3] && t[3].length ? ' style="cursor:pointer"' : '') + '><b>' + t[0] + (t[1] ? '<i>' + t[1] + '</i>' : '') + '</b><span>' + t[2] + (t[3] && t[3].length ? ' ›' : '') + '</span></div>').join('') + '</div>';
  view.appendChild(pan);
  const hwl = pan.querySelector('.hw-link');
  if (hwl) hwl.onclick = () => openHowSheet(tpl);
  pan.querySelectorAll('.n[data-ti]').forEach(el => {
    el.onclick = () => { const t = st.tiles[+el.dataset.ti];
      if (t[3] && t[3].length) openTileSheet(t[2] + ' · ' + rlab, t[3]); };
  });
  if (st.noteLink){
    const nl = document.createElement('div'); nl.className = 'tp-more';
    nl.textContent = st.noteLink.txt + ' ›';
    nl.onclick = () => openTileSheet('还没表态 · ' + rlab, st.noteLink.items);
    pan.appendChild(nl);
  }
  /* 榜单 */
  if (st.ranks.length){
    const rk = document.createElement('div'); rk.className = 'tp-pan';
    rk.innerHTML = '<div class="tt">' + st.ranksTitle + '</div>';
    st.ranks.forEach(x => {
      const row = document.createElement('div'); row.className = 'tp-rk';
      row.innerHTML = '<span class="no ' + x.cls + '">' + x.no + '</span>'
        + '<span class="nm">' + x.nm + (x.sub ? '<small>' + x.sub + '</small>' : '') + '</span>'
        + '<span class="sc ' + x.scCls + '">' + x.sc + '</span>';
      row.querySelector('.nm').onclick = () => jumpToEntry(x.d, x.id);
      rk.appendChild(row);
    });
    view.appendChild(rk);
  }
  if (st.ranksB && st.ranksB.length){
    const rk2 = document.createElement('div'); rk2.className = 'tp-pan';
    rk2.innerHTML = '<div class="tt">' + st.ranksBTitle + '</div>';
    st.ranksB.forEach(x => {
      const row = document.createElement('div'); row.className = 'tp-rk';
      row.innerHTML = '<span class="no ' + x.cls + '">' + x.no + '</span>'
        + '<span class="nm">' + x.nm + (x.sub ? '<small>' + x.sub + '</small>' : '') + '</span>'
        + '<span class="sc ' + x.scCls + '">' + x.sc + '</span>';
      row.querySelector('.nm').onclick = () => jumpToEntry(x.d, x.id);
      rk2.appendChild(row);
    });
    view.appendChild(rk2);
  }
  /* 城市分布 */
  if (st.bars.length){
    const bp = document.createElement('div'); bp.className = 'tp-pan';
    const mx = st.bars[0][1];
    bp.innerHTML = '<div class="tt">我的美食地图 · 点城市看清单</div>' + st.bars.map(([c, v]) =>
      '<div class="tp-bar" data-city="' + c + '" style="cursor:pointer"><span class="c">' + c + '</span><div class="tr"><i style="width:' + Math.round(v / mx * 100) + '%"></i></div><span class="v">' + v + ' ›</span></div>').join('');
    view.appendChild(bp);
    bp.querySelectorAll('[data-city]').forEach(el => {
      el.onclick = () => {
        const c = el.dataset.city;
        const list = (st.cityMap && st.cityMap[c]) || [];
        if (list.length) openTileSheet(c + ' · ' + list.length + ' 家', list);
      };
    });
  }
  /* 别名合并 */
  if (st.merges){
    const [a, b] = st.merges;
    const mg = document.createElement('div'); mg.className = 'tp-merge';
    mg.innerHTML = '<b>《' + a + '》</b>和<b>《' + b + '》</b>是同一部吗？'
      + '<button class="gm-btn" id="mgYes">是，合并</button><button class="gm-btn" id="mgNo">不是</button>';
    view.appendChild(mg);
    mg.querySelector('#mgYes').onclick = () => { SET.alias[a] = b; scheduleSave(); render(); toast('已合并，统计按《' + b + '》算'); };
    mg.querySelector('#mgNo').onclick = () => { SET.aliasNo[a + '|' + b] = 1; scheduleSave(); render(); };
  }
}
function openTileSheet(title, items){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">' + title + '</div><div id="tsList" style="max-height:52vh;overflow-y:auto"></div>';
  const box = $('#tsList');
  items.forEach((x, i) => {
    const row = document.createElement('div'); row.className = 'tp-rk';
    row.innerHTML = '<span class="no ' + (x.cls || '') + '">' + (x.no || (i + 1)) + '</span>'
      + '<span class="nm">' + x.nm + (x.sub ? '<small>' + x.sub + '</small>' : '') + '</span>'
      + '<span class="sc ' + (x.scCls || '') + '">' + (x.sc || '') + '</span>';
    if (x.d) row.querySelector('.nm').onclick = () => { closeSheet(); jumpToEntry(x.d, x.id); };
    box.appendChild(row);
  });
  S.classList.add('on'); $('#mask').classList.add('on');
}
function openHowSheet(tpl){
  const S = $('#gsheet');
  const row = (t, ex, note) => '<div class="hw-row"><b>' + t + '</b><code>' + ex + '</code>' + (note ? '<span>' + note + '</span>' : '') + '</div>';
  const per = {
    food: row('美食', '在「烤匠」吃了麻辣烤鱼（鱼皮酥脆），8.5分，会再来', '人均参考在「记美食」里填；实际支出到铜板账房记录。「」里是店名 · 括号里评价菜，不算店的整体表态 · 整体表态放句末'),
    movie: row('电影', '《沙丘2》9分，和赵赵二刷', '《》里是片名 · X分=评分 · 和X=同行人'),
    book: row('读书', '《毫无意义的工作》读完，8分', '《》里是书名 · X分=评分'),
    money: row('花销', '打车 23元，咖啡 ¥18', '写 元 / ¥ 就自动记账'),
    work: row('工作', '完成周报初稿，明天给老板', '写「明天 / 8.25」自动挂日期'),
    fun: row('娱乐', '和朋友去唱K，人均¥80，开心', '和X=同行人 · 写 元 就自动记账')
  };
  const order = [tpl].concat(Object.keys(per).filter(k => k !== tpl)).filter(k => k && per[k]);
  S.innerHTML = '<div class="gs-title">怎么写，啾啾才看得懂</div>'
    + order.map(k => per[k]).join('')
    + '<div class="hw-tier"><b>美食分四种</b>　宝藏＝8分以上，或写「宝藏 / 会再来 / 回购 / 必吃」；避雷＝6分以下，或写「避雷 / 难吃 / 非必要不去」；其余都算吃过（去过的都在「去过」里）；还没去的写「想去吃「店名」」「种草了「店名」」，是想吃。吃什么从宝藏和想吃里抽。</div>'
    + '<div class="hw-tip">都是普通中文，不用死记——写 #分组名 归进集子，「明天下午三点」自动挂时间。</div>';
  S.classList.add('on'); $('#mask').classList.add('on');
}
const TPL_NOUN = {movie:'观影', food:'美食', book:'阅读', money:'花销'};
function statsPayload(g, tpl, st, sel){
  const ta = TODAY.split('.').map(Number);
  const noun = TPL_NOUN[tpl] || TPLS[tpl].n;
  const title = sel === 'year' ? (ta[0] + ' 我的' + noun + '年报')
    : sel === 'lastyear' ? ((ta[0] - 1) + ' 我的' + noun + '年报')
    : sel === 'month' ? (ta[1] + '月 ' + noun + '小结')
    : ('我的' + noun + '全记录');
  return {type:'stats', head:'啾啾岛 · 盘点',
    cardTitle:title,
    tiles:st.tiles.slice(0, 3),   /* v3.3.5 美食第 4 格是想吃；分享图还是 去过 · 宝藏 · 避雷 */
    list:(tpl === 'food')
      ? st.ranks.slice(0, 3).concat((st.ranksB || []).slice(0, 2).map(x => Object.assign({}, x, {no:'↓'})))
      : st.ranks.slice(0, 5),
    bars:tpl === 'food' ? (st.bars || []).slice(0, 4) : null,
    quote:st.quote};
}
function openFoodMap(g){
  const rows = tplRows(g, rngOf(cur.rngSel));
  const st = tplStats('food', rows);
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">我的美食地图 · ' + rngLabel(cur.rngSel) + '</div>'
    + '<div id="fmList" style="max-height:56vh;overflow-y:auto"></div>';
  const box = $('#fmList');
  if (!st.bars.length){
    const d = document.createElement('div'); d.className = 'empty-hint';
    d.textContent = '还没识别到城市 · 写「上海"店名"」这样啾啾就能归到城市里';
    box.appendChild(d);
  }
  st.bars.forEach(([c, v]) => {
    const h = document.createElement('div');
    h.style.cssText = 'font-size:12px;color:var(--ink-faint);letter-spacing:2px;font-weight:600;margin:12px 0 2px';
    h.textContent = c + ' · ' + v + ' 家';
    box.appendChild(h);
    ((st.cityMap && st.cityMap[c]) || []).forEach(x => {
      const row = document.createElement('div'); row.className = 'tp-rk';
      row.innerHTML = '<span class="nm">' + x.nm + (x.sub ? '<small>' + x.sub + '</small>' : '') + '</span>'
        + '<span class="sc ' + (x.scCls || '') + '">' + (x.sc || '') + '</span>';
      if (x.d) row.querySelector('.nm').onclick = () => { closeSheet(); jumpToEntry(x.d, x.id); };
      box.appendChild(row);
    });
  });
  S.classList.add('on'); $('#mask').classList.add('on');
}

/* ============ 点点记得：写到老地方老片子时浮出来 ============ */
let rcTimer = null;
function updateRecall(e, inp){
  clearTimeout(rcTimer);
  rcTimer = setTimeout(() => {
    const RC = $('#recall');
    if (!inp.isConnected || document.activeElement !== inp){ RC.classList.remove('on'); return; }
    if ($('#tagSug').classList.contains('on')){ RC.classList.remove('on'); return; }
    const p = parseLine(e.text || '');
    const storeKey = p.store && storeSet().has(p.store) ? p.store : null;
    const key = storeKey || p.title;
    if (!key || key.length < 2){
      const gs = (e.groups && e.groups.length) ? e.groups
        : ((e.text || '').match(/#([^\s#]{1,12})/g) || []).map(x => x.slice(1));
      if (gs.some(g2 => tplOf(g2) === 'food') && (e.text || '').length >= 10 && !p.store && !foodTier(p)){
        RC.innerHTML = '<span class="rc-ico">✍️</span><span class="rc-tx">店名加「」、句末给个分数或表态，啾啾就能帮你记榜</span><span class="rc-go">看写法 ›</span>';
        RC.onclick = () => { RC.classList.remove('on'); dismissKB(); openHowSheet('food'); };
        RC.classList.add('on'); placeToolbar(); return;
      }
      RC.classList.remove('on'); return;
    }
    const isStore = !!storeKey;
    const hits = [];
    walk((d, x) => {
      if (x._id === e._id || !x.text) return;
      const xp = parseEntry(x);
      if (isStore ? (xp.store === key || x.text.includes(key)) : (xp.title && canonTitle(xp.title) === canonTitle(key)))
        hits.push({d, x, xp});
    });
    if (!hits.length){ RC.classList.remove('on'); return; }
    hits.sort((a, b) => parseKey(b.d) - parseKey(a.d));
    const h = hits[0];
    let info = isStore
      ? (key + ' · 来过 ' + hits.length + ' 次 · 上次' + (h.xp.verdict ? '你说：' + h.xp.verdict : '') + '（' + fmtShort(h.d) + '）')
      : ('《' + key + '》你 ' + fmtShort(h.d) + ' 看过' + (h.xp.score != null ? '，打了 ' + h.xp.score + ' 分' : ''));
    RC.innerHTML = '<span class="rc-ico">' + (isStore ? '📍' : '🎬') + '</span>'
      + '<span class="rc-tx">啾啾记得：' + info + '</span><span class="rc-go">看看 ›</span>';
    RC.onclick = () => { RC.classList.remove('on'); dismissKB(); jumpToEntry(h.d, h.x._id); };
    RC.classList.add('on'); placeToolbar();
  }, 380);
}

/* ============ 分享图（v1.9） ============ */
const SH_SIZES = [['xhs','3:4',1080,1440],['sq','1:1',1080,1080],['story','竖屏',1080,1920]];
let shPayload = null, shSize = 'xhs', shTheme = 'paper', shCanvas = null;
/* 自定义底图：仓库里放 share-bg.png（通用）或 share-bg-34/11/916.png（分尺寸）即自动生效 */
const SH_BG = {tried:false, block:false, imgs:{}};
function shLoadBGs(){
  if (SH_BG.tried) return; SH_BG.tried = true;
  [['34', JJ.bg34], ['11', JJ.bg11], ['916', JJ.bg916], ['base', JJ.bg34]]   /* v3.0 岛上的信纸，内嵌 */
  .forEach(([k, f]) => {
    const im = new Image();
    im.onload = () => { SH_BG.imgs[k] = im; if ($('#shSheet').classList.contains('on')) shRender(); };
    im.src = f;
  });
}
function shBgFor(size){
  const m = {xhs:'34', sq:'11', story:'916'}[size];
  return SH_BG.block ? null : (SH_BG.imgs[m] || SH_BG.imgs.base || null);
}
function shThemeList(){
  const base = [['paper','手帐纸'],['ink','墨色']];
  if (shBgFor(shSize)) base.push(['bgd','信纸']);
  return base;
}

function shT(){
  const acc = (ACCENTS[SET.accent] || ACCENTS[0])[0];
  return (shTheme === 'ink' || shTheme === 'bgl')
    ? {bg:'#2B231C', ink:'#F7F0E2', soft:'#C9BBA4', faint:'#8F7F6B', acc:'#E38C78', pill:'#3A3027', grain:'#000', wm:'light'}
    : {bg:'#F7F0E2', ink:'#2E241C', soft:'#75624F', faint:'#958370', acc:acc, pill:'#EFE5D3', grain:'#5A5140', wm:'dark'};
}
function shFont(w, px){ return w + ' ' + px + 'px -apple-system,"PingFang SC","Noto Sans CJK SC",sans-serif'; }
function shWrap(ctx, text, maxW){
  const out = [];
  String(text == null ? '' : text).split('\n').forEach(par => {
    let line = '';
    for (const ch of par){
      if (line && ctx.measureText(line + ch).width > maxW){ out.push(line); line = ch; }
      else line += ch;
    }
    out.push(line);
  });
  return out;
}
function shRR(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
function shMascot(ctx, cx, cy, h, T){   /* v3.0 画啾啾（窝里那张） */
  const im = jjObj('nest'); if (!im.complete || !im.naturalWidth) return;
  const w = h * im.naturalWidth / im.naturalHeight;
  ctx.drawImage(im, cx - w / 2, cy - h / 2, w, h);
}
function shGlyph(e){
  if (e.sym === 'note' && e.ledger) return {t:'💰', c:null};
  if (e.sym === 'note' && mealGlyphSlot(e)) return {t:'🍚', c:null};
  if (e.sym === 'task') return {t:{open:'•', done:'✓', migrated:'›', dropped:'✕', delegated:'→', someday:'☾'}[e.state] || '•',
    c:{done:'#5F8F66', dropped:'#C0604E'}[e.state] || null};
  return {t:{event:'○', note:'—', mood:'＝', ask:'？', bang:'！'}[e.sym] || '•',
    c:{ask:'#5B7FA6', bang:'#B5493A'}[e.sym] || null};
}
function shGrain(ctx, W, H, T){
  ctx.save(); ctx.globalAlpha = shTheme === 'ink' ? 0.06 : 0.05; ctx.fillStyle = T.grain;
  const n = Math.round(W * H / 380);
  for (let i = 0; i < n; i++) ctx.fillRect(Math.random() * W, Math.random() * H, 1.5, 1.5);
  ctx.restore();
}
function shFooter(ctx, W, H, T){
  shMascot(ctx, W / 2, H - 222, 100, T);
  let saved = false;
  try{   /* 字标直接用路径画：离线也清楚，不怕字体 */
    const vb = WM.vb.split(/\s+/).map(Number), hh = 50, sc = hh / vb[3], ww = vb[2] * sc;
    ctx.save(); saved = true;
    ctx.translate(W / 2 - ww / 2 - vb[0] * sc, H - 158 - vb[1] * sc); ctx.scale(sc, sc);
    const c1 = T.wm === 'light' ? '#F7F0E2' : '#2E241C', c2 = T.wm === 'light' ? '#9CC9BF' : '#2F6B64';
    const p1 = new Path2D(WM.d1), p2 = new Path2D(WM.d2);
    ctx.lineJoin = 'round';
    ctx.fillStyle = c1; ctx.strokeStyle = c1; ctx.lineWidth = 2.4; ctx.fill(p1); ctx.stroke(p1);
    ctx.fillStyle = c2; ctx.strokeStyle = c2; ctx.lineWidth = 1.2; ctx.fill(p2); ctx.stroke(p2);
    ctx.restore(); saved = false;
  }catch(_){
    if (saved) ctx.restore();
    ctx.textAlign = 'center'; ctx.font = shFont(700, 32); ctx.fillStyle = T.ink; ctx.fillText('啾啾岛 Jotbird', W / 2, H - 118);
  }
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.font = shFont(400, 22); ctx.fillStyle = T.faint;
  ctx.fillText('把日子记在岛上', W / 2, H - 72);
  ctx.textAlign = 'left';
}
/* 把一组条目画成列表，返回用掉的高度；fit 模式只测量不落笔 */
function shList(ctx, items, x, y0, maxW, F, T, fit){
  let y = y0;
  const lh = F * 1.62, gap = F * 0.72, childF = Math.round(F * 0.82);
  for (const it of items){
    const g = shGlyph(it.e), indent = it.child ? F * 1.5 : 0;
    const tx = x + indent + F * 1.35, tw = maxW - indent - F * 1.35;
    ctx.font = shFont(it.child ? 400 : 500, it.child ? childF : F);
    const lines = shWrap(ctx, mealFullText(it.e), tw);
    if (!fit){
      ctx.fillStyle = g.c || (it.e.sym === 'mood' ? '#7A5C8F' : (it.child ? T.soft : T.ink));
      ctx.font = shFont(600, it.child ? childF : F);
      ctx.fillText(g.t, x + indent, y + (it.child ? childF : F));
      ctx.font = shFont(it.child ? 400 : 500, it.child ? childF : F);
      if (it.child){ ctx.strokeStyle = T.pill; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(x + F * 0.6, y - gap * 0.4); ctx.lineTo(x + F * 0.6, y + lines.length * lh * 0.9); ctx.stroke(); }
      lines.forEach((ln, i) => {
        ctx.fillStyle = g.c && it.e.state === 'done' ? T.faint : (it.child ? T.soft : (it.e.sym === 'mood' ? '#7A5C8F' : T.ink));
        ctx.fillText(ln, tx, y + (it.child ? childF : F) + i * lh * 0.92);
        if (it.e.state === 'done' || it.e.state === 'dropped'){
          const lw = ctx.measureText(ln).width;
          ctx.strokeStyle = T.faint; ctx.lineWidth = 2.4;
          ctx.beginPath(); ctx.moveTo(tx, y + (it.child ? childF : F) * 0.68 + i * lh * 0.92);
          ctx.lineTo(tx + lw, y + (it.child ? childF : F) * 0.68 + i * lh * 0.92); ctx.stroke();
        }
      });
      if (it.e.note){
        ctx.font = shFont(400, Math.round(childF * 0.86)); ctx.fillStyle = T.soft;
        ctx.fillText('✎ ' + it.e.note, tx, y + (it.child ? childF : F) + lines.length * lh * 0.92 - lh * 0.18 + childF * 0.9);
      }
    }
    y += (it.child ? childF : F) + (lines.length - 1) * lh * 0.92 + (it.e.note ? childF * 1.15 : 0) + gap;
  }
  return y - y0;
}
function shItemsOf(payload){
  if (payload.type === 'entry'){
    const arr = [{e: payload.e, child: false}];
    (payload.e.children || []).forEach(ch => arr.push({e: ch, child: true}));
    return arr;
  }
  if (payload.type === 'day'){
    const p = PAGES[payload.date] || {plan: [], flow: []};
    const arr = [];
    [...p.plan, ...p.flow].filter(e => !(isMinor(e) && e.sym !== 'task')).forEach(e => {
      arr.push({e, child: false});
      (e.children || []).forEach(ch => arr.push({e: ch, child: true}));
    });
    return arr;
  }
  if (payload.type === 'group'){
    const rows = [];
    walk((d, e) => { if (e.groups && e.groups.includes(payload.g)) rows.push({d, e}); });
    rows.sort((a, b) => parseKey(b.d) - parseKey(a.d));
    return rows.slice(0, 6).map(r => ({e: Object.assign({}, r.e, {text: fmtShort(r.d) + '日 · ' + (r.e.text || '')}), child: false}));
  }
  return [];
}
function shDraw(){
  const sz = SH_SIZES.find(x => x[0] === shSize), W = sz[2], H = sz[3];
  const T = shT(), P = shPayload;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
  const bgImg = (shTheme === 'bgd' || shTheme === 'bgl') ? shBgFor(shSize) : null;
  if (bgImg){
    const sc = Math.max(W / bgImg.width, H / bgImg.height);
    ctx.drawImage(bgImg, (W - bgImg.width * sc) / 2, (H - bgImg.height * sc) / 2, bgImg.width * sc, bgImg.height * sc);
  }
  const M = 88, CW = W - M * 2, top = 128, bottom = H - 320;
  ctx.textBaseline = 'alphabetic';
  /* 头部 */
  ctx.font = shFont(600, 30); ctx.fillStyle = T.faint;
  const head = P.head || '';
  ctx.fillText(head, M, top);
  ctx.font = shFont(700, 46); ctx.fillStyle = T.ink;
  const title = P.cardTitle || '';
  if (title) ctx.fillText(title, M, top + 68);
  const y0 = top + (title ? 130 : 56);
  /* 正文自适应字号 */
  if (P.type === 'stats'){
    let y = y0 + 26;
    const tw = (CW - 40) / 3;
    (P.tiles || []).forEach((t, i) => {
      const x = M + i * (tw + 20);
      ctx.fillStyle = T.pill; shRR(ctx, x, y, tw, 176, 18); ctx.fill();
      ctx.fillStyle = T.ink; ctx.textAlign = 'center';
      ctx.font = shFont(700, 58);
      const big = String(t[0]);
      ctx.fillText(big, x + tw / 2 - (t[1] ? 12 : 0), y + 96);
      if (t[1]){ ctx.font = shFont(400, 24); ctx.fillStyle = T.soft;
        ctx.fillText(t[1], x + tw / 2 + ctx.measureText(big).width + 26, y + 92); }
      ctx.font = shFont(400, 22); ctx.fillStyle = T.faint;
      ctx.fillText(t[2], x + tw / 2, y + 142);
    });
    ctx.textAlign = 'left';
    y += 176 + 60;
    for (const x of (P.list || [])){
      if (y > bottom - 30) break;
      ctx.font = shFont(700, 34); ctx.fillStyle = T.acc;
      ctx.fillText(x.no, M + 4, y);
      ctx.font = shFont(500, 34); ctx.fillStyle = T.ink;
      let nm = x.nm; while (ctx.measureText(nm).width > CW - 220 && nm.length > 2) nm = nm.slice(0, -1);
      if (nm !== x.nm) nm += '…';
      ctx.fillText(nm, M + 58, y);
      ctx.font = shFont(700, 32); ctx.fillStyle = (x.scCls === 'no2' || x.scCls === 'lei') ? '#C0604E' : x.scCls === 'ok' ? '#5F8F66' : x.scCls === 'bao' ? T.acc : x.scCls === 'jia' ? T.soft : T.ink;
      ctx.fillText(x.sc, M + CW - ctx.measureText(x.sc).width, y);
      y += 62;
    }
    if (P.bars && P.bars.length && y < bottom - 90){
      y += 14;
      ctx.font = shFont(600, 24); ctx.fillStyle = T.faint;
      ctx.fillText('城 市 分 布', M, y); y += 40;
      const bmax = P.bars[0][1];
      for (const [c, v] of P.bars){
        if (y > bottom - 20) break;
        ctx.font = shFont(400, 27); ctx.fillStyle = T.soft;
        ctx.fillText(c, M, y);
        const bx = M + 128, bw = CW - 128 - 70;
        ctx.fillStyle = T.pill; shRR(ctx, bx, y - 22, bw, 24, 12); ctx.fill();
        ctx.fillStyle = T.acc; shRR(ctx, bx, y - 22, Math.max(24, bw * v / bmax), 24, 12); ctx.fill();
        ctx.font = shFont(400, 24); ctx.fillStyle = T.faint;
        ctx.fillText(String(v), bx + bw + 22, y);
        y += 52;
      }
    }
    if (P.quote && y < bottom - 100){
      y += 22;
      ctx.fillStyle = T.pill; shRR(ctx, M, y - 34, CW, 92, 14); ctx.fill();
      ctx.font = shFont(400, 26); ctx.fillStyle = T.soft;
      let qt = '“' + P.quote.text + '”';
      while (ctx.measureText(qt).width > CW - 48 && qt.length > 4) qt = qt.slice(0, -2) + '”';
      ctx.fillText(qt, M + 24, y + 4);
      ctx.font = shFont(400, 21); ctx.fillStyle = T.faint;
      ctx.fillText('—— ' + fmtShort(P.quote.d) + '日 的我', M + 24, y + 42);
    }
  } else if (P.type === 'report'){
    let F = 34;
    while (F > 24){
      ctx.font = shFont(400, F);
      const lines = shWrap(ctx, P.text, CW);
      if (y0 + lines.length * F * 1.72 < bottom) break; F -= 2;
    }
    ctx.font = shFont(400, F); ctx.fillStyle = T.ink;
    let lines = shWrap(ctx, P.text, CW);
    const maxN = Math.floor((bottom - y0) / (F * 1.72));
    let cut = false;
    if (lines.length > maxN){ lines = lines.slice(0, maxN - 1); cut = true; }
    lines.forEach((ln, i) => {
      ctx.fillStyle = /^[【#]/.test(ln) ? T.acc : T.ink;
      ctx.fillText(ln, M, y0 + (i + 1) * F * 1.72);
    });
    if (cut){ ctx.fillStyle = T.faint; ctx.fillText('……换竖屏尺寸能装下更多', M, y0 + (lines.length + 1) * F * 1.72); }
  } else {
    const items = shItemsOf(P);
    let F = P.type === 'entry' ? 56 : 44;
    while (F > 30 && shList(ctx, items, M, y0, CW, F, T, true) > bottom - y0) F -= 3;
    let used = shList(ctx, items, M, y0, CW, F, T, true), cut = 0, its = items.slice();
    while (its.length > 1 && used > bottom - y0){ its.pop(); cut++; used = shList(ctx, its, M, y0, CW, F, T, true); }
    const avail = bottom - y0;
    const yS = y0 + (used < avail * 0.62 ? Math.min(avail - used, avail * 0.62 - used) * 0.52 : 0);
    shList(ctx, its, M, yS, CW, F, T, false);
    if (cut){ ctx.font = shFont(400, 30); ctx.fillStyle = T.faint;
      ctx.fillText('……还有 ' + cut + ' 条，换竖屏尺寸能装下更多', M, yS + used + 44); }
    if (P.sub){ ctx.font = shFont(400, 30); ctx.fillStyle = T.soft;
      ctx.fillText(P.sub, M, bottom + 58); }
  }
  shFooter(ctx, W, H, T);
  if (!bgImg) shGrain(ctx, W, H, T);
  return c;
}
function shEntryPayload(e){
  const k = curDayKey() || TODAY;
  return {type:'entry', head:fmtKey(k) + ' · ' + weekCN(k), cardTitle:'', e};
}
function shDayPayload(k){
  const p = PAGES[k] || {plan:[], flow:[]};
  let rec = 0, done = 0, ev = 0;
  walkPage(k, e => { if (isMinor(e) && e.sym !== 'task') return; rec++; if (e.state === 'done') done++; if (e.sym === 'event') ev++; });
  return {type:'day', head:'啾啾岛 · 一日', cardTitle:fmtKey(k) + ' ' + weekCN(k), date:k,
    sub:'记录 ' + rec + ' 条 · 完成 ' + done + ' 件 · 事件 ' + ev + ' 件' + (p.summary ? ('　「' + p.summary + '」') : '')};
}
function openShare(payload){
  shPayload = payload; shSize = 'xhs'; shTheme = 'paper';
  shLoadBGs();
  dismissKB(); $('#shSheet').classList.add('on'); shRender();
}
function shRender(){
  const P = $('#shPanel');
  let h = '<div class="gs-title">分享图</div>'
    + '<div class="sh-prev"><img id="shImg" alt="分享预览"></div>'
    + '<div class="sh-row"><span class="sh-lab">尺寸</span>'
    + SH_SIZES.map(x => '<button class="gs-chip' + (shSize === x[0] ? ' on' : '') + '" data-sz="' + x[0] + '">' + x[1] + '</button>').join('')
    + '</div><div class="sh-row"><span class="sh-lab">排版</span>'
    + shThemeList().map(x => '<button class="gs-chip' + (shTheme === x[0] ? ' on' : '') + '" data-th="' + x[0] + '">' + x[1] + '</button>').join('')
    + '</div><div class="sh-actions">'
    + '<button class="sh-ghost" id="shClose">关闭</button>'
    + '<button class="rv-confirm" id="shGo">分享 / 保存</button></div>'
    + '<div class="sh-hint">长按上方预览图可直接存入相册</div>';
  P.innerHTML = h;
  if ((shTheme === 'bgd' || shTheme === 'bgl') && !shBgFor(shSize)) shTheme = 'paper';
  shCanvas = shDraw();
  try{ $('#shImg').src = shCanvas.toDataURL('image/png'); }
  catch(_){ SH_BG.block = true; shTheme = 'paper'; shCanvas = shDraw(); $('#shImg').src = shCanvas.toDataURL('image/png'); }
  P.querySelectorAll('[data-sz]').forEach(b => b.onclick = () => { shSize = b.dataset.sz; shRender(); });
  P.querySelectorAll('[data-th]').forEach(b => b.onclick = () => { shTheme = b.dataset.th; shRender(); });
  $('#shClose').onclick = closeShare;
  $('#shGo').onclick = shExport;
}
function closeShare(){ $('#shSheet').classList.remove('on'); }
function shExport(){
  if (!shCanvas) return;
  shCanvas.toBlob(async blob => {
    if (!blob){ toast('生成失败，重试一下'); return; }
    const file = new File([blob], '啾啾岛分享.png', {type: 'image/png'});
    if (navigator.canShare && navigator.canShare({files: [file]})){
      try{ await navigator.share({files: [file]}); return; }catch(_){ }
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = '啾啾岛分享.png'; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    toast('已生成图片 · 也可长按预览图存相册');
  }, 'image/png');
}
$('#shSheet').addEventListener('click', ev => { if (ev.target.id === 'shSheet') closeShare(); });

/* ============ v2.7 提醒 ============ */
/* ===== v2.15 板块开关 ===== */
SET.mods = SET.mods || {};
if (SET.mods.meals === undefined) SET.mods.meals = false;   /* 三餐默认关，设置里打开 */
if (SET.mods.smartbar === undefined) SET.mods.smartbar = false;   /* 聪明工具条（内测）默认关 */
if (SET.mods.meals !== true && !SET.mealsUserOff && foodGroupName()) SET.mods.meals = true;   /* v2.23 美食升格为板块：已有集子的直接点亮（手动关过除外） */
if (SET.mods.ledger === undefined) SET.mods.ledger = false;   /* v2.24 记账默认关，设置里打开 */
function modOn(k){ return SET.mods[k] !== false; }
/* ===== v2.15 今日印章 ===== */
SET.stamps = SET.stamps || [];
const STAMP_PRESETS = ['充实高效','平淡安稳','小有波折但收尾顺利','彻底放空','小有收获'];
function stampSheet(k){
  const S = $('#gsheet');
  const all = STAMP_PRESETS.concat((SET.stamps || []).filter(x => !STAMP_PRESETS.includes(x)));
  const cur0 = (PAGES[k] && PAGES[k].stamp) || null;
  S.innerHTML = '<div class="gs-title">给 ' + fmtKey(k) + ' 盖个章</div>'
    + '<div class="gs-chips">' + all.map(x => '<button class="gs-chip' + (cur0 === x ? ' on' : '') + '" data-s="' + escAttr(x) + '">' + vEsc(x) + '</button>').join('') + '</div>'
    + '<input class="vt-in" id="stNew" placeholder="或自己刻一个（会存进你的章库）">'
    + '<div style="display:flex;gap:10px"><button class="rv-confirm" id="stSave" style="flex:1">盖章</button>'
    + (cur0 ? '<button class="rv-confirm" id="stClear" style="flex:.6;background:var(--bg-deep);color:var(--ink)">取消章</button>' : '') + '</div>';
  let sel = cur0;
  S.querySelectorAll('[data-s]').forEach(b => b.onclick = () => { sel = b.dataset.s;
    S.querySelectorAll('[data-s]').forEach(x => x.classList.toggle('on', x === b)); });
  $('#stSave').onclick = () => {
    const nv = $('#stNew').value.trim();
    const v2 = nv || sel;
    if (!v2){ toast('挑一个，或自己刻一个'); return; }
    if (nv && !STAMP_PRESETS.includes(nv) && !SET.stamps.includes(nv)) SET.stamps.push(nv);
    if (!PAGES[k]) PAGES[k] = {plan:[], flow:[]};
    PAGES[k].stamp = v2; scheduleSave(); closeSheet(); render(); toast('已盖章 · ' + v2);
  };
  const sc0 = S.querySelector('#stClear');
  if (sc0) sc0.onclick = () => { delete PAGES[k].stamp; scheduleSave(); closeSheet(); render(); };
  S.classList.add('on'); $('#mask').classList.add('on');
}
/* ===== v2.15 三餐（同一份记录的另一副眼镜） ===== */
const MEAL_ORDER = ['bre','lun','tea','sup','din'];   /* 宵在晚前判：「晚上吃了夜宵」归宵夜 */
const MEAL_RES = {bre:/早饭|早餐|早上吃/, lun:/午饭|午餐|中午吃|中午点/, tea:/下午茶/, sup:/夜宵|宵夜/, din:/晚饭|晚餐|晚上吃|晚上点/};
const MEAL_NM = {bre:'早', lun:'午', tea:'下午茶', din:'晚', sup:'宵夜', unk:'?'};
const MEAL_WORD = {bre:'早饭', lun:'午饭', tea:'下午茶', din:'晚饭', sup:'夜宵'};
function mealGlyphSlot(e){   /* 明确的一顿：快捷表标了 e.meal，或文字里写了餐词（不含分组+时间兜底） */
  if (e.meal) return e.meal;
  const t = e.text || '';
  if (!t) return null;
  for (const k of MEAL_ORDER){ if (MEAL_RES[k].test(t)) return k; }
  return null;
}
function mealFullText(e){ return (e.meal && MEAL_WORD[e.meal] ? MEAL_WORD[e.meal] + ' ' : '') + (e.text || ''); }
function mealSlotOf(e){
  if (e.meal) return e.meal;
  const t = e.text || '';
  if (!t) return null;
  for (const k of MEAL_ORDER){ if (MEAL_RES[k].test(t)) return k; }
  if ((e.groups || []).some(g => tplOf(g) === 'food')){
    if (e.time){ const h = +String(e.time).split(':')[0];
      if (h >= 5 && h < 10) return 'bre';
      if (h >= 10 && h < 14) return 'lun';
      if (h >= 14 && h < 17) return 'tea';
      if (h >= 17 && h < 21) return 'din';
      return 'sup';
    }
    return 'unk';
  }
  return null;
}
function mealStrip(t){
  return String(t || '').replace(/早饭|早餐|午饭|午餐|晚饭|晚餐|下午茶|夜宵|宵夜|早上吃|中午吃|晚上吃/g, '')
    .replace(/^[了的，。:：、\s]+/, '').trim();
}
function foodGroupName(){
  let fg = null;
  (extraGroups || []).forEach(g => { if (!fg && tplOf(g) === 'food') fg = g; });
  if (!fg) walk((d, e) => { (e.groups || []).forEach(g => { if (!fg && tplOf(g) === 'food') fg = g; }); });
  return fg;
}
/* 三餐里写了「店名」或外卖 → 自动挂进美食集子（可手动摘签） */
function mealAutoTagAll(){
  if (!modOn('meals')) return;
  const fg = foodGroupName(); if (!fg) return;
  let tagged = false;
  walk((d, e) => {
    if (!e.text) return;
    if (!mealGlyphSlot(e)) return;
    if ((e.groups || []).some(g => tplOf(g) === 'food')) return;
    const p = parseEntry(e);
    if (!(p.store || p.delivery)) return;
    (e.groups = e.groups || []).push(fg); tagged = true;
  });
  if (tagged){ KNOWN_STORE = null; KNOWN_PPL = null; }   /* 新店随挂签即入熟店簿 */
}
/* ===== v2.24 记账（方案B）：金额眼镜 · 轻分类可改 ===== */
const EXP_NM = {eat:'吃喝', go:'出行', buy:'购物', home:'居住', fun:'娱乐', med:'医疗', ren:'人情', etc:'其他'};
const EXP_COL = {eat:'var(--accent)', go:'#5B7FA6', buy:'#B07D2E', home:'#5F8F66', fun:'#7A5C8F', med:'#C0604E', ren:'#B25A76', etc:'#CFC7B4'};
const EXP_ORDER = ['eat','go','buy','home','fun','med','ren','etc'];
function expLabel(k){ return (SET.expNames && SET.expNames[k]) || EXP_NM[k] || k; }
function expColor(k){ return EXP_COL[k] || '#CFC7B4'; }
function expKindOf(e, p){
  if (e.exp === 'skip') return null;
  if (e.exp) return e.exp;
  const t = e.text || '';
  if (/(到账|工资|收入|报销|退款|回款|收了|收到)/.test(t)) return null;   /* 收入句不算支出 */
  if (e.meal || mealGlyphSlot(e) || (e.groups || []).some(g => tplOf(g) === 'food') || (p && (p.store || p.delivery))) return 'eat';
  if (/咖啡|奶茶|喝了|甜品|零食|水果|买菜/.test(t)) return 'eat';
  if ((e.groups || []).some(g => tplOf(g) === 'movie') || /《[^》]+》|电影票|门票|演出|演唱会|游戏|皮肤|会员/.test(t)) return 'fun';
  if (/打车|滴滴|地铁|公交|高铁|火车票|机票|加油|停车|骑行|租车/.test(t)) return 'go';
  if (/房租|水电|物业|燃气|宽带|电费|水费|取暖/.test(t)) return 'home';
  if (/挂号|买药|药店|医院|体检|看病|疫苗/.test(t)) return 'med';
  if (/红包|份子|随礼|礼金|请客/.test(t)) return 'ren';
  if (/买|下单|快递|淘宝|京东|拼多多|超市|采购|囤/.test(t)) return 'buy';
  return 'etc';
}
function expRows(){
  const out = [];
  walk((d, e) => {
    if (!e.text) return;
    const p = parseEntry(e);
    if (!(p.prices && p.prices.length)) return;
    const k = expKindOf(e, p);
    if (!k) return;
    out.push({d, e, p, k, sum:amtSum(p.prices)});
  });
  out.sort((a, b) => parseKey(b.d) - parseKey(a.d));
  return out;
}
function expSheet(e){
  const S = $('#gsheet');
  const p = parseEntry(e); const curK = expKindOf(e, p);
  const customs = (SET.expCats || []).filter(x => !EXP_NM[x]);
  S.innerHTML = '<div class="gs-title">这笔算什么 · ' + vEsc((e.text || '').slice(0, 14)) + '</div>'
    + '<div class="gs-chips" id="exChips"></div>'
    + '<div class="gs-new"><input id="exNew" placeholder="自定义类别…" autocomplete="off"><button id="exAdd">添加</button></div>'
    + '<div class="hw-tip" style="padding:8px 2px 0"><span class="hw-link" id="exMng">✎ 类别管理 · 改名 / 删除</span></div>';
  const box = $('#exChips');
  const mk = (k, nm) => {
    const b = document.createElement('button');
    b.className = 'gs-chip' + (curK === k ? ' on' : '');
    b.textContent = nm;
    b.onclick = () => { snapshot('改花销类别'); e.exp = k; scheduleSave(); closeSheet(); toast('这笔记为「' + expLabel(k) + '」'); render(); };
    box.appendChild(b);
  };
  EXP_ORDER.forEach(k => mk(k, expLabel(k)));
  customs.forEach(k => mk(k, k));
  const sk = document.createElement('button');
  sk.className = 'gs-chip' + (e.exp === 'skip' ? ' on' : '');
  sk.textContent = '不算花销';
  sk.onclick = () => { snapshot('不算花销'); e.exp = 'skip'; scheduleSave(); closeSheet(); toast('这笔不计入记账'); render(); };
  box.appendChild(sk);
  $('#exAdd').onclick = () => {
    const v = $('#exNew').value.trim().slice(0, 6);
    if (!v) return;
    SET.expCats = SET.expCats || [];
    if (!SET.expCats.includes(v)) SET.expCats.push(v);
    snapshot('改花销类别'); e.exp = v; scheduleSave(); closeSheet(); toast('这笔记为「' + v + '」'); render();
  };
  const mng = $('#exMng'); if (mng) mng.onclick = expCatManage;
  S.classList.add('on'); $('#mask').classList.add('on');
}
let pendingCatDel = null;
function expCatManage(){
  const S = $('#gsheet');
  const customs = (SET.expCats || []).filter(x => !EXP_NM[x]);
  let h = '<div class="gs-title">类别管理 · 预置的可改叫法，自定义的可改可删</div>';
  h += EXP_ORDER.map(k => '<div class="set-row"><span>' + vEsc(expLabel(k))
    + (SET.expNames && SET.expNames[k] ? '<i style="font-style:normal;color:var(--ink-faint);font-size:11px">　原「' + EXP_NM[k] + '」</i>' : '')
    + '</span><button class="gm-btn" data-rn="' + k + '" style="margin-left:auto">改名</button></div>').join('');
  h += customs.map(c => '<div class="set-row"><span>' + vEsc(c) + '</span>'
    + '<button class="gm-btn" data-rn="@' + escAttr(c) + '" style="margin-left:auto">改名</button>'
    + '<button class="gm-btn danger" data-del="' + escAttr(c) + '">' + (pendingCatDel === c ? '确认删除' : '删') + '</button></div>').join('');
  if (!customs.length) h += '<div class="hw-tip" style="padding:8px 2px 0">在换类面板里「自定义类别…」能加新的</div>';
  S.innerHTML = h;
  S.querySelectorAll('[data-rn]').forEach(b => b.onclick = () => expCatRename(b.dataset.rn));
  S.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
    const c = b.dataset.del;
    if (pendingCatDel !== c){ pendingCatDel = c; toast('再点一次确认 · 用过它的记录会回到自动分类'); expCatManage(); return; }
    pendingCatDel = null;
    SET.expCats = (SET.expCats || []).filter(x => x !== c);
    walk((d, e2) => { if (e2.exp === c) delete e2.exp; });
    scheduleSave(); toast('已删除「' + c + '」'); expCatManage(); render();
  });
  S.classList.add('on'); $('#mask').classList.add('on');
}
function expCatRename(tag){
  const isCustom = tag.indexOf('@') === 0;
  const key = isCustom ? tag.slice(1) : tag;
  const old = isCustom ? key : expLabel(key);
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">给「' + vEsc(old) + '」改个叫法</div>'
    + '<input class="vt-in" id="ecName" value="' + escAttr(old) + '" maxlength="6" style="margin-top:4px">'
    + '<button class="rv-confirm" id="ecGo" style="margin-top:12px">保存</button>'
    + (isCustom ? '<div class="hw-tip" style="padding:6px 2px 0">改名后，用过它的记录会一起换新叫法</div>'
                : '<div class="hw-tip" style="padding:6px 2px 0">预置类别改的只是叫法，自动识别规则照旧</div>');
  $('#ecGo').onclick = () => {
    const v = $('#ecName').value.trim().slice(0, 6);
    if (!v){ toast('写个名字'); return; }
    if (isCustom){
      if (v !== key){
        SET.expCats = (SET.expCats || []).map(x => x === key ? v : x);
        walk((d, e2) => { if (e2.exp === key) e2.exp = v; });
      }
    } else {
      SET.expNames = SET.expNames || {};
      if (v === EXP_NM[key]) delete SET.expNames[key]; else SET.expNames[key] = v;
    }
    scheduleSave(); toast('已改叫「' + v + '」'); expCatManage(); render();
  };
  setTimeout(() => { const i = $('#ecName'); if (i) i.focus(); }, 60);
  S.classList.add('on'); $('#mask').classList.add('on');
}
function openAmtSheet(e){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">给「' + vEsc((e.text || '').slice(0, 14)) + '」补一笔花销</div>'
    + '<input class="vt-in" id="amIn" type="number" min="0" step="0.01" inputmode="decimal" placeholder="花了多少（元）" style="margin-top:4px">'
    + '<button class="rv-confirm" id="amGo" style="margin-top:12px">补上</button>';
  $('#amGo').onclick = () => {
    const v = +$('#amIn').value;
    if (!(v > 0)){ toast('填个数字'); return; }
    snapshot('补金额'); e.text = (e.text || '').trim() + ' ' + v + '元';
    scheduleSave(); closeSheet(); render(); toast('已补上 ¥' + v);
  };
  S.classList.add('on'); $('#mask').classList.add('on');
  setTimeout(() => { const i = $('#amIn'); if (i) i.focus(); }, 60);
}
function expMonthOf(rows, y, m){ return rows.filter(r => { const a = r.d.split('.').map(Number); return a[0] === y && a[1] === m; }); }
function expSum(a){ return Math.round(a.reduce((s2, r) => s2 + r.sum, 0)); }
function recordSheet(g, tpl){   /* v3.1 房子里记一条：哪天的事选哪天 */
  const S = $('#gsheet'), I = ISLE[tpl] || {};
  const PH = {movie:'和谁看了《片名》几分，说两句', book:'读完了《书名》几分，说两句', food:'在「店名」吃了什么，好吃吗、多少钱', fun:'去哪玩了、和谁、花了多少'};
  const TIP = {movie:'写「《片名》+ 几分 + 和谁」，' + I.who + '会自动认出来', book:'写「《书名》+ 几分」，' + I.who + '会自动认出来',
    food:'店名加「」，' + I.who + '会记进熟店簿；写「宝藏」「避雷」能上榜', fun:'写上和谁、花了多少，' + I.who + '帮你记着'};
  const iso = k2 => { const a = k2.split('.').map(Number); return a[0] + '-' + String(a[1]).padStart(2, '0') + '-' + String(a[2]).padStart(2, '0'); };
  const yd = (() => { const d = parseKey(TODAY); d.setDate(d.getDate() - 1); return dkey(d); })();
  S.innerHTML = '<div class="gs-title">记一条 · ' + (I.h || ('#' + vEsc(g))) + '</div>'
    + '<div style="display:flex;gap:8px;align-items:center"><input class="vt-in" id="rcDate" type="date" style="flex:1;margin-top:0">'
    + '<button class="gs-chip on" id="rcT">今天</button><button class="gs-chip" id="rcY">昨天</button></div>'
    + '<textarea class="vt-in" id="rcText" rows="3" placeholder="' + (PH[tpl] || '写一句') + '" style="resize:none;line-height:1.6"></textarea>'
    + '<div class="hw-tip" style="padding:6px 2px 0">' + (TIP[tpl] || '') + '</div>'
    + '<button class="rv-confirm" id="rcSave">记下这条</button>'
    + '<div class="hw-tip" style="padding:6px 2px 0">哪天的事选哪天 · 这条住在' + (I.h || '这里') + '，那天的手帐只在「岛上」那一行多个数字</div>';
  const di = $('#rcDate'); di.value = iso(TODAY); di.max = iso(TODAY);
  const mark = () => { $('#rcT').classList.toggle('on', di.value === iso(TODAY)); $('#rcY').classList.toggle('on', di.value === iso(yd)); };
  $('#rcT').onclick = () => { di.value = iso(TODAY); mark(); };
  $('#rcY').onclick = () => { di.value = iso(yd); mark(); };
  di.onchange = mark;
  $('#rcSave').onclick = () => {
    const t = $('#rcText').value.trim(); if (!t){ toast('先写一句'); return; }
    if (!di.value){ toast('选一下哪天'); return; }
    const key = di.value.split('-').map(Number).join('.');
    if (!PAGES[key]) PAGES[key] = {plan:[], flow:[]};
    const e = {sym:'event', text:t, groups:[g], _id:++uid};
    PAGES[key].flow.push(e); commit(e);
    scheduleSave(); closeSheet();
    toast('记到' + (key === TODAY ? '今天' : ' ' + fmtKey(key)) + ' · ' + t.slice(0, 12));
    render();
  };
  S.classList.add('on'); $('#mask').classList.add('on');
}
function ledgerSheet(){
  const S = $('#gsheet');
  const ta = TODAY.split('.').map(Number);
  const customs = (SET.expCats || []).filter(x => !EXP_NM[x]);
  S.innerHTML = '<div class="gs-title">记一笔 · 并进那天的手帐</div>'
    + '<div style="display:flex;gap:8px">'
    + '<input class="vt-in" id="lgAmt" type="number" min="0" step="0.01" inputmode="decimal" placeholder="¥ 花了多少" style="flex:1.1;margin-top:0">'
    + '<input class="vt-in" id="lgDate" type="date" style="flex:1;margin-top:0"></div>'
    + '<div class="gs-chips" id="lgCats" style="margin-top:10px"></div>'
    + '<input class="vt-in" id="lgNote" placeholder="一句备注（如：打车去机场 · 不填就用类别名）">'
    + '<button class="rv-confirm" id="lgSave">记下这笔</button>'
    + '<div class="hw-tip" style="padding:6px 2px 0">哪天花的选哪天——这笔会以 💰 出现在那天的手帐里，随时可改可删</div>';
  $('#lgDate').value = ta[0] + '-' + String(ta[1]).padStart(2, '0') + '-' + String(ta[2]).padStart(2, '0');
  let sel = null;
  const box = $('#lgCats');
  EXP_ORDER.concat(customs).forEach(k => {
    const b = document.createElement('button'); b.className = 'gs-chip'; b.textContent = expLabel(k); b.dataset.lc = k;
    b.onclick = () => {
      const on = b.classList.contains('on');
      box.querySelectorAll('.gs-chip').forEach(x => x.classList.remove('on'));
      sel = on ? null : k; if (!on) b.classList.add('on');
    };
    box.appendChild(b);
  });
  $('#lgSave').onclick = () => {
    const v = +$('#lgAmt').value;
    if (!(v > 0)){ toast('先填花了多少'); return; }
    const dv = $('#lgDate').value;
    if (!dv){ toast('选一下哪天花的'); return; }
    const a2 = dv.split('-').map(Number);
    const key = a2[0] + '.' + a2[1] + '.' + a2[2];
    const note = $('#lgNote').value.trim();
    const e = {sym:'note', ledger:1, text:(note || (sel ? expLabel(sel) : '花销')) + ' ' + v + '元', _id:++uid};
    if (sel) e.exp = sel;
    if (!PAGES[key]) PAGES[key] = {plan:[], flow:[]};
    PAGES[key].flow.push(e);
    scheduleSave(); closeSheet();
    toast('已记到 ' + fmtKey(key) + ' · ' + e.text.slice(0, 12));
    render();
  };
  S.classList.add('on'); $('#mask').classList.add('on');
  setTimeout(() => { const i = $('#lgAmt'); if (i) i.focus(); }, 60);
}
function renderLedgerFlow(){
  const xf = cur.exFilter || null;
  const bar0 = document.createElement('div'); bar0.className = 'rp-tabs'; bar0.style.marginTop = '14px'; bar0.style.marginBottom = '0';
  const addC = document.createElement('button'); addC.className = 'chip on'; addC.textContent = '＋ 记一笔';
  addC.onclick = ledgerSheet;
  bar0.appendChild(addC);
  if (xf){
    const fc = document.createElement('button'); fc.className = 'chip';
    fc.textContent = '只看 · ' + expLabel(xf) + ' ✕';
    fc.onclick = () => { delete cur.exFilter; navFromBack = true; render(); };
    bar0.appendChild(fc);
  }
  view.appendChild(bar0);
  const rows = xf ? expRows().filter(r => r.k === xf) : expRows();
  const ta = TODAY.split('.').map(Number);
  const mon = expMonthOf(rows, ta[0], ta[1]);
  const pm = ta[1] === 1 ? [ta[0] - 1, 12] : [ta[0], ta[1] - 1];
  const pSum = expSum(expMonthOf(rows, pm[0], pm[1]));
  const mSum = expSum(mon);
  const diff = pSum ? (mSum <= pSum ? '比上月少 ¥' + (pSum - mSum) : '比上月多 ¥' + (mSum - pSum)) : '';
  const hero = document.createElement('div'); hero.className = 'tp-pan'; hero.style.textAlign = 'center';
  hero.innerHTML = '<div class="tt" style="display:flex;justify-content:center">' + (xf ? ta[1] + ' 月 · ' + vEsc(expLabel(xf)) : ta[1] + ' 月 支 出') + '</div>'
    + '<div style="font-size:33px;font-weight:800;letter-spacing:.5px;margin:2px 0">¥' + mSum.toLocaleString() + '</div>'
    + '<div class="vt-note" style="margin:0">' + mon.length + ' 笔 · 日均 ¥' + Math.round(mSum / Math.max(1, ta[2])) + (diff ? ' · ' + diff : '') + '</div>'
    + (xf ? '<div class="vt-note" style="margin:4px 0 0">正在只看「' + vEsc(expLabel(xf)) + '」· 点上面的 ✕ 回到全部</div>'
          : '<div class="vt-note" style="margin:4px 0 0">「工资到账」这类收入句不算 · 点 💰 小签可改类别或不计入 · 点类别只看那一类</div>');
  view.appendChild(hero);
  if (!xf){
    const byK = {};
    mon.forEach(r => byK[r.k] = (byK[r.k] || 0) + r.sum);
    const ks = Object.keys(byK).sort((a, b) => byK[b] - byK[a]);
    if (mSum > 0){
      const wrap = document.createElement('div');
      wrap.innerHTML = '<div class="exbar">' + ks.map(k =>
          '<i style="width:' + Math.max(2, byK[k] / mSum * 100) + '%;background:' + expColor(k) + '"></i>').join('') + '</div>'
        + '<div class="exlegend">' + ks.map(k =>
          '<span data-xk="' + escAttr(k) + '" style="cursor:pointer"><i style="background:' + expColor(k) + '"></i>' + vEsc(expLabel(k)) + ' <b>¥' + Math.round(byK[k]) + '</b></span>').join('') + '</div>';
      wrap.querySelectorAll('[data-xk]').forEach(el => el.onclick = () => { cur.exFilter = el.dataset.xk; navFromBack = true; render(); });
      view.appendChild(wrap);
    }
  }
  if (!cur.listN) cur.listN = 30;
  const shown = rows.slice(0, cur.listN);
  let lastD = null;
  shown.forEach(r => {
    if (r.d !== lastD){
      lastD = r.d;
      const daySum = Math.round(rows.filter(x => x.d === r.d).reduce((s2, x) => s2 + x.sum, 0));
      const h = document.createElement('div'); h.className = 'date-group'; h.dataset.day = r.d; h.style.display = 'flex';
      h.innerHTML = '<span>' + dayGroupTitle(r.d) + '</span><span style="margin-left:auto">¥' + daySum + '</span>';
      view.appendChild(h);
    }
    view.appendChild(jumpRow(r.d, r.e));   /* 行下自带 💰 小签（可点改类），不再重复画 */
  });
  if (!rows.length){
    const d = document.createElement('div'); d.className = 'empty-hint';
    d.textContent = xf ? '「' + expLabel(xf) + '」还没有记录' : '小铜板：还没记过账。试着发一句「打车 45元」或「咖啡 ¥18」。';
    view.appendChild(d);
  }
  if (rows.length > cur.listN){
    const more = document.createElement('div'); more.className = 'tapzone'; more.style.textAlign = 'center';
    more.textContent = '▾ 加载更早（还有 ' + (rows.length - cur.listN) + ' 笔）';
    more.onclick = () => { cur.listN += 50; render(); };
    view.appendChild(more);
  }
}
function renderLedgerPan(){
  if (!cur.exRng) cur.exRng = 'month';
  const rows = expRows();
  const ta = TODAY.split('.').map(Number);
  const pm = ta[1] === 1 ? [ta[0] - 1, 12] : [ta[0], ta[1] - 1];
  const inMon = r => { const a = r.d.split('.').map(Number); return a[0] === ta[0] && a[1] === ta[1]; };
  const inPrev = r => { const a = r.d.split('.').map(Number); return a[0] === pm[0] && a[1] === pm[1]; };
  const rr = rows.filter(cur.exRng === 'month' ? inMon : cur.exRng === 'lastmonth' ? inPrev : (r => +r.d.split('.')[0] === ta[0]));
  const XL = {month:'本月', lastmonth:'上月', year:'今年'};
  const XC = ['month', 'lastmonth', 'year'];
  const tabs = document.createElement('div'); tabs.className = 'rp-tabs'; tabs.style.marginTop = '14px';
  const rc = document.createElement('button'); rc.className = 'chip on'; rc.textContent = '盘点 · ' + XL[cur.exRng] + ' ▾';
  rc.onclick = () => { cur.exRng = XC[(XC.indexOf(cur.exRng) + 1) % XC.length]; render(); };
  tabs.appendChild(rc);
  const shc = document.createElement('button'); shc.className = 'chip'; shc.textContent = '▣ 分享';
  shc.onclick = () => openShare(statsPayload('记账', 'money', tplStats('money', rr), cur.exRng === 'year' ? 'year' : 'month'));
  tabs.appendChild(shc);
  const mgc = document.createElement('button'); mgc.className = 'chip'; mgc.textContent = '✎ 类别';
  mgc.onclick = expCatManage;
  tabs.appendChild(mgc);
  view.appendChild(tabs);
  const mSum = expSum(rows.filter(inMon)), pSum = expSum(rows.filter(inPrev));
  let mx = null;
  rr.forEach(r => { if (!mx || r.sum > mx.sum) mx = r; });
  const dNum = cur.exRng === 'month' ? ta[2]
    : cur.exRng === 'lastmonth' ? new Date(pm[0], pm[1], 0).getDate()
    : Math.max(1, Math.round((parseKey(TODAY) - new Date(ta[0], 0, 1)) / 86400000) + 1);
  const pan = document.createElement('div'); pan.className = 'tp-pan';
  pan.innerHTML = '<div class="tt">花 在 哪 了 · ' + XL[cur.exRng] + '</div>'
    + '<div class="tp-nums">'
    + [['¥' + mSum.toLocaleString(), '本月'], ['¥' + pSum.toLocaleString(), '上月'],
       ['¥' + (mx ? Math.round(mx.sum) : 0), '最大一笔'], ['¥' + Math.round(expSum(rr) / dNum), '日均']]
      .map(t => '<div class="n"><b>' + t[0] + '</b><span>' + t[1] + '</span></div>').join('') + '</div>';
  const byK = {}; rr.forEach(r => byK[r.k] = (byK[r.k] || 0) + r.sum);
  const ks = Object.keys(byK).sort((a, b) => byK[b] - byK[a]);
  const top = ks.length ? byK[ks[0]] : 0;
  pan.innerHTML += ks.map(k => '<div class="exrank" data-xk="' + escAttr(k) + '" style="cursor:pointer"><span class="nm">' + vEsc(expLabel(k)) + '</span>'
    + '<span class="bar"><i style="width:' + Math.max(4, byK[k] / (top || 1) * 100) + '%;background:' + expColor(k) + '"></i></span>'
    + '<span class="v">¥' + Math.round(byK[k]) + '</span><span style="color:var(--ink-faint);font-size:11px">›</span></div>').join('');
  view.appendChild(pan);
  pan.querySelectorAll('[data-xk]').forEach(el => el.onclick = () => {
    cur.tab = 'liu'; cur.exFilter = el.dataset.xk; navFromBack = true; render();
  });
  const notes = [];
  if (mx) notes.push('最大一笔：' + (mx.e.text || '').replace(/\s*[¥￥]?\d+(?:\.\d+)?[元块]?\s*$/, '').slice(0, 14) + '（¥' + Math.round(mx.sum) + ' · ' + fmtShort(mx.d) + '）');
  const wm = rr.filter(r => r.p.delivery);
  if (wm.length) notes.push('外卖 ' + wm.length + ' 次，共 ¥' + expSum(wm));
  const comp = {};
  rr.forEach(r => { if (r.k === 'eat') (r.p.withs || []).forEach(w => { if (w !== '独自') comp[w] = (comp[w] || 0) + r.sum; }); });
  const tc = Object.entries(comp).sort((a, b) => b[1] - a[1])[0];
  if (tc) notes.push('和 ' + tc[0] + ' 吃饭花了 ¥' + Math.round(tc[1]));
  if (notes.length){
    const nk = document.createElement('div'); nk.className = 'tp-pan';
    nk.innerHTML = '<div class="tt">值 得 一 提</div>'
      + notes.map(x => '<div class="exrank" style="font-size:12.5px">' + vEsc(x) + '</div>').join('');
    view.appendChild(nk);
  }
  if (!rr.length){
    const d = document.createElement('div'); d.className = 'empty-hint'; d.textContent = '这个范围还没有带金额的记录'; view.appendChild(d);
  }
}
/* ===== v2.13 熟人册 ===== */
SET.people = SET.people || [];
SET.pplNo = SET.pplNo || {};
SET.me = SET.me || {marks:[]};
const REL_PRESETS = ['亲情','友情','爱情','人脉','同事'];
let pendingPDel = null, personListN = 30;
function personAliases(p){ return [p.name].concat(p.nick || []).filter(n => n && n.length); }
function personById(id){ return (SET.people || []).find(p => p.id === id); }
function personByName(n){ return (SET.people || []).find(p => personAliases(p).includes(n)); }
function personHitE(p, e, xp){
  if(e.personLinks&&e.personLinks.length)return e.personLinks.includes(p.id);
  const als = personAliases(p);
  if (e.delegate && e.delegate.to && als.includes(e.delegate.to)) return true;
  const ws = (xp && xp.withs) || [];
  for (const a2 of als){
    if (ws.includes(a2)) return true;
    if (a2.length >= 2 && e.text && e.text.includes(a2)) return true;
  }
  return false;
}
function personScan(p){
  const rows = [];
  walk((d, e) => { if (!e.text) return; const xp = parseEntry(e); if (personHitE(p, e, xp)) rows.push({d, e, xp}); });
  rows.sort((a2, b2) => parseKey(b2.d) - parseKey(a2.d));
  return rows;
}
function personCycles(p){
  const als = personAliases(p);
  return (SET.cycles || []).filter(c => c.personId?c.personId===p.id:als.some(a2 => (c.name || '').includes(a2)));
}
function personOpenByName(n){
  const p = personByName(n);
  if (p){ cur = {name:'person', pid:p.id}; personListN = 30; render(); return; }
  if (n === '独自' || GENERIC_PPL.includes(n)) return;
  openPersonEdit(null, n);
}
SET.cycles = SET.cycles || [];
/* ===== 农历引擎（1900–2100 · 离线，几百字节查表） ===== */
const LUNAR_INFO = [
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x16a95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x05ac0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06aa0,0x1a6c4,0x0aae0,
0x092e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,
0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,
0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,
0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,
0x0d520];
function lLeapMonth(y){ return LUNAR_INFO[y - 1900] & 0xf; }
function lLeapDays(y){ return lLeapMonth(y) ? ((LUNAR_INFO[y - 1900] & 0x10000) ? 30 : 29) : 0; }
function lMonthDays(y, m){ return (LUNAR_INFO[y - 1900] & (0x10000 >> m)) ? 30 : 29; }
function lYearDays(y){
  let s2 = 348;
  for (let i = 0x8000; i > 0x8; i >>= 1) if (LUNAR_INFO[y - 1900] & i) s2++;
  return s2 + lLeapDays(y);
}
/* 农历某年某月某日 → 阳历 Date。闰月按正常月算；生在三十、当年只有廿九则取当月最后一天 */
function lunarToSolar(ly, lm, ld){
  if (ly < 1900 || ly > 2099 || lm < 1 || lm > 12 || ld < 1 || ld > 30) return null;
  let off = 0;
  for (let y = 1900; y < ly; y++) off += lYearDays(y);
  const leap = lLeapMonth(ly);
  for (let m = 1; m < lm; m++){ off += lMonthDays(ly, m); if (m === leap) off += lLeapDays(ly); }
  off += Math.min(ld, lMonthDays(ly, lm)) - 1;
  const t = new Date(1900, 0, 31); t.setDate(t.getDate() + off);
  return t;
}
/* 反向：阳历某天 → 农历 年/月/日（含是否闰月）。与 lunarToSolar 同一张表，v2.21 用 zhdate 全程比对过 */
function solarToLunar(d){
  const base = new Date(1900, 0, 31);
  let off = Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - base) / 86400000);
  if (off < 0) return null;
  let ly = 1900;
  for (; ly <= 2100; ly++){ const yd = lYearDays(ly); if (off < yd) break; off -= yd; }
  if (ly > 2100) return null;
  const leap = lLeapMonth(ly);
  let lm = 1, isLeap = false;
  for (;;){
    const dm = isLeap ? lLeapDays(ly) : lMonthDays(ly, lm);
    if (off < dm) break;
    off -= dm;
    if (!isLeap && lm === leap) isLeap = true;
    else { isLeap = false; if (++lm > 12) break; }
  }
  return {ly, lm, ld:off + 1, leap:isLeap};
}
const LM_NM = ['正','二','三','四','五','六','七','八','九','十','冬','腊'];
function lDayNm(d){
  if (d === 10) return '初十'; if (d === 20) return '二十'; if (d === 30) return '三十';
  const dig = '一二三四五六七八九'[(d % 10) - 1];
  return (d < 10 ? '初' : d < 20 ? '十' : '廿') + dig;
}
function lunarLabel(lm, ld){ return '农历' + LM_NM[lm - 1] + '月' + lDayNm(ld); }
function lunarNextK(lm, ld, fromK){
  const fy = +fromK.split('.')[0], from = parseKey(fromK);
  let best = null;
  for (let ly = fy - 1; ly <= fy + 1; ly++){
    const t = lunarToSolar(ly, lm, ld);
    if (t && t >= from && (!best || t < best)) best = t;
  }
  return best ? dkey(best) : null;
}
const CYC_ICON = {birthday:'🎂', anniv:'💍', period:'🩸', bill:'💳'};
function cycIcon(c){
  if (CYC_ICON[c.tag]) return CYC_ICON[c.tag];
  const nm = c.name || '';   /* v2.12 之前的老条目没有场景标签：按名字给个像样的图标 */
  if (/生日/.test(nm)) return '🎂';
  if (/纪念/.test(nm)) return '💍';
  if (/还款|信用卡|房贷|账单/.test(nm)) return '💳';
  return '🔁';
}
function fmtNextK(k){
  const y = +k.split('.')[0], ty = +TODAY.split('.')[0];
  if (y === ty) return fmtKey(k);
  if (y === ty + 1) return '明年 ' + fmtKey(k);
  return y + ' 年 ' + fmtKey(k);
}
/* 生日孪生：填了出生年，就能换算另一个历法的生日 */
function cycTwinInfo(c){
  const isBd = c.tag === 'birthday' || /生日/.test(c.name || '');
  if (!isBd || !c.y0) return null;
  let tw = null;
  if (c.kind === 'lunar' && c.lm && c.ld){
    const t = lunarToSolar(c.y0, c.lm, c.ld);
    if (!t) return null;
    tw = {kind:'year', m:t.getMonth() + 1, d:t.getDate(), y0:t.getFullYear(),
      label:'阳历生日是 ' + (t.getMonth() + 1) + ' 月 ' + t.getDate() + ' 日'};
    tw.nextK = cycNext({kind:'year', m:tw.m, d:tw.d}, TODAY);
  } else if (c.kind === 'year' && c.m && c.d){
    const L = solarToLunar(new Date(c.y0, c.m - 1, c.d));
    if (!L) return null;
    tw = {kind:'lunar', lm:L.lm, ld:L.ld, y0:L.ly,
      label:'农历生日是' + lunarLabel(L.lm, L.ld).slice(2) + (L.leap ? '（生在闰月 · 按平月过）' : '')};
    tw.nextK = lunarNextK(tw.lm, tw.ld, TODAY);
  } else return null;
  const pn = (c.name || '').toLowerCase().replace(/的?生日[（(]?.*$/, '');
  tw.dup = (SET.cycles || []).some(x => x !== c && x.kind === tw.kind
    && (tw.kind === 'lunar' ? (x.lm === tw.lm && x.ld === tw.ld) : (x.m === tw.m && x.d === tw.d))
    && (!pn || (x.name || '').toLowerCase().indexOf(pn) === 0));
  return tw;
}
function cycAgeStr(c, k){
  if (!c.y0) return '';
  const n2 = +k.split('.')[0] - c.y0;
  return n2 > 0 ? (n2 + (c.tag === 'anniv' ? ' 周年' : ' 岁')) : '';
}
let cycUiOpen = false, cycKind = 'month', pendingCDel = null, cycEdit = null, cycDraft = null, cycTag = 'birthday', cycCal = 'solar';
function cycDesc(c){
  if(c.kind==='once')return c.start+' · 仅一次';
  if(c.kind==='daily')return '每天';
  if(c.kind==='weekly')return '每周'+weekCN(towerKey(c.start)).replace('周','');
  if (c.kind === 'lunar') return '每年 ' + lunarLabel(c.lm, c.ld);
  if (c.kind === 'year') return '每年 ' + c.m + ' 月 ' + c.d + ' 日';
  if (c.kind === 'month') return '每月 ' + c.day + ' 号';
  return '每 ' + c.n + ' 天 · 上次 ' + fmtShort(c.anchor) + ' 日';
}
function cycHits(c, k){
  if(c.enabled===false)return false;
  const date=key2iso(k);
  if(c.kind==='once')return date===c.start;
  if(c.kind==='daily' || c.kind==='weekly')return date>=c.start && (c.kind==='daily' || healthDays(c.start,date)%7===0);
  const a = k.split('.').map(Number);
  if (c.kind === 'lunar'){
    for (let ly = a[0] - 1; ly <= a[0]; ly++){
      const t = lunarToSolar(ly, c.lm, c.ld);
      if (t && dkey(t) === k) return true;
    }
    return false;
  }
  if (c.kind === 'year') return a[1] === +c.m && a[2] === +c.d;
  if (c.kind === 'month'){
    const last = new Date(a[0], a[1], 0).getDate();
    return a[2] === Math.min(+c.day, last);
  }
  const diff = Math.round((parseKey(k) - parseKey(c.anchor)) / 86400000);
  return diff > 0 && diff % (+c.n) === 0;
}
function cycNext(c, fromK){
  const fixed=towerReminderNext(c,fromK);if(fixed!==undefined)return fixed;
  if (c.kind === 'lunar') return lunarNextK(c.lm, c.ld, fromK);
  const d = parseKey(fromK);
  for (let i = 0; i < 800; i++){
    const k = dkey(d);
    if (cycHits(c, k)) return k;
    d.setDate(d.getDate() + 1);
  }
  return null;
}
function cycOnDone(e){
  if (!e.cyc) return;
  const c = (SET.cycles || []).find(x => x.id === e.cyc);
  if (c && c.kind === 'ndays'){ c.anchor = TODAY; scheduleSave(); toast('🔁 周期已从今天重新起算'); }
}
function cycIcs(c){
  const ev=(k,i)=>towerCalendarEvent(c,k,i);
  let evs = '';
  if (c.kind === 'lunar'){
    /* RRULE 表达不了农历——直接把未来 5 年各自算好的日子逐条写入 */
    let k = cycNext(c, TODAY);
    for (let i = 0; i < 5 && k; i++){ evs += ev(k, i); k = cycNext(c, addDaysK(k, 1)); }
  } else {
    const nk = cycNext(c, TODAY);
    if (nk) evs = ev(nk, 0);
  }
  if (!evs){ toast('算不出下一次时间'); return; }
  const ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//dot//CN\r\n' + evs + 'END:VCALENDAR\r\n';
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], {type:'text/calendar'}));
  a.download = (c.name || '提醒').slice(0, 12) + '.ics'; a.click();
  toast(c.kind === 'lunar' ? '农历日子已按未来 5 年算好写进日历文件' : '已生成日历文件 · 打开即可加入系统日历（会真的响）');
}
/* ===== v2.14 重要时间点：三档模糊精度 ===== */
function markDateLabel(k){
  return k.d ? (k.y + '.' + k.m + '.' + k.d) : (k.m ? (k.y + '年' + k.m + '月') : (k.y + '年'));
}
function markElapsed(k){
  const ta = TODAY.split('.').map(Number);
  if (k.d){
    const days = Math.round((parseKey(TODAY) - parseKey(k.y + '.' + k.m + '.' + k.d)) / 86400000);
    if (days < 0) return '还有 ' + (-days) + ' 天';
    let yrs = ta[0] - k.y;
    if (ta[1] < k.m || (ta[1] === k.m && ta[2] < k.d)) yrs--;
    return '已 ' + days + ' 天 · 第 ' + (yrs + 1) + ' 年';
  }
  if (k.m){
    const months = (ta[0] - k.y) * 12 + (ta[1] - k.m);
    if (months < 0) return '';
    if (months < 1) return '就在这个月';
    const y2 = Math.floor(months / 12), m2 = months % 12;
    return '至今 ' + (y2 ? y2 + ' 年' : '') + (m2 ? (y2 ? ' ' : '') + m2 + ' 个月' : '');
  }
  const n2 = ta[0] - k.y + 1;
  return n2 > 1 ? '第 ' + n2 + ' 个年头' : (n2 === 1 ? '就是今年' : '');
}
function markNextRound(k){
  if (!k.d) return null;
  const base = parseKey(k.y + '.' + k.m + '.' + k.d);
  const days = Math.round((parseKey(TODAY) - base) / 86400000);
  if (days < 30) return null;
  const nxt = (Math.floor(days / 100) + 1) * 100;
  const d2 = parseKey(k.y + '.' + k.m + '.' + k.d); d2.setDate(d2.getDate() + nxt);
  return {n:nxt, left:nxt - days, k:dkey(d2)};
}
function marksPan(holder, isMe, pname){
  const pan = document.createElement('div'); pan.className = 'tp-pan';
  pan.innerHTML = '<div class="tt" style="display:flex;align-items:center">' + (isMe ? '人生时间点' : '重要时间点')
    + '<button class="gm-btn" id="mkAdd" style="margin-left:auto">＋ 添加</button></div>';
  const marks = (holder.marks || []).map(friendResolveMark).filter(Boolean);
  if (!marks.length){
    const d3 = document.createElement('div'); d3.className = 'vt-note';
    d3.textContent = isMe
      ? '记下人生的坐标：入职、搬家、第一次收到鲜花… 记不清就只填年份'
      : '记下你们的坐标：认识、第一次见面、在一起… 记不清就只填年份';
    pan.appendChild(d3);
  }
  marks.slice().sort((a2, b2) => (b2.y * 10000 + (b2.m || 0) * 100 + (b2.d || 0)) - (a2.y * 10000 + (a2.m || 0) * 100 + (a2.d || 0)))
  .forEach(k => {
    const row = document.createElement('div'); row.className = 'tp-rk mk';
    const el = markElapsed(k), nr = markNextRound(k);
    row.innerHTML = '<span class="no" style="color:var(--accent)">★</span>'
      + '<span class="nm">' + vEsc(k.label) + '<small>' + markDateLabel(k) + (el ? ' · ' + el : '')
      + (nr ? ' · 距 ' + nr.n + ' 天还有 ' + nr.left + ' 天（' + fmtShort(nr.k) + '）' : '') + '</small></span>'
      + (k.d ? '<span class="sc bao" data-a="cy" style="cursor:pointer">设提醒</span>' : '')
      + '<span class="sc" data-a="x" style="cursor:pointer;color:var(--ink-faint)">✕</span>';
    const cyB = row.querySelector('[data-a="cy"]');
    if (cyB) cyB.onclick = () => {
      cur = {name:'cycles',tab:'reminderForm',key:'preset'}; cycUiOpen = true; cycEdit = null; cycTag = 'anniv'; cycCal = 'solar';
      cycDraft = {kind:'year',tag:'anniv',name:(isMe ? '' : (pname + '·')) + k.label, m:k.m, d:k.d, y0:k.y};
      render(); window.scrollTo(0, 0);
    };
    row.querySelector('[data-a="x"]').onclick = () => {
      holder.marks = (holder.marks || []).filter(x => k.sourceId ? x.sourceId!==k.sourceId : x!==k); scheduleSave(); render();
    };
    const nm1 = row.querySelector('.nm'); nm1.style.cursor = 'pointer';
    nm1.onclick = () => k.sourceId?jumpToEntry(k.y+'.'+k.m+'.'+k.d,k.sourceId):openMarkAdd(holder, k);
    pan.appendChild(row);
  });
  pan.querySelector('#mkAdd').onclick = () => openMarkAdd(holder);
  return pan;
}
function openMarkAdd(holder, k0){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">' + (k0 ? '修改时间点' : '添加时间点') + '</div>'
    + '<input class="vt-in" id="mkLabel" placeholder="哪件事（如：认识 / 在一起 / 入职 / 第一次收到鲜花）" value="' + escAttr(k0 ? k0.label : '') + '">'
    + '<div style="display:flex;gap:8px">'
    + '<input class="vt-in" id="mkY" type="number" min="1900" max="2100" placeholder="哪年" style="flex:1.2">'
    + '<input class="vt-in" id="mkM" type="number" min="1" max="12" placeholder="几月（可不填）" style="flex:1">'
    + '<input class="vt-in" id="mkD" type="number" min="1" max="31" placeholder="几日（可不填）" style="flex:1"></div>'
    + '<div class="hw-tip" style="padding:6px 2px 0">记不清就只填年份或年月——有多精确记多精确；写了整日才会帮你数天数</div>'
    + '<button class="rv-confirm" id="mkSave">' + (k0 ? '保存修改' : '记下来') + '</button>';
  if (k0){ $('#mkY').value = k0.y; if (k0.m) $('#mkM').value = k0.m; if (k0.d) $('#mkD').value = k0.d; }
  $('#mkSave').onclick = () => {
    const label = $('#mkLabel').value.trim();
    if (!label){ toast('先写是哪件事'); return; }
    const y = +$('#mkY').value, m = +$('#mkM').value || 0, d = +$('#mkD').value || 0;
    if (!(y >= 1900 && y <= 2100)){ toast('年份没填对'); return; }
    if (m && !(m >= 1 && m <= 12)){ toast('月份没填对'); return; }
    if (d && !m){ toast('填了几日就要填几月'); return; }
    if (d && !(d >= 1 && d <= 31)){ toast('日子没填对'); return; }
    if (k0){
      k0.label = label; k0.y = y;
      if (m) k0.m = m; else delete k0.m;
      if (d) k0.d = d; else delete k0.d;
      scheduleSave(); closeSheet(); render(); toast('已保存修改');
      return;
    }
    const k = {label, y};
    if (m) k.m = m;
    if (d) k.d = d;
    holder.marks = holder.marks || [];
    holder.marks.push(k);
    scheduleSave(); closeSheet(); render(); toast('已记下 · ' + markDateLabel(k));
  };
  S.classList.add('on'); $('#mask').classList.add('on');
}
/* ===== v2.17 笔记本：长文主题页，用足迹缝进日常 ===== */
let pendingNDel = null;
function noteById(id){ return (NOTES || []).find(n => n.id === id); }
function noteMeta(n){
  const nd = Object.keys(n.days || {}).length;
  return '始于 ' + fmtShort(n.created) + ' · 写过 ' + nd + ' 天'
    + (n.updated ? ' · 最近 ' + (n.updated === TODAY ? '今天' : fmtShort(n.updated)) : '');
}
function ensureNoteBorn(n){
  if (n.born || !(n.title || '').trim()) return;
  n.born = 1;
  const k = PAGES[n.created] ? n.created : TODAY;
  PAGES[k].flow.push({sym:'event', text:'开了新本子《' + n.title.trim() + '》', nbId:n.id, _id:++uid});
  scheduleSave();
}
function noteCreate(){
  const n = {id:++uid, title:'', body:'', created:TODAY, updated:TODAY, days:{}};
  n.days[TODAY] = 1;   /* 开本当天由「开了新本子」代言，不另记足迹 */
  NOTES.push(n); scheduleSave();
  cur = {name:'note', id:n.id}; render();
  setTimeout(() => { const t = $('#nbTitle'); if (t) t.focus(); }, 80);
}
function renderNotes(){
  if (!modOn('notes')){
    const d0 = document.createElement('div'); d0.className = 'empty-hint'; d0.textContent = '笔记（记事小亭）关着 · 到 设置 → 岛上的房子 打开';
    view.appendChild(d0); return;
  }
  NOTES = NOTES.filter(n => (n.title || '').trim() || (n.body || '').trim() || n.born);   /* 空壳自清 */
  NOTES.forEach(ensureNoteBorn);
  if (thShelf()) return;   /* v3.2 顶上：房子 + 「随想 / 本子」页签；在「随想」页签就画随想架 */
  const bar = document.createElement('div'); bar.className = 'rp-tabs'; bar.style.marginTop = '4px';
  const addB = document.createElement('button'); addB.className = 'chip on'; addB.textContent = '＋ 新建本子';
  addB.onclick = noteCreate;
  bar.appendChild(addB); view.appendChild(bar);
  if (!NOTES.length){
    const d2 = document.createElement('div'); d2.className = 'empty-hint'; d2.style.textAlign = 'center'; d2.style.padding = '24px 2px 8px';
    d2.innerHTML = jjImg('check', 76) + '<div style="margin-top:8px">开第一个本子，写点长的：装修计划、读书摘抄、写到一半的小说…<br>开本和每天动笔，都会在当天流水里留下足迹</div>';
    view.appendChild(d2);
  }
  NOTES.slice().sort((a2, b2) => parseKey(b2.updated || b2.created) - parseKey(a2.updated || a2.created)).forEach(n => {
    const card = document.createElement('div'); card.className = 'vt-card';
    card.style.cursor = 'pointer';
    card.innerHTML = '<div class="vt-site">📓 ' + vEsc(n.title || '未命名')
      + '<button class="gm-btn danger" data-a="del" style="margin-left:auto">' + (pendingNDel === n.id ? '确认删除' : '删') + '</button></div>'
      + '<div class="vt-note">' + vEsc(((n.body || '').split('\n')[0] || '').slice(0, 42) || '还空着 · 点开写点什么') + '</div>'
      + '<div class="vt-note" style="color:var(--ink-faint)">' + noteMeta(n) + '</div>';
    card.onclick = () => { cur = {name:'note', id:n.id}; render(); };
    card.querySelector('[data-a="del"]').onclick = ev => {
      ev.stopPropagation();
      if (pendingNDel !== n.id){ pendingNDel = n.id; toast('再点一次确认删除（流水里的足迹会保留）'); render(); return; }
      NOTES = NOTES.filter(x => x.id !== n.id); pendingNDel = null; scheduleSave(); render(); toast('本子已删 · 足迹保留');
    };
    view.appendChild(card);
  });
  const tip = document.createElement('div'); tip.className = 'vt-tip';
  tip.textContent = '本子是主题页，日常是流水：开本、每天第一次动笔，当天流水都会自动留一笔（点「📓 翻开」直达）。本子里以「- 」或「□ 」开头的行，会自动变成今天的任务。本子长文不进识别和报告。';
  view.appendChild(tip);
}
function renderNote(n){
  const head = document.createElement('div'); head.className = 'tp-more'; head.style.padding = '12px 2px 0';
  head.textContent = noteMeta(n) + ' ›';
  head.onclick = () => {
    const ds = Object.keys(n.days || {}).sort((a2, b2) => parseKey(b2) - parseKey(a2));
    openTileSheet('《' + (n.title || '未命名') + '》的足迹', ds.map(d => ({nm:fmtKey(d) + ' · ' + weekCN(d), sub:'', sc:'', d, id:null})));
  };
  view.appendChild(head);
  const ti = document.createElement('input'); ti.className = 'nb-title'; ti.id = 'nbTitle';
  ti.placeholder = '给本子起个名'; ti.value = n.title || '';
  view.appendChild(ti);
  const ta = document.createElement('textarea'); ta.className = 'nb-body'; ta.id = 'nbBody';
  ta.placeholder = '想写多长写多长 · 啾啾边写边存';
  ta.value = n.body || '';
  view.appendChild(ta);
  const cnt = document.createElement('div'); cnt.className = 'vt-tip'; cnt.id = 'nbCnt';
  cnt.textContent = (n.body || '').length + ' 字 · 自动保存';
  view.appendChild(cnt);
  const touch = () => {
    n.updated = TODAY; n.days = n.days || {};
    if (!n.days[TODAY]){
      n.days[TODAY] = 1;
      P().flow.push({sym:'note', text:'写了《' + ((n.title || '').trim() || '未命名') + '》', nbId:n.id, _id:++uid});
    }
  };
  const syncLines = () => {   /* 当天足迹跟着标题走 */
    const t2 = (n.title || '').trim() || '未命名';
    (P().flow || []).forEach(x => {
      if (x.nbId !== n.id || !x.text) return;
      if (x.text.startsWith('写了《')) x.text = '写了《' + t2 + '》';
      if (x.text.startsWith('开了新本子《')) x.text = '开了新本子《' + t2 + '》';
    });
  };
  const growNB = () => {   /* 只长不缩：不做「归零再量」那一下，页面不抖 */
    if (ta.scrollHeight > ta.clientHeight){
      const sy = window.scrollY;
      ta.style.height = ta.scrollHeight + 'px';
      window.scrollTo(0, sy);
    }
  };
  const taskScan = fin => {   /* 「- 」「□ 」开头的行 → 今天的任务（生成后各走各的） */
    const lines = ta.value.split('\n');
    const upto = fin ? lines.length : lines.length - 1;
    n.taskKeys = n.taskKeys || {};
    for (let i2 = 0; i2 < upto; i2++){
      const m2 = lines[i2].match(/^\s*[-－□]\s*(.+)$/);
      if (!m2) continue;
      const txt = m2[1].trim();
      if (!txt || txt.length < 2 || n.taskKeys[txt]) continue;
      n.taskKeys[txt] = 1;
      P().plan.push({sym:'task', state:'open', text:txt, nbId:n.id, src:'《' + ((n.title || '').trim() || '未命名') + '》', _id:++uid});
      toast('已加进今天的任务 · ' + txt.slice(0, 12));
    }
  };
  ti.oninput = () => { n.title = ti.value; topTitle.textContent = n.title || '未命名'; touch(); syncLines(); scheduleSave(); };
  ti.onblur = () => { ensureNoteBorn(n); syncLines(); scheduleSave(); };
  ta.oninput = () => { n.body = ta.value; touch(); taskScan(false); scheduleSave(); growNB(); cnt.textContent = n.body.length + ' 字 · 自动保存'; };
  ta.onblur = () => { taskScan(true); const sy = window.scrollY; growTA(ta); window.scrollTo(0, sy); scheduleSave(); };
  setTimeout(() => growTA(ta), 30);
}
function mealComposeText(slot, o){
  /* v2.22：餐次不再写进正文（由 e.meal 小签承担），金额拼在句尾走既有价格识别 */
  if (o.form === '没吃') return '没吃';
  let t2 = '';
  if (o.form === '外卖') t2 += '点了外卖';
  if (o.store) t2 += (o.form === '外卖' ? '' : '在') + '「' + o.store + '」';
  if (o.form === '自己做的') t2 += (t2 ? ' ' : '') + '自己做的';
  if (o.withs && o.withs.length) t2 += (t2 ? ' ' : '') + '和' + o.withs.join('、');
  t2 += o.what ? ((o.withs && o.withs.length) ? ('吃了' + o.what) : ((t2 ? ' ' : '') + '吃了' + o.what))
    : ((o.withs && o.withs.length) || o.store ? '吃的' : '');
  if (o.amt) t2 += ' ' + o.amt + '元';
  return t2;
}
function mealComposerHTML(){
  return '<input class="vt-in" id="mcWhat" placeholder="吃了什么（如：麻辣烤鱼 / 公司食堂）" style="margin-top:0">'
    + '<div class="gs-chips" style="margin-top:8px">'
    + '<button class="gs-chip" data-mc="外卖">外卖</button>'
    + '<button class="gs-chip" data-mc="自己做的">自己做</button>'
    + '<button class="gs-chip" data-mc="没吃">这顿没吃</button></div>'
    + '<div style="display:flex;gap:8px">'
    + '<input class="vt-in" id="mcStore" placeholder="店名（可不填）" style="flex:1.1">'
    + '<input class="vt-in" id="mcWith" placeholder="和谁（可不填）" style="flex:1">'
    + '<input class="vt-in" id="mcAmt" type="number" min="0" step="0.01" inputmode="decimal" placeholder="¥ 花销（选填）" style="flex:.9"></div>'
    + '<button class="rv-confirm" id="mcSave">记下这顿</button>';
}
function bindMealComposer(root, key, slot, done){
  let form = null;
  root.querySelectorAll('[data-mc]').forEach(b => b.onclick = () => {
    const on = b.classList.contains('on');
    root.querySelectorAll('[data-mc]').forEach(x => x.classList.remove('on'));
    if (!on){ b.classList.add('on'); form = b.dataset.mc; }
    else form = null;
  });
  root.querySelector('#mcSave').onclick = () => {
    const what = root.querySelector('#mcWhat').value.trim();
    const store = root.querySelector('#mcStore').value.trim();
    const withs = root.querySelector('#mcWith').value.trim().split(/[、，,\s和]+/).map(x => x.trim()).filter(Boolean);
    const amtV = root.querySelector('#mcAmt').value.trim();
    const amt = (form !== '没吃' && amtV && +amtV > 0) ? +amtV : null;
    if (form !== '没吃' && !what && !store){ toast('写点什么，或选「这顿没吃」'); return; }
    const e = {sym:'note', state:'open', meal:slot, text:mealComposeText(slot, {form, what, store, withs, amt}), _id:++uid};
    if (!PAGES[key]) PAGES[key] = {plan:[], flow:[]};
    PAGES[key].flow.push(e);
    try{ mealAutoTagAll(); }catch(_){}   /* 立刻挂签，墙上颜色即时正确 */
    scheduleSave(); toast('已记下 · ' + MEAL_WORD[slot] + ' ' + e.text.slice(0, 12));
    if (done) done();
  };
}
function mealQuickSheet(key, slot){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">' + fmtKey(key) + ' · ' + MEAL_WORD[slot] + '</div>' + mealComposerHTML();
  bindMealComposer(S, key, slot, () => { closeSheet(); render(); });
  S.classList.add('on'); $('#mask').classList.add('on');
  setTimeout(() => { const w = $('#mcWhat'); if (w) w.focus(); }, 60);
}
function renderMeals(){
  if (!modOn('meals')){
    const d0 = document.createElement('div'); d0.className = 'empty-hint'; d0.textContent = '三餐打卡关着 · 到 设置 → 岛上的房子 打开';
    view.appendChild(d0); return;
  }
  const rowsAll = [];
  walk((d, e) => { const k2 = mealSlotOf(e); if (k2) rowsAll.push({d, k:k2, e}); });
  const ta = TODAY.split('.').map(Number);
  const mon = rowsAll.filter(r => { const a2 = r.d.split('.').map(Number); return a2[0] === ta[0] && a2[1] === ta[1]; });
  let wm = 0, spend = 0; const comp = {};
  mon.forEach(r => { const p = parseEntry(r.e);
    if (p.delivery) wm++;
    (p.prices || []).forEach(v2 => spend += v2);
    (p.withs || []).forEach(w2 => { if (w2 !== '独自') comp[w2] = (comp[w2] || 0) + 1; });
  });
  const topC = Object.entries(comp).sort((a2, b2) => b2[1] - a2[1])[0];
  const byDay = {}, byDayE = {};
  rowsAll.forEach(r => { (byDay[r.d] = byDay[r.d] || new Set()).add(r.k);
    byDayE[r.d] = byDayE[r.d] || {};
    if (!byDayE[r.d][r.k]) byDayE[r.d][r.k] = r; });
  /* v2.28 连击退役（一断就泄气）→ 本月吃到新店：只增不减 */
  const firstSeen = {};
  walk((d5, e5) => { const st5 = parseEntry(e5).store;
    if (st5){ const t5 = parseKey(d5); if (!firstSeen[st5] || t5 < firstSeen[st5]) firstSeen[st5] = t5; } });
  const newStores = Object.values(firstSeen).filter(t5 => t5.getFullYear() === ta[0] && t5.getMonth() + 1 === ta[1]).length;
  const pan = document.createElement('div'); pan.className = 'tp-pan'; pan.style.marginTop = '16px';
  const tiles = [[newStores, '家', '本月吃到新店'], [mon.length, '顿', '本月记了'], [wm, '次', '本月外卖'], ['¥' + Math.round(spend), '', '本月吃饭花销']];
  pan.innerHTML = '<div class="tt">吃饭这件小事 · ' + ta[1] + '月</div><div class="tp-nums">'
    + tiles.map(t => '<div class="n"><b>' + t[0] + (t[1] ? '<i>' + t[1] + '</i>' : '') + '</b><span>' + t[2] + '</span></div>').join('') + '</div>'
    + (topC ? '<div class="vt-note" style="margin-top:8px">这个月最常一起吃饭：' + vEsc(topC[0]) + ' × ' + topC[1] + ' 次</div>' : '');
  view.appendChild(pan);
  const grid = document.createElement('div'); grid.className = 'tp-pan';
  let gh = '<div class="tt">最近两周 · 早 / 午 / 晚</div>'
    + '<div class="vt-note" style="margin:0 0 6px">小点＝没记，想补再点 · ✕＝这顿没吃 · 灰点＝日常吃 · 彩点＝进了美食集子 · 点日期看那天</div>';
  const d4 = parseKey(TODAY);
  for (let i = 0; i < 14; i++){
    const k4 = dkey(d4); const sE = byDayE[k4] || {};
    const c4 = k5 => {
      const r = sE[k5];
      const skip = r && /没吃|没有吃/.test(r.e.text || '');
      const cls = !r ? 'ml-off' : skip ? 'ml-skip' : (((r.e.groups || []).some(g => tplOf(g) === 'food')) ? 'ml-on' : 'ml-onn');
      return '<i class="ml-cell ' + cls + '" data-k5="' + k5 + '" data-d="' + k4 + '">' + (skip ? '✕' : '') + '</i>';
    };
    const s4 = byDay[k4] || new Set();
    const extra = (s4.has('tea') ? ' 茶' : '') + (s4.has('sup') ? ' 宵' : '') + (s4.has('unk') ? ' ?' : '');
    gh += '<div class="ml-row"><span class="c ml-day" data-d="' + k4 + '">' + fmtShort(k4) + (k4 === TODAY ? ' 今天' : '') + '</span>'
      + c4('bre') + c4('lun') + c4('din') + '<span class="v">' + extra + '</span></div>';
    d4.setDate(d4.getDate() - 1);
  }
  grid.innerHTML = gh;
  grid.querySelectorAll('.ml-day').forEach(el => { el.onclick = () => gotoDay(el.dataset.d); });
  grid.querySelectorAll('.ml-cell').forEach(el => {
    el.onclick = () => {
      const k4 = el.dataset.d, k5 = el.dataset.k5;
      const r = (byDayE[k4] || {})[k5];
      if (r) jumpToEntry(r.d, r.e._id || (r.e._id = ++uid));
      else mealQuickSheet(k4, k5);
    };
  });
  view.appendChild(grid);
  const tip = document.createElement('div'); tip.className = 'vt-tip';
  tip.textContent = '平时写「早饭/午饭/晚饭 + 吃了什么」自动归格；没记的就空着，不用补；想补哪顿点墙上的小点——吃了什么、店名、和谁、花了多少，一张小表填完。带「店名」或外卖的会同时收进美食集子（彩点）。';
  view.appendChild(tip);
}
function relChipHtml(sel){
  return REL_PRESETS.map(r => '<button class="gs-chip' + (sel === r ? ' on' : '') + '" data-r="' + r + '">' + r + '</button>').join('');
}
function openPersonEdit(p, prefillName){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">' + (p ? '编辑资料' : '收进亲友') + '</div>'
    + '<input class="vt-in" id="peName" placeholder="本名 / 常用称呼" value="' + escAttr(p ? p.name : (prefillName || '')) + '">'
    + '<input class="vt-in" id="peNick" placeholder="昵称 / 小名（多个用、隔开，写哪个都认）" value="' + escAttr(p && p.nick ? p.nick.join('、') : '') + '">'
    + '<div class="gs-chips" style="margin-top:10px" id="peRels">' + relChipHtml(p ? p.rel : '') + '</div>'
    + '<input class="vt-in" id="peRel" placeholder="关系（点上面选，或自己写：发小 / 合伙人…）" value="' + escAttr(p ? (p.rel || '') : '') + '">'
    + '<textarea class="vt-in" id="peNote" rows="2" placeholder="备注：怎么认识的、想记住的话（可不填）">' + vEsc(p && p.note ? p.note : '') + '</textarea>'
    + '<button class="rv-confirm" id="peSave">' + (p ? '保存' : '收录') + '</button>';
  friendEditExtras(S,p);
  S.querySelectorAll('#peRels [data-r]').forEach(b => b.onclick = () => {
    $('#peRel').value = b.dataset.r;
    S.querySelectorAll('#peRels .gs-chip').forEach(x => x.classList.toggle('on', x === b));
  });
  $('#peSave').onclick = () => {
    const name = $('#peName').value.trim();
    if (!name){ toast('先写名字'); return; }
    const nick = $('#peNick').value.split(/[、，,\s/]+/).map(x => x.trim()).filter(x => x && x !== name);
    const dup = (SET.people || []).find(x => x !== p && personAliases(x).includes(name));
    if (dup && (!p||p.name!==name)){ toast('册子里已经有 ' + dup.name + ' 了'); return; }
    const more=friendRead(S);if(!more)return;
    if (p){
      p.name = name; p.nick = nick; p.rel = $('#peRel').value.trim(); p.note = $('#peNote').value.trim();
    } else {
      p = {id:++uid, name, nick, rel:$('#peRel').value.trim(), note:$('#peNote').value.trim(), moments:[], pins:[], added:TODAY};
      SET.people.push(p);
    }
    Object.assign(p,more);friendSyncBirthday(p);
    delete SET.pplNo[name];
    scheduleSave(); closeSheet(); toast(p.name + ' 已在册子里');
    cur = {name:'person', pid:p.id}; personListN = 30; render();
  };
  S.classList.add('on'); $('#mask').classList.add('on');
}
function renderPeople(){
  const bar = document.createElement('div'); bar.className = 'rp-tabs'; bar.style.marginTop = '16px';
  const addB = document.createElement('button'); addB.className = 'chip on'; addB.textContent = '＋ 手动添加';
  addB.onclick = () => openPersonEdit(null, '');
  bar.appendChild(addB); view.appendChild(bar);
  const meRow = document.createElement('div'); meRow.className = 'set-row';
  meRow.innerHTML = '<span>🌟 我 · 人生时间点</span><span class="sub" style="margin-left:auto">'
    + (((SET.me || {}).marks || []).length ? ((SET.me.marks.length) + ' 条 ') : '') + '›</span>';
  meRow.onclick = () => { cur = {name:'me'}; render(); };
  view.appendChild(meRow);
  const book = SET.people || [];
  const cnt = new Map(), last = new Map(), cand = new Map();
  const inBook = new Set(); book.forEach(p => personAliases(p).forEach(n => inBook.add(n)));
  walk((d, e) => {
    if (!e.text) return;
    const xp = parseEntry(e);
    book.forEach(p => { if (personHitE(p, e, xp)){
      cnt.set(p.id, (cnt.get(p.id) || 0) + 1);
      if (!last.has(p.id) || parseKey(d) > parseKey(last.get(p.id))) last.set(p.id, d);
    } });
    const names = new Set((xp.withs || []).filter(w => w !== '独自'));
    if (e.delegate && e.delegate.to) names.add(e.delegate.to);
    names.forEach(n => {
      if (n.length < 2 || n.length > 6) return;
      if (inBook.has(n) || SET.pplNo[n] || GENERIC_PPL.includes(n) || n === '同事' || n === '同学' || n === '同行') return;
      cand.set(n, (cand.get(n) || 0) + 1);
    });
  });
  if (book.length){
    view.appendChild(sectionLabel('已收录 · 点开看你们的记录'));
    book.slice().sort((a2, b2) => ((b2.star ? 1 : 0) - (a2.star ? 1 : 0)) || (cnt.get(b2.id) || 0) - (cnt.get(a2.id) || 0)).forEach(p => {
      const it = document.createElement('div'); it.className = 'set-row';
      it.innerHTML = '<span>' + (p.star ? '⭐ ' : '👤 ') + vEsc(p.name) + (p.rel ? '<i class="pp-rel">' + vEsc(p.rel) + '</i>' : '') + '</span>'
        + '<span class="sub" style="margin-left:auto">' + (cnt.get(p.id) || 0) + ' 条' + (last.has(p.id) ? ' · ' + fmtShort(last.get(p.id)) : '') + ' ›</span>';
      it.onclick = () => { cur = {name:'person', pid:p.id}; personListN = 30; render(); };
      view.appendChild(it);
    });
  } else {
    const d2 = document.createElement('div'); d2.className = 'empty-hint'; d2.style.textAlign = 'center'; d2.style.padding = '22px 2px 6px';
    d2.innerHTML = jjImg('nap', 72) + '<div style="margin-top:8px">团团：还没收录过人。记录里认出的人会列在下面，点「收录」就能一起翻。</div>';
    view.appendChild(d2);
  }
  const cands = [...cand.entries()].sort((a2, b2) => b2[1] - a2[1]).slice(0, 20);
  if (cands.length){
    view.appendChild(sectionLabel('啾啾还认出这些人 · 收录后才进册子'));
    cands.forEach(([n, c2]) => {
      const it = document.createElement('div'); it.className = 'set-row';
      it.innerHTML = '<span>' + vEsc(n) + '</span><span class="sub" style="margin-left:auto">' + c2 + ' 次</span>'
        + '<button class="gm-btn" data-a="in">收录</button><button class="gm-btn" data-a="no">忽略</button>';
      it.querySelector('[data-a="in"]').onclick = ev => { ev.stopPropagation(); openPersonEdit(null, n); };
      it.querySelector('[data-a="no"]').onclick = ev => { ev.stopPropagation(); SET.pplNo[n] = 1; scheduleSave(); render(); };
      view.appendChild(it);
    });
  }
  const tip = document.createElement('div'); tip.className = 'vt-tip';
  tip.textContent = '写「和赵赵看电影」「转交给小李」啾啾就能认人；收录时填上昵称，以后写昵称也归到同一个人，旧记录一并追认。';
  view.appendChild(tip);
}
function renderPerson(p){
  const rows = personScan(p);
  const head = document.createElement('div'); head.className = 'vt-card';
  head.innerHTML = '<div class="vt-site">' + (p.star ? '⭐ ' : '👤 ') + vEsc(p.name)
    + (p.rel ? '<i class="pp-rel">' + vEsc(p.rel) + '</i>' : '')
    + '<button class="gm-btn" data-a="star" style="margin-left:auto">' + (p.star ? '⭐ 已星标' : '☆ 星标') + '</button>'
    + '<button class="gm-btn" data-a="edit" style="margin-left:0">编辑</button>'
    + '<button class="gm-btn danger" data-a="out" style="margin-left:0">' + (pendingPDel === p.id ? '确认移出' : '移出') + '</button></div>'
    + ((p.nick && p.nick.length) ? '<div class="vt-note">也叫：' + vEsc(p.nick.join('、')) + '</div>' : '')
    + (p.note ? '<div class="vt-note">' + vEsc(p.note) + '</div>' : '');
  head.querySelector('[data-a="star"]').onclick = () => {
    p.star = !p.star; scheduleSave(); render();
    toast(p.star ? '已星标' : '已取消星标');
  };
  head.querySelector('[data-a="edit"]').onclick = () => openPersonEdit(p);
  head.querySelector('[data-a="out"]').onclick = () => {
    if (pendingPDel !== p.id){ pendingPDel = p.id; toast('再点一次确认移出（记录不会删，只是出册）'); render(); return; }
    SET.people = SET.people.filter(x => x.id !== p.id); pendingPDel = null; scheduleSave();
    cur = {name:'people'}; render();
  };
  view.appendChild(head);
  friendDetail(p,head);
  const pcs = personCycles(p);
  if (pcs.length){
    const bc = document.createElement('div'); bc.className = 'vt-card';
    bc.innerHTML = pcs.map(c => { const nk = cycNext(c, TODAY);
      return '<div class="vt-note">' + cycIcon(c) + ' ' + vEsc(c.name) + ' · ' + cycDesc(c)
        + (nk ? '<br>下次：' + fmtNextK(nk) + '（' + weekCN(nk) + '）' + (cycAgeStr(c, nk) ? ' · ' + cycAgeStr(c, nk) : '') : '') + '</div>'; }).join('');
    view.appendChild(bc);
  } else {
    const bb = document.createElement('div'); bb.className = 'rp-tabs';
    const btn = document.createElement('button'); btn.className = 'chip'; btn.textContent = '🎂 ＋TA的生日提醒';
    btn.onclick = () => friendBirthdayStart(p);
    bb.appendChild(btn); view.appendChild(bb);
  }
  view.appendChild(marksPan(p, false, p.name));
  const mv = rows.filter(r => r.xp.title && (r.e.groups || []).some(g => tplOf(g) === 'movie'));
  const fd = rows.filter(r => (r.e.groups || []).some(g => tplOf(g) === 'food'));
  const pan = document.createElement('div'); pan.className = 'tp-pan';
  const tiles = [
    [mv.length, '部', '一起看过', mv],
    [fd.length, '顿', '一起吃过', fd],
    [rows.length, '条', '共同出现', null],
    [rows.length ? fmtShort(rows[0].d) : '—', '', '最近一次', null]
  ];
  pan.innerHTML = '<div class="tt">我们的盘点</div><div class="tp-nums">' + tiles.map((t, i) =>
    '<div class="n" data-pi="' + i + '"' + (t[3] && t[3].length ? ' style="cursor:pointer"' : '') + '><b>' + t[0] + (t[1] ? '<i>' + t[1] + '</i>' : '') + '</b><span>' + t[2] + (t[3] && t[3].length ? ' ›' : '') + '</span></div>').join('') + '</div>';
  pan.querySelectorAll('.n[data-pi]').forEach(el => {
    el.onclick = () => { const t = tiles[+el.dataset.pi];
      if (t[3] && t[3].length) openTileSheet(t[2] + ' · ' + p.name, t[3].map(r =>
        ({nm:(r.xp.title ? '《' + r.xp.title + '》' : vEsc((r.e.text || '').slice(0, 18))), sub:fmtShort(r.d), sc:(r.xp.score != null ? r.xp.score + '分' : ''), d:r.d, id:r.e._id}))); };
  });
  view.appendChild(pan);
  /* 我们的时刻 */
  const mts = (p.moments || []).map(m => ({d:m.d, t:m.t, kind:'m', ref:m}));
  (p.pins || []).forEach(id => { const r = rows.find(x => x.e._id === id);
    if (r) mts.push({d:r.d, t:(r.e.text || '').slice(0, 40), kind:'p', id}); });
  mts.sort((a2, b2) => parseKey(b2.d) - parseKey(a2.d));
  const mp = document.createElement('div'); mp.className = 'tp-pan';
  mp.innerHTML = '<div class="tt" style="display:flex;align-items:center">我们的时刻'
    + '<button class="gm-btn" id="mtAdd" style="margin-left:auto">＋ 添加</button></div>';
  if (!mts.length){
    const d3 = document.createElement('div'); d3.className = 'vt-note';
    d3.textContent = '还空着 · 点「＋添加」写一件值得记住的事，或在下面的记录里点 📌 收进来';
    mp.appendChild(d3);
  }
  mts.forEach(m => {
    const row = document.createElement('div'); row.className = 'tp-rk';
    row.innerHTML = '<span class="no">' + (m.kind === 'p' ? '📌' : '·') + '</span>'
      + '<span class="nm">' + vEsc(m.t) + '<small>' + ((+String(m.d).split('.')[0] !== +TODAY.split('.')[0]) ? String(m.d).split('.')[0] + '年 · ' : '') + fmtShort(m.d) + '</small></span>'
      + '<span class="sc" data-a="x" style="cursor:pointer;color:var(--ink-faint)">✕</span>';
    const nm0 = row.querySelector('.nm'); nm0.style.cursor = 'pointer';
    if (m.kind === 'p') nm0.onclick = () => jumpToEntry(m.d, m.id);
    else nm0.onclick = () => openMomentAdd(p, m.ref);
    row.querySelector('[data-a="x"]').onclick = () => {
      if (m.kind === 'p') p.pins = (p.pins || []).filter(x => x !== m.id);
      else p.moments = (p.moments || []).filter(x => x !== m.ref);
      scheduleSave(); render();
    };
    mp.appendChild(row);
  });
  view.appendChild(mp);
  mp.querySelector('#mtAdd').onclick = () => openMomentAdd(p);
  if (rows.length){
    view.appendChild(sectionLabel('相关记录 · 点字直接改 · 点日子去那天'));
    let lastDate = null;
    rows.slice(0, personListN).forEach(r => {
      if (r.d !== lastDate){ lastDate = r.d;
        const g2 = document.createElement('div'); g2.className = 'date-group'; g2.dataset.day = r.d;
        g2.textContent = dayGroupTitle(r.d); view.appendChild(g2); }
      const w = jumpRow(r.d, r.e);
      const body = w.querySelector('.entry-body');
      if (body){
        const pt = document.createElement('div'); pt.className = 'ptags';
        const pinned = (p.pins || []).includes(r.e._id);
        const sp = document.createElement('span'); sp.className = 'ptg ' + (pinned ? 'sc' : 'ask');
        sp.textContent = pinned ? '📌 已在时刻' : '📌 收进时刻';
        sp.onclick = ev => { ev.stopPropagation();
          if (!r.e._id) r.e._id = ++uid;
          if (pinned) p.pins = p.pins.filter(x => x !== r.e._id);
          else { p.pins = p.pins || []; p.pins.push(r.e._id); }
          scheduleSave(); render(); };
        pt.appendChild(sp);pt.appendChild(friendMarkButton(p,r.e,r.d)); body.appendChild(pt);
      }
      view.appendChild(w);
    });
    if (rows.length > personListN){
      const more = document.createElement('div'); more.className = 'tapzone'; more.style.textAlign = 'center';
      more.textContent = '▾ 加载更早（还有 ' + (rows.length - personListN) + ' 条）';
      more.onclick = () => { personListN += 50; render(); };
      view.appendChild(more);
    }
  } else {
    const d4 = document.createElement('div'); d4.className = 'empty-hint';
    d4.textContent = '还没有和 ' + p.name + ' 相关的记录 · 写「和' + p.name + '吃饭」这类句子就会自动归进来';
    view.appendChild(d4);
  }
}
function openMomentAdd(p, m0){
  const S = $('#gsheet');
  const a2 = TODAY.split('.').map(Number);
  const dv0 = m0 ? String(m0.d).split('.').map(Number) : a2;
  S.innerHTML = '<div class="gs-title">我们的时刻 · ' + vEsc(p.name) + '</div>'
    + '<input class="vt-in" id="mtDate" type="date" value="' + dv0[0] + '-' + String(dv0[1]).padStart(2, '0') + '-' + String(dv0[2]).padStart(2, '0') + '">'
    + '<textarea class="vt-in" id="mtText" rows="2" placeholder="值得记住的事（如：2018 第一次一起旅行）">' + (m0 ? vEsc(m0.t) : '') + '</textarea>'
    + '<button class="rv-confirm" id="mtSave">' + (m0 ? '保存修改' : '记下来') + '</button>';
  $('#mtSave').onclick = () => {
    const t = $('#mtText').value.trim();
    if (!t){ toast('写点什么吧'); return; }
    const dv = $('#mtDate').value.split('-').map(Number);
    if (m0){ m0.t = t; m0.d = dv[0] + '.' + dv[1] + '.' + dv[2]; }
    else { p.moments = p.moments || []; p.moments.push({d:dv[0] + '.' + dv[1] + '.' + dv[2], t}); }
    scheduleSave(); closeSheet(); render(); toast(m0 ? '已保存修改' : '已记进「我们的时刻」');
  };
  S.classList.add('on'); $('#mask').classList.add('on');
}
function renderCycles(){
  if (!SET.cycles.length){
    const d = document.createElement('div'); d.className = 'empty-hint'; d.style.textAlign = 'center'; d.style.padding = '26px 2px 8px';
    d.innerHTML = jjImg('nap', 72) + '<div style="margin-top:8px">还没有提醒 · 生日（阴历也认）、纪念日、生理期、还款日都交给我记</div>';
    view.appendChild(d);
  }
  SET.cycles.forEach(c => {
    const card = document.createElement('div'); card.className = 'vt-card';
    const nk = cycNext(c, TODAY);
    const tw = cycTwinInfo(c);
    card.innerHTML = '<div class="vt-site">' + cycIcon(c) + ' ' + vEsc(c.name)
      + '<button class="gm-btn" data-a="edit" style="margin-left:auto">改</button>'
      + '<button class="gm-btn danger" data-a="del" style="margin-left:0">' + (pendingCDel === c.id ? '确认删除' : '删') + '</button></div>'
      + '<div class="vt-note">' + vEsc(cycDesc(c)) + (c.ahead ? ' · 提前 ' + c.ahead + ' 天提示' : '')
      + (nk ? '<br>下次：' + fmtNextK(nk) + '（' + weekCN(nk) + '）' + (cycAgeStr(c, nk) ? ' · ' + cycAgeStr(c, nk) : '') : '')
      + (tw ? '<br>换算：TA的' + tw.label + (tw.nextK ? ' · 下次落 ' + fmtNextK(tw.nextK) : '') : '') + '</div>'
      + '<div class="rp-tabs" style="margin-top:10px">'
      + '<button class="chip" data-a="ics">📅 入系统日历</button>'
      + (tw && !tw.dup ? '<button class="chip" data-a="twin">' + (tw.kind === 'lunar' ? '🌗 农历生日也提醒' : '🌞 阳历生日也提醒') + '</button>' : '')
      + (c.kind === 'ndays' ? '<button class="chip" data-a="reset">今天来了 · 重新起算</button>' : '')
      + '</div>';
    const enabled=c.enabled!==false;
    const toggle=journalButton(enabled?'提醒已开启':'提醒已暂停','chip tw-switch',()=>{
      c.enabled=!enabled;towerRefreshReminder(c);scheduleSave();render();
    });
    toggle.setAttribute('role','switch');toggle.setAttribute('aria-checked',String(enabled));
    card.querySelector('.rp-tabs').prepend(toggle);
    card.querySelector('[data-a="ics"]').disabled=!enabled;
    if(c.time)card.querySelector('.vt-note').prepend(document.createTextNode(c.time+' · '));
    card.querySelector('[data-a="del"]').onclick = () => {
      if (pendingCDel !== c.id){ pendingCDel = c.id; toast('再点一次确认删除'); render(); return; }
      c.enabled=false;towerRefreshReminder(c);SET.cycles = SET.cycles.filter(x => x.id !== c.id); pendingCDel = null; scheduleSave(); render();
    };
    card.querySelector('[data-a="edit"]').onclick = () => {
      towerGo('reminderForm',c.id);
    };
    card.querySelector('[data-a="ics"]').onclick = () => cycIcs(c);
    const twB = card.querySelector('[data-a="twin"]');
    if (twB) twB.onclick = () => {
      const t2 = cycTwinInfo(c); if (!t2 || t2.dup){ render(); return; }
      const nc = {id:++uid, name:c.name + (t2.kind === 'lunar' ? '（农历）' : '（阳历）'), tag:'birthday', ahead:(c.ahead != null ? c.ahead : 3)};
      if (t2.kind === 'lunar'){ nc.kind = 'lunar'; nc.lm = t2.lm; nc.ld = t2.ld; }
      else { nc.kind = 'year'; nc.m = t2.m; nc.d = t2.d; }
      nc.y0 = t2.y0;
      SET.cycles.push(nc); scheduleSave();
      toast('已添加 · ' + (t2.kind === 'lunar' ? '农历' : '阳历') + '那天也会提醒'); render();
    };
    const rs = card.querySelector('[data-a="reset"]');
    if (rs) rs.onclick = () => { c.anchor = TODAY; scheduleSave(); toast('已从今天重新起算'); render(); };
    view.appendChild(card);
  });
  const tip = document.createElement('div'); tip.className = 'vt-tip';
  tip.textContent = '到那天打开 App，提醒会出现在「待办」；网页版没有系统推送，想让手机真的响就点「入系统日历」。';
  view.appendChild(tip);
}

/* ============ v2.5 账号小本（主口令加密，云端只存密文） ============ */
let vaultKey = null, vaultItems = null, vtReveal = new Set(), pendingVDel = null, vtEdit = null;
function vB64(buf){ let s2 = ''; const u = new Uint8Array(buf); for (let i = 0; i < u.length; i++) s2 += String.fromCharCode(u[i]); return btoa(s2); }
function vBuf(b64){ const s2 = atob(b64); const u = new Uint8Array(s2.length); for (let i = 0; i < s2.length; i++) u[i] = s2.charCodeAt(i); return u.buffer; }
async function vDerive(pass, saltB64){
  const km = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2', salt:vBuf(saltB64), iterations:120000, hash:'SHA-256'},
    km, {name:'AES-GCM', length:256}, false, ['encrypt', 'decrypt']);
}
async function vEnc(key, str){
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({name:'AES-GCM', iv}, key, new TextEncoder().encode(str));
  const out = new Uint8Array(12 + ct.byteLength); out.set(iv); out.set(new Uint8Array(ct), 12);
  return vB64(out.buffer);
}
async function vDec(key, b64){
  const u = new Uint8Array(vBuf(b64));
  const pt = await crypto.subtle.decrypt({name:'AES-GCM', iv:u.slice(0, 12)}, key, u.slice(12));
  return new TextDecoder().decode(pt);
}
async function vaultCreate(pass){
  const salt = vB64(crypto.getRandomValues(new Uint8Array(16)).buffer);
  const key = await vDerive(pass, salt);
  SET.vault = {salt, check:await vEnc(key, 'dot-vault-ok'), data:await vEnc(key, '[]')};
  vaultKey = key; vaultItems = []; scheduleSave();
}
async function vaultUnlock(pass){
  const v = SET.vault; if (!v) return false;
  try{
    const key = await vDerive(pass, v.salt);
    if ((await vDec(key, v.check)) !== 'dot-vault-ok') return false;
    vaultItems = JSON.parse(await vDec(key, v.data));
    vaultItems.forEach(it => { if (it._id && it._id > uid) uid = it._id; });   /* 小本 id 也计入水位 */
    vaultKey = key; return true;
  }catch(_){ return false; }
}
async function vaultPersist(){
  if (!vaultKey || !SET.vault) return;
  SET.vault.data = await vEnc(vaultKey, JSON.stringify(vaultItems));
  scheduleSave();
}
function vaultLock(){ vaultKey = null; vaultItems = null; vtReveal = new Set(); }
function vCopy(txt, msg){
  const done = () => toast(msg || '已复制');
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt).then(done).catch(() => done());
  } else done();
}
function vEsc(x){ return String(x || '').replace(/[<>&"]/g, c => ({'<':'&lt;', '>':'&gt;', '&':'&amp;', '"':'&quot;'}[c])); }
function renderVault(){
  const wrap = document.createElement('div');
  if (!(window.crypto && crypto.subtle)){
    wrap.innerHTML = '<div class="vt-tip" style="margin-top:26px">这台设备的浏览器环境不支持加密接口，树洞（密码）用不了。</div>';
    view.appendChild(wrap); return;
  }
  if (!SET.vault){
    wrap.innerHTML = '<div class="vt-card">'
      + '<div style="text-align:center;padding:6px 0 2px">' + jjImg('lock', 96) + '</div>'
      + '<div style="font-size:15px;font-weight:700;margin-top:8px">给树洞设一个主口令</div>'
      + '<div class="vt-tip" style="margin-top:6px">所有内容用它加密后才保存，本机和云备份里都只有密文。'
      + '<b style="color:var(--red)">主口令忘了没有任何找回办法</b>，请记牢。<br>'
      + '适合存 wifi 密码、会员号、水电户号这类；银行级密码建议放系统钥匙串，原生版会配 FaceID。</div>'
      + '<input type="password" class="vt-in" id="vtP1" placeholder="主口令（至少 4 位）">'
      + '<input type="password" class="vt-in" id="vtP2" placeholder="再输一遍">'
      + '<button class="rv-confirm" id="vtNew">建好树洞</button></div>';
    view.appendChild(wrap);
    $('#vtNew').onclick = async () => {
      const a = $('#vtP1').value, b2 = $('#vtP2').value;
      if (a.length < 4){ toast('口令至少 4 位'); return; }
      if (a !== b2){ toast('两次输入不一致'); return; }
      await vaultCreate(a); toast('树洞建好了 · 记牢主口令'); render();
    };
    return;
  }
  if (!vaultKey){
    wrap.innerHTML = '<div class="vt-card">'
      + '<div style="text-align:center;padding:6px 0 2px">' + jjImg('lock', 96) + '</div>'
      + '<div style="font-size:15px;font-weight:700;margin-top:8px;text-align:center">树洞已上锁</div>'
      + '<input type="password" class="vt-in" id="vtP" placeholder="输入主口令解锁">'
      + '<button class="rv-confirm" id="vtGo">解锁</button></div>';
    view.appendChild(wrap);
    const go = async () => {
      const ok = await vaultUnlock($('#vtP').value);
      if (ok){ toast('已解锁'); render(); } else toast('口令不对（或数据损坏）');
    };
    $('#vtGo').onclick = go;
    $('#vtP').addEventListener('keydown', ev => { if (ev.key === 'Enter') go(); });
    setTimeout(() => $('#vtP') && $('#vtP').focus(), 60);
    return;
  }
  /* 已解锁 */
  const bar = document.createElement('div'); bar.className = 'rp-tabs'; bar.style.marginTop = '16px';
  const addC = document.createElement('button'); addC.className = 'chip on'; addC.textContent = '＋ 添加';
  const lockC = document.createElement('button'); lockC.className = 'chip'; lockC.textContent = '锁定';
  bar.appendChild(addC); bar.appendChild(lockC); view.appendChild(bar);
  lockC.onclick = () => { vaultLock(); toast('已锁定'); render(); };
  const form = document.createElement('div'); form.className = 'vt-card'; form.style.display = 'none';
  form.innerHTML = '<input class="vt-in" id="vtSite" placeholder="哪里的账号（如：小区wifi / 京东）" style="margin-top:0">'
    + '<input class="vt-in" id="vtUser" placeholder="账号（可不填）">'
    + '<input class="vt-in" id="vtPwd" placeholder="密码">'
    + '<input class="vt-in" id="vtNote" placeholder="备注（可不填）">'
    + '<button class="rv-confirm" id="vtSave">保存</button>';
  const vtFill = it => { $('#vtSite').value = it ? (it.site || '') : ''; $('#vtUser').value = it ? (it.user || '') : '';
    $('#vtPwd').value = it ? (it.pwd || '') : ''; $('#vtNote').value = it ? (it.note || '') : '';
    $('#vtSave').textContent = it ? '保存修改' : '保存'; };
  view.appendChild(form);
  addC.onclick = () => { vtEdit = null;
    const showing = form.style.display === 'block';
    form.style.display = showing ? 'none' : 'block';
    if (!showing){ vtFill(null); $('#vtSite').focus(); } };
  $('#vtSave').onclick = async () => {
    const site = $('#vtSite').value.trim();
    if (!site){ toast('先写这是哪里的账号'); return; }
    const rec = {site, user:$('#vtUser').value.trim(), pwd:$('#vtPwd').value, note:$('#vtNote').value.trim()};
    if (vtEdit){
      const it = vaultItems.find(x => x._id === vtEdit);
      if (it) Object.assign(it, rec);
      vtEdit = null;
      await vaultPersist(); toast('已保存修改'); render();
    } else {
      vaultItems.unshift(Object.assign(rec, {_id:++uid}));
      await vaultPersist(); toast('已加密保存'); render();
    }
  };
  if (!vaultItems.length){
    const d = document.createElement('div'); d.className = 'empty-hint'; d.style.textAlign = 'center'; d.style.padding = '26px 2px 8px';
    d.innerHTML = jjImg('nap', 72) + '<div style="margin-top:8px">松松：树洞还空着，点「＋ 添加」存第一条。</div>';
    view.appendChild(d);
  }
  vaultItems.forEach(it => {
    const c = document.createElement('div'); c.className = 'vt-card vt-item';
    const rev = vtReveal.has(it._id);
    c.innerHTML = '<div class="vt-site">' + vEsc(it.site)
      + '<button class="gm-btn" data-a="ed" style="margin-left:auto">改</button>'
      + '<button class="gm-btn danger" data-a="del" style="margin-left:0">' + (pendingVDel === it._id ? '确认删除' : '删') + '</button></div>'
      + (it.user ? '<div class="vt-line"><span class="lab">账号</span><span class="val">' + vEsc(it.user) + '</span><button class="gm-btn" data-a="cu">复制</button></div>' : '')
      + '<div class="vt-line"><span class="lab">密码</span><span class="val' + (rev ? '' : ' masked') + '" data-a="rv" style="cursor:pointer">'
      + (rev ? vEsc(it.pwd) : '••••••••') + '</span><button class="gm-btn" data-a="cp">复制</button></div>'
      + (it.note ? '<div class="vt-note">' + vEsc(it.note) + '</div>' : '');
    c.querySelector('[data-a="del"]').onclick = async () => {
      if (pendingVDel !== it._id){ pendingVDel = it._id; toast('再点一次确认删除'); render(); return; }
      vaultItems = vaultItems.filter(x => x._id !== it._id); pendingVDel = null;
      await vaultPersist(); toast('已删除'); render();
    };
    c.querySelector('[data-a="ed"]').onclick = () => {
      vtEdit = it._id; form.style.display = 'block'; vtFill(it);
      try{ form.scrollIntoView({block:'center'}); }catch(_){}
    };
    const cu = c.querySelector('[data-a="cu"]'); if (cu) cu.onclick = () => vCopy(it.user, '账号已复制');
    c.querySelector('[data-a="cp"]').onclick = () => vCopy(it.pwd, '密码已复制');
    c.querySelector('[data-a="rv"]').onclick = () => { if (vtReveal.has(it._id)) vtReveal.delete(it._id); else vtReveal.add(it._id); render(); };
    view.appendChild(c);
  });
  const tip = document.createElement('div'); tip.className = 'vt-tip';
  tip.textContent = '本机与云备份里只有密文 · 内容不进搜索、报告和分享 · 离开或点「锁定」后需重新输入主口令';
  view.appendChild(tip);
}

/* ============ 晨间开页 ============ */
function ensureToday(){
  if (!PAGES[TODAY]) PAGES[TODAY] = {plan:[], flow:[]};
  walk((k, e) => {
    if (e.badge === '☾ someday') e.badge = '☾ 想做';   /* v2.28 Someday 改名 */
    if (e.due){ const pp = String(e.due).split('.').map(Number);
      if (!(pp.length === 3 && pp[1] >= 1 && pp[1] <= 12 && pp[2] >= 1 && pp[2] <= 31)) delete e.due; }
    if (e.badge && e.badge.includes('已完成0%')) e.badge = e.badge.replace(/ · 已完成0%/g, '').replace(/已完成0% · ?/g, '').trim();
    if (e.children && e.children.length)
      e.children = e.children.filter(ch => (ch.text && ch.text.trim()) || (ch.images && ch.images.length) || (ch.children && ch.children.length));
  });
  Object.keys(PAGES).forEach(k => {
    if (k === TODAY) return;
    const pg2 = PAGES[k];
    if (!pg2.plan.length && !pg2.flow.length && !pg2.summary) delete PAGES[k];
  });
  walk((k, e) => { if (e._id && e._id > uid) uid = e._id; });
  (SET.people || []).forEach(p => { if (p.id && p.id > uid) uid = p.id; });
  (SET.cycles || []).forEach(c => { if (c.id && c.id > uid) uid = c.id; });
  (typeof NOTES !== 'undefined' ? NOTES : []).forEach(nn => { if (nn.id && nn.id > uid) uid = nn.id; });
  /* 修复历史撞号：同一板块内重复 id 的，后来者换新号（引用按“先到先得”解析，未来不再可能撞） */
  const fixDup = arr => {
    const seen2 = new Set();
    (arr || []).forEach(o => {
      if (o.id && seen2.has(o.id)) o.id = ++uid;
      if (o.id) seen2.add(o.id);
    });
  };
  fixDup(SET.people); fixDup(SET.cycles); fixDup(typeof NOTES !== 'undefined' ? NOTES : []);
  /* v2.28 到期接上；错过日期不再丢——两天内补到今天，更久的：随缘收进储备 / 对账回到待表态 */
  const tk0 = parseKey(TODAY), lateOf = k2 => Math.round((tk0 - parseKey(k2)) / 86400000);
  const arrBadge = (e, from) => {
    const bits = [];
    if (SET.duty) bits.push('>×' + e.mig);
    if (from) bits.push('原定 ' + fmtShort(from));
    if (e.progress) bits.push('已完成' + e.progress + '%');
    return bits.length ? bits.join(' · ') : undefined;
  };
  let pooledN = 0;
  walkWithParent((k, e, parent) => {
    if (k === TODAY) return;
    if (e.sym === 'task' && e.due && !e.arrived && (e.state === 'open' || e.state === 'migrated')){
      const late = lateOf(e.due);
      if (late >= 0 && (late <= 2||e.schedule)){
        const from = late ? e.due : null;
        e.arrived = true;
        e.mig = (e.mig || 0) + 1;
        if (e.state === 'open') e.state = 'migrated';
        P().plan.push({sym:'task', state:'open', text:e.text, time:e.time || undefined, pick:e.pick || undefined, nbId:e.nbId || undefined,
          schedule:e.schedule?{...e.schedule}:undefined,noDue:e.schedule?1:undefined,
          groups:e.groups ? [...e.groups] : undefined, progress:e.progress, mig:e.mig,
          src:e.src || (parent && parent.text) || undefined,
          srcDay:k, srcId:e._id || (e._id = ++uid), lateFrom:from || undefined,
          badge:arrBadge(e, from), _id:++uid});
      } else if (late > 2){
        const was = e.due; delete e.due;
        if (SET.duty) e.state = 'open';
        else { e.state = 'someday'; e.badge = '☾ 想做 · 原定 ' + fmtShort(was); e.pooled = TODAY; pooledN++; }
      }
    }
    if (e.state === 'delegated' && e.delegate && e.delegate.follow && !e.followArrived){
      const late2 = lateOf(e.delegate.follow);
      if (late2 >= 0 && late2 <= 2){
        e.followArrived = true;
        P().plan.push({sym:'task', state:'open',
          text:'问问 ' + e.delegate.to + '：' + (e.text || '').slice(0, 16),
          src:e.text, srcDay:k, srcId:e._id || (e._id = ++uid), lateFrom:late2 ? e.delegate.follow : undefined, _id:++uid});
      } else if (late2 > 2) e.followArrived = true;
    }
  });
  /* v2.28 随缘：没日子的事当天没做完 → 第二天自动收进「储备」；过了日子的提醒悄悄翻篇 */
  if (!SET.duty){
    walk((k, e) => {
      if (k === TODAY || parseKey(k) > tk0) return;
      if (e.sym !== 'task' || e.state !== 'open' || e.due) return;
      if (e.cyc){ e.state = 'migrated'; e.lapsed = 1; return; }
      if (!(e.text || '').trim()) return;
      e.state = 'someday'; e.badge = '☾ 想做'; e.pooled = TODAY; pooledN++;
    });
  }
  if (pooledN) P().pooled = (P().pooled || 0) + pooledN;
}
function cycMaterialize(){
  let ins = false;
  (SET.cycles || []).forEach(c => {
    if(c.enabled===false)return;
    if (c.lastIns !== TODAY && cycHits(c, TODAY)){
      c.lastIns = TODAY;
      const ag = cycAgeStr(c, TODAY);
      P().plan.push({sym:'task', state:'open',
        text:cycIcon(c) + ' ' + c.name + (ag ? '（' + ag + '）' : '')
          + (c.kind === 'lunar' ? '（' + lunarLabel(c.lm, c.ld) + '）' : '')
          + (c.kind === 'ndays' ? '（按周期预计是今天）' : ''), time:c.time||undefined, cyc:c.id, _id:++uid}); ins = true;
    }
    if (c.ahead > 0 && c.lastPre !== TODAY){
      const nk = addDaysK(TODAY, +c.ahead);
      if (cycHits(c, nk)){
        const diff = Math.round((parseKey(nk) - parseKey(TODAY)) / 86400000);
        if (diff === +c.ahead){
          c.lastPre = TODAY;
          const ag2 = cycAgeStr(c, nk);
          P().plan.push({sym:'note', text:cycIcon(c) + ' ' + diff + ' 天后 · ' + c.name + (ag2 ? ' ' + ag2 : '')
            + '（' + (c.kind === 'lunar' ? lunarLabel(c.lm, c.ld) + ' · ' : '') + fmtShort(nk) + ' 日）', cyc:c.id, _id:++uid}); ins = true;
        }
      }
    }
  });
  if (ins) scheduleSave();
}
function morningCheck(){
  const page = P(); if (page.morningAsked) return;
  const left = [];
  walkWithParent((k, e, parent) => {
    if (k !== TODAY && parseKey(k) < parseKey(TODAY) && e.sym === 'task' && e.state === 'open' && !e.due) left.push({e, parent, k});
  });
  page.morningAsked = true;
  if (!left.length){ scheduleSave(); return; }
  const S = $('#gsheet');
  const esc = x => String(x || '').replace(/[<>&]/g, c => ({'<':'&lt;', '>':'&gt;', '&':'&amp;'}[c]));
  S.innerHTML = '<div class="gs-title" style="display:flex;align-items:center;gap:8px">有 ' + left.length + ' 件事还等着你表态'
    + '<button class="gm-btn" id="mSel" style="margin-left:auto">全选</button></div>'
    + '<div id="mgList" style="max-height:44vh;overflow-y:auto;margin:0 0 4px">'
    + left.map((x, i) => '<div class="mg-item" data-i="' + i + '"><span class="mg-ck">○</span>'
      + '<span class="mg-tx">' + esc(x.e.text)
      + ((x.e.mig || 0) >= 2 ? ' <i style="font-style:normal;font-size:11px;color:var(--accent)">已跟 ' + x.e.mig + ' 天</i>' : '') + '</span>'
      + '<span class="mg-d">' + fmtShort(x.k) + '</span></div>').join('')
    + '</div>'
    + '<button class="gs-done" id="mAll">带来选中的</button>'
    + '<div style="display:flex;gap:8px;margin-top:10px">'
    + '<button class="gm-btn" id="mSd" style="flex:1;padding:10px">☾ 没勾的收进储备</button>'
    + '<button class="gm-btn" id="mSkip" style="flex:1;padding:10px">都不带 · 任务里有底</button></div>';
  const sel = new Set();
  const refresh = () => {
    S.querySelectorAll('.mg-item').forEach(el => {
      const on = sel.has(+el.dataset.i);
      el.classList.toggle('on', on);
      el.querySelector('.mg-ck').textContent = on ? '●' : '○';
    });
    $('#mAll').textContent = sel.size ? ('带来选中的（' + sel.size + '）') : '带来选中的';
    $('#mSel').textContent = (sel.size === left.length) ? '全不选' : '全选';
  };
  S.querySelectorAll('.mg-item').forEach(el => {
    el.onclick = () => { const i = +el.dataset.i; if (sel.has(i)) sel.delete(i); else sel.add(i); refresh(); };
  });
  $('#mSel').onclick = () => { if (sel.size === left.length) sel.clear(); else left.forEach((_, i) => sel.add(i)); refresh(); };
  $('#mAll').onclick = () => {
    if (!sel.size){ toast('先勾选要带的 · 不带就点下面'); return; }
    [...sel].map(i => left[i]).forEach(x => {
      const e = x.e;
      e.state = 'migrated'; e.mig = (e.mig || 0) + 1;
      e.badge = '→' + fmtShort(TODAY) + (e.progress ? ' · 已完成' + e.progress + '%' : '');
      P().plan.push({sym:'task', state:'open', text:e.text, time:e.time || undefined, pick:e.pick || undefined, nbId:e.nbId || undefined,
        groups:e.groups ? [...e.groups] : undefined, progress:e.progress, mig:e.mig,
        src:e.src || (x.parent && x.parent.text) || undefined,
        srcDay:x.k || undefined, srcId:e._id || (e._id = ++uid),
        badge:'>×' + e.mig + (e.progress ? ' · 已完成' + e.progress + '%' : ''), _id:++uid});
    });
    toast('已带来 ' + sel.size + ' 件 · 其余在任务汇总里'); closeSheet(); scheduleSave();
  };
  $('#mSd').onclick = () => {
    const rest = left.filter((_, i) => !sel.has(i));
    if (!rest.length){ toast('都勾上了，没有要放的'); return; }
    rest.forEach(x => { x.e.state = 'someday'; delete x.e.due; x.e.badge = '☾ 想做'; });
    if (sel.size){
      [...sel].map(i => left[i]).forEach(x => {
        const e = x.e;
        e.state = 'migrated'; e.mig = (e.mig || 0) + 1;
        e.badge = '→' + fmtShort(TODAY);
        P().plan.push({sym:'task', state:'open', text:e.text, time:e.time || undefined, pick:e.pick || undefined, nbId:e.nbId || undefined,
          groups:e.groups ? [...e.groups] : undefined, mig:e.mig,
          src:e.src || (x.parent && x.parent.text) || undefined,
          srcDay:x.k || undefined, srcId:e._id || (e._id = ++uid),
          badge:'>×' + e.mig, _id:++uid});
      });
    }
    toast('☾ ' + rest.length + ' 件收进储备' + (sel.size ? ' · 带来 ' + sel.size + ' 件' : '') + ' · 想做时去侧栏捞');
    closeSheet(); scheduleSave(); render();
  };
  $('#mSkip').onclick = () => { toast('都留在原页 · 任务汇总随时能翻'); closeSheet(); };
  refresh();
  S.classList.add('on'); $('#mask').classList.add('on');
}
function showOnboard(){ if (SEEN.onboard) return; obOpen(false); }   /* v3.3 新岛民：上岛引导五屏 */

/* ============ v2.28 早安卡 · 日子 / 天气 / 今天的事 / 翻到一页 / 一句话 ============ */
const JQ_NM = ['小寒','大寒','立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑','大暑','立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至'];
const JQ_Y0 = 2024, JQ_TAB = '062004190520041905200521062207220722082307220621052003180520042005210521072207230723082307220721052004180520052005210521072307230723082307220722052004190621052006210621072308230823082307220722062004190520041905200521062207220722082307220621052003180520042005210521072207230723082307220721052004180520052005210521072307230723082307220722052004190621052006210621072308230823082307220722062004190520041905200521062207220722082307220621052003180520042005210521072207230723082307220721052004180520052005210521072307230723082307220722052004190621052005210621072307230823082307220722062004190520041905200521062207220722082307220621052003180520042005210521072207230722082307220721052004180520052005210521072307230723082307220722052004190621052005210621072307230823082307220722062004190520041905200521062207220722072307220621052003180520042005200521072207230722082307220721052004180520042005210521072207230723082307220722052004190621052005210621072307230823082307220722062004190520041905200521062207220722072307220621052003180520041905200521072207230722082307220721';   /* 2024–2045 北京时间节气日（天文算法逐个算出，已与历书核对） */
function jieqiOf(k){
  const a = k.split('.').map(Number), yi = a[0] - JQ_Y0;
  if (yi < 0 || (yi + 1) * 48 > JQ_TAB.length) return null;
  for (const j of [(a[1] - 1) * 2, (a[1] - 1) * 2 + 1]){
    if (+JQ_TAB.substr(yi * 48 + j * 2, 2) === a[2]) return JQ_NM[j];
  }
  return null;
}
const FEST_S = {'1.1':'元旦','2.14':'情人节','3.8':'妇女节','4.1':'愚人节','5.1':'劳动节','5.4':'青年节','6.1':'儿童节','9.10':'教师节','10.1':'国庆节','11.11':'双十一','12.24':'平安夜','12.25':'圣诞节'};
const FEST_L = {'1.1':'春节','1.15':'元宵节','2.2':'龙抬头','5.5':'端午节','7.7':'七夕','8.15':'中秋节','9.9':'重阳节','12.8':'腊八','12.23':'小年'};
function festOf(k){
  const a = k.split('.').map(Number), d = parseKey(k);
  const L = solarToLunar(d);
  if (L && !L.leap && FEST_L[L.lm + '.' + L.ld]) return FEST_L[L.lm + '.' + L.ld];
  const nx = solarToLunar(parseKey(addDaysK(k, 1)));
  if (nx && !nx.leap && nx.lm === 1 && nx.ld === 1) return '除夕';
  if (FEST_S[a[1] + '.' + a[2]]) return FEST_S[a[1] + '.' + a[2]];
  if (a[1] === 5 && d.getDay() === 0 && a[2] > 7 && a[2] <= 14) return '母亲节';
  if (a[1] === 6 && d.getDay() === 0 && a[2] > 14 && a[2] <= 21) return '父亲节';
  return null;
}
function nextHoliday(){
  const ty = +TODAY.split('.')[0], tk = parseKey(TODAY), cands = [];
  [ty, ty + 1].forEach(y => {
    cands.push(['元旦', new Date(y, 0, 1)], ['劳动节', new Date(y, 4, 1)], ['国庆节', new Date(y, 9, 1)]);
    [['春节', 1, 1], ['端午节', 5, 5], ['中秋节', 8, 15]].forEach(([n, lm, ld]) => { const t = lunarToSolar(y, lm, ld); if (t) cands.push([n, t]); });
  });
  let best = null;
  cands.forEach(([n, t]) => { const dd = Math.round((t - tk) / 86400000); if (dd >= 3 && (!best || dd < best.days)) best = {n, days:dd}; });
  return best;
}
function seedRng(s){
  let h = 1779033703 ^ s.length;
  for (let i = 0; i < s.length; i++){ h = Math.imul(h ^ s.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; }
  return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}
function clipT(t, n){ t = String(t || '').trim(); return t.length > n ? t.slice(0, n) + '…' : t; }

/* ---- 天气：Open-Meteo（免注册免 key，一次请求拿到昨天+今天）；取不到就不显示，别的照常 ---- */
const WX_CITIES = [['杭州',30.27,120.16],['上海',31.23,121.47],['北京',39.90,116.40],['广州',23.13,113.26],['深圳',22.54,114.06],['成都',30.57,104.07],
  ['南京',32.06,118.80],['武汉',30.59,114.31],['苏州',31.30,120.59],['重庆',29.56,106.55],['西安',34.34,108.94],['天津',39.13,117.20],
  ['长沙',28.23,112.94],['郑州',34.75,113.62],['青岛',36.07,120.38],['厦门',24.48,118.09],['宁波',29.87,121.55],['合肥',31.82,117.23],
  ['福州',26.07,119.30],['济南',36.65,117.12],['昆明',25.04,102.71],['沈阳',41.80,123.43],['大连',38.91,121.61],['哈尔滨',45.80,126.53],
  ['长春',43.82,125.32],['石家庄',38.04,114.51],['太原',37.87,112.55],['南昌',28.68,115.86],['南宁',22.82,108.37],['贵阳',26.65,106.63],
  ['兰州',36.06,103.83],['呼和浩特',40.84,111.75],['乌鲁木齐',43.83,87.62],['拉萨',29.65,91.13],['西宁',36.62,101.78],['银川',38.49,106.23],
  ['海口',20.04,110.20],['三亚',18.25,109.51],['香港',22.32,114.17],['澳门',22.20,113.54],['台北',25.03,121.57],['无锡',31.49,120.31],
  ['温州',28.00,120.67],['绍兴',30.00,120.58],['嘉兴',30.75,120.76],['湖州',30.89,120.09],['常州',31.81,119.97],['佛山',23.02,113.12],
  ['东莞',23.02,113.75],['珠海',22.27,113.58],['徐州',34.21,117.28],['烟台',37.46,121.45],['洛阳',34.62,112.45],['桂林',25.27,110.29],
  ['丽江',26.86,100.23],['大理',25.61,100.27]];
const WX_TOP = ['杭州','上海','北京','广州','深圳','成都','南京','武汉'];
function wxCfg(){ if (!SET.wx || !Array.isArray(SET.wx.cities)) SET.wx = {cities:[], cur:0}; return SET.wx; }
function wxCity(){ const w = wxCfg(); if (!w.cities.length) return null; if (!(w.cur >= 0 && w.cur < w.cities.length)) w.cur = 0; return w.cities[w.cur]; }
function wxTxt(c){
  return c === 0 || c === 1 ? '晴' : c === 2 ? '多云' : c === 3 ? '阴' : c <= 48 ? '雾' : c <= 57 ? '毛毛雨'
    : c === 61 ? '小雨' : c === 63 ? '中雨' : c === 65 ? '大雨' : c <= 67 ? '冻雨'
    : c === 71 ? '小雪' : c === 73 ? '中雪' : c === 75 ? '大雪' : c === 77 ? '雪粒'
    : c <= 81 ? '阵雨' : c === 82 ? '大阵雨' : c <= 86 ? '阵雪' : '雷阵雨';
}
function wxIc(c){ return c === 0 ? '☀️' : c === 1 ? '🌤' : c === 2 ? '⛅' : c === 3 ? '☁️' : c <= 48 ? '🌫' : c <= 57 ? '🌦' : c <= 67 ? '🌧' : c <= 77 ? '🌨' : c <= 82 ? '🌦' : c <= 86 ? '🌨' : '⛈'; }
const wxWet = c => (c >= 51 && c <= 67) || (c >= 80 && c <= 82) || c >= 95;
const wxSnowy = c => (c >= 71 && c <= 77) || c === 85 || c === 86;
function wxURL(c){
  return 'https://api.open-meteo.com/v1/forecast?latitude=' + c.la + '&longitude=' + c.lo
    + '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
    + '&hourly=precipitation_probability,weather_code&past_days=1&forecast_days=1&timezone=auto';
}
function wxParse(j){
  const iso = key2iso(TODAY), D = j && j.daily;
  if (!D || !Array.isArray(D.time)) return null;
  const i = D.time.indexOf(iso);
  if (i < 1) return null;   /* 必须同时有昨天和今天：缓存里的旧响应、离线兜底页都会在这被挡下 */
  const num = v => (typeof v === 'number' && isFinite(v)) ? Math.round(v) : null;
  const d = {hi:num(D.temperature_2m_max[i]), lo:num(D.temperature_2m_min[i]),
    hiY:num(D.temperature_2m_max[i - 1]), loY:num(D.temperature_2m_min[i - 1]),
    code:+(D.weather_code || [])[i] || 0, pmax:num((D.precipitation_probability_max || [])[i]), hrs:[]};
  if ([d.hi, d.lo, d.hiY, d.loY].some(v => v === null)) return null;
  const H = j.hourly || {};
  (H.time || []).forEach((t, k) => {
    if (String(t).slice(0, 10) === iso) d.hrs.push({h:+String(t).slice(11, 13), p:(H.precipitation_probability || [])[k], c:+(H.weather_code || [])[k] || 0});
  });
  return d;
}
function wxKey(){ const c = wxCity(); return c ? TODAY + '|' + c.n : null; }
function wxHit(){ const k = wxKey(); return (k && SET.wxc && SET.wxc[k]) || null; }
function wxCached(){ const h = wxHit(); return h ? h.d : null; }
function wxStale(){ const h = wxHit(); return !h || Date.now() - h.t > 3 * 3600000; }
let wxBusy = null;
function wxFetch(force){
  const c = wxCity(); if (!c) return Promise.resolve(null);
  const key = wxKey();
  if (!SET.wxc || typeof SET.wxc !== 'object') SET.wxc = {};
  const hit = SET.wxc[key];
  if (!force && hit && Date.now() - hit.t < 3 * 3600000) return Promise.resolve(hit.d);
  if (wxBusy && wxBusy.key === key) return wxBusy.p;
  const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  let tm;
  const timeout = new Promise((_,reject) => {tm=setTimeout(()=>{reject(new Error('weather timeout'));try{ctl?.abort();}catch(_){}},8000);});
  const request = Promise.resolve().then(()=>fetch(wxURL(c), ctl ? {signal:ctl.signal,cache:'no-store'} : {cache:'no-store'}))
    .then(r=>{if(!r.ok)throw new Error('weather HTTP '+r.status);return r.json();});
  const p = Promise.race([request,timeout]).then(j=>{
    const d=wxParse(j);if(!d)throw new Error('weather data');
    Object.keys(SET.wxc).forEach(k2=>{if(k2.indexOf(TODAY+'|')!==0)delete SET.wxc[k2];});
    SET.wxc[key]={t:Date.now(),d};
    P().wx={c:c.n,hi:d.hi,lo:d.lo,k:d.code};scheduleSave();return d;
  }).catch(()=>hit?hit.d:null).then(d=>{clearTimeout(tm);if(wxBusy&&wxBusy.p===p)wxBusy=null;return d;});
  wxBusy = {key, p}; return p;
}
function hourCN(h){ return h < 12 ? '上午 ' + h + ' 点' : h === 12 ? '中午 12 点' : h < 18 ? '下午 ' + (h - 12) + ' 点' : '晚上 ' + (h - 12) + ' 点'; }
function wxAdvice(d){
  const dd = Math.round(((d.hi - d.hiY) + (d.lo - d.loY)) / 2);
  const cmp = dd <= -3 ? {t:'↓ 比昨天冷 ' + (-dd) + '°', c:'cold'} : dd >= 3 ? {t:'↑ 比昨天暖 ' + dd + '°', c:'warm'} : {t:'和昨天差不多', c:'same'};
  let cloth, short;
  if (d.hi <= 5){ cloth = '很冷，帽子围巾安排上'; short = '穿厚点'; }
  else if (dd <= -6){ cloth = '降温挺猛，穿厚一点'; short = '穿厚点'; }
  else if (dd <= -3){ cloth = '降温了，加件外套'; short = '加外套'; }
  else if (d.hi >= 33){ cloth = '很热，防晒、多喝水'; short = '防晒'; }
  else if (dd >= 3){ cloth = '回暖了，可以少穿一件'; short = '少穿一件'; }
  else { cloth = '照昨天穿就行'; short = '照昨天穿'; }
  const nowH = new Date().getHours();
  const hit = (d.hrs || []).find(x => x.h >= nowH && x.h <= 22 && ((typeof x.p === 'number' && x.p >= 50) || wxWet(x.c) || wxSnowy(x.c)));
  let rain = null, rainShort = '';
  if (hit){
    const sn = wxSnowy(hit.c), when = hit.h <= nowH ? '现在' : hourCN(hit.h) + '后';
    rain = (sn ? '❄ ' : '☂ ') + when + (sn ? '有雪，路上慢点' : '有雨，带把伞');
    rainShort = sn ? '有雪' : '带伞';
  }
  const range = (d.hi - d.lo >= 10) ? '早晚温差 ' + (d.hi - d.lo) + '°，外套带上方便穿脱' : null;
  return {dd, cmp, cloth, short, rain, rainShort, range, snow:!!(hit && wxSnowy(hit.c)), rainy:!!hit, hi:d.hi, sunny:d.code <= 1};
}
function wxDesc(d){
  const seg = (a, b) => {
    const cnt = {};
    (d.hrs || []).filter(x => x.h >= a && x.h < b).forEach(x => { const t = wxTxt(x.c); cnt[t] = (cnt[t] || 0) + 1; });
    return Object.keys(cnt).sort((p, q) => cnt[q] - cnt[p])[0] || null;
  };
  const m = seg(6, 12), n = seg(12, 21);
  if (m && n && m !== n) return m + '转' + n;
  return m || n || wxTxt(d.code);
}

/* ---- 卡片内容 ---- */
function helloGreet(){ const h = new Date().getHours(); return h < 5 ? '夜深了' : h < 11 ? '早上好' : h < 13 ? '中午好' : h < 18 ? '下午好' : '晚上好'; }
function lastRecordGap(){
  const tk = parseKey(TODAY); let best = null;
  Object.keys(PAGES).forEach(k => {
    const d = parseKey(k); if (d >= tk) return;
    const p = PAGES[k]; if (!((p.plan || []).length || (p.flow || []).length)) return;
    if (!best || d > best) best = d;
  });
  return best ? Math.round((tk - best) / 86400000) : 0;
}
function myBirthdayToday(){ const b = SET.me && SET.me.bday; if (!b) return false; const a = TODAY.split('.'); return b === (+a[1]) + '.' + (+a[2]); }
function helloTags(){
  const tags = [];
  if (myBirthdayToday()) tags.push({t:'🎂 今天你生日', acc:true});
  ['今天', '明天', '后天'].forEach((w, i) => {
    const k = addDaysK(TODAY, i);
    [festOf(k), jieqiOf(k)].forEach(x => { if (x && tags.length < 2) tags.push({t:w + x, acc:true}); });
  });
  const h = nextHoliday();
  if (h && h.days <= 120 && !tags.some(t => t.t.indexOf(h.n) >= 0)) tags.push({t:'距' + h.n + ' ' + h.days + ' 天', acc:false});
  return tags.slice(0, 3);
}
function helloItems(){
  return (P().plan || []).filter(e => (e.text || '').trim()
    && ((e.sym === 'task' && e.state === 'open') || (e.sym === 'note' && e.cyc)));
}
function helloItemHTML(e){
  let t = (e.text || '').trim(), ic = '<span class="ic dt"></span>', when = '';
  if (e.cyc){
    const c = (SET.cycles || []).find(x => x.id === e.cyc);
    const icon = c ? cycIcon(c) : '🔁';
    if (t.indexOf(icon) === 0) t = t.slice(icon.length).trim();
    ic = '<span class="ic">' + icon + '</span>';
    if (e.sym === 'task') when = icon === '🎂' ? '记得说一声' : icon === '💍' ? '别忘了' : icon === '💳' ? '记得还' : '';
  } else if (/^问问 /.test(t)){ ic = '<span class="ic arr">→</span>'; when = '转交跟进'; }
  else {
    const hm = detectTimeHM(t);
    if (hm){ when = hm; t = t.replace(/\s*([01]?\d|2[0-3])[:：][0-5]\d\s*/, ' ').trim() || t; }
    else { const cn = detectTimeCN(t); if (cn) when = cn; }
  }
  if (!when && e.time) when = e.time;   /* v2.32 时间单独设的也显示 */
  if (!when && e.lateFrom) when = '原定 ' + fmtShort(e.lateFrom);
  return '<div class="hl-it" data-hid="' + (e._id || '') + '">' + ic + '<span class="tx">' + vEsc(t) + '</span>'
    + (when ? '<span class="when">' + vEsc(when) + '</span>' : '') + '</div>';
}
const JQ_TIP = {'立春':'立春了，天要慢慢暖起来了。','春分':'春分，今天昼夜一样长。','清明':'清明，适合想一想想念的人。','立夏':'立夏了，夏天正式开始。',
  '夏至':'夏至，一年里白天最长的一天。','立秋':'立秋了，暑气要慢慢退了。','秋分':'秋分，昼夜又一样长了。','立冬':'立冬了，吃顿热乎的。',
  '冬至':'冬至，记得吃饺子或汤圆。','小寒':'小寒，最冷的日子要来了，穿暖和。','大寒':'大寒，再冷也快过年了。'};
const CHEER_GEN = ['想到什么，随手发我一句。','记饭馆时带上「店名」，下次找起来方便。','没定日子的事，可以先放进储备。','记花销时带上金额，账房里能一起看。','看完电影记一句，下次就知道推不推荐了。','有个想法还没想清楚？先记半句也行。'];
function helloCheer(cx){
  let a = null;
  if (cx.mybd) a = '生日快乐' + (SET.me && SET.me.name ? '，' + SET.me.name : '') + '！这是啾啾留给你的生日祝福。';   /* v3.3 岛民证上填的生日 */
  else if (cx.gap >= 7) a = seedRng(TODAY + '|gap')() < 0.5 ? '好久不见，今天想记点什么？' : '接着写今天的就行，不用补齐空着的日子。';
  else if (cx.fest) a = cx.fest === '除夕' ? '除夕快乐，今晚好好吃顿饭。' : cx.fest + '快乐！';
  else if (cx.jq && JQ_TIP[cx.jq]) a = JQ_TIP[cx.jq];
  else if (cx.bd) a = '今天有人过生日，记得说一声。';
  else if (cx.wa){
    const w = cx.wa;
    if (w.snow) a = '下雪了！路上慢点。';
    else if (w.dd <= -5) a = '降温了，出门多带件衣服。';
    else if (w.rainy) a = '今天有雨，出门记得带伞。';
    else if (w.hi >= 33) a = '好热，记得多喝水。';
    else if (w.sunny && w.hi >= 15 && w.hi <= 28) a = '天气不错，有空出门走走。';
  }
  if (!a){
    const wd = parseKey(TODAY).getDay();
    a = wd === 1 ? '周一了，看看这周有什么安排。' : wd === 5 ? '周五了，看看还有哪些事要收尾。' : (wd === 6 || wd === 0) ? '周末了，有安排就记下来。' : null;
  }
  const b = (cx.h < 11 && cx.wa && cx.wa.hi <= 15 && seedRng(TODAY + '|bf')() < 0.5)
    ? '天冷了，早饭吃点热乎的。' : CHEER_GEN[Math.floor(seedRng(TODAY + '|gen')() * CHEER_GEN.length)];
  return a ? [a, b] : [b];
}
function helloCtx(wx){
  return {gap:lastRecordGap(), fest:festOf(TODAY), jq:jieqiOf(TODAY), mybd:myBirthdayToday(),
    bd:helloItems().some(e => e.cyc && e.sym === 'task' && (e.text || '').indexOf('🎂') >= 0),
    wa:wx ? wxAdvice(wx) : null, h:new Date().getHours()};
}

/* ---- 天气块 ---- */
function wxBlockHTML(d){
  const c = wxCity(), a = wxAdvice(d);
  const lo0 = Math.min(d.lo, d.loY) - 2, hi0 = Math.max(d.hi, d.hiY) + 2, sp = Math.max(1, hi0 - lo0);
  const bar = (lo, hi, col) => '<div class="hl-rng"><i style="left:' + ((lo - lo0) / sp * 100).toFixed(1) + '%;width:'
    + Math.max(4, (hi - lo) / sp * 100).toFixed(1) + '%;background:' + col + '"></i></div>';
  const tcol = a.cmp.c === 'cold' ? '#4E7A9B' : a.cmp.c === 'warm' ? 'var(--accent)' : 'var(--ink-soft)';
  const tips = ['👕 ' + a.cloth];
  if (a.rain) tips.push(a.rain); else if (a.range) tips.push('🧥 ' + a.range);
  return '<div class="hl-wx">'
    + '<div class="hl-r1"><span style="font-size:22px">' + wxIc(d.code) + '</span><span class="hl-t">' + d.hi + '°<small> / ' + d.lo + '°</small></span>'
    + '<span class="hl-d">' + vEsc(wxDesc(d)) + '</span><button class="hl-city" id="hlCity">' + vEsc(c ? c.n : '') + ' ⇄</button></div>'
    + '<div class="hl-rr"><span class="k">昨天</span>' + bar(d.loY, d.hiY, 'var(--line-strong)') + '<span class="v">' + d.loY + '°–' + d.hiY + '°</span></div>'
    + '<div class="hl-rr"><span class="k">今天</span>' + bar(d.lo, d.hi, tcol) + '<span class="v">' + d.lo + '°–' + d.hi + '°</span></div>'
    + '<div class="hl-cmp ' + a.cmp.c + '">' + a.cmp.t + '</div>'
    + '<div class="hl-tip">' + tips.map(vEsc).join('<br>') + '</div></div>';
}
function wxPickHTML(addMode){
  const cs = wxCfg().cities;
  return '<div class="hl-wx hl-wx0">' + (addMode ? '选一个城市（存过的点一下就切过去）：' : '告诉我你在哪，每天早上帮你看天气，比昨天冷还是暖：')
    + '<div class="gs-chips" style="margin-top:8px"><button class="gs-chip" data-wxgeo="1">📍 定位</button>'
    + cs.map((c, i) => '<button class="gs-chip on" data-wxi="' + i + '">' + vEsc(c.n) + '</button>').join('')
    + WX_TOP.filter(n => !cs.some(c => c.n === n)).map(n => '<button class="gs-chip" data-wxadd="' + n + '">' + n + '</button>').join('')
    + '</div><div class="hl-fine">更多城市：设置 → 天气城市（最多存 3 个，卡片上点城市名来回切）</div></div>';
}
function bindWxPick(box){
  box.querySelectorAll('[data-wxadd]').forEach(b => b.onclick = () => {
    const c = WX_CITIES.find(x => x[0] === b.dataset.wxadd);
    if (c && wxAddCity({n:c[0], la:c[1], lo:c[2]})) helloWxRender();
  });
  box.querySelectorAll('[data-wxi]').forEach(b => b.onclick = () => { wxCfg().cur = +b.dataset.wxi; scheduleSave(); helloWxRender(); });
  const g = box.querySelector('[data-wxgeo]'); if (g) g.onclick = () => wxLocate(() => helloWxRender());
}
function bindWxBlock(box){
  const b = box.querySelector('#hlCity'); if (!b) return;
  b.onclick = () => {
    const w = wxCfg();
    if (w.cities.length >= 2){ w.cur = (w.cur + 1) % w.cities.length; scheduleSave(); helloWxRender(); helloStripRefresh(); }
    else { box.innerHTML = wxPickHTML(true); bindWxPick(box); }
  };
}
function helloWxRender(){
  const box = $('#hlWx'); if (!box) return;
  const c = wxCity();
  if (!c){ box.innerHTML = wxPickHTML(false); bindWxPick(box); return; }
  const d = wxCached();
  if (d){ box.innerHTML = wxBlockHTML(d); bindWxBlock(box); }
  else box.innerHTML = '<div class="hl-wx hl-wx0">' + vEsc(c.n) + ' · 看一眼天气…</div>';
  if (d && !wxStale()) return;
  wxFetch().then(d2 => {
    const b2 = $('#hlWx'); if (!b2 || !$('#hello').classList.contains('on')) return;
    const c2 = wxCity(); if (!c2 || c2.n !== c.n) return;   /* 期间换了城市：以新一轮为准 */
    if (d2){ b2.innerHTML = wxBlockHTML(d2); bindWxBlock(b2); helloCheerRefresh(); }
    else if (!d){
      b2.innerHTML = '<div class="hl-wx hl-wx0">' + vEsc(c.n) + ' 的天气暂时连接不上，请重试'
        + '<div class="gs-chips" style="margin-top:8px"><button class="gs-chip" id="hlWxRetry">再试一次</button><button class="gs-chip" id="hlWxCity">换城市</button></div></div>';
      $('#hlWxRetry').onclick = () => { b2.innerHTML = '<div class="hl-wx hl-wx0">' + vEsc(c.n) + ' · 再看一眼…</div>'; wxFetch(true).then(d3 => { if(d3)helloWxRender();else {b2.innerHTML='<div class="hl-wx hl-wx0">天气暂时连接不上。<button class="gs-chip" id="hlWxAgain">再试一次</button></div>';$('#hlWxAgain').onclick=helloWxRender;} }); };
      $('#hlWxCity').onclick = () => { b2.innerHTML = wxPickHTML(true); bindWxPick(b2); };
    }
  });
}
function helloCheerRefresh(){
  const el = $('#hlCheer'); if (!el) return;
  el.innerHTML = helloCheer(helloCtx(wxCached())).map(vEsc).join('<br>') + '<span>—— 啾啾</span>';
}
function wxAddCity(c){
  const w = wxCfg(), i = w.cities.findIndex(x => x.n === c.n);
  if (i >= 0){ w.cur = i; scheduleSave(); return true; }
  if (w.cities.length >= 3){ toast('最多存 3 个城市 · 去设置里删一个再加'); return false; }
  w.cities.push({n:c.n, la:+(+c.la).toFixed(2), lo:+(+c.lo).toFixed(2)}); w.cur = w.cities.length - 1;
  scheduleSave(); return true;
}
function wxLocate(done){
  if (!navigator.geolocation){ toast('这台设备拿不到定位 · 直接选城市吧'); return; }
  toast('正在定位…');
  navigator.geolocation.getCurrentPosition(pos => {
    const la = pos.coords.latitude, lo = pos.coords.longitude;
    let best = null, bd = Infinity;
    WX_CITIES.forEach(c => { const dx = (c[2] - lo) * Math.cos(la * Math.PI / 180), dy = c[1] - la, d2 = dx * dx + dy * dy; if (d2 < bd){ bd = d2; best = c; } });
    const near = best && Math.sqrt(bd) * 111 < 60;
    if (wxAddCity(near ? {n:best[0], la:best[1], lo:best[2]} : {n:'我这儿', la, lo})){
      toast('📍 ' + (near ? best[0] : '已按定位') + ' · 天气马上来'); if (done) done();
    }
  }, () => toast('没拿到位置 · 直接点城市也行'), {timeout:9000, maximumAge:3600000});
}
function wxCitySheet(){
  const S = $('#gsheet'), w = wxCfg();
  const paint = () => {
    S.innerHTML = '<div class="gs-title">天气城市 · 最多 3 个</div>'
      + '<div class="vt-note" style="margin:-2px 0 10px">早安卡上点城市名来回切 · 常在两地跑就都存上</div>'
      + '<div class="gs-chips" id="wxMine">' + (w.cities.length ? w.cities.map((c, i) => '<button class="gs-chip on" data-rm="' + i + '">'
          + vEsc(c.n) + (i === w.cur ? ' · 当前' : '') + ' ✕</button>').join('') : '<span class="vt-note">还没存城市</span>') + '</div>'
      + '<button class="gm-btn" id="wxGeo" style="width:100%;margin:12px 0 10px;padding:10px">📍 用定位找我在哪</button>'
      + '<div class="gs-chips" style="max-height:28vh;overflow-y:auto">' + WX_CITIES.filter(c => !w.cities.some(x => x.n === c[0]))
          .map(c => '<button class="gs-chip" data-add="' + c[0] + '">' + c[0] + '</button>').join('') + '</div>'
      + '<div style="display:flex;gap:8px;margin-top:10px"><input class="vt-in" id="wxQ" placeholder="其他城市，如 绍兴 / 大阪" style="flex:1;margin:0">'
      + '<button class="gm-btn" id="wxFind" style="padding:0 14px">找</button></div>'
      + '<div class="gs-chips" id="wxRes" style="margin-top:8px"></div>'
      + '<button class="gs-done" id="wxOk">好了</button>';
    S.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => {
      w.cities.splice(+b.dataset.rm, 1); if (w.cur >= w.cities.length) w.cur = 0; scheduleSave(); paint();
    });
    S.querySelectorAll('[data-add]').forEach(b => b.onclick = () => {
      const c = WX_CITIES.find(x => x[0] === b.dataset.add); if (c && wxAddCity({n:c[0], la:c[1], lo:c[2]})) paint();
    });
    $('#wxGeo').onclick = () => wxLocate(paint);
    $('#wxFind').onclick = () => {
      const q = $('#wxQ').value.trim(); if (!q) return;
      const box = $('#wxRes'); box.innerHTML = '<span class="vt-note">找一找…</span>';
      fetch('https://geocoding-api.open-meteo.com/v1/search?count=6&language=zh&format=json&name=' + encodeURIComponent(q))
        .then(r => r.json()).then(j => {
          const rs = (j && j.results) || [];
          if (!rs.length){ box.innerHTML = '<span class="vt-note">没找到 · 换个写法试试（拼音也行）</span>'; return; }
          box.innerHTML = rs.map((x, i) => '<button class="gs-chip" data-gi="' + i + '">' + vEsc(x.name)
            + (x.admin1 && x.admin1 !== x.name ? ' · ' + vEsc(x.admin1) : '') + '</button>').join('');
          box.querySelectorAll('[data-gi]').forEach(b => b.onclick = () => {
            const x = rs[+b.dataset.gi]; if (wxAddCity({n:x.name, la:x.latitude, lo:x.longitude})) paint();
          });
        }).catch(() => { box.innerHTML = '<span class="vt-note">没连上 · 稍后再试</span>'; });
    };
    $('#wxOk').onclick = () => { closeSheet(); render(); };
  };
  paint();
  S.classList.add('on'); $('#mask').classList.add('on');
}

/* ---- 早安卡本体（方案 A：全屏一页） ---- */
let helloReopen = false;
function openHello(reopen){
  const H = $('#hello'); if (!H) return;
  helloReopen = !!reopen;
  try{ dismissKB(); }catch(_){}
  const ta = TODAY.split('.').map(Number), L = solarToLunar(parseKey(TODAY));
  const sub = weekCN(TODAY) + (L ? ' · 农历' + (L.leap ? '闰' : '') + LM_NM[L.lm - 1] + '月' + lDayNm(L.ld) : '');
  const items = helloItems(), mems = helloMemories(), cx = helloCtx(wxCached());
  const pooled = (!SET.duty && P().pooled) ? P().pooled : 0;
  /* v2.31 上面：大日期、天气、一句话；下面：今天的事、去年今日 / 上个月的今天（没有就不出现） */
  const lower = (items.length ? '<div class="hl-lab">今天的事</div>' + items.slice(0, 5).map(helloItemHTML).join('')
        + (items.length > 5 ? '<div class="hl-none">还有 ' + (items.length - 5) + ' 件 · 在今日页</div>' : '') : '')
    + (pooled ? '<div class="hl-pool" id="hlPool">之前没做完的 ' + pooled + ' 件，我收进了「储备」 ›</div>' : '')
    + mems.map((m, i) => '<div class="hl-lab">' + m.label + '</div><div class="hl-mem" data-mi="' + i + '"' + (i === 0 ? ' id="hlMem"' : '') + '><b>'
        + (m.label === '上个月的今天' ? fmtKey(m.k) : m.k.split('.')[0] + '年' + fmtKey(m.k)) + '</b> · ' + vEsc(clipT(m.e.text, 46)) + ' ›</div>').join('');
  H.innerHTML = '<div class="hl-body">'
    + '<div class="hl-top"><div style="min-width:0">'
    + '<div class="hl-hi">' + (cx.gap >= 7 ? '好久不见 · ' : '') + helloGreet() + '</div>'
    + '<div class="hl-date">' + ta[1] + '月' + ta[2] + '日</div>'
    + '<div class="hl-sub">' + sub + '</div>'
    + '<div class="hl-tags">' + helloTags().map(t => '<span class="hl-tag' + (t.acc ? ' acc' : '') + '">' + vEsc(t.t) + '</span>').join('') + '</div>'
    + '</div><div class="hl-dot">' + jjImg('nest', 76) + '</div></div>'
    + '<div id="hlWx"></div>'
    + '<div class="hl-cheer top" id="hlCheer">' + helloCheer(cx).map(vEsc).join('<br>') + '<span>—— 啾啾</span></div>'
    + '<div class="hl-lower">' + lower
    + '<button class="hl-go" id="hlGo">' + (reopen ? '收起' : '去写今天') + '</button></div>'
    + '</div>';
  H.classList.add('on');
  $('#hlGo').onclick = closeHello;
  H.querySelectorAll('[data-hid]').forEach(el => el.onclick = () => {
    const id = +el.dataset.hid; closeHello(); if (id) jumpToEntry(TODAY, id);
  });
  if ($('#hlPool')) $('#hlPool').onclick = () => { closeHello(); cur = {name:'agg', key:'someday'}; render(); };
  H.querySelectorAll('.hl-mem[data-mi]').forEach(el => el.onclick = () => {
    const m = mems[+el.dataset.mi]; closeHello(); jumpToEntry(m.k, m.e._id || (m.e._id = ++uid));
  });
  islandHelloGift();
  helloWxRender();
}
function closeHello(){
  islandHelloObserverStop();
  if(cur.name==='postoffice'&&cur.tab!=='album'){navFromBack=true;render();}
  const H = $('#hello'); if (!H || !H.classList.contains('on')) return;
  H.classList.remove('on');
  const first = !helloReopen; helloReopen = false;
  helloStripRefresh();
  if (first && SET.duty) morningCheck();
}
function helloBoot(){
  if (!modOn('hello') || !SEEN.onboard){ if (SET.duty) morningCheck(); return; }
  if (!P().hello){ P().hello = 1; scheduleSave(); openHello(false); return; }
  if (SET.duty) morningCheck();
  if (wxCity() && wxStale()) wxFetch().then(() => helloStripRefresh());
}
/* ---- 收起后：今日页顶上一行 ---- */
function helloStripRefresh(){ const s = document.getElementById('wxPill'); if (s) s.innerHTML = wxPillHTML(); }

/* ---- 储备：捞回今天 ---- */
function somedayPull(t, k){
  snapshot('处理任务');
  t.state = 'migrated'; t.badge = '→' + fmtShort(TODAY) + ' 捞回';
  P().plan.push({sym:'task', state:'open', text:t.text, time:t.time || undefined, pick:t.pick || undefined, nbId:t.nbId || undefined, groups:t.groups ? [...t.groups] : undefined, mig:t.mig,
    src:t.src || undefined, srcDay:k || undefined, srcId:t._id || (t._id = ++uid), _id:++uid});
  scheduleSave();
}

/* ---- App 在后台过了夜：回来自动翻到新的一天；切走前把没落盘的存掉 ---- */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible'){ if (saveTm){ clearTimeout(saveTm); saveTm = null; saveNow(); } return; }
  if (dkey(effNow()) !== TODAY){ if (saveTm){ clearTimeout(saveTm); saveTm = null; } saveNow(); location.reload(); }
});
window.addEventListener('pagehide', () => { if (saveTm){ clearTimeout(saveTm); saveTm = null; saveNow(); } });

/* ============ v2.29 熟店簿 + 今天吃什么（抽卡）+ 记一家店 + 避雷红签 + 一段话拆条 ============ */
const FOOD_CAT = [['火锅',/火锅|涮/],['寿喜烧',/寿喜烧/],['烤肉',/烤肉|韩式烤|烤五花/],['烧烤',/烧烤|撸串|串串|烤串|烤鱼/],['日料',/寿司|刺身|日料|拉面|乌冬|三文鱼/],
  ['西餐',/西餐|牛排|意面|天使面|披萨|汉堡|西兰花/],['麻辣烫',/麻辣烫|冒菜/],['面馆',/牛肉面|面馆|拌面|炒面|油泼面|青菜面|鸡蛋面/],['川菜',/川菜|四川|辣椒炒肉|水煮|川味/],
  ['云南菜',/云南/],['海鲜',/海鲜|蟹|生蚝/],['羊汤',/羊汤|羊肉汤/],['小吃',/肉夹馍|沙县|小吃|煎饼|灌饼|包子/],['甜品饮品',/甜品|奶茶|咖啡|冰茶|双皮奶|蛋糕/],['家常菜',/家常菜|饭店|小馆|菜馆|食堂/]];
const HOT_CATS = ['火锅','寿喜烧','烤肉','烧烤','麻辣烫','面馆','川菜','羊汤'];
const LIKE_WORDS = V_POS1.concat(['大满足','惊艳','好吃','很香','神作','yyds','推荐','值得']);
const MEH_WORDS = ['还行','凑合','很一般','一般般','味道一般','中规中矩','一般'];
const GOLD_WORDS = ['宝藏','必吃','绝了','神作','yyds'];
const TIP_RE = /(\d+|[一二三四五六七八九十两])点(去|到|前|以前|之前)|排队|预约|订位|适合.{0,6}人|(\d|[一二三四五六两俩])人.{0,6}适合|分着吃|吃不完|打卡送|人均|早点去|早去|要等位|等位/;
var STORE_IDX = null;   /* var：scheduleSave 可能在声明前被调用，避开 TDZ */
var WANT_IDX = null;   /* v3.3.5 想吃 */
function storeClauses(t){
  return String(t || '').replace(/（[^）]*）|\([^)]*\)/g, '').split(/[，,。！!；;？?\n]/).map(s => s.trim()).filter(Boolean);
}
function cleanClause(c){
  return String(c || '')
    .replace(/^(早饭|午饭|晚饭|晚餐|午餐|夜宵|下午茶)\s*/, '')
    .replace(/[“"『「][^”"』」]*[”"』」]/g, '')
    .replace(/^(?:和|跟|与)[^，。！!？?吃喝]{1,14}?(?:一起)?(?:吃了|吃|喝了)/, '')
    .replace(/^(?:(?:吃了|点了|去了|在)\s*)+/, '')
    .replace(/(花了|花费)?\s*[¥￥]?\d+(\.\d+)?\s*[元块]/g, '')
    .replace(/\s+/g, '').replace(/^[，、·:：\-]+|[，、·:：\-]+$/g, '');
}
function dayCity(k){
  const p = PAGES[k]; if (!p) return null;
  if (p.wx && p.wx.c && p.wx.c !== '我这儿') return p.wx.c;
  let c = null; walkPage(k, e => { if (!c && e.text){ const pc = parseEntry(e).city; if (pc) c = pc; } });
  return c;
}
function foodCatOf(o){
  const src = o.name + ' ' + o.recs.map(r => r.e.text || '').join(' ');
  for (const [nm, re] of FOOD_CAT){ if (re.test(src)) return nm; }
  return '';
}
function storeIndex(){
  if (STORE_IDX) return STORE_IDX;
  const map = {};
  walk((k, e) => {
    if (!e.text) return;
    if (e.sym === 'task' && e.state !== 'done') return;   /* 还没去的「就它了」不算一次 */
    const p = parseEntry(e); if (!p.store) return;
    if (p.want) return;   /* v3.3.5 想吃不算去过 */
    const o = map[p.store] || (map[p.store] = {name:p.store, days:new Set(), recs:[]});
    o.days.add(k); o.recs.push({k, e, p});
  });
  Object.values(map).forEach(o => {
    o.recs.sort((a, b) => parseKey(b.k) - parseKey(a.k) || (b.e._id || 0) - (a.e._id || 0));
    o.cnt = o.days.size; o.last = o.recs[0].k;
    const op = o.recs.find(r => r.p.verdict || r.p.score != null);   /* 以最近一次表态为准 */
    o.op = op || null;
    o.avoid = !!(op && foodTier(op.p) === 'lei');
    let like = false;
    if (op && !o.avoid){
      if (op.p.score != null) like = op.p.score >= 7;
      else like = !MEH_WORDS.includes(op.p.verdict) && LIKE_WORDS.includes(op.p.verdict);
    }
    o.like = like;
    o.tier = op ? foodTier(op.p) : null;   /* v3.3.2 以最近一次表态为准：宝藏 / 避雷，其余算吃过 */
    o.gold = o.tier === 'bao';
    const cr = o.recs.find(r => r.p.city);
    o.city = cr ? cr.p.city : null;
    if (!o.city){ for (const r of o.recs){ const c = dayCity(r.k); if (c){ o.city = c; break; } } }
    o.delivery = o.recs.some(r => r.p.delivery);
    o.cat = foodCatOf(o);
  });
  STORE_IDX = map; return map;
}
function wantIndex(){   /* v3.3.5 想吃：写过想吃 / 想去 / 种草…、还一次没去过的店 */
  if (WANT_IDX) return WANT_IDX;
  const idx = storeIndex(), map = {};
  walk((k, e) => {
    if (!e.text || e.state === 'migrated') return;
    const p = parseEntry(e); if (!p.want || !p.store || idx[p.store]) return;
    const o = map[p.store] || (map[p.store] = {name:p.store, want:true, tier:'want', recs:[], cnt:0});
    o.recs.push({k, e, p});
  });
  Object.values(map).forEach(o => {
    o.recs.sort((a, b) => parseKey(b.k) - parseKey(a.k) || (b.e._id || 0) - (a.e._id || 0));
    o.last = o.recs[0].k; o.since = o.recs[o.recs.length - 1].k;
    o.delivery = o.recs.some(r => r.p.delivery);
    const cr = o.recs.find(r => r.p.city);
    o.city = o.delivery ? null : (cr ? cr.p.city : (dayCity(o.since) || null));
    o.cat = foodCatOf(o);
  });
  WANT_IDX = map; return map;
}
function storeQuote(o){
  for (const r of o.recs){
    const t = r.e.text || '';
    /* 先看单品括号评价：「肥瘦肉夹馍22元（惊艳，第一口大满足！）」 */
    const pm = t.match(/([一-龥A-Za-z]{2,10}?)\s*\d*(?:\.\d+)?\s*[元块]?\s*（([^）]{2,30})）/);
    if (pm && o.like && LIKE_WORDS.some(w => pm[2].includes(w))) return {text:pm[1] + pm[2].replace(/[，,]\s*$/, ''), k:r.k};
    const words = o.avoid ? V_NEG : LIKE_WORDS;
    const cs = storeClauses(t).filter(c => words.some(w => c.includes(w)) && !/没那么|没有那么/.test(c)).map(cleanClause).filter(c => c.length >= 2);
    if (cs.length) return {text:clipT([...new Set(cs)].join('，'), 30), k:r.k};
  }
  return null;
}
function storeTip(o){
  for (const r of o.recs){
    const srcs = [r.e.text || ''].concat((r.e.children || []).map(c => c.text || ''));
    for (const t of srcs){
      const cs = storeClauses(t).filter(c => TIP_RE.test(c)).map(cleanClause).filter(c => c.length >= 2);
      if (cs.length) return clipT(cs.join('，'), 24);
    }
  }
  return null;
}
function storeDishes(o){
  const must = [], avoid = [];
  const BAD = /^(烤肉|火锅|烧烤|西餐|日料|自助|东西|味道|环境|服务|这家|他家|整体)$/;
  const push = (arr, x) => { x = String(x || '').replace(/^(突然觉得|觉得|感觉|就是|招牌|有个|要有|他家|这家|点的|的)/, '').trim();
    if ((x.length >= 2 || /^[粥面汤饭鱼虾蟹鸡鸭]$/.test(x)) && x.length <= 8 && !BAD.test(x) && x !== o.name && !must.includes(x) && !avoid.includes(x)) arr.push(x); };
  o.recs.forEach(r => {
    const t = r.e.text || '';
    let m; const re = /([一-龥A-Za-z]{2,10}?)\s*\d*(?:\.\d+)?\s*[元块]?\s*（([^）]{1,30})）/g;
    while ((m = re.exec(t))){
      if (V_NEG.some(w => m[2].includes(w))) push(avoid, m[1]);
      else if (LIKE_WORDS.some(w => m[2].includes(w))) push(must, m[1]);
    }
    const lm = t.match(/避雷([一-龥]{2,5})(?=[，,。！!；;\s]|$)/); if (lm && !/[店家的这那]/.test(lm[1])) push(avoid, lm[1]);
    (t.match(/必点([^·，,。！!\s]{1,10})/g) || []).forEach(x => push(must, x.slice(2)));
    (t.match(/别点([^·，,。！!\s]{1,10})/g) || []).forEach(x => push(avoid, x.slice(2)));
    storeClauses(t).map(cleanClause).forEach(c => {
      const a = c.match(/^([一-龥]{1,10}?)(?:不好吃|难吃|拉胯|太油了?|太咸了?|不入味|很一般|没那么好吃了?|没有那么好吃了?)$/);
      if (a){ push(avoid, a[1]); return; }
      const g = c.match(/^([一-龥]{1,10}?)(?:很?好吃|很香|好香|绝了|惊艳|必点|一绝)$/);
      if (g) push(must, g[1]);
    });
  });
  return {must:must.slice(0, 2), avoid:avoid.slice(0, 2)};
}
function storeLast(o){
  const r = o.recs.find(x => (x.p.withs || []).length || (x.p.prices || []).length) || o.recs[0];
  const w = (r.p.withs || []).filter(x => x !== '独自');
  const t = r.e.text || '';
  const pc = t.match(/俩人|两个人|两人|三个人|三人|四个人|四人|五个人|六个人|六人/);
  const pr = (r.p.prices || [])[0];
  return {with:w.slice(0, 2).join('、'), spend:pr != null ? ((pc ? pc[0].replace('俩人', '两个人') + ' ' : '') + '¥' + pr) : '', alone:(r.p.withs || [])[0] === '独自'};
}
function daysAgo(k){ return Math.round((parseKey(TODAY) - parseKey(k)) / 86400000); }
function agoCN(n){ return n <= 0 ? '今天' : n === 1 ? '昨天' : n < 14 ? n + ' 天前' : n < 60 ? Math.round(n / 7) + ' 周没去了' : Math.round(n / 30) + ' 个月没去了'; }
function pickContext(o, f){
  const d = wxCached();
  if (d){
    const a = wxAdvice(d);
    if ((a.dd <= -3 || d.hi <= 15) && HOT_CATS.includes(o.cat)) return {i:'🔥', t:(a.dd <= -3 ? '今天降温 ' + (-a.dd) + '°，' : '天冷，') + o.cat + '正合适'};
    if (d.hi >= 30 && ['日料','甜品饮品'].includes(o.cat)) return {i:'🧊', t:'天热，吃点清爽的'};
    if (a.rainy && o.delivery) return {i:'☂', t:'下雨天，点外卖不用出门'};
  }
  const n = daysAgo(o.last);
  if (n >= 30) return {i:'🕰', t:agoCN(n).replace('没去了', '没去，想它了吧')};
  return null;
}
function wantReasons(o){   /* v3.3.5 想吃卡的理由：你自己写的那句 */
  return o.recs.slice(0, 2).map(r => ({i:'💬', h:'<q>' + vEsc(clipT(r.e.text || '', 30)) + '</q><small>—— 你 ' + fmtKey(r.k) + ' 写的</small>'}));
}
function pickReasons(o){
  const R = [];
  const q = storeQuote(o);
  if (q) R.push({i:'💬', h:'<q>' + vEsc(q.text) + '</q><small>—— 你 ' + fmtKey(q.k) + ' 说的</small>'});
  const tip = storeTip(o);
  if (tip) R.push({i:'📝', h:'你提醒过自己：<b>' + vEsc(tip) + '</b>'});
  const ds = storeDishes(o);
  if (ds.must.length || ds.avoid.length)
    R.push({i:'🍽', h:(ds.must.length ? '必点' + vEsc(ds.must.join('、')) : '') + (ds.must.length && ds.avoid.length ? ' · ' : '')
      + (ds.avoid.length ? '<span class="pk-neg">' + vEsc(ds.avoid.join('、')) + ' 别点</span>' : '')});
  const L = storeLast(o);
  if (L.with || L.spend) R.push({i:'👥', h:(L.with ? '上次和 ' + vEsc(L.with) : (L.alone ? '上次自己去的' : '上次')) + (L.spend ? '，' + vEsc(L.spend) : '')});
  const cx = pickContext(o);
  if (cx) R.push({i:cx.i, h:vEsc(cx.t)});
  return R.slice(0, 4);
}

/* ---- 抽卡 ---- */
let pickSt = null;
function pickDefaults(){
  if (!pickSt) pickSt = {city:null, mode:'all', hot:null, seen:[], cur:null, n:0, first:null, went:null};
  if (pickSt.city === null){ const c = wxCity(); pickSt.city = (c && c.n !== '我这儿') ? c.n : ''; }
  if (pickSt.hot === null){ const d = wxCached(); pickSt.hot = !!(d && (wxAdvice(d).dd <= -3 || d.hi <= 15)); }
  return pickSt;
}
function pickPool(f){   /* v3.3.2 宝藏；v3.3.5 想吃（还没去过的）也能抽 */
  const ok = o => (f.mode === 'all' || (f.mode === 'take' ? o.delivery : !o.delivery)) && (!f.city || !o.city || o.city === f.city);
  return Object.values(storeIndex()).filter(o => o.tier === 'bao' && ok(o)).concat(Object.values(wantIndex()).filter(ok));
}
function pickWeight(o, f){
  let w = 2;
  const n = o.want ? 10 : daysAgo(o.last);   /* v3.3.5 想吃的还没去过，不按上次去的远近减 */
  w *= n < 3 ? 0.3 : n < 7 ? 0.7 : n > 30 ? 1.5 : 1;
  if (f.hot && HOT_CATS.includes(o.cat)) w *= 2.2;
  return w;
}
function pickDraw(){
  const f = pickDefaults();
  let pool = pickPool(f).filter(o => !f.seen.includes(o.name));
  if (!pool.length){ f.seen = []; pool = pickPool(f); }
  if (!pool.length) return null;
  let v = Math.random() * pool.reduce((s, o) => s + pickWeight(o, f), 0), hit = pool[pool.length - 1];
  for (const o of pool){ v -= pickWeight(o, f); if (v <= 0){ hit = o; break; } }
  f.seen.push(hit.name); f.cur = hit.name; f.n++; if (!f.first) f.first = hit.name; f.went = null; f.anim = true;
  return hit;
}
function pickCardHTML(o){
  const lab = o.want ? '📌 想吃' : '★ 宝藏';   /* v3.3.5 */
  const meta = [o.delivery ? '外卖' : (o.cat || ''), o.city || ''].filter(Boolean).join(' · ');
  const anim = pickSt && pickSt.anim; if (pickSt) pickSt.anim = false;
  const n = daysAgo(o.last);
  return '<div class="pk-card' + (o.gold ? ' gold' : '') + (o.want ? ' want' : '') + (anim ? ' flip' : '') + '">'
    + '<div class="pk-top"><span class="pk-rare">' + vEsc(lab) + '</span><span class="pk-meta">' + vEsc(meta || '城市没记') + '</span></div>'
    + '<div class="pk-name">' + vEsc(o.name) + '</div>'
    + (o.want ? '<div class="pk-sub">还没去过 · ' + fmtKey(o.since) + ' 收的</div><div class="pk-lab">想吃的理由</div>'
      : '<div class="pk-sub">去过 ' + o.cnt + ' 次 · 上次 ' + fmtKey(o.last) + (n >= 14 ? '，' + agoCN(n) : '') + '</div><div class="pk-lab">吃的理由</div>')
    + (o.want ? wantReasons(o) : pickReasons(o)).map(x => '<div class="pk-r"><span class="i">' + x.i + '</span><div>' + x.h + '</div></div>').join('')
    + '</div>';
}
function renderPick(){
  const f = pickDefaults();
  const idx = storeIndex();
  const all = Object.values(idx), avoidN = all.filter(o => o.avoid).length;
  const pool = pickPool(f);
  const cities = wxCfg().cities.map(c => c.n).filter(n => n !== '我这儿');
  const bar = document.createElement('div'); bar.className = 'rp-tabs'; bar.style.marginTop = '12px';
  const chip = (txt, on, fn, cls) => { const b = document.createElement('button'); b.className = 'chip' + (on ? ' on' : '') + (cls ? ' ' + cls : ''); b.textContent = txt; b.onclick = fn; bar.appendChild(b); return b; };
  chip('📍 ' + (f.city || '不限城市') + (cities.length ? ' ⇄' : ''), !!f.city, () => {
    const ring = cities.concat(['']); const i = ring.indexOf(f.city);
    f.city = ring[(i + 1) % ring.length]; f.cur = null; f.seen = []; render();
  });
  [['dine', '堂食'], ['take', '外卖'], ['all', '都行']].forEach(([k, nm]) => chip(nm, f.mode === k, () => { f.mode = k; f.cur = null; f.seen = []; render(); }));
  chip('🔥 想吃热乎的', f.hot, () => { f.hot = !f.hot; render(); }, f.hot ? 'pk-warm' : '');
  chip('＋ 记一家店', false, () => storeSheet());
  view.appendChild(bar);
  const pl = document.createElement('div'); pl.className = 'pk-pool';
  const nW = pool.filter(o => o.want).length, nB = pool.length - nW;   /* v3.3.5 */
  pl.textContent = pool.length ? ('从你的 ' + [nB ? nB + ' 家宝藏' : '', nW ? nW + ' 家想吃' : ''].filter(Boolean).join('、') + '里抽' + (avoidN ? ' · 避雷的 ' + avoidN + ' 家永远不会出现' : ''))
    : '阿饱：还没找到可抽的店，记一家宝藏店或想吃的试试。';
  view.appendChild(pl);
  if (!pool.length){
    const em = document.createElement('div'); em.className = 'empty-hint'; em.style.textAlign = 'center'; em.style.padding = '26px 6px';
    em.innerHTML = jjImg('ask', 72) + '<div style="margin-top:10px;line-height:1.8">吃到宝藏店，写一句「在「店名」吃了…宝藏 / 会回购」<br>想去的写「想去吃「店名」」<br>或者点上面「＋ 记一家店」<br>宝藏和想吃进卡池，避雷的永远不会出现'
      + (f.city ? '<br><span style="color:var(--ink-faint)">（现在只看' + vEsc(f.city) + '，点 📍 可以换成不限城市）</span>' : '') + '</div>';
    view.appendChild(em); return;
  }
  const o = f.cur ? (pool.find(x => x.name === f.cur) || null) : null;   /* v3.3.5 想吃的店不在熟店簿里 */
  const deck = document.createElement('div'); deck.className = 'pk-deck';
  deck.innerHTML = '<div class="pk-back b1"></div><div class="pk-back b2"></div>'
    + (o ? pickCardHTML(o) : '<div class="pk-cover">' + jjImg('ask', 88) + '<div class="pk-q">今天吃什么？</div><div class="pk-hint">' + pool.length + ' 张店卡 · 点一下翻一张</div></div>');
  view.appendChild(deck);
  if (!o){ deck.onclick = () => { pickDraw(); render(); }; }
  const acts = document.createElement('div'); acts.className = 'pk-acts';
  if (o){
    acts.innerHTML = '<button class="pk-go" id="pkGo"' + (f.went === o.name ? ' disabled' : '') + '>' + (f.went === o.name ? '✓ 已放进今天的待办' : '就它了') + '</button>'
      + '<button class="pk-re" id="pkRe">↻ 换一张</button>';
  } else acts.innerHTML = '<button class="pk-go" id="pkDraw" style="flex:1">🎲 抽一张</button>';
  view.appendChild(acts);
  if ($('#pkDraw')) $('#pkDraw').onclick = () => { pickDraw(); render(); };
  if ($('#pkRe')) $('#pkRe').onclick = () => { pickDraw(); render(); };
  if ($('#pkGo') && f.went !== o.name) $('#pkGo').onclick = () => pickGo(o);
  const nt = document.createElement('div'); nt.className = 'pk-note';
  nt.textContent = !o ? '宝藏和想吃都会出 · 理由全是你自己写过的话'
    : f.went === o.name ? '吃完点 ✓，啾啾问一句怎么样，点一下就记好了'
    : (f.n >= 3 && f.first && f.first !== o.name) ? ('抽了 ' + f.n + ' 张了 · 第一张「' + f.first + '」其实也不错？')
    : '点「就它了」，今天的待办里多一条，吃完点 ✓ 顺手说句好不好吃';
  view.appendChild(nt);
}
function pickGo(o){
  const h = new Date().getHours();
  const slot = h < 10 ? '早饭' : h < 15 ? '午饭' : h < 21 ? '晚饭' : '夜宵';
  P().plan.push({sym:'task', state:'open', text:slot + '：「' + o.name + '」', pick:o.name, _id:++uid});
  pickDefaults().went = o.name;
  scheduleSave(); toast('就它了！在今天的待办里 · 吃完点 ✓'); render();
}
/* 吃完点 ✓ → 一键评价，记成一条美食记录（也就算去过一次） */
function pickDone(t){
  dismissKB();
  const S = $('#qsheet');
  const nm = t.pick, o0 = storeIndex()[nm];   /* v3.3.5 想吃的第一次去：除了这条「就它了」，以前没去过，又写过想吃 */
  let wasWant = !o0 || o0.recs.every(r => r.e === t);
  if (wasWant){ wasWant = false; walk((k, e) => { if (!wasWant && e.text && e !== t){ const q = parseEntry(e); if (q.want && q.store === nm) wasWant = true; } }); }
  S.innerHTML = '<div class="gs-title">✓ ' + (wasWant ? '第一次吃' : '吃完了') + ' ·「' + vEsc(nm) + '」怎么样？</div>'
    + '<div class="gs-chips" id="pdChips">'
    + [['宝藏', '★ 宝藏'], ['一般般', '😐 一般'], ['避雷', '👎 避雷']].map(([w, lab]) => '<button class="gs-chip" data-w="' + w + '">' + lab + '</button>').join('')
    + '</div>'
    + '<input id="pdLine" class="qdate" placeholder="一句话（可不填）：点了什么、下次注意啥" style="margin-top:10px">'
    + '<div class="gs-new" style="margin-top:4px"><button class="gm-btn" id="pdSkip" style="flex:1;padding:10px">跳过</button>'
    + '<button class="gm-btn" id="pdSave" style="flex:1;padding:10px;background:var(--ink);color:#fff;border-color:var(--ink)">记下</button></div>';
  let sel = null;
  S.querySelectorAll('[data-w]').forEach(b => b.onclick = () => { sel = b.dataset.w; S.querySelectorAll('[data-w]').forEach(x => x.classList.toggle('on', x === b)); });
  $('#pdSkip').onclick = () => closeQSheet();
  $('#pdSave').onclick = () => {
    const line = $('#pdLine').value.trim();
    if (!sel && !line){ toast('点一个评价，或写一句再记'); return; }
    const fg = foodGroupName() || '美食';
    if (!extraGroups.includes(fg) && !foodGroupName()) extraGroups.push(fg);
    P().flow.push({sym:'event', text:'「' + nm + '」' + (sel ? ' ' + sel : '') + (line ? '：' + line : ''), groups:[fg], _id:++uid});
    scheduleSave(); closeQSheet(); toast(sel === '避雷' ? '记下了 · 以后不会再抽到它' : wasWant ? '记下了 · 从想吃挪到去过了' : '记下了 · 去过次数 +1');
  };
  S.classList.add('on'); $('#mask').classList.add('on'); placeToolbar();
}

/* ---- 记一家店 ---- */
function foodPrice(e){
  return typeof e.foodPerPerson === 'number' && Number.isFinite(e.foodPerPerson) && e.foodPerPerson >= 0 ? e.foodPerPerson : null;
}
function foodPriceLabel(e){const n=foodPrice(e); return n === null ? '' : '人均 ¥' + n;}
function foodReadPrice(input){
  const raw=input.value.trim();
  if (!raw) return null;
  if (!/^\d+(?:\.\d{1,2})?$/.test(raw) || !Number.isFinite(Number(raw))){toast('人均填 0 或正数，最多两位小数');input.focus();return false;}
  return Number(raw);
}
function renderFoodOverview(){
  const g=cur.g, box=document.createElement('section'); box.className='food-overview';
  box.innerHTML='<div class="food-actions"><button class="chip on" id="foodAdd">＋ 记美食</button><button class="chip" id="foodPick">🎲 今天吃什么</button></div>'
    +'<div class="food-menu"><div class="food-heading"><h2>我的店单</h2><button class="food-textbtn" id="foodMap">美食地图 ↗</button></div><div class="food-filters" role="group" aria-label="店单筛选"></div><div id="foodStoreList"></div>'
    +'<details class="food-more"><summary>更多</summary><div class="rp-tabs"><button class="chip" id="foodShare">分享店单</button><button class="chip" id="foodHelp">怎么记</button>'+(SET.mods.mealLog===true?'<button class="chip" id="foodMeals">三餐记录</button>':'')+'</div></details></div>';
  box.querySelector('#foodAdd').onclick=()=>storeSheet();
  box.querySelector('#foodPick').onclick=()=>{cur={name:'food',tab:'pick'};render();};
  box.querySelector('#foodMap').onclick=()=>openFoodMap(g);
  box.querySelector('#foodShare').onclick=()=>openShare(statsPayload(g,'food',tplStats('food',tplRows(g,null)),'all'));
  box.querySelector('#foodHelp').onclick=()=>openHowSheet('food');
  const meal=box.querySelector('#foodMeals'); if(meal)meal.onclick=()=>{cur={name:'food',tab:'meal'};render();};
  // Same store definitions as the map and card pool; never filter the original record stream.
  const belongs=o=>o.recs.some(r=>(r.e.groups||[]).includes(g));
  const visited=Object.values(storeIndex()).filter(belongs), wanted=Object.values(wantIndex()).filter(belongs);
  const lists={been:visited,bao:visited.filter(o=>o.gold),lei:visited.filter(o=>o.avoid),want:wanted};
  if(!lists[cur.foodFilter])cur.foodFilter='been';
  const list=box.querySelector('#foodStoreList'), filters=box.querySelector('.food-filters');
  [['been','去过'],['bao','宝藏'],['lei','避雷'],['want','想吃']].forEach(([key,label])=>{
    const b=document.createElement('button'); b.className='food-filter'+(cur.foodFilter===key?' on':'');b.dataset.foodFilter=key;b.setAttribute('aria-pressed',String(cur.foodFilter===key));
    b.innerHTML=label+'<small>'+lists[key].length+'</small>';
    b.onclick=()=>{cur.foodFilter=key;cur.foodExpanded=false;navFromBack=true;render();};filters.appendChild(b);
  });
  const items=lists[cur.foodFilter].slice().sort((a,b)=>parseKey(b.last)-parseKey(a.last));
  if(!items.length){const hint=document.createElement('div');hint.className='empty-hint';hint.textContent={been:'吃过的店会记在这里。',bao:'喜欢的店，记一句「宝藏」。',lei:'不想再去的店，记一句「避雷」。',want:'想尝的新店，先记在这里。'}[cur.foodFilter];list.appendChild(hint);}
  items.slice(0,cur.foodExpanded?items.length:5).forEach(o=>{
    const row=document.createElement('button');row.className='food-store';
    const priced=o.recs.find(r=>foodPrice(r.e)!==null);
    const tier=o.want?'want':o.gold?'bao':o.avoid?'lei':'been';row.dataset.tier=tier;
    const meta=[o.city,o.want?(fmtKey(o.since)+' 收的'):('去过 '+o.cnt+' 天')].filter(Boolean).join(' · ');
    row.innerHTML='<span class="food-store-top"><b>'+vEsc(o.name)+'</b><span class="food-stamp">'+({want:'想吃',bao:'宝藏',lei:'避雷',been:'吃过'}[tier])+'</span></span><small><span>'+vEsc(meta)+'</span>'+(priced?'<span class="food-store-price">'+vEsc(foodPriceLabel(priced.e))+'</span>':'')+'</small>';
    row.onclick=()=>openTileSheet(vEsc(o.name),o.recs.map(r=>({nm:vEsc(r.e.text),sub:vEsc(fmtKey(r.k)+(foodPriceLabel(r.e)?' · '+foodPriceLabel(r.e):'')),d:r.k,id:r.e._id})));
    list.appendChild(row);
  });
  if(items.length>5){const more=document.createElement('button');more.className='food-textbtn';more.textContent=cur.foodExpanded?'收起店单':'展开其余 '+(items.length-5)+' 家';more.onclick=()=>{cur.foodExpanded=!cur.foodExpanded;navFromBack=true;render();};list.appendChild(more);}
  view.appendChild(box);
}
function storeSheet(prefill){
  const S=$('#gsheet'), iso=k=>k.split('.').map((n,i)=>i?String(n).padStart(2,'0'):n).join('-');
  S.innerHTML='<div class="gs-title">记美食</div><label class="ss-f"><span>店名</span><input id="ssName" placeholder="必填" value="'+escAttr(prefill||'')+'"></label>'
    +'<div class="gs-chips" id="ssV" style="margin:12px 0">'+[['宝藏','宝藏'],['吃过','吃过'],['避雷','避雷'],['想吃','想吃']].map(([v,t])=>'<button class="gs-chip'+(v==='吃过'?' on':'')+'" data-w="'+v+'">'+t+'</button>').join('')+'</div>'
    +'<label class="ss-f"><span>人均 ¥</span><input id="ssPerPerson" inputmode="decimal" placeholder="参考价，可不填"></label><div class="food-price-help">供下次选店参考，不计入账房。</div>'
    +'<label class="food-note" for="ssLine">一句话</label><textarea class="vt-in" id="ssLine" rows="2" placeholder="想点什么、喜欢哪道菜……可不填"></textarea>'
    +'<details class="food-form-more"><summary>补充城市、日期、外卖</summary><label class="ss-f"><span>城市</span><input id="ssCity" placeholder="可不填"></label><label class="ss-f"><span>日期</span><input id="ssDate" type="date" max="'+iso(TODAY)+'" value="'+iso(TODAY)+'"></label><div class="gs-chips" style="margin-top:10px"><button class="gs-chip" id="ssDel" aria-pressed="false">外卖</button></div></details><button class="gs-done" id="ssSave">记下</button>';
  let choice='吃过', delivery=false;
  S.querySelectorAll('#ssV [data-w]').forEach(b=>b.onclick=()=>{choice=b.dataset.w;S.querySelectorAll('#ssV [data-w]').forEach(x=>x.classList.toggle('on',x===b));});
  $('#ssDel').onclick=()=>{delivery=!delivery;$('#ssDel').classList.toggle('on',delivery);$('#ssDel').setAttribute('aria-pressed',String(delivery));};
  $('#ssSave').onclick=()=>{
    const name=$('#ssName').value.trim().replace(/[「」“”"『』]/g,'');if(!name){toast('先写店名');$('#ssName').focus();return;}
    const price=foodReadPrice($('#ssPerPerson'));if(price===false)return;
    const date=$('#ssDate').value;if(!date||date>iso(TODAY)){toast('选今天或之前的日期');S.querySelector('details').open=true;return;}
    const key=date.split('-').map(Number).join('.'), note=$('#ssLine').value.trim(),city=$('#ssCity').value.trim();
    const text='「'+name+'」 '+choice+(note?'：'+note:'')+(city?' · '+city:'')+(delivery?' · 外卖':'');
    const g=cur.g&&tplOf(cur.g)==='food'?cur.g:(foodGroupName()||'美食');
    snapshot('记美食');if(!foodGroupName()&&!extraGroups.includes(g))extraGroups.push(g);
    const e={sym:'event',text,groups:[g],_id:++uid,foodChoice:{value:choice,text}};
    if(price!==null)e.foodPerPerson=price;
    if(!PAGES[key])PAGES[key]={plan:[],flow:[]};PAGES[key].flow.push(e);
    scheduleSave();closeSheet();render();toast(choice==='想吃'?'记下了 · 收进想吃，吃什么里能抽到它':'记下了');
  };
  S.classList.add('on');$('#mask').classList.add('on');
}
function foodPriceSheet(e){
  const S=$('#gsheet'),price=foodPrice(e);
  S.innerHTML='<div class="gs-title">人均参考 · '+vEsc(parseEntry(e).store||'这条记录')+'</div><label class="ss-f"><span>人均 ¥</span><input id="foodPriceEdit" inputmode="decimal" placeholder="留空可清除" value="'+(price===null?'':price)+'"></label><div class="food-price-help">只修改这条记录的人均参考，不改动实际支出。</div><button class="gs-done" id="foodPriceSave">保存</button>';
  $('#foodPriceSave').onclick=()=>{const n=foodReadPrice($('#foodPriceEdit'));if(n===false)return;snapshot('修改人均');if(n===null)delete e.foodPerPerson;else e.foodPerPerson=n;scheduleSave();closeSheet();render();toast(n===null?'已清除人均参考':'人均参考已更新');};
  S.classList.add('on');$('#mask').classList.add('on');
}


/* ---- 避雷红签：又写到避雷过的店时提醒一句 ---- */
function foodWarn(e){
  if (!e.text) return null;
  const p = parseEntry(e); if (!p.store) return null;
  const o = storeIndex()[p.store]; if (!o || !o.avoid || !o.op) return null;
  if (o.op.e === e || (p.verdict && V_NEG.includes(p.verdict))) return null;   /* 避雷原话那一条自己不提醒 */
  const q = storeQuote(o);
  return {o, txt:'⚠ 避雷 · ' + fmtKey(o.op.k) + ' 你说：' + clipT(q ? q.text : (o.op.p.verdict || '避雷'), 16)};
}

/* ---- 一段话拆条（配合语音输入） ---- */
function splitSentences(t){
  const out = []; let buf = '';
  for (const ch of String(t || '')){
    buf += ch;
    if ('。！？!?\n'.includes(ch)){ const s = buf.replace(/[。\n]+$/, '').trim(); if (s) out.push(s); buf = ''; }
  }
  if (buf.trim()) out.push(buf.replace(/[。\n]+$/, '').trim());
  return out.filter(s => s.replace(/[！？!?\s]/g, '').length >= 3);
}
function splitEntry(e){
  const parts = splitSentences(e.text);
  if (parts.length < 2) return;
  const loc = findEntry(e); if (!loc) return;
  snapshot('拆条');
  e.text = parts[0]; delete e.noSplit; commit(e);
  const news = parts.slice(1).map(s => {
    const ne = {sym:e.sym, text:s, _id:++uid};
    if (e.sym === 'task') ne.state = 'open';
    if (e.defSym) ne.defSym = true;
    if (e.groups && e.groups.length) ne.groups = [...e.groups];
    commit(ne); return ne;
  });
  loc.list.splice(loc.idx + 1, 0, ...news);
  scheduleSave(); render(); toast('已拆成 ' + parts.length + ' 条 · 可撤回');
}

/* ---- 早安卡饭点入口 ---- */

/* ============ v2.30 说一段 · 我来分拣（整屏：说 → 分拣确认 → 放好） ============ */
const VO_TASK_RE = /(要|得去|记得|别忘了|准备|打算|计划|约了|需要|该去|待会|回头)/;
const VO_LEAD_RE = /^(然后|另外|还有|对了|那个|嗯|呃)[，,\s]*/;
const VO_BREAK_RE = /^(然后|另外|还有|对了|今天|明天|后天|大后天|下周|下个月|晚上|中午|下午|早上|上午|昨天|昨晚|前天)/;
function voSplit(t){
  const out = [];
  splitSentences(t).forEach(sn => {
    /* 听写有时只在长停顿打句号：逗号后面跟着「晚上/后天/然后…」的，也拆开 */
    const cs = sn.split(/[，,]/); let buf = '';
    cs.forEach(c => {
      const cc = c.trim(); if (!cc) return;
      if (buf && (VO_BREAK_RE.test(cc) || /^(?:[01]?\d|2[0-3])[:：][0-5]\d/.test(cc) && journalTimedLine(buf))){ out.push(buf); buf = cc; }
      else buf = buf ? buf + '，' + cc : cc;
    });
    if (buf) out.push(buf);
  });
  return out.map(s => s.replace(VO_LEAD_RE, '').replace(/[。，,\s]+$/, '').trim()).filter(s => s.replace(/[！？!?\s]/g, '').length >= 2);
}
function voRoute(t){
  if (/^(昨天|昨晚|昨儿)/.test(t)) return {dest:'past', day:addDaysK(TODAY, -1)};
  if (/^前天/.test(t)) return {dest:'past', day:addDaysK(TODAY, -2)};
  const dd = detectDue(t);
  if (dd && parseKey(dd.key) > parseKey(TODAY)) return {dest:'day', day:dd.key};
  if (VO_TASK_RE.test(t) && !/了(?:[，,。！!？?]|$)/.test(t)) return {dest:'plan'};
  return {dest:'flow'};
}
function voRelDay(k){
  return k === TOMORROW ? '明天' : k === addDaysK(TODAY, 2) ? '后天' : k === addDaysK(TODAY, 3) ? '大后天'
    : k === addDaysK(TODAY, -1) ? '昨天' : k === addDaysK(TODAY, -2) ? '前天' : '';
}
function voGroupLabel(it){
  if (it.dest === 'flow') return it.th ? '今天的随想' : '今天的日常';
  if (it.dest === 'plan') return '今天的待办';
  const r = voRelDay(it.day);
  return (r ? r + ' ' : '') + fmtKey(it.day) + (it.dest === 'past' ? (it.th ? ' · 随想' : ' · 日常') : ' · 待办');
}
/* 放到别的日子时，去掉「后天 / 昨天」这类词：到了那天读着才对 */
const VO_DAY_PATS = [/\d{1,2}\.\d{1,2}号?/, /大后天/, /后天/, /明天/, /下+周[一二三四五六日天]/, /(?:这周|本周|周)[一二三四五六日天]/, /下个?月\d{1,2}[号日]/, /\d{1,2}月\d{1,2}[号日]/, /下个?月/];
function voStripDay(t, it){
  const tidy = s => s.replace(/^[，,、\s]+/, '').replace(/([，,])\s*[，,]/g, '$1').replace(/\s{2,}/g, ' ').trim();
  if (it.day){   /* v3.3 说到的那天就是放的那天：去掉「上周五」「11月3日」「28号」 */
    const d = it.dest === 'past' ? chatPastDay(t) : chatBareDay(t);
    if (d && d.key === it.day){ const r = chatCutDay(t, d); if (r !== t) return {text:r, cut:d.cut}; }
  }
  if (it.dest === 'past'){
    const m = t.match(/^(昨天|昨儿|前天)(?:的)?/);
    if (m && addDaysK(TODAY, m[1] === '前天' ? -2 : -1) === it.day){ const r = tidy(t.slice(m[0].length)); if (r.length >= 2) return {text:r, cut:m[1]}; }
    if (/^昨晚/.test(t) && it.day === addDaysK(TODAY, -1)) return {text:'晚上' + t.slice(2), cut:'昨晚'};
  }
  if (it.dest === 'day'){
    for (const re of VO_DAY_PATS){
      const m = t.match(re); if (!m) continue;
      const dd = detectDue(m[0]); if (!dd || dd.key !== it.day) continue;
      const r = tidy(t.slice(0, m.index) + t.slice(m.index + m[0].length));
      if (r.length >= 2) return {text:r, cut:m[0]};
    }
  }
  return {text:t, cut:null};
}
function voBuild(draft, prev){   /* v3.2 跟「发给啾啾」用同一套认法：待办 / 日常 / 随想 */
  return chatItems(draft, true).map(ci => (prev || []).find(x => x.src === ci.src) || chatToVo(ci));
}
function voSetDest(it, dest, day, asTh){   /* asTh：放成随想（只对今天 / 别的日子的日常有效） */
  if (asTh && (dest === 'flow' || dest === 'past')) it.th = it.th || thGuess(it.fixed || it.text) || 'dash'; else delete it.th;
  it.dest = dest; if (day) it.day = day; else delete it.day;
  if (!it.edited){ const sd = voStripDay(it.fixed, it); it.text = sd.text; it.cut = sd.cut; }
}
function voMeta(it){
  const t = it.text || '', p = parseLine(t), chips = [], notes = [];
  (it.fixes || []).forEach((f, fi) => { if (t.includes(f.to)) chips.push({t:'听写的「' + f.from + '」→ ' + f.to + ' ↺', cls:'fix', fi}); });
  if (p.store){
    const o = storeIndex()[p.store];
    const visit = it.dest === 'flow' || it.dest === 'past', dk = it.dest === 'past' ? it.day : TODAY;
    let lab;
    if (visit){ const n = o ? o.cnt + (o.days.has(dk) ? 0 : 1) : 1; lab = n === 1 ? '第一次' : '第 ' + n + ' 次'; }
    else lab = o ? '去过 ' + o.cnt + ' 次' : '还没去过';
    chips.push({t:'🍚 ' + p.store + ' · ' + lab, cls:'food'});
    if (!t.includes(p.store)){
      const d = DD();
      const said = ([...storeCores()].find(([c, st]) => st === p.store && t.includes(c)) || [])[0]
        || (Object.entries(d.same).concat(Object.entries(d.fix)).find(([v, c]) => t.includes(v) && canonStore(c) === p.store) || [])[0];
      if (said) notes.push('「' + said + '」认成你' + (o ? ' ' + fmtKey(o.last) + ' ' : '') + '记过的「' + p.store + '」');
    }
  }
  if (p.verdict) chips.push({t:(p.vNeg ? '👎 ' : '') + p.verdict});
  const ws = (p.withs || []).filter(w => w !== '独自');
  if (ws.length) chips.push({t:'和 ' + ws.slice(0, 4).join('、')});
  parseCompanionsRaw(t).forEach(r => { const c = canonPerson(r); if (c !== r && !(it.fixes || []).some(f => f.from === r)) notes.push('「' + r + '」就是你写的「' + c + '」'); });
  if ((p.prices || []).length){
    const k = expKindOf({sym:'event', text:t}, p), sum = amtSum(p.prices);
    chips.push({t:'💰 ' + (k ? expLabel(k) + ' ' : '') + '¥' + sum});
  }
  if (p.title) chips.push({t:'🎬 《' + p.title + '》' + (p.score != null ? ' ' + p.score + '分' : '')});
  const tm = detectTime(t); if (tm) chips.push({t:'⏰ ' + tm});
  if (it.cut && !it.edited) notes.push('原话「' + it.fixed + '」· 放到那天时去掉「' + it.cut + '」');
  return {chips, notes};
}
function voMetaHTML(it, i){
  const m = voMeta(it);
  return (m.chips.length ? '<div class="vo-meta">' + m.chips.map(c => '<span class="badge' + (c.cls === 'fix' ? ' acc vo-fx' : c.cls === 'food' ? ' vo-food' : '') + '"'
      + (c.fi != null ? ' data-fi="' + c.fi + '" data-i="' + i + '"' : '') + '>' + vEsc(c.t) + '</span>').join('') + '</div>' : '')
    + (m.notes.length ? '<div class="vo-note">' + m.notes.map(vEsc).join(' · ') + '</div>' : '');
}
function voPickerHTML(it, i){
  const opts = [['flow', '', '今天的日常'], ['flow', '', '今天的随想', 1], ['plan', '', '今天的待办'], ['day', TOMORROW, '明天的待办'], ['day', addDaysK(TODAY, 2), '后天的待办'], ['past', addDaysK(TODAY, -1), '昨天的日常']];   /* v3.2 多一个「今天的随想」 */
  if (it.day && !opts.some(o => o[1] === it.day)) opts.push([it.dest, it.day, fmtKey(it.day) + (it.dest === 'past' ? (it.th ? ' 随想' : ' 日常') : ' 待办'), it.th ? 1 : 0]);
  const on = o => it.dest === o[0] && (it.day || '') === o[1] && !!o[3] === !!it.th;
  return '<div class="vo-pick">' + opts.map(o => '<button class="gs-chip' + (on(o) ? ' on' : '') + '" data-d="' + o[0] + '" data-k="' + o[1] + '"' + (o[3] ? ' data-th="1"' : '') + '>' + o[2] + '</button>').join('')
    + '<label class="gs-chip vo-date">📅 选日子<input type="date" data-i="' + i + '"></label></div>';
}
function voItemHTML(it, i){
  return '<div class="vo-it' + (it.off ? ' off' : '') + '" data-i="' + i + '">'
    + '<div class="vo-r1"><textarea class="vo-t" rows="1" data-i="' + i + '">' + vEsc(it.text) + '</textarea>'
    + '<button class="vo-op vo-mv" data-i="' + i + '" aria-label="换地方">⇄</button>'
    + '<button class="vo-op vo-x" data-i="' + i + '" aria-label="不要">' + (it.off ? '↺' : '✕') + '</button></div>'
    + voMetaHTML(it, i) + (VO.open === i ? voPickerHTML(it, i) : '') + '</div>';
}
let VO = null;
function openVoice(opts){
  VO = {items:null, prev:null, open:null, onDone:(opts || {}).onDone || null};
  $('#voice').classList.add('on');
  voPaint();
  const ta = $('#voTxt');
  if (ta){ try{ ta.focus(); const n = ta.value.length; ta.setSelectionRange(n, n); }catch(_){ } }
}
function closeVoice(){ const V = $('#voice'); V.classList.remove('on'); V.innerHTML = ''; VO = null; }
function voRepaint(){ const L = $('#voList'), st = L ? L.scrollTop : 0; voPaint(); const L2 = $('#voList'); if (L2) L2.scrollTop = st; }
function voBindFix(root){
  root.querySelectorAll('.vo-fx').forEach(b => b.onclick = () => {
    const it = VO.items[+b.dataset.i], f = (it.fixes || [])[+b.dataset.fi]; if (!f) return;
    const back = s => { const k = s.indexOf(f.to); return k >= 0 ? s.slice(0, k) + f.from + s.slice(k + f.to.length) : s; };
    it.text = back(it.text); it.fixed = back(it.fixed);
    it.fixes = it.fixes.filter(x => x !== f);
    const d = DD(); d.no[f.from + '>' + f.to] = 1; if (d.fix[f.from] === f.to) delete d.fix[f.from];
    dictChanged(); voRepaint();
    toast('改回「' + f.from + '」· 以后不这样改');
  });
}
function voPaint(){
  const V = $('#voice'); if (!VO) return;
  if (!VO.items){
    const dr = SET.voDraft || '';
    V.innerHTML = '<div class="vo-hd"><button class="vo-hl" id="voCancel">取消</button><div class="vo-ht">一口气说完</div><button class="vo-hr" id="voGo">分拣 ›</button></div>'
      + '<div class="vo-body"><textarea class="vo-in" id="voTxt" placeholder="比如：中午和不二去吃了陈先进，双皮奶还是好吃。打车花了45。后天去宜家看沙发。记得给妈打电话。"></textarea>'
      + '<div class="vo-tip">按键盘右下角的 <b>🎤</b> 说，说完点右上角「分拣」。打字也行。<br>想到哪说到哪，不用分条，也不用管放哪。'
      + (dr ? ' <button class="vo-clr" id="voClr">清空重说</button>' : '') + '</div></div>';
    const ta = $('#voTxt'); ta.value = dr;
    const fit = () => { ta.style.height = 'auto'; ta.style.height = Math.max(200, ta.scrollHeight) + 'px'; };
    fit();
    ta.oninput = () => { SET.voDraft = ta.value; fit(); scheduleSave(); };
    if ($('#voClr')) $('#voClr').onclick = () => { ta.value = ''; SET.voDraft = ''; VO.prev = null; scheduleSave(); fit(); $('#voClr').remove(); try{ ta.focus(); }catch(_){ } };
    $('#voCancel').onclick = () => { SET.voDraft = ta.value; scheduleSave(); closeVoice(); };
    $('#voGo').onclick = () => {
      if (!voSplit(ta.value).length){ toast('还没说话呢 · 按键盘右下角的 🎤'); return; }
      SET.voDraft = ta.value; scheduleSave();
      try{ ta.blur(); }catch(_){ }
      VO.items = voBuild(ta.value, VO.prev); VO.open = null; voPaint();
    };
    return;
  }
  const items = VO.items, groups = [], gmap = {};
  items.forEach((it, i) => { const key = it.dest + ':' + (it.day || '') + (it.th ? ':th' : '');
    if (!gmap[key]){ gmap[key] = {it0:it, list:[]}; groups.push(gmap[key]); } gmap[key].list.push(i); });
  const ord = g => { const it = g.it0; return it.dest === 'flow' ? (it.th ? 0.5 : 0) : it.dest === 'plan' ? 1 : it.dest === 'day' ? 2 + parseKey(it.day) / 1e14 : 5 - parseKey(it.day) / 1e14 + (it.th ? 1e-6 : 0); };
  groups.sort((a, b) => ord(a) - ord(b));
  const live = items.filter(x => !x.off && x.text.trim()).length;
  V.innerHTML = '<div class="vo-hd"><button class="vo-hl" id="voCancel">取消</button><div class="vo-ht"><img class="vo-jj" src="' + JJ.sort + '" alt="">我这样理的，你看看<div class="vo-hs">点字能改 · ⇄ 换地方 · ✕ 不要</div></div><div class="vo-hr"></div></div>'
    + '<div class="vo-body vo-list" id="voList">' + groups.map(g => '<div class="vo-gh"><span class="vo-dest d-' + (g.it0.th ? 'th' : g.it0.dest) + '">' + vEsc(voGroupLabel(g.it0)) + '</span>'
      + '<span class="vo-gn">' + g.list.length + ' 条</span></div>' + g.list.map(i => voItemHTML(items[i], i)).join('')).join('') + '</div>'
    + '<div class="vo-bot"><button class="vo-b1" id="voBack">‹ 接着说</button><button class="vo-b2" id="voSave">确认，放进去（' + live + ' 条）</button></div>';
  V.querySelectorAll('.vo-t').forEach(ta => {
    const i = +ta.dataset.i, it = items[i];
    const fit = () => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; };
    fit();
    ta.onfocus = () => { ta._t0 = it.text; };
    ta.oninput = () => { it.text = ta.value; it.edited = true; fit(); };
    ta.onblur = () => {
      if (ta._t0 == null || ta._t0 === it.text) return;
      const L = dictLearnEdit(ta._t0, it.text); ta._t0 = it.text;
      if (L && L.from) toast('记住了：「' + L.from + '」就是「' + L.to + '」，以后自动改');
      else if (L && L.no) toast('好，以后不把「' + L.no + '」改成「' + L.to + '」');
      const card = ta.closest('.vo-it');
      if (card){ card.querySelectorAll('.vo-meta,.vo-note').forEach(x => x.remove()); card.querySelector('.vo-r1').insertAdjacentHTML('afterend', voMetaHTML(it, i)); voBindFix(card); }
    };
  });
  V.querySelectorAll('.vo-mv').forEach(b => b.onclick = () => { const i = +b.dataset.i; VO.open = VO.open === i ? null : i; voRepaint(); });
  V.querySelectorAll('.vo-x').forEach(b => b.onclick = () => { const it = items[+b.dataset.i]; it.off = !it.off; voRepaint(); });
  V.querySelectorAll('.vo-pick [data-d]').forEach(b => b.onclick = () => {
    voSetDest(items[VO.open], b.dataset.d, b.dataset.k || null, b.dataset.th === '1'); VO.open = null; voRepaint(); });
  V.querySelectorAll('.vo-pick input[type=date]').forEach(inp => inp.onchange = () => {
    if (!inp.value) return;
    const a = inp.value.split('-').map(Number), k = a[0] + '.' + a[1] + '.' + a[2], it = items[+inp.dataset.i];
    if (k === TODAY) voSetDest(it, (it.dest === 'past' || it.dest === 'flow') ? 'flow' : 'plan', null, !!it.th);
    else voSetDest(it, (parseKey(k) < parseKey(TODAY) || it.th) ? 'past' : 'day', k, !!it.th);   /* 随想换日子还是随想 */
    VO.open = null; voRepaint();
  });
  voBindFix(V);
  $('#voCancel').onclick = () => closeVoice();
  $('#voBack').onclick = () => { VO.prev = VO.items; VO.items = null; VO.open = null; voPaint(); const ta = $('#voTxt'); if (ta){ try{ ta.focus(); }catch(_){ } } };
  $('#voSave').onclick = () => {
    if (!items.some(x => !x.off && x.text.trim())){ toast('一条都没留 · 点 ↺ 恢复，或者接着说'); return; }
    const sum = voPlace(items);
    SET.voDraft = ''; scheduleSave();
    const cb = VO.onDone; closeVoice();
    if (cb) cb(sum); else render();
    toast('放好了 · ' + sum);
  };
}
function movieGroupName(){
  let mg = (extraGroups || []).find(g => tplOf(g) === 'movie') || null;
  if (!mg) walk((d, e) => { (e.groups || []).forEach(g => { if (!mg && tplOf(g) === 'movie') mg = g; }); });
  return mg;
}
function voPlace(items){   /* v3.2 跟发给啾啾放同一套：挂房子、钟点、听写纠正、放到别的日子留痕都一样 */
  const outs = chatPlace(items.map(voToChat), TODAY, '说一段');
  const cnt = {}, order = [];
  outs.forEach(o => { const lab = o.day === TODAY ? '今天' : (voRelDay(o.day) || fmtKey(o.day)); if (!cnt[lab]){ cnt[lab] = 0; order.push(lab); } cnt[lab]++; });
  return order.map(l => l + ' ' + cnt[l]).join(' · ');
}
/* 说一段时放到别的日子的：今天这页留一行小字，点一下跳过去 */
function voOutNode(list){
  const rows = [];
  (list || []).forEach(o => { let hit = null; walkPage(o.d, e => { if (e._id === o.id) hit = e; }); if (hit && hit.text) rows.push({o, e:hit}); });
  if (!rows.length) return null;
  const box = document.createElement('div'); box.className = 'vo-out';
  box.innerHTML = '<div class="vo-oh">↗ 放到别的日子的</div>';
  rows.forEach(({o, e}) => {
    const r = document.createElement('div'); r.className = 'vo-oi';
    r.innerHTML = '<b>' + fmtKey(o.d) + '</b> · ' + vEsc(e.text) + ' ›';
    r.onclick = () => jumpToEntry(o.d, o.id);
    box.appendChild(r);
  });
  return box;
}
/* 条目上的纠错小标：当天和第二天显示，点 ↺ 改回 */
function entryFixes(e){
  if (!e.fix || !e.fix.length || !e.fixAt || !e.text) return [];
  if ((parseKey(TODAY) - parseKey(e.fixAt)) / 86400000 > 1) return [];
  return e.fix.filter(f => e.text.includes(f.to));
}
function voUndoFix(e, f){
  const i = (e.text || '').indexOf(f.to); if (i < 0) return;
  try{ snapshot('撤回纠错'); }catch(_){ }
  e.text = e.text.slice(0, i) + f.from + e.text.slice(i + f.to.length);
  e.fix = (e.fix || []).filter(x => !(x.from === f.from && x.to === f.to)); if (!e.fix.length){ delete e.fix; delete e.fixAt; }
  const d = DD(); d.no[f.from + '>' + f.to] = 1; if (d.fix[f.from] === f.to) delete d.fix[f.from];
  dictChanged(); render();
  toast('已改回「' + f.from + '」· 以后不这样改');
}
/* ============ v3.2 发给啾啾：底部输入栏 · 啾啾回话 · 一句拆成几条；随想的小图标；记事亭的随想架 ============ */
const TH_ICONS = [['idea', '💡', '灵感'], ['learn', '📖', '学到'], ['ask', '❓', '疑问'], ['bang', '❗', '重点'], ['mood', '🌤', '心情']];
const TH_RE = {
  ask:/[？?]\s*$|^(为什么|为啥|怎么办|怎么才能|怎么会|怎么能|凭什么|难道|要不要|是不是|能不能|该不该|到底)|(吗|呢)\s*$/,
  learn:/原来|学到|学会了|才知道|涨知识|今天明白/,
  idea:/可以试试|可以去|可以做|也许可以|不如去|要是能|如果能|想(去|学|做|试|买|养|写|搞|换|找|报|开|辞|搬)|点子|灵感|主意|突然想到|有个想法|有个念头/,
  mood:/心累|好累|有点累|太累|累了|累死|好烦|有点烦|烦死|开心|难过|焦虑|郁闷|委屈|生气|高兴|快乐|伤心|失落|无聊|紧张|压力好?大|崩溃|emo|低落|平静|期待|兴奋|心情/,
  bang:/划重点|切记|重要的是|一定要记住|千万别|千万要/,
};
function isThought(e){ return !!e && (e.sym === 'note' || e.sym === 'ask' || e.sym === 'bang' || e.sym === 'mood') && !e.ledger && !e.meal && !e.nbId
  && !(e.sym === 'note' && !e.userSet && !e.ico && mealGlyphSlot(e)); }   /* 手写的「午饭吃了面」是日常，照旧 🍚；自己挪进随想的算随想 */
/* v3.3.2 开头点明了是经验、心得、知识、想法的，是随想（真实记录里没有一条待办、日常这样开头） */
const TH_LABEL = {
  learn:/^(?:一个|一条|一点|个|小|一些)?(?:经验|心得|冷知识|小知识|知识点?|教训|感悟|体会|道理|技巧|小技巧|干货|常识)(?:\s*[:：]|[，,]|是|就是)|(?:经验|心得|知识点?|冷知识|教训|感悟|体会)\s*[:：]/,
  idea:/^(?:一个|有个|突然有个|冒出一个|冒出个)?(?:想法|念头|脑洞|点子|主意)(?:\s*[:：]|[，,]|是|就是)|(?:想法|念头|脑洞)\s*[:：]/,
};
function thLabel(t){ t = String(t || '').trim(); return TH_LABEL.learn.test(t) ? 'learn' : TH_LABEL.idea.test(t) ? 'idea' : null; }
function thGuess(t){   /* 一句话像不像随想：疑问 / 学到 / 灵感 / 心情；都不像 → null */
  t = String(t || '').trim(); if (t.length < 2) return null;
  const lb = thLabel(t); if (lb) return lb;   /* v3.3.2 */
  if (TH_RE.ask.test(t)) return 'ask';
  if (TH_RE.learn.test(t)) return 'learn';
  if (TH_RE.idea.test(t)) return 'idea';
  if (t.length <= 20 && TH_RE.mood.test(t) && !Object.keys(EV_RE).some(k => EV_RE[k].test(t)) && thMoodOnly(t)) return 'mood';   /* 「跑完步好累」「和小林去爬了山，累但开心」是日常，「有点累」才是心情 */
  return null;
}
const TH_FILL = /今天|今晚|今早|此刻|现在|最近|有点儿?|有些|一点|挺|好|很|太|超级?|非常|特别|比较|真的?|但是?|可是|不过|还是?|又|就|也|都|了|啊|呀|吧|哈|啦|呢|的|感觉|觉得|心里|整个人/g;
function thMoodOnly(t){   /* 去掉心情词和语气词，剩下的没几个字，才是在说心情 */
  return t.replace(new RegExp(TH_RE.mood.source, 'g'), '').replace(TH_FILL, '').replace(/[，,。.！!～~、…\s]/g, '').length <= 3;
}
function thIconKey(e){
  if (e.ico === 'dash') return 'dash';
  if (e.ico && TH_ICONS.some(x => x[0] === e.ico)) return e.ico;
  if (e.sym === 'ask' || e.sym === 'bang' || e.sym === 'mood') return e.sym;
  const t = String(e.text || '');
  if (TH_RE.bang.test(t)) return 'bang';
  return thGuess(t) || 'dash';
}
function thIcon(e){ const k = thIconKey(e), d = TH_ICONS.find(x => x[0] === k); return d ? {k, i:d[1], n:d[2]} : {k:'dash', i:'', n:'随想'}; }
function dayOfEntry(e){ let hit = null; walk((k, x) => { if (!hit && x === e) hit = k; }); return hit; }

/* ---- 底部输入栏 ---- */
let CHAT = null;   /* 啾啾正在回的那一句：{mode:'one'|'many'|'done'|'tip', base, ...} */
function chatBase(){ return (cur.name === 'today' || cur.name === 'history') ? curDayKey() : null; }
function chatPlaceholder(){
  const h = new Date().getHours();
  return h >= 6 && h < 11 ? '发给啾啾… 今天有什么安排？'
    : (h >= 11 && h < 14) || (h >= 17 && h < 20) ? '发给啾啾… 吃了什么、花了多少？'
    : h >= 20 && h < 23 ? '发给啾啾… 今天有什么想记的？' : '发给啾啾… 想到什么就记下来';
}
function chatBarSync(){
  const B = $('#chatBar'); if (!B) return;
  const base = chatBase();
  B.classList.toggle('on', !!base);
  const inp = $('#chatIn');
  if (inp && base) inp.placeholder = base === TODAY ? chatPlaceholder() : '补记 ' + fmtKey(base) + '…';
  if (CHAT && CHAT.base !== base) chatReplyHide();
  const V = $('#view'); if (V) V.classList.toggle('th-picking', cur.name === 'notes' && TH_TAB === 'th' && !!TH_PICK);   /* 挑几条时底栏贴底 */
}
function chatFocus(){ const i = $('#chatIn'); if (i){ try{ i.focus(); }catch(_){ } } }
function chatGrow(){
  const i = $('#chatIn'); if (!i) return;
  i.style.height = '40px'; i.style.height = Math.min(120, Math.max(40, i.scrollHeight)) + 'px';
  $('#chatBar').classList.toggle('has', !!i.value.trim());
  placeToolbar();
}
/* 一句话 → 待办 / 日常 / 随想；rel：在今天的页，认「明天、昨天」放到那天
   用 Ar 11.5 导出的 141 条手帐（待办 78、日常 60、随想 3）定的规矩：手帐里一句短话多半是要做的事；
   打了分、说了好坏、花了钱、做完了（「了」）的是日常；像疑问、学到、灵感、心情的是随想 */
const CHAT_TASK_LEAD = /^(交|买|取|寄|还|订|约|预约|提交|发|打电话|去|找|准备|整理|写|改|问|联系|预定|续费|缴|报名|记得|别忘|完成|做|弄|搞|给\S{1,6}(打电话|发|买|寄|回|送))/;
const CHAT_DONE_RE = /入职|离职|定下来了|搞定|成功|失败|不顺利|顺利|不错|很差|一般般?|好吃|难吃|好看|难看|没意思|太棒/;
function chatKind(t, rel){
  if (/^(刚刚|刚才)(起床|出门|到家|到公司|吃完|喝了)|^刚到(家|公司|学校)/.test(t) && !/提醒|要做|待办/.test(t)) return {kind:'event',day:null};
  if(!/明天|后天|下周|下个?月|打算|准备|计划|想去|要去|提醒|通知/.test(t)&&/^(今天|昨天|前天)?(?:第一次|初次)?(?:和|陪|跟)/.test(t)&&(SET.people||[]).some(p=>personAliases(p).some(n=>t.includes(n))))return {kind:'event',day:rel?(chatPastDay(t)||{}).key:null};
  const r = rel ? voRoute(t) : {dest:(VO_TASK_RE.test(t) && !/了(?:[，,。！!？?]|$)/.test(t)) ? 'plan' : 'flow'};
  const routine = /每个?(?:周|星期|礼拜|天|日|月|年)/.test(t);   /* 「每周一开例会」是规律，不挪日子 */
  const pd = rel && !routine ? chatPastDay(t) : null;   /* v3.3 说到过去的哪天 */
  const same = pd && pd.strong && r.dest === 'day' && /月|\./.test(pd.cut);   /* 「11月3日」已经过了：不当明年的 */
  const fut = (routine || same) ? null : r.dest === 'day' ? r.day : (rel && !(pd && pd.strong) ? (chatBareDay(t) || {}).key || null : null);   /* 要做的事只说了「28号」也算 */
  if(/提醒我|通知我|设个?提醒/.test(t) && detectTime(t)) return {kind:'task',day:fut};
  const p = parseLine(t), lead = CHAT_TASK_LEAD.test(t);
  const rec = p.score != null || !!p.store || (p.prices || []).length > 0 || CHAT_DONE_RE.test(t)
    || (/《[^》]+》/.test(t) && /看|二刷|三刷|补|影院|电影|剧|读|翻完/.test(t.replace(/《[^》]*》/g, '')));
  const done = /了/.test(t.replace(/为了|了解|除了|罢了|了不起/g, '')) && !VO_TASK_RE.test(t);   /* 做完的事：「周会定了下个月的排期」 */
  const notYet = /还没|没来得及|忘了|别忘|还得|还要|得赶紧/.test(t);
  const past = (pd && !notYet && (rec || done || TH_RE.mood.test(t) || (pd.strong && !fut))) ? pd.key : null;   /* 记下的事放回那天；明说了过去、又没说以后的，也算 */
  const th = thGuess(t);
  if (th === 'mood') return {kind:'thought', ic:th, day:past};   /* 只在说心情：「心情不错」 */
  const lb = thLabel(t); if (lb) return {kind:'thought', ic:lb, day:past};   /* v3.3.2「一个经验：…」「心得：…」「一个想法：…」：说了好坏、带了钱也是随想 */
  if (rec && !lead) return {kind:'event', day:past};   /* 打了分、说了好坏、花了钱、看了哪部片：是记下的事 */
  if (th) return {kind:'thought', ic:th, day:past};   /* 「为什么周报总拖到周一」是随想，不是周一的待办 */
  if (TH_RE.mood.test(t) && !lead) return {kind:'event', day:past};   /* 带着心情说的事，是已经发生的：「跑完步好累」「考试没过，好难过」 */
  if (/交给|\bto\s?\S|To[A-Z一-龥]/.test(t)) return {kind:'task', day:fut};   /* 转交出去的 */
  if (!done && fut && !past) return {kind:'task', day:fut};
  if (!done && r.dest === 'plan' && !past) return {kind:'task', day:null};
  if (done || past) return {kind:'event', day:past};
  if (!routine && !notYet && !fut && journalElapsedLine(t,rel)) return {kind:'event', day:null};
  if (/痛|疼|不舒服|发烧|感冒|咳嗽|过敏|上火/.test(t) || /^(和|跟|与).{1,14}一起/.test(t)) return {kind:'event', day:null};
  if (t.length > 28 && !lead && !(detectTimeHM(t) || detectTimeCN(t))) return {kind:'event', day:null};   /* 一长段，多半是在记事 */
  return {kind:'task', day:null};   /* 手帐里一句短话，多半是要做的事 */
}
function chatItems(text, rel){
  if(friendCombinedRecord(text))return [{text,src:text,kind:{kind:'event',day:rel?(chatPastDay(text.split(/[，,]/)[0])||{}).key:null}}];
  return voSplit(String(text || '').replace(/[；;]/g, '。')).map(src => {   /* 分号也当一句 */
    const fx = dictFix(src), it = {src, fixed:fx.text, fixes:fx.fixes};
    it.kind = chatKind(fx.text, rel);
    it.text = fx.text;
    if (rel && it.kind.day){ const sd = voStripDay(fx.text, {dest:it.kind.kind === 'task' ? 'day' : 'past', day:it.kind.day}); it.text = sd.text; }
    return it;
  });
}
function chatToVo(ci){   /* 拆分卡的一条 → 整屏分拣页的一条（换过的档、划掉的都带过去） */
  const k = ci.kind || {}, it = {src:ci.src, fixed:ci.fixed || ci.text, fixes:ci.fixes || []};
  if (ci.off) it.off = true;
  if (k.kind === 'task'){ if (k.day && k.day !== TODAY){ it.dest = 'day'; it.day = k.day; } else it.dest = 'plan'; }
  else { if (k.day && k.day !== TODAY){ it.dest = 'past'; it.day = k.day; } else it.dest = 'flow'; if (k.kind === 'thought') it.th = k.ic || 'dash'; }
  const sd = voStripDay(it.fixed, it); it.text = sd.text; it.cut = sd.cut;
  return it;
}
function voToChat(it){   /* 整屏分拣页的一条 → 用 chatPlace 放 */
  const task = it.dest === 'plan' || it.dest === 'day';
  return {src:it.src, fixed:it.fixed, fixes:it.fixes || [], text:it.text || '', off:!!it.off,
    kind:{kind:task ? 'task' : it.th ? 'thought' : 'event', day:(it.dest === 'day' || it.dest === 'past') ? it.day : null, ic:it.th || null}};
}
function chatStripTime(t){   /* 钟点已经挂到时间上了，字里就不重复 */
  const res = [/([01]?\d|2[0-3])[:：][0-5]\d/, /(上午|早上|中午|下午|晚上)([一二三四五六七八九十两\d]{1,3})点(半|一刻|三刻|(\d{1,2})分)?/];
  for (const re of res){
    const m = t.match(re); if (!m) continue;
    const r = (t.slice(0, m.index) + t.slice(m.index + m[0].length)).replace(/^[，,、\s]+|[，,、\s]+$/g, '').trim();
    if (r.length >= 2) return r;
  }
  return t;
}
function chatPlace(items, base, why){
  const out = [], d = DD();
  snapshot(why || '发给啾啾');
  items.filter(it => !it.off && String(it.text || '').trim()).forEach(it => {
    const t = it.text.trim(), k0 = it.kind, day = k0.day || base;
    if (!PAGES[day]) PAGES[day] = {plan:[], flow:[]};
    let ne, list;
    if (k0.kind === 'task'){ ne = {sym:'task', state:'open', text:t, _id:++uid}; list = PAGES[day].plan; }
    else if (k0.kind === 'thought'){
      ne = {sym:({ask:'ask', mood:'mood', bang:'bang'})[k0.ic] || 'note', userSet:true, noDue:1, text:t, _id:++uid}; list = PAGES[day].flow;
      if ((k0.ic === 'idea' || k0.ic === 'learn') && thIconKey(ne) !== k0.ic) ne.ico = k0.ic;   /* 卡上给你看的是哪个图标，放进去就是哪个 */
    }
    else {
      ne = {sym:'event', noDue:1, text:t, _id:++uid}; list = PAGES[day].flow;   /* 已经认过是日常：不再因为字里有日子改成待办 */
      const p = parseLine(t);
      if (p.store && modOn('meals')){ const fg = foodGroupName() || '美食'; if (!foodGroupName() && !extraGroups.includes(fg)) extraGroups.push(fg); ne.groups = [fg]; }
      else if (p.title && /看了|电影|二刷|补看|影院|观影/.test(t)){ const mg = movieGroupName(); if (mg) ne.groups = [mg]; }
    }
    const fx = (it.fixes || []).filter(f => t.includes(f.to));
    if (fx.length){
      ne.fix = fx.map(f => ({from:f.from, to:f.to})); ne.fixAt = TODAY;
      fx.forEach(f => { if (!d.fix[f.from] && !d.no[f.from + '>' + f.to]) d.fix[f.from] = f.to; });   /* 你发出去的就算确认过 */
      PARSE_GEN++;
    }
    if(it.friend){ne.personIntro=true;ne.noDue=1;}
    if(it.plan){ne.schedule={...it.plan};ne.due=day;ne.noDue=1;}
    if(ne.sym==='event' && base===TODAY && day===TODAY && /^(刚刚|刚才|刚到)/.test(t) && !detectTime(t))ne.time=journalNow();
    ne.userSet = true; list.push(ne);
    TOAST_MUTE++; try{ commit(ne); } finally { TOAST_MUTE--; }   /* 档是啾啾认好的（或你在拆分卡里点过的），逐行识别别再改它；认出的钟点由啾啾的回话来说 */
    if (k0.kind !== 'thought') delete ne.userSet;   /* 日常还要走小岛分拣 */
    const timedLine = journalTimedLine(t);
    if(timedLine && (ne.sym==='event' || ne.sym==='task')){
      ne.time=timedLine.time;
      ne.text=timedLine.body;
    }else if (ne.sym === 'task' && ne.time) ne.text = chatStripTime(ne.text);
    if (day !== base){ const pg = PAGES[base]; (pg.voOut = pg.voOut || []).push({d:day, id:ne._id}); }
    out.push({e:ne, day, base});
  });
  ISLE_DEF = null;
  out.forEach(o => {
    if (o.e.sym === 'task'||o.e.personIntro) return;
    if (o.day === base && base === editKey()) isleRoute(o.e);   /* 跟手帐里写的一样：有把握收进房子，没把握问一句 */
    else if (o.day !== base && !o.e.userSet && !sideHome(o.e)){ const gs = isleGuess(o.e); if (gs && gs.sure) isleSend(o.e, gs.k); }   /* v3.3 放到别的日子的：有把握才收进房子，不问 */
  });
  scheduleSave();
  return out;
}
/* ---- 啾啾的回话 ---- */
function chatReplyHide(){ const R = $('#chatReply'); if (R){ R.classList.remove('on'); R.innerHTML = ''; } CHAT = null; }
function chatShow(pose, html, acts, onAct){
  const R = $('#chatReply'); if (!R) return;
  R.innerHTML = '<div class="cr-av"><img src="' + OBIMG.av_jj + '" alt="啾啾"></div><div class="cr-bb"><button class="cr-x" aria-label="收起">✕</button>' + html
    + (acts && acts.length ? '<div class="cr-acts">' + acts.map(([k, lab, pri]) => '<button data-a="' + k + '"' + (pri ? ' class="pri"' : '') + '>' + lab + '</button>').join('') + '</div>' : '') + '</div>';
  R.classList.add('on');
  R.querySelector('.cr-x').onclick = ev => { ev.stopPropagation(); chatReplyHide(); };
  R.querySelectorAll('.cr-acts [data-a]').forEach(b => b.onclick = ev => { ev.stopPropagation(); onAct(b.dataset.a); });
  placeToolbar();
}
function chatDrop(o){
  const pg = PAGES[o.day];
  if (pg) ['plan', 'flow'].forEach(l => { const i = pg[l].indexOf(o.e); if (i >= 0) pg[l].splice(i, 1); });
  if (o.day !== o.base && PAGES[o.base] && PAGES[o.base].voOut) PAGES[o.base].voOut = PAGES[o.base].voOut.filter(v => v.id !== o.e._id);
}
function chatUndo(outs, text){
  outs.forEach(chatDrop); scheduleSave(); chatReplyHide(); render();
  const i = $('#chatIn'); if (i && !i.value.trim() && text){ i.value = text; chatGrow(); }
  toast('撤回了 · 话放回输入框里');
}
function chatFix(o){
  chatReplyHide();
  if (o.day !== editKey()) gotoDay(o.day);
  setTimeout(() => {
    const w = view.querySelector('[data-eid="' + o.e._id + '"]'); if (!w) return;
    try{ w.scrollIntoView({block:'center'}); }catch(_){ }
    const sy = w.querySelector('.sym');
    if (sy) openRowPop(o.e, sy);
  }, 80);
}
function chatSayOne(o, text){
  if(planSay(o,text))return;
  if(!o.e.noFriendSuggest&&friendSuggest(o,text))return;
  const e = o.e, hk = sideHome(e), acts = [];
  let say = '', pose = 'check';
  if (o.day !== o.base){
    const dn = voRelDay(o.day) || fmtKey(o.day), amt = (e.sym !== 'task' && hk !== 'money') ? chatAmt(e) : 0;
    say = '记好了：' + (e.time ? e.time + ' ' : '') + vEsc(clipT(e.text, 16)) + '，放到' + dn + (hk ? '，收进' + ISLE[hk].h : '的' + (e.sym === 'task' ? '待办' : isThought(e) ? '随想' : '日常')) + '。'
      + (amt ? amtWords(e) + '也记进了' + ISLE.money.h + '。' : '');   /* v3.3.4 连加的说怎么算的 */
    acts.push(['go', '去看看'], ['undo', '撤回']);
  } else if (hk){
    const amt = hk !== 'money' ? chatAmt(e) : 0, aw = amtWords(e, true);
    say = amt ? ISLE[hk].who + '收进' + ISLE[hk].h + '了，' + amtWords(e) + '也记进了' + ISLE.money.h + '。'
      : ISLE[hk].who + '收进' + ISLE[hk].h + '了' + (hk === 'money' && aw ? '，' + aw.replace(/，$/, '。') : '：' + vEsc(clipT(e.text, 18)));   /* v3.3.4 */
    if (hk === 'food' && parseEntry(e).want) say = '阿饱收进' + ISLE.food.h + '的想吃了：' + vEsc(parseEntry(e).store) + '。先记在想吃里，不算去过；「吃什么」里能抽到它。';   /* v3.3.5 */
    acts.push(['house', '去看看'], ['back', '放回手帐'], ['undo', '撤回']);
  } else if (e.isleAsk){
    const ks = String(e.isleAsk).split(',').filter(k => ISLE[k] && isleOn(k));
    say = '记好了。' + amtWords(e, true).replace(/，$/, '。') + '这条像是' + ISLE[ks[0]].n + '，要送去' + ISLE[ks[0]].h + '吗？'; pose = 'ask';   /* v3.3.4 连加的先说一共多少 */
    ks.forEach((k, i) => acts.push(['send:' + k, '送去' + ISLE[k].n, i === 0]));
    acts.push(['no', '不用']);
  } else if (e.sym === 'task'){
    say = '记好了：' + (e.time ? e.time + ' ' : '') + vEsc(clipT(e.text, 18)) + '，放在待办。';
    acts.push(['undo', '撤回'], ['fix', '改一下']);
  } else if (isThought(e)){
    const ic = thIcon(e);
    say = '记好了，放进随想' + (ic.i ? ' · ' + ic.i + ' ' + ic.n : '') + '。';
    acts.push(['undo', '撤回'], ['fix', '改一下']);
  } else {
    const ic = evIcon(e);
    const aw = amtWords(e, true);
    say = '记好了，放进' + (o.base === TODAY ? '今天' : '这天') + '的日常' + (ic.i ? ' · ' + ic.i : '') + '。' + (aw ? aw + '记进了' + ISLE.money.h + '。' : '');   /* v3.3.4 */
    acts.push(['undo', '撤回'], ['fix', '改一下']);
  }
  CHAT = {mode:'one', base:o.base, outs:[o], text};
  chatShow(pose, say, acts, a => {
    if (a === 'undo') chatUndo([o], text);
    else if (a === 'fix') chatFix(o);
    else if (a === 'go'){ chatReplyHide(); jumpToEntry(o.day, e._id); }
    else if (a === 'house'){ chatReplyHide(); isleGo(hk); }
    else if (a === 'back'){ isleBack(e, hk); chatSayOne(o, text); }
    else if (a.indexOf('send:') === 0){ isleSend(e, a.slice(5)); render(); chatSayOne(o, text); }
    else if (a === 'no'){ isleNoThanks(e); chatReplyHide(); }
  });
}
function chatHouse(t){   /* 拆开的这条会不会直接收进房子（只是预告，放的时候再分拣一次） */
  const p = parseLine(t);
  if (p.store && modOn('meals') && isleOn('food')) return 'food';
  const g = isleGuess({sym:'event', text:t}); return (g && g.sure) ? g.k : null;
}
function chatDestHTML(it){
  const k = it.kind, rl = k.day ? (voRelDay(k.day) || fmtShort(k.day)) + ' · ' : '';
  if (k.kind === 'task') return rl + '待办';
  if (k.kind === 'thought'){ const d = TH_ICONS.find(x => x[0] === k.ic); return rl + '随想' + (d ? ' ' + d[1] : ''); }
  if (!k.day){ const hk = chatHouse(it.text); if (hk) return isleIcon(hk, 18) + ISLE[hk].h; }
  return rl + '日常';
}
function chatShowMany(){
  const C = CHAT; if (!C) return;
  const live = C.items.filter(x => !x.off).length;
  const html = '刚才那段话，我帮你理成了 ' + C.items.length + ' 条，点前面的小签能换地方：<div class="cr-list">' + C.items.map((it, i) => '<div class="cr-row' + (it.off ? ' off' : '') + '"><button class="cr-k" data-k="' + i + '">' + chatDestHTML(it) + '</button><span class="cr-t">' + vEsc(it.text) + '</span><button class="cr-o" data-o="' + i + '">' + (it.off ? '↺' : '✕') + '</button></div>').join('') + '</div>';
  chatShow('sort', html, [['all', '都放好（' + live + '）', true]].concat(C.base === TODAY ? [['fine', '细改 ›']] : [], [['back', '撤回']]), a => {   /* 细改的整屏页按今天排，补记别的日子时不给 */
    if (a === 'all'){
      if (!live){ toast('一条都没留 · 点 ↺ 恢复'); return; }
      const outs = chatPlace(C.items, C.base); focusRef = null; render(); chatSayMany(outs, C.text); chatFlash(outs);
    } else if (a === 'fine'){
      const t = C.text; chatReplyHide(); SET.voDraft = t; scheduleSave();
      openVoice({}); VO.items = C.items.map(chatToVo); VO.open = null; voPaint();
    } else if (a === 'back'){
      const t = C.text; chatReplyHide();
      const i = $('#chatIn'); if (i && !i.value.trim()){ i.value = t; chatGrow(); }
    }
  });
  const R = $('#chatReply');
  R.querySelectorAll('[data-o]').forEach(b => b.onclick = ev => { ev.stopPropagation(); const it = C.items[+b.dataset.o]; it.off = !it.off; chatShowMany(); });
  R.querySelectorAll('[data-k]').forEach(b => b.onclick = ev => {   /* 点一下换档：待办 → 日常 → 随想 → 待办 */
    ev.stopPropagation(); const it = C.items[+b.dataset.k], was = it.kind;
    const nx = {task:'event', event:'thought', thought:'task'}[was.kind];
    if (nx === 'thought') it.kind = {kind:'thought', ic:thGuess(it.text) || 'dash', day:was.day};
    else if (nx === 'task') it.kind = {kind:'task', day:null};
    else it.kind = {kind:'event', day:was.kind === 'task' ? null : was.day};
    chatShowMany();
  });
}
function chatSayMany(outs, text){
  const cnt = {}, ord = [];
  outs.forEach(o => {
    const hk = sideHome(o.e);
    const lab = (o.day !== o.base ? (voRelDay(o.day) || fmtShort(o.day)) + '的' : '') + (hk ? ISLE[hk].h : o.e.sym === 'task' ? '待办' : isThought(o.e) ? '随想' : '日常');
    if (!cnt[lab]){ cnt[lab] = 0; ord.push(lab); } cnt[lab]++;
  });
  CHAT = {mode:'done', base:outs.length ? outs[0].base : editKey(), outs, text};
  chatShow('happy', '放好了：' + ord.map(l => l + ' ' + cnt[l]).join(' · ') + '。', [['undo', '撤回']], a => { if (a === 'undo') chatUndo(outs, text); });
}
function chatFlash(outs){   /* 刚记下的那几条亮一下；被回话或输入栏挡住就滚到能看见 */
  setTimeout(() => {
    const vr = view.getBoundingClientRect(), R = $('#chatReply'), B = $('#chatBar');
    const lim = (R && R.classList.contains('on')) ? R.getBoundingClientRect().top : (B && B.classList.contains('on')) ? B.getBoundingClientRect().top : vr.bottom;
    let first = true;
    outs.forEach(o => {
      if (o.day !== o.base) return;
      const el = view.querySelector('[data-eid="' + o.e._id + '"]'); if (!el) return;
      if (first){
        first = false;
        const r = el.getBoundingClientRect(), top = vr.top + 8, bot = lim - 8;
        if (r.top < top || r.bottom > bot) view.scrollTop += r.top - top - Math.max(0, (bot - top - r.height) / 2);
      }
      el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 1700);
    });
  }, 80);
}
function chatSend(){
  const inp = $('#chatIn'); if (!inp) return;
  const text = inp.value.trim(); if (!text) return;
  const base = chatBase(); if (!base) return;
  if(towerChat(inp,text,base)||friendChatIntercept(inp,text,base))return;
  const items = chatItems(text, base === TODAY);
  if (!items.length){ toast('再多说两个字吧'); return; }
  inp.value = ''; chatGrow(); focusRef = null;
  if (SET.obLand){ delete SET.obLand; scheduleSave(); }   /* 发出第一条，纸条收走 */
  if (items.length === 1){ const outs = chatPlace(items, base); render(); if (outs[0]) chatSayOne(outs[0], text); chatFlash(outs); }
  else { CHAT = {mode:'many', base, items, text}; chatShowMany(); }
}
(() => {   /* 输入栏的按钮 */
  const inp = $('#chatIn'); if (!inp) return;
  inp.addEventListener('input', () => { chatGrow(); if (CHAT && CHAT.mode !== 'many') chatReplyHide(); });
  inp.addEventListener('keydown', ev => {
    if (ev.isComposing || ev.keyCode === 229) return;
    if (ev.key === 'Enter' && !ev.shiftKey){ ev.preventDefault(); chatSend(); }
  });
  inp.addEventListener('focus', () => setTimeout(placeToolbar, 60));
  inp.addEventListener('blur', () => setTimeout(placeToolbar, 60));
  $('#chatBar').addEventListener('click', ev => { if (ev.target === ev.currentTarget) chatFocus(); });   /* 点输入栏边上的空白也是要打字 */
  const sb = $('#chatSend');
  sb.addEventListener('pointerdown', ev => ev.preventDefault());   /* 点发送不收键盘，跟发消息一样接着说 */
  sb.onclick = chatSend;
  $('#chatMic').onclick = () => {
    chatFocus(); CHAT = {mode:'tip', base:chatBase()};
    chatShow('ask', '按键盘右下角的 🎤 说就行，说完点「发送」。一口气说好几件事也没关系，我帮你理。', [['ok', '知道了']], () => chatReplyHide());
  };
  $('#chatPlus').onclick = () => {
    if (!chatBase()) return;
    imgTarget = {sym:'event', defSym:true, text:'', _id:++uid, _imgPending:true};
    const fi = $('#imgInput'); fi.value = ''; fi.click();
  };
})();

/* ---- 记事亭 · 随想架 ---- */
let TH_TAB = null, TH_FILTER = '', TH_PICK = null, TH_LIM = 60;
function thAll(){ const out = []; walk((k, e) => { if (isThought(e) && String(e.text || '').trim()) out.push({k, e}); }); return out; }
function thShelf(){   /* 记事亭页顶上：房子 + 「随想 / 本子」页签；在「随想」页签就画随想架，返回 true */
  const all = thAll();
  if (!TH_TAB) TH_TAB = all.length ? 'th' : 'nb';
  view.appendChild(letterHouseHead('notes'));
  const tabs = document.createElement('div'); tabs.className = 'rp-tabs th-tabs';
  tabs.innerHTML = '<button class="chip' + (TH_TAB === 'th' ? ' on' : '') + '" data-t="th">随想 · ' + all.length + '</button>'
    + '<button class="chip' + (TH_TAB === 'nb' ? ' on' : '') + '" data-t="nb">本子 · ' + NOTES.length + '</button>';
  tabs.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { TH_TAB = b.dataset.t; TH_PICK = null; render(); });
  view.appendChild(tabs);
  if (TH_TAB !== 'th') return false;
  const cnt = {}; all.forEach(x => { const k = thIconKey(x.e); cnt[k] = (cnt[k] || 0) + 1; });
  const fl = document.createElement('div'); fl.className = 'th-fl';
  fl.innerHTML = '<button class="' + (!TH_FILTER ? 'on' : '') + '" data-f="">全部</button>'
    + TH_ICONS.filter(([k]) => cnt[k]).map(([k, i, n]) => '<button class="' + (TH_FILTER === k ? 'on' : '') + '" data-f="' + k + '">' + i + ' ' + n + ' ' + cnt[k] + '</button>').join('');
  fl.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { TH_FILTER = b.dataset.f; TH_LIM = 60; render(); });
  view.appendChild(fl);
  const hint = document.createElement('div'); hint.className = 'th-hint';
  hint.innerHTML = '<span>' + (TH_PICK ? '挑好了点下面「写成一篇」' : '每天的随想都收在这里，家还在那一天') + '</span><button id="thPickT">' + (TH_PICK ? '取消' : '挑几条') + '</button>';
  hint.querySelector('#thPickT').onclick = () => { TH_PICK = TH_PICK ? null : new Set(); render(); };
  view.appendChild(hint);
  const list = all.filter(x => !TH_FILTER || thIconKey(x.e) === TH_FILTER);
  if (!list.length){
    const d2 = document.createElement('div'); d2.className = 'empty-hint'; d2.style.textAlign = 'center'; d2.style.padding = '24px 2px 8px';
    d2.innerHTML = jjImg('ask', 72) + '<div style="margin-top:8px">还没有随想 · 在今天的页面底下发给啾啾<br>像「原来……」「要不要……」「有点累」这样的话，会放进随想</div>';
    view.appendChild(d2);
  }
  let lastK = null;
  list.slice(0, TH_LIM).forEach(({k, e}) => {
    if (k !== lastK){ lastK = k; view.appendChild(secHead(fmtKey(k) + ' · ' + weekCN(k), list.filter(x => x.k === k).length, false, null)); }
    const r = document.createElement('div'); r.className = 'th-row' + (TH_PICK && TH_PICK.has(e._id) ? ' sel' : ''); r.dataset.id = e._id;
    const ic = thIcon(e), wb = e.wrote ? noteById(e.wrote) : null;
    r.innerHTML = '<span class="evi">' + (ic.i || '—') + '</span><span class="tx">' + vEsc(e.text)
      + (wb ? '<span class="th-done">已写成《' + vEsc(wb.title || '未命名') + '》</span>' : '') + '</span>'
      + (TH_PICK ? '<span class="pk">' + (TH_PICK.has(e._id) ? '✓' : '') + '</span>' : '');
    r.onclick = () => {
      if (TH_PICK){ if (TH_PICK.has(e._id)) TH_PICK.delete(e._id); else TH_PICK.add(e._id); render(); }
      else jumpToEntry(k, e._id);
    };
    view.appendChild(r);
  });
  if (list.length > TH_LIM){
    const more = document.createElement('div'); more.className = 'tapzone'; more.style.textAlign = 'center';
    more.textContent = '再看 ' + Math.min(60, list.length - TH_LIM) + ' 条 ›'; more.onclick = () => { TH_LIM += 60; render(); };
    view.appendChild(more);
  }
  if (TH_PICK){
    const bar = document.createElement('div'); bar.className = 'th-pickbar';
    bar.innerHTML = '<span>已挑 ' + TH_PICK.size + ' 条</span><button id="thWrite"' + (TH_PICK.size ? '' : ' disabled') + '>写成一篇</button>';
    bar.querySelector('#thWrite').onclick = () => { const sel = all.filter(x => TH_PICK.has(x.e._id)); if (!sel.length){ toast('先挑几条'); return; } thWrite(sel); };
    view.appendChild(bar);
  }
  return true;
}
function thWrite(arr){   /* 挑的几条带着日子放进一个新本子；原来那几条留在当天，标上「已写成」 */
  if (!modOn('notes')){ toast(ISLE.notes.h + '关着 · 到 设置 → 岛上的房子 打开'); return; }
  arr = arr.slice().sort((a, b) => parseKey(a.k) - parseKey(b.k));
  const n = {id:++uid, title:clipT(String(arr[0].e.text || '').trim(), 12), body:'', created:TODAY, updated:TODAY, days:{}};
  n.days[TODAY] = 1;
  n.body = arr.map(x => '「' + String(x.e.text || '').trim() + '」—— ' + fmtKey(x.k) + '的随想').join('\n') + '\n\n';
  NOTES.push(n);
  arr.forEach(x => { x.e.wrote = n.id; });
  ensureNoteBorn(n);
  TH_PICK = null; scheduleSave();
  cur = {name:'note', id:n.id}; render();
  toast('写成一篇了 · 原来那几条还在当天');
}

(() => {   /* 右下角「说一段」：点开整屏；正在打字时让开 */
  const vf = document.getElementById('voFab'); if (vf) vf.onclick = () => openVoice({});
  const ph = document.getElementById('phone');
  const isTx = el => el && (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && !/^(button|checkbox|radio|file)$/i.test(el.type)));
  document.addEventListener('focusin', ev => { if (ph && isTx(ev.target)) ph.classList.add('typing'); });
  document.addEventListener('focusout', () => { setTimeout(() => { if (ph && !isTx(document.activeElement)) ph.classList.remove('typing'); }, 60); });
})();

/* ============ v2.30 📖 我的词典（设置里） ============ */
function dictPeopleList(){
  const pc = pplCounts(), g = new Map();
  pc.forEach((c, n) => {
    if (n === '独自' || (SET.pplNo && SET.pplNo[n]) || GENERIC_PPL.includes(n) || /\d/.test(n)) return;
    const cn = canonPerson(n), o = g.get(cn) || {n:cn, c:0, als:new Set()};
    o.c += c; if (n !== cn) o.als.add(n); g.set(cn, o);
  });
  const d = DD();
  Object.entries(d.same).forEach(([v, c]) => { const o = g.get(c); if (o) o.als.add(v); });
  return [...g.values()].sort((a, b) => b.c - a.c || a.n.localeCompare(b.n));
}
function dictStoreList(){
  const idx = storeIndex(), d = DD(), out = [], seen = new Set();
  for (const s of storeSet()){
    const cn = canonStore(s); if (seen.has(cn) || d.nost[cn]) continue; seen.add(cn);
    const als = new Set();
    for (const [c, st] of storeCores()) if (st === cn && (c.length >= 3 || storeSet().has(c))) als.add(c);
    Object.entries(d.same).concat(Object.entries(d.fix)).forEach(([v, c]) => { if (canonStore(c) === cn && v !== cn) als.add(v); });
    out.push({n:cn, c:(idx[cn] || {}).cnt || 0, als});
  }
  return out.sort((a, b) => b.c - a.c || a.n.localeCompare(b.n));
}
function dictFixCount(){ const d = DD(); return Object.keys(d.fix).length + Object.keys(d.same).length + Object.keys(d.no).length; }
function renderDict(){
  const d = DD();
  const tip = document.createElement('div'); tip.className = 'vt-tip'; tip.style.marginTop = '14px';
  tip.textContent = '从你写过的记录里自动长出来，不用维护。发给啾啾、「说一段」时听错的名字照这里改；点 ↺ 改回过的，它记住以后别这样改。';
  view.appendChild(tip);
  const rows = [];
  Object.entries(d.fix).forEach(([v, c]) => rows.push({t:'「' + v + '」→ ' + c, s:'听错的字 · 自动改', del:() => { delete d.fix[v]; }}));
  Object.entries(d.same).forEach(([v, c]) => rows.push({t:'「' + v + '」＝ ' + c, s:'另一种叫法 · 不改字', del:() => { delete d.same[v]; }}));
  Object.keys(d.no).forEach(k => { const a = k.split('>'); rows.push({t:'「' + a[0] + '」不改成 ' + a[1], s:'你改回过', del:() => { delete d.no[k]; }}); });
  view.appendChild(sectionLabel('纠正 · ' + rows.length + ' 条'));
  rows.forEach(r => {
    const el = document.createElement('div'); el.className = 'set-row dc-row';
    el.innerHTML = '<span>' + vEsc(r.t) + '</span><span class="sub" style="margin-left:auto">' + vEsc(r.s) + '</span><button class="gm-btn dc-x">✕</button>';
    el.querySelector('.dc-x').onclick = ev => { ev.stopPropagation(); r.del(); dictChanged(); render(); toast('删掉了'); };
    view.appendChild(el);
  });
  const add = document.createElement('button'); add.className = 'chip on'; add.id = 'dcAdd'; add.textContent = '＋ 加一条：A 就是 B'; add.style.margin = '8px 0 4px';
  add.onclick = () => dictAddSheet('', '');
  view.appendChild(add);
  const ppl = dictPeopleList();
  view.appendChild(sectionLabel('人 · ' + ppl.length + ' · 点名字：加叫法 / 不当人名'));
  const pw = document.createElement('div'); pw.className = 'dc-chips';
  ppl.forEach(o => { const b = document.createElement('button'); b.className = 'dc-chip'; b.dataset.n = o.n;
    b.innerHTML = vEsc(o.n) + ' <i>' + o.c + '</i>' + (o.als.size ? '<small> · 也叫 ' + vEsc([...o.als].join('、')) + '</small>' : '');
    b.onclick = () => dictItemSheet('p', o.n); pw.appendChild(b); });
  view.appendChild(pw);
  const sts = dictStoreList();
  view.appendChild(sectionLabel('店 · ' + sts.length + ' · 点店名：加简称 / 不当店名'));
  const sw = document.createElement('div'); sw.className = 'dc-chips';
  sts.forEach(o => { const b = document.createElement('button'); b.className = 'dc-chip'; b.dataset.n = o.n;
    b.innerHTML = vEsc(o.n) + ' <i>' + o.c + '</i>' + (o.als.size ? '<small> · 简称 ' + vEsc([...o.als].join('、')) + '</small>' : '');
    b.onclick = () => dictItemSheet('s', o.n); sw.appendChild(b); });
  view.appendChild(sw);
}
function dictAddSheet(v0, c0){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">加一条 · A 就是 B</div>'
    + '<label class="ss-f"><span>说法</span><input id="dcV" placeholder="比如：布尔 / 老姐 / 陈先进" value="' + escAttr(v0) + '"></label>'
    + '<label class="ss-f"><span>其实是</span><input id="dcC" placeholder="比如：不二 / 我姐 / 陈先进小馆" value="' + escAttr(c0) + '"></label>'
    + '<div class="gs-chips" id="dcK" style="margin:10px 0 0"><button class="gs-chip on" data-k="fix">听错的字 · 以后自动改</button><button class="gs-chip" data-k="same">另一种叫法 · 只认不改字</button></div>'
    + '<button class="gs-done" id="dcSave">存下</button>';
  let kind = 'fix';
  S.querySelectorAll('#dcK [data-k]').forEach(b => b.onclick = () => { kind = b.dataset.k; S.querySelectorAll('#dcK [data-k]').forEach(x => x.classList.toggle('on', x === b)); });
  $('#dcSave').onclick = () => {
    const v = $('#dcV').value.trim(), c = $('#dcC').value.trim();
    if (!v || !c || v === c){ toast('两边都写上，而且不一样'); return; }
    const d = DD(); delete d.fix[v]; delete d.same[v]; delete d.no[v + '>' + c];
    d[kind][v] = c; dictChanged(); closeSheet(); render();
    toast(kind === 'fix' ? '记住了：以后「' + v + '」自动改成「' + c + '」' : '记住了：「' + v + '」就是「' + c + '」');
  };
  S.classList.add('on'); $('#mask').classList.add('on');
  setTimeout(() => { const i = v0 ? $('#dcC') : $('#dcV'); if (i) i.focus(); }, 60);
}
function dictItemSheet(kind, n){
  const S = $('#gsheet');
  S.innerHTML = '<div class="gs-title">「' + vEsc(n) + '」</div>'
    + '<label class="ss-f"><span>' + (kind === 'p' ? '另一种叫法' : '简称') + '</span><input id="dcAl" placeholder="' + (kind === 'p' ? '比如：老姐' : '比如：陈先进') + '"></label>'
    + '<div class="gs-new" style="margin-top:10px"><button class="gm-btn" id="dcAlSave" style="flex:1;padding:10px">存下这个' + (kind === 'p' ? '叫法' : '简称') + '</button></div>'
    + '<button class="gm-btn" id="dcIgn" style="width:100%;padding:10px;margin-top:10px;color:var(--ink-soft)">' + (kind === 'p' ? '这不是人名，别认它' : '这不是店名，别认它') + '</button>';
  $('#dcAlSave').onclick = () => {
    const v = $('#dcAl').value.trim(); if (!v || v === n){ toast('写一个不一样的说法'); return; }
    const d = DD(); delete d.fix[v]; d.same[v] = n; dictChanged(); closeSheet(); render(); toast('记住了：「' + v + '」就是「' + n + '」');
  };
  $('#dcIgn').onclick = () => {
    if (kind === 'p'){ SET.pplNo = SET.pplNo || {}; SET.pplNo[n] = 1; } else DD().nost[n] = 1;
    dictChanged(); closeSheet(); render(); toast('好，不再把「' + n + '」当' + (kind === 'p' ? '人名' : '店名'));
  };
  S.classList.add('on'); $('#mask').classList.add('on');
}

/* ============ v2.31 今日页四档 · 发生的事用图标 · 点符号看细节 ============ */
var CLEAN_ROWS = false;   /* 页面视图里：行下不挂小签，细节点符号看 */
/* 发生的事的图标：按顺序取第一个命中的（看片 > 吃喝 > 看病 > 工作 > …） */
const EV_ICONS = [
  ['film', '🎬', '看片'], ['eat', '🍚', '吃喝'], ['med', '🏥', '看病'], ['work', '💼', '工作'],
  ['sport', '🏃', '运动'], ['fun', '🎡', '玩'], ['learn', '📚', '学'], ['buy', '🛍️', '买'],
  ['gift', '🎁', '人情'], ['home', '🏠', '家里'], ['go', '🚗', '出行'], ['meet', '👥', '见人'],
];
const EV_RE = {
  eat:/(吃|喝)(?![^，。,；;]{0,3}药|亏|惊|醋|瓜|苦|力)|饭(?![前后])|(?:早餐|午餐|晚餐)(?![前后])|夜宵|下午茶|外卖|咖啡|奶茶|火锅|烧烤|烤肉|聚餐|请客|甜品|小吃|面馆|餐厅|饭店|食堂|饮料|啤酒/,
  med:/医院|看病|看牙|牙医|拔牙|智齿|体检|挂号|吃药|买药|药店|感冒|发烧|输液|复查|门诊|针灸|理疗|牙龈|牙疼|牙痛|头疼|头痛|胃疼|胃痛|肚子疼|嗓子疼|咳嗽|过敏|生病|不舒服|上火/,
  work:/开会|开[了完].{0,5}会|会议|例会|客户|方案|汇报|对接|谈判|谈了|谈事|面试|上班|加班|出差|项目|签约|合同|提案|招商|甲方|乙方|老板|述职|工作|提报|入职|离职|公章|沟通|招聘|报价|比稿|改稿|交付|上线|周报|日报|聊.{0,10}(方向|方案|合作|项目|计划|业务)/,
  sport:/跑步|跑[完了]|散步|遛弯|健身|撸铁|游泳|瑜伽|普拉提|打球|篮球|足球|羽毛球|网球|乒乓|骑车|骑行|徒步|爬山|运动|拉伸|跳绳/,
  fun:/玩(?!笑)|逛(?!超市|淘宝|京东)|KTV|ktv|唱歌|拼豆|展览|看展|演出|演唱会|音乐节|livehouse|密室|剧本杀|桌游|乐园|游乐|公园|旅行|旅游|露营|蹦迪|酒吧|按摩|泡澡|洗浴|看海|赏花|滑雪|头疗|采耳|搓澡|足疗|洗脚|spa|SPA|美甲|汗蒸|追剧|刷剧/,
  learn:/上课|课程|学习|学了|看书|读书|读了|听课|培训|考试|练字|背单词|网课/,
  buy:/买了|购物|下单|淘宝|京东|拼多多|超市|网购|快递|入手|剁手/,
  gift:/红包|礼物|份子|随礼|送了|礼金/,
  home:/打扫|收拾|搬家|房租|水电|物业|洗衣|家务|装修/,
  go:/打车|滴滴|地铁|公交|开车|加油|停车|高铁|火车|动车|飞机|机场|航班|出租车|网约车|共享单车|的车|坐车|赶车|车站/,
  meet:/见面|见了|聚会|拜访|碰面|聚了|约了/,
};
function evIconKey(e){
  if (e.ico) return e.ico;   /* 你手动选过的，照你的 */
  const t = String(e.text || ''); if (!t.trim()) return 'dot';
  const tpls = (e.groups || []).map(tplOf), p = parseEntry(e);
  const hit = k => {
    if (k === 'film') return tpls.includes('movie') || (/《[^》]+》/.test(t) && /看|二刷|三刷|补|影院|电影|剧|综艺|片/.test(t));
    if (k === 'eat') return tpls.includes('food') || EV_RE.eat.test(t) || (!!(p.store || p.delivery) && !(e.groups || []).length);   /* 挂了别的分组的店（比如 #休闲 的按摩店）不算吃 */
    if (k === 'work') return tpls.includes('work') || EV_RE.work.test(t);
    if (k === 'learn') return tpls.includes('book') || EV_RE.learn.test(t);
    if (k === 'meet') return EV_RE.meet.test(t) || ((p.withs || []).length > 0 && p.withs[0] !== '独自');
    return EV_RE[k] ? EV_RE[k].test(t) : false;
  };
  for (const [k] of EV_ICONS) if (hit(k)) return k;
  return 'dot';
}
function evIcon(e){
  const k = evIconKey(e), d = EV_ICONS.find(x => x[0] === k);
  return d ? {k, i:d[1], n:d[2]} : {k:'dot', i:'', n:'普通'};
}
/* 四档的标题：没东西时变浅，右边一个＋直接往这档写 */
function secHead(t, n, faint, onAdd){
  const d = document.createElement('div'); d.className = 'section-label sec4' + (faint ? ' faint' : '');
  d.innerHTML = '<span>' + t + '</span>' + (n ? '<span class="sec-n">' + n + '</span>' : '') + (onAdd ? '<button class="sec-add" aria-label="往这档写一条">＋</button>' : '');
  if (onAdd){
    d.querySelector('.sec-add').onclick = ev => { ev.stopPropagation(); onAdd(); };
    if (faint) d.onclick = () => onAdd();
  }
  return d;
}
function addLineSym(list, sym){
  const ne = {sym, userSet:true, text:'', _id:++uid};   /* 点了哪档就是哪档，自动识别不再改它 */
  list.push(ne); focusRef = ne; render();
}
function tailZone(onTap){   /* 列表末尾一块看不见的地方：点一下接着写 */
  const z = document.createElement('div'); z.className = 'tapzone tail'; z.addEventListener('click', onTap); return z;
}
/* 时间 / 日子写在字前面，点一下改 */
function whenNode(e, editable){
  if (!e.time && !(e.due && e.due !== curDayKey())) return null;
  const w = document.createElement('span'); w.className = 'e-when';
  if (e.due && e.due !== curDayKey()){
    const d = document.createElement('span'); d.className = 'due'; d.textContent = '→' + fmtShort(e.due);
    d.onclick = ev => { ev.stopPropagation(); if (editable) openDueSheet(e); else gotoDay(e.due); };
    w.appendChild(d);
  }
  if (e.time){
    const tm = document.createElement('span'); tm.className = 'tm'; tm.textContent = e.time;
    tm.onclick = ev => { ev.stopPropagation(); if (editable) openTimeSheet(e); };
    w.appendChild(tm);
  }
  return w;
}
/* ---- 点符号：这一行的细节小卡 ---- */
function rowInfoRows(e, forTask){
  const rows = [], p = parseEntry(e);
  if(forTask && e.state==='open' && e.time && !e.cyc && !e.schedule && !e.pick && !e.due && !e.srcId && !findEntry(e)?.parent) rows.push({kind:'to'});
  const hk = forTask ? null : sideHome(e);   /* v3.1 住在岛上的哪栋房子 */
  if (hk){
    const acts = [{lab:'去看看', fn:() => { rowPopCloseAll(); isleGo(hk); }}];
    if (!e.meal && !e.nbId) acts.push({lab:'放回手帐', g:1, fn:() => { rowPopCloseAll(); isleBack(e, hk); }});
    rows.push({i:'🏝', t:'住在' + ISLE[hk].h, acts});
  }
  if (!forTask && e.sym === 'event' && !isMinor(e)){
    const ic = evIcon(e);
    rows.push({kind:'ico', i:ic.i || '○', t:ic.n + (e.ico ? '' : ' · 自动挑的'), acts:[{lab:'换图标', ico:1}]});
  }
  if (!forTask && isThought(e)){   /* v3.2 随想的小图标 */
    const ic = thIcon(e);
    rows.push({kind:'tico', i:ic.i || '—', t:ic.n + ((e.sym === 'note' && !e.ico) ? ' · 自动挑的' : ''), acts:[{lab:'换图标', ico:1}]});
  }
  const gs = e.groups || [];
  let gt = gs.length ? gs.map(g => (tplOf(g) === 'food' ? '美食' : g)).join('、') : '没分组';
  if (p.store){ const o = storeIndex()[p.store]; gt += ' · ' + p.store + (o ? ' 去过 ' + o.cnt + ' 次' : ''); }
  rows.push({i:'#', t:gt, acts:[{lab:'换分组', fn:() => { rowPopCloseAll(); sheetTarget = e; openSheet(); }}]});
  if (modOn('ledger') && (p.prices || []).length){
    const k = expKindOf(e, p), sum = amtSum(p.prices);
    rows.push({i:'¥', t:(k ? expLabel(k) : '不算花销') + ' ' + sum, acts:[{lab:'换类', fn:() => { rowPopCloseAll(); expSheet(e); }}]});
  }
  const ws = (p.withs || []).filter(w => w !== '独自');
  if (ws.length) rows.push({i:'👥', t:'和 ' + ws.join('、')});
  if (e.srcDay) rows.push({i:'◂', t:fmtKey(e.srcDay) + ' 转来', acts:[{lab:'看原条', fn:() => { rowPopCloseAll(); jumpToEntry(e.srcDay, e.srcId); }}]});
  else if (e.src) rows.push({i:'◂', t:'来自：' + clipT(String(e.src), 20)});
  if (e.lateFrom) rows.push({i:'⏱', t:'原定 ' + fmtKey(e.lateFrom) + '，那天没打开，补到了今天'});
  if (e.delegate && e.delegate.to) rows.push({i:'→', t:'转交给 ' + e.delegate.to + (e.delegate.follow ? ' · ' + fmtKey(e.delegate.follow) + ' 跟进' : '')});
  if (e.sym === 'task' && (e.mig || 0) >= 2) rows.push({i:'›', t:'已经推过 ' + e.mig + ' 次'});
  if (e.badge && !e.lateFrom && !/^>×/.test(e.badge)) rows.push({i:'·', t:e.badge});
  if (e.nbId){
    const nb = noteById(e.nbId);
    rows.push({i:'📓', t:'来自本子' + (nb ? '《' + (nb.title || '未命名') + '》' : '（已删除）'),
      acts:nb ? [{lab:'翻开', fn:() => { rowPopCloseAll(); cur = {name:'note', id:e.nbId}; render(); }}] : []});
  }
  if (!forTask && isThought(e) && modOn('notes') && String(e.text || '').trim()){   /* v3.2 随想写成一篇 */
    const wb = e.wrote ? noteById(e.wrote) : null;
    if (wb) rows.push({i:'📓', t:'已写成《' + (wb.title || '未命名') + '》', acts:[{lab:'翻开', fn:() => { rowPopCloseAll(); cur = {name:'note', id:wb.id}; render(); }}]});
    else rows.push({i:'📓', t:'展开写成一篇，放进' + ISLE.notes.h, acts:[{lab:'写成一篇', fn:() => { rowPopCloseAll(); thWrite([{k:dayOfEntry(e) || editKey(), e}]); }}]});
  }
  if(e.personIntro&&!(e.personLinks||[]).length&&friendParse(e.text))rows.push({i:'人',t:'新朋友资料',acts:[{lab:'收进亲友',fn:()=>{rowPopCloseAll();friendPreview({e,day:dayOfEntry(e),base:dayOfEntry(e)},friendParse(e.text));}}]});
  if(e.schedule)rows.push({i:'日',t:'事情日期：'+planFull(e.schedule.eventDay),acts:[{lab:'修改安排',fn:()=>planEdit(e)}]});
  if (e.note) rows.push({i:'✎', t:'备注：' + e.note});
  const warn = (modOn('meals') && e.text) ? foodWarn(e) : null;
  if (warn) rows.push({i:'⚠', t:warn.txt, cls:'warn', acts:[{lab:'看原话', fn:() => { rowPopCloseAll(); const op = warn.o.op; jumpToEntry(op.k, op.e._id || (op.e._id = ++uid)); }}]});
  entryFixes(e).forEach(f => rows.push({i:'↺', t:'听写把「' + f.from + '」改成了「' + f.to + '」', acts:[{lab:'改回', fn:() => { rowPopCloseAll(); voUndoFix(e, f); }}]}));
  if (!e.noSplit && e.text && ['event','note','ask','bang'].includes(e.sym)
      && /[。\n]/.test(e.text.trim().replace(/[。\s]+$/, '')) && splitSentences(e.text).length >= 2)
    rows.push({i:'✂', t:'这行有 ' + splitSentences(e.text).length + ' 句', acts:[
      {lab:'拆开', fn:() => { rowPopCloseAll(); splitEntry(e); }},
      {lab:'不拆', g:1, fn:() => { e.noSplit = 1; scheduleSave(); rowPopCloseAll(); render(); }}]});
  if (!forTask){
    rows.push({kind:'to'});
    const loc = findEntry(e);
    if (e.sym === 'event' && loc && !loc.parent && !isMinor(e) && (cur.name === 'today' || cur.name === 'history'))
      rows.push({i:'＋', t:'在这件事下面补一条', tap:() => {
        rowPopCloseAll(); const ne = {sym:'task', state:'open', text:'', _id:++uid};
        (e.children = e.children || []).push(ne); e.collapsed = false; focusRef = ne; render(); }});
  }
  return rows;
}
const ROW_TO = [['task', '待办'], ['event', '日常'], ['note', '随想']];
function rowRowsHTML(e, rows){
  return rows.map((r, ri) => {
    if (r.kind === 'to') return '<div class="rp-r"><span class="i">⇄</span><span class="t rp-to">'
      + ROW_TO.map(([s, n]) => '<button data-to="' + s + '"' + ((s === 'note' ? isThought(e) : s === 'event' ? (e.sym === 'event' || (e.sym === 'note' && !isThought(e))) : e.sym === s) ? ' class="on"' : '') + '>' + n + '</button>').join('') + '</span></div>';
    return '<div class="rp-r' + (r.cls ? ' ' + r.cls : '') + (r.tap ? ' tapr' : '') + '" data-ri="' + ri + '"><span class="i">' + vEsc(r.i) + '</span><span class="t">' + vEsc(r.t) + '</span>'
      + (r.acts || []).map((a, ai) => '<button class="a' + (a.g ? ' g' : '') + '" data-ri="' + ri + '" data-ai="' + ai + '">' + a.lab + '</button>').join('') + '</div>'
      + (r.kind === 'ico' ? '<div class="rp-ico" id="rpIco"><button class="auto' + (e.ico ? '' : ' on') + '" data-ico="">自动</button>'
          + EV_ICONS.map(([k, i]) => '<button data-ico="' + k + '"' + (e.ico === k ? ' class="on"' : '') + '>' + i + '</button>').join('')
          + '<button data-ico="dot"' + (e.ico === 'dot' ? ' class="on"' : '') + ' style="font-size:13px">○</button></div>' : '')
      + (r.kind === 'tico' ? '<div class="rp-ico" id="rpIco"><button class="auto' + ((e.sym === 'note' && !e.ico) ? ' on' : '') + '" data-tico="">自动</button>'
          + TH_ICONS.map(([k, i]) => '<button data-tico="' + k + '"' + ((!(e.sym === 'note' && !e.ico) && thIconKey(e) === k) ? ' class="on"' : '') + '>' + i + '</button>').join('')
          + '<button data-tico="dash"' + (e.ico === 'dash' ? ' class="on"' : '') + ' style="font-size:13px">—</button></div>' : '');
  }).join('');
}
function bindRowActs(root, e, rows){
  root.querySelectorAll('button.a[data-ai]').forEach(b => b.onclick = ev => {
    ev.stopPropagation();
    const a = rows[+b.dataset.ri].acts[+b.dataset.ai];
    if (a.ico){ const g = root.querySelector('#rpIco'); if (g) g.classList.toggle('on'); return; }
    if (a.fn) a.fn();
  });
  root.querySelectorAll('.rp-r.tapr').forEach(el => el.onclick = ev => { ev.stopPropagation(); const r = rows[+el.dataset.ri]; if (r.tap) r.tap(); });
  root.querySelectorAll('#rpIco [data-ico]').forEach(b => b.onclick = ev => {
    ev.stopPropagation();
    if (b.dataset.ico) e.ico = b.dataset.ico; else delete e.ico;
    scheduleSave(); rowPopCloseAll(); render();
    toast(b.dataset.ico ? '这一行就用这个图标了' : '改回自动挑图标');
  });
  root.querySelectorAll('#rpIco [data-tico]').forEach(b => b.onclick = ev => {   /* v3.2 随想换图标：疑问 / 重点 / 心情跟着换符号 */
    ev.stopPropagation(); const k = b.dataset.tico;
    snapshot('换图标');
    if (!k){ e.sym = 'note'; delete e.ico; }
    else if (k === 'ask' || k === 'bang' || k === 'mood'){ e.sym = k; delete e.ico; }
    else { e.sym = 'note'; e.ico = k; }
    e.userSet = true; delete e.defSym; delete e.state;
    planToFlow(e);   /* v3.3.2 */
    scheduleSave(); rowPopCloseAll(); render();
    toast(k ? '这一行就用这个图标了' : '改回自动挑图标');
  });
  root.querySelectorAll('.rp-to [data-to]').forEach(b => b.onclick = ev => {
    ev.stopPropagation();
    const to = b.dataset.to; if (to === 'note' ? isThought(e) : to === 'event' ? (e.sym === 'event' || (e.sym === 'note' && !isThought(e))) : to === e.sym) return;
    snapshot('换档');
    e.sym = to; e.userSet = true; delete e.defSym;
    if (to === 'task'){ if (!e.state) e.state = 'open'; } else if (e.state === 'open') delete e.state;
    if (to !== 'task') planToFlow(e);   /* v3.3.2 换成日常 / 随想：真的挪过去，不再留在待办 */
    scheduleSave(); rowPopCloseAll(); render();
    toast('挪到「' + ROW_TO.find(x => x[0] === to)[1] + '」了');
  });
}
function planToFlow(e){   /* v3.3.2 待办里的一条换成日常 / 随想：挪进那天的流水（提醒的预告除外） */
  if (!e || e.cyc || e.sym === 'task') return false;
  for (const k of Object.keys(PAGES)){
    const p = PAGES[k], i = p && p.plan ? p.plan.indexOf(e) : -1;
    if (i >= 0){ p.plan.splice(i, 1); (p.flow = p.flow || []).push(e); return true; }
  }
  return false;
}
function planTidy(){   /* 以前小卡里换了档、却还留在待办里的那几条，挪回那天的流水 */
  let n = 0;
  Object.keys(PAGES).forEach(k => {
    const p = PAGES[k]; if (!p || !p.plan) return;
    const mv = p.plan.filter(e => e && !e.cyc && ['event', 'note', 'ask', 'bang', 'mood'].includes(e.sym));
    if (!mv.length) return;
    p.plan = p.plan.filter(e => !mv.includes(e)); p.flow = (p.flow || []).concat(mv); n += mv.length;
  });
  if (n) scheduleSave();
  return n;
}
function rowPopCloseAll(){
  closeRowPop();
  if ($('#qsheet') && $('#qsheet').classList.contains('on')) closeQSheet();
}
function closeRowPop(){
  const p = $('#rowPop'); if (p) p.remove();
  document.removeEventListener('pointerdown', rowPopOutside, true);
}
function rowPopOutside(ev){
  const p = $('#rowPop'); if (!p) return;
  if (p.contains(ev.target)) return;
  if (ev.target.closest && ev.target.closest('.sym.tapme')) return;   /* 点另一个符号：交给它自己的 click */
  closeRowPop();
}
function openRowPop(e, anchor){
  const was = $('#rowPop'); const same = was && was.dataset.eid === String(e._id);
  closeRowPop(); if (same) return;
  try{ dismissKB(); }catch(_){ }
  const rows = rowInfoRows(e, false);
  const pop = document.createElement('div'); pop.className = 'rpop'; pop.id = 'rowPop'; pop.dataset.eid = e._id;
  pop.innerHTML = rowRowsHTML(e, rows);
  const ph = $('#phone'); ph.appendChild(pop);
  bindRowActs(pop, e, rows);
  const pr = ph.getBoundingClientRect(), rr = (anchor.closest('.entry') || anchor).getBoundingClientRect();
  let top = rr.bottom - pr.top + 4;
  const h = pop.offsetHeight;
  if (top + h > pr.height - 16) top = Math.max(64, rr.top - pr.top - h - 4);
  pop.style.top = top + 'px';
  setTimeout(() => document.addEventListener('pointerdown', rowPopOutside, true), 0);
}
/* 任务长按的处理面板顶上：来历、提醒、纠错、分组 */
function qsInfoHTML(t){
  const rows = rowInfoRows(t, true);
  return rows.length ? '<div class="qs-info" id="qsInfo">' + rowRowsHTML(t, rows) + '</div>' : '';
}
/* ---- 头部天气小签：点一下看整张早安卡 ---- */
function wxPillHTML(){ const d = wxCached(); return d ? (wxIc(d.code) + ' ' + d.hi + '°') : '☀'; }
function wxPillNode(){
  const s = document.createElement('span'); s.className = 'wx-pill'; s.id = 'wxPill';
  s.innerHTML = wxPillHTML();
  s.onclick = ev => { ev.stopPropagation(); openHello(true); };
  return s;
}
/* ---- 早安卡：只认「去年今日」「上个月的今天」 ---- */
function helloMemories(day){
  const D0 = day || TODAY, ta = D0.split('.').map(Number), out = [];
  const pickDay = (k, label) => {
    if (!PAGES[k]) return false;
    const cands = [];
    PAGES[k].plan.concat(PAGES[k].flow).forEach(e => {
      if (!e.text || e.sym === 'task' || e.sym === 'mood' || e.cyc || isMinor(e) || e.text.trim().length < 4) return;
      cands.push({k, e, w:(e.sym === 'event' ? 2 : 1) + ((e.groups || []).length ? 2 : 0)});
    });
    if (!cands.length) return false;
    const r = seedRng(D0 + '|mem|' + k);
    let v = r() * cands.reduce((s2, x) => s2 + x.w, 0), hit = cands[cands.length - 1];
    for (const x of cands){ v -= x.w; if (v <= 0){ hit = x; break; } }
    out.push(Object.assign({label}, hit)); return true;
  };
  for (let y = 1; y <= 5; y++){
    const d = new Date(ta[0] - y, ta[1] - 1, ta[2]); if (d.getDate() !== ta[2]) continue;
    if (pickDay(dkey(d), y === 1 ? '去年今日' : y + ' 年前的今天')) break;
  }
  const m1 = new Date(ta[0], ta[1] - 2, ta[2]);
  if (m1.getDate() === ta[2]) pickDay(dkey(m1), '上个月的今天');
  return out;
}

/* ============ v2.31 侧栏：四格 + 分组标签 + 工具 + 汇总折叠 ============ */
const DTILE = {
  cal:    {ic:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="9" y1="3" x2="9" y2="7"/><line x1="15" y1="3" x2="15" y2="7"/></svg>', n:'日历',     ok:() => true,             s:() => '按月翻', go:() => { const ta = TODAY.split('.').map(Number); cur = {name:'cal', y:ta[0], m:ta[1]}; }},
  someday:{img:'h_someday', ic:'☾', n:'储备', ok:() => true,             s:c => (c.someday || 0) + ' 件 · 不催', go:() => { cur = {name:'agg', key:'someday'}; }},
  food:   {img:'h_food', ic:'🍚', n:'美食',     ok:() => modOn('meals'),  s:() => '吃什么 · 熟店', go:() => { cur = {name:'food'}; }},
  ledger: {img:'h_money', ic:'💰', n:'记账',     ok:() => modOn('ledger'), s:() => '本月 ¥' + drawerMonthSpend(), go:() => { cur = {name:'ledger'}; }},
  cycles: {img:'h_cycles', ic:'🔁', n:'提醒', ok:() => modOn('cycles'), s:() => '生日 · 还款 · 周期', go:() => { cur = {name:'cycles'}; }},
  notes:  {img:'h_notes', ic:'📓', n:'笔记本',   ok:() => modOn('notes'),  s:() => ((typeof NOTES !== 'undefined' ? NOTES : []).length) + ' 本', go:() => { cur = {name:'notes'}; }},
  people: {img:'h_people', ic:'👥', n:'熟人',     ok:() => modOn('people'), s:() => '熟人册', go:() => { cur = {name:'people'}; }},
  vault:  {img:'h_vault', ic:'🔐', n:'小本',     ok:() => modOn('vault'),  s:() => '账号小本', go:() => { cur = {name:'vault'}; }},
};
const DTILE_ORDER = ['cal', 'someday', 'food', 'ledger', 'cycles', 'notes', 'people', 'vault'];
let drawerAggOpen = false;
function drawerMonthSpend(){
  const ta = TODAY.split('.').map(Number), pre = ta[0] + '.' + ta[1] + '.';
  try{ return Math.round(expRows().filter(r => r.d.startsWith(pre)).reduce((s2, r) => s2 + r.sum, 0)).toLocaleString('en-US'); }catch(_){ return '0'; }
}
function drawerTiles(){
  const pins = (SET.dtiles || ['cal', 'someday', 'food', 'ledger']).filter((k, i, a) => DTILE[k] && DTILE[k].ok() && a.indexOf(k) === i);
  for (const k of DTILE_ORDER){ if (pins.length >= 4) break; if (!pins.includes(k) && DTILE[k].ok()) pins.push(k); }
  return pins.slice(0, 4);
}
function longPress(el, onLong, onTap){
  let t = null, fired = false, sx = 0, sy = 0;
  el.addEventListener('pointerdown', ev => { fired = false; sx = ev.clientX; sy = ev.clientY; clearTimeout(t); t = setTimeout(() => { fired = true; onLong(); }, 480); });
  el.addEventListener('pointermove', ev => { if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 10) clearTimeout(t); });
  el.addEventListener('pointerup', () => clearTimeout(t));
  el.addEventListener('pointerleave', () => clearTimeout(t));
  el.addEventListener('contextmenu', ev => ev.preventDefault());
  el.addEventListener('click', ev => { if (fired){ fired = false; ev.preventDefault(); return; } onTap(); });
}
function buildDrawer(){
  if (SET.mods.meals !== true && !SET.mealsUserOff && foodGroupName()) SET.mods.meals = true;   /* v2.23 集子在哪门就在哪；但用户手动关过就不自作主张 */
  const box = $('#drawerList'); box.innerHTML = '';
  let mc = 0; const taSub = TODAY.split('.').map(Number);
  const GCNT = {}, ACNT = {};
  walk((d, e) => {
    const a = d.split('.').map(Number); if (a[0] === taSub[0] && a[1] === taSub[1]) mc++;
    (e.groups || []).forEach(g2 => GCNT[g2] = (GCNT[g2] || 0) + 1);
    Object.keys(AGG).forEach(k2 => { if (AGG[k2].f(e)) ACNT[k2] = (ACNT[k2] || 0) + 1; });
  });
  $('#drawerSub').textContent = taSub[0] + ' 年 ' + taSub[1] + ' 月 · 本月已记 ' + mc + ' 条';
  const go = fn => { fn(); closeDrawer(); render(); };
  /* v3.1 上面手帐（按日子分三格），下面小岛（一栋房子一个小本子） */
  const cellOf = T => {
    const el = document.createElement('div'); el.className = 'dcell' + (T.add ? ' add' : '');
    if (T.k) el.dataset.isle = T.k; if (T.tile) el.dataset.tile = T.tile;
    el.innerHTML = T.add ? '＋' : (T.icon + '<b>' + T.n + '</b><i>' + vEsc(T.s) + '</i>');
    if (T.k) longPress(el, () => houseSheet(T.k), () => go(T.go)); else el.onclick = () => go(T.go);
    return el;
  };
  const lab1 = document.createElement('div'); lab1.className = 'drawer-label'; lab1.innerHTML = '手帐<span class="dsec-sub">翻日子 · 有日子的 · 没日子的</span>'; box.appendChild(lab1);
  const nCyc = (SET.cycles || []).length;
  const mg = document.createElement('div'); mg.className = 'dgrid g3';
  [{tile:'cal', n:'日历', icon:'<img class="dimg" src="' + JJ.h_post + '" alt="">', s:'按月翻', go:DTILE.cal.go},   /* v3.3 信风邮局 */
   {tile:'cycles', n:'提醒', icon:'<img class="dimg" src="' + JJ.h_cycles + '" alt="">', s:nCyc ? nCyc + ' 个' : '生日 · 还款',
    go:() => { if (SET.mods.cycles === false){ SET.mods.cycles = true; scheduleSave(); } cur = {name:'cycles'}; }},
   {tile:'someday', n:'储备', icon:'<img class="dimg" src="' + JJ.h_someday + '" alt="">', s:(ACNT.someday || 0) + ' 件 · 不催', go:() => { cur = {name:'agg', key:'someday'}; }}]
    .forEach(T => mg.appendChild(cellOf(T)));
  box.appendChild(mg);
  /* 你自己的分组（主线的标签；美食、电影这些住在岛上） */
  const gw = document.createElement('div'); gw.className = 'dchips'; gw.style.marginTop = '8px';
  allGroupNames().forEach(g => {
    const t = tplOf(g); if (ISLE_TPL[t] && isleOn(t)) return;
    const [, fg] = gStyle(g), n = GCNT[g] || 0;
    const c = document.createElement('span'); c.className = 'dchip'; c.dataset.g = g;
    c.innerHTML = '<b style="color:' + fg + '">#</b>' + vEsc(g) + (n ? '<i>' + n + '</i>' : '');
    longPress(c, () => groupManageSheet(g), () => go(() => { cur = {name:'group', g}; }));
    gw.appendChild(c);
  });
  const add = document.createElement('span'); add.className = 'dchip add'; add.id = 'dGroupAdd'; add.textContent = '＋';
  add.onclick = () => groupNewSheet();
  gw.appendChild(add);
  box.appendChild(gw);
  /* 小岛：开着的房子，置顶的在前 */
  const lab2 = document.createElement('div'); lab2.className = 'drawer-label'; lab2.innerHTML = '小岛<span class="dsec-sub">一栋房子一个小本子 · 长按置顶</span>'; box.appendChild(lab2);
  box.appendChild(islandDrawer());
  const HC = {}; walk((d, e) => { const k = sideHome(e); if (k) HC[k] = (HC[k] || 0) + 1; });
  const pins = islePins(), ons = ISLE_ORDER.filter(k => isleOn(k));
  const sub = k => {
    if (k === 'money'){ const v = +String(drawerMonthSpend()).replace(/,/g, '') || 0; return '本月 ¥' + (v >= 10000 ? (Math.round(v / 1000) / 10) + '万' : v.toLocaleString('en-US')); }
    if (k === 'people') return (SET.people || []).length + ' 人';
    if (k === 'notes') return ((typeof NOTES !== 'undefined' ? NOTES : []).length) + ' 本';
    if (k === 'vault') return '上锁';
    if (k === 'abu') return '岛主小筑';
    if (k === 'health') return healthCount() + ' 条';
    return (HC[k] || 0) + ' 条';
  };
  const ig = document.createElement('div'); ig.className = 'dgrid g3'; ig.id = 'isleGrid';   /* v3.3.4 一行 3 个，跟手帐那排一样大 */
  pins.filter(k => ons.includes(k)).concat(ons.filter(k => !pins.includes(k)))
    .forEach(k => ig.appendChild(cellOf({k, n:ISLE[k].n, icon:isleIcon(k, 38, 'dimg'), s:sub(k), go:() => isleCur(k)})));
  ig.appendChild(cellOf({add:true, go:() => { cur = {name:'isle'}; }}));
  box.appendChild(ig);
  /* 按标记汇总：折起来 */
  const fold = document.createElement('div'); fold.className = 'dfold'; fold.id = 'dAggFold';
  fold.innerHTML = '<span class="ic">≡</span><div>按标记汇总<small>待办 · 日常 · 随想 · 已完成 …</small></div><span class="ar">' + (drawerAggOpen ? '▾' : '▸') + '</span>';
  fold.onclick = () => { drawerAggOpen = !drawerAggOpen; buildDrawer(); };
  box.appendChild(fold);
  if (drawerAggOpen){
    const aw = document.createElement('div'); aw.className = 'dchips daggs';
    Object.keys(AGG).forEach(key => {
      const c = document.createElement('span'); c.className = 'dchip'; c.dataset.agg = key;
      c.innerHTML = vEsc(AGG[key].title) + (ACNT[key] ? '<i>' + ACNT[key] + '</i>' : '');
      c.onclick = () => go(() => { cur = {name:'agg', key}; });
      aw.appendChild(c);
    });
    box.appendChild(aw);
  }
  const more = document.createElement('details'); more.className='drawer-more'; more.id='drawerMore';
  more.innerHTML='<summary>更多</summary><button class="dfold" id="drawerReview">晚间复盘</button>';
  more.querySelector('button').onclick=()=>{closeDrawer();openReview();};box.appendChild(more);
  const st = document.createElement('div'); st.className = 'dfold'; st.id = 'dSettings';
  st.innerHTML = '<span class="ic">⚙</span><div>设置</div>';
  st.onclick = () => go(() => { cur = {name:'settings'}; });
  box.appendChild(st);
}
function houseSheet(k){   /* v3.1 长按房子：置顶 / 关掉 */
  const S = $('#gsheet'), I = ISLE[k], pinned = islePins().includes(k);
  S.innerHTML = '<div class="gs-title">' + I.n + ' · ' + I.h + '</div>'
    + '<div class="hw-tip" style="padding:0 2px 12px">' + I.tip + '</div>'
    + '<button class="gm-btn" id="hsPin" style="width:100%;padding:11px">' + (pinned ? '取消置顶' : '置顶到最前面') + '</button>'
    + '<button class="gm-btn" id="hsOff" style="width:100%;padding:11px;margin-top:8px;color:var(--ink-soft)">关掉这栋房子 · 记过的都还在</button>'
    + '<button class="gs-done" id="hsDone">好了</button>';
  const back = () => { S.classList.remove('on'); $('#mask').classList.add('on'); };
  $('#hsPin').onclick = () => { islePin(k); back(); buildDrawer(); };
  $('#hsOff').onclick = () => { isleSet(k, false); back(); buildDrawer(); render(); };
  $('#hsDone').onclick = back;
  S.classList.add('on');
}
function drawerTileSheet(i, tiles){
  const S = $('#gsheet');
  const opts = DTILE_ORDER.filter(k => DTILE[k].ok());
  S.innerHTML = '<div class="gs-title">第 ' + (i + 1) + ' 格换成</div><div class="gs-chips" id="dtOpts">'
    + opts.map(k => '<button class="gs-chip' + (tiles[i] === k ? ' on' : '') + '" data-k="' + k + '">' + (DTILE[k].img ? '<img class="gs-img" src="' + JJ[DTILE[k].img] + '" alt="">' : DTILE[k].ic) + ' ' + DTILE[k].n + '</button>').join('') + '</div>'
    + '<button class="gs-done" id="dtDone">好了</button>';
  S.querySelectorAll('#dtOpts [data-k]').forEach(b => b.onclick = () => {
    const k = b.dataset.k, nt = tiles.slice(), j = nt.indexOf(k);
    if (j >= 0 && j !== i) nt[j] = nt[i];   /* 已经在别的格：两格对调 */
    nt[i] = k; SET.dtiles = nt; scheduleSave();
    S.classList.remove('on'); $('#mask').classList.add('on'); buildDrawer();
    toast('第 ' + (i + 1) + ' 格换成「' + DTILE[k].n + '」');
  });
  $('#dtDone').onclick = () => { S.classList.remove('on'); $('#mask').classList.add('on'); };
  S.classList.add('on');
}
function groupManageSheet(g){
  const S = $('#gsheet');
  let delArm = false;
  const paint = () => {
    S.innerHTML = '<div class="gs-title">#' + vEsc(g) + '</div>'
      + '<label class="ss-f"><span>改名</span><input id="gmName" value="' + escAttr(g) + '"></label>'
      + '<div class="gm-sec">颜色</div><div class="cdots" id="gmColors">' + GPAL.map((pal, ci) => '<span class="cdot' + (GCOLOR[g] === ci ? ' on' : '') + '" data-ci="' + ci + '" style="background:' + pal[1] + '"></span>').join('') + '</div>'
      + '<div class="gm-sec">模板</div><div class="gs-chips" id="gmTpl">' + TPL_ORDER.map(k => '<button class="gs-chip' + (tplOf(g) === k ? ' on' : '') + '" data-tpl="' + (k || '') + '">' + (k ? TPLS[k].n : '无') + '</button>').join('') + '</div>'
      + '<div class="gs-new" style="margin-top:12px"><button class="gm-btn danger" id="gmDel" style="flex:1;padding:10px">' + (delArm ? '确认删除（只摘标签，条目都在）' : '删除分组') + '</button>'
      + '<button class="gm-btn" id="gmOk" style="flex:1;padding:10px;background:var(--ink);color:#fff;border-color:var(--ink)">好了</button></div>';
    S.querySelectorAll('#gmColors [data-ci]').forEach(d => d.onclick = () => { GCOLOR[g] = +d.dataset.ci; scheduleSave(); paint(); });
    S.querySelectorAll('#gmTpl [data-tpl]').forEach(b => b.onclick = () => {
      const k = b.dataset.tpl || null; SET.gtpl[g] = k; scheduleSave(); paint();
      toast(k ? ('#' + g + ' 用「' + TPLS[k].n + '」模板 · 历史记录已识别') : ('#' + g + ' 已取消模板'));
    });
    $('#gmDel').onclick = () => {
      if (!delArm){ delArm = true; paint(); return; }
      deleteGroup(g); S.classList.remove('on'); $('#mask').classList.add('on'); buildDrawer(); render(); toast('已删除分组 · 记录都还在');
    };
    $('#gmOk').onclick = () => {
      const v = $('#gmName').value.trim().replace(/^#/, '');
      if (v && v !== g){ renameGroup(g, v); toast('已改名 · 全局生效'); }
      S.classList.remove('on'); $('#mask').classList.add('on'); buildDrawer(); render();
    };
  };
  paint(); S.classList.add('on');
}
function groupNewSheet(){
  const S = $('#gsheet'); let pick;
  const paint = () => {
    const v0 = $('#gnName') ? $('#gnName').value : '';
    S.innerHTML = '<div class="gs-title">新建分组</div>'
      + '<label class="ss-f"><span>名字</span><input id="gnName" placeholder="比如：健身"></label>'
      + '<div class="gm-sec">套用模板（可不选，之后长按分组也能改）</div><div class="gs-chips" id="gnTpl">'
      + TPL_ORDER.map(k => '<button class="gs-chip' + ((pick === undefined ? null : pick) === k ? ' on' : '') + '" data-tpl="' + (k || '') + '">' + (k ? TPLS[k].n : '无') + '</button>').join('') + '</div>'
      + '<button class="gs-done" id="gnOk">建好</button>';
    $('#gnName').value = v0;
    S.querySelectorAll('#gnTpl [data-tpl]').forEach(b => b.onclick = () => { pick = b.dataset.tpl || null; paint(); });
    $('#gnOk').onclick = () => {
      const v = $('#gnName').value.trim().replace(/^#/, ''); if (!v){ toast('先写个名字'); return; }
      if (!extraGroups.includes(v)) extraGroups.push(v);
      const k = pick === undefined ? tplOf(v) : pick;
      if (k !== tplOf(v) || k !== null) SET.gtpl[v] = k || null;
      scheduleSave(); S.classList.remove('on'); $('#mask').classList.add('on'); buildDrawer();
      toast('已新建 #' + v + (k ? ' · ' + TPLS[k].n + '模板' : ''));
    };
  };
  paint(); S.classList.add('on');
  setTimeout(() => { const i = $('#gnName'); if (i) i.focus(); }, 60);
}

/* ============ v2.31 设置：分段 + 数据与备份 + 实验室 ============ */
function setSub(t){ const s = document.createElement('span'); s.className = 'sub'; s.textContent = t; return s; }
function setRow(label, right, fn){
  const r = document.createElement('div'); r.className = 'set-row';
  const l = document.createElement('span'); l.textContent = label; r.appendChild(l);
  if (right) r.appendChild(right);
  if (fn) r.onclick = fn;
  view.appendChild(r); return r;
}
function setToggle(on){
  const sw = document.createElement('div'); sw.className = 'switch' + (on ? ' on' : ''); sw.innerHTML = '<i></i>'; return sw;
}
const TOOLBOX = [['meals', '🍚 美食'], ['notes', '📓 笔记本'], ['ledger', '💰 记账'], ['people', '👥 熟人册'], ['vault', '🔐 账号小本'], ['cycles', '🔁 提醒'], ['mealLog', '🍚 三餐打卡']];
function toolboxNode(){
  const tb = document.createElement('div'); tb.className = 'tbox';
  TOOLBOX.forEach(([k, nm]) => {
    const on = k === 'mealLog' ? SET.mods.mealLog === true : modOn(k);
    const b = document.createElement('button'); b.className = 'tbox-c' + (on ? ' on' : ''); b.dataset.mod = k;
    b.textContent = nm + (on ? ' ✓' : '');
    b.onclick = () => {
      if (k === 'mealLog'){
        SET.mods.mealLog = !on; scheduleSave(); render();
        toast(!on ? '三餐打卡已打开 · 在美食的「三餐」页签' : '已收起 · 以前的三餐记录都还在'); return;
      }
      SET.mods[k] = !on;
      if (k === 'meals'){ if (on) SET.mealsUserOff = 1; else delete SET.mealsUserOff; }
      if (k === 'meals' && !on){
        if (!foodGroupName() && !extraGroups.includes('美食')) extraGroups.push('美食');
        try{ mealAutoTagAll(); }catch(_){ }
        toast('美食已打开 · 侧栏里有');
      } else if (k === 'ledger' && !on) toast('记账已打开 · 写「打车 45元」这样带金额的句子就自动成账');
      else toast((on ? '已关掉「' : '已打开「') + nm.slice(2) + '」' + (on ? ' · 数据都在' : ''));
      scheduleSave(); render();
    };
    tb.appendChild(b);
  });
  return tb;
}
function labSheet(){
  const S = $('#gsheet');
  const on = modOn('smartbar');
  S.innerHTML = '<div class="gs-title">功能手册 · 实验室</div>'
    + '<button class="gm-btn" id="labMan" style="width:100%;padding:11px;margin-top:6px">📖 使用引导 · 功能手册</button>'
    + '<button class="gm-btn" id="labOb" style="width:100%;padding:11px;margin-top:8px">🏝 重新走一遍上岛</button>'
    + '<div class="gm-sec">内测实验室</div>'
    + '<div class="set-row" id="labSmart" style="border:1px solid var(--line);border-radius:12px;padding:10px 12px"><span>✨ 聪明工具条<small style="display:block;font-size:11.5px;color:var(--ink-faint);margin-top:2px">打字时认出日期 / 时间 / 分组，键盘上递一排小抓手</small></span>'
    + '<div class="switch' + (on ? ' on' : '') + '"><i></i></div></div>'
    + '<button class="gs-done" id="labDone">好了</button>';
  $('#labMan').onclick = () => { closeSheet(); showManual(); };
  $('#labOb').onclick = () => { closeSheet(); obOpen(true); };
  $('#labSmart').onclick = () => {
    SET.mods.smartbar = !on; scheduleSave(); labSheet();
    toast(!on ? '已开启 · 写一行「明天下午三点交方案」试试' : '已关闭 · 随时回来再开');
  };
  $('#labDone').onclick = () => closeSheet();
  S.classList.add('on'); $('#mask').classList.add('on');
}

/* ============ v3.3 发给啾啾时，说到别的日子就放到那天 ============ */
const CN_D = {一:1, 二:2, 两:2, 三:3, 四:4, 五:5, 六:6, 七:7, 八:8, 九:9};
function cnNum(s){   /* 「3」「十五」「二十一」「两」→ 数字 */
  s = String(s || '');
  if (/^\d+$/.test(s)) return +s;
  if (s === '十') return 10;
  let m;
  if ((m = s.match(/^十([一二三四五六七八九])$/))) return 10 + CN_D[m[1]];
  if ((m = s.match(/^([一二两三四五六七八九])十$/))) return CN_D[m[1]] * 10;
  if ((m = s.match(/^([一二两三四五六七八九])十([一二三四五六七八九])$/))) return CN_D[m[1]] * 10 + CN_D[m[2]];
  return CN_D[s] || null;
}
const WK_N = {一:1, 二:2, 三:3, 四:4, 五:5, 六:6, 日:0, 天:0};
function wkMonday(k){ const d = parseKey(k), w = d.getDay(); d.setDate(d.getDate() - (w === 0 ? 6 : w - 1)); return dkey(d); }   /* 这周一 */
function wkDay(mon, wd){ return addDaysK(mon, wd === 0 ? 6 : wd - 1); }
const NUM_DAY = '(\\d{1,2}|[一二两三四五六七八九十]{1,3})';
const NOT_DAY_AFTER = /^[线楼床门口位房车站馆厅店院机窗桌柜铺单件条张杯份层排号桶瓶包袋盒箱码]/;   /* 3号线、5号楼、2号床……不是日子 */
function chatPastDay(t){
  /* 话里说到过去的哪天：{key, cut, rep, at, strong}。strong：明说是过去（昨天、上周五、11月3日）；不 strong：只说了周几 / 几号，要看是不是做完的事 */
  t = String(t || '');
  const tk = parseKey(TODAY), ty = tk.getFullYear(), tm = tk.getMonth() + 1, td = tk.getDate();
  const back = n => addDaysK(TODAY, -n);
  const hit = (m, key, strong, rep) => (key && parseKey(key) < tk) ? {key, cut:m[0], rep:rep || '', at:m.index, strong} : null;
  let m;
  if ((m = t.match(/大前天(?:晚上|夜里)?/))) return hit(m, back(3), true, /晚上|夜里/.test(m[0]) ? '晚上' : '');
  if ((m = t.match(/前天(?:晚上|夜里)?|前晚/))) return hit(m, back(2), true, /晚/.test(m[0]) || /夜里/.test(m[0]) ? '晚上' : '');
  if ((m = t.match(/昨天|昨日|昨儿个?|昨晚|昨夜|昨早/))) return hit(m, back(1), true, /晚|夜/.test(m[0]) ? '晚上' : m[0] === '昨早' ? '早上' : '');
  if ((m = t.match(new RegExp(NUM_DAY + '天(?:以)?前')))){ const n = cnNum(m[1]); if (n && n <= 60) return hit(m, back(n), true); }
  if ((m = t.match(/上上个?(?:周|星期|礼拜)([一二三四五六日天])/))) return hit(m, wkDay(addDaysK(wkMonday(TODAY), -14), WK_N[m[1]]), true);
  if ((m = t.match(/上个?(?:周|星期|礼拜)([一二三四五六日天])/))) return hit(m, wkDay(addDaysK(wkMonday(TODAY), -7), WK_N[m[1]]), true);
  if ((m = t.match(new RegExp('上个?月' + NUM_DAY + '[号日]')))){
    const n = cnNum(m[1]); const d = new Date(ty, tm - 2, 1); const mx = new Date(ty, tm - 1, 0).getDate();
    if (n && n <= mx){ d.setDate(n); return hit(m, dkey(d), true); }
  }
  if ((m = t.match(/(去年)?(\d{1,2})月(\d{1,2})[号日]?/))){
    const mo = +m[2], dy = +m[3];
    if (mo >= 1 && mo <= 12 && dy >= 1 && dy <= 31 && !/^[\d万千百元块]/.test(t.slice(m.index + m[0].length))){
      const k = (m[1] ? ty - 1 : ty) + '.' + mo + '.' + dy;
      if (parseKey(k) < tk) return hit(m, k, true);
      return null;   /* 以后的日子交给原来的认法 */
    }
  }
  if ((m = t.match(/(\d{1,2})\.(\d{1,2})号?/))){
    const mo = +m[1], dy = +m[2], pre = t[m.index - 1] || '', post = t.slice(m.index + m[0].length, m.index + m[0].length + 1);
    if (mo >= 1 && mo <= 12 && dy >= 1 && dy <= 31 && !/[\d.]/.test(pre) && !/[\d元块钱％%折]/.test(post)){
      const k = ty + '.' + mo + '.' + dy;
      return parseKey(k) < tk ? hit(m, k, true) : null;
    }
  }
  if ((m = t.match(/(?:这|本)(?:周|星期|礼拜)([一二三四五六日天])/))) return hit(m, wkDay(wkMonday(TODAY), WK_N[m[1]]), false);
  if ((m = t.match(/(^|[^上下这本])(?:周|星期|礼拜)([一二三四五六日天])/))){
    const wd = WK_N[m[2]], now = tk.getDay();
    if (wd === now) return null;
    const ago = (now - wd + 7) % 7;   /* 最近的那个过去的周几 */
    const mm = {0:m[0].slice(m[1].length), index:m.index + m[1].length};
    return hit(mm, back(ago), false);
  }
  if ((m = t.match(new RegExp('(^|[^\\d月.上下个])' + NUM_DAY + '号')))){
    const n = cnNum(m[2]), after = t.slice(m.index + m[0].length);
    if (n && n <= 31 && !NOT_DAY_AFTER.test(after)){
      const mm = {0:m[0].slice(m[1].length), index:m.index + m[1].length};
      if (n < td) return hit(mm, ty + '.' + tm + '.' + n, false);
      if (n > td){ const mx = new Date(ty, tm - 1, 0).getDate(); if (n <= mx) return hit(mm, dkey(new Date(ty, tm - 2, n)), false); }
    }
  }
  return null;
}
function chatBareDay(t){   /* 要做的事里只说了「28号」：这个月还没到就是这个月，过了就是下个月 */
  const m = String(t || '').match(new RegExp('(^|[^\\d月.上下个])' + NUM_DAY + '号'));
  if (!m) return null;
  const n = cnNum(m[2]), after = t.slice(m.index + m[0].length);
  if (!n || n > 31 || NOT_DAY_AFTER.test(after)) return null;
  const tk = parseKey(TODAY), ty = tk.getFullYear(), tm = tk.getMonth() + 1, td = tk.getDate();
  if (n === td) return null;
  let d = n > td ? new Date(ty, tm - 1, n) : new Date(ty, tm, n);
  if (d.getDate() !== n) return null;   /* 下个月没有 31 号 */
  return {key:dkey(d), cut:m[0].slice(m[1].length), at:m.index + m[1].length};
}
function chatCutDay(t, d){   /* 放到那天时去掉「上周五」「11月3日」这类词；「昨晚」留成「晚上」 */
  if (!d || !d.cut) return t;
  const i = t.indexOf(d.cut, Math.max(0, (d.at || 0) - 2));
  if (i < 0) return t;
  const r = (t.slice(0, i) + (d.rep || '') + t.slice(i + d.cut.length)).replace(/^[，,、的\s]+/, '').replace(/([，,])\s*[，,]/g, '$1').replace(/\s{2,}/g, ' ').trim();
  return r.length >= 2 ? r : t;
}
function chatAmt(e){   /* 这条记了多少钱（账房开着、算进账的才说） */
  if (!isleOn('money')) return 0;
  const p = parseEntry(e);
  if (!(p.prices && p.prices.length) || !expKindOf(e, p)) return 0;
  return amtSum(p.prices);
}
function amtWords(e, onlyCalc){   /* v3.3.4 这条记了多少钱、怎么算的：45 元 / 100+30+40 一共 170 元， / 一共 180 元， / 按你写的 41 元（25.5+14.5 加起来是 40），
                                      onlyCalc：只有一笔、没什么可算的就不说（账房没开、不算花销的也不说） */
  const amt = chatAmt(e); if (!amt) return '';
  const p = parseEntry(e), c = p.chain, n = (p.prices || []).length;
  if (c && n === 1 && c.said != null && Math.abs(c.said - c.sum) > 0.001) return '按你写的 ' + c.said + ' 元（' + c.expr + ' 加起来是 ' + c.sum + '），';
  if (c && n === 1) return c.expr + ' 一共 ' + amt + ' 元，';
  if (n > 1) return '一共 ' + amt + ' 元，';
  return onlyCalc ? '' : amt + ' 元';
}

/* ============ v3.3 上岛引导（流程见 09 号，文案见 11 号）：五屏 + 落地纸条 ============ */
const OB_RES = {   /* 住户：头像、名字 */
  jj:['av_jj', '啾啾'], qiao:['av_qiao', '翘翘'], cow:['av_cow', '大力'], capy:['av_capy', '小卡'], jay:['av_jay', '松松'],
  boar:['av_boar', '阿饱'], owl:['av_owl', '阿影'], badger:['av_badger', '酥酥'], crab:['av_crab', '团团'],
  fox:['av_fox', '小铜板'], mole:['av_mole', '阿鼠'], pelican:['av_pelican', '阿兜'], woodp:['av_woodp', '笃笃'],
};
const OB_ROLES = [
  {k:'worker',  n:'打工人', who:'cow',  say:'我是大力。项目进度、开会要点，都可以放到工坊里。'},
  {k:'student', n:'学生党', who:'qiao', say:'我是翘翘。作业、考试和刚弄懂的知识点，放学堂里一起找。'},
  {k:'free',    n:'自由人', who:'capy', say:'我是小卡。看展、旅行、出去玩，回来跟我说说。'},
  {k:'secret',  n:'先保密', who:'jay',  say:'行，这一项先空着。'},
];
const OB_HOUSES = {
  study: {img:'h_study',  n:'海风学堂', f:'学习', who:'qiao',   say:'作业、考试和课堂笔记，放在一块儿好找。'},
  work:  {img:'h_work',   n:'大力工坊', f:'工作', who:'cow',    say:'项目进度放这里。要写周报时，点「报告」整理。'},
  food:  {img:'h_food',   n:'海边饭馆', f:'美食', who:'boar',   say:'好吃的店记下来，下次不知道吃啥就来翻牌子。'},
  movie: {img:'h_movie',  n:'小岛影院', f:'电影', who:'owl',    say:'看过的片子打个分，下次推荐给朋友时好找。'},
  book:  {img:'h_book',   n:'小岛书屋', f:'阅读', who:'badger', say:'读完的书、想留的摘抄，都放书屋里。'},
  fun:   {img:'h_fun',    n:'温泉汤屋', f:'娱乐', who:'capy',   say:'唱歌、旅行、泡汤，玩了什么就记什么。'},
  money: {img:'h_money',  n:'铜板账房', f:'记账', who:'fox',    say:'记花销时带上金额，月底来看看钱花在哪儿。'},
  people:{img:'h_people', n:'小岛茶屋', f:'亲友', who:'crab',   say:'收录一个人，就能翻到和对方有关的记录。'},
  notes: {img:'h_notes',  n:'记事小亭', f:'笔记', who:'mole',   say:'零碎念头先放架子上，想写长文时再挑出来。'},
  vault: {img:'h_vault',  n:'秘屋树洞', f:'密码', who:'jay',    say:'Wi-Fi、会员账号这些放树洞，用主口令上锁。'},
};
const OB_EIGHT = ['food', 'movie', 'book', 'fun', 'money', 'people', 'notes', 'vault'];
const OB_TAGS = {student:{study:1, book:1}, worker:{work:1, money:1}};   /* 只挂小牌子，不替他点亮 */
const OB_LETTERS = [
  {t:'随手发一句就行', s:'不用先选分类', pic:['jj'],
   b:'底下就是输入框。要办的事、刚吃的一顿饭、顺手记的一笔账，都可以发给我。一口气说一大段也行，拆开后你看一眼，再确认保存。'},
  {t:'定了日子的，放进当天', s:'笃笃看日历，阿兜管储备', pic:['woodp', 'pelican'],
   b:'带了日期的事，到那天打开手帐就能看见。想让手机到点响，可以点时间添加到系统日历。还没定日子、今天也做不完的，可以先放进储备。'},
  {t:'没做完可以推迟，记过的随时翻', s:'饭馆、电影、花销，各有地方放', pic:['boar', 'owl', 'fox'],
   b:'今天没做完的事，可以推到明天，也可以放进储备。长按还能看它是从哪天挪来的。认出的饭馆、电影和花销会收进对应的房子，分错了随时能改。'},
];
/* 空岛①上的 14 块空地（按 1086×1448 原图量的：圈心 x、y、圈宽），中间石板放信风邮局 */
const OB_PLOT = {movie:[330, 270, 190], book:[555, 250, 200], study:[778, 285, 195], work:[207, 432, 205], cycles:[430, 425, 195], someday:[840, 437, 205],
  food:[200, 625, 205], fun:[870, 625, 215], people:[230, 805, 230], money:[637, 818, 225], notes:[885, 813, 225], vault:[285, 985, 225],
  e1:[543, 998, 220], e2:[790, 985, 230]};
const OB_PLAZA = [533, 625, 400];
const OB_ISLE_W = 1086, OB_ISLE_H = 1448;
let OB = null;

function obAv(k, cls){ const r = OB_RES[k]; return '<img class="' + (cls || 'ob-av') + '" src="' + OBIMG[r[0]] + '" alt="' + r[1] + '">'; }
function obFeet(n){
  const f = (i, on) => '<svg viewBox="0 0 20 20" class="' + (i % 2 ? 'b' : 'a') + (on ? ' on' : '') + '"><g fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round">'
    + '<path d="M10 12 L4.5 4"/><path d="M10 12 L10 2.5"/><path d="M10 12 L15.5 4"/><path d="M10 12 L10 18"/></g></svg>';
  let s = ''; for (let i = 0; i < 5; i++) s += f(i, i < n); return '<div class="ob-feet" aria-label="第 ' + n + ' 步，共 5 步">' + s + '</div>';
}
function obRole(){ return OB_ROLES.find(r => r.k === OB.role) || null; }
function obGrid(){ const r = OB.role; return (r === 'student' ? ['study'] : r === 'worker' ? ['work'] : []).concat(OB_EIGHT); }
function obLandOn(){
  if (!SET.obLand) return false;
  if (SET.obLand.day !== TODAY){ delete SET.obLand; scheduleSave(); return false; }   /* 只在上岛那天 */
  return true;
}
function obOpen(again){
  OB = {step:1, again:!!again, opened:new Set(), name:'', city:null, cityQ:'', bm:0, bd:0, bdOpen:false, role:null,
    lit:new Set(), said:null, duty:false, hello:true};
  if (again){   /* 重走一遍：带上现在的样子 */
    const me = SET.me || {};
    OB.name = me.name || '';
    if (me.bday){ const a = String(me.bday).split('.').map(Number); OB.bm = a[0] || 0; OB.bd = a[1] || 0; }
    OB.role = me.role || null;
    const c = wxCity(); if (c) OB.city = {n:c.n, la:c.la, lo:c.lo};
    OB_EIGHT.forEach(k => { if (isleOn(k)) OB.lit.add(k); });
    if (tplGroupName('study')) OB.lit.add('study');
    if (tplGroupName('work')) OB.lit.add('work');
    OB.duty = !!SET.duty; OB.hello = modOn('hello');
  }
  try{ dismissKB(); }catch(_){ }
  const R = $('#ob'); R.classList.add('on'); obPaint();
}
function obClose(){ const R = $('#ob'); if (!R) return; R.classList.remove('on'); R.innerHTML = ''; OB = null; }
function obDismiss(){ SEEN.onboard = true; scheduleSave(); obClose(); }   /* 不改任何设置，只是不再弹 */
function obGo(n){ OB.step = n; obPaint(); const b = $('#ob .ob-body'); if (b) b.scrollTop = 0; }
function obSkip(){   /* 这一步跳过：按默认，不留这一屏填的 */
  const s = OB.step;
  if (s === 2){ OB.name = ''; OB.city = null; OB.cityQ = ''; OB.bm = OB.bd = 0; OB.role = null; }
  else if (s === 3){ OB.lit.clear(); OB.said = null; }
  else if (s === 4){ OB.duty = false; OB.hello = true; }
  obGo(s + 1);
}
function obShell(n, body, foot, opts){
  opts = opts || {};
  return '<div class="ob-scr s' + n + '">'
    + '<div class="ob-top">' + (n > 1 ? '<button class="ob-back" id="obBack" aria-label="上一步">‹</button>' : '<span class="ob-back"></span>')
    + obFeet(n) + (opts.skip ? '<button class="ob-skip" id="obSkip">跳过</button>' : '<span class="ob-skip"></span>') + '</div>'
    + '<div class="ob-body">' + body + '</div>'
    + '<div class="ob-foot">' + foot + '</div></div>';
}
function obPaint(){
  const R = $('#ob'); if (!R || !OB) return;
  const s = OB.step;
  R.innerHTML = s === 1 ? obS1() : s === 2 ? obS2() : s === 3 ? obS3() : s === 4 ? obS4() : obS5();
  const bk = $('#obBack'); if (bk) bk.onclick = () => obGo(s - 1);
  const sk = $('#obSkip'); if (sk) sk.onclick = obSkip;
  [obB1, obB2, obB3, obB4, obB5][s - 1]();
}

/* ---- ① 上岛 ---- */
function obS1(){
  const lt = OB_LETTERS.map((L, i) => OB.opened.has(i)
    ? '<button class="ob-lt open" data-l="' + i + '"><span class="avs">' + L.pic.map(k => obAv(k, 'ob-lt-av')).join('') + '</span><b>' + L.t + '</b><span>' + L.s + '</span><i class="air"></i></button>'
    : '<button class="ob-lt r' + i + '" data-l="' + i + '"><svg class="flap" viewBox="0 0 112 70" preserveAspectRatio="none"><path d="M1 1 L56 62 L111 1" fill="#F6ECDA" stroke="#E3D2B6" stroke-width="1.2"/></svg>'
      + '<span class="seal">啾</span><span class="tip">拆开看看</span><i class="air"></i></button>').join('');
  return obShell(1,
    '<div class="ob-hero"><img src="' + OBIMG.ob_family + '" alt="岛上的大家"></div>'
    + '<div class="ob-t1 c">欢迎上岛，我是啾啾</div>'
    + '<div class="ob-t2 c">这是一个住着 14 位动物岛民的手帐岛。<br>想到什么，像发消息一样发给我，大家各管一摊事。</div>'
    + '<div class="ob-lcap"><img src="' + OBIMG.jj_env + '" alt=""><b>先拆开这三封信看看</b></div>'
    + '<div class="ob-letters">' + lt + '</div>'
    + '<div class="ob-priv"><svg width="13" height="14" viewBox="0 0 13 14"><rect x="1.5" y="6" width="10" height="7.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4 6 V4.2 A2.5 2.5 0 0 1 9 4.2 V6" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>不用注册，你的记录只住在这台手机里</div>'
    + '<div class="ob-paper-wrap" id="obPaper"></div>',
    '<button class="ob-btn" id="obNext">上岛 →</button><button class="ob-link" id="obOld">我是老岛民，从备份回来</button>');
}
function obB1(){
  $('#ob').querySelectorAll('.ob-lt').forEach(b => b.onclick = () => obLetter(+b.dataset.l));
  $('#obNext').onclick = () => obGo(2);
  $('#obOld').onclick = () => {
    obDismiss(); navStack = []; cur = {name:'data'}; render();
    toast('点「恢复备份」或「云备份」，把记录拿回来');
  };
}
function obLetter(i){
  const L = OB_LETTERS[i], W = $('#obPaper'); if (!W) return;
  W.innerHTML = '<div class="ob-paper"><div class="ob-paper-pic">' + L.pic.map(k => obAv(k, 'ob-paper-av')).join('') + '</div>'
    + '<b>' + L.t + '</b><small>' + L.s + '</small><p>' + L.b + '</p><button class="ob-btn sm" id="obPaperOk">收好</button></div>';
  W.classList.add('on');
  const done = () => { W.classList.remove('on'); W.innerHTML = ''; OB.opened.add(i); obPaint(); };
  $('#obPaperOk').onclick = done;
  W.onclick = ev => { if (ev.target === W) done(); };
}

/* ---- ② 岛民证 ---- */
function obIdDone(){ return !!(OB.name.trim() && OB.city && OB.bm && OB.bd && OB.role); }
function obS2(){
  const r = obRole(), ta = TODAY.split('.');
  const bdCtl = (OB.bm || OB.bd || OB.bdOpen)
    ? '<select class="ob-sel" id="obBm"><option value="">几月</option>' + Array.from({length:12}, (_, i) => '<option value="' + (i + 1) + '"' + (OB.bm === i + 1 ? ' selected' : '') + '>' + (i + 1) + ' 月</option>').join('') + '</select>'
      + '<select class="ob-sel" id="obBd"><option value="">几号</option>' + Array.from({length:31}, (_, i) => '<option value="' + (i + 1) + '"' + (OB.bd === i + 1 ? ' selected' : '') + '>' + (i + 1) + ' 日</option>').join('') + '</select>'
    : '<button class="ob-q" id="obBdQ">生日是哪天？</button>';
  return obShell(2,
    '<div class="ob-head"><img class="ob-stamper" src="' + OBIMG.jj_stamp + '" alt="" style="height:66px;width:auto"><div><div class="ob-t1">办一张岛民证</div><div class="ob-t3">都能空着，想填哪项填哪项</div></div></div>'
    + '<div class="ob-id"><i class="air"></i>'
    + '<div class="ob-idtop"><b>啾啾岛 · 岛民证</b><span>' + ta[0] + '.' + ta[1] + '.' + ta[2] + ' 上岛</span></div>'
    + '<div class="ob-idbody"><div class="ob-stampimg"><div class="in"><img src="' + JJ.h_post + '" alt=""></div></div><div class="ob-fields">'
    + '<div class="ob-f"><label>称呼</label><input class="ob-in" id="obName" maxlength="12" placeholder="怎么称呼你？" value="' + escAttr(OB.name) + '" autocomplete="off"></div>'
    + '<div class="ob-f"><label>城市</label><input class="ob-in" id="obCity" placeholder="你在哪座城市？" value="' + escAttr(OB.city ? OB.city.n : OB.cityQ) + '" autocomplete="off"><i>用来显示当地天气</i>'
    + '<div class="ob-cities" id="obCities"></div></div>'
    + '<div class="ob-f"><label>生日</label><span class="ob-bd">' + bdCtl + '</span><i>生日那天，早安卡会留句祝福</i></div>'
    + '<div class="ob-f last"><label>在忙</label><b class="ob-role' + (r ? '' : ' none') + '">' + (r ? r.n : '—') + '</b></div>'
    + '</div></div>'
    + '<div class="ob-rstamp' + (obIdDone() ? ' on' : '') + '" id="obStamp"><b>岛民证<br>办好了</b><small>啾啾岛 · 第 1 天</small></div>'
    + '</div>'
    + '<div class="ob-q2">你现在每天主要在忙……</div>'
    + '<div class="ob-who4">' + OB_ROLES.map(x => '<button class="ob-w' + (OB.role === x.k ? ' on' : '') + '" data-r="' + x.k + '">' + obAv(x.who, 'ob-wav') + x.n + '</button>').join('') + '</div>'
    + (r ? '<div class="ob-bubble">' + obAv(r.who, 'ob-bav') + '<p><b>' + OB_RES[r.who][1] + '</b>' + r.say + '</p></div>' : ''),
    '<button class="ob-btn" id="obNext">下一步</button>', {skip:true});
}
function obStampSync(){ const s = $('#obStamp'); if (s) s.classList.toggle('on', obIdDone()); }
function obCityPick(c){
  OB.city = {n:c[0], la:c[1], lo:c[2]}; OB.cityQ = '';
  const i = $('#obCity'); if (i){ i.value = c[0]; i.blur(); }
  const box = $('#obCities'); if (box){ box.innerHTML = ''; box.classList.remove('on'); }
  obStampSync();
}
function obCityList(){
  const box = $('#obCities'); if (!box) return;
  const q = OB.cityQ.trim();
  const hits = q ? WX_CITIES.filter(c => c[0].indexOf(q) >= 0 || q.indexOf(c[0]) >= 0).slice(0, 8) : WX_TOP.map(n => WX_CITIES.find(c => c[0] === n)).filter(Boolean);
  box.innerHTML = '<button class="gs-chip" data-geo="1">📍 定位</button>'
    + hits.map(c => '<button class="gs-chip" data-c="' + escAttr(c[0]) + '">' + vEsc(c[0]) + '</button>').join('')
    + (q && !hits.length ? '<span class="ob-none">没找到这座城市 · 先选个近的</span>' : '');
  box.classList.add('on');
  box.querySelectorAll('[data-c]').forEach(b => b.onpointerdown = ev => { ev.preventDefault(); obCityPick(WX_CITIES.find(c => c[0] === b.dataset.c)); });
  const g = box.querySelector('[data-geo]'); if (g) g.onpointerdown = ev => { ev.preventDefault(); obLocate(); };
}
function obLocate(){
  if (!navigator.geolocation){ toast('这台设备拿不到定位 · 直接选城市吧'); return; }
  toast('正在定位…');
  navigator.geolocation.getCurrentPosition(pos => {
    const la = pos.coords.latitude, lo = pos.coords.longitude;
    let best = null, bd = Infinity;
    WX_CITIES.forEach(c => { const dx = (c[2] - lo) * Math.cos(la * Math.PI / 180), dy = c[1] - la, d2 = dx * dx + dy * dy; if (d2 < bd){ bd = d2; best = c; } });
    if (best && Math.sqrt(bd) * 111 < 60) obCityPick(best);
    else { OB.city = {n:'我这儿', la, lo}; const i = $('#obCity'); if (i){ i.value = '我这儿'; i.blur(); } const box = $('#obCities'); if (box){ box.innerHTML = ''; box.classList.remove('on'); } obStampSync(); }
  }, () => toast('没拿到定位 · 直接选城市吧'), {timeout:8000, maximumAge:600000});
}
function obB2(){
  const nm = $('#obName');
  nm.oninput = () => { OB.name = nm.value; obStampSync(); };
  nm.onkeydown = ev => { if (ev.key === 'Enter'){ ev.preventDefault(); nm.blur(); } };
  const ci = $('#obCity');
  ci.onfocus = () => { OB.cityQ = OB.city ? '' : ci.value; if (OB.city) ci.select(); obCityList(); };
  ci.oninput = () => {
    OB.cityQ = ci.value; OB.city = null;
    const ex = WX_CITIES.find(c => c[0] === ci.value.trim()); if (ex) OB.city = {n:ex[0], la:ex[1], lo:ex[2]};
    obCityList(); obStampSync();
  };
  ci.onblur = () => setTimeout(() => { const box = $('#obCities'); if (box && document.activeElement !== ci){ box.classList.remove('on'); } if (!OB) return; if (!OB.city && ci.value.trim()) ci.value = ''; OB.cityQ = ''; }, 150);
  ci.onkeydown = ev => { if (ev.key === 'Enter'){ ev.preventDefault(); const q = ci.value.trim(); const hit = WX_CITIES.find(c => c[0].indexOf(q) >= 0); if (q && hit) obCityPick(hit); else ci.blur(); } };
  const q = $('#obBdQ'); if (q) q.onclick = () => { OB.bdOpen = true; obPaint(); const s = $('#obBm'); if (s) try{ s.focus(); }catch(_){ } };
  const bm = $('#obBm'), bd = $('#obBd');
  if (bm) bm.onchange = () => { OB.bm = +bm.value || 0; obStampSync(); };
  if (bd) bd.onchange = () => { OB.bd = +bd.value || 0; obStampSync(); };
  $('#ob').querySelectorAll('.ob-w[data-r]').forEach(b => b.onclick = () => { OB.role = b.dataset.r; obPaint(); const bb = $('#ob .ob-body'); if (bb) bb.scrollTop = bb.scrollHeight; });
  $('#obNext').onclick = () => obGo(3);
}

/* ---- ③ 先盖几栋房子 ---- */
function obS3(){
  const tags = OB_TAGS[OB.role] || {}, tagTx = OB.role === 'student' ? '学生党常盖' : '打工人常盖';
  const cells = obGrid().map(k => {
    const H = OB_HOUSES[k], lit = OB.lit.has(k);
    return '<button class="ob-hc ' + (lit ? 'lit' : 'off') + '" data-h="' + k + '">' + (tags[k] ? '<span class="tag">' + tagTx + '</span>' : '')
      + (lit ? '<span class="ok">✓</span>' : '') + '<span class="pic"><img src="' + JJ[H.img] + '" alt=""></span><b>' + H.n + '</b><span class="fn">' + H.f + '</span></button>';
  }).join('');
  const sd = OB.said && OB_HOUSES[OB.said];
  const n = OB.lit.size;
  return obShell(3,
    '<div class="ob-head">' + jjImg('happy', 56) + '<div><div class="ob-t1">先盖几栋房子？</div><div class="ob-t3">每栋房子住着一位岛民，各管一摊事。点一下盖起来，再点一下收起。</div></div></div>'
    + '<div class="ob-grid9">' + cells + '</div>'
    + (sd ? '<div class="ob-bubble">' + obAv(sd.who, 'ob-bav') + '<p><b>' + OB_RES[sd.who][1] + '</b>' + sd.say + '</p></div>' : '')
    + '<div class="ob-fine">信风邮局一直开着，管每天的记录和待办。<br>其他房子先挑常用的，以后随时能添能收。</div>',
    '<button class="ob-btn" id="obNext">' + (n ? '盖好 ' + n + ' 栋，下一步' : '先不盖，下一步') + '</button>', {skip:true});
}
function obB3(){
  $('#ob').querySelectorAll('.ob-hc[data-h]').forEach(b => b.onclick = () => {
    const k = b.dataset.h;
    if (OB.lit.has(k)){ OB.lit.delete(k); if (OB.said === k) OB.said = null; }
    else { OB.lit.add(k); OB.said = k; }
    const st = $('#ob .ob-body').scrollTop; obPaint(); $('#ob .ob-body').scrollTop = st;
  });
  $('#obNext').onclick = () => obGo(4);
}

/* ---- ④ 挑个提醒搭档 ---- */
function obS4(){
  const card = (duty, img, nm, house, say, mode, rec) => '<button class="ob-pc' + (OB.duty === duty ? ' on' : '') + '" data-duty="' + (duty ? 1 : 0) + '">'
    + '<span class="pic"><img src="' + OBIMG[img] + '" alt=""></span>' + (rec ? '<span class="rec">推荐</span>' : '') + (OB.duty === duty ? '<span class="ok">✓</span>' : '')
    + '<span class="tx"><span class="nm"><b>' + nm + '</b><small>' + house + '</small></span><span class="say">' + say + '</span>'
    + '<span class="mode">' + mode + '</span></span></button>';
  return obShell(4,
    '<div class="ob-t1 c" style="margin-top:6px">没做完的事，想让谁陪你？</div><div class="ob-t3 c">选一位就好，以后在设置里能换</div>'
    + '<div class="ob-pair">'
    + card(false, 'pt_pelican', '阿兜', '心愿灯塔', '「没定日子、今天也没做完的，先放我兜里。」', '<b>温和</b> · 没做完的不堆在眼前，收进心愿灯塔，不催你', true)
    + card(true, 'pt_woodp', '笃笃', '滴答钟楼', '「早上看看还要做什么，晚上再过一遍。」', '<b>规律</b> · 早上一件件过，晚上复盘再过一遍', false)
    + '</div>'
    + '<div class="ob-hello"><div class="mini"><div class="d">' + fmtKey(TODAY) + ' · ' + weekCN(TODAY) + '</div><div class="w2">' + vEsc(OB.city ? OB.city.n : '') + ' 天气</div>' + jjImg('nest', 50) + '</div>'
    + '<div class="hq"><b>早上打开时，要看早安卡吗？</b><div class="ob-t3">当地天气和今天的待办</div>'
    + '<div class="ob-pills"><button data-hl="1" class="' + (OB.hello ? 'on' : '') + '">要</button><button data-hl="0" class="' + (OB.hello ? '' : 'on') + '">先不用</button></div></div></div>',
    '<button class="ob-btn" id="obNext">下一步</button>', {skip:true});
}
function obB4(){
  $('#ob').querySelectorAll('.ob-pc[data-duty]').forEach(b => b.onclick = () => { OB.duty = b.dataset.duty === '1'; obPaint(); });
  $('#ob').querySelectorAll('[data-hl]').forEach(b => b.onclick = () => { OB.hello = b.dataset.hl === '1'; obPaint(); });
  $('#obNext').onclick = () => obGo(5);
}

/* ---- ⑤ 你的岛盖好啦 ---- */
function obIsleHTML(){
  const pc = (x, y) => 'left:' + (x / OB_ISLE_W * 100).toFixed(2) + '%;top:' + (y / OB_ISLE_H * 100).toFixed(2) + '%';
  const items = [];
  Object.keys(OB_PLOT).forEach(k => {
    const [x, y, w] = OB_PLOT[k];
    const always = k === 'cycles' || k === 'someday';
    const built = always || OB.lit.has(k);
    const img = k === 'cycles' ? 'h_cycles' : k === 'someday' ? 'h_someday' : (OB_HOUSES[k] || {}).img;
    if (built && img) items.push({y, h:'<span class="ob-ih' + (always ? '' : ' new') + '" style="' + pc(x, y + w * 0.16) + ';width:' + (w * 0.9 / OB_ISLE_W * 100).toFixed(2) + '%"><img src="' + JJ[img] + '" alt=""></span>'});
    else items.push({y, h:'<span class="ob-sign" style="' + pc(x, y + w * 0.12) + '"><img src="' + OBIMG.sign + '" alt=""></span>'});   /* v3.3.1 画好的小木牌 */
  });
  items.push({y:OB_PLAZA[1], h:'<span class="ob-ih post" style="' + pc(OB_PLAZA[0], OB_PLAZA[1] + 40) + ';width:' + (OB_PLAZA[2] * 0.6 / OB_ISLE_W * 100).toFixed(2) + '%"><img src="' + JJ.h_post + '" alt="信风邮局"></span>'});
  items.sort((a, b) => a.y - b.y);
  return '<div class="ob-isle"><img class="base" src="' + OBIMG.ob_isle + '" alt="小岛">' + items.map(x => x.h).join('') + '<img class="jj" src="' + OBIMG.jj_stand + '" alt=""></div>';
}
function obS5(){
  const chips = (OB.name.trim() ? '<span>岛民 · ' + vEsc(OB.name.trim()) + '</span>' : '')
    + '<span>搭档 · ' + (OB.duty ? '笃笃' : '阿兜') + '</span><span>早安卡 · ' + (OB.hello ? '每天' : '先不用') + '</span>';
  return obShell(5,
    '<div class="ob-t1 c big">你的岛盖好了</div>' + obIsleHTML()
    + '<div class="ob-recap">' + chips + '</div>'
    + '<div class="ob-t2 c sm">空地还留着，想盖随时去<br><b>设置 → 岛上的房子</b></div>',
    '<button class="ob-btn" id="obNext">' + (OB.again ? '好了' : '写下第一条') + '</button>');
}
function obB5(){ $('#obNext').onclick = obFinish; }

/* ---- 写进设置 ---- */
function obHouseSet(k, on){
  if (ISLE_MOD[k]){
    SET.mods[ISLE_MOD[k]] = on;
    if (k === 'food' && on){ delete SET.mealsUserOff; houseGroup('food', true); }
  } else {
    SET.isle = SET.isle || {}; SET.isle.on = SET.isle.on || {}; SET.isle.on[k] = on;
    if (on) houseGroup(k, true);
  }
}
function obApply(){
  const o = OB;
  SET.me = SET.me || {marks:[]};
  const nm = o.name.trim(); if (nm) SET.me.name = nm; else delete SET.me.name;
  if (o.bm && o.bd) SET.me.bday = o.bm + '.' + o.bd; else delete SET.me.bday;
  if (o.role) SET.me.role = o.role; else delete SET.me.role;
  if (o.city) wxAddCity(o.city);
  OB_EIGHT.forEach(k => obHouseSet(k, o.lit.has(k)));
  SET.gtpl = SET.gtpl || {};
  if (o.lit.has('study') && !tplGroupName('study')){ if (!extraGroups.includes('学习')) extraGroups.push('学习'); SET.gtpl['学习'] = 'study'; }
  if (o.lit.has('work') && !tplGroupName('work') && !extraGroups.includes('工作')) extraGroups.push('工作');
  if (!o.again && !o.lit.has('work')){   /* 新岛民没盖工坊：默认带的 #工作 没人用就收起来 */
    let used = false; walk((d, e) => { if ((e.groups || []).includes('工作')) used = true; });
    if (!used) extraGroups = extraGroups.filter(g => g !== '工作');
  }
  ISLE_DEF = null;
  SET.isle = SET.isle || {}; SET.isle.pin = islePins().filter(k => isleOn(k));
  SET.duty = !!o.duty;
  SET.mods.hello = !!o.hello;
  SEEN.onboard = true;
  if (!o.again){ P().hello = 1; SET.obLand = {day:TODAY, role:o.role || ''}; }
  scheduleSave();
}
function obFinish(){
  const again = OB.again;
  obApply(); obClose();
  navStack = []; cur = {name:'today'}; render();
  if (again) toast('岛上改好了');
  else if (modOn('hello')) openHello(false);
}
/* ---- 落地：待办下面一张纸条；第一天三栏下的浅色小字 ---- */
function obExample(){ const r = (SET.obLand || {}).role; return r === 'student' ? '周五下午三点 交实验报告' : r === 'worker' ? '明天下午三点 交周报' : '明天上午十点 去取快递'; }
function obSlipNode(){
  const ex = obExample();
  const d = document.createElement('div'); d.className = 'ob-slip'; d.id = 'obSlip';
  d.innerHTML = '<img src="' + OBIMG.jj_env + '" alt=""><div><div class="k">啾啾送来一张纸条</div><b>点这句，填进输入框试试：' + vEsc(ex) + '</b><div class="s">点发送后，我会告诉你记在了哪里。</div></div>';
  d.onclick = () => { const i = $('#chatIn'); if (!i) return; i.value = ex; chatGrow(); chatFocus(); };
  return d;
}

/* 晨露小站页面：仅使用本地记录；与全量/云备份共用 HEALTH。 */
let HEALTH_PART='waist', HEALTH_UNDO_WATER=null, HEALTH_LIMIT=40;
function healthToday(){return key2iso(dkey(effNow()));}
function healthClock(){const n=new Date();return String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');}
function healthId(){return 'hl_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,10);}
function healthDateLabel(s){return s?Number(s.slice(5,7))+'月'+Number(s.slice(8,10))+'日':'尚未记录';}
function healthCommit(){scheduleSave();navFromBack=true;render();}
function healthCount(){return HEALTH_MODULES.reduce((n,k)=>n+HEALTH.records[k].length,0);}
function healthChart(rows,unit,bars,period){
 if(!rows.some(r=>r.value!=null))return '<div class="health-empty">记下第一条，变化会出现在这里。</div>';
 const vals=rows.filter(r=>r.value!=null).map(r=>r.value),min=Math.min(...vals),max=Math.max(...vals),pad=Math.max((max-min)*.15,unit==='kg'||unit==='cm'?.5:1);
 const lo=bars?0:Math.max(0,min-pad),hi=bars?Math.max(1,max*1.18):max+pad,left=48,right=306,top=15,bottom=143;
 const yy=v=>bottom-(v-lo)/(hi-lo)*(bottom-top),days=rows.map(r=>Date.parse(r.date+'T00:00:00Z')),from=Math.min(...days),to=Math.max(...days);
 const xx=i=>bars?left+(i+.5)*(right-left)/rows.length:to===from?(left+right)/2:left+(days[i]-from)/(to-from)*(right-left);
 const fmt=v=>Number.isInteger(v)?String(v):v.toFixed(1),short=s=>Number(s.slice(5,7))+'/'+Number(s.slice(8,10));
 let svg='<svg class="health-chart" viewBox="0 0 320 190" role="img" aria-label="'+vEsc((bars?'记录柱状图':'变化折线图')+'，单位'+unit)+'"><title>'+vEsc(rows.map(r=>r.date+'：'+(r.value==null?'未记录':r.value+unit)).join('；'))+'</title>';
 [lo,(lo+hi)/2,hi].forEach(v=>{const y=yy(v);svg+='<line class="hl-grid" x1="48" x2="306" y1="'+y+'" y2="'+y+'"/><text x="41" y="'+(y+5)+'" text-anchor="end">'+fmt(v)+'</text>';});
 if(!bars){let p='';rows.forEach((r,i)=>{if(r.value==null){p='';return;}const q=xx(i)+','+yy(r.value);if(p)svg+='<line class="hl-line" x1="'+p.split(',')[0]+'" y1="'+p.split(',')[1]+'" x2="'+xx(i)+'" y2="'+yy(r.value)+'"/>';p=q;});}
 rows.forEach((r,i)=>{const x=xx(i);if(r.value==null){svg+='<text x="'+x+'" y="138" text-anchor="middle">—</text>';return;}const y=yy(r.value),caption=r.date+'：'+r.value+' '+unit;
 if(bars){const width=Math.min(26,(right-left)/rows.length*.64);svg+='<rect tabindex="0" role="img" aria-label="'+caption+'" class="hl-hit '+(period?'hl-period-bar':'hl-bar')+'" x="'+(x-width/2)+'" y="'+y+'" width="'+width+'" height="'+(bottom-y)+'" rx="3"><title>'+caption+'</title></rect>';}
 else svg+='<circle tabindex="0" role="img" aria-label="'+caption+'" class="hl-hit hl-point" cx="'+x+'" cy="'+y+'" r="4"><title>'+caption+'</title></circle>';
 });
 [...new Set([0,Math.floor((rows.length-1)/2),rows.length-1])].forEach(i=>{const x=xx(i);svg+='<text x="'+x+'" y="164" text-anchor="'+(!bars&&i===0&&rows.length>1?'start':!bars&&i===rows.length-1&&rows.length>1?'end':'middle')+'">'+short(rows[i].date)+'</text>';});
 return svg+'<text x="48" y="187">日期</text><text x="306" y="187" text-anchor="end">'+unit+'</text></svg>';
}
function healthLog(kind){
 const rows=healthSorted(HEALTH.records[kind]).reverse();if(!rows.length)return '';
 let html='<div class="health-log">',date='';
 rows.slice(0,HEALTH_LIMIT).forEach(r=>{if(r.date!==date){date=r.date;html+='<div class="date-group">'+vEsc(r.date.replaceAll('-','.'))+(date===healthToday()?' · 今天':'')+'</div>';}
 const value=kind==='weight'?r.value+' kg':kind==='water'?r.ml+' ml':kind==='size'?Object.keys(HEALTH_DIMS).filter(k=>r.values[k]!=null).map(k=>HEALTH_DIMS[k]+' '+r.values[k]+' cm').join(' · '):healthDateLabel(r.date)+' — '+(r.end?healthDateLabel(r.end)+' · '+(healthDays(r.date,r.end)+1)+'天':'记录中');
 html+='<div class="health-row"><span class="hl-sym">○</span><div class="hl-body">'+vEsc(value)+(kind==='water'?'<small>'+vEsc(r.time)+'</small>':'')+(r.note?'<small>'+vEsc(r.note)+'</small>':'')+'</div><button class="hl-link" data-hl-edit="'+escAttr(r.id)+'" aria-label="修改'+HEALTH_LABELS[kind]+'记录">修改</button></div>';
 });
 if(rows.length>HEALTH_LIMIT)html+='<button class="hl-link" data-hl-more>再看40条</button>';
 return html+'</div>';
}
function healthWeightHTML(){
 const r=healthLatest(HEALTH.records.weight),m=healthMetrics(HEALTH.profile,r&&r.value);
 return '<div class="health-pan"><div class="health-heading"><span>'+(r?'最近一次 · '+vEsc(r.date.replaceAll('-','.')):'还没有体重记录')+'</span><button class="hl-link" data-hl-action="profile">身体资料 ›</button></div><div class="health-nums"><div><b>'+(r?r.value+'<small>kg</small>':'—')+'</b><span>当前体重</span></div><div><b>'+(m.ree==null?'—':m.ree)+'</b><span>预计代谢 · kcal/天</span></div><div><b>'+(m.bmi==null?'—':m.bmi.toFixed(1))+'</b><span>BMI</span></div></div></div><div class="health-pan"><div class="health-heading"><span>体重变化 · 最近30个记录日</span><button class="hl-link" data-hl-action="record">＋ 记体重</button></div>'+healthChart(healthDaily(HEALTH.records.weight,r=>r.value).slice(-30),'kg',false)+'</div>'+healthLog('weight');
}
function healthSizeHTML(){
 const key=HEALTH_PART,geo={waist:[44,86,108],chest:[43,87,76],hip:[43,87,135],thigh:[46,62,176],calf:[46,59,224],back:[39,91,61]}[key],latest={};
 Object.keys(HEALTH_DIMS).forEach(k=>latest[k]=healthLatest(HEALTH.records.size.filter(r=>r.values[k]!=null)));
 const dims=Object.keys(HEALTH_DIMS).map(k=>'<button class="health-dim'+(key===k?' on':'')+'" data-hl-part="'+k+'" aria-pressed="'+(key===k)+'">'+HEALTH_DIMS[k]+'<b>'+(latest[k]?latest[k].values[k]+' <small>cm</small>':'—')+'</b></button>').join('');
 const body='<svg class="health-body" viewBox="0 0 130 270" role="img" aria-label="'+(key==='back'?'背面':'正面')+'示意，'+HEALTH_DIMS[key]+'测量位置"><circle class="hl-outline" cx="65" cy="24" r="15"/><path class="hl-outline" d="M57 40L57 46Q43 47 38 57L24 107Q23 114 29 116Q34 116 37 108L47 80L46 112Q43 130 43 144L46 194L46 247Q45 253 38 257L38 262L56 262Q60 259 59 250L61 197L65 160L69 197L71 250Q70 259 74 262L92 262L92 257Q85 253 84 247L84 194L87 144Q87 130 84 112L83 80L93 108Q96 116 101 116Q107 114 106 107L92 57Q87 47 73 46L73 40"/><path class="hl-detail" d="'+(key==='back'?'M65 52V113M48 64Q56 75 61 74M82 64Q74 75 69 74':'M65 55V100')+'"/><path class="hl-measure" d="M'+geo[0]+' '+geo[2]+'H'+geo[1]+'"/><circle class="hl-dot" cx="'+geo[1]+'" cy="'+geo[2]+'" r="3"/></svg>';
 return '<div class="health-pan"><div class="health-heading"><span>身体围度 · cm</span><button class="hl-link" data-hl-action="record">＋ 记围度</button></div><div class="health-size"><div>'+body+'<div class="health-body-label">'+(key==='back'?'背面':'正面')+' · '+HEALTH_DIMS[key]+'</div></div><div class="health-dims">'+dims+'</div></div><p class="health-note">'+HEALTH_DIMS[key]+'最近记录：'+(latest[key]?vEsc(latest[key].date):'尚未记录')+'</p></div><div class="health-pan"><div class="health-heading"><span>'+HEALTH_DIMS[key]+'变化</span><span>最近30个记录日</span></div>'+healthChart(healthDaily(HEALTH.records.size,r=>r.values[key]).slice(-30),'cm',false)+'</div>'+healthLog('size');
}
function healthPeriodHTML(){
 const f=healthForecast(HEALTH,healthToday()),open=HEALTH.records.period.find(r=>!r.end),n=HEALTH.cycleLength;
 const count=f&&f.next?(f.remaining>0?'约'+f.remaining+'天后':f.remaining===0?'预计今天':'预计日期已过'+(-f.remaining)+'天'):'';
 let track='';if(f&&n){const length=f.last.end?healthDays(f.last.date,f.last.end)+1:f.day;track='<div class="health-track" aria-label="周期第'+f.day+'天"><div class="hl-days" style="width:'+Math.min(100,length/n*100)+'%"></div><span class="hl-today" style="left:'+Math.max(1,Math.min(99,(f.day-1)/n*100))+'%"></span></div>';}
 return '<div class="health-pan"><div class="health-heading"><span>下一次经期 · 预计</span><button class="hl-link" data-hl-action="cycle">设置周期 ›</button></div><div class="health-forecast"><div><b>'+(f&&f.next?healthDateLabel(f.next):'尚未预计')+'</b><span>'+(f&&f.next?'前后 · 仅作日期参考':!f?'记下上次开始日期':'填入你的生理周期')+'</span></div><div class="hl-count">'+count+(f?'<br><span>周期第'+f.day+'天</span>':'')+'</div></div>'+track+'<div class="health-cycle"><span>你的生理周期 <b>'+(n||'—')+'</b> 天</span><button class="hl-link" data-hl-action="cycle">修改</button></div>'+(f?'<p class="health-note">上次开始 '+vEsc(f.last.date)+(f.last.end?' · 持续'+(healthDays(f.last.date,f.last.end)+1)+'天':' · 记录中')+'</p>':'')+'</div><div class="health-quick"><button class="chip" data-hl-action="period-start" '+(open?'disabled':'')+'>今天来了</button><button class="chip" data-hl-action="period-end" '+(!open?'disabled':'')+'>这次结束了</button><button class="chip" data-hl-action="record">补记经期</button></div><div class="health-pan"><div class="health-heading"><span>历次经期持续时间</span><span>天</span></div>'+healthChart(healthSorted(HEALTH.records.period.filter(r=>r.end)).slice(-6).map(r=>({date:r.date,value:healthDays(r.date,r.end)+1})),'天',true,true)+'</div>'+healthLog('period');
}
function healthWaterHTML(){
 const today=healthToday(),rows=HEALTH.records.water.filter(r=>r.date===today),total=rows.reduce((s,r)=>s+r.ml,0),goal=healthWaterTarget(HEALTH),pct=goal?Math.min(100,total/goal*100):0,done=goal&&total>=goal;
 return '<div class="health-pan"><div class="health-heading"><span>今天的饮水</span><button class="hl-link" data-hl-action="goal">调整目标 ›</button></div><div class="health-water"><div class="health-cup" role="progressbar" aria-label="今日饮水目标进度" aria-valuemin="0" '+(goal?'aria-valuemax="'+goal+'" aria-valuenow="'+Math.min(goal,total)+'"':'')+' aria-valuetext="已记录'+total+'毫升，'+(goal?'目标'+goal+'毫升':'尚未设置目标')+'"><div class="health-fill" style="height:'+pct+'%"></div><span>'+(goal?Math.round(pct)+'%':'—')+'</span></div><div class="health-water-value"><b>'+total+' <small>ml</small></b><p>'+(goal?(HEALTH.waterGoal.mode==='manual'?'自定目标 ':'建议每日 ')+goal+' ml':'设置每日目标')+'</p><div class="health-status'+(done?' done':'')+'">'+(goal?(done?'已完成今日目标':'未完成 · 还差'+(goal-total)+' ml'):'先设置目标')+'</div></div></div><div class="health-quick"><button class="chip" data-hl-water="200">＋200 ml</button><button class="chip on" data-hl-water="250">＋一杯250 ml</button><button class="chip" data-hl-water="500">＋500 ml</button></div><div class="health-subrow"><span>今天记了'+rows.length+'次</span>'+(HEALTH_UNDO_WATER&&HEALTH.records.water.some(r=>r.id===HEALTH_UNDO_WATER)?'<button class="hl-link" data-hl-action="water-undo">撤回上一杯</button>':'<button class="hl-link" data-hl-action="record">补记饮水</button>')+'</div><p class="health-note">少量多次，达到目标后按需饮水。</p></div><div class="health-pan"><div class="health-heading"><span>近7天饮水记录</span><button class="hl-link" data-hl-action="record">＋ 记饮水</button></div>'+healthChart(healthWaterDays(HEALTH,today),'ml',true)+'<p class="health-note">— 表示未记录；今天为目前累计量。</p></div>'+healthLog('water');
}
function renderHealth(){
 view.appendChild(letterHouseHead('health'));
 const visible=HEALTH.order.filter(k=>!HEALTH.hidden.includes(k));
 if(!visible.includes(cur.tab))cur.tab=visible[0]||null;
 const page=document.createElement('div');page.className='health-page';page.id='healthPage';
 page.innerHTML='<div class="health-tabs">'+visible.map(k=>'<button class="chip'+(cur.tab===k?' on':'')+'" data-hl-tab="'+k+'" aria-pressed="'+(cur.tab===k)+'">'+HEALTH_LABELS[k]+'</button>').join('')+'<button class="hl-link" data-hl-action="manage">管理</button></div>'+(cur.tab?{weight:healthWeightHTML,size:healthSizeHTML,period:healthPeriodHTML,water:healthWaterHTML}[cur.tab]():'<div class="health-empty">暂未显示板块<br>从“管理”里恢复需要的内容，原记录都还在。</div>')+'<div class="health-footer"><span>晨露小站 · 呦呦</span><button class="hl-link" data-hl-action="about">关于这些数字 ⓘ</button></div>';
 towerHealthLinks(page);
 page.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;
  const d=b.dataset;
  if(d.hlTab){cur.tab=d.hlTab;HEALTH_LIMIT=40;navFromBack=true;render();}
  else if(d.hlPart){HEALTH_PART=d.hlPart;navFromBack=true;render();}
  else if(d.hlWater)healthAddWater(Number(d.hlWater));
  else if(d.hlEdit)healthRecordSheet(cur.tab,d.hlEdit);
  else if(d.hlMore!==undefined){HEALTH_LIMIT+=40;const y=view.scrollTop;navFromBack=true;render();view.scrollTop=y;}
  else if(d.hlAction){
   const a=d.hlAction;
   if(a==='record')healthRecordSheet(cur.tab);
   else if(a==='manage')healthManage();
   else if(a==='about')healthAbout();
   else if(a==='water-undo'){HEALTH.records.water=HEALTH.records.water.filter(r=>r.id!==HEALTH_UNDO_WATER);HEALTH_UNDO_WATER=null;healthCommit();}
   else if(a==='period-start'){const r={id:healthId(),date:healthToday(),end:null,note:'',createdAt:Date.now()},err=healthPeriodError(HEALTH.records.period,r,healthToday());if(err){toast(err);return;}HEALTH.records.period.push(r);healthCommit();}
   else if(a==='period-end'){const r=HEALTH.records.period.find(r=>!r.end);if(r)healthRecordSheet('period',r.id,true);}
   else healthSettings(a);
  }
 });view.appendChild(page);
}
function healthAddWater(ml){
 const r={id:healthId(),date:healthToday(),time:healthClock(),ml,note:'',createdAt:Date.now()};HEALTH.records.water.push(r);HEALTH_UNDO_WATER=r.id;healthCommit();
}
function healthSheet(title,content){
 dismissKB();const s=$('#gsheet');s.innerHTML='<div class="health-form"><div class="hl-head"><h3>'+vEsc(title)+'</h3><button class="hl-link" id="hlClose" type="button">关闭</button></div>'+content+'<div class="health-error" id="hlError" role="alert"></div></div>';
 $('#hlClose').onclick=closeSheet;s.classList.add('on');$('#mask').classList.add('on');return s;
}
function healthInput(label,name,value,attrs){return '<label>'+label+'<input name="'+name+'" value="'+escAttr(value==null?'':String(value))+'" '+(attrs||'')+'></label>';}
function healthForm(content,label,remove){return '<form id="hlForm"><div class="health-form-grid">'+content+'</div><div class="hl-actions"><button class="rv-confirm" type="submit">'+(label||'保存')+'</button>'+(remove?'<button type="button" id="hlDelete" class="hl-delete">删除记录</button>':'')+'</div></form>';}
function healthSettings(kind){
 let html='',title='';const p=HEALTH.profile;
 if(kind==='profile'){
  title='身体资料';html=healthInput('身高 · cm','height',p.height,'type="number" inputmode="decimal" min="50" max="250" step="0.1"')+healthInput('年龄 · 岁','age',p.age,'type="number" inputmode="numeric" min="1" max="120" step="1"')+'<label class="hl-full">公式使用的生理性别<select name="sex"><option value="">暂不填写</option><option value="f" '+(p.sex==='f'?'selected':'')+'>女</option><option value="m" '+(p.sex==='m'?'selected':'')+'>男</option></select></label><label class="hl-full hl-check"><input name="general" type="checkbox" '+(p.general?'checked':'')+'>使用一般成人估算（非孕哺期，无特殊体重或限水要求）</label>';
 }else if(kind==='cycle'){
  title='你的生理周期';html=healthInput('两次开始日之间 · 天','cycle',HEALTH.cycleLength,'type="number" inputmode="numeric" min="1" max="120" step="1" required')+'<p class="hl-full">填入你自己的周期，用于估算下一次开始日期。</p>';
 }else if(kind==='goal'){
  title='每日饮水目标';const suggestion=healthWaterTarget({...HEALTH,waterGoal:{mode:'suggested'}});
  html='<label class="hl-full">目标来源<select name="mode" id="hlGoalMode"><option value="suggested" '+(HEALTH.waterGoal.mode==='suggested'?'selected':'')+'>一般成人建议'+(suggestion?' · '+suggestion+' ml':' · 需补全身体资料')+'</option><option value="manual" '+(HEALTH.waterGoal.mode==='manual'?'selected':'')+'>自己设置</option></select></label>'+healthInput('自定每日目标 · ml','ml',HEALTH.waterGoal.ml,'type="number" inputmode="numeric" min="1" max="10000" step="1" id="hlGoalMl"')+'<p class="hl-full">建议依据与适用条件收在页底说明里。有特殊饮水要求时，可按医嘱自定。</p>';
 }else return;
 healthSheet(title,healthForm(html));
 if(kind==='goal'){const sync=()=>{const manual=$('#hlGoalMode').value==='manual';$('#hlGoalMl').disabled=!manual;$('#hlGoalMl').required=manual;};$('#hlGoalMode').onchange=sync;sync();}
 $('#hlForm').onsubmit=e=>{
  e.preventDefault();const f=new FormData(e.target);
  if(kind==='profile')HEALTH.profile={height:f.get('height')?Number(f.get('height')):null,age:f.get('age')?Number(f.get('age')):null,sex:String(f.get('sex')),general:f.has('general')};
  if(kind==='cycle')HEALTH.cycleLength=Number(f.get('cycle'));
  if(kind==='goal'){
   const goal={mode:String(f.get('mode')),ml:f.get('mode')==='manual'?Number(f.get('ml')):null};
   if(goal.mode==='suggested'&&!healthWaterTarget({...HEALTH,waterGoal:goal})){$('#hlError').textContent='先在体重页填写身体资料，或选择自己设置目标。';return;}
   HEALTH.waterGoal=goal;
  }
  closeSheet();healthCommit();
 };
}
function healthRecordSheet(kind,id,endNow){
 const old=id?HEALTH.records[kind].find(r=>r.id===id):null;if(id&&!old)return;
 const r=old||{date:healthToday(),note:''};
 let fields=healthInput(kind==='period'?'开始日期':'记录日期','date',r.date,'type="date" max="'+healthToday()+'" required');
 if(kind==='weight')fields+=healthInput('体重 · kg','value',old?r.value:null,'type="number" inputmode="decimal" min="1" max="500" step="0.1" required');
 if(kind==='size')fields+='<p>测量同一位置，方便看变化。</p>'+Object.keys(HEALTH_DIMS).map(k=>healthInput(HEALTH_DIMS[k]+' · cm',k,old?r.values[k]:null,'type="number" inputmode="decimal" min="0.1" max="300" step="0.1"')).join('');
 if(kind==='water')fields+=healthInput('时间','time',r.time||healthClock(),'type="time" required')+healthInput('饮水量 · ml','ml',old?r.ml:250,'type="number" inputmode="numeric" min="1" max="10000" step="1" required');
 if(kind==='period')fields+=healthInput('结束日期 · 可暂不填','end',endNow?healthToday():r.end,'type="date" max="'+healthToday()+'"');
 fields+='<label class="hl-full">备注 · 选填<textarea name="note" rows="2" maxlength="1000">'+vEsc(r.note||'')+'</textarea></label>';
 healthSheet((old?'修改':'记录')+HEALTH_LABELS[kind],healthForm(fields,old?'保存修改':'记下',!!old));
 $('#hlForm').onsubmit=e=>{
  e.preventDefault();const f=new FormData(e.target),record={id:old?old.id:healthId(),date:String(f.get('date')),note:String(f.get('note')||'').trim(),createdAt:old?old.createdAt:Date.now()};
  if(!healthValidDate(record.date)||record.date>healthToday()){$('#hlError').textContent='请选择今天或过去的日期。';return;}
  if(kind==='weight')record.value=Number(f.get('value'));
  if(kind==='water'){record.ml=Number(f.get('ml'));record.time=String(f.get('time'));}
  if(kind==='size'){record.values={};Object.keys(HEALTH_DIMS).forEach(k=>{if(f.get(k))record.values[k]=Number(f.get(k));});if(!Object.keys(record.values).length){$('#hlError').textContent='至少填一个本次测量的部位。';return;}}
  if(kind==='period'){record.end=f.get('end')?String(f.get('end')):null;const err=healthPeriodError(HEALTH.records.period,record,healthToday());if(err){$('#hlError').textContent=err;return;}}
  if(!healthRecordValid(kind,record)){$('#hlError').textContent='请检查填写的数值。';return;}
  if(old)HEALTH.records[kind][HEALTH.records[kind].findIndex(x=>x.id===old.id)]=record;else HEALTH.records[kind].push(record);
  if(kind==='water')HEALTH_UNDO_WATER=null;
  closeSheet();healthCommit();
 };
 if(old){let confirm=false;$('#hlDelete').onclick=()=>{if(!confirm){confirm=true;$('#hlDelete').textContent='再点一次删除';return;}HEALTH.records[kind]=HEALTH.records[kind].filter(x=>x.id!==old.id);if(kind==='water')HEALTH_UNDO_WATER=null;closeSheet();healthCommit();};}
}
function healthManage(){
 const active=HEALTH.order.filter(k=>!HEALTH.hidden.includes(k)),off=HEALTH.order.filter(k=>HEALTH.hidden.includes(k));
 const rows=active.map((k,i)=>'<div class="health-module"><span>'+HEALTH_LABELS[k]+'</span><button data-hl-move="'+k+'" data-step="-1" '+(i===0?'disabled':'')+' aria-label="'+HEALTH_LABELS[k]+'前移">前移</button><button data-hl-move="'+k+'" data-step="1" '+(i===active.length-1?'disabled':'')+' aria-label="'+HEALTH_LABELS[k]+'后移">后移</button><button data-hl-remove="'+k+'" aria-label="移除'+HEALTH_LABELS[k]+'板块">移除</button></div>').join('');
 const s=healthSheet('我的健康板块','<p>移除只收起入口，原记录保留，随时可以恢复。</p>'+rows+(off.length?'<h4>已移除</h4>':'')+off.map(k=>'<div class="health-module"><span>'+HEALTH_LABELS[k]+'</span><button data-hl-restore="'+k+'">恢复</button></div>').join(''));
 s.querySelectorAll('[data-hl-remove],[data-hl-restore],[data-hl-move]').forEach(b=>b.onclick=()=>{const d=b.dataset;if(d.hlRemove)HEALTH.hidden.push(d.hlRemove);if(d.hlRestore)HEALTH.hidden=HEALTH.hidden.filter(k=>k!==d.hlRestore);if(d.hlMove){const i=active.indexOf(d.hlMove),j=i+Number(d.step);if(j>=0&&j<active.length){[active[i],active[j]]=[active[j],active[i]];HEALTH.order=active.concat(off);}}healthCommit();healthManage();});
}
function healthAbout(){
 const p=HEALTH.profile,range=healthAdult(p)&&p.height?'<p>按已填身高，一般成人体重参考约 '+(18.5*(p.height/100)**2).toFixed(1)+' 至 '+(24*(p.height/100)**2).toFixed(1)+' kg（上界不含，显示已四舍五入）。参考范围不是减重目标。</p>':'';
 healthSheet('关于这些数字','<h4>体重与BMI</h4><p>BMI＝体重kg÷身高m²。中国一般成人参考区间为18.5≤BMI＜24；不依性别改变，也不能单凭BMI判断个人健康。<a href="https://www.nhc.gov.cn/jkj/s10045/200907/943149b60565497bb3e25783a0e3de68.shtml" target="_blank" rel="noopener noreferrer">计算依据</a></p>'+range+'<h4>预计代谢</h4><p>这里是静息能量消耗估算，不是实测基础代谢、全天总消耗或建议摄入热量。Mifflin公式：10×体重kg＋6.25×身高cm－5×年龄，男性再加5，女性减161。结果按10kcal/天取整。<a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noopener noreferrer">研究来源</a></p><p>当前一般估算限定18—64岁、非孕哺期且无特殊体重管理要求的成人；资料不全或不适用时显示“—”，仍能记录。体脂率仅凭身高体重推算误差较大，本页不提供估计值。</p><h4>经期预计日期</h4><p>上次实际开始日＋你填写的周期天数。周期可能变化，日期仅作参考，不用于判断排卵或避孕。预计日期不会自动生成实际经期记录。<a href="https://www.nhs.uk/symptoms/irregular-periods/" target="_blank" rel="noopener noreferrer">周期说明</a></p><h4>饮水建议</h4><p>温和气候、低身体活动水平的一般成年男性1700ml、女性1500ml，为直接饮水量，不含食物中的水。气候和活动等会影响需要量；有特殊限水要求时按医嘱自定。杯子只统计已记录量，达到目标后按需饮水。<a href="https://www.ndcpa.gov.cn/jbkzzx/c100040/common/content/content_2104761364364300288.html" target="_blank" rel="noopener noreferrer">建议来源</a></p><h4>记录与备份</h4><p>记录保存在本机，随完整JSON备份一起导出；启用GitHub云备份时也会包含健康记录。Markdown导出仅包含手帐正文，不含这里的结构化记录。移除板块保留数据；修改记录里可以单独删除。</p>');
}

const WELCOME_LETTERS = {
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
}
;
const POSTCARD_SCENES = [
  {
    "id": "food-1",
    "owner": "food",
    "requires": [
      "food"
    ],
    "title": "码头早市",
    "line": "天刚亮就来挑鱼，今天的最新鲜。晚上给你留碗鱼汤。",
    "kind": "daily",
    "image": "assets/postcards/food-1.webp",
    "thumb": "assets/postcards/food-1-thumb.webp"
  },
  {
    "id": "food-2",
    "owner": "food",
    "requires": [
      "food"
    ],
    "title": "打烊后的汤面",
    "line": "打烊啦，给自己也煮一大碗。忙了一天，你吃饭了没？",
    "kind": "daily",
    "image": "assets/postcards/food-2.webp",
    "thumb": "assets/postcards/food-2-thumb.webp"
  },
  {
    "id": "food-3",
    "owner": "food",
    "requires": [
      "food"
    ],
    "title": "对岸夜市",
    "line": "坐小船去对岸逛夜市，一手烤串一手糖葫芦，下回带你。",
    "kind": "travel",
    "image": "assets/postcards/food-3.webp",
    "thumb": "assets/postcards/food-3-thumb.webp"
  },
  {
    "id": "movie-1",
    "owner": "movie",
    "requires": [
      "movie"
    ],
    "title": "深夜看老电影",
    "line": "最后一排没人看见……我才没哭，是银幕的光太亮了。",
    "kind": "daily",
    "image": "assets/postcards/movie-1.webp",
    "thumb": "assets/postcards/movie-1-thumb.webp"
  },
  {
    "id": "movie-2",
    "owner": "movie",
    "requires": [
      "movie"
    ],
    "title": "放映室午睡",
    "line": "白天是我的晚上。胶片都理好了，天黑再放给你看。",
    "kind": "daily",
    "image": "assets/postcards/movie-2.webp",
    "thumb": "assets/postcards/movie-2-thumb.webp"
  },
  {
    "id": "movie-3",
    "owner": "movie",
    "requires": [
      "movie"
    ],
    "title": "山顶露天电影",
    "line": "山顶看电影，银幕外面还有一整片星星。散场了别急着走。",
    "kind": "travel",
    "image": "assets/postcards/movie-3.webp",
    "thumb": "assets/postcards/movie-3-thumb.webp"
  },
  {
    "id": "book-1",
    "owner": "book",
    "requires": [
      "book"
    ],
    "title": "晒书",
    "line": "天晴，把书一本本摊开晒太阳，翻起来暖烘烘的。",
    "kind": "daily",
    "image": "assets/postcards/book-1.webp",
    "thumb": "assets/postcards/book-1-thumb.webp"
  },
  {
    "id": "book-2",
    "owner": "book",
    "requires": [
      "book"
    ],
    "title": "树下读入迷",
    "line": "读入迷了，饼干只吃了一半。嘴角有渣？等这章读完再说。",
    "kind": "daily",
    "image": "assets/postcards/book-2.webp",
    "thumb": "assets/postcards/book-2-thumb.webp"
  },
  {
    "id": "book-3",
    "owner": "book",
    "requires": [
      "book"
    ],
    "title": "旧书市",
    "line": "旧书市淘到一大摞，抱得快走不动了，还想再逛一摊。",
    "kind": "travel",
    "image": "assets/postcards/book-3.webp",
    "thumb": "assets/postcards/book-3-thumb.webp"
  },
  {
    "id": "people-1",
    "owner": "people",
    "requires": [
      "people"
    ],
    "title": "给老朋友留座",
    "line": "茶温着，杯子也摆好了。你常念叨的那个人，今天会来吗？",
    "kind": "daily",
    "image": "assets/postcards/people-1.webp",
    "thumb": "assets/postcards/people-1-thumb.webp"
  },
  {
    "id": "people-2",
    "owner": "people",
    "requires": [
      "people"
    ],
    "title": "雨天缩在壳里",
    "line": "下雨天，我缩在壳里听雨。茶壶还热着，想来就敲门。",
    "kind": "daily",
    "image": "assets/postcards/people-2.webp",
    "thumb": "assets/postcards/people-2-thumb.webp"
  },
  {
    "id": "people-3",
    "owner": "people",
    "requires": [
      "people"
    ],
    "title": "山里采新茶",
    "line": "去山里采了今年的新茶，回去泡给想念的人喝。",
    "kind": "travel",
    "image": "assets/postcards/people-3.webp",
    "thumb": "assets/postcards/people-3-thumb.webp"
  },
  {
    "id": "money-1",
    "owner": "money",
    "requires": [
      "money"
    ],
    "title": "月底对账",
    "line": "账本摊了一桌，最后一笔也对上了。",
    "kind": "daily",
    "image": "assets/postcards/money-1.webp",
    "thumb": "assets/postcards/money-1-thumb.webp"
  },
  {
    "id": "money-2",
    "owner": "money",
    "requires": [
      "money"
    ],
    "title": "砍价成功",
    "line": "砍价成功！一袋橘子省了两个铜板，今天也很划算。",
    "kind": "daily",
    "image": "assets/postcards/money-2.webp",
    "thumb": "assets/postcards/money-2-thumb.webp"
  },
  {
    "id": "money-3",
    "owner": "money",
    "requires": [
      "money"
    ],
    "title": "跳蚤市场的怀表",
    "line": "在旧货摊挑到一只怀表，擦干净还会走。",
    "kind": "travel",
    "image": "assets/postcards/money-3.webp",
    "thumb": "assets/postcards/money-3-thumb.webp"
  },
  {
    "id": "cycles-1",
    "owner": "cycles",
    "requires": [
      "cycles"
    ],
    "title": "给齿轮上油",
    "line": "给大齿轮上点油，明天的钟声会更准一点。",
    "kind": "daily",
    "image": "assets/postcards/cycles-1.webp",
    "thumb": "assets/postcards/cycles-1-thumb.webp"
  },
  {
    "id": "cycles-2",
    "owner": "cycles",
    "requires": [
      "cycles"
    ],
    "title": "傍晚敲钟",
    "line": "当——敲完这一声，我也下楼吃晚饭了。",
    "kind": "daily",
    "image": "assets/postcards/cycles-2.webp",
    "thumb": "assets/postcards/cycles-2-thumb.webp"
  },
  {
    "id": "cycles-3",
    "owner": "cycles",
    "requires": [
      "cycles"
    ],
    "title": "钟表博物馆",
    "line": "看到一座比钟楼还高的落地钟，仰着头听了好久它的滴答。",
    "kind": "travel",
    "image": "assets/postcards/cycles-3.webp",
    "thumb": "assets/postcards/cycles-3-thumb.webp"
  },
  {
    "id": "notes-1",
    "owner": "notes",
    "requires": [
      "notes"
    ],
    "title": "灯下写稿",
    "line": "稿纸又堆高了。今天记两句，明天补两句，慢慢就成一篇。",
    "kind": "daily",
    "image": "assets/postcards/notes-1.webp",
    "thumb": "assets/postcards/notes-1-thumb.webp"
  },
  {
    "id": "notes-2",
    "owner": "notes",
    "requires": [
      "notes"
    ],
    "title": "发光的小石头",
    "line": "今天挖到一颗小石头，灯一照还会发亮。",
    "kind": "daily",
    "image": "assets/postcards/notes-2.webp",
    "thumb": "assets/postcards/notes-2-thumb.webp"
  },
  {
    "id": "notes-3",
    "owner": "notes",
    "requires": [
      "notes"
    ],
    "title": "慢火车采风",
    "line": "坐慢火车出门采风，窗外的风景，我一句句都记下了。",
    "kind": "travel",
    "image": "assets/postcards/notes-3.webp",
    "thumb": "assets/postcards/notes-3-thumb.webp"
  },
  {
    "id": "vault-1",
    "owner": "vault",
    "requires": [
      "vault"
    ],
    "title": "清点橡子",
    "line": "橡子一颗颗排好，一颗也没少。你放进树洞的，也一样。",
    "kind": "daily",
    "image": "assets/postcards/vault-1.webp",
    "thumb": "assets/postcards/vault-1-thumb.webp"
  },
  {
    "id": "vault-2",
    "owner": "vault",
    "requires": [
      "vault"
    ],
    "title": "亮晶晶的玻璃珠",
    "line": "捡到一颗玻璃珠，太阳底下亮晶晶的。嘘，这是我的新宝贝。",
    "kind": "daily",
    "image": "assets/postcards/vault-2.webp",
    "thumb": "assets/postcards/vault-2-thumb.webp"
  },
  {
    "id": "vault-3",
    "owner": "vault",
    "requires": [
      "vault"
    ],
    "title": "秋天的森林",
    "line": "秋天的森林里，最漂亮的叶子和橡子，都被我先挑走啦。",
    "kind": "travel",
    "image": "assets/postcards/vault-3.webp",
    "thumb": "assets/postcards/vault-3-thumb.webp"
  },
  {
    "id": "work-1",
    "owner": "work",
    "requires": [
      "work"
    ],
    "title": "开一块菜地",
    "line": "工坊边上开了块菜地，种子埋下去了，咱们慢慢等它长。",
    "kind": "daily",
    "image": "assets/postcards/work-1.webp",
    "thumb": "assets/postcards/work-1-thumb.webp"
  },
  {
    "id": "work-2",
    "owner": "work",
    "requires": [
      "work"
    ],
    "title": "修岛上的小路",
    "line": "坑洼的那段小路补好了，下雨也不用绕着走。",
    "kind": "daily",
    "image": "assets/postcards/work-2.webp",
    "thumb": "assets/postcards/work-2-thumb.webp"
  },
  {
    "id": "work-3",
    "owner": "work",
    "requires": [
      "work"
    ],
    "title": "扛回一根大木头",
    "line": "在山里挑到一根好木头，扛回去给工坊打张新桌子。",
    "kind": "travel",
    "image": "assets/postcards/work-3.webp",
    "thumb": "assets/postcards/work-3-thumb.webp"
  },
  {
    "id": "study-1",
    "owner": "study",
    "requires": [
      "study"
    ],
    "title": "呆毛翘起来了",
    "line": "背了一上午单词卡，刚刚想通了——呆毛「啪」地翘起来！",
    "kind": "daily",
    "image": "assets/postcards/study-1.webp",
    "thumb": "assets/postcards/study-1-thumb.webp"
  },
  {
    "id": "study-2",
    "owner": "study",
    "requires": [
      "study"
    ],
    "title": "外语小课",
    "line": "今天上外语课：贝壳、叶子、小帆船，大家跟我念一遍！",
    "kind": "daily",
    "image": "assets/postcards/study-2.webp",
    "thumb": "assets/postcards/study-2-thumb.webp"
  },
  {
    "id": "study-3",
    "owner": "study",
    "requires": [
      "study"
    ],
    "title": "城里的图书馆",
    "line": "城里的图书馆好大，抱到一本比我还大的书！",
    "kind": "travel",
    "image": "assets/postcards/study-3.webp",
    "thumb": "assets/postcards/study-3-thumb.webp"
  },
  {
    "id": "someday-1",
    "owner": "someday",
    "requires": [
      "someday"
    ],
    "title": "捞起漂流瓶",
    "line": "傍晚捞起一只漂流瓶。没空做的事也这样，先揣我兜里。",
    "kind": "daily",
    "image": "assets/postcards/someday-1.webp",
    "thumb": "assets/postcards/someday-1-thumb.webp"
  },
  {
    "id": "someday-2",
    "owner": "someday",
    "requires": [
      "someday"
    ],
    "title": "灯塔顶上看星星",
    "line": "瓶子排成一排陪我看星星。里面的心愿，我都替你收着。",
    "kind": "daily",
    "image": "assets/postcards/someday-2.webp",
    "thumb": "assets/postcards/someday-2-thumb.webp"
  },
  {
    "id": "someday-3",
    "owner": "someday",
    "requires": [
      "someday"
    ],
    "title": "礁石看日出",
    "line": "飞了好一阵才到这块礁石，刚好赶上日出。",
    "kind": "travel",
    "image": "assets/postcards/someday-3.webp",
    "thumb": "assets/postcards/someday-3-thumb.webp"
  },
  {
    "id": "fun-1",
    "owner": "fun",
    "requires": [
      "fun"
    ],
    "title": "雨天泡汤",
    "line": "下雨天，就多泡一会儿。头顶的橘子都泡暖了。",
    "kind": "daily",
    "image": "assets/postcards/fun-1.webp",
    "thumb": "assets/postcards/fun-1-thumb.webp"
  },
  {
    "id": "fun-2",
    "owner": "fun",
    "requires": [
      "fun"
    ],
    "title": "躺椅发呆",
    "line": "今天在躺椅上数海鸥，数着数着睡着了。",
    "kind": "daily",
    "image": "assets/postcards/fun-2.webp",
    "thumb": "assets/postcards/fun-2-thumb.webp"
  },
  {
    "id": "fun-3",
    "owner": "fun",
    "requires": [
      "fun"
    ],
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
    "requires": [
      "work",
      "someday"
    ],
    "title": "卸压好搭档",
    "line": "箱子太多抱不过来，阿兜张开大嘴，一下接走了一半。（大力寄）",
    "kind": "story",
    "image": "assets/postcards/story-2.webp",
    "thumb": "assets/postcards/story-2-thumb.webp"
  },
  {
    "id": "story-3",
    "owner": "fun",
    "requires": [
      "cycles",
      "fun"
    ],
    "title": "快慢反差萌",
    "line": "笃笃说站一会儿就走，结果陪我看完了整场晚霞。（小卡寄）",
    "kind": "story",
    "image": "assets/postcards/story-3.webp",
    "thumb": "assets/postcards/story-3-thumb.webp"
  },
  {
    "id": "story-4",
    "owner": "notes",
    "requires": [
      "movie",
      "notes"
    ],
    "title": "深夜亮灯同盟",
    "line": "阿影讲老电影讲到哭，非说是海风太大。我都记下来了。（阿鼠寄）",
    "kind": "story",
    "image": "assets/postcards/story-4.webp",
    "thumb": "assets/postcards/story-4-thumb.webp"
  },
  {
    "id": "story-5",
    "owner": "post",
    "requires": [
      "post",
      "vault"
    ],
    "title": "迷路小冤家",
    "line": "又在树洞口撞上松松！信和橡子撒了一地，捡了好半天。（啾啾寄）",
    "kind": "story",
    "image": "assets/postcards/story-5.webp",
    "thumb": "assets/postcards/story-5-thumb.webp"
  },
  {
    "id": "story-6",
    "owner": "people",
    "requires": [
      "people"
    ],
    "title": "千日茶话会",
    "line": "茶泡好了，大家带着点心过来，坐满了一桌。",
    "kind": "story",
    "image": "assets/postcards/story-6.webp",
    "thumb": "assets/postcards/story-6-thumb.webp"
  },
  {
    "id": "health-1",
    "owner": "health",
    "requires": [
      "health"
    ],
    "title": "门前的早晨",
    "line": "称完了，把秤收好。门口的花今天开了。",
    "kind": "daily",
    "image": "assets/postcards/health-1.webp",
    "thumb": "assets/postcards/health-1-thumb.webp"
  },
  {
    "id": "health-2",
    "owner": "health",
    "requires": [
      "health"
    ],
    "title": "窗边量一量",
    "line": "软尺用完卷起来，放回抽屉里。",
    "kind": "daily",
    "image": "assets/postcards/health-2.webp",
    "thumb": "assets/postcards/health-2-thumb.webp"
  },
  {
    "id": "health-3",
    "owner": "health",
    "requires": [
      "health"
    ],
    "title": "雨天翻手帐",
    "line": "外面下着雨，刚好坐下来翻翻这几页。",
    "kind": "daily",
    "image": "assets/postcards/health-3.webp",
    "thumb": "assets/postcards/health-3-thumb.webp"
  },
  {
    "id": "health-4",
    "owner": "health",
    "requires": [
      "health"
    ],
    "title": "被窝里的晚安",
    "line": "水杯放床头，手帐也合上了。今晚先到这里。",
    "kind": "daily",
    "image": "assets/postcards/health-4.webp",
    "thumb": "assets/postcards/health-4-thumb.webp"
  }
];
/* Full island and the same mailbox/album accessible directly from the simple notebook. */
WELCOME_LETTERS.abu=["岛主好，我是替你看家的阿卜，就住在你自己的岛主小筑里。别的小屋忙着替你打理吃喝玩乐和日常琐事，只有这间屋子，是留给你安安静静认识自己的地方。", "把你的出生时辰和出生地交给我吧，我会连同你的八字、身强身弱、星座和各种性格小测试，一起妥帖收进抽屉里。", "不用急着给自己贴标签，我背着壳慢吞吞地陪你，一点点看清自己本来是什么样。"];
POSTCARD_SCENES.push(...[{"id": "abu-2", "owner": "abu", "requires": ["abu"], "title": "树下慢慢勾选", "line": "不用急着给自己贴标签，慢慢勾选，看看今天又认出了怎样的自己。", "kind": "daily", "image": "assets/postcards/abu-2.webp", "thumb": "assets/postcards/abu-2-thumb.webp"}, {"id": "abu-3", "owner": "abu", "requires": ["abu"], "title": "雨天来信", "line": "外面下雨也没关系，屋檐下永远有盏灯，替你好好读完每一句心事。", "kind": "daily", "image": "assets/postcards/abu-3.webp", "thumb": "assets/postcards/abu-3-thumb.webp"}, {"id": "abu-4", "owner": "abu", "requires": ["abu"], "title": "夜晚观星", "line": "你出生那晚的星光和风向，我都替你记在小本子里了，随时回来看看。", "kind": "daily", "image": "assets/postcards/abu-4.webp", "thumb": "assets/postcards/abu-4-thumb.webp"}]);
const ISLAND_OWNERS=['post','health','abu','food','movie','book','people','money','cycles','notes','vault','work','study','someday','fun'];
const POSTCARDS=ISLAND_OWNERS.map(k=>({id:k+'-welcome',owner:k,requires:[k],kind:'welcome',title:k==='abu'?'很高兴认识你，岛主':HOUSE_INFO[k].name+'的第一封信',line:WELCOME_LETTERS[k].join('\n\n'),image:k==='abu'?'assets/postcards/abu-welcome.webp':HEAD_ART[k],thumb:k==='abu'?'assets/postcards/abu-welcome-thumb.webp':HEAD_ART[k]})).concat(POSTCARD_SCENES);
let ISLAND_ZOOM=1,ISLAND_SELECTED='health',ISLAND_HELLO_OBSERVER=null;
function islandToday(){const a=TODAY.split('.').map(Number);return Math.floor(Date.UTC(a[0],a[1]-1,a[2])/86400000);}
function islandDate(n){const d=new Date(n*86400000);return d.getUTCFullYear()+'.'+(d.getUTCMonth()+1)+'.'+d.getUTCDate();}
function islandOpen(k){return ['post','cycles','someday'].includes(k)||(['work','study'].includes(k)?!!tplGroupName(k):isleOn(k));}
function islandRoster(){return ISLAND_OWNERS.filter(islandOpen);}

function islandGo(name,tab){cur={name,tab};render();}
function islandCard(id){return POSTCARDS.find(c=>c.id===id);}
function islandArrived(id){return ISLAND.inbox.find(r=>r.id===id)||ISLAND.album.find(r=>r.id===id);}
function islandCommit(){scheduleSave();saveNow();islandMailboxBadge();}
function islandMailboxBadge(){
 if(cur.name!=='today'){reviewBtn.classList.remove('mailbox-unread');reviewBtn.removeAttribute('aria-label');return;}
 const n=islandUnread(ISLAND);reviewBtn.textContent='✉ 信箱';reviewBtn.classList.toggle('mailbox-unread',n>0);
 reviewBtn.setAttribute('aria-label',n?'信箱，'+n+' 条未读消息':'信箱，无未读消息');
}
function islandMailboxPrepare(){
 let changed=islandSyncMessages(ISLAND);
 if(SEEN.onboard)changed=islandSystemMessage(ISLAND,'system:mailbox-351',islandToday(),'信箱搬到首页了','首页右上角现在可以打开信箱。岛民来信和系统消息都放在这里，点开一封才会标记为已读。\n\n明信片看过以后仍可以收藏；已收藏的卡片也保留来信记录。早安卡依然是当天打开才有，错过的日子不补发。\n\n晚间复盘移到了侧栏的「更多」里。')||changed;
 if(changed)islandCommit();
 islandMailboxBadge();
}
function islandReadCard(id){if(islandReadMessage(ISLAND,'card:'+id))islandCommit();}
function islandHelloObserverStop(){if(ISLAND_HELLO_OBSERVER){ISLAND_HELLO_OBSERVER.disconnect();ISLAND_HELLO_OBSERVER=null;}}
function islandHelloSeen(block,id){
 islandHelloObserverStop();
 if(!('IntersectionObserver' in window))return;
 ISLAND_HELLO_OBSERVER=new IntersectionObserver(entries=>{
  if(entries.some(e=>e.isIntersecting)&&$('#hello').classList.contains('on')&&block.isConnected){
   islandReadCard(id);islandHelloObserverStop();
   // Keep a mailbox behind the greeting in sync without moving the greeting.
   if(cur.name==='postoffice'&&cur.tab!=='album'){navFromBack=true;render();}
  }
 },{threshold:1});
 ISLAND_HELLO_OBSERVER.observe(block.querySelector('h3'));
}
function renderMailMessage(){
 topTitle.textContent='系统消息';reviewBtn.textContent='回今日';
 const m=ISLAND.messages.find(m=>m.id===cur.id&&m.kind==='system');
 const d=document.createElement('article');d.className='postcard-detail';
 if(!m){d.textContent='这条消息没有找到。';view.appendChild(d);return;}
 if(islandReadMessage(ISLAND,m.id))islandCommit();
 d.innerHTML='<div class="postcard-from"><span>啾啾岛 · 系统消息</span><small>'+islandDate(m.day)+'</small></div><div class="postcard-letter"><h2>'+vEsc(m.title)+'</h2><p class="mail-system-body">'+vEsc(m.body)+'</p></div><button class="chip" id="mailMessageBack">回信箱</button>';
 view.appendChild(d);$('#mailMessageBack').onclick=()=>{cur={name:'postoffice',tab:'inbox',key:'system'};render();};
}
function islandNav(active){
 const d=document.createElement('div');d.className='island-nav';
 [['island','逛岛'],['inbox','信箱'+(islandUnread(ISLAND)?' · '+islandUnread(ISLAND):'')],['album','明信片册'],['cal','日历']].forEach(([key,label])=>{
  const b=document.createElement('button');b.className='chip'+(key===active?' on':'');b.textContent=label;b.setAttribute('aria-current',key===active?'page':'false');
  b.onclick=()=>key==='cal'?islandGo('cal'):key==='island'?islandGo('panorama'):islandGo('postoffice',key);d.appendChild(b);
 });return d;
}
function islandDrawer(){
 const d=document.createElement('div');d.className='island-drawer';
 d.innerHTML='<button id="openPanorama"><span>🏝</span><b>逛逛全景岛</b><small>去住户门前看看</small></button><button id="openMailbox"><span>✉</span><b>信箱与明信片</b><small>'+ (islandUnread(ISLAND)?islandUnread(ISLAND)+' 条未读':'收藏 '+ISLAND.album.length+' 张')+'</small></button>';
 d.querySelector('#openPanorama').onclick=()=>{closeDrawer();islandGo('panorama');};d.querySelector('#openMailbox').onclick=()=>{closeDrawer();islandGo('postoffice','inbox');};return d;
}
function islandDoor(k){
 if(!islandOpen(k)){
  if(['work','study'].includes(k)){const g=k==='work'?'工作':'学习';if(!extraGroups.includes(g))extraGroups.push(g);SET.gtpl=SET.gtpl||{};SET.gtpl[g]=k;}
  else isleSet(k,true);
  islandCommit();
 }
 if(k==='post')islandGo('postoffice','inbox');
 else if(k==='cycles')islandGo('cycles');
 else if(k==='someday'){cur={name:'agg',key:'someday'};render();}
 else if(['work','study'].includes(k)){cur={name:'group',g:tplGroupName(k)};render();}
 else isleGo(k);
}
function islandVisitLine(k){
 const scenes=POSTCARD_SCENES.filter(c=>c.owner===k&&c.kind==='daily');
 if(!scenes.length)return HOUSE_INFO[k].line;
 return scenes[islandHash(k+'|'+islandToday())%scenes.length].line;
}
function renderPanorama(){
 topTitle.textContent='全景岛';reviewBtn.textContent='回今日';view.appendChild(islandNav('island'));
 const d=document.createElement('section');d.className='island-page';
 const night=new Date().getHours()>=19||new Date().getHours()<6;
 const plots={...OB_PLOT,health:OB_PLOT.e1,abu:OB_PLOT.e2,post:[OB_PLAZA[0],OB_PLAZA[1],290]};delete plots.e1;delete plots.e2;
 const buttons=Object.keys(plots).sort((a,b)=>plots[a][1]-plots[b][1]).map(k=>{
  const [x,y,w]=plots[k],on=islandOpen(k),h=HOUSE_INFO[k];
  return '<button class="island-house '+(on?'built':'unbuilt')+(ISLAND_SELECTED===k?' selected':'')+'" data-island-house="'+k+'" aria-label="'+h.name+'，'+h.who+(on?'':'，未开启')+'" aria-pressed="'+(ISLAND_SELECTED===k)+'" style="left:'+x/1086*100+'%;top:'+y/1448*100+'%;width:'+w/1086*100+'%"><img draggable="false" src="'+(on?(k==='abu'?'assets/ui/abu-map.webp':HEAD_ART[k]):OBIMG.sign)+'" alt=""><span>'+h.name+'</span>'+(ISLAND.messages.some(m=>m.kind==='card'&&!m.read&&islandCard(m.cardId)?.owner===k)?'<i class="island-mail-dot" aria-label="有来信">✉</i>':'')+'</button>';
 }).join('');
 d.innerHTML='<div class="island-heading"><div><b>岛上的'+(night?'夜晚':'今天')+'</b><small>点建筑选住户，放大后可以拖动地图</small></div><div class="island-zoom"><button id="islandZoomOut" aria-label="缩小地图">−</button><output id="islandZoomValue">'+Math.round(ISLAND_ZOOM*100)+'%</output><button id="islandZoomIn" aria-label="放大地图">＋</button></div></div><div class="island-viewport" id="islandViewport" tabindex="0" aria-label="全景岛地图，可滚动"><div class="island-world '+(night?'night':'')+'" style="width:'+ISLAND_ZOOM*100+'%"><img class="island-ground" src="'+OBIMG.ob_isle+'" alt="岛上的道路、草地和码头" draggable="false">'+buttons+'</div></div><div id="islandVisitor" aria-live="polite"></div><details class="island-house-list"><summary>按建筑查看</summary><div>'+ISLAND_OWNERS.map(k=>'<button class="chip" data-island-list="'+k+'">'+HOUSE_INFO[k].name+'</button>').join('')+'</div></details>';
 view.appendChild(d);
 const select=k=>{ISLAND_SELECTED=k;d.querySelectorAll('[data-island-house]').forEach(b=>{b.classList.toggle('selected',b.dataset.islandHouse===k);b.setAttribute('aria-pressed',b.dataset.islandHouse===k?'true':'false');});islandVisitor();};
 d.querySelectorAll('[data-island-house]').forEach(b=>b.onclick=()=>select(b.dataset.islandHouse));d.querySelectorAll('[data-island-list]').forEach(b=>b.onclick=()=>{select(b.dataset.islandList);$('#islandVisitor').scrollIntoView({block:'nearest',behavior:'smooth'});});
 const vp=$('#islandViewport'),world=vp.firstElementChild;
 const zoom=step=>{const x=(vp.scrollLeft+vp.clientWidth/2)/world.clientWidth,y=(vp.scrollTop+vp.clientHeight/2)/world.clientHeight;ISLAND_ZOOM=Math.max(1,Math.min(2,+(ISLAND_ZOOM+step).toFixed(2)));world.style.width=ISLAND_ZOOM*100+'%';$('#islandZoomValue').textContent=Math.round(ISLAND_ZOOM*100)+'%';vp.scrollLeft=x*world.clientWidth-vp.clientWidth/2;vp.scrollTop=y*world.clientHeight-vp.clientHeight/2;syncZoom();};
 const syncZoom=()=>{$('#islandZoomOut').disabled=ISLAND_ZOOM<=1;$('#islandZoomIn').disabled=ISLAND_ZOOM>=2;};syncZoom();$('#islandZoomOut').onclick=()=>zoom(-.25);$('#islandZoomIn').onclick=()=>zoom(.25);
 // Touch uses native scrolling; mouse dragging also works without triggering a building click.
 let drag=null,dragged=false;
 vp.onpointerdown=e=>{if(e.pointerType!=='mouse'||e.button!==0)return;drag={x:e.clientX,y:e.clientY,l:vp.scrollLeft,t:vp.scrollTop};dragged=false;};
 vp.onpointermove=e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>5){dragged=true;vp.scrollLeft=drag.l-dx;vp.scrollTop=drag.t-dy;e.preventDefault();}};
 vp.onpointerup=()=>{drag=null;};vp.onpointerleave=()=>{drag=null;};vp.addEventListener('click',e=>{if(dragged){e.stopPropagation();e.preventDefault();dragged=false;}},true);
 islandVisitor();
}
function islandVisitor(){
 const k=ISLAND_SELECTED,h=HOUSE_INFO[k],on=islandOpen(k),box=$('#islandVisitor');if(!box)return;
 box.innerHTML='<div class="island-visitor"><img src="'+(k==='abu'?'assets/ui/abu-face.webp':HEAD_ART[k])+'" alt="'+h.who+'"><div><small>'+h.name+'</small><h3>'+h.who+'</h3><p id="islandSpeech">'+vEsc(on?islandVisitLine(k):'这里还没开启。搬进来后，就能使用这栋房子。')+'</p><div class="island-actions"><button class="chip on" id="islandEnter">'+(on?'进入'+h.name:'开启这栋房子')+'</button><button class="chip" id="islandChat" '+(on?'':'disabled')+'>打个招呼</button><button class="chip" id="islandCards">看明信片</button></div></div></div>';
 $('#islandEnter').onclick=()=>islandDoor(k);$('#islandChat').onclick=()=>{$('#islandSpeech').textContent=h.who+'：'+HOUSE_INFO[k].line;};$('#islandCards').onclick=()=>{cur={name:'postoffice',tab:'album',key:k};render();};
}
function postcardName(text,who){
 const i=text.indexOf(who);return i<0?vEsc(text):vEsc(text.slice(0,i))+'<strong class="resident-name">'+vEsc(who)+'</strong>'+vEsc(text.slice(i+who.length));
}
function postcardParagraphs(c){return c.line.split('\n\n').map(t=>'<p>'+postcardName(t,HOUSE_INFO[c.owner].who)+'</p>').join('');}
function postcardMedia(c,thumb){return '<div class="postcard-media '+(c.kind==='welcome'&&c.owner!=='abu'?'welcome':'')+'"><img '+(thumb?'loading="lazy"':'')+' src="'+(thumb?c.thumb:c.image)+'" alt="'+vEsc(c.title)+'"><div class="postcard-image-error" hidden><span>图片还没加载，来信和收藏都在。</span>'+'<button class="chip" data-image-retry>重新加载图片</button>'+'</div></div>';}
function postcardBindImages(root){root.querySelectorAll('.postcard-media').forEach(box=>{const im=box.querySelector('img'),msg=box.querySelector('.postcard-image-error');const fail=()=>{im.hidden=true;msg.hidden=false;};im.onerror=fail;im.onload=()=>{im.hidden=false;msg.hidden=true;};if(im.complete&&!im.naturalWidth)fail();const retry=box.querySelector('[data-image-retry]');if(retry)retry.onclick=()=>{msg.hidden=true;im.hidden=false;im.src=im.getAttribute('src');};});}
function renderPostoffice(){
 topTitle.textContent='信风邮局';reviewBtn.textContent='回今日';const header=letterHouseHead('post');header.querySelector('p').textContent='啾啾：新来的信放在上面，看过的也替你留着。';view.appendChild(header);
 const tab=cur.tab==='album'?'album':'inbox';view.appendChild(islandNav(tab));
 const section=document.createElement('section');section.className='postoffice';
 if(tab==='inbox'){
  const filter=['all','card','system'].includes(cur.key)?cur.key:'all';
  section.innerHTML='<div class="island-heading mail-heading"><div><b>信箱</b><small>'+islandUnread(ISLAND)+' 条未读 · '+islandVisibleMessages(ISLAND).length+' 条消息</small></div><div class="island-actions"><button class="chip" id="mailToday">今天的早安卡</button><button class="chip" id="mailSettings">来信设置</button></div></div><div class="mail-filters" role="group" aria-label="消息分类">'+[['all','全部'],['card','岛民来信'],['system','系统消息']].map(([k,label])=>'<button class="chip'+(filter===k?' on':'')+'" data-mail-filter="'+k+'" aria-pressed="'+(filter===k)+'">'+label+'</button>').join('')+'</div>';
  if(!ISLAND.enabled)section.innerHTML+='<p class="postcard-note">已暂停早安明信片，系统消息仍可接收，已有的信和收藏保留。</p>';
  const messages=islandVisibleMessages(ISLAND,filter);
  if(!messages.length)section.innerHTML+='<div class="postcard-empty">'+jjImg('nest',72)+'<p>'+(filter==='system'?'暂时没有系统消息。':filter==='card'?'暂时没有岛民来信。':'信箱里暂时没有消息。')+'</p><small>当天打开早安卡，会收到一张明信片。</small><button class="chip" id="mailToAlbum">翻翻明信片册</button></div>';
  for(const m of messages){
   const c=m.kind==='card'?islandCard(m.cardId):null,b=document.createElement('button');
   b.className=(m.kind==='card'?'postcard-envelope':'mail-system-envelope')+' mail-envelope'+(m.read?'':' unread');
   if(m.kind==='card')b.dataset.openCard=m.cardId;else b.dataset.openMessage=m.id;
   const title=m.kind==='system'?m.title:c?c.title:'一张明信片';
   const from=m.kind==='system'?'系统消息':c?HOUSE_INFO[c.owner].who+'寄来':'岛民来信';
   const state=m.kind==='system'?(m.read?'已读':'查看消息 →'):ISLAND.album.some(r=>r.id===m.cardId)?'已收藏':m.read?'已读 · 待收藏':'拆开看看 →';
   b.setAttribute('aria-label',(m.read?'':'未读，')+title+'，'+state);
   b.innerHTML=(c?'<img src="'+(c.owner==='abu'?'assets/ui/abu-face.webp':HEAD_ART[c.owner])+'" alt="">':'<span class="mail-system-icon" aria-hidden="true">✉</span>')+'<span class="mail-envelope-text"><small>'+vEsc(from)+' · '+islandDate(m.day)+'</small><b>'+vEsc(title)+'</b><em>'+state+'</em></span>'+(!m.read?'<i class="mail-unread-dot" aria-hidden="true"></i>':'');
   section.appendChild(b);
  }
  const actions=document.createElement('div');actions.className='mail-bulk-actions';
  const pending=ISLAND.inbox.length,read=ISLAND.messages.filter(m=>m.read&&!m.deleted).length;
  actions.innerHTML='<div class="island-actions"><button class="chip on" id="mailCollectAll" '+(pending?'':'disabled')+'>一键领取'+(pending?'（'+pending+'）':'')+'</button><button class="chip" id="mailDeleteRead" '+(read?'':'disabled')+'>删除已读'+(read?'（'+read+'）':'')+'</button></div><small>操作全部分类；删除消息不影响明信片，未领取的仍可领取。</small>';
  view.classList.add('mailbox-view');document.getElementById('phone').appendChild(actions);
  actions.querySelector('#mailCollectAll').onclick=()=>{const n=islandCollectAll(ISLAND,islandToday());if(n){islandCommit();navFromBack=true;render();toast('已领取 '+n+' 张明信片');}};
  actions.querySelector('#mailDeleteRead').onclick=()=>{const n=islandDeleteRead(ISLAND);if(n){islandCommit();navFromBack=true;render();toast('已删除 '+n+' 条已读消息，明信片保留');}};
  section.querySelectorAll('[data-mail-filter]').forEach(b=>b.onclick=()=>{cur.key=b.dataset.mailFilter;navFromBack=true;render();});
  section.querySelectorAll('[data-open-message]').forEach(b=>b.onclick=()=>{cur={name:'mailmessage',id:b.dataset.openMessage};render();});
 }else{
  const known=ISLAND.album.filter(r=>islandCard(r.id)).length;
  section.innerHTML='<div class="island-heading"><div><b>明信片册</b><small>已收藏 '+known+' / '+POSTCARDS.length+' 张</small></div></div><label class="postcard-filter">翻谁的来信 <select id="postcardOwner"><option value="all">全部岛民</option>'+ISLAND_OWNERS.map(k=>'<option value="'+k+'">'+HOUSE_INFO[k].who+'</option>').join('')+'<option value="story">岛上的小故事</option></select></label>';
  const owner=ISLAND_OWNERS.includes(cur.key)||cur.key==='story'?cur.key:'all';
  const cards=POSTCARDS.filter(c=>owner==='all'||(owner==='story'?c.kind==='story':c.owner===owner));
  const receivedById=new Map(ISLAND.album.map((r,i)=>[r.id,{...r,order:i}]));
  const waitingById=new Map(ISLAND.inbox.map((r,i)=>[r.id,{...r,order:i}]));
  cards.sort((a,b)=>{const x=receivedById.get(a.id),y=receivedById.get(b.id);if(x&&y)return y.collectedDay-x.collectedDay||y.order-x.order;if(x||y)return x?-1:1;const u=waitingById.get(a.id),v=waitingById.get(b.id);return u&&v?v.day-u.day||v.order-u.order:u?-1:v?1:0;});
  const grid=document.createElement('div');grid.className='postcard-grid';grid.id='albumReceived';
  const pendingGrid=document.createElement('div');pendingGrid.className='postcard-grid';pendingGrid.id='albumPending';
  const lockedGrid=document.createElement('div');lockedGrid.className='postcard-grid';

  for(const c of cards){const received=ISLAND.album.find(r=>r.id===c.id),waiting=ISLAND.inbox.some(r=>r.id===c.id),b=document.createElement('button');b.className='postcard-tile'+(received?'':' locked');b.dataset.openCard=c.id;
   b.innerHTML=received?postcardMedia(c,true)+'<b>'+vEsc(c.title)+'</b><small>'+HOUSE_INFO[c.owner].who+' · '+islandDate(received.collectedDay)+' 领取'+'</small>':'<div class="postcard-unknown">'+(waiting?'✉':'?')+'</div><b>'+vEsc(c.title)+'</b><small>'+(waiting?'已到信箱，待收藏':c.id==='abu-welcome'?'初次进岛主小筑时寄来':c.requires.every(islandOpen)?'等一封来信':'住户开启后可随早安卡寄来')+'</small>';
   (received?grid:waiting?pendingGrid:lockedGrid).appendChild(b);
  }
  section.appendChild(sectionLabel('已领取 · 最近领取优先'));section.appendChild(grid);
  if(!grid.children.length){const tip=document.createElement('p');tip.className='postcard-note';tip.textContent='还没有领取的明信片。';section.appendChild(tip);}
  if(pendingGrid.children.length){section.appendChild(sectionLabel('待领取'));section.appendChild(pendingGrid);}
  if(lockedGrid.children.length){const fold=document.createElement('details');fold.className='album-unreceived';const title=document.createElement('summary');title.textContent='未获得的明信片（'+lockedGrid.children.length+'）';fold.append(title,lockedGrid);section.appendChild(fold);}

  section.querySelector('#postcardOwner').value=owner;section.querySelector('#postcardOwner').onchange=e=>{cur.key=e.target.value;navFromBack=true;render();};
 }
 view.appendChild(section);postcardBindImages(section);
 section.querySelectorAll('[data-open-card]').forEach(b=>b.onclick=()=>{const id=b.dataset.openCard;if(islandArrived(id)){cur={name:'postcard',id};render();}else{const c=islandCard(id);toast(c.id==='abu-welcome'?'第一次去岛主小筑时，阿卜会寄来这封信。':c.requires.every(islandOpen)?'这张还没收到，每天打开早安卡看看':c.requires.filter(k=>!islandOpen(k)).map(k=>HOUSE_INFO[k].who).join('、')+'开启后可随早安卡寄来');}});
 if($('#mailToday'))$('#mailToday').onclick=()=>openHello(true);if($('#mailSettings'))$('#mailSettings').onclick=islandMailSettings;if($('#mailToAlbum'))$('#mailToAlbum').onclick=()=>islandGo('postoffice','album');
}
function renderPostcard(){
 const c=islandCard(cur.id),r=islandArrived(cur.id);topTitle.textContent='一封来信';reviewBtn.textContent='回今日';
 if(!c||!r){const p=document.createElement('p');p.className='postcard-note';p.textContent='这封信还没收到，回信箱看看吧。';view.appendChild(p);return;}
 islandReadCard(c.id);
 const pending=ISLAND.inbox.some(x=>x.id===c.id),d=document.createElement('article');d.className='postcard-detail';
 d.innerHTML='<div class="postcard-from"><span>FROM · '+HOUSE_INFO[c.owner].who+'</span><small>'+islandDate(r.day)+'</small></div>'+postcardMedia(c,false)+'<div class="postcard-letter"><small>'+({welcome:'搬来岛上的第一封信',story:'岛上的小故事',travel:'岛外的小旅行',daily:'岛上的日子'}[c.kind])+'</small><h2>'+vEsc(c.title)+'</h2>'+postcardParagraphs(c)+'<div class="postcard-sign">—— <strong class="resident-name">'+HOUSE_INFO[c.owner].who+'</strong></div></div><div class="island-actions"><button class="rv-confirm" id="postcardCollect" '+(pending?'':'disabled')+'>'+(pending?'收进明信片册':'已收藏')+'</button><button class="chip" id="postcardShare">保存分享图</button><button class="chip" id="postcardBack">'+(pending?'回信箱':'回明信片册')+'</button></div><p id="postcardShareStatus" class="postcard-note" role="status"></p><div id="postcardShareResult"></div>';
 view.appendChild(d);postcardBindImages(d);
 $('#postcardCollect').onclick=()=>{if(islandCollect(ISLAND,c.id,islandToday())){islandCommit();navFromBack=true;render();toast('已收进明信片册');}};
 $('#postcardBack').onclick=()=>{cur={name:'postoffice',tab:pending?'inbox':'album',key:c.owner};render();};
 $('#postcardShare').onclick=()=>postcardShare(c,r);
}
async function postcardShare(c,r){
 const status=$('#postcardShareStatus'),button=$('#postcardShare');button.disabled=true;status.textContent='正在制作分享图…';
 try{
  const im=new Image();im.src=c.image;await im.decode();
  const canvas=document.createElement('canvas');canvas.width=1080;let cx=canvas.getContext('2d');cx.font='28px sans-serif';
  const lines=[];for(const [i,para] of c.line.split('\n\n').entries()){
   if(i)lines.push('');let line='';for(const ch of para){if(cx.measureText(line+ch).width>950){lines.push(line);line='';}line+=ch;}if(line)lines.push(line);
  }
  canvas.height=Math.max(1160,862+(lines.length-1)*43+165);cx=canvas.getContext('2d');cx.fillStyle='#f8f1e5';cx.fillRect(0,0,1080,canvas.height);
  const ratio=Math.min(960/im.width,640/im.height),w=im.width*ratio,h=im.height*ratio;cx.drawImage(im,(1080-w)/2,55+(640-h)/2,w,h);
  cx.fillStyle='#887963';cx.font='24px sans-serif';cx.fillText('啾啾岛来信 · '+islandDate(r.day),60,740);cx.fillStyle='#423a2e';cx.font='36px serif';cx.fillText(c.title,60,800);
  cx.font='28px sans-serif';let y=862;const who=HOUSE_INFO[c.owner].who;
  for(const line of lines){const i=line.indexOf(who);cx.fillStyle='#423a2e';if(i<0)cx.fillText(line,60,y);else{
   const before=line.slice(0,i),after=line.slice(i+who.length),x=60+cx.measureText(before).width;cx.fillText(before,60,y);cx.fillStyle='#a64b35';cx.fillText(who,x,y);cx.fillStyle='#423a2e';cx.fillText(after,x+cx.measureText(who).width,y);
  }y+=43;}
  cx.font='26px serif';cx.textAlign='right';cx.fillStyle='#a64b35';cx.fillText('—— '+who,1020,canvas.height-100);cx.font='20px sans-serif';cx.fillStyle='#887963';cx.fillText('啾啾岛 Jotbird',1020,canvas.height-40);
  const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('image')),'image/png'));
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='啾啾岛-'+c.id+'.png';a.textContent='下载分享图';a.className='chip';const result=$('#postcardShareResult');result.replaceChildren(a);const preview=document.createElement('img');preview.src=url;preview.alt='分享图预览';preview.style.width='100%';result.appendChild(preview);a.click();status.textContent='分享图已生成，也可以长按下方图片保存。';setTimeout(()=>URL.revokeObjectURL(url),300000);
 }catch(_){status.textContent=location.protocol==='file:'?'浏览器限制了本地图片导出。上传完整文件夹到 GitHub Pages 后即可使用分享图；来信仍可正常查看。':'图片暂时没加载成功，联网后再试。';}
 finally{button.disabled=false;}
}
function islandMailSettings(){
 const s=healthSheet('来信设置','<p>当天首次打开早安卡，附一张明信片；再次打开还是当天那张。没打开的日期不发，也不补发。</p><p>先送未收到过的卡，当前可送的都收齐后会重逢旧卡，收藏不重复增加。暂停或关闭早安卡时不自动发；手动打开当天早安卡也适用每日一次。</p><button class="rv-confirm" id="islandMailToggle">'+(ISLAND.enabled?'暂停新来信':'开启新来信')+'</button>');
 s.querySelector('#islandMailToggle').onclick=()=>{ISLAND.enabled=!ISLAND.enabled;islandCommit();closeSheet();navFromBack=true;render();};
}

/* Added to the actual daily greeting; browsing the island/mailbox alone never issues mail. */
function islandHelloGift(){
 islandHelloObserverStop();
 const host=$('#hello .hl-lower');if(!host||!SEEN.onboard)return;
 if(islandGrantDaily(ISLAND,islandToday(),islandRoster(),POSTCARDS,Math.floor(Math.random()*4294967295)))islandCommit();
 const daily=ISLAND.daily,card=daily&&daily.day===islandToday()?islandCard(daily.id):null;
 const block=document.createElement('section');block.className='hl-postcard';block.id='hlPostcard';
 if(!card){block.innerHTML='<p class="postcard-note">'+(ISLAND.enabled?'今天没有新的明信片。':'已暂停早安明信片，原来的收藏都在。')+'</p>';host.prepend(block);return;}
 const collected=ISLAND.album.some(r=>r.id===card.id);
 block.innerHTML=postcardMedia(card,true)+'<h3>'+vEsc(card.title)+'</h3>'+postcardParagraphs(card)+'<small>—— <strong class="resident-name">'+HOUSE_INFO[card.owner].who+'</strong>'+' · 今天这一张</small><button class="chip" id="hlPostcardCollect" '+(collected?'disabled':'')+'>'+(collected?'已在明信片册中':'收进明信片册')+'</button>';
 host.prepend(block);postcardBindImages(block);islandHelloSeen(block,card.id);
 $('#hlPostcardCollect').onclick=()=>{
  if(islandCollect(ISLAND,card.id,islandToday())){islandCommit();const btn=$('#hlPostcardCollect');btn.textContent='已收进明信片册';btn.disabled=true;if(cur.name==='postoffice'&&cur.tab!=='album'){navFromBack=true;render();}}
 };
}

const READING_SIZES=[16,18,20,22],READING_NAMES=['标准','舒适','大','特大'];
let readingGuideShown=false;
function readingSize(){return READING_SIZES.includes(SET.readSize)?SET.readSize:16;}
function applyReading(){const n=readingSize();document.documentElement.style.setProperty('--read-size',n+'px');document.documentElement.style.setProperty('--read-extra',(n-16)+'px');readingReflow();}
function readingSettings(){
 const s=healthSheet('字体大小','<div class="gs-chips" id="readChoices">'+READING_SIZES.map((n,i)=>'<button class="gs-chip'+(readingSize()===n?' on':'')+'" data-size="'+n+'">'+READING_NAMES[i]+'</button>').join('')+'</div><div class="read-preview"><small>首页预览</small><h3>今天的记录</h3><p>○ 下班去取快递，再买一袋橘子</p><p>— 午饭吃了热汤面，汤很好喝。</p><p>· 周末想去河边走走，带上相机。</p></div><p class="postcard-note">选择后立即生效，并保存在设置里。</p>');
 s.querySelectorAll('[data-size]').forEach(b=>b.onclick=()=>{SET.readSize=Number(b.dataset.size);applyReading();scheduleSave();s.querySelectorAll('[data-size]').forEach(x=>x.classList.toggle('on',x===b));});
}
function readingGuideDone(kind){SEEN['symGuide'+kind]=true;scheduleSave();document.querySelectorAll('.sym-use-guide').forEach(x=>x.remove());}
function readingGuide(wrap,s,e){
 if(cur.name!=='today'||!SEEN.onboard||!e.text||s.classList.contains('static'))return;
 const kind=e.sym==='task'?'Task':'Record';
 s.addEventListener('click',()=>readingGuideDone(kind),true);
 if(SEEN['symGuide'+kind]||readingGuideShown)return;
 readingGuideShown=true;
 const d=document.createElement('div');d.className='sym-use-guide';d.setAttribute('role','note');
 const txt=document.createElement('span');txt.textContent=kind==='Task'?'点左边的符号完成，长按还有更多操作。':'点左边的图标，可以查看这条记录的更多操作。';d.appendChild(txt);
 const b=document.createElement('button');b.textContent='知道了';b.onclick=()=>readingGuideDone(kind);d.appendChild(b);wrap.appendChild(d);
}
function readingHelp(){healthSheet('行首符号怎么用','<p>待办：点左边的符号完成，再点恢复；长按打开处理菜单。</p><p>日常和随想：点左边的图标，查看这条记录的更多操作。</p><p>点记录文字，可以直接修改。</p>');}
function readingReflow(){requestAnimationFrame(()=>document.querySelectorAll('textarea.line-input,textarea#chatIn').forEach(growTA));}
window.addEventListener('resize',readingReflow);

/* Calendar arithmetic: months/years clamp to the target month's last day. */
function planNumber(s){
 if(/^\d+$/.test(s))return +s;
 const ns={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};
 if(s==='半')return .5;
 if(s.includes('十')){const [a,b]=s.split('十');return (a?ns[a]:1)*10+(b?ns[b]:0);}
 return ns[s];
}
function planDate(k,n,unit){
 const d=parseKey(k),day=d.getDate();
 if(unit==='月'||unit==='年'){d.setDate(1);d.setMonth(d.getMonth()+n*(unit==='年'?12:1));d.setDate(Math.min(day,new Date(d.getFullYear(),d.getMonth()+1,0).getDate()));}
 else d.setDate(day+n*(unit==='周'?7:1));
 return dkey(d);
}
function planFull(k){const a=k.split('.');return a[0]+'年'+a[1]+'月'+a[2]+'日';}
function planParse(t,base){
 if(/生日|农历|阴历|每(?:隔|个)?[一二三四五六七八九十两\d]*(?:年|月|周|天)/.test(t))return null;
 const re=/([一二三四五六七八九十两半\d]+)\s*(?:个)?(年|月|周|天)(?:以)?后(?:的今天)?/g;
 const ms=[...t.matchAll(re)];if(ms.length!==1)return null;
 const m=ms[0],n=planNumber(m[1]);if(!Number.isFinite(n)||n<=0||n>100||(n%1&&m[2]!=='年'))return null;
 const eventDay=planDate(base,n,m[2]);
 const ahead=t.match(/提前\s*([一二三四五六七八九十两\d]+)\s*(天|周|个?月)/);
 const an=ahead?planNumber(ahead[1]):0;if(!Number.isFinite(an))return null;
 const day=ahead?planDate(eventDay,-an,ahead[2].replace('个','')):eventDay;
 let title=t.replace(m[0],'').replace(/(?:也?记得|记住|请)?\s*提前\s*[一二三四五六七八九十两\d]+\s*(?:天|周|个?月)(?:到期)?(?:记得)?(?:提醒|通知)我?/g,'').replace(/(?:记得|记住|请)?(?:提醒|通知)我/g,'').replace(/^[，,。\s]+|[，,。\s]+$/g,'').trim();
 title=title.replace(/[,，]\s*$/,'');
 return {eventDay,day,ahead:an,source:t,title,needsTitle:!title||/^(到期|今天到期|记得)$/.test(title)};
}
function planItems(t,base){
 const q=planParse(t,base);if(!q)return null;
 let past=null;const parts=q.title.match(/^(.+?了[^，,]*)[，,](.+)$/);
 if(parts){past=parts[1];q.title=parts[2];}
 const items=[];if(past)items.push({text:past,src:past,kind:{kind:'event',day:base}});
 items.push({text:q.title||'待填写事项',src:t,kind:{kind:'task',day:q.day},plan:q});return items;
}
function planSay(o,text){
 const q=o.e.schedule;if(!q)return false;
 CHAT={mode:'one',base:o.base,outs:[o],text};
 chatShow('check','记好了：'+vEsc(o.e.text)+'。<br>事情日期：'+planFull(q.eventDay)+'<br>已放到 '+planFull(o.day)+' 的待办。', [['go','去看看'],['edit','改一下'],['undo','撤回']],a=>{
 if(a==='undo')chatUndo([o],text);else if(a==='go'){chatReplyHide();jumpToEntry(o.day,o.e._id);}else planEdit(o.e);
 });return true;
}
function planLocate(e){let hit=null;Object.values(PAGES).forEach(pg=>{const scan=list=>{if(list.includes(e))hit={list};list.forEach(x=>{if(x.children)scan(x.children);});};scan(pg.plan);scan(pg.flow);});return hit;}
function planEdit(e){
 const q=e.schedule,loc=planLocate(e);if(!q||!loc)return;
 rowPopCloseAll();
 const s=healthSheet('修改安排','<label>事项<input id="planTitle" class="vt-in" value="'+escAttr(e.text)+'"></label><label>事情日期<input id="planEvent" class="vt-in" type="date" value="'+key2iso(q.eventDay)+'"></label><label>放进待办的日期<input id="planDay" class="vt-in" type="date" value="'+key2iso(e.due||dayOfEntry(e))+'"></label><button class="rv-confirm" id="planSave">保存</button>');
 s.querySelector('#planSave').onclick=()=>{
 const title=s.querySelector('#planTitle').value.trim(),ev=s.querySelector('#planEvent').value,dt=s.querySelector('#planDay').value;if(!title||!ev||!dt){toast('把事项和两个日期填好');return;}
 const day=dt.split('-').map(Number).join('.');snapshot('修改安排');
 const old=dayOfEntry(e);if(old!==day){const f=planLocate(e);f.list.splice(f.list.indexOf(e),1);if(!PAGES[day])PAGES[day]={plan:[],flow:[]};PAGES[day].plan.push(e);Object.values(PAGES).forEach(p=>(p.voOut||[]).forEach(x=>{if(x.id===e._id)x.d=day;}));}
 e.text=title;e.due=day;e.noDue=1;e.schedule={...q,eventDay:ev.split('-').map(Number).join('.'),day};delete e.arrived;
 scheduleSave();closeSheet();chatReplyHide();gotoDay(day);
 };
}

function friendParse(t){
 const m=t.match(/(?:认识(?:了)?(?:一?个)?新朋友[，,\s]*(?:叫|是)?|新朋友叫)([\u4e00-\u9fffA-Za-z·]{2,16})(?=[，,。\s]|$)/);
 if(!m)return null;
 const name=m[1],mb=t.match(/\b([EI][NS][FT][JP])(?:-[AT])?\b/i),intro=t.match(/(?:是|由)?([^，,。\s]{2,12})介绍(?:的)?/);
 const bd=/生日/.test(t)?t.match(/(?:(\d{4}|\d{2})年)?(?:农历|阴历|阳历)?(\d{1,2})月(\d{1,2})[日号]?/):null;
 let birthday=null;
 if(bd){let y=bd[1]?+bd[1]:0;if(y&&y<100)y+=(y<=new Date().getFullYear()%100?2000:1900);birthday={y,m:+bd[2],d:+bd[3],calendar:/农历|阴历/.test(t)?'lunar':'solar'};}
 return {name,rel:'朋友',mbti:mb?mb[1].toUpperCase():'',introducedBy:intro?intro[1].replace(/^(?:是|由)/,''):'',birthday,met:/今天.*(?:认识|新朋友)/.test(t)?dkey(new Date()):'',source:t};
}
function friendBirthdayLabel(b){return b?(b.y?b.y+'年':'')+b.m+'月'+b.d+'日（'+(b.calendar==='lunar'?'农历':'阳历')+'）':'';}
function friendFields(p){
 const b=p.birthday||{};
 return '<label>MBTI<input class="vt-in" id="frMBTI" maxlength="4" value="'+escAttr(p.mbti||'')+'" placeholder="如 ENFP，可留空"></label>'
 +'<label>介绍人<input class="vt-in" id="frIntro" value="'+escAttr(p.introducedBy||'')+'" placeholder="如老赵，可留空"></label>'
 +'<label>生日 <select class="vt-in" id="frCal"><option value="solar"'+(b.calendar!=='lunar'?' selected':'')+'>阳历</option><option value="lunar"'+(b.calendar==='lunar'?' selected':'')+'>农历</option></select></label>'
 +'<div class="friend-date"><input class="vt-in" id="frY" type="number" placeholder="出生年，可不填" value="'+(b.y||'')+'"><input class="vt-in" id="frM" type="number" placeholder="月" value="'+(b.m||'')+'"><input class="vt-in" id="frD" type="number" placeholder="日" value="'+(b.d||'')+'"></div>'
 +'<label>相识日期<input class="vt-in" id="frMet" type="date" value="'+(p.met?key2iso(p.met):'')+'"></label>';
}
function friendRead(s){
 const val=id=>s.querySelector('#'+id).value.trim(),mbti=val('frMBTI').toUpperCase();
 if(mbti&&!/^[EI][NS][FT][JP]$/.test(mbti)){toast('MBTI 填四个字母，如 ENFP');return null;}
 const y=+val('frY'),m=+val('frM'),d=+val('frD'),cal=val('frCal');
 if((y||m||d)&&(!(m>=1&&m<=12)||!(d>=1&&d<=(cal==='lunar'?30:new Date(y||2000,m,0).getDate()))||(y&&!(y>=1900&&y<=new Date().getFullYear())))){toast('生日日期不完整或不正确');return null;}
 const intro=val('frIntro'),matches=(SET.people||[]).filter(p=>personAliases(p).includes(intro));
 return {mbti,introducedBy:intro,introducerId:matches.length===1?matches[0].id:null,birthday:m?{y,m,d,calendar:cal}:null,met:val('frMet')?val('frMet').split('-').map(Number).join('.'):''};
}
function friendEditExtras(s,p){
 const box=document.createElement('div');box.className='friend-fields';box.innerHTML=friendFields(p||{});s.querySelector('#peSave').before(box);
}
function friendPreview(o,draft){
 const candidates=(SET.people||[]).filter(p=>personAliases(p).includes(draft.name));
 const s=healthSheet('收进亲友','<p class="vt-note">原话已记在当天日常。生日未注明农历时按阳历。</p>'
 +'<label>姓名<input id="frName" class="vt-in" value="'+escAttr(draft.name)+'"></label><label>关系<input id="frRel" class="vt-in" value="'+escAttr(draft.rel)+'"></label>'
 +'<div id="frTargetBox"><label>册中有同名的人<select id="frTarget" class="vt-in"><option value="">请选择</option>'+candidates.map(p=>'<option value="'+p.id+'">补充到：'+vEsc(p.name)+' · '+vEsc(p.rel||'未填关系')+(p.birthday?' · '+vEsc(friendBirthdayLabel(p.birthday)):'')+'</option>').join('')+'<option value="new">这是另一位，新增</option></select></label></div>'
 +friendFields(draft)+'<p id="frConflict" class="vt-note"></p><label id="frOverwriteBox" hidden><input type="checkbox" id="frOverwrite"> 用本次填写的资料替换冲突项</label>'
 +'<button id="frSave" class="rv-confirm">收进亲友</button><button id="frOnly" class="chip">只记日常</button>');
 s.querySelector('#frTargetBox').hidden=!candidates.length;
 s.querySelector('#frOnly').onclick=()=>closeSheet();
 s.querySelector('#frSave').onclick=()=>{
 const name=s.querySelector('#frName').value.trim(),fields=friendRead(s);if(!name||!fields){if(!name)toast('先写名字');return;}
 const matches=(SET.people||[]).filter(p=>personAliases(p).includes(name));
 let target=s.querySelector('#frTarget').value;
 if(matches.length&&!target){
 const sel=s.querySelector('#frTarget');sel.innerHTML='<option value="">请选择</option>'+matches.map(p=>'<option value="'+p.id+'">补充到：'+vEsc(p.name)+' · '+vEsc(p.rel||'未填关系')+'</option>').join('')+'<option value="new">这是另一位，新增</option>';s.querySelector('#frTargetBox').hidden=false;toast('选已有的亲友，或新增同名的人');return;
 }
 let p=target&&target!=='new'?personById(+target):null;
 if(p&&!personAliases(p).includes(name)){toast('姓名已修改，请重新选择收录对象');s.querySelector('#frTarget').value='';return;}
 const rel=s.querySelector('#frRel').value.trim();
 const labels={mbti:'MBTI',introducedBy:'介绍人',birthday:'生日',met:'相识日期',rel:'关系'};
 const values={...fields,rel};const conflicts=p?Object.keys(labels).filter(k=>p[k]&&values[k]&&JSON.stringify(p[k])!==JSON.stringify(values[k])):[];
 if(conflicts.length&&!s.querySelector('#frOverwrite').checked){
 s.querySelector('#frConflict').textContent='已有资料不同：'+conflicts.map(k=>labels[k]+'（原来：'+(k==='birthday'?friendBirthdayLabel(p[k]):p[k])+'）').join('、')+'。可改回原值，或勾选替换。';s.querySelector('#frOverwriteBox').hidden=false;return;
 }
 snapshot('收进亲友');
 if(!p){p={id:++uid,name,nick:[],rel,note:'',moments:[],pins:[],added:TODAY};SET.people.push(p);}
 for(const k of Object.keys(values))if(values[k]!==''&&values[k]!==null)p[k]=values[k];
 if(fields.introducedBy)p.introducerId=fields.introducerId;
 friendSyncBirthday(p);
 o.e.personLinks=[...new Set([...(o.e.personLinks||[]),p.id])];delete SET.pplNo[name];scheduleSave();closeSheet();chatReplyHide();cur={name:'person',pid:p.id};render();
 };
}
function friendBirthdayStart(p){
 cur={name:'cycles',tab:'reminderForm',key:'preset'};cycUiOpen=true;cycEdit=null;cycTag='birthday';cycCal=p.birthday&&p.birthday.calendar==='lunar'?'lunar':'solar';
 const b=p.birthday||{};cycDraft={kind:cycCal==='lunar'?'lunar':'year',tag:'birthday',name:p.name+'生日',y0:b.y||'',m:b.m,d:b.d,lm:b.m,ld:b.d,ahead:0,personId:p.id};render();
}
function friendDetail(p,head){
 if(!p.mbti&&!p.introducedBy&&!p.birthday&&!p.met)return;
 const box=document.createElement('div');box.className='vt-note';
 [p.mbti?'MBTI：'+p.mbti:'',p.introducedBy?'介绍人：'+p.introducedBy:'',p.birthday?'生日：'+friendBirthdayLabel(p.birthday):'',p.met?'相识：'+planFull(p.met):''].filter(Boolean).forEach(t=>{const d=document.createElement('div');d.textContent=t;box.appendChild(d);});
 const intro=p.introducerId&&personById(p.introducerId);if(intro){const b=document.createElement('button');b.className='chip';b.textContent='看看'+intro.name;b.onclick=()=>{cur={name:'person',pid:intro.id};render();};box.appendChild(b);}
 head.appendChild(box);
}
function friendPeople(e){
 return (SET.people||[]).filter(p=>personHitE(p,e,parseEntry(e)));
}
function friendMark(p,e,day){
 p.marks=p.marks||[];if(p.marks.some(m=>m.sourceId===e._id))return;
 const [y,m,d]=day.split('.').map(Number);p.marks.push({sourceId:e._id,sourceDay:day,label:e.text,y,m,d});scheduleSave();
}
function friendMarkButton(p,e,day){
 const b=document.createElement('button');b.className='chip friend-mark';const marked=(p.marks||[]).some(m=>m.sourceId===e._id);
 b.textContent=marked?'★ 已在重要时间点':'☆ 加入重要时间点';
 b.onclick=ev=>{ev.stopPropagation();if(marked)p.marks=p.marks.filter(m=>m.sourceId!==e._id);else friendMark(p,e,day);scheduleSave();render();};return b;
}
function friendSuggest(o,text){
 const explicit=/(?:记成|记为|加入|放进|标为|设为)(?:亲友的)?重要时间点/.test(o.e.text);
 if(o.e.sym==='task'||(!explicit&&!/(第一次|初次|认识|重逢|告别|周年|旅行|旅游|去日本|去国外|毕业|搬家|结婚|植发|散伙饭)/.test(o.e.text)))return false;
 const ps=friendPeople(o.e);if(!ps.length)return false;
 CHAT={mode:'one',base:o.base,outs:[o],text};
 if(explicit&&ps.length===1){friendMark(ps[0],o.e,o.day);chatShow('check','已记下，并加入'+vEsc(ps[0].name)+'的重要时间点。',[['undo','撤回']],()=>chatUndo([o],text));return true;}
 const acts=ps.filter(p=>!(p.marks||[]).some(m=>m.sourceId===o.e._id)).map(p=>['mark:'+p.id,'加入'+p.name+'的重要时间点']);if(!acts.length)return false;
 chatShow('check','记好了，也能在亲友的共同记录里找到。要留下这个时间点吗？',acts.concat([['no','不用'],['undo','撤回']]),a=>{
 if(a==='undo')chatUndo([o],text);else if(a==='no'){o.e.noFriendSuggest=true;scheduleSave();chatReplyHide();}else{const p=personById(+a.split(':')[1]);if(p)friendMark(p,o.e,o.day);chatReplyHide();toast('已加入重要时间点');}
 });return true;
}
function friendResolveMark(k){
 if(!k.sourceId)return k;
 let found=null;walk((day,e)=>{if(e._id===k.sourceId)found={day,e};});if(!found)return null;
 const [y,m,d]=found.day.split('.').map(Number);return {...k,label:found.e.text.replace(/^(今天|昨天|前天)/,'').replace(/[，,]?\s*(?:记成|记为|加入|放进|标为|设为)(?:亲友的)?重要时间点[。！!]?$/,''),y,m,d};
}
function friendChatIntercept(inp,text,base){
 const draft=friendParse(text);
 if(draft){
 inp.value='';chatGrow();focusRef=null;
 const o=chatPlace([{text,src:text,kind:{kind:'event',day:base},friend:true}],base)[0];render();friendPreview(o,draft);return true;
 }
 const items=planItems(text,dkey(new Date()));if(!items)return false;
 inp.value='';chatGrow();focusRef=null;
 const save=()=>{const outs=chatPlace(items,base);render();if(outs.length===1)chatSayOne(outs[0],text);else{CHAT={mode:'done',base,outs,text};chatShow('check','今天的日常已记下。<br>未来安排已放到 '+planFull(outs[outs.length-1].day)+' 的待办。',[['undo','撤回']],()=>chatUndo(outs,text));}chatFlash(outs);};
 if(items[items.length-1].plan.needsTitle){const s=healthSheet('是什么事情？','<p>'+planFull(items[items.length-1].kind.day)+' 放进待办</p><input class="vt-in" id="planMissing" placeholder="例如：域名到期"><button class="rv-confirm" id="planConfirm">保存安排</button><button class="chip" id="planCancel">返回修改</button>');s.querySelector('#planConfirm').onclick=()=>{const t=s.querySelector('#planMissing').value.trim();if(!t)return;items[items.length-1].text=t;closeSheet();save();};s.querySelector('#planCancel').onclick=()=>{closeSheet();inp.value=text;chatGrow();};}
 else save();return true;
}

function friendSyncBirthday(p){
 if(!p.birthday)return;
 const b=p.birthday;
 (SET.cycles||[]).filter(c=>c.personId===p.id&&c.tag==='birthday').forEach(c=>{
 c.name=p.name+'生日';c.kind=b.calendar==='lunar'?'lunar':'year';c.y0=b.y||undefined;
 if(c.kind==='lunar'){c.lm=b.m;c.ld=b.d;delete c.m;delete c.d;}else{c.m=b.m;c.d=b.d;delete c.lm;delete c.ld;}
 });
}

function friendCombinedRecord(t){
 const first=t.split(/[，,]/)[0];
 return /散伙饭/.test(first)&&!/明天|后天|下周|下个?月|准备|打算|计划|想|要/.test(first)&&(SET.people||[]).some(p=>personAliases(p).some(n=>first.includes(n)));
}

// Historical notes may have a clock time, but no actual completion time.
const dayPeriods = new Map([['凌晨',0],['早上',360],['上午',540],['中午',720],['下午',780],['傍晚',1020],['晚上',1080]]);
function journalNow(){
  const d = new Date();
  return [d.getHours(), d.getMinutes()].map(n=>String(n).padStart(2,'0')).join(':');
}
function journalClock(e){
  if(e.sym==='task' && e.state==='done') return e.finishedTime || '';
  if(e.journalTime !== undefined) return e.journalTime;
  if(e.time) return e.time;
  if(e.sym==='task') return '';
  const period = (e.text||'').match(/^(?:今天|昨天|前天)?(凌晨|早上|上午|中午|下午|傍晚|晚上)/);
  return period ? period[1] : '';
}
function journalRank(value){
  if(dayPeriods.has(value)) return dayPeriods.get(value);
  if(/^\d{1,2}:\d{2}$/.test(value)){
    const [h,m]=value.split(':').map(Number);
    return h*60+m;
  }
  return Infinity;
}
function journalButton(label,cls,action){
  const b=document.createElement('button');
  b.type='button'; b.className=cls; b.textContent=label;
  b.onclick=ev=>{ev.stopPropagation(); action();};
  return b;
}
function journalTimeSheet(e){
  const completed=e.sym==='task' && e.state==='done';
  const value=journalClock(e);
  const s=healthSheet(completed?'实际完成时间':'发生时间',
    '<label>具体时间<input id="jtClock" class="vt-in" type="time"></label><div class="gs-chips" id="jtPeriods"></div><div class="gs-new"><button class="gm-btn" id="jtClear">时间未记</button><button class="rv-confirm" id="jtSave">保存时间</button></div>');
  function save(value){
    snapshot('修改记录时间');
    if(completed){
      e.finishedTime=value;
      const p=stagePlans().find(p=>Object.values(p.log).includes(e));
      if(p)e.met=stageMet(p,value);
    }
    else {
      if(e.sym!=='task'){
        e.noTime=1;
        if(value.includes(':')){
          e.time=value;
          delete e.journalTime;
        }else{
          e.journalTime=value;
          delete e.time;
        }
      }
    }
    scheduleSave();closeSheet();render();
  }
  const input=s.querySelector('#jtClock');
  if(value.includes(':')) input.value=value.padStart(5,'0');
  const chips=s.querySelector('#jtPeriods');
  chips.appendChild(journalButton('刚刚','gs-chip',()=>save(journalNow())));
  for(const period of dayPeriods.keys()) chips.appendChild(journalButton(period,'gs-chip'+(value===period?' on':''),()=>save(period)));
  s.querySelector('#jtClear').onclick=()=>save('');
  s.querySelector('#jtSave').onclick=()=>{if(input.value)save(input.value);else input.focus();};
}
function journalTimeButton(e){
  const value=journalClock(e);
  const b=journalButton(value||'时间未记','journal-time',()=>journalTimeSheet(e));
  b.setAttribute('aria-label','修改'+(e.sym==='task'&&e.state==='done'?'完成时间':'发生时间')+'，'+b.textContent);
  return b;
}
function journalCompleted(e){
  if(!['today','history'].includes(cur.name)){askMemo(e);return;}
  if($('#qsheet').classList.contains('on'))closeQSheet();
  scheduleSave();
  CHAT={mode:'tip',base:editKey()};
  chatShow('check','已完成。',[['time','补时间'],['memo','写备注'],['undo','撤回']],a=>{
    chatReplyHide();
    if(e.state!=='done')return;
    if(a==='time')journalTimeSheet(e);
    else if(a==='memo')askMemo(e);
    else {e.state='open';delete e.doneDay;delete e.finishedTime;scheduleSave();render();}
  });
}
function journalRender(box,date,editable,majors,sides,minors){
  const items=majors.map(e=>({e,source:date}));
  for(const p of stagePlans()){
    const e=p.log[key2iso(date)];if(e)items.push({e,source:date,done:true,stage:p});
  }
  // Resolve completed tasks from their original page. Nested tasks stay inside their parent.
  for(const source of Object.keys(PAGES)){
    const pg=PAGES[source];
    for(const e of [...pg.plan,...pg.flow]){
      if(e.sym==='task' && e.state==='done' && (e.doneDay||source)===date)
        items.push({e,source,done:true});
    }
  }
  for(const e of sides)items.push({e,source:date,house:sideHome(e)});
  for(const e of minors.filter(e=>e.meal && e.sym!=='task'))items.push({e,source:date,meal:true});
  const water=isleOn('health') && !((HEALTH.hidden||[]).includes('water')) ? HEALTH.records.water.filter(r=>r.date===key2iso(date)) : [];
  const head=secHead('日常',items.length+(water.length?1:0),!items.length&&!water.length,null);
  const sub=document.createElement('small');sub.className='journal-sub';sub.textContent='按时间线记录';head.appendChild(sub);
  box.appendChild(head);
  items.sort((a,b)=>journalRank(journalClock(a.e))-journalRank(journalClock(b.e)));
  const list=document.createElement('div');list.className='journal-list';box.appendChild(list);
  for(const {e,source,done,house,meal,stage} of items){
    const item=document.createElement('div');item.className='journal-group';
    item.appendChild(journalTimeButton(e));
    if(done || house || meal){
      const ref=document.createElement('div');ref.className='journal-ref';
      const label=done?'✓ '+e.text:e.text;
      ref.appendChild(journalButton(label,'journal-origin',()=>stage?towerGo('detail',stage.id):jumpToEntry(source,e._id)));
      if(house)ref.appendChild(journalButton(ISLE[house].h+' ›','journal-home',()=>isleGo(house)));
      if(done && (e.note || (e.children||[]).length)){
        const details=document.createElement('details'),summary=document.createElement('summary');
        summary.textContent='查看详情';details.appendChild(summary);
        if(e.note){const note=document.createElement('p');note.textContent=e.note;details.appendChild(note);}
        for(const child of e.children||[]){
          const line=document.createElement('div');line.append(journalTimeButton(child),document.createTextNode(' '+child.text));details.appendChild(line);
        }
        ref.appendChild(details);
      }
      item.appendChild(ref);
    }else{
      const content=document.createElement('div');content.className='journal-content';
      content.appendChild(entryNode(e,editable,false,false,false,true));
      if(editable&&e.isleAsk){const ask=isleAskNode(e);if(ask)content.appendChild(ask);}
      item.appendChild(content);
    }
    list.appendChild(item);
  }
  if(water.length){
    const total=water.reduce((sum,r)=>sum+r.ml,0);
    list.appendChild(journalButton('饮水 · '+water.length+' 次 · '+total+' ml ›','journal-water',()=>{cur={name:'health',tab:'water'};render();}));
  }
  if(editable) box.appendChild(secPh(items.length?'接着记':date===TODAY?'刚刚做了什么？':'补一件这天的事',()=>secWrite(date,'event')));
}

// Read a clock at the beginning of a journal line; leave clocks mentioned in prose alone.
function journalTimedLine(text){
  const line=text.trim().replace(/^今天\s*/, '');
  const match=line.match(/^(?:([01]?\d|2[0-3])[:：]([0-5]\d)|(凌晨|早上|上午|中午|下午|傍晚|晚上)?([零一二两三四五六七八九十\d]{1,3})点(半|一刻|三刻|[零一二两三四五六七八九十\d]{1,3}分?)?)(?![\d:：])/);
  if(!match) return null;
  const body=line.slice(match[0].length).replace(/^[\s，,、]+/, '');
  if(!body || (!match[3] && match[4]==='一' && !match[5] && /^[也都儿点]/.test(body)) || /^[至到]?\s*\d{1,2}[:：]|^[-—~～]/.test(body)) return null;
  let hour=match[1]===undefined ? cnNum(match[4].replace(/^零$/, '0')) : Number(match[1]);
  const minuteText=match[5] || '';
  const fractions={'':0,'半':30,'一刻':15,'三刻':45};
  const minute=match[2]!==undefined ? Number(match[2]) : (fractions[minuteText] ?? cnNum(minuteText.replace(/分$/, '').replace(/^零/, '') || '0'));
  if(hour===null || hour>23 || minute===null || minute>59) return null;
  if(/^(下午|傍晚|晚上)$/.test(match[3]) && hour<12) hour+=12;
  if(match[3]==='中午' && hour<=2) hour+=12;
  if((match[3]==='凌晨' || match[3]==='晚上') && hour===12) hour=0;
  return {time:[hour,minute].map(n=>String(n).padStart(2,'0')).join(':'), body};
}

function journalElapsedLine(text, relativeDates){
  const line=journalTimedLine(text);
  if(!line || /提醒|通知|记得|别忘|待办|待会|稍后|打算|计划|需要|还要|还没|必须|截止|明天|后天|下周|下个?月/.test(line.body)) return false;
  if(/^(?:交(?:周报|作业|报告)|提交|预约|预定|续费|还款|要)/.test(line.body)) return false;
  const day=relativeDates ? TODAY : chatBase();
  if(!day) return false;
  if(day!==TODAY) return parseKey(day)<parseKey(TODAY);
  const now=new Date();
  // A journal day starts at 04:00. After midnight, its evening has already passed.
  const minuteOfDay=journalRank(line.time);
  const current=now.getHours()*60+now.getMinutes();
  return (minuteOfDay+1200)%1440 <= (current+1200)%1440;
}

// Plans own their schedule. Measurements and finished books stay in their original records.
const STAGE_TYPES = {
  sleep:['早点睡','23 天早睡','◐'], weight:['体重管理','体重管理','◌'],
  water:['多喝水','14 天喝水','◒'], exercise:['坚持运动','坚持运动','↗'],
  book:['读点书','读点书','▤'], custom:['自定义计划','','＋']
};
function stagePlans(){return SET.stagePlans || (SET.stagePlans=[]);}
function stageToday(){return key2iso(TODAY);}
function stageEnd(p){return p.mode==='days' ? healthAddDays(p.start,p.limit-1) : '';}
function stageInRange(p,date){const end=stageEnd(p);return date>=p.start && (!end || date<=end);}
function stageScheduled(p,date){
  return stageInRange(p,date) && p.week.includes(new Date(date+'T12:00:00').getDay());
}
function stageWeights(p,date){
  const rows=HEALTH.records.weight;
  const baseline=rows.find(r=>r.id===p.baseId)?.value ?? p.baseKg;
  const latest=healthLatest(rows.filter(r=>r.date<=date && stageInRange(p,r.date)));
  return {baseline,latest,loss:latest?Math.round((baseline-latest.value)*20)/10:0};
}
function stageWater(p,until){
  const days=new Map();
  for(const r of HEALTH.records.water){
    if(r.date<=until && stageScheduled(p,r.date)) days.set(r.date,(days.get(r.date)||0)+r.ml);
  }
  const goal=healthWaterTarget(HEALTH);
  return [...days].filter(([,ml])=>goal && ml>=goal).map(([date])=>date);
}
function stageBooks(p,until){
  const titles=new Set();
  for(const [day,page] of Object.entries(PAGES)){
    const date=key2iso(day);
    if(date>until || !stageInRange(p,date))continue;
    for(const e of page.flow){
      if(!(e.groups||[]).some(g=>tplOf(g)==='book'))continue;
      if(/(?:没|未|还没|想|准备|计划)读完|没看完/.test(e.text) || !/读完|看完/.test(e.text))continue;
      const title=parseEntry(e).title || e.text.match(/《([^》]+)》/)?.[1];
      if(title)titles.add(title);
    }
  }
  return [...titles];
}
function stageCount(p,date){
  if(p.type==='water')return stageWater(p,date).length;
  if(p.type==='book' && p.byBook)return stageBooks(p,date).length;
  return Object.keys(p.log).filter(d=>d<=date && stageInRange(p,d) && p.log[d].met!==false).length;
}
function stageFinished(p,date){
  if(stageEnd(p) && date>stageEnd(p))return true;
  if(p.mode==='count')return stageCount(p,date)>=p.limit;
  return p.type==='weight' && p.goal && stageWeights(p,date).loss>=p.goal;
}
function stageProgress(p){
  const date=stageToday(),count=stageCount(p,date),elapsed=Math.max(0,healthDays(p.start,date)+1);
  let label=p.mode==='days'?'第 '+Math.min(elapsed,p.limit)+' / '+p.limit+' 天':'累计 '+count+' / '+p.limit+(p.byBook?' 本':' 次');
  let fraction=(p.mode==='days'?elapsed:count)/p.limit;
  let result=p.type==='sleep'?'已早睡 '+count+' 晚':'已完成 '+count+' 次';
  if(date<p.start)label=p.start+' 开始';
  if(p.type==='water')result='饮水达标 '+count+' 天';
  if(p.byBook)result='已读完 '+count+' 本'+(p.bookGoal?' / 目标 '+p.bookGoal+' 本':'');
  if(p.type==='weight'){
    const w=stageWeights(p,date);
    label=p.mode==='open'?'从 '+p.start+' 开始':label;
    result=w.latest?(w.loss<0?'较起点增加 '+(-w.loss):'已减 '+w.loss)+' 斤':'等待体重记录';
    if(p.goal){result+=' / 目标 '+p.goal+' 斤';fraction=w.loss/p.goal;}
    else if(p.mode==='open')fraction=0;
  }
  return {label,result,percent:Math.round(Math.max(0,Math.min(1,fraction))*100)};
}
function stageAction(p){
  if(p.type==='sleep')return p.clock?p.clock+' 前上床':'早点睡';
  if(p.type==='water')return '记录饮水';
  if(p.type==='book')return p.byBook?'读完一本书':'读书 '+p.minutes+' 分钟';
  return p.action||p.name;
}
function stageScheduleLabel(p){
  if(p.type==='weight' && !p.action)return '查看晨露小站的体重变化';
  if(p.byBook)return '关联小岛书屋的读完记录';
  const days=p.week.length===7?'每天':'周'+[1,2,3,4,5,6,0].filter(d=>p.week.includes(d)).map(d=>'日一二三四五六'[d]).join('、');
  return days+' · '+stageAction(p);
}
function towerGo(tab,id,key){cur={name:'cycles',tab,id,key};render();}
function towerList(tab){
  // Replace the editor/detail navigation chain so Back cannot reopen a saved draft.
  while(navStack.length && navStack.at(-1).name==='cycles')navStack.pop();
  navFromBack=true;towerGo(tab);
}
function towerEl(tag,cls,text){
  const el=document.createElement(tag);el.className=cls;if(text!=null)el.textContent=text;return el;
}
function towerHeading(parent,title,action,fn){
  const row=towerEl('div','tw-heading');row.append(towerEl('h3','',title));
  if(action)row.append(journalButton(action,'chip tw-primary',fn));parent.append(row);
}
function stageShowCard(parent,p){
  const b=towerEl('button','tw-card tw-plan');b.type='button';
  const progress=stageProgress(p);
  const title=towerEl('strong','',p.name+'  ›');
  b.append(title,towerEl('span','tw-muted',stageScheduleLabel(p)));
  const stats=towerEl('div','tw-stats');stats.append(towerEl('span','',progress.label),towerEl('span','',progress.result));b.append(stats);
  const bar=towerEl('progress','');bar.max=100;bar.value=progress.percent;b.append(bar);
  b.onclick=()=>towerGo('detail',p.id);parent.append(b);
}
function stageOverview(){
  towerHeading(view,'我的计划','＋ 新建计划',()=>towerGo('templates'));
  const plans=stagePlans(),today=stageToday();
  const active=plans.filter(p=>!stageFinished(p,today)),past=plans.filter(p=>stageFinished(p,today));
  if(!active.length)view.append(towerEl('p','tw-empty','还没有进行中的计划'));
  for(const p of active)stageShowCard(view,p);
  if(past.length){
    const archive=towerEl('details','tw-archive');archive.append(towerEl('summary','','已结束的计划（'+past.length+'）'));
    for(const p of past)stageShowCard(archive,p);view.append(archive);
  }
}
function stageTemplates(){
  towerHeading(view,'选一个模板');
  for(const [k,[label,,icon]] of Object.entries(STAGE_TYPES))
    view.append(journalButton(icon+'　'+label+'　›','tw-choice',()=>towerGo('form',undefined,k)));
}
function stageHasTask(p,date){
  if(!stageScheduled(p,date) || p.byBook || (p.type==='weight'&&!p.action))return false;
  return !stageFinished(p,healthAddDays(date,-1));
}
function stageOpenHealth(type,date){
  if(!isleOn('health') || HEALTH.hidden.includes(type)){toast('请先在晨露小站开启这一项');return;}
  cur={name:'health',tab:type};render();
  if(date){healthRecordSheet(type);const input=$('#hlForm input[name=date]');if(input)input.value=date;}
}
function stageMark(p,date,time,met=true){
  p.log[date]={sym:'task',state:'done',text:stageAction(p),finishedTime:time||'',met};
  scheduleSave();render();
}
function stageHomeRow(box,p,date){
  const row=towerEl('div','tw-home'),log=p.log[date];
  const done=stageTaskDone(p,date);
  const toggle=journalButton(done?'✓':'●','tw-check',()=>{
    if(p.type==='water'){stageOpenHealth('water',date);return;}
    if(p.type==='weight' && p.action==='称重'){stageOpenHealth('weight',date);return;}
    if(log){delete p.log[date];scheduleSave();render();return;}
    stageMark(p,date,'');
  });
  toggle.setAttribute('aria-label',stageAction(p)+'，'+(done?'已记录':'待记录'));
  row.append(toggle,journalButton(stageAction(p),'tw-home-title',()=>towerGo('detail',p.id)));box.append(row);
}
function stageLogForm(p,selected){
  const s=healthSheet('补记 · '+p.name,'<form id="stageLog" class="tw-form"><label>哪一天<input type="date" name="date" required></label><label>实际时间 · 选填<input type="time" name="clock"></label><div class="tw-error" role="status"></div><button class="rv-confirm">保存记录</button><button type="button" class="gm-btn" id="stageRemove">移除这天的记录</button></form>');
  const f=s.querySelector('form'),date=f.elements.date;
  date.min=p.start;date.max=stageEnd(p) && stageEnd(p)<stageToday()?stageEnd(p):stageToday();date.value=selected||date.max;
  const fill=()=>{f.elements.clock.value=p.log[date.value]?.finishedTime||'';s.querySelector('#stageRemove').hidden=!p.log[date.value];};date.onchange=fill;fill();
  s.querySelector('#stageRemove').onclick=()=>{delete p.log[date.value];scheduleSave();closeSheet();render();};
  f.onsubmit=e=>{e.preventDefault();if(!stageScheduled(p,date.value)){f.querySelector('.tw-error').textContent='请选择计划安排的日期';return;}
    const time=f.elements.clock.value;closeSheet();stageMark(p,date.value,time,stageMet(p,time));};
}
function stageMet(p,time){
  if(p.type!=='sleep' || !p.clock || !time)return true;
  const night=t=>(journalRank(t)+1200)%1440;
  return night(time)<=night(p.clock);
}
function stageDetail(p){
  towerHeading(view,p.name,'调整设置',()=>towerGo('form',p.id,p.type));
  const info=towerEl('div','tw-card'),stats=stageProgress(p);
  info.append(towerEl('strong','',stats.label),towerEl('p','',stats.result),towerEl('p','tw-muted',stageScheduleLabel(p)),
    towerEl('p','tw-muted','开始 '+p.start+(stageEnd(p)?'　结束 '+stageEnd(p):'')));view.append(info);
  if(['water','weight'].includes(p.type)){
    const label=p.type==='weight'?'体重':'饮水';
    view.append(journalButton('去晨露小站记'+label+' ›','tw-choice',()=>stageOpenHealth(p.type,stageToday())));
    if(p.type==='weight'){const w=stageWeights(p,stageToday());view.append(towerEl('p','tw-muted','起始 '+w.baseline+' kg'+(w.latest?'　最近 '+w.latest.value+' kg':'')));}
  }
  if(p.byBook){
    towerHeading(view,'已读完');for(const t of stageBooks(p,stageToday()))view.append(towerEl('p','tw-record',t));
  }else if(p.type==='water'){
    towerHeading(view,'达标记录');const days=stageWater(p,stageToday());view.append(towerEl('p','tw-record',days.reverse().join(' · ')||'还没有达标记录'));
  }else if(p.type!=='weight' || (p.action && p.action!=='称重')){
    towerHeading(view,'最近记录',p.start<=stageToday()?'补记':'',()=>stageLogForm(p));
    const dates=new Set(Object.keys(p.log));
    const last=stageEnd(p) && stageEnd(p)<stageToday()?stageEnd(p):stageToday();
    for(let i=0;i<7;i++){
      const date=healthAddDays(last,-i);
      if(stageHasTask(p,date))dates.add(date);
    }
    if(!dates.size)view.append(towerEl('p','tw-empty','还没有完成记录'));
    for(const date of [...dates].sort().reverse()){
      const item=p.log[date];
      const state=!item?'未记录':item.met===false?'晚于目标':'已完成';
      view.append(journalButton(date+'　'+(item?.finishedTime?item.finishedTime+'　':'')+state,'tw-choice',()=>stageLogForm(p,date)));
    }
  }
}
function stageTaskDone(p,date){
  if(p.type==='water')return stageWater(p,date).includes(date);
  if(p.type==='weight' && p.action==='称重')return HEALTH.records.weight.some(r=>r.date===date);
  return !!p.log[date];
}

function towerField(f,name,label,type,value,options){
  const row=towerEl('label','tw-field'),text=towerEl('span','',label);
  const el=document.createElement(type==='select'?'select':'input');el.name=name;el.className='vt-in';
  if(type==='select')for(const [key,title] of options)el.add(new Option(title,key));
  else el.type=type;
  if(type==='checkbox')el.checked=!!value;else el.value=value??'';
  row.append(text,el);f.append(row);return el;
}
function towerNumber(f,name,label,value,min,max,step=1){
  const el=towerField(f,name,label,'number',value);Object.assign(el,{min,max,step});return el;
}
function towerVisible(field,show){
  field.closest('label').hidden=!show;field.disabled=!show;
}
function towerForm(title){
  topTitle.textContent=title;
  const f=towerEl('form','tw-form tw-card');view.append(f);return f;
}
function towerSubmit(f,title,save){
  const error=towerEl('p','tw-error'),button=towerEl('button','rv-confirm',title);error.setAttribute('role','status');button.type='submit';f.append(error,button);
  f.onsubmit=e=>{e.preventDefault();error.textContent=save()||'';};
}
function stageForm(old,type){
  const f=towerForm(old?'调整计划':'新建计划'),today=stageToday();
  const defaults={sleep:23,water:14,weight:100,exercise:28,book:30,custom:30};
  const name=towerField(f,'name','计划名称','text',old?.name??cur.q??STAGE_TYPES[type][1]);name.required=true;name.maxLength=80;
  const start=towerField(f,'start','开始日期','date',old?.start??today);start.required=true;
  const modes=type==='weight'?[['open','暂不设期限'],['days','持续天数']]:[['days','持续天数'],['count','累计次数']];
  const mode=towerField(f,'mode','结束方式','select',old?.mode??(type==='weight' && !cur.date?'open':'days'),modes);
  const limit=towerNumber(f,'limit','持续天数',old?.limit??cur.date??defaults[type],1,3650);limit.required=true;
  const end=towerEl('small','tw-muted');f.append(end);
  let goal,base,clock,action,byBook,minutes,bookGoal,source;
  if(type==='weight'){
    const startingRecord=()=>healthLatest(HEALTH.records.weight.filter(r=>r.date<=start.value));
    source=old?HEALTH.records.weight.find(r=>r.id===old.baseId):startingRecord();
    goal=towerNumber(f,'goal','目标减重 · 斤（选填）',old?.goal??(cur.q?.match(/减\s*(\d+(?:\.\d+)?)\s*斤/)||[])[1],0.1,999,0.1);
    base=towerNumber(f,'base','确认起始体重 · kg',old?stageWeights(old,today).baseline:source?.value,1,500,.1);base.required=true;
    let manual=!!old && !source;
    base.oninput=()=>{manual=true;};
    start.oninput=()=>{source=startingRecord();if(!manual)base.value=source?.value??'';};
    action=towerField(f,'action','想坚持的行动 · 选填','text',old?.action);action.placeholder='只看体重可留空，也可填「称重」或「晚饭后散步」';
  }
  if(type==='sleep')clock=towerField(f,'clock','上床目标 · 选填','time',old?old.clock:'23:30');
  if(type==='book'){
    byBook=towerField(f,'reading','怎么记录','select',old?.byBook?'books':'minutes',[['minutes','按次读书'],['books','按读完的本数']]);
    minutes=towerNumber(f,'minutes','每次读几分钟',old?.minutes??15,1,1440);minutes.required=true;
    bookGoal=towerNumber(f,'bookGoal','想读完几本 · 选填',old?.bookGoal||'',1,3650);
  }
  if(type==='exercise' || type==='custom'){
    action=towerField(f,'action','每次做什么','text',old?.action??(type==='exercise'?'晚饭后散步':''));action.placeholder='留空则使用计划名称';
  }
  if(type==='water')f.append(towerEl('p','tw-muted',healthWaterTarget(HEALTH)?'每天达到晨露小站的饮水目标后自动记一次。':'请在晨露小站设置饮水目标，达到目标的日期会计入计划。'));
  const week=towerEl('fieldset','tw-week');week.append(towerEl('legend','','安排在哪几天'));
  const chosen=old?.week??(type==='exercise'?[1,3,5]:[1,2,3,4,5,6,0]);
  for(const day of [1,2,3,4,5,6,0]){
    const item=towerEl('label',''),check=document.createElement('input');check.type='checkbox';check.value=day;check.checked=chosen.includes(day);
    item.append(check,towerEl('span','','日一二三四五六'[day]));week.append(item);
  }
  f.append(week);
  function sync(){
    const books=byBook?.value==='books';
    towerVisible(limit,mode.value!=='open');
    limit.previousElementSibling.textContent=mode.value==='count'?(books?'目标本数':'累计次数'):'持续天数';
    if(minutes)towerVisible(minutes,!books);
    if(bookGoal)towerVisible(bookGoal,books && mode.value==='days');
    week.hidden=books || (type==='weight' && !action.value.trim());
    end.textContent=mode.value==='days' && healthValidDate(start.value) && limit.validity.valid?'结束日期　'+healthAddDays(start.value,+limit.value-1):'';
  }
  f.addEventListener('input',sync);sync();
  towerSubmit(f,'保存计划',()=>{
    if(!name.value.trim())return '请填写计划名称';
    const days=[...week.querySelectorAll(':checked')].map(el=>+el.value);
    if(!week.hidden && !days.length)return '请选择至少一天';
    const saved={id:old?.id??healthId(),type,name:name.value.trim(),mode:mode.value,start:start.value,
      limit:mode.value==='open'?defaults[type]:+limit.value,week:days,log:old?.log??{},action:action?.value.trim()||'',clock:clock?.value||'',
      goal:+goal?.value||0,baseKg:+base?.value||0,byBook:byBook?.value==='books',minutes:+minutes?.value||0};
    if(bookGoal)saved.bookGoal=bookGoal.disabled?0:+bookGoal.value;
    if(base && source && source.value===saved.baseKg && source.date<=saved.start)saved.baseId=source.id;
    if(old)Object.assign(old,{baseId:null},saved);else stagePlans().push(saved);
    scheduleSave();towerList('plans');toast('计划已保存');
  });
}
function towerReminderForm(old,preset){
  const draft=old||preset||{},f=towerForm(old?'编辑提醒':'新建提醒');
  const name=towerField(f,'name','提醒内容','text',draft.name);name.id='cyName';name.placeholder='写下要提醒的事';name.required=true;
  const day=towerField(f,'date','日期','date',draft.start||stageToday());day.required=true;
  const time=towerField(f,'time','时间 · 选填','time',draft.time);
  const ahead=towerNumber(f,'ahead','提前几天提示',draft.ahead??0,0,365);ahead.id='cyAhead';
  const repeat=towerField(f,'repeat','重复','checkbox',!!draft.kind && draft.kind!=='once');
  const kinds=[['daily','每天'],['weekly','每周'],['month','每月'],['year','每年 · 阳历'],['lunar','每年 · 农历'],['ndays','每 N 天']];
  const kind=towerField(f,'kind','重复周期','select',draft.kind==='once'?'daily':draft.kind||'daily',kinds);
  const category=towerField(f,'tag','提醒类别','select',draft.tag||'custom',[['custom','自定义'],['birthday','生日'],['anniv','纪念日'],['bill','还款日'],['period','生理期']]);
  const now=parseKey(TODAY);
  const month=towerNumber(f,'month','月份',draft.lm??draft.m??now.getMonth()+1,1,12);month.id='cyM';
  const dom=towerNumber(f,'dom','几号',draft.ld??draft.d??draft.day??now.getDate(),1,31);dom.id='cyD';
  const year=towerNumber(f,'y0','出生或起始年份 · 选填',draft.y0,1900,2100);
  const interval=towerNumber(f,'interval','间隔天数',draft.n??7,1,365);
  if(old?.kind==='ndays' && old.anchor)day.value=key2iso(old.anchor);
  if(draft.personId){kind.querySelectorAll('option').forEach(o=>{if(!['year','lunar'].includes(o.value))o.remove();});}
  function sync(){
    const k=repeat.checked?kind.value:'once';
    towerVisible(kind,repeat.checked);towerVisible(category,repeat.checked && !draft.personId);
    towerVisible(day,['once','daily','weekly','ndays'].includes(k));
    day.previousElementSibling.textContent=k==='ndays'?'上一次日期':k==='once'?'日期':'首次日期';
    towerVisible(month,['year','lunar'].includes(k));towerVisible(dom,['month','year','lunar'].includes(k));
    month.previousElementSibling.textContent=k==='lunar'?'农历月份':'月份';
    dom.previousElementSibling.textContent=k==='lunar'?'农历日':'几号';dom.max=k==='lunar'?30:31;
    towerVisible(year,['year','lunar'].includes(k));towerVisible(interval,k==='ndays');
  }
  f.onchange=sync;sync();
  towerSubmit(f,old?'保存修改':'保存提醒',()=>{
    const k=repeat.checked?kind.value:'once';
    if(!name.value.trim())return '请填写提醒内容';
    if(k==='year' && +dom.value>new Date(2000,+month.value,0).getDate())return '请检查月份和日期';
    if(!month.disabled&&!month.value || !dom.disabled&&!dom.value || !interval.disabled&&!interval.value)return '请填完整重复周期';
    const c={id:old?.id??++uid,name:name.value.trim(),kind:k,time:time.value,ahead:+ahead.value,enabled:old?.enabled!==false,tag:category.value};
    if(!day.disabled)c.start=day.value;
    if(k==='year'){c.m=+month.value;c.d=+dom.value;}
    if(k==='month')c.day=+dom.value;
    if(k==='lunar'){c.lm=+month.value;c.ld=+dom.value;}
    if(k==='ndays'){c.n=+interval.value;c.anchor=towerKey(day.value);}
    if(!year.disabled && year.value)c.y0=+year.value;
    if(draft.personId && ['year','lunar'].includes(k))c.personId=draft.personId;
    if(old)SET.cycles[SET.cycles.indexOf(old)]=c;else SET.cycles.push(c);
    towerRefreshReminder(c);scheduleSave();towerList('reminders');toast('提醒已保存');
  });
  f.querySelector('button[type=submit]').id='cySave';
}
function towerKey(iso){return iso.split('-').map(Number).join('.');}
function towerRefreshReminder(c){
  // Reconcile just today's pending projections. Keep completed tasks and previous days.
  P().plan=P().plan.filter(e=>!(e.cyc===c.id && (e.state==='open'||e.sym==='note')));
  c.lastIns=P().plan.some(e=>e.cyc===c.id && e.sym==='task')?TODAY:null;
  c.lastPre=null;cycMaterialize();
}

function towerReminderNext(c,from){
  if(c.enabled===false)return null;
  if(c.kind==='once')return c.start>=key2iso(from)?towerKey(c.start):null;
  if(['daily','weekly'].includes(c.kind)){
    const first=towerKey(c.start);
    if(c.start>=key2iso(from))return first;
    return c.kind==='daily'?from:addDaysK(from,(7-healthDays(c.start,key2iso(from))%7)%7);
  }
  return undefined;
}
function towerRender(){
  const tab=cur.tab||'plans',p=stagePlans().find(x=>x.id===cur.id);
  topTitle.textContent='滴答钟楼';reviewBtn.textContent='回今日';
  if(tab==='reminderForm'){
    const old=SET.cycles.find(c=>c.id===cur.id);
    towerReminderForm(old,cur.key==='preset'?cycDraft:null);return;
  }
  if(tab==='templates'){topTitle.textContent='新建计划';stageTemplates();return;}
  if(tab==='form'){stageForm(p,p?.type||cur.key||'custom');return;}
  if(tab==='detail' && p){topTitle.textContent='计划详情';stageDetail(p);return;}
  const head=letterHouseHead('cycles');head.classList.add('tw-letter');
  head.querySelector('.letter-kicker').textContent='岛上的日常 · 笃笃';
  head.querySelector('b').textContent='笃笃的钟楼';
  head.querySelector('p').textContent=tab==='reminders'?'到哪天，该提醒哪件事？':'今天有哪些计划？';view.append(head);
  const tabs=towerEl('div','tw-tabs');
  for(const [key,label] of [['plans','阶段计划'],['reminders','定时提醒']]){
    const selected=(tab==='reminders')===(key==='reminders');
    const b=journalButton(label,'chip'+(selected?' on':''),()=>{navFromBack=true;towerGo(key);});b.setAttribute('aria-pressed',selected);tabs.append(b);
  }
  view.append(tabs);
  if(tab==='reminders'){
    towerHeading(view,'我的提醒','＋ 新建提醒',()=>towerGo('reminderForm'));
    renderCycles();
  }else stageOverview();
}
function towerHealthLinks(page){
  if(!['weight','water'].includes(cur.tab))return;
  const linked=stagePlans().filter(p=>p.type===cur.tab && !stageFinished(p,healthAddDays(stageToday(),-1)));
  for(const p of linked){
    const b=journalButton('关联计划：'+p.name+' ›','hl-link tw-link',()=>towerGo('detail',p.id));
    page.querySelector('.health-pan')?.append(b);
  }
}
function towerChat(input,text,base){
  if(base!==TODAY)return false;
  const match=text.match(/^(?:我想|我要|我打算|我准备|创建|新建|开始)?(?:一个)?(\d{1,3})\s*天(?:的)?(早睡|减肥|喝水|运动|读书)(?:计划|挑战)?$/)
    || text.match(/^(?:我想|我要|开始)?(早睡|减肥|喝水|运动|读书)\s*(\d{1,3})\s*天(?:计划|挑战)?$/);
  const weight=text.match(/^(?:我想|我要|目标是|计划)?(?:减肥|减重|减)\s*(\d+(?:\.\d+)?)\s*斤$/);
  if(match || weight){
    const duration=match?Number(match[1])||Number(match[2]):null;
    if(match && !duration)return false;
    const type=weight?'weight':({早睡:'sleep',减肥:'weight',喝水:'water',运动:'exercise',读书:'book'})[isNaN(+match[1])?match[1]:match[2]];
    const title=weight?'减 '+weight[1]+' 斤':duration+' 天'+(isNaN(+match[1])?match[1]:match[2]);
    input.value='';chatGrow();cur={name:'cycles',tab:'form',key:type,date:duration||undefined,q:title};render();return true;
  }
  const sleep=text.match(/^昨晚\s*(\d{1,2}[:：][0-5]\d)\s*(?:就)?(?:上床|睡觉|睡)(?:了)?[。！]?$/);
  if(!sleep)return false;
  const date=healthAddDays(key2iso(dkey(new Date())),-1),plans=stagePlans().filter(p=>p.type==='sleep' && stageHasTask(p,date));
  if(plans.length!==1 || journalRank(sleep[1].replace('：',':'))>=1440)return false;
  const p=plans[0],time=sleep[1].replace('：',':').padStart(5,'0');
  input.value='';chatGrow();CHAT={mode:'tip',base};
  chatShow('ask','把 '+time+' 记到昨晚的「'+vEsc(p.name)+'」？',[['yes','记到计划'],['normal','只记日常']],a=>{
    chatReplyHide();
    if(a==='yes')stageMark(p,date,time,stageMet(p,time));
    else {chatPlace([{text,kind:{kind:'event',day:towerKey(date)}}],base);render();}
  });return true;
}
function towerCalendarEvent(c,k,index){
  const compact=key2iso(k).replaceAll('-','');
  const start=c.time?'DTSTART:'+compact+'T'+c.time.replace(':','')+'00':'DTSTART;VALUE=DATE:'+compact;
  const end=c.time?'DURATION:PT1M':'DTEND;VALUE=DATE:'+key2iso(addDaysK(k,1)).replaceAll('-','');
  const rules={year:'FREQ=YEARLY',month:'FREQ=MONTHLY;BYMONTHDAY='+c.day+',-1;BYSETPOS=1',
    daily:'FREQ=DAILY',weekly:'FREQ=WEEKLY',ndays:'FREQ=DAILY;INTERVAL='+c.n};
  const escape=s=>String(s).replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/[,;]/g,m=>'\\'+m);
  const rows=['BEGIN:VEVENT','UID:dotcyc-'+c.id+'-'+index+'@dot','DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,''),
    start,end,'SUMMARY:'+escape(cycIcon(c)+' '+c.name)];
  if(rules[c.kind])rows.push('RRULE:'+rules[c.kind]);
  if(c.time||c.ahead)rows.push('BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:'+escape(c.name),
    'TRIGGER:'+(c.ahead?'-P'+c.ahead+'D':'PT0M'),'END:VALARM');
  rows.push('END:VEVENT');return rows.join('\r\n')+'\r\n';
}
function stageValidateBackup(plans){
  if(plans==null)return;
  if(!Array.isArray(plans))throw new Error('阶段计划数据格式无效');
  const ids=new Set();
  for(const p of plans){
    if(!p || !Object.hasOwn(STAGE_TYPES,p.type) || typeof p.id!=='string' || ids.has(p.id) || typeof p.name!=='string' ||
       !healthValidDate(p.start) || !['days','count','open'].includes(p.mode) ||
       !Number.isInteger(p.limit) || p.limit<1 || p.limit>3650 ||
       !Array.isArray(p.week) || !p.week.every(d=>Number.isInteger(d)&&d>=0&&d<=6) ||
       !p.log || typeof p.log!=='object' || Array.isArray(p.log) ||
       Object.entries(p.log).some(([date,e])=>!healthValidDate(date)||!e||e.sym!=='task'||typeof e.text!=='string'))throw new Error('阶段计划记录无效');
    ids.add(p.id);
  }
}

function abuInitData(){
if(window.AbuData)return;
/*
 MIT


    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(r){return r.raw=r};$jscomp.createTemplateTagFirstArgWithRaw=function(r,u){r.raw=u;return r};$jscomp.arrayIteratorImpl=function(r){var u=0;return function(){return u<r.length?{done:!1,value:r[u++]}:{done:!0}}};$jscomp.arrayIterator=function(r){return{next:$jscomp.arrayIteratorImpl(r)}};$jscomp.makeIterator=function(r){var u="undefined"!=typeof Symbol&&Symbol.iterator&&r[Symbol.iterator];return u?u.call(r):$jscomp.arrayIterator(r)};
$jscomp.getGlobal=function(r){r=["object"==typeof globalThis&&globalThis,r,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var u=0;u<r.length;++u){var e=r[u];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(r,u,e){if(r==Array.prototype||r==Object.prototype)return r;r[u]=e.value;return r};$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};
$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(r,u){var e=$jscomp.propertyToPolyfillSymbol[u];if(null==e)return r[u];e=r[e];return void 0!==e?e:r[u]};$jscomp.polyfill=function(r,u,e,C){u&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(r,u,e,C):$jscomp.polyfillUnisolated(r,u,e,C))};
$jscomp.polyfillUnisolated=function(r,u,e,C){e=$jscomp.global;r=r.split(".");for(C=0;C<r.length-1;C++){var A=r[C];if(!(A in e))return;e=e[A]}r=r[r.length-1];C=e[r];u=u(C);u!=C&&null!=u&&$jscomp.defineProperty(e,r,{configurable:!0,writable:!0,value:u})};
$jscomp.polyfillIsolated=function(r,u,e,C){var A=r.split(".");r=1===A.length;C=A[0];C=!r&&C in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var w=0;w<A.length-1;w++){var Q=A[w];if(!(Q in C))return;C=C[Q]}A=A[A.length-1];e=$jscomp.IS_SYMBOL_NATIVE&&"es6"===e?C[A]:null;u=u(e);null!=u&&(r?$jscomp.defineProperty($jscomp.polyfills,A,{configurable:!0,writable:!0,value:u}):u!==e&&(void 0===$jscomp.propertyToPolyfillSymbol[A]&&($jscomp.propertyToPolyfillSymbol[A]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(A):
$jscomp.POLYFILL_PREFIX+A),$jscomp.defineProperty(C,$jscomp.propertyToPolyfillSymbol[A],{configurable:!0,writable:!0,value:u})))};$jscomp.polyfill("Math.log10",function(r){return r?r:function(u){return Math.log(u)/Math.LN10}},"es6","es3");$jscomp.polyfill("Number.isFinite",function(r){return r?r:function(u){return"number"!==typeof u?!1:!isNaN(u)&&Infinity!==u&&-Infinity!==u}},"es6","es3");
$jscomp.polyfill("Math.hypot",function(r){return r?r:function(u){if(2>arguments.length)return arguments.length?Math.abs(arguments[0]):0;var e,C,A;for(e=A=0;e<arguments.length;e++)A=Math.max(A,Math.abs(arguments[e]));if(1E100<A||1E-100>A){if(!A)return A;for(e=C=0;e<arguments.length;e++){var w=Number(arguments[e])/A;C+=w*w}return Math.sqrt(C)*A}for(e=C=0;e<arguments.length;e++)w=Number(arguments[e]),C+=w*w;return Math.sqrt(C)}},"es6","es3");
$jscomp.polyfill("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991},"es6","es3");$jscomp.polyfill("Number.isInteger",function(r){return r?r:function(u){return Number.isFinite(u)?u===Math.floor(u):!1}},"es6","es3");$jscomp.polyfill("Number.isSafeInteger",function(r){return r?r:function(u){return Number.isInteger(u)&&Math.abs(u)<=Number.MAX_SAFE_INTEGER}},"es6","es3");
$jscomp.polyfill("Math.cbrt",function(r){return r?r:function(u){if(0===u)return u;u=Number(u);var e=Math.pow(Math.abs(u),1/3);return 0>u?-e:e}},"es6","es3");
(function(r){"object"===typeof exports&&"undefined"!==typeof module?module.exports=r():"function"===typeof define&&define.amd?define([],r):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).Astronomy=r()})(function(){return function(){function r(u,e,C){function A(N,T){if(!e[N]){if(!u[N]){var ka="function"==typeof require&&require;if(!T&&ka)return ka(N,!0);if(w)return w(N,!0);T=Error("Cannot find module '"+N+"'");throw T.code="MODULE_NOT_FOUND",
T;}T=e[N]={exports:{}};u[N][0].call(T.exports,function(sa){return A(u[N][1][sa]||sa)},T,T.exports,r,u,e,C)}return e[N].exports}for(var w="function"==typeof require&&require,Q=0;Q<C.length;Q++)A(C[Q]);return A}return r}()({1:[function(r,u,e){function C(a){switch(a){case m.Sun:return 2.959122082855911E-4;case m.Mercury:return 4.912547451450812E-11;case m.Venus:return 7.243452486162703E-10;case m.Earth:return 8.887692390113509E-10;case m.Moon:return 1.093189565989891E-11;case m.EMB:return 8.997011346712498E-10;
case m.Mars:return 9.549535105779258E-11;case m.Jupiter:return 2.825345909524226E-7;case m.Saturn:return 8.459715185680659E-8;case m.Uranus:return 1.292024916781969E-8;case m.Neptune:return 1.524358900784276E-8;case m.Pluto:return 2.18869976542597E-12;default:throw"Do not know mass product for body: "+a;}}function A(a){if(!0!==a&&!1!==a)throw console.trace(),"Value is not boolean: "+a;return a}function w(a){if(!Number.isFinite(a))throw console.trace(),"Value is not a finite number: "+a;return a}function Q(a){return a-
Math.floor(a)}function N(a,b){var c=a.x*a.x+a.y*a.y+a.z*a.z;if(1E-8>Math.abs(c))throw"AngleBetween: first vector is too short.";var d=b.x*b.x+b.y*b.y+b.z*b.z;if(1E-8>Math.abs(d))throw"AngleBetween: second vector is too short.";a=(a.x*b.x+a.y*b.y+a.z*b.z)/Math.sqrt(c*d);return-1>=a?180:1<=a?0:e.RAD2DEG*Math.acos(a)}function T(a){a=ld.indexOf(a);return 0<=a?md[a]:null}function ka(a){return(a=T(a))&&0<a.dist?a:null}function sa(a){var b=2E3+(a-14)/365.24217;if(-500>b)return a=(b-1820)/100,-20+32*a*a;
if(500>b){a=b/100;b=a*a;var c=a*b;return 10583.6-1014.41*a+33.78311*b-5.952053*c-.1798452*b*b+.022174192*b*c+.0090316521*c*c}if(1600>b)return a=(b-1E3)/100,b=a*a,c=a*b,1574.2-556.01*a+71.23472*b+.319781*c-.8503463*b*b-.005050998*b*c+.0083572073*c*c;if(1700>b)return a=b-1600,b=a*a,120-.9808*a-.01532*b+a*b/7129;if(1800>b)return a=b-1700,b=a*a,8.83+.1603*a-.0059285*b+1.3336E-4*a*b-b*b/1174E3;if(1860>b){a=b-1800;b=a*a;c=a*b;var d=b*b;return 13.72-.332447*a+.0068612*b+.0041116*c-3.7436E-4*d+1.21272E-5*
b*c-1.699E-7*c*c+8.75E-10*c*d}if(1900>b)return a=b-1860,b=a*a,c=a*b,7.62+.5737*a-.251754*b+.01680668*c-4.473624E-4*b*b+b*c/233174;if(1920>b)return a=b-1900,b=a*a,-2.79+1.494119*a-.0598939*b+.0061966*a*b-1.97E-4*b*b;if(1941>b)return a=b-1920,b=a*a,21.2+.84493*a-.0761*b+.0020936*a*b;if(1961>b)return a=b-1950,b=a*a,29.07+.407*a-b/233+a*b/2547;if(1986>b)return a=b-1975,b=a*a,45.45+1.067*a-b/260-a*b/718;if(2005>b)return a=b-2E3,b=a*a,c=a*b,63.86+.3345*a-.060374*b+.0017275*c+6.51814E-4*b*b+2.373599E-5*
b*c;if(2050>b)return a=b-2E3,62.92+.32217*a+.005589*a*a;if(2150>b)return a=(b-1820)/100,-20+32*a*a-.5628*(2150-b);a=(b-1820)/100;return-20+32*a*a}function Vb(a){return a+Wb(a)/86400}function v(a){return a instanceof O?a:new O(a)}function Xb(a){a=a.tt/36525;return(((((-4.34E-8*a-5.76E-7)*a+.0020034)*a-1.831E-4)*a-46.836769)*a+84381.406)/3600}function da(a){if(!$a||1E-6<Math.abs($a.tt-a.tt)){var b=a.tt/36525;var c=(1287104.79305+1.295965810481E8*b)%1296E3*4.84813681109536E-6;var d=(335779.526232+1.7395272628478E9*
b)%1296E3*4.84813681109536E-6,f=(450160.398036-6962890.5431*b)%1296E3*4.84813681109536E-6,g=Math.sin(f),h=Math.cos(f),l=(-172064161-174666*b)*g+33386*h,k=(92052331+9086*b)*h+15377*g;h=2*(d-(1072260.70369+1.602961601209E9*b)%1296E3*4.84813681109536E-6+f);g=Math.sin(h);h=Math.cos(h);l+=(-13170906-1675*b)*g-13696*h;k+=(5730336-3015*b)*h-4587*g;h=2*(d+f);g=Math.sin(h);h=Math.cos(h);l+=(-2276413-234*b)*g+2796*h;k+=(978459-485*b)*h+1374*g;h=2*f;g=Math.sin(h);h=Math.cos(h);l+=(2074554+207*b)*g-698*h;k+=
(-897492+470*b)*h-291*g;g=Math.sin(c);h=Math.cos(c);c=-1.35E-4+1E-7*(l+((1475877-3633*b)*g+11817*h));b=3.88E-4+1E-7*(k+((73871-184*b)*h-1924*g));g=Xb(a);$a={tt:a.tt,dpsi:c,deps:b,ee:c*Math.cos(g*e.DEG2RAD)/15,mobl:g,tobl:g+b/3600}}return $a}function Yb(a,b){var c=a*e.DEG2RAD;a=Math.cos(c);c=Math.sin(c);return[b[0],b[1]*a-b[2]*c,b[1]*c+b[2]*a]}function ea(a){function b(D,G,P,fa){for(var L=[],ta=0;ta<=G-D;++ta){var ua=L,ub=ua.push,vb,Zb=P,nd=fa,$b=[];for(vb=0;vb<=nd-Zb;++vb)$b.push(0);ub.call(ua,{min:Zb,
array:$b})}return{min:D,array:L}}function c(D,G,P){D=D.array[G-D.min];return D.array[P-D.min]}function d(D,G,P){D=y.array[D-y.min];D.array[G-D.min]=P}function f(D,G,P){D=x.array[D-x.min];D.array[G-D.min]=P}function g(D,G,P,fa,L){L(D*P-G*fa,G*P+D*fa)}function h(D){return Math.sin(U*D)}function l(D,G,P,fa){var L={x:1,y:0};D=[0,D,G,P,fa];for(G=1;4>=G;++G)0!==D[G]&&g(L.x,L.y,c(y,D[G],G),c(x,D[G],G),function(ta,ua){return L.x=ta,L.y=ua});return L}function k(D,G,P,fa,L,ta,ua,ub){L=l(L,ta,ua,ub);q+=D*L.y;
t+=G*L.y;ab+=P*L.x;va+=fa*L.x}++e.CalcMoonCount;a=a.tt/36525;var n,p,q,t,y=b(-6,6,1,4),x=b(-6,6,1,4);var z=a*a;var ab=t=q=0;var va=3422.7;var la=h(.19833+.05611*a);var ha=h(.27869+.04508*a);var V=h(.16827-.36903*a);var ba=h(.34734-5.37261*a);var La=h(.10498-5.37899*a);var bb=h(.42681-.41855*a),od=h(.14943-5.37511*a);var cb=.84*la+.31*ha+14.27*V+7.26*ba+.28*La+.24*bb;var wb=2.94*la+.31*ha+14.27*V+9.34*ba+1.12*La+.83*bb;var db=-6.4*la-1.89*bb;ha=.21*la+.31*ha+14.27*V-88.7*ba-15.3*La+.24*bb-1.86*od;
V=cb-db;la=-3.332E-6*h(.59734-5.37261*a)-5.39E-7*h(.35498-5.37899*a)-6.4E-8*h(.39943-5.37511*a);cb=U*Q(.60643382+1336.85522467*a-3.13E-6*z)+cb/ia;wb=U*Q(.37489701+1325.55240982*a+2.565E-5*z)+wb/ia;db=U*Q(.99312619+99.99735956*a-4.4E-7*z)+db/ia;ha=U*Q(.25909118+1342.2278298*a-8.92E-6*z)+ha/ia;La=U*Q(.82736186+1236.85308708*a-3.97E-6*z)+V/ia;for(n=1;4>=n;++n){switch(n){case 1:V=wb;z=4;ba=1.000002208;break;case 2:V=db;z=3;ba=.997504612-.002495388*a;break;case 3:V=ha;z=4;ba=1.000002708+139.978*la;break;
case 4:V=La;z=6;ba=1;break;default:throw"Internal error: I = "+n;}d(0,n,1);d(1,n,Math.cos(V)*ba);f(0,n,0);f(1,n,Math.sin(V)*ba);for(p=2;p<=z;++p)g(c(y,p-1,n),c(x,p-1,n),c(y,1,n),c(x,1,n),function(D,G){return d(p,n,D),f(p,n,G)});for(p=1;p<=z;++p)d(-p,n,c(y,p,n)),f(-p,n,-c(x,p,n))}k(13.902,14.06,-.001,.2607,0,0,0,4);k(.403,-4.01,.394,.0023,0,0,0,3);k(2369.912,2373.36,.601,28.2333,0,0,0,2);k(-125.154,-112.79,-.725,-.9781,0,0,0,1);k(1.979,6.98,-.445,.0433,1,0,0,4);k(191.953,192.72,.029,3.0861,1,0,0,2);
k(-8.466,-13.51,.455,-.1093,1,0,0,1);k(22639.5,22609.07,.079,186.5398,1,0,0,0);k(18.609,3.59,-.094,.0118,1,0,0,-1);k(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2);k(3.215,5.44,.192,-.0386,1,0,0,-3);k(-38.428,-38.64,.001,.6008,1,0,0,-4);k(-.393,-1.43,-.092,.0086,1,0,0,-6);k(-.289,-1.59,.123,-.0053,0,1,0,4);k(-24.42,-25.1,.04,-.3,0,1,0,2);k(18.023,17.93,.007,.1494,0,1,0,1);k(-668.146,-126.98,-1.302,-.3997,0,1,0,0);k(.56,.32,-.001,-.0037,0,1,0,-1);k(-165.145,-165.06,.054,1.9178,0,1,0,-2);k(-1.877,-6.46,
-.416,.0339,0,1,0,-4);k(.213,1.02,-.074,.0054,2,0,0,4);k(14.387,14.78,-.017,.2833,2,0,0,2);k(-.586,-1.2,.054,-.01,2,0,0,1);k(769.016,767.96,.107,10.1657,2,0,0,0);k(1.75,2.01,-.018,.0155,2,0,0,-1);k(-211.656,-152.53,5.679,-.3039,2,0,0,-2);k(1.225,.91,-.03,-.0088,2,0,0,-3);k(-30.773,-34.07,-.308,.3722,2,0,0,-4);k(-.57,-1.4,-.074,.0109,2,0,0,-6);k(-2.921,-11.75,.787,-.0484,1,1,0,2);k(1.267,1.52,-.022,.0164,1,1,0,1);k(-109.673,-115.18,.461,-.949,1,1,0,0);k(-205.962,-182.36,2.056,1.4437,1,1,0,-2);k(.233,
.36,.012,-.0025,1,1,0,-3);k(-4.391,-9.66,-.471,.0673,1,1,0,-4);k(.283,1.53,-.111,.006,1,-1,0,4);k(14.577,31.7,-1.54,.2302,1,-1,0,2);k(147.687,138.76,.679,1.1528,1,-1,0,0);k(-1.089,.55,.021,0,1,-1,0,-1);k(28.475,23.59,-.443,-.2257,1,-1,0,-2);k(-.276,-.38,-.006,-.0036,1,-1,0,-3);k(.636,2.27,.146,-.0102,1,-1,0,-4);k(-.189,-1.68,.131,-.0028,0,2,0,2);k(-7.486,-.66,-.037,-.0086,0,2,0,0);k(-8.096,-16.35,-.74,.0918,0,2,0,-2);k(-5.741,-.04,0,-9E-4,0,0,2,2);k(.255,0,0,0,0,0,2,1);k(-411.608,-.2,0,-.0124,0,0,
2,0);k(.584,.84,0,.0071,0,0,2,-1);k(-55.173,-52.14,0,-.1052,0,0,2,-2);k(.254,.25,0,-.0017,0,0,2,-3);k(.025,-1.67,0,.0031,0,0,2,-4);k(1.06,2.96,-.166,.0243,3,0,0,2);k(36.124,50.64,-1.3,.6215,3,0,0,0);k(-13.193,-16.4,.258,-.1187,3,0,0,-2);k(-1.187,-.74,.042,.0074,3,0,0,-4);k(-.293,-.31,-.002,.0046,3,0,0,-6);k(-.29,-1.45,.116,-.0051,2,1,0,2);k(-7.649,-10.56,.259,-.1038,2,1,0,0);k(-8.627,-7.59,.078,-.0192,2,1,0,-2);k(-2.74,-2.54,.022,.0324,2,1,0,-4);k(1.181,3.32,-.212,.0213,2,-1,0,2);k(9.703,11.67,-.151,
.1268,2,-1,0,0);k(-.352,-.37,.001,-.0028,2,-1,0,-1);k(-2.494,-1.17,-.003,-.0017,2,-1,0,-2);k(.36,.2,-.012,-.0043,2,-1,0,-4);k(-1.167,-1.25,.008,-.0106,1,2,0,0);k(-7.412,-6.12,.117,.0484,1,2,0,-2);k(-.311,-.65,-.032,.0044,1,2,0,-4);k(.757,1.82,-.105,.0112,1,-2,0,2);k(2.58,2.32,.027,.0196,1,-2,0,0);k(2.533,2.4,-.014,-.0212,1,-2,0,-2);k(-.344,-.57,-.025,.0036,0,3,0,-2);k(-.992,-.02,0,0,1,0,2,2);k(-45.099,-.02,0,-.001,1,0,2,0);k(-.179,-9.52,0,-.0833,1,0,2,-2);k(-.301,-.33,0,.0014,1,0,2,-4);k(-6.382,-3.37,
0,-.0481,1,0,-2,2);k(39.528,85.13,0,-.7136,1,0,-2,0);k(9.366,.71,0,-.0112,1,0,-2,-2);k(.202,.02,0,0,1,0,-2,-4);k(.415,.1,0,.0013,0,1,2,0);k(-2.152,-2.26,0,-.0066,0,1,2,-2);k(-1.44,-1.3,0,.0014,0,1,-2,2);k(.384,-.04,0,0,0,1,-2,-2);k(1.938,3.6,-.145,.0401,4,0,0,0);k(-.952,-1.58,.052,-.013,4,0,0,-2);k(-.551,-.94,.032,-.0097,3,1,0,0);k(-.482,-.57,.005,-.0045,3,1,0,-2);k(.681,.96,-.026,.0115,3,-1,0,0);k(-.297,-.27,.002,-9E-4,2,2,0,-2);k(.254,.21,-.003,0,2,-2,0,-2);k(-.25,-.22,.004,.0014,1,3,0,-2);k(-3.996,
0,0,4E-4,2,0,2,0);k(.557,-.75,0,-.009,2,0,2,-2);k(-.459,-.38,0,-.0053,2,0,-2,2);k(-1.298,.74,0,4E-4,2,0,-2,0);k(.538,1.14,0,-.0141,2,0,-2,-2);k(.263,.02,0,0,1,1,2,0);k(.426,.07,0,-6E-4,1,1,-2,-2);k(-.304,.03,0,3E-4,1,-1,2,0);k(-.372,-.19,0,-.0027,1,-1,-2,2);k(.418,0,0,0,0,0,4,0);k(-.33,-.04,0,0,3,0,2,0);z=-526.069*l(0,0,1,-2).y;z+=-3.352*l(0,0,1,-4).y;z+=44.297*l(1,0,1,-2).y;z+=-6*l(1,0,1,-4).y;z+=20.599*l(-1,0,1,0).y;z+=-30.598*l(-1,0,1,-2).y;z+=-24.649*l(-2,0,1,0).y;z+=-2*l(-2,0,1,-2).y;z+=-22.571*
l(0,1,1,-2).y;z+=10.985*l(0,-1,1,-2).y;q+=.82*h(.7736-62.5512*a)+.31*h(.0466-125.1025*a)+.35*h(.5785-25.1042*a)+.66*h(.4591+1335.8075*a)+.64*h(.313-91.568*a)+1.14*h(.148+1331.2898*a)+.21*h(.5918+1056.5859*a)+.44*h(.5784+1322.8595*a)+.24*h(.2275-5.7374*a)+.28*h(.2965+2.6929*a)+.33*h(.3132+6.3368*a);a=ha+t/ia;a=(1.000002708+139.978*la)*(18518.511+1.189+ab)*Math.sin(a)-6.24*Math.sin(3*a)+z;return{geo_eclip_lon:U*Q((cb+q/ia)/U),geo_eclip_lat:Math.PI/648E3*a,distance_au:ia*pd/(.999953253*va)}}function ac(a,
b){return[a.rot[0][0]*b[0]+a.rot[1][0]*b[1]+a.rot[2][0]*b[2],a.rot[0][1]*b[0]+a.rot[1][1]*b[1]+a.rot[2][1]*b[2],a.rot[0][2]*b[0]+a.rot[1][2]*b[1]+a.rot[2][2]*b[2]]}function wa(a,b,c){b=Ma(b,c);return ac(b,a)}function Ma(a,b){a=a.tt/36525;var c=84381.406,d=((((3.337E-7*a-4.67E-7)*a-.00772503)*a+.0512623)*a-.025754)*a+c;c*=4.84813681109536E-6;var f=((((-9.51E-8*a+1.32851E-4)*a-.00114045)*a-1.0790069)*a+5038.481507)*a*4.84813681109536E-6;d*=4.84813681109536E-6;var g=((((-5.6E-8*a+1.70663E-4)*a-.00121197)*
a-2.3814292)*a+10.556403)*a*4.84813681109536E-6;a=Math.sin(c);c=Math.cos(c);var h=Math.sin(-f);f=Math.cos(-f);var l=Math.sin(-d);d=Math.cos(-d);var k=Math.sin(g),n=Math.cos(g);g=n*f-h*k*d;var p=n*h*c+k*d*f*c-a*k*l,q=n*h*a+k*d*f*a+c*k*l,t=-k*f-h*n*d,y=-k*h*c+n*d*f*c-a*n*l;k=-k*h*a+n*d*f*a+c*n*l;h*=l;n=-l*f*c-a*d;a=-l*f*a+d*c;if(b===F.Into2000)return new J([[g,p,q],[t,y,k],[h,n,a]]);if(b===F.From2000)return new J([[g,t,h],[p,y,n],[q,k,a]]);throw"Invalid precess direction";}function ca(a){if(!eb||eb.tt!==
a.tt){var b=a.tt/36525,c=15*da(a).ee,d=(.779057273264+.00273781191135448*a.ut+a.ut%1)%1*360;0>d&&(d+=360);b=((c+.014506+((((-3.68E-8*b-2.9956E-5)*b-4.4E-7)*b+1.3915817)*b+4612.156534)*b)/3600+d)%360/15;0>b&&(b+=24);eb={tt:a.tt,st:b}}return eb.st}function bc(a){a=v(a);return ca(a)}function xb(a,b){var c=a.latitude*e.DEG2RAD,d=Math.sin(c);c=Math.cos(c);var f=1/Math.hypot(c,.996647180302104*d),g=a.height/1E3,h=6378.1366*f+g;b=(15*b+a.longitude)*e.DEG2RAD;a=Math.sin(b);b=Math.cos(b);return{pos:[h*c*b/
e.KM_PER_AU,h*c*a/e.KM_PER_AU,(6335.438815127603*f+g)*d/e.KM_PER_AU],vel:[-7.292115E-5*h*c*a*86400/e.KM_PER_AU,7.292115E-5*h*c*b*86400/e.KM_PER_AU,0]}}function xa(a,b,c){b=Na(b,c);return ac(b,a)}function Na(a,b){a=da(a);var c=a.mobl*e.DEG2RAD,d=a.tobl*e.DEG2RAD,f=4.84813681109536E-6*a.dpsi;a=Math.cos(c);c=Math.sin(c);var g=Math.cos(d),h=Math.sin(d);d=Math.cos(f);var l=Math.sin(f);f=-l*a;var k=-l*c,n=l*g,p=d*a*g+c*h,q=d*c*g-a*h;l*=h;var t=d*a*h-c*g;a=d*c*h+a*g;if(b===F.From2000)return new J([[d,n,
l],[f,p,t],[k,q,a]]);if(b===F.Into2000)return new J([[d,f,k],[n,p,q],[l,t,a]]);throw"Invalid precess direction";}function fb(a,b,c){return c===F.Into2000?wa(xa(a,b,c),b,c):xa(wa(a,b,c),b,c)}function cc(a,b){var c=ca(a);b=xb(b,c).pos;return fb(b,a,F.Into2000)}function qd(a){if(!(a instanceof Array)||3!==a.length)return!1;for(var b=0;3>b;++b){if(!(a[b]instanceof Array)||3!==a[b].length)return!1;for(var c=0;3>c;++c)if(!Number.isFinite(a[b][c]))return!1}return!0}function yb(a,b){return new E(a[0],a[1],
a[2],b)}function dc(a,b){b=yb(a,b);var c=b.x*b.x+b.y*b.y,d=Math.sqrt(c+b.z*b.z);if(0===c){if(0===b.z)throw"Indeterminate sky coordinates";return new gb(0,0>b.z?-90:90,d,b)}var f=e.RAD2HOUR*Math.atan2(b.y,b.x);0>f&&(f+=24);return new gb(f,e.RAD2DEG*Math.atan2(a[2],Math.sqrt(c)),d,b)}function ya(a,b){var c=a*e.DEG2RAD;a=Math.cos(c);c=Math.sin(c);return[a*b[0]+c*b[1],a*b[1]-c*b[0],b[2]]}function hb(a,b,c,d,f){a=v(a);za(b);w(c);w(d);var g=Math.sin(b.latitude*e.DEG2RAD),h=Math.cos(b.latitude*e.DEG2RAD),
l=Math.sin(b.longitude*e.DEG2RAD),k=Math.cos(b.longitude*e.DEG2RAD);b=Math.sin(d*e.DEG2RAD);var n=Math.cos(d*e.DEG2RAD),p=Math.sin(c*e.HOUR2RAD),q=Math.cos(c*e.HOUR2RAD),t=[h*k,h*l,g];g=[-g*k,-g*l,h];l=[l,-k,0];h=-15*ca(a);a=ya(h,t);t=ya(h,g);l=ya(h,l);b=[n*q,n*p,b];p=b[0]*a[0]+b[1]*a[1]+b[2]*a[2];n=b[0]*t[0]+b[1]*t[1]+b[2]*t[2];t=b[0]*l[0]+b[1]*l[1]+b[2]*l[2];q=Math.hypot(n,t);0<q?(n=-e.RAD2DEG*Math.atan2(t,n),0>n&&(n+=360)):n=0;p=e.RAD2DEG*Math.atan2(q,p);q=d;if(f&&(d=p,f=Oa(f,90-p),p-=f,0<f&&3E-4<
p)){c=Math.sin(p*e.DEG2RAD);q=Math.cos(p*e.DEG2RAD);t=Math.sin(d*e.DEG2RAD);d=Math.cos(d*e.DEG2RAD);f=[];for(l=0;3>l;++l)f.push((b[l]-d*a[l])/t*c+a[l]*q);q=Math.hypot(f[0],f[1]);0<q?(c=e.RAD2HOUR*Math.atan2(f[1],f[0]),0>c&&(c+=24)):c=0;q=e.RAD2DEG*Math.atan2(f[2],q)}return new ec(n,90-p,c,q)}function za(a){if(!(a instanceof zb))throw"Not an instance of the Observer class: "+a;w(a.latitude);w(a.longitude);w(a.height);if(-90>a.latitude||90<a.latitude)throw"Latitude "+a.latitude+" is out of range. Must be -90..+90.";
return a}function fc(a){a=v(a).AddDays(-1/e.C_AUDAY);var b=Aa(M.Earth,a),c=$jscomp.makeIterator(fb([-b.x,-b.y,-b.z],a,F.From2000));b=c.next().value;var d=c.next().value,f=c.next().value,g=e.DEG2RAD*da(a).tobl;c=Math.cos(g);g=Math.sin(g);a=new E(b,d,f,a);return Ab(a,c,g)}function Pa(a,b,c,d,f){za(c);A(d);A(f);b=v(b);c=cc(b,c);a=W(a,b,f);a=[a.x-c[0],a.y-c[1],a.z-c[2]];if(!d)return dc(a,b);d=fb(a,b,F.From2000);return dc(d,b)}function Ab(a,b,c){var d=a.x,f=a.y*b+a.z*c;c=-a.y*c+a.z*b;var g=Math.hypot(d,
f);b=0;0<g&&(b=e.RAD2DEG*Math.atan2(f,d),0>b&&(b+=360));g=e.RAD2DEG*Math.atan2(c,g);a=new E(d,f,c,a.t);return new gc(a,g,b)}function Qa(a){var b=da(a.t),c=wa([a.x,a.y,a.z],a.t,F.From2000),d=$jscomp.makeIterator(xa(c,a.t,F.From2000));c=d.next().value;var f=d.next().value;d=d.next().value;a=new E(c,f,d,a.t);b=b.tobl*e.DEG2RAD;return Ab(a,Math.cos(b),Math.sin(b))}function Y(a){a=v(a);var b=ea(a),c=b.distance_au*Math.cos(b.geo_eclip_lat);b=[c*Math.cos(b.geo_eclip_lon),c*Math.sin(b.geo_eclip_lon),b.distance_au*
Math.sin(b.geo_eclip_lat)];b=Yb(Xb(a),b);b=wa(b,a,F.Into2000);return new E(b[0],b[1],b[2],a)}function ib(a){var b=v(a);a=ea(b);var c=a.distance_au*Math.cos(a.geo_eclip_lat),d=[c*Math.cos(a.geo_eclip_lon),c*Math.sin(a.geo_eclip_lon),a.distance_au*Math.sin(a.geo_eclip_lat)];c=da(b);d=Yb(c.mobl,d);d=xa(d,b,F.From2000);b=yb(d,b);c=c.tobl*e.DEG2RAD;b=Ab(b,Math.cos(c),Math.sin(c));return new Ba(b.elat,b.elon,a.distance_au)}function Ra(a){a=v(a);var b=a.AddDays(-1E-5),c=a.AddDays(1E-5);b=Y(b);c=Y(c);return new I((b.x+
c.x)/2,(b.y+c.y)/2,(b.z+c.z)/2,(c.x-b.x)/2E-5,(c.y-b.y)/2E-5,(c.z-b.z)/2E-5,a)}function Bb(a){a=v(a);var b=Ra(a);return new I(b.x/82.30056,b.y/82.30056,b.z/82.30056,b.vx/82.30056,b.vy/82.30056,b.vz/82.30056,a)}function ma(a,b,c){var d=1,f=0;a=$jscomp.makeIterator(a);for(var g=a.next();!g.done;g=a.next()){var h=0;g=$jscomp.makeIterator(g.value);for(var l=g.next();!l.done;l=g.next()){var k=$jscomp.makeIterator(l.value);l=k.next().value;var n=k.next().value;k=k.next().value;h+=l*Math.cos(n+b*k)}h*=d;
c&&(h%=U);f+=h;d*=b}return f}function Cb(a,b){var c=1,d=0,f=0,g=0;a=$jscomp.makeIterator(a);for(var h=a.next();!h.done;h=a.next()){var l=0,k=0;h=$jscomp.makeIterator(h.value);for(var n=h.next();!n.done;n=h.next()){var p=$jscomp.makeIterator(n.value);n=p.next().value;var q=p.next().value;p=p.next().value;q+=b*p;l+=n*p*Math.sin(q);0<g&&(k+=n*Math.cos(q))}f+=g*d*k-c*l;d=c;c*=b;++g}return f}function Db(a){return new B(a[0]+4.4036E-7*a[1]-1.90919E-7*a[2],-4.79966E-7*a[0]+.917482137087*a[1]-.397776982902*
a[2],.397776982902*a[1]+.917482137087*a[2])}function hc(a,b,c){var d=c*Math.cos(b);return[d*Math.cos(a),d*Math.sin(a),c*Math.sin(b)]}function Aa(a,b){var c=b.tt/365250,d=ma(a[0],c,!0),f=ma(a[1],c,!1);a=ma(a[2],c,!1);d=hc(d,f,a);return Db(d).ToAstroVector(b)}function Sa(a,b){var c=b/365250,d=ma(a[0],c,!0),f=ma(a[1],c,!1),g=ma(a[2],c,!1),h=Cb(a[0],c),l=Cb(a[1],c);c=Cb(a[2],c);var k=Math.cos(d),n=Math.sin(d),p=Math.cos(f),q=Math.sin(f);a=+(c*p*k)-g*q*k*l-g*p*n*h;h=+(c*p*n)-g*q*n*l+g*p*k*h;l=+(c*q)+g*
p*l;d=hc(d,f,g);f=[a/365250,h/365250,l/365250];d=Db(d);f=Db(f);return new X(b,d,f)}function jb(a,b,c,d){d/=d+2.959122082855911E-4;b=Aa(M[c],b);a.x+=d*b.x;a.y+=d*b.y;a.z+=d*b.z}function R(a,b,c,d){d/=d+2.959122082855911E-4;b=Sa(M[c],b);a.r.incr(b.r.mul(d));a.v.incr(b.v.mul(d));return b}function Ta(a,b,c){a=c.sub(a);c=a.quadrature();return a.mul(b/(c*Math.sqrt(c)))}function Ca(a,b,c,d){return new B(b.x+a*(c.x+a*d.x/2),b.y+a*(c.y+a*d.y/2),b.z+a*(c.z+a*d.z/2))}function Eb(a,b,c){return new B(b.x+a*c.x,
b.y+a*c.y,b.z+a*c.z)}function Fb(a,b){var c=a-b.tt,d=new Da(a),f=Ca(c,b.r,b.v,b.a),g=d.Acceleration(f).mean(b.a);f=Ca(c,b.r,b.v,g);b=b.v.add(g.mul(c));c=d.Acceleration(f);a=new Ua(a,f,b,c);return new ic(d,a)}function jc(a,b){a=Math.floor(a);return 0>a?0:a>=b?b-1:a}function Gb(a){var b=$jscomp.makeIterator(a);a=b.next().value;var c=$jscomp.makeIterator(b.next().value);var d=c.next().value;var f=c.next().value;c=c.next().value;var g=$jscomp.makeIterator(b.next().value);b=g.next().value;var h=g.next().value;
g=g.next().value;d=new X(a,new B(d,f,c),new B(b,h,g));a=new Da(d.tt);f=d.r.add(a.Sun.r);c=d.v.add(a.Sun.v);b=a.Acceleration(f);d=new Ua(d.tt,f,c,b);return new ic(a,d)}function kc(a,b,c){a=Gb(a);for(var d=Math.ceil((b-a.grav.tt)/c),f=0;f<d;++f)a=Fb(f+1===d?b:a.grav.tt+c,a.grav);return a}function Hb(a,b){var c=a.tt;var d=na[0][0];if(c<d||c>na[50][0])c=null;else{c=jc((c-d)/29200,50);if(!Ib[c]){d=Ib[c]=[];d[0]=Gb(na[c]).grav;d[200]=Gb(na[c+1]).grav;var f,g=d[0].tt;for(f=1;200>f;++f)d[f]=Fb(g+=146,d[f-
1]).grav;g=d[200].tt;var h=[];h[200]=d[200];for(f=199;0<f;--f)h[f]=Fb(g-=146,h[f+1]).grav;for(f=199;0<f;--f)g=f/200,d[f].r=d[f].r.mul(1-g).add(h[f].r.mul(g)),d[f].v=d[f].v.mul(1-g).add(h[f].v.mul(g)),d[f].a=d[f].a.mul(1-g).add(h[f].a.mul(g))}c=Ib[c]}if(d=c){f=jc((a.tt-d[0].tt)/146,200);c=d[f];g=d[f+1];var l=c.a.mean(g.a);f=Ca(a.tt-c.tt,c.r,c.v,l);d=Eb(a.tt-c.tt,c.v,l);h=Ca(a.tt-g.tt,g.r,g.v,l);g=Eb(a.tt-g.tt,g.v,l);l=(a.tt-c.tt)/146;c=f.mul(1-l).add(h.mul(l));d=d.mul(1-l).add(g.mul(l))}else{var k=
a.tt<na[0][0]?kc(na[0],a.tt,-146):kc(na[50],a.tt,146);c=k.grav.r;d=k.grav.v;k=k.bary}b&&(k||(k=new Da(a.tt)),c=c.sub(k.Sun.r),d=d.sub(k.Sun.v));return new I(c.x,c.y,c.z,d.x,d.y,d.z,a)}function kb(a,b){for(var c=a.tt+18262.5,d=[0,b.al[0]+c*b.al[1],0,0,0,0],f=$jscomp.makeIterator(b.a),g=f.next();!g.done;g=f.next()){var h=$jscomp.makeIterator(g.value);g=h.next().value;var l=h.next().value;h=h.next().value;d[0]+=g*Math.cos(l+c*h)}f=$jscomp.makeIterator(b.l);for(g=f.next();!g.done;g=f.next())h=$jscomp.makeIterator(g.value),
g=h.next().value,l=h.next().value,h=h.next().value,d[1]+=g*Math.sin(l+c*h);d[1]%=U;0>d[1]&&(d[1]+=U);f=$jscomp.makeIterator(b.z);for(g=f.next();!g.done;g=f.next())h=$jscomp.makeIterator(g.value),g=h.next().value,l=h.next().value,h=h.next().value,l+=c*h,d[2]+=g*Math.cos(l),d[3]+=g*Math.sin(l);f=$jscomp.makeIterator(b.zeta);for(g=f.next();!g.done;g=f.next())h=$jscomp.makeIterator(g.value),g=h.next().value,l=h.next().value,h=h.next().value,l+=c*h,d[4]+=g*Math.cos(l),d[5]+=g*Math.sin(l);f=d[0];h=d[1];
g=d[2];l=d[3];c=d[4];d=d[5];var k=Math.sqrt(b.mu/(f*f*f));b=h+g*Math.sin(h)-l*Math.cos(h);do{var n=Math.cos(b);var p=Math.sin(b);n=(h-b+g*p-l*n)/(1-g*n-l*p);b+=n}while(1E-12<=Math.abs(n));n=Math.cos(b);p=Math.sin(b);h=l*n-g*p;var q=-g*n-l*p,t=1/(1+q),y=1/(1+Math.sqrt(1-g*g-l*l));b=f*(n-g-y*l*h);h=f*(p-l+y*g*h);l=k*t*f*(-p-y*l*q);f=k*t*f*(+n+y*g*q);g=2*Math.sqrt(1-c*c-d*d);k=1-2*d*d;n=1-2*c*c;p=2*d*c;a=new I(b*k+h*p,b*p+h*n,(c*h-b*d)*g,l*k+f*p,l*p+f*n,(c*f-l*d)*g,a);return Ea(rd,a)}function Z(a,b){b=
v(b);if(a in M)return Aa(M[a],b);if(a===m.Pluto)return a=Hb(b,!0),new E(a.x,a.y,a.z,b);if(a===m.Sun)return new E(0,0,0,b);if(a===m.Moon){a=Aa(M.Earth,b);var c=Y(b);return new E(a.x+c.x,a.y+c.y,a.z+c.z,b)}if(a===m.EMB)return a=Aa(M.Earth,b),c=Y(b),new E(a.x+c.x/82.30056,a.y+c.y/82.30056,a.z+c.z/82.30056,b);if(a===m.SSB)return a=new E(0,0,0,b),jb(a,b,m.Jupiter,2.825345909524226E-7),jb(a,b,m.Saturn,8.459715185680659E-8),jb(a,b,m.Uranus,1.292024916781969E-8),jb(a,b,m.Neptune,1.524358900784276E-8),a;if(c=
ka(a))return a=new Ba(c.dec,15*c.ra,c.dist),lb(a,b);throw'HelioVector: Unknown body "'+a+'"';}function oa(a,b){var c=ka(a);if(c)return c.dist;b=v(b);return a in M?ma(M[a][2],b.tt/365250,!1):Z(a,b).Length()}function lc(a,b){for(var c=b,d=0,f=0;10>f;++f){var g=a(c);d=g.Length()/e.C_AUDAY;if(1<d)throw"Object is too distant for light-travel solver.";var h=b.AddDays(-d);d=Math.abs(h.tt-c.tt);if(1E-9>d)return g;c=h}throw"Light-travel time solver did not converge: dt = "+d;}function mc(a,b,c,d){A(d);a=v(a);
if(ka(c)){c=Z(c,a);if(d)return b=mb(b,a),d=new E(c.x-b.x,c.y-b.y,c.z-b.z,a),c=e.C_AUDAY/d.Length(),new E(d.x+b.vx/c,d.y+b.vy/c,d.z+b.vz/c,a);b=Z(b,a);return new E(c.x-b.x,c.y-b.y,c.z-b.z,a)}var f=d?new E(0,0,0,a):Z(b,a);var g=new nc(b,c,d,f);return lc(function(h){return g.Position(h)},a)}function W(a,b,c){A(c);b=v(b);switch(a){case m.Earth:return new E(0,0,0,b);case m.Moon:return Y(b);default:return a=mc(b,m.Earth,a,c),a.t=b,a}}function pa(a,b){return new I(a.r.x,a.r.y,a.r.z,a.v.x,a.v.y,a.v.z,b)}
function mb(a,b){b=v(b);switch(a){case m.Sun:return new I(0,0,0,0,0,0,b);case m.SSB:return a=new Da(b.tt),new I(-a.Sun.r.x,-a.Sun.r.y,-a.Sun.r.z,-a.Sun.v.x,-a.Sun.v.y,-a.Sun.v.z,b);case m.Mercury:case m.Venus:case m.Earth:case m.Mars:case m.Jupiter:case m.Saturn:case m.Uranus:case m.Neptune:return a=Sa(M[a],b.tt),pa(a,b);case m.Pluto:return Hb(b,!0);case m.Moon:case m.EMB:var c=Sa(M.Earth,b.tt);a=a==m.Moon?Ra(b):Bb(b);return new I(a.x+c.r.x,a.y+c.r.y,a.z+c.r.z,a.vx+c.v.x,a.vy+c.v.y,a.vz+c.v.z,b);
default:if(ka(a))return a=Z(a,b),new I(a.x,a.y,a.z,0,0,0,b);throw'HelioState: Unsupported body "'+a+'"';}}function sd(a,b,c,d,f){var g=(f+c)/2-d;c=(f-c)/2;if(0==g){if(0==c)return null;d=-d/c;if(-1>d||1<d)return null}else{d=c*c-4*g*d;if(0>=d)return null;f=Math.sqrt(d);d=(-c+f)/(2*g);f=(-c-f)/(2*g);if(-1<=d&&1>=d){if(-1<=f&&1>=f)return null}else if(-1<=f&&1>=f)d=f;else return null}return{t:a+d*b,df_dt:(2*g*d+c)/b}}function K(a,b,c,d){var f=w(d&&d.dt_tolerance_seconds||1);f=Math.abs(f/86400);var g=d&&
d.init_f1||a(b),h=d&&d.init_f2||a(c),l=NaN,k=0;d=d&&d.iter_limit||20;for(var n=!0;;){if(++k>d)throw"Excessive iteration in Search()";var p=new O(b.ut+.5*(c.ut-b.ut)),q=p.ut-b.ut;if(Math.abs(q)<f)return p;n?l=a(p):n=!0;var t=sd(p.ut,c.ut-p.ut,g,l,h);if(t){var y=v(t.t),x=a(y);if(0!==t.df_dt){if(Math.abs(x/t.df_dt)<f)return y;t=1.2*Math.abs(x/t.df_dt);if(t<q/10&&(q=y.AddDays(-t),y=y.AddDays(+t),0>(q.ut-b.ut)*(q.ut-c.ut)&&0>(y.ut-b.ut)*(y.ut-c.ut))){t=a(q);var z=a(y);if(0>t&&0<=z){g=t;h=z;b=q;c=y;l=x;
n=!1;continue}}}}if(0>g&&0<=l)c=p,h=l;else if(0>l&&0<=h)b=p,g=l;else return null}}function Fa(a){for(;-180>=a;)a+=360;for(;180<a;)a-=360;return a}function Ga(a){for(;0>a;)a+=360;for(;360<=a;)a-=360;return a}function oc(a,b,c){w(a);w(c);b=v(b);c=b.AddDays(c);return K(function(d){d=fc(d);return Fa(d.elon-a)},b,c,{dt_tolerance_seconds:.01})}function Jb(a,b,c){if(a===m.Earth||b===m.Earth)throw"The Earth does not have a longitude as seen from itself.";c=v(c);a=W(a,c,!1);a=Qa(a);b=W(b,c,!1);b=Qa(b);return Ga(a.elon-
b.elon)}function Ha(a,b){if(a==m.Earth)throw"The Earth does not have an angle as seen from itself.";var c=v(b);b=W(m.Sun,c,!0);a=W(a,c,!0);return N(b,a)}function qa(a,b){if(a===m.Sun)throw"Cannot calculate heliocentric longitude of the Sun.";a=Z(a,b);return Qa(a).elon}function nb(a,b){if(a===m.Earth)throw"The illumination of the Earth is not defined.";var c=v(b),d=Aa(M.Earth,c);if(a===m.Sun){var f=new E(-d.x,-d.y,-d.z,c);b=new E(0,0,0,c);d=0}else a===m.Moon?(f=Y(c),b=new E(d.x+f.x,d.y+f.y,d.z+f.z,
c)):(b=Z(a,b),f=new E(b.x-d.x,b.y-d.y,b.z-d.z,c)),d=N(f,b);var g=f.Length(),h=b.Length();if(a===m.Sun)var l=td+5*Math.log10(g);else if(a===m.Moon)a=d*e.DEG2RAD,l=a*a,a=-12.717+1.49*Math.abs(a)+.0431*l*l,l=a+=5*Math.log10(g/(385000.6/e.KM_PER_AU)*h);else if(a===m.Saturn){var k=d;a=Qa(f);l=28.06*e.DEG2RAD;var n=e.DEG2RAD*a.elat;a=Math.asin(Math.sin(n)*Math.cos(l)-Math.cos(n)*Math.sin(l)*Math.sin(e.DEG2RAD*a.elon-e.DEG2RAD*(169.51+3.82E-5*c.tt)));l=Math.sin(Math.abs(a));k=-9+.044*k+l*(-2.6+1.2*l)+5*
Math.log10(h*g);a*=e.RAD2DEG;l=k;k=a}else{var p=n=l=0;switch(a){case m.Mercury:a=-.6;l=4.98;n=-4.88;p=3.02;break;case m.Venus:163.6>d?(a=-4.47,l=1.03,n=.57,p=.13):(a=.98,l=-1.02);break;case m.Mars:a=-1.52;l=1.6;break;case m.Jupiter:a=-9.4;l=.5;break;case m.Uranus:a=-7.19;l=.25;break;case m.Neptune:a=-6.87;break;case m.Pluto:a=-1;l=4;break;default:throw"VisualMagnitude: unsupported body "+a;}var q=d/100;l=a+q*(l+q*(n+q*p))+5*Math.log10(h*g)}return new pc(c,l,d,h,g,f,b,k)}function Va(a){if(a===m.Earth)throw"The Earth does not have a synodic period as seen from itself.";
if(a===m.Moon)return 29.530588;var b=aa[a];if(!b)throw"Not a valid planet name: "+a;a=aa.Earth.OrbitalPeriod;return Math.abs(a/(a/b.OrbitalPeriod-1))}function Ia(a,b,c){function d(n){var p=qa(a,n);n=qa(m.Earth,n);return Fa(g*(n-p)-b)}w(b);var f=aa[a];if(!f)throw"Cannot search relative longitude because body is not a planet: "+a;if(a===m.Earth)throw"Cannot search relative longitude for the Earth (it is always 0)";var g=f.OrbitalPeriod>aa.Earth.OrbitalPeriod?1:-1;f=Va(a);c=v(c);var h=d(c);0<h&&(h-=
360);for(var l=0;100>l;++l){var k=-h/360*f;c=c.AddDays(k);if(1>86400*Math.abs(k))return c;k=h;h=d(c);30>Math.abs(k)&&k!==h&&(k/=k-h,.5<k&&2>k&&(f*=k))}throw"Relative longitude search failed to converge for "+a+" near "+c.toString()+" (error_angle = "+h+").";}function Kb(a){return Jb(m.Moon,m.Sun,a)}function Wa(a,b,c){function d(l){l=Kb(l);return Fa(l-a)}w(a);w(c);b=v(b);var f=d(b);if(0>c){0>f&&(f+=360);var g=-(29.530588*f)/360;f=g+1.5;if(f<c)return null;var h=Math.max(c,g-1.5)}else{0<f&&(f-=360);
g=-(29.530588*f)/360;h=g-1.5;if(h>c)return null;f=Math.min(c,g+1.5)}c=b.AddDays(h);b=b.AddDays(f);return K(d,c,b,{dt_tolerance_seconds:.1})}function qc(a){var b=Kb(a);b=(Math.floor(b/90)+1)%4;a=Wa(90*b,a,10);if(!a)throw"Cannot find moon quarter";return new rc(b,a)}function sc(a){if(!Number.isFinite(a)||-500>a||1E5<a)throw"Invalid elevation: "+a;if(11E3>=a){var b=288.15-.0065*a;a=101325*Math.pow(288.15/b,-5.25577)}else 2E4>=a?(b=216.65,a=22632*Math.exp(-1.5768832E-4*(a-11E3))):(b=216.65+.001*(a-2E4),
a=5474.87*Math.pow(216.65/b,34.16319));return new tc(a,b,a/b/(101325/288.15))}function Lb(a,b,c,d,f,g,h){if(0>g&&0<=h)return new ud(d,f,g,h);if(0<=g&&0>h)return null;if(17<a)throw"Excessive recursion in rise/set ascent search.";var l=f.ut-d.ut;if(1>86400*l||Math.min(Math.abs(g),Math.abs(h))>l/2*c)return null;l=new O((d.ut+f.ut)/2);var k=b(l);return Lb(1+a,b,c,d,l,g,k)||Lb(1+a,b,c,l,f,k,h)}function vd(a,b){if(-90>b||90<b)throw"Invalid geographic latitude: "+b;switch(a){case m.Moon:a=4.5;var c=8.2;
break;case m.Sun:a=.8;c=.5;break;case m.Mercury:a=-1.6;c=1;break;case m.Venus:a=-.8;c=.6;break;case m.Mars:a=-.5;c=.4;break;case m.Jupiter:case m.Saturn:case m.Uranus:case m.Neptune:case m.Pluto:a=-.2;c=.2;break;case m.Star1:case m.Star2:case m.Star3:case m.Star4:case m.Star5:case m.Star6:case m.Star7:case m.Star8:a=-.008;c=.008;break;default:throw"Body not allowed for altitude search: "+a;}b*=e.DEG2RAD;return Math.abs((360.98564540070413-a)*Math.cos(b))+Math.abs(c*Math.sin(b))}function uc(a,b,c,
d,f,g,h){function l(x){var z=Pa(a,x,b,!0,!0);x=hb(x,b,z.ra,z.dec).altitude+e.RAD2DEG*Math.asin(g/z.dist);return c*(x-h)}za(b);w(f);w(g);w(h);if(-90>h||90<h)throw"Invalid target altitude angle: "+h;for(var k=vd(a,b.latitude),n=d=v(d),p=d,q=l(n),t=q;;){0>f?(n=p.AddDays(-.42),q=l(n)):(p=n.AddDays(.42),t=l(p));var y=Lb(0,l,k,n,p,q,t);if(y){if(k=K(l,y.tx,y.ty,{dt_tolerance_seconds:.1,init_f1:y.ax,init_f2:y.ay})){if(0>f){if(k.ut<d.ut+f)return null}else if(k.ut>d.ut+f)return null;return k}throw"Rise/set search failed after finding ascent: t1="+
n+", t2="+p+", a1="+q+", a2="+t;}if(0>f){if(n.ut<d.ut+f)return null;p=n;t=q}else{if(p.ut>d.ut+f)return null;n=p;q=t}}}function vc(a,b){b=v(b);var c=Jb(a,m.Sun,b);if(180<c){var d="morning";c=360-c}else d="evening";a=Ha(a,b);return new wc(b,d,a,c)}function xc(a){function b(l){var k=l.AddDays(-5E-4);l=l.AddDays(5E-4);k=ea(k).distance_au;return(ea(l).distance_au-k)/.001}function c(l){return-b(l)}a=v(a);for(var d=b(a),f=0;59.061176>5*f;++f){var g=a.AddDays(5),h=b(g);if(0>=d*h){if(0>d||0<h){a=K(b,a,g,{init_f1:d,
init_f2:h});if(!a)throw"SearchLunarApsis INTERNAL ERROR: perigee search failed!";d=ea(a).distance_au;return new Xa(a,0,d)}if(0<d||0>h){a=K(c,a,g,{init_f1:-d,init_f2:-h});if(!a)throw"SearchLunarApsis INTERNAL ERROR: apogee search failed!";d=ea(a).distance_au;return new Xa(a,1,d)}throw"SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";}a=g;d=h}throw"SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";}function yc(a,b,c,d){for(var f=b===Ja.Apocenter?
1:-1;;){d/=9;if(d<1/1440)return c=c.AddDays(d/2),a=oa(a,c),new Xa(c,b,a);for(var g=-1,h=0,l=0;10>l;++l){var k=c.AddDays(l*d);k=f*oa(a,k);if(0==l||k>h)g=l,h=k}c=c.AddDays((g-1)*d);d*=2}}function wd(a,b){var c=b.AddDays(-30/360*aa[a].OrbitalPeriod),d=b.AddDays(.75*aa[a].OrbitalPeriod),f=c,g=c,h=-1,l=-1;d=(d.ut-c.ut)/99;for(var k=0;100>k;++k){var n=c.AddDays(k*d),p=oa(a,n);0===k?l=h=p:(p>l&&(l=p,g=n),p<h&&(h=p,f=n))}c=yc(a,0,f.AddDays(-2*d),4*d);a=yc(a,1,g.AddDays(-2*d),4*d);if(c.time.tt>=b.tt)return a.time.tt>=
b.tt&&a.time.tt<c.time.tt?a:c;if(a.time.tt>=b.tt)return a;throw"Internal error: failed to find Neptune apsis.";}function zc(a,b){function c(p){var q=p.AddDays(-5E-4);p=p.AddDays(5E-4);q=oa(a,q);return(oa(a,p)-q)/.001}function d(p){return-c(p)}b=v(b);if(a===m.Neptune||a===m.Pluto)return wd(a,b);for(var f=aa[a].OrbitalPeriod,g=f/6,h=c(b),l=0;l*g<2*f;++l){var k=b.AddDays(g),n=c(k);if(0>=h*n){f=g=void 0;if(0>h||0<n)g=c,f=Ja.Pericenter;else if(0<h||0>n)g=d,f=Ja.Apocenter;else throw"Internal error with slopes in SearchPlanetApsis";
b=K(g,b,k);if(!b)throw"Failed to find slope transition in planetary apsis search.";h=oa(a,b);return new Xa(b,f,h)}b=k;h=n}throw"Internal error: should have found planetary apsis within 2 orbital periods.";}function Ka(a){return new J([[a.rot[0][0],a.rot[1][0],a.rot[2][0]],[a.rot[0][1],a.rot[1][1],a.rot[2][1]],[a.rot[0][2],a.rot[1][2],a.rot[2][2]]])}function ja(a,b){return new J([[b.rot[0][0]*a.rot[0][0]+b.rot[1][0]*a.rot[0][1]+b.rot[2][0]*a.rot[0][2],b.rot[0][1]*a.rot[0][0]+b.rot[1][1]*a.rot[0][1]+
b.rot[2][1]*a.rot[0][2],b.rot[0][2]*a.rot[0][0]+b.rot[1][2]*a.rot[0][1]+b.rot[2][2]*a.rot[0][2]],[b.rot[0][0]*a.rot[1][0]+b.rot[1][0]*a.rot[1][1]+b.rot[2][0]*a.rot[1][2],b.rot[0][1]*a.rot[1][0]+b.rot[1][1]*a.rot[1][1]+b.rot[2][1]*a.rot[1][2],b.rot[0][2]*a.rot[1][0]+b.rot[1][2]*a.rot[1][1]+b.rot[2][2]*a.rot[1][2]],[b.rot[0][0]*a.rot[2][0]+b.rot[1][0]*a.rot[2][1]+b.rot[2][0]*a.rot[2][2],b.rot[0][1]*a.rot[2][0]+b.rot[1][1]*a.rot[2][1]+b.rot[2][1]*a.rot[2][2],b.rot[0][2]*a.rot[2][0]+b.rot[1][2]*a.rot[2][1]+
b.rot[2][2]*a.rot[2][2]]])}function lb(a,b){b=v(b);var c=a.lat*e.DEG2RAD,d=a.lon*e.DEG2RAD,f=a.dist*Math.cos(c);return new E(f*Math.cos(d),f*Math.sin(d),a.dist*Math.sin(c),b)}function Mb(a){var b=Nb(a);return new gb(b.lon/15,b.lat,b.dist,a)}function Nb(a){var b=a.x*a.x+a.y*a.y,c=Math.sqrt(b+a.z*a.z);if(0===b){if(0===a.z)throw"Zero-length vector not allowed.";var d=0;a=0>a.z?-90:90}else d=e.RAD2DEG*Math.atan2(a.y,a.x),0>d&&(d+=360),a=e.RAD2DEG*Math.atan2(a.z,Math.sqrt(b));return new Ba(a,d,c)}function Ac(a){a=
360-a;360<=a?a-=360:0>a&&(a+=360);return a}function Oa(a,b){w(b);if(-90>b||90<b)return 0;if("normal"===a||"jplhor"===a){var c=b;-1>c&&(c=-1);c=1.02/Math.tan((c+10.3/(c+5.11))*e.DEG2RAD)/60;"normal"===a&&-1>b&&(c*=(b+90)/89)}else{if(a)throw"Invalid refraction option: "+a;c=0}return c}function Bc(a,b){if(-90>b||90<b)return 0;for(var c=b-Oa(a,b);;){var d=c+Oa(a,c)-b;if(1E-14>Math.abs(d))return c-b;c-=d}}function Ya(a,b){return new E(a.rot[0][0]*b.x+a.rot[1][0]*b.y+a.rot[2][0]*b.z,a.rot[0][1]*b.x+a.rot[1][1]*
b.y+a.rot[2][1]*b.z,a.rot[0][2]*b.x+a.rot[1][2]*b.y+a.rot[2][2]*b.z,b.t)}function Ea(a,b){return new I(a.rot[0][0]*b.x+a.rot[1][0]*b.y+a.rot[2][0]*b.z,a.rot[0][1]*b.x+a.rot[1][1]*b.y+a.rot[2][1]*b.z,a.rot[0][2]*b.x+a.rot[1][2]*b.y+a.rot[2][2]*b.z,a.rot[0][0]*b.vx+a.rot[1][0]*b.vy+a.rot[2][0]*b.vz,a.rot[0][1]*b.vx+a.rot[1][1]*b.vy+a.rot[2][1]*b.vz,a.rot[0][2]*b.vx+a.rot[1][2]*b.vy+a.rot[2][2]*b.vz,b.t)}function Cc(){return new J([[1,0,0],[0,.9174821430670688,-.3977769691083922],[0,.3977769691083922,
.9174821430670688]])}function ob(a){a=v(a);var b=Ma(a,F.From2000);a=Na(a,F.From2000);return ja(b,a)}function pb(a){a=v(a);var b=Na(a,F.Into2000);a=Ma(a,F.Into2000);return ja(b,a)}function Ob(a,b){a=v(a);var c=Math.sin(b.latitude*e.DEG2RAD),d=Math.cos(b.latitude*e.DEG2RAD),f=Math.sin(b.longitude*e.DEG2RAD),g=Math.cos(b.longitude*e.DEG2RAD);b=[d*g,d*f,c];c=[-c*g,-c*f,d];f=[f,-g,0];a=-15*ca(a);b=ya(a,b);c=ya(a,c);a=ya(a,f);return new J([[c[0],a[0],b[0]],[c[1],a[1],b[1]],[c[2],a[2],b[2]]])}function Dc(a,
b){a=Ob(a,b);return Ka(a)}function Ec(a,b){a=v(a);b=Dc(a,b);a=pb(a);return ja(b,a)}function Fc(a){a=pb(a);var b=Cc();return ja(a,b)}function Gc(a){a=Fc(a);return Ka(a)}function Hc(a,b){a=v(a);var c=Gc(a);a=Ob(a,b);return ja(c,a)}function Ic(a){var b=da(v(a)).tobl*e.DEG2RAD;a=Math.cos(b);b=Math.sin(b);return new J([[1,0,0],[0,+a,+b],[0,-b,+a]])}function Jc(a){var b=da(v(a)).tobl*e.DEG2RAD;a=Math.cos(b);b=Math.sin(b);return new J([[1,0,0],[0,+a,-b],[0,+b,+a]])}function Za(a,b,c,d){var f=(d.x*c.x+d.y*
c.y+d.z*c.z)/(d.x*d.x+d.y*d.y+d.z*d.z);return new xd(b,f,e.KM_PER_AU*Math.hypot(f*d.x-c.x,f*d.y-c.y,f*d.z-c.z),695700-(1+f)*(695700-a),-695700+(1+f)*(695700+a),c,d)}function qb(a){var b=W(m.Sun,a,!0);b=new E(-b.x,-b.y,-b.z,b.t);var c=Y(a);return Za(6459,a,c,b)}function Kc(a){var b=W(m.Sun,a,!0),c=Y(a),d=new E(-c.x,-c.y,-c.z,c.t);c.x-=b.x;c.y-=b.y;c.z-=b.z;return Za(1737.4,a,d,c)}function Pb(a,b){var c=cc(a,b);b=W(m.Sun,a,!0);var d=Y(a);c=new E(c[0]-d.x,c[1]-d.y,c[2]-d.z,a);d.x-=b.x;d.y-=b.y;d.z-=
b.z;return Za(1737.4,a,c,d)}function rb(a,b,c){a=W(a,c,!0);var d=W(m.Sun,c,!0),f=new E(a.x-d.x,a.y-d.y,a.z-d.z,c);d.x=-a.x;d.y=-a.y;d.z=-a.z;return Za(b,c,d,f)}function Qb(a,b){var c=1/86400,d=b.AddDays(-c);b=b.AddDays(+c);d=a(d);return(a(b).r-d.r)/c}function yd(a){var b=a.AddDays(-.03);a=a.AddDays(.03);b=K(function(c){return Qb(qb,c)},b,a);if(!b)throw"Failed to find peak Earth shadow time.";return qb(b)}function zd(a){var b=a.AddDays(-.03);a=a.AddDays(.03);b=K(function(c){return Qb(Kc,c)},b,a);if(!b)throw"Failed to find peak Moon shadow time.";
return Kc(b)}function Ad(a,b,c){var d=c.AddDays(-1);c=c.AddDays(1);d=K(function(f){var g=1/86400,h=rb(a,b,f.AddDays(-g));return(rb(a,b,f.AddDays(+g)).r-h.r)/g},d,c);if(!d)throw"Failed to find peak planet shadow time.";return rb(a,b,d)}function Bd(a,b){function c(g){return Pb(g,b)}var d=a.AddDays(-.2),f=a.AddDays(.2);d=K(function(g){return Qb(c,g)},d,f);if(!d)throw"PeakLocalMoonShadow: search failure for search_center_time = "+a;return Pb(d,b)}function Rb(a,b,c){var d=c/1440;c=a.AddDays(-d);d=a.AddDays(+d);
c=K(function(f){return-(qb(f).r-b)},c,a);a=K(function(f){return+(qb(f).r-b)},a,d);if(!c||!a)throw"Failed to find shadow semiduration";return 720*(a.ut-c.ut)}function Sb(a){a=ea(a);return e.RAD2DEG*a.geo_eclip_lat}function Lc(a,b,c){if(0>=a)throw"Radius of first disc must be positive.";if(0>=b)throw"Radius of second disc must be positive.";if(0>c)throw"Distance between discs is not allowed to be negative.";if(c>=a+b)return 0;if(0==c)return a<=b?1:b*b/(a*a);var d=(a*a-b*b+c*c)/(2*c),f=a*a-d*d;if(0>=
f)return a<=b?1:b*b/(a*a);f=Math.sqrt(f);return(a*a*Math.acos(d/a)-d*f+(b*b*Math.acos((c-d)/b)-(c-d)*f))/(Math.PI*a*a)}function Mc(a,b){var c=new E(a.x+b.x,a.y+b.y,a.z+b.z,a.t);a=Math.asin(Nc/c.Length());var d=Math.asin(Cd/b.Length());b=N(b,c);b=Lc(a,d,b*e.DEG2RAD);return Math.min(.9999,b)}function Oc(a){a=v(a);for(var b=0;12>b;++b){var c=Wa(180,a,40);if(!c)throw"Cannot find full moon.";a=Sb(c);if(1.8>Math.abs(a)&&(a=yd(c),a.r<a.p+1737.4)){b=S.Penumbral;var d=c=0,f=0,g=Rb(a.time,a.p+1737.4,200);a.r<
a.k+1737.4&&(b=S.Partial,f=Rb(a.time,a.k+1737.4,g),a.r+1737.4<a.k?(b=S.Total,c=1,d=Rb(a.time,a.k-1737.4,f)):c=Lc(1737.4,a.k,a.r));return new Pc(b,c,a.time,g,f,d)}a=c.AddDays(10)}throw"Failed to find lunar eclipse within 12 full moons.";}function Qc(a){a=v(a);var b;for(b=0;12>b;++b){var c=Wa(0,a,40);if(!c)throw"Cannot find new moon";a=Sb(c);if(1.8>Math.abs(a)&&(a=zd(c),a.r<a.p+6371)){var d=void 0,f=void 0,g=S.Partial;b=a.time;c=a.r;var h=ob(a.time),l=Ya(h,a.dir),k=Ya(h,a.target);l.x*=e.KM_PER_AU;l.y*=
e.KM_PER_AU;l.z*=e.KM_PER_AU/.996647180302104;k.x*=e.KM_PER_AU;k.y*=e.KM_PER_AU;k.z*=e.KM_PER_AU/.996647180302104;var n=l.x*l.x+l.y*l.y+l.z*l.z,p=-2*(l.x*k.x+l.y*k.y+l.z*k.z),q=p*p-4*n*(k.x*k.x+k.y*k.y+k.z*k.z-4.068062648825956E7);if(0<q){f=(-p-Math.sqrt(q))/(2*n);g=f*l.x-k.x;n=f*l.y-k.y;l=.996647180302104*(f*l.z-k.z);f=.9933056020041345*Math.hypot(g,n);f=0==f?0<l?90:-90:e.RAD2DEG*Math.atan(l/f);d=ca(b);d=(e.RAD2DEG*Math.atan2(n,g)-15*d)%360;-180>=d?d+=360:180<d&&(d-=360);h=Ka(h);l=new E(g/e.KM_PER_AU,
n/e.KM_PER_AU,l/e.KM_PER_AU,a.time);l=Ya(h,l);l.x+=a.target.x;l.y+=a.target.y;l.z+=a.target.z;h=Za(1736,a.time,l,a.dir);if(1E-9<h.r||0>h.r)throw"Unexpected shadow distance from geoid intersection = "+h.r;g=.014<h.k?S.Total:S.Annular;a=g===S.Total?1:Mc(a.dir,l)}else a=void 0;return new Rc(g,a,b,c,f,d)}a=c.AddDays(10)}throw"Failed to find solar eclipse within 12 full moons.";}function Sc(a){return a.p-a.r}function Tc(a){return Math.abs(a.k)-a.r}function sb(a,b,c,d,f){d=K(function(g){g=Pb(g,a);return b*
c(g)},d,f);if(!d)throw"Local eclipse transition search failed.";return Uc(a,d)}function Uc(a,b){var c=Pa(m.Sun,b,a,!0,!0);a=hb(b,a,c.ra,c.dec,"normal").altitude;return new Vc(b,a)}function Wc(a,b){a=v(a);for(za(b);;){a=Wa(0,a,40);if(!a)throw"Cannot find next new moon";var c=Sb(a);if(1.8>Math.abs(c)){var d=Bd(a,b);if(d.r<d.p){var f=c=void 0;var g=b;var h=Uc(g,d.time),l=d.time.AddDays(-.2),k=d.time.AddDays(.2),n=sb(g,1,Sc,l,d.time),p=sb(g,-1,Sc,d.time,k);d.r<Math.abs(d.k)?(l=d.time.AddDays(-.01),k=
d.time.AddDays(.01),f=sb(g,1,Tc,l,d.time),c=sb(g,-1,Tc,d.time,k),g=.014<d.k?S.Total:S.Annular):g=S.Partial;d=g===S.Total?1:Mc(d.dir,d.target);c=new Xc(g,d,n,f,h,c,p);if(0<c.partial_begin.altitude||0<c.partial_end.altitude)return c}}a=a.AddDays(10)}}function Yc(a,b,c,d,f){c=K(function(g){g=rb(a,b,g);return f*(g.r-g.p)},c,d);if(!c)throw"Planet transit boundary search failed";return c}function Zc(a,b){b=v(b);switch(a){case m.Mercury:var c=2439.7;break;case m.Venus:c=6051.8;break;default:throw"Invalid body: "+
a;}for(;;){var d=Ia(a,0,b);if(.4>Ha(a,d)&&(b=Ad(a,c,d),b.r<b.p)){d=b.time.AddDays(-1);d=Yc(a,c,d,b.time,-1);var f=b.time.AddDays(1);c=Yc(a,c,b.time,f,1);a=60*Ha(a,b.time);return new $c(d,b.time,c,a)}b=d.AddDays(10)}}function ad(a){var b=v(a),c=ib(b);for(a={};;a={$jscomp$loop$prop$kind$33:a.$jscomp$loop$prop$kind$33}){var d=b.AddDays(10),f=ib(d);if(0>=c.lat*f.lat){a.$jscomp$loop$prop$kind$33=f.lat>c.lat?ra.Ascending:ra.Descending;b=K(function(g){return function(h){return g.$jscomp$loop$prop$kind$33*
ib(h).lat}}(a),b,d);if(!b)throw"Could not find moon node.";return new bd(a.$jscomp$loop$prop$kind$33,b)}b=d;c=f}}function cd(a,b,c,d,f){if(1>a||5<a)throw"Invalid lagrange point "+a;if(!Number.isFinite(c)||0>=c)throw"Major mass must be a positive number.";if(!Number.isFinite(f)||0>=f)throw"Minor mass must be a negative number.";var g=d.x-b.x,h=d.y-b.y,l=d.z-b.z,k=g*g+h*h+l*l,n=Math.sqrt(k),p=d.vx-b.vx,q=d.vy-b.vy;d=d.vz-b.vz;if(4===a||5===a){k=h*d-l*q;c=l*p-g*d;var t=g*q-h*p,y=c*l-t*h;t=t*g-k*l;k=
k*h-c*g;c=Math.sqrt(y*y+t*t+k*k);y/=c;t/=c;k/=c;g/=n;h/=n;l/=n;a=4==a?.8660254037844386:-.8660254037844386;c=.5*g+a*y;f=.5*h+a*t;var x=.5*l+a*k,z=p*g+q*h+d*l;p=p*y+q*t+d*k;b=new I(n*c,n*f,n*x,z*c+p*(.5*y-a*g),z*f+p*(.5*t-a*h),z*x+p*(.5*k-a*l),b.t)}else{y=f/(c+f)*-n;t=c/(c+f)*+n;k=(c+f)/(k*n);if(1===a||2===a)x=c/(c+f)*Math.cbrt(f/(3*c)),c=-c,1==a?(x=1-x,a=+f):(x=1+x,a=-f);else if(3===a)x=(7/12*f-c)/(f+c),c=+c,a=+f;else throw"Invalid Langrage point "+a+". Must be an integer 1..5.";f=n*x-y;do x=f-y,
z=f-t,x=(k*f+c/(x*x)+a/(z*z))/(k-2*c/(x*x*x)-2*a/(z*z*z)),f-=x;while(1E-14<Math.abs(x/n));x=(f-y)/n;b=new I(x*g,x*h,x*l,x*p,x*q,x*d,b.t)}return b}Object.defineProperty(e,"__esModule",{value:!0});e.GeoEmbState=e.GeoMoonState=e.EclipticGeoMoon=e.GeoMoon=e.Ecliptic=e.ObserverGravity=e.VectorObserver=e.ObserverState=e.ObserverVector=e.Equator=e.SunPosition=e.Observer=e.Horizon=e.EclipticCoordinates=e.HorizontalCoordinates=e.MakeRotation=e.RotationMatrix=e.EquatorialCoordinates=e.Spherical=e.StateVector=
e.Vector=e.SiderealTime=e.Libration=e.LibrationInfo=e.CalcMoonCount=e.e_tilt=e.MakeTime=e.AstroTime=e.SetDeltaTFunction=e.DeltaT_JplHorizons=e.DeltaT_EspenakMeeus=e.PlanetOrbitalPeriod=e.DefineStar=e.Body=e.AngleBetween=e.MassProduct=e.CALLISTO_RADIUS_KM=e.GANYMEDE_RADIUS_KM=e.EUROPA_RADIUS_KM=e.IO_RADIUS_KM=e.JUPITER_MEAN_RADIUS_KM=e.JUPITER_POLAR_RADIUS_KM=e.JUPITER_EQUATORIAL_RADIUS_KM=e.RAD2HOUR=e.RAD2DEG=e.HOUR2RAD=e.DEG2RAD=e.AU_PER_LY=e.KM_PER_AU=e.C_AUDAY=void 0;e.VectorFromHorizon=e.HorizonFromVector=
e.SphereFromVector=e.EquatorFromVector=e.VectorFromSphere=e.Pivot=e.IdentityMatrix=e.CombineRotation=e.InverseRotation=e.NextPlanetApsis=e.SearchPlanetApsis=e.NextLunarApsis=e.SearchLunarApsis=e.Apsis=e.ApsisKind=e.SearchPeakMagnitude=e.SearchMaxElongation=e.Elongation=e.ElongationEvent=e.Seasons=e.SeasonInfo=e.HourAngle=e.SearchHourAngle=e.HourAngleEvent=e.SearchAltitude=e.SearchRiseSet=e.Atmosphere=e.AtmosphereInfo=e.NextMoonQuarter=e.SearchMoonQuarter=e.MoonQuarter=e.SearchMoonPhase=e.MoonPhase=
e.SearchRelativeLongitude=e.Illumination=e.IlluminationInfo=e.EclipticLongitude=e.AngleFromSun=e.PairLongitude=e.SearchSunLongitude=e.Search=e.HelioState=e.BaryState=e.GeoVector=e.BackdatePosition=e.CorrectLightTravel=e.HelioDistance=e.HelioVector=e.JupiterMoons=e.JupiterMoonsInfo=void 0;e.GravitySimulator=e.LagrangePointFast=e.LagrangePoint=e.RotationAxis=e.AxisInfo=e.NextMoonNode=e.SearchMoonNode=e.NodeEventInfo=e.NodeEventKind=e.NextTransit=e.SearchTransit=e.TransitInfo=e.NextLocalSolarEclipse=
e.SearchLocalSolarEclipse=e.LocalSolarEclipseInfo=e.EclipseEvent=e.NextGlobalSolarEclipse=e.SearchGlobalSolarEclipse=e.NextLunarEclipse=e.GlobalSolarEclipseInfo=e.SearchLunarEclipse=e.LunarEclipseInfo=e.EclipseKind=e.Constellation=e.ConstellationInfo=e.Rotation_EQD_ECT=e.Rotation_ECT_EQD=e.Rotation_GAL_EQJ=e.Rotation_EQJ_GAL=e.Rotation_HOR_ECL=e.Rotation_ECL_HOR=e.Rotation_ECL_EQD=e.Rotation_EQD_ECL=e.Rotation_EQJ_HOR=e.Rotation_HOR_EQJ=e.Rotation_HOR_EQD=e.Rotation_EQD_HOR=e.Rotation_EQD_EQJ=e.Rotation_ECT_EQJ=
e.Rotation_EQJ_ECT=e.Rotation_EQJ_EQD=e.Rotation_ECL_EQJ=e.Rotation_EQJ_ECL=e.RotateState=e.RotateVector=e.InverseRefraction=e.Refraction=void 0;e.C_AUDAY=173.1446326846693;e.KM_PER_AU=1.4959787069098932E8;e.AU_PER_LY=63241.07708807546;e.DEG2RAD=.017453292519943295;e.HOUR2RAD=.26179938779914946;e.RAD2DEG=57.29577951308232;e.RAD2HOUR=3.819718634205488;e.JUPITER_EQUATORIAL_RADIUS_KM=71492;e.JUPITER_POLAR_RADIUS_KM=66854;e.JUPITER_MEAN_RADIUS_KM=69911;e.IO_RADIUS_KM=1821.6;e.EUROPA_RADIUS_KM=1560.8;
e.GANYMEDE_RADIUS_KM=2631.2;e.CALLISTO_RADIUS_KM=2410.3;var dd=new Date("2000-01-01T12:00:00Z"),U=2*Math.PI,ia=180/Math.PI*3600,td=-.17-5*Math.log10(648E3/Math.PI),Nc=695700/e.KM_PER_AU,pd=6378.1366/e.KM_PER_AU,Dd=1738.1/e.KM_PER_AU,Cd=1736/e.KM_PER_AU,Ed=34/60;e.MassProduct=C;e.AngleBetween=N;var m;(function(a){a.Sun="Sun";a.Moon="Moon";a.Mercury="Mercury";a.Venus="Venus";a.Earth="Earth";a.Mars="Mars";a.Jupiter="Jupiter";a.Saturn="Saturn";a.Uranus="Uranus";a.Neptune="Neptune";a.Pluto="Pluto";a.SSB=
"SSB";a.EMB="EMB";a.Star1="Star1";a.Star2="Star2";a.Star3="Star3";a.Star4="Star4";a.Star5="Star5";a.Star6="Star6";a.Star7="Star7";a.Star8="Star8"})(m=e.Body||(e.Body={}));var ld=[m.Star1,m.Star2,m.Star3,m.Star4,m.Star5,m.Star6,m.Star7,m.Star8],md=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];e.DefineStar=function(a,b,c,d){var f=T(a);if(!f)throw"Invalid star body: "+a;w(b);w(c);w(d);
if(0>b||24<=b)throw"Invalid right ascension for star: "+b;if(-90>c||90<c)throw"Invalid declination for star: "+c;if(1>d)throw"Invalid star distance: "+d;f.ra=b;f.dec=c;f.dist=d*e.AU_PER_LY};var F;(function(a){a[a.From2000=0]="From2000";a[a.Into2000=1]="Into2000"})(F||(F={}));var aa={Mercury:{OrbitalPeriod:87.969},Venus:{OrbitalPeriod:224.701},Earth:{OrbitalPeriod:365.256},Mars:{OrbitalPeriod:686.98},Jupiter:{OrbitalPeriod:4332.589},Saturn:{OrbitalPeriod:10759.22},Uranus:{OrbitalPeriod:30685.4},Neptune:{OrbitalPeriod:60189},
Pluto:{OrbitalPeriod:90560}};e.PlanetOrbitalPeriod=function(a){if(a in aa)return aa[a].OrbitalPeriod;throw"Unknown orbital period for: "+a;};var M={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[3.4561897E-4,.77930768443,130439.51570787099],[7.583476E-5,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,
26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[7.5775081E-4,6.08568821653,78263.70942472259],[1.9676525E-4,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[3.1866927E-4,1.58088495658,130439.51570787099],[7.963301E-5,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,
26087.9031415742],[9.9737713E-4,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[2.1921969E-4,2.77820093972,104351.61256629678],[4.354065E-5,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[4.4141826E-4,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[8.9891645E-4,5.30650047764,
20426.571092422],[5.477194E-5,4.41630661466,7860.4193924392],[3.455741E-5,2.6996444782,11790.6290886588],[2.372061E-5,2.99377542079,3930.2096962196],[1.317168E-5,5.18668228402,26.2983197998],[1.664146E-5,4.25018630147,1577.3435424478],[1.438387E-5,4.15745084182,9683.5945811164],[1.200521E-5,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[9.5617813E-4,2.4640651111,10213.285546211],[7.787201E-5,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[4.0107978E-4,1.14737178112,
20426.571092422],[3.2814918E-4,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1.658058E-5,4.90206728031,20426.571092422],[1.378043E-5,1.12846591367,11790.6290886588],[1.632096E-5,2.84548795207,7860.4193924392],[4.98395E-6,2.58682193892,9683.5945811164],[2.21985E-6,2.01346696541,19367.1891622328],[2.37454E-6,2.55136053886,15720.8387848784]],[[3.4551041E-4,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,
0],[.03341656453,4.66925680415,6283.0758499914],[3.4894275E-4,4.62610242189,12566.1516999828],[3.417572E-5,2.82886579754,3.523118349],[3.497056E-5,2.74411783405,5753.3848848968],[3.135899E-5,3.62767041756,77713.7714681205],[2.676218E-5,4.41808345438,7860.4193924392],[2.342691E-5,6.13516214446,3930.2096962196],[1.273165E-5,2.03709657878,529.6909650946],[1.324294E-5,.74246341673,11506.7697697936],[9.01854E-6,2.04505446477,26.2983197998],[1.199167E-5,1.10962946234,1577.3435424478],[8.57223E-6,3.50849152283,
398.1490034082],[7.79786E-6,1.17882681962,5223.6939198022],[9.9025E-6,5.23268072088,5884.9268465832],[7.53141E-6,2.53339052847,5507.5532386674],[5.05267E-6,4.58292599973,18849.2275499742],[4.92392E-6,4.20505711826,775.522611324],[3.56672E-6,2.91954114478,.0673103028],[2.84125E-6,1.89869240932,796.2980068164],[2.42879E-6,.34481445893,5486.777843175],[3.17087E-6,5.84901948512,11790.6290886588],[2.71112E-6,.31486255375,10977.078804699],[2.06217E-6,4.80646631478,2544.3144198834],[2.05478E-6,1.86953770281,
5573.1428014331],[2.02318E-6,2.45767790232,6069.7767545534],[1.26225E-6,1.08295459501,20.7753954924],[1.55516E-6,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4.303419E-5,2.63512233481,12566.1516999828]],[[8.721859E-5,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3.805678E-5,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[1.3956024E-4,3.05524609456,12566.1516999828],
[3.08372E-5,5.19846674381,77713.7714681205],[1.628463E-5,1.17387558054,5753.3848848968],[1.575572E-5,2.84685214877,7860.4193924392],[9.24799E-6,5.45292236722,11506.7697697936],[5.42439E-6,4.56409151453,3930.2096962196],[4.7211E-6,3.66100022149,5884.9268465832],[8.5831E-7,1.27079125277,161000.6857376741],[5.7056E-7,2.01374292245,83996.84731811189],[5.5736E-7,5.2415979917,71430.69561812909],[1.74844E-6,3.01193636733,18849.2275499742],[2.43181E-6,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,
6283.0758499914],[1.721238E-5,1.06442300386,12566.1516999828]],[[4.359385E-5,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[9.1798406E-4,5.75478744667,10021.8372800994],[2.7744987E-4,5.97049513147,3.523118349],[1.0610235E-4,2.93958560338,2281.2304965106],[1.2315897E-4,.84956094002,2810.9214616052],[8.926784E-5,4.15697846427,.0172536522],[8.715691E-5,6.11005153139,13362.4497067992],[6.797556E-5,
.36462229657,398.1490034082],[7.774872E-5,3.33968761376,5621.8429232104],[3.575078E-5,1.6618650571,2544.3144198834],[4.161108E-5,.22814971327,2942.4634232916],[3.075252E-5,.85696614132,191.4482661116],[2.628117E-5,.64806124465,3337.0893083508],[2.937546E-5,6.07893711402,.0673103028],[2.389414E-5,5.03896442664,796.2980068164],[2.579844E-5,.02996736156,3344.1355450488],[1.528141E-5,1.14979301996,6151.533888305],[1.798806E-5,.65634057445,529.6909650946],[1.264357E-5,3.62275122593,5092.1519581158],[1.286228E-5,
3.06796065034,2146.1654164752],[1.546404E-5,2.91579701718,1751.539531416],[1.024902E-5,3.69334099279,8962.4553499102],[8.91566E-6,.18293837498,16703.062133499],[8.58759E-6,2.4009381194,2914.0142358238],[8.32715E-6,2.46418619474,3340.5951730476],[8.3272E-6,4.49495782139,3340.629680352],[7.12902E-6,3.66335473479,1059.3819301892],[7.48723E-6,3.82248614017,155.4203994342],[7.23861E-6,.67497311481,3738.761430108],[6.35548E-6,2.92182225127,8432.7643848156],[6.55162E-6,.48864064125,3127.3133312618],[5.50474E-6,
3.81001042328,.9803210682],[5.5275E-6,4.47479317037,1748.016413067],[4.25966E-6,.55364317304,6283.0758499914],[4.15131E-6,.49662285038,213.299095438],[4.72167E-6,3.62547124025,1194.4470102246],[3.06551E-6,.38052848348,6684.7479717486],[3.12141E-6,.99853944405,6677.7017350506],[2.93198E-6,4.22131299634,20.7753954924],[3.02375E-6,4.48618007156,3532.0606928114],[2.74027E-6,.54222167059,3340.545116397],[2.81079E-6,5.88163521788,1349.8674096588],[2.31183E-6,1.28242156993,3870.3033917944],[2.83602E-6,5.7688543494,
3149.1641605882],[2.36117E-6,5.75503217933,3333.498879699],[2.74033E-6,.13372524985,3340.6797370026],[2.99395E-6,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[2.0622975E-4,4.26108844583,10021.8372800994],[3.452392E-5,4.7321039319,3.523118349],[2.586332E-5,4.60670058555,13362.4497067992],[8.41535E-6,4.45864030426,2281.2304965106]],[[5.8152577E-4,2.04961712429,3340.6124266998],[1.3459579E-4,2.45738706163,
6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[3.1365539E-4,4.4465105309,10021.8372800994],[3.4841E-5,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[2.0976948E-4,3.14159265359,0],[1.2834709E-4,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[4.6179117E-4,4.15595316782,10021.8372800994],[8.109733E-5,
5.55958416318,2810.9214616052],[7.485318E-5,1.77239078402,5621.8429232104],[5.523191E-5,1.3643630377,2281.2304965106],[3.82516E-5,4.49407183687,13362.4497067992],[2.306537E-5,.09081579001,2544.3144198834],[1.999396E-5,5.36059617709,3337.0893083508],[2.484394E-5,4.9254563992,2942.4634232916],[1.960195E-5,4.74249437639,3344.1355450488],[1.167119E-5,2.11260868341,5092.1519581158],[1.102816E-5,5.00908403998,398.1490034082],[8.99066E-6,4.40791133207,529.6909650946],[9.92252E-6,5.83861961952,6151.533888305],
[8.07354E-6,2.10217065501,1059.3819301892],[7.97915E-6,3.44839203899,796.2980068164],[7.40975E-6,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[1.28772E-4,0,0],[1.081588E-4,2.70888095665,10021.8372800994]],[[4.4242249E-4,.47930604954,3340.6124266998],[8.138042E-5,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,
5.41734730184,1059.3819301892],[9.7178296E-4,4.14264726552,632.7837393132],[7.2903078E-4,3.64042916389,522.5774180938],[6.4263975E-4,3.41145165351,103.0927742186],[3.9806064E-4,2.29376740788,419.4846438752],[3.8857767E-4,1.27231755835,316.3918696566],[2.7964629E-4,1.7845459182,536.8045120954],[1.358973E-4,5.7748104079,1589.0728952838],[8.246349E-5,3.5822792584,206.1855484372],[8.768704E-5,3.63000308199,949.1756089698],[7.368042E-5,5.0810119427,735.8765135318],[6.26315E-5,.02497628807,213.299095438],
[6.114062E-5,4.51319998626,1162.4747044078],[4.905396E-5,1.32084470588,110.2063212194],[5.305285E-5,1.30671216791,14.2270940016],[5.305441E-5,4.18625634012,1052.2683831884],[4.647248E-5,4.69958103684,3.9321532631],[3.045023E-5,4.31676431084,426.598190876],[2.609999E-5,1.56667394063,846.0828347512],[2.028191E-5,1.06376530715,3.1813937377],[1.764763E-5,2.14148655117,1066.49547719],[1.722972E-5,3.88036268267,1265.5674786264],[1.920945E-5,.97168196472,639.897286314],[1.633223E-5,3.58201833555,515.463871093],
[1.431999E-5,4.29685556046,625.6701923124],[9.73272E-6,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[3.0099479E-4,4.54540782858,1059.3819301892],[2.072092E-4,5.45943156902,522.5774180938],[1.2103653E-4,.16994816098,536.8045120954],[6.067987E-5,4.42422292017,103.0927742186],[5.433968E-5,3.98480737746,419.4846438752],[4.237744E-5,5.89008707199,14.2270940016]],[[4.7233601E-4,4.32148536482,7.1135470008],[3.0649436E-4,
2.929777887,529.6909650946],[1.4837605E-4,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8.101428E-5,3.60509572885,522.5774180938],[6.043996E-5,4.25883108339,1589.0728952838],[6.437782E-5,.30627119215,536.8045120954]],[[7.8203446E-4,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],
[.00187647346,2.07590383214,522.5774180938],[8.6792905E-4,.71001145545,419.4846438752],[7.2062974E-4,.21465724607,536.8045120954],[6.5517248E-4,5.9799588479,316.3918696566],[2.9134542E-4,1.67759379655,103.0927742186],[3.0135335E-4,2.16132003734,949.1756089698],[2.3453271E-4,3.54023522184,735.8765135318],[2.2283743E-4,4.19362594399,1589.0728952838],[2.3947298E-4,.2745803748,7.1135470008],[1.3032614E-4,2.96042965363,1162.4747044078],[9.70336E-5,1.90669633585,206.1855484372],[1.2749023E-4,2.71550286592,
1052.2683831884],[7.057931E-5,2.18184839926,1265.5674786264],[6.137703E-5,6.26418240033,846.0828347512],[2.616976E-5,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[6.1661816E-4,3.00076460387,1059.3819301892],[5.3443713E-4,3.89717383175,522.5774180938],[3.1185171E-4,4.88276958012,536.8045120954],[4.1390269E-4,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],
[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[7.92713E-4,3.84007056878,220.4126424388],[2.3990355E-4,4.66976924553,110.2063212194],[1.6573588E-4,.43719228296,419.4846438752],[1.4906995E-4,5.76903183869,316.3918696566],[1.582029E-4,.93809155235,632.7837393132],[1.4609559E-4,1.56518472,3.9321532631],[1.3160301E-4,4.44891291899,14.2270940016],[1.5053543E-4,2.71669915667,639.897286314],[1.3005299E-4,5.98119023644,11.0457002639],[1.0725067E-4,3.12939523827,202.2533951741],
[5.863206E-5,.23656938524,529.6909650946],[5.227757E-5,4.20783365759,3.1813937377],[6.126317E-5,1.76328667907,277.0349937414],[5.019687E-5,3.17787728405,433.7117378768],[4.59255E-5,.61977744975,199.0720014364],[4.005867E-5,2.24479718502,63.7358983034],[2.953796E-5,.98280366998,95.9792272178],[3.87367E-5,3.22283226966,138.5174968707],[2.461186E-5,2.03163875071,735.8765135318],[3.269484E-5,.77492638211,949.1756089698],[1.758145E-5,3.2658010994,522.5774180938],[1.640172E-5,5.5050445305,846.0828347512],
[1.391327E-5,4.02333150505,323.5054166574],[1.580648E-5,4.37265307169,309.2783226558],[1.123498E-5,2.83726798446,415.5524906121],[1.017275E-5,3.71700135395,227.5261894396],[8.48642E-6,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[9.3734369E-4,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[4.0244455E-4,2.04108104671,220.4126424388],[1.9941774E-4,1.2795439047,103.0927742186],[1.0511678E-4,
2.7488034213,14.2270940016],[6.416106E-5,.38238295041,639.897286314],[4.848994E-5,2.43037610229,419.4846438752],[4.056892E-5,2.92133209468,110.2063212194],[3.768635E-5,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[9.1841837E-4,.0732519584,213.299095438],[3.6661728E-4,0,0],[1.5274496E-4,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[8.4745939E-4,0,0],[3.0863357E-4,3.48441504555,220.4126424388],[3.4116062E-4,
.57297307557,206.1855484372],[1.473407E-4,2.11846596715,639.897286314],[9.916667E-5,5.79003188904,419.4846438752],[6.993564E-5,4.7360468972,7.1135470008],[4.807588E-5,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[3.6947916E-4,3.14159265359,0],[1.7966989E-4,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],
[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[6.9006962E-4,5.94099540992,419.4846438752],[6.1053367E-4,.94037691801,639.897286314],[4.8913294E-4,1.55733638681,202.2533951741],[3.4143772E-4,.19519102597,277.0349937414],[3.2401773E-4,5.47084567016,949.1756089698],[2.0936596E-4,.46349251129,735.8765135318],[9.796004E-5,5.20477537945,
1265.5674786264],[1.1993338E-4,5.98050967385,846.0828347512],[2.08393E-4,1.52102476129,433.7117378768],[1.5298404E-4,3.0594381494,529.6909650946],[6.465823E-5,.17732249942,1052.2683831884],[1.1380257E-4,1.7310542704,522.5774180938],[3.419618E-5,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,
7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[7.0328461E-4,5.39254450063,63.7358983034],[6.8892678E-4,6.09292483287,76.2660712756],[6.1998615E-4,2.26952066061,2.9689454166],[6.1950719E-4,2.85098872691,11.0457002639],[2.646877E-4,3.14152083966,71.8126531507],[2.5710476E-4,6.11379840493,
454.9093665273],[2.107885E-4,4.36059339067,148.0787244263],[1.7818647E-4,1.74436930289,36.6485629295],[1.4613507E-4,4.73732166022,3.9321532631],[1.1162509E-4,5.8268179635,224.3447957019],[1.099791E-4,.48865004018,138.5174968707],[9.527478E-5,2.95516862826,35.1640902212],[7.545601E-5,5.236265824,109.9456887885],[4.220241E-5,3.23328220918,70.8494453042],[4.0519E-5,2.277550173,151.0476698429],[3.354596E-5,1.0654900738,4.4534181249],[2.926718E-5,4.62903718891,9.5612275556],[3.49034E-5,5.48306144511,146.594251718],
[3.144069E-5,4.75199570434,77.7505439839],[2.922333E-5,5.35235361027,85.8272988312],[2.272788E-5,4.36600400036,70.3281804424],[2.051219E-5,1.51773566586,.1118745846],[2.148602E-5,.60745949945,38.1330356378],[1.991643E-5,4.92437588682,277.0349937414],[1.376226E-5,2.04283539351,65.2203710117],[1.666902E-5,3.62744066769,380.12776796],[1.284107E-5,3.11347961505,202.2533951741],[1.150429E-5,.93343589092,3.1813937377],[1.533221E-5,2.58594681212,52.6901980395],[1.281604E-5,.54271272721,222.8603229936],[1.372139E-5,
4.19641530878,111.4301614968],[1.221029E-5,.1990065003,108.4612160802],[9.46181E-6,1.19253165736,127.4717966068],[1.150989E-5,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[2.4456474E-4,1.71260334156,1.4844727083],[9.258442E-5,.4282973235,11.0457002639],[8.265977E-5,1.50218091379,63.7358983034],[9.15016E-5,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[6.23414E-4,5.08111189648,149.5631971346],[6.1601196E-4,3.14159265359,
0],[9.963722E-5,1.61603805646,76.2660712756],[9.92616E-5,.57630380333,73.297125859]],[[3.4101978E-4,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,
1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[9.3192405E-4,.17437220467,36.6485629295],[7.1424548E-4,4.24509236074,224.3447957019],[8.9806014E-4,3.66105364565,109.9456887885],[3.9009723E-4,1.66971401684,70.8494453042],[4.6677296E-4,1.39976401694,35.1640902212],[3.9025624E-4,3.36234773834,277.0349937414],[3.6755274E-4,3.88649278513,146.594251718],[3.0348723E-4,.70100838798,151.0476698429],[2.9156413E-4,3.180563367,77.7505439839],
[2.2637073E-4,.72518687029,529.6909650946],[1.1959076E-4,1.7504339214,984.6003316219],[2.5620756E-4,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[4.2064466E-4,5.41054993053,2.9689454166],[3.7714584E-4,6.09221808686,35.1640902212],[3.3784738E-4,1.24488874087,76.2660712756],[1.6482741E-4,7.727998E-5,491.5579294568],
[9.198584E-5,4.93747051954,39.6175083461],[8.99425E-5,.27462171806,175.1660598002]],[[38.13303563957,0,0],[1.6604172E-4,4.86323329249,1.4844727083],[1.5744045E-4,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[2.7780087E-4,5.91271884599,76.2660712756],[2.7623609E-4,0,0],[1.5355489E-4,2.52123799551,36.6485629295],[1.5448133E-4,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,
5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[1.201232E-4,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7.571796E-5,1.07149207335,388.4651552382]]]]};e.DeltaT_EspenakMeeus=sa;e.DeltaT_JplHorizons=function(a){return sa(Math.min(a,17*365.24217))};var Wb=sa;e.SetDeltaTFunction=function(a){Wb=
a};var O=function(a){if(a instanceof O)this.date=a.date,this.ut=a.ut,this.tt=a.tt;else if(a instanceof Date&&Number.isFinite(a.getTime()))this.date=a,this.ut=(a.getTime()-dd.getTime())/864E5,this.tt=Vb(this.ut);else if(Number.isFinite(a))this.date=new Date(dd.getTime()+864E5*a),this.ut=a,this.tt=Vb(this.ut);else throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";};O.FromTerrestrialTime=function(a){for(var b=new O(a);;){var c=a-b.tt;if(1E-12>Math.abs(c))return b;
b=b.AddDays(c)}};O.prototype.toString=function(){return this.date.toISOString()};O.prototype.AddDays=function(a){return new O(this.ut+a)};e.AstroTime=O;e.MakeTime=v;var $a;e.e_tilt=da;e.CalcMoonCount=0;var ed=function(a,b,c,d,f,g){this.elat=a;this.elon=b;this.mlat=c;this.mlon=d;this.dist_km=f;this.diam_deg=g};e.LibrationInfo=ed;e.Libration=function(a){var b=v(a);a=b.tt/36525;var c=a*a,d=c*a,f=c*c,g=ea(b);b=g.geo_eclip_lon;var h=g.geo_eclip_lat;g=g.distance_au*e.KM_PER_AU;var l=1.543*e.DEG2RAD,k=e.DEG2RAD*
Ga(93.272095+483202.0175233*a-.0036539*c-d/3526E3+f/86331E4),n=e.DEG2RAD*Ga(125.0445479-1934.1362891*a+.0020754*c+d/467441-f/60616E3),p=e.DEG2RAD*Ga(357.5291092+35999.0502909*a-1.536E-4*c+d/2449E4),q=e.DEG2RAD*Ga(134.9633964+477198.8675055*a+.0087414*c+d/69699-f/14712E3);d=e.DEG2RAD*Ga(297.8501921+445267.1114034*a-.0018819*c+d/545868-f/113065E3);c=1-.002516*a-7.4E-6*c;var t=b-n;f=Math.atan2(Math.sin(t)*Math.cos(h)*Math.cos(l)-Math.sin(h)*Math.sin(l),Math.cos(t)*Math.cos(h));var y=Fa(e.RAD2DEG*(f-
k));l=Math.asin(-Math.sin(t)*Math.cos(h)*Math.sin(l)-Math.sin(h)*Math.cos(l));t=-.02752*Math.cos(q)+-.02245*Math.sin(k)+.00684*Math.cos(q-2*k)+-.00293*Math.cos(2*k)+-8.5E-4*Math.cos(2*k-2*d)+-5.4E-4*Math.cos(q-2*d)+-2E-4*Math.sin(q+k)+-2E-4*Math.cos(q+2*k)+-2E-4*Math.cos(q-k)+1.4E-4*Math.cos(q+2*k-2*d);var x=-.02816*Math.sin(q)+.02244*Math.cos(k)+-.00682*Math.sin(q-2*k)+-.00279*Math.sin(2*k)+-8.3E-4*Math.sin(2*k-2*d)+6.9E-4*Math.sin(q-2*d)+4E-4*Math.cos(q+k)+-2.5E-4*Math.sin(2*q)+-2.3E-4*Math.sin(q+
2*k)+2E-4*Math.cos(q-k)+1.9E-4*Math.sin(q-k)+1.3E-4*Math.sin(q+2*k-2*d)+-1E-4*Math.cos(q-3*k);return new ed(e.RAD2DEG*l+(x*Math.cos(f)-t*Math.sin(f)),y+(-(.0252*c*Math.sin(p)+.00473*Math.sin(2*q-2*k)+-.00467*Math.sin(q)+.00396*Math.sin(e.DEG2RAD*(119.75+131.849*a))+.00276*Math.sin(2*q-2*d)+.00196*Math.sin(n)+-.00183*Math.cos(q-k)+.00115*Math.sin(q-2*d)+-9.6E-4*Math.sin(q-d)+4.6E-4*Math.sin(2*k-2*d)+-3.9E-4*Math.sin(q-k)+-3.2E-4*Math.sin(q-p-d)+2.7E-4*Math.sin(2*q-p-2*d)+2.3E-4*Math.sin(e.DEG2RAD*
(72.56+20.186*a))+-1.4E-4*Math.sin(2*d)+1.4E-4*Math.cos(2*q-2*k)+-1.2E-4*Math.sin(q-2*k)+-1.2E-4*Math.sin(2*q)+1.1E-4*Math.sin(2*q-2*p-2*d))+(t*Math.cos(f)+x*Math.sin(f))*Math.tan(l)),e.RAD2DEG*h,e.RAD2DEG*b,g,2*e.RAD2DEG*Math.atan(1737.4/Math.sqrt(g*g-1737.4*1737.4)))};var eb;e.SiderealTime=bc;var E=function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.t=d};E.prototype.Length=function(){return Math.hypot(this.x,this.y,this.z)};e.Vector=E;var I=function(a,b,c,d,f,g,h){this.x=a;this.y=b;this.z=c;this.vx=
d;this.vy=f;this.vz=g;this.t=h};e.StateVector=I;var Ba=function(a,b,c){this.lat=w(a);this.lon=w(b);this.dist=w(c)};e.Spherical=Ba;var gb=function(a,b,c,d){this.ra=w(a);this.dec=w(b);this.dist=w(c);this.vec=d};e.EquatorialCoordinates=gb;var J=function(a){this.rot=a};e.RotationMatrix=J;e.MakeRotation=function(a){if(!qd(a))throw"Argument must be a [3][3] array of numbers";return new J(a)};var ec=function(a,b,c,d){this.azimuth=w(a);this.altitude=w(b);this.ra=w(c);this.dec=w(d)};e.HorizontalCoordinates=
ec;var gc=function(a,b,c){this.vec=a;this.elat=w(b);this.elon=w(c)};e.EclipticCoordinates=gc;e.Horizon=hb;var zb=function(a,b,c){this.latitude=a;this.longitude=b;this.height=c;za(this)};e.Observer=zb;e.SunPosition=fc;e.Equator=Pa;e.ObserverVector=function(a,b,c){a=v(a);var d=ca(a);b=xb(b,d).pos;c||(b=fb(b,a,F.Into2000));return yb(b,a)};e.ObserverState=function(a,b,c){a=v(a);var d=ca(a);b=xb(b,d);b=new I(b.pos[0],b.pos[1],b.pos[2],b.vel[0],b.vel[1],b.vel[2],a);return c?b:(c=F.Into2000,c===F.Into2000?
(d=Na(a,c),b=Ea(d,b),a=Ma(a,c),a=Ea(a,b)):(d=Ma(a,c),b=Ea(d,b),a=Na(a,c),a=Ea(a,b)),a)};e.VectorObserver=function(a,b){var c=ca(a.t),d=[a.x,a.y,a.z];b||(d=wa(d,a.t,F.From2000),d=xa(d,a.t,F.From2000));b=d[0]*e.KM_PER_AU;var f=d[1]*e.KM_PER_AU;d=d[2]*e.KM_PER_AU;a=Math.hypot(b,f);if(1E-6>a){c=0;var g=0<d?90:-90;d=Math.abs(d)-6356.751857971648}else{for(c=e.RAD2DEG*Math.atan2(f,b)-15*c;-180>=c;)c+=360;for(;180<c;)c-=360;g=Math.atan2(d,a);for(var h,l=0;;){if(10<++l)throw"inverse_terra failed to converge.";
b=Math.cos(g);f=Math.sin(g);var k=b*b,n=f*f,p=k+.9933056020041345*n;h=Math.sqrt(p);var q=-42.69778487239616*f*b/h-d*b+a*f;if(1E-8>Math.abs(q))break;g-=q/(-42.69778487239616*((k-n)/h-n*k*-.006694397995865464/(-42.69778487239616*p))+d*f+a*b)}g*=e.RAD2DEG;h=6378.1366/h;d=Math.abs(f)>Math.abs(b)?d/f-.9933056020041345*h:a/b-h}return new zb(g,c,1E3*d)};e.ObserverGravity=function(a,b){a=Math.sin(a*e.DEG2RAD);a*=a;return 9.7803253359*(1+.00193185265241*a)/Math.sqrt(1-.00669437999013*a)*(1-(3.15704E-7-2.10269E-9*
a)*b+7.37452E-14*b*b)};e.Ecliptic=Qa;e.GeoMoon=Y;e.EclipticGeoMoon=ib;e.GeoMoonState=Ra;e.GeoEmbState=Bb;var na=[[-73E4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[7.3458569351457E-4,.0022785014891658,4.8619778602049E-4]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,2.2295915939915E-4,7.0143443551414E-4]],[-642400,[-29.441003929957,-6.43016153057,
6.858481011305],[8.4495803960544E-4,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,3.5168075922288E-4]],[-584E3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,5.3457141292226E-4,7.5929169129793E-4]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[6.1010603013347E-5,-.0031326500935382,-9.9346125151067E-4]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,
.0021347678412429,1.9074436384343E-4]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,8.328308359951E-4,8.0260156912107E-4]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-6.3257063052907E-4,-.0029969577578221,-7.4476074151596E-4]],[-438E3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-2.0937793168297E-6]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,8.3333973416824E-4]],
[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-4.9015526126399E-4]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-2.3369181613312E-4]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,8.4823598806262E-4]],[-292E3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-2.4377362639479E-4]],[-262800,[17.050384798092,
-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-4.9548725258825E-4]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,8.4177586176055E-4]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-1.9657304369835E-5]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,5.139363329243E-4,-7.7293066202546E-4]],[-146E3,[40.94685725864,25.904973592021,-4.256336240499],
[-8.3652705194051E-4,.0018129497136404,8.156422827306E-4]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,1.7401209844705E-4]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-2.5279858672148E-4,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-5.0525450073192E-4,.0019910074335507,7.7440196540269E-4]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,
3.3652250216211E-4]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-1.4717608981871E-4,.0021404187242141,7.1486567806614E-4]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-6.3233636090933E-4,4.7664798895648E-4]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,
7.700705617215,-10.814273666425],[2.3174803055677E-4,.0022402163127924,6.2988756452032E-4]],[146E3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-2.1751799585364E-4,5.9556516201114E-4]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[6.5059779150669E-4,.0022725657282262,5.1133743202822E-4]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,
1.7533423831993E-4,6.9128485798076E-4]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[9.3581363109681E-4,-.0030610357109184,-.0012364201089345]],[292E3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,3.6230548231153E-4]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,5.3102050468554E-4,7.5938408813008E-4]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[4.5605107450676E-5,-.0031308219926928,-9.9066533301924E-4]],
[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,1.8002516202204E-4]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,8.6046232702817E-4,8.0614690298954E-4]],[438E3,[-29.57674022923,11.863535943587,12.631323039872],[-7.2292830060955E-4,-.0029587820140709,-7.08242964503E-4]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-3.8528655083926E-5]],[496400,[31.375957451819,38.050372720763,
2.433138343754],[-.0015546055556611,.0011699815465629,8.3565439266001E-4]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-4.2542017598193E-4]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-3.0243665086079E-4]],[584E3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,8.4762160640137E-4]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,
-.0021939631314577,-1.631691327518E-4]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,9.1860931752944E-4,-5.9939422488627E-4]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,8.3578230511981E-4]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,7.0414782780416E-5]],[73E4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,1.609846120227E-4,-9.0672150593868E-4]]],
B=function(a,b,c){this.x=a;this.y=b;this.z=c};B.prototype.clone=function(){return new B(this.x,this.y,this.z)};B.prototype.ToAstroVector=function(a){return new E(this.x,this.y,this.z,a)};B.zero=function(){return new B(0,0,0)};B.prototype.quadrature=function(){return this.x*this.x+this.y*this.y+this.z*this.z};B.prototype.add=function(a){return new B(this.x+a.x,this.y+a.y,this.z+a.z)};B.prototype.sub=function(a){return new B(this.x-a.x,this.y-a.y,this.z-a.z)};B.prototype.incr=function(a){this.x+=a.x;
this.y+=a.y;this.z+=a.z};B.prototype.decr=function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z};B.prototype.mul=function(a){return new B(a*this.x,a*this.y,a*this.z)};B.prototype.div=function(a){return new B(this.x/a,this.y/a,this.z/a)};B.prototype.mean=function(a){return new B((this.x+a.x)/2,(this.y+a.y)/2,(this.z+a.z)/2)};B.prototype.neg=function(){return new B(-this.x,-this.y,-this.z)};var X=function(a,b,c){this.tt=a;this.r=b;this.v=c};X.prototype.clone=function(){return new X(this.tt,this.r,this.v)};
X.prototype.sub=function(a){return new X(this.tt,this.r.sub(a.r),this.v.sub(a.v))};var Da=function(a){var b=new X(a,new B(0,0,0),new B(0,0,0));this.Jupiter=R(b,a,m.Jupiter,2.825345909524226E-7);this.Saturn=R(b,a,m.Saturn,8.459715185680659E-8);this.Uranus=R(b,a,m.Uranus,1.292024916781969E-8);this.Neptune=R(b,a,m.Neptune,1.524358900784276E-8);this.Jupiter.r.decr(b.r);this.Jupiter.v.decr(b.v);this.Saturn.r.decr(b.r);this.Saturn.v.decr(b.v);this.Uranus.r.decr(b.r);this.Uranus.v.decr(b.v);this.Neptune.r.decr(b.r);
this.Neptune.v.decr(b.v);this.Sun=new X(a,b.r.mul(-1),b.v.mul(-1))};Da.prototype.Acceleration=function(a){var b=Ta(a,2.959122082855911E-4,this.Sun.r);b.incr(Ta(a,2.825345909524226E-7,this.Jupiter.r));b.incr(Ta(a,8.459715185680659E-8,this.Saturn.r));b.incr(Ta(a,1.292024916781969E-8,this.Uranus.r));b.incr(Ta(a,1.524358900784276E-8,this.Neptune.r));return b};var Ua=function(a,b,c,d){this.tt=a;this.r=b;this.v=c;this.a=d};Ua.prototype.clone=function(){return new Ua(this.tt,this.r.clone(),this.v.clone(),
this.a.clone())};var ic=function(a,b){this.bary=a;this.grav=b},Ib=[],rd=new J([[.999432765338654,-.0336771074697641,0],[.0303959428906285,.902057912352809,.430543388542295],[-.0144994559663353,-.430299169409101,.902569881273754]]),tb=[{mu:2.82489428433814E-7,al:[1.446213296021224,3.5515522861824],a:[[.0028210960212903,0,0]],l:[[-1.925258348666E-4,4.9369589722645,.01358483658305],[-9.70803596076E-5,4.3188796477322,.01303413843243],[-8.988174165E-5,1.9080016428617,.00305064867158],[-5.53101050262E-5,
1.4936156681569,.01293892891155]],z:[[.0041510849668155,4.089939635545,-.01290686414666],[6.260521444113E-4,1.446188898627,3.5515522949802],[3.52747346169E-5,2.1256287034578,1.2727416567E-4]],zeta:[[3.142172466014E-4,2.7964219722923,-.002315096098],[9.04169207946E-5,1.0477061879627,-5.6920638196E-4]]},{mu:2.82483274392893E-7,al:[-.3735263437471362,1.76932271112347],a:[[.0044871037804314,0,0],[4.324367498E-7,1.819645606291,1.7822295777568]],l:[[8.576433172936E-4,4.3188693178264,.01303413830805],[4.549582875086E-4,
1.4936531751079,.01293892881962],[3.248939825174E-4,1.8196494533458,1.7822295777568],[-3.074250079334E-4,4.9377037005911,.01358483286724],[1.982386144784E-4,1.907986905476,.00305101212869],[1.834063551804E-4,2.1402853388529,.00145009789338],[-1.434383188452E-4,5.622214036663,.89111478887838],[-7.71939140944E-5,4.300272437235,2.6733443704266]],z:[[-.0093589104136341,4.0899396509039,-.01290686414666],[2.988994545555E-4,5.9097265185595,1.7693227079462],[2.13903639035E-4,2.1256289300016,1.2727418407E-4],
[1.980963564781E-4,2.743516829265,6.7797343009E-4],[1.210388158965E-4,5.5839943711203,3.20566149E-5],[8.37042048393E-5,1.6094538368039,-.90402165808846],[8.23525166369E-5,1.4461887708689,3.5515522949802]],zeta:[[.0040404917832303,1.0477063169425,-5.692064054E-4],[2.200421034564E-4,3.3368857864364,-1.2491307307E-4],[1.662544744719E-4,2.4134862374711,0],[5.90282470983E-5,5.9719930968366,-3.056160225E-5]]},{mu:2.82498184184723E-7,al:[.2874089391143348,.878207923589328],a:[[.0071566594572575,0,0],[1.393029911E-6,
1.1586745884981,2.6733443704266]],l:[[2.310797886226E-4,2.1402987195942,.00145009784384],[-1.828635964118E-4,4.3188672736968,.01303413828263],[1.512378778204E-4,4.9373102372298,.01358483481252],[-1.163720969778E-4,4.300265986149,2.6733443704266],[-9.55478069846E-5,1.4936612842567,.01293892879857],[8.15246854464E-5,5.6222137132535,.89111478887838],[-8.01219679602E-5,1.2995922951532,1.0034433456729],[-6.07017260182E-5,.64978769669238,.50172167043264]],z:[[.0014289811307319,2.1256295942739,1.2727413029E-4],
[7.71093122676E-4,5.5836330003496,3.20643411E-5],[5.925911780766E-4,4.0899396636448,-.01290686414666],[2.045597496146E-4,5.2713683670372,-.12523544076106],[1.785118648258E-4,.28743156721063,.8782079244252],[1.131999784893E-4,1.4462127277818,3.5515522949802],[-6.5877816921E-5,2.2702423990985,-1.7951364394537],[4.97058888328E-5,5.9096792204858,1.7693227129285]],zeta:[[.0015932721570848,3.3368862796665,-1.2491307058E-4],[8.533093128905E-4,2.4133881688166,0],[3.513347911037E-4,5.9720789850127,-3.056101771E-5],
[-1.441929255483E-4,1.0477061764435,-5.6920632124E-4]]},{mu:2.82492144889909E-7,al:[-.3620341291375704,.376486233433828],a:[[.0125879701715314,0,0],[3.595204947E-6,.64965776007116,.50172168165034],[2.7580210652E-6,1.808423578151,3.1750660413359]],l:[[5.586040123824E-4,2.1404207189815,.00145009793231],[-3.805813868176E-4,2.7358844897853,2.972965062E-5],[2.205152863262E-4,.649796525964,.5017216724358],[1.877895151158E-4,1.8084787604005,3.1750660413359],[7.66916975242E-5,6.2720114319755,1.3928364636651],
[7.47056855106E-5,1.2995916202344,1.0034433456729]],z:[[.0073755808467977,5.5836071576084,3.206509914E-5],[2.065924169942E-4,5.9209831565786,.37648624194703],[1.589869764021E-4,.28744006242623,.8782079244252],[-1.561131605348E-4,2.1257397865089,1.2727441285E-4],[1.486043380971E-4,1.4462134301023,3.5515522949802],[6.35073108731E-5,5.9096803285954,1.7693227129285],[5.99351698525E-5,4.1125517584798,-2.7985797954589],[5.40660842731E-5,5.5390350845569,.00286834082283],[-4.89596900866E-5,4.6218149483338,
-.62695712529519]],zeta:[[.0038422977898495,2.4133922085557,0],[.0022453891791894,5.9721736773277,-3.056125525E-5],[-2.604479450559E-4,3.3368746306409,-1.2491309972E-4],[3.3211214323E-5,5.5604137742337,.00290037688507]]}],fd=function(a,b,c,d){this.io=a;this.europa=b;this.ganymede=c;this.callisto=d};e.JupiterMoonsInfo=fd;e.JupiterMoons=function(a){a=new O(a);return new fd(kb(a,tb[0]),kb(a,tb[1]),kb(a,tb[2]),kb(a,tb[3]))};e.HelioVector=Z;e.HelioDistance=oa;e.CorrectLightTravel=lc;var nc=function(a,
b,c,d){this.observerBody=a;this.targetBody=b;this.aberration=c;this.observerPos=d};nc.prototype.Position=function(a){this.aberration&&(this.observerPos=Z(this.observerBody,a));var b=Z(this.targetBody,a);return new E(b.x-this.observerPos.x,b.y-this.observerPos.y,b.z-this.observerPos.z,a)};e.BackdatePosition=mc;e.GeoVector=W;e.BaryState=function(a,b){b=v(b);if(a===m.SSB)return new I(0,0,0,0,0,0,b);if(a===m.Pluto)return Hb(b,!1);var c=new Da(b.tt);switch(a){case m.Sun:return pa(c.Sun,b);case m.Jupiter:return pa(c.Jupiter,
b);case m.Saturn:return pa(c.Saturn,b);case m.Uranus:return pa(c.Uranus,b);case m.Neptune:return pa(c.Neptune,b);case m.Moon:case m.EMB:var d=Sa(M[m.Earth],b.tt);a=a===m.Moon?Ra(b):Bb(b);return new I(a.x+c.Sun.r.x+d.r.x,a.y+c.Sun.r.y+d.r.y,a.z+c.Sun.r.z+d.r.z,a.vx+c.Sun.v.x+d.v.x,a.vy+c.Sun.v.y+d.v.y,a.vz+c.Sun.v.z+d.v.z,b)}if(a in M)return a=Sa(M[a],b.tt),new I(c.Sun.r.x+a.r.x,c.Sun.r.y+a.r.y,c.Sun.r.z+a.r.z,c.Sun.v.x+a.v.x,c.Sun.v.y+a.v.y,c.Sun.v.z+a.v.z,b);throw'BaryState: Unsupported body "'+
a+'"';};e.HelioState=mb;e.Search=K;e.SearchSunLongitude=oc;e.PairLongitude=Jb;e.AngleFromSun=Ha;e.EclipticLongitude=qa;var pc=function(a,b,c,d,f,g,h,l){this.time=a;this.mag=b;this.phase_angle=c;this.helio_dist=d;this.geo_dist=f;this.gc=g;this.hc=h;this.ring_tilt=l;this.phase_fraction=(1+Math.cos(e.DEG2RAD*c))/2};e.IlluminationInfo=pc;e.Illumination=nb;e.SearchRelativeLongitude=Ia;e.MoonPhase=Kb;e.SearchMoonPhase=Wa;var rc=function(a,b){this.quarter=a;this.time=b};e.MoonQuarter=rc;e.SearchMoonQuarter=
qc;e.NextMoonQuarter=function(a){a=new Date(a.time.date.getTime()+5184E5);return qc(a)};var tc=function(a,b,c){this.pressure=a;this.temperature=b;this.density=c};e.AtmosphereInfo=tc;e.Atmosphere=sc;e.SearchRiseSet=function(a,b,c,d,f,g){g=void 0===g?0:g;if(!Number.isFinite(g)||0>g)throw"Invalid value for metersAboveGround: "+g;a:switch(a){case m.Sun:var h=Nc;break a;case m.Moon:h=Dd;break a;default:h=0}var l=sc(b.height-g),k=b.latitude*e.DEG2RAD,n=Math.sin(k);k=Math.cos(k);var p=1/Math.hypot(k,.996647180302104*
n),q=(b.height-g)/1E3,t=.175*Math.pow(1-.0065/283.15*(b.height-2/3*g),3.256);return uc(a,b,c,d,f,h,e.RAD2DEG*-(Math.sqrt(2*(1-t)*g/(1E3*Math.hypot((6378.1366*p+q)*k,(6335.438815127603*p+q)*n)))/(1-t))-Ed*l.density)};e.SearchAltitude=function(a,b,c,d,f,g){if(!Number.isFinite(g)||-90>g||90<g)throw"Invalid altitude angle: "+g;return uc(a,b,c,d,f,0,g)};var ud=function(a,b,c,d){this.tx=a;this.ty=b;this.ax=c;this.ay=d},gd=function(a,b){this.time=a;this.hor=b};e.HourAngleEvent=gd;e.SearchHourAngle=function(a,
b,c,d,f){f=void 0===f?1:f;za(b);d=v(d);var g=0;if(a===m.Earth)throw"Cannot search for hour angle of the Earth.";w(c);if(0>c||24<=c)throw"Invalid hour angle "+c;w(f);if(0===f)throw"Direction must be positive or negative.";for(;;){++g;var h=ca(d),l=Pa(a,d,b,!0,!0);h=(c+l.ra-b.longitude/15-h)%24;1===g?0<f?0>h&&(h+=24):0<h&&(h-=24):-12>h?h+=24:12<h&&(h-=24);if(.1>3600*Math.abs(h))return a=hb(d,b,l.ra,l.dec,"normal"),new gd(d,a);d=d.AddDays(h/24*.9972695717592592)}};e.HourAngle=function(a,b,c){var d=v(b);
b=bc(d);a=Pa(a,d,c,!0,!0);c=(c.longitude/15+b-a.ra)%24;0>c&&(c+=24);return c};var hd=function(a,b,c,d){this.mar_equinox=a;this.jun_solstice=b;this.sep_equinox=c;this.dec_solstice=d};e.SeasonInfo=hd;e.Seasons=function(a){function b(h,l,k){l=new Date(Date.UTC(a,l-1,k));h=oc(h,l,20);if(!h)throw"Cannot find season change near "+l.toISOString();return h}a instanceof Date&&Number.isFinite(a.getTime())&&(a=a.getUTCFullYear());if(!Number.isSafeInteger(a))throw"Cannot calculate seasons because year argument "+
a+" is neither a Date nor a safe integer.";var c=b(0,3,10),d=b(90,6,10),f=b(180,9,10),g=b(270,12,10);return new hd(c,d,f,g)};var wc=function(a,b,c,d){this.time=a;this.visibility=b;this.elongation=c;this.ecliptic_separation=d};e.ElongationEvent=wc;e.Elongation=vc;e.SearchMaxElongation=function(a,b){function c(n){var p=n.AddDays(-.005);n=n.AddDays(.005);p=Ha(a,p);n=Ha(a,n);return(p-n)/.01}b=v(b);var d={Mercury:{s1:50,s2:85},Venus:{s1:40,s2:50}}[a];if(!d)throw"SearchMaxElongation works for Mercury and Venus only.";
for(var f=0;2>=++f;){var g=qa(a,b),h=qa(m.Earth,b),l=Fa(g-h),k=g=h=void 0;l>=-d.s1&&l<+d.s1?(k=0,h=+d.s1,g=+d.s2):l>=+d.s2||l<-d.s2?(k=0,h=-d.s2,g=-d.s1):0<=l?(k=-Va(a)/4,h=+d.s1,g=+d.s2):(k=-Va(a)/4,h=-d.s2,g=-d.s1);l=b.AddDays(k);h=Ia(a,h,l);g=Ia(a,g,h);l=c(h);if(0<=l)throw"SearchMaxElongation: internal error: m1 = "+l;k=c(g);if(0>=k)throw"SearchMaxElongation: internal error: m2 = "+k;l=K(c,h,g,{init_f1:l,init_f2:k,dt_tolerance_seconds:10});if(!l)throw"SearchMaxElongation: failed search iter "+
f+" (t1="+h.toString()+", t2="+g.toString()+")";if(l.tt>=b.tt)return vc(a,l);b=g.AddDays(1)}throw"SearchMaxElongation: failed to find event after 2 tries.";};e.SearchPeakMagnitude=function(a,b){function c(k){var n=k.AddDays(-.005);k=k.AddDays(.005);n=nb(a,n).mag;return(nb(a,k).mag-n)/.01}if(a!==m.Venus)throw"SearchPeakMagnitude currently works for Venus only.";b=v(b);for(var d=0;2>=++d;){var f=qa(a,b),g=qa(m.Earth,b),h=Fa(f-g),l=f=g=void 0;-10<=h&&10>h?(l=0,g=10,f=30):30<=h||-30>h?(l=0,g=-30,f=-10):
0<=h?(l=-Va(a)/4,g=10,f=30):(l=-Va(a)/4,g=-30,f=-10);h=b.AddDays(l);g=Ia(a,g,h);f=Ia(a,f,g);h=c(g);if(0<=h)throw"SearchPeakMagnitude: internal error: m1 = "+h;l=c(f);if(0>=l)throw"SearchPeakMagnitude: internal error: m2 = "+l;h=K(c,g,f,{init_f1:h,init_f2:l,dt_tolerance_seconds:10});if(!h)throw"SearchPeakMagnitude: failed search iter "+d+" (t1="+g.toString()+", t2="+f.toString()+")";if(h.tt>=b.tt)return nb(a,h);b=f.AddDays(1)}throw"SearchPeakMagnitude: failed to find event after 2 tries.";};var Ja;
(function(a){a[a.Pericenter=0]="Pericenter";a[a.Apocenter=1]="Apocenter"})(Ja=e.ApsisKind||(e.ApsisKind={}));var Xa=function(a,b,c){this.time=a;this.kind=b;this.dist_au=c;this.dist_km=c*e.KM_PER_AU};e.Apsis=Xa;e.SearchLunarApsis=xc;e.NextLunarApsis=function(a){var b=xc(a.time.AddDays(11));if(1!==b.kind+a.kind)throw"NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev="+a.kind+" @ "+a.time.toString()+", next="+b.kind+" @ "+b.time.toString();return b};e.SearchPlanetApsis=zc;
e.NextPlanetApsis=function(a,b){if(b.kind!==Ja.Pericenter&&b.kind!==Ja.Apocenter)throw"Invalid apsis kind: "+b.kind;var c=b.time.AddDays(.25*aa[a].OrbitalPeriod);a=zc(a,c);if(1!==a.kind+b.kind)throw"Internal error: previous apsis was "+b.kind+", but found "+a.kind+" for next apsis.";return a};e.InverseRotation=Ka;e.CombineRotation=ja;e.IdentityMatrix=function(){return new J([[1,0,0],[0,1,0],[0,0,1]])};e.Pivot=function(a,b,c){if(0!==b&&1!==b&&2!==b)throw"Invalid axis "+b+". Must be [0, 1, 2].";var d=
w(c)*e.DEG2RAD;c=Math.cos(d);d=Math.sin(d);var f=(b+1)%3,g=(b+2)%3,h=[[0,0,0],[0,0,0],[0,0,0]];h[f][f]=c*a.rot[f][f]-d*a.rot[f][g];h[f][g]=d*a.rot[f][f]+c*a.rot[f][g];h[f][b]=a.rot[f][b];h[g][f]=c*a.rot[g][f]-d*a.rot[g][g];h[g][g]=d*a.rot[g][f]+c*a.rot[g][g];h[g][b]=a.rot[g][b];h[b][f]=c*a.rot[b][f]-d*a.rot[b][g];h[b][g]=d*a.rot[b][f]+c*a.rot[b][g];h[b][b]=a.rot[b][b];return new J(h)};e.VectorFromSphere=lb;e.EquatorFromVector=Mb;e.SphereFromVector=Nb;e.HorizonFromVector=function(a,b){a=Nb(a);a.lon=
Ac(a.lon);a.lat+=Oa(b,a.lat);return a};e.VectorFromHorizon=function(a,b,c){b=v(b);var d=Ac(a.lon);c=a.lat+Bc(c,a.lat);a=new Ba(c,d,a.dist);return lb(a,b)};e.Refraction=Oa;e.InverseRefraction=Bc;e.RotateVector=Ya;e.RotateState=Ea;e.Rotation_EQJ_ECL=Cc;e.Rotation_ECL_EQJ=function(){return new J([[1,0,0],[0,.9174821430670688,.3977769691083922],[0,-.3977769691083922,.9174821430670688]])};e.Rotation_EQJ_EQD=ob;e.Rotation_EQJ_ECT=function(a){var b=v(a);a=ob(b);b=Jc(b);return ja(a,b)};e.Rotation_ECT_EQJ=
function(a){var b=v(a);a=Ic(b);b=pb(b);return ja(a,b)};e.Rotation_EQD_EQJ=pb;e.Rotation_EQD_HOR=Ob;e.Rotation_HOR_EQD=Dc;e.Rotation_HOR_EQJ=Ec;e.Rotation_EQJ_HOR=function(a,b){a=Ec(a,b);return Ka(a)};e.Rotation_EQD_ECL=Fc;e.Rotation_ECL_EQD=Gc;e.Rotation_ECL_HOR=Hc;e.Rotation_HOR_ECL=function(a,b){a=Hc(a,b);return Ka(a)};e.Rotation_EQJ_GAL=function(){return new J([[-.0548624779711344,.4941095946388765,-.8676668813529025],[-.8734572784246782,-.4447938112296831,-.1980677870294097],[-.483800052994852,
.7470034631630423,.4559861124470794]])};e.Rotation_GAL_EQJ=function(){return new J([[-.0548624779711344,-.8734572784246782,-.483800052994852],[.4941095946388765,-.4447938112296831,.7470034631630423],[-.8676668813529025,-.1980677870294097,.4559861124470794]])};e.Rotation_ECT_EQD=Ic;e.Rotation_EQD_ECT=Jc;var Fd=[["And","Andromeda"],["Ant","Antila"],["Aps","Apus"],["Aql","Aquila"],["Aqr","Aquarius"],["Ara","Ara"],["Ari","Aries"],["Aur","Auriga"],["Boo","Bootes"],["Cae","Caelum"],["Cam","Camelopardis"],
["Cap","Capricornus"],["Car","Carina"],["Cas","Cassiopeia"],["Cen","Centaurus"],["Cep","Cepheus"],["Cet","Cetus"],["Cha","Chamaeleon"],["Cir","Circinus"],["CMa","Canis Major"],["CMi","Canis Minor"],["Cnc","Cancer"],["Col","Columba"],["Com","Coma Berenices"],["CrA","Corona Australis"],["CrB","Corona Borealis"],["Crt","Crater"],["Cru","Crux"],["Crv","Corvus"],["CVn","Canes Venatici"],["Cyg","Cygnus"],["Del","Delphinus"],["Dor","Dorado"],["Dra","Draco"],["Equ","Equuleus"],["Eri","Eridanus"],["For","Fornax"],
["Gem","Gemini"],["Gru","Grus"],["Her","Hercules"],["Hor","Horologium"],["Hya","Hydra"],["Hyi","Hydrus"],["Ind","Indus"],["Lac","Lacerta"],["Leo","Leo"],["Lep","Lepus"],["Lib","Libra"],["LMi","Leo Minor"],["Lup","Lupus"],["Lyn","Lynx"],["Lyr","Lyra"],["Men","Mensa"],["Mic","Microscopium"],["Mon","Monoceros"],["Mus","Musca"],["Nor","Norma"],["Oct","Octans"],["Oph","Ophiuchus"],["Ori","Orion"],["Pav","Pavo"],["Peg","Pegasus"],["Per","Perseus"],["Phe","Phoenix"],["Pic","Pictor"],["PsA","Pisces Austrinus"],
["Psc","Pisces"],["Pup","Puppis"],["Pyx","Pyxis"],["Ret","Reticulum"],["Scl","Sculptor"],["Sco","Scorpius"],["Sct","Scutum"],["Ser","Serpens"],["Sex","Sextans"],["Sge","Sagitta"],["Sgr","Sagittarius"],["Tau","Taurus"],["Tel","Telescopium"],["TrA","Triangulum Australe"],["Tri","Triangulum"],["Tuc","Tucana"],["UMa","Ursa Major"],["UMi","Ursa Minor"],["Vel","Vela"],["Vir","Virgo"],["Vol","Volans"],["Vul","Vulpecula"]],Gd=[[83,0,8640,2112],[83,2880,5220,2076],[83,7560,8280,2068],[83,6480,7560,2064],[15,
0,2880,2040],[10,3300,3840,1968],[15,0,1800,1920],[10,3840,5220,1920],[83,6300,6480,1920],[33,7260,7560,1920],[15,0,1263,1848],[10,4140,4890,1848],[83,5952,6300,1800],[15,7260,7440,1800],[10,2868,3300,1764],[33,3300,4080,1764],[83,4680,5952,1680],[13,1116,1230,1632],[33,7350,7440,1608],[33,4080,4320,1596],[15,0,120,1584],[83,5040,5640,1584],[15,8490,8640,1584],[33,4320,4860,1536],[33,4860,5190,1512],[15,8340,8490,1512],[10,2196,2520,1488],[33,7200,7350,1476],[15,7393.2,7416,1462],[10,2520,2868,1440],
[82,2868,3030,1440],[33,7116,7200,1428],[15,7200,7393.2,1428],[15,8232,8340,1418],[13,0,876,1404],[33,6990,7116,1392],[13,612,687,1380],[13,876,1116,1368],[10,1116,1140,1368],[15,8034,8232,1350],[10,1800,2196,1344],[82,5052,5190,1332],[33,5190,6990,1332],[10,1140,1200,1320],[15,7968,8034,1320],[15,7416,7908,1316],[13,0,612,1296],[50,2196,2340,1296],[82,4350,4860,1272],[33,5490,5670,1272],[15,7908,7968,1266],[10,1200,1800,1260],[13,8232,8400,1260],[33,5670,6120,1236],[62,735,906,1212],[33,6120,6564,
1212],[13,0,492,1200],[62,492,600,1200],[50,2340,2448,1200],[13,8400,8640,1200],[82,4860,5052,1164],[13,0,402,1152],[13,8490,8640,1152],[39,6543,6564,1140],[33,6564,6870,1140],[30,6870,6900,1140],[62,600,735,1128],[82,3030,3300,1128],[13,60,312,1104],[82,4320,4350,1080],[50,2448,2652,1068],[30,7887,7908,1056],[30,7875,7887,1050],[30,6900,6984,1044],[82,3300,3660,1008],[82,3660,3882,960],[8,5556,5670,960],[39,5670,5880,960],[50,3330,3450,954],[0,0,906,882],[62,906,924,882],[51,6969,6984,876],[62,1620,
1689,864],[30,7824,7875,864],[44,7875,7920,864],[7,2352,2652,852],[50,2652,2790,852],[0,0,720,840],[44,7920,8214,840],[44,8214,8232,828],[0,8232,8460,828],[62,924,978,816],[82,3882,3960,816],[29,4320,4440,816],[50,2790,3330,804],[48,3330,3558,804],[0,258,507,792],[8,5466,5556,792],[0,8460,8550,770],[29,4440,4770,768],[0,8550,8640,752],[29,5025,5052,738],[80,870,978,736],[62,978,1620,736],[7,1620,1710,720],[51,6543,6969,720],[82,3960,4320,696],[30,7080,7530,696],[7,1710,2118,684],[48,3558,3780,684],
[29,4770,5025,684],[0,0,24,672],[80,507,600,672],[7,2118,2352,672],[37,2838,2880,672],[30,7530,7824,672],[30,6933,7080,660],[80,690,870,654],[25,5820,5880,648],[8,5430,5466,624],[25,5466,5820,624],[51,6612,6792,624],[48,3870,3960,612],[51,6792,6933,612],[80,600,690,600],[66,258,306,570],[48,3780,3870,564],[87,7650,7710,564],[77,2052,2118,548],[0,24,51,528],[73,5730,5772,528],[37,2118,2238,516],[87,7140,7290,510],[87,6792,6930,506],[0,51,306,504],[87,7290,7404,492],[37,2811,2838,480],[87,7404,7650,
468],[87,6930,7140,460],[6,1182,1212,456],[75,6792,6840,444],[59,2052,2076,432],[37,2238,2271,420],[75,6840,7140,388],[77,1788,1920,384],[39,5730,5790,384],[75,7140,7290,378],[77,1662,1788,372],[77,1920,2016,372],[23,4620,4860,360],[39,6210,6570,344],[23,4272,4620,336],[37,2700,2811,324],[39,6030,6210,308],[61,0,51,300],[77,2016,2076,300],[37,2520,2700,300],[61,7602,7680,300],[37,2271,2496,288],[39,6570,6792,288],[31,7515,7578,284],[61,7578,7602,284],[45,4146,4272,264],[59,2247,2271,240],[37,2496,
2520,240],[21,2811,2853,240],[61,8580,8640,240],[6,600,1182,238],[31,7251,7308,204],[8,4860,5430,192],[61,8190,8580,180],[21,2853,3330,168],[45,3330,3870,168],[58,6570,6718.4,150],[3,6718.4,6792,150],[31,7500,7515,144],[20,2520,2526,132],[73,6570,6633,108],[39,5790,6030,96],[58,6570,6633,72],[61,7728,7800,66],[66,0,720,48],[73,6690,6792,48],[31,7308,7500,48],[34,7500,7680,48],[61,7680,7728,48],[61,7920,8190,48],[61,7800,7920,42],[20,2526,2592,36],[77,1290,1662,0],[59,1662,1680,0],[20,2592,2910,0],
[85,5280,5430,0],[58,6420,6570,0],[16,954,1182,-42],[77,1182,1290,-42],[73,5430,5856,-78],[59,1680,1830,-96],[59,2100,2247,-96],[73,6420,6468,-96],[73,6570,6690,-96],[3,6690,6792,-96],[66,8190,8580,-96],[45,3870,4146,-144],[85,4146,4260,-144],[66,0,120,-168],[66,8580,8640,-168],[85,5130,5280,-192],[58,5730,5856,-192],[3,7200,7392,-216],[4,7680,7872,-216],[58,6180,6468,-240],[54,2100,2910,-264],[35,1770,1830,-264],[59,1830,2100,-264],[41,2910,3012,-264],[74,3450,3870,-264],[85,4260,4620,-264],[58,
6330,6360,-280],[3,6792,7200,-288.8],[35,1740,1770,-348],[4,7392,7680,-360],[73,6180,6570,-384],[72,6570,6792,-384],[41,3012,3090,-408],[58,5856,5895,-438],[41,3090,3270,-456],[26,3870,3900,-456],[71,5856,5895,-462],[47,5640,5730,-480],[28,4530,4620,-528],[85,4620,5130,-528],[41,3270,3510,-576],[16,600,954,-585.2],[35,954,1350,-585.2],[26,3900,4260,-588],[28,4260,4530,-588],[47,5130,5370,-588],[58,5856,6030,-590],[16,0,600,-612],[11,7680,7872,-612],[4,7872,8580,-612],[16,8580,8640,-612],[41,3510,
3690,-636],[35,1692,1740,-654],[46,1740,2202,-654],[11,7200,7680,-672],[41,3690,3810,-700],[41,4530,5370,-708],[47,5370,5640,-708],[71,5640,5760,-708],[35,1650,1692,-720],[58,6030,6336,-720],[76,6336,6420,-720],[41,3810,3900,-748],[19,2202,2652,-792],[41,4410,4530,-792],[41,3900,4410,-840],[36,1260,1350,-864],[68,3012,3372,-882],[35,1536,1650,-888],[76,6420,6900,-888],[65,7680,8280,-888],[70,8280,8400,-888],[36,1080,1260,-950],[1,3372,3960,-954],[70,0,600,-960],[36,600,1080,-960],[35,1392,1536,-960],
[70,8400,8640,-960],[14,5100,5370,-1008],[49,5640,5760,-1008],[71,5760,5911.5,-1008],[9,1740,1800,-1032],[22,1800,2370,-1032],[67,2880,3012,-1032],[35,1230,1392,-1056],[71,5911.5,6420,-1092],[24,6420,6900,-1092],[76,6900,7320,-1092],[53,7320,7680,-1092],[35,1080,1230,-1104],[9,1620,1740,-1116],[49,5520,5640,-1152],[63,0,840,-1156],[35,960,1080,-1176],[40,1470,1536,-1176],[9,1536,1620,-1176],[38,7680,7920,-1200],[67,2160,2880,-1218],[84,2880,2940,-1218],[35,870,960,-1224],[40,1380,1470,-1224],[63,
0,660,-1236],[12,2160,2220,-1260],[84,2940,3042,-1272],[40,1260,1380,-1276],[32,1380,1440,-1276],[63,0,570,-1284],[35,780,870,-1296],[64,1620,1800,-1296],[49,5418,5520,-1296],[84,3042,3180,-1308],[12,2220,2340,-1320],[14,4260,4620,-1320],[49,5100,5418,-1320],[56,5418,5520,-1320],[32,1440,1560,-1356],[84,3180,3960,-1356],[14,3960,4050,-1356],[5,6300,6480,-1368],[78,6480,7320,-1368],[38,7920,8400,-1368],[40,1152,1260,-1380],[64,1800,1980,-1380],[12,2340,2460,-1392],[63,0,480,-1404],[35,480,780,-1404],
[63,8400,8640,-1404],[32,1560,1650,-1416],[56,5520,5911.5,-1440],[43,7320,7680,-1440],[64,1980,2160,-1464],[18,5460,5520,-1464],[5,5911.5,5970,-1464],[18,5370,5460,-1526],[5,5970,6030,-1526],[64,2160,2460,-1536],[12,2460,3252,-1536],[14,4050,4260,-1536],[27,4260,4620,-1536],[14,4620,5232,-1536],[18,4860,4920,-1560],[5,6030,6060,-1560],[40,780,1152,-1620],[69,1152,1650,-1620],[18,5310,5370,-1620],[5,6060,6300,-1620],[60,6300,6480,-1620],[81,7920,8400,-1620],[32,1650,2370,-1680],[18,4920,5310,-1680],
[79,5310,6120,-1680],[81,0,480,-1800],[42,1260,1650,-1800],[86,2370,3252,-1800],[12,3252,4050,-1800],[55,4050,4920,-1800],[60,6480,7680,-1800],[43,7680,8400,-1800],[81,8400,8640,-1800],[81,270,480,-1824],[42,0,1260,-1980],[17,2760,4920,-1980],[2,4920,6480,-1980],[52,1260,2760,-2040],[57,0,8640,-2160]],Tb,id,jd=function(a,b,c,d){this.symbol=a;this.name=b;this.ra1875=c;this.dec1875=d};e.ConstellationInfo=jd;e.Constellation=function(a,b){w(a);w(b);if(-90>b||90<b)throw"Invalid declination angle. Must be -90..+90.";
a%=24;0>a&&(a+=24);Tb||(Tb=ob(new O(-45655.74141261017)),id=new O(0));a=new Ba(b,15*a,1);a=lb(a,id);a=Ya(Tb,a);a=Mb(a);b=10/240;for(var c=b/15,d=$jscomp.makeIterator(Gd),f=d.next();!f.done;f=d.next()){f=f.value;var g=f[1]*c,h=f[2]*c;if(f[3]*b<=a.dec&&g<=a.ra&&a.ra<h)return b=Fd[f[0]],new jd(b[0],b[1],a.ra,a.dec)}throw"Unable to find constellation for given coordinates.";};var S;(function(a){a.Penumbral="penumbral";a.Partial="partial";a.Annular="annular";a.Total="total"})(S=e.EclipseKind||(e.EclipseKind=
{}));var Pc=function(a,b,c,d,f,g){this.kind=a;this.obscuration=b;this.peak=c;this.sd_penum=d;this.sd_partial=f;this.sd_total=g};e.LunarEclipseInfo=Pc;var xd=function(a,b,c,d,f,g,h){this.time=a;this.u=b;this.r=c;this.k=d;this.p=f;this.target=g;this.dir=h};e.SearchLunarEclipse=Oc;var Rc=function(a,b,c,d,f,g){this.kind=a;this.obscuration=b;this.peak=c;this.distance=d;this.latitude=f;this.longitude=g};e.GlobalSolarEclipseInfo=Rc;e.NextLunarEclipse=function(a){a=v(a);a=a.AddDays(10);return Oc(a)};e.SearchGlobalSolarEclipse=
Qc;e.NextGlobalSolarEclipse=function(a){a=v(a);a=a.AddDays(10);return Qc(a)};var Vc=function(a,b){this.time=a;this.altitude=b};e.EclipseEvent=Vc;var Xc=function(a,b,c,d,f,g,h){this.kind=a;this.obscuration=b;this.partial_begin=c;this.total_begin=d;this.peak=f;this.total_end=g;this.partial_end=h};e.LocalSolarEclipseInfo=Xc;e.SearchLocalSolarEclipse=Wc;e.NextLocalSolarEclipse=function(a,b){a=v(a);a=a.AddDays(10);return Wc(a,b)};var $c=function(a,b,c,d){this.start=a;this.peak=b;this.finish=c;this.separation=
d};e.TransitInfo=$c;e.SearchTransit=Zc;e.NextTransit=function(a,b){b=v(b);b=b.AddDays(100);return Zc(a,b)};var ra;(function(a){a[a.Invalid=0]="Invalid";a[a.Ascending=1]="Ascending";a[a.Descending=-1]="Descending"})(ra=e.NodeEventKind||(e.NodeEventKind={}));var bd=function(a,b){this.kind=a;this.time=b};e.NodeEventInfo=bd;e.SearchMoonNode=ad;e.NextMoonNode=function(a){var b=a.time.AddDays(10);b=ad(b);switch(a.kind){case ra.Ascending:if(b.kind!==ra.Descending)throw"Internal error: previous node was ascending, but this node was: "+
b.kind;break;case ra.Descending:if(b.kind!==ra.Ascending)throw"Internal error: previous node was descending, but this node was: "+b.kind;break;default:throw"Previous node has an invalid node kind: "+a.kind;}return b};var Ub=function(a,b,c,d){this.ra=a;this.dec=b;this.spin=c;this.north=d};e.AxisInfo=Ub;e.RotationAxis=function(a,b){b=v(b);var c=b.tt,d=c/36525;switch(a){case m.Sun:a=286.13;var f=63.87;c=84.176+14.1844*c;break;case m.Mercury:a=281.0103-.0328*d;f=61.4155-.0049*d;c=329.5988+6.1385108*c+
.01067257*Math.sin(e.DEG2RAD*(174.7910857+4.092335*c))-.00112309*Math.sin(e.DEG2RAD*(349.5821714+8.18467*c))-1.104E-4*Math.sin(e.DEG2RAD*(164.3732571+12.277005*c))-2.539E-5*Math.sin(e.DEG2RAD*(339.1643429+16.36934*c))-5.71E-6*Math.sin(e.DEG2RAD*(153.9554286+20.461675*c));break;case m.Venus:a=272.76;f=67.16;c=160.2-1.4813688*c;break;case m.Earth:return a=xa([0,0,1],b,F.Into2000),a=wa(a,b,F.Into2000),a=new E(a[0],a[1],a[2],b),c=Mb(a),new Ub(c.ra,c.dec,190.41375788700253+360.9856122880876*b.ut,a);case m.Moon:var g=
e.DEG2RAD*(125.045-.0529921*c),h=e.DEG2RAD*(250.089-.1059842*c),l=e.DEG2RAD*(260.008+13.0120009*c),k=e.DEG2RAD*(176.625+13.3407154*c),n=e.DEG2RAD*(357.529+.9856003*c),p=e.DEG2RAD*(311.589+26.4057084*c),q=e.DEG2RAD*(134.963+13.064993*c),t=e.DEG2RAD*(276.617+.3287146*c),y=e.DEG2RAD*(34.226+1.7484877*c),x=e.DEG2RAD*(15.134-.1589763*c),z=e.DEG2RAD*(119.743+.0036096*c),ab=e.DEG2RAD*(239.961+.1643573*c),va=e.DEG2RAD*(25.053+12.9590088*c);a=269.9949+.0031*d-3.8787*Math.sin(g)-.1204*Math.sin(h)+.07*Math.sin(l)-
.0172*Math.sin(k)+.0072*Math.sin(p)-.0052*Math.sin(x)+.0043*Math.sin(va);f=66.5392+.013*d+1.5419*Math.cos(g)+.0239*Math.cos(h)-.0278*Math.cos(l)+.0068*Math.cos(k)-.0029*Math.cos(p)+9E-4*Math.cos(q)+8E-4*Math.cos(x)-9E-4*Math.cos(va);c=38.3213+(13.17635815-1.4E-12*c)*c+3.561*Math.sin(g)+.1208*Math.sin(h)-.0642*Math.sin(l)+.0158*Math.sin(k)+.0252*Math.sin(n)-.0066*Math.sin(p)-.0047*Math.sin(q)-.0046*Math.sin(t)+.0028*Math.sin(y)+.0052*Math.sin(x)+.004*Math.sin(z)+.0019*Math.sin(ab)-.0044*Math.sin(va);
break;case m.Mars:a=317.269202-.10927547*d+6.8E-5*Math.sin(e.DEG2RAD*(198.991226+19139.4819985*d))+2.38E-4*Math.sin(e.DEG2RAD*(226.292679+38280.8511281*d))+5.2E-5*Math.sin(e.DEG2RAD*(249.663391+57420.7251593*d))+9E-6*Math.sin(e.DEG2RAD*(266.18351+76560.636795*d))+.419057*Math.sin(e.DEG2RAD*(79.398797+.5042615*d));f=54.432516-.05827105*d+5.1E-5*Math.cos(e.DEG2RAD*(122.433576+19139.9407476*d))+1.41E-4*Math.cos(e.DEG2RAD*(43.058401+38280.8753272*d))+3.1E-5*Math.cos(e.DEG2RAD*(57.663379+57420.7517205*
d))+5E-6*Math.cos(e.DEG2RAD*(79.476401+76560.6495004*d))+1.591274*Math.cos(e.DEG2RAD*(166.325722+.5042615*d));c=176.049863+350.891982443297*c+1.45E-4*Math.sin(e.DEG2RAD*(129.071773+19140.0328244*d))+1.57E-4*Math.sin(e.DEG2RAD*(36.352167+38281.0473591*d))+4E-5*Math.sin(e.DEG2RAD*(56.668646+57420.929536*d))+1E-6*Math.sin(e.DEG2RAD*(67.364003+76560.2552215*d))+1E-6*Math.sin(e.DEG2RAD*(104.79268+95700.4387578*d))+.584542*Math.sin(e.DEG2RAD*(95.391654+.5042615*d));break;case m.Jupiter:f=e.DEG2RAD*(99.360714+
4850.4046*d);g=e.DEG2RAD*(175.895369+1191.9605*d);h=e.DEG2RAD*(300.323162+262.5475*d);l=e.DEG2RAD*(114.012305+6070.2476*d);k=e.DEG2RAD*(49.511251+64.3*d);a=268.056595-.006499*d+1.17E-4*Math.sin(f)+9.38E-4*Math.sin(g)+.001432*Math.sin(h)+3E-5*Math.sin(l)+.00215*Math.sin(k);f=64.495303+.002413*d+5E-5*Math.cos(f)+4.04E-4*Math.cos(g)+6.17E-4*Math.cos(h)-1.3E-5*Math.cos(l)+9.26E-4*Math.cos(k);c=284.95+870.536*c;break;case m.Saturn:a=40.589-.036*d;f=83.537-.004*d;c=38.9+810.7939024*c;break;case m.Uranus:a=
257.311;f=-15.175;c=203.81-501.1600928*c;break;case m.Neptune:d=e.DEG2RAD*(357.85+52.316*d);a=299.36+.7*Math.sin(d);f=43.46-.51*Math.cos(d);c=249.978+541.1397757*c-.48*Math.sin(d);break;case m.Pluto:a=132.993;f=-6.163;c=302.695+56.3625225*c;break;default:throw"Invalid body: "+a;}d=f*e.DEG2RAD;g=a*e.DEG2RAD;h=Math.cos(d);b=new E(h*Math.cos(g),h*Math.sin(g),Math.sin(d),b);return new Ub(a/15,f,c,b)};e.LagrangePoint=function(a,b,c,d){var f=v(b);b=C(c);var g=C(d);c===m.Earth&&d===m.Moon?(c=new I(0,0,0,
0,0,0,f),d=Ra(f)):(c=mb(c,f),d=mb(d,f));return cd(a,c,b,d,g)};e.LagrangePointFast=cd;var H=function(a,b,c){b=v(b);this.originBody=a;for(var d=$jscomp.makeIterator(c),f=d.next();!f.done;f=d.next())if(f.value.t.tt!==b.tt)throw"Inconsistent times in bodyStates";d=[];f=H.CalcSolarSystem(b);this.curr=new kd(b,f,d);a=this.InternalBodyState(a);c=$jscomp.makeIterator(c);for(f=c.next();!f.done;f=c.next()){var g=f.value;f=new B(g.x+a.r.x,g.y+a.r.y,g.z+a.r.z);g=new B(g.vx+a.v.x,g.vy+a.v.y,g.vz+a.v.z);var h=
B.zero();d.push(new Ua(b.tt,f,g,h))}this.CalcBodyAccelerations();this.prev=this.Duplicate()};H.prototype.Update=function(a){a=v(a);var b=a.tt-this.curr.time.tt;if(0===b)this.prev=this.Duplicate();else{this.Swap();this.curr.time=a;this.curr.gravitators=H.CalcSolarSystem(a);for(var c=0;c<this.curr.bodies.length;++c){var d=this.prev.bodies[c];this.curr.bodies[c].r=Ca(b,d.r,d.v,d.a)}this.CalcBodyAccelerations();for(c=0;c<this.curr.bodies.length;++c){d=this.prev.bodies[c];var f=this.curr.bodies[c],g=d.a.mean(f.a);
f.tt=a.tt;f.r=Ca(b,d.r,d.v,g);f.v=Eb(b,d.v,g)}this.CalcBodyAccelerations()}b=[];c=this.InternalBodyState(this.originBody);d=$jscomp.makeIterator(this.curr.bodies);for(f=d.next();!f.done;f=d.next())f=f.value,b.push(new I(f.r.x-c.r.x,f.r.y-c.r.y,f.r.z-c.r.z,f.v.x-c.v.x,f.v.y-c.v.y,f.v.z-c.v.z,a));return b};H.prototype.Swap=function(){var a=this.curr;this.curr=this.prev;this.prev=a};H.prototype.SolarSystemBodyState=function(a){a=this.InternalBodyState(a);var b=this.InternalBodyState(this.originBody);
return pa(a.sub(b),this.curr.time)};H.prototype.InternalBodyState=function(a){if(a===m.SSB)return new X(this.curr.time.tt,B.zero(),B.zero());var b=this.curr.gravitators[a];if(b)return b;throw"Invalid body: "+a;};H.CalcSolarSystem=function(a){var b={},c=new X(a.tt,B.zero(),B.zero());b[m.Mercury]=R(c,a.tt,m.Mercury,4.912547451450812E-11);b[m.Venus]=R(c,a.tt,m.Venus,7.243452486162703E-10);b[m.Earth]=R(c,a.tt,m.Earth,8.997011346712498E-10);b[m.Mars]=R(c,a.tt,m.Mars,9.549535105779258E-11);b[m.Jupiter]=
R(c,a.tt,m.Jupiter,2.825345909524226E-7);b[m.Saturn]=R(c,a.tt,m.Saturn,8.459715185680659E-8);b[m.Uranus]=R(c,a.tt,m.Uranus,1.292024916781969E-8);b[m.Neptune]=R(c,a.tt,m.Neptune,1.524358900784276E-8);for(var d in b)b[d].r.decr(c.r),b[d].v.decr(c.v);b[m.Sun]=new X(a.tt,c.r.neg(),c.v.neg());return b};H.prototype.CalcBodyAccelerations=function(){for(var a=$jscomp.makeIterator(this.curr.bodies),b=a.next();!b.done;b=a.next())b=b.value,b.a=B.zero(),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Sun].r,
2.959122082855911E-4),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Mercury].r,4.912547451450812E-11),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Venus].r,7.243452486162703E-10),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Earth].r,8.997011346712498E-10),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Mars].r,9.549535105779258E-11),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Jupiter].r,2.825345909524226E-7),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Saturn].r,8.459715185680659E-8),
H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Uranus].r,1.292024916781969E-8),H.AddAcceleration(b.a,b.r,this.curr.gravitators[m.Neptune].r,1.524358900784276E-8)};H.AddAcceleration=function(a,b,c,d){var f=c.x-b.x,g=c.y-b.y;b=c.z-b.z;c=f*f+g*g+b*b;d/=c*Math.sqrt(c);a.x+=f*d;a.y+=g*d;a.z+=b*d};H.prototype.Duplicate=function(){var a={};for(b in this.curr.gravitators)a[b]=this.curr.gravitators[b].clone();var b=[];for(var c=$jscomp.makeIterator(this.curr.bodies),d=c.next();!d.done;d=c.next())b.push(d.value.clone());
return new kd(this.curr.time,a,b)};$jscomp.global.Object.defineProperties(H.prototype,{OriginBody:{configurable:!0,enumerable:!0,get:function(){return this.originBody}},Time:{configurable:!0,enumerable:!0,get:function(){return this.curr.time}}});e.GravitySimulator=H;var kd=function(a,b,c){this.time=a;this.gravitators=b;this.bodies=c}},{}]},{},[1])(1)});

/* City coordinates adapted from GeoNames https://www.geonames.org/ (CC BY 4.0 https://creativecommons.org/licenses/by/4.0/). */
window.AbuData=[["山西省左权县",37.08,113.37,"Asia/Shanghai"],["河北省沧州市",38.3,116.84,"Asia/Shanghai"],["上海市 · Shanghai",31.2222,121.4581,"Asia/Shanghai"],["重庆市 · Chongqing",29.5603,106.5577,"Asia/Shanghai"],["成都市 · Chengdu",30.6667,104.0667,"Asia/Shanghai"],["北京市 · Beijing",39.9075,116.3972,"Asia/Shanghai"],["广州市 · Guangzhou",23.1167,113.25,"Asia/Shanghai"],["深圳市 · Shenzhen",22.5455,114.0683,"Asia/Shanghai"],["天津市 · Tianjin",39.1422,117.1767,"Asia/Shanghai"],["武汉市 · Wuhan",30.5833,114.2667,"Asia/Shanghai"],["西安市 · Xi’an",34.2583,108.9286,"Asia/Shanghai"],["杭州市 · Hangzhou",30.2936,120.1614,"Asia/Shanghai"],["哈尔滨市 · Harbin",45.75,126.65,"Asia/Shanghai"],["东莞市 · Dongguan",23.018,113.7487,"Asia/Shanghai"],["合肥市 · Hefei",31.8639,117.2808,"Asia/Shanghai"],["潍坊市 · Weifang",36.71,119.1019,"Asia/Shanghai"],["南京市 · Nanjing",32.0617,118.7778,"Asia/Shanghai"],["沈阳市 · Shenyang",41.7922,123.4328,"Asia/Shanghai"],["仏山市 · Foshan",23.0268,113.1315,"Asia/Shanghai"],["济南市 · Jinan",36.6683,116.9972,"Asia/Shanghai"],["台北市 · Taipei",25.0531,121.5264,"Asia/Taipei"],["大连市 · Dalian",38.9122,121.6022,"Asia/Shanghai"],["香港 · Hong Kong",22.2783,114.1747,"Asia/Hong_Kong"],["吴忠市 · Wuzhong",37.9867,106.201,"Asia/Shanghai"],["青岛市 · Qingdao",36.0649,120.3804,"Asia/Shanghai"],["烟台市 · Yantai",37.4765,121.4408,"Asia/Shanghai"],["苏州市 · Suzhou",31.3041,120.5954,"Asia/Shanghai"],["浦西 · Puxi",31.2441,121.4659,"Asia/Shanghai"],["郑州市 · Zhengzhou",34.7578,113.6486,"Asia/Shanghai"],["南宁市 · Nanning",22.8167,108.3167,"Asia/Shanghai"],["昆明市 · Kunming",25.0389,102.7183,"Asia/Shanghai"],["石家庄市 · Shijiazhuang",38.0414,114.4786,"Asia/Shanghai"],["長春市 · Changchun",43.88,125.3228,"Asia/Shanghai"],["浦东新区 · Pudong",31.24,121.5009,"Asia/Shanghai"],["太原市 · Taiyuan",37.8694,112.5603,"Asia/Shanghai"],["淄博市 · Zibo",36.7906,118.0633,"Asia/Shanghai"],["厦门市 · Xiamen",24.4798,118.0819,"Asia/Shanghai"],["扬州市 · Yangzhou",32.3972,119.4358,"Asia/Shanghai"],["淮安市 · Huai'an",33.5886,119.0192,"Asia/Shanghai"],["貴陽市 · Guiyang",26.5833,106.7167,"Asia/Shanghai"],["Bao'an",22.5521,113.8829,"Asia/Shanghai"],["无锡市 · Wuxi",31.5689,120.2886,"Asia/Shanghai"],["兰州市 · Lanzhou",36.057,103.8399,"Asia/Shanghai"],["福州市 · Fuzhou",26.0614,119.3061,"Asia/Shanghai"],["乌鲁木齐市 · Ürümqi",43.801,87.6005,"Asia/Urumqi"],["新北市 · New Taipei City",25.062,121.457,"Asia/Taipei"],["新界 · New Territories",22.4244,114.111,"Asia/Hong_Kong"],["枣庄市 · Zaozhuang",34.8647,117.5542,"Asia/Shanghai"],["中山市 · Zhongshan",22.5231,113.3791,"Asia/Shanghai"],["汕头市 · Shantou",23.3549,116.6788,"Asia/Shanghai"],["宁波市 · Ningbo",29.8782,121.5494,"Asia/Shanghai"],["南海 · Nanhai",23.0219,113.1428,"Asia/Shanghai"],["浦阳 · Puyang",29.4568,119.8887,"Asia/Shanghai"],["十堰市 · Shiyan",32.6475,110.7781,"Asia/Shanghai"],["呼和浩特市 · Hohhot",40.8106,111.6522,"Asia/Shanghai"],["唐山市 · Tangshan",39.6438,118.1832,"Asia/Shanghai"],["吕梁市 · Lüliang",37.5192,111.1444,"Asia/Shanghai"],["鞍山市 · Anshan",41.1236,122.99,"Asia/Shanghai"],["常州市 · Changzhou",31.7736,119.954,"Asia/Shanghai"],["大同市 · Datong",40.0936,113.2914,"Asia/Shanghai"],["長沙市 · Changsha",28.1987,112.9709,"Asia/Shanghai"],["淮南市 · Huainan",32.6264,116.9969,"Asia/Shanghai"],["海口市 · Haikou",20.0342,110.3465,"Asia/Shanghai"],["恵州市 · Huizhou",23.1115,114.4152,"Asia/Shanghai"],["銀川市 · Yinchuan",38.4681,106.2731,"Asia/Shanghai"],["台中市 · Taichung",24.1469,120.6839,"Asia/Taipei"],["包头市 · Baotou",40.6516,109.8439,"Asia/Shanghai"],["临沂市 · Linyi",35.0631,118.3428,"Asia/Shanghai"],["保定市 · Baoding",38.8729,115.4625,"Asia/Shanghai"],["高雄市 · Kaohsiung",22.6163,120.3133,"Asia/Taipei"],["闵行 · Minhang",31.1088,121.3747,"Asia/Shanghai"],["巴中市 · Bazhong",31.8694,106.7443,"Asia/Shanghai"],["温州市 · Wenzhou",27.9994,120.6668,"Asia/Shanghai"],["云浮市 · Yunfu",22.9279,112.0381,"Asia/Shanghai"],["西宁市 · Xining",36.6255,101.7574,"Asia/Shanghai"],["南昌市 · Nanchang",28.684,115.8531,"Asia/Shanghai"],["紹興市 · Shaoxing",30.0024,120.5786,"Asia/Shanghai"],["南通市 · Nantong",32.0303,120.8747,"Asia/Shanghai"],["宝山 · Baoshan",31.4084,121.4896,"Asia/Shanghai"],["九龍 · Kowloon",22.3167,114.1833,"Asia/Hong_Kong"],["珠海市 · Zhuhai",22.2769,113.5678,"Asia/Shanghai"],["鄂尔多斯市 · Ordos",39.6086,109.7816,"Asia/Shanghai"],["庆阳市 · Qingyang",35.7098,107.6445,"Asia/Shanghai"],["崑山市 · Kunshan",31.3776,120.9543,"Asia/Shanghai"],["遵义市 · Zunyi",27.6867,106.9072,"Asia/Shanghai"],["连云港市 · Lianyungang",34.5984,119.2156,"Asia/Shanghai"],["普宁市 · Puning",23.3107,116.1687,"Asia/Shanghai"],["赣州市 · Ganzhou",25.8466,114.9326,"Asia/Shanghai"],["松江区 · Songjiang",31.0344,121.2233,"Asia/Shanghai"],["掲陽市 · Jieyang",23.5418,116.3658,"Asia/Shanghai"],["吉林市 · Jilin",43.8465,126.5608,"Asia/Shanghai"],["嘉定镇 · Jiading",31.3858,121.2446,"Asia/Shanghai"],["商丘市 · Shangqiu",34.4143,115.6561,"Asia/Shanghai"],["南充市 · Nanchong",30.7951,106.0847,"Asia/Shanghai"],["台南市 · Tainan",22.9926,120.2051,"Asia/Taipei"],["南阳市 · Nanyang",33.0052,112.5466,"Asia/Shanghai"],["江門市 · Jiangmen",22.5833,113.0833,"Asia/Shanghai"],["江阴市 · Jiangyin",31.911,120.263,"Asia/Shanghai"],["阜阳市 · Fuyang",32.9,115.8167,"Asia/Shanghai"],["巴彦淖尔市 · Bayan Nur",40.7414,107.386,"Asia/Shanghai"],["滕县 · Chengtangcun",35.0836,117.1907,"Asia/Shanghai"],["潮州市 · Chaozhou",23.654,116.6226,"Asia/Shanghai"],["清远市 · Qingyuan",23.7,113.0333,"Asia/Shanghai"],["泰安市 · Tai’an",36.1853,117.12,"Asia/Shanghai"],["Changshu",31.6461,120.7422,"Asia/Shanghai"],["宿州市 · Suzhou",33.6361,116.9789,"Asia/Shanghai"],["六安市 · Lu’an",31.7356,116.5169,"Asia/Shanghai"],["塩城市 · Yancheng",33.3575,120.1573,"Asia/Shanghai"],["泰州市 · Taizhou",32.4907,119.9081,"Asia/Shanghai"],["大庆市 · Daqing",46.5833,125.0,"Asia/Shanghai"],["芜湖市 · Wuhu",31.3526,118.4295,"Asia/Shanghai"],["达州市 · Dazhou",31.2106,107.4631,"Asia/Shanghai"],["桂林市 · Guilin",25.2802,110.2964,"Asia/Shanghai"],["肇庆市 · Zhaoqing",23.0489,112.4609,"Asia/Shanghai"],["綿陽市 · Mianyang",31.4678,104.6817,"Asia/Shanghai"],["万州区 · Wanzhou",30.7645,108.3959,"Asia/Shanghai"],["莆田市 · Putian",25.4394,119.0103,"Asia/Shanghai"],["錦州市 · Jinzhou",41.1078,121.1417,"Asia/Shanghai"],["台州市 · Taizhou",28.6627,121.4331,"Asia/Shanghai"],["义乌 · Yiwu",29.3151,120.0768,"Asia/Shanghai"],["泉州市 · Quanzhou",24.9139,118.5858,"Asia/Shanghai"],["金华市 · Jinhua",29.1068,119.6442,"Asia/Shanghai"],["慈溪市 · Cixi",30.1764,121.2457,"Asia/Shanghai"],["常徳市 · Changde",29.0321,111.6984,"Asia/Shanghai"],["开封市 · Kaifeng",34.7986,114.3074,"Asia/Shanghai"],["宝鶏市 · Baoji",34.3678,107.237,"Asia/Shanghai"],["宿迁市 · Suqian",33.9492,118.2958,"Asia/Shanghai"],["柳州市 · Liuzhou",24.324,109.407,"Asia/Shanghai"],["张家港市 · Zhangjiagang",31.865,120.5389,"Asia/Shanghai"],["信阳市 · Xinyang",32.1228,114.0656,"Asia/Shanghai"],["晋江市 · Jinjiang",24.8198,118.5742,"Asia/Shanghai"],["亳州市 · Bozhou",33.8772,115.7703,"Asia/Shanghai"],["曲靖市 · Qujing",25.4833,103.7833,"Asia/Shanghai"],["湛江市 · Zhanjiang",21.2339,110.3875,"Asia/Shanghai"],["抚顺市 · Fushun",41.8867,123.9436,"Asia/Shanghai"],["洛阳市 · Luoyang",34.6735,112.4368,"Asia/Shanghai"],["浏阳市 · Guankou",28.1586,113.6271,"Asia/Shanghai"],["廉江 · Lianjiang",21.6467,110.2817,"Asia/Shanghai"],["邯郸市 · Handan",36.61,114.4876,"Asia/Shanghai"],["宜昌市 · Yichang",30.7144,111.2847,"Asia/Shanghai"],["菏泽市 · Heze",35.2393,115.4736,"Asia/Shanghai"],["六盘水市 · Liupanshui",26.5944,104.8333,"Asia/Shanghai"],["茂名市 · Maoming",21.6663,110.9136,"Asia/Shanghai"],["欽州市 · Qinzhou",21.9825,108.6506,"Asia/Shanghai"],["漯河市 · Luohe",33.5742,114.0326,"Asia/Shanghai"],["樊城镇 · Xiangyang",32.0422,112.1448,"Asia/Shanghai"],["阳江市 · Yangjiang",21.8556,111.9627,"Asia/Shanghai"],["宜兴市 · Yixing",31.3606,119.8202,"Asia/Shanghai"],["青浦 · Qingpu",31.1539,121.1141,"Asia/Shanghai"],["许昌市 · Xuchang",34.0319,113.863,"Asia/Shanghai"],["自貢市 · Zigong",29.3416,104.7769,"Asia/Shanghai"],["徐州市 · Xuzhou",34.2044,117.2839,"Asia/Shanghai"],["内江市 · Neijiang",29.5835,105.0622,"Asia/Shanghai"],["益阳市 · Heshan",28.5694,112.3473,"Asia/Shanghai"],["济宁市 · Jining",35.405,116.5814,"Asia/Shanghai"],["普陀 · Putuo",31.251,121.3897,"Asia/Shanghai"],["聊城市 · Liaocheng",36.4506,116.0025,"Asia/Shanghai"],["晋中市 · Jinzhong",37.684,112.7547,"Asia/Shanghai"],["長治市 · Changzhi",36.1839,113.1053,"Asia/Shanghai"],["天水市 · Tianshui",34.5795,105.7424,"Asia/Shanghai"],["杨浦 · Yangpu",31.2619,121.519,"Asia/Shanghai"],["渭南市 · Weinan",34.5035,109.5089,"Asia/Shanghai"],["香港岛 · Hong Kong Island",22.263,114.1842,"Asia/Hong_Kong"],["嘉兴市 · Jiaxing",30.7522,120.75,"Asia/Shanghai"],["中卫市 · Zhongwei",37.5113,105.1907,"Asia/Shanghai"],["盘锦市 · Panjin",41.121,122.0739,"Asia/Shanghai"],["九江市 · Jiujiang",29.7048,116.0021,"Asia/Shanghai"],["安阳市 · Anyang",36.096,114.3828,"Asia/Shanghai"],["Luohu District",22.5472,114.1315,"Asia/Shanghai"],["奉贤区 · Fengxiang",30.8584,121.4678,"Asia/Shanghai"],["毕节市 · Bijie",27.3019,105.2863,"Asia/Shanghai"],["株洲市 · Zhuzhou",27.8333,113.15,"Asia/Shanghai"],["瑞安 · Rui’an",27.7761,120.6586,"Asia/Shanghai"],["邹城市 · Zoucheng",35.4006,116.9656,"Asia/Shanghai"],["上饒市 · Shangrao",28.4518,117.9429,"Asia/Shanghai"],["淮北市 · Huaibei",33.9744,116.7917,"Asia/Shanghai"],["徐汇 · Xuhui",31.1959,121.4471,"Asia/Shanghai"],["眉山市 · Meishan",30.0439,103.837,"Asia/Shanghai"],["Wuchang",30.5431,114.3007,"Asia/Shanghai"],["抚州市 · Fuzhou",27.96,116.3333,"Asia/Shanghai"],["貴港市 · Guigang",23.116,109.5947,"Asia/Shanghai"],["衡阳市 · Hengyang",26.8895,112.6189,"Asia/Shanghai"],["玉林市 · Yulin",22.6305,110.1469,"Asia/Shanghai"],["荆州市 · Jingzhou",30.3503,112.1903,"Asia/Shanghai"],["新乡市 · Xinxiang",35.1903,113.8015,"Asia/Shanghai"],["宜春市 · Yichun",27.8333,114.4,"Asia/Shanghai"],["咸阳市 · Xianyang",34.3378,108.7026,"Asia/Shanghai"],["三亚市 · Sanya",18.2543,109.5095,"Asia/Shanghai"],["韶关市 · Shaoguan",24.8,113.5833,"Asia/Shanghai"],["竜岩市 · Longyan",25.0749,117.0178,"Asia/Shanghai"],["永州市 · Yongzhou",26.4239,111.6131,"Asia/Shanghai"],["吴兴区 · Huzhou",30.8703,120.0933,"Asia/Shanghai"],["信宜 · Xinyi",22.373,110.9475,"Asia/Shanghai"],["武威市 · Wuwei",37.9267,102.632,"Asia/Shanghai"],["Yishui",35.7847,118.6281,"Asia/Shanghai"],["汉中市 · Hanzhong",33.0751,107.0221,"Asia/Shanghai"],["賀州市 · Hezhou",24.4036,111.5667,"Asia/Shanghai"],["Zhu Cheng City",35.995,119.4026,"Asia/Shanghai"],["东营市 · Dongying",37.4627,118.4917,"Asia/Shanghai"],["泸州市 · Luzhou",28.8903,105.4257,"Asia/Shanghai"],["梅州市 · Meizhou",24.2886,116.1177,"Asia/Shanghai"],["岳阳市 · Yueyang",29.3745,113.0948,"Asia/Shanghai"],["莱芜市 · Laiwu",36.1928,117.6569,"Asia/Shanghai"],["平頂山市 · Pingdingshan",33.7309,113.3155,"Asia/Shanghai"],["蚌埠市 · Bengbu",32.9408,117.3608,"Asia/Shanghai"],["Feicheng",36.2486,116.7658,"Asia/Shanghai"],["三河 · Sanhe",39.9805,117.0689,"Asia/Shanghai"],["Guli",28.8816,120.0331,"Asia/Shanghai"],["湘潭市 · Xiangtan",27.85,112.9,"Asia/Shanghai"],["临汾市 · Linfen",36.0889,111.5189,"Asia/Shanghai"],["Victoria",22.2875,114.1442,"Asia/Hong_Kong"],["镇江市 · Zhenjiang",32.2109,119.4551,"Asia/Shanghai"],["葫芦岛市 · Huludao",40.7524,120.8355,"Asia/Shanghai"],["静安 · Jing’an",31.22,121.4158,"Asia/Shanghai"],["保山市 · Baoshan",25.1163,99.1637,"Asia/Shanghai"],["承徳市 · Chengde",40.9519,117.9588,"Asia/Shanghai"],["来宾市 · Laibin",23.7474,109.2222,"Asia/Shanghai"],["孝感市 · Xiaogan",30.9269,113.9222,"Asia/Shanghai"],["吴川 · Wuchuan",21.4571,110.7659,"Asia/Shanghai"],["资阳市 · Ziyang",30.1211,104.6481,"Asia/Shanghai"],["衢州市 · Quzhou",28.9594,118.8686,"Asia/Shanghai"],["萍乡市 · Pingxiang",27.6167,113.8535,"Asia/Shanghai"],["定海区 · Zhoushan",29.9887,122.2049,"Asia/Shanghai"],["齊齊哈爾市 · Qiqihar",47.3392,123.9615,"Asia/Shanghai"],["Laiyang",36.9758,120.7136,"Asia/Shanghai"],["Daye",30.0833,114.95,"Asia/Shanghai"],["安康市 · Ankang",32.68,109.0172,"Asia/Shanghai"],["廊坊市 · Langfang",39.5208,116.7147,"Asia/Shanghai"],["拉萨市 · Lhasa",29.65,91.1,"Asia/Shanghai"],["焦作市 · Jiaozuo",35.2392,113.2391,"Asia/Shanghai"],["本渓市 · Benxi",41.2886,123.765,"Asia/Shanghai"],["万州 · Wanxian",30.816,108.3741,"Asia/Shanghai"],["广安市 · Guang’an",30.4741,106.637,"Asia/Shanghai"],["威海市 · Weihai",37.5091,122.1136,"Asia/Shanghai"],["闸北 · Zhabei",31.2586,121.4597,"Asia/Shanghai"],["上虞区 · Shangyu",30.0156,120.8711,"Asia/Shanghai"],["新余市 · Xinyu",27.8043,114.9334,"Asia/Shanghai"],["宜宾市 · Yibin",28.7593,104.6399,"Asia/Shanghai"],["城厢镇 · Taicang",31.4478,121.0939,"Asia/Shanghai"],["椒江村 · Jiaojiang",28.6984,121.4733,"Asia/Shanghai"],["金山区 · Jinshan",30.8356,121.2937,"Asia/Shanghai"],["郴州 · Chenzhou",25.8,113.0333,"Asia/Shanghai"],["丹东市 · Dandong",40.1292,124.3947,"Asia/Shanghai"],["安庆市 · Anqing",30.5136,117.0472,"Asia/Shanghai"],["邢台市 · Xingtai",37.0622,114.4927,"Asia/Shanghai"],["昭通市 · Zhaotong",27.3167,103.7167,"Asia/Shanghai"],["Hondlon",40.6483,109.7939,"Asia/Shanghai"],["攀枝花市 · Panzhihua",26.5851,101.7128,"Asia/Shanghai"],["滁州市 · Chuzhou",32.3219,118.2978,"Asia/Shanghai"],["宣城市 · Xuancheng",30.9525,118.7553,"Asia/Shanghai"],["安順市 · Anshun",26.25,105.9333,"Asia/Shanghai"],["梧州市 · Wuzhou",23.4805,111.2885,"Asia/Shanghai"],["秦皇岛市 · Qinhuangdao",39.941,119.5894,"Asia/Shanghai"],["邵阳市 · Shaoyang",27.2382,111.4621,"Asia/Shanghai"],["鶴崗市 · Hegang",47.3473,130.2903,"Asia/Shanghai"],["Zhuanghe",39.7008,122.9911,"Asia/Shanghai"],["马鞍山市 · Ma’anshan",31.6858,118.5101,"Asia/Shanghai"],["石嘴山市 · Shizuishan",38.9808,106.3892,"Asia/Shanghai"],["徳陽市 · Deyang",31.1302,104.382,"Asia/Shanghai"],["阳泉市 · Yangquan",37.8575,113.5633,"Asia/Shanghai"],["驻马店市 · Zhumadian",32.9838,114.0259,"Asia/Shanghai"],["Qingshan",40.6631,109.8817,"Asia/Shanghai"],["Changzhi",35.2089,111.7386,"Asia/Shanghai"],["长宁 · Changning",31.2174,121.421,"Asia/Shanghai"],["张家口市 · Zhangjiakou",40.7834,114.8714,"Asia/Shanghai"],["阜新市 · Fuxin",42.0156,121.6589,"Asia/Shanghai"],["开平 · Changsha",22.3812,112.6849,"Asia/Shanghai"],["黃石市 · Huangshi",30.2471,115.0481,"Asia/Shanghai"],["辽阳市 · Liaoyang",41.2719,123.1731,"Asia/Shanghai"],["虹口 · Hongkou",31.25,121.4892,"Asia/Shanghai"],["百色市 · Baise",23.8901,106.6268,"Asia/Shanghai"],["浜州市 · Binzhou",37.3667,118.0167,"Asia/Shanghai"],["运城市 · Yuncheng",35.0231,110.9928,"Asia/Shanghai"],["徳州市 · Dezhou",37.4466,116.3671,"Asia/Shanghai"],["三門峡市 · Sanmenxia",34.7808,111.1929,"Asia/Shanghai"],["鄂州市 · E’zhou",30.3961,114.8865,"Asia/Shanghai"],["牡丹江市 · Mudanjiang",44.548,129.6259,"Asia/Shanghai"],["乐山市 · Leshan",29.5623,103.7639,"Asia/Shanghai"],["日照市 · Rizhao",35.4141,119.5291,"Asia/Shanghai"],["Dongcun",36.7767,121.1597,"Asia/Shanghai"],["遂宁市 · Suining",30.508,105.5733,"Asia/Shanghai"],["黄浦 · Huangpu",31.2378,121.4781,"Asia/Shanghai"],["濮阳市 · Puyang",35.7564,115.0436,"Asia/Shanghai"],["澳門 · Macau",22.2006,113.5461,"Asia/Macau"],["Lingyuan",41.24,119.4011,"Asia/Shanghai"],["Mingguang",32.7802,117.9638,"Asia/Shanghai"],["崇明区 · Chongming",31.6185,121.6962,"Asia/Shanghai"],["鶴壁市 · Hebi",35.7323,114.2862,"Asia/Shanghai"],["荆门市 · Jingmen",31.0336,112.2047,"Asia/Shanghai"],["四平市 · Siping",43.1614,124.3778,"Asia/Shanghai"],["Panshan",41.1881,122.0494,"Asia/Shanghai"],["Jiaozhou",36.2839,120.0033,"Asia/Shanghai"],["随州市 · Suizhou",31.7111,113.3631,"Asia/Shanghai"],["池州市 · Chizhou",30.6613,117.4778,"Asia/Shanghai"],["雅安市 · Ya'an",29.9852,102.999,"Asia/Shanghai"],["三明市 · Sanming",26.2486,117.6186,"Asia/Shanghai"],["双鴨山市 · Shuangyashan",46.6769,131.1327,"Asia/Shanghai"],["栾城 · Luancheng",37.8845,114.6463,"Asia/Shanghai"],["蒙自市 · Mengzi",23.3678,103.3821,"Asia/Shanghai"],["営口市 · Yingkou",40.6647,122.2318,"Asia/Shanghai"],["漳州市 · Zhangzhou",24.5133,117.6556,"Asia/Shanghai"],["东胜区 · Dongsheng",39.8161,109.9776,"Asia/Shanghai"],["石河子市 · Shihezi",44.3023,86.0369,"Asia/Urumqi"],["Xinmin",41.9908,122.8253,"Asia/Shanghai"],["文城镇 · Wenchang",19.5516,110.8028,"Asia/Shanghai"],["楚雄市 · Chuxiong",25.0364,101.5456,"Asia/Shanghai"],["怀化市 · Huaihua",27.5634,110.004,"Asia/Shanghai"],["Sishui",35.6489,117.2758,"Asia/Shanghai"],["板橋 · Banqiao",25.0143,121.4672,"Asia/Taipei"],["乌兰察布市 · Ulanqab",40.993,113.133,"Asia/Shanghai"],["佳木斯市 · Jiamusi",46.7971,130.3112,"Asia/Shanghai"],["库尔勒市 · Korla",41.7606,86.1523,"Asia/Urumqi"],["万宁市 · Wanning",18.7993,110.3841,"Asia/Shanghai"],["忻州市 · Xinzhou",38.4092,112.7333,"Asia/Shanghai"],["平度 · Pingdu",36.7844,119.9464,"Asia/Shanghai"],["吉安市 · Ji’an",27.1172,114.9793,"Asia/Shanghai"],["阿克苏市 · Aqsu",41.1842,80.2792,"Asia/Urumqi"],["塘沽 · Tanggu",39.0211,117.6469,"Asia/Shanghai"],["商洛市 · Shangluo",33.8667,109.9306,"Asia/Shanghai"],["琼海市 · Qionghai",19.2425,110.4642,"Asia/Shanghai"],["原平市 · Yuanping",38.7153,112.7575,"Asia/Shanghai"],["北海市 · Beihai",21.4835,109.1155,"Asia/Shanghai"],["衡水市 · Hengshui",37.7391,115.6835,"Asia/Shanghai"],["大兴安岭 · Daxing’anling",52.3338,124.7124,"Asia/Shanghai"],["广元市 · Guangyuan",32.442,105.823,"Asia/Shanghai"],["咸宁市 · Xianning",29.8435,114.322,"Asia/Shanghai"],["通化市 · Tonghua",41.7197,125.9264,"Asia/Shanghai"],["Mianzhu, Deyang, Sichuan",31.3379,104.2206,"Asia/Shanghai"],["巴南区 · Banan",29.3786,106.54,"Asia/Shanghai"],["屯門 · Tuen Mun",22.3917,113.9716,"Asia/Hong_Kong"],["张掖市 · Zhangye",38.9342,100.4517,"Asia/Shanghai"],["喀什市 · Kashgar",39.4672,75.9868,"Asia/Urumqi"],["周口市 · Zhoukou",33.6147,114.6499,"Asia/Shanghai"],["平凉市 · Pingliang",35.5392,106.6861,"Asia/Shanghai"],["密州 · Zhucheng",35.9947,119.3975,"Asia/Shanghai"],["娄底市 · Loudi",27.7344,111.9944,"Asia/Shanghai"],["沙田 · Sha Tin",22.3833,114.1833,"Asia/Hong_Kong"],["Hecun",36.5333,114.1111,"Asia/Shanghai"],["汕尾市 · Shanwei",22.782,115.3475,"Asia/Shanghai"],["碱水 · Jianshui",24.2774,101.224,"Asia/Shanghai"],["东河 · Donghe",40.5661,110.0197,"Asia/Shanghai"],["西昌市 · Xichang",27.8964,102.2634,"Asia/Shanghai"],["Zaoyang",32.1272,112.7542,"Asia/Shanghai"],["Chéngguān Qū",29.6384,91.0444,"Asia/Shanghai"],["晋城市 · Jincheng",35.5022,112.8328,"Asia/Shanghai"],["Hongjiang",27.11,109.9956,"Asia/Shanghai"],["桃園市 · Taoyuan",24.9937,121.297,"Asia/Taipei"],["延安市 · Yan’an",36.5989,109.4917,"Asia/Shanghai"],["Shouguang",36.88,118.7375,"Asia/Shanghai"],["景德镇 · Jingdezhen",29.2947,117.2079,"Asia/Shanghai"],["南平市 · Nanping",26.645,118.1736,"Asia/Shanghai"],["辽源市 · Longshan",42.8854,125.1367,"Asia/Shanghai"],["河源市 · Heyuan",23.7333,114.6833,"Asia/Shanghai"],["屯溪区 · Huangshan",29.7114,118.3125,"Asia/Shanghai"],["鉄嶺市 · Tieling",42.2931,123.8414,"Asia/Shanghai"],["Wafangdian",39.6183,122.0081,"Asia/Shanghai"],["新竹市 · Hsinchu",24.8036,120.9686,"Asia/Taipei"],["永济市 · Yongji",34.8661,110.4403,"Asia/Shanghai"],["丽水县 · Lishui",28.4604,119.9103,"Asia/Shanghai"],["文山市 · Wenshan City",23.3631,104.2505,"Asia/Shanghai"],["东方市 · Basuo",19.1027,108.6656,"Asia/Shanghai"],["张家界市 · Zhangjiajie",29.1294,110.4783,"Asia/Shanghai"],["Zhongxiang",31.1661,112.5831,"Asia/Shanghai"],["Bei’an",48.2667,126.6,"Asia/Shanghai"],["麻城市 · Macheng",31.1801,115.0221,"Asia/Shanghai"],["朔州市 · Shuozhou",39.3158,112.4225,"Asia/Shanghai"],["深水埗區 · Sham Shui Po",22.3302,114.1595,"Asia/Hong_Kong"],["宁德市 · Ningde",26.6617,119.5228,"Asia/Shanghai"],["酒泉市 · Jiuquan",39.7432,98.5174,"Asia/Shanghai"],["黃大仙 · Wong Tai Sin",22.35,114.1833,"Asia/Hong_Kong"],["定西市 · Dingxi",35.5709,104.623,"Asia/Shanghai"],["九龍城 · Kowloon City",22.3305,114.1922,"Asia/Hong_Kong"],["铜川市 · Tongchuan",34.8988,108.9506,"Asia/Shanghai"],["Tseung Kwan O",22.3279,114.2499,"Asia/Hong_Kong"],["固原市 · Guyuan",36.0067,106.2808,"Asia/Shanghai"],["朝阳市 · Chaoyang",41.5703,120.4586,"Asia/Shanghai"],["和田市 · Gujangbagh",37.1093,79.9343,"Asia/Urumqi"],["Zhijiang",30.4214,111.7533,"Asia/Shanghai"],["鶏西市 · Jixi",45.2932,130.9622,"Asia/Shanghai"],["铜陵市 · Tongling",30.95,117.7833,"Asia/Shanghai"],["Hancheng",35.4603,110.4292,"Asia/Shanghai"],["Liaozhong",41.5061,122.7242,"Asia/Shanghai"],["Gaomi",36.3833,119.7528,"Asia/Shanghai"],["崇左 · Chongzuo",22.3816,107.3683,"Asia/Shanghai"],["坦洲镇 · Tanzhou",22.255,113.4669,"Asia/Shanghai"],["合川 · Hechuan",29.9923,106.2646,"Asia/Shanghai"],["Yanzhou",35.5528,116.8286,"Asia/Shanghai"],["Pingyin",36.2831,116.4453,"Asia/Shanghai"],["张家口市宣化区 · Xuanhua",40.6121,115.0646,"Asia/Shanghai"],["大场 · Dachang",31.3087,121.4153,"Asia/Shanghai"],["Fenghuang",27.9356,109.5996,"Asia/Shanghai"],["黄冈市 · Huanggang",30.4514,114.8704,"Asia/Shanghai"],["Anqiu",36.4342,119.1925,"Asia/Shanghai"],["基隆市 · Keelung",25.1309,121.7409,"Asia/Taipei"],["冀州 · Jizhou",37.5505,115.5687,"Asia/Shanghai"],["Nanqiao",30.9161,121.4494,"Asia/Shanghai"],["霍城县 · Huocheng",44.053,80.8717,"Asia/Shanghai"],["鳳山区 · Fengshan",22.6266,120.3613,"Asia/Taipei"],["山南市 · Lhoka",29.243,91.7724,"Asia/Shanghai"],["Pengze",29.8988,116.5457,"Asia/Shanghai"],["锡林浩特市 · Xilinhot",43.9389,116.0702,"Asia/Shanghai"],["呼伦贝尔市 · Hulunbuir",49.2114,119.7558,"Asia/Shanghai"],["红山区 · Chifeng",42.2683,118.9636,"Asia/Shanghai"],["Yunlong",34.2528,117.2517,"Asia/Shanghai"],["七台河市 · Qitaihe",45.768,130.9953,"Asia/Shanghai"],["Pizhou",34.3114,117.9503,"Asia/Shanghai"],["Laixi",36.8592,120.5269,"Asia/Shanghai"],["葵涌 · Kwai Chung",22.3683,114.1388,"Asia/Hong_Kong"],["河池市 · Hechi",24.6928,108.0838,"Asia/Shanghai"],["徐州市 · Tongshan",34.1805,117.1571,"Asia/Shanghai"],["延吉市 · Yanji",42.8882,129.5024,"Asia/Shanghai"],["临沧市 · Lincang",23.8797,100.0945,"Asia/Shanghai"],["兴义市 · Xingyi",25.0962,104.9064,"Asia/Shanghai"],["潭头 · Tantou",22.7512,113.835,"Asia/Shanghai"],["荃灣 · Tsuen Wan",22.3714,114.1133,"Asia/Hong_Kong"],["白城市 · Baicheng",45.6175,122.833,"Asia/Shanghai"],["连山区 · Lianshan",40.7643,120.8533,"Asia/Shanghai"],["奎聚 · Changyi",36.8536,119.3908,"Asia/Shanghai"],["新安镇 · Xinyi",34.3842,118.3462,"Asia/Shanghai"],["阳朔 · Yangshuo",24.7808,110.4897,"Asia/Shanghai"],["Linqu",36.5156,118.5397,"Asia/Shanghai"],["思茅镇 · Pu'er",22.7886,100.9748,"Asia/Shanghai"],["白銀市 · Baiyin",36.547,104.1702,"Asia/Shanghai"],["高州 · Gaozhou",21.9197,110.8568,"Asia/Shanghai"],["秀英 · Xiuying",20.0007,110.2936,"Asia/Shanghai"],["天水囲 · Tin Shui Wai",22.4568,114.0023,"Asia/Hong_Kong"],["花洲 · Dengzhou",32.6827,112.0887,"Asia/Shanghai"],["阿图什市 · Artux",39.7084,76.1797,"Asia/Shanghai"],["七宝 · Qibao",31.1527,121.3569,"Asia/Shanghai"],["新源县 · Xinyuan",43.4265,83.2496,"Asia/Urumqi"],["恩施市 · Enshi",30.3,109.4833,"Asia/Shanghai"],["唐河 · Tanghe",32.6855,112.8323,"Asia/Shanghai"],["防城港市 · Fangchenggang",21.7694,108.3566,"Asia/Shanghai"],["凯里市 · Kaili",26.5858,107.9797,"Asia/Shanghai"],["内湖区 · Neihu",25.0815,121.5881,"Asia/Taipei"],["兴城镇 · Xingning",24.1483,115.7227,"Asia/Shanghai"],["临夏城关镇 · Linxia Chengguanzhen",35.6003,103.2064,"Asia/Shanghai"],["大埔 · Tai Po",22.4501,114.1688,"Asia/Hong_Kong"],["吐鲁番县 · Turpan",42.9477,89.1789,"Asia/Urumqi"],["Longling County",24.5866,98.6893,"Asia/Shanghai"],["伊宁市 · Ghulja",43.9151,81.3215,"Asia/Urumqi"],["涪陵 · Fuling",29.71,107.3939,"Asia/Shanghai"],["城中 · Chengzhong",30.9445,113.5528,"Asia/Shanghai"],["乌兰浩特市 · Ulanhot",46.0833,122.0833,"Asia/Shanghai"],["Hulan Ergi",47.2042,123.6333,"Asia/Shanghai"],["东海 · Donghai",22.9459,115.642,"Asia/Shanghai"],["Huayin",34.5653,110.0664,"Asia/Shanghai"],["Fanling",22.4949,114.1395,"Asia/Hong_Kong"],["嘉義市 · Chiayi City",23.4792,120.4489,"Asia/Taipei"],["东台市 · Dongtai",32.8523,120.3095,"Asia/Shanghai"],["克拉玛依市 · Karamay",45.5847,84.8872,"Asia/Urumqi"],["科尔沁区 · Tongliao",43.6125,122.2653,"Asia/Shanghai"],["海东市 · Nianbo",36.48,102.4164,"Asia/Shanghai"],["Changle",36.7058,118.8275,"Asia/Shanghai"],["平地泉镇 · Jining",41.0275,113.1058,"Asia/Shanghai"],["石岐 · Shiqi",22.5168,113.3852,"Asia/Shanghai"],["Rugao",32.3704,120.5765,"Asia/Shanghai"],["Suicheng",33.8963,117.9331,"Asia/Shanghai"],["儋州市 · Nada",19.5213,109.579,"Asia/Shanghai"],["綏化市 · Suihua",46.6481,126.9666,"Asia/Shanghai"],["北碚 · Beibei",29.8274,106.4364,"Asia/Shanghai"],["石碣镇 · Shijie",23.0955,113.7919,"Asia/Shanghai"],["哈密地区 · Hami",42.8339,93.506,"Asia/Urumqi"],["济源县 · Jiyuan",35.0891,112.5881,"Asia/Shanghai"],["老河口 · Laohekou",32.3858,111.6678,"Asia/Shanghai"],["顾村 · Gucun",31.3493,121.3934,"Asia/Shanghai"],["Xiulin",29.7167,112.4,"Asia/Shanghai"],["Xiantao",30.3708,113.4429,"Asia/Shanghai"],["Qingzhou",36.6967,118.4797,"Asia/Shanghai"],["榆次区 · Yuci",37.6803,112.7319,"Asia/Shanghai"],["博乐 · Bole",44.8933,82.0699,"Asia/Shanghai"],["大理市 · Dali",25.5847,100.2123,"Asia/Shanghai"],["湘乡市 · Xiangxiang",27.7333,112.5333,"Asia/Shanghai"],["永康区 · Yongkang",23.0244,120.2556,"Asia/Taipei"],["嘉峪关市 · Jiayuguan",39.8112,98.2862,"Asia/Shanghai"],["Huanren",41.2647,125.3667,"Asia/Shanghai"],["长征镇 · Changzheng",31.2391,121.3678,"Asia/Shanghai"],["金昌市 · Jinchang",38.5006,102.1938,"Asia/Shanghai"],["彰化 · Chang-hua",24.0733,120.5628,"Asia/Taipei"],["彰化市 · Changhua",24.0692,120.5512,"Asia/Taipei"],["让胡路区 · Fendou",46.6414,124.8628,"Asia/Shanghai"],["黄冈 · Huanggang",23.677,116.9996,"Asia/Shanghai"],["Jingling",30.65,113.1,"Asia/Shanghai"],["黑河市 · Heihe",50.2441,127.4902,"Asia/Shanghai"],["銅川市 · Tongchuanshi",35.0747,109.085,"Asia/Shanghai"],["Xintai",35.9006,117.7519,"Asia/Shanghai"],["介休市 · Jiexiu",37.0244,111.9125,"Asia/Shanghai"],["武穴 · Wuxue",29.8506,115.5525,"Asia/Shanghai"],["乌海市 · Wuhai",39.6844,106.8158,"Asia/Shanghai"],["Yintai",35.1152,109.097,"Asia/Shanghai"],["Jinzhou",39.1,121.7167,"Asia/Shanghai"],["竜崗区 · Longgang",22.7229,114.2633,"Asia/Shanghai"],["馬鞍山 · Ma On Shan",22.4061,114.2408,"Asia/Hong_Kong"],["鷹潭市 · Yingtan",28.2333,117.0,"Asia/Shanghai"],["锡林浩特市 · Xilin Hot",43.9667,116.0333,"Asia/Shanghai"],["潼南县 · Zitong",30.1782,105.8299,"Asia/Shanghai"],["竹北市 · Zhubei",24.8383,121.0078,"Asia/Taipei"],["罗江 · Luojiang",31.305,104.5048,"Asia/Shanghai"],["丽江市 · Lijiang",26.8688,100.2207,"Asia/Shanghai"],["海拉尔区 · Hailar",49.2,119.7,"Asia/Shanghai"],["顺德区 · Daliang",22.8407,113.2503,"Asia/Shanghai"],["八徳区 · Bade",24.9298,121.2837,"Asia/Taipei"],["铜梁县 · Bachuan",29.8486,106.0505,"Asia/Shanghai"],["Hangu",39.2489,117.7892,"Asia/Shanghai"],["古南镇 · Gunan",29.0231,106.648,"Asia/Shanghai"],["景洪市 · Yunjinghong",22.0148,100.7984,"Asia/Shanghai"],["共和涌 · Gongheyong",22.7592,113.7945,"Asia/Shanghai"],["南川区 · Nanchuan",29.152,107.1034,"Asia/Shanghai"],["璧山县 · Bishan",29.5949,106.2248,"Asia/Shanghai"],["汐止区 · Xizhi",25.0662,121.6599,"Asia/Taipei"],["杨行 · Yanghang",31.3702,121.4374,"Asia/Shanghai"],["高坪 · Gaoping",30.7758,106.1029,"Asia/Shanghai"],["林芝 · Nyingchi",29.6488,94.3551,"Asia/Shanghai"],["元朗 · Yuen Long San Hui",22.4333,114.0333,"Asia/Hong_Kong"],["元朗 · Yuen Long",22.4452,114.0262,"Asia/Hong_Kong"],["Beiliu",22.7072,110.3492,"Asia/Shanghai"],["昌吉市 · Changji",44.0078,87.3046,"Asia/Urumqi"],["都匀市 · Duyun",26.2667,107.5167,"Asia/Shanghai"],["开远 · Kaiyuan",23.6977,103.3037,"Asia/Shanghai"],["冷水江市 · Lengshuijiang",27.6881,111.4294,"Asia/Shanghai"],["门头沟 · Mentougou",39.9382,116.0931,"Asia/Shanghai"],["泸水市 · Lushui",25.8232,98.8585,"Asia/Shanghai"],["江津区 · Jijiang",29.2899,106.25,"Asia/Shanghai"],["开县 · Hanfeng",31.1695,108.4031,"Asia/Shanghai"],["Fengcheng",40.4536,124.0717,"Asia/Shanghai"],["Peicheng",34.7361,116.9247,"Asia/Shanghai"],["Kowloon City Centre",22.3298,114.1889,"Asia/Hong_Kong"],["Ezhou",30.4,114.8333,"Asia/Shanghai"],["正定 · Zhengding",38.145,114.5656,"Asia/Shanghai"],["永川区 · Yongchuan",29.3538,105.8939,"Asia/Shanghai"],["廉州镇 · Hepu",21.6592,109.2001,"Asia/Shanghai"],["爱辉镇 · Aihui",49.9795,127.4812,"Asia/Shanghai"],["福鼎 · Fuding",27.3273,120.214,"Asia/Shanghai"],["虎门镇 · Humen",22.819,113.6731,"Asia/Shanghai"],["海城市 · Haicheng",40.8516,122.7475,"Asia/Shanghai"],["Beipiao",41.7919,120.7792,"Asia/Shanghai"],["阿勒泰市 · Jinshanlu",47.8505,88.1329,"Asia/Urumqi"],["淡水 · Danshui",25.172,121.4429,"Asia/Taipei"],["垫江县 · Guixi",30.3335,107.3454,"Asia/Shanghai"],["掖县 · Laizhou",37.1807,119.9422,"Asia/Shanghai"],["回兴 · Huixing",29.684,106.6149,"Asia/Shanghai"],["荣昌县 · Changyuan",29.405,105.5883,"Asia/Shanghai"],["香格里拉市 · Shangri-La",27.8251,99.7078,"Asia/Shanghai"],["合阳城 · Yangcheng",29.9997,106.256,"Asia/Shanghai"],["敦煌市 · Dunhuang",40.1667,94.6833,"Asia/Shanghai"],["井岸镇 · Jing’an",22.2107,113.2922,"Asia/Shanghai"],["白山市 · Baishan",41.9385,126.4197,"Asia/Shanghai"],["青衣 · Tsing Yi Town",22.35,114.1,"Asia/Hong_Kong"],["镇平城关镇 · Zhenping",33.0346,112.2276,"Asia/Shanghai"],["安达市 · Anda",46.4487,125.3016,"Asia/Shanghai"],["Gongzhuling",43.5007,124.8198,"Asia/Shanghai"],["樹林区 · Shulin",24.9908,121.422,"Asia/Taipei"],["Pingwu County",32.4073,104.5274,"Asia/Shanghai"],["园林 · Qianjiang",30.421,112.8919,"Asia/Shanghai"],["仪征市 · Zhenzhou",32.2803,119.17,"Asia/Shanghai"],["Xindi",29.8167,113.4667,"Asia/Shanghai"],["长寿区 · Fengcheng",29.8259,107.0602,"Asia/Shanghai"],["九台 · Jiutai",44.1513,125.8298,"Asia/Shanghai"],["曾城 · Licheng",23.2955,113.8247,"Asia/Shanghai"],["Dongling",41.8144,123.5758,"Asia/Shanghai"],["元朗墟 · Yuen Long Kau Hui",22.4483,114.032,"Asia/Hong_Kong"],["灣仔 · Wan Chai",22.2814,114.1726,"Asia/Hong_Kong"],["松城 · Songcheng",26.8819,120.0011,"Asia/Shanghai"],["恒山区 · Hengshan",45.2084,130.8981,"Asia/Shanghai"],["通州 · Tongzhou",39.904,116.6618,"Asia/Shanghai"],["庵埠 · Anbu",23.4489,116.6809,"Asia/Shanghai"],["宁洱 · Ning’er",23.0405,101.0368,"Asia/Shanghai"],["Fengcheng",34.7039,116.5872,"Asia/Shanghai"],["塔城市 · Tacheng",46.7454,82.9585,"Asia/Urumqi"],["枝城镇 · Zhicheng",30.2956,111.5047,"Asia/Shanghai"],["香港仔 · Aberdeen",22.248,114.1529,"Asia/Hong_Kong"],["南票 · Nanpiao",41.0982,120.7479,"Asia/Shanghai"],["涪陵区 · Lizhi",29.7032,107.3952,"Asia/Shanghai"],["宜州 · Yizhou",24.5,108.6667,"Asia/Shanghai"],["新桥镇 · Xinqiao",31.065,121.3075,"Asia/Shanghai"],["伊春市 · Yichun",47.7214,128.8753,"Asia/Shanghai"],["梁湖镇 · Lianghu",29.9915,120.8984,"Asia/Shanghai"],["广水 · Guangshui",31.6199,113.9978,"Asia/Shanghai"],["福安市 · Fu’an",27.0913,119.6445,"Asia/Shanghai"],["肇东市 · Zhaodong",46.0522,125.9552,"Asia/Shanghai"],["五家渠市 · Wujiaqu",44.1628,87.5217,"Asia/Urumqi"],["三水 · Sanshui",23.1549,112.8916,"Asia/Shanghai"],["Boshan",36.4833,117.8333,"Asia/Shanghai"],["阳春 · Yangchun",22.1667,111.7833,"Asia/Shanghai"],["定州 · Dingzhou",38.5147,114.9868,"Asia/Shanghai"],["彭浦 · Pengpu",31.2855,121.4367,"Asia/Shanghai"],["澄华 · Chenghua",23.4613,116.7701,"Asia/Shanghai"],["龙凤区 · Longfeng",46.5317,125.1038,"Asia/Shanghai"],["Beining",41.5956,121.7928,"Asia/Shanghai"],["敦化 · Dunhua",43.3695,128.2286,"Asia/Shanghai"],["Sujiatun",41.6592,123.3392,"Asia/Shanghai"],["红岗区 · Honggang",46.3974,124.8845,"Asia/Shanghai"],["Yima",34.7381,111.8839,"Asia/Shanghai"],["桃州镇 · Taozhou",30.9064,119.4086,"Asia/Shanghai"],["辛集 · Xinji",37.926,115.2191,"Asia/Shanghai"],["台山市 · Taishan",22.2513,112.7799,"Asia/Shanghai"],["阿城市 · Acheng",45.5456,126.9519,"Asia/Shanghai"],["海林市 · Hailin",44.5715,129.3854,"Asia/Shanghai"],["奉节县 · Yong’an",31.0189,109.4595,"Asia/Shanghai"],["合川区 · Nanjin",29.985,106.2653,"Asia/Shanghai"],["黔江区 · Qianjiang",29.5328,108.7748,"Asia/Shanghai"],["界首市 · Jieshou",33.2634,115.3611,"Asia/Shanghai"],["玉树市 · Yushu",33.0012,97.0089,"Asia/Shanghai"],["三合镇 · Sanhe",29.8686,107.7303,"Asia/Shanghai"],["水寨镇 · Shuizhai",23.9296,115.765,"Asia/Shanghai"],["山海关 · Shanhaiguan",40.0012,119.754,"Asia/Shanghai"],["月浦 · Yuepu",31.4269,121.4214,"Asia/Shanghai"],["桦甸 · Huadian",42.9721,126.7411,"Asia/Shanghai"],["六枝 · Liuzhi",26.2342,105.426,"Asia/Shanghai"],["Fuyu",45.1833,124.8167,"Asia/Shanghai"],["乌丹镇 · Wūdān",42.9344,119.0239,"Asia/Shanghai"],["巢湖市 · Chaohu",31.6,117.8667,"Asia/Shanghai"],["梁平 · Liangping",30.6611,107.7661,"Asia/Shanghai"],["东嘎 · Doilungdêqên",29.655,90.9918,"Asia/Shanghai"],["碣石镇 · Jieshi",22.8103,115.8306,"Asia/Shanghai"],["合江 · Hejiang",28.8116,105.8336,"Asia/Shanghai"],["青浦区 · Xiayang",31.1497,121.1159,"Asia/Shanghai"],["武夷山市 · Wuyishan",27.7599,118.0307,"Asia/Shanghai"],["Jiashan",30.8492,120.9258,"Asia/Shanghai"],["加格达奇区 · Jiagedaqi",50.4167,124.1167,"Asia/Shanghai"],["惠农区 · Huinong",39.2333,106.7694,"Asia/Shanghai"],["个旧市 · Gejiu",23.3608,103.1537,"Asia/Shanghai"],["图木舒克市 · Tumxuk",39.8698,79.0612,"Asia/Urumqi"],["市桥 · Shiqiao",22.9464,113.3577,"Asia/Shanghai"],["胜利路 · Shenglilu",29.3505,105.8775,"Asia/Shanghai"],["Jiawang",34.4328,117.4419,"Asia/Shanghai"],["Puqi",29.7167,113.8833,"Asia/Shanghai"],["武冈 · Wugang",26.7279,110.632,"Asia/Shanghai"],["扎兰屯市 · Zhalantun",48.0095,122.7365,"Asia/Shanghai"],["福集 · Fuji",29.1482,105.3739,"Asia/Shanghai"],["Dawukou",39.0419,106.3958,"Asia/Shanghai"],["马街 · Majie",25.0319,102.638,"Asia/Shanghai"],["河婆 · Hepo",23.4308,115.8299,"Asia/Shanghai"],["尚志市 · Shangzhi",45.2056,128.0024,"Asia/Shanghai"],["双城 · Shuangcheng",45.3798,126.3071,"Asia/Shanghai"],["东阳市 · Dongyang",29.2678,120.2253,"Asia/Shanghai"],["南头镇 · Nantou",22.7217,113.2926,"Asia/Shanghai"],["甲子镇 · Jiazi",22.8793,116.0732,"Asia/Shanghai"],["Dongxing",21.55,107.9667,"Asia/Shanghai"],["萍乡 · Pingxiang",22.0969,106.7567,"Asia/Shanghai"],["聖安多尼堂區 · Santo António",22.2021,113.5439,"Asia/Macau"],["耒阳 · Leiyang",26.4024,112.8591,"Asia/Shanghai"],["双龙湖 · Shuanglonghu",29.7162,106.6068,"Asia/Shanghai"],["Shache",38.4167,77.2406,"Asia/Urumqi"],["高境 · Gaojing",31.3223,121.4751,"Asia/Shanghai"],["淞南 · Songnan",31.3504,121.4822,"Asia/Shanghai"],["Jiangyou",31.7667,104.7167,"Asia/Shanghai"],["腾越 · Tengyue",24.9949,98.5128,"Asia/Shanghai"],["沙井 · Shajing",22.7463,113.819,"Asia/Shanghai"],["金峰 · Jinfeng",28.2385,116.6005,"Asia/Shanghai"],["Jingzhi",36.31,119.3875,"Asia/Shanghai"],["惠阳区 · Danshui",22.7984,114.4672,"Asia/Shanghai"],["阿拉尔市 · Aral",40.5418,81.2657,"Asia/Shanghai"],["花地瑪堂區 · Nossa Senhora de Fátima",22.2077,113.5483,"Asia/Macau"],["惠城 · Huicheng",23.0385,116.2899,"Asia/Shanghai"],["Xiazhen",34.8022,117.1117,"Asia/Shanghai"],["海门镇 · Haimen",23.1935,116.6122,"Asia/Shanghai"],["Shahecheng",36.9383,114.5058,"Asia/Shanghai"],["榆树 · Yushu",44.8275,126.5406,"Asia/Shanghai"],["員林 · Yuanlin",23.9567,120.5761,"Asia/Taipei"],["乐城 · Lecheng",25.128,113.3504,"Asia/Shanghai"],["南村 · Nancun",36.5328,120.1339,"Asia/Shanghai"],["Jiupu",41.0667,122.95,"Asia/Shanghai"],["宝山 · Baoshan",46.5747,131.3932,"Asia/Shanghai"],["罗阳 · Luoyang",23.1624,114.2734,"Asia/Shanghai"],["民主 · Jiaohe",43.7213,127.3347,"Asia/Shanghai"],["乌达区 · Wuda",39.4994,106.7117,"Asia/Shanghai"],["Huangzhou",30.45,114.8,"Asia/Shanghai"],["Zhoucun",36.8167,117.8167,"Asia/Shanghai"],["祥城 · Xiangcheng",25.4669,100.5625,"Asia/Shanghai"],["龙水镇 · Longshui",29.5656,105.7621,"Asia/Shanghai"],["南岔区 · Lianhe",47.1333,129.2743,"Asia/Shanghai"],["Lichuan",30.3,108.85,"Asia/Shanghai"],["Bao'an Centre",22.5795,113.9163,"Asia/Shanghai"],["朱泾镇 · Zhujing",30.901,121.1597,"Asia/Shanghai"],["招远市 · Zhaoyuan",37.365,120.41,"Asia/Shanghai"],["巡场 · Xunchang",28.4543,104.715,"Asia/Shanghai"],["南宾镇 · Nanbin",29.9994,108.1091,"Asia/Shanghai"],["罗店 · Luodian",31.4156,121.3344,"Asia/Shanghai"],["韶山市 · Shaoshan",27.9167,112.5167,"Asia/Shanghai"],["巫山县 · Wushan",31.0775,109.8764,"Asia/Shanghai"],["顺义 · Shunyi",40.1217,116.6478,"Asia/Shanghai"],["龙井 · Longjing",42.7713,129.4231,"Asia/Shanghai"],["古蔺 · Gulin",28.0422,105.8104,"Asia/Shanghai"],["Chenggu",33.1492,107.3258,"Asia/Shanghai"],["大沙 · Dasha",23.1104,113.4418,"Asia/Shanghai"],["牙克石市 · Yakeshi",49.2833,120.7333,"Asia/Shanghai"],["新东涌坑 · San Tung Chung Hang",22.2787,113.9431,"Asia/Hong_Kong"],["白沙镇 · Baisha",29.0623,106.1189,"Asia/Shanghai"],["安流镇 · Anliu",23.6982,115.6795,"Asia/Shanghai"],["文登市 · Tianfu",37.2637,122.0523,"Asia/Shanghai"],["三峡区 · Sanxia",24.9345,121.3714,"Asia/Taipei"],["Mingshui",36.7167,117.5,"Asia/Shanghai"],["大通回族土族自治县 · Qiaotou",36.935,101.6736,"Asia/Shanghai"],["余姚 · Yuyao",30.05,121.1494,"Asia/Shanghai"],["东涌 · Tung Chung",22.2878,113.9424,"Asia/Hong_Kong"],["肇州 · Zhaozhou",45.706,125.2661,"Asia/Shanghai"],["万盛区 · Wansheng",28.9629,106.9284,"Asia/Shanghai"],["Wayaobu",37.1361,109.6597,"Asia/Shanghai"],["平山 · Pingshan",22.9938,114.7131,"Asia/Shanghai"],["松原市 · Songyuan",45.129,124.8277,"Asia/Shanghai"],["马坝 · Maba",24.6841,113.5984,"Asia/Shanghai"],["城桥 · Chengqiao",31.6308,121.3925,"Asia/Shanghai"],["內壢 · Neili",24.9725,121.2614,"Asia/Taipei"],["洮南市 · Taonan",45.3332,122.7846,"Asia/Shanghai"],["海口镇 · Haikou",24.7798,102.5755,"Asia/Shanghai"],["邵武 · Shaowu",27.3409,117.4831,"Asia/Shanghai"],["勐卯 · Mengmao",24.0014,97.865,"Asia/Shanghai"],["Kaiyuan",42.5331,124.0403,"Asia/Shanghai"],["五指山市 · Wuzhishan",18.7823,109.5013,"Asia/Shanghai"],["贺兰县 · Xigang",38.5526,106.3481,"Asia/Shanghai"],["崇福镇 · Chóngfú",30.5311,120.4309,"Asia/Shanghai"],["氹仔 · Taipa",22.1558,113.5569,"Asia/Macau"],["思城 · Encheng",22.1866,112.3042,"Asia/Shanghai"],["诸暨市 · Zhuji",29.7188,120.2423,"Asia/Shanghai"],["Datun",34.8092,116.9017,"Asia/Shanghai"],["临青 · Qingnian",36.8409,115.7109,"Asia/Shanghai"],["Linshui",36.4247,114.2047,"Asia/Shanghai"],["海伦市 · Hailun",47.4466,126.9248,"Asia/Shanghai"],["石龙镇 · Shilong",23.1144,113.8472,"Asia/Shanghai"],["滴道区 · Didao",45.3473,130.8369,"Asia/Shanghai"],["南城县 · Jianchang",27.5583,116.6398,"Asia/Shanghai"],["呼兰 · Hulan",45.8933,126.5784,"Asia/Shanghai"],["德惠 · Dehui",44.5367,125.6943,"Asia/Shanghai"],["彭水苗族土家族自治县 · Hanjia",29.2952,108.1613,"Asia/Shanghai"],["太白 · Taibai",30.8248,108.3578,"Asia/Shanghai"],["叙永 · Xuyong",28.1699,105.4345,"Asia/Shanghai"],["讷河 · Nehe",48.4793,124.8702,"Asia/Shanghai"],["斗六市 · Douliu",23.7094,120.5433,"Asia/Taipei"],["扎赉诺尔 · Jalai Nur",49.45,117.7,"Asia/Shanghai"],["铁力市 · Tieli",46.9754,128.048,"Asia/Shanghai"],["沙坪 · Shaping",22.7702,112.9578,"Asia/Shanghai"],["安宁市 · Anning",24.9227,102.485,"Asia/Shanghai"],["龙江县 · Longjiang",47.336,123.196,"Asia/Shanghai"],["埠河镇 · Buhe",30.2876,112.2298,"Asia/Shanghai"],["頭份市 · Toufen",24.6875,120.9094,"Asia/Taipei"],["Xinghua",32.9392,119.8342,"Asia/Shanghai"],["南投市 · Nantou",23.9157,120.6639,"Asia/Taipei"],["Yidu",36.7712,118.4245,"Asia/Shanghai"],["中和镇 · Zhonghe",28.4505,108.989,"Asia/Shanghai"],["濮阳县城关镇 · Puyang Chengguanzhen",35.7062,115.0279,"Asia/Shanghai"],["大兴 · Daxing",39.7403,116.3269,"Asia/Shanghai"],["建始县 · Yezhou",30.6037,109.7233,"Asia/Shanghai"],["牌楼 · Pailou",30.7964,108.3858,"Asia/Shanghai"],["普兰店 · Pulandian",39.3953,121.9669,"Asia/Shanghai"],["土默特右旗 · Salaqi",40.5414,110.5108,"Asia/Shanghai"],["Jishu",44.3167,126.8,"Asia/Shanghai"],["玉渓市 · Yuxi",24.355,102.5422,"Asia/Shanghai"],["崇仁县 · Bashan",27.7682,116.0502,"Asia/Shanghai"],["同仁县 · Tongren",35.5148,102.016,"Asia/Shanghai"],["甘古城关镇 · Gangu Chengguanzhen",34.7356,105.3263,"Asia/Shanghai"],["台東 · Taitung",22.7599,121.1446,"Asia/Taipei"],["库车县 · Xincheng",41.715,82.9325,"Asia/Urumqi"],["吉首市 · Jishou",28.3193,109.7335,"Asia/Shanghai"],["水富县 · Shuifu",28.6321,104.4078,"Asia/Shanghai"],["河东镇 · Hedong",23.9196,115.7801,"Asia/Shanghai"],["华城镇 · Huacheng",24.067,115.6131,"Asia/Shanghai"],["林西 · Linxi",39.7118,118.4495,"Asia/Shanghai"],["Xinzhai",36.4,118.6167,"Asia/Shanghai"],["晏家 · Yanjia",29.8276,106.9973,"Asia/Shanghai"],["康定市 · Kangding",30.0022,101.9569,"Asia/Shanghai"],["綏芬河 · Suifenhe",44.3998,131.1478,"Asia/Shanghai"],["Sino-Singapore Tianjin Eco-city",39.1531,117.7835,"Asia/Shanghai"],["南丰县 · Qincheng",27.2127,116.5301,"Asia/Shanghai"],["芒市 · Menghuan",24.4353,98.5837,"Asia/Shanghai"],["西乡县 · Xixiang",32.987,107.764,"Asia/Shanghai"],["望奎县 · Wangkui",46.8321,126.4766,"Asia/Shanghai"],["花蓮市 · Hualien City",23.9769,121.6044,"Asia/Taipei"],["梅河口 · Meihekou",42.5287,125.6788,"Asia/Shanghai"],["新乐 · Xinle",38.349,114.6853,"Asia/Shanghai"],["Linghe",36.3642,119.0769,"Asia/Shanghai"],["Xingcheng",40.6167,120.7167,"Asia/Shanghai"],["任丘市 · Renqiu",38.7094,116.1009,"Asia/Shanghai"],["新市 · Xinshi",31.047,113.141,"Asia/Shanghai"],["城子河 · Chengzihe",45.3361,131.0049,"Asia/Shanghai"],["醴陵市 · Xishan",27.6667,113.5,"Asia/Shanghai"],["Yeyuan",36.4167,118.5,"Asia/Shanghai"],["Guanhu",34.4253,117.9953,"Asia/Shanghai"],["旧店 · Jiudian",36.9918,120.2041,"Asia/Shanghai"],["新兴镇 · Xinxing",34.776,105.3222,"Asia/Shanghai"],["房山 · Fangshan",39.687,115.9966,"Asia/Shanghai"],["金牛 · Jinniu",25.8006,100.5743,"Asia/Shanghai"],["草屯 · Caotun",23.977,120.6877,"Asia/Taipei"],["Houzhen",36.9914,118.9658,"Asia/Shanghai"],["竹東 · Zhudong",24.7317,121.0908,"Asia/Taipei"],["Gongguan",21.8,109.6,"Asia/Shanghai"],["南溪 · Nanxi",28.8421,104.9796,"Asia/Shanghai"],["禄步镇 · Lubu",23.1723,112.283,"Asia/Shanghai"],["通州市 · Jinsha",32.0898,121.0735,"Asia/Shanghai"],["都城镇 · Ducheng",23.2421,111.5284,"Asia/Shanghai"],["沈家门 · Shenjiamen",29.9576,122.298,"Asia/Shanghai"],["勃利县 · Boli",45.7529,130.5845,"Asia/Shanghai"],["萧山县 · Xiaoshan",30.1675,120.2588,"Asia/Shanghai"],["秦安县 · Xingguo",34.8586,105.6686,"Asia/Shanghai"],["五常市 · Wuchang",44.9275,127.1604,"Asia/Shanghai"],["吉安县 · Dunhou",27.05,114.9,"Asia/Shanghai"],["巴彦浩特镇 · Bayan Hot",38.8386,105.6686,"Asia/Shanghai"],["西美 · Ximeicun",24.9877,118.3858,"Asia/Shanghai"],["大溪 · Daxi",24.8837,121.2904,"Asia/Taipei"],["宜蘭市 · Yilan",24.757,121.753,"Asia/Taipei"],["酉阳土家族苗族自治县 · Zhongduo",28.8466,108.7642,"Asia/Shanghai"],["方城城关镇 · Fangcheng",33.2569,113.001,"Asia/Shanghai"],["Daotian",36.8339,118.8978,"Asia/Shanghai"],["云南驿 · Yunnanyi",25.4245,100.689,"Asia/Shanghai"],["双辽 · Shuangliao",43.5107,123.5007,"Asia/Shanghai"],["肇源 · Zhaoyuan",45.5197,125.0763,"Asia/Shanghai"],["Dalai",45.5,124.3,"Asia/Shanghai"],["Tangwu",36.4467,118.8597,"Asia/Shanghai"],["Jiayue",36.0236,119.1761,"Asia/Shanghai"],["昌平 · Changping",40.2161,116.2347,"Asia/Shanghai"],["连州镇 · Lianzhou",24.7819,112.3712,"Asia/Shanghai"],["Yingqiu",36.5266,118.9929,"Asia/Shanghai"],["Danjiangkou",32.5428,111.5086,"Asia/Shanghai"],["百安坝 · Bai’anba",30.7628,108.4372,"Asia/Shanghai"],["中枢 · Zhongshu",24.5167,103.7667,"Asia/Shanghai"],["Huazhou",21.6333,110.5833,"Asia/Shanghai"],["Xingren",25.4333,105.2333,"Asia/Shanghai"],["易门县 · Longquan",24.6719,102.1613,"Asia/Shanghai"],["荣成市 · Yatou",37.1566,122.4376,"Asia/Shanghai"],["Tanfang",36.6998,118.6709,"Asia/Shanghai"],["高邮市 · Gaoyou",32.7893,119.4418,"Asia/Shanghai"],["楡林市 · Yulinshi",38.2918,109.7375,"Asia/Shanghai"],["寒亭区 · Hanting",36.7708,119.2108,"Asia/Shanghai"],["铜仁市 · Tongren",27.7172,109.1853,"Asia/Shanghai"],["淅河镇 · Xihe",31.6864,113.4659,"Asia/Shanghai"],["多宝镇 · Duobao",30.67,112.6895,"Asia/Shanghai"],["洛门 · Luomen",34.7542,105.0247,"Asia/Shanghai"],["Huaidian",33.4333,115.0333,"Asia/Shanghai"],["Baisha",21.7167,109.6833,"Asia/Shanghai"],["庙行 · Miaohang",31.3247,121.4395,"Asia/Shanghai"],["富锦 · Fujin",47.2472,132.0296,"Asia/Shanghai"],["怀城镇 · Huaicheng",23.9195,112.1763,"Asia/Shanghai"],["弥城 · Micheng",25.3429,100.4873,"Asia/Shanghai"],["庐江县 · Lucheng",31.2336,117.2806,"Asia/Shanghai"],["合德 · Hede",33.7722,120.2618,"Asia/Shanghai"],["城厢镇 · Chengxiang",31.398,109.5706,"Asia/Shanghai"],["Gantang",27.4375,111.9731,"Asia/Shanghai"],["南大街 · Nandajie",29.3377,105.8924,"Asia/Shanghai"],["冷水滩 · Lengshuitan",26.4111,111.5956,"Asia/Shanghai"],["王清县 · Wangqing",43.3108,129.7633,"Asia/Shanghai"],["Xiazhuang",36.4492,119.8356,"Asia/Shanghai"],["更庆镇 · Gengqing",31.8167,98.5806,"Asia/Shanghai"],["Linjiacun",35.9939,119.6503,"Asia/Shanghai"],["周家坝 · Zhoujiaba",30.8435,108.3664,"Asia/Shanghai"],["Honghe",36.4028,118.9181,"Asia/Shanghai"],["宜宾县 · Baixi",28.6997,104.5492,"Asia/Shanghai"],["李渡镇 · Lidu",29.7386,107.2948,"Asia/Shanghai"],["禹州 · Yuzhou",34.1547,113.4681,"Asia/Shanghai"],["鶯歌区 · Yingge",24.9561,121.3507,"Asia/Taipei"],["古宋镇 · Gusong",28.3133,105.2377,"Asia/Shanghai"],["Hanchuan",30.65,113.7667,"Asia/Shanghai"],["Tiefu",34.5333,118.0333,"Asia/Shanghai"],["琼山区 · Qiongshan",20.0086,110.3538,"Asia/Shanghai"],["德清县 · Deqing",30.5449,119.9599,"Asia/Shanghai"],["广昌县 · Xujiang",26.8394,116.3201,"Asia/Shanghai"],["Mishan",45.55,131.8833,"Asia/Shanghai"],["嫩江县 · Nenjiang",49.1741,125.2197,"Asia/Shanghai"],["勐朗 · Menglang",22.5621,99.9103,"Asia/Shanghai"],["Shizilu",35.1711,118.8289,"Asia/Shanghai"],["姜山 · Jiangshan",36.6781,120.5292,"Asia/Shanghai"],["赵各庄 · Zhaogezhuang",39.7654,118.4119,"Asia/Shanghai"],["Anlong",25.1,105.5167,"Asia/Shanghai"],["埔里 · Puli",23.9664,120.9695,"Asia/Taipei"],["苗栗 · Miaoli",24.5643,120.8237,"Asia/Taipei"],["昌都市 · Qamdo",31.1304,97.1798,"Asia/Shanghai"],["南丰镇 · Nanfeng",23.7269,111.7972,"Asia/Shanghai"],["钟鼓楼 · Zhonggulou",30.8249,108.3841,"Asia/Shanghai"],["陇南市 · Longnan",33.3979,104.917,"Asia/Shanghai"],["和龙市 · Helong",42.5397,128.9972,"Asia/Shanghai"],["Nanding",36.7483,118.0558,"Asia/Shanghai"],["虢镇 · Guozhen",34.3659,107.359,"Asia/Shanghai"],["蓬莱市 · Dengzhou",37.8082,120.7591,"Asia/Shanghai"],["曲阜市 · Qufu",35.5967,116.9911,"Asia/Shanghai"],["老君庙镇 · Laojunmiao",39.8333,97.7333,"Asia/Shanghai"],["大成镇 · Dacheng",19.5093,109.3928,"Asia/Shanghai"],["勉县 · Mianyang",33.157,106.6945,"Asia/Shanghai"],["大中镇 · Dazhong",33.1997,120.4578,"Asia/Shanghai"],["蓼兰 · Liaolan",36.6744,119.8753,"Asia/Shanghai"],["金乡 · Jinxiang",27.4326,120.6063,"Asia/Shanghai"],["Dongxia",36.7492,118.5827,"Asia/Shanghai"],["德感 · Degan",29.2785,106.2316,"Asia/Shanghai"],["江都市 · Xiannü",32.4281,119.5605,"Asia/Shanghai"],["Yinma",36.6608,119.4625,"Asia/Shanghai"],["岭东 · Lingdong",46.5543,131.1449,"Asia/Shanghai"],["南漳城关镇 · Nanzhang Chengguanzhen",31.7839,111.8275,"Asia/Shanghai"],["徐城镇 · Xucheng",20.3302,110.1664,"Asia/Shanghai"],["温宿县 · Wensu",41.2755,80.2361,"Asia/Shanghai"],["Ningyang",35.7642,116.7914,"Asia/Shanghai"],["津市 · Jinshi",29.6049,111.8701,"Asia/Shanghai"],["乐安县 · Aoxi",27.4259,115.8364,"Asia/Shanghai"],["Liping",26.2311,109.1314,"Asia/Shanghai"],["Changqing",36.5575,116.7272,"Asia/Shanghai"],["Dali Old Town",25.6886,100.1589,"Asia/Shanghai"],["Xindian",36.7975,118.2944,"Asia/Shanghai"],["Qiaoguan",36.5644,118.8839,"Asia/Shanghai"],["南宫 · Nangong",37.3546,115.3888,"Asia/Shanghai"],["旅顺口区 · Lüshun",38.8,121.2667,"Asia/Shanghai"],["Anguo",34.8306,116.8194,"Asia/Shanghai"],["石湾 · Shiwan",23.0011,113.077,"Asia/Shanghai"],["东河镇 · Donghe",32.2334,106.3013,"Asia/Shanghai"],["槐阳 · Huaiyang",37.7615,114.517,"Asia/Shanghai"],["塘坪镇 · Tangping",22.0318,111.9354,"Asia/Shanghai"],["Yudong",29.385,106.5194,"Asia/Shanghai"],["长宁 · Changning",28.5777,104.9209,"Asia/Shanghai"],["秀谷镇 · Xiugu",27.9113,116.7764,"Asia/Shanghai"],["Feicheng",35.2606,117.9675,"Asia/Shanghai"],["Shanting",35.0753,117.4578,"Asia/Shanghai"],["筠连 · Junlian",28.1711,104.5116,"Asia/Shanghai"],["Nianzhuang",34.2972,117.7722,"Asia/Shanghai"],["平原 · Yingjiang",24.7102,97.9367,"Asia/Shanghai"],["娄山关镇 · Loushanguan",28.1368,106.822,"Asia/Shanghai"],["Baoying",33.2292,119.3092,"Asia/Shanghai"],["大石桥市 · Dashiqiao",40.6373,122.5025,"Asia/Shanghai"],["磐石 · Panshi",42.9372,126.0574,"Asia/Shanghai"],["Xichang",21.6333,108.95,"Asia/Shanghai"],["Huanglou",36.6471,118.6055,"Asia/Shanghai"],["Dushan",25.8333,107.5333,"Asia/Shanghai"],["日喀则市 · Xigazê",29.25,88.8833,"Asia/Shanghai"],["沙田 · Sha Tin Wai",22.3776,114.1975,"Asia/Hong_Kong"],["Songlou",34.5723,116.6024,"Asia/Shanghai"],["泰兴市 · Taixing",32.1667,120.0136,"Asia/Shanghai"],["唐家庄 · Tangjiazhuang",39.7433,118.451,"Asia/Shanghai"],["雁塔 · Yanta",36.2411,115.6672,"Asia/Shanghai"],["栖霞市 · Zhuangyuan",37.3055,120.8275,"Asia/Shanghai"],["Wuyang",31.9925,116.2472,"Asia/Shanghai"],["雄州 · Xiongzhou",25.1167,114.3,"Asia/Shanghai"],["Chaigou",36.2489,119.6242,"Asia/Shanghai"],["Xinzhou",30.8667,114.8,"Asia/Shanghai"],["Shitanjing",39.2342,106.3439,"Asia/Shanghai"],["图们 · Tumen",42.9656,129.842,"Asia/Shanghai"],["大字号 · Qinggang",29.4677,106.2362,"Asia/Shanghai"],["Hengbei",23.8797,115.7255,"Asia/Shanghai"],["Yishan",36.2211,118.6966,"Asia/Shanghai"],["友好区 · Youhao",47.8531,128.8356,"Asia/Shanghai"],["Pingyi",35.5006,117.6308,"Asia/Shanghai"],["武隆 · Wulong",29.3243,107.7606,"Asia/Shanghai"],["临平镇 · Linping",30.4225,120.2972,"Asia/Shanghai"],["西乡 · Xixiang",22.5931,113.8889,"Asia/Shanghai"],["Shap Pat Heung",22.4248,114.0358,"Asia/Hong_Kong"],["Huankou",34.87,116.6697,"Asia/Shanghai"],["林口县 · Linkou",45.2762,130.2733,"Asia/Shanghai"],["黄梅 · Huangmei",30.1924,116.025,"Asia/Shanghai"],["松陵 · Songling",31.1933,120.7176,"Asia/Shanghai"],["Jishui",33.7333,115.4,"Asia/Shanghai"],["舒兰 · Shulan",44.4113,126.9483,"Asia/Shanghai"],["Baicheng",36.3274,119.7788,"Asia/Shanghai"],["Damiao",34.2641,117.3638,"Asia/Shanghai"],["Pok Fu Lam",22.2686,114.1292,"Asia/Hong_Kong"],["珲春市 · Hunchun",42.8674,130.3569,"Asia/Shanghai"],["三都镇 · Sandu",19.7894,109.215,"Asia/Shanghai"],["良乡 · Liangxiang",39.736,116.1329,"Asia/Shanghai"],["Zhaodun",34.3027,117.857,"Asia/Shanghai"],["奉化市 · Fenghua",29.6563,121.4064,"Asia/Shanghai"],["雅星镇 · Yaxing",19.4478,109.2627,"Asia/Shanghai"],["杨柳青 · Yangliuqing",39.1375,116.9997,"Asia/Shanghai"],["Qiuji",33.8,118.0,"Asia/Shanghai"],["浠水县 · Qingquan",30.4511,115.2559,"Asia/Shanghai"],["Shouxian",34.8465,116.4588,"Asia/Shanghai"],["临潼 · Lintong",34.378,109.2089,"Asia/Shanghai"],["喀格勒克 · Kageleke",37.301,79.6013,"Asia/Shanghai"],["Kanjia",36.3723,119.5821,"Asia/Shanghai"],["隐珠 · Yinzhu",35.8786,119.9753,"Asia/Shanghai"],["Chaoyang",42.6622,126.0263,"Asia/Shanghai"],["上梅 · Shangmei",27.7428,111.2956,"Asia/Shanghai"],["富裕县 · Fuyu",47.7949,124.4577,"Asia/Shanghai"],["新営区 · Xinying",23.3069,120.3106,"Asia/Taipei"],["茅洲 · Maozhou",22.7636,113.8129,"Asia/Shanghai"],["启动市 · Huilong",31.8111,121.655,"Asia/Shanghai"],["Nam Cheong",22.328,114.1539,"Asia/Hong_Kong"],["麦积区 · Beidao",34.5686,105.8933,"Asia/Shanghai"],["阳谷 · Yanggu",36.1106,115.7753,"Asia/Shanghai"],["Kowloon West End",22.3285,114.1851,"Asia/Hong_Kong"],["龙岗 · Longgang",29.6974,105.7137,"Asia/Shanghai"],["Shancheng",34.7953,116.0817,"Asia/Shanghai"],["Zhangzhai",34.6167,116.95,"Asia/Shanghai"],["南麻镇 · Nanma",36.1848,118.1549,"Asia/Shanghai"],["徽城镇 · Huicheng",29.8693,118.4336,"Asia/Shanghai"],["院上 · Yuanshang",36.7683,120.3456,"Asia/Shanghai"],["濉溪 · Suixi",33.8907,116.7747,"Asia/Shanghai"],["Zhangzhuang",34.5194,117.0056,"Asia/Shanghai"],["古城城关镇 · Gucheng Chengguanzhen",32.266,111.6348,"Asia/Shanghai"],["咸水沽镇 · Xianshuigu",38.985,117.3828,"Asia/Shanghai"],["云阳 · Yunyang",33.4474,112.7142,"Asia/Shanghai"],["贵溪市 · Huayuan",28.2863,117.2066,"Asia/Shanghai"],["Lanxi",29.2159,119.4716,"Asia/Shanghai"],["根河市 · Genhe",50.7833,121.5167,"Asia/Shanghai"],["罗城 · Luocheng",29.3848,104.0286,"Asia/Shanghai"],["Heguan",36.89,118.5738,"Asia/Shanghai"],["如东县 · Juegang",32.3174,121.1855,"Asia/Shanghai"],["Shixing",24.9482,114.0657,"Asia/Shanghai"],["Dongdu",35.85,117.7,"Asia/Shanghai"],["Dongkan",33.9997,119.8308,"Asia/Shanghai"],["定城 · Huangchuan",32.139,115.0429,"Asia/Shanghai"],["乌苏市 · Wusu",44.431,84.6762,"Asia/Urumqi"],["兰西县 · Lanxi",46.2577,126.2806,"Asia/Shanghai"],["弥勒县 · Miyang",24.4042,103.4428,"Asia/Shanghai"],["Jiangzhuang",36.4944,119.7942,"Asia/Shanghai"],["丰镇 · Beichengqu",40.4394,113.1536,"Asia/Shanghai"],["Xinzhi",36.4989,111.7047,"Asia/Shanghai"],["凓城镇 · Licheng",31.4281,119.4835,"Asia/Shanghai"],["Zhoucheng",35.9122,116.3117,"Asia/Shanghai"],["蔡甸区 · Caidian",30.5833,114.0333,"Asia/Shanghai"],["岫岩 · Xiuyan",40.2928,123.2744,"Asia/Shanghai"],["珞璜镇 · Luohuang",29.3466,106.4351,"Asia/Shanghai"],["上思 · Shangsi",22.1563,107.9795,"Asia/Shanghai"],["卡拉苏 · Qarasu",44.2028,80.4164,"Asia/Shanghai"],["昌图县 · Changtu",42.7788,124.0954,"Asia/Shanghai"],["Huashan",34.63,116.7358,"Asia/Shanghai"],["安陆 · Anlu",31.2575,113.6783,"Asia/Shanghai"],["依兰县 · Yilan",46.3223,129.5608,"Asia/Shanghai"],["临江镇 · Linjiang",31.0996,108.2196,"Asia/Shanghai"],["桂平镇 · Guiping",23.3948,110.0743,"Asia/Shanghai"],["Kuandian",40.7286,124.7847,"Asia/Shanghai"],["Shenzhen City Centre",22.5359,114.0771,"Asia/Shanghai"],["鄱阳县 · Poyang",28.9924,116.6675,"Asia/Shanghai"],["永丰 · Yongfeng",27.4549,112.1694,"Asia/Shanghai"],["Gongchangling",41.1167,123.45,"Asia/Shanghai"],["即墨市 · Jimo",36.3897,120.4622,"Asia/Shanghai"],["拜泉县 · Baiquan",47.6066,126.0823,"Asia/Shanghai"],["姜堰市 · Jiangyan",32.5061,120.1428,"Asia/Shanghai"],["石拐区 · Shiguai",40.7058,110.2856,"Asia/Shanghai"],["富阳市 · Fuyang",30.0533,119.9519,"Asia/Shanghai"],["硖石 · Haining",30.5363,120.6864,"Asia/Shanghai"],["Shankou",21.6,109.7167,"Asia/Shanghai"],["磐安镇 · Pan’an",34.7547,105.1117,"Asia/Shanghai"],["蒙城城关镇 · Mengcheng Chengguanzhen",33.2661,116.5661,"Asia/Shanghai"],["新河 · Xinhe",36.925,119.5931,"Asia/Shanghai"],["石蟆镇 · Shima",28.9877,105.9244,"Asia/Shanghai"],["Fengping",24.3973,98.5177,"Asia/Shanghai"],["城关镇 · Chengxian Chengguanzhen",33.7478,105.7329,"Asia/Shanghai"],["独山子区 · Xininglu",44.3396,84.9043,"Asia/Urumqi"],["玄滩 · Xuantan",29.2086,105.5697,"Asia/Shanghai"],["Jiehu",35.5428,118.455,"Asia/Shanghai"],["临江 · Linjiang",41.8069,126.9078,"Asia/Shanghai"],["潭头镇 · Tantou",26.0303,119.5974,"Asia/Shanghai"],["小市 · Xiaoshi",41.2971,124.1209,"Asia/Shanghai"],["澄迈县 · Jinjiang",19.7378,110.0093,"Asia/Shanghai"],["云门镇 · Yunmen",30.0827,106.3238,"Asia/Shanghai"],["武山 · Wushan",34.7208,104.8858,"Asia/Shanghai"],["Heishan",41.6892,122.1128,"Asia/Shanghai"],["Pengcheng",36.4311,114.17,"Asia/Shanghai"],["文江 · Wenjiang",28.3881,104.5634,"Asia/Shanghai"],["石码 · Shima",24.4465,117.8122,"Asia/Shanghai"],["宁海县 · Ninghai",29.2892,121.4247,"Asia/Shanghai"],["柴河镇 · Chaihe",44.7598,129.6783,"Asia/Shanghai"],["Minggang",32.4586,114.0486,"Asia/Shanghai"],["Tangzhai",34.4328,116.5911,"Asia/Shanghai"],["Xunyang",32.8239,109.3653,"Asia/Shanghai"],["永宁县 · Yanghe",38.2785,106.2478,"Asia/Shanghai"],["东丰 · Dongfeng",42.6739,125.5289,"Asia/Shanghai"],["江安 · Jiang’an",28.7334,105.0683,"Asia/Shanghai"],["镇赉 · Zhenlai",45.8496,123.1979,"Asia/Shanghai"],["渝北区 · Shuangfengqiao",29.7186,106.6271,"Asia/Shanghai"],["集安市 · Ji’an",41.1282,126.1946,"Asia/Shanghai"],["松江河镇 · Songjianghe",42.1859,127.4789,"Asia/Shanghai"],["Luorong",24.4058,109.6086,"Asia/Shanghai"],["略阳城关镇 · Lüeyang Chengguanzhen",33.3321,106.155,"Asia/Shanghai"],["温岭 · Wenling",28.3752,121.3842,"Asia/Shanghai"],["华泾 · Huajing",31.122,121.4493,"Asia/Shanghai"],["福清 · Fuqing",25.7294,119.3747,"Asia/Shanghai"],["漕河镇 · Caohe",30.2297,115.4335,"Asia/Shanghai"],["Gaoliu",36.8,118.5,"Asia/Shanghai"],["新州镇 · Xinzhou",19.7145,109.3115,"Asia/Shanghai"],["元宝山区 · Pingzhuang",42.0372,119.2889,"Asia/Shanghai"],["Tianliu",37.0,118.7833,"Asia/Shanghai"],["湟中县 · Lushar",36.4842,101.5633,"Asia/Shanghai"],["Wanggou",34.6715,116.4921,"Asia/Shanghai"],["峰口镇 · Fengkou",30.0827,113.3335,"Asia/Shanghai"],["Shajing Town",22.7385,113.8076,"Asia/Shanghai"],["柳河县 · Liuhe",42.2847,125.7454,"Asia/Shanghai"],["汉阴县 · Hanyin Chengguanzhen",32.8914,108.5047,"Asia/Shanghai"],["娲城 · Wacheng Neighborhood",33.7833,114.5167,"Asia/Shanghai"],["多巴镇 · Duoba",36.6579,101.5337,"Asia/Shanghai"],["Shaozhuang",36.747,118.3166,"Asia/Shanghai"],["泰来县 · Tailai",46.39,123.4085,"Asia/Shanghai"],["李市 · Lishi",29.0789,106.262,"Asia/Shanghai"],["Chengyang",35.5794,118.8328,"Asia/Shanghai"],["Sanchazi",42.0817,126.6003,"Asia/Shanghai"],["Daxu",34.2824,117.5527,"Asia/Shanghai"],["喀拉喀什镇 · Qaraqash",37.2725,79.7344,"Asia/Urumqi"],["太和镇 · Taihe",30.0995,106.0489,"Asia/Shanghai"],["涟源市 · Lianyuan",27.6883,111.6642,"Asia/Shanghai"],["浯溪镇 · Wuxi",26.5844,111.859,"Asia/Shanghai"],["棋盘村 · Qipan",34.2447,118.2211,"Asia/Shanghai"],["大足县 · Tangxiang",29.7023,105.7236,"Asia/Shanghai"],["Huinan",42.6225,126.2614,"Asia/Shanghai"],["Beimeng",36.6044,119.4956,"Asia/Shanghai"],["洛阳 · Luoyang",24.9594,118.683,"Asia/Shanghai"],["穆棱市 · Muling",44.9165,130.5171,"Asia/Shanghai"],["沅江市 · Qionghu",28.8412,112.3551,"Asia/Shanghai"],["桦南县 · Huanan",46.2362,130.5464,"Asia/Shanghai"],["孝陵卫 · Xiaolingwei",32.0324,118.854,"Asia/Shanghai"],["赶水镇 · Ganshui",28.7422,106.7111,"Asia/Shanghai"],["Yaoji",34.0667,117.8167,"Asia/Shanghai"],["钱塘镇 · Qiantang",30.1842,106.3165,"Asia/Shanghai"],["Mengyin",35.7069,117.9264,"Asia/Shanghai"],["Jietou",25.4274,98.6532,"Asia/Shanghai"],["襄城城关镇 · Xiangcheng",33.8541,113.4872,"Asia/Shanghai"],["Bayiji",34.2667,117.6833,"Asia/Shanghai"],["Shangkou",36.9656,118.8831,"Asia/Shanghai"],["李哥庄 · Ligezhuang",36.3578,120.1428,"Asia/Shanghai"],["Dashitou",43.3067,128.5114,"Asia/Shanghai"],["Huanghua",35.8892,119.4578,"Asia/Shanghai"],["福山区 · Qingyang",37.4958,121.2581,"Asia/Shanghai"],["Babu",24.4167,111.5167,"Asia/Shanghai"],["霧峰区 · Wufeng",24.0637,120.698,"Asia/Taipei"],["Yebaishou",41.3975,119.6408,"Asia/Shanghai"],["怀远城关镇 · Huaiyuan Chengguanzhen",32.9589,117.1657,"Asia/Shanghai"],["新城 · Dancheng",33.6441,115.1816,"Asia/Shanghai"],["Bianzhuang",34.8486,118.0447,"Asia/Shanghai"],["Suyangshan",34.3928,117.7556,"Asia/Shanghai"],["湾沟镇 · Hepingjie",42.0597,126.9158,"Asia/Shanghai"],["Liuxin",34.3686,117.115,"Asia/Shanghai"],["Caoqiao",34.3405,118.1104,"Asia/Shanghai"],["龙山 · Longshan",24.6009,98.7042,"Asia/Shanghai"],["丰润 · Fengrun",39.8266,118.1382,"Asia/Shanghai"],["Kunyang",27.6658,120.5658,"Asia/Shanghai"],["田庄 · Tianzhuang",36.7958,119.7367,"Asia/Shanghai"],["临城镇 · Lingao",19.9087,109.6872,"Asia/Shanghai"],["Shikang",21.7667,109.3167,"Asia/Shanghai"],["宜黄县 · Fenggang",27.5457,116.2146,"Asia/Shanghai"],["Picheng",34.4667,117.9667,"Asia/Shanghai"],["仁兆 · Renzhao",36.6386,120.2036,"Asia/Shanghai"],["昌黎 · Changli",39.7065,119.1603,"Asia/Shanghai"],["开化 · Kaihua",23.3695,104.2772,"Asia/Shanghai"],["云梦城关镇 · Yunmeng Chengguanzhen",31.0625,113.7655,"Asia/Shanghai"],["洋县 · Yangzhou",33.2219,107.5427,"Asia/Shanghai"],["青冈县 · Qinggang",46.6983,126.0921,"Asia/Shanghai"],["余江县 · Dengbu",28.2084,116.8172,"Asia/Shanghai"],["Yangcun",39.3639,117.0603,"Asia/Shanghai"],["长兴县 · Zhicheng",31.0075,119.9085,"Asia/Shanghai"],["馬公 · Magong",23.5654,119.5863,"Asia/Taipei"],["Lulou",34.7167,116.7667,"Asia/Shanghai"],["百合 · Baihecun",22.1132,107.2359,"Asia/Shanghai"],["观音 · Guanyin",29.0993,104.3942,"Asia/Shanghai"],["马白 · Mabai",23.0128,104.4508,"Asia/Shanghai"],["南隆 · Nanlong",31.3533,106.0631,"Asia/Shanghai"],["油溪镇 · Youxi",29.2094,106.1443,"Asia/Shanghai"],["Xiazhuang",34.9161,118.6389,"Asia/Shanghai"],["Changcheng",36.0906,119.4517,"Asia/Shanghai"],["山旺 · Shanwang",36.5454,118.711,"Asia/Shanghai"],["泊头 · Botou",38.0737,116.5667,"Asia/Shanghai"],["Liuku",25.8505,98.8557,"Asia/Shanghai"],["宝清 · Baoqing",46.3245,132.1897,"Asia/Shanghai"],["旺角 · Mong Kok",22.3194,114.1714,"Asia/Hong_Kong"],["Shizhai",34.8056,116.6389,"Asia/Shanghai"],["Jinggou",36.2818,119.5519,"Asia/Shanghai"],["Fanlou",34.4809,116.8525,"Asia/Shanghai"],["Qingshuping",27.3808,112.0206,"Asia/Shanghai"],["Changle",21.8333,109.4167,"Asia/Shanghai"],["Miaojie",25.3123,100.2798,"Asia/Shanghai"],["开通 · Kaitong",44.8091,123.0811,"Asia/Shanghai"],["张家川回族自治县 · Zhangjiachuan",34.9876,106.209,"Asia/Shanghai"],["平南镇 · Pingnan",23.5418,110.3893,"Asia/Shanghai"],["德庆 · Dêqên",29.9618,90.7188,"Asia/Shanghai"],["嵩阳 · Songyang",34.4555,113.0319,"Asia/Shanghai"],["Yucheng",34.9289,116.4653,"Asia/Shanghai"],["水口镇 · Shuikou",23.9837,115.8958,"Asia/Shanghai"],["双阳 · Shuangyang",43.5226,125.6595,"Asia/Shanghai"],["碾子山 · Nianzishan",47.5134,122.8879,"Asia/Shanghai"],["宾县 · Bin Xian",45.7427,127.4605,"Asia/Shanghai"],["镇海区 · Zhaobaoshan",29.9695,121.6875,"Asia/Shanghai"],["虎石台 · Hushitai",41.9417,123.5027,"Asia/Shanghai"],["Zhangji",34.1375,117.3756,"Asia/Shanghai"],["霍邱城关镇 · Huoqiu Chengguanzhen",32.3547,116.2939,"Asia/Shanghai"],["木渎镇 · Mudu",31.256,120.5186,"Asia/Shanghai"],["Fengyi",25.584,100.3118,"Asia/Shanghai"],["Nandu",22.8525,110.8233,"Asia/Shanghai"],["龙凤坝镇 · Longfeng",30.3879,109.5071,"Asia/Shanghai"],["Taoluo",35.2739,119.3703,"Asia/Shanghai"],["颖上城关镇 · Yingshang Chengguanzhen",32.6294,116.2701,"Asia/Shanghai"],["Xiangzhou",36.1644,119.4189,"Asia/Shanghai"],["蒲庙镇 · Yongning",22.761,108.4836,"Asia/Shanghai"],["新野 · Xinye",32.5288,112.3651,"Asia/Shanghai"],["梨树 · Lishu",43.3073,124.3337,"Asia/Shanghai"],["阿里河镇 · Oroqen Zizhiqi",50.5667,123.7167,"Asia/Shanghai"],["仙居 · Xianju",28.8547,120.7317,"Asia/Shanghai"],["丰城市 · Jianguang",28.1938,115.7836,"Asia/Shanghai"],["东宁县 · Dongning",44.0844,131.1184,"Asia/Shanghai"],["大石镇 · Dashi",30.0937,106.2223,"Asia/Shanghai"],["Tianchang",37.9981,114.0156,"Asia/Shanghai"],["Xifeng",42.7372,124.7222,"Asia/Shanghai"],["Datong",32.6208,117.0632,"Asia/Shanghai"],["Nanhu",35.4878,119.3458,"Asia/Shanghai"],["鄢城 · Yicheng",31.7047,112.2561,"Asia/Shanghai"],["歇马镇 · Xiema",29.7741,106.3688,"Asia/Shanghai"],["阎良 · Yanliang",34.6592,109.2292,"Asia/Shanghai"],["塔河 · Tahe",52.3215,124.6976,"Asia/Shanghai"],["Erdaojiang",41.7764,126.0319,"Asia/Shanghai"],["天彭 · Tianpeng",30.9866,103.9393,"Asia/Shanghai"],["Xixiang",35.1628,112.865,"Asia/Shanghai"],["Yaowan",34.1833,118.0667,"Asia/Shanghai"],["Mujiayingzi",42.1167,118.7833,"Asia/Shanghai"],["丁家镇 · Dingjia",29.409,106.1423,"Asia/Shanghai"],["阆中 · Langzhong",31.5504,105.9938,"Asia/Shanghai"],["莲峰 · Liancheng",25.7183,116.7489,"Asia/Shanghai"],["江北 · Jiangbei",29.7283,106.6351,"Asia/Shanghai"],["龙港 · Longgang",37.6518,120.3306,"Asia/Shanghai"],["Taitou",37.0273,118.6339,"Asia/Shanghai"],["姑熟 · Gushu",31.5605,118.4815,"Asia/Shanghai"],["分水镇 · Fenshui",30.7197,108.0833,"Asia/Shanghai"],["Wujing",36.45,118.4,"Asia/Shanghai"],["五城镇 · Wucheng",29.6008,118.1749,"Asia/Shanghai"],["余下镇 · Yuxia",34.0615,108.6291,"Asia/Shanghai"],["汝南 · Runan",33.0002,114.3459,"Asia/Shanghai"],["Gucheng",36.9535,118.7625,"Asia/Shanghai"],["Taozhuang",34.85,117.3333,"Asia/Shanghai"],["三道河子镇 · Sandaohezi",44.326,85.6201,"Asia/Urumqi"],["永北 · Yongbei",26.6462,100.7807,"Asia/Shanghai"],["大泽山 · Dazeshan",36.9887,119.9222,"Asia/Shanghai"],["朱家角镇 · Zhujiajiao",31.1076,121.057,"Asia/Shanghai"],["乌镇 · Wuzhen",30.7454,120.4851,"Asia/Shanghai"],["江口镇 · Jiangkou",25.4869,119.1983,"Asia/Shanghai"],["玛沁县 · Maqin County",34.4744,100.245,"Asia/Shanghai"],["南浦镇 · Pucheng",27.9233,118.5333,"Asia/Shanghai"],["白马井镇 · Baimajing",19.712,109.218,"Asia/Shanghai"],["团堡镇 · Tuanbao",30.3367,109.1346,"Asia/Shanghai"],["Wenshang",35.7275,116.4961,"Asia/Shanghai"],["明水县 · Mingshui",47.1794,125.9028,"Asia/Shanghai"],["Huiqu",36.2714,119.049,"Asia/Shanghai"],["甘南县 · Gannan",47.9204,123.5005,"Asia/Shanghai"],["Pánlóngchéng Jīngjì Kāifāqū",30.6931,114.2707,"Asia/Shanghai"],["建瓯市 · Jian’ou",27.0415,118.319,"Asia/Shanghai"],["Tashan",34.3361,117.5667,"Asia/Shanghai"],["集贤 · Jixian",46.7259,131.1331,"Asia/Shanghai"],["合作市 · Hezuo",34.9856,102.9094,"Asia/Shanghai"],["海州 · Haizhou",34.5817,119.1289,"Asia/Shanghai"],["Longgu",34.9033,116.8067,"Asia/Shanghai"],["Yigou",35.8114,114.3167,"Asia/Shanghai"],["浪头 · Langtoucun",40.0407,124.3353,"Asia/Shanghai"],["Xiaoweizhai",26.1903,107.5125,"Asia/Shanghai"],["安图 · Antu",43.1025,128.9085,"Asia/Shanghai"],["Suozhen",36.9539,118.1047,"Asia/Shanghai"],["太伏 · Taifu",28.982,105.637,"Asia/Shanghai"],["Shiqiaozi",36.1617,119.2631,"Asia/Shanghai"],["鸡东 · Jidong",45.256,131.1164,"Asia/Shanghai"],["分宜县 · Fenyi",27.8112,114.668,"Asia/Shanghai"],["重龙 · Chonglong",29.7806,104.8522,"Asia/Shanghai"],["Xinglongshan",43.9561,125.4661,"Asia/Shanghai"],["马尔康市 · Barkam",31.9006,102.2209,"Asia/Shanghai"],["潼川 · Tongchuan",31.0941,105.0873,"Asia/Shanghai"],["Shibuzi",36.1239,119.1028,"Asia/Shanghai"],["Lixian",34.19,105.1725,"Asia/Shanghai"],["洪桥 · Hongqiao",26.7684,112.1081,"Asia/Shanghai"],["长白 · Changbai",41.4177,128.1962,"Asia/Shanghai"],["朱沱镇 · Zhutuo",29.0184,105.8488,"Asia/Shanghai"],["定陶 · Dingtao",35.0744,115.5658,"Asia/Shanghai"],["Dongxi",28.7614,106.6611,"Asia/Shanghai"],["巨野镇 · Juye",35.3874,116.0717,"Asia/Shanghai"],["Jing'an",34.4962,116.9225,"Asia/Shanghai"],["额敏镇 · Emin",46.5258,83.6342,"Asia/Urumqi"],["龙潭镇 · Longtan",28.7572,108.9641,"Asia/Shanghai"],["安乡城关镇 · Shenliu",29.4137,112.1643,"Asia/Shanghai"],["Maocun",34.3767,117.2506,"Asia/Shanghai"],["黄陂区 · Huangpi",30.8845,114.3779,"Asia/Shanghai"],["山河村 · Shanhecun",45.7113,128.5803,"Asia/Shanghai"],["Yantongshan",43.2919,126.0094,"Asia/Shanghai"],["Guiren",33.6697,118.1889,"Asia/Shanghai"],["小瀝源 · Siu Lek Yuen",22.3817,114.2126,"Asia/Hong_Kong"],["Zhongxing",33.7039,118.6792,"Asia/Shanghai"],["朗乡镇 · Langxiang",46.9498,128.8685,"Asia/Shanghai"],["巴格其 · Bageqi",37.1407,79.8351,"Asia/Urumqi"],["绥棱县 · Suiling",47.2349,127.1077,"Asia/Shanghai"],["湘阴县 · Wenxing",28.6821,112.8786,"Asia/Shanghai"],["Yingli",37.065,118.8103,"Asia/Shanghai"],["Baishishan",43.5833,127.5667,"Asia/Shanghai"],["宁海 · Ninghai",37.3842,121.6086,"Asia/Shanghai"],["Zhuzhai",34.7611,116.8139,"Asia/Shanghai"],["Jinji",23.2281,110.8261,"Asia/Shanghai"],["Weining",26.85,104.2333,"Asia/Shanghai"],["庆符 · Qingfu",28.437,104.5162,"Asia/Shanghai"],["道口 · Daokou",35.569,114.5159,"Asia/Shanghai"],["Yashan",22.1975,109.9419,"Asia/Shanghai"],["南台镇 · Nantai",40.9241,122.8044,"Asia/Shanghai"],["Changleng",28.7,115.8167,"Asia/Shanghai"],["湖塘 · Hutang",31.5343,119.49,"Asia/Shanghai"],["Sanchuan",26.7504,100.6589,"Asia/Shanghai"],["Sitou",36.3128,118.4119,"Asia/Shanghai"],["玉湖 · Zibihu",26.1143,99.9527,"Asia/Shanghai"],["白帝镇 · Baidi",31.0576,109.5909,"Asia/Shanghai"],["高沟镇 · Gaogou",34.0175,119.1886,"Asia/Shanghai"],["Linghai",41.1653,121.3667,"Asia/Shanghai"],["龙市 · Longshi",30.2147,106.4574,"Asia/Shanghai"],["Xuzhuang",34.2961,117.458,"Asia/Shanghai"],["紫荆路 · Gongyi",34.7553,113.0114,"Asia/Shanghai"],["Qinnan",33.2531,119.9133,"Asia/Shanghai"],["葛兰镇 · Gelan",30.0359,107.1161,"Asia/Shanghai"],["Dalianwan",39.0286,121.695,"Asia/Shanghai"],["长岭 · Changling",44.273,123.9756,"Asia/Shanghai"],["老街 · Bonan",25.4633,99.5283,"Asia/Shanghai"],["Zhuyi",31.0254,109.3856,"Asia/Shanghai"],["清水县 · Yongqing",34.7481,106.1269,"Asia/Shanghai"],["临邛 · Linqiong",30.4159,103.4609,"Asia/Shanghai"],["祁山 · Qishan",29.8443,117.7194,"Asia/Shanghai"],["Lanshan",33.9361,117.725,"Asia/Shanghai"],["Anjiang",27.3194,110.1031,"Asia/Shanghai"],["新青 · Xinqing",48.287,129.5234,"Asia/Shanghai"],["杜尔伯特蒙古族自治县 · Dorbod",46.8614,124.442,"Asia/Shanghai"],["宁乡县 · Yutan",28.2583,112.5605,"Asia/Shanghai"],["Ahu",34.3766,118.6031,"Asia/Shanghai"],["巴彦县 · Bayan",46.0762,127.3937,"Asia/Shanghai"],["里岔 · Licha",36.0572,119.7833,"Asia/Shanghai"],["屏锦镇 · Pingjin",30.6118,107.545,"Asia/Shanghai"],["石林镇 · Shilin",24.8188,103.3324,"Asia/Shanghai"],["Liguo",34.5529,117.333,"Asia/Shanghai"],["Huangnihe",43.5583,128.0239,"Asia/Shanghai"],["満州里市 · Manzhouli",49.6,117.4333,"Asia/Shanghai"],["护国 · Huguo",28.5863,105.3666,"Asia/Shanghai"],["Liuji",34.3583,117.0528,"Asia/Shanghai"],["Liangzhai",34.5,116.75,"Asia/Shanghai"],["Wangji",33.9833,117.75,"Asia/Shanghai"],["南县 · Nanzhou",29.3638,112.4065,"Asia/Shanghai"],["云锦 · Yunjin",29.0818,105.6433,"Asia/Shanghai"],["罗泾镇 · Luojing",31.4782,121.3391,"Asia/Shanghai"],["秀茂坪 · Sau Mau Ping",22.3202,114.235,"Asia/Hong_Kong"],["Fangcun",34.0864,117.4736,"Asia/Shanghai"],["溪湖 · Xihu",23.9568,120.4792,"Asia/Taipei"],["Yongjian",25.4254,100.2124,"Asia/Shanghai"],["Xiazhuang",25.4,100.8333,"Asia/Shanghai"],["明村 · Mingcun",36.7536,119.6408,"Asia/Shanghai"],["Lingcheng",33.8164,118.1136,"Asia/Shanghai"],["金顶 · Jinding",26.439,99.4406,"Asia/Shanghai"],["清溪场镇 · Qingxichang",28.4042,108.9044,"Asia/Shanghai"],["金华 · Jinhua",26.538,99.9172,"Asia/Shanghai"],["Buzhuang",36.9122,119.5566,"Asia/Shanghai"],["Shiquan",33.0408,108.2364,"Asia/Shanghai"],["Yangtun",34.8833,116.8833,"Asia/Shanghai"],["章凤 · Zhangfeng",24.1906,97.8019,"Asia/Shanghai"],["潮洲 · Chaozhou",22.5499,120.5407,"Asia/Taipei"],["Yousuo",26.0253,100.0677,"Asia/Shanghai"],["Zhaozhuang",34.7389,116.4556,"Asia/Shanghai"],["Tangzhang",34.1478,117.254,"Asia/Shanghai"],["Lingwu",38.1019,106.3402,"Asia/Shanghai"],["Taoyuan",33.8528,117.7703,"Asia/Shanghai"],["北苏镇 · Beisu",38.1548,114.8069,"Asia/Shanghai"],["武陵源区 · Wulingyuan",29.3494,110.5441,"Asia/Shanghai"],["Malingshan",34.2035,118.3565,"Asia/Shanghai"],["Hualong",36.9459,118.5886,"Asia/Shanghai"],["店埠 · Dianbu",36.7017,120.3511,"Asia/Shanghai"],["大兴 · Daxing",27.2637,100.8639,"Asia/Shanghai"],["Puji",36.1319,119.7211,"Asia/Shanghai"],["星桥镇 · Xingqiao",30.3994,120.2517,"Asia/Shanghai"],["松岭 · Songlingcun",40.2939,118.2714,"Asia/Shanghai"],["云山 · Yunshan",36.8242,120.2261,"Asia/Shanghai"],["Dapeng",34.2844,117.0752,"Asia/Shanghai"],["Sanzhuang",35.5033,119.1717,"Asia/Shanghai"],["大堂区 · Sé",22.1909,113.5473,"Asia/Macau"],["扎瓦 · Zhawa",37.2142,79.629,"Asia/Shanghai"],["Jitai",36.7572,118.7387,"Asia/Shanghai"],["Zizhuang",34.3615,117.4882,"Asia/Shanghai"],["Liangji",33.9639,117.9694,"Asia/Shanghai"],["安文镇 · Ānwén",29.0595,120.4377,"Asia/Shanghai"],["Dashahe",34.5385,116.6245,"Asia/Shanghai"],["渡舟镇 · Duzhou",29.8785,107.0784,"Asia/Shanghai"],["中心 · Zhongxin",26.6167,101.2715,"Asia/Shanghai"],["Weimiao",34.5833,117.0667,"Asia/Shanghai"],["調景嶺 · Tiu Keng Leng",22.2985,114.2511,"Asia/Hong_Kong"],["Qishan",34.6333,116.8,"Asia/Shanghai"],["风顺堂区 · São Lourenço",22.1885,113.5349,"Asia/Macau"],["泽普 · Zepu",38.1887,77.2708,"Asia/Urumqi"],["Liuquan",34.4342,117.2983,"Asia/Shanghai"],["Zhefang",24.2667,98.2833,"Asia/Shanghai"],["三汇镇 · Sanhui",30.0817,106.5912,"Asia/Shanghai"],["店子 · Dianzi",36.9011,119.8657,"Asia/Shanghai"],["盘龙镇 · Panlong",29.5003,105.3707,"Asia/Shanghai"],["Gangshang",34.5215,118.1184,"Asia/Shanghai"],["Guanshan",33.7983,117.8664,"Asia/Shanghai"],["打通镇 · Datong",28.5965,106.6675,"Asia/Shanghai"],["水江镇 · Shuijiang",29.2476,107.2844,"Asia/Shanghai"],["Guanzhuang",36.2633,119.1939,"Asia/Shanghai"],["白碱滩镇 · Baijiantan",45.693,85.1394,"Asia/Urumqi"],["Shanji",34.2047,117.5956,"Asia/Shanghai"],["Lhünzhub",29.8931,91.2617,"Asia/Shanghai"],["宁强县 · Hanyuan",32.834,106.2503,"Asia/Shanghai"],["洋河 · Yanghe",36.1381,119.9135,"Asia/Shanghai"],["南涧 · Nanjian",25.0449,100.5144,"Asia/Shanghai"],["纳溪 · Naxi",28.7742,105.3649,"Asia/Shanghai"],["珍溪镇 · Zhenxi",29.8993,107.4645,"Asia/Shanghai"],["LOHAS Park",22.2932,114.2725,"Asia/Hong_Kong"],["永新镇 · Yongxin",28.9667,106.5333,"Asia/Shanghai"],["Changdian",34.7759,116.5834,"Asia/Shanghai"],["Xinglou",34.5667,117.8278,"Asia/Shanghai"],["Mihe",36.621,118.5287,"Asia/Shanghai"],["工卡 · Maizhokunggar",29.8377,91.7289,"Asia/Shanghai"],["双河镇 · Shuanghe",29.3207,105.5694,"Asia/Shanghai"],["广顺 · Guangshun",29.3748,105.5265,"Asia/Shanghai"],["高粱镇 · Gaoliang",30.8239,108.3022,"Asia/Shanghai"],["东成镇 · Dongcheng",19.7087,109.4561,"Asia/Shanghai"],["锦江镇 · Jinjiang",28.4005,116.8998,"Asia/Shanghai"],["高安镇 · Gao’an",30.2902,107.462,"Asia/Shanghai"],["Jiawang Zhen",34.422,117.4676,"Asia/Shanghai"],["海阳镇 · Haiyang",29.7861,118.177,"Asia/Shanghai"],["Gupi",34.1139,117.8828,"Asia/Shanghai"],["Xinhe",34.1861,117.9878,"Asia/Shanghai"],["Ningdong",38.1614,106.585,"Asia/Shanghai"],["先锋镇 · Xianfeng",29.21,106.3001,"Asia/Shanghai"],["Gaoliu",34.3167,118.5167,"Asia/Shanghai"],["Liutuan",36.9333,119.3833,"Asia/Shanghai"],["大安镇 · Da’an",29.3831,106.0148,"Asia/Shanghai"],["Chenlou",34.3889,118.05,"Asia/Shanghai"],["Qing’an",33.9694,117.8806,"Asia/Shanghai"],["石堰镇 · Shiyan",30.0834,107.1722,"Asia/Shanghai"],["大路镇 · Dalu",29.7298,106.2177,"Asia/Shanghai"],["Qianliu",22.9,100.2,"Asia/Shanghai"],["Weiji",34.0333,117.95,"Asia/Shanghai"],["Wangfen",36.55,118.3833,"Asia/Shanghai"],["接龙镇 · Jielong",29.2495,106.7766,"Asia/Shanghai"],["Santangpu",27.4056,111.9869,"Asia/Shanghai"],["双福镇 · Shuangfu",29.4136,106.2701,"Asia/Shanghai"],["当曲卡 · Damxung",30.478,91.1055,"Asia/Shanghai"],["白梓镇 · Baizi",30.094,105.713,"Asia/Shanghai"],["岳溪镇 · Yuexi",30.9113,108.1593,"Asia/Shanghai"],["東港 · Donggang",22.4652,120.4493,"Asia/Taipei"],["崔家集 · Cuijiaji",36.6253,119.7133,"Asia/Shanghai"],["界石 · Jieshi",29.3896,106.6078,"Asia/Shanghai"],["大牟家 · Damoujia",36.5436,119.8133,"Asia/Shanghai"],["Shunhe",34.8418,116.5572,"Asia/Shanghai"],["Gongqingcheng",29.2492,115.8095,"Asia/Shanghai"],["Hekou",34.5778,116.8139,"Asia/Shanghai"],["Hanwang",34.1944,117.0833,"Asia/Shanghai"],["钓鱼城 · Diaoyucheng",29.9988,106.2661,"Asia/Shanghai"],["长沙镇 · Changsha",31.0,108.3046,"Asia/Shanghai"],["孔滩 · Kongtan",29.1441,104.6747,"Asia/Shanghai"],["Sunlou",34.6667,116.5833,"Asia/Shanghai"],["共和县 · Qabqa",36.2814,100.6131,"Asia/Shanghai"],["Nanpeng",29.3347,106.6522,"Asia/Shanghai"],["愉群翁 · Yuqunweng",43.8744,81.6206,"Asia/Urumqi"],["Shaji",33.9,118.1333,"Asia/Shanghai"],["南桐镇 · Nantong",28.9439,106.8819,"Asia/Shanghai"],["和静县 · Hejing",42.3107,86.391,"Asia/Shanghai"],["三教镇 · Sanjiao",29.488,105.8676,"Asia/Shanghai"],["Sankeshu",26.5637,108.0658,"Asia/Shanghai"],["芒市 · Mangshi",24.4533,98.5704,"Asia/Shanghai"],["Biantang",34.4233,117.6454,"Asia/Shanghai"],["白涛镇 · Baitao",29.5508,107.4869,"Asia/Shanghai"],["石角镇 · Shijiao",28.9244,106.7561,"Asia/Shanghai"],["美孚 · Mei Foo",22.3372,114.1386,"Asia/Hong_Kong"],["Chefushan",34.4753,117.7512,"Asia/Shanghai"],["Shuanggou",34.0353,117.5781,"Asia/Shanghai"],["Gudong",25.3417,98.483,"Asia/Shanghai"],["Pingli",32.3847,109.3456,"Asia/Shanghai"],["Zouzhuang",34.6,118.05,"Asia/Shanghai"],["Dangjiang",21.65,109.1167,"Asia/Shanghai"],["屏山 · Ping Shan",22.4411,114.0061,"Asia/Hong_Kong"],["塘坝镇 · Tangba",30.0165,105.7973,"Asia/Shanghai"],["Nongzhang",24.616,97.8822,"Asia/Shanghai"],["河口 · Hekou",22.5385,104.0111,"Asia/Shanghai"],["Yanguan",34.2639,105.4639,"Asia/Shanghai"],["Shangyun",23.0519,99.8284,"Asia/Shanghai"],["Dahuangshan",34.2934,117.3444,"Asia/Shanghai"],["Hegou",34.4083,118.1222,"Asia/Shanghai"],["Qisha",21.575,108.479,"Asia/Shanghai"],["水土镇 · Shuitu",29.7822,106.4974,"Asia/Shanghai"],["古岘 · Guxian",36.7341,120.2256,"Asia/Shanghai"],["Jiushan",36.1961,118.465,"Asia/Shanghai"],["Xindian",34.1428,118.3353,"Asia/Shanghai"],["邮亭镇 · Youting",29.4313,105.7376,"Asia/Shanghai"],["Qingshanquan",34.4164,117.3631,"Asia/Shanghai"],["草街 · Caojie",29.9976,106.3902,"Asia/Shanghai"],["Beiwangli",38.6208,115.3964,"Asia/Shanghai"],["竹山 · Zhushan",23.7555,120.682,"Asia/Taipei"],["双龙 · Shuanglong",28.4521,104.3449,"Asia/Shanghai"],["高家镇 · Gaojia",30.0204,107.86,"Asia/Shanghai"],["蔡家镇 · Caijia",28.9089,106.3404,"Asia/Shanghai"],["日庄 · Rizhuang",36.9508,120.3831,"Asia/Shanghai"],["罕艾日克 · Han’airike",37.5417,80.1174,"Asia/Urumqi"],["石壕镇 · Shihao",28.5408,106.6807,"Asia/Shanghai"],["静观镇 · Jingguan",29.8955,106.5639,"Asia/Shanghai"],["二林 · Erlin",23.9005,120.3689,"Asia/Taipei"],["蕨溪 · Juexi",28.9241,104.2615,"Asia/Shanghai"],["Gaozuo",33.9031,118.0397,"Asia/Shanghai"],["中和镇 · Zhonghe",31.1766,108.1316,"Asia/Shanghai"],["轮胎县 · Luntai",41.7795,84.2705,"Asia/Shanghai"],["奎牙 · Kuiya",37.296,79.6358,"Asia/Shanghai"],["Zhigou",35.9167,119.2167,"Asia/Shanghai"],["博望山 · Bowangshan",28.3077,105.0522,"Asia/Shanghai"],["Huangji",34.4333,116.9833,"Asia/Shanghai"],["Zhengji",34.4372,117.0389,"Asia/Shanghai"],["Jiangping",21.6,108.15,"Asia/Shanghai"],["Baichihe",36.1156,119.5333,"Asia/Shanghai"],["Tushan",34.2208,117.8369,"Asia/Shanghai"],["官渡镇 · Guandu",30.9559,109.847,"Asia/Shanghai"],["剑阁县 · Pu’an",32.0373,105.4669,"Asia/Shanghai"],["啟德 · Kai Tak",22.3242,114.1974,"Asia/Hong_Kong"],["白朗县 · Luobuqiongzi",29.1667,89.25,"Asia/Shanghai"],["额尔古纳市 · E’erguna",50.2236,120.1709,"Asia/Shanghai"],["Daizhuang",34.5139,117.8528,"Asia/Shanghai"],["竹海 · Zhuhai",29.3694,105.8832,"Asia/Shanghai"],["Qushi",25.2167,98.6,"Asia/Shanghai"],["Guangtong",25.1686,101.7486,"Asia/Shanghai"],["马力乡 · Mali",34.6646,104.6978,"Asia/Shanghai"],["马连庄镇 · Malianzhuang",37.0748,120.4625,"Asia/Shanghai"],["凤翔镇 · Luobei",47.576,130.8131,"Asia/Shanghai"],["铁桥镇 · Tieqiao",31.04,108.1336,"Asia/Shanghai"],["Wangyuan",38.3841,106.272,"Asia/Shanghai"],["古陶镇 · Gutao",37.2025,112.1781,"Asia/Shanghai"],["曲水 · Quxu",29.3554,90.7321,"Asia/Shanghai"],["琼中黎族苗族自治县 · Yinggen",19.0383,109.84,"Asia/Shanghai"],["Wuduan",34.5744,117.0953,"Asia/Shanghai"],["天城镇 · Tiancheng",30.8676,108.3697,"Asia/Shanghai"],["蔺市 · Linshi",29.667,107.1923,"Asia/Shanghai"],["Shiji",34.2,118.4833,"Asia/Shanghai"],["Naliang",21.6667,107.8667,"Asia/Shanghai"],["白花 · Baihua",29.0942,104.6085,"Asia/Shanghai"],["佐敦 · Jordan",22.3054,114.17,"Asia/Hong_Kong"],["古冶 · Guye",39.7408,118.4507,"Asia/Shanghai"],["兴隆镇 · Xinglong",30.6572,109.446,"Asia/Shanghai"],["来苏镇 · Laisu",29.266,105.778,"Asia/Shanghai"],["澄溪镇 · Chengxi",30.2092,107.2589,"Asia/Shanghai"],["Chongxing",38.0333,106.3,"Asia/Shanghai"],["巡司 · Xunsi",28.1008,104.5606,"Asia/Shanghai"],["百胜镇 · Baisheng",29.8135,107.3926,"Asia/Shanghai"],["吐祥镇 · Tuxiang",30.7129,109.1556,"Asia/Shanghai"],["南门镇 · Nanmen",30.9619,108.2433,"Asia/Shanghai"],["白鹤 · Baihe",31.2635,108.4637,"Asia/Shanghai"],["喀尔赛 · Ka'ersai",37.4842,79.5956,"Asia/Shanghai"],["Anyuan",34.8808,105.2764,"Asia/Shanghai"],["西丽 · Xili",22.5881,113.9479,"Asia/Shanghai"],["罗龙 · Luolong",28.8056,104.8991,"Asia/Shanghai"],["埔子 · Buzi",24.2101,120.5725,"Asia/Taipei"],["Sihu",34.6262,117.9714,"Asia/Shanghai"],["木棠镇 · Mutang",19.8075,109.3454,"Asia/Shanghai"],["Pat Heung",22.4461,114.0923,"Asia/Hong_Kong"],["Shiwan",21.75,109.2,"Asia/Shanghai"],["云台镇 · Yuntai",30.1389,107.2049,"Asia/Shanghai"],["安富镇 · Anfu",29.3594,105.4674,"Asia/Shanghai"],["Mingguang",25.4931,98.5415,"Asia/Shanghai"],["南墅镇 · Nanshu",37.0201,120.3373,"Asia/Shanghai"],["东阳 · Dongyang",29.8329,106.4507,"Asia/Shanghai"],["大兴镇 · Daxing",29.556,106.16,"Asia/Shanghai"],["Gangtou",34.3174,118.2072,"Asia/Shanghai"],["赵家镇 · Zhaojia",31.0813,108.4116,"Asia/Shanghai"],["双槐镇 · Shuanghuai",30.1842,106.5558,"Asia/Shanghai"],["名山 · Mingshan",29.8783,107.6992,"Asia/Shanghai"],["陈食镇 · Chenshi",29.3145,105.9926,"Asia/Shanghai"],["三江镇 · Sanjiang",28.9447,106.7106,"Asia/Shanghai"],["Chenghai",26.4617,100.6786,"Asia/Shanghai"],["保家镇 · Baojia",29.4387,108.3132,"Asia/Shanghai"],["Liji",33.7667,117.7833,"Asia/Shanghai"],["石船镇 · Shichuan",29.7658,106.8228,"Asia/Shanghai"],["城关镇 · Huixian Chengguanzhen",33.7683,106.0808,"Asia/Shanghai"],["温泉镇 · Wenquan",31.3591,108.5222,"Asia/Shanghai"],["竹园镇 · Zhuyuan",31.3022,109.2581,"Asia/Shanghai"],["西林吉 · Xilinji",52.9906,123.2352,"Asia/Shanghai"],["Mangbang",24.9319,98.6701,"Asia/Shanghai"],["Lequn",22.5776,113.8739,"Asia/Shanghai"],["白什坎特 · Baishikante",38.4596,77.479,"Asia/Shanghai"],["Whampoa",22.305,114.1902,"Asia/Hong_Kong"],["Jinzhongzi",36.3346,119.2581,"Asia/Shanghai"],["十里 · Shili",33.9518,105.2925,"Asia/Shanghai"],["Balu",34.1887,117.9126,"Asia/Shanghai"],["仁义镇 · Renyi",29.5074,105.4783,"Asia/Shanghai"],["公平镇 · Gongping",31.127,109.1972,"Asia/Shanghai"],["太保市 · Taibao",23.4594,120.3322,"Asia/Taipei"],["柏林镇 · Bailin",28.736,106.4604,"Asia/Shanghai"],["嘉川镇 · Jiachuan",32.2091,106.2149,"Asia/Shanghai"],["Choi Wan",22.3339,114.2137,"Asia/Hong_Kong"],["河头店镇 · Hetoudian",37.0184,120.5737,"Asia/Shanghai"],["西湖 · Xihu",29.1002,106.3954,"Asia/Shanghai"],["安香 · Anxiang",38.3834,114.5405,"Asia/Shanghai"],["Xinxing",36.0492,119.5414,"Asia/Shanghai"],["Zhancheng",34.175,117.7629,"Asia/Shanghai"],["Miaozi",36.6386,118.2314,"Asia/Shanghai"],["卫星湖 · Weixinghu",29.2445,105.88,"Asia/Shanghai"],["何埂镇 · Hegeng",29.137,105.8699,"Asia/Shanghai"],["Fate",44.4833,126.5,"Asia/Shanghai"],["堅尼地城 · Kennedy Town",22.2828,114.1295,"Asia/Hong_Kong"],["Longshan",35.0319,106.0806,"Asia/Shanghai"],["长寿湖镇 · Changshouhu",29.9054,107.2379,"Asia/Shanghai"],["Jinshan",34.8114,105.4344,"Asia/Shanghai"],["沙河 · Shahe",22.5523,113.9791,"Asia/Shanghai"],["中河 · Zhonghe",25.0557,98.3999,"Asia/Shanghai"],["晋城 · Jincheng",24.4341,118.3171,"Asia/Taipei"],["Yingpan",26.45,99.15,"Asia/Shanghai"],["义和镇 · Yihe",29.7373,107.2192,"Asia/Shanghai"],["城口县 · Gecheng",31.9486,108.6607,"Asia/Shanghai"],["Mei Foo Sun Chuen",22.3364,114.1402,"Asia/Hong_Kong"],["西和县 · Hanyuan",34.0108,105.2919,"Asia/Shanghai"],["慈云山 · Tsz Wan Shan",22.3525,114.2002,"Asia/Hong_Kong"],["吉里于孜 · Jelilyüzi",43.9749,81.5356,"Asia/Urumqi"],["西螺 · Xiluo",23.7989,120.4634,"Asia/Taipei"],["Wayao",34.3833,118.2333,"Asia/Shanghai"],["滩歌镇 · Tange",34.6276,104.8406,"Asia/Shanghai"],["鸳鸯 · Yuanyang",29.6657,106.5575,"Asia/Shanghai"],["郭嘉镇 · Guojia",34.9728,105.5584,"Asia/Shanghai"],["碧阳镇 · Biyang",29.9289,117.9464,"Asia/Shanghai"],["敦好镇 · Dunhao",31.333,108.3582,"Asia/Shanghai"],["洛碛镇 · Luoqi",29.7223,106.9321,"Asia/Shanghai"],["Qina",26.3094,100.6251,"Asia/Shanghai"],["艾里西湖 · Elixku",38.7092,77.3706,"Asia/Urumqi"],["六峰镇 · Liufeng",34.7345,105.3861,"Asia/Shanghai"],["木洞镇 · Mudong",29.5733,106.8393,"Asia/Shanghai"],["八颗镇 · Bake",29.9006,107.0229,"Asia/Shanghai"],["支坪 · Zhiping",29.2583,106.3586,"Asia/Shanghai"],["达达木图 · Dadamtu",43.9803,81.3142,"Asia/Urumqi"],["社頭 · Shetou",23.898,120.5883,"Asia/Taipei"],["仙龙镇 · Xianlong",29.1511,105.784,"Asia/Shanghai"],["坑口 · Hang Hau",22.3181,114.2699,"Asia/Hong_Kong"],["浩门镇 · Haomen",37.3757,101.622,"Asia/Shanghai"],["龙潭镇 · Longtan",29.4463,107.1022,"Asia/Shanghai"],["聖方濟堂區 · Luhuan",22.1181,113.5519,"Asia/Macau"],["龙兴镇 · Longxing",29.702,106.7911,"Asia/Shanghai"],["大昌镇 · Dachang",31.2686,109.8021,"Asia/Shanghai"],["渭沱镇 · Weituo",30.0398,106.147,"Asia/Shanghai"],["三庙镇 · Sanmiao",30.2376,106.127,"Asia/Shanghai"],["西貢 · Sai Kung",22.3833,114.2667,"Asia/Hong_Kong"],["Zhutang",22.7152,99.8071,"Asia/Shanghai"],["龙河镇 · Longhe",29.8396,107.9851,"Asia/Shanghai"],["石门镇 · Shimen",29.1004,106.033,"Asia/Shanghai"],["蔡家岗镇 · Caijiagang",29.7425,106.4751,"Asia/Shanghai"],["龙河镇 · Longhe",30.0175,107.1804,"Asia/Shanghai"],["康乐镇 · Kangle",31.1128,109.4296,"Asia/Shanghai"],["紫阳县 · Ziyang Chengguanzhen",32.5192,108.5323,"Asia/Shanghai"],["三角镇 · Sanjiao",29.0503,106.7364,"Asia/Shanghai"],["Tai Koo",22.2841,114.2163,"Asia/Hong_Kong"],["Shidui",36.3933,119.3086,"Asia/Shanghai"],["永靖 · Yongjing",23.9215,120.5459,"Asia/Taipei"],["Mapo",34.5167,117.0667,"Asia/Shanghai"],["岚皋县 · Langao Chengguanzhen",32.3003,108.8931,"Asia/Shanghai"],["Puqiakeqi",37.3174,79.7053,"Asia/Shanghai"],["Heqiao",34.4528,116.9,"Asia/Shanghai"],["Yizhuang",34.1565,117.5937,"Asia/Shanghai"],["白羊镇 · Baiyang",30.8164,108.611,"Asia/Shanghai"],["长岭 · Changling",30.7684,108.4844,"Asia/Shanghai"],["庙宇镇 · Miaoyu",30.8687,109.6461,"Asia/Shanghai"],["田中 · Tianzhong",23.8581,120.5857,"Asia/Taipei"],["Taikoo Shing",22.2861,114.2187,"Asia/Hong_Kong"],["油塘 · Yau Tong",22.2957,114.236,"Asia/Hong_Kong"],["荒地 · Huangdi",38.809,77.4486,"Asia/Shanghai"],["涛源 · Taoyuan",26.2283,100.56,"Asia/Shanghai"],["海头镇 · Haitou",19.5056,108.9505,"Asia/Shanghai"],["古溪镇 · Guxi",30.3303,105.8721,"Asia/Shanghai"],["塔尕尔其 · Tage'erqi",38.5452,77.2573,"Asia/Shanghai"],["吴家镇 · Wujia",29.6348,105.3911,"Asia/Shanghai"],["龙桥 · Longqiao",29.7103,107.2944,"Asia/Shanghai"],["五营乡 · Wuying",35.0149,105.8988,"Asia/Shanghai"],["莲花 · Lianhua",35.0616,105.7911,"Asia/Shanghai"],["新妙镇 · Xinmiao",29.6553,107.0499,"Asia/Shanghai"],["Zhelou",24.9667,105.8167,"Asia/Shanghai"],["新田镇 · Xintian",30.6987,108.4019,"Asia/Shanghai"],["朱溪镇 · Zhuxi",29.5361,105.6668,"Asia/Shanghai"],["Liushan",36.4497,118.7602,"Asia/Shanghai"],["龙凤 · Longfeng",29.8153,106.4291,"Asia/Shanghai"],["侣俸镇 · Lüfeng",29.8583,105.9731,"Asia/Shanghai"],["雅瓦 · Yawa",37.4119,79.5143,"Asia/Shanghai"],["Wushan",36.2473,118.8383,"Asia/Shanghai"],["大角咀 · Tai Kok Tsui",22.3215,114.163,"Asia/Hong_Kong"],["双江镇 · Shuangjiang",30.2175,105.7452,"Asia/Shanghai"],["双河口 · Shuanghekou",30.754,108.3696,"Asia/Shanghai"],["复兴镇 · Fuxing",29.8191,106.5571,"Asia/Shanghai"],["麻旺镇 · Mawang",28.8933,108.9511,"Asia/Shanghai"],["社坛镇 · Shetan",29.9892,107.6152,"Asia/Shanghai"],["北港 · Beigang",23.5701,120.3016,"Asia/Taipei"],["北斗 · Beidou",23.8729,120.5243,"Asia/Taipei"],["双凤镇 · Shuangfeng",30.0233,106.4296,"Asia/Shanghai"],["熊家镇 · Xiongjia",30.9016,108.4337,"Asia/Shanghai"],["保亭黎族苗族自治县 · Baocheng",18.6403,109.6994,"Asia/Shanghai"],["巴彦岱 · Bayandai",43.9659,81.2485,"Asia/Shanghai"],["望德堂区 · São Lázaro",22.1999,113.549,"Asia/Macau"],["荣隆镇 · Ronglong",29.4359,105.4487,"Asia/Shanghai"],["Shawei",22.52,114.0338,"Asia/Shanghai"],["聚奎镇 · Jukui",30.6359,107.5963,"Asia/Shanghai"],["南平镇 · Nanping",29.0864,106.9872,"Asia/Shanghai"],["Wuhe",24.8591,98.6678,"Asia/Shanghai"],["Guofu",28.85,106.6014,"Asia/Shanghai"],["九龙山镇 · Jiulongshan",31.1944,108.2509,"Asia/Shanghai"],["周嘉镇 · Zhoujia",30.4191,107.5385,"Asia/Shanghai"],["和硕县 · Tewulike",42.2586,86.8573,"Asia/Shanghai"],["何坝 · Heba",33.9362,105.2163,"Asia/Shanghai"],["永兴镇 · Yongxing",28.9897,106.1761,"Asia/Shanghai"],["Haojiaqiao",38.0167,106.2833,"Asia/Shanghai"],["Shaodian",34.1333,118.4333,"Asia/Shanghai"],["米夏 · Mixia",38.454,77.2492,"Asia/Shanghai"],["下寺镇 · Xiasi",32.29,105.5133,"Asia/Shanghai"],["马武镇 · Mawu",29.5925,107.3134,"Asia/Shanghai"],["萨依巴格 · Saybag",37.1497,79.6583,"Asia/Urumqi"],["福田镇 · Futian",31.222,109.7107,"Asia/Shanghai"],["德庆 · Dagzê",29.6733,91.3453,"Asia/Shanghai"],["阿尔山市 · Wenquan",47.1756,119.9481,"Asia/Shanghai"],["Rongjiang",26.55,101.25,"Asia/Shanghai"],["Huzhai",34.6694,117.0083,"Asia/Shanghai"],["大进镇 · Dajin",31.5096,108.4458,"Asia/Shanghai"],["Anfu",34.9728,105.6303,"Asia/Shanghai"],["Shunzhou",26.6212,100.5543,"Asia/Shanghai"],["回龙镇 · Huilong",30.5296,107.481,"Asia/Shanghai"],["汾河镇 · Fenhe",31.1372,109.5221,"Asia/Shanghai"],["Jiangzhuang",34.4917,117.3972,"Asia/Shanghai"],["龙驹镇 · Longju",30.6109,108.6352,"Asia/Shanghai"],["郭勒木德镇 · Guōlèmùdé",36.4293,94.8246,"Asia/Shanghai"],["城关镇 · Tanchang Chengguanzhen",34.0446,104.3946,"Asia/Shanghai"],["峰高镇 · Fenggao",29.4269,105.6751,"Asia/Shanghai"],["Baliwan",34.8476,105.3704,"Asia/Shanghai"],["Dasheng",36.32,118.8554,"Asia/Shanghai"],["Taolin",35.8001,119.534,"Asia/Shanghai"],["石梨 · Shek Lei",22.3661,114.1398,"Asia/Hong_Kong"],["焉耆镇 · Yanqi",42.0632,86.5718,"Asia/Shanghai"],["中和镇 · Zhonghe",19.7428,109.3449,"Asia/Shanghai"],["土地垭 · Dade",31.2129,108.3403,"Asia/Shanghai"],["安澜 · Anlan",29.2472,106.5942,"Asia/Shanghai"],["乌达力克 · Wudalike",38.3618,77.1297,"Asia/Shanghai"],["旧县 · Jiuxian",29.862,106.2029,"Asia/Shanghai"],["郭家镇 · Guojia",31.2953,108.481,"Asia/Shanghai"],["城关镇 · Wenxian Chengguanzhen",32.9471,104.6814,"Asia/Shanghai"],["文峰镇 · Wenfeng",31.4049,109.2346,"Asia/Shanghai"],["松柏 · Songbai",31.7569,110.6725,"Asia/Shanghai"],["闸口社区 · Zhakou",21.7066,109.475,"Asia/Shanghai"],["中敖镇 · Zhong’ao",29.765,105.6664,"Asia/Shanghai"],["Yengisar",38.9258,76.1714,"Asia/Shanghai"],["道成 · Daocheng",29.0379,100.2974,"Asia/Shanghai"],["郁山镇 · Yushan",29.5328,108.425,"Asia/Shanghai"],["天府镇 · Tianfu",29.8741,106.4982,"Asia/Shanghai"],["平凯镇 · Pingkai",28.426,108.9959,"Asia/Shanghai"],["Shuangtang",34.3653,118.4747,"Asia/Shanghai"],["望洪一队 · Wanghong",38.2125,106.225,"Asia/Shanghai"],["沙坪镇 · Shaping",30.4746,107.4359,"Asia/Shanghai"],["甘宁镇 · Ganning",30.6691,108.2805,"Asia/Shanghai"],["Jinhu",24.4394,118.4211,"Asia/Taipei"],["平滩镇 · Pingtan",29.8459,105.8778,"Asia/Shanghai"],["Shagang",21.6667,109.0333,"Asia/Shanghai"],["夏格庄 · Xiagezhuang",36.6931,120.4347,"Asia/Shanghai"],["统景镇 · Tongjing",29.8565,106.8448,"Asia/Shanghai"],["隆盛镇 · Longsheng",29.0814,106.8164,"Asia/Shanghai"],["兴义镇 · Xingyi",29.9555,107.8165,"Asia/Shanghai"],["安稳镇 · Anwen",28.68,106.7565,"Asia/Shanghai"],["新港 · Xingang",23.5574,120.346,"Asia/Taipei"],["三道岭露天矿五七农场 · Sandaoling Lutiankuang Wuqi Nongchang",43.0148,92.8828,"Asia/Urumqi"],["余家镇 · Yujia",30.8115,107.9538,"Asia/Shanghai"],["洪湖镇 · Honghu",30.0004,106.952,"Asia/Shanghai"],["燕窝镇 · Yanwo",30.3318,106.0736,"Asia/Shanghai"],["勐腊 · Mengla",21.4623,101.5637,"Asia/Shanghai"],["虎峰镇 · Hufeng",29.7155,106.1109,"Asia/Shanghai"],["于田县 · Mugala",36.8545,81.6642,"Asia/Urumqi"],["上帕 · Shangpa",26.9195,98.9516,"Asia/Shanghai"],["Chahe",34.5333,117.8833,"Asia/Shanghai"],["叶堡镇 · Yebao",34.9372,105.6467,"Asia/Shanghai"],["Whampoa Garden",22.3053,114.1894,"Asia/Hong_Kong"],["Taiping",24.6612,97.8526,"Asia/Shanghai"],["那曲市 · Nagqu",31.4768,92.0573,"Asia/Shanghai"],["抚远 · Fuyuan",48.3635,134.2984,"Asia/Shanghai"],["天都城 · Tianducheng",30.3887,120.2426,"Asia/Shanghai"],["尼木 · Nyêmo",29.4374,90.1485,"Asia/Shanghai"],["Xihu",35.4493,119.2361,"Asia/Shanghai"],["洛峪 · Luoyu",33.841,105.2312,"Asia/Shanghai"],["恰热克 · Qarek",38.3722,76.9903,"Asia/Urumqi"],["伊什库力 · Yishikuli",38.4889,77.2014,"Asia/Urumqi"],["安化镇 · Anhua",33.5053,105.0478,"Asia/Shanghai"],["胡杨河 · Huyanghe",44.6984,84.8336,"Asia/Shanghai"],["Jingui",38.5,106.4167,"Asia/Shanghai"],["大长山岛镇 · Dachang Shandao",39.2756,122.6,"Asia/Shanghai"],["Nuozhadu",22.5782,100.2692,"Asia/Shanghai"],["恆春鎮 · Hengchun",22.0042,120.7439,"Asia/Taipei"],["铜溪镇 · Tongxi",30.0005,106.1304,"Asia/Shanghai"],["砚台镇 · Yantai",30.1467,107.3196,"Asia/Shanghai"],["云龙镇 · Yunlong",30.5228,107.642,"Asia/Shanghai"],["梅江镇 · Meijiang",28.2636,109.0268,"Asia/Shanghai"],["草堂镇 · Caotang",31.0902,109.624,"Asia/Shanghai"],["油麻地 · Yau Ma Tei",22.3138,114.1686,"Asia/Hong_Kong"],["那龙镇 · Nalong",22.037,112.2089,"Asia/Shanghai"],["托木吾斯塘 · Tuomuwusitang",38.3631,77.2315,"Asia/Shanghai"],["Lower Wong Tai Sin Estate (I & II)",22.3392,114.1944,"Asia/Hong_Kong"],["朝天 · Chaotian",32.6446,105.885,"Asia/Shanghai"],["坪山镇 · Pingshan",30.0966,107.4244,"Asia/Shanghai"],["西川 · Xichuan",35.0305,106.063,"Asia/Shanghai"],["South Horizons",22.2438,114.1483,"Asia/Hong_Kong"],["埤頭 · Pitou",23.895,120.4786,"Asia/Taipei"],["Xindian",25.2814,101.5583,"Asia/Shanghai"],["清溪镇 · Qingxi",29.7971,107.4575,"Asia/Shanghai"],["双龙镇 · Shuanglong",29.9597,107.2036,"Asia/Shanghai"],["吴滩镇 · Wutan",29.257,106.0629,"Asia/Shanghai"],["South Horizons (Estate)",22.2441,114.1462,"Asia/Hong_Kong"],["礼顿山 · Leighton Hill",22.2761,114.184,"Asia/Hong_Kong"],["东温泉 · Dongwenquan",29.4561,106.8578,"Asia/Shanghai"],["十直镇 · Shizhi",30.053,107.7943,"Asia/Shanghai"],["Shiqiao",34.1539,105.1297,"Asia/Shanghai"],["拉依喀 · Layka",37.0769,79.7317,"Asia/Urumqi"],["万古镇 · Wangu",29.6824,105.9355,"Asia/Shanghai"],["圣灯山 · Tiaoshi",29.2772,106.6425,"Asia/Shanghai"],["官庄镇 · Guanzhuang",28.5078,109.0114,"Asia/Shanghai"],["Heshan",35.5234,119.5101,"Asia/Shanghai"],["隆兴镇 · Longxing",30.1919,106.0588,"Asia/Shanghai"],["竹园 · Chuk Yuen",22.3454,114.1933,"Asia/Hong_Kong"],["Ruidian",25.5317,98.4086,"Asia/Shanghai"],["冈厦 · Gangxia",22.5403,114.0614,"Asia/Shanghai"],["溪洲 · Xizhou",24.2767,120.6892,"Asia/Taipei"],["三驱镇 · Sanqu",29.6416,105.6216,"Asia/Shanghai"],["青石嘴镇 · Qingshizui",37.4667,101.4333,"Asia/Shanghai"],["智凤镇 · Zhifeng",29.6544,105.7842,"Asia/Shanghai"],["南雅镇 · Nanya",31.0843,108.0866,"Asia/Shanghai"],["马街 · Majie",33.4594,104.9578,"Asia/Shanghai"],["Zheshan",36.1488,118.9514,"Asia/Shanghai"],["哈达铺镇 · Hadapu Zhen",34.2313,104.223,"Asia/Shanghai"],["龙沙镇 · Longsha",30.6396,108.237,"Asia/Shanghai"],["澄江镇 · Chengjiang",29.8719,106.3847,"Asia/Shanghai"],["新民镇 · Xinmin",30.3976,107.3895,"Asia/Shanghai"],["Leifeng",28.2,112.8461,"Asia/Shanghai"],["Yitang",34.2583,117.8889,"Asia/Shanghai"],["Yinqiao Zhen",25.7543,100.1235,"Asia/Shanghai"],["金桥 · Jinqiao",31.2709,121.5933,"Asia/Shanghai"],["猴桥 · Houqiao",25.3236,98.278,"Asia/Shanghai"],["龙华镇 · Longhua",29.2103,106.2073,"Asia/Shanghai"],["Kuangshi",38.0725,114.0461,"Asia/Shanghai"],["正兴镇 · Zhengxing",29.4574,106.1293,"Asia/Shanghai"],["光村 · Guangcun",19.6419,109.3545,"Asia/Shanghai"],["崇龛镇 · Chongkan",30.1556,105.6122,"Asia/Shanghai"],["新盛镇 · Xinsheng",30.8437,107.7241,"Asia/Shanghai"],["Lijun",38.1858,106.12,"Asia/Shanghai"],["汉王镇 · Hanwang",33.3431,105.0105,"Asia/Shanghai"],["罗田镇 · Luotian",30.5156,108.5595,"Asia/Shanghai"],["河包镇 · Hebao",29.5662,105.5434,"Asia/Shanghai"],["云集镇 · Yunji",29.9194,107.3404,"Asia/Shanghai"],["Dashi",34.8975,105.1864,"Asia/Shanghai"],["小渡镇 · Xiaodu",29.9621,105.8868,"Asia/Shanghai"],["Kuanchuan",34.1664,105.5411,"Asia/Shanghai"],["Mazhan",25.2114,98.484,"Asia/Shanghai"],["阿克萨拉依 · Akesalayi",37.1692,79.6898,"Asia/Shanghai"],["贾嗣镇 · Jiasi",29.1157,106.4469,"Asia/Shanghai"],["两水镇 · Liangshui",33.4318,104.8091,"Asia/Shanghai"],["四门 · Simen",34.6222,105.0128,"Asia/Shanghai"],["小沔镇 · Xiaomian",30.1227,106.5344,"Asia/Shanghai"],["中山 · Zhongshan",34.9381,105.8775,"Asia/Shanghai"],["布扎克 · Buzhake",37.0657,79.8,"Asia/Shanghai"],["姜席 · Jiangxi",33.9993,105.1999,"Asia/Shanghai"],["Puchuan",24.7031,98.5701,"Asia/Shanghai"],["依盖尔其 · Yigai'erqi",38.3407,77.4691,"Asia/Shanghai"],["咀台镇 · Zuitai",33.3308,105.6047,"Asia/Shanghai"],["花土沟 · Huatugou",38.2554,90.8679,"Asia/Shanghai"],["塔瓦库勒 · Tawakule",37.7588,80.2165,"Asia/Urumqi"],["青莲 · Qinglian",31.1906,109.2369,"Asia/Shanghai"],["魏店乡 · Weidian",35.1024,105.5656,"Asia/Shanghai"],["杜市 · Dushi",29.15,106.5328,"Asia/Shanghai"],["Shuikou",25.9128,109.3136,"Asia/Shanghai"],["双桥区 · Shuanglu",29.4854,105.7629,"Asia/Shanghai"],["Dafengdong",26.7119,107.8114,"Asia/Shanghai"],["南沱镇 · Nantuo",29.8554,107.5279,"Asia/Shanghai"],["永安镇 · Yong’an",30.3531,107.5129,"Asia/Shanghai"],["鸳鸯镇 · Yuanyang",34.7877,104.7753,"Asia/Shanghai"],["利東 · Lei Tung",22.2405,114.1576,"Asia/Hong_Kong"],["阔依其 · Kuoyiqi",37.3545,79.721,"Asia/Shanghai"],["忠县 · Báigōng Jiēdào",30.2949,108.0337,"Asia/Shanghai"],["朱杨镇 · Zhuyang",29.0642,105.9449,"Asia/Shanghai"],["温亚尔 · Onyar",43.8504,81.7831,"Asia/Urumqi"],["义和镇 · Yihe",31.1573,108.0826,"Asia/Shanghai"],["下路镇 · Xialu",29.9417,108.0844,"Asia/Shanghai"],["华富邨 · Wah Fu",22.2547,114.1362,"Asia/Hong_Kong"],["桑柘镇 · Sangzhe",29.2784,108.3982,"Asia/Shanghai"],["石沱镇 · Shituo",29.7161,107.1356,"Asia/Shanghai"],["田尾 · Tianwei",23.8927,120.524,"Asia/Taipei"],["走马镇 · Zouma",30.5696,108.4375,"Asia/Shanghai"],["Longchi",36.9453,119.3253,"Asia/Shanghai"],["五马 · Wuma",30.8541,109.3765,"Asia/Shanghai"],["深井 · Sham Tseng",22.3667,114.05,"Asia/Hong_Kong"],["西林镇 · Linxi",43.5167,118.0333,"Asia/Shanghai"],["洛塘镇 · Luotang",33.0677,105.2648,"Asia/Shanghai"],["火炉镇 · Huolu",29.3942,107.8725,"Asia/Shanghai"],["临江镇 · Linjiang",29.2452,105.9566,"Asia/Shanghai"],["Yanzibu",34.5056,117.7022,"Asia/Shanghai"],["上磺镇 · Shanghuang",31.3205,109.4842,"Asia/Shanghai"],["白马镇 · Baima",29.3955,107.5394,"Asia/Shanghai"],["祁连县 · Qilian",38.1806,100.2403,"Asia/Shanghai"],["西沱镇 · Xituo",30.4079,108.2173,"Asia/Shanghai"],["Shek Kip Mei Estate",22.3341,114.1653,"Asia/Hong_Kong"],["中興新村 · Zhongxing New Village",23.9591,120.6852,"Asia/Taipei"],["Xiasi",26.5167,107.7833,"Asia/Shanghai"],["潘津 · Panjim",44.0075,81.4247,"Asia/Urumqi"],["南头 · Nantou",22.5356,113.9156,"Asia/Shanghai"],["Choi Wan Estate (I & II)",22.3334,114.2133,"Asia/Hong_Kong"],["二崙 · Erlun",23.7705,120.4134,"Asia/Taipei"],["Fuhuan",28.8338,106.7554,"Asia/Shanghai"],["舟白 · Zhoubai",29.5295,108.8227,"Asia/Shanghai"],["阿瓦提 · Awati",38.6084,77.3964,"Asia/Urumqi"],["Changxin",38.6747,106.3297,"Asia/Shanghai"],["Lushan",26.65,107.7833,"Asia/Shanghai"],["陇城 · Longcheng",35.001,105.9734,"Asia/Shanghai"],["香龙镇 · Xianglong",30.2613,106.5759,"Asia/Shanghai"],["Bojia",26.4672,111.9681,"Asia/Shanghai"],["莿桐 · Citong",23.7575,120.4997,"Asia/Taipei"],["沙河 · Shahe",30.8282,108.3503,"Asia/Shanghai"],["官渡镇 · Guandu",30.081,106.429,"Asia/Shanghai"],["噶尔县 · Gar",32.5012,80.0976,"Asia/Shanghai"],["Renhe",26.4167,101.0167,"Asia/Shanghai"],["骡坪镇 · Luoping",31.2066,110.0868,"Asia/Shanghai"],["龙池镇 · Longchi",28.61,109.0492,"Asia/Shanghai"],["Hehua",24.9702,98.3937,"Asia/Shanghai"],["安坪 · Anping",30.9638,109.345,"Asia/Shanghai"],["英塔木 · Yengitam",43.7458,81.6569,"Asia/Urumqi"],["万州区 · Chenjiaba",30.8077,108.4085,"Asia/Shanghai"],["Chentuan",35.5047,119.2669,"Asia/Shanghai"],["Minning",38.2487,105.9707,"Asia/Shanghai"],["吐外特 · Tuwaite",37.3449,79.7681,"Asia/Shanghai"],["盐井镇 · Yanjing",29.9449,106.3503,"Asia/Shanghai"],["武陵镇 · Wuling",30.5059,108.2588,"Asia/Shanghai"],["Pianjiao",26.0167,100.5833,"Asia/Shanghai"],["尖沙咀 · Tsim Sha Tsui",22.3,114.1667,"Asia/Hong_Kong"],["龙形镇 · Longxing",30.2508,105.9085,"Asia/Shanghai"],["加汗巴格 · Jiahanbage",37.1965,79.7057,"Asia/Shanghai"],["虎城镇 · Hucheng",30.8148,107.5418,"Asia/Shanghai"],["西峪 · Xiyu",34.0516,105.3036,"Asia/Shanghai"],["涞滩镇 · Laitan",30.1758,106.4862,"Asia/Shanghai"],["李溪镇 · Lixi",28.5313,108.611,"Asia/Shanghai"],["甲高镇 · Jiagao",30.8892,109.176,"Asia/Shanghai"],["太平镇 · Taiping",30.262,107.2929,"Asia/Shanghai"],["双石镇 · Shuangshi",29.4003,105.8378,"Asia/Shanghai"],["王五镇 · Wangwu",19.6562,109.2907,"Asia/Shanghai"],["太安镇 · Tai’an",30.066,105.8093,"Asia/Shanghai"],["海棠镇 · Haitang",30.1717,107.2299,"Asia/Shanghai"],["山丹乡 · Shandan",34.7511,104.8313,"Asia/Shanghai"],["卧佛镇 · Wofo",29.9082,105.7871,"Asia/Shanghai"],["松岗 · Songgang",22.7787,113.8454,"Asia/Shanghai"],["Ligang",38.6464,106.4304,"Asia/Shanghai"],["Nanling",22.7112,99.9956,"Asia/Shanghai"],["Xingdaohu",21.7148,109.1321,"Asia/Shanghai"],["Gantang",26.7156,109.7689,"Asia/Shanghai"],["卓家村 · Zhuojiacun",22.1614,113.5564,"Asia/Macau"],["长道镇 · Changdao",34.2049,105.3365,"Asia/Shanghai"],["兴丰 · Xingfeng",34.8611,105.8375,"Asia/Shanghai"],["玉峰山镇 · Yufengshan",29.7198,106.7234,"Asia/Shanghai"],["关坝镇 · Guanba",28.8019,106.8059,"Asia/Shanghai"],["邻封镇 · Linfeng",29.891,107.2197,"Asia/Shanghai"],["战河 · Zhanhe",26.8589,100.914,"Asia/Shanghai"],["卢河 · Luhe",34.0092,105.3402,"Asia/Shanghai"],["八塘镇 · Batang",29.8354,106.2927,"Asia/Shanghai"],["兰洋镇 · Lanyang",19.4614,109.6604,"Asia/Shanghai"],["Jiuhe",26.7627,99.9918,"Asia/Shanghai"],["南丰镇 · Nanfeng",19.4102,109.5502,"Asia/Shanghai"],["伏家镇 · Fujia",33.8189,105.9536,"Asia/Shanghai"],["英阿瓦提 · Ying’awati",37.2987,79.8303,"Asia/Urumqi"],["高桥镇 · Gaoqiao",31.3688,108.2421,"Asia/Shanghai"],["阿拉买提 · Alamaiti",38.582,77.4762,"Asia/Shanghai"],["喀什 · Kax",43.6411,81.87,"Asia/Urumqi"],["Xinlin",51.6667,124.4,"Asia/Shanghai"],["Wu Kai Sha",22.4302,114.2421,"Asia/Hong_Kong"],["焦石镇 · Jiaoshi",29.7161,107.5976,"Asia/Shanghai"],["三芝区 · Sanzhi",25.2578,121.5018,"Asia/Taipei"],["白石镇 · Báishí Zhèn",30.3167,107.8825,"Asia/Shanghai"],["王铺 · Wangpu",35.0571,105.4359,"Asia/Shanghai"],["芒来 · Manglai",37.2752,79.6781,"Asia/Shanghai"],["Xiaying",37.0425,119.4765,"Asia/Shanghai"],["李河镇 · Lihe",30.8161,108.2622,"Asia/Shanghai"],["木耳镇 · Mu’er",29.806,106.6444,"Asia/Shanghai"],["恭门 · Gongmen",34.9414,106.2964,"Asia/Shanghai"],["Guanlong",22.5878,113.944,"Asia/Shanghai"],["临潭县 · Lintan Chengguanzhen",34.6889,103.3524,"Asia/Shanghai"],["惠民镇 · Huimin",29.4619,106.7047,"Asia/Shanghai"],["茨竹镇 · Cizhu",29.9854,106.7398,"Asia/Shanghai"],["夏河县 · Labuleng",35.2013,102.5212,"Asia/Shanghai"],["竹溪镇 · Zhuxi",31.1244,108.2906,"Asia/Shanghai"],["石马镇 · Shima",29.6312,105.8307,"Asia/Shanghai"],["板桥镇 · Banqiao",29.513,105.9534,"Asia/Shanghai"],["蒲吕镇 · Pulü",29.818,106.1593,"Asia/Shanghai"],["Laguna City",22.3055,114.2286,"Asia/Hong_Kong"],["明达镇 · Mingda",30.7263,107.6573,"Asia/Shanghai"],["白云鄂博矿区 · Tongyangdao",41.7703,109.9699,"Asia/Shanghai"],["Beihai",25.08,98.5775,"Asia/Shanghai"],["石堡 · Shibao",34.1079,105.3158,"Asia/Shanghai"],["猛阿 · Meng’a",22.1994,100.4169,"Asia/Shanghai"],["大湾 · Dawan",30.0196,106.8202,"Asia/Shanghai"],["尉犁县 · Yuli",41.337,86.2566,"Asia/Shanghai"],["船湾 · Shuen Wan",22.4677,114.2081,"Asia/Hong_Kong"],["永乐镇 · Yongle",31.0105,109.5048,"Asia/Shanghai"],["永嘉镇 · Yongjia",29.5719,106.0013,"Asia/Shanghai"],["古路镇 · Gulu",31.3301,109.4399,"Asia/Shanghai"],["Panghai",26.7269,108.0636,"Asia/Shanghai"],["博湖镇 · Bohu",41.9787,86.6318,"Asia/Shanghai"],["万顺镇 · Wanshun",30.0401,106.9716,"Asia/Shanghai"],["古勒巴格 · Gulebage",38.4127,77.2303,"Asia/Urumqi"],["青年镇 · Qingnian",28.865,106.8381,"Asia/Shanghai"],["王尹 · Wangyin",34.8339,105.7617,"Asia/Shanghai"],["Zhongchao",26.1375,109.22,"Asia/Shanghai"],["火炭 · Fo Tan",22.3985,114.1929,"Asia/Hong_Kong"],["石岗 · Shigang",31.1361,109.3643,"Asia/Shanghai"],["荔枝碗 · Lai Chi Van",22.1197,113.5511,"Asia/Macau"],["察布查尔自治县 · Chapchal",43.8355,81.1476,"Asia/Urumqi"],["Yongxing",34.2078,105.3289,"Asia/Shanghai"],["谢家湾 · Xiejiawan",34.8121,105.1715,"Asia/Shanghai"],["东塔镇 · Dongta",38.0814,106.3444,"Asia/Shanghai"],["马关 · Maguan",35.0662,106.0332,"Asia/Shanghai"],["和什托洛盖镇 · Hoxtolgay",46.5187,86.0021,"Asia/Shanghai"],["周庄镇 · Zhouzhuang",31.1179,120.8443,"Asia/Shanghai"],["舟曲县 · Zhouqu Chengguanzhen",33.7842,104.3628,"Asia/Shanghai"],["普顺镇 · Pushun",30.4724,107.6033,"Asia/Shanghai"],["新民镇 · Xinmin",30.9034,109.4668,"Asia/Shanghai"],["抛沙镇 · Paosha",33.7235,105.6757,"Asia/Shanghai"],["錦田 · Kam Tin",22.4412,114.0602,"Asia/Hong_Kong"],["斯也克 · Siyeke",36.8853,81.523,"Asia/Urumqi"],["大盛镇 · Dasheng",29.8903,106.8973,"Asia/Shanghai"],["大阳 · Dayang",34.9898,106.0721,"Asia/Shanghai"],["Tsz Ching Estate",22.351,114.2006,"Asia/Hong_Kong"],["Fubang",22.9042,99.8029,"Asia/Shanghai"],["童家溪镇 · Tongjiaxi",29.685,106.4444,"Asia/Shanghai"],["冯家 · Fengjia",29.3931,108.7846,"Asia/Shanghai"],["大树镇 · Dashu",31.2109,109.3215,"Asia/Shanghai"],["金龙镇 · Jinlong",29.5136,106.0606,"Asia/Shanghai"],["红炉镇 · Honglu",29.352,105.7268,"Asia/Shanghai"],["新市 · Xinshi",29.96,107.1041,"Asia/Shanghai"],["沙湾镇 · Shawan",33.6274,104.5637,"Asia/Shanghai"],["江南镇 · Jiangnan",29.7931,107.0371,"Asia/Shanghai"],["仁贤镇 · Renxian",30.6609,107.679,"Asia/Shanghai"],["Shangchong",26.2532,108.6578,"Asia/Shanghai"],["包鸾镇 · Baoluan",29.7642,107.6783,"Asia/Shanghai"],["刘坪 · Liuping",34.8914,105.7192,"Asia/Shanghai"],["八一镇 · Bayi",29.6581,94.3589,"Asia/Shanghai"],["Judian",27.3061,99.6491,"Asia/Shanghai"],["郭村镇 · Guocun",30.5662,108.1693,"Asia/Shanghai"],["Hongzhou",26.1258,109.4089,"Asia/Shanghai"],["Haidong Zhen",25.7098,100.2606,"Asia/Shanghai"],["桥头 · Qiaotou",33.1076,104.8117,"Asia/Shanghai"],["七塘 · Qitang",29.7785,106.2851,"Asia/Shanghai"],["清平镇 · Qingping",29.977,106.5206,"Asia/Shanghai"],["厦村市 · Ha Tsuen",22.4472,113.9916,"Asia/Hong_Kong"],["篆塘镇 · Zhuantang",28.8963,106.6684,"Asia/Shanghai"],["回龙场 · Caohui",30.3973,107.4695,"Asia/Shanghai"],["树人镇 · Shuren",29.9866,107.7392,"Asia/Shanghai"],["Xinyingpan",27.1676,100.9201,"Asia/Shanghai"],["Shigu",26.8685,99.9563,"Asia/Shanghai"],["安居镇 · Anju",29.9907,106.0319,"Asia/Shanghai"],["三间仔 · Sanjianzai",22.7291,113.7758,"Asia/Shanghai"],["吉安镇 · Ji’an",29.159,105.747,"Asia/Shanghai"],["红堡 · Hongbao",34.7519,106.0603,"Asia/Shanghai"],["Yongning",27.8333,100.6667,"Asia/Shanghai"],["大窝口 · Tai Wo Hau",22.3672,114.1235,"Asia/Hong_Kong"],["江口镇 · Jiangkou",29.2396,107.8788,"Asia/Shanghai"],["Wanqiao Zhen",25.7892,100.1228,"Asia/Shanghai"],["高峰镇 · Gaofeng",30.2197,107.4079,"Asia/Shanghai"],["和庆镇 · Heqing",19.5283,109.6328,"Asia/Shanghai"],["石澳 · Shek O",22.2334,114.2512,"Asia/Hong_Kong"],["赤柱 · Chek Chue",22.2185,114.2124,"Asia/Hong_Kong"],["五桥 · Wuqiao",30.7797,108.4551,"Asia/Shanghai"],["上和镇 · Shanghe",30.1604,105.934,"Asia/Shanghai"],["和谦镇 · Heqian",31.415,108.4697,"Asia/Shanghai"],["文亨 · Wenheng",25.6674,116.7543,"Asia/Shanghai"],["大观镇 · Daguan",29.255,106.9769,"Asia/Shanghai"],["新城 · Xincheng",34.6743,103.5868,"Asia/Shanghai"],["上水 · Sheung Shui",22.5167,114.1167,"Asia/Hong_Kong"],["中山 · Zhongshan",28.8554,106.336,"Asia/Shanghai"],["Wutongshu",38.1833,106.2833,"Asia/Shanghai"],["兴隆镇 · Xinglong",29.1685,107.0064,"Asia/Shanghai"],["Baijiawan",34.6958,105.2889,"Asia/Shanghai"],["城郊 · Chengjiao",33.3852,104.9196,"Asia/Shanghai"],["溶溪镇 · Rongxi",28.5249,108.8804,"Asia/Shanghai"],["石龙镇 · Shilong",29.2822,106.8981,"Asia/Shanghai"],["北屯镇 · Beitun",47.3525,87.8205,"Asia/Shanghai"],["紫水 · Zishui",31.4128,108.3147,"Asia/Shanghai"],["康樂園 · Hong Lok Yuen",22.4631,114.1552,"Asia/Hong_Kong"],["濯水镇 · Zhuoshui",29.3031,108.7702,"Asia/Shanghai"],["龙凤镇 · Longfeng",30.2682,106.0228,"Asia/Shanghai"],["兴隆镇 · Xinglong",29.8893,106.7062,"Asia/Shanghai"],["Fairview Park",22.4674,114.0477,"Asia/Hong_Kong"],["福禄镇 · Fulu",30.6542,107.9683,"Asia/Shanghai"],["Burqin",47.7028,86.8637,"Asia/Urumqi"],["古瑾圍 · Ma Tau Wai",22.3207,114.1874,"Asia/Hong_Kong"],["黄山 · Huangshan",26.8263,100.2191,"Asia/Shanghai"],["Shilongba",26.5793,101.3632,"Asia/Shanghai"],["Hongqiao",27.4298,100.797,"Asia/Shanghai"],["Tuqiang",52.9,122.7667,"Asia/Shanghai"],["仁沙 · Rensha",30.053,107.5941,"Asia/Shanghai"],["河边镇 · Hebian",29.6566,106.1967,"Asia/Shanghai"],["阿热吾斯塘 · Arewusitang",43.7977,81.5243,"Asia/Shanghai"],["大圍 · Tai Wai",22.3729,114.179,"Asia/Hong_Kong"],["五间镇 · Wujian",29.1821,105.8344,"Asia/Shanghai"],["丰乐 · Fengle",31.1898,108.4146,"Asia/Shanghai"],["何文田 · Ho Man Tin",22.3158,114.1818,"Asia/Hong_Kong"],["巫山 · Wushan",30.9372,107.9466,"Asia/Shanghai"],["伊斯拉木阿瓦提 · Yisilamu'awati",37.5849,80.184,"Asia/Shanghai"],["拍克其 · Paikeqi",38.5501,77.2083,"Asia/Shanghai"],["兴隆 · Xinglong",34.0382,105.3442,"Asia/Shanghai"],["礼让镇 · Lirang",30.6849,107.6315,"Asia/Shanghai"],["先拜巴扎镇 · Xambabazar",36.8864,81.5097,"Asia/Urumqi"],["Fuyun",46.9919,89.5212,"Asia/Urumqi"],["Cheung Chau",22.2109,114.0279,"Asia/Hong_Kong"],["Shui Chuen O",22.3716,114.1978,"Asia/Hong_Kong"],["理川镇 · Lichuan Zhen",34.2484,104.3195,"Asia/Shanghai"],["中寨 · Zhongzhai",33.1913,104.4201,"Asia/Shanghai"],["鸭江镇 · Yajiang",29.4548,107.3737,"Asia/Shanghai"],["青锋镇 · Qingfeng",29.3394,105.8268,"Asia/Shanghai"],["萨木于孜 · Samuyuzi",43.7195,81.864,"Asia/Shanghai"],["新田 · San Tin",22.5017,114.0693,"Asia/Hong_Kong"],["河堰镇 · Heyan",31.3564,108.6705,"Asia/Shanghai"],["太安镇 · Tai’an",30.7955,108.6592,"Asia/Shanghai"],["高峰镇 · Gaofeng",30.7128,108.3419,"Asia/Shanghai"],["丁市 · Dingshi",28.7755,108.5465,"Asia/Shanghai"],["兰干 · Langgar",36.7,81.5,"Asia/Urumqi"],["抱龙镇 · Baolong",30.9423,110.0059,"Asia/Shanghai"],["古楼镇 · Gulou",30.176,106.1717,"Asia/Shanghai"],["龙孔 · Longkong",30.0448,107.9149,"Asia/Shanghai"],["屯門新墟 · Tuen Mun San Hui",22.3988,113.976,"Asia/Hong_Kong"],["外纳 · Waina",33.2064,105.0497,"Asia/Shanghai"],["龙门镇 · Longmen",30.7982,107.6871,"Asia/Shanghai"],["狮滩镇 · Shitan",30.069,106.5029,"Asia/Shanghai"],["Olympic",22.3194,114.1574,"Asia/Hong_Kong"],["愉景灣 · Discovery Bay",22.3,114.0167,"Asia/Hong_Kong"],["三圣 · Sansheng",29.8926,106.6265,"Asia/Shanghai"],["和林镇 · Helin",30.5812,107.6806,"Asia/Shanghai"],["布袋 · Budai",23.3779,120.1615,"Asia/Taipei"],["巴依托海 · Baytokay",43.6817,81.7889,"Asia/Urumqi"],["江洛镇 · Jiangluo",33.9014,105.8219,"Asia/Shanghai"],["山頂 · The Peak",22.262,114.1565,"Asia/Hong_Kong"],["铜鼓 · Tonggu",28.7817,108.6826,"Asia/Shanghai"],["少云镇 · Shaoyun",29.9846,105.9842,"Asia/Shanghai"],["白家 · Baijia",30.017,107.3258,"Asia/Shanghai"],["龙井 · Longjing",31.0894,109.8873,"Asia/Shanghai"],["角弓 · Jiaogong",33.5655,104.6464,"Asia/Shanghai"],["宋皇臺 · Sung Wong Toi",22.3247,114.1915,"Asia/Hong_Kong"],["杠家 · Gangjia",30.2205,107.504,"Asia/Shanghai"],["宝兴镇 · Baoxing",29.6217,105.6927,"Asia/Shanghai"],["勐满 · Mengman",22.3216,100.8879,"Asia/Shanghai"],["三溪 · Sanxi",31.132,110.094,"Asia/Shanghai"],["蘇屋 · So Uk",22.3413,114.1568,"Asia/Hong_Kong"],["苏合 · Suhe",34.0625,105.2221,"Asia/Shanghai"],["且末县 · Qiemo",38.1339,85.5299,"Asia/Urumqi"],["嘉平 · Jiaping",28.9916,106.3484,"Asia/Shanghai"],["茫崖 · Mangnai Zhen",38.3855,90.1555,"Asia/Shanghai"],["九龍塘 · Kowloon Tong",22.3331,114.1797,"Asia/Hong_Kong"],["麻柳嘴镇 · Maliuzui",29.6929,106.944,"Asia/Shanghai"],["大顺 · Dashun",29.5701,107.0454,"Asia/Shanghai"],["镇东 · Zhendong",31.1852,108.3954,"Asia/Shanghai"],["Siu Sai Wan Estate",22.2615,114.2488,"Asia/Hong_Kong"],["托胡拉 · Tuohula",37.2423,79.6928,"Asia/Shanghai"],["西湾河 · Sai Wan Ho",22.2845,114.2232,"Asia/Hong_Kong"],["喀群 · Kaqun",37.9781,76.8672,"Asia/Urumqi"],["So Uk Estate",22.3415,114.1565,"Asia/Hong_Kong"],["蛇口 · Shekou",22.4936,113.9156,"Asia/Shanghai"],["董家镇 · Dongjia",30.2235,107.7057,"Asia/Shanghai"],["Tak Long Estate",22.3302,114.2034,"Asia/Hong_Kong"],["Keng Hau",22.3651,114.1747,"Asia/Hong_Kong"],["Un Chau Estate",22.3363,114.1562,"Asia/Hong_Kong"],["古路镇 · Gulu",29.8389,106.7426,"Asia/Shanghai"],["玉其温 · Weiwu'eryuqiwen",43.756,81.8606,"Asia/Shanghai"],["藍田 · Lam Tin",22.3093,114.2363,"Asia/Hong_Kong"],["同乐 · Tongle",29.4612,107.197,"Asia/Shanghai"],["双龙镇 · Shuanglong",31.1949,109.8805,"Asia/Shanghai"],["翠云 · Cuiyun",29.6882,106.5885,"Asia/Shanghai"],["蟠龙镇 · Panlong",30.635,107.8502,"Asia/Shanghai"],["阿蓬江镇 · Apengjiang",29.152,108.7429,"Asia/Shanghai"],["铜鼓镇 · Tonggu",30.9341,109.7311,"Asia/Shanghai"],["科克亚 · Kokyar",36.819,81.6333,"Asia/Urumqi"],["Lei Tung Estate",22.2412,114.1552,"Asia/Hong_Kong"],["荫平镇 · Yinping",30.542,107.5752,"Asia/Shanghai"],["Longchang",26.6667,107.9167,"Asia/Shanghai"],["慈云镇 · Ciyun",29.0754,106.2056,"Asia/Shanghai"],["胡地于孜 · Hudiyuzi",43.9255,81.4121,"Asia/Shanghai"],["Nuofu",22.22,99.6996,"Asia/Shanghai"],["千户 · Qianhu",34.8047,105.5778,"Asia/Shanghai"],["Wushipai",22.5238,113.9097,"Asia/Shanghai"],["Kaitang",26.7203,108.1297,"Asia/Shanghai"],["灵泉 · Lingquan",49.4052,117.677,"Asia/Shanghai"],["稍峪 · Shaoyu",34.0641,105.3651,"Asia/Shanghai"],["古昌镇 · Guchang",29.4868,105.5886,"Asia/Shanghai"],["弹子镇 · Danzi",30.857,108.0059,"Asia/Shanghai"],["Jiuchao",26.0908,108.7653,"Asia/Shanghai"],["温泉 · Wenquan",34.6519,105.0535,"Asia/Shanghai"],["泉口 · Quankou",37.3522,101.7393,"Asia/Shanghai"],["靛水 · Dianshui",29.2834,108.089,"Asia/Shanghai"],["Yongping",34.2899,105.2722,"Asia/Shanghai"],["奥依托格拉克 · Oytograk",36.8333,81.9333,"Asia/Urumqi"],["峨溶镇 · Erong",28.5713,109.2884,"Asia/Shanghai"],["头党坝 · Xintian",29.1963,108.2705,"Asia/Shanghai"],["洪安镇 · Hong’an",28.5023,109.2666,"Asia/Shanghai"],["新蒲崗 · San Po Kong",22.3355,114.1967,"Asia/Hong_Kong"],["高楼 · Gaolou",34.7608,104.6767,"Asia/Shanghai"],["健龙 · Jianlong",29.3586,106.1852,"Asia/Shanghai"],["龙林 · Longlin",33.9428,105.0674,"Asia/Shanghai"],["普子镇 · Puzi",29.6329,108.3282,"Asia/Shanghai"],["白关 · Baiguan",33.9662,104.9144,"Asia/Shanghai"],["洛浦镇 · Lop",37.0789,80.1818,"Asia/Shanghai"],["Bibo",26.5308,107.6314,"Asia/Shanghai"],["何家场 · Baohe",30.0608,107.7017,"Asia/Shanghai"],["碧山镇 · Bishan",30.7707,107.4571,"Asia/Shanghai"],["小川镇 · Xiaochuan",33.6806,105.5616,"Asia/Shanghai"],["Hok Yuen",22.3103,114.1882,"Asia/Hong_Kong"],["Laguna Verde",22.3072,114.1907,"Asia/Hong_Kong"],["石硤尾 · Shek Kip Mei",22.3315,114.168,"Asia/Hong_Kong"],["白河 · Baihe",33.8697,104.8522,"Asia/Shanghai"],["广普镇 · Guangpu",29.3357,106.1452,"Asia/Shanghai"],["东川镇 · Dongchuan",37.368,101.8357,"Asia/Shanghai"],["Heng Fa Chuen",22.2767,114.2408,"Asia/Hong_Kong"],["阿日希 · Arix",36.7554,81.6077,"Asia/Urumqi"],["阿热勒 · Arele",36.813,81.6669,"Asia/Shanghai"],["Wangyao",34.885,105.5417,"Asia/Shanghai"],["Aldrich Bay",22.282,114.2247,"Asia/Hong_Kong"],["太平镇 · Taiping",29.9036,106.0387,"Asia/Shanghai"],["长滩镇 · Changtan",30.7392,108.5998,"Asia/Shanghai"],["尼玛镇 · Nima",34.0007,102.0713,"Asia/Shanghai"],["Choi Hung Estate",22.3364,114.2058,"Asia/Hong_Kong"],["酉酬镇 · Youchou",28.9635,109.1415,"Asia/Shanghai"],["鹿谷 · Lugu",23.7464,120.7525,"Asia/Taipei"],["卓尼县 · Liulin",34.5897,103.5042,"Asia/Shanghai"],["九池 · Jiuchi",30.7983,108.3709,"Asia/Shanghai"],["大水坑 · Tai Shui Hang",22.4063,114.2238,"Asia/Hong_Kong"],["永城镇 · Yongcheng",29.0213,106.8201,"Asia/Shanghai"],["杨家营 · Yangjiaying",39.4806,111.693,"Asia/Shanghai"],["加依 · Jiayi",36.8548,81.6355,"Asia/Shanghai"],["宝顶 · Baoding",29.7488,105.7584,"Asia/Shanghai"],["墩巴格 · Dunbage",38.8574,77.5047,"Asia/Shanghai"],["排浦镇 · Paipu",19.6398,109.1586,"Asia/Shanghai"],["禾輋 · Wo Che",22.3902,114.1922,"Asia/Hong_Kong"],["大埔海滨 · Tai Mei Tuk",22.4745,114.2346,"Asia/Hong_Kong"],["柳荫镇 · Liuyin",29.9621,106.61,"Asia/Shanghai"],["夏坝镇 · Xiaba",29.1168,106.5101,"Asia/Shanghai"],["团田 · Tuantian",24.7113,98.6532,"Asia/Shanghai"],["麻柳 · Maliu",31.4342,108.2446,"Asia/Shanghai"],["嘉道理 · Kadoorie",22.3225,114.1756,"Asia/Hong_Kong"],["洪广七队 · Hongguang Qidui",38.7332,106.2872,"Asia/Shanghai"],["Oi Man Estate",22.312,114.1785,"Asia/Hong_Kong"],["阿热勒 · Arele",38.3801,77.3132,"Asia/Shanghai"],["厚坝 · Houba",31.2051,108.5063,"Asia/Shanghai"],["霍什拉甫 · Huoshilafu",37.8664,76.6958,"Asia/Urumqi"],["三河 · Sanhe",30.0365,108.1821,"Asia/Shanghai"],["尖山镇 · Jianshan",31.434,108.8953,"Asia/Shanghai"],["Discovery Park",22.3762,114.1114,"Asia/Hong_Kong"],["峨蔓镇 · Eman",19.8572,109.2627,"Asia/Shanghai"],["Huimin",22.2614,100.0829,"Asia/Shanghai"],["二郎镇 · Erlang",30.3626,105.9921,"Asia/Shanghai"],["福永 · Fuyong",22.6721,113.8152,"Asia/Shanghai"],["龚滩镇 · Gongtan",28.9077,108.3486,"Asia/Shanghai"],["土场镇 · Tuchang",29.9253,106.4907,"Asia/Shanghai"],["Siwei",38.0166,114.1533,"Asia/Shanghai"],["五洞镇 · Wudong",30.2099,107.3413,"Asia/Shanghai"],["黑水镇 · Heishui",29.0555,108.7964,"Asia/Shanghai"],["龙射镇 · Longshe",29.5309,108.2113,"Asia/Shanghai"],["Wanshui",26.7353,107.9872,"Asia/Shanghai"],["合兴镇 · Hexing",30.7448,107.8198,"Asia/Shanghai"],["Shajing Residential District",22.7318,113.8119,"Asia/Shanghai"],["秀林 · Xiulin",24.1202,121.6263,"Asia/Taipei"],["塘坊 · Tangfang",31.3929,109.3092,"Asia/Shanghai"],["丛林镇 · Conglin",29.0303,106.9703,"Asia/Shanghai"],["塔什科瑞克 · Taxkowrük",43.8926,81.306,"Asia/Urumqi"],["汀九 · Ting Kau",22.3696,114.0791,"Asia/Hong_Kong"],["Chuk Yuen North Estate",22.3459,114.192,"Asia/Hong_Kong"],["虎威镇 · Huwei",29.9057,107.6385,"Asia/Shanghai"],["巴格阿瓦提 · Bage'awati",38.4891,77.5402,"Asia/Shanghai"],["Wang Tau Hom",22.3401,114.1873,"Asia/Hong_Kong"],["Long’e",25.8072,109.2125,"Asia/Shanghai"],["达来呼布镇 · Dalain Hob",41.9653,101.0639,"Asia/Shanghai"],["Shenzhenwan",22.4871,113.9396,"Asia/Shanghai"],["响水镇 · Xiangshui",30.655,108.193,"Asia/Shanghai"],["Zhouxi",26.4833,107.9167,"Asia/Shanghai"],["林內 · Linnei",23.7615,120.6188,"Asia/Taipei"],["Pak Tin Estate",22.3371,114.1667,"Asia/Hong_Kong"],["东江镇 · Dongjiang",33.3792,104.9507,"Asia/Shanghai"],["田湾 · Tin Wan",22.2511,114.1473,"Asia/Hong_Kong"],["Zhuzilin",22.5381,114.015,"Asia/Shanghai"],["额肯呼都格镇 · Ehen Hudag",39.2107,101.669,"Asia/Shanghai"],["两坪 · Liangping",31.1214,109.9691,"Asia/Shanghai"],["Wang Tau Hom Estate",22.3401,114.1867,"Asia/Hong_Kong"],["白土镇 · Baitu",30.5972,108.8114,"Asia/Shanghai"],["Shuangjiang",25.9667,108.9242,"Asia/Shanghai"],["官塘 · Kwun Tong",22.3118,114.2218,"Asia/Hong_Kong"],["富东 · Fudong",23.1232,100.0001,"Asia/Shanghai"],["Lixin",34.9122,105.0806,"Asia/Shanghai"],["Zhaoxing",25.9108,109.1764,"Asia/Shanghai"],["临河 · Linhe",38.3214,106.368,"Asia/Shanghai"],["Kam Ying",22.4229,114.2366,"Asia/Hong_Kong"],["新田 · San Tin",22.3719,114.1839,"Asia/Hong_Kong"],["Sun Tin Wai",22.3706,114.187,"Asia/Hong_Kong"],["长龙 · Changlong",30.3062,107.413,"Asia/Shanghai"],["玉井 · Yujing",23.1249,120.4614,"Asia/Taipei"],["木河 · Muhe",35.0234,106.1349,"Asia/Shanghai"],["西高山 · Xigaoshan",33.7347,105.3882,"Asia/Shanghai"],["钟灵 · Zhongling",28.2967,108.9584,"Asia/Shanghai"],["姜家 · Jiangjia",29.3931,106.8192,"Asia/Shanghai"],["朗如 · Langru",36.8933,79.6214,"Asia/Urumqi"],["玉溪镇 · Yuxi",30.3239,105.7774,"Asia/Shanghai"],["Ersheng",29.4658,106.7708,"Asia/Shanghai"],["二连浩特市 · Erenhot",43.6475,111.9767,"Asia/Shanghai"],["Sam Shing",22.3813,113.9787,"Asia/Hong_Kong"],["阔什艾日克 · Kuoshi'airike",38.6228,77.2795,"Asia/Shanghai"],["乌尔其 · Wu'erqi",37.3202,79.5593,"Asia/Shanghai"],["嘴头 · Jutou",34.8208,105.0339,"Asia/Shanghai"],["田家镇 · Tianjia",30.0896,105.8567,"Asia/Shanghai"],["肖家镇 · Xiaojia",30.2884,106.4703,"Asia/Shanghai"],["Xinhua",24.7525,98.483,"Asia/Shanghai"],["柱山 · Zhushan",30.7329,108.2742,"Asia/Shanghai"],["Wong Chuk Hang",22.2398,114.17,"Asia/Hong_Kong"],["龙溪镇 · Longxi",31.3022,109.6355,"Asia/Shanghai"],["大庙镇 · Damiao",29.6443,106.0696,"Asia/Shanghai"],["Jifeng",33.6553,105.6579,"Asia/Shanghai"],["蒲池 · Puchi",33.5347,104.8142,"Asia/Shanghai"],["Bikou",32.7458,105.2414,"Asia/Shanghai"],["Yeung Uk Tsuen",22.45,114.0167,"Asia/Hong_Kong"],["云山 · Yunshan",34.7606,105.7925,"Asia/Shanghai"],["青羊镇 · Qingyang",29.5274,107.2007,"Asia/Shanghai"],["Mujia",22.991,99.6345,"Asia/Shanghai"],["Braemar Hill",22.2828,114.2003,"Asia/Hong_Kong"],["中坝 · Zhongba",34.0351,105.0329,"Asia/Shanghai"],["Dazhuang",34.9589,105.3361,"Asia/Shanghai"],["马营 · Maying",33.5964,104.8462,"Asia/Shanghai"],["桦林 · Hualin",34.8256,104.752,"Asia/Shanghai"],["拾万 · Shiwan",29.6148,105.8946,"Asia/Shanghai"],["玉龙镇 · Yulong",29.5462,105.8104,"Asia/Shanghai"],["小长山岛镇 · Xiaochangshan",39.2358,122.7236,"Asia/Shanghai"],["Hoi Lai Estate",22.3318,114.1467,"Asia/Hong_Kong"],["Mount Davis",22.2786,114.1178,"Asia/Hong_Kong"],["迭部县 · Dianga",34.0636,103.2136,"Asia/Shanghai"],["Dashan",23.0024,100.1149,"Asia/Shanghai"],["礼嘉镇 · Lijia",29.6788,106.4931,"Asia/Shanghai"],["临溪镇 · Linxi",30.4064,108.3502,"Asia/Shanghai"],["阿扎特巴格 · Azhatebage",38.6588,77.4664,"Asia/Shanghai"],["Pok Hong",22.3756,114.1958,"Asia/Hong_Kong"],["连湖镇 · Lianhu",29.6981,108.4353,"Asia/Shanghai"],["新生镇 · Xinsheng",29.9567,105.7509,"Asia/Shanghai"],["铁山镇 · Tieshan",29.6895,105.501,"Asia/Shanghai"],["Fu Cheong Estate",22.3289,114.154,"Asia/Hong_Kong"],["土瓜灣 · To Kwa Wan",22.3169,114.1905,"Asia/Hong_Kong"],["Lee On",22.4263,114.2413,"Asia/Hong_Kong"],["Yùmén",40.2914,97.0454,"Asia/Shanghai"],["白驼 · Baituo",34.8511,106.0017,"Asia/Shanghai"],["Wujia",21.7667,109.0333,"Asia/Shanghai"],["增福 · Zengfu",29.5107,106.9858,"Asia/Shanghai"],["高谷镇 · Gaogu",29.3956,108.0658,"Asia/Shanghai"],["峰灵 · Fengling",31.3194,109.5547,"Asia/Shanghai"],["冯坪 · Fengping",30.8348,109.505,"Asia/Shanghai"],["Butterfly",22.3759,113.9625,"Asia/Hong_Kong"],["Fazhanhe",22.3342,100.1731,"Asia/Shanghai"],["Prince Edward",22.3236,114.1794,"Asia/Hong_Kong"],["大歇 · Daxie",30.0729,108.1103,"Asia/Shanghai"],["Mid Levels",22.284,114.1496,"Asia/Hong_Kong"],["炮臺山 · Fortress Hill",22.2886,114.1942,"Asia/Hong_Kong"],["镇安镇 · Zhen’an",31.1523,108.3167,"Asia/Shanghai"],["王家 · Wangjia",29.7672,106.6981,"Asia/Shanghai"],["Tung Tau Estate",22.3321,114.1928,"Asia/Hong_Kong"],["阿乌利亚 · Awuliya",43.9303,81.6932,"Asia/Shanghai"],["第一城 · City One",22.3868,114.2027,"Asia/Hong_Kong"],["鱼龙 · Yulong",33.51,105.1812,"Asia/Shanghai"],["Donghui",22.4405,99.8001,"Asia/Shanghai"],["后山镇 · Houshan",30.8259,108.0287,"Asia/Shanghai"],["青龙镇 · Qinglong",30.7798,109.2564,"Asia/Shanghai"],["后海 · Houhai",22.5123,113.9255,"Asia/Shanghai"],["长坝镇 · Changba",29.3347,107.475,"Asia/Shanghai"],["郭川 · Guochuan",34.6838,105.81,"Asia/Shanghai"],["谭家 · Tanjia",31.4557,108.4986,"Asia/Shanghai"],["杜热 · Dure",46.5119,88.5339,"Asia/Urumqi"],["万木 · Wanmu",28.6328,108.5002,"Asia/Shanghai"],["雍溪镇 · Yongxi",29.7385,105.9794,"Asia/Shanghai"],["City Garden",22.29,114.1926,"Asia/Hong_Kong"],["石会镇 · Shihui",29.5718,108.6102,"Asia/Shanghai"],["窝依莫克 · Oymak",47.8781,86.9895,"Asia/Urumqi"],["西坪 · Xiping",34.6057,105.115,"Asia/Shanghai"],["Yiu Tung Estate",22.2785,114.223,"Asia/Hong_Kong"]];
}
// Times in this module are civil times at the selected birthplace.
// Astronomy Engine is bundled on device. Solar longitude also sets the BaZi month.
const ABU_SIGNS='白羊 金牛 双子 巨蟹 狮子 处女 天秤 天蝎 射手 摩羯 水瓶 双鱼'.split(' ');
const ABU_STEMS='甲乙丙丁戊己庚辛壬癸', ABU_BRANCHES='子丑寅卯辰巳午未申酉戌亥';
const ABU_HIDDEN=['癸','己癸辛','甲丙戊','乙','戊乙癸','丙戊庚','丁己','己丁乙','庚壬戊','辛','戊辛丁','壬甲'];
const ABU_GODS=['比肩','劫财','食神','伤官','偏财','正财','七杀','正官','偏印','正印'];
const abuMod=(n,base)=>(n%base+base)%base;
function abuGod(day,stem){
  const relation=abuMod((stem>>1)-(day>>1),5);
  return ABU_GODS[relation*2+((day^stem)&1)];
}
function abuWallInstants(date,time,zone){
  const target=Date.parse(date+'T'+time+':00Z');
  const fmt=new Intl.DateTimeFormat('en-GB',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
  function wall(ms){
    const v=Object.fromEntries(fmt.formatToParts(ms).map(p=>[p.type,+p.value]));
    return Date.UTC(v.year,v.month-1,v.day,v.hour,v.minute,v.second);
  }
  const offsets=new Set([-36,0,36].map(h=>{const ms=target+h*3600000;return wall(ms)-ms;}));
  return [...offsets].map(o=>target-o).filter(ms=>wall(ms)===target).sort((a,b)=>a-b);
}
function abuPillar(stem,branch){return {stem:abuMod(stem,10),branch:abuMod(branch,12)};}
function abuAt(ms,p,minutes){
  const date=new Date(ms),sun=Astronomy.SunPosition(date).elon,moon=Astronomy.EclipticGeoMoon(date).lon;
  const month=Math.floor(abuMod(sun-315,360)/30);
  const year=Number(p.date.slice(0,4))-(+p.date.slice(5,7)<=2 && month>=10?1:0);
  const ys=abuMod(year-4,10),jdn=Math.floor(Date.parse(p.date+'T12:00:00Z')/86400000)+2440588;
  const day=abuMod(jdn+49,60),hour=Math.floor((minutes+60)/120)%12;
  const rad=Math.PI/180,theta=(Astronomy.SiderealTime(date)*15+p.lon)*rad;
  const eps=Astronomy.e_tilt(Astronomy.MakeTime(date)).tobl*rad;
  const asc=abuMod(180+Math.atan2(-Math.cos(theta),Math.sin(theta)*Math.cos(eps)+Math.tan(p.lat*rad)*Math.sin(eps))/rad,360);
  return {sun:Math.floor(sun/30),moon:Math.floor(moon/30),asc:Math.floor(asc/30),pillars:[
    abuPillar(ys,year-4),abuPillar((ys%5)*2+2+month,2+month),abuPillar(day,day),abuPillar((day%5)*2+hour,hour)
  ]};
}
function abuChart(p){
  const known=!!p.time;
  function at(time,late){
    const hits=abuWallInstants(p.date,time,p.zone);
    if(!hits.length)throw Error('这个当地时间不存在，请核对当时的钟表时间。');
    if(known && hits.length>1 && !p.fold)throw Error('这一刻遇到拨慢时钟，请选择第一次或第二次出现。');
    const [h,m]=time.split(':').map(Number);
    return abuAt(late?hits.at(-1):hits[0],p,60*h+m);
  }
  if(known)return at(p.time,p.fold==='later');
  // Retain only values stable over the entire local birthday, including DST shifts.
  function edge(first){
    for(let i=0;i<1440;i++){
      const n=first?i:1439-i,t=String(n/60|0).padStart(2,'0')+':'+String(n%60).padStart(2,'0');
      if(abuWallInstants(p.date,t,p.zone).length)return at(t,!first);
    }
    throw Error('当地历法中没有这一天，请核对出生日期。');
  }
  const a=edge(true),b=edge(false);
  if(a.sun!==b.sun)a.sun=null;if(a.moon!==b.moon)a.moon=null;a.asc=null;
  a.pillars=a.pillars.map((v,i)=>i<3 && v.stem===b.pillars[i].stem && v.branch===b.pillars[i].branch?v:null);
  return a;
}
function abuStrength(pillars){
  if(pillars.some(p=>!p))return '时刻待补';
  const day=pillars[2].stem>>1;
  const helps=s=>{const diff=abuMod(day-(s>>1),5);return diff===0||diff===1;};
  let support=0,total=0;
  pillars.forEach((p,i)=>{
    if(i!==2){support+=Number(helps(p.stem));total++;}
    const hidden=ABU_HIDDEN[p.branch],factor=i===1?3:1;
    const weights=hidden.length===3?[.6,.3,.1]:hidden.length===2?[.7,.3]:[1];
    Array.from(hidden).forEach((c,j)=>{const w=weights[j]*factor;total+=w;if(helps(ABU_STEMS.indexOf(c)))support+=w;});
  });
  const ratio=support/total;
  return ratio>.75?'偏强':ratio>.53?'中和偏强':ratio>=.47?'中和':ratio>=.25?'中和偏弱':'偏弱';
}

// Reviewed offline sentences. Sun, moon and rising each have their own vocabulary.
const ABU_SUN_COPY=[
 '碰到没人开头的事，你可能已经伸手试了一下，等有了点眉目再喊大家来看。',
 '一件事做顺手了，你愿意再花点工夫，把别人用起来别扭的地方也磨平。',
 '你也许习惯多问一句。两件原本各说各的事，聊到你这里忽然有了联系。',
 '别人提过的一件小事，你可能记了很久，等对方真的需要时才拿出来。',
 '有人认真听你讲喜欢的东西，你往往越讲越有神采，也乐意让别人试试。',
 '大家聊得热闹时，你也许一直安静听着，过一会儿却点出一个刚才谁都没留意的细节。',
 '同一件事听到两个说法，你常愿意先让两边把话说完，才慢慢讲自己的判断。',
 '话里有一处没说透，你可能记得很清楚。等聊到真正关心的地方，你才愿意多说几句。',
 '新地方或陌生的做法容易勾起你的兴致，你可能想先走一趟，再决定要不要留下。',
 '碰到一团乱的事，你常会顺手找出今天能做的那一步。有了开头，后面就好商量。',
 '别人都习惯这么做，你可能还会问一句缘由。真正想明白以后，你愿意照自己的办法试试。',
 '一句随口提起的话，可能让你想到一幅画面。你常记得当时的气氛，过后才找到合适的形容。'
];
const ABU_MOON_COPY=[
 '心里有事的时候，你可能想赶紧说清楚，闷着反而更难受。','熟悉的饭桌、熟悉的声音，有时比一长串安慰更能让你放松。',
 '遇上说不清的感觉，你可能边聊边想，讲到一半才发现自己真正在意哪件事。','有些心事你只想跟熟人说，知道对方还记得上次那半句话，就容易讲下去了。',
 '你认真做过的事被人看见时，可能会高兴很久，哪怕对方只提了一句细节。','情绪乱的时候，你也许会先收拾桌子或列个短单。手边有件小事理顺了，话才容易出口。',
 '气氛僵住时，你可能会惦记好一阵。两个人坐下来把各自的意思说清，你才踏实。','有些感受你会留给真正信任的人。等对方愿意听深一点，你才慢慢说起缘由。',
 '心里闷着的时候，你也许想走出熟悉的地方，换条路，边走边想。','要开口求助，你可能得先想一想。遇到愿意替你接下一件具体事情的人，你会记在心里。',
 '心里有事，也可能想先独处一会儿。等想清楚了，再找那个能聊得深的人说。','身边人的情绪，你也许接得很快。回到自己的角落待一会儿，才听清自己怎么想。'
];
const ABU_ASC_COPY=[
 '初次见面，别人容易先注意到你的爽快。','给人的第一印象可能很稳，熟了才知道你心里早有自己的看法。','刚碰面的人，可能记得你把话题接得很自然。','刚到陌生的地方，你可能先看看谁坐在旁边，再慢慢加入谈话。',
 '见过你的人，可能先记得你跟人打招呼的样子。','在旁人眼里，你好像很快就能看清一件事该从哪儿做起。','人多的时候，你常会留意谁还没接上话。','初见时你可能话不多，先看看什么值得聊。',
 '第一次同行，别人容易被你对新鲜事的好奇带动。','刚共事的人，可能最先记住你答应的事有着落。','你偶尔冒出来的一句不同看法，容易让人一下记住你。','刚认识的人，可能觉得跟你说话很容易放松。'
];
function abuStars(c){
  if(c.sun===5 && c.moon===10 && c.asc===1)return '给人的第一印象可能很稳，心里却常有自己的另一套想法。刚认识的人觉得你随和，熟一点才发现，有些事你其实早有判断，只是要等想清楚了才开口。心里有事时也是这样：当下可能只说了半句，过两天一起散步，你才把后半句慢慢讲出来。';
  return [ABU_ASC_COPY[c.asc],ABU_SUN_COPY[c.sun],ABU_MOON_COPY[c.moon]].filter(Boolean).join('');
}
const ABU_GOD_COPY={
 正印:'有人肯慢慢讲缘由，你可能听得很认真。学会以后，你连当初为什么要这么做都还记得。',
 偏印:'看别人把事情做过一遍，你可能就想换个顺序试试，看看原来的那一步究竟起什么作用。',
 正财:'同一个点子谈了几轮，你可能最关心落到手里该先做哪一步。你愿意把想法试到用得上为止。',
 偏财:'听朋友提起一个需要，你可能很快想到谁恰好会做，又或者身边什么东西正好派得上用场。',
 食神:'学到点新东西，你可能想亲手做一遍。有个看得见、摸得着的结果，你才觉得过瘾。',
 伤官:'听到一句含混的话，你也许忍不住想给它换个更贴切的说法。表达清楚，对你挺要紧。',
 正官:'大家一起做事的时候，你可能很在意事先说好的分工，知道各自能指望谁才安心。',
 七杀:'真有事情赶到眼前，你可能顾不上多说，先去处理最急的那个环节。',
 比肩:'别人的建议你愿意听，最后那一步，你可能还是想亲手做个判断。',
 劫财:'遇到同样有兴趣的人，你可能一下子就有了劲，两个人很快把话题聊成一件可以动手的事。'
};
function abuReading(pillars){
 const day=pillars[2].stem;
 const gods=[0,1,3].filter(i=>pillars[i]).map(i=>abuGod(day,pillars[i].stem));
 if(gods.includes('正印')&&gods.includes('偏印'))return '按这张盘里正印、偏印的传统读法，你可能很愿意跟一个懂行的人学东西。有意思的是，你往往记得他当初为什么这么做，等轮到自己上手，却会改掉其中一步，看看换个做法会怎样。';
 const focus=gods.includes('食神')?'食神':gods[1]||gods[0];
 return focus?'按'+focus+'的传统读法，'+ABU_GOD_COPY[focus]:'出生时刻补全后，可以再看这里的解读。';
}

function abuGo(tab,replace=false){
  if(replace)navFromBack=true;
  cur={name:'abu',tab};render();
}
function abuButton(label,fn,cls='chip'){return journalButton(label,cls,fn);}
function abuCard(title){
  const card=towerEl('section','abu-card');
  card.append(towerEl('h3','',title));view.append(card);return card;
}
function abuTabs(){
  const nav=towerEl('div','tw-tabs');
  for(const [key,label] of [['birth','先天底色'],['tests','后天性格']]){
    const on=(cur.tab||'birth')===key,btn=abuButton(label,()=>abuGo(key,true),'chip'+(on?' on':''));
    btn.setAttribute('aria-pressed',on);nav.append(btn);
  }
  view.append(nav);
}
function abuStart(){
  abuWelcome();
  topTitle.textContent=cur.tab==='form'?'基础资料':'岛主小筑';reviewBtn.textContent='回今日';
  if(cur.tab==='form'){abuInitData();abuForm(SET.abuProfile);return;}
  if(cur.tab==='detail' && SET.abuProfile){abuInitData();abuDetails(SET.abuProfile);return;}
  view.append(letterHouseHead('abu'));abuTabs();
  if(cur.tab==='tests'){
    for(const [title,desc,art] of [['MBTI','了解自己习惯怎样获取信息、做决定。','assets/ui/abu-tests-mbti.webp'],['五大人格','从五个维度看看自己的性格倾向。','assets/ui/abu-tests-five.webp']]){
      const card=abuCard(title),im=new Image();im.src=art;im.alt='';im.className='abu-test-art';card.prepend(im);
      card.append(towerEl('p','',desc),towerEl('small','abu-muted','测试预览 · 尚未开放答题'));
    }
    return;
  }
  if(!SET.abuProfile){
    const card=abuCard('我的出生手记');card.append(towerEl('p','','填下出生日期和地点，看看你的星座与八字。'),abuButton('填写基础资料',()=>abuGo('form'),'chip on'));return;
  }
  abuInitData();
  const p=SET.abuProfile;
  let c;try{c=abuChart(p);}catch(e){
    const card=abuCard('请核对出生资料');card.append(abuButton('编辑资料',()=>abuGo('form')));return;
  }
  const stars=abuCard('我的星座');
  stars.querySelector('h3').append(abuButton('编辑资料 ›',()=>abuGo('form'),'abu-link'));
  const strip=towerEl('div','abu-values');
  for(const [label,i] of [['太阳',c.sun],['月亮',c.moon],['上升',c.asc]]){
    const cell=towerEl('div','');cell.append(towerEl('small','',label),towerEl('b','',i==null?'时刻待补':ABU_SIGNS[i]+'座'));strip.append(cell);
  }
  stars.append(strip,towerEl('p','',abuStars(c)));
  const bazi=abuCard('传统解读'),summary=towerEl('div','abu-values');
  const ds=c.pillars[2].stem;
  for(const [name,value] of [['日主',ABU_STEMS[ds]+'木火土金水'[ds>>1]],['强弱参考',abuStrength(c.pillars)]]){
    const col=towerEl('div','');col.append(towerEl('small','',name),towerEl('b','',value));summary.append(col);
  }
  const tags=towerEl('div','abu-gods');tags.append(towerEl('small','','天干十神'));
  for(const i of [0,1,3])if(c.pillars[i]){
    const god=abuGod(ds,c.pillars[i].stem);tags.append(abuButton(god,()=>{const s=healthSheet(god,'');s.querySelector('.health-form').append(towerEl('p','',ABU_GOD_COPY[god]));}));
  }
  bazi.append(summary,tags,towerEl('p','',abuReading(c.pillars)),abuButton('看十神与完整排盘 ›',()=>abuGo('detail'),'abu-link'));
}
function abuDetails(p){
  topTitle.textContent='传统解读';const {pillars}=abuChart(p),day=pillars[2].stem;
  const card=abuCard('四柱与十神');
  ['年','月','日','时'].forEach((name,i)=>{
    const col=pillars[i];
    const row=towerEl('div','abu-pillar');row.append(towerEl('strong','',name+'柱'));
    if(!col){row.append(towerEl('span','','出生时刻待补'));card.append(row);return;}
    row.append(towerEl('span','',ABU_STEMS[col.stem]+ABU_BRANCHES[col.branch]+' · '+(i===2?'日主':abuGod(day,col.stem))),
      towerEl('small','abu-muted','藏干　'+Array.from(ABU_HIDDEN[col.branch],x=>x+'·'+abuGod(day,ABU_STEMS.indexOf(x))).join('　')));
    card.append(row);
  });
  const how=abuCard('怎么看这张盘');
  how.append(towerEl('p','','以日干为日主，其余天干按五行生克和阴阳定十神。年柱以立春为界，月柱按节气，当地民用时间午夜换日，每两小时一个时辰。'),
    towerEl('p','','强弱仅供传统文化参考。这里按同类、生助日主的比例给出倾向：月支权重为其他地支的三倍，藏干按主次分配；缺少时柱时留待补充。'),
    towerEl('small','abu-muted','星历：Astronomy Engine（MIT） · 地点数据：GeoNames（CC BY 4.0），已筛选和圆整坐标。'));
}
function abuForm(old){
  const f=towerForm('基础资料');f.classList.add('abu-form');
  const name=towerField(f,'nickname','姓名或昵称','text',old?.nickname);name.maxLength=40;
  const cal=towerField(f,'calendar','日期类型','select',old?.calendar||'solar',[['solar','阳历'],['lunar','农历']]);
  const date=towerField(f,'date','出生日期','date',old?.date);date.min='1901-01-01';date.max=key2iso(dkey(new Date()));date.required=true;
  const year=towerNumber(f,'ly','农历年份',old?.ly||'',1901,new Date().getFullYear());
  const month=towerNumber(f,'lm','农历月份',old?.lm||'',1,12);
  const day=towerNumber(f,'ld','农历日',old?.ld||'',1,30);
  const leap=towerField(f,'leap','闰月','checkbox',old?.leap);
  const clock=towerField(f,'clock','出生时间','time',old?.time||'');clock.required=true;
  const unknown=towerField(f,'unknown','时间不详','checkbox',old?!old.time:false);
  const place=towerField(f,'place','出生地点','text',old?.place||'');place.required=true;place.maxLength=100;
  place.placeholder='搜索城市或区县';place.autocomplete='off';
  const list=towerEl('div','abu-cities');place.parentElement.after(list);
  const custom=towerField(f,'custom','手动填写地点坐标和时区','checkbox',old?.custom);
  const lat=towerNumber(f,'lat','纬度（北为正）',old?.lat??'',-89.99,89.99,'any');
  const lon=towerNumber(f,'lon','经度（东为正）',old?.lon??'',-180,180,'any');
  const zone=towerField(f,'zone','出生地时区','text',old?.zone||'Asia/Shanghai');
  for(const el of [year,month,day,lat,lon,zone])el.required=true;
  let selected=old && !old.custom?[old.place,old.lat,old.lon,old.zone]:null;
  let fold=towerField(f,'fold','当地时钟重复的时刻','select',old?.fold||'',[['','请选择'],['earlier','第一次出现'],['later','第二次出现']]);
  let foldNeeded=false;
  function candidates(){
    list.replaceChildren();if(custom.checked || selected || !place.value.trim())return;
    const term=place.value.trim().toLowerCase();
    const matches=AbuData.filter(r=>r[0].toLowerCase().includes(term)).slice(0,12);
    if(!matches.length)list.append(towerEl('small','abu-muted','未找到，可改用手动坐标。'));
    matches.forEach(r=>list.append(abuButton(r[0],()=>{selected=r;place.value=r[0];list.replaceChildren();})));
  }
  function sync(){
    const lunar=cal.value==='lunar';towerVisible(date,!lunar);
    for(const el of [year,month,day,leap])towerVisible(el,lunar);
    towerVisible(clock,!unknown.checked);for(const el of [lat,lon,zone])towerVisible(el,custom.checked);
    towerVisible(fold,foldNeeded&&!unknown.checked);
  }
  f.addEventListener('input',e=>{
    if(e.target===place){selected=null;candidates();}if(e.target===custom)candidates();
    if(e.target!==fold){foldNeeded=false;fold.value='';}sync();
  });sync();
  towerSubmit(f,'查看我的先天底色',()=>{
    const lunar=cal.value==='lunar',y=+year.value,m=+month.value,d=+day.value;
    let iso=date.value;
    if(lunar){
      if(leap.checked && lLeapMonth(y)!==m)return '该农历年份没有这个闰月。';
      if(d>(leap.checked?lLeapDays(y):lMonthDays(y,m)))return '这一个农历月没有这一天。';
      const solar=lunarToSolar(y,m,1);if(!solar)return '请核对农历日期。';
      solar.setDate(solar.getDate()+d-1+(leap.checked?lMonthDays(y,m):0));iso=key2iso(dkey(solar));
    }
    if(!iso || iso<date.min || iso>date.max)return '请填写范围内的出生日期。';
    if(!custom.checked && !selected)return '请从匹配的地点里选一项，或勾选手动填写。';
    const p={nickname:name.value.trim(),date:iso,calendar:cal.value,time:unknown.checked?'':clock.value,
      place:place.value.trim(),custom:custom.checked,lat:custom.checked?+lat.value:selected[1],
      lon:custom.checked?+lon.value:selected[2],zone:custom.checked?zone.value.trim():selected[3],fold:fold.value};
    if(!p.place)return '请填写出生地点。';
    if(lunar)Object.assign(p,{ly:y,lm:m,ld:d,leap:leap.checked});
    try{
      if(p.time && abuWallInstants(p.date,p.time,p.zone).length>1 && !p.fold){
        foldNeeded=true;sync();return '这一天当地拨慢过时钟，请选一下实际出生时刻。';
      }
      abuChart(p);
    }catch(e){return e instanceof RangeError?'请核对时区名称，例如 Asia/Shanghai。':e.message;}
    SET.abuProfile=p;scheduleSave();saveNow();
    if(navStack.at(-1)?.name==='abu')navStack.pop();
    abuGo('birth',true);
  });
}
function abuWelcome(){
  if(islandArrived('abu-welcome'))return;
  ISLAND.inbox.push({id:'abu-welcome',day:islandToday()});
  islandSyncMessages(ISLAND);islandCommit();
}
function abuValidateBackup(p){
  if(p==null)return;
  if(!healthValidDate(p.date)||p.date<'1901-01-01'||p.date>key2iso(dkey(new Date()))||
     !['solar','lunar'].includes(p.calendar)||typeof p.time!=='string'||(p.time&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(p.time))||
     !Number.isFinite(p.lat)||Math.abs(p.lat)>89.99||!Number.isFinite(p.lon)||Math.abs(p.lon)>180||
     typeof p.zone!=='string'||!p.zone||typeof p.place!=='string'||!p.place.trim()||
     typeof p.nickname!=='string'||typeof p.custom!=='boolean'||!['','earlier','later'].includes(p.fold))throw Error('出生资料格式有误');
  new Intl.DateTimeFormat('zh-CN',{timeZone:p.zone});
  if(p.calendar==='lunar' && (![p.ly,p.lm,p.ld].every(Number.isInteger)||p.ly<1901||p.lm<1||p.lm>12||p.ld<1||p.ld>30||typeof p.leap!=='boolean'))throw Error('农历日期格式有误');
}

/* ============ 启动 ============ */
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0){
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
applyAccent();
ensureToday();
planTidy();   /* v3.3.2 */
cycMaterialize();
imgBoot().then(() => backfillThumbs());
buildToolbar(); render();
$('#drawerDot').innerHTML = jjImg('nest', 40); $('#drawerWm').innerHTML = wordmarkSVG(22);
helloBoot(); showOnboard();
if (SET.gh && SET.gh.on) setTimeout(() => ghPush(false), 4000);
