import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { numberCommaFormat } from "../../../util/NumberFormat";

const StyledPayResultWrapper = styled.div`
    margin-top: 15px;
`;

const StyledLeftDiv = styled.div`
    float: left;
`;

const StyledRightDiv = styled.div`
    float: right;
`;

export default function OrderPaymentResult(props) {
    const { payParam } = props;

    return(
        <StyledPayResultWrapper>
            <Card>
                <Card.Header as="h5">결제 정보</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="border-0">
                            <StyledLeftDiv>상품 가격</StyledLeftDiv>
                            <StyledRightDiv>{numberCommaFormat(payParam.productPrice)}원</StyledRightDiv>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <StyledLeftDiv>할인 금액</StyledLeftDiv>
                            <StyledRightDiv>{numberCommaFormat(payParam.discountAmount)}원</StyledRightDiv>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <StyledLeftDiv>배송비</StyledLeftDiv>
                            <StyledRightDiv>{ numberCommaFormat(payParam.deliveryFee)}원</StyledRightDiv>
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <StyledLeftDiv>카카오페이</StyledLeftDiv>
                            <StyledRightDiv>{ numberCommaFormat(payParam.total)}원</StyledRightDiv>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <StyledLeftDiv>총 결제금액</StyledLeftDiv>
                            <StyledRightDiv>{ numberCommaFormat(payParam.total)}원</StyledRightDiv>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </StyledPayResultWrapper>
    );
}