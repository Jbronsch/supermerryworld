//Strict mode.
"use strict";

var titleScreen = true;

//Play/pause button for music.
document.getElementById("audio").volume = 0.1;
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

var titleColors = ["red", "green", "blue", "purple", "white"];

for (var i = 0; i < titleColors.length; i++) {
	document.getElementById("gameTitle").style.color = titleColors[i];
}

