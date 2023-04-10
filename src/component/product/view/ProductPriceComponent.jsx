import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import BasketService from "../../../api/component/basket/basket";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const [orderProductParam, setOrderProductParam] = useState({});
    
    useEffect(() => {
        setPrice(product.price);
        setOrderProductParam(
            {
                "productId" : product.id,
                "productName" : product.name,
                "imgUrl" : "/images/pot.jpeg",
                "providerName" : "판매업체 이름",
                "quantity" : quantity,
                "price" : product.price,
                "deliveryFee" : 0
            }
        );
    }, [product]);

    const buyNow = () =>{
        navigate("/buy", {state: orderProductParam});
    }

    const intoBasket = () =>{
        let params = {
            quantity: quantity,
            productId: product.id
        };
        BasketService.saveBasket(params).then(result => {
            alert("장바구니에 상품이 추가되었습니다.");
            navigate("/my-page/basket");
        })
    }

    const onChangeQuantity = (quantity) => {
        setQuantity(quantity);
        setPrice(quantity * product.price);
        setOrderProductParam({
            ...orderProductParam,
            ["quantity"]: quantity
        });
    }

    return(
        <ProductPriceComponentWrapper>
            <ProductNameWrapper>
                <h4>{product.name}</h4>
            </ProductNameWrapper>
            <StyledPriceWrapper>
                <StyledPriceInfo>{price} 원</StyledPriceInfo>
            </StyledPriceWrapper>
            <StyledBuyWrapper>
                <Form>
                    <Row>
                        <Col sm={6}>
                            <Form.Group>
                                <Form.Control type="number" defaultValue={quantity} onChange={(event)=>{
                                    onChangeQuantity(event.target.value);
                                }} onBlur={()=>{
                                    onChangeQuantity(quantity);
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