// create deck
const suits = ["hearts", "diamonds", "spades", "suits"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let deck = [], shuffled = [], cardPicks = [], winningOrder = [], choice = '';

let winningAmount = 0,
    testRuns = 0;

for (rank in ranks) {
  for (suit in suits) {
    deck.push({
      suit: suits[suit],
      rank: ranks[rank],
      name: `${ranks[rank]} of ${suits[suit]}`,
      worth: Number(rank) + ((Number(suit) +1) * .1)
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
  cardPicks = [];
  cardPicks.push(shuffled[0], shuffled[1], shuffled[2]);
}

// find winning hand
function winningHand() {
  winningOrder = []
  for(card in cardPicks)  winningOrder.push(cardPicks[card])
  winningOrder.sort(function(a,b){ return a.worth - b.worth })
}
// make a first pick
function makePick(pickVal) {
  if (pickVal === 1)                // hardcode first pick
  choice = cardPicks[1]
  else if (pickVal === 2)           // hardcode second pick to next possible
    choice === cardPicks[1] 
      ? choice = cardPicks[0]
      : choice = cardPicks[0]
}
// remove random card which is not winner and not picked
function removeCard() {  
  do {
    let randomCard = Math.floor(Math.random() * (cardPicks.length))
    cardPicks[randomCard] !== choice && cardPicks[randomCard] !== winningOrder[0]
      ? cardPicks.pop(randomCard) : null
  }while(cardPicks.length < 2)
}

// Was it a winner ?
function winnerVerdict() {
  choice === winningOrder[0] ? winningAmount++ : null 
  testRuns++
}
// return win chance
function winChance() {
  console.log(`${testRuns} test has run. With ${winningAmount} wins. A chance of ${winningAmount/testRuns * 100} %.`)
}

/*    ###  Exectuion of fubnctions ###    */
while(testRuns < 1000) {
  shuffle(deck);
  pickThreeCards();
  winningHand()
  makePick(1)
  removeCard()
  makePick(2)
  winnerVerdict()
}
winChance()
console.log(deck.length)