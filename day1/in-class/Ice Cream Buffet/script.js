var main = function (input) {
  // Ice Cream Buffet
  // Input: Number of Trips
  // Output: Number of containers used
  var amountConsumed = input * 70;
  var numOfContainerNeeded = amountConsumed / 400;
  var myOutputValue = `If you make ${input} trips to the ice cream station and pick up 1 70ml cup each trip, you would consume ${numOfContainerNeeded.toFixed(2)} 400ml containers of ice cream total.`
  return myOutputValue;
};
