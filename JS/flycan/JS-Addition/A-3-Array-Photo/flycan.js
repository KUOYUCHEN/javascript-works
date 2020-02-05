let photosName= ["第一張照片","第二張照片","第三張照片","第四張照片","第五張照片","第六張照片","第七張照片","第八張照片"]

let startArray = 0;

let idBOX = document.getElementById("BOX")

let idTITLE = document.getElementById("TITLE")

idBOX.onmouseover = showTXT;
idBOX.onmouseout = hideTXT;
idBOX.onclick = changePhoto;

function showTXT(params) {
	idTITLE.style.display = "block";
	idTITLE.innerHTML = photosName[startArray];

}

function hideTXT(params) {
	
	idTITLE.style.display = "none";
}

function changePhoto(params) {

	if (startArray<photosName.length-1){
		startArray++
	}else{
		startArray = 0;
	}

	idTITLE.innerHTML = photosName[startArray];
	document.getElementById("PIC").src = `images/dog_${startArray}.jpg`;
	
}