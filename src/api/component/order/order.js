import { headers } from "../login/headers";
import ApiService, { api } from "../../axios";

const OrderService = {
    order: async(params) => {
        return ApiService.post("/orders", params, headers());
    },
    getOrderHistory: async(startDate, endDate) => {
        let response = await api.get("/user/orders?startDate="+startDate+"&endDate="+endDate, headers());
        return response.data;
    },
    cancel: async(orderId, cancelReason) => {
        let param = {
            "cancelReason" : cancelReason
        };
        let response = await api.put("/orders/"+orderId+"/cancel", param, headers());
        return response.data;
    }

};

export default OrderService;