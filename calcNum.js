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

function checkEmpty(values) {
  var empty = false;
  for (var i = 0; i < values.length; i++) {
    isEmpty(values[i]) ? empty = true : empty = false;
  }
  return empty;
}

function isEmpty(value) {
  //空文字チェック
  return value == "" ? true : false;
}

function checkNumeric(values) {
  var numeric = false;
  for (var i = 0; i < values.length; i++) {
    isNumeric(values[i]) ? numeric = true : numeric = false;
  }
  return numeric;
}

function isNumeric(value) {
  //数値チェック
  return value.match(/[^0-9]+/);
}
