// 1
// Створіть клас Person, що містить властивості
// firstName та lastName.
// Додайте метод getFullName(), який повертає
// повне ім'я у форматі "firstName lastName".

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `lastname ${this.firstName}
        firstname ${this.lastName}`
    }
}
const person1 = new Person('John', 'Doe');
console.log(person1.getFullName()); // John Doe

// 2
// Створіть клас Rectangle, що містить властивості
// width та height.
// Додайте метод getArea(), який повертає площу прямокутника.

// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
}
const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea()); // 50


const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];



const findBestStudents =  (arrayOfSudents, score) => {
    let bestStudents = []
   for (const student of arrayOfSudents){
    console.log(student.score)
    if (student.score >= score ) {
        console.log("знайшли")
        bestStudents.push(student)
    }
   }
   console.log(bestStudents)

}

findBestStudents(students, 80)