
// Generate random numbers
var randomPick1 = Math.floor(Math.random() * 6) + 1;
var randomPick2 = Math.floor(Math.random() * 6) + 1;

// images
var imageSource1 = "dice" + randomPick1 + ".png"
var image1 = "images/" + imageSource1;

var imageSource2 = "dice" + randomPick2 + ".png"
var image2 = "images/" + imageSource2;

//Update Dice1
var update1 = document.querySelectorAll("img")[0]

update1.setAttribute("src", image1)


//Update Dice2
var update2 = document.querySelectorAll("img")[1]

update2.setAttribute("src", image2)


//Update Text
if (randomPick1 > randomPick2) {
  document.querySelector("h1").textContent = "Player 1 Wins"
} 
else if (randomPick2 > randomPick1){
  document.querySelector("h1").textContent = "Player 2 Wins"
}
else {
  document.querySelector("h1").textContent = "Draw"
}