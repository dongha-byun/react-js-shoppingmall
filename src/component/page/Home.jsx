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
            <ProductList></ProductList>
            <ProductList></ProductList>
            <ProductList></ProductList>
            <ProductList></ProductList>
        </HomeWrapper>
    );
}
export default Home;