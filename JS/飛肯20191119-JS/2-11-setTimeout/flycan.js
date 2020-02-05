window.onload=function(){
	
	var N = 1;
	
	function gogoPIC(){
		
		if( N < 12 ){
			N += 1;
		}else{
			N = 1;	
		}
		
		document.getElementById("POSTER").src="images/poster" + N + ".jpg";
	}
	
	setTimeout(gogoPIC,3000); //設定計時器, 先暫停 3 秒，然後只做一次
	
}



