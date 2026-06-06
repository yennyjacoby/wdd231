import {places} from '../data/places.mjs'
console.log(places)

// Display 

const showHere = document.querySelector("#allplaces")

// LOOP to the array of JSON
function displayItems(places) {
    places.forEach(x => {
        // build the card element
        const thecard = document.createElement('div')
        const thephoto = document.createElement('img')

        // Because I am adding the image site I don't need to add it in .mjs
        thephoto.src = `images/${x.photo_url}`;
        thephoto.alt = x.name
        thephoto.loading = "lazy"

        thecard.appendChild(thephoto)
        
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)

        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)

        const thedescription = document.createElement('p')
        thedescription.innerText = x.description
        thecard.appendChild(thedescription)


        showHere.appendChild(thecard)
    }) 
}

displayItems(places)



// LAST VISIT MESSAGE. 
const message = document.querySelector("#welcomeMessage");

const today= Date.now();

const lastVisit = Number(localStorage.getItem("lastVisit"));

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {

    const msInDay = 1000 * 60 * 60 *24;
    const daysBetween = Math.floor((today - lastVisit) / msInDay);

    if (daysBetween < 1) {
        message.textContent = "Back so soon! Awesome!";
    }   else if (daysBetween === 1) {
        message.textContent = "You last visited 1 day ago.";
    }   else {
        message.textContent = `You last visited ${daysBetween} days ago.`
    }
}

localStorage.setItem("lastVisit", today);