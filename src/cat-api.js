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