function pubLoad() {
  setTimeout(function() {
    document.getElementById("load").remove();
    document.getElementById("loadOVL").style.height = "0";
  }, 1900);
}