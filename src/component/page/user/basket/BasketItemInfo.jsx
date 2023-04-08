import React from "react";
import styled from "styled-components";

const BasketItemInfoWrapper = styled.div``;
const CartProductNameWrapper = styled.h5`
    margin-top: 5px;
`;

function BasketItemInfo(props){
    const { productName } = props;

    return (
        <BasketItemInfoWrapper>
            <div><span>냄비제작소(주)</span></div>
            <CartProductNameWrapper>{ productName }</CartProductNameWrapper>
        </BasketItemInfoWrapper>
    );
}

export default BasketItemInfo;