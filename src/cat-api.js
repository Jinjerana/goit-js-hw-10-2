import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
 "live_853h5N3izhrnKXdCzPmzMcGOHbtRAQ4h0bF4aqt9D6MCHfnwSzBfDHn3zebI1qeh";


axios.defaults.baseURL = "https://api.thecatapi.com/v1/";
export function fetchBreeds() {
    return axios.get(`/breeds/`).then(response => {
        if (response.status !== 200) {
            throw new Error(response.status);
        }
        return response.data;
    });
}
export function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`)
    .then(response => {
        if (response.status !== 200) {
            throw new Error(response.status);
        }
        return response.data;
    })
}

export function createMarkup(arr) {
    
    const { url, breeds } = arr[0];
    return `<img src="${url}" alt="cat" width="500" height="400">
    <div class="flex">
       <h2>${breeds[0].name}</h2>
       <p>${breeds[0].description}</p>
        <h2>Temperament</h2>
        <p>${breeds[0].temperament}</p>
        </div>`;
}    

// const options = {
//     headers: {'x-api-key' :
//      "live_853h5N3izhrnKXdCzPmzMcGOHbtRAQ4h0bF4aqt9D6MCHfnwSzBfDHn3zebI1qeh"
// }
// }

// export function fetchBreeds() {
//     return fetch("https://api.thecatapi.com/v1/breeds", options)
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText)
//         } 
//         return response.json()
//     })
// }
// export function fetchCatByBreed(breedId) {
//     return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options)
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText)
//         } console.log(response)
//         return response.json()
//     })
// }