'use strict';


const loginIcons = [
    'taro.png',
    '',
    'qui.png'
];

let imgTag = '';

//変数の中にファンクション
const getIcon = function(file){


    if (file !== '') {
        return 'images/' + file;
    } else {
       return 'images/noicon.png';
    }
};

let i = 0;
while (i < loginIcons.length) {
    let source=getIcon(loginIcons[i]);
    //const file =loginIcons[i];

    // let source ='';

    // if (file !== '') {
    //     source = 'images/' + file;
    // } else {
    //     source = 'images/noicon.png';
    // }

    imgTag += `<img src="${source}" alt="" widh="50"
    height="50">`;
    document.getElementById('users').innerHTML = imgTag;
    i++;
}