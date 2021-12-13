'use strict';

var whatDay = document.getElementById('what-day');

whatDay.onsubmit = function (e) {

    e.preventDefault();

    //年を取ってくる
    const year = whatDay.year.value

    //月を取ってくる
    const month = whatDay.month.value

    //日を取ってくる
    const date = whatDay.date.value

    //年月日から曜日を取得する

    const day = new Date(year,month -1,date).getDay();

    const daylist = ['日', '月', '火', '水', '木', '金', '土'];

    const timeMsg= `${year}年 ${month}月 ${date}日`;
    const dayMsg=   `${daylist[day]}曜日`;


    document.getElementById('A-01').textContent=timeMsg;
    document.getElementById('A-02').textContent=dayMsg;
} ;

//BMI測定

 var resultMsg = document.getElementById('what-bmi');
 var bmiText = document.getElementById('A-04');

resultMsg.onsubmit = function(e){
        e.preventDefault();
    // 身長の取得
    const height = resultMsg.cm.value/100;
    // 体重の取得
    const weight = resultMsg.kg.value
    //計算
    var result = (Math.round(weight / (height*height)*10)/10);
    
    document.getElementById('A-03').innerHTML=result;

    if (result >= 25){
        bmiText.textContent = '肥満気味';
    }else if(result < 18.5) {
        bmiText.textContent = '瘦せすぎ';
    }else{bmiText.textContent = '標準';}

 };

 //カルーセルスライドショー
 const itemBox = slide-img;
let img1 = '<img src="/images/img1.jpeg"></img>'
let img2 = '<img src="/images/img2.jpeg"></img>'
let img3 = '<img src="/images/img3.jpeg"></img>'
let img4 = '<img src="/images/img4.jpeg"></img>'
let img5 = '<img src="/images/img5.jpeg"></img>'

