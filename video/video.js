'use strict';

//変数準備
const movie = document.getElementById('movie');
const movieBtn = document.getElementById('btn');
const btnImg = document.getElementById('btn-img');

//ファンクション準備
function movieStart(video){
    return video.play();//再生の指示
}
function moviePause(video){
    video.pause();//一時停止の指示
}

//動画再生
movieBtn.onclick =function(e){
    e.preventDefault();
    movieStart(movie);
    e.currentTarget.classList.add('hidden');
    //src属性の書き換えで画像を一時停止に変更(imgタグにID名追加)
    btnImg.setAttribute('src','off.png');
}

//再生中の処理・再生中に一時停止ボタンが押されたら(再生中にクリックしたとき)一時停止する
movie.addEventListener('playing',function(e){
    movieBtn.onclick = function(evt){
        evt.preventDefault();
        moviePause(movie);
    //※再生中に一時停止が押された時、画像を再生ボタンの画像へ変更する
        btnImg.setAttribute('src','on.png');
    //常にボタンが表示されるようにする
        evt.currentTarget.classList.remove('hidden');
    }
});

//一時停止中の処理
movie.addEventListener('pause',function(e){
    movieBtn.onclick =function(e){
        e.preventDefault();
        movieStart(movie);
        e.currentTarget.classList.add('hidden');
        //src属性の書き換えで画像を一時停止に変更(imgタグにID名追加)
        btnImg.setAttribute('src','off.png');
    }
});

//再生が終わった時の処理
movie.addEventListener('ended',function(){
    btnImg.setAttribute('src','on.png');
    movieBtn.classList.remove('hidden');
});

//<audio>

//変数準備

const music = document.getElementById('bgm');
const musicBtn = document.getElementById('bgmBtn');

//ファンクション準備
function musicStart(music){
    return music.play();//再生の指示
};
function musicPause(music){
    music.pause();//一時停止の指示
};


//BGM再生をクリックしたら、audioタグが再生されるように設定
musicBtn.onclick =function(e){
    e.preventDefault();
    musicStart(music);
    //再生中はボタンのテキストを「BGM・再生」
    e.currentTarget.textContent='BGM・一時停止';
};


//再生中にクリックしたら、一時停止するように設定

music.addEventListener('playing',function(e){
    musicBtn.onclick = function(e){
        e.preventDefault();
        music.pause();
        //一時停止中はボタンのテキストを「BGM・再生」
        e.currentTarget.textContent='BGM・再生';
    };
});
    
    //一時停止したとき
    music.addEventListener('pause',function(e){
        musicBtn.onclick = function(e){
            music.play();
                //再生中はボタンのテキストを「BGM・再生」
            e.currentTarget.textContent='BGM・一時停止';
        };
    });




