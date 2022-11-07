import React from "react";
import styled from "styled-components";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../../api/sample/category";

const StyledTableHeader = styled.div`
    margin-bottom: 25px;
`;

function ProvideProductList(){
    const {categoryId} = useParams();
    const category = getCategory(categoryId);
    const rows = [1,2,3,4,5];
    const navigate = useNavigate();

    return (
        // <Tab.Pane key={category.id} eventKey={category.id}>
        <div>
            <StyledTableHeader>
                <h4 className="display-inline">{category.name}</h4>
                <Button className="float-right" variant="outline-primary"
                    onClick={()=>navigate("/provide-manage/add")}
                >상품 등록</Button>
            </StyledTableHeader>
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
                                <td>냄비냄비 요가파이아</td>
                                <td>11,111원</td>
                                <td>주방 &gt; 냄비</td>
                                <td>999 개</td>
                                <td>2건</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        {/* </Tab.Pane> */}
        </div>
    );
    
}

export default ProvideProductList;