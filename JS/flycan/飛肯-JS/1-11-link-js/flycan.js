window.onload=function(){
	
	function changePIC1(){
		document.getElementById("myDOG").src="001.jpg";
	}
	
	function changePIC3(){
		document.getElementById("myDOG").src="003.jpg";
	}
	
	document.getElementById("myDOG").onmouseover = changePIC3;
	document.getElementById("myDOG").onmouseout = changePIC1;
	
}

