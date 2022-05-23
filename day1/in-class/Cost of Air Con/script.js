var main = function (input) {
  // Cost of Air Con
  // Input: Num of Hours of Air-con used
  // Output: Cost 
  var cost = input * (0.2 * 2);
  var myOutputValue = `It would cost $${cost.toFixed(2)} to use aircon for ${input} hours.`;
  return myOutputValue;
};
