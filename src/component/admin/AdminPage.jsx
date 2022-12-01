import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, Tab } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";

const StyledAdminPageWrapper = styled.div`
    padding: 20px;
`;

function AdminPage(){

    const navigate = useNavigate();
    const [key, setKey] = useState("category");
    const onSelect = (eventKey) => {
        setKey(eventKey);
        navigate(eventKey);
    }
    
    useEffect(() => {
        onSelect(key);
    }, []);

    return (
        <StyledAdminPageWrapper>
            <Tabs
                activeKey={key}
                className="mb-3"
                onSelect={onSelect}
            >
                <Tab eventKey="category" title="카테고리 관리" />
                <Tab eventKey="cs" title="1대1 문의내역" />
            </Tabs>
            <Outlet />
        </StyledAdminPageWrapper>
    );
}

export default AdminPage;