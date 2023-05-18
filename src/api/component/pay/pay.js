import ApiService from "../../axios";
import { headers } from "../login/headers";

export const TEST_PAY_CID = "TC0ONETIME";

export const TYPE_KAKAO_PAY = "KAKAO_PAY";

const PayService = {

    readyPay: async(params) => {
        return ApiService.post("/pay/ready", params, headers());
    },
    approvePay: async(params) => {
        return ApiService.post("/pay/approve", params, headers());
    },
    cancelPay: async(params) => {
        return ApiService.post("/pay/cancel", params, headers());
    }
}

export default PayService;