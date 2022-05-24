  // Ice Machine
  // Input: Number of Guest
  // Output: Duration of the ice machine needs to run
var timeTaken = function (numOfGuest) {
  var iceProducePerHour = 5 * 454; // Converted to Grams
  var iceNeeded = numOfGuest * 2 * 4 * 1.5;
  var duration = iceNeeded / iceProducePerHour;
  return duration.toFixed(2)
};

var main = function (input) {
  var myOutputValue = `The hotel would need to run the ice machine for ${timeTaken(input)} hours to produce enough ice for ${input} guests.`;
  return myOutputValue;
};
