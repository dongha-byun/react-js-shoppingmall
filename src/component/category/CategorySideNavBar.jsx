import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Search from '../header/Search';
import LoginComponent from '../page/login/LoginComponent';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../api/sample/category';

function CategorySideNavBar() {
    const categories = getCategories();
    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand={false} className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
                <Navbar.Brand href="/">덩하의 온라인 쇼핑몰</Navbar.Brand>
                <Search/>
                <LoginComponent />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-false"
                    aria-labelledby="offcanvasNavbarLabel-expand-false"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                            카테고리
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {categories.map((category) => {
                                return(
                                    <NavDropdown
                                        title={category.name}
                                        id="offcanvasNavbarDropdown-expand-false"
                                        key={category.id}
                                    >
                                        {category.subCategories && category.subCategories.map((sub) => {
                                            return (
                                                <NavDropdown.Item key={sub.id} href={`/product-list/${sub.id}`}>
                                                    {sub.name}
                                                </NavDropdown.Item>
                                            );    
                                        })}
                                    </NavDropdown>        
                                );
                            })}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default CategorySideNavBar;