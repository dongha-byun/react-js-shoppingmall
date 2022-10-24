import React from "react";
import styledComponents from "styled-components";

const BuyingProductListWrapper = styledComponents.div``;

function BuyingProductList(props){

    const productListHeader = ["","상품명","판매자","수량","가격","배송비"];
    const productList = [0,1,2,3];

    return (
        <BuyingProductListWrapper>
            <table>
                <thead>
                <tr>
                    {productListHeader.map( (header, index) => {
                       return (<th key={index}>{header}</th>) ;
                    } )}
                </tr>
                </thead>
                {productList.map( (product, index) => {
                    return (
                        <tr key={index}>
                            <td><img src="/images/pot.jpeg" width="150px" height="100px"/></td>
                            <td>냄비를 빙자한 아주 멋진 프라이팬의 친구, 냄비~!</td>
                            <td>냄비제작사(주)</td>
                            <td>4개</td>
                            <td>44,444원</td>
                            <td>2500원</td>
                        </tr>
                    );
                })}
            </table>
        </BuyingProductListWrapper>
    );
}

export default BuyingProductList;