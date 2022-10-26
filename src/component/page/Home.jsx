import React from "react";
import styledComponents from "styled-components";
import ProductList from "../product/ProductList";
import Header from "./Header";

const HomeWrapper = styledComponents.div`
`;

function Home(props){

    return(
        <HomeWrapper>
            <Header></Header>
            <ProductList sectionName="추천 상품!" />
            <ProductList sectionName="최근 본 상품" />
            <ProductList />
        </HomeWrapper>
    );
}
export default Home;