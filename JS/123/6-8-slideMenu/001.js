$("#SlideMenu").fadeTo(500, 0.2).fadeTo(500, 0.2).fadeTo(500, 0.2);


$("#SlideMenu").hover(function () {
		// over
	$(this).stop(true, false).fadeTo(0, 1).animate({top:"0px"}, 500, "easeOutBounce")
	}, function () {
		// out
		$(this).stop(true, false).animate({top:"-145px"}, 500, "easeOutElastic")
	}
);
