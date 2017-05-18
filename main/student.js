var Person = {
	createNew: function(name, age){
		var person = {}
		person.name = name
		person.age = age
		person.introduce = function()
		{
			return'My name is ' + this.name + '. I am ' +
			this.age + ' years old.'
		}
		return person
	}
}



var Student = {
	createNew: function(name, age, klass){
		var student = Person.createNew(name, age)
		student.klass = klass
		student.introduce = function()
		{
			return 'My name is ' + this.name + '. I am ' +
			this.age + ' years old. I am a Student. I am at Class '
			+ this.klass + '. '
		}
		return student
	}
}

var s = Student.createNew('Tom', 21, 2)
console.log(s.introduce())