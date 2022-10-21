import React, { useState } from "react";
import styledComponents from "styled-components";
import Header from "../../page/Header";

const ProductViewPageWrapper = styledComponents.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
`;

const ProductViewWrapper = styledComponents.div`
    padding: 10px;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const ProductImageWrapper = styledComponents.div``;

const ProductPriceWrapper = styledComponents.div`
    margin-left: 10px;
`;

function ProductView(props){
    const [price, setPrice] = useState(11111);

    return(
        <ProductViewPageWrapper>
            <Header></Header>
            <ProductViewWrapper>
                <ProductImageWrapper>
                    <img src="http://localhost:8080/image/pot.jpeg" alt="" />
                </ProductImageWrapper>
                <ProductPriceWrapper>
                    <h2>테스트 상품명</h2>
                    <div>
                        <span>11111</span>
                        <input type="number" min="1" onChange={(e)=>{
                            setPrice(e.target.value * 11111);
                        }}/>
                    </div>
                    <div>
                        <span>{price}</span>
                    </div>
                </ProductPriceWrapper>
            </ProductViewWrapper>
        </ProductViewPageWrapper>
    );
}

export default ProductView;