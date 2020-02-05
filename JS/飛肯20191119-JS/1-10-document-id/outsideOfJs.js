window.onload = function () {
    
    
    function picOne(a,b) {
        document.getElementById("myDogSmile").src = '002.jpg';
    }
    
    function picTwo() {
        document.getElementById("myDogSmile").src = '003.jpg';
    }
    
    function picThree() {
        document.getElementById("myDogSmile").src = '004.jpg';
    }

    document.getElementById("myDogSmile").onmouseover = picOne(1,2);
    document.getElementById("myDogSmile").onmouseout = picTwo;
    document.getElementById("myDogSmile").onclick = picThree;



}