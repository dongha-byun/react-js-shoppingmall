import React from "react";
import styled from "styled-components";

const ProductDetailWrapper = styled.div`
    margin-top: 5px;
    height: 500px;
`;

const DetailWrapper = styled.div`
    padding: 20px;
    white-space: pre-wrap;
`;

function DetailComponent(props){
    const { detail } = props;

    return(
        <ProductDetailWrapper>
            <DetailWrapper >
                <div dangerouslySetInnerHTML={{__html: detail}}></div>
            </DetailWrapper>
        </ProductDetailWrapper>
    );
}

export default DetailComponent;