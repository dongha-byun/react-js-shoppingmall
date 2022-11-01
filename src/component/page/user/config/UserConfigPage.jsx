import React from "react";
import styledComponents from "styled-components";
import UserBasicConfig from "./UserBasicConfig";
import { useState } from "react";
import DeliveryConfig from "./DeliveryConfig";
import PaymentConfig from "./PaymentConfig";

const StyledTabUl = styledComponents.ul`
    width: 100%;
`;

const StyledTabLi = styledComponents.li`
    width: 150px;
    text-align: center;
    border: 1px solid black;
    margin: 0 10px;
`;
const UserConfigPageWrapper = styledComponents.div`
    padding: 20px;
`;

function UserConfigPage(){
    const [tabName, setTabName] = useState('DELIVERY');
    const changeTab = (tabName) => {
        setTabName(tabName);
    }
    return (
        <UserConfigPageWrapper>
            <div>
                <StyledTabUl className="display-row">
                    <StyledTabLi onClick={() => changeTab('BASIC')}>기본정보 관리</StyledTabLi>
                    <StyledTabLi onClick={() => changeTab('DELIVERY')}>배송지 관리</StyledTabLi>
                    <StyledTabLi onClick={() => changeTab('PAYMENT')}>결제수단 관리</StyledTabLi>
                </StyledTabUl>
            </div>
            <div className={(tabName === "BASIC") ? `` : `display-none`}>
                <UserBasicConfig />
            </div>
            <div className={(tabName === "DELIVERY") ? `` : `display-none`}>
                <DeliveryConfig />
            </div>
            <div className={(tabName === "PAYMENT") ? `` : `display-none`}>
                <PaymentConfig />
            </div>
        </UserConfigPageWrapper>
    );
}

export default UserConfigPage;