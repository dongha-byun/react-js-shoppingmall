import React from "react";
import styledComponents from "styled-components";
import DeliveryView from "../../../delivery/DeliveryView";
import TextButton from "../../../ui/TextButton";
import { useState } from "react";
import Modal from "../../../modal/Modal";
import "../../../modal/css/modal.css";
import DeliveryForm from "../../../delivery/DeliveryForm";
import deliveryInfos from "../../../../sample-data/delivery-data.json";

const DeliveryConfigWrapper = styledComponents.div``;

function DeliveryConfig(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    /* 배송지 추가 관련 state 및 function */
    const [values, setValues] = useState({
        zipCode : "",
        address : "",
        detailAddress : "",
        requestMessage : ""
    });
    const onChangeForm = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }
    const addDelivery = () => {
        handleClose();
    }

    return (
        <DeliveryConfigWrapper>
            <h3>배송정보 설정</h3>
            <TextButton 
                value="추가하기" 
                width="100%" height="50px"
                onClick={()=>{
                    setShow(!show);
                }}/>
            {deliveryInfos.map((data, index) => {
                return(
                    <DeliveryView key={index} delivery={data} />
                );
            })}

            <Modal open={show} close={handleClose} confirm={addDelivery} header="배송정보 추가" confirmMessage="추가">
                <DeliveryForm onChangeForm={onChangeForm}/>
            </Modal>
        </DeliveryConfigWrapper>
    );
}

export default DeliveryConfig;