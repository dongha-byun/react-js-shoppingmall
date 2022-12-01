import { api } from "../../axios";

export function loginApi(loginValue){
    api.post("/login", loginValue)
    .then((response) => {
        if(response.data.token){
            localStorage.setItem("user",
                JSON.stringify({
                    "x-auth-token" : response.data.token,
                    "expireDate" : response.data.expireDate
                })
            );
            window.location.replace("http://localhost:3000");
        }
    })
    .catch((error) => {
        alert("오류가 발생했습니다.");
        console.log(error);
    });
}   

export function getUserAttribute(name){
    if(localStorage.getItem("user") == null || JSON.parse(localStorage.getItem("user")) == null){
        return null;
    }

    return JSON.parse(localStorage.getItem("user"))[name];
}

export function isValidToken(){
    return getUserAttribute("x-auth-token") != null;
}