const ZERO = 0;
const ONE = 1;
const TWO = 2;
const HUNDR = 100;

function Fighter(obj) {
	this.name = obj.name;
	this.damage = obj.damage ;
	this.hp = obj.hp;
	this.strength = obj.strength;
	this.agility = obj.agility;
	this.getName = function() {
        return this.name;
    };
	this.getDamage = function() {
        return this.damage;
    };
	this.getStrength = function() {
        return this.strength;
    };
	this.getAgility = function() {
        return this.agility;
    };
	this.getHealth = function() {
        return this.hp;
    };
    this.attack = function(defender) {
        let stats = defender.agility + defender.strength;
        let randomInt = Math.floor(Math.random() * HUNDR) + ONE;
        let chanceOfSuccess = HUNDR - stats;
        let attackIsSuccess = chanceOfSuccess >= randomInt;
       if(attackIsSuccess){
           console.log(`${this.name} makes ${this.damage} damage to ${defender.name}`);
           defender.dealDamage(this.damage);
       } else{
           return console.log(`${this.name} attack missed`);
       }
   } 
	this.currentHp = obj.hp;
	this.wins = 0;
	this.losses = 0;
	this.logCombatHistory = function logCombatHistory() {
		console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}`);
	}
	this.heal = function heal(amountOfRegeneration) {
		if(this.currentHp + amountOfRegeneration > this.hp) {
			this.currentHp = this.hp;
		} else {
			this.currentHp = this.currentHp + amountOfRegeneration;
		}
	}
	this.dealDamage = function dealDamage(amountOfDamage) {
		if(this.currentHp - amountOfDamage > 0){
			this.currentHp = this.currentHp - amountOfDamage;
		} else {
			this.currentHp = 0;
			this.addLoss();
			console.log(`${this.name} is dead and can't fight.`);
		}
	}
	this.addWin = function addWin() {
		this.wins++;
	}
	this.addLoss = function addLoss() {
		this.losses++;
	}	
}

function battle(fighter1, fighter2) {
		let counter = 0;
		while(fighter1.currentHp > 0 && fighter2.currentHp > 0) {
			if(counter%TWO === ZERO){
				fighter1.attack(fighter2);
				counter++;	
			} else {
				fighter2.attack(fighter1);
				counter++;
			}		
        }
}