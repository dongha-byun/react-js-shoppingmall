import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BuyingProductList from "./BuyingProductList";
import OrderDeliveryInfo from "./OrderDeliveryInfo";
import styled from "styled-components";
import OrderPaymentResult from "./OrderPaymentResult";

const StyledSuccessWrapper = styled.div`
    padding-bottom: 25px;
`;

export default function PaySuccessPage() {
    const navigate = useNavigate();
    const [orderProductParam, setOrderProductParam] = useState({});
    const [deliveryParam, setDeliveryParam] = useState({});
    const [payParam, setPayParam] = useState({});

    useEffect(() => {
        let orderParam = JSON.parse(sessionStorage.getItem("orderParam"));
        if(orderParam) {
            setOrderProductParam(orderParam.orderProductParam);
            setDeliveryParam(orderParam.deliveryParam);
            setPayParam(orderParam.payParam);
            //sessionStorage.removeItem("orderParam");
        }
    }, []);

    return (
        <StyledSuccessWrapper>
            <h2>주문내역 확인</h2>
            <BuyingProductList orderProductParam={orderProductParam}/>
            <OrderPaymentResult payParam={payParam} />
            <OrderDeliveryInfo deliveryParam={deliveryParam} />
            <Button className="w-100" size="lg" 
                variant="outline-primary" 
                onClick={() => {
                    navigate("/");
                }}
                >계속 쇼핑하러 가기</Button>
        </StyledSuccessWrapper>
    );
}