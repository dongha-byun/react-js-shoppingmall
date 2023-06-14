import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { numberCommaFormat } from "../../../util/NumberFormat";

const StyledPaneWrapper = styled.div`
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

export default function TotalAmountsCalculatePane(props) {
    const {orderProductParam} = props;
    const [totalAmounts, setTotalAmounts] = useState();
    const [totalDiscountAmounts, setTotalDiscountAmounts] = useState();

    useEffect(() => {
        let initTotalAmounts = 0;
        let initTotalDiscountAmounts = 0;
        orderProductParam.forEach((param) => {
            initTotalAmounts += param.productPrice;
            initTotalDiscountAmounts += param.gradeDiscountAmount;
        });

        setTotalAmounts(initTotalAmounts);
        setTotalDiscountAmounts(initTotalDiscountAmounts);
    });

    return (
        <StyledPaneWrapper>
            {numberCommaFormat(totalAmounts)}원 - {numberCommaFormat(totalDiscountAmounts)}원 = {numberCommaFormat(totalAmounts - totalDiscountAmounts)}원
        </StyledPaneWrapper>
    );
}