import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import Search from "./Search";
import TextButton from "../ui/TextButton";
import Logo from "./Logo";
import LoginComponent from "../page/login/LoginComponent";
import CategoryMenuButton from "../category/CategoryMenuButton";

const StyledHeader = styledComponents.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid black;
`;

function Header(props){
    const navigate = useNavigate();
    return(
        <StyledHeader className="header">
            <CategoryMenuButton />
            <Logo></Logo>
            <Search></Search>
            <LoginComponent />
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
                value="판매관리"
                onClick={() => {
                    navigate("/provide");
                }}
            />
        </StyledHeader>
    );
}

export default Header;