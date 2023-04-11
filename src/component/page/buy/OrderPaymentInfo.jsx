import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledWrapper = styled.div`
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

const StyledUl = styled.ul`
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
            <StyledUl>
            {samplePayments.map((payment) => {
                return (
                    <StyledLi>
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