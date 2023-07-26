import React, { useState } from "react";
import { numberCommaFormat } from "../../../../util/NumberFormat";
import { Button, Offcanvas, Table } from "react-bootstrap";
import CommonModal from "../../../modal/CommonModal";
import UsableCouponList from "./UsableCouponList";

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
    const openCouponModal = (itemId, partnersId, productPrice) => {
        setCouponModalData({
            "itemId" : itemId,
            "partnersId" : partnersId,
            "productPrice" : productPrice
        });
        couponModalOpen();
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
                            {orderProductParam.map((item) => {
                                return(
                                    <tr key={item.id}>
                                        <td>{`[${item.partnersName}]${item.productName}`}</td>
                                        <td>{numberCommaFormat(item.price)}원</td>
                                        <td>
                                            <Button size="sm" variant="outline-dark" 
                                                onClick={() => {
                                                    openCouponModal(item.id, item.partnersId, item.price);
                                                }}
                                            >적용하기</Button>
                                        </td>
                                        <td>{numberCommaFormat(item.usedCoupon?.discountAmount)}원</td>
                                        <td>{numberCommaFormat(item.price - item.usedCoupon?.discountAmount)}원</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Offcanvas.Body>
            </Offcanvas>
            <CommonModal show={isCouponModalShow} handleClose={couponModalCloseHandle} headerMessage={"쿠폰목록"}>
                <UsableCouponList couponModalData={couponModalData} handleClose={couponModalCloseHandle} confirmFunc={selectCoupon} />
            </CommonModal>
        </div>
    );
}