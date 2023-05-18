import React from "react";
import { Form } from "react-bootstrap";

export default function OrderCancelPop(props) {
    const { onChangeValue } = props;
    return (
        <div>
            주문을 취소하시겠습니까? 주문을 취소하면 재주문 할 수 없습니다.
            <Form className="mt-3">
                <Form.Group controlId="content">
                    <Form.Control as="textarea" onChange={onChangeValue} rows={5} 
                        placeholder="주문 취소 사유를 작성해주세요."
                    />
                </Form.Group>
            </Form>
        </div>
    );
}