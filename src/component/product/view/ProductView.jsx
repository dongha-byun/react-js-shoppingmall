import React, { useState } from "react";
import styledComponents from "styled-components";
import ProductPriceComponent from "./ProductPriceComponent";
import { Tabs, Tab } from "react-bootstrap";
import ReviewComponent from "./component/ReviewComponent";
import QnaComponent from "./component/QnaComponent";
import DetailComponent from "./component/DetailComponent";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../../../api/component/product/product";

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
    margin-bottom: 15px;
`;

const ProductImageWrapper = styledComponents.div``;

function ProductView(){
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [tabName, setTabName] = useState("DETAIL");
    const [tempReviews, setTempReviews] = useState([
        {
            "id": 1,
            "writeDate": "2023-05-03 11:05:11",
            "score": 4,
            "imgFileName": "",
            "content": "아주 좋습니다.\n많은분들께 강추 드립니다.!\n재구매 의사 100% 입니다.",
            "writerLoginId": "user1"
        }
    ]);

    useEffect(()=>{
        ProductService.getProduct(productId).then(data => {
            setProduct(data);
        })
    }, []);

    return(
        <ProductViewPageWrapper>
            <ProductViewWrapper>
                <ProductImageWrapper>
                    <img src="/images/pot.jpeg" alt="" />
                </ProductImageWrapper>
                <ProductPriceComponent product = {product} />
            </ProductViewWrapper>
            <Tabs
                id="controlled-tab-example"
                activeKey={tabName}
                onSelect={(k) => setTabName(k)}
                className="mb-3"
            >
                <Tab eventKey="DETAIL" title="상품정보">
                    <DetailComponent detail={product.detail}/>
                </Tab>
                <Tab eventKey="REVIEW" title="리뷰">
                    <ReviewComponent reviews={tempReviews} productName={product.name}/>
                </Tab>
                <Tab eventKey="QNA" title="상품문의">
                    <QnaComponent productId = {productId} />
                </Tab>
            </Tabs>
        </ProductViewPageWrapper>
    );
}

export default ProductView;