import { trips } from "../data/trips.mjs";

document.addEventListener("DOMContentLoaded", () => {
  displayTrips(trips);

  const dialog = document.querySelector("#tripDialog");
  const dialogTitle = document.querySelector("#dialogTitle");
  const dialogInfo = document.querySelector("#dialogInfo");
  const closeDialog = document.querySelector("#closeDialog");

  closeDialog.addEventListener("click", () => dialog.close());

  // for the card of learn more
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("learn-more")) {
      const index = e.target.dataset.index;
      const trip = trips[index];

      dialogTitle.textContent = trip.name;

      dialogInfo.innerHTML = `
        <strong>Location:</strong> ${trip.location}<br>
        <strong>Age Range:</strong> ${trip.ageRange}<br>
        <strong>Duration:</strong> ${trip.duration}<br>
        <strong>Price:</strong> ${trip.price}<br><br>
        <strong>Experience Includes:</strong><br>
        ${trip.completeDescription}
      `;

      dialog.showModal();
    }
  });
});

// displaying the trips in trips.html
function displayTrips(list) {
  const container = document.querySelector("#trips-colombia");

  container.innerHTML = list.map((trip, index) => `
    <article class="trip-card">
      <img src="images/${trip.photo}" alt="${trip.name}" loading="lazy">
      <h3>${trip.name}</h3>
      <p>Location: ${trip.location}</p>
      <p>${trip.description}</p>

      <button class="learn-more" data-index="${index}">
        Learn More
      </button>
    </article>
  `).join("");
}
