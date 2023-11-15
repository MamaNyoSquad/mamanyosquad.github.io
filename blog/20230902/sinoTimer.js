const time = new Date("November 15, 2023 14:00:00 GMT+09:00").getTime();

function sinoTimer() {
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = time - now;
    var d = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    var h = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    var m = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    var s = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
    document.getElementById("sinoTime").innerHTML = d + ":" + h + ":" + m + ":" + s;
    if (distance <= 0) {
      interactModeOn();
      clearInterval(timer);
      document.getElementById("sinoTime").innerHTML = "00:00:00:00";
      eventEnd();
    }
  }, 0);
}

function sinoDayCount() {
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = time - now;
    /* calculate timers */
    var d = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    var h = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    var m = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    /* add 1 */
    var dnum = Number(d), hnum = Number(h), mnum = Number(m);
    dnum += 1, hnum += 1, mnum += 1;
    /* do complicated ifs, powered by UNIX distance */
    document.getElementById("sinoDayCount").innerHTML = dnum + " days";
    if (distance <= 86400000) {
      document.getElementById("sinoDayCount").innerHTML = hnum + " hours";
    }
    if (distance <= 3600000) {
      document.getElementById("sinoDayCount").innerHTML = mnum + " minutes";
    }
    if (distance <= 60000) {
      document.getElementById("sinoOver").innerHTML = "In 60 seconds, the Library will be closed."
    }
    /* when the timer reaches zero.. */
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("sinoOver").innerHTML = "The Library is officially closed. Thank you for playing SINoALICE Global Edition.";
    }
  }, 0);
}

function _0x3334() {
  const _0x1e682c = [
    "innerHTML",
    "16UTGTWC",
    "37ushYez",
    "1783856FCEmsI",
    "351390WqDeKG",
    "block",
    "style",
    "2176938AoSbYF",
    "6842gHpheA",
    "none",
    "1162126mqLPep",
    "unixSinoTime",
    "sinoTime",
    "540675TZjyou",
    "221220UFcQWv",
    "display",
    "500ifrtXN",
    "getElementById",
  ];
  _0x3334 = function () {
    return _0x1e682c;
  };
  return _0x3334();
}
(function (_0x50af5e, _0xaac238) {
  const _0x3b6fc4 = _0x4bca,
    _0x48d0ac = _0x50af5e();
  while (!![]) {
    try {
      const _0x10f807 =
        (-parseInt(_0x3b6fc4(0x120)) / 0x1) *
          (-parseInt(_0x3b6fc4(0x126)) / 0x2) +
        parseInt(_0x3b6fc4(0x122)) / 0x3 +
        -parseInt(_0x3b6fc4(0x121)) / 0x4 +
        -parseInt(_0x3b6fc4(0x119)) / 0x5 +
        -parseInt(_0x3b6fc4(0x125)) / 0x6 +
        (parseInt(_0x3b6fc4(0x116)) / 0x7) *
          (-parseInt(_0x3b6fc4(0x11f)) / 0x8) +
        (-parseInt(_0x3b6fc4(0x11a)) / 0x9) *
          (-parseInt(_0x3b6fc4(0x11c)) / 0xa);
      if (_0x10f807 === _0xaac238) break;
      else _0x48d0ac["push"](_0x48d0ac["shift"]());
    } catch (_0x2171d1) {
      _0x48d0ac["push"](_0x48d0ac["shift"]());
    }
  }
})(_0x3334, 0x36a05);
function _0x4bca(_0x575917, _0x3959c8) {
  const _0x3334f8 = _0x3334();
  return (
    (_0x4bca = function (_0x4bcaf5, _0x5d4004) {
      _0x4bcaf5 = _0x4bcaf5 - 0x115;
      let _0xea5939 = _0x3334f8[_0x4bcaf5];
      return _0xea5939;
    }),
    _0x4bca(_0x575917, _0x3959c8)
  );
}
function changeToDistance() {
  const _0x3e8a40 = setInterval(function () {
    const _0x51f5a5 = _0x4bca,
      _0x40bccb = new Date()["getTime"](),
      _0x3d5a69 = time - _0x40bccb;
    (document["getElementById"](_0x51f5a5(0x118))[_0x51f5a5(0x124)][
      _0x51f5a5(0x11b)
    ] = _0x51f5a5(0x115)),
      (document[_0x51f5a5(0x11d)](_0x51f5a5(0x117))["style"][_0x51f5a5(0x11b)] =
        _0x51f5a5(0x123)),
      (document[_0x51f5a5(0x11d)](_0x51f5a5(0x117))[_0x51f5a5(0x11e)] =
        _0x3d5a69);
  }, 0x0);
}