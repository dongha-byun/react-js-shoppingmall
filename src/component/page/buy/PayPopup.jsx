import React, { useEffect } from "react";
import PayService from "../../../api/component/pay/pay";

export default function PayPopup(props) {

    useEffect(() => {
        let param = {
            "type": "kakaoPay",
            "data": {
                "cid": "TC0ONETIME",
                "partner_order_id": "dongha_shopping_mall_order",
                "partner_user_id": "TuserId",
                "item_name": "TitemName",
                "quantity": 10,
                "total_amount": 11000,
                "vat_amount": 1000,
                "tax_free_amount": 0,
                "approval_url": "https://developers.kakao.com/success",
                "fail_url": "https://developers.kakao.com/fail",
                "cancel_url": "https://developers.kakao.com/cancel"
            }
        }

        PayService.readyPay(param).then(result => {
            console.log(result);
        });
    }, []);

    return (
        <div>결제 진행 화면입니다.</div>
    );
}