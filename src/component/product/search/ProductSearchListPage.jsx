import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../page/Header";
import ProductSearchList from "./ProductSearchList";
import SearchFilter from "./filter/SearchFilter";

const StyledSearchListPageWrapper = styled.div``;

function ProductSearchListPage(props){
    const {categoryId} = useParams();

    return (
        <StyledSearchListPageWrapper>
            <Header></Header>
            <h3>categoryId : {categoryId}</h3>
            <SearchFilter />
            <ProductSearchList />
        </StyledSearchListPageWrapper>
    );
}

export default ProductSearchListPage;