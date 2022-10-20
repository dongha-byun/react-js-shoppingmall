import React from "react";
import styledComponents from "styled-components";
import Search from "../search/Search";
import Button from "../ui/Button";

const StyledHeader = styledComponents.div`
    width: calc(100% - 20px);
    margin: 30px auto 15px auto;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

function Header(props){
    return(
        <StyledHeader>
            <Button
                imgSrc="/images/more.png" 
                onClick={()=> {
                    alert("more");
                }}
                width='100px'
                height='100px'
            />
            <Search></Search>
            <Button
                imgSrc="/images/more.png" 
                onClick={()=> {
                    alert("more");
                }}
                width='100px'
                height='100px'
            />
        </StyledHeader>
    );
}

export default Header;