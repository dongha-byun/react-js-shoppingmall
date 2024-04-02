import React from "react";
import styledComponents from "styled-components";
import BasketItemInfo from "./BasketItemInfo";
import { Button, Form } from "react-bootstrap";

const BasketItemWrapper = styledComponents.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 30px;
    border-bottom: 1px solid #bbbbbb;
`;

const BasketButtonWrapper = styledComponents.div`
    margin: auto;
`;

function BasketItem(props){

    return (
        <BasketItemWrapper>
            <Form>
                <Form.Check />
            </Form>
            <BasketItemInfo />
            <BasketButtonWrapper>
                <Button variant="outline-primary" onClick={()=>{
                    alert("123");
                }}>주문수정</Button>
                <Button variant="outline-danger" onClick={()=>{
                    alert("장바구니에서 제거");
                }}>장바구니에서 제거</Button>
                <Button variant="primary" onClick={()=>{
                    alert("주문하기");
                }}>주문하기</Button>
            </BasketButtonWrapper>
        </BasketItemWrapper>
    );
}

export default BasketItem;