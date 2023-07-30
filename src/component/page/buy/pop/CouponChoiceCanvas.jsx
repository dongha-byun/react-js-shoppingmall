import React, { useState } from "react";
import { numberCommaFormat } from "../../../../util/NumberFormat";
import { Button, Offcanvas, Table } from "react-bootstrap";
import CommonModal from "../../../modal/CommonModal";
import UsableCouponList from "./UsableCouponList";
import styled from "styled-components";

const StyledTd = styled.td`
    vertical-align:middle
`;

export default function CouponChoiceCanvas(props) {
    const { orderProductParam, setOrderProductParam } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isCouponModalShow, setCouponModalShow] = useState(false);
    const [couponModalData, setCouponModalData] = useState({
        "partnersId" : "",
        "productPrice" : 0
    });
    const couponModalCloseHandle = () => setCouponModalShow(false);
    const couponModalOpen = () => setCouponModalShow(true);
    const selectCoupon = (itemId, coupon) => {
        setOrderProductParam(orderProductParam.map((item) => {
            if(item.id === itemId){
                return {...item, "usedCoupon": coupon};
            }
            return item;
        }))
    }
    const openCouponModal = (itemId) => {
        let findOrderProduct = orderProductParam.find((orderProduct) => orderProduct.id === itemId);
        setCouponModalData({
            "itemId" : findOrderProduct.id,
            "partnersId" : findOrderProduct.partnersId,
            "productPrice" : findOrderProduct.productPrice,
            "usedCouponId" : findOrderProduct.usedCoupon.id
        });
        couponModalOpen();
    }

    const cancelUsedCoupon = (itemId) => {
        setOrderProductParam(orderProductParam.map((item) => {
            if(item.id === itemId) {
                return {
                    ...item, 
                    "usedCoupon": {
                        "discountAmount": 0
                    }
                }
            }
            return item;
        }))
    }

    return (
        <div>
            <Button variant="link" size="sm" onClick={handleShow} className="me-2">
                적용하기
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>쿠폰</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Table>
                        <colgroup>
                            <col width="30%"></col>
                            <col width="15%"></col>
                            <col width="25%"></col>
                            <col width="15%"></col>
                            <col width="15%"></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>상품명</th>
                                <th>주문금액</th>
                                <th>쿠폰선택</th>
                                <th>할인금액</th>
                                <th>할인 적용 금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderProductParam.map((orderProduct) => {
                                return(
                                    <tr key={orderProduct.id}>
                                        <StyledTd>{`[${orderProduct.partnersName}]${orderProduct.productName}`}</StyledTd>
                                        <StyledTd>{numberCommaFormat(orderProduct.productPrice)}원</StyledTd>
                                        <StyledTd>
                                            {
                                                orderProduct.usedCoupon.id && 
                                                <div>{orderProduct.usedCoupon.name}</div>
                                            }
                                            <Button size="sm" variant="outline-dark" 
                                                onClick={() => {
                                                    openCouponModal(orderProduct.id);
                                                }}
                                            >적용하기</Button>
                                            {
                                                orderProduct.usedCoupon.id && 
                                                <Button size="sm" className="mx-1" variant="outline-danger" 
                                                    onClick={() => {
                                                        cancelUsedCoupon(orderProduct.id);
                                                    }}
                                                >적용 취소</Button>
                                            }
                                        </StyledTd>
                                        <StyledTd>{numberCommaFormat(orderProduct.usedCoupon.discountAmount)}원</StyledTd>
                                        <StyledTd>{numberCommaFormat(orderProduct.productPrice - orderProduct.usedCoupon.discountAmount)}원</StyledTd>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Offcanvas.Body>
            </Offcanvas>
            <CommonModal show={isCouponModalShow} handleClose={couponModalCloseHandle} headerMessage={"쿠폰목록"} size="lg">
                <UsableCouponList couponModalData={couponModalData} handleClose={couponModalCloseHandle} confirmFunc={selectCoupon} />
            </CommonModal>
        </div>
    );
}