for (let i = 1; i < 6; i++) {
	document.getElementById("COLOR"+i).onclick = changePic;
	console.log(i);
	
}

function changePic(e) {

		let str = this.id.substr(5);

		document.getElementById("CUP").src = "cup" + str + ".jpg"

		e.preventDefault();

}





