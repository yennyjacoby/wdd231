import {temples} from '../data/temples.js'
//console.log(temples)

import {url} from '../data/temples.js'
//console.log(url)

const showHere = document.querySelector("#showHere")

const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myinfo = document.querySelector('#mydialog p')
const myclose = document.querySelector('#mydialog button')
myclose.addEventListener("click", () => mydialog.close())

//displaying the funcitions

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src=`${url}${x.path}`
        photo.alt=x.name

      photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo)
    })
  }

displayItems(temples)

function showStuff(x) {
    myinfo.innerHTML = `
        <h2>${x.name}</h2>
        <p>
            Dedicated in ${x.dedicated}<br>
            by ${x.person}<br>
            as temple number ${x.number}
        <p/>
`
    mydialog.showModal()
}

