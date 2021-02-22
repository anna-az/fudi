import {sortedArray, container} from './constans.js';

export function sortCuisines(event) {
    switch (event.target.value) {
        case 'relevance':
            sortedArray.sort(sortArray('relevance'));
            break;
        case 'desc':
            sortedArray.reverse(sortArray('recipes'));
            break;
        case 'asc':
            sortedArray.sort(sortArray('recipes'));
            break;
    }

    function sortArray(property) {
        return function(a, b) {
            if (a[property] > b[property]) {
                return 1;
            }
            if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        }
    }

    container.innerHTML = "";
    sortedArray.forEach(showCuisines);
}

export function showCuisines(item) {
    const html = `<img src="${item.img}" alt="${item.cuisine}">
                    <a href="#">
                    <div class="cuisine_text">
                        <p class="recipes">${item.recipes} Recipes</p>
                        <p class="cuisine">${item.cuisine}</p>
                    </div></a>`;

    const divNode = document.createElement('div');
    divNode.classList.add('cuisine_item');
    divNode.innerHTML = html;
    container.appendChild(divNode);
}