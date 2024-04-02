import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { webThumbnailUrl } from "../../../../js/axios";
import ProductItem from "../ProductItem";

const StyledSearchListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    grid-auto-rows: minmax(100px, auto);
    gap: 10px 20px;
`;

function ProductSearchList(props){
    const navigate = useNavigate();
    const {products} = props;

    return (
        <StyledSearchListWrapper>
            {products.map((product) => {
                let thumbnail = product.thumbnail || 'pot.jpeg';
                return (
                    <ProductItem 
                        key={product.id}
                        src={webThumbnailUrl + thumbnail}
                        name={product.name}
                        score={product.score}
                        salesVolume={product.salesVolume}
                        onClick={() => {
                            navigate("/product/"+product.id);
                        }}
                        width='100%'
                    />
                );
            })}
        </StyledSearchListWrapper>
    );
}

export default ProductSearchList;