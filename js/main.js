'use strict';

// 画像をまず配列に入れてまとめる
{
const images =[ 
'img/pic00.png',
'img/pic01.png',
'img/pic02.png',
'img/pic03.png',
'img/pic04.png',
'img/pic05.png',
'img/pic06.png',
'img/pic07.png',
];


let currentIndex = 0 ;
// デフォルトで1の画像が最初に来るようにする
const mainImage = document.getElementById('main');
 mainImage.src = images[currentIndex];

// 上のimagesの配列から上から順番に要素を取得してきて
// HTMLに画像を追加する.またもしcurrentIndexの値がindexの値と同じ時currentクラスつけて、それ以外だったらmainimageの画像をクリックした画像に差し替えて
 images.forEach((image,index) => {
 const img = document.createElement('img');
 img.src = image ;
  const li = document.createElement('li');
if(currentIndex === index){
li.classList.add('current');
}{
  li.addEventListener('click', () =>{
 mainImage.src = image ;
 const thumbnails =document.querySelectorAll('.thumbnails > li');
 thumbnails[currentIndex].classList.remove('current');
 currentIndex = index;
 thumbnails[currentIndex].classList.add('current');

  });}

 li.appendChild(img);
 document.querySelector('.thumbnails').appendChild(li);
 
 });


// addevnetlistner ,
// htmlの次へのボタンを取得する。そのボタンが押されたら配列の番号を１つ次に進める。一つ進んだやつを追加して
const next = document.getElementById('next');
next.addEventListener('click',() => {
  let target = currentIndex + 1;
  if(target === images.length){
    target = 0;
  }

  document.querySelectorAll('.thumbnails > li')[target].click();
});

const prev = document.getElementById('prev');
prev.addEventListener('click',() => {
  let target = currentIndex - 1;
  if(target < 0 ){
    target = images.length - 1 ;
  }
  document.querySelectorAll('.thumbnails > li')[target].click();
});


// プレイスライドショーの中身、next.clideshowを1000msおきに実行し続けて
  function playSlideshow(){
    setTimeout(() =>{
      next.click();
      playSlideshow();
    },1000);
    
  
  }
// htmlのプレイを取得してきて定数のプレイに入れてあげて
// そのhtmlのプレイがクリックされたらplayslideshowっていう関数を読んできて実行してあげて。
const play = document.getElementById('play');
play.addEventListener('click', () => {
  playSlideshow();
  
});



}






