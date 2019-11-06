var h = window.innerHeight;
var w = window.innerWidth;

// var docLang = document.documentElement.lang;
var header = document.getElementById('header');
var header_h = 0;
// var headerHero = document.querySelector('.header__hero');
// var headerGreen_h = headerGreen.offsetHeight;

var p = document.getElementsByTagName('p');
var p1_h = p[0].offsetHeight;

console.log('hello world');
console.log('screen height = ' + h, 'screen width = ' + w);

console.log(p[0], p1_h);

header_h = h - p1_h;
// headerHero.style.height = headerHero_h + 'px';
header.style.height = header_h + 'px';