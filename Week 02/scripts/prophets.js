//Array of objects named "prophets"

// const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// const cards = document.querySelector('#cards');

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json(); //parse the JSON data- convert json to JS
//     console.table(data.prophets);
// }

// getProphetData();



const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets); 
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophets) => {
        let card = document.createElement('section');
        let fullName = document.createElement('__');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.___} ____`;

            // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.____} ______________`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(____);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}