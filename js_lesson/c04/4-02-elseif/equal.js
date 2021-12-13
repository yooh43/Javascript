'use strict';

//日つけの取得

var now = new Date();

console.log(now);

//西暦
console.log(now.getFullYear());

//月 0=1月 0～11のインデックス番号
console.log(now.getMonth());

//日(
console.log(now.getDate());

//曜日 0=日曜 0～6のインデックス番号
console.log(now.getDay());

//時
console.log(now.getHours());

//分
console.log(now.getMinutes());

//秒
console.log(now.getSeconds());
