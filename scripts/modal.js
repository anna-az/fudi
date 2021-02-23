import {modalContainer, loginModalContent, registrationModalContent} from './constans.js';

function createModal(modalType) {
    return modalType === "login" ? loginModalContent : registrationModalContent;
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

    const change = (modalType === 'login') ? document.querySelector('#toSignUp') : document.querySelector('#toLogIn'); 

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