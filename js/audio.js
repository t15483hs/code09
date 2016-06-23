console.log("start audio.js");

function play2(){
var html, body, audio;
html = document.children[0];
body = html.children[1];
audio = body.children[1];

audio.play();
}

function pause2(){
  var html, body, audio;
html = document.children[0];
body = html.children[1];
audio = body.children[1];

audio.pause();
}

function play(){
    var audio;
    audio = document.querySelectar("audio");
    
    audio.play();
}

function pause(){
    var audio;
    audio = document.querySelectar("audio");
    
    audio.pause();
}

function play(event){
  var player = document.querySelector("audio");
  console.log("play");
  player.play();
}

var playButton = document.querySelector("[data-role=play]");
playButton.addEventListener("click", play);

function pause(event){
  var pauser = document.querySelector("audio");
  console.log("pause");
  pauser.pause();
}

var pauseButton = document.querySelector("[data-role=pause]");
pauseButton.addEventListener("click", pause);

