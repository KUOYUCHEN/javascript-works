
$(".BOX>li>a").click(function (e) { 
	$("body").append("<div class='black'><img src='' width='900'></div>");
	
	$("div.black").hide();

	let PIC = $(this).attr("href");

	$("div.black img").attr("src", PIC);

	$("div.black").fadeIn(800);

	$("div.black").click(function () { 

		$(this).fadeOut(800,function () { 
			$(this).remove()
		})

	})


	// 按圖片不換關
	$("div.black img").click(function (e) { 
		return false;
	 })

	e.preventDefault();
	
});

