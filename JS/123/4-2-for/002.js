window.onload=function(){
	
	for(var i=1; i<=16; i++){
		
		document.getElementById("PIC"+ i).onclick=SHOWSHOW;
		
	}
	
	function SHOWSHOW(){
		
		alert(this.id);	
		
	}
}

