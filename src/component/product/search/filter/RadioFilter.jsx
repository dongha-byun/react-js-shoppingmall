import React from "react";
import styled from "styled-components";

const StyledRadioWrapper = styled.div`
    margin-left: 30px;
`;


function RadioFilter(props){
    const {filter, name, onChange} = props;

    return (
        <StyledRadioWrapper>
            <label for={filter.id}>{filter.name}</label>
            <input type="radio" id={filter.id} name={name} onChange={onChange} value={filter.value}/>
        </StyledRadioWrapper>
    );
}

export default RadioFilter;