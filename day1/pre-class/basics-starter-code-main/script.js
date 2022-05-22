var main = function (input) {
  //var myOutputValue = 2;
  //var pi = 3.14;
  //var radius = 4;
  //var area = pi * radius * radius;
  //myOutputValue = 'Hello ' + input + ', you look great today!';
  var distanceInKm = 1;
  var distanceInMiles = input * 0.62;
  /*var myOutputValue =
  'Hi! ' + input + ' is equal to ' + distanceInMiles + ' miles.'; OR */
  var myOutputValue = `Hi! ${input} is equal to ${distanceInMiles.toFixed(2)} miles.`; // Setting distanceInMiles to be in 2DP
  return myOutputValue;
};
