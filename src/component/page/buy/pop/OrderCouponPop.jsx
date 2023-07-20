import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

const StyledPopWrapper = styled.div`
    padding: 20px;
`;


export default function OrderCouponPop() {
    
    return (
        <StyledPopWrapper>
            <h4>주문 상품 목록</h4>
            <Table>
                <thead>
                    <tr>
                        <th>상품명</th>
                        <th>주문금액</th>
                        <th>쿠폰선택</th>
                        <th>할인금액</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </StyledPopWrapper>
    );
}