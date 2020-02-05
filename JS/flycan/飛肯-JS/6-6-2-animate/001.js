
$(function(){
	
	var $BOAT = $("#BOAT"); //宣告變數，產生記憶體快取，提高程式效能
	
	$("#RIGHT").click(function(){
		if( $BOAT.position().left<1400 ){
			$("#BOAT").stop(true,false).animate({ left: "+=200" },500);
		}
	});
	
	$("#LEFT").click(function(){
		if( $BOAT.position().left>200 ){
			$("#BOAT").stop(true,false).animate({ left: "-=200" },500);
		}
	});

});

