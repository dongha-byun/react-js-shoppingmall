import React, { useState } from "react";
import styledComponents from "styled-components";
import PaymentView from "./payment/PaymentView";
import payments from "../../../../sample-data/payment.json";
import PaymentForm from "./payment/PaymentForm";
import { Button } from "react-bootstrap";

const PaymentConfigWrapper = styledComponents.div`
    padding: 20px;
`;
const PaymentConfigHeader = styledComponents.div`
    padding-bottom: 15px;
`;


function PaymentConfig(props){

    const [paymentFormOpen, setPaymentFormOpen] = useState(false);
    const handleClose = () => setPaymentFormOpen(false);


    const [cardInfo, setCardInfo] = useState({
        cardNo1: "",
        cardNo2: "",
        cardNo3: "",
        cardNo4: "",
        expireMM: "",
        expireYY: "",
        cvc: ""
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
        <PaymentConfigWrapper>
            <PaymentConfigHeader>
                <h3 className="display-inline">결제수단 관리</h3>
                <Button variant="outline-primary" className="float-right"
                    onClick={()=>{
                        setPaymentFormOpen(!paymentFormOpen);
                    }}
                >추가하기</Button>
            </PaymentConfigHeader>
            {payments.map((payment) => {
                return(
                    <PaymentView key={payment.id} payment={payment} />
                );
            })}

            {/* <Modal open={paymentFormOpen} close={handleClose} confirm={addPayment} header="결제수단 추가" confirmMessage="추가">
                <PaymentForm onChange={onChangeForm}/>
            </Modal> */}
        </PaymentConfigWrapper>
    );
}

export default PaymentConfig;