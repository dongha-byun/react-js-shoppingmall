import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import BuyingProductList from "./BuyingProductList";
import OrderDeliveryInfo from "./OrderDeliveryInfo";
import OrderPaymentInfo from "./OrderPaymentInfo";
import styled from "styled-components";
import OrderDiscountForm from "./OrderDiscountForm";
import TotalAmountsCalculatePane from "./TotalAmountsCalculatePane";
import { TYPE_KAKAO_PAY } from "../../../api/component/pay/pay";

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
        let items = state.items;
        setOrderProductParam(items.map((item) => ({
            ...item,
            "usedCoupon" : {
                "discountAmount": 0
            }
        })));

        let payProductName = items[0].productName;
        if(items.length > 1) {
            let otherProductCount = items.length-1;
            payProductName += " 외 " + otherProductCount + "건";
        }

        setDeliveryParam({
            "receiverName" : state.receiverName,
            "receiverPhoneNumber" : state.receiverPhoneNumber,
            "zipCode" : state.zipCode,
            "address" : state.address,
            "detailAddress" : state.detailAddress,
            "requestMessage" : state.requestMessage,
        });

        setPayParam({
            "payType" : TYPE_KAKAO_PAY,
            "productName" : payProductName
        });
    }, []);

    const paying = () => {
        let totalProductPrice = orderProductParam.reduce(
            (total, orderProduct) => total + orderProduct.productPrice, 0
        );
        let totalQuantity = orderProductParam.reduce(
            (total, orderProduct) => total + orderProduct.quantity, 0
        );
        let totalDiscountAmounts = orderProductParam.reduce(
            (total, orderProduct) => total + calculateTotalDiscountAmounts(orderProduct), 0
        );

        let paymentParam = {
            ...payParam,
            "totalProductPrice": totalProductPrice,
            "totalDiscountAmounts": totalDiscountAmounts,
            "totalQuantity": totalQuantity
        };

        sessionStorage.setItem("orderParam", JSON.stringify({
            "orderProductParam" : orderProductParam,
            "deliveryParam": deliveryParam,
            "payParam" : paymentParam
        }));
        navigate("/pay/ready", {state : paymentParam});
    }

    const calculateTotalDiscountAmounts = (orderProduct) => {
        return orderProduct.gradeDiscountAmount + orderProduct.usedCoupon?.discountAmount;
    }

    const changePayType = (type) => {
        setPayParam({
            ...payParam,
            "payType" : type
        });
    }

    return (
        <StyledOrderConfirmPageWrapper>
            <h2>주문정보 확인</h2>
            <BuyingProductList items={orderProductParam}/>
            <OrderDeliveryInfo deliveryParam={deliveryParam}/>
            <OrderDiscountForm orderProductParam={orderProductParam} setOrderProductParam={setOrderProductParam}/>
            <TotalAmountsCalculatePane orderProductParam={orderProductParam}/>
            <OrderPaymentInfo changePayType={changePayType}/>
            <Button className="w-100" size="lg" onClick={() => {
                paying();
            }}>결제하기</Button>
        </StyledOrderConfirmPageWrapper>
    );
}