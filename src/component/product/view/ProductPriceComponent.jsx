import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextButton from "../../ui/TextButton";
import { Button } from "react-bootstrap";

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

    const [price, setPrice] = useState(11111);
    const navigate = useNavigate();

    const buyNow = () =>{
        alert("바로구매");
    }

    const intoBasket = () =>{
        alert("장바구니");
    }

    return(
        <ProductPriceComponentWrapper>
            <ProductNameWrapper>
                <h4>테스트 상품명</h4>
            </ProductNameWrapper>
            <StyledPriceWrapper>
                <StyledPriceInfo>11111원</StyledPriceInfo>
            </StyledPriceWrapper>
            <StyledBuyWrapper>
                <input type="number" min="1" onChange={(e)=>{
                    setPrice(e.target.value * 11111);
                }}/>
                <Button variant="outline-primary" onClick={()=>{
                    intoBasket();
                }}>장바구니 추가</Button>
                <Button onClick={()=>{
                    buyNow();
                }}>바로구매</Button>
            </StyledBuyWrapper>
        </ProductPriceComponentWrapper>
    );
}

export default ProductPriceComponent;