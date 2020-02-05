
	for (let i = 1; i < 5; i++) {
		let course = document.getElementById("COURSE_" + i)
		course.onmouseover = showDIV;
		course.onmouseout = hideDIV;
	}

	function hideDIV() {
		var N = this.id.substr(7)
		
		document.getElementById("BOX_"+ N).style.display = "none";
	}


	function showDIV(){
		
		var N = this.id.substr(7);
		
		document.getElementById("BOX_" + N).style.display  = "block";
		
	}


