import React from "react";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";
import CouponChoiceCanvas from "./pop/CouponChoiceCanvas";

const StyledWrapper = styled.div`
    padding: 10px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

const StyledDiscountFormWrapper = styled.div`
    padding :5px;
`;

export default function OrderDiscountForm(props) {
    const { orderProductParam, setOrderProductParam } = props;
    const gradeDiscountTotalAmounts = orderProductParam.reduce((total, item) => total + item.gradeDiscountAmount, 0);

    return (
        <StyledWrapper>
            <h4>할인</h4>
            <StyledDiscountFormWrapper>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fw-bold">회원등급 할인(자동적용)</span> : {gradeDiscountTotalAmounts}원
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fw-bold">쿠폰할인</span> : 
                                <CouponChoiceCanvas orderProductParam={orderProductParam} setOrderProductParam={setOrderProductParam} />
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </StyledDiscountFormWrapper>
        </StyledWrapper>
    );
}