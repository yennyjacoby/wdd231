const tripSelect = document.querySelector("#trip");

tripsSelect.addEventListener("change", () => {
    localStorage.setItem("favoriteTrip", tripSelect.value);
});

const savedTrip = localStorage.getItem("favoriteTrip");

if (savedTrip) {
    tripSelect.value = savedTrip;
}