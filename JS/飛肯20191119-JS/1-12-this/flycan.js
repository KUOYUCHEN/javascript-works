window.onload=function(){
	
	document.getElementById("myDOG").onmouseover = changePIC3;
	document.getElementById("myDOG").onmouseout = changePIC1;
	
	function changePIC1(){
		this.src="001.jpg";
	}
	
	function changePIC3(){
		this.src="003.jpg";
	}
	
}

