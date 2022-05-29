// Function checkUserInput
// Input: User Input
// Output: Return False if it does not have the correct input
var checkUserInput = function (userInput) {
  if (userInput === "scissors" || userInput === "paper" || userInput === "stone") {
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
}

var main = function (input) {
  var myOutputValue = 'you lose';
  // Checking for User input
  if (!checkUserInput(input)) {
    myOutputValue = "Please enter a valid input (scissors, paper or stone)";
    return myOutputValue
  }
  var computerChoice = generateSPS();
  var computerIcon = convertToIcon(computerChoice);
  var userIcon = convertToIcon(input);
  console.log("Computer: ",computerChoice);
  console.log("User: ",input);
  // Situation where user wins
  if(
      input === "scissors" && computerChoice === "paper" ||
      input === "paper" && computerChoice === "rock" ||
      input === "stone" && computerChoice === "scissors") {
        myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>You won! Congrats.<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
     } else if ( // Situation where user loses
      computerChoice === "scissors" && input === "paper" ||
      computerChoice === "paper" && input === "rock" ||
      computerChoice === "stone" && input === "scissors") {
        console.log("worked");
        myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>You lost! Bummer.<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
      } else { // Else is a draw
        myOutputValue = `The computer chose ${computerChoice} ${computerIcon} .<br><br>You chose ${input} ${userIcon}.<br><br>Draw!<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
      }
  return myOutputValue;
};