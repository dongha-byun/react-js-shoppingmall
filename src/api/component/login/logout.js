import { api } from "../../axios";
import { getUserAttribute } from "./login";


export function logout(){
    api.post("/logout", {}, {
        headers: {
            Authorization: "Bearer " + getUserAttribute("access-token")
        }
    })
    .then((response) => {
        console.log(response);
        localStorage.clear();
        window.location.replace("/");
    })
    .catch((error)=>{
        if(error.response.status == 401){
            console.log("401 error");
            localStorage.clear();
            window.location.replace("/");
        }
    });
}