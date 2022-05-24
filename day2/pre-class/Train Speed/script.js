// Train Speed
// Input: Delay duaration in minutes
// Output: Speed of Train 2

var tripDistance = function () {
  var totalDistance = 200 * 2; // Distance in KM
  return totalDistance;
}

var speedRequired = function (DelayDuration) {
  DelayDuration = DelayDuration / 60; // Convert into hours
  var timeTakenT2 = 2 - DelayDuration;
  var minSpeed = tripDistance() / timeTakenT2;
  return minSpeed.toFixed(2);
}

var main = function (input) {
  var myOutputValue = "";
  var speed = speedRequired(input);
  myOutputValue = `The train need to travel at ${speed} kph.`;
  return myOutputValue;
};
