import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styledComponents from "styled-components";
import TextInput from "../../../ui/TextInput";

const StyledHeader = styledComponents.div`
    margin-bottom: 25px;
`;

const UserBasicConfigWrapper = styledComponents.div`
    padding: 20px;
`;

function UserBasicConfig(props){

    return (
        <UserBasicConfigWrapper>
            <StyledHeader>
                <h3 className="display-inline">사용자 기본정보 설정</h3>
                <Button 
                    className="float-right" 
                    variant="outline-primary" 
                    onClick={()=>alert("edit info")}>수정</Button>
            </StyledHeader>
            <Row>
                <Col mx={6}>
                    <Form.Group className="mb-3" controlId="loginId">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control 
                            type="text"
                            value="byunsw4"
                            disabled
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>이름</Form.Label>
                        <Form.Control 
                            type="text"
                            value="변동하"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telNo">
                        <Form.Label>연락처</Form.Label>
                        <Form.Control 
                            value="010-0000-0000"
                        />
                    </Form.Group>
                </Col>
            </Row>
        </UserBasicConfigWrapper>
    );
}

export default UserBasicConfig;