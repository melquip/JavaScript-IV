// CODE here for your Lambda Classes
/*

#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

*/
class Person {
	constructor(data) {
		this.name = data.name;
		this.age = data.age;
		this.location = data.location;
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}
/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

*/
class Instructor extends Person {
	constructor(data) {
		super(data);
		this.specialty = data.specialty;
		this.favLanguage = data.favLanguage;
		this.catchPhrase = data.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
		return `${student.name} receives a perfect score on ${subject}`;
	}
	randGrade(student) { // stretch
		student.grade = Number(student.grade);
		if(student.grade >= 70) {
			console.log(`${student.name} just graduated!`);
			return `${student.name} just graduated!`;
		}
		student.grade = Number(student.grade) + Number(((Math.random() * 10) - 5).toFixed(0));
		console.log(`${student.name} has a ${student.grade}% grade`);
		return `${student.name} has a ${student.grade}% grade`;
	}
}
let john = new Instructor({
	name: 'John', location: 'US', age: 30,
	favLanguage: 'JavaScript', specialty: 'Front-end', catchPhrase: `Don't forget the homies`
});
let derek = new Instructor({
	name: 'Derek', location: 'UK', age: 32,
	favLanguage: 'CSS', specialty: 'Front-end', catchPhrase: `Easypeasy`
});
let alice = new Instructor({
	name: 'Alice', location: 'France', age: 29,
	favLanguage: 'JavaScript', specialty: 'Back-end', catchPhrase: `Trust the process`
});
/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

*/
class Student extends Person {
	constructor(data) {
		super(data);
		this.className = data.className;
		this.favSubjects = data.favSubjects;
		this.previousBackground = data.previousBackground;
		
		this.grade = (Math.random() * 100).toFixed(0); // stretch
	}
	listSubjects() {
		console.log(`${this.name} favourite subjects: ${this.favSubjects}`);
		return `${this.name} favourite subjects: ${this.favSubjects}`;
	}
	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}
let melqui = new Student({
	name: 'Melquisedeque', location: 'Portugal', age: 21,
	className: 'JS-I', 
	favSubjects: ['HTML', 'CSS', 'Javascript'], 
	previousBackground: `Worked`
});
let aaron = new Student({
	name: 'Aaron', location: 'US', age: 32,
	className: 'JS-II', 
	favSubjects: ['HTML', 'CSS', 'Javascript'], 
	previousBackground: `Work`
});
let victor = new Student({
	name: 'Victor', location: 'Nigeria', age: 29,
	className: 'JS-III', 
	favSubjects: ['HTML', 'CSS', 'Javascript'], 
	previousBackground: `Electrical Engineering`
});
/*
#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

*/
class ProjectManager extends Instructor {
	constructor(data) {
		super(data);
		this.gradClassName = data.gradClassName;
		this.favInstructor = data.favInstructor;
	}
	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
		return `${this.name} favourite subjects: ${this.favSubjects}`;
	}
	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}
let jose = new ProjectManager({
	name: 'Jose', location: 'Nigeria', age: 21,
	gradClassName: 'JS-I', 
	favInstructor: 'Gabe', 
});
let eliot = new ProjectManager({
	name: 'Eliot', location: 'Spain', age: 32,
	gradClassName: 'JS-II', 
	favInstructor: 'Gabe', 
});
let emily = new ProjectManager({
	name: 'Emily', location: 'Nigeria', age: 29,
	gradClassName: 'JS-III', 
	favInstructor: 'Gabe', 
});
/*
#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
  * 
  * 
*/

john.demo('Javascript Fundamentals');
derek.grade(aaron, 'Javascript Fundamentals');
alice.randGrade(victor);

melqui.listSubjects();
aaron.PRAssignment('Javascript Fundamentals');
victor.sprintChallenge('Javascript Fundamentals');

jose.standUp('#webeu3');
eliot.debugsCode(melqui, 'Javascript Fundamentals');
emily.debugsCode(aaron, 'Javascript Fundamentals');