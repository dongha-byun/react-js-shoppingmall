import React from "react";
import styledComponents from "styled-components";
import DeliveryView from "../../../delivery/DeliveryView";
import { useState } from "react";
import DeliveryForm from "../../../delivery/DeliveryForm";
import deliveryInfos from "../../../../sample-data/delivery-data.json";
import { Button } from "react-bootstrap";
import CommonModal from "../../../modal/CommonModal";

const DeliveryConfigWrapper = styledComponents.div`
    padding: 20px;
`;
const DeliveryHeaderWrapper = styledComponents.div`
    padding-bottom: 15px;
`;

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
            [event.target.id]: event.target.value
        });
    }
    const addDelivery = () => {
        console.log(values);
        handleClose();
    }

    return (
        <DeliveryConfigWrapper>
            <DeliveryHeaderWrapper>
                <h3 className="display-inline">배송정보 설정</h3>
                <Button variant="outline-primary" className="float-right"
                    onClick={() => {
                        setShow(!show);
                    }}>
                추가하기</Button>
            </DeliveryHeaderWrapper>
            {deliveryInfos.map((data, index) => {
                return(
                    <DeliveryView key={index} delivery={data} />
                );
            })}

            <CommonModal show={show} handleClose={handleClose} 
                footerEvent={addDelivery} footerMessage="저장" headerMessage="배송정보 추가">
                <DeliveryForm onChangeForm={onChangeForm}/>
            </CommonModal>
        </DeliveryConfigWrapper>
    );
}

export default DeliveryConfig;