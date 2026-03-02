// Basic TypeScript Concepts Demo
// Single file project
// 1. Variable declaration with types
var studentNames = "Nilam";
var age = 20;
var isStudent = true;
console.log("Name:", studentNames);
console.log("Age:", age);
console.log("Is Student:", isStudent);
// 2. If-Else Example
if (age >= 18) {
    console.log("Student is eligible to vote");
}
else {
    console.log("Student is NOT eligible to vote");
}
// 3. For Loop Example
console.log("\nFor Loop Example:");
for (var i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
// 4. While Loop Example
console.log("\nWhile Loop Example:");
var count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}
// 5. Function Example
function add(a, b) {
    return a + b;
}
var results = add(10, 5);
console.log("\nAddition Result:", results);
// 6. Array Example
var marks = [80, 75, 90, 85];
console.log("\nMarks:");
for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
    var mark = marks_1[_i];
    console.log(mark);
}
var person = {
    name: "snehal",
    age: 22
};
console.log("\nInterface Example:");
console.log(person.name, person.age);
// 8. Function with If-Else
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log(num, "is Even");
    }
    else {
        console.log(num, "is Odd");
    }
}
checkEvenOdd(10);
checkEvenOdd(7);
