module.exports = function(){
	let Person = require('./person.js')
	let Student = require('./student.js')
	var s = new Student('Tom', 21, 2)
	console.log(s.introduce())
}
