export function sideBar(){
    const container = document.querySelector('#container');

    const sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBar');

    container.appendChild(sideBar);
}