function sinoTimer() {
  const time = new Date('November 15, 2023 14:00:00 GMT+09:00').getTime();
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
    }
  }, 1000);
}

function sinoDayCount() {
  const time = new Date('November 15, 2023 14:00:00 GMT+09:00').getTime();
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = time - now;
    var d = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    var h = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    var m = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    var s = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
    document.getElementById("sinoDayCount").innerHTML = d + " days";
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("sinoDayCount").innerHTML = "NaN days";
    }
  }, 1000);
}