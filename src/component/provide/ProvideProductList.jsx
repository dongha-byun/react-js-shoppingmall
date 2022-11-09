import React, {useState} from "react";
import styled from "styled-components";
import { Button, Table, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategorySelect from "./select/CategorySelect";

const StyledTableHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledListWrapper = styled.div`
    padding: 20px;
`;

function ProvideProductList(){
    
    const rows = [1,2,3,4,5];
    const navigate = useNavigate();
    const [categoryId, setCategoryId] = useState();
    const [subCategoryId, setSubCategoryId] = useState();

    return (
        <StyledListWrapper>
            <StyledTableHeader>
                <h4 className="display-inline">상품 관리</h4>
                <Button className="float-right" variant="outline-primary"
                    onClick={()=>navigate("/provide-manage/product/add/")}
                >상품 등록</Button>
            </StyledTableHeader>
            <Form>
                <CategorySelect categoryId={categoryId} subCategoryId={subCategoryId} setCategoryId={setCategoryId} setSubCategoryId={setSubCategoryId}/>
            </Form>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>상품 대표이미지</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>세부 카테고리</th>
                        <th>재고</th>
                        <th>미응답 문의 수</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row}</td>
                                <td className="text-center">
                                    <img src="/images/pot.jpeg" width={100} alt="" />
                                </td>
                                <td>냄비냄비 요가파이아 - {subCategoryId}</td>
                                <td>11,111원</td>
                                <td>주방 &gt; 냄비</td>
                                <td>999 개</td>
                                <td>2건</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </StyledListWrapper>
    );
    
}

export default ProvideProductList;