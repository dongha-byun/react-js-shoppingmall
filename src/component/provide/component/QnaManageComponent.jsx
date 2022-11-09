import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ProviderHeader from "./ProviderHeader";

const StyledQnaManagerWrapper = styled.div`
    padding: 20px;
`;

function QnaManageComponent(){
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const onSearch = () => {
        console.log(startDate);
        console.log(endDate);
        alert("search");
    }

    return (
        <StyledQnaManagerWrapper>
            <ProviderHeader 
                title="상품문의 내역"
                buttonMessage="검색"
                onClick={onSearch}
            />
            <Form className="border-bottom">
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">응답여부</Form.Label>
                    <Col sm="10">
                        <Form.Select>
                            <option value="READY">미응답</option>
                            <option value="END">응답완료</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Row>
                    <Col sm="2">
                        <Form.Label>검색기간</Form.Label>
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
                                }}/>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </StyledQnaManagerWrapper>
    );
}

export default QnaManageComponent;