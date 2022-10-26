import React, { useState } from "react";
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

    const [searchValue, setSearchValue] = useState();

    return(
        <SearchWrapper>
            <TextInput maxWidth="420px" type="text" 
                onChange={(event)=>{
                    setSearchValue(event.target.value);
                }}
            />
            <Button 
                imgSrc="/images/search.jpeg" 
                onClick={()=> {
                    alert(searchValue);
                }}
                width='35px'
                height='35px'
            />
        </SearchWrapper>
    );
}

export default Search;