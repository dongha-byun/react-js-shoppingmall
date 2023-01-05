import React, { useState } from "react";
import styledComponents from "styled-components";
import BasketItemInfo from "../../page/user/basket/BasketItemInfo";
import ProductQuestionForm from "./ProductQuestionForm";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProductQnaService from "../../../api/component/product/productQna";

const ProductQuestionPageWrapper = styledComponents.div`
    margin-top: 20px;
`;

function ProductQuestionPage(){
    const { productId } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState();

    const createQna = () => {
        ProductQnaService.createQna(productId, content).then(response => {
            alert("문의가 작성되었습니다.");
            navigate("/product/"+productId);
        })
    }

    return (
        <ProductQuestionPageWrapper>
            <BasketItemInfo />
            <ProductQuestionForm setContent={setContent}/>
            <div class="float-right">
                <Button variant="secondary" onClick={()=>{
                    navigate(-1);
                }}>취소</Button>
                <Button variant="primary" onClick={()=>{
                    createQna();
                }}>등록하기</Button>
            </div>
        </ProductQuestionPageWrapper>
    );
}

export default ProductQuestionPage;