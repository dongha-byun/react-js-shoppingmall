import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import Search from "../search/Search";
import TextButton from "../ui/TextButton";
import CategoryMenuButton from "../category/CategoryMenuButton";

const StyledHeader = styledComponents.div`
    width: calc(100% - 20px);
    margin: 30px auto 15px auto;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

function Header(props){
    const navigate = useNavigate();
    return(
        <StyledHeader>
            <CategoryMenuButton/>
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
        </StyledHeader>
    );
}

export default Header;