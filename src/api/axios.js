import axios from "axios";
import { getUserAttribute, addUserAttribute } from "./component/login/login";
import { UNAUTHORIZED } from "./constants";

export const webUrl = "http://localhost:10000";

export const api = axios.create({
    baseURL: webUrl
});

const ApiService = {
    get : async(url, body, header) => {
        let response = await api.get(url, header);
        return response.data;
    },
    post : async(url, body, header) => {
        let response = await api.post(url, body, header);
        return response.data;
    } 
};

api.interceptors.request.use(
    async config => {
        let token = getUserAttribute("access-token");
        if(config.url === "/login-refresh"){
            token = getUserAttribute("refresh-token");
        }

        config.headers = {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
        }
        return config;
    }
)

api.interceptors.response.use((response) => {
    return response
}, async function(error) {
    const originalRequest = error.config;
    if(error.response.data.error == UNAUTHORIZED){
        api.get("/login-refresh").then(result => {
            addUserAttribute("access-token", result.data.accessToken);
            addUserAttribute("refresh-token", result.data.refreshToken);
        });
    }

    return api.request(originalRequest);
});

export default ApiService;