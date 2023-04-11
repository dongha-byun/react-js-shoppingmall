import React from "react";
import styled from "styled-components";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const StyledWrapper = styled.div`
    padding: 10px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

export default function OrderDeliveryInfo(props) {
    const {deliveryParam} = props;

    return (
        <StyledWrapper>
            <h4>배송지 정보</h4>
            <Card>
                <Card.Body>
                    <Card.Title>{deliveryParam.receiverName}</Card.Title>
                    <Card.Text>
                        ({deliveryParam.zipCode}) {deliveryParam.address} {deliveryParam.detailAddress}
                    </Card.Text>
                    <Card.Footer>
                        요청사항 : {deliveryParam.requestMessage}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </StyledWrapper>
    );
}