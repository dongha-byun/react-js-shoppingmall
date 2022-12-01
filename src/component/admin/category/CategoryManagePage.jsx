import React from "react";
import styled from "styled-components";
import ProviderHeader from "../../provide/component/ProviderHeader";

const StyledCategoryManagePageWrapper = styled.div`
    padding: 20px;
`;

function CategoryManagePage(){


    return (
        <StyledCategoryManagePageWrapper>
            <ProviderHeader 
                title="카테고리 관리"
            />
        </StyledCategoryManagePageWrapper>
    );
}

export default CategoryManagePage;