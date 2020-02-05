window.onload=function(){
	
	document.getElementById("SS1").onclick=showPIC_1;
	document.getElementById("SS2").onclick=showPIC_2;
	document.getElementById("SS3").onclick=showPIC_3;
	document.getElementById("SS4").onclick=showPIC_4;
	document.getElementById("SS5").onclick=showPIC_5;
	document.getElementById("SS6").onclick=showPIC_6;
	
	var bigPIC=document.getElementById("BIG");
	
	function showPIC_1(){
		bigPIC.src = "images/001.jpg";
	}
	function showPIC_2(){
		bigPIC.src = "images/002.jpg";
	}
	function showPIC_3(){
		bigPIC.src = "images/003.jpg";
	}
	function showPIC_4(){
		bigPIC.src = "images/004.jpg";
	}
	function showPIC_5(){
		bigPIC.src = "images/005.jpg";
	}
	function showPIC_6(){
		bigPIC.src = "images/006.jpg";
	}
}

