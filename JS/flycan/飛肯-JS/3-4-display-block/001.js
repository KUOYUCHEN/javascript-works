	// One Way
	let courseArr = document.querySelectorAll(".COURSE");
	
	// two way

	// let courseArr = document.getElementsByClassName("COURSE");

for (let i = 1; i <= courseArr.length; i++) {
		document.getElementById("COURSE_"+ i).onclick = showDIV;
	}
	
	function showDIV(){
		let course = this.id.substr(-1);

		document.getElementById("BOX_"+ course).style.display = "block";
	}


