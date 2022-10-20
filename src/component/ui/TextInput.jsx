import React from "react";
import styledComponents from "styled-components";

const StyleTextInput = styledComponents.input`
    width: 100%;
    max-width: 300px;
    line-height: 30px;
    font-size: 1.2em;
`;

function TextInput(props){
    return(
        <StyleTextInput type="text" />
    );
}

export default TextInput;