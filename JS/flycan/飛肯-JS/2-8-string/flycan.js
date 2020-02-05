window.onload=function(){
	
	var N = 1; //用來做為照片的初始編號
	
	document.getElementById("FLOWER").src="images/photo" + N + ".jpg";
	
	document.getElementById("FLOWER").onclick = changePIC;
	
	function changePIC(){
		
		N += 1;
		
		document.getElementById("FLOWER").src="images/photo" + N + ".jpg";
		
	}	
}

