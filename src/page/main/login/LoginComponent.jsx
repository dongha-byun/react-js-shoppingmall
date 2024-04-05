import React, { useState } from "react";
import styled from "styled-components";
import { isValidToken } from "../../../js/login/login";
import SessionOffComponent from "./SessionOffComponent";
import SessionOnComponent from "./SessionOnComponent";

const StyledLoginComponentWrapper = styled.div`
`;

function LoginComponent(){
    return(
        <StyledLoginComponentWrapper>
            {
                !isValidToken() &&
                <SessionOffComponent />
            }
            {
                isValidToken() &&
                <SessionOnComponent />
            }
        </StyledLoginComponentWrapper>
    );
}

export default LoginComponent;