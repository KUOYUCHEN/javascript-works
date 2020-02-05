window.onload = function (){
	
	document.getElementById("COURSE_1").onmouseover = showDIV;
	document.getElementById("COURSE_2").onmouseover = showDIV;
	document.getElementById("COURSE_3").onmouseover = showDIV;
	document.getElementById("COURSE_4").onmouseover = showDIV;
	
	document.getElementById("COURSE_1").onmouseout = hideDIV;
	document.getElementById("COURSE_2").onmouseout = hideDIV;
	document.getElementById("COURSE_3").onmouseout = hideDIV;
	document.getElementById("COURSE_4").onmouseout = hideDIV;
	
	function showDIV(){
		var N = this.id.substr(7);
		document.getElementById("BOX_"+N).style.display = "block";
	}
	
	function hideDIV(){
		var N = this.id.substr(7);
		document.getElementById("BOX_"+N).style.display = "none";
	}
	
}
