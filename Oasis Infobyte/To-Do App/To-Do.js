const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === '') {
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
    taskItem.addEventListener('click', toggleTaskStatus);
    pendingList.appendChild(taskItem);
    taskInput.value = '';
}

function toggleTaskStatus() {
    const task = this;
    if (task.classList.contains('completed')) {
        pendingList.appendChild(task);
        task.classList.remove('completed');
    } else {
        completedList.appendChild(task);
        task.classList.add('completed');
    }
}
