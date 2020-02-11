var h = window.innerHeight;
var w = window.innerWidth;

function acceptCookies() {
    cookies.classList.add("accepted");
    cookiesSpaceholder.style.height = 0;
    setCookie("cookies", "accepted", 7)
}

function clearCookies() {
    alert("Izbrisano.");
}

function setCookie(cookieName, cookieValue, expiryDays) {
    var date = new Date();
    date.setTime(date.getTime() + (expiryDays*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var cookiesAccepted = getCookie('cookies');
var cookies = document.getElementById('cookies');
var cookies_h = cookies.offsetHeight;
var cookiesSpaceholder = document.getElementById('cookies-spaceholder');
var cookiesNoticeShown = true;

var header = document.getElementById('header');
var header_h = 0;

var video = document.querySelector('.video');
var video_w = video.offsetWidth;
var iframe = document.getElementById('video');
var iframe_h = video_w * 0.5625;
var iframe_w = video_w;

// console.log('hello world');
// console.log('screen height = ' + h, 'screen width = ' + w);

if (video_w > 895) {
    iframe_h = 504;
    iframe_w = 896;
}

if (cookiesAccepted === 'accepted') {
    cookies.classList.add("accepted");
    cookiesSpaceholder.style.height = 0;
    cookiesNoticeShown = false;
} else {
    cookiesSpaceholder.style.height = cookies_h + 'px';
}

iframe.width = iframe_w;
iframe.height = iframe_h;

header_h = h * 0.95;
header.style.height = h + 'px';

window.addEventListener('resize', function() {
    h = window.innerHeight;
    w = window.innerWidth;
    video_w = video.offsetWidth;

    if (cookiesNoticeShown) {
        cookies_h = cookies.offsetHeight;
    }
    
    if (video_w > 895) {
        iframe_h = 504;
        iframe_w = 896;
    } else {
        iframe_h = video_w * 0.5625;
        iframe_w = video_w;
    }

    iframe.width = iframe_w;
    iframe.height = iframe_h;
    header.style.height = h + 'px';
})