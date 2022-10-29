import React from "react";
import styledComponents from "styled-components";
import Logo from "../../common/Logo";
import TextInput from "../../ui/TextInput";
import TextButton from "../../ui/TextButton";

const FindPwWrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin : 0 auto;
    padding: 0px 50px;
`;

function FindPw(){
    return(
        <FindPwWrapper>
            <h3>비밀번호 찾기</h3>
            <TextInput placeholder="아이디" />
            <TextInput placeholder="이름" />
            <TextInput placeholder="연락처" />
            <TextButton 
                value="회원정보 찾기"
                width="100%"
                height="50px"
                onClick={()=>{
                    alert("아이디로 회원정보 조회");
                }}
            />
        </FindPwWrapper>
    );
}

export default FindPw;