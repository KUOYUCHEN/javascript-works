
$(function(){
	
	$("#MYTB").addClass("EEE").filter(":even");
	
	$("#MYTB tr").hover( 
		function(){
			$(this).addClass("AAA"); 
		},
		function(){
			$(this).removeClass("AAA");	

		}
	);
	
});

