
document.getElementById("SS1").onclick = showPic;
document.getElementById("SS2").onclick = showPic;
document.getElementById("SS2").onclick = showPic;
document.getElementById("SS3").onclick = showPic;
document.getElementById("SS4").onclick = showPic;
document.getElementById("SS5").onclick = showPic;
document.getElementById("SS6").onclick = showPic;

var bigPic = document.getElementById("BIG");

function showPic(event) {
	if (this.id == "SS1") {
		bigPic.src = "images/ss1.jpg"
	}
	else if (this.id == "SS2") {
		bigPic.src = "images/ss2.jpg"
	}
	else if (this.id == "SS3") {
		bigPic.src = "images/ss3.jpg"
	}
	else if (this.id == "SS4") {
		bigPic.src = "images/ss4.jpg"
	} 
	else if (this.id == "SS5") {
		bigPic.src = "images/ss5.jpg"
	}
	else if (this.id == "SS6") {
		bigPic.src = "images/ss6.jpg"
	}
};



