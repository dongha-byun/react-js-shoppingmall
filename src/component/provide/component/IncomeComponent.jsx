import React from "react";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

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
            </StyledHeader>
            <Form>
                <Form.Group>
                    <Form.Control type="month" />
                </Form.Group>
            </Form>
            
        </StyledIncomeWrapper>
    );
}

export default IncomeComponent;