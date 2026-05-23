const spotlightContainer = document.querySelector("#spotlights");

async function loadSpotlights() {
    try{
        const response = await fetch ("data/members.json");
        const data = await response.json();

    //filtering
        const qualifiedMembers = data.filter(member =>
            member.membership === "Gold" ||
            member.membership === "Silver"
        );

        const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

        const spotlightCount = 3;
        const selected = shuffled.slice(0, spotlightCount);

        displaySpotlights(selected);
    } catch (error) {
        console.error("Error loading:", error);
    }
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML=`
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.website}</p>    
            <p class="level ${member.membership}">${member.membership} Member</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();