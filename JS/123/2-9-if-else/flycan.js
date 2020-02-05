window.onload=function(){
	
	var N = 1; //用來做為照片的初始編號
	
	//把物件名稱宣告在變數之內，可提高程式的執行效能
	var FLOWER = document.getElementById("FLOWER"); 
	
	FLOWER.src="images/photo" + N + ".jpg";
	
	FLOWER.onclick = changePIC;
	
	function changePIC(){
		
		if( N < 8 ){
			N += 1;
		}else{
			N = 1;	
		}
		
		FLOWER.src="images/photo" + N + ".jpg";
		
	}
}

