import { api } from "../../axois";

export function loginApi(loginValue){
    api.post("/login", loginValue)
    .then((response) => {
        if(response.data.token){
            localStorage.setItem("x-auth-token", response.data.token);
            window.location.replace("http://localhost:3000");
        }
    })
    .catch((error) => {
        alert("오류가 발생했습니다.");
        console.log(error);
    });
}   