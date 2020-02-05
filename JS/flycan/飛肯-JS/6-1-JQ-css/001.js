
$(function(){
	
	
	let big  = 30 ;
	let min = 16
	let small =11

	$("#BIG").click(function(){
		$("#CONTENT").css({ fontSize: big});	
	});
	
	$("#MID").click(function(){
		$("#CONTENT").css({ fontSize: min});	
	});
	
	$("#SMALL").click(function(){
		$("#CONTENT").css({ fontSize: small});	
	});
		
});

