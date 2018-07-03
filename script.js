var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"];
var playerPoints = 0;

var middleCards = [];
var playerCards = [];
var robotCards = [];
//Create a function that finds the topcardinmiddle
var topCardInMiddle = [];

var playerTurn = true;

middleCards = randomCard(4);
playerCards = randomCard(4);
robotCards = randomCard(4);

//Gives random cards based on number
function randomCard(number) {
    var randomCards = [];
    for (let i = 0; i < number; i++) {
        
        var cardIndex = Math.floor(Math.random() * cards.length);
        
        randomCards.push(cards[cardIndex]);
        cards.splice(cardIndex, 1);
    }
    return randomCards;
}

function robotPlays(){
    //robot random card
    var rndCard = Math.floor(Math.random() * robotCards.length);

    //adds the card to middle
    middleCards.push(robotCards[rndCard]);

    //remove random card from robot cards
    robotCards.splice(rndCard, 1);

    //gives robot new card if there is non card left in hand
    if(robotCards == 0){
        robotCards = randomCard(4);
    }

    //gives turn to player
    alert("Your turn");
    playerTurn = true;
}

function playerPlays(cardIndex) {
    var cardValue = playerCards[cardIndex];
    if(playerTurn == true){
        //add the card to middlecards
        middleCards.push(playerCards[cardIndex]);

        //removes card from playerCards[]
        playerCards.splice(cardIndex, 1);

        //if ther is no card left in the hand then 4 new cards will be generated
        if(playerCards == 0){
            playerCards = randomCard(4);
        }

        //if the card is J then empty the middlecards and count the points
        if (((cardValue == 37) || (cardValue == 38) || (cardValue == 39) || (cardValue == 40)) || (cardValue == topCardInMiddle)){
            //counts the points
            for(var card of middleCards){
                //10 of diamonds is worth 3 point
                if ((card == 34)) {
                    playerPoints += 3;
                }
                //2 of clubs is worth 2 point
                if ((card == 1)) {
                    playerPoints += 2;
                }
                //All the J is worth 1 point
                if ((card == 37) || (card == 38) || (card == 39) || (card == 40)){
                    playerPoints += 1;
                }
                //All the Aces is worth 1 point
                if ((card == 49) || (card == 50) || (card == 51) || (card == 52)){
                    playerPoints += 1;
                }
            }
            //empty the middle cards
            middleCards.splice(0, middleCards.length);
        }
        //visual unpdate
        updateCards();

        //Gives the turn to robot
        playerTurn = false;
        robotPlays();
    }
}

function updateCards(){
    var counter = 0;
    for(var card of playerCards){
        document.getElementById("playerCard" + (counter + 1)).innerHTML = card;
        counter ++;
    }

    var backCounter = 4;
    for (let i = 0; i < (4 - counter); i++) {
        document.getElementById("playerCard" + backCounter).innerHTML = "x";
        backCounter--;
    }

    console.log(playerCards);
}

function cardElements() {

    updateCards();

    document.getElementById("playerCard1").addEventListener("click", function(){playerPlays(0)});
    document.getElementById("playerCard2").addEventListener("click", function(){playerPlays(1)});
    document.getElementById("playerCard3").addEventListener("click", function(){playerPlays(2)});
    document.getElementById("playerCard4").addEventListener("click", function(){playerPlays(3)});
}

//Start the game
function gameStart(){
    cardElements();
}
gameStart();