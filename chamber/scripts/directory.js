const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

let membersData = [];

// getting info from JSON- Fetch
async function getMembers() {
    try{
        const response = await fetch("data/members.json");
        membersData = await response.json();
        displayMembers(membersData);
    }

    catch (error) {
        console.error ("Error loading members:", error);
    }
}

// Displaying the members
function displayMembers(members) {
    membersContainer.innerHTML ="";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML=`
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.website}</p>    
    `;    
    membersContainer.appendChild(card);
    });
}

// Toggle Grid/List View
gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

// HERE I am setting the grid as a default view, so the user sees the directory immediately with the CSS applied
document.getElementById("members").classList.add("grid");

// Important!! Call the function
getMembers();


