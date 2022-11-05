import React from "react";
import styledComponents from "styled-components";
import ProductInfo from "./ProductInfo";

const ProductWrapper = styledComponents.div`
    width: ${(props) => props.width || `25%` };
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
    const {src, name, score, scoreCnt, onClick, width} = props;

    return(
        <ProductWrapper onClick={onClick} width={width}>
            <ProductImage src={src} />
            <ProductInfo name={name} score={score} scoreCnt={scoreCnt} />
        </ProductWrapper>
    );

}

export default ProductItem;