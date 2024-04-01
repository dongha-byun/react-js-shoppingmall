import React, { useEffect, useState } from "react";
import { frontUrl } from "../../../../../js/axios";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const StyledCenterWrapper = styled.div`
    margin: 0 auto;
`;

export default function InternalPayPage() {
    const [second, setSecond] = useState(5);
    useEffect(() => {
        setInterval(function() {
            setSecond(second-1);
        }, 1000);

        if(second == 0) {
            window.location.href = frontUrl + "/pay/approve";
        }
    }, [second]);

    return(
        <StyledCenterWrapper>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">...Loading</span>
            </Spinner>
            <p>{second} 초 후, 결제가 완료됩니다.</p>
        </StyledCenterWrapper>
    );
}