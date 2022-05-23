var main = function (input) {
  // Beer Order
  // Input: Average Number of Customers per day
  // Output: Amount of Half-barrel-size kegs the bar needs per quarter
  var pintsPerDay = input * 2;
  var kegsPerDay = pintsPerDay / 124;
  var kegsPerQuarter = kegsPerDay * (365 / 4);
  myOutputValue = kegsPerQuarter + " kegs will be needed per quarter.";
  return myOutputValue;
};
