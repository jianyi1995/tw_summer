module.exports = function main() {
	function Person(name, age)
	{
		this.name = name
		this.age = age
		this.introduce = function(){
			return 'My name is ' + this.name + '. I am ' +
			this.age + ' years old.'
		}
	}
	function Student(name, age, klass)
	{
		this.tmp = Person
		this.tmp(name, age)
		this.klass = klass
		this.introduce = function(){
			return 'My name is ' + this.name + '. I am ' +
			this.age + ' years old. I am a Student. I am at Class '
			+ this.klass + '. '
		}
	}

	var tmp = new Person('Tom', 21)
	tmp.introduce()
	var b = new Student('Tom', 21, 2)
	b.introduce()

};