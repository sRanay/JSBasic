var main = function (input) {
  var myOutputValue = "";
  /* var roadTripCost = (input / 9) * 2.2;
  myOutputValue = "Road trip will cost $" + roadTripCost.toFixed(2);
  return myOutputValue; */
 /*  var lifetimeHours = (input * 365 * 82) / 24;
  myOutputValue = "You will spend " + lifetimeHours.toFixed(2) + " days in your lifetime with this app"; */
  var pintsPerDay = input * 2;
  var kegsPerDay = pintsPerDay / 124;
  var kegsPerQuarter = kegsPerDay * (365 / 4);
  myOutputValue = kegsPerQuarter + " kegs will be needed per quarter.";
  return myOutputValue;
};
