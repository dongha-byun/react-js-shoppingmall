import React from "react";
import styledComponents from "styled-components";

const ProductInfoWrapper = styledComponents.div`
    padding: 0 10px;
`;

const ProductName = styledComponents.div`
    font-size: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ProductScore = styledComponents.div`
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