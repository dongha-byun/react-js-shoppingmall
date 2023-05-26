import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import BuyingProductList from "./BuyingProductList";
import OrderDeliveryInfo from "./OrderDeliveryInfo";
import OrderPaymentInfo from "./OrderPaymentInfo";
import styled from "styled-components";

const StyledOrderConfirmPageWrapper = styled.div`
    margin-bottom: 20px
`;

export default function OrderConfirmPage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [orderProductParam, setOrderProductParam] = useState([]);
    const [deliveryParam, setDeliveryParam] = useState({});
    const [payParam, setPayParam] = useState({});

    useEffect(() => {
        setOrderProductParam(
            state.items
        );

        setDeliveryParam({
            "receiverName" : state.receiverName,
            "zipCode" : state.zipCode,
            "address" : state.address,
            "detailAddress" : state.detailAddress,
            "requestMessage" : state.requestMessage,
        });

        setPayParam({
            "productName" : state.items[0].productName,
            "deliveryFee" : state.deliveryFee,
            "total" : state.total
        });
    }, []);

    const paying = () => {
        sessionStorage.setItem("orderParam", JSON.stringify({
            "orderProductParam" : orderProductParam,
            "deliveryParam": deliveryParam,
            "payParam" : payParam
        }));
        //navigate("/pay/ready", {state : payParam});
    }

    return (
        <StyledOrderConfirmPageWrapper>
            <h2>주문정보 확인</h2>
            <BuyingProductList items={state.items}/>
            <OrderDeliveryInfo deliveryParam={deliveryParam} />
            <OrderPaymentInfo />
            <Button className="w-100" size="lg" onClick={() => {
                paying();
            }}><b>{payParam.total}원</b> 결제하기</Button>
        </StyledOrderConfirmPageWrapper>
    );
}