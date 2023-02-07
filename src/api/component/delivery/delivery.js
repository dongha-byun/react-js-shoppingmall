import ApiService, { api } from "../../axios";
import { headers } from "../login/headers";

const DeliveryService = {
    getDeliveries: () => {
        let response = ApiService.get("/delivery", headers());
        return response.data;
    },
    saveDelivery: (params) => {
        ApiService.post("/delivery")
    }
}

export default DeliveryService;