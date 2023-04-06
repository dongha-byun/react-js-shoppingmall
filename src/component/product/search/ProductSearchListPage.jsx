import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductSearchList from "./ProductSearchList";
import SearchFilter from "./filter/SearchFilter";
import { useState } from "react";
import { useEffect } from "react";
import ProductService from "../../../api/component/product/product";
import { Button } from "react-bootstrap";

const StyledSearchListPageWrapper = styled.div``;

const StyledSearchHeaderDiv = styled.div`
    padding-left: 20px;
`;

function ProductSearchListPage(){
    const {categoryId, subCategoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [orderType, setOrderType] = useState("SELL");
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);

    useEffect(()=>{
        ProductService.getProducts(categoryId, subCategoryId, orderType, limit, offset).then(result => {
            setProducts(result.data);
            setTotalCount(result.totalCount);
        });
    }, [orderType]);

    return (
        <StyledSearchListPageWrapper>
            <StyledSearchHeaderDiv >
                <h3>categoryId : {categoryId} / subCategoryId : {subCategoryId} / orderType : {orderType} / 총 {totalCount} 건</h3>
            </StyledSearchHeaderDiv>
            <SearchFilter orderType={orderType} setOrderType = {setOrderType}/>
            <ProductSearchList products = {products}/>
            <Button>더보기</Button>
        </StyledSearchListPageWrapper>
    );
}

export default ProductSearchListPage;