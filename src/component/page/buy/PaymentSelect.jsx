import React from "react";
import styledComponents from "styled-components";
import { Form } from "react-bootstrap";

const PaymentSelectWrapper = styledComponents.div`
    padding: 10px 0;
    border-bottom: 1px solid #cdcdcd;
`;

function PaymentSelect(props){

    return (
        <PaymentSelectWrapper>
            <h3>결제수단 선택</h3>
            <Form.Select>
                <option value="account">무통장입금</option>
                <option value="card">신용/체크카드</option>
            </Form.Select>
        </PaymentSelectWrapper>
    );
}

export default PaymentSelect;