// TypeScript Basic Concepts Example
var studentName = "Nilam";
var studentAge = 20;
console.log("Name:", studentName);
console.log("Age:", studentAge);
//  Function
function add(a, b) {
    return a + b;
}
var result = add(10, 5);
console.log("Addition:", result);
// 4. Class
var Student = /** @class */ (function () {
    // constructor
    function Student(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    // method (function inside class)
    Student.prototype.display = function () {
        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);
        console.log("Course:", this.course);
    };
    return Student;
}());
// 5. Object creation
var student1 = new Student("Nilam", 20, "BCA");
student1.display();
// 6. Array
var numbers = [10, 20, 30];
console.log("Array values:");
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
