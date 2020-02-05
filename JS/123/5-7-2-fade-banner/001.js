
$(function(){
	
	$("#BTN1").click( function(){
		$("#BANNER1").fadeIn(800);
		$("#BANNER2,#BANNER3,#BANNER4,#BANNER5,#BANNER6").fadeOut(800);
	});
	
	$("#BTN2").click( function(){
		$("#BANNER2").fadeIn(800);
		$("#BANNER1,#BANNER3,#BANNER4,#BANNER5,#BANNER6").fadeOut(800);
	});
	
	$("#BTN3").click( function(){
		$("#BANNER3").fadeIn(800);
		$("#BANNER1,#BANNER2,#BANNER4,#BANNER5,#BANNER6").fadeOut(800);
	});
	
	$("#BTN4").click( function(){
		$("#BANNER4").fadeIn(800);
		$("#BANNER1,#BANNER2,#BANNER3,#BANNER5,#BANNER6").fadeOut(800);
	});
	
	$("#BTN5").click( function(){
		$("#BANNER5").fadeIn(800);
		$("#BANNER1,#BANNER2,#BANNER3,#BANNER4,#BANNER6").fadeOut(800);	
	});
	
	$("#BTN6").click( function(){
		$("#BANNER6").fadeIn(800);
		$("#BANNER1,#BANNER2,#BANNER3,#BANNER4,#BANNER5").fadeOut(800);	
	});
	
});

