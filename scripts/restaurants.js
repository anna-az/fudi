// const restaurants = [
//     { cuisine: 'Italian', recipes: 327, img: '/images/restaurants/italian.png', relevance: 1 },
//     { cuisine: 'Indian', recipes: 856, img: '/images/restaurants/indian.png', relevance: 2 },
//     { cuisine: 'French', recipes: 27, img: '/images/restaurants/french.png', relevance: 3 },
//     { cuisine: 'Steakhouse', recipes: 174, img: '/images/restaurants/steakhouse.png', relevance: 4 },
//     { cuisine: 'Seafood', recipes: 731, img: '/images/restaurants/seafood.png', relevance: 5 },
//     { cuisine: 'Sushi', recipes: 237, img: '/images/restaurants/sushi.png', relevance: 6 },
//     { cuisine: 'Mexican', recipes: 529, img: '/images/restaurants/mexican.png', relevance: 7 },
//     { cuisine: 'Chinese', recipes: 145, img: '/images/restaurants/chinese.png', relevance: 8 },
//     { cuisine: 'Pizza', recipes: 327, img: '/images/restaurants/pizza.png', relevance: 9 },
//     { cuisine: 'American', recipes: 1437, img: '/images/restaurants/american.png', relevance: 10 }
// ];

// const sortedArray = restaurants.slice();
// const container = document.querySelector('.cuisine_container');
// const sortBy = document.querySelector('.sort_by');

import {sortedArray, container} from './constans.js';

// sortBy.addEventListener('change', sortCuisines);

// restaurants.forEach(showCuisines);

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