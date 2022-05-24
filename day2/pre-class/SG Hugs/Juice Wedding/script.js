var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var distanceInMiles = convertKmToMiles(input);
  var myOutputValue = `Hi! ${input} is equal to ${distanceInMiles.toFixed(2)} miles.`; // Setting distanceInMiles to be in 2DP
  return myOutputValue;
};
