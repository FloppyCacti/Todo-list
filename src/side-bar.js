export function addSideBar(){
    const categories = [categoryFactory('Today'),categoryFactory('Upcoming')]

    function sideBar(){
        const container = document.querySelector('#container');

        const sideBar = document.createElement('div');
        sideBar.setAttribute('id', 'sideBar');

        container.appendChild(sideBar);
    }

    function buttonToAddCategory(){
        const sideBar = document.querySelector('#sideBar');

        const addButton = document.createElement('button');
        addButton.innerHTML = 'Add Category';
        addButton.classList.add('sidebarButtons')
        sideBar.appendChild(addButton);
    }

    function categoryFactory(name){
        return{
            categoryName: name
        }
    }

    function insertCategoriesIntoSideBar(){
        const sideBar = document.querySelector('#sideBar');
        const listOfCatagories = document.createElement('div');
        listOfCatagories.setAttribute('id', 'categoryContainer');

        categories.forEach(element => {
            let categoryElement = document.createElement('button');
            categoryElement.classList.add('sidebarButtons')
            categoryElement.innerHTML = `${element.categoryName}`;
            listOfCatagories.appendChild(categoryElement);
        });

        sideBar.appendChild(listOfCatagories);
    }

    function createCategoryForm(){
        const container = document.createElement('dialog');
        const form = document.createElement('form');
        const categoryName = document.createElement('div');
        const categoryNameLabel = document.createElement('label');
        const categoryNameInput = document.createElement('input');
        const buttons = document.createElement('div');
        const cancelButton = document.createElement('button');
        const submitButton = document.createElement('button');
        
        function showError(){
            const showError = document.createElement('div');
            showError.innerHTML = 'input cannot be empty'
            showError.style.color = 'red';

            categoryName.appendChild(showError);
        }
        
        container.setAttribute('id', 'sideBarDialog');
        categoryNameLabel.innerHTML = 'Name: '
        cancelButton.innerHTML = 'Cancel';
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            form.reset();
            container.close();
        })
        submitButton.innerHTML = 'Submit';
        submitButton.addEventListener('click', (event) =>{
            event.preventDefault();
            if(categoryNameInput.value == ''){
                showError();
            }else{
                addCategoryToArray(categoryNameInput.value);
                container.close();
                console.log(categories);
            }
        })

        document.querySelector('body').appendChild(container);
        container.appendChild(form);
        categoryName.appendChild(categoryNameLabel);
        categoryName.appendChild(categoryNameInput);
        buttons.appendChild(cancelButton);
        buttons.appendChild(submitButton);
        form.appendChild(categoryName);
        form.appendChild(buttons);

        container.showModal();
    }

    function addCategoryToArray(name){
        categories.push(categoryFactory(name));
    }

    sideBar();
    buttonToAddCategory();
    insertCategoriesIntoSideBar();
    createCategoryForm();
}