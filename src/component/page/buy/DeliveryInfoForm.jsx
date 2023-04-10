import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import DeliveryForm from "../../delivery/DeliveryForm";
import DeliveryService from "../../../api/component/delivery/delivery";

const DeliveryInfoFormWrapper = styledComponents.div`
    padding-botton: 10px;
    border-bottom: 1px solid #cdcdcd;
`;

function DeliveryInfoForm(props){
    const {onChangeDelivery} = props;
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        DeliveryService.getDeliveries().then(result => {
            setDeliveries(result);
        });
    }, []);
    
    return (
        <DeliveryInfoFormWrapper>
            <h3>배송지 정보 입력</h3>
            <select>
                <option value={""}>직접입력</option>
                {deliveries.map((delivery) => {
                    return (
                        <option key={delivery.id} value="account">{delivery.nickName}</option>
                    );
                })}
            </select>
            
        </DeliveryInfoFormWrapper>
    );
}

export default DeliveryInfoForm;