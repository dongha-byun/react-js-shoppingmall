import React, { useState } from "react";
import styledComponents from "styled-components";
import { Form, InputGroup, Button } from "react-bootstrap";

const SearchWrapper = styledComponents.div`
    width: 100%;
    margin: auto;
    max-width: 520px;
    text-align: center;
`;

function Search(props){

    const [searchValue, setSearchValue] = useState();

    return(
        <SearchWrapper>
            <InputGroup>
                <Form.Control 
                    aria-describedby="searchBtn" 
                    onChange={setSearchValue}
                />
                <Button variant="outline-secondary" id="searchBtn"
                    onClick={()=>alert("검색")}
                >검색</Button>
            </InputGroup>
        </SearchWrapper>
    );
}

export default Search;