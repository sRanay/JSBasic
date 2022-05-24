// Juice Wedding
// Input: Number of Guest
// Output: Oranges needed and volume of juice received in litres
var numOrangesNeeded = function (numOfGuest) {
  var orangesNeeded = numOfGuest * 4;
  return orangesNeeded;
};

var volJuiceNeeded = function (numOfGuest) {
  var juiceNeeded = numOfGuest * 0.09;
  return juiceNeeded;
}

var main = function (input) {
  var orangesNeeded = numOrangesNeeded(input);
  var juiceNeeded = volJuiceNeeded(input);
  var myOutputValue = `We will need ${orangesNeeded} oranges and will receive ${juiceNeeded} litres of juice.`;
  return myOutputValue;
};
