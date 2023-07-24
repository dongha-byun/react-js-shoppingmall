import React from "react";
import styled from "styled-components";
import { Card, Form, Button } from "react-bootstrap";

const StyledUl = styled.ul`
    margin-top: 15px;
    padding: 0;
    width: 100%;
    display: inline-block;
`;

const StyledLi = styled.li`
    width: 20%;
    float: left;
    margin: 0 0.25em;
`;

export default function CardPayTypeSelectForm(props) {
    const { cardList } = props;
    return(
        <StyledUl>
            {cardList.map((card) => {
                return (
                    <StyledLi key={card.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <Form.Check 
                                        type="radio" 
                                        label={card.cardCompanyName} 
                                        name="payment_type" 
                                        id={card.id}
                                    />
                                </Card.Title>
                                <Card.Text>
                                    {card.cardNo}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </StyledLi>
                );
            })}
            <StyledLi>
                <Card>
                    <Card.Body>
                        <Card.Text className="text-center">
                            <Button variant="outline-primary">추가하기</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </StyledLi>
        </StyledUl>
    );
}