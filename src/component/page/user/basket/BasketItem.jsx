import React from "react";
import styledComponents from "styled-components";
import TextButton from "../../../ui/TextButton";

const BasketItemWrapper = styledComponents.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 30px;
    border: 1px solid black;
`;

const BasketItemImageWrapper = styledComponents.div`
    width: 150px;
    height: 150px;
`;

const BasketItemInfoWrapper = styledComponents.div`
    padding: 0 10px;
`;

const BasketButtonWrapper = styledComponents.div`
    margin: auto;
`;

function BasketItem(props){

    return (
        <BasketItemWrapper>
            <input type="checkbox"  />
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