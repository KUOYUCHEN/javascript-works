$("#BOAT").css({left:"-256px"})


$("#RIGHT").click(function (params) {
	$("#BOAT").stop(true, true).animate({ left: "+=256" }, 500, "easeOutElastic")
})

$("#LEFT").click(function (params) {
	$("#BOAT").stop(true, false).animate({ left: "-=256" }, 500, "easeOutElastic")
})