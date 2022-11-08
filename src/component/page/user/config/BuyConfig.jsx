import React from "react";
import styled from "styled-components";
import BuyListComponent from "./buy/BuyListComponent";
import { getBuys } from "../../../../api/sample/buyList";

const BuyWrapper = styled.div`
    padding: 20px;
`;

function BuyConfig(){
    const data = getBuys();

    return(
        <BuyWrapper>
            <h3>구매내역</h3>
            {data.map((buy)=>{
                return(
                    <BuyListComponent key={buy.id} buy={buy} />
                );
            })}
        </BuyWrapper>
    );
}

export default BuyConfig;