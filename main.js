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

// check shuffled deck
const deck = shuffleCards(getDeck());
console.log(shuffleCards(getDeck()))



const input = document.querySelector("player1card");
const input1 = document.querySelector("player2card");
// const input2 = document.querySelector("deckOfCards");
const input2 = document.querySelector("announcement");


const player2Button = document.getElementById("player2Button");
const player1Button = document.getElementById("player1Button");
const player1card = {};


let playersTurn = 1;


player1Button.addEventListener("click", (event) => {
  if (playersTurn === 1) {
  event.preventDefault();
  const player1card = deck.pop();
  document.getElementById("player1card").innerHTML = player1card;
  console.log(deck);
  console.log(player1card);
  playersTurn = 2;
}
  
  


});

player2Button.addEventListener("click", (event) => {
  if (playersTurn === 2) {
  event.preventDefault();
  const player2card = deck.pop();
  document.getElementById("player2card").innerHTML = player2card;
  console.log(deck);
  console.log(player2card);
  // playersTurn = 1;

  if (player1card.score > player2card.score) {
    document.getElementById("announcement").innerHTML = "Player 1 wins";
  } else if (player1card.score < player2card.score) {
    document.getElementById("announcement").innerHTML = "Player 2 wins";
  } else {
    document.getElementById("announcement").innerHTML = "Tie";
  }
}


});
