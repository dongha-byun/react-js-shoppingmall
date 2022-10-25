import React, { useState } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 100%;
`;

function Textarea(props){
    const {rows, placeholder} = props;
    const {content, setContent} = useState();

    const changeContent = (content) => {
        setContent(content);
    }

    return (
        <StyledTextarea rows={rows} 
            onChange={(event)=>{
                changeContent(event.target.value);
            }}
            placeholder = {placeholder}
        />
    )

}

export default Textarea;