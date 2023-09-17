function docMod() {

  var editedDate, utcMonth, utcDay, utcYear;

  editedDate = new Date(document.lastModified);
  utcDay = editedDate.getUTCDate();
  utcYear = editedDate.getUTCFullYear();

  switch(editedDate.getUTCMonth()) {
    case 0:
      utcMonth = "January";
      break;
    case 1:
      utcMonth = "February";
      break;
    case 2:
      utcMonth = "March";
      break;
    case 3:
      utcMonth = "April";
      break;
    case 4:
      utcMonth = "May";
      break;
    case 5:
      utcMonth = "June";
      break;
    case 6:
      utcMonth = "July";
      break;
    case 7:
      utcMonth = "August";
      break;
    case 8:
      utcMonth = "September";
      break;
    case 9:
      utcMonth = "October";
      break;
    case 10:
      utcMonth = "November";
      break;
    case 11:
      utcMonth = "December";
      break;
  }

  var docModified = utcDay + " " + utcMonth + " " + utcYear;
  document.getElementById("modifiedUTC").innerHTML = docModified;
}