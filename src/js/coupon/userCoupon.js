import ApiService from "../axios";
import { headers } from "../login/headers";

const UserCouponService = {
    getUsableCouponList: (partnersId) => {
        return ApiService.get(
            "/order/coupons?partnersId="+partnersId, headers()
        );
    }
}

export default UserCouponService;