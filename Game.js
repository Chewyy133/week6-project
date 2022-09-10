 //TODO

 // 1. game should have 1 deck, 2 players
 import Card from './Card.js';
 import Deck from './Deck.js'; 
 import Player from './Player.js';

 // 2. when initialize game, initialize deck, shuffle deck, initialize 2 players



startGame()
function startGame() {
    const newDeck = new Deck();
    newDeck.shuffleCards()
    newDeck.dealCard();



startPlayers()
function startPlayers() {
    // 3. when initializing 2 players, prompt for user names for player 1 and player 2 
    let player1 = new Player('Jesus');
    let player2 = new Player('Karen');
    console.log(player1)
    console.log(player2)

   
  

// 4. while deck's cards are not empty, deal cards to each of the players and store them in

const deckMidpoint = Math.ceil(newDeck.numberOfCards / 2)
let player1Deck = new Deck(newDeck.cards.slice(0, deckMidpoint))
let player2Deck = new Deck(newDeck.cards.slice(deckMidpoint, newDeck.numberOfCards))

console.log(player1Deck)
console.log(player2Deck)


// 5. create any additional methods to log out what is happening in game
// 6. possible method, when cards are dealt, log i.e player 1 received card x, player 2 received card x
    
player1Hand()
function player1Hand() {
    return `Player 1 has ${player1.dealCard()} card.`;
}

player2Hand()
function player2Hand() {
    return `Player 2 has ${player2.dealCard()} card.`;
}

 // 7. other possible method, when cards are played by both players, log i.e player 1 played x card, player 2 played card x

player1ShowCard()
function player1ShowCard() {
    return `Player 1 played ${player1.checkHand} card. `;
}

player2ShowCard()
function player2ShowCard() {
    return `Player 2 played ${player2.checkHand} card. `;
}


 // 8. another possible method, log score as cards are played 
    
 player1Score()
 function player1Score() {
     return `Player 1 has ${player1.getScore()} points`;
 
 }
 player2Score()
 function player2Score() {
     return `Player 2 has ${player2.getScore()} points`;
 }
 

// 9. loop through while both players cards are not empty

while (i > 0) {
    i--;
}

console.log(i);

}
 // 10. at the end display each players score and log out winner 
 
if ((player1Score) > (player2Score)) {
    console.log('Player 1 Wins!!');
} else if ((player1Score) < (player2Score)) {
    console.log('Player 2 Wins!!');
} else ((player1Score) == (player2Score))
    console.log('Unfortunately nobody won! Better luck next time!!');


}


console.log(startGame);
console.log(Card);



//I honestly didn't know how to setup the game together. Tried looking for different videos and coding sites and I was lost still lost.
//Next time I don't understand something I'll make sure to book a mentor session if I'm not stuck at work.