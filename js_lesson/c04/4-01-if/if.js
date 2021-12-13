'use strict';

var repair = confirm('修理を申し込みますか？');

console.log(repair);

//if文
if (repair === true) {
    document.getElementById('message').textContent
    = '修理を受け付けました。';
} else {
    document.getElementById('message').textContent
    = '修理はキャンセルされました。';
}