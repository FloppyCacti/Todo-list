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

    sideBar();
    buttonToAddCategory();
    insertCategoriesIntoSideBar();
}