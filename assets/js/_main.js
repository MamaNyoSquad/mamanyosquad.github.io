// root javascript

// global init
function init() {
  supplementalBtns();
  triggerResponsive();
  showVersion();
  randomClr();
  cssChange(); // global css change
  viClock(); // js clock
  start(); // per page
  // pwaInit(); // initialize PWA
}

function showVersion() { document.querySelector("#siteVersion").innerHTML = "v20240518.23.8"; }

// js clock code adapted from w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
// with some improvisations to convert to am/pm format. initially used in G.Mgr's streams.
function viClock() {
  let tD = new Date(new Date().getTime() + diffOffs(11));
  let hh = tD.getHours(),
    mm = addZero(tD.getMinutes()),
    ss = addZero(tD.getSeconds());
  document.querySelector("#footTime").innerHTML = `${hr12(hh)}:${mm}${ampm(hh)}&ensp;&bull;&ensp;VIT (UTC +11)`;
  setTimeout(viClock, 0);
}
function addZero(z) {
  if (z < 10) { return `0${z}`; }
  else { return z; };
}
function diffOffs(tz) {
  let dt = new Date(),
    tzDiff = tz * 60 + dt.getTimezoneOffset();
  return tzDiff * 60 * 1000;
}
function hr12(hr) {
  let hrs = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  for (let a = hr; a <= 23; a++) {
    if (hr <= 11) { return hrs[a]; }
    else if (hr <= 23) { return hrs[a - hrs.length]; }
  }
}
function ampm(ap) {
  let apD = ["am", "pm"];
  for (let p = ap; p <= 23; p++) {
    if (ap <= 11) { return apD[0]; }
    else if (ap <= 23) { return apD[1]; }
  }
}