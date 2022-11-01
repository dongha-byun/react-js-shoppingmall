import React from "react";
import styledComponents from "styled-components";

const PaymentConfigWrapper = styledComponents.div`

`;

function PaymentConfig(props){
    return (
        <PaymentConfigWrapper>
            <h3>결제수단 설정</h3>
            <select>
                <option value="account">무통장입금</option>
                <option value="card">신용/체크카드</option>
            </select>
        </PaymentConfigWrapper>
    );
}

export default PaymentConfig;