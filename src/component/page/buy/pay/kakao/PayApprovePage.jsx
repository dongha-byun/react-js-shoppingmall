import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PayService from "../../../../../js/pay/pay";
import { Spinner } from "react-bootstrap";
import OrderService from "../../../../../js/order/order";

export default function PayApprovePage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let searchParams = new URLSearchParams(location.search);
        let payParam = JSON.parse(localStorage.getItem("pay_param"));
        let param = {
            "type": payParam.type,
            "data": {
                "tid": payParam.tid,
                "partner_order_id": payParam.orderCode,
                "pg_token": searchParams.get("pg_token")
            }
        };

        PayService.approvePay(param).then(result => {
            order(payParam.tid);
        });
    });

    const order = (tid) => {
        let localPayParam = JSON.parse(localStorage.getItem("pay_param"));
        let orderCode = localPayParam.orderCode;

        // 여기서 Order api call
        let orderParam = JSON.parse(sessionStorage.getItem("orderParam"));
        
        let orderProductParam = orderParam.orderProductParam;
        let deliveryParam = orderParam.deliveryParam;
        let payParam = orderParam.payParam;

        let param = {
            "tid": tid,
            "orderCode": orderCode,
            "payType": payParam.payType,
            "items": orderProductParam,            
            "deliveryFee": payParam.deliveryFee,
            "deliveryInfo" : deliveryParam
        }

        // 여기서 Order Api Call
        OrderService.order(param).then(result => {
            navigate("/pay/success");
        }).catch(() => {
            alert("오류로 인해 주문에 실패하였습니다. 다시 시도해주세요.");
            navigate("/");
        });
    }

    return(
        <div>
            <p>결제 승인 중 입니다.</p>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}