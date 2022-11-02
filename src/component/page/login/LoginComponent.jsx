import React, { useState } from "react";
import styled from "styled-components";
import TextButton from "../../ui/TextButton";
import LoginModal from "./LoginModal";
import "../login/css/LoginModal.css";

const StyledLoginComponentWrapper = styled.div`

`;

function LoginComponent(){
    const [isOpen, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return(
        <StyledLoginComponentWrapper>
            <TextButton
                value="로그인"
                onClick={() => {
                    setOpen(!isOpen);
                }}
            />
            <LoginModal isOpen={isOpen} handleClose={handleClose}/>
        </StyledLoginComponentWrapper>
    );
}

export default LoginComponent;