import React from "react";
import styledComponents from "styled-components";
import DeliveryForm from "../../delivery/DeliveryForm";

const DeliveryInfoFormWrapper = styledComponents.div``;

function DeliveryInfoForm(props){
    
    return (
        <DeliveryInfoFormWrapper>
            <h3>배송지 정보 입력</h3>

            <DeliveryForm />
        </DeliveryInfoFormWrapper>
    );
}

export default DeliveryInfoForm;