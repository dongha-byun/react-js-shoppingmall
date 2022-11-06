import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function DeliveryForm(props){
    
    const {onChangeForm} = props;

    return (
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
    );
    
}

export default DeliveryForm;