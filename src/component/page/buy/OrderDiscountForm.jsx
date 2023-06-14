import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, ListGroup } from "react-bootstrap";
import { numberCommaFormat } from "../../../util/NumberFormat";

const StyledWrapper = styled.div`
    padding: 10px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

const StyledDiscountFormWrapper = styled.div`
    padding :5px;
`;

export default function OrderDiscountForm(props) {
    const { items } = props;
    const [gradeDiscountTotalAmount, setGradeDiscountTotalAmount] = useState(0);

    useEffect(() => {
        let initGradeDiscountTotalAmount = 0;
        items.forEach((item) => {
            initGradeDiscountTotalAmount += item.gradeDiscountAmount;
        });
        setGradeDiscountTotalAmount(initGradeDiscountTotalAmount);
    }, []);

    return (
        <StyledWrapper>
            <h4>할인</h4>
            <StyledDiscountFormWrapper>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li" 
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fw-bold">회원등급 할인(자동적용)</span> : {gradeDiscountTotalAmount}원
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" 
                        className="d-flex justify-content-between align-items-start" 
                    >
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fw-bold">쿠폰할인</span> : 
                                <Button variant="link" size="sm">적용하기</Button>
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </StyledDiscountFormWrapper>
        </StyledWrapper>
    );
}