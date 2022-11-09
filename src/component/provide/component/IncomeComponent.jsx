import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledIncomeWrapper = styled.div`
    padding: 20px;
`;

function IncomeComponent(){

    return(
        <StyledIncomeWrapper>
            <StyledHeader>
                <h4 className="display-inline">수익 현황</h4>
                <Button 
                    className="float-right" 
                    variant="outline-primary" 
                    >상품 등록</Button>
            </StyledHeader>
        </StyledIncomeWrapper>
    );
}

export default IncomeComponent;