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
    const {src, name, score, salesVolume, onClick, width} = props;

    return(
        <ProductWrapper width={width}>
            <ProductImage src={src} onClick={onClick} />
            <ProductInfo name={name} score={score} salesVolume={salesVolume} />
        </ProductWrapper>
    );

}

export default ProductItem;