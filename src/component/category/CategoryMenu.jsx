import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Category from "./Category";

const StyledCategoryMenuWrapper = styled.div`
    width: 100%;
    max-width: 150px;
    border: 1px solid #dddddd;
    background-color: white;
    position: absolute;
    z-index: 999;
    ${(props) => props.isSubCategory && `left: 150px; top: -1px;`}
`;

function CategoryMenu(props){
    const {categories, isSubCategory} = props;
    const navigate = useNavigate();

    const onClickCategory = (categoryId) => {
        navigate("/product-list/"+categoryId);
    }

    return(
        <StyledCategoryMenuWrapper isSubCategory={isSubCategory}>
            <ul>
                {categories.map((category) => {
                    return(
                        <Category
                            key={category.id}
                            category={category}
                            onClick={()=>{
                                onClickCategory(`${category.id}`);
                            }}
                            isSubCategory={isSubCategory}
                        />
                    );
                })}
            </ul>
        </StyledCategoryMenuWrapper>
    );
}

export default CategoryMenu;