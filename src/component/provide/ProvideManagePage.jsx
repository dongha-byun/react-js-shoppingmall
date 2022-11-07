import React, { useState } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import styled from "styled-components";
import { getCategories } from "../../api/sample/category";
import { Link, Outlet } from "react-router-dom";

const StyledManagePageWrapper = styled.div``;

function ProvideManagePage(){
    const categories = getCategories();

    return(
        <StyledManagePageWrapper>
            <h3>상품 관리</h3>
            <Tab.Container id="left-tabs-example">
                <Row className="mb-3">
                    <Col>
                        <Nav variant="pills" className="flex-row">
                            {categories.map((category) => {
                                return (
                                    <Nav.Item key={category.id}>
                                        {/* <Link className="nav-link" to={`${category.id}`}>{category.name}</Link> */}
                                        <Nav.Link eventKey={`${category.id}`} href={`/provide-manage/${category.id}`}>{category.name}</Nav.Link>
                                    </Nav.Item>
                                );
                            })}
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tab.Content>
                            <Outlet />
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </StyledManagePageWrapper>
    );
}

export default ProvideManagePage;