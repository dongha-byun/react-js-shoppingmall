import React from "react";
import styledComponents from "styled-components";

const ProductInfoWrapper = styledComponents.div`
    padding: 0 10px;
`;

const ProductName = styledComponents.span`
    display: flex;
    font-size: 1.2em;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-stretch: normal;
`;

const ProductScore = styledComponents.span`
    float: right;
`;

function ProductInfo(props){

    const {name, score, scoreCnt} = props;

    return(
        <ProductInfoWrapper>
            <ProductName>{name}</ProductName>
            <ProductScore>{score}({scoreCnt})</ProductScore>
        </ProductInfoWrapper>
    );
}

export default ProductInfo;