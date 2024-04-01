import React, { useState } from "react";
import styledComponents from "styled-components";
import BasketItemInfo from "../../page/user/basket/BasketItemInfo";
import ProductQuestionForm from "./ProductQuestionForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProductQnaService from "../../../js/product/productQna";

const ProductQuestionPageWrapper = styledComponents.div`
    margin-top: 20px;
`;

const StyledButtonWrapper = styledComponents.div`
    float: right;
    margin-top: 10px;
`;

function ProductQuestionPage(){
    const { productId } = useParams();
    const { state } = useLocation();
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
            <BasketItemInfo/>
            <ProductQuestionForm setContent={setContent}/>
            <StyledButtonWrapper>
                <Button className="mx-1" variant="secondary" onClick={()=>{
                    navigate(-1);
                }}>취소</Button>
                <Button variant="primary" onClick={createQna}>등록하기</Button>
            </StyledButtonWrapper>
        </ProductQuestionPageWrapper>
    );
}

export default ProductQuestionPage;