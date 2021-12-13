'use strict';

//ハンバーガーアイコン

const clickBtn = document.getElementById('menu-btn');

clickBtn.onclick = function(e){
    e.preventDefault();
    document.getElementById('gnavi').classList.toggle('open');
    e.currentTarget.classList.toggle('close');
};

//曜日取得

const whatDay = document.getElementById('what-day');

whatDay.onsubmit = function(e){
    e.preventDefault();
    const year = parseFloat(whatDay.year.value);
    const month = parseFloat(whatDay.month.value);
    const date = parseFloat(whatDay.date.value);

    //年月日から日付を取得する
    const day = new Date(year,month - 1,date).getDay();

    const dayList = ['日','月','火','水','木','金','土'];

    //結果表示
    const timeMsg = `${year}年${month}月${date}日`;
    const dayMsg = `${dayList[day]}曜日`;

    document.getElementById('A02-date').textContent = timeMsg;
    document.getElementById('A02-day').textContent = dayMsg;
};

//BMI測定
    const resultMsg = document.getElementById('what-bmi');
    const bmiText = document.getElementById('A03-result');

    resultMsg.onsubmit = function(e){
        e.preventDefault();
        //体重の取得
        const weight = parseFloat(resultMsg.kg.value);
        //身長の取得
        const height = parseFloat(resultMsg.cm.value/100);
        //ＢＭＩ計算
        const result = (Math.round((weight/(height*height))*10)/10);

        document.getElementById('A03-bmi').innerHTML = result;

        if(!(result < 30)){
            bmiText.textContent = '肥満';
        }
        else if(result >= 24.9){
            bmiText.textContent = '肥満気味';
        }
        else if(result >= 18.5){
                bmiText.textContent ='標準';
            }
        else if(result < 18.5){
            bmiText.textContent = '瘦せすぎ';
        }
    };

    //オリンピック
    let i = 1;
    let j = 1896;
    const inBox = document.getElementById('A04-result');
    while(i < 33){
        if(i==6||i==12||i==13){
            inBox.innerHTML +='';
        }
        else if(i==32){
            inBox.innerHTML +=`<p>第${i}回 ${j+1}年開催（${j}年延期）</p>`;
        }
        else{
            inBox.innerHTML +=`<p>第${i}回 ${j}年開催</p>`;
        }
        i++;
        j+=4;
    };