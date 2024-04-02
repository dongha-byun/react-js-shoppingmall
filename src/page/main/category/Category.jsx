import React from "react";
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
    font-weight: bold;
`;

const StyledCategorySubLi = styled.li`
    cursor: pointer;
    color: #333333;
`;

const StyledCategoryNameSpan = styled.span`
    margin: 0 10px;
`;

function Category(props){
    const {category, activeCategoryId, setActiveCategoryId, openCategoryId, setOpenCategoryId} = props;
    const navigate = useNavigate();
   
    const searchByCategory = (categoryId, subCategoryId) => {
        navigate("/products/"+categoryId + " / " + subCategoryId);
        setActiveCategoryId(categoryId);
    }

    return(
        <StyledCategoryUl>
            <StyledCategoryLi onClick={()=>setOpenCategoryId(category.id)}>
                <StyledCategoryNameSpan >
                    {category.name}
                </StyledCategoryNameSpan>
            </StyledCategoryLi>
            {category.subCategories.length > 0 && category.subCategories.map((sub) => {
                return (
                    <StyledCategorySubLi key={sub.id} id={sub.id} 
                        className={ category.id == openCategoryId ? "" : "display-none" }
                        onClick={()=>{
                            searchByCategory(`${category.id}, ${sub.id}`);
                        }}
                    >
                        <StyledCategoryNameSpan className={sub.id == activeCategoryId && "active-menu"}>
                            {sub.name}
                        </StyledCategoryNameSpan>
                    </StyledCategorySubLi>
                );
            })}
        </StyledCategoryUl>
    )
}

export default Category;