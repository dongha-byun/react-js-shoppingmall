import React from "react";
import TextButton from "../ui/TextButton";
import TextInput from "../ui/TextInput";
import styledComponents from "styled-components";
import { useState } from "react";

const DeliveryAddressFormWrapper = styledComponents.div``;

const DeliveryRequestFormWrapper = styledComponents.div``;

function DeliveryForm(props){
    
    const {onChangeForm} = props;

    return (
        <div>
            <form>
                <DeliveryAddressFormWrapper>        
                    <TextInput type="text" placeholder="우편번호" maxWidth="150px" name="zipCode" id="zipCode" onChange={onChangeForm}/>
                    <TextButton value="우편번호 검색" width="100px" height="30px"
                        onClick={()=>{
                            alert("우편번호 검색 화면");
                        }}
                    /><br/>
                    <TextInput type="text" placeholder="주소" maxWidth="300px" name="address" id="address" onChange={onChangeForm}/>
                    <TextInput type="text" placeholder="상세주소" maxWidth="100px" name="detailAddress" id="detailAddress" onChange={onChangeForm}/>
                </DeliveryAddressFormWrapper>
                <DeliveryRequestFormWrapper>
                    <TextInput placeholder="요청사항을 입력하세요." name="requestMessage" id="requestMessage" onChange={onChangeForm}/>
                </DeliveryRequestFormWrapper>
            </form>
        </div>
    );
    
}

export default DeliveryForm;