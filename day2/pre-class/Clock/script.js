// Clock
// Input: Minutes past 1pm
// Output: Angle between the hour and minute hand
// 1 Minute = 6 degree

var angleBetweenHourMin = function (minPast1) {
  if (minPast1 < 5) {
    return (5 - minPast1) * 6;
  } else if (minPast1 === 5) {
    return 0;
  } else {
    return (minPast1 - 5) * 6;
  }
};

var main = function (input) {
  var myOutputValue = "";
  var degree = angleBetweenHourMin(input);
  myOutputValue = `It is ${degree} degree between the Hour and Minute Hand`;
  return myOutputValue;
};
