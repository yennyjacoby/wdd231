import { trips } from "../data/trips.mjs";

console.log("Trips imported:", trips);

document.addEventListener("DOMContentLoaded", () => {
  const selectedTrips = trips
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  displayTrips(selectedTrips);
});

function displayTrips(list) {
  const container = document.querySelector("#random-trips");
  console.log("Container:", container);

  list.forEach(trip => {
    container.innerHTML += `
      <article class="trip-card">
        <img src="images/${trip.photo}" alt="${trip.name}">
        <h3>${trip.name}</h3>
        <p>Location: ${trip.location}</p>
        <p>${trip.description}</p>
      </article>
    `;
  });
}
