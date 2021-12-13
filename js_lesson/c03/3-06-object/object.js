'use strict';

//オブジェクト準備
var menu = {
    item: 'スパゲッティ',
    time: 7,
    gram: 500
}


//確認
console.log(menu['time']);

//オブジェクト準備

var item = {name: '大トロ', 
            qty: 1, 
            price: 1000}

//変数準備
var tableRaw = `<tr>
    <td>${item.name}</td>
    <td>${item.qty}貫</td>
    <td>&yen;${item.price}-</td>
</tr>`;

//結果表示

document.getElementById('list').
innerHTML = tableRaw;