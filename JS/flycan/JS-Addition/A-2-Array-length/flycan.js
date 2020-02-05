window.onload=function(){
	
	//var MSG=["Adobe Acrobat","Adobe Creative Suite","Adobe Photoshop","Adobe Dreamweaver"];
	
	var MSG =new Array();
	
	MSG[0]="Adobe Acrobat";
	MSG[1]="Adobe Creative Suite";
	MSG[2]="CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
	MSG[3]="Adobe Photoshop";
	
	
	for(var i=0; i<MSG.length; i++){
				
		document.getElementById("box"+i).onmouseover=showTXT;
		document.getElementById("box"+i).onmouseout=OUTOUT;		
	}
	
	function showTXT(){
		var N = this.id.substr(3);
		document.getElementById("box-msg").innerHTML = MSG[N];
	}
	
	function oldTXT(){
		document.getElementById("box-msg").innerHTML = "飛肯設計學苑課程";
	}
}

