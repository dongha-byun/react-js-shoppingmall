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
    const [selectedCart, setSelectedCart] = useState({});

    const goMain = () => {
        navigate("/");
    }

    const goBuying = () => {
        let param = {
            "productId": selectedCart.productId,
            "productName": selectedCart.productName,
            "imgUrl": selectedCart.storedImgFileName,
            "providerName": selectedCart.partnersName,
            "quantity": selectedCart.quantity,
            "price": selectedCart.price,
            "deliveryFee": 0
        };
        navigate("/buy", {state : param});
    }

    return (
        <BasketListPageWrapper>
            <BasketList setSelectedCart={setSelectedCart} />
            <StyledButtonWrapper>
                <Button className="mx-1" variant="outline-primary" size="lg" onClick={goMain}>계속 쇼핑하기</Button>
                <Button className="mx-1" variant="primary" size="lg" onClick={goBuying}>구매하기</Button>
            </StyledButtonWrapper>
        </BasketListPageWrapper>
    );
}

export default BasketListPage;