import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ProviderHeader from "../../provide/component/ProviderHeader";
import { Table, Pagination} from "react-bootstrap";
import PartnerService from "../../../api/component/partners/partners";

const StyledPartnerListWrapper = styled.div`
    padding: 20px;
`;

export default function PartnersListPage() {
    const [items, setItems] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        PartnerService.findAllPartners().then(result => {
            setPartners(result);
        })
    }, []);

    return (
        <StyledPartnerListWrapper>
            <ProviderHeader 
                title="판매업체 목록"
            />

            <Table bordered hover size="sm">
                <colgroup>
                    <col width={400}></col>
                    <col width={200}></col>
                    <col width={200}></col>
                    <col width={250}></col>
                    <col width={300}></col>
                    <col width={150}></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>업체명</th>
                        <th>대표이사명</th>
                        <th>대표번호</th>
                        <th>사업자번호</th>
                        <th>승인요청 날짜</th>
                        <th>승인여부</th>
                    </tr>
                </thead>
                <tbody>
                    {partners.map((partner) => {
                        return (
                            <tr key={partner.id}>
                                <td>{partner.name}</td>
                                <td>{partner.ceoName}</td>
                                <td>{partner.telNo}</td>
                                <td>{partner.corporateRegistrationNumber}</td>
                                <td>{partner.createdAt}</td>
                                <td>{partner.approved}</td>
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