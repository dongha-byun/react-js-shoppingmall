import React from "react";
import styledComponents from "styled-components";
import TextButton from "../ui/TextButton";

const DeliveryViewWrapper = styledComponents.div`
    border: 1px solid black;
    padding: 20px;
    margin-top: 10px;
`;

const StyledTable = styledComponents.table`
    margin: 10px 0;
`;

const StyledTh = styledComponents.th`
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
                        <td>{delivery.zipCode}</td>
                    </tr>
                    <tr>
                        <StyledTh>주소</StyledTh>
                        <td>{delivery.address}</td>
                    </tr>
                    <tr>
                        <StyledTh>배송 요청사항</StyledTh>
                        <td>{delivery.requestMessage}</td>
                    </tr>
                </tbody>
            </StyledTable>
            <div>
                <TextButton value="삭제" onClick={()=> {
                    alert(`삭제 ${delivery.id}`);
                }} />
            </div>
        </DeliveryViewWrapper>
    );
}

export default DeliveryView;