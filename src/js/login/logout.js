import ApiService from "../axios";
import { UNAUTHORIZED } from "../constants";
import { headers } from "./headers";


export function logout(){
    ApiService.post("/logout", {}, headers())
    .then((response) => {
        console.log(response);
    })
    .catch((error)=>{
        if(error.response.status == UNAUTHORIZED){
            console.log("401 error");
        }
    })
    .finally(() => {
        sessionStorage.removeItem("user");
        window.location.replace("/");
    });
}