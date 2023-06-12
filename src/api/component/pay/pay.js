import ApiService from "../../axios";
import { headers } from "../login/headers";

export const TEST_PAY_CID = "TC0ONETIME";

export const TYPE_KAKAO_PAY = "KAKAO_PAY";
export const TYPE_TOSS = "TOSS";

const PayService = {
    readyPay: async(params) => {
        return ApiService.post("/pay/"+params.payType+"/ready", params, headers());
    },
    approvePay: async(params) => {
        return ApiService.post("/pay/"+params.payType+"/approve", params, headers());
    },
    cancelPay: async(params) => {
        return ApiService.post("/pay/"+params.payType+"/cancel", params, headers());
    }
}

export default PayService;
