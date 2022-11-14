import React, { useState } from "react";
import styled from "styled-components";
import TextButton from "../../ui/TextButton";
import Login from "./form/Login";
import { useNavigate } from "react-router-dom";
import CommonModal from "../../modal/CommonModal";
import { Button } from "react-bootstrap";

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
            <Button variant="primary" onClick={()=>{
                setOpen(!isOpen);
            }} >로그인</Button>
            <Button variant="outline-primary" onClick={()=>{
                navigate("/my-page");
            }}>마이페이지</Button>
            <Button variant="outline-primary" onClick={()=>{
                navigate("/provide-manage");
            }}>상품관리</Button>
            <CommonModal show={isOpen} handleClose={handleClose} headerMessage={"로그인"}>
                <Login menuClick={menuClick} login={login} onChange={loginInputChange}/>
            </CommonModal>
        </StyledLoginComponentWrapper>
    );
}

export default LoginComponent;