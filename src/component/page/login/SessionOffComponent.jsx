import React from "react";
import { Button } from "react-bootstrap";

function SessionOffComponent(props){
    const {isOpen, setOpen} = props;
    return (
        <Button variant="primary" onClick={()=>{
            setOpen(!isOpen);
        }} >로그인</Button>
    );
}

export default SessionOffComponent;