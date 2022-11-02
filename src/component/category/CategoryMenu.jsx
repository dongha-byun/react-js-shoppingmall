import React, {useState} from "react";
import styled from "styled-components";
import Category from "./Category";
import data from "../../sample-data/category-data.json";

const SectionWrapper = styled.div`
    border-right: 1px solid black;
    height: 100%;
    min-height: 720px;
`;

function CategoryMenu(props){
    const [activeCategoryId, setActiveCategoryId] = useState("");
    const [openCategoryId, setOpenCategoryId] = useState("");

    return(
        <SectionWrapper>
            {data.map((category) => {
                return(
                    <Category
                        key={category.id}
                        category={category}
                        activeCategoryId={activeCategoryId}
                        setActiveCategoryId={setActiveCategoryId}
                        openCategoryId={openCategoryId}
                        setOpenCategoryId={setOpenCategoryId}
                    />
                );
            })}
        </SectionWrapper>
    );
}

export default CategoryMenu;