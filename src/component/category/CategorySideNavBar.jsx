import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Search from '../header/Search';
import LoginComponent from '../page/login/LoginComponent';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryService from '../../api/component/category/category';
import { useNavigate } from 'react-router-dom';

function CategorySideNavBar() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        CategoryService.getCategories().then(data => {
            setCategories(data);
        })
    }, []);

    const searchProducts = (categoryId, subCategoryId) => {
        navigate("/products/"+categoryId+"/"+subCategoryId);
    }

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
                        <Nav className="justify-content-end flex-grow-1 pe-3" onSelect={searchProducts}>
                            {categories.map((category) => {
                                return(
                                    <NavDropdown
                                        title={category.name}
                                        id="offcanvasNavbarDropdown-expand-false"
                                        key={category.id}
                                    >
                                        {category.subCategories && category.subCategories.map((sub) => {
                                            return (
                                                <NavDropdown.Item key={sub.id} onClick={() => {
                                                    searchProducts(category.id, sub.id);
                                                }}>
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