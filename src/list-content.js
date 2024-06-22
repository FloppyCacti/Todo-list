export function listContent(){
    const container = document.querySelector('#container');

    const listContent = document.createElement('div');
    listContent.setAttribute('id', 'listContent');

    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'listContainer');

    const taskToDo = document.createElement('div');
    taskToDo.classList.add('listContentHeader');

    const taskCompleted = document.createElement('div');
    taskCompleted.classList.add('listContentHeader');

    listContainer.appendChild(taskToDo);
    listContainer.appendChild(taskCompleted);

    listContent.appendChild(listContainer); 
    container.appendChild(listContent);
}