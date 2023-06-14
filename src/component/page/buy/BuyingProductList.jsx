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
    const productListHeader = ["","상품정보","가격","수량","상품 총 가격","회원할인","배송비","합계"];

    return (
        <BuyingProductListWrapper>
            <table>
                <colgroup>
                    <col></col>
                    <col width={300}></col>
                    <col width={200}></col>
                    <col width={100}></col>
                    <col width={200}></col>
                    <col width={150}></col>
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
                            <tr key={item.productId}>
                                <td><img src={item.storedImgFileName ? webThumbnailUrl+item.storedImgFileName : '/images/pot.jpeg'} width="100px"/></td>
                                <td> [{item.partnersName}] {item.productName}</td>
                                <td>{numberCommaFormat(item.price)}원</td>
                                <td>{numberCommaFormat(item.quantity)}</td>
                                <td>{numberCommaFormat(item.productPrice)}원</td>
                                <td>{numberCommaFormat(item.gradeDiscountAmount)}원</td>
                                <td>{numberCommaFormat(0)}원</td>
                                <td>{numberCommaFormat(item.productPrice - item.gradeDiscountAmount + 0)}원</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </BuyingProductListWrapper>
    );
}

export default BuyingProductList;