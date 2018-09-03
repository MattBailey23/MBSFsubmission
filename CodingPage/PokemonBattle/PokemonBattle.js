class Pokemon{
    constructor(name,type,attacks, health){
        this.name = name;
        this.type = type;
        this.attacks = attacks;
        this.health = health;
    }
}


pokemon1 = null;
pokemon2 = null;

blastoiseAttacks = ["Skull Bash","Water Gun","Hydro Pump","Bite"];
blastoise = new Pokemon("Blastoise","Water",blastoiseAttacks,100);

charizardAttacks = ["Flame Thrower","Rock Smash","Fire Blast","Fly"];
charizard = new Pokemon("Charizard","Fire",charizardAttacks,100);

venasaurAttacks = ["Vine Whip","Razor Leaf","Solar Beam","Poison Powder"];
venasaur = new Pokemon("Venasaur","Grass",venasaurAttacks,100);

gengarAttacks = ["Lick","Shadow Ball","Dream Eater","Night Shade"];
gengar = new Pokemon("Gengar","Ghost",gengarAttacks,100);

pikachuAttacks = ["Quick Attack","Thunder Shock","Thunder Bolt","Thunder"];
pikachu = new Pokemon("Pikachu","Electric",pikachuAttacks,100);

function blastoiseFunc(){
    
    var x = document.getElementById("blastoiseInfo")
    if(pokemon1 === null || pokemon2 === null){
        x.style.display = "block";
    }
    //var y = document.getElementById("blastoiseInfo").getComputedStyle()
    /*if(x.style.display == "none"){
        x.style.display = "block";
	}else{
		x.style.display = "none";
	}*/
	
	if(pokemon1 === null){
	    pokemon1 = blastoise;
	}else if(pokemon1 !== null && pokemon2 === null){
	    pokemon2 = blastoise;
	}else if(pokemon1 !== null && pokemon2 !== null){
	    alert("You can only select 2 pokemon to battle. Might as well see how the battle plays out. Please click the battle button and run again to make different selections")
	}
   
   /*document.getElementById("blastoiseName").innerHTML = "Pokemon: " + blastoise.name;
   document.getElementById("blastoiseType").innerHTML = "Type: " + blastoise.type;
   document.getElementById("blastoiseAttacks").innerHTML += blastoise.attacks[0] + ", " + blastoise.attacks[1] + ", " + blastoise.attacks[2] + ", " + blastoise.attacks[3];*/
}

function charizardFunc(){
    
    var x = document.getElementById("charizardInfo");
     if(pokemon1 === null || pokemon2 === null){
        x.style.display = "block";
    }
   /*if(x.style.display == "none"){
        x.style.display = "block";
	}else{
		x.style.display = "none";
	}*/
	
	if(pokemon1 === null){
	    pokemon1 = charizard;
	}else if(pokemon1 !== null && pokemon2 === null){
	    pokemon2 = charizard;
	}else if(pokemon1 !== null && pokemon2 !== null){
	    alert("You can only select 2 pokemon to battle. Might as well see how the battle plays out. Please click the battle button and run again to make different selections")
	}
    
    /*document.getElementById("charizardInfo").innerHTML = "Pokemon: " + "\n" + charizard.name + "\n" + "Type: " + "\n" + charizard.type + " Attacks: " + charizard.attacks[0] + ", " + charizard.attacks[1] + ", " + charizard.attacks[2] + ", " + charizard.attacks[3];*/
}

function venasaurFunc(){
    var x = document.getElementById("venasaurInfo");
    if(pokemon1 === null || pokemon2 === null){
        x.style.display = "block";
    }
    
    if(pokemon1 === null){
        pokemon1 = venasaur;
    }else if(pokemon1 !== null && pokemon2 === null){
        pokemon2 = venasaur;
    }else if(pokemon1 !== null && pokemon2 !== null){
	    alert("You can only select 2 pokemon to battle. Might as well see how the battle plays out. Please click the battle button and run again to make different selections");
	}
}

function gengarFunc(){
    var x = document.getElementById("gengarInfo");
     if(pokemon1 === null || pokemon2 === null){
        x.style.display = "block";
    }
    
    if(pokemon1 === null){
        pokemon1 = gengar;
    }else if(pokemon1 !== null && pokemon2 === null){
        pokemon2 = gengar;
    }else if(pokemon1 !== null && pokemon2 !== null){
	    alert("You can only select 2 pokemon to battle. Might as well see how the battle plays out. Please click the battle button and run again to make different selections");
	}
}

function pikachuFunc(){
    var x = document.getElementById("pikachuInfo");
     if(pokemon1 === null || pokemon2 === null){
        x.style.display = "block";
    }
    
    if(pokemon1 === null){
        pokemon1 = pikachu;
    }else if(pokemon1 !== null && pokemon2 === null){
        pokemon2 = pikachu;
    }else if(pokemon1 !== null && pokemon2 !== null){
	    alert("You can only select 2 pokemon to battle. Might as well see how the battle plays out. Please click the battle button and run again to make different selections");
	}
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function battle(){
	document.getElementById("versus").innerHTML = pokemon1.name + " VS. " + pokemon2.name;
	
//	document.getElementById("roundAttack").innerHTML = pokemon1.attacks[randAttack1];
	count = 1;
	
	while(pokemon1.health > 0 && pokemon2.health > 0){
		randAttack1 = Math.floor(Math.random() * (4-0)) + 0;
    	randAttack2 = Math.floor(Math.random() * (4-0)) + 0;
    	
    	
    	document.getElementById("roundAttack").innerHTML += "<h4>Round: " + count + "</h4>";
    	
		if(randAttack1 ===0){
			damage = 5;
			pokemon2.health = pokemon2.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon1.name + "'s Attack: " + pokemon1.attacks[randAttack1] + '<br/>';
			document.getElementById("roundAttack").innerHTML +=  pokemon2.name + "'s Health Remaining: " + pokemon2.health + '<br/><br/>';
		}else if(randAttack1 === 1){
		    damage = 10;
			pokemon2.health = pokemon2.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon1.name + "'s Attack: " + pokemon1.attacks[randAttack1] + '<br/>';
			document.getElementById("roundAttack").innerHTML += pokemon2.name + "'s Health Remaining: " + pokemon2.health+ '<br/><br/>'; 
		}else if(randAttack1 === 2){
		    damage = 15;
			pokemon2.health = pokemon2.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon1.name + "'s Attack: " + pokemon1.attacks[randAttack1] + '<br/>';
			document.getElementById("roundAttack").innerHTML += pokemon2.name + "'s Health Remaining: " + pokemon2.health+ '<br/><br/>';
		}else if(randAttack1 === 3){
		    damage = 10;
			pokemon2.health = pokemon2.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon1.name + "'s Attack: " + pokemon1.attacks[randAttack1] + '<br/>';
			document.getElementById("roundAttack").innerHTML += pokemon2.name + "'s Health Remaining: " + pokemon2.health+ '<br/><br/>';
		}
		
		if(randAttack2 ===0){
			damage = 5;
			pokemon1.health = pokemon1.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon2.name + "'s Attack: " + pokemon2.attacks[randAttack2] + '<br/>';
			document.getElementById("roundAttack").innerHTML += pokemon1.name + "'s Health Remaining: " + pokemon1.health+ '<br/><br/>';
		}else if(randAttack2 === 1){
		    damage = 10;
			pokemon1.health = pokemon1.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon2.name + "'s Attack: " + pokemon2.attacks[randAttack2] + '<br/>';
			document.getElementById("roundAttack").innerHTML += pokemon1.name + "'s Health Remaining: " + pokemon1.health+ '<br/><br/>'; 
		}else if(randAttack2 === 2){
		    damage = 15;
			pokemon1.health = pokemon1.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon2.name + "'s Attack: " + pokemon2.attacks[randAttack2] + '<br/>';
			document.getElementById("roundAttack").innerHTML += pokemon1.name + "'s Health Remaining: " + pokemon1.health+ '<br/><br/>';
		}else if(randAttack2 === 3){
		    damage = 10;
			pokemon1.health = pokemon1.health - damage;
			document.getElementById("roundAttack").innerHTML +=  pokemon2.name + "'s Attack: " + pokemon2.attacks[randAttack2] + '<br/>';
			document.getElementById("roundAttack").innerHTML += pokemon1.name + "'s Health Remaining: " + pokemon1.health+ '<br/><br/>';
		}
			
			count++;
			//document.getElementById("roundInfo").innerHTML += pokemon2.name + "'s Health Remaining: " + pokemon2.health;
	}
	
	if(pokemon1.health > 0){
	    document.getElementById("roundAttack").innerHTML += '<h3>' + pokemon2.name + " has fainted<br/>" + pokemon1.name + " Wins!!!</h3>"; 
	}else{
	    document.getElementById("roundAttack").innerHTML += '<h3>' + pokemon1.name + " has fainted<br/>" + pokemon2.name + " Wins!!!</h3>";
	}
	pokemon1.health = 100;
	pokemon2.health = 100;
}

function reset(){
    pokemon1 = null;
    pokemon2 = null;
    
    var b = document.getElementById("blastoiseInfo");
    b.style.display = 'none';
    var c = document.getElementById("charizardInfo");
    c.style.display = 'none';
    var v = document.getElementById("venasaurInfo");
    v.style.display = 'none';
    var g = document.getElementById("gengarInfo");
    g.style.display = 'none';
    var p = document.getElementById("pikachuInfo");
    p.style.display = 'none';
    
    document.getElementById("roundAttack").innerHTML = " ";
    document.getElementById('versus').innerHTML = " ";
}