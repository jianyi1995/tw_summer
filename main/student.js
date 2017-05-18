<<<<<<< HEAD
let Person = require('./person')
=======
const Person = require('./person.js')
>>>>>>> f16b312c1c48cd912adb3c5e6c9a9fda82fbfe8f
class Student extends Person{
	constructor(name, age, klass){
		super(name, age);
		this.klass = klass
	}
	introduce(){
		return 'My name is ' + this.name + '. I am ' +
			this.age + ' years old. I am a Student. I am at Class '
<<<<<<< HEAD
			+ this.klass + '.'
	}
}
module.exports = Student
=======
			+ this.klass + '. '
	}
}

module.exports = Student
>>>>>>> f16b312c1c48cd912adb3c5e6c9a9fda82fbfe8f
