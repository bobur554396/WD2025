// - [ ] Loops

let a = [4, 2, 3, 6];
console.log(a);

// Option 1.
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }
// console.log(i);

// Option 2.
// a.forEach(function (value){ // anonymous function
//     console.log(value);
// });

// What is callback function?

// Option 3.
function showNumber(num){ // Named function
    console.log(num);
}
// showNumber(3);
a.forEach(showNumber); // pass the function as an argument


