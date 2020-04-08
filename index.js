// Array of all images
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
"images/dice4.png", "images/dice5.png", "images/dice6.png"];

// get a numeric count of images
var allImages = images.length;

// generates a random number
// attached to images
var player1 = Math.floor(Math.random() * allImages);
var player2 = Math.floor(Math.random() * allImages);

// Display the winner
if (player1 > player2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (player1 < player2){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// attach generated number to an image
var player1image = images[player1];
var player2image = images[player2];

// change the images
document.querySelector(".img1").setAttribute("src", player1image);
document.querySelector(".img2").setAttribute("src", player2image);
