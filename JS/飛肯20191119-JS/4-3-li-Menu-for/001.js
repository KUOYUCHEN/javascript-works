window.onload=function(){
	
	for(var i=1; i<=5; i++){
		
		document.getElementById("MENU"+i).onmouseover = showSUB;
		
		document.getElementById("MENU"+i).onmouseout = hideSUB;
	
	}
	
	function showSUB(){
		var nowID = this.id.substr(4);
		document.getElementById("SUB"+nowID).style.display = "block";		
	}
	
	function hideSUB(){
		var nowID = this.id.substr(4);
		document.getElementById("SUB"+nowID).style.display = "none";
		
	}
}



