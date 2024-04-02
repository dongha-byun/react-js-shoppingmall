import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledHeader = styled.div`
    margin-bottom: 25px;
`;

function Header(props){
    const {title, onClick, buttonMessage} = props;
    return(
        <StyledHeader>
            <h4 className="display-inline">{title}</h4>
            { onClick && buttonMessage &&  
                <Button 
                    className="float-right" 
                    variant="outline-primary" 
                    onClick={onClick}>{buttonMessage}</Button>
            }
        </StyledHeader>
    );
}

export default Header;