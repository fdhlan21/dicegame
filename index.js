let randomNumber1 = Math.floor(Math.random() * 6)  + 1;
let diceRandom1 = "dice" + randomNumber1 + ".png";
let imagesRandom1 = "images/" + diceRandom1;
let playerDice1 = document.querySelectorAll("img")[0].setAttribute("src", imagesRandom1);


let randomNumber2 = Math.floor(Math.random() * 6)  + 1;
let diceRandom2 = "dice" + randomNumber2 + ".png";
let imagesRandom2 = "images/" + diceRandom2;
let playerDice2 = document.querySelectorAll("img")[1].setAttribute("src", imagesRandom2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN! 🚩"
} else if (randomNumber2 > randomNumber1) {
     document.querySelector("h1").innerHTML = "PLAYER 2 WIN! 🚩"
} else {
     document.querySelector("h1").innerHTML = "DRAW";
}