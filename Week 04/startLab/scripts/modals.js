const openBtn1 = document.querySelector("#openBtn1");
const openBtn2 = document.querySelector("#openBtn2");
const openBtn3 = document.querySelector("#openBtn3");

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeBtn = document.querySelector("#closeBtn");

openBtn1.addEventListener("click", () => {
    dialogBoxText.innerHTML="Stimulates your eye's red cone cells to command pure red pixels"
    dialogBox.showModal();
});

openBtn2.addEventListener("click", () => {
    dialogBoxText.innerHTML="Triggers your green light receptors to project vibrant middle wavelengths"
    dialogBox.showModal();
});

openBtn3.addEventListener("click", () => {
    dialogBoxText.innerHTML="Activates your blue light sensors to emit high-energy digital light."
    dialogBox.showModal();
});


closeBtn.addEventListener("click", () => {
    dialogBox.close();
});