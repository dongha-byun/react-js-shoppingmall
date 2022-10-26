import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";

const LogoWrapper = styledComponents.div`
    width: 150px;
    margin: 10px auto;
`;

function Logo(){
    const navigate = useNavigate();
    return (
        <LogoWrapper>
            <img src="images/pot.jpeg" width="150px" height="80px" 
                onClick={()=>{
                    navigate("/home");
                }}
            />
        </LogoWrapper>
    );
}

export default Logo;