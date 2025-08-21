// language selector
// mostly in "en" and "ja", but you can add more languages here if necessary

// TODO: if you intend to invoke this script as part of the language change,
// ensure that the elements that are to be switched should be inside a
// parent div surrounding the affected id. you can find the sample
// implementation of this on maintenance.html.

function cLang(l) {
  if (l == "en") {
    document.getElementById("en").setAttribute("style", "display: block;");
    document.getElementById("ja").setAttribute("style", "display: none;");
  }
  if (l == "ja") {
    document.getElementById("en").setAttribute("style", "display: none;");
    document.getElementById("ja").setAttribute("style", "display: block;");
  }
}