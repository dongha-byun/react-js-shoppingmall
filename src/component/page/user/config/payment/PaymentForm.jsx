import React from "react";
import styled from "styled-components";
import TextInput from "../../../../ui/TextInput";

const StyledPaymentFormWrapper = styled.div`

`;

const StyledDelimiterSpan = styled.span`
    margin: 0 10px;
`;

function PaymentForm(props){
    const {onChange} = props;

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
                            onChange={onChange}
                        />
                        <StyledDelimiterSpan>-</StyledDelimiterSpan>
                        <TextInput 
                            maxWidth="20%;"
                            name="cardNo2"
                            id="cardNo2"
                            textAlign="center"
                            onChange={onChange}
                        />
                        <StyledDelimiterSpan>-</StyledDelimiterSpan>
                        <TextInput 
                            maxWidth="20%;"
                            name="cardNo3"
                            id="cardNo3"
                            textAlign="center"
                            onChange={onChange}
                        />
                        <StyledDelimiterSpan>-</StyledDelimiterSpan>
                        <TextInput 
                            maxWidth="20%;"
                            name="cardNo4"
                            id="cardNo4"
                            textAlign="center"
                            onChange={onChange}
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
                            onChange={onChange}
                        />
                        <StyledDelimiterSpan />
                        <TextInput 
                            maxWidth="20%;"
                            name="expireYY"
                            id="expireYY"
                            textAlign="center"
                            onChange={onChange}
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
                            onChange={onChange}
                        />
                    </div>
                </div>
            </form>
        </StyledPaymentFormWrapper>
    );

}

export default PaymentForm;