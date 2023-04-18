import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { partnersSignup } from "../../../api/component/partners/partners";

const StyledPartnersSignupWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 540px;
    margin : 0 auto;
    padding: 0px 50px 20px 50px;
`;

export default function PartnersSignup() {
    const [signupValue, setSignupValue] = useState({
        name: "",
        ceoName: "",
        corporateRegistrationNumber: "",
        telNo: "",
        address: "",
        loginId: "",
        password: "",
        confirmPassword: ""
    });
    const onChangeValue = (event) => {
        setSignupValue({
            ...signupValue,
            [event.target.id] : event.target.value
        });
    }
    const signUp = () => {
        partnersSignup(signupValue);
    }
    return (
        <StyledPartnersSignupWrapper>
            <h3>판매 업체 정보 입력</h3>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>업체명</Form.Label>
                    <Form.Control type="text" placeholder="업체명" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ceoName">
                    <Form.Label>대표자명</Form.Label>
                    <Form.Control type="text" placeholder="대표자명" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="corporateRegistrationNumber">
                    <Form.Label>사업자 번호</Form.Label>
                    <Form.Control type="text" placeholder="사업자 번호" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="telNo">
                    <Form.Label>대표번호</Form.Label>
                    <Form.Control type="text" placeholder="대표번호" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>사업장 주소</Form.Label>
                    <Form.Control type="text" placeholder="사업장 주소" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" placeholder="아이디" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호 확인" onChange={onChangeValue}/>
                </Form.Group>
            </Form>
            <Button className="w-100" variant="primary" size="lg" onClick={()=>{
                signUp();
            }}>
                판매자격 신청하기
            </Button>
        </StyledPartnersSignupWrapper>
    );
}