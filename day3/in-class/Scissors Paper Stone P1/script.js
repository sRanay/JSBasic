// Global Variable
var reversedMode = false;
var normalMode = true;
var userName = false;
var user = "";
var numberOfGame = 0;
var numberOfWin = 0;

// Function checkUserInput
// Input: User Input
// Output: Return False if it does not have the correct input
var checkUserInput = function (userInput) {
  if (
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === "stone" ||
    userInput === "reversed" ||
    userInput === "normal"
  ) {
    return true;
  } else {
    return false;
  }
};

// Function generateSPS
// Purpose: To use Math.random() to generate a choice for the computer
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
// Purpose: To convert the words into icons to be displayed on the output
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

// Function winOrLose
// Purpose: It is to check whether user1 win user2 (normal mode) or user2 win user1 (reversed mode)
// Input: user1's choice and user2's choice
// Output: return true if user1 win (normal mode) or user2 win (reversed mode)
var winOrLose = function (user1, user2) {
  if (
    (user1 === "scissors" && user2 === "paper") ||
    (user1 === "paper" && user2 === "stone") ||
    (user1 === "stone" && user2 === "scissors")
  ) {
    return true;
  }
  return false;
};

// Function enterReversedMode
var enterReversedMode = function () {
  normalMode = false;
  reversedMode = true;
};

// Function enterNormalMode
var enterNormalMode = function () {
  normalMode = true;
  reversedMode = false;
};

// Main function
var main = function (input) {
  var myOutputValue = "you lose";
  if (userName === false) {
    userName = true;
    user = input;
    return "Please enter scissors, paper or stone";
  }
  // Checking for User input
  if (!checkUserInput(input)) {
    return "Please enter a valid input (scissors, paper or stone)";
  }
  // Checking whether the user entered reversed mode
  if (input === "reversed") {
    enterReversedMode();
    return "Welcome to Reversed Mode.";
  }
  // Checking whether the user entered normal mode
  if (input === "normal") {
    enterNormalMode();
    return "Welcome to Normal Mode.";
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
  numberOfGame += 1;
  // Situation where user wins
  if (userWon === true) {
    numberOfWin += 1;
    myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>You won! Congrats.<br><br>So far ${user}, you have won ${numberOfWin}/${numberOfGame} rounds<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  } else if (computerWon === true) {
    // Situation where user loses
    myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>You lost! Bummer.<br><br>So far ${user}, you have won ${numberOfWin}/${numberOfGame} rounds<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  } else {
    // Else is a draw
    myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>Draw!<br><br>So far ${user}, you have won ${numberOfWin}/${numberOfGame} rounds<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};
