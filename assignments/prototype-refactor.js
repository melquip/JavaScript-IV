/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
(function() {
/* TASK 1 */
class Person { // had to change name to use in lambda-classes
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.stomach = [];
	}
	greet() {
		return `My name is ${this.name} and I'm ${this.age} years old.`;
	}
	eat(edible) {
		this.stomach.push(edible);
		return `${this.name} just ate ${edible}.`;
	}
	poop() {
		this.stomach = []; // this.stomach.length = 0;
		return `Stomach is empty now.`;
	}
}
let me = new Person('Melqui', 21);
console.log(me.greet(), me.eat('Rice'), me.poop());


/* TASK 2 */
class Car {
	constructor(model, make) {
		this.model = model;
		this.make = make;
		this.odometer = 0;
		this.canDrive = true;
	}
	drive(distance) {
		if (this.canDrive) {
			this.odometer += Number(distance);
			return `Drove ${distance} miles. Odometer: ${this.odometer}.`;
		}
		return `I crashed at ${this.odometer} miles!`;
	}
	crash() {
		this.canDrive = false;
		return `I just crashed.`;
	}
	repair() {
		this.canDrive = true;
		return `I've been repaired.`;
	}
}
let car = new Car('2011', 'Prius');
console.log(car.drive(10), car.crash(), car.repair());


/* TASK 3 */
class Baby extends Person {
	constructor(name, age) {
		super(name, age);
	}
	play() {
		return `Baby played and said "Goo-goo ga-ga".`;
	}
}
let baby = new Baby('Elias', 0.8);
console.log(baby.greet(), baby.play());


/* TASK 4 */
class Animal {
	constructor(name, type, wild, sound) {
		this.name = (name === null ? 'Unknown' : name);
		this.type = type;
		this.tamed = !wild;
		this.needName = false;
		this.sound = sound;
		this.edibles = {
			dog: ['dog food', 'mice', 'bones', 'bone'],
			cat: ['cat food', 'fish', 'meat', 'grains'],
			fox: ['rat', 'bird', 'frog'],
		};
	}
	talk() {
		return `My name is ${this.name} and I'm ${this.type}. ${this.makeSound()}`;
	}
	makeSound() {
		// suposedly play sound :D
		return `${this.sound}!`;
	}
	eat(something) {
		let isFoodEdible = false;
		if (this.edibles.hasOwnProperty(this.type)) {
			isFoodEdible = this.edibles[this.type].includes(something);
		}
		return `${this.name} tried eating ${something}` + (isFoodEdible ? ' and liked it!' : ' but didn\'t like it.');
	}
	giveName(newName) {
		if (this.tamed && this.needName) {
			this.name = newName;
			this.needName = false;
			return `This ${this.type} is now called ${newName}.`;
		} else if (!this.tamed) {
			return `You can't give a name to this ${this.type} because it's not tamed!`;
		}
		return `This ${this.type} already has a name!`;
	}
	tame() {
		if (!this.tamed) {
			let chanceToTame = Math.random();
			if (chanceToTame > 0.5) {
				this.tamed = true;
				this.needName = true;
				return `You have successfully tamed this ${this.name} ${this.type}! Don't forget to give it a name!`;
			}
			return `You have failed to tame this ${this.name} ${this.type}.`;
		}
		return `${this.name} is already your pet!`;
	}
}
let aDog = new Animal('Kikas', 'dog', false, 'Woof-woof');
let aCat = new Animal('Whiskers', 'cat', false, 'Miaawwww');
let aFox = new Animal(null, 'fox', true, 'Chacha-chacha-chacha-chow');
console.log(aDog.talk(), aCat.talk(), aFox.talk());
console.log(aDog.eat('fish'), aCat.eat('fish'), aFox.eat('fish'));
console.log(aFox.tame(), aFox.giveName('Ember'));

/* YESTERDAY STRETCH TASK */
/* === GameObject === */
class GameObject {
	constructor(createdAt, name, dimensions) {
		this.createdAt = createdAt;
		this.name = name;
		this.dimensions = dimensions;
	}
	destroy() {
		return `${this.name} was removed from the game.`;
	}
}
/* === CharacterStats === */
class CharacterStats extends GameObject {
	constructor(createdAt, name, dimensions, healthPoints) {
		super(createdAt, name, dimensions);
		this.healthPoints = healthPoints;
	}
	takeDamage() {
		return `${this.name} took damage.`;
	}
}
/* === Humanoid (Having an appearance or character resembling that of a human.) === */
class Humanoid extends CharacterStats {
	constructor(data) {
		super(data.createdAt, data.name, data.dimensions, data.healthPoints);
		this.team = data.team;
		this.weapons = data.weapons;
		this.language = data.language;
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}.`;
	}
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */
// Test you work by un-commenting these 3 objects and the list of console logs below:
const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1,
	},
	healthPoints: 5,
	name: 'Bruce',
	team: 'Mage Guild',
	weapons: [
		'Staff of Shamalama',
	],
	language: 'Common Tongue',
});
const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2,
	},
	healthPoints: 15,
	name: 'Sir Mustachio',
	team: 'The Round Table',
	weapons: [
		'Giant Sword',
		'Shield',
	],
	language: 'Common Tongue',
});
const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 10,
	name: 'Lilith',
	team: 'Forest Kingdom',
	weapons: [
		'Bow',
		'Dagger',
	],
	language: 'Elvish',
});
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

})();