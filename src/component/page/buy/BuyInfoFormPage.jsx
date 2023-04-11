import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import TextButton from "../../ui/TextButton";
import BuyingProductList from "./BuyingProductList";
import DeliveryInfoForm from "./DeliveryInfoForm";
import PaymentSelect from "./PaymentSelect";
import { useLocation, useNavigate } from "react-router-dom";
import { numberCommaFormat } from "../../../util/NumberFormat";

const BuyInfoFormPageWrapper = styledComponents.div`
    padding: 20px;
`;

const BuyInfoFormButtonWrapper = styledComponents.div`
    padding: 20px;
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
            <PaymentSelect />
            <BuyInfoFormButtonWrapper>
                <div class="float-left">
                    총 가격 : {numberCommaFormat(total)}원
                </div>
                <div class="float-right">
                    <TextButton value="주문하기" 
                        onClick={()=>{
                            orderItem();
                        }} 
                    />
                </div>
            </BuyInfoFormButtonWrapper>
        </BuyInfoFormPageWrapper>
    );

}
export default BuyInfoFormPage;