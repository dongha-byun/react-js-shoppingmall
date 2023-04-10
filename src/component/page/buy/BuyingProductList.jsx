import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";

const BuyingProductListWrapper = styledComponents.div`
    padding-botton: 10px;
    border-bottom: 1px solid #cdcdcd;
`;
const BuyingTableTr = styledComponents.tr`
    padding-bottom: 10px;
`;

function BuyingProductList(props){
    const {orderProductParam} = props;
    const [total, setTotal] = useState(0);
    const productListHeader = ["","상품정보","판매자","수량","가격","배송비","합계"];

    useEffect(() => {
        setTotal(
            orderProductParam.price * orderProductParam.quantity + orderProductParam.deliveryFee
        );
    });

    return (
        <BuyingProductListWrapper>
            <table>
                <colgroup>
                    <col></col>
                    <col width={300}></col>
                    <col width={300}></col>
                    <col width={100}></col>
                    <col width={300}></col>
                    <col width={150}></col>
                    <col width={200}></col>
                </colgroup>
                <thead>
                    <tr>
                        {productListHeader.map( (header, index) => {
                            return (<th key={index}>{header}</th>);
                        } )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={orderProductParam.imgUrl} width="150px" height="100px"/></td>
                        <td>{orderProductParam.productName}</td>
                        <td>{orderProductParam.providerName}</td>
                        <td>{orderProductParam.quantity}</td>
                        <td>{orderProductParam.price}원</td>
                        <td>{orderProductParam.deliveryFee}원</td>
                        <td>{total}원</td>
                    </tr>
                </tbody>
            </table>
        </BuyingProductListWrapper>
    );
}

export default BuyingProductList;