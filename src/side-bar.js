function addSideBar(){
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
        addButton.style.height = '30px';
        addButton.style.width = '100%';
        sideBar.appendChild(addButton);
    }

    function categoryFactory(name){
        return{
            categoryName: name
        }
    }

    function insertCategoriesIntoSideBar(){
        const container = document.querySelector('#container');
        const categoryList = docuemnt.createElement('li');

        categories.forEach(element => {
            let categoryElement = document.createElement('ul');
            categoryElement.innerHTML = `${element.categoryName}`;
            categoryList.appendChild(categoryElement);
        });

        container.appendChild(categoryList);
    }

    sideBar();
    buttonToAddCategory();
    insertCategoriesIntoSideBar();
}