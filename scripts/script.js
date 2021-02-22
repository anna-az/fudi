import {
    button, 
    menu, 
    openModelLogIn, 
    openModelSignUp, 
    modalContainer, 
    sortBy, 
    restaurants
} from './constans.js';

import {checkMenu, scrollTo} from './menu.js';
import {chooseModal, checkClickOutside} from './modal.js';
import {sortCuisines, showCuisines} from './restaurants.js';
import {scrollBy} from './scroll.js'

button.addEventListener('click', checkMenu);

menu.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', scrollTo);
});

openModelLogIn.forEach(element => element.addEventListener('click', chooseModal));
openModelSignUp.forEach(element => element.addEventListener('click', chooseModal));

modalContainer.addEventListener('click', checkClickOutside);

sortBy.addEventListener('change', sortCuisines);
restaurants.forEach(showCuisines);

window.addEventListener('scroll', scrollBy);
