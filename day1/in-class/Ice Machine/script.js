var main = function (input) {
  // Ice Machine
  // Input: Number of Guest
  // Output: Duration of the ice machine needs to run
  var iceProducePerHour = 5 * 454; // Converted to Grams
  var iceNeeded = input * 2 * 4 * 1.5;
  var duration = iceNeeded / iceProducePerHour;
  var myOutputValue = `The hotel would need to run the ice machine for ${duration} hours to produce enough ice for ${input} guests.`;
  return myOutputValue;
};
