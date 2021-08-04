let deckId
let computerScore = 0
let yourScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
drawCardBtn.disabled = true;

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id

        })
        drawCardBtn.disabled = false;
        computerScore = 0
        yourScore = 0
        document.getElementById("computer").innerHTML = "Computer: 0"
        document.getElementById("me").innerHTML = "Me: 0" 
        document.getElementById("title").innerHTML = "WAR!"
        cardsContainer.children[0].innerHTML = ""
        cardsContainer.children[1].innerHTML = ""
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            let card0 = data.cards[0].value
            let card1 = data.cards[1].value
            console.log(card0, card1)


            if (card0 ===  "JACK" ){
                card0 = 11
                console.log(card0)
            }else if (card0 ===  "QUEEN" ){
                card0 = 12
                console.log(card0)
            }else if (card0 ===  "KING" ){
                card0 = 13
                console.log(card0)
            }else if (card0 ===  "ACE" ){
                card0 = 14
                console.log(card0)
            }else{
                card0 = parseInt(data.cards[0].value)
                console.log(card0)
            }

            if (card1 ===  "JACK" ){
                card1 = 11
            }else if (card1 ===  "QUEEN" ){
                card1 = 12
            }else if (card1 ===  "KING" ){
                card1 = 13
            }else if (card1 ===  "ACE" ){
                card1 = 14
            }else{
                card1 = parseInt(data.cards[1].value)
                console.log(card1)
            }  

            console.log(card0, card1)

            if(data.remaining == 0 && computerScore > yourScore){
                console.log("done!")
                document.getElementById("title").innerHTML = "You Lose!"
                drawCardBtn.disabled = true;
            }else if(data.remaining == 0 && computerScore < yourScore){
                console.log("done!")
                document.getElementById("title").innerHTML = "You Win!"
                drawCardBtn.disabled = true;
            }else{
                winner(card0, card1)
            }

        })
})

function winner(card1, card2){  
    if(card1 > card2){
        console.log("You Lose!")
        computerScore += 1
        console.log(computerScore)
        document.getElementById("computer").innerHTML = "Computer: " + computerScore
    }else{
        console.log("You Win!")
        yourScore += 1
        console.log(yourScore)
        document.getElementById("me").innerHTML = "Me: " + yourScore
    }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/children
