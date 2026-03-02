// TypeScript Basic Concepts Example


let studentName: string = "Nilam";
let studentAge: number = 20;

console.log("Name:", studentName);
console.log("Age:", studentAge);


//  Function
function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 5);
console.log("Addition:", result);



interface Person {
    name: string;
    age: number;
}


// 4. Class
class Student implements Person {

    // properties
    name: string;
    age: number;
    course: string;

    // constructor
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // method (function inside class)
    display(): void {
        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);
        console.log("Course:", this.course);
    }
}


// 5. Object creation
let student1 = new Student("Nilam", 20, "BCA");

student1.display();


// 6. Array
let numbers: number[] = [10, 20, 30];

console.log("Array values:");
for (let num of numbers) {
    console.log(num);
}






