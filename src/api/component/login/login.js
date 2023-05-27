import { api, frontUrl } from "../../axios";

export function loginApi(loginValue){
    api.post("/login", loginValue)
    .then((response) => {
        if(response.data.accessToken){
            sessionStorage.setItem("user",
                JSON.stringify({
                    "access-token" : response.data.accessToken,
                    "refresh-token" : response.data.refreshToken
                })
            );
            window.location.replace(frontUrl);
        }
    })
    .catch((error) => {
        alert("오류가 발생했습니다.");
        console.log(error);
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