import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function SessionOnComponent(){
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <Button variant="outline-primary" onClick={()=>{
                navigate("/my-page");
            }}>마이페이지</Button>
            <Button variant="outline-primary" onClick={()=>{
                navigate("/provide-manage");
            }}>상품관리</Button>
            <Button variant="outline-primary" onClick={()=>{
                logout();
            }}>로그아웃</Button>
        </>
    )
}

export default SessionOnComponent;