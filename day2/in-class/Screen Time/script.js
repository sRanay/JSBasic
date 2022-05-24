  // Screen Time
  // Input: Num of Hours Spent per day on app
  // Output: How many days spent on app
var daysSpent = function (hourSpent) {
  var totalDaysSpent = (hourSpent * 82 * 365) / 24;
  return totalDaysSpent;
}

var main = function (input) {
  var myOutputValue = `If one spends ${input} hours per day on one's favourite app, one would be spending ${daysSpent(input).toFixed(2)} days in one's lifetime on this app`;
  return myOutputValue;
};
