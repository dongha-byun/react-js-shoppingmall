import ApiService from "../../axios";
import { headers } from "../login/headers";

export const TEST_PAY_CID = "TC0ONETIME";

export const TYPE_KAKAO_PAY = "KAKAO_PAY";
export const TYPE_TOSS = "TOSS";
export const TYPE_CARD = "CARD";

const PayService = {
    readyPay: async(params) => {
        return ApiService.post("/pay/"+params.type+"/ready", params, headers());
    },
    approvePay: async(params) => {
        return ApiService.post("/pay/"+params.type+"/approve", params, headers());
    },
    cancelPay: async(params) => {
        return ApiService.post("/pay/"+params.type+"/cancel", params, headers());
    }
}

export default PayService;
