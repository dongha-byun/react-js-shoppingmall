import React, { useState } from "react";
import styledComponents from "styled-components";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchWrapper = styledComponents.div`
    width: 100%;
    margin: auto;
    max-width: 520px;
    text-align: center;
`;

function Search(){
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState();

    const onSearch = () => {
        let searchParam = {
            "searchKeyword" : searchValue
        };
        navigate("/search-products", {state: searchParam});
    }

    return(
        <SearchWrapper>
            <InputGroup>
                <Form.Control 
                    aria-describedby="searchBtn" 
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
                <Button variant="outline-secondary" id="searchBtn"
                    onClick={onSearch}
                >검색</Button>
            </InputGroup>
        </SearchWrapper>
    );
}

export default Search;