'use strict';

{
	$('.tab').on('click', function(event){
        //タブの色変更・ハイライト
        //最初にアクティブを削除し、クリックした部分へアクティブを加える方法
        $('.tab').removeClass('active');
       $(event.currentTarget).addClass('active');

       //中身の変更
       //その１・クリックした要素のdata-pairの値を取得
       const pair = $(event.currentTarget).data('pair');
        
       //その２・その１で取得した値と同じID名のタグから.hideを削除
       //それ以外の.tabboxには.hideを追加
       $('.tabbox').addClass('hide');
       //同じID名の取得
       $('#' + pair).removeClass('hide');
       
    });
}