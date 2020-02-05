let WHO = 0

// $("#HEADER li").eq(WHO).find("a").css({color:"#FFF"})

$("#HEADER li").mouseover(function () { 
	
	let nowPos = $(this).position().right;
	
	console.log(nowPos);
	

	WHO = $(this).index()

	console.log(WHO);
	

	$("#BB").stop(true, false).animate({ left: nowPos}, 800,"easeOutElastic", function (params) {

		$("#HEADER li").eq(WHO).find("a").css({ color: "#FFF" })
	})


	$("#HEADER li").find("a").css({ color: "#333" })
});

$("p").click(function(){
	let nowPos1 = $(this).position().left;
	console.log(nowPos1);
	
})
