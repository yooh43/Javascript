'use strict';

//変数基本形

function facelist(list) {
    let face = {
        good:'(^^)',
        soso:'(..)',
    }
    console.log(face[list]);
    return document.getElementById('users').
    textContent += face['good'];
}


facelist('soso');

//変数の中にファンクションを代入する

const percentage = function (A,B){
    return Math.round(A / B * 100)+'%';
}

console.log( percentage(7,13));
console.log( percentage(3,13));