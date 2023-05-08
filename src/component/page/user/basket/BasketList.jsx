import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Table } from "react-bootstrap";
import BasketItemInfo from "./BasketItemInfo";
import BasketService from "../../../../api/component/basket/basket";
import { webThumbnailUrl } from "../../../../api/axios";
import { numberCommaFormat } from "../../../../util/NumberFormat";

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
    const {setSelectedCart} = props;
    const [baskets, setBaskets] = useState([]);

    useEffect(() => {
        BasketService.getBaskets().then(result => {
            setBaskets(result);
        });
    }, []);

    const onChange = (event) => {
        let selectedId = event.target.value;
        let selectedBasket = baskets.find(basket => basket.id == selectedId);
        setSelectedCart(selectedBasket);
    }

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
                    <th></th>
                    <th>상품이미지</th>
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
                            <Form.Check type="radio" value={basket.id} name="basketCheck" id={`basketCheck_${basket.id}`}
                                onChange={onChange}
                            />
                        </StyledCheckTd>
                        <StyledTd>
                            <img src={webThumbnailUrl+basket.storedImgFileName} width="120px" alt={"이미지 " + basket.storedImgFileName} />
                        </StyledTd>
                        <StyledTd>
                            <BasketItemInfo 
                                productId = {basket.productId}
                                productName = {basket.productName}
                                partnerName = {basket.partnersName}
                            />
                        </StyledTd>
                        <StyledTd>{ numberCommaFormat(basket.price)}원</StyledTd>
                        <StyledTd>{ numberCommaFormat(basket.quantity)}</StyledTd>
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