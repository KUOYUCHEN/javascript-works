let WHO = 0

$("#HEADER li").eq(WHO).find("a").css({color:"#FFF"})

$("#HEADER li").mouseover(function () { 
	
	let nowPos = $(this).position().left;

	WHO = $(this).index()

	$("#BB").stop(true, false).animate({ left: nowPos}, 800,"easeOutElastic", function (params) {

		$("#HEADER li").eq(WHO).find("a").css({ color: "#FFF" })
	})


	$("#HEADER li").find("a").css({ color: "#333" })
});


