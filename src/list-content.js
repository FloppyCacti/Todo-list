export function listContent(){
    const container = document.querySelector('#container');

    const listContent = document.createElement('div');
    listContent.setAttribute('id', 'listContent');

    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'listContainer');

    const taskToDoHeader   = document.createElement('div');
    const taskToDoLabel = document.createElement('div');
    taskToDoLabel.classList.add('taskLabel');
    taskToDoLabel.innerHTML = 'Task To Do';
    const taskToDoButton = document.createElement('button');
    taskToDoButton.classList.add('taskButton');
    taskToDoButton.innerHTML = '➕';
    taskToDoHeader.classList.add('listContentHeader');

    taskToDoHeader.appendChild(taskToDoLabel);
    taskToDoHeader.appendChild(taskToDoButton);

    const taskCompletedHeader = document.createElement('div');
    const taskCompletedLable = document.createElement('div');
    taskCompletedLable.classList.add('taskLabel');
    taskCompletedLable.innerHTML = 'Completed Tasks';
    taskCompletedHeader.classList.add('listContentHeader');

    taskCompletedHeader.appendChild(taskCompletedLable);

    listContainer.appendChild(taskToDoHeader);
    listContainer.appendChild(taskCompletedHeader);

    listContent.appendChild(listContainer); 
    container.appendChild(listContent);
}