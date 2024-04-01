import { getUserAttribute } from "./login"

export function headers(headerParam){

    let headers = {
        headers: {
            Authorization: "Bearer " + getUserAttribute("access-token"),
            headerParam
        }
    };

    return headers;
}

export function expireHeader(headerParam) {
    return {
        "expire-token": getUserAttribute("access-token"),
        headerParam
    }
    
}