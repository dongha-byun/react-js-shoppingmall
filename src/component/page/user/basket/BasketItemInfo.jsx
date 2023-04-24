import React from "react";
import styled from "styled-components";

const BasketItemInfoWrapper = styled.div``;
const CartProductNameWrapper = styled.h5`
    margin-top: 5px;
`;

function BasketItemInfo(props){
    const { productName, partnerName } = props;

    return (
        <BasketItemInfoWrapper>
            <div>{partnerName}</div>
            <CartProductNameWrapper>{ productName }</CartProductNameWrapper>
        </BasketItemInfoWrapper>
    );
}

export default BasketItemInfo;