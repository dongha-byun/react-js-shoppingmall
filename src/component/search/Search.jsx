import React from "react";
import styledComponents from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const SearchWrapper = styledComponents.div`
    width: 100%;
    max-width: 560px;
    margin: auto;
    text-align: center;
`;

function Search(props){

    return(
        <SearchWrapper>
            <TextInput maxWidth="420px" type="text" />
            <Button 
                imgSrc="/images/search.jpeg" 
                onClick={()=> {
                    alert("search");
                }}
                width='35px'
                height='35px'
            />
        </SearchWrapper>
    );
}

export default Search;