
$(function(){
	
	$("#RIGHT").click(function(){
		$("#BOAT").stop(true,false).animate({ left: "+=200" },1500,"easeOutElastic");
	});
	
	$("#LEFT").click(function(){
		$("#BOAT").stop(true,false).animate({ left: "-=200" },1500,"easeOutElastic");
	});

});


