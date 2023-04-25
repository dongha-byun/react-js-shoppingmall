import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PayService from "../../../api/component/pay/pay";
import { Spinner } from "react-bootstrap";
import OrderService from "../../../api/component/order/order";

export default function PayApprovePage() {
    const navigate = useNavigate();
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
            order();
        });
    });

    const order = () => {
        // 여기서 Order api call
        let orderParam = JSON.parse(sessionStorage.getItem("orderParam"));
        
        let orderProductParam = orderParam.orderProductParam;
        let deliveryParam = orderParam.deliveryParam;
        let payParam = orderParam.payParam;

        let param = {
            "productId": orderProductParam.productId,
            "quantity": orderProductParam.quantity,
            "deliveryFee": orderProductParam.deliveryFee,
            "receiverName" : deliveryParam.receiverName,
            "zipCode" : deliveryParam.zipCode,
            "address" : deliveryParam.address,
            "detailAddress" : deliveryParam.detailAddress,
            "requestMessage" : deliveryParam.requestMessage,
            "totalPrice" : payParam.total
        }

        // 여기서 Order Api Call
        OrderService.order(param).then(result => {
            navigate("/pay/success");
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