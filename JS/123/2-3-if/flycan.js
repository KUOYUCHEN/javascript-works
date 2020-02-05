window.onload=function(){
	
	document.getElementById("SS1").onclick=showPIC;
	document.getElementById("SS2").onclick=showPIC;
	document.getElementById("SS3").onclick=showPIC;
	document.getElementById("SS4").onclick=showPIC;
	document.getElementById("SS5").onclick=showPIC;
	document.getElementById("SS6").onclick=showPIC;
	
	var bigPIC=document.getElementById("BIG");
	
	function showPIC(){
		//alert( this.id ); //可以測試目前滑鼠是按到那一張圖片的名字
		if(this.id=="SS1"){
			bigPIC.src = "images/001.jpg";
		}
		if(this.id=="SS2"){
			bigPIC.src = "images/002.jpg";
		}
		if(this.id=="SS3"){
			bigPIC.src = "images/003.jpg";
		}
		if(this.id=="SS4"){
			bigPIC.src = "images/004.jpg";
		}
		if(this.id=="SS5"){
			bigPIC.src = "images/005.jpg";
		}
		if(this.id=="SS6"){
			bigPIC.src = "images/006.jpg";
		}
	}
}

