// Store the selected elements hat we are going to use
const hamBtn = document.querySelector("#ham-btn");
const nav = document.querySelector('.navigation');

// Toggle the show class off and on
hamBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamBtn.classList.toggle('show');
});

