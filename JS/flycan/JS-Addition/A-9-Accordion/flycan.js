$(function(){
	
	$(".BOX li").eq(0).children("a").css({ background : "#F30" });
	
	$(".BOX li").click(function(){
		
		$(this).children("img").stop(true,false).animate({ width:1000 },800);
		
		$(this).siblings().children("img").stop(true,false).animate({ width:0 },800);
		
		$(this).siblings().children("a").css({ background : "#DDD" });
		
		$(this).children("a").css({ background : "#F30" });
		
		return false;
			
	});
})

