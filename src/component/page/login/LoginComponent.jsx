import React, { useState } from "react";
import styled from "styled-components";
import TextButton from "../../ui/TextButton";
import Login from "./form/Login";
import { useNavigate } from "react-router-dom";
import CommonModal from "../../modal/CommonModal";

const StyledLoginComponentWrapper = styled.div`

`;

function LoginComponent(){
    const [isOpen, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const [loginValue, setLoginValue] = useState({
        loginId: "",
        password: ""
    });

    const login = () => {
        console.log(loginValue);
    }

    const loginInputChange = (event) => {
        setLoginValue({
            ...loginValue,
            [event.target.id]: event.target.value
        });
    }

    const menuClick = (menuURI) => {
        navigate(menuURI);
        handleClose();
    }

    return(
        <StyledLoginComponentWrapper>
            <TextButton
                value="로그인"
                onClick={() => {
                    setOpen(!isOpen);
                }}
            />
            <TextButton
                value="마이페이지"
                onClick={() => {
                    navigate("/my-page");
                }}
            />
            <TextButton
                value="상품관리"
                onClick={() => {
                    navigate("/provide-manage");
                }}
            />
            <CommonModal show={isOpen} handleClose={handleClose} headerMessage={"로그인"}>
                <Login menuClick={menuClick} login={login} onChange={loginInputChange}/>
            </CommonModal>
        </StyledLoginComponentWrapper>
    );
}

export default LoginComponent;