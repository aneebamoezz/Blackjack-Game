//Create two variables, firstCard and secondCard.
//Set their values to a random number between 2-11

// 2. Use getRandomCard() to set the values of firstCard and secondCard
let player = {
    name: "Aneeba",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1; // 0.000 - 0.999
    if(randomNumber > 10){
        return 10;
    } else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
    
}


console.log(getRandomCard())

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Card:";
    for(let i =0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    // render out ALL the cards we have
    sumEl.textContent = "Sum:" + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message
}
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
        console.log("Drawing a new card from the deck!");
        // 3. Use the getRandomCard() to set the value of card
        let card = getRandomCard();
        sum += card;
        // Push the card to the cards array
        cards.push(card)
        renderGame();
    }
    
}
