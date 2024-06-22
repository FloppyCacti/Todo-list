export function listContent(){
    const taskTodoArray = [];
    const taskCompletedArray = [];

    function makelistContainer(){
        const container = document.querySelector('#container');

        const listContent = document.createElement('div');
        listContent.setAttribute('id', 'listContent');

        const listContainer = document.createElement('div');
        listContainer.setAttribute('id', 'listContainer');

        const taskCompletedContainer = document.createElement('div');
        taskCompletedContainer.setAttribute('id', 'taskCompletedContainer');

        const tasktodoContainer = document.createElement('div');
        tasktodoContainer.setAttribute('id', 'taskToDoContainer');

        listContainer.appendChild(tasktodoContainer);
        listContainer.appendChild(taskCompletedContainer);
        listContent.appendChild(listContainer); 
        container.appendChild(listContent);
    }

    function addHeaderToContainer(){
        const taskToDoContainer = document.querySelector('#taskToDoContainer');
        taskToDoContainer.setAttribute('id', 'taskToDoContainer');
        const taskToDoHeader   = document.createElement('div');
        const taskToDoLabel = document.createElement('div');
        taskToDoLabel.classList.add('taskLabel');
        taskToDoLabel.innerHTML = 'Task To Do';

        const taskToDoButton = document.createElement('button');
        taskToDoButton.classList.add('taskButton');
        taskToDoButton.innerHTML = '➕';
        taskToDoHeader.classList.add('listContentHeader');
        taskToDoButton.addEventListener('click', () => {
                console.log('add');
        });

        taskToDoHeader.appendChild(taskToDoLabel);
        taskToDoHeader.appendChild(taskToDoButton);
        taskToDoContainer.appendChild(taskToDoHeader);  

        const taskCompletedContainer = document.querySelector('#taskCompletedContainer');
        const taskCompletedHeader = document.createElement('div');
        const taskCompletedLable = document.createElement('div');
        taskCompletedLable.classList.add('taskLabel');
        taskCompletedLable.innerHTML = 'Completed Tasks';
        taskCompletedHeader.classList.add('listContentHeader');

        taskCompletedHeader.appendChild(taskCompletedLable);
        taskCompletedContainer.appendChild(taskCompletedHeader);
    }

    function addHeaderAndTask(){
        addHeaderToContainer();
    }

    makelistContainer();
    addHeaderAndTask();
}