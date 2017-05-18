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
