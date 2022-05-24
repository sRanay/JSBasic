// Mortgage Calculator
// Input: Loan amount
// Output: Total amount including principal, Interest amount, Monthly payment

var totalAmountToRepay = function (loanPeriod, loanAmount) {
  var total = loanPeriod * (1.03 ** loanPeriod);
  return total;
}

var main = function (input) {
  var myOutputValue = "";
  var totalAmountPayable = totalAmountToRepay(10, input);
  var totalInterestPayable = totalAmountPayable - input;
  var monthlyPayment = totalAmountPayable / (10 * 12);
  myOutputValue = `The total amount to repay is $${totalAmountPayable.toFixed(2)}. The total interest amount to repay is $${totalInterestPayable.toFixed(2)}. The monthly payment is $${monthlyPayment.toFixed(2)}.`;
  return myOutputValue;
};
