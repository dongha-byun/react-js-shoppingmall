import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const PaymentViewWrapper = styled.div`
    border: 1px solid black;
    padding: 20px;
    margin-top: 10px;
`;

const StyledTable = styled.table`
    margin: 10px 0;
    width: 100%;
`;

function PaymentView(props){
    const {payment} = props;
    
    return (
        <PaymentViewWrapper>
            <StyledTable>
                <tbody>
                    <tr>
                        <th rowSpan={2}>{payment.gubun}</th>
                        <td>{payment.cardCo}</td>
                        <td rowSpan={2} className="text-center">
                            <Button variant="danger" onClick={()=> {
                                alert("삭제 : " + payment.id);
                            }}>
                                삭제
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>{payment.cardNo}</td>
                    </tr>
                </tbody>
            </StyledTable>
        </PaymentViewWrapper>
    );
}

export default PaymentView;