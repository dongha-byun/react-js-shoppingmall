import React from "react";
import styled from "styled-components";
import Category from "./Category";
import data from "../../category-data.json";

const SectionWrapper = styled.div`
    border-right: 1px solid black;
    height: 100%;
    min-height: 720px;
`;

function CategoryMenu(props){
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