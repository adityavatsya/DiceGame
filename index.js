var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceNumber = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceNumber;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()* 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// if(randomNumber1 > randomNumber2){
//   alert("Player 1 is the winner.");
// }
// else if(randomNumber2 > randomNumber1){
//   alert("Player 2 is the winner.");
// }
// else{
//   alert("Match drawn.");
// }

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins .";
}
else if( randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins.";
}
else {
    document.querySelector("h1").innerHTML = "Match drawn.";
}
