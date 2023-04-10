import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import TextButton from "../../ui/TextButton";
import BuyingProductList from "./BuyingProductList";
import DeliveryInfoForm from "./DeliveryInfoForm";
import PaymentSelect from "./PaymentSelect";
import { useLocation, useNavigate } from "react-router-dom";

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
    const { state } = useLocation();
    const [orderProductParam, setOrderProductParam] = useState({});
    const [orderParam, setOrderParam] = useState(
        {
            "productId": "1",
            "quantity" : 20,
            "delivery" : {
                "zipcode" : "",
                "address" : "",
                "detailAddress" : "",
                "receiverName" : "",
                "requestMessage" : ""
            },
            "payment" : {
                "type" : "카카오페이~"
            }
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
            ["productId"]: orderProductParam.productId,
            ["quantity"]: orderProductParam.quantity
        });
    }, []);

    const onChangeDelivery = (deliveryParam) => {
        console.log(deliveryParam);
    }

    const orderItem = () => {
        navigate("/order", {state : orderParam});
    }

    return (
        <BuyInfoFormPageWrapper>
            <BuyHeaderWrapper>주문하기</BuyHeaderWrapper>
            <BuyingProductList orderProductParam={orderProductParam}/>
            <DeliveryInfoForm onChangeDelivery={onChangeDelivery} />
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