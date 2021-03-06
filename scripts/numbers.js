export function calcNumbers(child, number) {
    const numberContainer = document.querySelector(`.numbers_item:nth-child(${child})`);
    const dynamicNumber = numberContainer.querySelector('.dynamic_number');

    let shownNumber = 0;
    let addedNumber = Number((number / 100).toFixed());

    let interval = setInterval(function() {
        if(shownNumber >= number) {
            clearInterval(interval);
            dynamicNumber.innerText = number.toLocaleString('en');

            return;                    
        } 

        dynamicNumber.innerText = shownNumber;
        shownNumber+=addedNumber;  
    }, 20);
}