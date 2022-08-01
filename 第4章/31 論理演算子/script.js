var numA = 20;
var numB = 40;
if (numA == 20 && numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 && numB == 40);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 20 && numB == 40);
}

var numA = 10;
var numB = 30;
if (numA == 20 || numB == 40) {
  console.log("ORの条件と一致した処理");
  console.log(numA ==20 || numB == 40);
} else {
  console.log("ORの条件と一致しなかった処理");
  console.log(numA == 20 || numB == 40);
}

var num = 100;
if (num != 100) {
  console.log("NOTの条件と一致した処理");
  console.log(num);
} else {
  console.log("NOTの条件と一致しなかった処理");
  console.log(num);
};