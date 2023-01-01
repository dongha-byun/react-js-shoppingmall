import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

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

    const {product} = props;
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        console.log("in useEffect by product");
        setPrice(product.price);
    }, [product]);

    const buyNow = () =>{
        alert("바로구매");
    }

    const intoBasket = () =>{
        alert("장바구니");
    }

    const onChangeQuantity = (quantity) => {
        setQuantity(quantity);
        setPrice(quantity * product.price);
    }

    return(
        <ProductPriceComponentWrapper>
            <ProductNameWrapper>
                <h4>테스트 상품명 {product.name}</h4>
            </ProductNameWrapper>
            <StyledPriceWrapper>
                <StyledPriceInfo>{price} 원</StyledPriceInfo>
            </StyledPriceWrapper>
            <StyledBuyWrapper>
                <Form>
                    <Row>
                        <Col sm={6}>
                            <Form.Group>
                                <Number></Number>
                                <Form.Control type="number" defaultValue={quantity} onChange={(event)=>{
                                    onChangeQuantity(event.target.value);
                                }} onBlur={()=>{
                                    onChangeQuantity(1);
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