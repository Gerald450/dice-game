var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = 1 + Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = 1 + Math.floor(randomNumber2);

var randomDice = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 +".png"

document.getElementsByClassName("img1")[0].setAttribute("src", randomDice);
document.getElementsByClassName("img2")[0].setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins 😂";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins 🤪";
  } else {
    document.querySelector("h1").textContent = "Draw 😒";
  }
  


// if (randomNumber1 === 1) {
//   document
//     .getElementsByClassName("img1")[0]
//     .setAttribute("src", "./images/dice1.png");
// }
// if (randomNumber1 === 2) {
//   document
//     .getElementsByClassName("img1")[0]
//     .setAttribute("src", "./images/dice2.png");
// }
// if (randomNumber1 === 3) {
//   document
//     .getElementsByClassName("img1")[0]
//     .setAttribute("src", "./images/dice3.png");
// }
// if (randomNumber1 === 4) {
//   document
//     .getElementsByClassName("img1")[0]
//     .setAttribute("src", "./images/dice4.png");
// }
// if (randomNumber1 === 5) {
//   document
//     .getElementsByClassName("img1")[0]
//     .setAttribute("src", "./images/dice5.png");
// }
// if (randomNumber1 === 6) {
//   document
//     .getElementsByClassName("img1")[0]
//     .setAttribute("src", "./images/dice6.png");
// }

// if (randomNumber2 === 1) {
//   document
//     .getElementsByClassName("img2")[0]
//     .setAttribute("src", "./images/dice1.png");
// }
// if (randomNumber2 === 2) {
//   document
//     .getElementsByClassName("img2")[0]
//     .setAttribute("src", "./images/dice2.png");
// }
// if (randomNumber2 === 3) {
//   document
//     .getElementsByClassName("img2")[0]
//     .setAttribute("src", "./images/dice3.png");
// }
// if (randomNumber2 === 4) {
//   document
//     .getElementsByClassName("img2")[0]
//     .setAttribute("src", "./images/dice4.png");
// }
// if (randomNumber2 === 5) {
//   document
//     .getElementsByClassName("img2")[0]
//     .setAttribute("src", "./images/dice5.png");
// }
// if (randomNumber2 === 6) {
//   document
//     .getElementsByClassName("img2")[0]
//     .setAttribute("src", "./images/dice6.png");
// }

