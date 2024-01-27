import React from "react";
import { Button, Form, Nav } from "react-bootstrap";


function Login(props){
    const { onChange, login } = props;

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                        type="text"
                        placeholder="이메일"
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="비밀번호"
                        onChange={onChange}
                        onKeyDown={(event) => {
                            if(event.code === "Enter") {
                                login();
                            }
                        }}
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
                    <Nav.Link href="/find-id">아이디찾기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/find-pw">비밀번호찾기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/sign-up">회원가입</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Login;