let pic = 1;

let boxID = document.getElementById("BOX");
let picID = document.getElementById("PIC");
let titleID = document.getElementById("TITLE");

boxID.onmouseover = showContent;
boxID.onmouseout = hideContent;
picID.onclick = goNext;


function showContent() {
	titleID.style.display = "block";
	titleID.innerHTML = pic;
}

function hideContent() {
	titleID.style.display="none";
}

function goNext() {
	
	if(pic < 8){
		pic++;
	}else{
		pic = 1;
	}

	
	titleID.innerHTML = pic;
	picID.src = "images/FLY_"+pic+".jpg";
}


