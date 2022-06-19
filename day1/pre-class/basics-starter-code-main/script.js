var main = function (input) {
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a - b});
  var distanceInKm = 1;
  var distanceInMiles = input * 0.62;
  /*var myOutputValue =
  'Hi! ' + input + ' is equal to ' + distanceInMiles + ' miles.'; OR */
  var myOutputValue = `Hi! ${input} is equal to ${distanceInMiles.toFixed(2)} miles.`; // Setting distanceInMiles to be in 2DP
  return myOutputValue;
};
