//complete this code
class Person {
	constructor(name: string, age: number)
	this.name = name;
	this.age = age;
}
get name(){
	this.name = name
}
set name(name: string){
	this._name = name
}
get age(){
	this.age = age;
}
set age(age: number){
	this._age = age;
}

class Student extends Person {
	study(){
	console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
