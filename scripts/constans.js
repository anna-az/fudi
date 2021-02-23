const button = document.querySelector('#menu_icon_container');
const menu = document.querySelector('.hamburger-menu');
const headerMenu = document.querySelector('.menu');
const mobileWidth = 520;

const openModelLogIn = document.querySelectorAll('.login');
const openModelSignUp = document.querySelectorAll('.signup');
const modalContainer = document.querySelector('.modal_container');

const restaurants = [
    { cuisine: 'Italian', recipes: 327, img: '/images/restaurants/italian.png', relevance: 1 },
    { cuisine: 'Indian', recipes: 856, img: '/images/restaurants/indian.png', relevance: 2 },
    { cuisine: 'French', recipes: 27, img: '/images/restaurants/french.png', relevance: 3 },
    { cuisine: 'Steakhouse', recipes: 174, img: '/images/restaurants/steakhouse.png', relevance: 4 },
    { cuisine: 'Seafood', recipes: 731, img: '/images/restaurants/seafood.png', relevance: 5 },
    { cuisine: 'Sushi', recipes: 237, img: '/images/restaurants/sushi.png', relevance: 6 },
    { cuisine: 'Mexican', recipes: 529, img: '/images/restaurants/mexican.png', relevance: 7 },
    { cuisine: 'Chinese', recipes: 145, img: '/images/restaurants/chinese.png', relevance: 8 },
    { cuisine: 'Pizza', recipes: 327, img: '/images/restaurants/pizza.png', relevance: 9 },
    { cuisine: 'American', recipes: 1437, img: '/images/restaurants/american.png', relevance: 10 }
];
const sortedArray = restaurants.slice();
const container = document.querySelector('.cuisine_container');
const sortBy = document.querySelector('.sort_by');

const footer = document.querySelector('header');
const numbersContainer = document.querySelector('.numbers');

const loginModalContent = `<div class="modal">
<div class="form flex_col">
    <div class="close_modal">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <div class="modal_title">
        <img src="images/logo.png" alt="Logo">
        <p>LOG-IN</p>
    </div>
    <form class="reserv_form_modal" id="form">
        <input type="text" placeholder="Username or email" name="email" required>
        <input type="password" placeholder="password" name = "password" required>
        <button type="submit" class="reservation">Log-in</button>
    </form>
    <p>Don't have an account? <a href="#" id="toSignUp">Sign up</a></p>
</div>
</div>`;

const registrationModalContent = `<div class="modal">
<div class="form flex_col">
    <div class="close_modal">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <div class="modal_title">
        <img src="images/logo.png" alt="Logo">
        <p>Sign-up</p>
    </div>
    <form class="reserv_form_modal" id="form">
        <input type="text" placeholder="Username" name="username" required>
        <input type="email" placeholder="Email" name="email" required>
        <input type="password" placeholder="password" name = "password" required>
        <button type="submit" class="reservation">sign up</button>
    </form>
    <p>If you already have an account <a href="#" id="toLogIn">Log in</a></p>
</div>
</div>`;


export {
    button,
    menu,
    headerMenu,
    mobileWidth,
    openModelLogIn,
    openModelSignUp,
    modalContainer,
    restaurants,
    sortedArray,
    container,
    sortBy,
    footer,
    numbersContainer,
    loginModalContent,
    registrationModalContent
}