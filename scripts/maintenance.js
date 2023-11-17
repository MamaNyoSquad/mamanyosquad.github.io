let maintenance = ["queued", "active", "finished"];
const maintToday = new Date().getTime();


//Japanese Edition

function jMaint() {

  const jpActive = new Date("November 18, 2023 10:00:00 GMT+09:00").getTime(),
    jpEnd = new Date("November 18, 2023 18:00:00 GMT+09:00").getTime(),
    unixDetDist = jpEnd - jpActive,
    unixActDist = jpEnd - maintToday;
  
  const jpMaint = setInterval(function() {
    document.getElementById("jpStat").className = maintenance[0];
    if (unixActDist <= unixDetDist) {
      document.getElementById("jpStat").className = maintenance[1];
    }
    if (unixActDist <= 0) {
      clearInterval(jpMaint);
      document.getElementById("jpStat").className = maintenance[2];
    }
  }, 0);

  /*
  const jpActive = new Date("November 9, 2023 10:00:00 GMT+09:00").getTime();
  const jpEnd = new Date("November 9, 2023 17:00:00 GMT+09:00").getTime();

  const unixActive = setInterval(function() {
    const unixCalc = jpActive - maintToday;
    document.getElementById("jpStat").className = maintenance[0];
    if (unixCalc <= 0) {
      clearInterval(unixActive);
      document.getElementById("jpStat").className = maintenance[1];
    }
  }, 0);
  const unixEnd = setInterval(function() {
    const unixCalc = jpEnd - maintToday;
    if (unixCalc <= 0) {
      clearInterval(unixEnd);
      document.getElementById("jpStat").className = maintenance[2];
    }
  }, 0);
  */

}


//Global Edition

function gMaint() {

  const glActive = new Date("November 9, 2023 10:00:00 GMT+09:00").getTime(),
    glEnd = new Date("November 9, 2023 17:00:00 GMT+09:00").getTime(),
    unixDetDist = glEnd - glActive,
    unixActDist = glEnd - maintToday;
  
  const glMaint = setInterval(function() {
    document.getElementById("glStat").className = maintenance[0];
    if (unixActDist <= unixDetDist) {
      document.getElementById("glStat").className = maintenance[1];
    }
    if (unixActDist <= 0) {
      clearInterval(glMaint);
      document.getElementById("glStat").className = maintenance[2];
    }
  }, 0);

  /*
  const glActive = new Date("October 25, 2023 02:30:00 GMT+00:00").getTime();
  const glEnd = new Date("October 25, 2023 06:30:00 GMT+00:00").getTime();

  const unixActive = setInterval(function() {
    const unixCalc = glActive - maintToday;
    document.getElementById("glStat").className = maintenance[0];
    if (unixCalc <= 0) {
      clearInterval(unixActive);
      document.getElementById("glStat").className = maintenance[1];
    }
  }, 0);
  const unixEnd = setInterval(function() {
    const unixCalc = glEnd - maintToday;
    if (unixCalc <= 0) {
      clearInterval(unixEnd);
      document.getElementById("glStat").className = maintenance[2];
    }
  }, 0);
  */

}