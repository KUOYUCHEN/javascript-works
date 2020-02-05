
$(function(){
	
	$("#RIGHT").click(function(){
		$("#BOAT").stop(true,false).animate({ left: "+=200" },500);
	});
	
	$("#LEFT").click(function(){
		$("#BOAT").stop(true,false).animate({ left: "-=200" },500);
	});

});

