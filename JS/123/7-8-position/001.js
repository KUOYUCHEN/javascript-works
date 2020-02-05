
$(function(){
	
	$("#HEADER li").eq(0).find("a").css({color:"#EEE"});//一開始先把第一個超連結變白色
	
	$("#HEADER li").mouseover(function(){
		
			var NOWPOS =  $(this).position().left; //抓目前摸到的物件的座標
			
			$("#BB").stop(true, false).animate({left:NOWPOS},800,"easeOutElastic");
			
			$("#HEADER li").find("a").css({color:"#333"}); //全部的超連結變黑色
			
			$(this).find("a").css({color:"#EEE"}); //目前摸到的這一個超連結變白色
			
	});

});


