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
// function displayTrips(list) {
//   const container = document.querySelector("#trips-colombia");

//   container.innerHTML = list.map((trip, index) => `
//     <article class="trip-card">
//       <img src="images/${trip.photo}" alt="${trip.name}" loading="lazy" img.width=300 img.height=300>
//       <h3>${trip.name}</h3>
//       <p>Location: ${trip.location}</p>
//       <p>${trip.description}</p>

//       <button class="learn-more" data-index="${index}">
//         Learn More
//       </button>
//     </article>
//   `).join("");
// }


function displayTrips(list) {
  const container = document.querySelector("#trips-colombia");

  const cards = list.map((trip, index) => {
    const article = document.createElement("article");
    article.classList.add("trip-card");

    const img = document.createElement("img");
    img.src = `images/${trip.photo}`;
    img.alt = trip.name;
    img.loading = "lazy";

    img.width = 300;
    img.height = 300;

    const h3 = document.createElement("h3");
    h3.textContent = trip.name;

    const p1 = document.createElement("p");
    p1.textContent = `Location: ${trip.location}`;

    const p2 = document.createElement("p");
    p2.textContent = trip.description;

    const button = document.createElement("button");
    button.classList.add("learn-more");
    button.dataset.index = index;
    button.textContent = "Learn More";

    article.append(img, h3, p1, p2, button);
    return article;
  });

  container.innerHTML = "";
  cards.forEach(card => container.appendChild(card));
}
