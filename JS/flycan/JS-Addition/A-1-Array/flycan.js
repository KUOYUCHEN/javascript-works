let name = ["Acrobat", "Creative Suite", "Photoshop", "Dreamweaver"]

// name[0] = "Acrobat";
// name[1] = "Creative Suite";
// name[2] = "Photoshop";
// name[3] = "Dreamweaver";

for (let i = 0; i < name.length; i++) {
	document.getElementById("box"+i).onmouseover = showTXT;
	document.getElementById("box"+i).onmouseout = hideTXT;
}


function showTXT () { 
	let arrayNumber = this.id.substr(3)
	document.getElementById("box-msg").innerHTML = name[arrayNumber];
}

function hideTXT() {

	document.getElementById("box-msg").innerHTML = "飛肯設計學苑網頁設計課程";
	
}
