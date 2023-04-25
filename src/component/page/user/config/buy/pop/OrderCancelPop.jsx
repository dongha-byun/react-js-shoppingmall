import React from "react";
import { Button } from "react-bootstrap";

export default function OrderCancelPop(props) {
    const { cancel } = props;

    return (
        <div>
            주문을 취소하시겠습니까? 주문을 취소하면 재주문 할 수 없습니다.
            <Button variant="outline-danger" onClick={cancel}>주문취소</Button>
        </div>
    );
}