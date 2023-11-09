var randomNumber1 =Math.floor((Math.random() * 6)+1);
var randomDiceImage = "dice"+randomNumber1+".png";
var randomImageSource = "images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomImageSource2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if (randomnumber1>ranodmnumber2) {
    
} else {
    
}