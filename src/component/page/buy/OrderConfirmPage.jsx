import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function OrderConfirmPage() {
    const {state} = useLocation();

    return (
        <div>
            <h2>주문정보 확인</h2>
            <div>
                상품정보
                <p>{state.productId}</p>
                <p>{state.quantity}</p>
            </div>
            <div>
                배송지 정보
                <p>수령인 : {state.delivery.receiverName}</p>
                <p>우편번호 : {state.delivery.zipcode}</p>
                <p>주소 : {state.delivery.address}</p>
                <p>상세주소 : {state.delivery.detailAddress}</p>
                <p>요청사항 : {state.delivery.requestMessage}</p>
            </div>
            <div>
                결제수단
                <p>{state.payment.type}</p>
            </div>
            <Button>결제하기</Button>
        </div>
    );
}