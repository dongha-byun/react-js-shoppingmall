import { api } from "../../axios";

export function viewItem(itemId){
    api.get("/item/"+itemId)
    .then((response) => {
        console.log(response)
        return response;
    })
    .catch((error) => {
        console.log(error)
    })
}

