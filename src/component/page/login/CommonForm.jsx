import React from "react";
import styled from "styled-components";
import TextInput from "../../ui/TextInput";
import TextButton from "../../ui/TextButton";

const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin : 0 auto;
`;

function CommonForm(props){
    const {format, handleViewType} = props;

    return (
        <FormWrapper>
            <div>
                {format.data.map((input, index) => {
                    return (
                        <TextInput
                            key={index} type={input.type} text={input.text}
                        />
                    );
                })}
            </div>
            <TextButton
                value={format.text}
            />

            <p className="">
                {format.type == 'signUp' ? '이미 가입하셨나요?' : '아직 계정이 없으신가요?'}
                <span onClick={(e) => {
                    handleViewType(e)
                }}>
                    {format.type === 'signUp' ? '로그인' : '회원가입'}
                </span>
            </p>
        </FormWrapper>
    );

}

export default CommonForm;