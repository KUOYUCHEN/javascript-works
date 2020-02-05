$(".small img").click(function (params) {

	var N = $(this).index();
	
	$(".banner img").stop(true, true).fadeOut(800).eq(N).fadeIn(800);
})