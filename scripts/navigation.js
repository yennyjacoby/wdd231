// Store the selected elements hat we are going to use
const navbuttom = document.querySelector('#ham-btn');

// Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navBar.classList.toggle('show');
});

const navBar = document.querySelector('#nav-bar');