import React from "react";
import styledComponents from "styled-components";
import TextInput from "../../../ui/TextInput";

const UserBasicConfigWrapper = styledComponents.div`
    padding: 20px;
`;

function UserBasicConfig(props){

    return (
        <UserBasicConfigWrapper>
            <h3>사용자 기본정보 설정</h3>
            <table>
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <TextInput 
                                value="byunsw4" 
                                readOnly={true} 
                                maxWidth="420px"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>
                            <TextInput 
                                value="변동하" 
                                readOnly={true} 
                                maxWidth="420px"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>휴대폰 번호</th>
                        <td>
                            {/* <TextInput 
                                value="010-1111-2222" 
                                maxWidth="420px"
                            /> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </UserBasicConfigWrapper>
    );
}

export default UserBasicConfig;