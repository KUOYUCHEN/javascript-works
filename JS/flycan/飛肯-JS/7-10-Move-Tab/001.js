
	
	var BROTHER = 0; //記錄一開始是第一個兄弟 0
	
	var POSITION = 0; //要用來計算座標用的
	
	//網頁一打開，先讓第一個 li 內的超連結變白色, 套用外部 CSS 的 .NOWTAB 樣式
	$("#tabMenu li").eq(BROTHER).find("a").addClass("NOWTAB"); 

	$("#tabMenu li").click(function(){
		
		BROTHER = $(this).index(); //抓目前摸到的物件的"兄弟數字"
		
		POSITION = BROTHER * 840 * -1; //計算座標
		
		//讓下面的內容做 animate() 動畫
		$("#ALL").stop(true,false).animate({ left: POSITION }, 1500, "easeInOutBack");
		
		//讓上面的 li 按鈕變換顏色
		$("#tabMenu li").find("a").removeClass("NOWTAB").eq(BROTHER).addClass("NOWTAB");
		
	});



