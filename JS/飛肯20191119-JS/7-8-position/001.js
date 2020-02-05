let now = 0


$("#HEADER li").mouseover(function () { 
	
	now = $(this).index()

	console.log(now);
	

	let nowPos = $(this).position().left

	let nowPos1 = $(this).position().top

	console.log(`left === ${nowPos}`);
	console.log(`top === ${nowPos1}`);
	console.log(`--------------------------`);
	

	


	$("#BB").stop(true, false).animate({ left: nowPos}, 800, "easeOutElastic", function(){

		$("#HEADER li").eq(now).find("a").css({color:"red"})
	});

	$("#HEADER li").find("a").css({color: "gray"})

	

});