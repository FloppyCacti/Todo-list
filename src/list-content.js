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

    function taskFactory(title, description, dueDate, priority){
        return{
            taskTitle: title,
            taskDescription: description,
            taskDueDate: dueDate,
            taskPriority: priority
        }
    }

    function taskform(){
        const dialog = document.createElement('dialog');
        const form = document.createElement('form');

        const titleContainer = document.createElement('div');
        const titleLabel = document.createElement('label');
        titleLabel.innerHTML = 'Title: ';
        const titleInput = document.createElement('input');

        titleContainer.appendChild(titleLabel);
        titleContainer.appendChild(titleInput);

        const dueDateContainer = document.createElement('div');
        const dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = 'Due Date: ';
        const dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type', 'date');

        dueDateContainer.appendChild(dueDateLabel);
        dueDateContainer.appendChild(dueDateInput);

        const descriptionContainer = document.createElement('div');
        const descriptionLabel = document.createElement('label');
        descriptionLabel.innerHTML = 'Description: '
        const descriptionInput = document.createElement('input')

        descriptionContainer.appendChild(descriptionLabel);
        descriptionContainer.appendChild(descriptionInput);

        dialog.appendChild(form);
        form.appendChild(titleContainer);
        form.appendChild(dueDateContainer);
        form.appendChild(descriptionContainer);

        dialog.close();
        dialog.showModal();
    }

    function addHeaderAndTask(){
        addHeaderToContainer();
    }

    taskform();
    makelistContainer();
    addHeaderAndTask();
}