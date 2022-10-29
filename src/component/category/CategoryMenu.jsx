import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Category from "./Category";
import data from "../../category-data.json";

const StyledCategoryMenuWrapper = styled.div`
    width: 100%;
    max-width: 150px;
    border: 1px solid #dddddd;
    background-color: white;
    position: absolute;
    z-index: 999;
    ${(props) => props.isSubCategory && `left: 150px; top: -1px;`}
`;

const SectionWrapper = styled.div`

`;

function CategoryMenu(props){
    const navigate = useNavigate();

    return(
        <SectionWrapper>
            {data.map((category) => {
                return(
                    <Category
                        key={category.id}
                        category={category}
                    />
                );
            })}
        </SectionWrapper>
    );
}

export default CategoryMenu;