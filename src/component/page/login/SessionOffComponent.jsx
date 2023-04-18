import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledLoginWrapper = styled.div`

`;

function SessionOffComponent(props){
    const {isOpen, setOpen, isPartnersOpen, setPartnersOpen} = props;
    return (
        <StyledLoginWrapper>
            <Button className="mx-1" variant="primary" onClick={()=>{
                setOpen(!isOpen);
            }} >로그인</Button>
            <Button variant="outline-primary" onClick={()=>{
                setPartnersOpen(!isPartnersOpen);
            }} >판매자 로그인</Button>
        </StyledLoginWrapper>
        
    );
}

export default SessionOffComponent;