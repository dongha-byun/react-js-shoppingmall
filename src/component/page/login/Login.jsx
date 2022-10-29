import React from "react";
import styledComponents from "styled-components";
import TextInput from "../../ui/TextInput";
import TextButton from "../../ui/TextButton";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../common/Logo";

const LoginPageWrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin : 0 auto;
    padding: 0px 50px;
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
    margin: 15px 0;
    font-size: 0.9em;
`;

const ButtonWrapper = styledComponents.div`
    width: 100%;
    position: relative;
`;


function Login(){
    const navigate = useNavigate();

    return (
        <LoginPageWrapper>
            <h3>로그인</h3>
            <LoginWrapper>
                <InputWrapper>
                    <TextInput placeholder="아이디"></TextInput>
                    <TextInput type="password" placeholder="비밀번호"></TextInput>
                </InputWrapper>
                <LabelWrapper>
                    <Link to="/find-id">아이디찾기</Link>
                    &nbsp;<span class="text-blue">|</span>&nbsp;
                    <Link to="/find-pw">비밀번호찾기</Link>
                </LabelWrapper>
                <div class="mb-5"></div>
                <ButtonWrapper>
                    <TextButton
                        width="100%"
                        height="50px"
                        onClick={()=>{
                            alert("Login");
                        }}
                        value="Login"
                    />
                    <div class="mb-5"></div>
                    <TextButton 
                        width="100%"
                        height="50px"
                        onClick={()=>{
                            navigate("/sign-up");
                        }}
                        value="회원가입"
                    />
                </ButtonWrapper>
            </LoginWrapper>
        </LoginPageWrapper>
    );
}

export default Login;