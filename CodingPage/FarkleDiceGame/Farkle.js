var dice1;
var dice2;
var dice3;
var dice4;
var dice5;
var dice6;

var diceToRoll;
var diceHolding;

var roll;
var farkle;
var straight;
var tripleDouble;
var pointsError;

var xBtn;
var xBtn2;
var xBtn3;
var xBtn4;

var pointsLabel;
var totalPointsLabel;

var currentRollPoints;
var totalPoints

var currentLabel;
var totalLabel;

function load() {
    currentLabel = "Current Points: "; 
    totalLabel = "Total Points: ";
    
    //Dice
    dice1 = document.getElementById("diceOne");
    dice2 = document.getElementById("diceTwo");
    dice3 = document.getElementById("diceThree");
    dice4 = document.getElementById("diceFour");
    dice5 = document.getElementById("diceFive");
    dice6 = document.getElementById("diceSix");

    diceToRoll = [dice1, dice2, dice3, dice4, dice5, dice6];
    diceHolding = [];

    roll = document.getElementById("rollDice");
    
    farkle = document.getElementById("farkleBox");
    straight = document.getElementById("straightBox");
    tripleDouble = document.getElementById("tripleDoubleBox");
    pointsError = document.getElementById("pointsErrorBox");
    
    xBtn = document.getElementById("closeFarkle");
    xBtn2 = document.getElementById("closeStraight");
    xBtn3 = document.getElementById("closeTripleDouble");
    xBtn4 = document.getElementById("closePointsError");
    
    pointsLabel = document.getElementById("pointsLabel");
    totalPointsLabel = document.getElementById("totalPointsLabel");
    
    currentRollPoints = 0;
    totalPoints = 0;
    
    pointsLabel.innerHTML = currentLabel + currentRollPoints;
    totalPointsLabel.innerHTML = totalLabel + totalPoints;
    
   
    disableDice();
}


function rollingDice() {
   
   enableDice();
    
    let rolling = diceToRoll;
    for(var i = 0; i < diceToRoll.length; i++){
        
        var newNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        var newValue = newNumber.toString();
        
        diceToRoll[i].innerHTML = newValue;
    }
    //checkForFarkle();
}

function checkForFarkle(){
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    var sixes = 0;
    
    for(var i = 0; i < diceToRoll.length; i++){
        
        if(diceToRoll[i].innerHTML === '1'){
            ones++;
        }else if(diceToRoll[i].innerHTML === '2'){
            twos++;
        }else if(diceToRoll[i].innerHTML === '3'){
            threes++;
        }else if(diceToRoll[i].innerHTML === '4'){
            fours++;
        }else if(diceToRoll[i].innerHTML === '5'){
            fives++;
        }else if(diceToRoll[i].innerHTML === '6'){
            sixes++;
        }
        
    }
    
    if((ones < 1 && fives < 1 && twos < 3 && threes < 3 && fours < 3 && sixes < 3) && ((ones !== 2 && twos !== 2 && threes !== 2)||(ones!==2 && twos!==2 && fours!==2)||(ones!==2 && twos!==2 && fives!==2)||(ones!==2 && twos!==2 && sixes!==2)||(ones!== 2 && threes!==2 && fours!==2)||(ones!==2 && threes!==2 && fives!==2)||(ones!==2 && threes!==2 && sixes!==2)||(ones!==2 && fours!==2 && fives!==2)||(ones!==2 && fours!==2 && sixes!==2)||(ones!==2 && fives!==2 && sixes!==2)||(twos!==2 && threes!==2 && fours!==2)||(twos!==2 && threes!==2 && fives!==2)||(twos!==2 && threes!==2 && sixes!==2)||(twos!==2 && fours!==2 && fives!==2)||(twos!==2 && fours!==2 && sixes!==2)||(twos!==2 && fives!==2 && sixes!==2)
        ||(threes!==2 && fours!==2 && fives!==2)||(threes!==2 && fours!==2 && sixes!==2)||(threes!==2 && fives!==2 && sixes!==2)||(fours!==2 && fives!==2 && sixes!==2))){ 
                
        farkle.style.display = "block";
        currentRollPoints = 0;
        resetDice();
        disableDice();
        
    }
    
    
}

function checkForStraight(){
    var countOnes = 0;
    var countTwos = 0;
    var countThrees = 0;
    var countFours = 0;
    var countFives = 0;
    var countSixes = 0;
    
    for(var i = 0; i < diceToRoll.length; i++){
        
        if(diceToRoll[i].innerHTML === '1'){
            countOnes++;
        }else if(diceToRoll[i].innerHTML === '2'){
            countTwos++;
        }else if(diceToRoll[i].innerHTML === '3'){
            countThrees++;
        }else if(diceToRoll[i].innerHTML === '4'){
            countFours++;
        }else if(diceToRoll[i].innerHTML === '5'){
            countFives++;
        }else if(diceToRoll[i].innerHTML === '6'){
            countSixes++;
        }
        
    }
    if(countOnes === 1 && countFives === 1 && countTwos === 1 && countThrees === 1 && countFours === 1 && countSixes === 1){
        straight.style.display = "block";
        currentRollPoints += 1500;
        pointsLabel.innerHTML = "Points: " + currentRollPoints;
        disableDice();
    }
}

function checkTripleDoubles(){
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    var sixes = 0;
    
    for(var i = 0; i < diceToRoll.length; i++){
        //console.log(diceToRoll[i].innerHTML);
        if(diceToRoll[i].innerHTML === '1'){
            ones++;
        }else if(diceToRoll[i].innerHTML === '2'){
            twos++;
        }else if(diceToRoll[i].innerHTML === '3'){
            threes++;
        }else if(diceToRoll[i].innerHTML === '4'){
            fours++;
        }else if(diceToRoll[i].innerHTML === '5'){
            fives++;
        }else if(diceToRoll[i].innerHTML === '6'){
            sixes++;
        }
        
    }
    
    if((ones === 2 && twos === 2 && threes === 2)||(ones===2 && twos===2 && fours===2)||((ones===2 && twos===2 && fives===2)||(ones===2 && twos===2 && sixes===2)||(ones === 2 && threes === 2 && fours === 2)||(ones === 2 && threes === 2 && fives ===2)||(ones === 2 && threes === 2 && sixes === 2)||(ones===2 && fours===2 && fives===2)||(ones===2 && fours===2 && sixes===2)||(ones===2 && fives===2 && sixes===2)
    ||(twos===2 && threes===2 && fours===2)||(twos===2 && threes===2 && fives===2)||(twos===2 && threes===2 && sixes===2)||(twos===2 && fours===2 && fives===2)||(twos===2 && fours===2 && sixes===2)||(twos===2 && fives===2 && sixes===2)
    ||(threes===2 && fours===2 && fives===2)||(threes===2 && fours===2 && sixes===2)||(threes===2 && fives===2 && sixes===2)
    ||(fours===2 && fives===2 && sixes===2))){
        
        tripleDouble.style.display = "block";
        currentRollPoints += 1500;
        pointsLabel.innerHTML = "Points: " + currentRollPoints;
        disableDice();
        
    }
}

function selectDice(dice){
    
    var index = diceToRoll.indexOf(dice);
    var addHold = document.getElementById('diceHold');
    
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    var sixes = 0;
    
    for(var i = 0; i < diceToRoll.length; i++){
        //console.log(diceToRoll[i].innerHTML);
        if(diceToRoll[i].innerHTML === '1'){
            ones++;
        }else if(diceToRoll[i].innerHTML === '2'){
            twos++;
        }else if(diceToRoll[i].innerHTML === '3'){
            threes++;
        }else if(diceToRoll[i].innerHTML === '4'){
            fours++;
        }else if(diceToRoll[i].innerHTML === '5'){
            fives++;
        }else if(diceToRoll[i].innerHTML === '6'){
            sixes++;
        }
        
    }
    
    if(ones >= 3 && dice.innerHTML === '1'){
        
        var threesArray = [];
        var length = diceToRoll.length;
        
        for(var i = 0; i < length; i++){
            if(diceToRoll[i].innerHTML === '1'){
               // diceToRoll[i].style.borderColor = 'gold';
                threesArray.push(diceToRoll[i]);
               // diceToRoll.splice(i, 1);
            }
        }
        for(var i = 0; i < threesArray.length; i++){
            addHold.appendChild(threesArray[i]);
            diceHolding.push(threesArray[i]);
            var removeIndex = diceToRoll.indexOf(threesArray[i]);
            diceToRoll.splice(removeIndex, 1);
            
        }
        
        threesArray.splice(0, threesArray.length);
        ones = ones - 3;
        var addPoints = 1000;
        
        if(ones > 0){
            while (ones !== 0){
                addPoints = addPoints * 2
                ones--;
            }
        }
        currentRollPoints += addPoints;
        pointsLabel.innerHTML = currentLabel + currentRollPoints;
        
    }else if(twos >= 3 && dice.innerHTML === '2'){
        
        var threesArray = [];
        var length = diceToRoll.length;
        
        for(var i = 0; i < length; i++){
            if(diceToRoll[i].innerHTML === '2'){
               // diceToRoll[i].style.borderColor = 'gold';
                threesArray.push(diceToRoll[i]);
               // diceToRoll.splice(i, 1);
            }
        }
        for(var i = 0; i < threesArray.length; i++){
            addHold.appendChild(threesArray[i]);
            diceHolding.push(threesArray[i]);
            var removeIndex = diceToRoll.indexOf(threesArray[i]);
            diceToRoll.splice(removeIndex, 1);
            
        }
        
        threesArray.splice(0, threesArray.length);
        twos = twos - 3;
        var addPoints = 200;
        
        if(twos > 0){
            while (twos !== 0){
                addPoints = addPoints * 2
                twos--;
            }
        }
        currentRollPoints += addPoints;
        pointsLabel.innerHTML = currentLabel + currentRollPoints;
        
    }else if(threes >= 3 && dice.innerHTML === '3'){
        
        var threesArray = [];
        var length = diceToRoll.length;
        
        for(var i = 0; i < length; i++){
            if(diceToRoll[i].innerHTML === '3'){
               // diceToRoll[i].style.borderColor = 'gold';
                threesArray.push(diceToRoll[i]);
               // diceToRoll.splice(i, 1);
            }
        }
        for(var i = 0; i < threesArray.length; i++){
            addHold.appendChild(threesArray[i]);
            diceHolding.push(threesArray[i]);
            var removeIndex = diceToRoll.indexOf(threesArray[i]);
            diceToRoll.splice(removeIndex, 1);
            
        }
        
        threesArray.splice(0, threesArray.length);
        threes = threes - 3;
        var addPoints = 300;
        
        if(threes > 0){
            while (threes !== 0){
                addPoints = addPoints * 2
                threes--;
            }
        }
        currentRollPoints += addPoints;
        pointsLabel.innerHTML = currentLabel + currentRollPoints;
        
    }else if(fours >= 3 && dice.innerHTML === '4'){
        
        var threesArray = [];
        var length = diceToRoll.length;
        
        for(var i = 0; i < length; i++){
            if(diceToRoll[i].innerHTML === '4'){
               // diceToRoll[i].style.borderColor = 'gold';
                threesArray.push(diceToRoll[i]);
               // diceToRoll.splice(i, 1);
            }
        }
        for(var i = 0; i < threesArray.length; i++){
            addHold.appendChild(threesArray[i]);
            diceHolding.push(threesArray[i]);
            var removeIndex = diceToRoll.indexOf(threesArray[i]);
            diceToRoll.splice(removeIndex, 1);
            
        }
        
        threesArray.splice(0, threesArray.length);
        fours = fours - 3;
        var addPoints = 400;
        
        if(fours > 0){
            while (fours !== 0){
                addPoints = addPoints * 2
                fours--;
            }
        }
        currentRollPoints += addPoints;
        pointsLabel.innerHTML = currentLabel + currentRollPoints;
        
    }else if(fives >= 3 && dice.innerHTML === '5'){
        
        var threesArray = [];
        var length = diceToRoll.length;
        
        for(var i = 0; i < length; i++){
            if(diceToRoll[i].innerHTML === '5'){
               // diceToRoll[i].style.borderColor = 'gold';
                threesArray.push(diceToRoll[i]);
               // diceToRoll.splice(i, 1);
            }
        }
        for(var i = 0; i < threesArray.length; i++){
            addHold.appendChild(threesArray[i]);
            diceHolding.push(threesArray[i]);
            var removeIndex = diceToRoll.indexOf(threesArray[i]);
            diceToRoll.splice(removeIndex, 1);
            
        }
        
        threesArray.splice(0, threesArray.length);
        fives = fives - 3;
        var addPoints = 500;
        
        if(fives > 0){
            while (fives !== 0){
                addPoints = addPoints * 2
                ones--;
            }
        }
        currentRollPoints += addPoints;
        pointsLabel.innerHTML = currentLabel + currentRollPoints;
        
    }else if(sixes >= 3 && dice.innerHTML === '6'){
        
        var threesArray = [];
        var length = diceToRoll.length;
        
        for(var i = 0; i < length; i++){
            if(diceToRoll[i].innerHTML === '6'){
               // diceToRoll[i].style.borderColor = 'gold';
                threesArray.push(diceToRoll[i]);
               // diceToRoll.splice(i, 1);
            }
        }
        for(var i = 0; i < threesArray.length; i++){
            addHold.appendChild(threesArray[i]);
            diceHolding.push(threesArray[i]);
            var removeIndex = diceToRoll.indexOf(threesArray[i]);
            diceToRoll.splice(removeIndex, 1);
            
        }
        
        threesArray.splice(0, threesArray.length);
        sixes = sixes - 3;
        var addPoints = 600;
        
        if(sixes > 0){
            while (sixes !== 0){
                addPoints = addPoints * 2
                ones--;
            }
        }
        currentRollPoints += addPoints;
        pointsLabel.innerHTML = currentLabel + currentRollPoints;
        
    }
    else{
        for(var i = 0; i < diceToRoll.length;i++){
        
            if(dice.id === diceToRoll[i].id && (diceToRoll[i].innerHTML === '1' || diceToRoll[i].innerHTML === '5') && (ones < 3 && fives < 3)){
            
                diceHolding.push(diceToRoll[i]);
    
           
                addHold.appendChild(diceToRoll[i]);
            
            
           
                if(diceToRoll[i].innerHTML === '1'){
                    currentRollPoints += 100;
                     pointsLabel.innerHTML = currentLabel + currentRollPoints;
               
                }else if(diceToRoll[i].innerHTML === '5'){
                    currentRollPoints += 50;
                    pointsLabel.innerHTML = currentLabel + currentRollPoints;
               
                }
            
            }
        }
    
        diceToRoll.splice(index,1);
    }
    
    checkDiceHolding();
}

function stay(){
    if(totalPoints < 1000 && currentRollPoints < 1000){
        pointsError.style.display = "block";
    }else{
        totalPoints += currentRollPoints;
        totalPointsLabel.innerHTML = totalLabel + totalPoints;
        
        resetDice();
    }
}

function checkDiceHolding(){
    if(diceToRoll.length === 0){
        for(var i = 0; i < diceHolding.length; i++){
        
            var addRolling = document.getElementById("diceRolling");
            addRolling.appendChild(diceHolding[i]);
            diceToRoll.push(diceHolding[i]);
                
        }
                
        diceHolding.splice(0, diceHolding.length);
        disableDice();
    }
}

function resetDice(){
    currentRollPoints = 0;
    pointsLabel.innerHTML = currentLabel + currentRollPoints;
                
    for(var i = 0; i < diceHolding.length; i++){
        
        var addRolling = document.getElementById("diceRolling");
        addRolling.appendChild(diceHolding[i]);
        diceToRoll.push(diceHolding[i]);
                
    }
                
    diceHolding.splice(0, diceHolding.length);
    disableDice();
}
function openFarkle(){
    farkle.style.display = "block";
}
function closeFarkle(){
    farkle.style.display = "none";
    
}
function openStraight(){
    straight.style.display = "block";
}
function closeStraight(){
    straight.style.display = "none";
}
function openTripleDouble(){
    tripleDouble.style.display = "block";
}
function closeTripleDouble(){
    tripleDouble.style.display = "none";
}
function closePointsError(){
    pointsError.style.display = "none";
}

function disableDice(){
    dice1.disabled = true;
    dice2.disabled = true;
    dice3.disabled = true;
    dice4.disabled = true;
    dice5.disabled = true;
    dice6.disabled = true;
}

function enableDice(){
    dice1.disabled = false;
    dice2.disabled = false;
    dice3.disabled = false;
    dice4.disabled = false;
    dice5.disabled = false;
    dice6.disabled = false;
}
/*window.onclick = function(event) {
    if (event.target == farkle) {
        farkle.style.display = "none";
    }
}
window.onclick = function(event) {
    if(event.target == yahtzee){
        farkle.style.display = "none";
    }
}*/