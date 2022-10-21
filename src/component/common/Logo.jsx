import React from "react";
import styledComponents from "styled-components";

const LogoWrapper = styledComponents.div`
    height: 150px;
    margin: 10px 0;
`;

function Logo(){
    return (
        <LogoWrapper></LogoWrapper>
    );
}

export default Logo;