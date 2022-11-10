import React, { useState } from "react";
import styledComponents from "styled-components";
import ProductPriceComponent from "./ProductPriceComponent";
import { Tabs, Tab } from "react-bootstrap";
import ReviewComponent from "./component/ReviewComponent";
import QnaComponent from "./component/QnaComponent";
import DetailComponent from "./component/DetailComponent";
import { viewItem } from "../../../api/component/item/itemApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    const [item, setItem] = useState();
    const [tabName, setTabName] = useState("DETAIL");

    useEffect(()=>{
        console.log(productId);
        const fetchItem = async () => {
            const result = viewItem(productId);
            setItem(result);
        } 
        
        fetchItem();
    }, []);

    return(
        <ProductViewPageWrapper>
            <ProductViewWrapper>
                <ProductImageWrapper>
                    <img src="/images/pot.jpeg" alt="" />
                </ProductImageWrapper>
                <ProductPriceComponent item={item} />
            </ProductViewWrapper>
            <Tabs
                id="controlled-tab-example"
                activeKey={tabName}
                onSelect={(k) => setTabName(k)}
                className="mb-3"
            >
                <Tab eventKey="DETAIL" title="상품정보">
                    <DetailComponent />
                </Tab>
                <Tab eventKey="REVIEW" title="리뷰">
                    <ReviewComponent />
                </Tab>
                <Tab eventKey="QNA" title="상품문의">
                    <QnaComponent />
                </Tab>
            </Tabs>
        </ProductViewPageWrapper>
    );
}

export default ProductView;