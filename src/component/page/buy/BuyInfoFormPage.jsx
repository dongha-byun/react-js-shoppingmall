import React, { useState } from "react";
import styledComponents from "styled-components";
import TextButton from "../../ui/TextButton";
import BuyingProductList from "./BuyingProductList";
import DeliveryInfoForm from "./DeliveryInfoForm";
import PaymentSelect from "./PaymentSelect";
import { useNavigate } from "react-router-dom";

const BuyInfoFormPageWrapper = styledComponents.div`
    padding: 20px;
`;

const BuyInfoFormButtonWrapper = styledComponents.div`
    padding: 20px;
`;

const BuyHeaderWrapper = styledComponents.h2`
    padding-bottom: 10px;
    border-bottom: 1px solid #cdcdcd;
`;

function BuyInfoFormPage(props){

    const navigate = useNavigate();
    const [orderParam, setOrderParam] = useState(
        {
            "productId": "1",
            "quantity" : 20,
            "delivery" : {
                "zipcode" : "12345",
                "address" : "리액트 state",
                "detailAddress" : "navigate Test",
                "receiverName" : "리액트 초보",
                "requestMessage" : "조심히 오세용~"
            },
            "payment" : {
                "type" : "카카오페이~"
            }
        }
    );

    const orderItem = () => {
        navigate("/order", {state : orderParam});
    }

    return (
        <BuyInfoFormPageWrapper>
            <BuyHeaderWrapper>주문하기</BuyHeaderWrapper>
            <BuyingProductList/>
            <DeliveryInfoForm />
            <PaymentSelect />
            <BuyInfoFormButtonWrapper>
                <div class="float-left">
                    총 가격 : 44,444원
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