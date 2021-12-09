class Players {
    constructor(name, supplies) {
        this.name = name;
        this.supplies = supplies;
    }
}

function winners(winner) {
    // if (winner != tie) {
    //     return console.log(`The winner is ${winner}.`);
    // } else {
    //     return console.log("It is a tie.");
    // }

    return winner != tie ? console.log(`The winner is ${winner}.`) : console.log("It is a tie.");
}

function cases(galeed, bot, tie, schoolSupplies) {
    let winner = tie;

    if (galeed.supplies === schoolSupplies[0]) {
        switch (bot.supplies) {
            case schoolSupplies[2]:
                winner = galeed.name;
                break;
            case schoolSupplies[1]:
                winner = bot.name;
                break;
            default:
                winner = tie;
                break;
        }
    } 
    else 
        if(galeed.supplies === schoolSupplies[1]) {
            switch (bot.supplies) {
                case schoolSupplies[0]:
                    winner = galeed.name;
                    break;
                case schoolSupplies[2]:
                    winner = bot.name;
                    break;
                default:
                    winner = tie;
                    break;
            }
        }
        else {
            switch (bot.supplies) {
                case schoolSupplies[1]:
                    winner = galeed.name;
                    break;
                case schoolSupplies[0]:
                    winner = bot.name;
                    break;
                default:
                    winner = tie;
                    break;
            }
        }

    winners(winner);
}

let schoolSupplies = ["rock", "paper", "scissors"];

const galeed = new Players("Galeed", "paper");
const bot = new Players("Bot", "scissors");

let tie = "tie";

cases(galeed, bot, tie, schoolSupplies);