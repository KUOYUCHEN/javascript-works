// jQ way
// $("#BOX a").click(function (e) { 
// 	let getImg = $(this).attr("href")
// 	$("#BIG_PIC").attr("src", getImg)
// 	e.preventDefault();
// 	// return false
// })



// js-substr way
// let getImg = document.getElementsByClassName("imgs00");

// let changeImg = document.getElementById("BIG_PIC");

// console.log(getImg.length);

// for (let i = 0; i < getImg.length; i++) {
// 	const element = getImg[i];

// 	element.onclick = function (e) {
// 		let now = this.id.substr(2);

		
// 		changeImg.src = `images/00${now}.jpg`

// 		e.preventDefault()
// 	}
	
// }


//js - atrribute way (去覆蓋 原本圖片)
let getImg = document.getElementsByClassName("imgs00");

// let changeclassName = document.getElementsByTagName("a")


for (let i = 0; i < getImg.length; i++) {

	const element = getImg[i];

	element.onclick = function (e) {

		let now = this.id.substr(2);

		document.getElementById("BIG_PIC").setAttribute("src",`images/00${now}.jpg`)

		e.preventDefault();


	// addEventListener way

	// 	element.addEventListener("click",  function (e) {

	// 		let now = this.id.substr(2);
	
	// 		document.getElementById("BIG_PIC").setAttribute("src",`images/00${now}.jpg`)
	
	// 		e.preventDefault();
	// 	});
	// }

}
	







	





