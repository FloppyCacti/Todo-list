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
        taskToDoButton.addEventListener('click', () => { showTaskFormDialog() });

        taskToDoHeader.appendChild(taskToDoLabel);
        taskToDoHeader.appendChild(taskToDoButton);
        taskToDoContainer.appendChild(taskToDoHeader);  

        const taskCompletedContainer = document.querySelector('#taskCompletedContainer');
        const taskCompletedHeader = document.createElement('div');
        const taskCompletedLabel = document.createElement('div');
        taskCompletedLabel.classList.add('taskLabel');
        taskCompletedLabel.innerHTML = 'Completed Tasks';
        taskCompletedHeader.classList.add('listContentHeader');

        taskCompletedHeader.appendChild(taskCompletedLabel);
        taskCompletedContainer.appendChild(taskCompletedHeader);
    }

    function addTaskToContainer(){
        taskTodoArray.forEach(ele => {
            const container = document.querySelector('#taskToDoContainer');
            const taskContainer = document.createElement('div');
            taskContainer.setAttribute('id', 'taskContainer');

            const task = document.createElement('div');
            const completeButton = document.createElement('button');
            completeButton.classList.add('taskButton');
            completeButton.innerHTML = '✔';
            completeButton.style.fontSize = '30px';
            completeButton.addEventListener('click', () => {
                moveTaskToCompletedArray(ele);
            })

            task.classList.add('taskLabel');
            task.innerHTML = `${ele.title}`;

            taskContainer.appendChild(task);
            taskContainer.appendChild(completeButton);
            container.appendChild(taskContainer);
        });
    }

    function taskFactory(title, dueDate, description, priority){
        return{
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        }
    }

    function taskform(){
        const dialog = document.createElement('dialog');
        dialog.setAttribute('id', 'taskFormDialog');
        const form = document.createElement('form');

        const titleContainer = document.createElement('div');
        const titleLabel = document.createElement('label');
        titleLabel.innerHTML = 'Title: ';
        const titleInput = document.createElement('input');
        titleInput.style.width = '82%';

        titleContainer.appendChild(titleLabel);
        titleContainer.appendChild(titleInput);

        const dueDateContainer = document.createElement('div');
        const dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = 'Due Date: ';
        const dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type', 'date');

        dueDateContainer.appendChild(dueDateLabel);
        dueDateContainer.appendChild(dueDateInput);

        const selectPriorityContainer = document.createElement("div");
        const selectPriorityLabel = document.createElement('label');
        selectPriorityLabel.innerHTML = 'Priority: ';

        const lowPriority = document.createElement('input');
        lowPriority.setAttribute("type", "radio");
        lowPriority.setAttribute('name', 'priority');
        lowPriority.setAttribute('value', 'low');
        const lowPriorityLabel = document.createElement('label');
        lowPriorityLabel.innerHTML = 'Low';

        const mediumPriority = document.createElement('input');
        mediumPriority.setAttribute("type", "radio");
        mediumPriority.setAttribute('name', 'priority');
        mediumPriority.setAttribute('value', 'medium');
        const mediumPriorityLabel = document.createElement('label');
        mediumPriorityLabel.innerHTML = 'Medium';

        const highPriority = document.createElement('input');
        highPriority.setAttribute("type", "radio");
        highPriority.setAttribute('name', 'priority');
        highPriority.setAttribute('value', 'high');
        const highPriorityLabel = document.createElement('label');
        highPriorityLabel.innerHTML = 'High';

        const noPriority = document.createElement('input');
        noPriority.setAttribute("type", "radio");
        noPriority.setAttribute('name', 'priority');
        noPriority.setAttribute('value', 'no');
        const noPriorityLabel = document.createElement('label');
        noPriorityLabel.innerHTML = 'No';

        selectPriorityContainer.appendChild(selectPriorityLabel);
        selectPriorityContainer.appendChild(lowPriority);
        selectPriorityContainer.appendChild(lowPriorityLabel);
        selectPriorityContainer.appendChild(mediumPriority);
        selectPriorityContainer.appendChild(mediumPriorityLabel);
        selectPriorityContainer.appendChild(highPriority);
        selectPriorityContainer.appendChild(highPriorityLabel);
        selectPriorityContainer.appendChild(noPriority);
        selectPriorityContainer.appendChild(noPriorityLabel);

        const descriptionContainer = document.createElement('div');
        const descriptionLabel = document.createElement('label');
        descriptionLabel.innerHTML = 'Description (optional) : ';
        const descriptionInput = document.createElement('input');
        descriptionInput.style.width = '100%';
        descriptionInput.style.height = '100px';    

        descriptionContainer.appendChild(descriptionLabel);
        descriptionContainer.appendChild(descriptionInput);


        const listFormButtonContainer = document.createElement('div');
        listFormButtonContainer.setAttribute('id', 'listFormButtons');
        const addItemtoListBtn = document.createElement('button');
        addItemtoListBtn.innerHTML = 'Create';
        addItemtoListBtn.addEventListener('click', (element) => {
            element.preventDefault();
            const priorityElements = document.getElementsByName('priority');
            let priority;

            priorityElements.forEach(ele => {
                if(ele.checked){
                    priority = ele.value;
                }
            });

            taskTodoArray.push(taskFactory(titleInput.value, dueDateInput.value, descriptionInput.value, priority));
            console.log(taskTodoArray);
            addHeaderAndTask();
            form.reset();
            dialog.close();
        });
        const cancelBtn = document.createElement('button');
        cancelBtn.innerHTML = 'Cancel';
        cancelBtn.addEventListener('click', (event) => {
            const dialog = document.getElementById('taskFormDialog');
            event.preventDefault();
            form.reset();
            dialog.close();
        });

        listFormButtonContainer.appendChild(addItemtoListBtn);
        listFormButtonContainer.appendChild(cancelBtn);

        form.appendChild(titleContainer);
        form.appendChild(dueDateContainer);
        form.appendChild(selectPriorityContainer);
        form.appendChild(descriptionContainer);
        form.appendChild(listFormButtonContainer);
        dialog.appendChild(form);
        document.body.appendChild(dialog);

        return dialog;
    }

    function addHeaderAndTask(){
        const tasktodoContainer = document.querySelector('#taskToDoContainer');
        const completedTaskContainer = document.querySelector('#taskCompletedContainer');

        tasktodoContainer.innerHTML = '';
        completedTaskContainer.innerHTML = '';

        addHeaderToContainer();
        addTaskToContainer();
    }

    function showTaskFormDialog(){
        const dialog = document.getElementById('taskFormDialog');
        if (!dialog) {
            dialog = taskform();
        }
        dialog.showModal();
    }

    function moveTaskToCompletedArray(element){
        console.log('test');
        const temp = taskTodoArray[element];
        taskTodoArray.splice(element, 1);
        taskCompletedArray.push(temp);
        console.log(taskTodoArray, taskCompletedArray);
        addHeaderAndTask();
    }

    taskform();
    makelistContainer();
    addHeaderAndTask();
}