import React from "react";
import styled from "styled-components";

const BasketItemImageWrapper = styled.div`
    width: 150px;
    height: 150px;
`;

const BasketItemInfoWrapper = styled.div`
    padding: 0 10px;
`;

function BasketItemInfo(props){

    return (
        <div class="display-row">
            <BasketItemImageWrapper>
                <img src="/images/pot.jpeg" width="150px" height="150px" alt="이미지"></img>
            </BasketItemImageWrapper>
            <BasketItemInfoWrapper>
                <div><span>냄비제작소(주)</span></div>
                <div>
                    <h3>냄비가 왔어요. 날이면 날마다 오는 냄비가 왔어요.</h3>
                </div>
                <div>
                    <span class="font-15">11,111원</span> 
                </div>
            </BasketItemInfoWrapper>
        </div>
    );
}

export default BasketItemInfo;