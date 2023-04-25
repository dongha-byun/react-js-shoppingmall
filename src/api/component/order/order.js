import { headers } from "../login/headers";
import ApiService from "../../axios";

const OrderService = {
    
    order: async(params) => {
        return ApiService.post("/orders", params, headers());
    }

};

export default OrderService;