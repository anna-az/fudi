import {footer, numbersContainer} from './constans.js';
import {calcNumbers} from './numbers.js';

export function scrollBy() {
    let isCalculated = false;
    const dinamicNumber = document.querySelectorAll('.dinamic_number');
    const alreadyNumbersAdded = dinamicNumber[0].textContent;
    const addBackground = 100;
    const backgroundAdded = (footer.classList.value === 'background') ? true : false;

    if (pageYOffset > addBackground && !backgroundAdded) {
        footer.classList.add('background');
    } else if (pageYOffset <= addBackground && backgroundAdded) {
        footer.classList.remove('background');
    }

    const numbersPosition = numbersContainer.getBoundingClientRect().y;
    const scrollToElem = numbersPosition + 100;
    const windowHeight = document.documentElement.clientHeight;
    
    if(windowHeight > scrollToElem) {        
        if(alreadyNumbersAdded) return;
        calcNumbers(1, 23567);
        calcNumbers(2, 431729);
        calcNumbers(3, 892173);
        calcNumbers(4, 56581);
        calcNumbers(5, 3182);
   } 
}