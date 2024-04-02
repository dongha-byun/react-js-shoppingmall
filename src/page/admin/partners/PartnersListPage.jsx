import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "../../main/user/Header";
import { Table, Pagination, Button} from "react-bootstrap";
import AdminPartnerService from "../../../js/admin/admin";
import { useNavigate } from "react-router-dom";

const StyledPartnerListWrapper = styled.div`
    padding: 20px;
`;

const StyledTh = styled.th`
    text-align: center
`;

const StyledTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;

export default function PartnersListPage() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        AdminPartnerService.findAllPartners().then(result => {
            setPartners(result);
        })
    }, []);

    const partnerApprove = (partnerId) => {
        AdminPartnerService.approve(partnerId).then(result => {
            alert("승인이 완료되었습니다.");
            navigate("/admin/partners");
        });
    }

    const partnerStop = (partnerId) => {
        AdminPartnerService.stop(partnerId).then(result => {
            alert("판매자격을 정지시켰습니다.");
            navigate("/admin/partners");
        });
    }

    return (
        <StyledPartnerListWrapper>
            <Header 
                title="판매업체 목록"
            />

            <Table bordered hover size="sm">
                <colgroup>
                    <col width={350}></col>
                    <col width={200}></col>
                    <col width={200}></col>
                    <col width={250}></col>
                    <col width={300}></col>
                    <col width={200}></col>
                </colgroup>
                <thead>
                    <tr>
                        <StyledTh>업체명</StyledTh>
                        <StyledTh>대표이사명</StyledTh>
                        <StyledTh>대표번호</StyledTh>
                        <StyledTh>사업자번호</StyledTh>
                        <StyledTh>승인요청 날짜</StyledTh>
                        <StyledTh>승인여부</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {partners.map((partner) => {
                        return (
                            <tr key={partner.id}>
                                <StyledTd>{partner.name}</StyledTd>
                                <StyledTd>{partner.ceoName}</StyledTd>
                                <StyledTd>{partner.telNo}</StyledTd>
                                <StyledTd>{partner.corporateRegistrationNumber}</StyledTd>
                                <StyledTd>{partner.createdAt}</StyledTd>
                                <StyledTd>{
                                    partner.approved ? 
                                    <Button variant="outline-danger" size="sm" onClick={() => {
                                        partnerStop(partner.id);
                                    }}>중지</Button> : 
                                    <Button size="sm" onClick={() => {
                                        partnerApprove(partner.id);
                                    }}>승인</Button>
                                }</StyledTd>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <div className="text-center">
                <Pagination>{items}</Pagination>
            </div>
        </StyledPartnerListWrapper>
    );
}