'use strict';

//デジタル時計表示

function whatTime()

{

//現在の年月日・曜日の取得
const year=new Date ().getFullYear();
const month=new Date ().getMonth() + 1;
const date =new Date ().getDate();
const daylist = ['日','月','火','水','木','金','土'];

const day=new Date().getDay();

//結果表示

document.getElementById('y-m-d').
innerHTML= `${year}年 ${month}月${date}日(${daylist[day]})`;


//時間の取得・ファンクション名のtwoをつけて０を表示する部分を指示する
const hours =two(new Date ().getHours());
const minutes=two(new Date ().getMinutes());
const seconds=two(new Date ().getSeconds());

//結果表示
document.getElementById('h-m-s').
innerHTML= `${hours}:${minutes}:${seconds}`;
}

//ファンクション、if文で数字が１桁の時に先頭に０を表示する。

function two(num){
    if(num <= 9){
        return '0'+num;
    }else {
        return num;
    }
}

//最初の１秒分
whatTime();
//１秒ごとに時間取得
const clock = setInterval(whatTime, 1000);


