// <!-- I want to build a war game with one card play at a time -->
// <!-- This will be a 1 player game -->

let startDiv = document.getElementById("SplashScreen");
let gameCanvas = document.getElementById("gameCanvas");
const startButton = document.getElementById("StartButton");
let gameOver = document.getElementById("game-over");

gameCanvas.style.display = "none";

startButton.addEventListener("click", (event) => {
  startDiv.style.display = "none";
  gameCanvas.style.display = "block";

  
  // gameOver.style.display = "none";


})




// // $("#StartButton").click(function () {
// //   $("#SplashScreen").hide();
// //   $("#GameCanvas").show();
// // });

// const image =document.querySelector("image");


const suits = ["S", "D", "C", "H"];
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
  "0",
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
      const image = `./images/img/` + values[x] + suits[i] + `.png`;
      let card = { Value: values[x], Suit: suits[i], score: score, image: image };
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



const input = document.querySelector("#player1cardimage");
const input1 = document.querySelector("#player2cardimage");
// const input2 = document.querySelector("deckOfCards");
const input2 = document.querySelector("announcement");
const imageOfCard = document.querySelector("image");
const input3 = document.querySelector("#drinkVoucher");


const player2Button = document.getElementById("player2Button");
const player1Button = document.getElementById("player1Button");
let player1card = {};


let playersTurn = 1;




player1Button.addEventListener("click", (event) => {
  if (playersTurn === 1) {
  event.preventDefault();
  player1card = deck.pop();

  // we are creating element as variable image 
  // set up attributes with "src" (could be another variable in a img tag such as "value") and the player1card.image reference
  // the input.appendChild(image) will display the image within the div as a child element, if you use append doesn't work as it goes on the same level as the div.
  
  let image = document.createElement("img");
  image.setAttribute("src",player1card.image );
  console.log(image);
  input.appendChild(image);

  // document.getElementById("player1cardimage").innerHTML = player1card.image;
  // document.getElementById("imageOfCard").innerHTML = player1card.image;
  console.log(deck);
  console.log(player1card);
  playersTurn = 2;
}
 




});

player2Button.addEventListener("click", (event) => {
  if (playersTurn === 2) {
  event.preventDefault();
  const player2card = deck.pop();

  let image = document.createElement("img");
  image.setAttribute("src",player2card.image );
  console.log(image);
  input1.appendChild(image);

  
  console.log(deck);
  console.log(player2card);
  
  playersTurn = 1;

  if (player1card.score > player2card.score) {
    document.getElementById("announcement").innerHTML = "Guest wins $100!";
  } else if (player1card.score < player2card.score) {
    document.getElementById("announcement").innerHTML = "House Wins. Guest Wins a bottle!";
    let image = document.createElement("img");
    image.setAttribute("src", "./images/img/drink.png" );
    console.log(image);
    input3.appendChild(image);

  } else {
    document.getElementById("announcement").innerHTML = "Tie. Press the Guest button to go again.";
  }
}


});

