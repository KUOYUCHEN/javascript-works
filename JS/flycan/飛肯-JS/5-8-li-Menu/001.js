	// for (let i = 1; i < 6; i++) {
		
	// 	$(`#MENU${i}`).hover(
	// 		function () {
	// 			$(`#SUB${i}`).stop(true, true).slideDown(500);
	// 		},
	// 		function () {
	// 			$(`#SUB${i}`).stop(true, true).slideUp(0);
	// 		});

		
	// }
	
	// let N = $(this).index();

	$(".MENU ul li").hover(
		function () {
			let N = $(this).index();
			console.log(N);
			
			$(".MENU ul li ul").eq(N).stop(true, true).slideDown(500);
		},
		function () {
			let N = $(this).index();
			$(".MENU ul li ul").eq(N).stop(true, true).slideUp(0);
		});

