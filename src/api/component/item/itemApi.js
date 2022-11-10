import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:10000/item"
});

export function viewItem(itemId){
    api.get("/"+itemId)
    .then((response) => {
        console.log(response)
        return response;
    })
    .catch((error) => {
        console.log(error)
    })
}

