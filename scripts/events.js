// detect if site is WebApp

const parseQuery = new URLSearchParams(window.location.search); // global value

function specialEvent() {
  const isWebApp = parseQuery.get("eventDismissed");
  if (isWebApp == "1") {
    console.log("event not triggered");
  } else {
    console.log("event triggered");
    // window.location.replace("events/tiananmen-anniversary");
  }
}
// code: https://sitepoint.com/get-url-parameters-with-javascript 
// and https://github.com/VTresMarias/vtresmarias.github.io 