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
    var d = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    var dnum = Number(d);
    dnum += 1;
    document.getElementById("sinoDayCount").innerHTML = dnum + " days";
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("sinoOver").innerHTML = "The Library is officially closed. Thank you for playing SINoALICE Global Edition.";
    }
  }, 0);
}