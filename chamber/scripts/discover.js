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