//Strict mode.
"use strict";

var gameState;

//Play/pause button for music.
document.getElementById("audio").volume = 0.5;
function playPauseButton() {		
	var playState = document.getElementById("audio");
	if (playState.paused) {
		playState.play();
		document.getElementById("soundbtn").innerHTML = "Sound Off";
		document.getElementById("soundbtn").style.background= "#337ab7";
	} else {
		playState.pause();
		document.getElementById("soundbtn").innerHTML = "Sound On";
		document.getElementById("soundbtn").style.background= "#993333";
	}
}
//load game on play
function playGame() {
	document.getElementById('gameWindow').style.backgroundImage = "url('img/xwing.jpg')";
	document.getElementById("audio").src = "music/none.wav";
	document.getElementById("se").src = "soundeffects/gamestart.wav";
	document.getElementById("se").play();
	document.getElementById("gameTitle").style.display= "none";
	gameState = true;
//start game

}

