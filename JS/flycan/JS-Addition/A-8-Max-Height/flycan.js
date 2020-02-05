$(function(){
	
	var maxHEIGHT=0;
	
	$("#center .box").each(function(){
		
		//alert( $(this).children("h2").html() );
		
		if( $(this).height() > maxHEIGHT ){
			maxHEIGHT = $(this).height();
		}	
	});
	
	$("#center .box").css({ height : maxHEIGHT });
	
})

