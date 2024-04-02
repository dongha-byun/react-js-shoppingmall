import React from "react";
import styledComponents from "styled-components";
import Textarea from "../../../ui/Textarea";
import TextInput from "../../../ui/TextInput";
import { Form } from "react-bootstrap";

const ProductQuestionFormWrapper = styledComponents.div`
    margin-top: 15px;
`;

function ProductQuestionForm(props){
    const { setContent } = props;

    const onChangeContent = (event) => {
        setContent(event.target.value);
    }

    return (
        <ProductQuestionFormWrapper>
            <Form>
                <Form.Group>
                    <Form.Label>문의 내용</Form.Label>
                    <Form.Control as="textarea" rows={10} onChange={onChangeContent}/>
                </Form.Group>
            </Form>
        </ProductQuestionFormWrapper>
    );
}

export default ProductQuestionForm;