import {modalContainer} from './constans.js';

function createModal(modalType) {
    let modal; 
    if (modalType === 'login') {
        modal = `<div class="modal">
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

        return modal;
    }

    modal = `<div class="modal">
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

    return modal;
}

export function chooseModal(event) {
    event.preventDefault();
    const modal = createModal(event.target.className);
    openModal(modal, event.target.className);
}

function openModal(modal, modalType) {
    modalContainer.innerHTML = modal;

    const close = document.querySelector('.close_modal');
    close.addEventListener('click', closeModal);
    
    const submit = document.querySelector('.form');
    submit.addEventListener('submit', sendData);

    let change;

    if(modalType === 'login') {
        change = document.querySelector('#toSignUp');
    } else {
        change = document.querySelector('#toLogIn');
    }

    change.addEventListener('click', changeModal);
}

function sendData(event) {
    event.preventDefault();
    const form = {};
    
    for(let element of this.querySelectorAll('[name]')) {
        form[ element.getAttribute('name') ] = element.value;
    }

    event.target.reset();
    closeModal();
}

function closeModal() {
    modalContainer.innerHTML = "";
}

function changeModal(event) {
    event.preventDefault();
    closeModal();

    const modalType = (event.target.id === 'toLogIn') ? 'login' : 'signup';
    const modal = createModal(modalType);
    openModal(modal, modalType);    
}

export function checkClickOutside(event) {
    if (event.target.className !== 'modal') return;
    closeModal(); 
}