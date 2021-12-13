'use strict';

//変数準備
//const word ='ピラミッドはエジプトのお墓';
const word = '古墳は日本のお墓';
let effect ='';

//繰り返し設定（１から１３まで文字の取得を繰り返す）

let i = 1;

//while文の場合 
//.lengthで文字数を取得する
while (i <= word.length) {
     const part = word.substring(0, i);
    document.getElementById('effect').innerHTML += `<p>${part}</p>`;i++;}

//for文の場合

// for (var i =1; i <= word.length; i++){


//      var part = word.substr(0,i);


//結果表示（ｐタグで設定し改行し前の結果を残し繰り返しで表示する））
// document.getElementById('effect').innerHTML += `<p>${part}</p>`;}

let x = 1;
let y = 1896;
const inBox=document.getElementById('olim')
while(x < 33){
    if(x === 6||x===12||x===13){
        inBox.innerHTML +='';
    }
else if(x===32){
    inBox.innerHTML +=`<p>第${x}回${y+1}年開催</p>`;
}

else{
    inBox.innerHTML +=`<p>第${x}回${y}年開催</p>`;
}
x++;y+=4;

};



