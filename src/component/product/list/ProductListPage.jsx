import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductService from "../../../api/component/product/product";
import ProductList from "./ProductList";
import SearchFilter from "../search/filter/SearchFilter";
import { Button } from "react-bootstrap";

const StyledSearchListPageWrapper = styled.div`
    padding-bottom: 20px;
`;

const StyledSearchHeaderDiv = styled.div`
    padding: 15px 0 15px 20px;
    border-bottom: 1px solid #cdcdcd;
    display: inline-block;
    width: 100%;
`;

const StyledSectionDiv = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #cdcdcd;
    display: inline-block;
    width: 100%;
`;

export default function ProductListPage() {
    const listCount = 12;
    const {categoryId, subCategoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [orderType, setOrderType] = useState("SELL");
    const [totalCount, setTotalCount] = useState(0);
    const [offset, setOffset] = useState(0);
    const [categoryName, setCategoryName] = useState();
    const [subCategoryName, setSubCategoryName] = useState();

    useEffect(()=>{
        ProductService.getProducts(categoryId, subCategoryId, orderType, listCount, 0)
        .then(result => {
            setProducts(result.data);
            setTotalCount(result.totalCount);
            setCategoryName(result.categoryName);
            setSubCategoryName(result.subCategoryName);
            setOffset(0);
        });
    }, [categoryId, subCategoryId, orderType]);

    const more = () => {
        ProductService.moreProducts(categoryId, subCategoryId, orderType, listCount, offset + listCount)
        .then(result => {
            let temp = products;
            setProducts(temp.concat(result.data));
            setOffset(offset + listCount);
        });
    }

    return (
        <StyledSearchListPageWrapper>
            <StyledSearchHeaderDiv>
                <h3>카테고리 : {categoryName} / {subCategoryName}</h3>
            </StyledSearchHeaderDiv>
            <StyledSectionDiv>
                <SearchFilter setOrderType = {setOrderType}/>
                <div className="float-right">총 {totalCount} 건</div>
            </StyledSectionDiv>
            <ProductList products = {products}/>
            <Button size="lg"
                variant="outline-primary" 
                className="w-100"
                onClick={more}
            >더보기</Button>
        </StyledSearchListPageWrapper>
    );
}