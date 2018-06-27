var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"];

var middleCards = [];
var playerCards = [];
var robotCards = [];
var playerTurn = true;
var playerPoints = 0;
var robotPoints = 0;
var playerCardsInPocket = 0;
var robotCardsInPocket = 0;


//Starts the game
middleCards = [39, 1, 50, 34];
//middleCards = randomCard(4);
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

//Display the cards
function updateCards(){
    for(var card of robotCards){
        createCards(card, "robotCards");
    }
    for(var card of middleCards){
        createCards(card, "middleCards");
    }
    for(var card of playerCards){
        createCards(card, "playerCards");
    }
}
updateCards();

//Create cards
function createCards(card, elementID){
    var pTag = document.createElement("p");
    var pTagText = document.createTextNode(card);
    pTag.appendChild(pTagText);

    pTag.classList.add(elementID);

    var element = document.getElementById(elementID);
    element.appendChild(pTag);
}

//Remove card           //NOT IN USE RIGHT NOW
function removeCard(cardToRemove) {
    elm = document.getElementById("playerCards");
    elm.removeChild(elm.childNodes[cardToRemove]);
}

//Adds onclick funtion
function updateClassList() {
    return userSelection = document.getElementsByClassName('playerCards');
}
updateClassList();

for(let i = 0; i < userSelection.length; i++) {
userSelection[i].addEventListener("click", function() {
    if(playerTurn) {
        playerPlays(userSelection[i].innerHTML);
        //TEST
        userSelection[i].classList.toggle('hidden');
    }
    else {
        alert("Not your turn!");
    }
})
}

//Count points

//In test ---- Some thing wrong here only the last 2 if does not work
function countPoints(card) {
    alert(card);
    //10 of diamonds is worth 3 point
    if (card == 34) {
        return 3;
    }
    //2 of clubs is worth 2 point
    if (card == 1) {
        return 2;
    }
    //All the J is worth 1 point
    if ((card == 37) || (card == 38) || (card == 39) || (card == 40)){
        return 1;
    }
    //All the Aces is worth 1 point
    if ((card == 49) || (card == 50) || (card == 51) || (card == 52)){
        return 1;
    }
    else {
        var card = card;
    }
}

//Game  logic
function gameLogic(userCard) {
    for(var card of middleCards){
        var resultForCard = countPoints(card);
        if(resultForCard ==! null){
            alert("points to be added: " + resultForCard);
            playerPoints += resultForCard;
            alert("Result: " + resultForCard);
        }
    }
}

//player plays
function playerPlays(card){
    gameLogic(card);
    playerTurn = false;
}

//computerplayer logic
function computerPlays(){
    alert("computers turn");
    var randomCard = robotCards[Math.floor(Math.random()*robotCards.length)];
    alert(randomCard);
    //gameLogic();
    playerTurn = true;
    alert("computer have played");
}


//The most card
function playerWithMostCard(player){
    if (playerCardsInPocket > robotCardsInPocket) {
    }
    else if (playerCardsInPocket < robotCardsInPocket){
        robotPoints +3;
    }
}