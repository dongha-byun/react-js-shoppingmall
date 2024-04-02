import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ProductSearchList from "./ProductSearchList";
import SearchFilter from "./filter/SearchFilter";
import ProductService from "../../../../js/product/product";
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

function ProductSearchListPage(){
    const listCount = 12;
    const {state} = useLocation();
    const [products, setProducts] = useState([]);
    const [orderType, setOrderType] = useState("SELL");
    const [totalCount, setTotalCount] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(()=>{
        let searchKeyword = state.searchKeyword;
        ProductService.searchProducts(searchKeyword, "SCORE", listCount, 0)
        .then(result => {
            setProducts(result.data);
            setTotalCount(result.totalCount);
            setOffset(0);
        });
    }, [orderType]);

    const more = () => {
        let searchKeyword = state.searchKeyword;
        ProductService.searchMoreProducts(searchKeyword, orderType, listCount, offset + listCount)
        .then(result => {
            let temp = products;
            setProducts(temp.concat(result.data));
            setOffset(offset + listCount);
        });
    }

    return (
        <StyledSearchListPageWrapper>
            <StyledSearchHeaderDiv >
                <h3>검색어 : {state.searchKeyword}</h3>
            </StyledSearchHeaderDiv>
            <StyledSectionDiv>
                <SearchFilter setOrderType = {setOrderType}/>
                <div className="float-right">총 {totalCount} 건</div>
            </StyledSectionDiv>
            <ProductSearchList products = {products}/>
            <Button size="lg"
                variant="outline-primary" 
                className="w-100"
                onClick={more}
            >더보기</Button>
        </StyledSearchListPageWrapper>
    );
}

export default ProductSearchListPage;