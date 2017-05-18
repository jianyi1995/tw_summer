<<<<<<< HEAD
module.exports = function(){
	let Person = require('./person.js')
	let Student = require('./student.js')
	var s = new Student('Tom', 21, 2)
	console.log(s.introduce())
}
=======
module.exports = function main() {
	const Person = require('./person.js')
	const Student = require('./student.js')
	var p = new Person('Tom', 21)
	console.log(p.introduce())
	var s = new Student('Tom', 21, 2)
	console.log(s.introduce())
};
>>>>>>> f16b312c1c48cd912adb3c5e6c9a9fda82fbfe8f
