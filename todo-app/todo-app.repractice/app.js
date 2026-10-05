let todos = [];



const addButton = document.querySelector("#addButton");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const resetButton = document.querySelector("#resetButton");




function render() {
    todoList.textContent = "";
    todos.forEach(function (todo) {
        const row = document.createElement("div");
        row.classList.add("d-flex")

        const list = document.createElement("span");
        list.textContent = todo.text;
        row.append(list);

        list.classList.toggle("is-done",todo.completed);
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "消去";
        deleteButton.setAttribute("aria-label","消去");
        deleteButton.addEventListener('click',function (){
            todos = todos.filter(function(item){
                return item.id !== todo.id;
            })
            render();
        })

        const doneButton = document.createElement("button");
        doneButton.textContent = "完了";
        doneButton.setAttribute("aria-label","完了");
        doneButton.classList.add("ms-auto");
        doneButton.addEventListener('click',function(){
            todo.completed = !todo.completed
            render();
        })

        row.append(doneButton);
        row.append(deleteButton);
        todoList.append(row);

    })
}


addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("タスクを入力してください");
        return;
    }

    todos.push({ id: Date.now(), text: todoText, completed: false });

    render();

    todoInput.value = "";
    todoInput.focus();
})



resetButton.addEventListener('click',function(){
    
    if (todos.length === 0){
        alert("消去するタスクがありません")
        return;
    }


    const confirming = confirm("リセットしますか？");
    if(confirming){
        todos = [];
        render();
    }


})





















