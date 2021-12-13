'use strict';

function whatTime(){
    const year=new Date ().getFullYear();
    const month=new Date ().getMonth() + 1;
    const date =new Date ().getDate();
    const day=new Date().getDay();
    //時間の取得・ファンクション名のtwoをつけて０を表示する部分を指示する
    const hours =twoDigit(new Date ().getHours());
    const minutes=twoDigit(new Date ().getMinutes());
    const seconds=twoDigit(new Date ().getSeconds());

   const nowTime = `${year}年 ${month}月${date}日${hours}:${minutes}:${seconds}`;

   return nowTime;
}

function twoDigit(num){
    if(num <= 9){
        return '0'+num;
    }else {
        return num;
    };
}

//入室ボタンをクリックしたら、#enter-timeに現在時刻を表示する2021年11月18日 15:00:00)

$('#enter').on('click',function(event){
    const now = new Date();
    $('#enter-time').text(whatTime());
});  

    $('#exit-time').on('click',function(event){
        const now = new Date();
        $('#exit-time').text(whatTime());
});
