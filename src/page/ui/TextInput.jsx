import React from "react";
import styledComponents from "styled-components";

const StyleTextInput = styledComponents.input`
    width: 100%;
    ${(props)=> props.maxWidth && `max-width: ${props.maxWidth};`};
    line-height: 30px;
    margin-bottom: 5px;
    ${(props)=> props.readOnly && `background-color: #eeeeee;`}
    ${(props)=> props.textAlign && `text-align: ${props.textAlign}`}
`;

function TextInput(props){
    const {type, placeholder, maxWidth, value, readOnly, onChange, name, id, textAlign} = props;
    return(
        <StyleTextInput 
            type={type || "text"} 
            maxWidth={maxWidth}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly||false}
            onChange = {onChange}
            name = {name}
            id = {id}
            textAlign = {textAlign}
        />
    );
}

export default TextInput;