import React from "react";
import styled from "styled-components";
import TextInput from "../../../ui/TextInput";

const StyledPaymentFormWrapper = styled.div`

`;

const StyledDelimiterSpan = styled.span`
    margin: 0 10px;
`;

function PaymentForm(props){
    const [cardInfo, setCardInfo] = useState({
        cardNo1: "",
        cardNo2: "",
        cardNo3: "",
        cardNo4: "",
        expireMM: "",
        expireYY: "",
        cvc: "",
        cardCom: "",
    });
    const onChangeForm = (event) => {
        setCardInfo({
            ...cardInfo,
            [event.target.name]: event.target.value
        });
    }
    const addPayment = () => {
        console.log(cardInfo);
    }

    return (
        <StyledPaymentFormWrapper>
            <form>
                <div>
                    <div>
                        <label>카드번호</label>
                    </div>
                    <div>
                        <TextInput 
                            maxWidth="20%;"
                            name="cardNo1"
                            id="cardNo1"
                            textAlign="center"
                            onChange={onChangeForm}
                        />
                        <StyledDelimiterSpan>-</StyledDelimiterSpan>
                        <TextInput 
                            maxWidth="20%;"
                            name="cardNo2"
                            id="cardNo2"
                            textAlign="center"
                            onChange={onChangeForm}
                        />
                        <StyledDelimiterSpan>-</StyledDelimiterSpan>
                        <TextInput 
                            maxWidth="20%;"
                            name="cardNo3"
                            id="cardNo3"
                            textAlign="center"
                            onChange={onChangeForm}
                        />
                        <StyledDelimiterSpan>-</StyledDelimiterSpan>
                        <TextInput 
                            maxWidth="20%;"
                            name="cardNo4"
                            id="cardNo4"
                            textAlign="center"
                            onChange={onChangeForm}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>유효기간(MM)</label>
                    </div>
                    <div>
                        <TextInput 
                            maxWidth="20%;"
                            name="expireMM"
                            id="expireMM"
                            textAlign="center"
                            onChange={onChangeForm}
                        />
                        <StyledDelimiterSpan />
                        <TextInput 
                            maxWidth="20%;"
                            name="expireYY"
                            id="expireYY"
                            textAlign="center"
                            onChange={onChangeForm}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>CVC(뒤 3자리)</label>
                    </div>
                    <div>
                        <TextInput 
                            maxWidth="20%;"
                            name="cvc"
                            id="cvc"
                            textAlign="center"
                            onChange={onChangeForm}
                        />
                    </div>
                </div>
            </form>
        </StyledPaymentFormWrapper>
    );

}

export default PaymentForm;