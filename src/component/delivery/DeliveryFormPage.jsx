import React from "react";
import styled from "styled-components";
import ProviderHeader from "../provide/component/ProviderHeader";
import DeliveryService from "../../js/delivery/delivery";
import { useNavigate } from "react-router-dom";
import DeliveryForm from "./DeliveryForm";
import { useState } from "react";

const StyledDeliveryFormWrapper = styled.div`
    padding: 20px;
`;

function DeliveryFormPage() {
    const navigate = useNavigate();
    
    /* 배송지 추가 관련 state 및 function */
    const [values, setValues] = useState({
        nickName: "",
        receiverName: "",
        receiverPhoneNumber: "",
        zipCode : "",
        address : "",
        detailAddress : "",
        requestMessage : ""
    });
    const onChangeForm = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        });
    }

    const addDelivery = () => {
        DeliveryService.saveDelivery(values).then(result => {
            alert("배송지 정보가 추가되었습니다.");
            navigate("/my-page/delivery");
        });
    }
    
    return (
        <StyledDeliveryFormWrapper>
            <ProviderHeader 
                title="배송지 추가"
                onClick={addDelivery}
                buttonMessage="배송지 등록"
            />
            <DeliveryForm onChangeForm={onChangeForm} isAddPage={true}/>
        </StyledDeliveryFormWrapper>
    );
}

export default DeliveryFormPage;