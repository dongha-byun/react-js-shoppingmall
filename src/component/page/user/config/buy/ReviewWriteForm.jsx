import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductReviewService from "../../../../../api/component/product/productReview";
import CommonModal from "../../../../modal/CommonModal";
import ProductReviewConfirmPop from "./pop/ProductReviewConfirmPop";

const StyledHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledReviewWrapper = styled.div`
    padding: 20px;
`;

function ReviewWriteForm(){
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const {state} = useLocation();
    const [reviewValue, setReviewValue] = useState({
        score: 0,
        content: ""
    });

    const onChangeValue = (event) => {
        setReviewValue({
            ...reviewValue,
            [event.target.id]: event.target.value
        });
    }

    const writeReview = () => {
        let orderId = state.orderId;
        let orderItemId = state.orderItemId;
        let productId = state.productId;
        ProductReviewService.saveReview(orderId, orderItemId, productId, reviewValue).then(() => {
            alert("리뷰 등록이 완료되었습니다.");
        }).catch((error) => {
            alert("리뷰 등록에 실패하였습니다.");
        });
    }

    return (
        <StyledReviewWrapper>
            <StyledHeader>
                <h4 className="display-inline">리뷰 작성</h4>
                <Button 
                    className="float-right" 
                    variant="outline-primary" 
                    onClick={() => setIsOpen(true)}>리뷰 등록</Button>
            </StyledHeader>
            <Form>
                <Form.Group className="mb-3" controlId="score">
                    <Form.Label>평점 : {reviewValue.score}</Form.Label>
                    <Form.Control type="range" 
                        min="0" max="5" step="1" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group  controlId="content">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" onChange={onChangeValue} rows={5}/>
                </Form.Group>
            </Form>
            <CommonModal show={isOpen} handleClose={handleClose} headerMessage={"주문 취소"} footerEvent={writeReview} footerMessage={"리뷰 등록"} >
                <ProductReviewConfirmPop />
            </CommonModal>
        </StyledReviewWrapper>  
    );
}

export default ReviewWriteForm;