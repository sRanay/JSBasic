// Lucky 11
// Input: 1 Number to guess
// Output: Wins if either dice match their guess or total dice roll is 11

// Get a number between 0 to max
var getRandomInt = function (max) {
  return Math.floor(Math.random() * max);
};

// Get a number between 1 to 6 
var rollDice = function () {
  return getRandomInt(6) + 1;
};

var main = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  // The default output value is "you lose".
  var myOutputValue = 'you lose';
  // If the input matches both random dice numbers, output value is "you win".
  if (randomDiceNumber1 == input && randomDiceNumber2 == input && randomDiceNumber1 != 1 && randomDiceNumber2 != 1) {
    myOutputValue = 'you win';
  }
  return myOutputValue;
};
