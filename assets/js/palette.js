function changePalette(bgClr, fntClr) {
  document.querySelector(".paletteFeed").setAttribute("style", `background-color: ${bgClr}; color: ${fntClr};`);
  navigator.clipboard.writeText(bgClr);
  document.querySelector(".hexVl").innerHTML = bgClr.toUpperCase();
  navigator.clipboard.writeText(bgClr);
  document.querySelector(".copiedToClipboard").style.backgroundColor = bgClr;
  document.querySelector(".copiedToClipboard").style.color = fntClr;
  setTimeout(() => {
    document.querySelector(".copiedToClipboard").style.transition = "0.95s";
    document.querySelector(".copiedToClipboard").style.opacity = "1";
    document.querySelector(".copiedToClipboard").style.bottom = "calc(19px * 2.5)";
    setTimeout(() => {
      document.querySelector(".copiedToClipboard").style.opacity = "0";
      document.querySelector(".copiedToClipboard").style.bottom = "19px";
      setTimeout(() => {
        document.querySelector(".copiedToClipboard").style.transition = "none";
      }, 950);
    }, 3800);
  }, 0);
}