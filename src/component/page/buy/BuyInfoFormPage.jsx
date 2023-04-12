import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import BuyingProductList from "./BuyingProductList";
import DeliveryInfoForm from "./DeliveryInfoForm";
import { useLocation, useNavigate } from "react-router-dom";
import { numberCommaFormat } from "../../../util/NumberFormat";
import { Button } from "react-bootstrap";

const BuyInfoFormPageWrapper = styledComponents.div`
    padding: 20px;
`;

const BuyInfoFormButtonWrapper = styledComponents.div`
    text-align: right;
    padding: 20px;
    font-size: 1.2em;
    font-weight: bold;
`;

const BuyHeaderWrapper = styledComponents.h2`
    padding: 0;
    border-bottom: 1px solid #cdcdcd;
`;

function BuyInfoFormPage(){

    const navigate = useNavigate();
    const { state } = useLocation();
    const [total, setTotal] = useState(0);
    const [orderProductParam, setOrderProductParam] = useState({});
    const [orderParam, setOrderParam] = useState(
        {
            "productId": "",
            "imgUrl" : "",
            "productName" : "",
            "providerName" : "",
            "quantity" : 0,
            "total" : 0,
            "receiverName" : "",
            "zipCode" : "",
            "address" : "",
            "detailAddress" : "",
            "requestMessage" : "",
            "type" : ""
        }
    );

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
        setOrderParam({
            ...orderParam,
            ["productId"]: state.productId,
            ["imgUrl"]: state.imgUrl,
            ["productName"]: state.productName,
            ["providerName"]: state.providerName,
            ["quantity"]: state.quantity,
            ["price"]: state.price,
            ["deliveryFee"]: state.deliveryFee
        });
        setTotal(
            state.price * state.quantity + state.deliveryFee
        );
    }, []);

    const onChangeDelivery = (event) => {
        setOrderParam({
            ...orderParam,
            [event.target.id] : event.target.value
        });
    };

    const onSelectDelivery = (delivery) => {
        if(delivery.id) {
            setOrderParam({
                ...orderParam,
                ["receiverName"] : delivery.receiverName,
                ["zipCode"] : delivery.zipCode,
                ["address"] : delivery.address,
                ["detailAddress"] : delivery.detailAddress,
                ["requestMessage"] : delivery.requestMessage
            });
        }else{
            setOrderParam({
                ...orderParam,
                ["receiverName"] : "",
                ["zipCode"] : "",
                ["address"] : "",
                ["detailAddress"] : "",
                ["requestMessage"] : ""
            });
        }
        
    };

    const orderItem = () => {
        navigate("/order", {state : orderParam});
    };

    return (
        <BuyInfoFormPageWrapper>
            <BuyHeaderWrapper>주문하기</BuyHeaderWrapper>
            <BuyingProductList orderProductParam={orderProductParam}/>
            <DeliveryInfoForm onChangeDelivery={onChangeDelivery} onSelectDelivery={onSelectDelivery}/>
            <BuyInfoFormButtonWrapper>
                총 가격 : {numberCommaFormat(total)}원
            </BuyInfoFormButtonWrapper>
            <Button className="w-100" size="lg" onClick={() => orderItem()}>주문하기</Button>
        </BuyInfoFormPageWrapper>
    );

}
export default BuyInfoFormPage;