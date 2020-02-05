window.onload=function(){
	
	document.getElementById("box1").onmouseover = changeTXT;
	document.getElementById("box2").onmouseover = changeTXT;
	document.getElementById("box3").onmouseover = changeTXT;
	document.getElementById("box4").onmouseover = changeTXT;
	
	document.getElementById("box1").onmouseout = restoreTXT;
	document.getElementById("box2").onmouseout = restoreTXT;
	document.getElementById("box3").onmouseout = restoreTXT;
	document.getElementById("box4").onmouseout = restoreTXT;
	
	var MSG_DIV = document.getElementById("box-msg");
	
	function changeTXT(){
		if(this.id=="box1"){
			MSG_DIV.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
		}
		if(this.id=="box2"){
			MSG_DIV.innerHTML = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
		}
		if(this.id=="box3"){
			MSG_DIV.innerHTML = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
		}
		if(this.id=="box4"){
			MSG_DIV.innerHTML = "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
		}
	}
	
	function restoreTXT(){
		MSG_DIV.innerHTML = "飛肯設計學苑網頁設計課程";
	}
}

