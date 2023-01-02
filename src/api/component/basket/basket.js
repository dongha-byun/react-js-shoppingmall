import { api } from "../../axios";
import { getUserAttribute } from "../login/login";

const BasketService = {
    getBaskets: async() => {
        let response = await api.get("/baskets", {
            headers:{
                Authorization: "Bearer " + getUserAttribute("access-token")
            }
        });
        return response.data;
    },
    saveBasket: async(params) => {
        let response = await api.post("/baskets", params, {
            headers: {
                Authorization: "Bearer " + getUserAttribute("access-token")
            }
        });
        return response.data;
    },
    removeBasket: async(basketId) => {
        let response = await api.delete("/baskets/"+basketId, {
            headers: {
                Authorization: "Bearer " + getUserAttribute("access-token")
            }
        });
        return response.data;
    }
}

export default BasketService;