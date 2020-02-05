$(function(){
	
	var BROTHER=0; //要用來記錄物件的"兄弟數字"
	var POSITION=0; //要用來計算座標
	var TIMER=0; //宣告一個變數，等一下要給計時器用
	
	//網頁一打開：先讓第一個 li 套用外部樣式變藍色
	$("#NUMBER li").eq(0).addClass("BLUE"); 


//==設定圖片輪播和計時器================================================

	function GOGO(){
				
		if(BROTHER<11){
			BROTHER+=1; 
			POSITION = BROTHER*600*-1; //計算座標
		}else{
			BROTHER=0;
			POSITION=0;
		}
		
		//圖片做動畫
		$("#BANNER ul").animate({top:POSITION},1500,"easeInOutBack"); 
		
		// li 套用外部樣式變藍色
		$("#NUMBER li").removeClass("BLUE").eq(BROTHER).addClass("BLUE"); 
		
	}
	
	TIMER = setInterval(GOGO,2000); //設定 TIMER 變數計時器
	

//==滑鼠摸到的時候就清除計時器===========================================
	
	$("#BANNER, #NUMBER").hover(function(){ 
		clearTimeout(TIMER); //清除 TT 計時器
	},function(){
		TIMER = setInterval(GOGO,2000); //重新啟動 TT 計時器
	});
	
	
//==滑鼠點選下面的數字就跳到指定的圖片====================================
	
	$("#NUMBER li").click( function(){
		
		BROTHER = $(this).index(); //抓目前摸到的物件的"兄弟數字"
		POSITION = BROTHER*600*-1;  //計算座標
		
		//圖片做動畫
		$("#BANNER ul").animate({top:POSITION},1500,"easeInOutBack"); 
		
		// li 套用外部樣式變藍色
		$("#NUMBER li").removeClass("BLUE").eq(BROTHER).addClass("BLUE");
	});
	
});


