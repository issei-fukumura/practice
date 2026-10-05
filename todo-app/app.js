let todos = []

const addButton = document.querySelector("#add-button")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const todoReset = document.querySelector("#todo-reset button")

function render() {
    todoList.replaceChildren();
    if (todos.length === 0) {
        const emptyMessage = document.createElement("div")
        emptyMessage.classList.add("panel-block", "has-text-centered")
        emptyMessage.textContent = "登録されているタスクはありません"
        todoList.append(emptyMessage)
        return;
    }

    todos.forEach(function (todo) {
        const row = document.createElement("div")
        const label = document.createElement("span")
        const deleteButton = document.createElement("button")
        const doneButton = document.createElement("button")

        row.classList.add("panel-block", "todo-item",);

        label.textContent = todo.text
        label.classList.toggle("is-done",todo.done)

        deleteButton.classList.add("button", "is-danger", "is-outlined", "ml-1","is-small");
        deleteButton.textContent = "消去"
        deleteButton.setAttribute("aria-label", "消去")
        deleteButton.addEventListener('click', function () {
            function removeTodo() {
            todos = todos.filter(function (item) {
                return item.id !== todo.id;
            })
        }
            removeTodo();
            render();
        })

        doneButton.classList.add("button", "is-success", "is-outlined", "ml-auto", "is-small");
        doneButton.textContent = "完了"
        doneButton.setAttribute("aria-label","完了")
        doneButton.addEventListener('click',function(){
            todo.done = !todo.done;
            render();
        })

        
        todoList.append(row)
        row.append(label)
        row.append(doneButton)
        row.append(deleteButton)

        
    })


}

addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const text = todoInput.value.trim();

    if (text === "") {
        alert("文字を入力してください。")
        return;
    }

    todos.push({ id: Date.now(), text: text, done: false });
    render();

    todoInput.value = "";
    todoInput.focus();

})

todoReset.addEventListener('click', function () {
    if (todos.length === 0) {
        alert("登録されているタスクはありません")
        return;
    }

    const confirmed = confirm("登録されているタスクをリセットしますか？")
    const againConfirmed = confirm("本当にリセットしますか？")
    if (confirmed && againConfirmed) {
        todos.length = 0;
        render();
    }
})



render();

