

for (let i = 1; i <=5 ; i++) {
	document.getElementById("MENU" + i).onmouseover = showSub;
	document.getElementById("MENU" + i).onmouseout = hideSub;
}

function showSub(params) {
	let MenuId = this.id.substr(4);
	
	document.getElementById("SUB"+ MenuId).style.display = "block";
}



function hideSub(params) {
	let menuId = this.id.substr(4);


	document.getElementById("SUB" + menuId).style.display = "none";
}



