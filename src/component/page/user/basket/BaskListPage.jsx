import React from "react";
import Header from "../../Header";
import BasketList from "./BasketList";
import styledComponents from "styled-components";

const BasketListPageWrapper = styledComponents.div`
`;

function BasketListPage(props){

    return (
        <BasketListPageWrapper>
            <Header></Header>
            <BasketList></BasketList>
        </BasketListPageWrapper>
    );
}

export default BasketListPage;