import * from './person.js'

class Student extends Person{
	constructor(name, age, klass){
		super();
		this.klass = klass
	}
	introduce(){
		return 'My name is ' + this.name + '. I am ' +
			this.age + ' years old. I am a Student. I am at Class '
			+ this.klass + '. '
	}
}