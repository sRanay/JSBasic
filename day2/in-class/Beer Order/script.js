// Beer Order
// Input: Average Number of Customers per day
// Output: Amount of Half-barrel-size kegs the bar needs per quarter
var kegsRequiredQuarter = function (numOfGuest) {
  var pintsPerDay = numOfGuest * 2;
  var kegsPerDay = pintsPerDay / 124;
  var kegsPerQuarter = kegsPerDay * (365 / 4);
  return kegsPerQuarter.toFixed(2);
}

var main = function (input) {
  myOutputValue = `${kegsRequiredQuarter(input)} kegs will be needed per quarter.`;
  return myOutputValue;
};
