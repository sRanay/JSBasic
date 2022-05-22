var main = function (input) {
  // Converting KM to Miles
  /*
  var distanceInKm = 1;
  var distanceInMiles = input * 0.62;
  var myOutputValue = `Hi! ${input} is equal to ${distanceInMiles.toFixed(2)} miles.`; // Setting distanceInMiles to be in 2DP
  */

  // Start of Base Exercise

  // Minutes in Weeks
  // Input: Weeks
  // Output: Num of Minutes in N Weeks
  /*
  var numOfMinutes = input * 7 * 24 * 60;
  var myOutputValue = `In ${input} weeks there are ${numOfMinutes}! Wow!`
  */

  // Fahrenheit to Celsius
  // Input: Fahreneheit
  // Output: Celsius
  /*
  var celsius = (input - 32) * 5 / 9;
  var myOutputValue = `${input}F is equal to ${celsius.toFixed(2)}C`; // Setting to 2DP
  */

  // Road Trip Cost
  // Input: Length of trip
  // Output: Fuel Cost
  /*
  var PetrolCost = (input/9) * 2.2;
  var myOutputValue = `It would cost $${PetrolCost.toFixed(2)} to drive your Ferrari ${input} kilometres.`
  */

  // Ice Cream Buffet
  // Input: Number of Trips
  // Output: Number of containers used
  /*
  var amountConsumed = input * 70;
  var numOfContainerNeeded = amountConsumed / 400;
  var myOutputValue = `If you make ${input} trips to the ice cream station and pick up 1 70ml cup each trip, you would consume ${numOfContainerNeeded.toFixed(2)} 400ml containers of ice cream total.`
  */

  // Time to Type Sonnets
  // Input: WPM
  // Output: Time taken in Hours
  /*
  var timeTaken = (17677 / input) / 60;
  var myOutputValue = `At a typing speed of ${input} words per minute, it would take someone ${timeTaken.toFixed(2)} hours to type all 17677 words of Shakespeare's sonnets.`; // Set to 2DP
  */
  
  // End of Base Exercise

  // Start of Comfortable Exercise

  // Cost of Air Con
  // Input: Num of Hours of Air-con used
  // Output: Cost
  /*
  var cost = input * (0.2 * 2);
  var myOutputValue = `It would cost $${cost.toFixed(2)} to use aircon for ${input} hours.`;
  */

  // Screen Time
  // Input: Num of Hours Spent per day on app
  // Output: How many days spent on app
  /*
  var daysSpent = (input * 82 * 365) / 24;
  var myOutputValue = `If one spends ${input} hours per day on one's favourite app, one would be spending ${daysSpent} days in one's lifetime on this app`;
  */

  // End of Comfortable Exercise

  // Start of More Comfortable Exercise
  
  return myOutputValue;
};
