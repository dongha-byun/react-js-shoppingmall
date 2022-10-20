import React from "react";
import ProductItem from "./ProductItem";
import styledComponents from "styled-components";

const ProductSection = styledComponents.div`
    border-bottom: 1px solid #000000;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;


function ProductList(props){

    const products = [0,1,2,3,4];

    return(
        <ProductSection>
            {
                products.map( (product, index) => {
                    return(
                        <ProductItem 
                            key={index}
                            src='http://localhost:8080/image/pot.jpeg'
                            name='냄비를 빙자한 프라이팬을 닮은 냄비 초울트라세일판'
                            score='4.7'
                            scoreCnt='1150'
                        />
                    )
                })
            }
        </ProductSection>
    );

}
export default ProductList;