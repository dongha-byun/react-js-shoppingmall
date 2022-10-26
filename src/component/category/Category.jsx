import React, { useState } from "react";
import styled from "styled-components";
import CategoryMenu from "./CategoryMenu";
import data from "../../category-data.json"

const StyledCategoryLi = styled.li`
    cursor: pointer;
`;

function Category(props){
    const {category, onClick} = props;
    const [mouseOverStyle, setMouseOverStyle] = useState(0);
    
    return(
        <StyledCategoryLi 
            onClick={onClick}
            onMouseOver={() => setMouseOverStyle(1)}
            onMouseOut={() => setMouseOverStyle(0)}
        >
            {category.name}
            { mouseOverStyle ? (
                <CategoryMenu 
                    categories = {data}
                />
                ) : (
                ""
                )
            }
        </StyledCategoryLi>
    )
}

export default Category;