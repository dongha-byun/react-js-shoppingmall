import React from "react";
import styled from "styled-components";
import filters from "../../../../search-filter.json";
import RadioFilter from "./RadioFilter";

const SearchFilterWrapper = styled.div`
`;

function SearchFilter(){

    const changeSearchFilter = (value) => {
        alert(value);
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