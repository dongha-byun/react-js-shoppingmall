import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { TYPE_CARD, TYPE_KAKAO_PAY } from "../../../api/component/pay/pay";
import CardPayTypeSelectForm from "./CardPayTypeSelectForm";

const StyledWrapper = styled.div`
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
    padding: 10px 0;
`;

export default function OrderPaymentInfo(props) {
    const { changePayType } = props;
    const [payType, setPayType] = useState(TYPE_KAKAO_PAY);
    const cardList = [
        {
            "id" : 10,
            "cardCompanyName" : "신한카드",
            "cardNo" : "2244-XXXX-XXXX-XX23"
        },
        {
            "id" : 11,
            "cardCompanyName" : "국민카드",
            "cardNo" : "9092-XXXX-XXXX-XX01"
        }
    ];
    
    const onChangeType = (event) => {
        let selectPayType = event.target.value;
        setPayType(selectPayType)
        changePayType(selectPayType);
    }

    return (
        <StyledWrapper>
            <h4>결제수단 선택</h4>
            <Form.Select onChange={onChangeType} defaultValue={payType}>
                <option value={TYPE_KAKAO_PAY}>카카오페이</option>
                <option value={TYPE_CARD}>신용/체크 카드</option>
            </Form.Select>
            { payType == TYPE_CARD && <CardPayTypeSelectForm cardList={cardList} /> }
        </StyledWrapper>
    );
}