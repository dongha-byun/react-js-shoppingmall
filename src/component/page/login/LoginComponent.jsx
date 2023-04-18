import React, { useState } from "react";
import styled from "styled-components";
import Login from "./form/Login";
import { useNavigate } from "react-router-dom";
import CommonModal from "../../modal/CommonModal";
import { isValidToken, loginApi, partnersLoginApi } from "../../../api/component/login/login";
import SessionOffComponent from "./SessionOffComponent";
import SessionOnComponent from "./SessionOnComponent";
import PartnersLogin from "./form/PartnersLogin";

const StyledLoginComponentWrapper = styled.div`
`;

function LoginComponent(){
    const [isOpen, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    
    const [isPartnersOpen, setPartnersOpen] = useState(false);
    const handleClosePartners = () => setPartnersOpen(false);
    
    const navigate = useNavigate();
    const [loginValue, setLoginValue] = useState({
        loginId: "",
        password: ""
    });

    const login = () => {
        loginApi(loginValue);
    }

    const partnersLogin = () => {
        partnersLoginApi(loginValue);
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
                    setOpen={setOpen} isOpen={isOpen} setPartnersOpen={setPartnersOpen} isPartnersOpen={isPartnersOpen}
                />
            }
            {
                isValidToken() &&
                <SessionOnComponent />
            }
            <CommonModal show={isOpen} handleClose={handleClose} headerMessage={"로그인"}>
                <Login menuClick={menuClick} login={login} onChange={loginInputChange}/>
            </CommonModal>
            <CommonModal show={isPartnersOpen} handleClose={handleClosePartners} headerMessage={"판매자 로그인"}>
                <PartnersLogin menuClick={menuClick} login={partnersLogin} onChange={loginInputChange}/>
            </CommonModal>
        </StyledLoginComponentWrapper>
    );
}

export default LoginComponent;