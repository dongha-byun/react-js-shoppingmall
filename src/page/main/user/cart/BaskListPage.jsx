import React, { useState } from "react";
import BasketList from "./BasketList";
import styledComponents from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BasketListPageWrapper = styledComponents.div`
    padding: 20px;
`;

const StyledButtonWrapper = styledComponents.div`
    text-align: center;
`;

function BasketListPage(){
    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);

    const goMain = () => {
        navigate("/");
    }

    const goBuying = () => {
        if(carts.length < 1) {
            alert("구매할 상품을 1개 이상 선택해야 합니다.");
        }else{
            let params = {
                "items": carts
            };
            navigate("/order", {state : params});
        }
    }

    const addCartList = (cart) => {
        let tempCarts = carts;
        tempCarts.push(cart);
        setCarts(tempCarts);
    }

    const removeCartList = (cartId) => {
        setCarts(
            carts.filter((cart) => cart.id != cartId)
        );
    }

    return (
        <BasketListPageWrapper>
            <BasketList addCartList={addCartList} removeCartList={removeCartList}/>
            <StyledButtonWrapper>
                <Button className="mx-1" variant="outline-primary" size="lg" onClick={goMain}>계속 쇼핑하기</Button>
                <Button className="mx-1" variant="primary" size="lg" onClick={goBuying}>구매하기</Button>
            </StyledButtonWrapper>
        </BasketListPageWrapper>
    );
}

export default BasketListPage;