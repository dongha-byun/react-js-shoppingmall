import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Table } from "react-bootstrap";
import BasketItemInfo from "./BasketItemInfo";
import BasketService from "../../../../api/component/basket/basket";
import { webThumbnailUrl } from "../../../../api/axios";

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

function BasketList(){
    const [baskets, setBaskets] = useState([]);

    useEffect(() => {
        BasketService.getBaskets().then(result => {
            console.log(result);
            setBaskets(result);
        });
    }, []);

    const removeBasket = (basketId) => {
        BasketService.removeBasket(basketId).then(result => {
            setBaskets(
                baskets.filter(basket => basket.id != basketId)
            );
        });
    }

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
                    <th>수량</th>
                    <th>배송비</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {baskets.map((basket) => {
                return (
                    <tr key={basket.id}>
                        <StyledCheckTd>
                            <Form>
                                <Form.Group controlId={`check${basket.id}`}>
                                    <Form.Check/>
                                </Form.Group>
                            </Form>
                        </StyledCheckTd>
                        <StyledTd>
                            <img src={webThumbnailUrl+basket.storedImgFileName} width="120px" alt={"이미지 " + basket.storedImgFileName} />
                        </StyledTd>
                        <StyledTd>
                            <BasketItemInfo 
                                productName = {basket.productName}
                                partnerName = {basket.partnersName}
                            />
                        </StyledTd>
                        <StyledTd>{basket.price}원</StyledTd>
                        <StyledTd>{basket.quantity}</StyledTd>
                        <StyledTd>무료</StyledTd>
                        <StyledTd>
                            <Button variant="outline-danger" onClick={() => removeBasket(basket.id)}>삭제</Button>
                        </StyledTd>
                    </tr>
                ); 
            })}    
            </tbody>
        </Table>
    );
}

export default BasketList;