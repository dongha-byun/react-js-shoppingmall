import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { logout } from "../../../api/component/login/logout";

function SessionOnComponent(){
    const navigate = useNavigate();

    return (
        <>
            <Button variant="outline-primary" onClick={()=>{
                navigate("/my-page");
            }}>마이페이지</Button>
            <Button variant="outline-primary" onClick={()=>{
                navigate("/admin");
            }}>관리자</Button>
            <Button variant="outline-primary" onClick={()=>{
                logout();
            }}>로그아웃</Button>
        </>
    )
}

export default SessionOnComponent;