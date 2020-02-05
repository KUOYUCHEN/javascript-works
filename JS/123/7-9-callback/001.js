
$(function(){
	
	var WHO=0; //記錄一開始是第一個兄弟 0
	
	$("#HEADER li").eq(WHO).find("a").css({color:"#FFF"}); //預設：讓第一個超連結變白色
	
	$("#HEADER li").mouseover(function(){
		
			WHO = $(this).index(); //抓目前摸到的物件的"兄弟數字"
		
			var NOWPOS =  $(this).position().left; //抓目前摸到的 li 物件的座標
			
			$("#BB").stop(true, false).animate({left:NOWPOS},900,"easeOutElastic", AFTER);
			
			$("#HEADER li").find("a").css({color:"#333"}); //全部的超連結變黑色
						
	});
	
	function AFTER(){
		$("#HEADER li").eq(WHO).find("a").css({color:"#FFF"});
	}

});


