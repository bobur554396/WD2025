// Loop.

function showLine(num){ // Named function
    console.log(`Option ${num}`)
    let a = '';
    for(let i = 0; i < 30; i++){
        a += '-';
    }
    console.log(a);
}

let a = [4, 3, 7];
console.log(a);
a.push(6);
console.log(a);
console.log(a.length);
// splice
// slice


// Option 1.
showLine(1);
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}
// console.log(i); // error

// Option 2.
showLine(2);
for(let num of a){
    console.log(num);
}

// Option 3.
// Read about "callback function".
showLine(3);
a.forEach(function (el) { // anonymous function
    console.log(el);
});


// Option 3.1
showLine('3.1');
function showNumber(num){
    console.log(num);
}
// showNumber(3);
a.forEach(showNumber);