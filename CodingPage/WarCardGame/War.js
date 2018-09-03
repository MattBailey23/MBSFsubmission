//HTML objects
var playerDeck;
var computerDeck;
var dealBtn;
var playBtn;
var showCardsBtn;
var playerScoreLabel;
var computerScoreLabel;
var modal;
var test;

//Full Deck Arrays
var cardNames = [];
var cardValues = [];

//Player and Computer Decks
var playerCardNames  =[];
var playerCardValues = [];
var computerCardNames = [];
var computerCardValues = [];

//War Round Hidden Cards
var playerHiddenCard1;
var playerHiddenCard2;
var computerHiddenCard1;
var computerHiddenCard2;

var deal;
var playerCard;
var computerCard;
var playerSDCard;
var playerHid1
var playerHid2
var computerSDCard;
var computerHid1;
var computerHid2;
var playerCardCount = 0;
var computerCardCount = 0;

function load(){
    
    playerDeck = document.getElementById('person');
    computerDeck = document.getElementById('computer');
    dealBtn = document.getElementById('deal');
    playBtn = document.getElementById('play');
    playerScoreLabel = document.getElementById('playerScore');
    computerScoreLabel = document.getElementById('computerScore');
    playerSDCard = document.getElementById('playerSD');
    playerHid1 = document.getElementById('playerHidden1');
    playerHid2 = document.getElementById('playerHidden2');
    computerSDCard = document.getElementById('computerSD');
    computerHid1 = document.getElementById('computerHidden1');
    computerHid2 = document.getElementById('computerHidden2');
    modal = document.getElementById('infoBox');
    showCardsBtn = document.getElementById('showCards');
    test = document.getElementById('test');
    
    dealBtn.style.display = 'none';
    playerSDCard.style.display = 'none';
    playerHid1.style.display = 'none';
    playerHid2.style.display = 'none';
    computerSDCard.style.display = 'none';
    computerHid1.style.display = 'none';
    computerHid2.style.display = 'none';
    showCardsBtn.style.display = 'none';
    
    buildDeck();
    /*for(var i = 0; i < cardNames.length; i++){
        test.innerHTML += cardNames[i] + ':' + cardValues[i] +'</br>';
    }*/
}

function play(){
    dealCards();
    playBtn.style.display = 'none';
    dealBtn.style.display = 'block';
    modal.style.display = 'none';
}

function fight(){
    
    //If last round was a war round it will hide the buttons for hidden and Sudden Death Cards
    if(playerSDCard.style.display === 'block'){
        playerSDCard.style.display = 'none';
        playerHid1.style.display = 'none';
        playerHid2.style.display = 'none';
        computerSDCard.style.display = 'none';
        computerHid1.style.display = 'none';
        computerHid2.style.display = 'none';
    }
    
    //Randomly selects a card from the Players Deck
    playerCard = Math.floor(Math.random() * playerCardNames.length);
    playerDeck.innerHTML = playerCardNames[playerCard];
    
    //Randomly selects a card from the Computers Deck
    computerCard = Math.floor(Math.random() * computerCardNames.length);
    computerDeck.innerHTML = computerCardNames[computerCard];
    
    //Adds Computers Card to Players deck if Players card value is higher
    if(playerCardValues[playerCard] > computerCardValues[computerCard]){
        
        playerCardNames.push(computerCardNames[computerCard]);
        playerCardValues.push(computerCardValues[computerCard]);
        
        computerCardNames.splice(computerCard, 1);
        computerCardValues.splice(computerCard, 1);
    
    //Adds Players card to Computers deck if Computers card value is higher    
    }else if(playerCardValues[playerCard] < computerCardValues[computerCard]){
        
        computerCardNames.push(playerCardNames[playerCard]);
        computerCardValues.push(playerCardValues[playerCard]);
        
        playerCardNames.splice(playerCard, 1);
        playerCardValues.splice(playerCard, 1);
        
    //Initiates War Round if both the Player and Computer card values are equal
    }else{
        
        //selects new random card from computer and player decks
        var playerSuddenDeath = Math.floor(Math.random() * (playerCardNames.length - 1));
        var computerSuddenDeath = Math.floor(Math.random() * (computerCardNames.length - 1));
        
        //Loop avoids another war match. Gaurantees next card will be different
        while(playerCardValues[playerSuddenDeath] === computerCardValues[computerSuddenDeath]){
            playerSuddenDeath = Math.floor(Math.random() * (playerCardNames.length - 1));
            computerSuddenDeath = Math.floor(Math.random() * (computerCardNames.length - 1));
        }
    
        /*
            Add Logic to handle Hidden Cards!!!
        */
        
        playerSDCard.innerHTML = playerCardNames[playerSuddenDeath];
        computerSDCard.innerHTML = computerCardNames[computerSuddenDeath];
       
        //Display additional cards when War started
        playerHid1.style.display = 'block';
        playerHid2.style.display = 'block';
        playerSDCard.style.display = 'block';
        computerHid1.style.display = 'block';
        computerHid2.style.display = 'block';
        computerSDCard.style.display = 'block';
        
        
        //Players Sudden Death Card is higher add all computers Cards to Player Deck
        if(playerCardValues[playerSuddenDeath] > computerCardValues[computerSuddenDeath]){
        
            playerCardNames.push(computerCardNames[computerCard]);
            playerCardValues.push(computerCardValues[computerCard]);
            playerCardNames.push(computerCardNames[computerSuddenDeath]);
            playerCardValues.push(computerCardValues[computerSuddenDeath]);
        
            computerCardNames.splice(computerCard, 1);
            computerCardValues.splice(computerCard, 1);
            computerCardNames.splice(computerSuddenDeath, 1);
            computerCardValues.splice(computerSuddenDeath, 1);
        
        //Computers Sudden Death card is higher add all players cards to Computer Deck
        }else if(playerCardValues[playerSuddenDeath] < computerCardValues[computerSuddenDeath]){
        
            computerCardNames.push(playerCardNames[playerCard]);
            computerCardValues.push(playerCardValues[playerCard]);
            computerCardNames.push(playerCardNames[playerSuddenDeath]);
            computerCardValues.push(playerCardValues[playerSuddenDeath]);
        
            playerCardNames.splice(playerCard, 1);
            playerCardValues.splice(playerCard, 1);
            playerCardNames.splice(playerSuddenDeath, 1);
            playerCardValues.splice(playerSuddenDeath, 1);
        }
    }
    
    //Updated Card Count label
    playerCardCount = playerCardNames.length;
    computerCardCount = computerCardNames.length;
    
    playerScoreLabel.innerHTML = "Card Count: " + playerCardCount.toString();
    computerScoreLabel.innerHTML = "Card Count: " + computerCardCount.toString();
    
    
    
}

//Randomly distributes the full deck of cards to the player and computer decks
function dealCards(){
    
    while(cardNames.length > 0){
        
        deal = Math.floor(Math.random() * cardNames.length);
        
        playerCardNames.push(cardNames[deal]);
        playerCardValues.push(cardValues[deal]);
        
        cardNames.splice(deal, 1);
        cardValues.splice(deal, 1);
        
        deal = Math.floor(Math.random() * cardNames.length);
        
        computerCardNames.push(cardNames[deal]);
        computerCardValues.push(cardValues[deal]);
        
        cardNames.splice(deal, 1);
        cardValues.splice(deal, 1);
        
    }
}


//Builds Array of Card Names, and an Array of Card Values. Names and Values will have equal positions
function buildDeck(){
    
    //Hearts
    cardNames.push("2 of Hearts"); cardValues.push(2);
    cardNames.push("3 of Hearts"); cardValues.push(3);
    cardNames.push("4 of Hearts"); cardValues.push(4);
    cardNames.push("5 of Hearts"); cardValues.push(5);
    cardNames.push("6 of Hearts"); cardValues.push(6);
    cardNames.push("7 of Hearts"); cardValues.push(7);
    cardNames.push("8 of Hearts"); cardValues.push(8);
    cardNames.push("9 of Hearts"); cardValues.push(9);
    cardNames.push("10 of Hearts"); cardValues.push(10);
    cardNames.push("Jack of Hearts"); cardValues.push(11);
    cardNames.push("Queen of Hearts"); cardValues.push(12);
    cardNames.push("King of Hearts"); cardValues.push(13);
    cardNames.push("Ace of Hearts"); cardValues.push(14);
    
    //Diamonds
    cardNames.push("2 of Diamonds"); cardValues.push(2);
    cardNames.push("3 of Diamonds"); cardValues.push(3);
    cardNames.push("4 of Diamonds"); cardValues.push(4);
    cardNames.push("5 of Diamonds"); cardValues.push(5);
    cardNames.push("6 of Diamonds"); cardValues.push(6);
    cardNames.push("7 of Diamonds"); cardValues.push(7);
    cardNames.push("8 of Diamonds"); cardValues.push(8);
    cardNames.push("9 of Diamonds"); cardValues.push(9);
    cardNames.push("10 of Diamonds"); cardValues.push(10);
    cardNames.push("Jack of Diamonds"); cardValues.push(11);
    cardNames.push("Queen of Diamonds"); cardValues.push(12);
    cardNames.push("King of Diamonds"); cardValues.push(13);
    cardNames.push("Ace of Diamonds"); cardValues.push(14);
    
    //Spades
    cardNames.push("2 of Spades"); cardValues.push(2);
    cardNames.push("3 of Spades"); cardValues.push(3);
    cardNames.push("4 of Spades"); cardValues.push(4);
    cardNames.push("5 of Spades"); cardValues.push(5);
    cardNames.push("6 of Spades"); cardValues.push(6);
    cardNames.push("7 of Spades"); cardValues.push(7);
    cardNames.push("8 of Spades"); cardValues.push(8);
    cardNames.push("9 of Spades"); cardValues.push(9);
    cardNames.push("10 of Spades"); cardValues.push(10);
    cardNames.push("Jack of Spades"); cardValues.push(11);
    cardNames.push("Queen of Spades"); cardValues.push(12);
    cardNames.push("King of Spades"); cardValues.push(13);
    cardNames.push("Ace of Spades"); cardValues.push(14);
    
    //Clubs
    cardNames.push("2 of Clubs"); cardValues.push(2);
    cardNames.push("3 of Clubs"); cardValues.push(3);
    cardNames.push("4 of Clubs"); cardValues.push(4);
    cardNames.push("5 of Clubs"); cardValues.push(5);
    cardNames.push("6 of Clubs"); cardValues.push(6);
    cardNames.push("7 of Clubs"); cardValues.push(7);
    cardNames.push("8 of Clubs"); cardValues.push(8);
    cardNames.push("9 of Clubs"); cardValues.push(9);
    cardNames.push("10 of Clubs"); cardValues.push(10);
    cardNames.push("Jack of Clubs"); cardValues.push(11);
    cardNames.push("Queen of Clubs"); cardValues.push(12);
    cardNames.push("King of Clubs"); cardValues.push(13);
    cardNames.push("Ace of Clubs"); cardValues.push(14);
    
}