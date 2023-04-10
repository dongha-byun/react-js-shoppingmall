import ApiService, { api } from "../../axios";
import { headers } from "../login/headers";

const DeliveryService = {
    getDeliveries: async() => {
        let response = await api.get("/delivery", headers());
        return response.data;
    },
    saveDelivery: async (params) => {
        return ApiService.post("/delivery", params, headers());
    },
    deleteDelivery: async (id) => {
        let response = await api.delete("/delivery/"+id, headers());
        return response.data;
    }
}

export default DeliveryService;