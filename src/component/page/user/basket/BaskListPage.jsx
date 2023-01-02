import React from "react";
import BasketList from "./BasketList";
import styledComponents from "styled-components";
import { Button } from "react-bootstrap";

const BasketListPageWrapper = styledComponents.div`
    padding: 20px;
`;

const StyledButtonWrapper = styledComponents.div`
    text-align: center;
`;

function BasketListPage(props){

    return (
        <BasketListPageWrapper>
            <BasketList />
            <StyledButtonWrapper>
                <Button className="mx-1" variant="outline-primary" size="lg">계속 쇼핑하기</Button>
                <Button className="mx-1" variant="primary" size="lg">구매하기</Button>
            </StyledButtonWrapper>
        </BasketListPageWrapper>
    );
}

export default BasketListPage;