import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CategorySelect from "../select/CategorySelect";
import { Form, Row, Col, Table } from "react-bootstrap";
import ProvideHeader from "../component/ProviderHeader";

const StyledOrderWrapper = styled.div`
    padding: 20px;
`;

function OrderComponent(props){
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <StyledOrderWrapper>
            <ProvideHeader 
                title="주문/배송 내역"
                buttonMessage="검색"
                onClick={() => alert("내역 검색")}
            />
            <Form className="border-bottom">
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">주문/배송 상태</Form.Label>
                    <Col sm="10">
                        <Form.Select>
                            <option value="READY">준비중</option>
                            <option value="ING">배송중</option>
                            <option value="END">배송완료</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Row>
                    <Col sm="2">
                        <Form.Label>주문일자 검색기간</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="date" value={startDate} 
                                onChange={(event) => {
                                    setStartDate(event.target.value);
                                }}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="date" value={endDate} 
                                onChange={(event) => {
                                    setEndDate(event.target.value);
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Table className="mt-10">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>주문자 정보</th>
                        <th>주문일</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>참깨빵위에 순쇠고기 패티 두장</td>
                        <td>12</td>
                        <td>
                            주문자: 변*하<br/>
                            주소: 서울시 어딘가 꾸이꾸이
                        </td>
                        <td>2022-11-03</td>
                        <td>버튼 뾰로롱</td>
                    </tr>
                </tbody>
            </Table>
        </StyledOrderWrapper>
    );
}

export default OrderComponent;