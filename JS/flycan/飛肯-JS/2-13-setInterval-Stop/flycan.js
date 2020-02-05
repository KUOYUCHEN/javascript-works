var imgPathNumber = 1;

let timer = 0; 

var fileImages = document.getElementById("PIC");

var toPlay = document.getElementById("PLAY");

var toStop = document.getElementById("STOP");


function rolling () {
	if (imgPathNumber<17) {
		imgPathNumber ++;
	}else{
		imgPathNumber = 1;
	}

	fileImages.src = `images/pic${imgPathNumber}.jpg`;
}

timer = setInterval(rolling, 200);


toPlay.onclick = function () {
	TT = setInterval(rolling, 200);
}

toStop.onclick = function () {
	clearInterval(timer)
}
