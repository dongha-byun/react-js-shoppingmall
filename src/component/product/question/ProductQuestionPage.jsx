import React from "react";
import styledComponents from "styled-components";
import BasketItemInfo from "../../page/user/basket/BasketItemInfo";
import ProductQuestionForm from "./ProductQuestionForm";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductQuestionPageWrapper = styledComponents.div`
    margin-top: 20px;
`;

function ProductQuestionPage(props){
    const navigate = useNavigate();

    return (
        <ProductQuestionPageWrapper>
            <BasketItemInfo />
            <ProductQuestionForm/>
            <div class="float-right">
                <Button variant="secondary" onClick={()=>{
                    navigate(-1);
                }}>취소</Button>
                <Button variant="primary" onClick={()=>{
                    alert("등록하기");
                }}>등록하기</Button>
            </div>
        </ProductQuestionPageWrapper>
    );
}

export default ProductQuestionPage;