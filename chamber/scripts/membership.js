const memberships = [
    {
        membership: "NP",
        requirements: "Must be a registered 501(c)(3) or other recognized non‑profit organization. Must provide proof of non‑profit status. Must participate in at least one community service event per year.",
        benefits: "Free membership with access to basic chamber resources. Listing in the chamber directory. Access to monthly networking events. Discounted booth fee for community fairs. Eligibility for community partnership programs.",
        amount: "Free"
    },
    {
        membership: "Bronze",
        requirements: "Must be a small business with fewer than 20 employees. Must commit to following chamber business ethics guidelines.",
        benefits: "All NP benefits. Priority placement in the business directory. One free training workshop per year. Access to member‑only job board postings. 5% discount on chamber‑sponsored events. Ability to submit business news for the chamber newsletter.",
        amount: "$1000 Annual"
    },
    {
        membership: "Silver",
        requirements: "Must be an established business with at least 1 year of operation. Must participate in at least two chamber events per year.",
        benefits: "All Bronze benefits. Featured business highlight once per year. Two free training workshops per year. 10% discount on chamber events. Access to advertising opportunities on the chamber website. Eligibility for Spotlight Member rotation on the homepage. Early registration for expos and networking events.",
        amount: "$1500 Annual"
    },
    {
        membership: "Gold",
        requirements: "Must be a business in good standing with the chamber. Must participate in at least three chamber events per year.",
        benefits: "All Silver benefits. Unlimited training workshops. 20% discount on all chamber events. Premium advertising placement on the homepage. Guaranteed Spotlight Member feature every month. VIP access to networking events.",
        amount: "$2000 Annual"
    }
];

const membershipPlace = document.querySelector("#membershipPlace")
const theDialog = document.querySelector("#theDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogRequirements = document.querySelector("#dialogRequirement");
const dialogBenefits = document.querySelector("#dialogBenefits");
const dialogAmount = document.querySelector("#dialogAmount");
const closeDialogBtn = document.querySelector("#closeDialogBtn");


function MembershipCard(){
    memberships.forEach((level, index) => {
        const card = document.createElement("section");
        card.classList.add("membership-card");

        card.innerHTML = `
            <h2>${level.membership} Membership</h2>
            <button type="button" class="details-btn" data-index="${index}">
                Learn More
            </button>
        `;
        membershipPlace.appendChild(card);

        // FOR THE ANIMATION
        setTimeout(() => {
            card.classList.add("animation");
        }, 50);


    });
}
MembershipCard();

membershipPlace.addEventListener("click", (event) => {
    const btn = event.target.closest(".details-btn");
    if (!btn) return;
    
    const index = btn.getAttribute("data-index");
    const level = memberships[index];

    dialogTitle.textContent = `${level.membership} Membership`;
    dialogRequirements.textContent = level.requirements;
    dialogBenefits.textContent = level.benefits;
    dialogAmount.textContent = level.amount;

    theDialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    theDialog.close()
});

// This is to save the date from the thank you page
document.getElementById("timestamp").value = new Date().toISOString();


