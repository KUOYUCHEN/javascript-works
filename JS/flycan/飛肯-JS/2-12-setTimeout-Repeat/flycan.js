window.onload=function(){
	
	var N = 1;
	
	function gogoPIC(){
		
		document.getElementById("POSTER").src="images/poster" + N + ".jpg";
		
		if( N < 12 ){
			N += 1;
		}else{
			N = 1;	
		}
		
		setTimeout(gogoPIC,2000); //設定計時器
	}
	
	gogoPIC(); //呼叫啟動上面的 function(){} 函式
	
}

