import React, { useState } from "react";
import styled from "styled-components";
import CategoryMenu from "./CategoryMenu";

const StyledCategoryLi = styled.li`
    ${(isSubCategory) => (isSubCategory ? "cursor: pointer;" : "")}
`;

const StyledCategoryNameSpan = styled.span`
    margin: 0 10px;
`;

function Category(props){
    const {category, onClick, isSubCategory} = props;
    const [mouseOverStyle, setMouseOverStyle] = useState(false);
    
    const mouseOver = () => {
        setMouseOverStyle(true);
    }

    const mouseOut = () => {
        setMouseOverStyle(false);
    }

    return(
        <StyledCategoryLi
            onMouseOver={() => mouseOver()}
            onMouseOut={() => mouseOut()}
        >
            <StyledCategoryNameSpan onClick={isSubCategory && onClick}>
                {category.name}
            </StyledCategoryNameSpan>
            { mouseOverStyle && !isSubCategory ? (
                <CategoryMenu 
                    categories = {category.subCategories}
                    isSubCategory = {true}
                />
                ) : (
                ""
                )
            }
        </StyledCategoryLi>
    )
}

export default Category;