function clockUI() {
  let viTD = new Date(new Date().getTime() + diffOffs(11));
  let hh = viTD.getHours(),
    mm = addZero(viTD.getMinutes()),
    ss = addZero(viTD.getSeconds());
  document.querySelector("p[venusIslandTime]").innerHTML = if12or24(hh, mm, ss);
  document.querySelector("p[viDate]").innerHTML = `${daysOfTheWeek(viTD.getDay())}, ${viTD.getDate()} ${monthNum(viTD.getMonth())} ${viTD.getFullYear()}`;
  setTimeout(clockUI, 0);
}
function yourTimeZone() {
  let ytzTD = new Date(new Date().getTime());
  let hh = ytzTD.getHours(),
    mm = addZero(ytzTD.getMinutes()),
    ss = addZero(ytzTD.getSeconds());
  document.querySelector("p[yourTz]").innerHTML = if12or24(hh, mm, ss);
  document.querySelector("p[yourTzDate]").innerHTML = `${daysOfTheWeek(ytzTD.getDay())}, ${ytzTD.getDate()} ${monthNum(ytzTD.getMonth())} ${ytzTD.getFullYear()}`;
  document.querySelector("span[yourTzFrmt]").innerHTML = `${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
  // document.querySelector("span[yourTzFrmt]").innerHTML = `${-(ytzTD.getTimezoneOffset() / 60)}`;
  setTimeout(yourTimeZone, 0);
}

function daysOfTheWeek(wd) {
  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekday[wd];
}
function monthNum(mth) {
  let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return months[mth];
}

function if12or24(hr, mn, sc) {
  let frmt = new URLSearchParams(window.location.search).get("format");
  switch (frmt) {
    case "24":
      document.querySelector("button[set12or24]").innerText = "Switch to 12-hr format";
      document.querySelector("button[set12or24]").setAttribute("style", "display: block;");
      document.querySelector("button[set12or24]").onclick = () => { window.location.replace("?format=12"); };
      return `${addZero(hr)}:${mn}:${sc}`;
    case "12":
      document.querySelector("button[set12or24]").innerText = "Switch to 24-hr format";
      document.querySelector("button[set12or24]").setAttribute("style", "display: block;");
      document.querySelector("button[set12or24]").onclick = () => { window.location.replace("?format=24"); };
      return `${hr12(hr)}:${mn}:${sc}${ampm(hr)}`;
    default: return window.location.replace("?format=12");
  }
}