import React from "react";
import styled from "styled-components";
import { Button, Form, Row, Col } from "react-bootstrap";

const StyledHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledDeliveryFormWrapper = styled.div`
    padding: 20px;
`;

function DeliveryForm(props){
    
    const {onChangeForm} = props;

    return (
        <StyledDeliveryFormWrapper>
            <StyledHeader>
                <h4 className="display-inline">배송지 추가</h4>
                <Button 
                    className="float-right" 
                    variant="outline-primary" 
                    onClick={()=>alert("add delivery")}>배송지 등록</Button>
            </StyledHeader>
            <Form>
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