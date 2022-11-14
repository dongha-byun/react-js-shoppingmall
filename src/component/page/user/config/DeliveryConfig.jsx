import React from "react";
import styledComponents from "styled-components";
import DeliveryView from "../../../delivery/DeliveryView";
import deliveryInfos from "../../../../sample-data/delivery-data.json";
import { useNavigate } from "react-router-dom";
import ProviderHeader from "../../../provide/component/ProviderHeader";

const DeliveryConfigWrapper = styledComponents.div`
    padding: 20px;
`;
const DeliveryHeaderWrapper = styledComponents.div`
    padding-bottom: 15px;
`;

function DeliveryConfig(props){
    const navigate = useNavigate();

    return (
        <DeliveryConfigWrapper>
            <ProviderHeader 
                title="배송정보 설정"
                onClick={() => navigate("add")}
                buttonMessage="추가하기"
            />
            {deliveryInfos.map((data, index) => {
                return(
                    <DeliveryView key={index} delivery={data} />
                );
            })}
        </DeliveryConfigWrapper>
    );
}

export default DeliveryConfig;