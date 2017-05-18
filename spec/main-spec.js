<<<<<<< HEAD
const Person = require('../main/person');
const Student = require('../main/student');

describe('main()', () => {

    it('should introduce person', () => {
      let person = new Person('Tom', 21);
      expect(person.introduce()).toBe("My name is Tom. I am 21 years old.");
    });

    it('should introduce student', () => {
      let student = new Student('Tom', 21, 2);
      expect(student.introduce()).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
    });
});
=======
const main = require('../main/main');
const fs = require('fs')

describe('validate the file exist', () => {

    it('should get HELLOWORLD.md exist in root folder like readme.md', () => {
        fs.exists('./HELLOWORLD.md', (isExist) => {
            expect(isExist).toBe(true);
        })
    });
});
>>>>>>> f16b312c1c48cd912adb3c5e6c9a9fda82fbfe8f
