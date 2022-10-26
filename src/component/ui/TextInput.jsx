import React from "react";
import styledComponents from "styled-components";

const StyleTextInput = styledComponents.input`
    width: 100%;
    ${(props)=> props.maxWidth && `max-width: ${props.maxWidth};`};
    line-height: 30px;
    margin-bottom: 5px;
    ${(props)=> props.readOnly && `background-color: #eeeeee;`}
`;

function TextInput(props){
    const {type, placeholder, maxWidth, value, readOnly, onChange} = props;
    return(
        <StyleTextInput 
            type={type || "text"} 
            maxWidth={maxWidth}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly||false}
            onChange = {onChange}
        />
    );
}

export default TextInput;