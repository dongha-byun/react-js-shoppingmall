import ApiService, { api } from "../axios";
import { headers } from "../login/headers";

const BasketService = {
    getBaskets: async() => {
        let response = await api.get("/carts", headers());
        return response.data;
    },
    saveBasket: async(params) => {
        return ApiService.post("/carts", params, headers());
    },
    removeBasket: async(basketId) => {
        let response = await api.delete("/carts/"+basketId, headers());
        return response.data;
    }
}

export default BasketService;