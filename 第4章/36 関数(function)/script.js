//1
function functionTest() {
}

function showAlert() {
  alert("functionTest")
}
showAlert()

//2
var addNum = function () {
  return 1 + 1;
}
console.log(addNum());

//3 スコープについて
// 変数がどの場所から参照できるのかを定義する概念
// その変数が参照できる範囲のこと
// 同じスコープ上にある変数にはアクセスできるが、
// スコープが違えば、別々のスコープにある変数にはお互いにアクセスすることができない。
// JavaScriptでは関数やブロックごとに別々のスコープが作られるため、
// プログラム内で同じ名前の変数があってもスコープが違えば別物となる。