import React from "react";
import styledComponents from "styled-components";
import TextButton from "../../ui/TextButton";
import BuyingProductList from "./BuyingProductList";
import DeliveryInfoForm from "./DeliveryInfoForm";
import PaymentSelect from "./PaymentSelect";

const BuyInfoFormPageWrapper = styledComponents.div`
    padding: 20px;
`;

const BuyInfoFormButtonWrapper = styledComponents.div`
    padding: 20px;
`;

function BuyInfoFormPage(props){

    return (
        <BuyInfoFormPageWrapper>
            <h2>주문하기</h2>
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
                            alert("주문하기");
                        }} 
                    />
                </div>
            </BuyInfoFormButtonWrapper>
        </BuyInfoFormPageWrapper>
    );

}
export default BuyInfoFormPage;