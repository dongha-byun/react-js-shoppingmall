import React from "react";
import styledComponents from "styled-components";
import TextButton from "../../../ui/TextButton";
import BasketItemInfo from "./BasketItemInfo";

const BasketItemWrapper = styledComponents.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 30px;
    border: 1px solid black;
`;

const BasketButtonWrapper = styledComponents.div`
    margin: auto;
`;

function BasketItem(props){

    return (
        <BasketItemWrapper>
            <input type="checkbox"  />
            <BasketItemInfo />
            <BasketButtonWrapper>
                <TextButton 
                    value="주문수정"
                    onClick={(e)=>{
                        alert("주문수정");
                    }}    
                /><br/>
                <TextButton 
                    value="장바구니에서 제거"
                    onClick={(e)=>{
                        alert("장바구니에서 제거");
                    }}    
                /><br/>
                <TextButton 
                    value="주문하기"
                    onClick={(e)=>{
                        alert("주문하기");
                }}    
            />
            </BasketButtonWrapper>
        </BasketItemWrapper>
    );
}

export default BasketItem;