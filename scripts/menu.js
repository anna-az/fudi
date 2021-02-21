const button = document.querySelector('#menu_icon_container');
const menu = document.querySelector('.hamburger-menu');
const headerMenu = document.querySelector('.menu');
const mobileWidth = 520;

button.addEventListener('click', checkMenu);
menu.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', scrollTo);
});

function checkMenu(event) {
    event.preventDefault();
    menu.classList.contains('is-active') ? closeMenu() : showMenu();
    menu.classList.toggle('is-active');
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

function scrollTo(event) {
    event.preventDefault();
        closeMenu();
        button.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
}

(function() {
    const toggles = document.querySelectorAll(".c-hamburger");

    for (let i = toggles.length - 1; i >= 0; i--) {
      let toggle = toggles[i];
      toggleHandler(toggle);
    };
   
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        this.classList.toggle("is-active");
      });
    }
   
})();