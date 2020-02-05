
$(function(){
	
	$("#MYTB tr").filter(":odd").addClass("EEE");
	
	$("#MYTB tr").hover( 
		function(){
			$(this).addClass("AAA");
		},
		function(){
			$(this).removeClass("AAA");	
		}
	);
	
});

