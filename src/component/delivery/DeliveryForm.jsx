import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Row, Col } from "react-bootstrap";
import ProviderHeader from "../provide/component/ProviderHeader";
import DeliveryService from "../../api/component/delivery/delivery";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledDeliveryFormWrapper = styled.div`
    padding: 20px;
`;

function DeliveryForm(props){

    const navigate = useNavigate();
    
    /* 배송지 추가 관련 state 및 function */
    const [values, setValues] = useState({
        nickName: "",
        receiverName: "",
        zipCode : "",
        address : "",
        detailAddress : "",
        requestMessage : ""
    });
    const onChangeForm = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        });
    }
    const addDelivery = () => {
        DeliveryService.saveDelivery(values).then(result => {
            alert("배송지 정보가 추가되었습니다.");
            navigate("/my-page/delivery");
        });
    }
    
    return (
        <StyledDeliveryFormWrapper>
            <ProviderHeader 
                title="배송지 추가"
                onClick={addDelivery}
                buttonMessage="배송지 등록"
            />
            <Form>
                <Row className="mb-3">
                    <Col xs={8}>
                        <Form.Group controlId="nickName">
                            <Form.Control
                                type="text"
                                placeholder="배송지 명칭"
                                onChange={onChangeForm}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={8}>
                        <Form.Group controlId="receiverName">
                            <Form.Control
                                type="text"
                                placeholder="수령인"
                                onChange={onChangeForm}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={8}>
                        <Form.Group controlId="zipCode">
                            <Form.Control
                                type="text"
                                placeholder="우편번호"
                                onChange={onChangeForm}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Button variant="outline-primary"
                                    onClick={()=>{
                                        alert("우편번호 검색 화면");
                                    }}
                            >우편번호 검색</Button>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={8}>
                        <Form.Group controlId="address">
                            <Form.Control
                                type="text"
                                placeholder="주소"
                                onChange={onChangeForm}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="detailAddress">
                            <Form.Control
                                type="text"
                                placeholder="상세주소"
                                onChange={onChangeForm}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="requestMessage">
                    <Form.Control
                        type="text"
                        placeholder="요청사항을 입력하세요."
                        onChange={onChangeForm}
                    />
                </Form.Group>
            </Form>
        </StyledDeliveryFormWrapper>
    );
}

export default DeliveryForm;