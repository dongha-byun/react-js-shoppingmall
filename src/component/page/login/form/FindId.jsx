import React, { useState } from "react";
import styledComponents from "styled-components";
import TextButton from "../../../ui/TextButton";
import { Form, Button } from "react-bootstrap";
import CommonModal from "../../../modal/CommonModal";

const FindIdWrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin : 0 auto;
    padding: 0px 50px;
`;

function FindId(){
    const [show, setShow] = useState();
    const handleClose = () => setShow(false);
    const [findIdValue, setFindIdValue] = useState({
        formName: "",
        formTelNo: ""
    });
    const onChangeValue = (event) => {
        setFindIdValue({
            ...findIdValue,
            [event.target.id] : event.target.value
        });
    }
    const findId = () => {
        // post and close modal
        handleClose();
    }

    return(
        <FindIdWrapper>
            <h3>아이디 찾기</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름" onChange={onChangeValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelNo">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="text" placeholder="000-0000-0000" onChange={onChangeValue}/>
                </Form.Group>
            </Form>
            <Button className="float-right" variant="primary" onClick={()=>setShow(true)}>
                아이디 찾기
            </Button>
            
            <CommonModal show={show} handleClose={handleClose} header="아이디 조회"
                footerEvent={findId} footerMessage="확인">
                조회된 아이디는 ****** 입니다.
            </CommonModal>
        </FindIdWrapper>
    );
}

export default FindId;