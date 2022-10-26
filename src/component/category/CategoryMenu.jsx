import React from "react";
import styled from "styled-components";
import Category from "./Category";

const StyledCategoryMenuWrapper = styled.div`
    width: 100%;
    max-width: 150px;
    border: 1px solid #dddddd;
    background-color: white;
    position: absolute;
    z-index: 999;
`;

function CategoryMenu(props){
    const {categories} = props;
    return(
        <StyledCategoryMenuWrapper>
            <ul>
                {categories.map((category) => {
                    return(
                        <Category
                            key={category.id}
                            category={category}
                            onClick={()=>{
                                alert(`${category.name}`);
                            }}
                        />
                    );
                })}
            </ul>
        </StyledCategoryMenuWrapper>
    );
}

export default CategoryMenu;