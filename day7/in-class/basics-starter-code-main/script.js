// Global Variable
var adjectives = [];

var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var main = function (input) {
  var madLib = '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' + randomAdj + ' wife.';
  var myOutputValue = 2;
  console.log(myOutputValue);
  return myOutputValue;
};
