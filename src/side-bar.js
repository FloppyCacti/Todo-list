export function sideBar(){
    const container = document.querySelector('#container');

    const sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBar');

    container.appendChild(sideBar);
}

export function buttonToAddCatagory(){
    const sideBar = document.querySelector('#sideBar');

    const addButton = document.createElement('button');
    addButton.innerHTML = 'Add Catagory';
    addButton.style.height = '30px';
    addButton.style.width = '100%';
    sideBar.appendChild(addButton);
}

function catagoryFactory(name){
    return{
        catagoryName: name
    }
}