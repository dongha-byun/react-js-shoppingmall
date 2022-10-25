import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import Header from "../../page/Header";
import TextButton from "../../ui/TextButton";

const ProductViewPageWrapper = styledComponents.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
`;

const ProductViewWrapper = styledComponents.div`
    padding: 10px;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const ProductImageWrapper = styledComponents.div``;

const ProductPriceWrapper = styledComponents.div`
    margin-left: 10px;
`;

const ProductDetailWrapper = styledComponents.div`
    margin-top: 5px;
    border-top: 1px solid blue;
    border-bottom: 1px solid blue;
    height: 500px;
`;
const ProductReviewWrapper = styledComponents.div`
    margin-top: 5px;    
    border-top: 1px solid green;
    border-bottom: 1px solid green;
    height: 500px;
`;
const ProductQuestionWrapper = styledComponents.div`
    margin-top: 5px;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    height: 500px;
`;

function ProductView(props){
    const [price, setPrice] = useState(11111);
    const navigate = useNavigate();

    const buyNow = () =>{
        alert("바로구매");
    }

    const intoBasket = () =>{
        alert("장바구니");
    }

    return(
        <ProductViewPageWrapper>
            <Header></Header>
            <ProductViewWrapper>
                <ProductImageWrapper>
                    <img src="http://localhost:8080/image/pot.jpeg" alt="" />
                </ProductImageWrapper>
                <ProductPriceWrapper>
                    <h2>테스트 상품명</h2>
                    <div>
                        <span>11111</span>
                        <input type="number" min="1" onChange={(e)=>{
                            setPrice(e.target.value * 11111);
                        }}/>
                    </div>
                    <div>
                        <span>{price}</span>
                    </div>
                    <div>
                        <TextButton 
                            value="장바구니 추가"
                            onClick={()=>{
                                intoBasket();
                            }}
                        />
                        <TextButton 
                            value="바로구매"
                            onClick={()=>{
                                buyNow();
                            }}
                        />
                    </div>
                </ProductPriceWrapper>
            </ProductViewWrapper>
            <ProductDetailWrapper>
                <h2>상품정보</h2>
                <div>
                    아래 내용은 상품정보를 소개한 글 입니다.
                    텍스트로 할지 이미지 한장으로 할지는 고민입니다.
                </div>
            </ProductDetailWrapper>
            <ProductReviewWrapper>
                <h2>리뷰</h2>
                <div>
                    <div>
                        <div>리뷰이미지영역 / 있으면 보여주고 없으면 말고!</div>
                        <div>리뷰제목/작성자/작성자가 측정한 평점</div>
                    </div>
                    <div>
                        리뷰내용
                    </div>
                </div>
            </ProductReviewWrapper>
            <ProductQuestionWrapper>
                <h2>문의사항</h2>
                <div>
                    <TextButton value="글쓰기" 
                        onClick={()=>{
                            navigate("/product-question");
                        }}/>
                </div>
                <div>
                    <div>문의사항 등록글</div>
                    <div>==&gt; 문의사항 답변</div>
                </div>
            </ProductQuestionWrapper>
        </ProductViewPageWrapper>
    );
}

export default ProductView;