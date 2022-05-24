// House Paint
// Input: Cost of paint per litre
// Output: Total cost of the paint
var totalareaofWindowsDoor = function (numOfDoorWindow) {
  var totalarea = numOfDoorWindow * 0.9 * 1.5 * 2; // Coating it twice
  return totalarea;
};

var totalAreaOfRoom = function (numOfRoom) {
  var totalarea = numOfRoom * 3 * 3 * 2; //Coating it twice
  return totalarea;
};

var costOfPaint = function (priceOfPaint) {
  var doorWindow = 6 + 8; // Num of Door and Window
  var room = 6; // Num of room
  var totalarearequired = totalAreaOfRoom(room) + totalareaofWindowsDoor(doorWindow);
  var totalCost = (totalarearequired / 300) * priceOfPaint;
  return totalCost.toFixed(2);
};

var main = function (input) { 
  var myOutputValue = "";
  var cost = costOfPaint(input);
  myOutputValue = `The total cost would be $${cost}.`;
  return myOutputValue;
};
