import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toDateFormat } from "../../../../../util/DateFormat";
import { numberCommaFormat } from "../../../../../util/NumberFormat";
import CommonModal from "../../../../modal/CommonModal";
import OrderCancelPop from "./pop/OrderCancelPop";
import OrderService from "../../../../../api/component/order/order";
import DeliveryEndButton from "./DeliveryEndButton";
import PayService, { TEST_PAY_CID, TYPE_KAKAO_PAY } from "../../../../../api/component/pay/pay";

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
    const [cancelReason, setCancelReason] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    const navigate = useNavigate();

    const showOrderCancelPop = () => {
        setIsOpen(true);
    }
    const onChangeCancelContent = (event) => {
        setCancelReason(event.target.value);
    }

    const cancelPay = () => {
        // let params = {
        //     "type": TYPE_KAKAO_PAY,
        //     "data": {
        //         "tid": orderHistory.tid,
        //         "cancel_amount": orderHistory.orderPrice,
        //         "cancel_tax_free_amount": 0
        //     }
        // };

        // PayService.cancelPay(params).then(result => {
        //     cancelOrder();
        // }).catch(() => {
        //     alert("결제 도중 오류가 발생했습니다.");
        // });

        OrderService.cancel(orderHistory.orderId, orderHistory.orderItemId, cancelReason).then(result => {
            alert("주문이 취소되었습니다.");
            handleClose();
            navigate("/my-page/buy");
        });
    }

    const cancelOrder = () => {
        OrderService.cancel(orderHistory.orderId, orderHistory.orderItemId, cancelReason).then(result => {
            alert("주문이 취소되었습니다.");
            handleClose();
            navigate("/my-page/buy");
        });
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
                        <StyledTh rowSpan={3}>
                            {toDateFormat(new Date(orderHistory.orderDate), "yyyy-MM-dd HH:mm:ss")}
                        </StyledTh>
                        <StyledTh rowSpan={3} className={`buy ${orderHistory.orderStatus} text-center`}>
                            {orderHistory.orderStatusName}
                        </StyledTh>
                        <td rowSpan={3} className="text-center">
                            <img src="/images/pot.jpeg" width={120}/>
                        </td>
                        <td>{orderHistory.partnerName}</td>
                        <td rowSpan={3} className="text-center">
                            { orderHistory.orderStatus == 'PREPARED' && 
                                <Button variant="outline-danger" onClick={showOrderCancelPop}>
                                    주문취소
                                </Button>
                            }
                            { orderHistory.orderStatus == 'DELIVERY_END' && 
                                <DeliveryEndButton 
                                    orderId={orderHistory.orderId} 
                                    orderItemId={orderHistory.orderItemId}
                                    productId={orderHistory.productId} 
                                />
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>{orderHistory.productName}</td>
                    </tr>
                    <tr>
                        <td>{numberCommaFormat(orderHistory.orderPrice)}원</td>
                    </tr>
                </tbody>
            </StyledTable>
            <CommonModal show={isOpen} handleClose={handleClose} headerMessage={"주문 취소"} footerMessage={"주문 취소"} footerEvent={cancelPay}>
                <OrderCancelPop onChangeValue={onChangeCancelContent}/>
            </CommonModal>
        </StyledBuyListComponent>
    );
}

export default BuyListComponent;