import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";
import { numberCommaFormat } from "../../../../util/NumberFormat";
import UsableCouponList from "./UsableCouponList";
import CommonModal from "../../../modal/CommonModal";

const StyledPopWrapper = styled.div`
    padding: 20px;
`;

const StyledButtonDiv = styled.div`
    
`;

export default function OrderCouponPop() {
    const [isCouponModalShow, setCouponModalShow] = useState(false);
    const [couponModalData, setCouponModalData] = useState({
        "partnersId" : "",
        "productPrice" : 0
    });
    const couponModalCloseHandle = () => setCouponModalShow(false);
    const couponModalOpen = () => setCouponModalShow(true);

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        let urlParams = new URLSearchParams(window.location.search);
        let rawData = urlParams.get('data');
        let items = JSON.parse(decodeURIComponent(rawData));

        setItems(items);
    }, []);

    const selectCoupon = (itemId, coupon) => {
        setItems(items.map((item) => {
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

    const onConfirm = () => {
        console.log(items);
    }

    const onClose = () => {
        if(isCouponModalShow) {
            couponModalCloseHandle();
        }
        window.close();
    }
    
    return (
        <StyledPopWrapper>
            <h4>쿠폰 적용</h4>
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
                    {items.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>{`[${item.partnersName}]${item.productName}`}</td>
                                <td>{numberCommaFormat(item.price)}원</td>
                                <td>
                                    <Button 
                                        size="sm" 
                                        variant="outline-dark" 
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
            <StyledButtonDiv>
                <Button size="sm" className="mx-1" variant="outline-secondary" onClick={onClose} >취소</Button>
                <Button size="sm" className="mx-1" variant="outline-primary" onClick={onConfirm}>적용하기</Button>
            </StyledButtonDiv>

            <CommonModal show={isCouponModalShow} handleClose={couponModalCloseHandle} headerMessage={"쿠폰목록"}>
                <UsableCouponList couponModalData={couponModalData} handleClose={couponModalCloseHandle} confirmFunc={selectCoupon} />
            </CommonModal>
        </StyledPopWrapper>
    );
}