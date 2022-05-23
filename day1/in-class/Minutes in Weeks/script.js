var main = function (input) {
  // Minutes in Weeks
  // Input: Weeks
  // Output: Num of Minutes in N Weeks
  var numOfMinutes = input * 7 * 24 * 60;
  var myOutputValue = `In ${input} weeks there are ${numOfMinutes}! Wow!`
  return myOutputValue;
};
