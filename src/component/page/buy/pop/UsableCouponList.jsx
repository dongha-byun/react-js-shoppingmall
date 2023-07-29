import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { numberCommaFormat } from "../../../../util/NumberFormat";
import UserCouponService from "../../../../api/component/coupon/userCoupon";

export default function UsableCouponList(props) {
    const { couponModalData, handleClose, confirmFunc } = props;
    const [couponList, setCouponList] = useState([]);
    const [selectedCoupon, setSelectedCoupon] = useState({});

    useEffect(() => {
        let partnersId = couponModalData.partnersId;
        getUsableCouponList(partnersId);
    }, [couponModalData]);

    const getUsableCouponList = (partnersId) => {
        UserCouponService.getUsableCouponList(partnersId).then((data) => {
            setCouponList(data.map((coupon) => ({
                ...coupon,
                "discountAmount": Math.round(couponModalData.productPrice * coupon.discountRate / 100)
            })));
        })
    }

    const onSelectCoupon = (coupon) => {
        setSelectedCoupon(coupon);
    }

    const modalClose = () => {
        handleClose();
    }

    const confirm = () => {
        confirmFunc(couponModalData.itemId, selectedCoupon);
        modalClose();
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>쿠폰명</th>
                        <th>사용기한</th>
                        <th>할인율</th>
                        <th>할인금액</th>
                    </tr>
                </thead>
                <tbody>
                    {couponList.map((coupon) => {
                        return (
                            <tr key={coupon.id}>
                                <td>
                                    <Form.Check 
                                        type="radio" 
                                        name="selectedCoupon"
                                        id={`selectedCoupon${coupon.id}`}
                                        onChange={() => onSelectCoupon(coupon)} 
                                    />
                                </td>
                                <td>{coupon.name}</td>
                                <td>{coupon.fromDate} ~ {coupon.toDate}</td>
                                <td>{coupon.discountRate}%</td>
                                <td>{numberCommaFormat(coupon.discountAmount)}원</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="text-center">
                <Button size="sm" className="mx-1" variant="outline-secondary" onClick={modalClose}>취소</Button>
                <Button size="sm" className="mx-1" variant="outline-primary" onClick={confirm}>적용하기</Button>
            </div>
        </div>
    );
}