import React from "react";
import { Button } from "react-bootstrap";
import styledComponents from "styled-components";

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
    const {delivery} = props;
    return (
        <DeliveryViewWrapper>
            <StyledHeaderDiv>배송지 {delivery.id}</StyledHeaderDiv>
            <StyledTable>
                <tbody>
                    <tr>
                        <StyledTh>우편번호</StyledTh>
                        <StyledTd>{delivery.zipCode}</StyledTd>
                        <StyledButtonTd rowSpan={3}>
                            <Button variant="danger" onClick={()=>{
                                alert(`삭제 ${delivery.id}`);
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