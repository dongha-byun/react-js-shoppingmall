import React, { useState } from "react";
import styled from "styled-components";
import TextButton from "../../ui/TextButton";
import Modal from "../../modal/Modal";
import Login from "./form/Login";
import { useNavigate } from "react-router-dom";

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
            [event.target.name]: event.target.value
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
                value="판매관리"
                onClick={() => {
                    navigate("/provide");
                }}
            />
            <Modal open={isOpen} close={handleClose} header="로그인">
                <Login menuClick={menuClick} login={login} onChange={loginInputChange}/>
            </Modal>
        </StyledLoginComponentWrapper>
    );
}

export default LoginComponent;