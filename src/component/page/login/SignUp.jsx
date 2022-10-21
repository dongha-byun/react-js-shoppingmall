import React from "react";
import styledComponents from "styled-components";
import TextButton from "../../ui/TextButton";
import TextInput from "../../ui/TextInput";
import Logo from "../../common/Logo";

const SignUpWrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin : 0 auto;
    padding: 0px 50px;
`;

function SignUp(){

    return (
        <SignUpWrapper>
            <Logo></Logo>
            <h3>가입정보 입력</h3>
            <TextInput placeholder="아이디"></TextInput>
            <TextInput type="password" placeholder="비밀번호"></TextInput>
            <TextInput type="password" placeholder="비밀번호 확인"></TextInput>
            <TextInput placeholder="이름"></TextInput>
            <TextInput placeholder="휴대폰 번호"></TextInput>
            <TextButton 
                value="가입하기"
                width="100%"
                height="50px"
                onClick={()=>{
                    alert("가입하기");
                }}
            />
        </SignUpWrapper>
    );
}

export default SignUp;