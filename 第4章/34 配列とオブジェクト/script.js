//1
var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits[0]);
console.log(fruits[2]);

//2
//key: プロパティ名
//value: 値
//プロパティー: あらかじめ設定しておいた値に名前(プロパティー名)をつけたもの。

//3
var teacher = {
  name: "太郎",
  age: 25,
  subject: "国語",
};
console.log(teacher);

//4
var teachers = [
  {
    name: "太郎",
    age: 25,
    subject: "国語",
  },
  {
    name: "浩司",
    age: 30,
    subject: "数学",
  },
  {
    name: "花子",
    age: 26,
    subject: "社会",
  }
];
console.log(teachers[0].name);
console.log(teachers[2].subject);