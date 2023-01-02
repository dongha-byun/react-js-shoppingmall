import React from "react";
import styled from "styled-components";

const BasketItemInfoWrapper = styled.div``;

function BasketItemInfo(props){
    const { product } = props;

    return (
        <BasketItemInfoWrapper>
            <div><span>냄비제작소(주)</span></div>
            <h5>{ product.name }</h5>
        </BasketItemInfoWrapper>
    );
}

export default BasketItemInfo;