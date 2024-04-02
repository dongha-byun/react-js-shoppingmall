import React from "react";
import styled from "styled-components";
import Header from "../../main/user/Header";

const StyledCategoryManagePageWrapper = styled.div`
    padding: 20px;
`;

function CategoryManagePage(){


    return (
        <StyledCategoryManagePageWrapper>
            <Header 
                title="카테고리 관리"
            />
        </StyledCategoryManagePageWrapper>
    );
}

export default CategoryManagePage;