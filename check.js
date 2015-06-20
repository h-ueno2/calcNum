
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

function checkTextBox(nums){
  var out = "";
  if (checkEmpty(nums)) {
    out = "<font color=\"#ff0000\">何も入力されていません。数値を入力してください。</font>";
  } else if (checkNumeric(nums)) {
    out = "<font color=\"#ff0000\">入力されたのは数値ではありません。数値を入力してください。</font>";
  } else {
    out = "";
  }
  return out;
}
