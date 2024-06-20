function sideBar(){
    const container = document.querySelector('#content');

    const sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBar');

    container.appendChild(sideBar);
}

export default sideBar;