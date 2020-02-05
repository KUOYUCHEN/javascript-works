
$(function(){
	
	var BROTHER = 0; //記錄一開始是第一個兄弟 0
	var POSITION = 0; //要用來計算座標用的
	
	$("#LEFT").click(function(){ 
		if(BROTHER<20){
			BROTHER+=1;
			POSITION = BROTHER*256*-1;
			$("#PIC ul").stop(true,false).animate({left:POSITION},2000,"easeOutElastic");
		}	
	});
	
	$("#RIGHT").click(function(){ 
		if(BROTHER>0){
			BROTHER-=1;
			POSITION = BROTHER*256*-1;
			$("#PIC ul").stop(true,false).animate({left:POSITION},2000,"easeOutElastic");
		}
	});
 	
});

