
$("#HEADER li").mouseover(function () { 
	let nowPos = $(this).position().left
	$("#BB").stop(true, false).animate({ left: nowPos}, 800, "easeOutElastic");
	$(this).find("a").css({color:"red"})

});