
	
	document.getElementById("BIG").onclick = doBIG;
	document.getElementById("MID").onclick = doMID;
	document.getElementById("SMALL").onclick = doSMALL;
	
	let ContentSize = document.getElementById("CONTENT");

	function doBIG(){
		ContentSize.style.backgroundColor = "blue";
	}
	
	function doMID(){
		ContentSize.style.backgroundColor = "yellow";
	}
	
	function doSMALL(){
		ContentSize.style.backgroundColor = "green";
	}
	


