import { api } from "../../axios";
import { UNAUTHORIZED } from "../../constants";
import { getUserAttribute } from "./login";


export function logout(){
    api.post("/logout", {})
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