import React, { useState } from "react";
import styledComponents from "styled-components";
import { Form, Button } from "react-bootstrap";

const FindPwWrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin : 0 auto;
    padding: 0px 50px;
`;

function FindPw(){

    const [findIdValue, setFindIdValue] = useState({
        formName: "",
        formTelNo: ""
    });
    const onChangeValue = (event) => {
        setFindIdValue({
            ...findIdValue,
            [event.target.id] : event.target.value
        });
    }
    const findIPw = () => {
        // post and close modal
    }

    return(
        <FindPwWrapper>
            <h3>비밀번호 찾기</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formLoginId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelNo">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="text" placeholder="000-0000-0000" onChange={onChangeValue}/>
                </Form.Group>
            </Form>
            <Button className="float-right" variant="primary" onClick={()=>alert("아이디로 회원정보 조회")}>
                회원정보 찾기
            </Button>
            
        </FindPwWrapper>
    );
}

export default FindPw;