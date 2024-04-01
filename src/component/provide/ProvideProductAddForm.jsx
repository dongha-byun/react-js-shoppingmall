import React, {useState} from "react";
import styled from "styled-components";
import { Form, Row, Col } from "react-bootstrap";
import ProviderHeader from "./component/ProviderHeader";
import CategorySelect from "./select/CategorySelect";
import ProductService, { saveProduct } from "../../js/product/product";

const StyledFormWrapper = styled.div`
    padding: 20px;
`;

function ProvideProductAddForm(props){
    const [categoryId, setCategoryId] = useState();
    const [subCategoryId, setSubCategoryId] = useState();
    const [productAddForm, setProductAddForm] = useState({
        showImgFile: "",
        productName: "",
        detail:"",
        price: 0,
        count: 0,
    });

    const onChange = (event) => {
        setProductAddForm({
            ...productAddForm,
            [event.target.id]: event.target.value
        });
    }

    const confirm = () =>{
        var params = {
            showImgFile: productAddForm.showImgFile,
            name: productAddForm.productName,
            detail: productAddForm.detail,
            price: productAddForm.price,
            count: productAddForm.count,
            categoryId: categoryId,
            subCategoryId: subCategoryId
        }
        ProductService.saveProduct(params);
    }

    return (
        <StyledFormWrapper>
            <ProviderHeader title="상품 등록" 
                onClick={confirm} buttonMessage="상품 등록"
            />
            <Form>
                <CategorySelect 
                    categoryId={categoryId} subCategoryId={subCategoryId}
                    setCategoryId={setCategoryId} setSubCategoryId={setSubCategoryId}
                />
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
        </StyledFormWrapper>
    );
}

export default ProvideProductAddForm;