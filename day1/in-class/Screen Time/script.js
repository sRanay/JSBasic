var main = function (input) {
  // Screen Time
  // Input: Num of Hours Spent per day on app
  // Output: How many days spent on app
  var daysSpent = (input * 82 * 365) / 24;
  var myOutputValue = `If one spends ${input} hours per day on one's favourite app, one would be spending ${daysSpent} days in one's lifetime on this app`;
  return myOutputValue;
};
