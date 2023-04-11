import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import DeliveryForm from "../../delivery/DeliveryForm";
import DeliveryService from "../../../api/component/delivery/delivery";
import { Form } from "react-bootstrap";

const DeliveryInfoFormWrapper = styledComponents.div`
    padding: 10px 0;
    border-bottom: 1px solid #cdcdcd;
`;

const DeliverySelectWrapper = styledComponents.div`
    padding-bottom: 10px;
`;

function DeliveryInfoForm(props){
    const {onChangeDelivery, onSelectDelivery} = props;
    const [deliveries, setDeliveries] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState({});

    useEffect(() => {
        DeliveryService.getDeliveries().then(result => {
            setDeliveries(result);
        });
    }, []);
    
    const selectDelivery = (event) => {
        let id = event.target.value;
        if(id) {
            let selected = deliveries.filter(delivery => delivery.id == id)[0];
            setSelectedDelivery(selected);
            onSelectDelivery(selected);
        }else {
            setSelectedDelivery({});
            onSelectDelivery({});
        }
    }

    return (
        <DeliveryInfoFormWrapper>
            <h3>배송지 정보 입력</h3>
            <DeliverySelectWrapper>
                <Form.Select onChange={selectDelivery} defaultValue={""}>
                    <option value={""}>직접입력</option>
                    {deliveries.map((delivery) => {
                        return (
                            <option key={delivery.id} value={delivery.id}>{delivery.nickName}</option>
                        );
                    })}
                </Form.Select>
            </DeliverySelectWrapper>
            <DeliveryForm onChangeForm={onChangeDelivery} isAddPage={false} selectedDelivery={selectedDelivery}/>
        </DeliveryInfoFormWrapper>
    );
}

export default DeliveryInfoForm;