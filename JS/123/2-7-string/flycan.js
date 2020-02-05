


let N = 1;

let pics = document.getElementById("FLOWER");

pics.src = `images/0000.jpg`;

pics.onclick = changePic;

function changePic() {
	
	if ( N < 8 ) {
		N ++;
		this.src = `images/photo${N}.jpg`;
	}else{
		this.src = "images/0000.jpg";
		N=1;
	}
}






