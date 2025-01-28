let display = document.getElementById("display");
let btn = document.getElementById("btn");
let todos = document.getElementById("todos");

btn.addEventListener("click", function () {
    let new_task = display.value;
    if(new_task) {
        let item_li = document.createElement('li');
        item_li.innerHTML = new_task;
        todos.appendChild(item_li);        
        display.value = '';
    } else {
        alert("Please, enter the task description!");
    }
});