// let cardOne = "queen";
// let cardTwo = "king";
// let cardThree = "queen";
// let cardFour = "king";

// Replacing the above variables with an array 
cards = ["Queen", "King", "Queen", "King"]

// This array will hold cards that are being played 
cardsInPlay = []
// Allows user to select their first card
cardOne = cards[0]
// Appends the card they selected to the array
cardsInPlay.push(cardOne)
console.log("User flipped" + " " + cardOne)

// Second card picked 
cardTwo = cards[1]
cardsInPlay.push(cardTwo)
console.log("User flipped" + " " + cardTwo)

// Testing for card array length to execute following loop 
// If 2 cards have not been selected then the else if is executed
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		alert('You are correct, nice brain!')
	}
	else if (cardsInPlay [0] != cardsInPlay [1]) {
		alert('Try again')
	}
}

console.log(cardsInPlay)

// console.log("User flipped" + " " + cardTwo);
// console.log("User flipped" + " " + cardFour);

// alert('You were right!')
// alert('Try again')