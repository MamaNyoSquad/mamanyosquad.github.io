// detect if site is WebApp

function specialEvent() { // special events page

  const isWebApp = new URLSearchParams(window.location.search).get("eventDismissed");

  if (isWebApp == "1") {
    console.log("event not triggered");
  } else {
    console.log("event triggered");
    // window.location.replace("/events/tiananmen-anniversary");
  }

}
// code: https://sitepoint.com/get-url-parameters-with-javascript 
// and https://github.com/VTresMarias/vtresmarias.github.io 

function eventBanner() { // banner event
  
  // var url = "wk131eoZGDk";
  // window.open("https://youtu.be/" + url);

}