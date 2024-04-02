import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import BasketService from "../../../../js/basket/basket";
import { useNavigate } from "react-router-dom";
import { numberCommaFormat } from "../../../../util/NumberFormat";

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
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [orderProductParam, setOrderProductParam] = useState({});
    
    useEffect(() => {   
        setPrice(product.price);
        setOrderProductParam({
            "items": [
                {
                    "productId" : product.id,
                    "quantity" : quantity,
                    "price" : product.price,
                    "storedImgFileName" : product.thumbnail,
                    "productName" : product.name,
                    "partnersName" : product.partnersName,
                }
            ]
        });
    }, [product]);

    const buyNow = () =>{
        navigate("/order", {state: orderProductParam});
    }

    const intoBasket = () =>{
        let params = {
            quantity: quantity,
            productId: product.id
        };
        BasketService.saveBasket(params).then(result => {
            alert("장바구니에 상품이 추가되었습니다.");
            navigate("/my-page/basket");
        });
    }

    const onChangeQuantity = (changeQuantity) => {
        let tempItems = orderProductParam.items.map((tempItem) => {
            return {...tempItem, quantity: changeQuantity};
        });

        setQuantity(changeQuantity);
        setPrice(changeQuantity * product.price);
        setOrderProductParam({
            "items": tempItems
        });
    }

    return(
        <ProductPriceComponentWrapper>
            <ProductNameWrapper>
                <h4>{product.name}</h4>
                <h6>{product.partnersName}</h6>
            </ProductNameWrapper>
            <StyledPriceWrapper>
                <StyledPriceInfo>{numberCommaFormat(price)} 원</StyledPriceInfo>
            </StyledPriceWrapper>
            <StyledBuyWrapper>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">구매수량</Form.Label>
                                <Col sm="6">
                                    <Form.Control type="number" 
                                        size="sm"
                                        defaultValue={quantity} 
                                        onChange={(event)=>{
                                            onChangeQuantity(event.target.value);
                                        }} onBlur={()=>{
                                            onChangeQuantity(quantity);
                                        }} />
                                </Col>
                                <Form.Label column>(남은 수량 : {product.stock}개)</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="outline-primary" 
                                className="w-100 mt-1"
                                onClick={()=>{
                                    intoBasket();
                                }}>장바구니 추가</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="w-100 mt-1" size="lg"
                                onClick={()=>{
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