import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import BuyingProductList from "./BuyingProductList";
import DeliveryInfoForm from "./DeliveryInfoForm";
import { useLocation, useNavigate } from "react-router-dom";
import { numberCommaFormat } from "../../../util/NumberFormat";
import { Button } from "react-bootstrap";
import UserService from "../../../api/component/user/user";

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
    const [total, setTotal] = useState(0);;
    const [orderParam, setOrderParam] = useState(
        {
            "items": [],
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
        UserService.getGradeInfo().then((result) => {
            let totalPrice = 0;
            let items = state.items.map((element) => {
                let productPrice = element.price * element.quantity;
                let gradeDiscountAmount = Math.round(productPrice * result.gradeDiscountRate / 100);
                totalPrice += productPrice - gradeDiscountAmount;
                return {...element, ["productPrice"]: productPrice , ["gradeDiscountAmount"]: gradeDiscountAmount}
            });
    
            setOrderParam({
                ...orderParam,
                "items": items,
                "total": totalPrice,
                "deliveryFee": 0
            });
            setTotal(totalPrice);
        });
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
        navigate("/order/confirm", {state : orderParam});
    };

    return (
        <BuyInfoFormPageWrapper>
            <BuyHeaderWrapper>주문하기</BuyHeaderWrapper>
            <BuyingProductList items={orderParam.items} />
            <DeliveryInfoForm onChangeDelivery={onChangeDelivery} onSelectDelivery={onSelectDelivery}/>
            <BuyInfoFormButtonWrapper>
                총 가격 : {numberCommaFormat(total)}원
            </BuyInfoFormButtonWrapper>
            <Button className="w-100" size="lg" onClick={() => orderItem()}>주문하기</Button>
        </BuyInfoFormPageWrapper>
    );

}
export default BuyInfoFormPage;