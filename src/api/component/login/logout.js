import ApiService, { api } from "../../axios";
import { UNAUTHORIZED } from "../../constants";
import { headers } from "./headers";
import { getUserAttribute } from "./login";


export function logout(){
    ApiService.post("/logout", {}, headers)
    .then((response) => {
        console.log(response);
    })
    .catch((error)=>{
        if(error.response.status == UNAUTHORIZED){
            console.log("401 error");
        }
    })
    .finally(() => {
        localStorage.clear();
        window.location.replace("/");
    });
}