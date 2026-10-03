const  todos = []

const addButton = document.querySelector("#add-button")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const todoReset = document.querySelector("#todo-reset")

function render(){
    todoList.replaceChildren();

    todos.forEach(function(todo){
        const row = document.createElement("div")

        row.classList.add("panel-block", "todo-item",);

        row.classList.add("panel-block")
        row.textContent = todo
        todoList.append(row)
    })


}

addButton.addEventListener('click',function(e){
    e.preventDefault();
    const text = todoInput.value.trim();

    if (text === ""){
        alert("文字を入力してください。")
        return;
    }

    todos.push(text);
    render();
 
})


todoReset.addEventListener('click',function(){
    todos.length = 0;
    render();
})





