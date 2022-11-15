import React from "react";
import styled from "styled-components";

const BasketItemInfoWrapper = styled.div``;

function BasketItemInfo(props){

    return (
        <BasketItemInfoWrapper>
            <div><span>냄비제작소(주)</span></div>
            <h5>냄비가 왔어요. 날이면 날마다 오는 냄비가 왔어요.</h5>
        </BasketItemInfoWrapper>
    );
}

export default BasketItemInfo;