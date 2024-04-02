import React from "react";
import { Button } from "react-bootstrap";
import styledComponents from "styled-components";
import DeliveryService from "../../../../js/delivery/delivery";

const DeliveryViewWrapper = styledComponents.div`
    border: 1px solid black;
    padding: 20px;
    margin-top: 10px;
`;

const StyledTable = styledComponents.table`
    margin: 10px 0;
    width: 100%;
`;

const StyledTh = styledComponents.th`
    text-align: right;
    width: 100px;
`;
const StyledTd = styledComponents.td`
    padding-left: 15px;
`;
const StyledButtonTd = styledComponents.td`
    text-align: right;
`;
const StyledHeaderDiv = styledComponents.div`
    font-weight: bold;
    float: left;
`;
const StyledButtonDiv = styledComponents.div`
    float: right;
`;

function DeliveryView(props){
    const {delivery, afterDelete} = props;

    const deleteDelivery = (deliveryId) => {
        DeliveryService.deleteDelivery(deliveryId).then(result => {
            alert("배송지 정보가 삭제되었습니다.");
            afterDelete(deliveryId);
        });
    }

    return (
        <DeliveryViewWrapper>
            <StyledHeaderDiv>{delivery.nickName}</StyledHeaderDiv>
            <StyledButtonDiv>
                <Button variant="danger" size="sm" onClick={()=>{
                    deleteDelivery(`${delivery.id}`);
                }}>삭제</Button>
            </StyledButtonDiv>
            <StyledTable>
                <tbody>
                    <tr>
                        <StyledTh>수령인</StyledTh>
                        <StyledTd>{delivery.receiverName}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>수령인 연락처</StyledTh>
                        <StyledTd>{delivery.receiverPhoneNumber}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>주소</StyledTh>
                        <StyledTd>{delivery.address} / {delivery.detailAddress} ({delivery.zipCode})</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>배송 요청사항</StyledTh>
                        <StyledTd>{delivery.requestMessage}</StyledTd>
                    </tr>
                </tbody>
            </StyledTable>
        </DeliveryViewWrapper>
    );
}

export default DeliveryView;