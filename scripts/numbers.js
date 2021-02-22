export function calcNumbers(child, number) {
    const numberContainer = document.querySelector(`.numbers_item:nth-child(${child})`);
    const p = numberContainer.querySelector('.dinamic_number');

    let shownNumber = 0;
    let addedNumber = Number((number / 100).toFixed());

    let interval = setInterval(function() {
        if(shownNumber >= number) {
            clearInterval(interval);
            p.innerText = number.toLocaleString('en');

            return;                    
        } 

        p.innerText = shownNumber;
        shownNumber+=addedNumber;  
    }, 20);
}