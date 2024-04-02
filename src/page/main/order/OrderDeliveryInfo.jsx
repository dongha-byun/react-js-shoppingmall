import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledWrapper = styled.div`
    padding: 10px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

export default function OrderDeliveryInfo(props) {
    const {deliveryParam} = props;

    return (
        <StyledWrapper>
            <Card>
                <Card.Header as="h5">배송지 정보</Card.Header>
                <Card.Body>
                    <Card.Title>{deliveryParam.receiverName}</Card.Title>
                    <Card.Text>
                        연락처 : {deliveryParam.receiverPhoneNumber} <br/>
                        받는주소 : {deliveryParam.address} {deliveryParam.detailAddress} ({deliveryParam.zipCode}) <br/>
                        요청사항 : {deliveryParam.requestMessage}
                    </Card.Text>
                </Card.Body>
            </Card>
        </StyledWrapper>
    );
}