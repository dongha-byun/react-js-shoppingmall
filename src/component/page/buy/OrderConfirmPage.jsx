import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import BuyingProductList from "./BuyingProductList";
import OrderDeliveryInfo from "./OrderDeliveryInfo";
import OrderPaymentInfo from "./OrderPaymentInfo";

export default function OrderConfirmPage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [orderProductParam, setOrderProductParam] = useState({});
    const [deliveryParam, setDeliveryParam] = useState({});
    const [payParam, setPayParam] = useState({});

    useEffect(() => {
        setOrderProductParam({
            "productId": state.productId,
            "productName": state.productName,
            "imgUrl": state.imgUrl,
            "providerName": state.providerName,
            "quantity": state.quantity,
            "price": state.price,
            "deliveryFee": state.deliveryFee
        });

        setDeliveryParam({
            "receiverName" : state.receiverName,
            "zipCode" : state.zipCode,
            "address" : state.address,
            "detailAddress" : state.detailAddress,
            "requestMessage" : state.requestMessage,
        });

        setPayParam({
            "productName" : state.productName,
            "quantity" : state.quantity,
            "total" : state.quantity * state.price + state.deliveryFee
        });
    }, []);

    const paying = () => {
        navigate("/pay/ready", {state : payParam});
    }

    return (
        <div>
            <h2>주문정보 확인</h2>
            <BuyingProductList orderProductParam={orderProductParam}/>
            <OrderDeliveryInfo deliveryParam={deliveryParam} />
            <OrderPaymentInfo />
            <Button className="w-100" size="lg" onClick={() => {
                paying();
            }}>결제하기</Button>
        </div>
    );
}