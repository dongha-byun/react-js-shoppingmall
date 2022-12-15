import React, { useState } from "react";
import styled from "styled-components";
import BuyListComponent from "./buy/BuyListComponent";
import { getBuys } from "../../../../api/sample/buyList";
import { Form, Row, Col } from "react-bootstrap";

const BuyWrapper = styled.div`
    padding: 20px;
`;

function BuyConfig(){
    const data = getBuys();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return(
        <BuyWrapper>
            <Form>
                <Row>
                    <Col sm="2">
                        <Form.Label>구매일자 검색기간</Form.Label>
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
            {data.map((buy)=>{
                return(
                    <BuyListComponent key={buy.id} buy={buy} />
                );
            })}
        </BuyWrapper>
    );
}

export default BuyConfig;