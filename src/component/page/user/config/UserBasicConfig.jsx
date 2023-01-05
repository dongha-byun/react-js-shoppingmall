import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styledComponents from "styled-components";
import ProviderHeader from "../../../provide/component/ProviderHeader";

const UserBasicConfigWrapper = styledComponents.div`
    padding: 20px;
`;

function UserBasicConfig(props){   
    const editConfig = () => {
        alert("사용자 설정 수정");
    }

    return (
        <UserBasicConfigWrapper>
            <ProviderHeader 
                title="사용자 기본정보 설정"
                onClick={editConfig}
                buttonMessage="수정"
            />
            <Form>
                <Form.Group className="mb-3" controlId="loginId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control 
                        type="text" defaultValue={"byunsw4"} disabled readOnly
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" defaultValue={"변동하"} />
                </Form.Group>
                <Form.Label>연락처</Form.Label> 
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-3" controlId="telNo">
                            <Form.Control defaultValue={"010-0000-0000"} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={()=>alert("연락처 인증")} >연락처 인증</Button>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>비밀번호 변경</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordConfirm">
                    <Form.Label>비밀번호 변경 확인</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
            </Form>
        </UserBasicConfigWrapper>
    );
}

export default UserBasicConfig;