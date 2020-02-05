
$(window).scroll(function () { 
	let getPosition = $(window).scrollTop();

	if(getPosition > 800){
	$("#ICON").stop(true, false).animate({ top: getPosition+200},800);
	}else{
	$("#ICON").stop(true, false).animate({ top: "-1000px" }, 800);

	}
});