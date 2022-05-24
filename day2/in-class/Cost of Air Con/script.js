// Cost of Air Con
// Input: Num of Hours of Air-con used
// Output: Cost 
var costOfAircon = function (duration) {
  var cost = duration * (0.2 * 2);
  return cost.toFixed(2);
}

var main = function (input) {
  var myOutputValue = `It would cost $${costOfAircon(input)} to use aircon for ${input} hours.`;
  return myOutputValue;
};
