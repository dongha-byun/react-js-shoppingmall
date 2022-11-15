import React from "react";
import styled from "styled-components";
import { Form, Table } from "react-bootstrap";
import BasketItemInfo from "./BasketItemInfo";

const StyledCheckTh = styled.th`
    text-align: center;
`;
const StyledCheckTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;
const StyledTd = styled.td`
    vertical-align: middle;
`;

function BasketList(props){
    const items=[0,1,2,3,4];

    return (
        <Table>
            <thead>
                <tr>
                    <StyledCheckTh>
                        <Form>
                            <Form.Group controlId={`checkAll`}>
                                <Form.Check/>
                            </Form.Group>
                        </Form>
                    </StyledCheckTh>
                    <th>전체선택</th>
                    <th>상품정보</th>
                    <th>상품금액</th>
                    <th>배송비</th>
                </tr>
            </thead>
            <tbody>
            {items.map((item, index) => {
                return (
                    <tr key={index}>
                        <StyledCheckTd>
                            <Form>
                                <Form.Group controlId={`check${index}`}>
                                    <Form.Check/>
                                </Form.Group>
                            </Form>
                        </StyledCheckTd>
                        <StyledTd>
                            <img src="/images/pot.jpeg" width="120px" alt="이미지" />
                        </StyledTd>
                        <StyledTd>
                            <BasketItemInfo />
                        </StyledTd>
                        <StyledTd>11,111원</StyledTd>
                        <StyledTd>무료</StyledTd>
                    </tr>
                ); 
            })}    
            </tbody>
        </Table>
    );
}

export default BasketList;