import ApiService from "../../axios";
import { headers } from "../login/headers";

const PayService = {

    readyPay: async(params) => {
        return ApiService.post("/pay/ready", params, headers());
    },
    approvePay: async(params) => {
        return ApiService.post("/pay/approve", params, headers());
    }
}

export default PayService;