import React from "react";
import styledComponents from "styled-components";

const DeliveryViewWrapper = styledComponents.div``;

function DeliveryView(props){

    return (
        <DeliveryViewWrapper>
            <div>
                <span>우편번호</span> 
            </div>
            <div>
                <span>주소</span>
                <span>상세주소</span>
            </div>
            <div>
                <span>배달 시 요청사항</span>
                <p>배달시 요청드립니다.</p>
            </div>
        </DeliveryViewWrapper>
    );
}

export default DeliveryView;