import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductQnaService from "../../../../api/component/product/productQna";

const ProductQuestionWrapper = styled.div`
    margin-top: 5px;
    border: 1px solid #dddddd;
    padding: 30px;
`;
const QnaHeader = styled.h4`
    display: inline;
`;
const QnaInfomationWrapper = styled.div`
    height: 200px;
    border-bottom: 2px solid black;
`;

const QnaInformationUl = styled.ul`
    margin-top: 30px;
`;
const QnaInformationLi = styled.li`
    list-style: normal;
    font-size: 0.9em;
`;

const QnaWrapper = styled.div`
    border-bottom: 1px solid #dddddd;
    padding: 20px 20px 0px 20px;
`;

const QnaTimeWrapper = styled.span`
    float: right;
`;

const QnaContent = styled.p`
    white-space: pre-wrap;    
    margin-top: 10px;
`;

const QnaAnswerContentDiv = styled.div`
    background-color: #eeeeee;
    margin-bottom: 20px;
    padding: 15px;
`;

const QnaAnswerContent = styled.p`
    white-space: pre-wrap;
`;

function QnaComponent(props){
    const { productId } = props;
    const navigate = useNavigate();
    const [qnaList, setQnaList] = useState([]);

    useEffect(()=>{
        ProductQnaService.getQnaList(productId).then(result => {
            setQnaList(result);
        });
    }, []);

    return (
        <ProductQuestionWrapper>
            <QnaInfomationWrapper>
                <div>
                    <QnaHeader>상품문의 유의사항</QnaHeader>
                    <Button className="float-right" variant="outline-primary"
                        onClick={()=>{
                            navigate("/product-question/"+productId);
                        }}
                    >문의하기</Button>
                </div>
                <QnaInformationUl>
                    <QnaInformationLi>비방/욕설 작성 시, 해당 문의글 삭제 및 쇼핑몰 이용이 제한될 수 있습니다.</QnaInformationLi>
                    <QnaInformationLi>상품 문의와 관련 없는 게시글은 관리자 임의로 삭제될 수 있습니다.</QnaInformationLi>
                    <QnaInformationLi>판매자는 게시글을 삭제할 수 없으니 참고바랍니다.</QnaInformationLi>
                </QnaInformationUl>
            </QnaInfomationWrapper>
            {qnaList.map((qna) => {
                return (
                    <QnaWrapper key={qna.id}>
                        <div>
                            <span>{qna.writerName}</span>
                            <QnaTimeWrapper>{qna.writeDate}</QnaTimeWrapper>
                            <QnaContent>
                                {qna.content}
                            </QnaContent>
                        </div>
                        {
                            qna.answer.id && 
                            <QnaAnswerContentDiv>
                                <span className="float-right">{qna.answer.answerDate}</span>
                                <QnaAnswerContent>{qna.answer.answer}</QnaAnswerContent>
                            </QnaAnswerContentDiv>
                        }
                    </QnaWrapper>
                );
            })}
        </ProductQuestionWrapper>
    );
}

export default QnaComponent;