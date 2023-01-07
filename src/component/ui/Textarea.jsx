import React, { useState } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 100%;
`;

function Textarea(props){
    const {rows, placeholder, setContent} = props;

    return (
        <StyledTextarea rows={rows} 
            onChange={(event)=>{
                setContent(event.target.value);
            }}
            placeholder = {placeholder}
        />
    )

}

export default Textarea;