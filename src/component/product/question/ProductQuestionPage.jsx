import React from "react";
import styledComponents from "styled-components";
import TextButton from "../../ui/TextButton";
import BasketItemInfo from "../../page/user/basket/BasketItemInfo";
import ProductQuestionForm from "./ProductQuestionForm";
import { useNavigate } from "react-router-dom";

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
                <TextButton 
                    value="취소"
                    onClick={()=>{
                        navigate(-1);
                    }}
                />
                <TextButton 
                    value="등록하기"
                    onClick={()=>{
                        alert("등록하기");
                    }}
                />
            </div>
        </ProductQuestionPageWrapper>
    );
}

export default ProductQuestionPage;