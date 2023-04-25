import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toDateFormat } from "../../../../../util/DateFormat";
import { numberCommaFormat } from "../../../../../util/NumberFormat";
import CommonModal from "../../../../modal/CommonModal";
import OrderCancelPop from "./pop/OrderCancelPop";
import OrderService from "../../../../../api/component/order/order";

const StyledBuyListComponent = styled.div`
    border: 1px solid black;
    padding: 20px;
    margin-top: 10px;
`;
const StyledTable = styled.table`
    margin: 10px 0;
    width: 100%;
`;
const StyledTh=styled.th`
    width: 100px;
`

function BuyListComponent(props){
    const {orderHistory} = props;
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    const navigate = useNavigate();

    const showOrderCancelPop = () => {
        setIsOpen(true);
    }
    const cancelOrder = () => {
        OrderService.cancel(orderHistory.orderId).then(result => {
            handleClose();
            navigate("/my-page/buy");
        });
    }

    const writeReview = () => {
        navigate("review-write/"+orderHistory.orderId);
    }

    return(
        <StyledBuyListComponent>
            <StyledTable>
                <colgroup>
                    <col width={200}></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col width={200}></col>
                </colgroup>
                <tbody>
                    <tr>
                        <StyledTh rowSpan={2}>
                            {toDateFormat(new Date(orderHistory.orderDate), "yyyy-MM-dd HH:mm:ss")}
                        </StyledTh>
                        <StyledTh rowSpan={2} className={`buy ${orderHistory.orderStatus} text-center`}>
                            {orderHistory.orderStatusName}
                        </StyledTh>
                        <td rowSpan={2} className="text-center">
                            <img src="/images/pot.jpeg" width={120}/>
                        </td>
                        <td>{orderHistory.productName}</td>
                        <td rowSpan={2} className="text-center">
                            { orderHistory.orderStatus == 'READY' && 
                                <Button variant="outline-danger" onClick={showOrderCancelPop}>
                                    주문취소
                                </Button>
                            }
                            { orderHistory.orderStatus == 'END' && 
                                <Button variant="outline-primary" onClick={writeReview}>
                                    리뷰작성
                                </Button>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>{numberCommaFormat(orderHistory.orderPrice)}원</td>
                    </tr>
                </tbody>
            </StyledTable>
            <CommonModal show={isOpen} handleClose={handleClose} headerMessage={"주문 취소"}>
                <OrderCancelPop cancel={cancelOrder} />
            </CommonModal>
        </StyledBuyListComponent>
    );
}

export default BuyListComponent;