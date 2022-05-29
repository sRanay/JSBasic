// Global Variable
var reversedMode = false;
var normalMode = true;

// Function checkUserInput
// Input: User Input
// Output: Return False if it does not have the correct input
var checkUserInput = function (userInput) {
  if (userInput === "scissors" || userInput === "paper" || userInput === "stone" || userInput === "reversed" || userInput === "normal") {
    return true;
  } else {
    return false;
  }
};

// Function generateSPS
// Output: Generate a random choice for the computer (scissor, paper or stone)
var generateSPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var number = randomInteger + 1;
  if (number === 1) {
    return "scissors";
  } else if (number === 2) {
    return "paper"; 
  } else {
    return "stone";
  }
};

// Function convertToIcon
// Input: scissors, paper or stone
// Output: converting it into icons
var convertToIcon = function (choice) {
  if (choice === "scissors") {
    return "✂️";
  } else if (choice === "paper") {
    return "🗒";
  } else {
    return "🪨";
  }
};

var winOrLose = function (user1,user2) {
  if(
    user1 === "scissors" && user2 === "paper" ||
    user1 === "paper" && user2 === "stone" ||
    user1 === "stone" && user2 === "scissors") {
      return true;
    }
    return false;
};

var main = function (input) {
  var myOutputValue = 'you lose';
  // Checking for User input
  if (!checkUserInput(input)) {
    myOutputValue = "Please enter a valid input (scissors, paper or stone)";
    return myOutputValue
  }
  if (input === "reversed") {
    myOutputValue = "Welcome to Reversed Mode."
    normalMode = false;
    reversedMode = true;
    return myOutputValue;
  }
  if (input === "normal") {
    myOutputValue = "Welcome to Normal Mode."
    normalMode = true;
    reversedMode = false;
    return myOutputValue;
  }
  var computerChoice = generateSPS();
  var computerIcon = convertToIcon(computerChoice);
  var userIcon = convertToIcon(input);
  if (normalMode === true) {
    var userWon = winOrLose(input, computerChoice);
    var computerWon = winOrLose(computerChoice, input);
  } else {
    var userWon = winOrLose(computerChoice, input);
    var computerWon = winOrLose(input, computerChoice);
  }
  console.log("Computer: ", computerChoice);
  console.log("User: ", input);
  console.log("Reversed Mode: ", reversedMode);
  console.log("Normal Mode: ", normalMode);
  // Situation where user wins
  if(userWon === true) {
        myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>You won! Congrats.<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
      } else if (computerWon === true) { // Situation where user loses
        myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>You lost! Bummer.<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
      } else { // Else is a draw
        myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>Draw!<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
      }
  return myOutputValue;
};