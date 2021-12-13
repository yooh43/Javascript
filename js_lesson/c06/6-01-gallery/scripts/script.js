'use strict';

//#bigbgをクリックしたらコンソールに「クリックしたよ」と表示
	$('#bigimg').on('click',function
    (e){console.log('クリックしたよ');
});
//j-queryで書いた場合
 $('.thumb').on('click',function(event){
    //data-*属性から値の取得
     const newImg = $(event.currentTarget).data('image');
    
//     //属性の書き換え
     $('#bigimg').attr('src',newImg);
 });


//js(バニラ)で書いた場合

// const click = document.getElementsByClassName('thumb')

// //data-*属性から値の取得

// for (let i = 0; i < click.length; i++){
//     click[i].onclick = function(event){
//         //data-*属性から値の取得
//         const newImg = event.currentTarget.dataset.image;

//         //属性の書き換え
//         document.getElementById('bigimg').setAttribute('src', newImg);
//     };
// }