function _calcAddiction(valueArray) {
  //足し算
  var result = 0;
  for (var i = 0; i < valueArray.length; i++)
    result += Number(valueArray[i]);
  return result;
}

function _calcSubtraction(valueArray) {
  //引き算
  var result = valueArray[0];
  for (var i = 1; i < valueArray.length; i++)
    result -= Number(valueArray[i]);
  return result;
}

function _calcMultiplication(valueArray) {
  //掛け算
  var result = valueArray[0];
  for (var i = 1; i < valueArray.length; i++)
    result *= Number(valueArray[i]);
  return result;
}

function _calcDivision(valueArray) {
  var result = valueArray[0];
  for (var i = 1; i < valueArray.length; i++)
    result /= Number(valueArray[i]);
  return result;
}
