let maintenance = ["queued", "ongoing", "done"];
const maintToday = new Date().getTime();


//Japanese Edition

function jMaint() {

  const jpActive = new Date("January 24, 2024 10:00:00 GMT+09:00").getTime(),
    jpEnd = new Date("January 24, 2024 17:00:00 GMT+09:00").getTime(),
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

}


//Global Edition

function gMaint() {

  const glActive = new Date("January 26, 2024 07:30:00 GMT+00:00").getTime(),
    glEnd = new Date("January 26, 2024 09:30:00 GMT+00:00").getTime(),
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

}