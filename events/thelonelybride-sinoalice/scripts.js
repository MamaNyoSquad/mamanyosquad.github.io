/* this only applies to thelonelybride-sinoalice */

function eventEnd() {
  document.getElementById("removeElement").remove();
  document.getElementById("sinoEnd").innerHTML =
    "<div style='text-align: center;'>" +
      "<h1>The Library is officially closed.</h1>" +
      "<p>" +
        "Thank you for tuning in with us in commemorating the final moments of SINoALICE Global Edition. " +
        "Godspeed, Pokelabo; and <b>Godspeed, SINoALICE Global Edition!</b>" +
      "</p>" +
      "<br><br><br><br>" +
      "<img src='../../media/images/bride_3.png' alt=''>" +
      "<br>" +
      "<img class='TheLonelyBride' src='../../media/svg/TheLonelyBride.svg' alt='' style='width: 475px;'>" +
      "<br><br><br>" +
      "<button onclick='window.open(&quot;https://youtu.be/y2D0m3I_GVY&quot;)'>Rewatch the stream</button>" +
    "</div>";
  document.getElementById("makeSnowWhiteDisappear").remove();
}

function autoPlayStream() {
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = time - now;
    if (distance <= 4200000) {
      window.location.hash = "streamGoesHere";
      interactModeOff();
    }
    if (distance <= 0) {
      interactModeOn();
    }
  }, 0);
}