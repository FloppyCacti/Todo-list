export function listContent(){
    const container = document.querySelector('#container');

    const listContent = document.createElement('div');
    listContent.setAttribute('id', 'listContent');

    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'listContainer');

    const taskToDo = document.createElement('div');
    const taskToDoLabel = document.createElement('div');
    taskToDoLabel.classList.add('taskLabel');
    taskToDoLabel.innerHTML = 'Task To Do';
    const taskToDoButton = document.createElement('button');
    taskToDoButton.classList.add('taskButton');
    taskToDoButton.innerHTML = '➕';
    taskToDo.classList.add('listContentHeader');

    taskToDo.appendChild(taskToDoLabel);
    taskToDo.appendChild(taskToDoButton);

    const taskCompleted = document.createElement('div');
    const taskCompletedLable = document.createElement('div');
    taskCompletedLable.classList.add('taskLabel');
    taskCompletedLable.innerHTML = 'Completed Tasks';
    taskCompleted.classList.add('listContentHeader');

    taskCompleted.appendChild(taskCompletedLable);

    listContainer.appendChild(taskToDo);
    listContainer.appendChild(taskCompleted);

    listContent.appendChild(listContainer); 
    container.appendChild(listContent);
}