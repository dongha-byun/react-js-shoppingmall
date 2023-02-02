import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductSearchList from "./ProductSearchList";
import SearchFilter from "./filter/SearchFilter";
import { useState } from "react";
import { useEffect } from "react";
import ProductService from "../../../api/component/product/product";

const StyledSearchListPageWrapper = styled.div``;

const StyledSearchHeaderDiv = styled.div`
    padding-left: 20px;
`;

function ProductSearchListPage(){
    const {categoryId, subCategoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [orderType, setOrderType] = useState("SELL");

    useEffect(()=>{
        ProductService.getProducts(categoryId, subCategoryId, orderType).then(result => {
            setProducts(result);
        });
    }, [orderType]);

    return (
        <StyledSearchListPageWrapper>
            <StyledSearchHeaderDiv >
                <h3>categoryId : {categoryId} / subCategoryId : {subCategoryId} / orderType : {orderType}</h3>
            </StyledSearchHeaderDiv>
            <SearchFilter setOrderType = {setOrderType}/>
            <ProductSearchList products = {products}/>
        </StyledSearchListPageWrapper>
    );
}

export default ProductSearchListPage;