import React from "react";
import TextButton from "../ui/TextButton";
import TextInput from "../ui/TextInput";
import styledComponents from "styled-components";

const DeliveryAddressFormWrapper = styledComponents.div``;

const DeliveryRequestFormWrapper = styledComponents.div``;

function DeliveryForm(props){

    return (
        <div class="display-row">
            <div>
                <input type="checkbox" />
            </div>
            <div>
                <DeliveryAddressFormWrapper>
                    <TextInput type="text" placeholder="우편번호" maxWidth="150px"/>
                    <TextButton value="우편번호 검색" width="100px" height="30px"
                        onClick={()=>{
                            alert("우편번호 검색 화면");
                        }}
                    /><br/>
                    <TextInput type="text" placeholder="주소" maxWidth="300px"/>
                    <TextInput type="text" placeholder="상세주소" maxWidth="100px"/>
                </DeliveryAddressFormWrapper>
                <DeliveryRequestFormWrapper>
                    <TextInput placeholder="요청사항을 입력하세요." />
                </DeliveryRequestFormWrapper>
            </div>
        </div>
    );
    
}

export default DeliveryForm;