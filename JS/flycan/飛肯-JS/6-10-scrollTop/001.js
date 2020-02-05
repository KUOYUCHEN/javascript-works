let N = $(document).height();
alert(N)
$("#BANNER").click(function (e) { 
	$("body, html").animate({ scrollTop: N }, 20000 , "easeOutElastic")
});

$("#BANNER").click(function (e) {
	$("body, html").animate({ scrollTop: "0px" }, 20000, "easeOutElastic")
});