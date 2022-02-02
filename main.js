// <!-- I want to build a war game with one card play at a time -->
// <!-- This will be a 1 player game -->


const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const getDeck = () => {
  const deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let score = parseInt(values[x]);
      if (values[x] == "J") 
      score = 10;
      if (values[x] == "Q") 
      score = 11;
      if (values[x] == "K") 
      score = 12;
      if (values[x] == "A") 
      score = 13;
      let card = { Value: values[x], Suit: suits[i], Score: score };
      deck.push(card);
    }
  }

  return deck;
};



// shuffle the cards
// Fisher Yates (aka Knuth) shuffle

// get a random index ranging from 0 (inclusive) to max (exclusive)
const getRandomIndex = (max) => Math.floor(Math.random() * max);
// shuffle an array of cards
const shuffleCards = (cards) => {
  // loop over the card deck array once
  for (let currentIndex = 0; currentIndex < cards.length; currentIndex +=1) {
    // select a random index in the deck
    const randomIndex = getRandomIndex(cards.length);
    // select the card that corresponds to randomIndex
    const randomCard = cards[randomIndex];
    // select the card that corresponds to currentIndex
    const currentCard = cards[currentIndex];
    // swap positions of randomCard and currentCard in the deck
    cards[currentIndex] = randomCard;
    cards[randomIndex] = currentCard;
 
    
  }
  // Return the shuffled deck
  return cards;
};

const deck = shuffleCards(getDeck());
console.log(shuffleCards(getDeck()))



const input = document.querySelector("player1card");
const input1 = document.querySelector("player2card");


const player2Button = document.getElementById("player2Button");
const player1Button = document.getElementById("player1Button");


player1Button.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("player1card").innerHTML = deck.pop();
  console.log(deck.pop());
  
  


});

player2Button.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("player2card").innerHTML = deck.pop();
  console.log(deck.pop());
  console.log(deck);


});

// let playersTurn = 1;



// // Add an event listener on player 1's button to draw card and switch
// // to player 2's turn
// player1Button.addEventListener('click', () => {
//   if (playersTurn === 1) {
//     player1Card = deck.pop();
//     playersTurn = 2;
//     console.log(player1Card);
//   }
  
// });

// // // Add event listener on player 2's button to draw card and determine winner
// // // Switch back to player 1's turn to repeat game
//   player2Button.addEventListener('click', () => {
//   if (playersTurn === 2) {
//     const player2Card = deck.pop();
//     playersTurn = 1;

//     if (player1Card.rank > player2Card.rank) {
//       output('player 1 wins');
//     } else if (player1Card.rank < player2Card.rank) {
//       output('player 2 wins');
//     } else {
//       output('tie');
//     }
//   }
// });