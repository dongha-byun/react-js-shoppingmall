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
    white-space: pre-wrap;
`;

const ReviewBottomWrapper = styled.div``;

function ReviewComponent(props){
    const {reviews, productName} = props;
    const data = [1,2,3,4,5];

    return(
        <ProductReviewComponentWrapper>
            {reviews.map((review) => {
                return (
                    <ProductReviewWrapper key={review.id}>
                        <ReviewWriteInfoWrapper>
                            <div>{review.writerLoginId}</div>
                            <div>평점 : {review.score}<ReviewWriteDateWrapper>{review.writeName}</ReviewWriteDateWrapper></div>
                        </ReviewWriteInfoWrapper>
                        <ProductNameWrapper>
                            {productName}
                        </ProductNameWrapper>
                        <ReviewImageWrapper>
                            <img src="/images/pot.jpeg" width={100} />
                        </ReviewImageWrapper>
                        <ReviewContentWrapper>
                            {review.content}
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