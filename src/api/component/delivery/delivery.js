import { api } from "../../axios";
import { headers } from "../login/headers";

const DeliveryService = {
    getDeliveries: async() => {
        let response = await api.get("/delivery", headers());
        return response.data;
    }

}

export default DeliveryService;