'use strict';

//配列準備
var stock = [
    'イカ',
    '大トロ',
    'イクラ',
    'あなご',
    'アジ',
    'ヒラメ'
]

//確認
console.log(stock[2]);

//結果表示

// document.getElementById('item0').textContent=stock[0]
// document.getElementById('item1').textContent=stock[1]
// document.getElementById('item2').textContent=stock[2]
// document.getElementById('item3').textContent=stock[3]
// document.getElementById('item4').textContent=stock[4]
// document.getElementById('item5').textContent=stock[5]

//for文に書き換え

// for (var i = 0; i < 6; i++) {
//     //繰り返したい処理
//     document.getElementById('item'+i).textContent=stock[i];
// }

//for ofに書き換え

var i=0

for(let box of stock){
    document.getElementById('item'+i).textContent=stock[i];
    i < 6;
    i++;
}
