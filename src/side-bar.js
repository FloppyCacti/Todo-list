export function addSideBar(){
    const categories = [categoryFactory('Today'),categoryFactory('Upcoming')]

    function InsertSideBarToContainer(){
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
        addButton.addEventListener('click', () => {
            createCategoryForm()
        })

        sideBar.appendChild(addButton);
    }

    function categoryFactory(name){
        return{
            categoryName: name
        }
    }

    function insertCategoriesIntoSideBar(){
        const sideBar = document.querySelector('#sideBar');
        let listOfCategories = document.querySelector('#categoryContainer');
        if (listOfCategories) {
            listOfCategories.remove();
        }
    
        // Create a new category container
        listOfCategories = document.createElement('div');
        listOfCategories.setAttribute('id', 'categoryContainer');
    

        categories.forEach(element => {
            let category = document.createElement('div');
            category.setAttribute('id', 'categoryButtonContainer');

            let editCategoryButton = document.createElement('button');
            let deleteCategoryButton = document.createElement('button');
            let categoryElement = document.createElement('button');

            categoryElement.classList.add('sidebarButtons');
            categoryElement.setAttribute('id', 'categoryElement');
            editCategoryButton.classList.add('sidebarButtons');
            editCategoryButton.innerHTML = '📝';
            deleteCategoryButton.classList.add('sidebarButtons');
            deleteCategoryButton.innerHTML = '🗑';

            categoryElement.innerHTML = `${element.categoryName}`;

            category.appendChild(categoryElement);
            category.appendChild(editCategoryButton);
            category.appendChild(deleteCategoryButton);
            listOfCategories.appendChild(category);
        });

        sideBar.appendChild(listOfCategories);
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
        container.addEventListener('keydown', () => {
            if(event.key === 'Enter'){
                event.preventDefault();
            }
        })
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
                insertCategoriesIntoSideBar();
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

    InsertSideBarToContainer();
    buttonToAddCategory();
    insertCategoriesIntoSideBar();
}