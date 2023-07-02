// Die 1
var die1 = [];
for (let i = 1; i < 7; i++) {
  die1.push("images/dice"+[i]+".png");
}

// Die 2
var die2 = [];
for (let i = 1; i < 7; i++) {
  die2.push("images/dice"+[i]+".png");
}

//Generate random numbers for die1
var number1 = Math.random();
var n1 = Math.floor(number1 * 6);

//Generate random number for die2
var number2 = Math.random();
var n2 = Math.floor(number2 * 6);

//setting the attribute randomly
document.querySelector(".img1").setAttribute("src", die1[n1]);

//setting the attribute randomly
document.querySelector(".img2").setAttribute("src", die1[n2]);

//Updating the header
if (n1 > n2) {
  document.querySelector("h1").textContent = "Player 1 wins!"; 
}else if (n2 > n1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}// Die 1
var die1 = [];
for (let i = 1; i < 7; i++) {
  die1.push("images/dice"+[i]+".png");
}

// Die 2
var die2 = [];
for (let i = 1; i < 7; i++) {
  die2.push("images/dice"+[i]+".png");
}

//Generate random numbers for die1
var number1 = Math.random();
var n1 = Math.floor(number1 * 6);

//Generate random number for die2
var number2 = Math.random();
var n2 = Math.floor(number2 * 6);

//setting the attribute randomly
document.querySelector(".img1").setAttribute("src", die1[n1]);

//setting the attribute randomly
document.querySelector(".img2").setAttribute("src", die1[n2]);

//Updating the header
if (n1 > n2) {
  document.querySelector("h1").textContent = "Player 1 wins!"; 
}else if (n2 > n1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}// Die 1
var die1 = [];
for (let i = 1; i < 7; i++) {
  die1.push("images/dice"+[i]+".png");
}

// Die 2
var die2 = [];
for (let i = 1; i < 7; i++) {
  die2.push("images/dice"+[i]+".png");
}

//Generate random numbers for die1
var number1 = Math.random();
var n1 = Math.floor(number1 * 6);

//Generate random number for die2
var number2 = Math.random();
var n2 = Math.floor(number2 * 6);

//setting the attribute randomly
document.querySelector(".img1").setAttribute("src", die1[n1]);

//setting the attribute randomly
document.querySelector(".img2").setAttribute("src", die1[n2]);

//Updating the header
if (n1 > n2) {
  document.querySelector("h1").textContent = "Player 1 wins!"; 
}else if (n2 > n1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
