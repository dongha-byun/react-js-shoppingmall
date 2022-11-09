import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const StyledHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledReviewWrapper = styled.div`
    padding: 20px;
`;

function ReviewWriteForm(props){

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
        console.log(reviewValue);
        alert(123);
    }

    return (
        <StyledReviewWrapper>
            <StyledHeader>
                <h4 className="display-inline">리뷰 작성</h4>
                <Button 
                    className="float-right" 
                    variant="outline-primary" 
                    onClick={writeReview}>리뷰 등록</Button>
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
        </StyledReviewWrapper>  
    );
}

export default ReviewWriteForm;