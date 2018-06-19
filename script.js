var cards = ["1",  "2", "3", "4", "5", "6", "7", "8", "9"];

var playerCards = [];
var robotCards = [];

for (i = 0; i < 4; i++) {
    // Gives player cards
    playerCards.push(getCard());


    //Gives robot cars
    robotCards.push(getCard());
}

// checks if the card is left
function getCard(){
    // Generates a rundom number between 1 and 52
    function randomCard(){
        var randomCard = Math.floor(Math.random() * 52) + 1;

        // Tests if the card is left
        for(var card of cards){
            if(card == randomCard){
                return randomCard;
            }
        }
    }
    
    var randomCardResult = randomCard();

    function testCard() {
        if(randomCardResult == null){
            //If the choosen card was not left runs the code again
            return false;
        }
        else {
            return true;
        }
    }

    var randomCardTestResult = testCard();

    if(testCard() == false) {
        /*
        while(testCard() == false) {
            randomCard();
            testCard();
        }
        */
        return randomCardResult;
    }
}

console.log(playerCards);
console.log(robotCards);