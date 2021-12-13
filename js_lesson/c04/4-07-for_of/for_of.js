'use strict';

//配列
const sushi = [
    '大トロ',
    'えんがわ',
    '玉子'
];

//コンソールに表示
for (let box of sushi) {
    console.log(box);
}

//配列準備
let items = [
    {name:'イカ', qty: 2, price: 100},
    {name:'大トロ', qty: 1, price: 1000},
    {name:'イクラ', qty: 2, price: 100},
    {name:'あなご', qty: 1, price: 200},
    {name:'アジ', qty: 2, price: 100},
    {name:'ヒラメ', qty: 1, price: 200}
];

let tableLow = '';

//繰り返し(保存用変数itemの中のname,qty,priceを呼び出す)
for(let item of items){
    tableLow += `<tr>
    <td>${item.name}</td>
    <td>${item.qty}貫</td>
    <td>${item.price}-</td>
    </tr>`;
}

//結果表示
document.getElementById('list').innerHTML =tableLow;

