import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import DeliveryView from "../../../delivery/DeliveryView";
import { useNavigate } from "react-router-dom";
import ProviderHeader from "../../../provide/component/ProviderHeader";
import DeliveryService from "../../../../js/delivery/delivery";

const DeliveryConfigWrapper = styledComponents.div`
    padding: 20px;
`;
const DeliveryHeaderWrapper = styledComponents.div`
    padding-bottom: 15px;
`;

function DeliveryConfig(props){
    const navigate = useNavigate();
    const [deliveries, setDeliveries] = useState([]);

    useEffect(()=>{
        DeliveryService.getDeliveries().then(result => {
            setDeliveries(result);
        });
    }, []);

    const removeDelivery = (deliveryId) => {
        setDeliveries(
            deliveries.filter(delivery => delivery.id != deliveryId)
        );
    }

    return (
        <DeliveryConfigWrapper>
            <ProviderHeader 
                title="배송정보 설정"
                onClick={() => navigate("add")}
                buttonMessage="추가하기"
            />
            {deliveries.map((delivery, index) => {
                return(
                    <DeliveryView key={index} delivery={delivery} afterDelete={removeDelivery} />
                );
            })}
        </DeliveryConfigWrapper>
    );
}

export default DeliveryConfig;