import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import UserGrade from "./basic/UserGrade";

const UserConfigPageWrapper = styledComponents.div`
    padding: 20px;
`;

function UserConfigPage(){
    const navigate = useNavigate();
    const [key, setKey] = useState("basic");

    const onSelect = (eventKey) => {
        setKey(eventKey);
        navigate(eventKey);
    };
    
    useEffect(() => {
        onSelect(key);
    }, []);

    return (
        <UserConfigPageWrapper>
            <UserGrade />
            <Tabs
                activeKey={key}
                className="mb-3"
                onSelect={onSelect}
            >
                <Tab eventKey="basic" title="기본정보 관리" />
                <Tab eventKey="basket" title="장바구니" />
                <Tab eventKey="delivery" title="배송지 관리" />
                <Tab eventKey="payment" title="결제수단 관리" />
                <Tab eventKey="buy" title="구매내역" />
            </Tabs>
            <Outlet />
        </UserConfigPageWrapper>
    );
}

export default UserConfigPage;