
var imgPathNumber= 1;

var posterImg = document.getElementById("POSTER");

function changePics() {
	
	if (imgPathNumber < 12) {
		imgPathNumber++;
	}else{
		imgPathNumber = 1;
	}
	
	posterImg.src = "images/poster" + imgPathNumber + ".jpg";
}	

// posterImg.onclick = changePics;

setInterval(changePics, 2000)
