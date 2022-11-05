import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductSearchList from "./ProductSearchList";
import SearchFilter from "./filter/SearchFilter";

const StyledSearchListPageWrapper = styled.div``;

const StyledSearchHeaderDiv = styled.div`
    padding-left: 20px;
`;

function ProductSearchListPage(props){
    const {categoryId} = useParams();

    return (
        <StyledSearchListPageWrapper>
            <StyledSearchHeaderDiv >
                <h3>categoryId : {categoryId}</h3>
            </StyledSearchHeaderDiv>
            <SearchFilter />
            <ProductSearchList />
        </StyledSearchListPageWrapper>
    );
}

export default ProductSearchListPage;