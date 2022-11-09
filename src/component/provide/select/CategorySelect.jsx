import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { getCategories, getCategory } from "../../../api/sample/category";

function CategorySelect(props){
    const {categoryId, subCategoryId, setCategoryId, setSubCategoryId} = props;

    const categories = getCategories();
    const changeCategory = (event) => {
        setCategoryId(event.target.value);
        setSubCategoryId(getCategory(event.target.value).subCategories[0].id);
    }

    const changeSubCategory = (event) => {
        setSubCategoryId(event.target.value);
    }

    return (
        <Row className="mb-3">
            <Form.Group as={Col} controlId="categoryId">
                <Form.Select onChange={changeCategory}>
                    <option value="">카테고리</option>
                    {categories.map((category) => {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="subCategoryId">
                <Form.Select value={subCategoryId} onChange={changeSubCategory}>
                    <option value="">세부 카테고리</option>
                    {categoryId && getCategory(categoryId).subCategories.map((sub)=>{
                        return (
                            <option key={sub.id} value={sub.id}>{sub.name}</option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
        </Row>
    );
}

export default CategorySelect;