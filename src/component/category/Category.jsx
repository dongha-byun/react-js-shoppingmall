import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCategoryUl = styled.ul`
    cursor: pointer;
`;

const StyledCategoryLi = styled.li`
    cursor: pointer;
`;

const StyledCategoryNameSpan = styled.span`
    margin: 0 10px;
`;

function Category(props){
    const {category} = props;
    const [isSubView, setIsSubView] = useState(false);
    const navigate = useNavigate();
    
    const searchByCategory = (categoryId) => {
        navigate("/product-list/"+categoryId);
    }

    return(
        <StyledCategoryUl>
            <StyledCategoryLi onClick={()=>setIsSubView(!isSubView)}>
                <StyledCategoryNameSpan >
                    {category.name}
                </StyledCategoryNameSpan>
            </StyledCategoryLi>
            {category.subCategories.length > 0 && category.subCategories.map((sub) => {
                return (
                    <StyledCategoryLi key={sub.id} className={isSubView ? ``:`display-none`} onClick={(event) => {
                        searchByCategory(`${sub.id}`);
                    }}>
                        <StyledCategoryNameSpan>
                            {sub.name}
                        </StyledCategoryNameSpan>
                    </StyledCategoryLi>
                );
            })}
        </StyledCategoryUl>
    )
}

export default Category;