'use strict';

//DOM操作とイベントの設定

document.getElementById('toggle').onclick=function(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle('on');

    //toggleを使わない場合
    //クラス名があるか調べる
//     const check = event.currentTarget.classList.
//     contains('on')

//削除・追加
// if (check){
//     event.currentTarget.classList.remove('on');}
//     else {
//         event.currentTarget.classList.add('on');
//     }
};

//メニューをクリックするとulが表示される
document.getElementById('button').onclick=function(e) {
    e.preventDefault();
    document.getElementById('gnav-list').classList.toggle('open');
}