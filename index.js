// First dice
var randomNumber1 =Math.floor(Math.random() * 6) + 1;

var randomImg = "dice" + randomNumber1 + ".png";

var randomSource = "images/" + randomImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource);

//second dice
var randomNumber2 =Math.floor(Math.random() * 6) + 1;

var randomImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

//Winner declaration
if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a Draw";
}
