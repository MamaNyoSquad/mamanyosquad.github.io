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
      "<img src='../../media/svg/TheLonelyBride.svg' alt='' style='width: 475px;'>" +
    "</div>";
  document.getElementById("makeSnowWhiteDisappear").remove();
}

function autoPlayStream() {
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = time - now;
    if (distance <= 42000000) {
      window.location.hash = "streamGoesHere";
    }
  }, 0);
}