

function randomImgaegenerator() {
    return Math.floor(Math.random() * 6) + 1;
}
var randomNumber1 = randomImgaegenerator();
var randomNumber2 = randomImgaegenerator();
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
    document.querySelector("h1").textContent = "It's a Draw!";
}