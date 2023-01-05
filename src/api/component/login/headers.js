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