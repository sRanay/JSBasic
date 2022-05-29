var main = function (input) {
  var myOutputValue = '';
  if (input === "bak kut teh" || input === "roti prata") {
    myOutputValue = "others";
  } else if (input === "hokkien mee" || input === "laksa") {
    myOutputValue = "noodle";
  } else {
    myOutputValue = "rice"
  }
  return myOutputValue;
};
