window.onload = function(){

	for(var i=1; i<=4; i++){
		document.getElementById("TAB"+i).onmouseover=showBOX;
	}
	
	//第一個按鈕 網頁打開時一開始就先套用 NOWTAB 樣式
	document.getElementById("TAB1").className="NOWTAB";
	
	function showBOX(){
		
		for(var i=1; i<=4; i++){
			//先把 4 個 BOX 關掉
			document.getElementById("BOX"+i).style.display="none";
			//先把 4 個按鈕的樣式清除掉 
			document.getElementById("TAB"+i).className=""; 
		}

		
		var N = this.id.substr(3); //抓目前滑鼠摸到那個按鈕 
		
		//再把目前被滑鼠摸到按鈕的那一個的 BOX 打開
		document.getElementById("BOX"+N).style.display="block";
		
		//再把目前被摸到的按鈕套用 NOWTAB 樣式
		document.getElementById("TAB"+N).className="NOWTAB";

	}
}




