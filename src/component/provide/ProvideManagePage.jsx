import React, { useState, useEffect } from "react";
import { Tabs,Tab } from "react-bootstrap";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

const StyledManagePageWrapper = styled.div`
    padding: 20px;
`;

function ProvideManagePage(){
    const [key, setKey] = useState("product");
    const navigate = useNavigate();

    useEffect(() => {
        onSelect(key);
    }, []);

    const onSelect = (eventKey) => {
        setKey(eventKey);
        navigate(eventKey);
    }

    return(
        <StyledManagePageWrapper>
            <Tabs
                activeKey={key}
                className="mb-3"
                onSelect={onSelect}
            >
                <Tab eventKey="product" title="상품 관리" />
                <Tab eventKey="income" title="매출 관리" />
                <Tab eventKey="order" title="주문/배송" />
                <Tab eventKey="qna" title="상품문의" />
            </Tabs>
            <Outlet />
        </StyledManagePageWrapper>
    );
}

export default ProvideManagePage;