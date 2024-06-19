// detect if site is WebApp

const parseQuery = new URLSearchParams(window.location.search); // global value

function whereBtn() {
  const isWebApp = parseQuery.get("eventOverview");
  if (isWebApp == "1") {
    console.log("event triggered");
    document.getElementById("backToTitle").style.display = "none";
  } else {
    console.log("event not triggered");
  }
}
// code: https://sitepoint.com/get-url-parameters-with-javascript 
// and https://github.com/VTresMarias/vtresmarias.github.io 