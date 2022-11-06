import React from "react";
import styledComponents from "styled-components";
import UserBasicConfig from "./UserBasicConfig";
import { useState } from "react";
import DeliveryConfig from "./DeliveryConfig";
import PaymentConfig from "./PaymentConfig";
import { Tabs, Tab } from "react-bootstrap";

const UserConfigPageWrapper = styledComponents.div`
    padding: 20px;
`;

function UserConfigPage(){
    const [tabName, setTabName] = useState('DELIVERY');
    return (
        <UserConfigPageWrapper>
            <Tabs
                id="controlled-tab-example"
                activeKey={tabName}
                onSelect={(k) => setTabName(k)}
                className="mb-3"
            >
                <Tab eventKey="BASIC" title="기본정보 관리">
                    <UserBasicConfig />
                </Tab>
                <Tab eventKey="DELIVERY" title="배송지 관리">
                    <DeliveryConfig />
                </Tab>
                <Tab eventKey="PAYMENT" title="결제수단 관리">
                    <PaymentConfig />
                </Tab>
            </Tabs>
        </UserConfigPageWrapper>
    );
}

export default UserConfigPage;