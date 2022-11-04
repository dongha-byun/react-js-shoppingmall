import React from "react";
import styled from "styled-components";

const ProductReviewComponentWrapper = styled.div`
    padding: 0 20px;
`;

const ProductReviewWrapper = styled.div`
    border-bottom: 1px solid #dddddd;
    padding: 10px;
`;

const ReviewWriteInfoWrapper = styled.div`
    margin-bottom: 5px;
`;
const ReviewWriteDateWrapper = styled.span`
    font-size: 0.8em;
    color: gray;
    margin-left: 10px;
`;
const ProductNameWrapper = styled.p`
    font-size: 0.9em;
    color: gray;
`;
const ReviewImageWrapper = styled.div`
    margin: 10px 0;
`;
const ReviewContentWrapper = styled.p`

`;

const ReviewBottomWrapper = styled.div``;

function ReviewComponent(props){
    const data = [1,2,3,4,5];
    return(
        <ProductReviewComponentWrapper>
            {data.map((index) => {
                return (
                    <ProductReviewWrapper key={index}>
                        <ReviewWriteInfoWrapper>
                            <div>변**</div>
                            <div>평점 : 5<ReviewWriteDateWrapper>2022-11-02</ReviewWriteDateWrapper></div>
                        </ReviewWriteInfoWrapper>
                        <ProductNameWrapper>
                            냄비냄비 냄비파이아! 완전좋아 레알좋아
                        </ProductNameWrapper>
                        <ReviewImageWrapper>
                            <img src="/images/pot.jpeg" width={100} />
                        </ReviewImageWrapper>
                        <ReviewContentWrapper>
                            냄비가 너무 튼튼하고 열전도율도 좋고 라면이든 냉면이든 국수든 찌개든 탕이든 끓이기만하면 JMT에요. 세상에 마상에
                        </ReviewContentWrapper>
                        <ReviewBottomWrapper>
                            
                        </ReviewBottomWrapper>
                    </ProductReviewWrapper>
                );
            })}
        </ProductReviewComponentWrapper>
    );
        
}

export default ReviewComponent;