var main = function (input) {
  // Time to Type Sonnets
  // Input: WPM
  // Output: Time taken in Hours
  var timeTaken = (17677 / input) / 60;
  var myOutputValue = `At a typing speed of ${input} words per minute, it would take someone ${timeTaken.toFixed(2)} hours to type all 17677 words of Shakespeare's sonnets.`; // Set to 2DP
  return myOutputValue;
};
