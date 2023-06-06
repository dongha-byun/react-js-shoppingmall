import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BuyListComponent from "./buy/BuyListComponent";
import { Form, Row, Col } from "react-bootstrap";
import { format } from "date-fns";
import OrderService from "../../../../api/component/order/order";
import { aMonthTime } from "../../../../util/DateFormat";

const BuyWrapper = styled.div`
    padding: 20px;
`;

function BuyConfig(){
    const [startDate, setStartDate] = useState(format(new Date(new Date().getTime() - 3 * aMonthTime), "yyy-MM-dd"));
    const [endDate, setEndDate] = useState(format(new Date(), "yyy-MM-dd"));
    const [orderHistories, setOrderHistories] = useState([]);

    useEffect(() => {
        onSearch(startDate, endDate);
    }, []);

    const onSearch = (startDateParam, endDateParam) => {
        OrderService.getOrderHistory(startDateParam, endDateParam).then(result => {
            setOrderHistories(result);
        });
    }

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
                                    onSearch(event.target.value, endDate);
                                }}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="date" value={endDate} 
                                onChange={(event) => {
                                    setEndDate(event.target.value);
                                    onSearch(startDate, event.target.value);
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            {orderHistories.map((orderHistory)=>{
                return(
                    <BuyListComponent key={orderHistory.orderItemId} orderHistory={orderHistory} />
                );
            })}
        </BuyWrapper>
    );
}

export default BuyConfig;