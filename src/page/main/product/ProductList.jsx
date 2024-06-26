import React from "react";
import ProductItem from "./ProductItem";
import styledComponents from "styled-components";
import { webUrl } from "../../../js/axios";
import { useNavigate } from "react-router-dom";

const ProductListWrapper = styledComponents.div`
    padding: 0 10px;
`;

const ProductSection = styledComponents.div`
    border-bottom: 1px solid #000000;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;


function ProductList(props){
    const {sectionName} = props;
    const products = [0,1,2,3];
    const navigate = useNavigate();

    return(
        <ProductListWrapper>
            {sectionName && <h3>{sectionName}</h3>}
            <ProductSection>
                {
                    products.map( (productId, index) => {
                        return(
                            <ProductItem 
                                key={index}
                                src={webUrl + '/image/pot.jpeg'}
                                name='냄비를 빙자한 프라이팬을 닮은 냄비 초울트라세일판'
                                score='4.7'
                                scoreCnt='1150'
                                onClick={() => {
                                    navigate("/product/"+productId);
                                }}
                            />
                        )
                    })
                }
            </ProductSection>
        </ProductListWrapper>
    );

}
export default ProductList;