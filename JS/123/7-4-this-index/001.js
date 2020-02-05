
$(function(){
	
	$(".small img").click( function(){
		
		//先讓全部的 .banner 中的圖片變透明消失
		$(".banner img").fadeOut(800); 
		
		//截取出 .small 中目前被滑鼠點到的圖片的兄弟「排行」數字
		var N = $(this).index(); 
		
		//在 .banner 中指定跟上面的 N 一樣的兄弟數字的那一張圖片出現
		$(".banner img").eq(N).fadeIn(800); 
	
	});
	
});

