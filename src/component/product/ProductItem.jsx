import React from "react";
import styledComponents from "styled-components";
import ProductInfo from "./ProductInfo";

const ProductWrapper = styledComponents.div`
    width: 20%;
    height: 300px;
    margin: 0 auto;
    padding: 12px 0px;
    position: relative;
    text-align: center;
`;

const ProductImage = styledComponents.img`
    width: calc(100% - 20px);
    height: auto;
`;

function ProductItem(props){
    const {src, name, score, scoreCnt, onClick} = props;

    return(
        <ProductWrapper onClick={onClick}>
            <ProductImage src={src} />
            <ProductInfo name={name} score={score} scoreCnt={scoreCnt} />
        </ProductWrapper>
    );

}

export default ProductItem;