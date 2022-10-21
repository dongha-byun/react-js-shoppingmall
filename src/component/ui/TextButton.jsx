import React from "react";
import styledComponents from "styled-components";

const StyledTextButton = styledComponents.button`
    ${(props)=>
        props.width && `width: ${props.width};`
    };
    ${(props)=>
        props.height && `height: ${props.height};`
    };
`;

function TextButton(props){
    const {value, onClick, width, height} = props;

    return (
        <StyledTextButton 
            onClick = {onClick}
            width = {width}
            height = {height}
        >{value}</StyledTextButton>
    );
}

export default TextButton;