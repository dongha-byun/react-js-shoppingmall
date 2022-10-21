import React from "react";
import styledComponents from "styled-components";

const StyleTextInput = styledComponents.input`
    width: 100%;
    ${(props)=> props.maxWidth && `max-width: ${props.maxWidth};`};
    line-height: 30px;
    margin-bottom: 5px;
`;

function TextInput(props){
    const {type, placeholder, maxWidth} = props;
    return(
        <StyleTextInput 
            type={type || "text"} 
            width={maxWidth}
            placeholder={placeholder}
        />
    );
}

export default TextInput;