document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('taskInput').blur();
        addTask();
    }
});

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('unfinishedTasks');
        var newTask = document.createElement('li');
        newTask.className = 'task';
        newTask.innerHTML = '<span>' + taskText + '</span><button onclick="completeTask(this)">Complete</button>';
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function completeTask(button) {
    var taskItem = button.parentNode;
    taskItem.className += ' finished-task';

    var finishedTasksList = document.getElementById('finishedTasks');
    finishedTasksList.appendChild(taskItem);

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        deleteTask(this);
    };
    taskItem.appendChild(deleteButton);

    button.parentNode.removeChild(button);
}

function deleteTask(button){
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem)
};


