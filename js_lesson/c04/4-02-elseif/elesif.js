'use strict';

//時間の取得
var hour = new Date().getHours();


//文章準備
var msg = '';

//if文
if (hour >= 9 && hour < 12){
    msg= '午前の診察を受け付けています。';
} else if(hour >= 12 && hour < 15){
    msg= 'ただ今の時間、昼休憩中です。'
}else if(hour >= 15 && hour< 19) {
    msg= '午後の診察を受け付けています。';
} else {
    msg= 'いまの時間、診察は受け付けていません。';
}

//結果表示
document.getElementById('message').
textContent = msg;



//#timeに対して「2021年11月9日火曜日14：36」
var now =new Date ();
var year =now.getFullYear();
var month=now.getMonth() + 1;
var date=now.getDate();
var day=now.getDay();
var hours=now.getHours();
var minutes=now.getMinutes();

var daylist = ['日','月','火','水','木','金','土'];

var timeMsg= `${year}年 ${month}月 ${date}日 ${daylist[day]}曜日 ${hours}時 ${minutes}分`


document.getElementById('time').
textContent =timeMsg;






