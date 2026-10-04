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
        const deleteButton = document.createElement("button")

        row.classList.add("panel-block", "todo-item",);

        function removeTodo() {
            todos = todos.filter(function (t) {
                return t.id !== todo.id;
            })
        }

        deleteButton.classList.add("delete", "ml-auto");
        deleteButton.setAttribute("aria-label", "消去")
        deleteButton.addEventListener('click', function () {
            removeTodo();
            render();
        })

        row.textContent = todo.text
        todoList.append(row)
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
    if (confirmed) {
        todos.length = 0;
        render();
    }
})



render();

