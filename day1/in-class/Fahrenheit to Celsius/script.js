var main = function (input) {
  // Fahrenheit to Celsius
  // Input: Fahreneheit
  // Output: Celsius
  var celsius = (input - 32) * 5 / 9;
  var myOutputValue = `${input}F is equal to ${celsius.toFixed(2)}C`; // Setting to 2DP
  return myOutputValue;
};
