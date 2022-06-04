//all code is based on W3Schools: https://www.w3schools.com/howto/howto_js_countdown.asp
//and stackoverflow answer: https://stackoverflow.com/questions/40263537/javascript-countdown-timer-in-gmt-utc

var countDownDate = new Date('Dec 6, 2022 00:00:00 GMT+00:00').getTime();

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days =  ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-3);
  var hours =  ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds =  ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  
  document.getElementById("anniv").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("anniv").innerHTML = "#MamaNyoSquadAt2";
  }
}, 1000);
