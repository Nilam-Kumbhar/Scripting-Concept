// Basic TypeScript Concepts Demo
// Single file project

// 1. Variable declaration with types
let studentNames: string = "Nilam";
let age: number = 20;
let isStudent: boolean = true;

console.log("Name:", studentNames);
console.log("Age:", age);
console.log("Is Student:", isStudent);


// 2. If-Else Example

if (age >= 18) {
    console.log("Student is eligible to vote");
} else {
    console.log("Student is NOT eligible to vote");
}


// 3. For Loop Example

console.log("\nFor Loop Example:");

for (let i: number = 1; i <= 5; i++) {
    console.log("Number:", i);
}


// 4. While Loop Example

console.log("\nWhile Loop Example:");

let count: number = 1;

while (count <= 3) {
    console.log("Count:", count);
    count++;
}


// 5. Function Example

function add(a: number, b: number): number {
    return a + b;
}

let results: number = add(10, 5);
console.log("\nAddition Result:", results);


// 6. Array Example

let marks: number[] = [80, 75, 90, 85];

console.log("\nMarks:");

for (let mark of marks) {
    console.log(mark);
}


// 7. Interface Example

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "snehal",
    age: 22
};

console.log("\nInterface Example:");
console.log(person.name, person.age);


// 8. Function with If-Else

function checkEvenOdd(num: number): void {

    if (num % 2 == 0) {
        console.log(num, "is Even");
    } else {
        console.log(num, "is Odd");
    }

}

checkEvenOdd(10);
checkEvenOdd(7);
