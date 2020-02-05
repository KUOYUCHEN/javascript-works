

var Dog = document.getElementById("myDogSmile");

  
Dog.onmouseover = picOne;
Dog.onmouseout = picTwo;
Dog.onclick = picThree;


function picOne() {
    this.src = '002.jpg';
}
    
function picTwo() {
    this.src = '003.jpg';
}
    
function picThree() {
    this.src = '004.jpg';
}
