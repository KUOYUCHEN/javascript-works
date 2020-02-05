
let boxs = document.getElementsByClassName("BOXS")

for (let i = 1; i <= boxs.length; i++) {

	document.getElementById("TAB" + i).onmouseover = showBox;
	
}


let NOW = 1;



function showBox() {

	let touchId = this.id.substr(3);

	document.getElementById("BOX"+NOW).style.display = "none";

	document.getElementById("BOX"+touchId).style.display="block";
	
	console.log(`Func${NOW}`);
	console.log(`Func${touchId}`);
	

	NOW = touchId;

	console.log(`最後${NOW}`);
	
}




