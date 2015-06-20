
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
