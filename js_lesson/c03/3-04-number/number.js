'use strict';

console.log(6.4 + 2.8);
console.log(4 - 6);
console.log(11 * 16);
console.log(12 / 6);
console.log(7 % 4)
console.log(2 ** 3);
console.log(Math.round((6.4 - 2.8)*10) /10);

//変数準備
var loginName = '梅田薫';
var done = 7;
var total = 13;
var percent = Math.round( done / total *100);


//結果表示
            document.getElementById('login-name').textContent = `ログイン:${loginName}さん`;

            document.getElementById('progress').
            textContent = `受講済み:${done}・授業数：${total}・完了率：${percent}%`;
