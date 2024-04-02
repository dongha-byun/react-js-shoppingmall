import React, { useState } from "react";
import styled from "styled-components";
import data from "../../sample-data/category-data.json"
import Button from "../ui/Button";
import CategoryMenu from "./CategoryMenu";

const StyledCategoryButtonWrapper = styled.div`
`;

function CategoryMenuButton(props){
    const [displayStyle, setDisplayStyle] = useState({display: 'none'});

    const changeStyle = () => {
        displayStyle.display === 'none' ?
            setDisplayStyle({display: 'block'}) : 
            setDisplayStyle({display: 'none'})
    }

    return(
        <StyledCategoryButtonWrapper>
            <Button
                imgSrc="/images/more.png" 
                onClick={()=> { changeStyle(); }}
                width='85px'
                height='85px'
            />
            <div style={displayStyle}>
                <CategoryMenu 
                    categories = {data}
                />
            </div>
        </StyledCategoryButtonWrapper>
    );
}

export default CategoryMenuButton;