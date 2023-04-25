import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledWrapper = styled.div`
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

const StyledUl = styled.ul`
    margin-top: 15px;
    padding: 0;
    width: 100%;
    display: inline-block;
`;

const StyledLi = styled.li`
    width: 20%;
    float: left;
`;

export default function OrderPaymentInfo() {

    const samplePayments = ['신한카드','국민카드'];
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <StyledWrapper>
            <h4>결제수단 선택</h4>
            <Form.Select>
                <option value="KAKAO_PAY">카카오페이</option>
                <option value="CARD">신용/체크 카드</option>
            </Form.Select>
            <StyledUl>
            {samplePayments.map((payment) => {
                return (
                    <StyledLi key={payment}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <Form.Check 
                                        type="radio" 
                                        label={payment} 
                                        name="payment_type" 
                                        id={payment}
                                    />
                                </Card.Title>
                                <Card.Text>
                                    xxxx-tttt-aaaa-dddd
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </StyledLi>
                );
            })}
                <StyledLi>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-center">
                                <Button variant="outline-primary">추가하기</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </StyledLi>
            </StyledUl>
        </StyledWrapper>
    );
}