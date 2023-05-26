let maintenance = ["queued", "active", "finished"];


//Japanese Edition

const JPQueued = new Date('May 26, 2023 10:00:00 GMT+09:00').getTime();

const JPqueued = setInterval(function() {
  
  const now = new Date().getTime();
  const distance = JPQueued - now;

  document.getElementById("JPStatus").className = maintenance[0];
  
  if (distance <= 0) {

    clearInterval(JPqueued);
    document.getElementById("JPStatus").className = maintenance[1];

  }

}, 1000);

const JPActive = new Date('May 26, 2023 18:00:00 GMT+09:00').getTime();

const JPactive = setInterval(function() {
  
  const now = new Date().getTime();
  const distance = JPActive - now;
  
  if (distance <= 0) {

    clearInterval(JPactive);
    document.getElementById("JPStatus").className = maintenance[2];

  }

}, 1000);


//Global Edition

const GLQueued = new Date('May 26, 2023 02:30:00 GMT+00:00').getTime();

const GLqueued = setInterval(function() {
  
  const now = new Date().getTime();
  const distance = GLQueued - now;

  document.getElementById("GLStatus").className = maintenance[0];
  
  if (distance <= 0) {

    clearInterval(GLqueued);
    document.getElementById("GLStatus").className = maintenance[1];

  }

}, 1000);

const GLActive = new Date('May 26, 2023 06:30:00 GMT+00:00').getTime();

const GLactive = setInterval(function() {
  
  const now = new Date().getTime();
  const distance = GLActive - now;
  
  if (distance <= 0) {

    clearInterval(GLactive);
    document.getElementById("GLStatus").className = maintenance[2];

  }

}, 1000);