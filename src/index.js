// use quokka.js for easy debug

// create deck
const suits = ["hearts", "diamonds", "spades", "suits"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let deck = [];
let shuffled = [];

for (rank in ranks) {
  for (suit in suits) {
    deck.push({
      suit: suits[suit],
      rank: ranks[rank],
      name: `${ranks[rank]} of ${suits[suit]}`
    });
  }
}
// sort deck function
function shuffle(deck) {
  shuffled = deck;
  for (card in shuffled) {
    let next = Math.floor(Math.random() * (shuffled.length + 1));
    let swap = shuffled[card];
    shuffled[card] = shuffled[next];
    shuffled[next] = swap;
  }
}
// pick 3 deck function
function pickThreeCards() {
  let picks = [];
  picks.push(shuffled[0], shuffled[1], shuffled[2]);
  for (pick in picks) picks[pick].order = pick;
  console.log(picks);
}

// run shuffle
shuffle(deck);
// run pick
pickThreeCards();
