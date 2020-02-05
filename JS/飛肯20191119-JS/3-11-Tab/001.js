
	document.getElementById("TAB1").onmouseover=showBOX;
	document.getElementById("TAB2").onmouseover=showBOX;
	document.getElementById("TAB3").onmouseover=showBOX;
	document.getElementById("TAB4").onmouseover=showBOX;

	document.getElementById("TAB1").className="NOWTAB";
	
	
	
	
	
	
	function showBOX(){
		
		document.getElementById("BOX1").style.display="none";
		document.getElementById("BOX2").style.display="none";
		document.getElementById("BOX3").style.display="none";
		document.getElementById("BOX4").style.display="none";
		
		var N = this.id.substr(3);
		document.getElementById("BOX"+N).style.display="block";
		
	
		document.getElementById("TAB1").className="";
		document.getElementById("TAB2").className="";
		document.getElementById("TAB3").className="";
		document.getElementById("TAB4").className="";
	
		document.getElementById("TAB"+N).className="NOWTAB";

	}




