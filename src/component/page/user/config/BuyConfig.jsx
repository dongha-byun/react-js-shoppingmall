import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BuyListComponent from "./buy/BuyListComponent";
import { getBuys } from "../../../../api/sample/buyList";
import { Form, Row, Col } from "react-bootstrap";
import { format } from "date-fns";
import OrderService from "../../../../api/component/order/order";
import { aMonthTime } from "../../../../util/DateFormat";

const BuyWrapper = styled.div`
    padding: 20px;
`;

function BuyConfig(){
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [orderHistories, setOrderHistories] = useState([]);

    useEffect(() => {
        const dateFormat = "yyy-MM-dd";
        const initStartDate = format(new Date(new Date().getTime() - 3 * aMonthTime), dateFormat);
        const initEndDate = format(new Date(), dateFormat);
        
        setStartDate(initStartDate);
        setEndDate(initEndDate);

        OrderService.getOrderHistory(initStartDate, initEndDate).then(result => {
            setOrderHistories(result);
        });

    }, []);

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
            {orderHistories.map((orderHistory)=>{
                return(
                    <BuyListComponent key={orderHistory.orderId} orderHistory={orderHistory} />
                );
            })}
        </BuyWrapper>
    );
}

export default BuyConfig;