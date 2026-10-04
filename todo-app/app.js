const todos = []

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

        row.classList.add("panel-block", "todo-item",);

        row.classList.add("panel-block")
        row.textContent = todo
        todoList.append(row)
    })


}

addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const text = todoInput.value.trim();

    if (text === "") {
        alert("文字を入力してください。")
        return;
    }

    todos.push(text);
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

