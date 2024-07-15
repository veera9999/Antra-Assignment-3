![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 3

===================================================================================

## What is Prototype and What is Prototype chain ?

**_Prototype:_**

🎯 In JavaScript, every object has an internal property called _Prototype_ . This property is a reference to another object, which is called the object's _prototype_ . _Prototype_ in JavaScript is a means of implementing _Inheritance_ . It is a mechanism where objects can inherit properties and methods from other objects. Every JavaScript object has a _prototype_ (except for the base object, Object.prototype, which is the top of the prototype chain).

**_Prototype Chain:_**

🎯 The _prototype chain_ is the series of links between objects and their _prototypes_ . It's how JavaScript implements inheritance. When you try to access a property or method on an object, JavaScript will:

- Look for the property on the object itself
- If not found, it looks on the object's _prototype_
- If still not found, it looks on the prototype's _prototype_
- This continues until it either finds the property or reaches an object with a null _prototype_ (usually Object.prototype)

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
}

function Student(name, age, grade, sport){
    Person.call(name, age){
        this.name = name;
        this.age = age;
        this.sport = sport;
    }
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor =  Student;

Student.prototype.introduce = function(){
    console.log(`Hi, I am ${this.name}, a garde ${this.grade} student.`);
}


Student.prototype.play = ()=>{
    console.log(`${this.name} plays ${this.sport}`);
}


function Teacher (name, age, subject){
   Person.call(name, age)
   {
    this.name = name;
    this.age = age;
   }
   this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Override the introduce method in Teacher
Teacher.prototype.introduce = function() {
  console.log(`Hello, I'm ${this.name}, a ${this.subject} teacher.`);
};


Teacher.prototype.teach = () => {
  console.log(`Hello, I am ${this.name}, I teach ${this.subject} for you.`)
}

const student1 = new Student('Alice', 20, '10th Grade');
const teacher1 = new Teacher('Bob', 35, 'Mathematics');

// Methods from Person
student1.greet(); // Output: Hello, my name is Alice and I am 20 years old.
teacher1.greet(); // Output: Hello, my name is Bob and I am 35 years old.

// Methods from Student and Teacher
student1.study(); // Output: Alice is studying in grade 10th Grade.
teacher1.teach(); // Output: Bob is teaching Mathematics.



```
