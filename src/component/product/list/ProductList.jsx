import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { webThumbnailUrl, webUrl } from "../../../api/axios";
import ProductItem from "../ProductItem";

const StyledSearchListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    grid-auto-rows: minmax(100px, auto);
    gap: 10px 20px;
`;

export default function ProductList(props){
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
                        scoreCnt={product.scoreCnt}
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