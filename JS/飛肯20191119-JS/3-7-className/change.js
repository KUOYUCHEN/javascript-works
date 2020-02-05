	let contentList = document.getElementById("CONTENT");

	let contentA = document.getElementById("A");
	let contentB = document.getElementById("B");
	let contentC = document.getElementById("C");

	
	contentA.onclick = getA;
	contentB.onclick = getB;
	contentC.onclick = getC;
	
	function getA(){
		contentList.className = "";   
		contentList.className = "AAA"; 
	}
	
	function getB(){
		contentList.className = "";
		contentList.className = "BBB";
	}
	
	function getC(){
		contentList.className = "";
		contentList.className = "CCC";
	}


