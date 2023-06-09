import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
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
    const { calculateTotalAmounts, totalAmounts } = props;
    const [discountPolicyList, setDiscountPolicyList] = useState([
        {
            "type" : "NONE",
            "value" : 0,
            "amounts" : 0,
            "displayText" : "선택하지 않음"
        },
        {
            "type" : "FIX",
            "value" : 1000,
            "amounts" : 0,
            "displayText" : ""
        }, 
        {
            "type" : "RATE",
            "value" : 10,
            "amounts": 0,
            "displayText" : ""
        }
    ]);

    useEffect(() => {
        setDiscountPolicyList(
            discountPolicyList.map((policy) => {
                let tempAmounts = 0;
                let tempDisplayText = policy.displayText;

                if(policy.type === "FIX") {
                    tempAmounts = policy.value;
                    tempDisplayText = "무조건 " + numberCommaFormat(tempAmounts) + "원 할인!";
                }
                if(policy.type === "RATE") {
                    tempAmounts = totalAmounts * policy.value / 100;
                    tempDisplayText = "주문 금액의 " + policy.value + "% 할인! (할인금액 : " + numberCommaFormat(tempAmounts) + "원)";
                }

                return {...policy, amounts: tempAmounts, displayText: tempDisplayText}
            })
        );
    }, []);

    const onChangeDiscountPolicy = (event) => {
        let type = event.target.value;
        const policy = discountPolicyList.find((policy) => policy.type === type);
        calculateTotalAmounts(policy.amounts);
    }

    return (
        <StyledWrapper>
            <h4>할인</h4>
            <StyledDiscountFormWrapper>
                <Form>
                    {discountPolicyList.map((policy) => {
                        return (
                            <div key={`${policy.type}-discount`} className="mb-3">
                                <Form.Check type="radio" id={`${policy.type}-discount`}>
                                    <Form.Check.Input type="radio" name="discount" value={policy.type} onChange={onChangeDiscountPolicy} />
                                    <Form.Check.Label>{policy.displayText}</Form.Check.Label>
                                </Form.Check>
                            </div>
                        );
                    })}
                </Form>
            </StyledDiscountFormWrapper>
        </StyledWrapper>
    );
}