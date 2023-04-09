import React from "react";
import styledComponents from "styled-components";

const PaymentSelectWrapper = styledComponents.div`
    padding-botton: 10px;
    border-bottom: 1px solid #cdcdcd;
`;

function PaymentSelect(props){

    return (
        <PaymentSelectWrapper>
            <h3>결제수단 선택</h3>
            <select>
                <option value="account">무통장입금</option>
                <option value="card">신용/체크카드</option>
            </select>
        </PaymentSelectWrapper>
    );
}

export default PaymentSelect;