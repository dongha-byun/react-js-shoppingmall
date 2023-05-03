import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function DeliveryEndButton(props) {
    const {orderId, productId} = props;
    const navigate = useNavigate();

    const writeReview = () => {
        let reviewWriteParam = {
            "orderId": orderId,
            "productId": productId
        }
        navigate("review-write", {state: reviewWriteParam});
    }

    const finishOrder = () => {
        alert("구매확정");
    }

    const requestRefund = () => {
        alert("환불요청");
    }

    const requestChange = () => {
        alert("교환요청");
    }

    return (
        <div>
            <Button size="sm" className="mx-1 my-1" variant="outline-primary" onClick={writeReview}>
                리뷰작성
            </Button>
            <Button size="sm" className="mx-1 my-1" variant="outline-primary" onClick={finishOrder}>
                구매확정
            </Button>
            <Button size="sm" className="mx-1 my-1" variant="outline-danger" onClick={requestRefund}>
                환불요청
            </Button>
            <Button size="sm" className="mx-1 my-1" variant="outline-danger" onClick={requestChange}>
                교환요청
            </Button>
        </div>
    );
}