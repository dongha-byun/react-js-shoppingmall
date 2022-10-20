import React from "react";
import styledComponents from "styled-components";

const StyledButton = styledComponents.button`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
    ${ (props) =>
        props.imgSrc && `background-image: url(${props.imgSrc}); background-repeat: no-repeat; background-size: ${props.width}; border: none;`
    }
    cursor: pointer;
    vertical-align: bottom;
`;

function Button(props){
    const {imgSrc, onClick, width, height} = props;
    return(
        <StyledButton 
            type="button"
            onClick = {onClick} 
            imgSrc={imgSrc}
            width={width}
            height={height}
        />
    );
}

export default Button;