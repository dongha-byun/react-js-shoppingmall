import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Table } from "react-bootstrap";
import BasketItemInfo from "./BasketItemInfo";
import BasketService from "../../../../js/basket/basket";
import { webThumbnailUrl } from "../../../../js/axios";
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
    const {addCartList, removeCartList} = props;
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        BasketService.getBaskets().then(result => {
            setCarts(result);
        });
    }, []);

    const onChange = (event) => {
        let selectedId = event.target.value;

        if(event.target.checked) {
            let selectedCart = carts.find(cart => cart.id == selectedId);
            addCartList(selectedCart);
        }else{
            removeCartList(selectedId);
        }
    }

    const removeCart = (cartId) => {
        BasketService.removeBasket(cartId).then(() => {
            setCarts(
                carts.filter(cart => cart.id != cartId)
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
                    <th>총 결제금액</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {carts.map((cart) => {
                return (
                    <tr key={cart.id}>
                        <StyledCheckTd>
                            <Form.Check type="checkbox" value={cart.id} name="cartCheck" 
                                id={`cartCheck_${cart.id}`}
                                onChange={onChange}
                            />
                        </StyledCheckTd>
                        <StyledTd>
                            <img src={cart.storedImgFileName ? webThumbnailUrl+cart.storedImgFileName  : '/images/pot.jpeg'} width="120px" alt={"이미지 " + cart.storedImgFileName} />
                        </StyledTd>
                        <StyledTd>
                            <BasketItemInfo 
                                productId = {cart.productId}
                                productName = {cart.productName}
                                partnerName = {cart.partnersName}
                            />
                        </StyledTd>
                        <StyledTd>{ numberCommaFormat(cart.price)}원</StyledTd>
                        <StyledTd>{ numberCommaFormat(cart.quantity)}</StyledTd>
                        <StyledTd>{ numberCommaFormat(cart.price * cart.quantity)}원</StyledTd>
                        <StyledTd>
                            <Button variant="outline-danger" onClick={() => removeCart(cart.id)}>삭제</Button>
                        </StyledTd>
                    </tr>
                ); 
            })}    
            </tbody>
        </Table>
    );
}

export default BasketList;