const cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}];


let cardsInPlay = [];

function checkForMatch() {
    console.log(cardsInPlay);
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        displayMessage("You found a match!");
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    } else {
        console.log("Sorry, try again.");
        displayMessage("Sorry, try again.");
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }


}

function flipCard() {
    let att = this.getAttribute('data-id');
    this.setAttribute('src', `${cards[att].cardImage}`);
    console.log("User flipped " + cards[att].rank);
    console.log(cards[att].cardImage);
    console.log(cards[att].suit);
    cardsInPlay.push(cards[att].rank);
    if (cardsInPlay[1] !== undefined) {
        checkForMatch();
    }
}

function createBoard() {
    cards.forEach((e, i) => {
        let newImage = document.createElement('img');
        newImage.setAttribute('src', 'images/back.png');
        newImage.setAttribute('data-id', i)
        newImage.addEventListener('click', flipCard)
        document.getElementById('game-board').appendChild(newImage);
    })
}

function displayMessage(text) {
    let body = document.querySelector('body');
    let message = document.createElement('p');
    message.setAttribute('class', "centerMessage");
    message.textContent = text;
    body.appendChild(message);
}

createBoard();