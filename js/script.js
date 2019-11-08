var h = window.innerHeight;
var w = window.innerWidth;

// var docLang = document.documentElement.lang;
var header = document.getElementById('header');
var header_h = 0;
// var headerHero = document.querySelector('.header__hero');
// var headerGreen_h = headerGreen.offsetHeight;

var p = document.getElementsByTagName('p');
var p1_h = p[0].offsetHeight;

console.log(p[0], p1_h);

var video = document.querySelector('.video');
var video_w = video.offsetWidth;
var iframe = document.getElementById('video');
var iframe_h = video_w * 0.5625;
var iframe_w = video_w;

console.log('hello world');
console.log('screen height = ' + h, 'screen width = ' + w);
console.log(video);
console.log(video_w);
console.log(iframe);
console.log(iframe.height);

// <!-- width="560" (x 0.5625) height="315" -->

if (video_w > 895) {
    iframe_h = 504;
    iframe_w = 896;
}

iframe.width = iframe_w;
iframe.height = iframe_h;


// header_h = h - p1_h;
header_h = h * 0.95;
// headerHero.style.height = headerHero_h + 'px';
header.style.height = header_h + 'px';