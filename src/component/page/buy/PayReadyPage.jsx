import React, { useEffect, useState } from "react";
import PayService from "../../../api/component/pay/pay";
import { frontUrl } from "../../../api/axios";
import { useLocation } from "react-router-dom";

export default function PayReadyPage() {

    const {state} = useLocation();
    const [cid, setCid] = useState("TC0ONETIME");

    useEffect(() => {
        let param = {
            "type": "kakaoPay",
            "data": {
                "cid": cid,
                "partner_order_id": "dongha_shopping_mall_order",
                "partner_user_id": "TuserId",
                "item_name": state.productName,
                "quantity": state.quantity,
                "total_amount": state.total,
                "vat_amount": 0,
                "tax_free_amount": 0,
                "approval_url": frontUrl + "/pay/approve",
                "fail_url": frontUrl + "/pay/fail",
                "cancel_url": frontUrl + "/pay/cancel"
            }
        }

        PayService.readyPay(param).then(result => {         
            localStorage.setItem("pay_param", JSON.stringify({
                "cid": cid,
                "tid": result.tid,
                "partner_order_id": "dongha_shopping_mall_order",
                "partner_user_id": "TuserId",
                "pg_token": ""
            }));
            location.href = result.next_redirect_pc_url;
        });
    }, []);

    return (
        <div>결제 진행 화면입니다.</div>
    );
}