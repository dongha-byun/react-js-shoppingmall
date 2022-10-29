import React from "react";
import BasketList from "./BasketList";
import styledComponents from "styled-components";

const BasketListPageWrapper = styledComponents.div`
`;

function BasketListPage(props){

    return (
        <BasketListPageWrapper>
            <BasketList></BasketList>
        </BasketListPageWrapper>
    );
}

export default BasketListPage;