window.onload=function(){
	
	var DOG = document.getElementById("myDOG");
	
	DOG.onmouseover = changePIC3;
	DOG.onmouseout = changePIC1;
	
	function changePIC1(){
		this.src="001.jpg";
	}
	
	function changePIC3(){
		this.src="003.jpg";
	}
	
}

