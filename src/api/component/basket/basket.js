import ApiService, { api } from "../../axios";
import { headers } from "../login/headers";

const BasketService = {
    getBaskets: async() => {
        let response = await api.get("/baskets", headers());
        return response.data;
    },
    saveBasket: async(params) => {
        return ApiService.post("/baskets", params, headers());
    },
    removeBasket: async(basketId) => {
        let response = await api.delete("/baskets/"+basketId, headers());
        return response.data;
    }
}

export default BasketService;