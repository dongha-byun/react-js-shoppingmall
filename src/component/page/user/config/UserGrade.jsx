import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { numberCommaFormat } from "../../../../util/NumberFormat";
import UserService from "../../../../api/component/user/user";

const StyledUserGradeWrapper = styledComponents.div`
    border-radius: 10px;
    padding: 15px;
    border: 1px solid #cdcdcd;
    margin-bottom: 10px;
    width: 100%;
    display: inline-block;
`;

const StyledGradeIconWrapper = styledComponents.div`
    float: left;
    width: 15%;
`;

const StyledUserWrapper = styledComponents.div`
    float: left;
    display: table;
    width: 75%;
    padding: 15px 0 15px 25px;
`;

const StyledTableRowDiv = styledComponents.div`
    display: table-row;
`;

const LeftDiv = styledComponents.div`
    float: left;
`;

const RightDiv = styledComponents.div`
    float: right;
`;

export default function UserGrade() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        UserService.getGradeInfo().then(result => {
            setUserInfo(result);
        });
    }, []);

    return(
        <StyledUserGradeWrapper>
            <StyledGradeIconWrapper>
                <img src="/images/pot.jpeg" width={160} />
            </StyledGradeIconWrapper>
            <StyledUserWrapper>
                <StyledTableRowDiv>
                    <LeftDiv>
                        <h4>반갑습니다! {userInfo.userName} 님!</h4>
                    </LeftDiv>
                    <RightDiv>(가입일: {userInfo.signUpDate})</RightDiv>
                </StyledTableRowDiv>
                <StyledTableRowDiv>
                    {userInfo.userName} 님의 현재 등급은 <b>{userInfo.currentUserGrade}</b> 입니다.
                </StyledTableRowDiv>
                <StyledTableRowDiv>
                    <b>{userInfo.nextUserGrade}</b> 까지 
                    남은 주문횟수는 <b>{numberCommaFormat(userInfo.remainedOrderCountForNextGrade)}</b>회, 
                    남은 주문금액은 <b>{numberCommaFormat(userInfo.remainedAmountsForNextGrade)}</b>원 입니다.
                </StyledTableRowDiv>
            </StyledUserWrapper>
        </StyledUserGradeWrapper>
    );
}