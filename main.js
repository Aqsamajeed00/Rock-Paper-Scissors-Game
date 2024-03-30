"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//if else statement using rock paper scissors game!!
//logical operators and,or called logical operators
let player1 = "Rock";
let player2 = "Scissors";
if (player1 === player2) {
    console.log("its a tie!");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Pock")) {
    console.log("player1 win this match");
}
else {
    console.log("player 2 win this match sucessfully");
}
