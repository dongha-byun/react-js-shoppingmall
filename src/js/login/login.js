import { api, frontUrl } from "../axios";

export function loginApi(loginValue){
    api.post("/login", loginValue)
    .then((response) => {
        console.log(response);
        if(response.data.accessToken){
            sessionStorage.setItem("user",
                JSON.stringify({
                    "access-token" : response.data.accessToken
                })
            );
            window.location.replace(frontUrl);
        } else {
            alert(response.data.message);
        }
    })
    .catch((error) => {
        console.log(error);
        //alert(error.response.data.message);
    });
}

export function addUserAttribute(name, data) {
    let originItems = JSON.parse(sessionStorage.getItem("user"));
    originItems[name] = data;
    sessionStorage.setItem("user", JSON.stringify(originItems));
}

export function getUserAttribute(name){
    if(sessionStorage.getItem("user") == null || JSON.parse(sessionStorage.getItem("user")) == null){
        return null;
    }

    return JSON.parse(sessionStorage.getItem("user"))[name];
}

export function isValidToken(){
    return getUserAttribute("access-token") != null;
}