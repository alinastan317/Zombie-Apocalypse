var outcome = "not yet";

alert("One day you wake up and the world as you know has ended.  The dead come to life and prey on the living. There is no hope, no cure, only survival.  Welcome to the zombie apocalypse.");
var scenarios = ["You wake up in a hospital.  It is eerily quiet.  You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures.  You see a small convenience store up ahead and decide to loot it for goods." ];

function random(range){
		return Math.round(Math.random() * range);
}

alert(scenarios[random(scenarios.length -1)]);

function character (attribute, name){
				this.strength = 3;
				this.health = 3;
				this.stealth = 0;
				this.attribute = attribute;
				this.name = name;
}

var getAttribute = prompt ("These times test the strengths of our character. What were you before the war? (Choose from: soldier, doctor, or politician)").toLowerCase();

var getName = prompt ("What is your name?");

if(!getName) {
		getName = prompt("I don't know what to call you if you do not enter a name. Please enter a name.");
		if (!getName) {
				getName = prompt("If you don't answer I will be forced to name you myself...Last chance. What is your name?");
				if (!getName) {getName = "Donald Duck";}
		}
}

var myCharacter = new character(getAttribute, getName);

switch (myCharacter.attribute) {
		case "doctor":
				myCharacter.health = 5;
				myCharacter.strength = random(4) + 1;
				myCharacter.stealth = random(4) + 1;
				break;
		case "soldier":
				myCharacter.strength = 5;
				myCharacter.health = random(4) + 1;
				myCharacter.stealth = random(4) + 1;
				break;
		case "politician":
				myCharacter.stealth = 5;
				myCharacter.health = random(4) + 1;
				myCharacter.strength = random(3);
				break;
}


var choise = prompt("The brave adventurer and former " + myCharacter.attribute +  ", " + myCharacter.name + " enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack or attempt to sneak by the zombie?");
console.log(myCharacter, outcome, choise);

while (outcome === "not yet"){
		console.log("test");
			if (choise === "sneak"){
					if (myCharacter.stealth === 5) {
							alert("You sneak by the zombie, you clever bastard.");
							outcome = "win";
					}
					else {
							alert("You try to slip by the zombie, but you accidentally stumble over a can of tuna, alerting the zombie of your existence. It slowly turns its head and shuffles towards you.");
							if (myCharacter.strength === 5) {
									alert("Although you have alerted the zombie to your presence you are able to crush its skull with your bare hands.");
									outcome = "win";
							}
							else {
									if (myCharacter.health > 3) {
											choise = prompt("The zombie bites you but you manage to release yourself from its grasp. You are hurt. Do you decide to run or attack him?");
											if (choise === "run") {choise = "sneak";}
											myCharacter.health--;
											outcome = "not yet";
									}
									else {
											alert("The zombie chomps on your leg as you fail in your poor escape from his grasp. You die.");
											outcome = 'lose';
									}
							}
					}
			}
			else { //choise === "attack"
					if (myCharacter.strength === 5) {
										alert("Using only your bare hands, you slay that zombie! Success!");
										outcome = "win";
					}
					else {
											alert("You fearlessly charge the zombie with all your strength.  Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.");
											alert("Just kidding. You are immediately caught by the zombie");
    									if (myCharacter.health > 3) {
    											choise = prompt("The zombie bites you but you manage to release yourself from its grasp. You are hurt. Do you decide to run or attack him?");
    											if (choise === "run") {choise = "sneak";}
    											myCharacter.health--;
    											outcome = "not yet";
											}
											else {
																alert("The zombie chomps on your leg as you fail in your poor escape from his grasp. You die.");
																outcome = 'lose';
											}
						}
				}
}

if (outcome === "lose") {
  		alert("You lose!");
} else if (outcome === "win") {
  		alert("You win!");
  	}

				


