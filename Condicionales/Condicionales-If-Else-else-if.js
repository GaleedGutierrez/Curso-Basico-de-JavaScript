function game(me, bot, player1, player2, tie) {
    let winner = tie;

    if (me === rock && bot === paper) {
        winner = player1;
    } 
    else 
        if (me === paper && bot === rock) {
            winner = player2;
        } 
        else
            if (me === scissors && bot === paper) {
                winner = player1;
            }
            else
                if (me === paper && bot === scissors) {
                    winner = player2;
                }
                else
                    if (me === rock && bot === scissors) {
                        winner = player1;
                    }
                    else
                        if (me === scissors && bot === rock) {
                            winner = player2;
                        }
                        else {
                            winner = tie;
                        }

    if (winner != tie) {
        return console.log(`The winner is ${winner}.`);
    } 
    else {
        return console.log("It is a tie.");
    }
}

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let me = paper;
let bot = rock;

let player1 = "Galeed";
let player2 = "Bot";
let tie = "Tie";

game(me, bot, player1, player2, tie);
