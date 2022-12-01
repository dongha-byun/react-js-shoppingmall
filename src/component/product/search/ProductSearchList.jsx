import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { webUrl } from "../../../api/axios";
import ProductItem from "../ProductItem";

const StyledSearchListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    grid-auto-rows: minmax(100px, auto);
    gap: 10px 20px;
`;

function ProductSearchList(){
    const navigate = useNavigate();
    const products = [0,1,2,3,4,5,6,7,8,9];
    return (
        <StyledSearchListWrapper>
            {products.map((product, index) => {
                return (
                    <ProductItem 
                        key={index}
                        src={webUrl + '/image/pot.jpeg'}
                        name='냄비를 빙자한 프라이팬을 닮은 냄비 초울트라세일판'
                        score='4.7'
                        scoreCnt='1150'
                        onClick={() => {
                            navigate("/product-view");
                        }}
                        width='100%'
                    />
                );
            })}
        </StyledSearchListWrapper>
    );
}

export default ProductSearchList;