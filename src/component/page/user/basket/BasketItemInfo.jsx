import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BasketItemInfoWrapper = styled.div``;
const CartProductNameWrapper = styled.h5`
    margin-top: 5px;
`;

function BasketItemInfo(props){
    const navigate = useNavigate();
    const { productId, productName, partnerName } = props;

    return (
        <BasketItemInfoWrapper>
            <div>{partnerName}</div>
            <CartProductNameWrapper onClick={() => {
                navigate("/product/"+productId);
            }}>
                { productName }
            </CartProductNameWrapper>
        </BasketItemInfoWrapper>
    );
}

export default BasketItemInfo;