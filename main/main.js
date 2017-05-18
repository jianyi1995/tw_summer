module.exports = function main() {
	const Person = require('./person.js')
	const Student = require('./student.js')
	var p = new Person('Tom', 21)
	console.log(p.introduce())
	var s = new Student('Tom', 21, 2)
	console.log(s.introduce())
};