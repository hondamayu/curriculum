//1 elseを使用する時の注意点
// elseの仕様はifがある時だけ使用でき、独立して使用はできない。
// if文とelseの間に処理を書いてもエラーとなってしまう。

//2 JavaScriptで実装した時の確認ポイント
// 動くかどうかの確認の他、コンソールにエラーが表示されていないかを確認する。

//3
var num = 101;
if (num === 100) {
  console.log("trueの処理");
  console.log(num);
} else {
  console.log("falseの処理");
  console.log(num);
}

//4
var text = "JavaScript1";
if (text === "JavaScript") {
  console.log("trueの処理");
  console.log(text);
} else {
  console.log("falseの処理");
  console.log(text);
}