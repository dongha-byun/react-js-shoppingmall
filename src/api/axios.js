import axios from "axios";

export const webUrl = "http://localhost:10000";

export const api = axios.create({
    baseURL: webUrl
});