//Function to get date and time inspired from https://www.w3schools.com/jsref/jsref_obj_date.asp -->
function lastedit(){
  var lastestDate = new Date(document.lastModified);
  document.getElementById("time").innerHTML = "Last modified on: " + lastestDate;
}

lastedit();
text();