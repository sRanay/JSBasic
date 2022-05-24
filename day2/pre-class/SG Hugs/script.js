// SG Hugs
// Input: Number of seconds they like to hug
// Output: Time taken in years to hug everyone in singapore
var timeTakenToHug = function (timeTaken) {
  var allowedTimePerDay = 24 - 9;
  var populationOfSG = 5700000;
  var totalTimetaken = timeTaken * populationOfSG; // In seconds
  totalTimetaken = totalTimetaken / 60 / 60; // Converting to Hours
  var totalamount = totalTimetaken / allowedTimePerDay; // Total number of day required
  totalamount = totalamount / 365;
  return totalamount.toFixed(2);
}

var main = function (input) {
  var myOutputValue = "";
  var totalamount = timeTakenToHug(input);
  myOutputValue = `It will take ${totalamount} years`;
  return myOutputValue;
};
