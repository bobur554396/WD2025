let num: number;
num = 2;
// num = 'hello'; // error

/*
C++
int sum(int a, int b){
    return a + b;
}

Python
def sum(a: int, b: int) -> int:
    return a + b

*/

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));
// console.log(sum('2', 3));

let student = {
    name: "Student 1",
    age: 20
};
// console.log(student.gpa);


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    gpa: number;

    constructor(name: string, age: number, gpa: number){
        super(name, age);
        this.gpa = gpa;
    }
}
