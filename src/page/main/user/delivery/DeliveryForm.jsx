import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function DeliveryForm(props){
    const {onChangeForm, isAddPage, selectedDelivery} = props;
    const [isWritable, setIsWritable] = useState(false);

    useEffect(() => {
        setIsWritable(selectedDelivery && selectedDelivery.id);
    }, [selectedDelivery]);

    return (
        <Form>
        {isAddPage &&
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
        }
            <Row className="mb-3">
                <Col xs={8}>
                    <Form.Group controlId="receiverName">
                        <Form.Control
                            type="text"
                            placeholder="수령인"
                            onChange={onChangeForm}
                            defaultValue={isWritable ? selectedDelivery.receiverName : ""}
                            disabled={isWritable}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={8}>
                    <Form.Group controlId="receiverPhoneNumber">
                        <Form.Control
                            type="text"
                            placeholder="수령인 연락처"
                            onChange={onChangeForm}
                            defaultValue={isWritable ? selectedDelivery.receiverPhoneNumber : ""}
                            disabled={isWritable}
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
                            defaultValue={isWritable ? selectedDelivery.zipCode : ""}
                            disabled={isWritable}
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
                            defaultValue={isWritable ? selectedDelivery.address : ""}
                            disabled={isWritable}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="detailAddress">
                        <Form.Control
                            type="text"
                            placeholder="상세주소"
                            onChange={onChangeForm}
                            defaultValue={isWritable ? selectedDelivery.detailAddress : ""}
                            disabled={isWritable}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="requestMessage">
                <Form.Control
                    type="text"
                    placeholder="요청사항을 입력하세요."
                    onChange={onChangeForm}
                    defaultValue={isWritable ? selectedDelivery.requestMessage : ""}
                    disabled={isWritable}
                />
            </Form.Group>
        </Form>
    );
}

export default DeliveryForm;