import React from "react";
import styledComponents from "styled-components";
import { useState } from "react";
import CommonModal from "../../../modal/CommonModal";
import { Button, Form } from "react-bootstrap";

const SignUpWrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    max-width: 540px;
    margin : 0 auto;
    padding: 0px 50px;
`;

function SignUp(){
    const [show, setShow] = useState();
    const handleClose = () => setShow(false);
    const [signupValue, setSignupValue] = useState({
        formLoginId: "",
        formPassword: "",
        formPasswordConfirm: "",
        formName: "",
        formTelNo: ""
    });
    const onChangeValue = (event) => {
        setSignupValue({
            ...signupValue,
            [event.target.id] : event.target.value
        });
    }
    const signUp = () => {
        // post and close modal
        handleClose();
    }
    return (
        <SignUpWrapper>
            <h3>가입정보 입력</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formLoginId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" placeholder="아이디" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPasswordConfirm">
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호 확인" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelNo">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="text" placeholder="000-0000-0000" onChange={onChangeValue}/>
                </Form.Group>
            </Form>
            <Button className="float-right" variant="primary" onClick={()=>setShow(true)}>
                가입하기
            </Button>

            <CommonModal show={show} handleClose={handleClose} 
                footerEvent={signUp} footerMessage="확인">
                회원가입 하시겠습니까?
            </CommonModal>
        </SignUpWrapper>
    );
}

export default SignUp;