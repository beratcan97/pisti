var cards = ["1",  "2", "3", "4", "5", "6", "7", "8", "9"];

var playerCards = [];
var robotCards = [];

for (i = 0; i < 4; i++) {
    playerCards.push(Math.floor(Math.random() * 52) + 1);
    robotCards.push(Math.floor(Math.random() * 52) + 1);
}

// removes card
function remove(removeCard){
    for(var card of cards){
        if(card = removeCard){
            alert("same");
        }
    }
}

console.log(playerCards);
console.log(robotCards);


