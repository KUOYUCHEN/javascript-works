$(".CONTENT").hover(function () {
		// over
		$("this").stop(true, false).animate({top:"-300"}, 1000, "easeOutBounce")
	}, function () {
		// out
		$(this).stop(true, false).animate({top:"0"}, 2000, "easeOutBounce")
	}
);

