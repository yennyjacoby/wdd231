const form = document.querySelector("#contactForm");
const dialog = document.querySelector("#thankYouDialog");
const closeBtn = document.querySelector("#closeThankYou");
const message = document.querySelector("#thankYouMessage");

closeBtn.addEventListener("click", () => dialog.close());

form.addEventListener("submit", (e) => {
  e.preventDefault(); //

  const formData = new FormData(form);
  const first = formData.get("fname");
  const last = formData.get("lname");

  const name = `${first} ${last}`;

  message.innerHTML = `
    Thank you, <strong>${name}</strong>!  
    Your message has been received. We will contact you soon.
  `;

  dialog.showModal();
  form.reset();
});
