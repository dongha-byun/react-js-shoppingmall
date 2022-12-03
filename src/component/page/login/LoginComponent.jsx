import React, { useState } from "react";
import styled from "styled-components";
import Login from "./form/Login";
import { useNavigate } from "react-router-dom";
import CommonModal from "../../modal/CommonModal";
import { isValidToken, loginApi } from "../../../api/component/login/login";
import SessionOffComponent from "./SessionOffComponent";
import SessionOnComponent from "./SessionOnComponent";

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
        loginApi(loginValue);
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
            {
                !isValidToken() &&
                <SessionOffComponent
                    setOpen={setOpen} isOpen={isOpen}
                />
            }
            {
                isValidToken() &&
                <SessionOnComponent />
            }
            <CommonModal show={isOpen} handleClose={handleClose} headerMessage={"로그인"}>
                <Login menuClick={menuClick} login={login} onChange={loginInputChange}/>
            </CommonModal>
        </StyledLoginComponentWrapper>
    );
}

export default LoginComponent;