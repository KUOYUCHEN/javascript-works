document.getElementById("box1").onmouseover= changeTxT;
document.getElementById("box2").onmouseover = changeTxT;
document.getElementById("box3").onmouseover = changeTxT;
document.getElementById("box4").onmouseover = changeTxT;

document.getElementById("box1").onmouseout = restoreTxT;
document.getElementById("box2").onmouseout = restoreTxT;
document.getElementById("box3").onmouseout = restoreTxT;
document.getElementById("box4").onmouseout = restoreTxT;


var BOX = document.getElementById("box-msg");

function changeTxT() {
	if (this.id == "box1") {
		BOX.innerHTML="<h1>Product_1</h1>"
	}
	else if (this.id == "box2") {
		BOX.innerHTML = "Product_2"
	}
	else if (this.id == "box3") {
		BOX.innerHTML = "Product_3"
	}
	else if (this.id == "box4") {
		BOX.innerHTML = "Product_4"
	}
}


function restoreTxT() {
	BOX.innerHTML ="飛肯設計學苑網頁設計課程"
}