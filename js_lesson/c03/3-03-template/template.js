'use strict';

//変数準備
var loginName = '山田花子';
var point = 162;
//var message = 'こんにちは、' +loginName +'さん\n現在の獲得ポイント: '+point + 'pt';

//テンプレート文字列での表示

var message = `こんにちは、${loginName}さん
現在の獲得ポイント: ${point} pt`;

alert(message);