function sum(a, b){
    return a + b;
}

console.log(sum(2, 4));


let student = {
    id: "25B123",
    'age': 20,
    gpa: 3.7,
    showInfo: function () {
        console.log(`id: ${this.id}, age: ${this.age}`)
    }
};

// console.log(student.gpa);
// student.showInfo();

let student_str = JSON.stringify(student);
let student2 = JSON.parse(student_str);
console.log(typeof student_str);
console.log(typeof student2);

