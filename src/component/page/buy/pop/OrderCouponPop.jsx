import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";
import { numberCommaFormat } from "../../../../util/NumberFormat";

const StyledPopWrapper = styled.div`
    padding: 20px;
`;

const StyledButtonDiv = styled.div`
    
`;

export default function OrderCouponPop() {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        let urlParams = new URLSearchParams(window.location.search);
        let rawData = urlParams.get('data');
        let items = JSON.parse(decodeURIComponent(rawData));
        console.log(items);

        setItems(items);
    }, []);

    const openCouponModal = (partnersId) => {
        alert(partnersId);
    }

    const onClose = () => {
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
                        <th>총 금액</th>
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
                                            // 여기 판매처 ID 정보가 필요함... ㅠㅠ
                                            openCouponModal(item.id);
                                        }}
                                    >적용하기</Button>
                                </td>
                                <td>0원</td>
                                <td></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <StyledButtonDiv>
                <Button size="sm" className="mx-1" variant="outline-secondary" onClick={onClose} >취소</Button>
                <Button size="sm" className="mx-1" variant="outline-primary">적용하기</Button>
            </StyledButtonDiv>
        </StyledPopWrapper>
    );
}