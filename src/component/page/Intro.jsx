import React from "react";
import {Link} from "react-router-dom";
import styledComponents from "styled-components";

const Wrapper = styledComponents.div``;

function Intro(props){
    return(
        <Wrapper>
            <ul>
                <li><Link to="/home">홈(상품목록) 화면</Link></li>
                <li><Link to="/login">로그인 화면</Link></li>
                <li><Link to="/sign-up">회원가입 화면</Link></li>
                <li><Link to="/find-id">아이디찾기 화면</Link></li>
                <li><Link to="/find-pw">비밀번호찾기 화면</Link></li>
                <li><Link to="/product-view">상품조회 화면</Link></li>
                <li><Link to="/my-basket">장바구니 목록 화면</Link></li>
                <li><Link to="/my-basket">장바구니 목록 화면</Link></li>
            </ul>
        </Wrapper>
    );
}

export default Intro;
