'use strict';

//ページトップボタンの表示
window.onscroll = function(evt) {
  //スクロール値の取得
  const position = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(position);

  /*
  positionの値が300以上の時は
    #page-topにクラス名「open」を追加
  それ以外の時は
    #page-topにクラス名「open」を削除
  */

  if (position >= 300) {
    document.getElementById('page-top').classList.add('open');
  } else {
    document.getElementById('page-top').classList.remove('open');
  }

};

//ハンバーガーボタン
document.getElementById('menu-btn').onclick = function(evt) {
  evt.preventDefault();
  document.getElementById('gnavi').classList.toggle('open');
  evt.currentTarget.classList.toggle('close');
};

//課題01
const form01 = document.getElementById('what-day');
form01.onsubmit = function(evt) {
  evt.preventDefault();

  const yyyy = parseFloat(form01.year.value); //西暦取得
  const mm = parseFloat(form01.month.value); //月取得
  const dd = parseFloat(form01.date.value); //日取得

  //曜日の取得
  const day = new Date(yyyy, mm-1, dd).getDay();
  const dayList = ['日', '月',　'火', '水', '木', '金', '土'];

  //結果表示
  document.getElementById('A-01').innerHTML = `${yyyy}年${mm}月${dd}日`;
  document.getElementById('A-02').innerHTML = `${dayList[day]}曜日`;
};

//課題02
const formBMI = document.getElementById('what-bmi');
formBMI.onsubmit = function(evt) {
  evt.preventDefault();

  const Ncm = parseFloat(formBMI.cm.value); //身長cm取得
  const Nm = Ncm / 100; //cm → m
  const Nkg = parseFloat(formBMI.kg.value); //体重取得

  //BMI計算
  const bmi = Math.round((Nkg / (Nm * Nm))*10)/10;

  //25以上 肥満気味・18.5～24.9 標準・18.5未満 痩せすぎ
  let bmiMsg = '';
  if (bmi >= 25) {
    bmiMsg = '肥満気味';
  } else if (bmi >= 18.5) {
    bmiMsg = '標準';
  } else {
    bmiMsg = '痩せすぎ';
  }

  //結果表示
  document.getElementById('A-03').innerHTML = bmi;
  document.getElementById('A-04').innerHTML = bmiMsg;
};

//課題03
const slideImg = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
];

//最初の2秒用
slideImg.forEach(function (data, index) {
  const idName = 'slide-img' + (index+1);
  document.getElementById(idName).innerHTML = `<img src="images/${data}" alt="">`;
});

// 2秒ごとに画像切り替え
function slider() {
  const first = slideImg.shift();
  slideImg.push(first);

  slideImg.forEach(function (data, index) {
    const idName = 'slide-img' + (index+1);
    document.getElementById(idName).innerHTML = `<img src="images/${data}" alt="">`;
  });
}

setInterval(slider, 2000);

