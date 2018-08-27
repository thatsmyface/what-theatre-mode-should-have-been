// ==UserScript==
// @name     Twitch Fullscreen Auto
// @version  1
// @grant    none
// @include         https://*.twitch.tv/*
// @include         http://*.twitch.tv/*
// ==/UserScript==

function setupTheThing(){
  var elem = document.documentElement;
  var classname = document.getElementsByClassName("qa-theatre-mode-button");

  for (var i = 0; i < classname.length; i++) {
		classname[i].addEventListener('click', function () {
      if (!document.mozFullScreen){
        elem.mozRequestFullScreen();
      }else{
        document.mozCancelFullScreen();
      }
    });
  }
};

setupTheThing();
setInterval(setupTheThing, 1000);
