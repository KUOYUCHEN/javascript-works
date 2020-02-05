
let $DIV0 = $("#AAA").position().top;
let $DIV1 = $("#BBB").position().top; 
let $DIV2 = $("#CCC").position().top;
let $DIV3 = $("#DDD").position().top;


$("#B00").click(function (e) { 
	$("html, body").stop(true, false).animate({ scrollTop:$DIV0},1000)
	return false;
});

$("#B01").click(function (e) {
	$("html body").stop(true, false).animate({ scrollTop: $DIV1 }, 1000)
	return false;
});

$("#B02").click(function (e) {
	$("html body").stop(true, false).animate({ scrollTop: $DIV2}, 1000)
	return false;
});

$("#B03").click(function (e) {
	$("html body").stop(true, false).animate({ scrollTop: $DIV3 }, 1000)
	return false;
});