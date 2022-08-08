//1
//プロパティ - 何らかの情報を持っているもの
//メソッド - 何らかの処理をするもの、プロパティの値としてファンクション(関数)が格納されているもの

const teacher = {
  name:"太郎",        //プロパティ
  subject:"国語",     //プロパティ
  profile:function() {    //メソッド
    console.log("担当教科は国語です");
  }
}
teacher.profile()

const obj = {
  name:"麻友",
  age:"25",

  showText: function() {
    console.log("Hello World");
  },
  getName:function() {
    console.log("私の名前は" + this.name + "です");
  },
  getAge:function() {
    console.log("私は" + this.age + "歳です");
  }
}
obj.showText();
obj.getName();
obj.getAge();

//2
function fruit(name,price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
console.log(fruit("トマト","100"));

//3
function addTax(price, func) {
  // priceは値段
  // funcは実行する関数名
  // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);
  func(foodName,taxPrice);
  }
  const price = function price(foodName,taxPrice) {
    console.log(foodName + "の値段は" + taxPrice + "円です。");
  }
  // トマトの税込み価格をコンソールに表示させる処理
let foodName = "トマト";
addTax(100,price);
  // 玉ねぎの税込み価格をコンソールに表示させる処理
foodName = "玉ねぎ";
addTax(200,price);