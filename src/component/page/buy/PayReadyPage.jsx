import React, { useEffect } from "react";
import PayService, { TEST_PAY_CID, TYPE_KAKAO_PAY } from "../../../api/component/pay/pay";
import { frontUrl } from "../../../api/axios";
import { useLocation } from "react-router-dom";

export default function PayReadyPage() {
    const {state} = useLocation();

    useEffect(() => {
        let param = {
            "type": state.payType,
            "data": {
                "cid": TEST_PAY_CID,
                "partner_order_id": "dongha_shopping_mall_order",
                "partner_user_id": "TuserId",
                "item_name": state.productName,
                "quantity": state.totalQuantity,
                "total_amount": state.totalProductPrice - state.totalDiscountAmounts,
                "vat_amount": 0,
                "tax_free_amount": 0,
                "approval_url": frontUrl + "/pay/approve",
                "fail_url": frontUrl + "/pay/fail",
                "cancel_url": frontUrl + "/pay/cancel"
            }
        }

        PayService.readyPay(param).then(result => {         
            localStorage.setItem("pay_param", JSON.stringify({
                "cid": TEST_PAY_CID,
                "tid": result.tid,
                "type" : state.payType,
                "partner_order_id": "dongha_shopping_mall_order", // 주문 아이디 -> 주문 정보 저장이 먼저라는 뜻 아니야?
                "partner_user_id": "TuserId", // 주문자 아이디
                "pg_token": ""
            }));
            location.href = result.next_redirect_pc_url;
        });
    }, []);

    return (
        <div>결제 진행 화면입니다.</div>
    );
}