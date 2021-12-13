'use strict';

const entry = confirm('懇親会に参加しますか？');
let msg ='';

if (entry){
    msg ='出席登録しました。（費用：&yen;1000-）';
}else {
    msg='欠席登録しました。';
}

document.getElementById('message').innerHTML= msg;


