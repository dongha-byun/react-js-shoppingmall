import axios from "axios";
import { getUserAttribute, setUserAttribute } from "./component/login/login";
import { UNAUTHORIZED } from "./constants";

export const webUrl = "http://localhost:10000";

export const api = axios.create({
    baseURL: webUrl
});

const ApiService = {
    get : async(url, body, header) => {
        api.get(url, body, header);
    },
    post : async(url, body, header) => {
        let response = await api.post(url, body, header);
        return response.data;
    },
    createAccessTokenByRefreshToken : async() => {
        api.get("/login-refresh").then(result => {
            setUserAttribute("access-token", result.data.accessToken);
        });
    }
};

api.interceptors.request.use(
    async config => {
        config.headers = {
            Authorization: "Bearer " + getUserAttribute("access-token")
        }
        return config;
    }
)

api.interceptors.response.use((response) => {
    return response
}, async function(error) {
    const originalRequest = error.config;
    if(error.response.data.error === UNAUTHORIZED){
        ApiService.createAccessTokenByRefreshToken();
    }

    return axios(originalRequest);

});

export default ApiService;