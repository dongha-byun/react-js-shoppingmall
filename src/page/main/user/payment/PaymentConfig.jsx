import React from "react";
import styledComponents from "styled-components";
import PaymentView from "./PaymentView";
import payments from "../../../../sample-data/payment.json";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentConfigWrapper = styledComponents.div`
    padding: 20px;
`;
const PaymentConfigHeader = styledComponents.div`
    padding-bottom: 15px;
`;

function PaymentConfig(props){
    const navigate = useNavigate();

    return (
        <PaymentConfigWrapper>
            <PaymentConfigHeader>
                <h3 className="display-inline">결제수단 관리</h3>
                <Button variant="outline-primary" className="float-right"
                    onClick={()=>{
                        navigate("add");
                    }}
                >추가하기</Button>
            </PaymentConfigHeader>
            {payments.map((payment) => {
                return(
                    <PaymentView key={payment.id} payment={payment} />
                );
            })}
        </PaymentConfigWrapper>
    );
}

export default PaymentConfig;