import React from "react";
import styledComponents from "styled-components";
import Textarea from "../../ui/Textarea";
import TextInput from "../../ui/TextInput";

const ProductQuestionFormWrapper = styledComponents.div`
    margin-top: 15px;
`;

function ProductQuestionForm(props){

    return (
        <ProductQuestionFormWrapper>
            <TextInput placeholder="제목을 입력하세요." />
            <Textarea rows={10} placeholder="내용을 입력하세요."/>
        </ProductQuestionFormWrapper>
    );
}

export default ProductQuestionForm;