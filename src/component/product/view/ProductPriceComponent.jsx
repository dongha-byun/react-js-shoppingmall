import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const ProductPriceComponentWrapper = styled.div`
    margin-left: 10px;
    padding: 20px;
    width: 100%;
`;

const ProductNameWrapper = styled.div`
    padding: 5px;
    border-bottom: 1px solid black;
    width: 100%;
`;

const StyledPriceWrapper = styled.div`
    height: 100%;
    min-height: 100px;
    max-height: 500px;
    padding: 5px;
`;

const StyledPriceInfo = styled.span`
    color: red;
    font-weight: bold;
    font-size: 1.2em;
`;

const StyledBuyWrapper = styled.div`
    padding-top: 15px;
    border-top: 1px solid black;
`;

function ProductPriceComponent(props){

    const {item} = props;
    const [price, setPrice] = useState(11111);

    const buyNow = () =>{
        alert("바로구매");
    }

    const intoBasket = () =>{
        alert("장바구니");
    }

    return(
        <ProductPriceComponentWrapper>
            <ProductNameWrapper>
                <h4>테스트 상품명 {item}</h4>
            </ProductNameWrapper>
            <StyledPriceWrapper>
                <StyledPriceInfo>11111원</StyledPriceInfo>
            </StyledPriceWrapper>
            <StyledBuyWrapper>
                <Form>
                    <Row>
                        <Col sm={6}>
                            <Form.Group>
                                <Form.Control type="number" onChange={(event)=>{
                                    setPrice(event.target.value * 11111);
                                }} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="outline-primary" onClick={()=>{
                                intoBasket();
                            }}>장바구니 추가</Button>
                            <Button className="mx-1" onClick={()=>{
                                buyNow();
                            }}>바로구매</Button>
                        </Col>
                    </Row>
                </Form>
            </StyledBuyWrapper>
        </ProductPriceComponentWrapper>
    );
}

export default ProductPriceComponent;