function changePalette(bgClr, fntClr) {
  document.querySelector(".paletteFeed").setAttribute("style", `background-color: ${bgClr}; color: ${fntClr};`);
  if (sessionStorage.getItem("copyHexToClipboard") === "true") {
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
}

function toggleCopyToClipboard(e) {
  sessionStorage.setItem("copyHexToClipboard", e);
  if (e === true) {
    document.querySelector(".toggleCheck").innerText = "check_box";
    document.querySelector(".toggleCheck").setAttribute("onclick", "{ toggleCopyToClipboard(false); }");
  } else {
    document.querySelector(".toggleCheck").innerText = "check_box_outline_blank";
    document.querySelector(".toggleCheck").setAttribute("onclick", "{ toggleCopyToClipboard(true); }");
  }
}

function autoToggleCopyToClipboard() {
  if (sessionStorage.getItem("copyHexToClipboard") === "true") { toggleCopyToClipboard(true); }
  else { toggleCopyToClipboard(false); }
}