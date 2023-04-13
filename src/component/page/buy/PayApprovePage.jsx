import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PayService from "../../../api/component/pay/pay";

export default function PayApprovePage() {
    const location = useLocation();

    useEffect(() => {
        let searchParams = new URLSearchParams(location.search);
        let payParam = JSON.parse(localStorage.getItem("pay_param"));
        let param = {
            "type": "kakaoPay",
            "data": {
                "cid": payParam.cid,
                "tid": payParam.tid,
                "partner_order_id": payParam.partner_order_id,
                "partner_user_id": payParam.partner_user_id,
                "pg_token": searchParams.get("pg_token")
            }
        };

        PayService.approvePay(param).then(result => {
            console.log("success pay approve");
            console.log(result);
        });
    });

    return(
        <div>결제 승인 중 입니다.</div>
    );
}