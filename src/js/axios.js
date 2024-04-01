import axios from "axios";
import { addUserAttribute } from "../js/login/login";
import { UNAUTHORIZED } from "./constants";
import { expireHeader, headers } from "../js/login/headers";

export const webUrl = "http://localhost:8000";
export const frontUrl = "http://localhost:3000";
export const webThumbnailUrl = webUrl + "/image/";

export const api = axios.create({
    baseURL: webUrl
});

const ApiService = {
    get : async(url, header) => {
        let response = await api.get(url, header);
        return response.data;
    },
    post : async(url, body, header) => {
        let response = await api.post(url, body, header);
        return response.data;
    } 
};

// api.interceptors.request.use(
//     async config => {
//         let token = getUserAttribute("access-token");
//         if(config.url === "/refresh"){
//             token = getUserAttribute("refresh-token");
//         }

//         config.headers = {
//             Authorization: "Bearer " + token,
//             "Content-Type": "application/json"
//         }
//         return config;
//     }
// )

api.interceptors.response.use((response) => {
    return response
}, async function(error) {
    console.log(error);
    console.log(error.response.statusText);
    console.log(error.response.statusText === UNAUTHORIZED);
    if(error.response.statusText === UNAUTHORIZED){
        api.post("/refresh", '', expireHeader()).then(result => {
            console.log(result);
            addUserAttribute("access-token", result.data.accessToken);
        })
        .finally(() => {
            let originalRequest = error.config;
            return api.request(originalRequest);
        });
    }

    return error.response;
});

export default ApiService;