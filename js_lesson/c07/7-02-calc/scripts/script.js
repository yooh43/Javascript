'use strict';

{
    // 日時を整形するファンクション
    const beautifulTime = function(time) {
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();
        const hour = time.getHours();
        const minute = twoDigit(time.getMinutes());
        const second = twoDigit(time.getSeconds());
        const timeString = `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;
        return timeString;
    }

    // 2桁にするファンクション
    const twoDigit = function(num) {
        if(num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    //入室・退室時間の保存用の配列準備
    let times = [];

    // 入室ボタン
    $('#enter').on('click', function(event) {
        event.preventDefault();
       // const now = new Date();

       //配列準備timesの中身を空っぽにする(※一番最初に書く)
       times = [];

        //データを入れる
       times.push(new Date());
        $('#enter-time').text(beautifulTime(times[0]));
        //前回の退室時間をリセット
        $('#exit-time').text('');
        //利用時間の消去
        $('#enter-exit').text('');
        //利用料金の消去
        $('#price').text('');
    });


 
    // 退室ボタン
    $('#exit').on('click', function(event) {
        event.preventDefault();
        //const now = new Date();

        
       //入室時間が記録されている時だけ
       if(times.length === 1){
        times.push(new Date());
        $('#exit-time').text(beautifulTime(times[1]));
        
        //利用時間の計算
    const enterToExit = times[1]-times[0];
    const minutes = Math.ceil(enterToExit /1000 /60);

        //利用料金（30分/100円））の計算
        const charge =Math.ceil( minutes/30)*100;

    //利用時間の表示
     $('#enter-exit').text('約'+ minutes +'分');

     //利用料金の表示
     $('#price').text(charge + '円');
       }
    });

    

}

