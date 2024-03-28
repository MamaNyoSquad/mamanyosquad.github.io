const time = new Date("January 15, 2024 12:00:00 GMT+09:00").getTime();

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
    document.getElementById("sinoDayCount").innerHTML = dnum + "日";
    if (distance <= 86400000) {
      document.getElementById("sinoDayCount").innerHTML = hnum + "時";
    }
    if (distance <= 3600000) {
      document.getElementById("sinoDayCount").innerHTML = mnum + "分";
    }
    if (distance <= 60000) {
      document.getElementById("sinoOver").innerHTML = "60秒後に図書館は閉館します。"
    }
    /* when the timer reaches zero.. */
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("sinoOver").innerHTML = "図書館は正式に閉館しました。シノアリス日本語版のプレイありがとうございました。";
    }
  }, 0);
}