/* Build a Space Battle JS Game
notes/specifications:
use loops, functions, OOP
programed for Chrome and played in Chrome console
use pop-up prompts - user input
KISS 
Must work 

alien ships
6 ships  
random (hull, firepower, accuracy)
weakness = attack one at a time

USS Schwartzenegger 
1 ship
set (hull, firepower, accuracy) 
weakness = can only attack in order & no targeting lasers

battle (gameplay)
attack function() method()
Earth starts the fight - first move
if the Earth is successful at damaging/hitting the aliens 
then report alien damage (hull health)
prompt earth to attack or retreat
retreat = end game (Earth is doomed!)
if Earth attacks invoke attack 
battle cont. until the earth misses, retreats, destroys all aliens, or is destroyed by aliens
attack is to calculate (math.random() <alienShip[].accuracy)


end game 
by retreat of USS Schwartzenegger (Earth is doomed!)
by destroying all the alien ships (Earth is saved!)
alert ot prompt to user = would you like to play again




*/

alert("Captian, we need you to save the Earth. We have our best ship the USS Schwartzenegger ready for you. Will you accept the mission? Are you ready to fight?");
  
class Alien {
	constructor (){
		this.hull  = Math.floor(Math.random() * 4) + 3;
		this.firepower = Math.floor(Math.random() * 5) + 2;
		this.accuracy = Math.random() + .06;
	}
}

const alienShip1 = new Alien();
console.log(alienShip1);


const game = {
	ussSwartzenegger = {
		hull: 20, 
		firepower: 5,
		accuracy: .7
	},

	aliens: [],

	createAliens() {
		for(let i = 0; i < 6; i++){
			const aliensArr = new Alien();
			this.aliens.push(aliensArr); 
			this.takeTurns();
		}
	},

	takeTurns(){
		if (this.ussSwartzenegger.hull > 0){
			//keep playing 
			this.attackShip()
		} else if (this.ussSwartzenegger.hull < 0){
			return 'game over'; 
		}

	}

	attackShip(attacker, target) {
		//attack alien ship 
		// if ussSwartzenegger ship accuracy is less than aliencs accuracy, then we take damage
		// if ussSwartzeneggership accuracy is more than aliens accuracy, then we

		if(attacker.accuracy < target.accuracy){
			attacker.hull = attacker.hull - target.firepower; 

		} 

	}
}
	
game.createAliens();
game.attackShip(ussSwartzenegger, alienShip1)

ussSwartzenegger.attackShip(alienShip1);
console.log(ussSwartzenegger.attackShip(alienShip1));










