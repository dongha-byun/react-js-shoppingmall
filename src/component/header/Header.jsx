import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import Search from "./Search";
import TextButton from "../ui/TextButton";
import Logo from "./Logo";

const StyledHeader = styledComponents.div`
    margin: 30px auto 15px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid black;
`;

function Header(props){
    const navigate = useNavigate();
    return(
        <StyledHeader className="header">
            <Logo></Logo>
            <Search></Search>
            <TextButton
                value="로그인"
                onClick={() => {
                    navigate("/login");
                }}
            />
            <TextButton
                value="장바구니"
                onClick={() => {
                    navigate("/my-basket");
                }}
            />
            <TextButton
                value="마이페이지"
                onClick={() => {
                    navigate("/my-page");
                }}
            />
            <TextButton
                value="배송지 관리"
                onClick={() => {
                    navigate("/delivery-config");
                }}
            />
            <TextButton
                value="결제수단 관리"
                onClick={() => {
                    navigate("/payment-config");
                }}
            />
        </StyledHeader>
    );
}

export default Header;