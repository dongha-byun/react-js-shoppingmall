import { api } from "../../axois";

export function loginApi(loginValue){
    api.post("/login", loginValue)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}   