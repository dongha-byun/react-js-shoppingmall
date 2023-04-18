import React from "react";
import { Button, Form, Nav } from "react-bootstrap";

export default function PartnersLogin(props){
    const { onChange, login} = props;

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="loginId">
                    <Form.Control
                        type="text"
                        placeholder="아이디"
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="비밀번호"
                        onChange={onChange}
                    />
                </Form.Group>
                <div className="d-grid mb-3">
                    <Button onClick={login} variant="primary" size="md">
                        로그인
                    </Button>
                </div>
            </Form>
            <Nav className="justify-content-center" navbar={false}>
                <Nav.Item>
                    <Nav.Link href="/providers/find-id">아이디찾기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/providers/find-pw">비밀번호찾기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/partners/sign-up">판매 자격 신청</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}