import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { numberCommaFormat } from "../../../util/NumberFormat";
import { webThumbnailUrl } from "../../../api/axios";

const BuyingProductListWrapper = styledComponents.div`
    padding: 10px 0;
    border-bottom: 1px solid #cdcdcd;
`;

function BuyingProductList(props){
    const {items} = props;
    const productListHeader = ["","상품정보","판매자","수량","가격","배송비","합계"];

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
                    {items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td><img src={item.storedImgFileName ? webThumbnailUrl+item.storedImgFileName : '/images/pot.jpeg'} width="150px" height="100px"/></td>
                                <td>{item.productName}</td>
                                <td>{item.partnersName}</td>
                                <td>{numberCommaFormat(item.quantity)}</td>
                                <td>{numberCommaFormat(item.price)}원</td>
                                <td>{numberCommaFormat(0)}원</td>
                                <td>{numberCommaFormat(item.quantity * item.price + 0)}원</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </BuyingProductListWrapper>
    );
}

export default BuyingProductList;