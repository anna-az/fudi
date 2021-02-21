const footer = document.querySelector('header');
const numbersContainer = document.querySelector('.numbers');
let isCalculated = false;
let backgroundAdded = false;

window.addEventListener('scroll', function() {
    const addBackground = 100;

    if (pageYOffset > addBackground && !backgroundAdded) {
        footer.classList.add('background');
        backgroundAdded = true;
    } else if (pageYOffset <= addBackground && backgroundAdded) {
        footer.classList.remove('background');
        backgroundAdded = false;
    }

    const numbersPosition = numbersContainer.getBoundingClientRect().y;
    const scrollToElem = numbersPosition + 100;
    const windowHeight = document.documentElement.clientHeight;
    if(windowHeight > scrollToElem) {
        if(isCalculated) return;
        isCalculated = true;
        calcNumbers(1, 23567);
        calcNumbers(2, 431729);
        calcNumbers(3, 892173);
        calcNumbers(4, 56581);
        calcNumbers(5, 3182);
   } 
});