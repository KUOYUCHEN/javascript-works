$("#MENU li").hover(function () {
	$(this).stop(true,false).animate({top:0},300);
	$(this).prev().stop(true, false).animate({ top: 50 }, 300);		// over
	$(this).next().stop(true, false).animate({ top: 50 }, 300);		// over

	// over
		
	}, function () {
		$("#MENU li").stop(true,false).animate({top:100},300);		// over
		// out
	}
);