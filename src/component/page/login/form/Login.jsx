import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styledComponents from "styled-components";
import TextInput from "../../../ui/TextInput";
import { Button } from "react-bootstrap";

const LoginPageWrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    margin : 0 auto;
`;

const LoginWrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const InputWrapper = styledComponents.div`
    width: 100%;
    position: relative;
`;

const LabelWrapper = styledComponents.div`
    width: 100%;
    text-align: center;
    margin: 15px 0;
    font-size: 0.9em;
`;

const StyledSpan = styledComponents.span`
    cursor: pointer;
`;

function Login(props){
    const {menuClick, onChange, login} = props;

    return (
        <LoginPageWrapper>
            <LoginWrapper>
                <InputWrapper>
                    <TextInput placeholder="아이디" name="loginId" onChange={onChange} />
                    <TextInput type="password" placeholder="비밀번호" name="password" onChange={onChange} />
                </InputWrapper>
                <Button onClick={login} className="common-btn-style">
                    로그인
                </Button>
                <LabelWrapper>
                    <StyledSpan onClick={()=>menuClick("/find-id")}>아이디찾기</StyledSpan>
                    &nbsp;<span>|</span>&nbsp;
                    <StyledSpan onClick={()=>menuClick("/find-pw")}>비밀번호찾기</StyledSpan>
                    &nbsp;<span>|</span>&nbsp;
                    <StyledSpan onClick={()=>menuClick("/sign-up")}>회원가입</StyledSpan>
                </LabelWrapper>
            </LoginWrapper>
        </LoginPageWrapper>
    );
}

export default Login;