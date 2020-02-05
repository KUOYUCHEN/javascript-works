window.onload=function(){
	
	var N = 1; //用來記住圖片在第幾張	
	var TT; //空變數，等一下要用來設定給計時器用。
	
	//==設定圖片輪播的動作=============================================
	
	function gogoPIC(){
		
		if( N < 17 ){
			N += 1;
		}else{
			N = 1;	
		}
		
		document.getElementById("PIC").src="images/pic" + N + ".jpg";
		
	}
	
	TT = setInterval(gogoPIC,100); //設定 TT 變數計時器
	
	//==滑鼠摸到時就清除計時器===========================================
	
	document.getElementById("BOX").onmouseover = doSTOP;
	document.getElementById("BOX").onmouseout = doSTART;
	
	function doSTOP(){
		clearInterval(TT); //清除 TT 計時器
	}
	
	function doSTART(){
		TT = setInterval(gogoPIC,100); //重新啟動 TT 計時器
	}
	
	//==滑鼠按按鈕時就更換到下一張圖片=====================================
	
	document.getElementById("LEFT").onclick = goLEFT;
	document.getElementById("RIGHT").onclick = goRIGHT;
	
	function goLEFT(){
		
		if( N < 17 ){
			N += 1;
		}else{
			N = 1;	
		}
		
		document.getElementById("PIC").src="images/pic" + N + ".jpg";
	}
	
	function goRIGHT(){
		
		if( N > 1 ){
			N -= 1;
		}else{
			N = 17;	
		}
		
		document.getElementById("PIC").src="images/pic" + N + ".jpg";
	}
}

