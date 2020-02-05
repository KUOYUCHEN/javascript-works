
let boxs = document.getElementsByClassName("BOXS")

for (let i = 1; i <= boxs.length; i++) {

	document.getElementById("TAB" + i).onmouseover = showBox;
	
}


function showBox() {

	let touchId = this.id.substr(3);

	for (let k = 1; k <=4; k++) {
		document.getElementById("BOX"+ k).style.display = "none";

	}
	
	document.getElementById("BOX" + touchId).style.display = "block";
	
}




