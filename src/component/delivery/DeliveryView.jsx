import React from "react";
import { Button } from "react-bootstrap";
import styledComponents from "styled-components";
import DeliveryService from "../../api/component/delivery/delivery";
import { useNavigate } from "react-router-dom";

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
            <StyledTable>
                <tbody>
                    <tr>
                        <StyledTh>수령인</StyledTh>
                        <StyledTd>{delivery.receiverName}</StyledTd>
                    </tr>
                    <tr>
                        <StyledTh>우편번호</StyledTh>
                        <StyledTd>{delivery.zipCode}</StyledTd>
                        <StyledButtonTd rowSpan={3}>
                            <Button variant="danger" onClick={()=>{
                                deleteDelivery(`${delivery.id}`);
                            }}>삭제</Button>
                        </StyledButtonTd>
                    </tr>
                    <tr>
                        <StyledTh>주소</StyledTh>
                        <StyledTd>{delivery.address} / {delivery.detailAddress}</StyledTd>
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