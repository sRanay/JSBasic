// Cost of Cellular Data
// Input: GB used per month
// Output: Cost per GB of data used
var costOfData = function (dataUsed) {
  var totalamount = (Math.ceil(dataUsed/50)) * 19.99;
  var amountPerGB = totalamount / dataUsed;
  return amountPerGB.toFixed(2); 
}

var main = function (input) {
  var myOutputValue = `It cost $${costOfData(input)} per GB`;
  return myOutputValue;
};
