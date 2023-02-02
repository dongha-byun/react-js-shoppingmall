import React from "react";
import styled from "styled-components";
import filters from "../../../../sample-data/search-filter.json";
import RadioFilter from "./RadioFilter";

const SearchFilterWrapper = styled.div`
`;

function SearchFilter(props){
    const {setOrderType} = props;

    const changeSearchFilter = (value) => {
        setOrderType(value);
    }

    return (
        <SearchFilterWrapper className="display-row">
            {filters.map((filter)=>{
                return (
                    <RadioFilter key={filter.id} filter={filter} name="filter" 
                        onChange={(event)=>{
                            changeSearchFilter(event.target.value);
                        }}
                    />
                );
            })}
        </SearchFilterWrapper>
    );
}

export default SearchFilter;