import React from "react";
import styled from "styled-components";

const ProductDetailWrapper = styled.div`
    margin-top: 5px;
    height: 500px;
`;

function DetailComponent(props){

    return(
        <ProductDetailWrapper>
            <h2>상품정보</h2>
            <div>
                아래 내용은 상품정보를 소개한 글 입니다.
                텍스트로 할지 이미지 한장으로 할지는 고민입니다.
            </div>
        </ProductDetailWrapper>
    );
}

export default DetailComponent;