import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCategoryUl = styled.ul`
    cursor: pointer;
    border-bottom: 1px solid gray;
    padding-left: 10px;
`;

const StyledCategoryLi = styled.li`
    cursor: pointer;
    margin-bottom: 5px;
`;

const StyledCategorySubLi = styled.li`
    cursor: pointer;
    color: #333333;
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
                    <StyledCategorySubLi key={sub.id} className={isSubView ? ``:`display-none`} onClick={(event) => {
                        searchByCategory(`${sub.id}`);
                    }}>
                        <StyledCategoryNameSpan>
                            {sub.name}
                        </StyledCategoryNameSpan>
                    </StyledCategorySubLi>
                );
            })}
        </StyledCategoryUl>
    )
}

export default Category;