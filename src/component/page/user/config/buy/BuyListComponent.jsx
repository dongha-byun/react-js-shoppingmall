import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StyledBuyListComponent = styled.div`
    border: 1px solid black;
    padding: 20px;
    margin-top: 10px;
`;
const StyledTable = styled.table`
    margin: 10px 0;
    width: 100%;
`;
const StyledTh=styled.th`
    width: 100px;
`

function BuyListComponent(props){
    const {buy} = props;
    
    const navigate = useNavigate();

    return(
        <StyledBuyListComponent>
            <StyledTable>
                <tbody>
                    <tr>
                        <StyledTh rowSpan={2}>
                            {buy.buyDate}
                        </StyledTh>
                        <StyledTh rowSpan={2} className={`buy ${buy.deliveryType}`}>
                            {buy.deliveryTypeName}
                        </StyledTh>
                        <td rowSpan={2}>
                            <img src="/images/pot.jpeg" width={"100px"} />
                        </td>
                        <td>냄비냄비 요가 파이아</td>
                        <td rowSpan={2} className="text-center">
                            <Button variant="outline-primary" onClick={()=> {
                                navigate("review-write/"+buy.id);
                            }}>
                                리뷰작성
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>11,111원</td>
                    </tr>
                </tbody>
            </StyledTable>
        </StyledBuyListComponent>
    );
}

export default BuyListComponent;