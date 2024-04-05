import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLoginWrapper = styled.div``;

function SessionOffComponent(){

    const openPartnersPage = () => {
        window.open("http://localhost:3001", "_blank");
    }

    const navigate = useNavigate();
    const goLoginPage = () => {
        navigate("/login");
    }

    return (
        <StyledLoginWrapper>
            <Button className="mx-1" variant="primary" onClick={()=>{
                goLoginPage();
            }} >로그인</Button>
            <Button variant="outline-primary" onClick={openPartnersPage}>
                판매자 로그인
            </Button>
        </StyledLoginWrapper>
        
    );
}

export default SessionOffComponent;