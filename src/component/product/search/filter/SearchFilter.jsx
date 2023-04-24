import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

const SearchFilterWrapper = styled.div`
    float: left;
`;

function SearchFilter(props){
    const {setOrderType} = props;

    const changeSearchFilter = (event) => {
        setOrderType(event.target.value);
    }

    return (
        <SearchFilterWrapper className="display-row">
            <Form.Check 
                type="radio" label="판매량순" name="filter" id="filter_SELL" value="SELL"
                className="mx-3" defaultChecked
                onChange={changeSearchFilter}
            />
            <Form.Check 
                type="radio" label="평점높은순" name="filter" id="filter_SCORE" value="SCORE"
                className="mx-3"
                onChange={changeSearchFilter}
            />
            <Form.Check 
                type="radio" label="낮은 가격순" name="filter" id="filter_PRICE" value="PRICE"
                className="mx-3"
                onChange={changeSearchFilter}
            />
            <Form.Check 
                type="radio" label="최신순" name="filter" id="filter_RECENT" value="RECENT"
                className="mx-3"
                onChange={changeSearchFilter}
            />
        </SearchFilterWrapper>
    );
}

export default SearchFilter;