const button = document.querySelector('#menu_icon_container');
const menu = document.querySelector('.hamburger-menu');
const headerMenu = document.querySelector('.menu');
const mobileWidth = 520;

button.addEventListener('click', checkMenu);

function checkMenu(event) {
    event.preventDefault();
    menu.classList.contains('active-menu') ? closeMenu() : showMenu();
    menu.classList.toggle('active-menu');
}

function showMenu() {
    const clientWidth = document.documentElement.clientWidth;
    const headerMenuWidth = (clientWidth > mobileWidth) ? headerMenu.getBoundingClientRect().x : 1;

    menu.style.width = '1px';
    menu.style.display = 'block';
    let i = 0;
    
    let interval = setInterval(function() {
        const menuWidth =  menu.getBoundingClientRect().x;
        if(headerMenuWidth > menuWidth) {
            clearInterval(interval);
            menu.style = "display: block;";           
            if(headerMenuWidth === 1) menu.style.width = "100%";
        } else {
            menu.style.width = i+'px';
            i+=5; 
        }
    }, 1);
}

function closeMenu() {  
    let i = menu.offsetWidth;

    let interval = setInterval(function() {
        if(i < 6) {
            clearInterval(interval);
            menu.style = "display: none";
        } else {
            menu.style.width = i+'px';
            i-=5; 
        }
    }, 5);
}