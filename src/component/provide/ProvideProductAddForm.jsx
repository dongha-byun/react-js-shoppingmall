import React, {useState} from "react";
import styled from "styled-components";
import { Form, Row, Col, Button } from "react-bootstrap";
import { getCategories } from "../../api/sample/category";

const StyledHeader = styled.div`
    margin-bottom: 25px;
`;

function ProvideProductAddForm(props){
    const categories = getCategories();

    const [productAddForm, setProductAddForm] = useState({
        showImgFile: "",
        productName: "",
        detail:"",
        price: 0,
        categoryId: "",
        subCategoryId: "",
        count: 0
    });

    const onChange = (event) => {
        setProductAddForm({
            ...productAddForm,
            [event.target.id]: event.target.value
        });
    }

    const confirm = () =>{
        console.log(productAddForm);
        alert(123123);
    }

    return (
        <>
            <StyledHeader>
                <h4 className="display-inline">상품 등록</h4>
                <Button 
                    className="float-right" 
                    variant="outline-primary" 
                    onClick={confirm}>상품 등록</Button>
            </StyledHeader>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="categoryId">
                        <Form.Select defaultValue="Choose..." onChange={onChange}>
                            <option value="">카테고리</option>
                            {categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                );
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="subCategoryId">
                        <Form.Select defaultValue="Choose..." onChange={onChange}>
                            <option value={""}>세부 카테고리</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Label>상품명</Form.Label>
                    <Form.Control onChange={onChange}/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="price">
                        <Form.Label>가격</Form.Label>
                        <Form.Control type="number" onChange={onChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="count">
                        <Form.Label>수량</Form.Label>
                        <Form.Control type="number" onChange={onChange}/>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="showImgFile">
                    <Form.Label>대표 이미지</Form.Label>
                    <Form.Control
                        type="text"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="detail">
                    <Form.Label>상품 설명</Form.Label>
                    <Form.Control as="textarea" rows={10} onChange={onChange}/>
                </Form.Group>
            </Form>
        </>
    );
}

export default ProvideProductAddForm;