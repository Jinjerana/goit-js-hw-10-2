import axios from "axios";

// axios.defaults.headers.common["x-api-key"] =
//  "live_853h5N3izhrnKXdCzPmzMcGOHbtRAQ4h0bF4aqt9D6MCHfnwSzBfDHn3zebI1qeh";

import {fetchBreeds, fetchCatByBreed} from './cat-api'

//  const instance = axios.create({
//     baseURL = "https://api.thecatapi.com/v1/breeds",
//  });
//  axios.get("https://api.thecatapi.com/v1/breeds").then(function (response) {
//     console.log(response.data.map(e => e.id));
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//  })

// const BASE_URL = "https://api.thecatapi.com/v1/breeds"
// const END_POINT = "/breeds"
// const API_KEY = "live_853h5N3izhrnKXdCzPmzMcGOHbtRAQ4h0bF4aqt9D6MCHfnwSzBfDHn3zebI1qeh"

// fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}&limit=100&breed_ids`)
// .then(response => {
//     console.log(response)
//     return response.json
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))

// if(!response.ok)

const elements = {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    info: document.querySelector('.cat-info')
}

elements.select.setAttribute('hidden', true)

fetchBreeds()
.then(data => {
    elements.select.innerHTML = data.map(elem => `<option value="${elem.id}">${elem.name}</option>`).join("");   
})
.catch(() => {
    elements.select.removeAttribute('hidden')
    elements.loader.removeAttribute('hidden')
    elements.error.removeAttribute('hidden')
})
.finally(() => {
    elements.loader.setAttribute('hidden', true)
    elements.select.removeAttribute('hidden')
})

elements.select.addEventListener("change", onChange)

function onChange (evt) {
    elements.loader.removeAttribute("hidden")
    elements.select.setAttribute('hidden', true)
    elements.info.setAttribute('hidden', true)
    fetchCatByBreed(evt.target.value)
    .then(data => {
        elements.select.removeAttribute('hidden')
        elements.info.removeAttribute('hidden')
        const img = data.map(elem =>
            `<img src="${elem.url}" alt="cat" width="500" height="400">`).join("")
    elements.info.innerHTML = img
    data.map(elem => {
        elem.breeds.forEach(cat => {
            const array = [cat]
            const findCatById = array.find(option => option.id === `${evt.target.value}`)
            const markup = `<div class="flex">
            <h2>${findCatById.name}</h2>
            <p>${findCatById.description}</p>
            <h2>Temperament</h2>
            <p>${findCatById.temperament}</p>
            </div>`
            elements.info.insertAdjacentHTML("beforeend", markup)
        });
       
    }) 
    })
    .catch(() => {
        elements.select.removeAttribute('hidden')
        elements.loader.removeAttribute('hidden')
        elements.error.removeAttribute("hidden")
    })
    .finally(() => elements.loader.setAttribute("hidden", true))
}
