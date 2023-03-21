

let listTodo = [];
let input = document.getElementById('input');
let taskList = document.getElementById('ulEl');
let time = document.getElementById('time');

function addTodo() {
    if (input.value !== "") {
        const todo = {
            input: input.value,
            time: time.value,
        };
        listTodo.push(todo);
        input.value = "";
        time.value = "";
        render();
    }
}

function deleteTodoItem(index) {
    listTodo.splice(index, 1);
    render();
}

function render() {
    taskList.innerHTML = "";
    for (let i = 0; i < listTodo.length; i++) {
        const div2 = document.createElement('div');
        div2.classList.add('div2');
        const li = document.createElement('p');
        const span = document.createElement('p');
        span.classList.add('pp');
        const txtLi = document.createTextNode(listTodo[i].input);
        const txtTime = document.createTextNode(listTodo[i].time);
        span.appendChild(txtTime);
        li.appendChild(txtLi);
        div2.appendChild(li);
        div2.appendChild(span);
        taskList.appendChild(div2);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger');

        deleteBtn.onclick = function () {
            deleteTodoItem(i);
        };

        div2.appendChild(deleteBtn);

        taskList.appendChild(div2);
    }
}




