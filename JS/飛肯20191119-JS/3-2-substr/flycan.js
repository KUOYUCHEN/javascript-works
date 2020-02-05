
	
	document.getElementById("COLOR1").onclick = changeCUP;
	document.getElementById("COLOR2").onclick = changeCUP;
	document.getElementById("COLOR3").onclick = changeCUP;
	document.getElementById("COLOR4").onclick = changeCUP;
	document.getElementById("COLOR5").onclick = changeCUP;
	
	function changeCUP(e){
		
		var N = this.id.substr(4);
			
		
		document.getElementById("CUP").src = "cup" + N + ".jpg";
		
		e.preventDefault();
	}


